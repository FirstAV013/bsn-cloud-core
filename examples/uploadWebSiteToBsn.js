"use strict";
/* tslint:disable:no-console no-var-requires */
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
exports.__esModule = true;
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
// mediaPath is the path to examples/testMedia
// To alter this example to use additional media files, this can be changed here to point to a different base directory,
//  or you can add additional media files to this directory.
var mediaPath = isomorphicPath.resolve('./examples/testMedia');
var siteName = 'SimpleTestWebPage';
var htmlSitePath = isomorphicPath.join(mediaPath, 'htmlSites', 'simpleWebPage');
var siteType = main_1.AssetType.HtmlSite;
function progressHandler(progress) {
    var webPageProgress = progress.webPageStatus[0];
    var currentFileStatus = null;
    var currentFileName = '';
    var lastFileStatus = null;
    var lastFileName = '';
    if (webPageProgress.uploadedFiles >= webPageProgress.totalFiles - 1) {
        currentFileStatus = webPageProgress.indexFileUploadProgress.status;
        currentFileName = webPageProgress.indexFileUploadProgress.fileName;
    }
    else if (webPageProgress.uploadedFiles < webPageProgress.totalFiles) {
        currentFileStatus = webPageProgress.assetUploadProgress[webPageProgress.uploadedFiles].status;
        currentFileName = webPageProgress.assetUploadProgress[webPageProgress.uploadedFiles].fileName;
    }
    if (webPageProgress.uploadedFiles >= webPageProgress.totalFiles) {
        lastFileStatus = webPageProgress.indexFileUploadProgress.status;
        lastFileName = webPageProgress.indexFileUploadProgress.fileName;
    }
    else if (webPageProgress.uploadedFiles > 0) {
        lastFileStatus = webPageProgress.assetUploadProgress[webPageProgress.uploadedFiles - 1].status;
        lastFileName = webPageProgress.assetUploadProgress[webPageProgress.uploadedFiles - 1].fileName;
    }
    var statusLine = 'Progress: ' + webPageProgress.uploadedFiles + ' of ' +
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
var indexUploadFile = {
    file: isomorphicPath.join(htmlSitePath, 'index.html'),
    destinationPath: ''
};
var assetUploadFiles = [
    {
        file: isomorphicPath.join(htmlSitePath, 'number1.jpg'),
        // For asset files, destination path is relative to base directory where index file is located
        // In this case, the asset file will be in the same directory as the index file
        destinationPath: ''
    },
];
function uploadLocalWebSite() {
    return __awaiter(this, void 0, void 0, function () {
        var webPageSpec, uploadJob, uploader, checkResult, taskResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    webPageSpec = {
                        siteName: siteName,
                        siteType: siteType,
                        indexUploadFile: indexUploadFile,
                        assetUploadFiles: assetUploadFiles
                    };
                    uploadJob = (0, main_1.cmCreateBsnUploadJob)('TestJob', null, webPageSpec, progressHandler);
                    uploader = (0, main_1.tmGetTaskManager)();
                    return [4 /*yield*/, uploadJob.check()];
                case 1:
                    checkResult = _a.sent();
                    if (checkResult.hasDuplicates) {
                        console.log('There is an existing Html Site with the same name. The existing site will be overwritten');
                    }
                    (0, main_1.cmScheduleBsnUploadJob)(uploadJob, uploader);
                    return [4 /*yield*/, uploader.startNextTask()];
                case 2:
                    taskResult = _a.sent();
                    uploader.removeCompletedTask(taskResult.id);
                    return [2 /*return*/, taskResult];
            }
        });
    });
}
function doUploadLocalWebSite() {
    return __awaiter(this, void 0, void 0, function () {
        var uploadResult, webPageUploadResult, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 8]);
                    return [4 /*yield*/, (0, main_1.bsnGetSession)().activate(credentials.user, credentials.password, credentials.network, credentials.serverUrl)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, uploadLocalWebSite()];
                case 2:
                    uploadResult = _a.sent();
                    webPageUploadResult = uploadResult.webPageUploadResults[0];
                    if (!webPageUploadResult.error) return [3 /*break*/, 3];
                    throw new Error('Upload:' + webPageUploadResult.error.message);
                case 3:
                    console.log('Upload succeeded, status:', webPageUploadResult.status);
                    console.log('Upload time:', ((new Date()).getTime() - uploadResult.startTime.getTime()) / 1000, 'seconds');
                    console.log((0, util_1.inspect)(webPageUploadResult, { depth: null, colors: true }));
                    console.log('');
                    // You may want to delete the uploaded webPage here to run the example multiple times without
                    //  overwriting the same existing webPage
                    // console.log('Deleting web site ...');
                    // console.time('htmlSiteDelete');
                    // await htmlSiteCollection.deleteHtmlSiteAsset(siteName);
                    return [4 /*yield*/, (0, main_1.cmShutdown)()];
                case 4:
                    // You may want to delete the uploaded webPage here to run the example multiple times without
                    //  overwriting the same existing webPage
                    // console.log('Deleting web site ...');
                    // console.time('htmlSiteDelete');
                    // await htmlSiteCollection.deleteHtmlSiteAsset(siteName);
                    _a.sent();
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    error_1 = _a.sent();
                    console.log('Error: ', error_1.message);
                    return [4 /*yield*/, (0, main_1.cmShutdown)()];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
doUploadLocalWebSite();
