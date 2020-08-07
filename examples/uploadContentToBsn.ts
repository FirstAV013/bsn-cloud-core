/* tslint:disable:no-console no-var-requires */

import {inspect} from 'util';
import * as isomorphicPath from 'isomorphic-path';

import {
  BsAssetUploadFileItemSpec,
  bsnGetSession,
  BsUploadJobProgress,
  BsUploadJobResult,
  cmCreateBsnUploadJob,
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

function progressHandler(progress: BsUploadJobProgress) {
  console.log('Progress:', progress.completedItems, 'of', progress.totalItems, 'files completed,',
    (progress.totalProgressFraction * 100).toFixed(2), 'percent complete');
}

async function uploadLocalFile(fullPath: string, bsnVirtualPath: string): Promise<BsUploadJobResult> {
  // There can be multiple files in teh file upload specs. We will only do one here.
  const uploadJobSpecs: BsAssetUploadFileItemSpec[] = [
    {file: fullPath, destinationPath: bsnVirtualPath},
  ];
  const uploader = tmGetTaskManager();
  const uploadJob = cmCreateBsnUploadJob('TestJob', uploadJobSpecs, null, progressHandler);
  await bsnGetSession().activate(credentials.user, credentials.password, credentials.network, credentials.serverUrl);
  const checkResult = await uploadJob.check();
  if (checkResult.hasDuplicates) {
    console.log('There are duplicate file names. Some file names will be changed.');
  }
  uploader.addTask(uploadJob);
  const taskResult = await uploader.startNextTask();
  // Remove the job from the task queue
  uploader.removeCompletedTask(taskResult.id);
  return taskResult as BsUploadJobResult;
}

const fileToUpload = isomorphicPath.resolve('./examples/testMedia/images/Ecuador Flower.jpg')

async function doUploadLocalFile() {
  try {
    const uploadResult = await uploadLocalFile(fileToUpload, '/Shared/');
    const fileResult = uploadResult.fileUploadResults[0];
    // Note: file upload errors are not thrown, but are reported in the UploadJobResult
    if (fileResult.error) {
      console.log('Error during upload:', fileResult.error.message);
    } else {
      console.log('Upload succeeded, status:', fileResult.status);
      console.log('Upload time:', ((new Date()).getTime() - uploadResult.startTime.getTime()) / 1000, 'seconds');
      console.log(inspect(fileResult, {depth: null, colors: true}));
      // Delete file
      console.log('Deleting file ...');
      await bsnGetSession().deleteContentItem(fileResult.assetItem.networkId as number);
      // Shut down worker processes
      await cmShutdown();
    }
  } catch (error) {
    console.log('Error: ', error.message);
    await cmShutdown();
  }
}

doUploadLocalFile();
