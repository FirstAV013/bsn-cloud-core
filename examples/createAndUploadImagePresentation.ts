/* tslint:disable:no-console no-var-requires */

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {isNil} from 'lodash';
import {inspect} from 'util';
import * as isomorphicPath from 'isomorphic-path';

import {
  AssetLocation,
  AssetType,
  bsDaSetDeviceArtifactPath,
  bsDmReducer,
  bsnGetSession,
  CmiPresentationAssetCollection,
  BsPresentationUploadJobResult,
  BsTaskStatus,
  BsUploadJobProgress,
  cmCreateBsnPresentationUploadJob,
  cmGetBsAssetCollection,
  cmShutdown,
  dmAddZone,
  DmBsProjectState,
  dmGetSignState,
  dmGetZoneMediaStateContainer,
  dmNewSign,
  dmPlaylistAppendMediaState,
  fsGetAssetItemFromFile, 
  PlayerModel,
  tmGetTaskManager,
  VideoMode,
  ZoneType,
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

// Presentation publish may need to access the default deviceWebPage, so it needs this path
bsDaSetDeviceArtifactPath(isomorphicPath.resolve('./static/'));

// mediaPath is the path to examples/testMedia
// To alter this example to use additional media files, this can be changed here to point to a different base directory,
//  or you can add additional media files to this directory.
const mediaPath = isomorphicPath.resolve('./examples/testMedia');

let presentationName = 'TestLocalBsnPresentation1';
const bsnContentPath = '/Shared/Incoming/';

const imageAsset1 = fsGetAssetItemFromFile(isomorphicPath.join(mediaPath, 'images/Amazon Moon.jpg'));
const imageAsset2 = fsGetAssetItemFromFile(isomorphicPath.join(mediaPath, 'images/Ecuador Flower.jpg'));

function createLocalPresentation(): DmBsProjectState {
  const store = createStore(bsDmReducer, applyMiddleware(thunk));
  store.dispatch(dmNewSign(presentationName, VideoMode.v1920x1080x60p, PlayerModel.XT1143));
  // Zone
  const action = store.dispatch(dmAddZone('Zone1', ZoneType.VideoOrImages, 'vi1'));
  const videoZoneContainer = dmGetZoneMediaStateContainer(action.payload.id);

  if (!isNil(imageAsset1)) {
    store.dispatch(dmPlaylistAppendMediaState(videoZoneContainer, imageAsset1));
  } else {
    throw new Error('Invalid path to imageAsset1 file.');
  }
  if (!isNil(imageAsset2)) {
    store.dispatch(dmPlaylistAppendMediaState(videoZoneContainer, imageAsset2));
  } else {
    throw new Error('Invalid path to imageAsset2 file.');
  }
  return {bsdm: dmGetSignState(store.getState())};
}

function progressHandler(progress: BsUploadJobProgress) {
  console.log('Progress:', progress.completedItems, 'of', progress.totalItems, 'items completed,',
    (progress.totalProgressFraction * 100).toFixed(2), 'percent complete');
}

async function createAndUploadImagePresentation(): Promise<BsPresentationUploadJobResult> {
  const uploader = tmGetTaskManager();
  const localPresentationState = createLocalPresentation();
  const uploadJob = cmCreateBsnPresentationUploadJob(
    'PresentationUpload', localPresentationState, bsnContentPath, progressHandler);
  // The check function checks to see if file names are duplicated form files with different contents.
  const checkResult = await uploadJob.check();
  if (checkResult.hasDuplicates) {
    console.log('There are duplicate file names in presentation assets. Some file names will be changed.');
  }
  uploader.addTask(uploadJob);
  const taskResult = await uploader.startNextTask();
  // Remove the job from the task queue
  uploader.removeCompletedTask(taskResult.id);
  return taskResult as BsPresentationUploadJobResult;
}

async function doUploadExample() {
  try {
    await bsnGetSession().activate(credentials.user, credentials.password, credentials.network, credentials.serverUrl);
    const bsnPresentationCollection: CmiPresentationAssetCollection =
      cmGetBsAssetCollection(AssetLocation.Bsn, AssetType.Project) as CmiPresentationAssetCollection;
    const uploadResult = await createAndUploadImagePresentation();
    if (uploadResult.status === BsTaskStatus.Failed) {
      console.error(uploadResult.exceptionError);
    } else {
      console.log('Upload time:', ((new Date()).getTime() - uploadResult.startTime.getTime()) / 1000, 'seconds');
      console.log('Presentation uploaded; BSN state:');
      console.log(inspect(uploadResult.presentationStateBsn, {depth: null, colors: true}));
      console.log('');
      console.log('Presentation assetItem:');
      console.log(inspect(uploadResult.presentationAsset!.assetItem, {depth: null, colors: true}));
      console.log('');

      // Delete the presentation
      console.log('Deleting', presentationName);
      await bsnPresentationCollection.deletePresentation(presentationName);

      // Shut down worker processes
      await cmShutdown();
    }
  } catch (error) {
    console.log('Error: ', error.message);
    await cmShutdown();
  }
}

doUploadExample();
