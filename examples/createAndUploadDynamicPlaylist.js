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
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var util_1 = require("util");
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
process.env.FS_METADATA_PATH =
    isomorphicPath.resolve('./fsmetadata.js');
var mediaPath = isomorphicPath.resolve('./examples/testMedia');
var dynamicPlaylistName = 'TestLocalBsnDynamicPlaylist1';
var bsnContentPath = '/Shared/Incoming/';
var imageAsset1 = main_1.fsGetAssetItemFromFile(isomorphicPath.join(mediaPath, 'images/Amazon Moon.jpg'));
var imageAsset2 = main_1.fsGetAssetItemFromFile(isomorphicPath.join(mediaPath, 'images/Ecuador Flower.jpg'));
function createDynamicPlaylist() {
    var store = redux_1.createStore(main_1.plDmReducer, redux_1.applyMiddleware(redux_thunk_1.default));
    store.dispatch(main_1.plDmNewPlaylist(dynamicPlaylistName, true, true, true));
    store.dispatch(main_1.plDmAddDynamicPlaylistContentItem([{
            name: imageAsset1.name,
            type: main_1.MediaType.Image,
            content: imageAsset1,
            validityStartDate: new Date(),
            validityEndDate: new Date(),
        }, {
            name: imageAsset2.name,
            type: main_1.MediaType.Image,
            content: imageAsset2,
        }]));
    return main_1.plDmGetBaseState(store.getState());
}
function progressHandler(progress) {
    console.log('Progress:', progress.completedItems, 'of', progress.totalItems, 'items completed,', (progress.totalProgressFraction * 100).toFixed(2), 'percent complete');
}
function createAndUploadDynamicPlaylist() {
    return __awaiter(this, void 0, void 0, function () {
        var uploader, localDynamicPlaylistState, uploadJob, checkResult, taskResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    uploader = main_1.tmGetTaskManager();
                    localDynamicPlaylistState = createDynamicPlaylist();
                    uploadJob = main_1.cmCreateBsnDynamicPlaylistUploadJob('DynamicPlaylistUpload', localDynamicPlaylistState, bsnContentPath, progressHandler);
                    return [4, uploadJob.check()];
                case 1:
                    checkResult = _a.sent();
                    if (checkResult.hasDuplicates) {
                        console.log('There are duplicate file names in presentation assets. Some file names will be changed.');
                    }
                    uploader.addTask(uploadJob);
                    return [4, uploader.startNextTask()];
                case 2:
                    taskResult = _a.sent();
                    uploader.removeCompletedTask(taskResult.id);
                    return [2, taskResult];
            }
        });
    });
}
function doUploadExample() {
    return __awaiter(this, void 0, void 0, function () {
        var bsnDynamicPlaylistCollection, uploadResult, asset, feedInfo, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 9, , 11]);
                    return [4, main_1.bsnGetSession().activate(credentials.user, credentials.password, credentials.network, credentials.serverUrl)];
                case 1:
                    _a.sent();
                    bsnDynamicPlaylistCollection = main_1.cmGetBsAssetCollection(main_1.AssetLocation.Bsn, main_1.AssetType.BSNDynamicPlaylist);
                    console.log('Updating dynamic playlist collection...');
                    return [4, bsnDynamicPlaylistCollection.update()];
                case 2:
                    _a.sent();
                    console.log('Uploading new dynamic playlist...');
                    return [4, createAndUploadDynamicPlaylist()];
                case 3:
                    uploadResult = _a.sent();
                    if (!(uploadResult.status === main_1.BsTaskStatus.Failed)) return [3, 4];
                    console.error(uploadResult.exceptionError);
                    return [3, 8];
                case 4:
                    console.log('Upload time:', ((new Date()).getTime() - uploadResult.startTime.getTime()) / 1000, 'seconds');
                    console.log('DynamicPlaylist uploaded; BSN state:');
                    console.log(util_1.inspect(uploadResult.dynamicPlaylistStateBsn, { depth: null, colors: true }));
                    console.log('');
                    console.log('DynamicPlaylist assetItem:');
                    console.log(util_1.inspect(uploadResult.dynamicPlaylistAsset.assetItem, { depth: null, colors: true }));
                    console.log('');
                    asset = bsnDynamicPlaylistCollection.getAsset(dynamicPlaylistName);
                    return [4, asset.getFeedInfoWithContent()];
                case 5:
                    feedInfo = _a.sent();
                    console.log('DynamicPlaylist feedInfo:');
                    console.log(util_1.inspect(feedInfo, { depth: null, colors: true }));
                    console.log('');
                    console.log('Deleting', dynamicPlaylistName);
                    return [4, bsnDynamicPlaylistCollection.deleteDynamicPlaylist(dynamicPlaylistName)];
                case 6:
                    _a.sent();
                    return [4, main_1.cmShutdown()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8: return [3, 11];
                case 9:
                    error_1 = _a.sent();
                    console.log('Error: ', error_1.message);
                    return [4, main_1.cmShutdown()];
                case 10:
                    _a.sent();
                    return [3, 11];
                case 11: return [2];
            }
        });
    });
}
doUploadExample();
//# sourceMappingURL=createAndUploadDynamicPlaylist.js.map