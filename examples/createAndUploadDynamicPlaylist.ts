/* tslint:disable:no-console no-var-requires */

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {inspect} from 'util';
import * as isomorphicPath from 'isomorphic-path';

import {
  AssetLocation,
  AssetType,
  BsDynamicPlaylistUploadJobResult,
  bsnGetSession,
  BsTaskStatus,
  BsUploadJobProgress,
  cmCreateBsnDynamicPlaylistUploadJob,
  cmGetBsAssetCollection,
  CmiDynamicPlaylistAsset,
  CmiDynamicPlaylistAssetCollection,
  cmShutdown,
  fsGetAssetItemFromFile,
  MediaType,
  plDmAddDynamicPlaylistContentItem,
  plDmGetBaseState,
  plDmNewPlaylist,
  plDmReducer,
  PlDmState,
  tmGetTaskManager,
} from '../main';

const credentialsPath = isomorphicPath.resolve('./examples/credentials.json');

let credentials;
try {
  credentials = require(credentialsPath);
} catch (error) {
  console.log('There must be a credentials.json file in the /examples directory with valid BSN credentials');
}

// The FS_METADATA_PATH environment variable should point to the location of the fsmetadata.js file.
// This is a standalone javascript file used to carry out lengthy file inspection processes in a separate process.
process.env.FS_METADATA_PATH =
  isomorphicPath.resolve('./fsmetadata.js');

// mediaPath is the path to examples/testMedia
// To alter this example to use additional media files, this can be changed here to point to a different base directory,
//  or you can add additional media files to this directory.
const mediaPath = isomorphicPath.resolve('./examples/testMedia');

const dynamicPlaylistName = 'TestLocalBsnDynamicPlaylist1';
const bsnContentPath = '/Shared/Incoming/';

const imageAsset1 = fsGetAssetItemFromFile(isomorphicPath.join(mediaPath, 'images/Amazon Moon.jpg'));
const imageAsset2 = fsGetAssetItemFromFile(isomorphicPath.join(mediaPath, 'images/Ecuador Flower.jpg'));

function createDynamicPlaylist(): PlDmState {
  const store = createStore(plDmReducer, applyMiddleware(thunk));
  store.dispatch(plDmNewPlaylist(dynamicPlaylistName, true, true, true));
  store.dispatch(plDmAddDynamicPlaylistContentItem([{
    name: imageAsset1!.name,
    type: MediaType.Image,
    content: imageAsset1!,
    validityStartDate: new Date(),
    validityEndDate: new Date(),
  }, {
    name: imageAsset2!.name,
    type: MediaType.Image,
    content: imageAsset2!,
  }]));
  return plDmGetBaseState(store.getState());
}

function progressHandler(progress: BsUploadJobProgress) {
  console.log('Progress:', progress.completedItems, 'of', progress.totalItems, 'items completed,',
    (progress.totalProgressFraction * 100).toFixed(2), 'percent complete');
}

async function createAndUploadDynamicPlaylist(): Promise<BsDynamicPlaylistUploadJobResult> {
  const uploader = tmGetTaskManager();
  const localDynamicPlaylistState = createDynamicPlaylist();
  const uploadJob = cmCreateBsnDynamicPlaylistUploadJob(
    'DynamicPlaylistUpload', localDynamicPlaylistState, bsnContentPath, progressHandler);
  // The check function checks to see if file names are duplicated form files with different contents.
  const checkResult = await uploadJob.check();
  if (checkResult.hasDuplicates) {
    console.log('There are duplicate file names in presentation assets. Some file names will be changed.');
  }
  uploader.addTask(uploadJob);
  const taskResult = await uploader.startNextTask();
  // Remove the job from the task queue
  uploader.removeCompletedTask(taskResult.id);
  return taskResult as BsDynamicPlaylistUploadJobResult;
}

async function doUploadExample() {
  try {
    await bsnGetSession().activate(credentials.user, credentials.password, credentials.network, credentials.serverUrl);
    const bsnDynamicPlaylistCollection =
      cmGetBsAssetCollection(AssetLocation.Bsn, AssetType.BSNDynamicPlaylist) as CmiDynamicPlaylistAssetCollection;
    // First update the collection with information about any existing dynamic playlists.
    // This is not necessary before upload, but we will do it to make sure we have an updated collection here.
    console.log('Updating dynamic playlist collection...');
    await bsnDynamicPlaylistCollection.update();

    console.log('Uploading new dynamic playlist...');
    const uploadResult = await createAndUploadDynamicPlaylist();
    if (uploadResult.status === BsTaskStatus.Failed) {
      console.error(uploadResult.exceptionError);
    } else {
      console.log('Upload time:', ((new Date()).getTime() - uploadResult.startTime.getTime()) / 1000, 'seconds');
      console.log('DynamicPlaylist uploaded; BSN state:');
      console.log(inspect(uploadResult.dynamicPlaylistStateBsn, {depth: null, colors: true}));
      console.log('');
      console.log('DynamicPlaylist assetItem:');
      console.log(inspect(uploadResult.dynamicPlaylistAsset.assetItem, {depth: null, colors: true}));
      console.log('');

      // The assetItem returned from the upload has basic information in it.
      // To get more information about the dynamic playlist content, we can get the CmiAsset object for the
      //  dynamic playlist from the collection, which now contains the newly uploaded dynamic playlist.
      // From that we will retrieve the BsnDynamicPlaylistProperties object from BSN.
      const asset = bsnDynamicPlaylistCollection.getAsset(dynamicPlaylistName) as CmiDynamicPlaylistAsset;
      const feedInfo = await asset.getFeedInfoWithContent();
      console.log('DynamicPlaylist feedInfo:');
      console.log(inspect(feedInfo, {depth: null, colors: true}));
      console.log('');

      // Delete the dynamic playlist
      console.log('Deleting', dynamicPlaylistName);
      await bsnDynamicPlaylistCollection.deleteDynamicPlaylist(dynamicPlaylistName);

      // Shut down worker processes
      await cmShutdown();
    }
  } catch (error) {
    console.log('Error: ', error.message);
    await cmShutdown();
  }
}

doUploadExample();
