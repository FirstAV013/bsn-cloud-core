/* tslint:disable:no-console no-var-requires */

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
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
  DeviceWebPageDisplay,
  dmAddHostedHtmlSite,
  dmAddZone,
  DmBsProjectState,
  dmCreateHtmlContentItem,
  dmGetSignState,
  dmGetZoneMediaStateContainer,
  dmNewSign,
  dmPlaylistAppendMediaState,
  dmSetPresentationWebPage,
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

const htmlAssetPath = isomorphicPath.join(mediaPath, 'htmlSites/simpleWebPage/index.html');
const htmlAsset1 = fsGetAssetItemFromFile(htmlAssetPath);
const testHtmlSiteName = 'TestUploadHtmlSiteForPresentation';
let useHtmlSite = false;

function progressHandler(progress: BsUploadJobProgress) {
  console.log('Progress:', progress.completedItems, 'of', progress.totalItems, 'items completed,',
    (progress.totalProgressFraction * 100).toFixed(2), 'percent complete');
}

function createLocalHtmlPresentation(): DmBsProjectState {
  useHtmlSite = true;
  presentationName = 'TestLocalHtmlBsnPresentation1';
  const store = createStore(bsDmReducer, applyMiddleware(thunk));
  store.dispatch(dmNewSign(presentationName, VideoMode.v1920x1080x60p, PlayerModel.XT1143));
  // Zone
  const action = store.dispatch(dmAddZone('Zone1', ZoneType.VideoOrImages, 'vi1'));
  const videoZoneContainer = dmGetZoneMediaStateContainer(action.payload.id);
  let htmlSiteAction = store.dispatch(dmAddHostedHtmlSite(testHtmlSiteName, htmlAsset1, 'first'));
  let htmlStateContentItem = dmCreateHtmlContentItem('HTML Site State 1', htmlSiteAction.payload.id);
  store.dispatch(dmPlaylistAppendMediaState(videoZoneContainer, htmlStateContentItem));
  htmlSiteAction = store.dispatch(dmAddHostedHtmlSite(testHtmlSiteName, htmlAsset1, 'second'));
  htmlStateContentItem = dmCreateHtmlContentItem('HTML Site State 2', htmlSiteAction.payload.id);
  store.dispatch(dmPlaylistAppendMediaState(videoZoneContainer, htmlStateContentItem));
  // Set the standard presentation web page for this presentation. This is a web page served out of the player
  //  on port 8008.
  store.dispatch(dmSetPresentationWebPage(DeviceWebPageDisplay.Standard));
  return {bsdm: dmGetSignState(store.getState())};
}

async function createAndUploadImagePresentation(): Promise<BsPresentationUploadJobResult> {
  const uploader = tmGetTaskManager();
  const localPresentationState = createLocalHtmlPresentation();
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

      // Delete the htmlSite
      console.log('Deleting HTML Site', testHtmlSiteName);
      await bsnGetSession().deleteHtmlSite(testHtmlSiteName);

      // Shut down worker processes
      await cmShutdown();
    }
  } catch (error) {
    console.log('Error: ', error.message);
    await cmShutdown();
  }
}

doUploadExample();
