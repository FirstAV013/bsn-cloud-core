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
  BsPresentationAssetCollection,
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

let credentials;
try {
  credentials = require(process.env.PWD + '/examples/credentials.json');
} catch (error) {
  console.log('There must be a credentials.json file in the /examples directory with valid BSN credentials');
}

// The FS_METADATA_PATH environment variable should point to the location of the fsmetadata.js file.
// This is a standalone javascript file used to carry out lengthy file inspection processes in a separate process.
process.env.FS_METADATA_PATH =
  isomorphicPath.resolve('./fsmetadata.js');

// Presentation publish may need to access the default deviceWebPage, so it needs this path
bsDaSetDeviceArtifactPath(isomorphicPath.resolve('./static/'));

// mediaPath is the path to the root folder for content test files.
// Here, it is set to a directory named 'bs-test-media' at in the same parent directory as the bsn-cloud-core project.
// This can be changed here to point to a different base directory.
const mediaPath = isomorphicPath.resolve('../bs-test-media');

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
    const bsnPresentationCollection: BsPresentationAssetCollection =
      cmGetBsAssetCollection(AssetLocation.Bsn, AssetType.Project) as BsPresentationAssetCollection;
    const uploadResult = await createAndUploadImagePresentation();
    if (uploadResult.status === BsTaskStatus.Failed) {
      console.error(uploadResult.exceptionError);
    } else {
      console.log('Upload time:', ((new Date()).getTime() - uploadResult.startTime.getTime()) / 1000, 'seconds');
      console.log('Presentation uploaded; BSN state:');
      console.log(inspect(uploadResult.presentationStateBsn, {depth: null, colors: true}));
      console.log('');
      console.log('Presentation assetItem:');
      console.log(inspect(uploadResult.presentationAsset.rawAssetItem, {depth: null, colors: true}));
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
