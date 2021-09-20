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
exports.doUploadLocalFile = void 0;
var util_1 = require("util");
var isomorphicPath = require("isomorphic-path");
var main_1 = require("../main");
var credentialsPath = isomorphicPath.resolve("./examples/credentials.json");
var credentials;
try {
    credentials = require(credentialsPath);
}
catch (error) {
    console.log("There must be a credentials.json file in the /examples directory with valid BSN credentials");
}
function progressHandler(progress) {
    console.log("Progress:", progress.completedItems, "of", progress.totalItems, "files completed,", (progress.totalProgressFraction * 100).toFixed(2), "percent complete");
}
function uploadLocalFile(fullPath, bsnVirtualPath) {
    return __awaiter(this, void 0, void 0, function () {
        var uploadJobSpecs, uploader, uploadJob, checkResult, taskResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    uploadJobSpecs = [
                        { file: fullPath, destinationPath: bsnVirtualPath },
                    ];
                    uploader = (0, main_1.tmGetTaskManager)();
                    uploadJob = (0, main_1.cmCreateBsnUploadJob)("TestJob", uploadJobSpecs, null, progressHandler);
                    return [4 /*yield*/, (0, main_1.bsnGetSession)().activate(credentials.user, credentials.password, credentials.network, credentials.serverUrl)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, uploadJob.check()];
                case 2:
                    checkResult = _a.sent();
                    if (checkResult.hasDuplicates) {
                        console.log("There are duplicate file names. Some file names will be changed.");
                    }
                    uploader.addTask(uploadJob);
                    return [4 /*yield*/, uploader.startNextTask()];
                case 3:
                    taskResult = _a.sent();
                    // Remove the job from the task queue
                    uploader.removeCompletedTask(taskResult.id);
                    return [2 /*return*/, taskResult];
            }
        });
    });
}
function doUploadLocalFile(fileTargetLocation, fileToUploadReq) {
    return __awaiter(this, void 0, void 0, function () {
        var fileToUpload, uploadResult, fileResult, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fileToUpload = isomorphicPath.resolve(
                    //./examples/testMedia/images/moon.jpg
                    "" + fileToUploadReq);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 8]);
                    return [4 /*yield*/, uploadLocalFile(fileToUpload, "" + fileTargetLocation)];
                case 2:
                    uploadResult = _a.sent();
                    fileResult = uploadResult.fileUploadResults[0];
                    if (!fileResult.error) return [3 /*break*/, 3];
                    console.log("Error during upload:", fileResult.error.message);
                    return [3 /*break*/, 5];
                case 3:
                    console.log("Upload succeeded, status:", fileResult.status);
                    console.log("Upload time:", (new Date().getTime() - uploadResult.startTime.getTime()) /
                        1000, "seconds");
                    console.log((0, util_1.inspect)(fileResult, { depth: null, colors: true }));
                    // Delete file
                    //console.log("Deleting file ...");
                    // await bsnGetSession().deleteContentItem(
                    //     fileResult.assetItem!.networkId as number
                    // );
                    // // Shut down worker processes
                    return [4 /*yield*/, (0, main_1.cmShutdown)()];
                case 4:
                    // Delete file
                    //console.log("Deleting file ...");
                    // await bsnGetSession().deleteContentItem(
                    //     fileResult.assetItem!.networkId as number
                    // );
                    // // Shut down worker processes
                    _a.sent();
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    error_1 = _a.sent();
                    console.log("Error: ", error_1.message);
                    return [4 /*yield*/, (0, main_1.cmShutdown)()];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.doUploadLocalFile = doUploadLocalFile;
