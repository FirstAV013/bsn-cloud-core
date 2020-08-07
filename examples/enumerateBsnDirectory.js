"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var lodash_1 = require("lodash");
var isomorphicPath = require("isomorphic-path");
var main_1 = require("../main");
var credentialsPath = isomorphicPath.resolve('./examples/credentials.json');
var credentials;
try {
    credentials = require(credentialsPath);
}
catch (error) {
    console.log('There must be a credentials.json file in the /examples directory with valid BSN credentials');
}
function doUploadExample() {
    return __awaiter(this, void 0, void 0, function () {
        var assetCollectionAll, count, list, asset, assetCollectionImages, asset, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    console.log('Logging In ...');
                    return [4, main_1.bsnGetSession().activate(credentials.user, credentials.password, credentials.network, credentials.serverUrl)];
                case 1:
                    _a.sent();
                    assetCollectionAll = main_1.cmGetBsAssetCollection(main_1.AssetLocation.Bsn, main_1.AssetType.Content, 'Shared/Images', { folders: true });
                    console.log("Getting content item count for " + assetCollectionAll.currentDirectory + " ...");
                    return [4, assetCollectionAll.getBackendCount()];
                case 2:
                    count = _a.sent();
                    console.log('Content item count:', count);
                    console.log("Updating collection for " + assetCollectionAll.currentDirectory + " ...");
                    return [4, assetCollectionAll.update()];
                case 3:
                    list = _a.sent();
                    console.log('List of files:');
                    console.log(util_1.inspect(list, { depth: null, colors: true }));
                    console.log('');
                    if (list.length > 0) {
                        asset = assetCollectionAll.getAsset(list[0]);
                        if (!lodash_1.isNil(asset)) {
                            console.log('AssetItem for first asset:');
                            console.log(util_1.inspect(asset.assetItem, { depth: null, colors: true }));
                        }
                        else {
                            console.log('No assets in directory');
                        }
                        console.log('');
                    }
                    assetCollectionImages = main_1.cmGetBsAssetCollection(main_1.AssetLocation.Bsn, main_1.AssetType.Content, 'Shared/Mixed', { mediaFilters: [main_1.MediaType.Image] });
                    console.log("Updating image file collection for " + assetCollectionImages.currentDirectory + " ...");
                    return [4, assetCollectionImages.update()];
                case 4:
                    list = _a.sent();
                    console.log('List of image files:');
                    console.log(util_1.inspect(list, { depth: null, colors: true }));
                    console.log('');
                    if (list.length > 0) {
                        asset = assetCollectionAll.getAsset(list[0]);
                        if (!lodash_1.isNil(asset)) {
                            console.log('AssetItem for first image asset:');
                            console.log(util_1.inspect(asset.assetItem, { depth: null, colors: true }));
                        }
                        else {
                            console.log('No image assets in directory');
                        }
                        console.log('');
                    }
                    return [3, 6];
                case 5:
                    error_1 = _a.sent();
                    console.log('Error: ', error_1.message);
                    return [3, 6];
                case 6: return [2];
            }
        });
    });
}
doUploadExample();
//# sourceMappingURL=enumerateBsnDirectory.js.map