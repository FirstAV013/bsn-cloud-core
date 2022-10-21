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
import {
  BsAssetItem
} from '../bscore';

// Load credentials.
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

// Presentation name.
// TODO: pass this to functions instead of having this a top-level variable.
const presentationName = 'CharlieSign';

const bsnContentPath = '/Shared/Incoming/';

function createLocalPresentation(images: string[]): DmBsProjectState {

  //
  const store = createStore(bsDmReducer, applyMiddleware(thunk));
  //  store.dispatch(dmNewSign(presentationName, VideoMode.v1920x1080x60p, PlayerModel.XT1143));
  store.dispatch(dmNewSign(presentationName, VideoMode.v1920x1080x60p, PlayerModel.HD1024));

  // Zone
  const action = store.dispatch(dmAddZone('Zone1', ZoneType.VideoOrImages, 'vi1'));
  const videoZoneContainer = dmGetZoneMediaStateContainer(action.payload.id);

  // Transform image paths to image assets.
  var imageAssets:BsAssetItem[] = [];
  images.forEach(function(item, index) {
    console.log('Item: ', item);
    let itemPath = isomorphicPath.resolve(item);
    let imageAsset = fsGetAssetItemFromFile(itemPath);
    if (isNil(imageAsset)) {
      throw new Error('Invalid path to image file: ' + item);
    }
    imageAssets.push(imageAsset);
  });

  // Store the image assets.
  imageAssets.forEach(function(item, index) {
    store.dispatch(dmPlaylistAppendMediaState(videoZoneContainer, item));
  });

  return {bsdm: dmGetSignState(store.getState())};
}

function progressHandler(progress: BsUploadJobProgress) {
  console.log('Progress:', progress.completedItems, 'of', progress.totalItems, 'items completed,',
    (progress.totalProgressFraction * 100).toFixed(2), 'percent complete');
}

async function createAndUploadImagePresentation(images: string[]): Promise<BsPresentationUploadJobResult> {
  const uploader = tmGetTaskManager();
  const localPresentationState = createLocalPresentation(images);
  //process.exit(0);
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

async function doUploadExample(images: string[]) {

  try {
    // Authenticate.
    await bsnGetSession().activate(credentials.user, credentials.password, credentials.network, credentials.serverUrl);

    const bsnPresentationCollection: CmiPresentationAssetCollection =
      cmGetBsAssetCollection(AssetLocation.Bsn, AssetType.Project) as CmiPresentationAssetCollection;
    return;  // TO REMOVE

    // Create and upload the image presentation.
    const uploadResult = await createAndUploadImagePresentation(images);

    // Handle failure and success cases.
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
      console.log('NOT Deleting', presentationName);
      //await bsnPresentationCollection.deletePresentation(presentationName);

      // Shut down worker processes
      await cmShutdown();
    }
  } catch (error) {
    console.log('Error: ', error.message);
    await cmShutdown();
  }
}

//doUploadExample();

console.log('PlayerModel: ', PlayerModel);
console.log('');



// Parse command line arguments.
// TODO
const usage = 'path/to/image [path/to/image2] [...]'
const args = process.argv.slice(2);
console.log('argv: ', args);

if (args.length == 0) {
  console.log("Usage: ", usage);
  process.exit(1);
} else {
  doUploadExample(args);
  console.log('Done!');
}


