/* tslint:disable:no-console no-var-requires */

import {inspect} from 'util';
import {isNil} from 'lodash';
import * as isomorphicPath from 'isomorphic-path';

import {
  AssetLocation,
  AssetType,
  bsnGetSession,
  cmGetBsAssetCollection,
  MediaType,
} from '../main';

const credentialsPath = isomorphicPath.resolve('./examples/credentials.json');

let credentials;
try {
  credentials = require(credentialsPath);
} catch (error) {
  console.log('There must be a credentials.json file in the /examples directory with valid BSN credentials');
}

// Note that these examples will show results only if run against a BSN network, with a Content Cloud subscription,
//  that has appropriate content files uploaded to directories names as in the example.
// You can substitute different directory names to run against your own network if it has a different structure.

async function doUploadExample() {
  try {
    console.log('Logging In ...');
    await bsnGetSession().activate(credentials.user, credentials.password, credentials.network, credentials.serverUrl);

    // The first part of the example returns all files and folders that are found in the given BSN directory.
    // Folders are returned along with files because the enumeration options parameters
    //  sets the 'folders' property to true.
    // If this enumeration option is not set to true, folders will not be included in the collection.
    const assetCollectionAll =
      cmGetBsAssetCollection(AssetLocation.Bsn, AssetType.Content, 'Shared/Images', {folders: true});
    console.log(`Getting content item count for ${assetCollectionAll.currentDirectory} ...`);
    const count = await assetCollectionAll.getBackendCount();
    console.log('Content item count:', count);

    console.log(`Updating collection for ${assetCollectionAll.currentDirectory} ...`);
    let list = await assetCollectionAll.update();
    console.log('List of files:');
    console.log(inspect(list, {depth: null, colors: true}));
    console.log('');

    // Get BsAssetItem data for first asset in the list
    if (list.length > 0) {
      const asset = assetCollectionAll.getAsset(list[0]);
      if (!isNil(asset)) {
        console.log('AssetItem for first asset:');
        console.log(inspect(asset.assetItem, {depth: null, colors: true}));
      } else {
        console.log('No assets in directory');
      }
      console.log('');
    }

    // The next part of the example illustrates creating a filtered AssetCollection
    // The enumerationOptions parameter is set to include only Content files of MediaType.Image => image files
    const assetCollectionImages =
      cmGetBsAssetCollection(AssetLocation.Bsn, AssetType.Content, 'Shared/Mixed', {mediaFilters: [MediaType.Image]});
    console.log(`Updating image file collection for ${assetCollectionImages.currentDirectory} ...`);
    list = await assetCollectionImages.update();
    console.log('List of image files:');
    console.log(inspect(list, {depth: null, colors: true}));
    console.log('');

    // Get BsAssetItem data for first asset in the list
    if (list.length > 0) {
      const asset = assetCollectionAll.getAsset(list[0]);
      if (!isNil(asset)) {
        console.log('AssetItem for first image asset:');
        console.log(inspect(asset.assetItem, {depth: null, colors: true}));
      } else {
        console.log('No image assets in directory');
      }
      console.log('');
    }
  } catch (error) {
    console.log('Error: ', error.message);
  }
}

doUploadExample();
