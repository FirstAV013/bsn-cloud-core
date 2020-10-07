/* tslint:disable:no-console no-var-requires */

import {inspect} from 'util';
import * as isomorphicPath from 'isomorphic-path';

import {
  AssetType,
  BsAssetUploadFileItemSpec,
  BsAssetUploadWebPageSessionSpec,
  bsnGetSession,
  BsUploadItemStatus,
  BsUploadJobProgress,
  BsUploadJobResult,
  cmCreateBsnUploadJob,
  cmScheduleBsnUploadJob,
  cmShutdown,
  tmGetTaskManager,
} from '../main';

const credentialsPath = isomorphicPath.resolve('./examples/credentials.json');

let credentials;
try {
  credentials = require(credentialsPath);
} catch (error) {
  console.log('There must be a credentials.json file in the /examples directory with valid BSN credentials');
}

// mediaPath is the path to examples/testMedia
// To alter this example to use additional media files, this can be changed here to point to a different base directory,
//  or you can add additional media files to this directory.
const mediaPath = isomorphicPath.resolve('./examples/testMedia');

const siteName = 'SimpleTestWebPage';
const htmlSitePath = isomorphicPath.join(mediaPath, 'htmlSites', 'simpleWebPage');
const siteType = AssetType.HtmlSite;

function progressHandler(progress: BsUploadJobProgress) {
  const webPageProgress = progress.webPageStatus[0];
  let currentFileStatus: BsUploadItemStatus | null = null;
  let currentFileName = '';
  let lastFileStatus: BsUploadItemStatus | null = null;
  let lastFileName = '';
  if (webPageProgress.uploadedFiles >= webPageProgress.totalFiles - 1) {
    currentFileStatus = webPageProgress.indexFileUploadProgress.status;
    currentFileName = webPageProgress.indexFileUploadProgress.fileName;
  } else if (webPageProgress.uploadedFiles < webPageProgress.totalFiles) {
    currentFileStatus = webPageProgress.assetUploadProgress[webPageProgress.uploadedFiles].status;
    currentFileName = webPageProgress.assetUploadProgress[webPageProgress.uploadedFiles].fileName;
  }
  if (webPageProgress.uploadedFiles >= webPageProgress.totalFiles) {
    lastFileStatus = webPageProgress.indexFileUploadProgress.status;
    lastFileName = webPageProgress.indexFileUploadProgress.fileName;
  } else if (webPageProgress.uploadedFiles > 0) {
    lastFileStatus = webPageProgress.assetUploadProgress[webPageProgress.uploadedFiles - 1].status;
    lastFileName = webPageProgress.assetUploadProgress[webPageProgress.uploadedFiles - 1].fileName;
  }
  let statusLine = 'Progress: ' + webPageProgress.uploadedFiles + ' of ' +
    webPageProgress.totalFiles + ' files completed, ' +
    (progress.totalProgressFraction * 100).toFixed(2) + ' percent complete, job status: ' + progress.status;
  if (currentFileStatus) {
    statusLine = statusLine + ', ' + currentFileName + ' status: ' + currentFileStatus;
  }
  if (lastFileStatus) {
    statusLine = statusLine + ', (last file: ' + lastFileName + ', file status: ' + lastFileStatus + ')';
  }
  console.log(statusLine);
}

const indexUploadFile: BsAssetUploadFileItemSpec = {
  file: isomorphicPath.join(htmlSitePath, 'index.html'),
  destinationPath: '',
}
const assetUploadFiles: BsAssetUploadFileItemSpec[] = [
  {
    file: isomorphicPath.join(htmlSitePath, 'number1.jpg'),
    // For asset files, destination path is relative to base directory where index file is located
    // In this case, the asset file will be in the same directory as the index file
    destinationPath: '',
  },
];

async function uploadLocalWebSite(): Promise<BsUploadJobResult> {
  const webPageSpec: BsAssetUploadWebPageSessionSpec = {
    siteName,
    siteType,
    indexUploadFile,
    assetUploadFiles,
  };
  const uploadJob = cmCreateBsnUploadJob('TestJob', null, webPageSpec, progressHandler);
  const uploader = tmGetTaskManager();

  const checkResult = await uploadJob.check()
  if (checkResult.hasDuplicates) {
    console.log('There is an existing Html Site with the same name. The existing site will be overwritten');
  }
  cmScheduleBsnUploadJob(uploadJob, uploader);

  const taskResult = await uploader.startNextTask();
  uploader.removeCompletedTask(taskResult.id);
  return taskResult as BsUploadJobResult;
}

async function doUploadLocalWebSite() {
  try {
    await bsnGetSession().activate(credentials.user, credentials.password, credentials.network, credentials.serverUrl);
    const uploadResult = await uploadLocalWebSite();
    const webPageUploadResult = uploadResult.webPageUploadResults[0];
    // Note: file upload errors are not thrown, but are reported in the UploadJobResult
    if (webPageUploadResult.error) {
      throw new Error('Upload:' + webPageUploadResult.error.message);
    } else {
      console.log('Upload succeeded, status:', webPageUploadResult.status);
      console.log('Upload time:', ((new Date()).getTime() - uploadResult.startTime.getTime()) / 1000, 'seconds');
      console.log(inspect(webPageUploadResult, {depth: null, colors: true}));
      console.log('');

      // You may want to delete the uploaded webPage here to run the example multiple times without
      //  overwriting the same existing webPage
      // console.log('Deleting web site ...');
      // console.time('htmlSiteDelete');
      // await htmlSiteCollection.deleteHtmlSiteAsset(siteName);
      await cmShutdown();
    }
  } catch (error) {
    console.log('Error: ', error.message);
    await cmShutdown();
  }
}

doUploadLocalWebSite();
