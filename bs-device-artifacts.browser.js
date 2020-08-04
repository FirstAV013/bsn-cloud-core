(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "axios"], factory);
	else if(typeof exports === 'object')
		exports["bs-device-artifacts"] = factory(require("lodash"), require("axios"));
	else
		root["bs-device-artifacts"] = factory(root["lodash"], root["axios"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsDeviceArtifactsError = exports.BsDeviceArtifactsErrorType = void 0;
var BsDeviceArtifactsErrorType;
(function (BsDeviceArtifactsErrorType) {
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["unknownError"] = 0] = "unknownError";
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["unexpectedError"] = 1] = "unexpectedError";
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["artifactsNotFoundError"] = 2] = "artifactsNotFoundError";
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["invalidParameterError"] = 3] = "invalidParameterError";
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["unauthorizedError"] = 4] = "unauthorizedError";
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["networkError"] = 5] = "networkError";
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["requestError"] = 6] = "requestError";
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["clientError"] = 7] = "clientError";
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["serverError"] = 8] = "serverError";
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["fileNotFoundError"] = 9] = "fileNotFoundError";
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["fileReadError"] = 10] = "fileReadError";
    BsDeviceArtifactsErrorType[BsDeviceArtifactsErrorType["methodNotAvailableError"] = 11] = "methodNotAvailableError";
})(BsDeviceArtifactsErrorType = exports.BsDeviceArtifactsErrorType || (exports.BsDeviceArtifactsErrorType = {}));
const bsDeviceArtifactsErrorMessage = {
    [BsDeviceArtifactsErrorType.unknownError]: 'unknown error',
    [BsDeviceArtifactsErrorType.unexpectedError]: 'unexpected error',
    [BsDeviceArtifactsErrorType.artifactsNotFoundError]: 'artifacts not found',
    [BsDeviceArtifactsErrorType.invalidParameterError]: 'invalid parameters',
    [BsDeviceArtifactsErrorType.unauthorizedError]: 'unauthorized',
    [BsDeviceArtifactsErrorType.networkError]: 'fs error',
    [BsDeviceArtifactsErrorType.networkError]: 'network error',
    [BsDeviceArtifactsErrorType.clientError]: 'client error',
    [BsDeviceArtifactsErrorType.serverError]: 'Server error',
    [BsDeviceArtifactsErrorType.fileNotFoundError]: 'the requested file could not be found',
    [BsDeviceArtifactsErrorType.fileReadError]: 'file read error',
    [BsDeviceArtifactsErrorType.methodNotAvailableError]: 'method not available for deployment mode',
};
class BsDeviceArtifactsError extends Error {
    constructor(type, reason) {
        super();
        this.name = 'BsDeviceArtifactsError';
        this.type = type;
        if (reason) {
            this.message = bsDeviceArtifactsErrorMessage[type] + ': ' + reason;
        }
        else {
            this.message = bsDeviceArtifactsErrorMessage[type];
        }
        Object.setPrototypeOf(this, BsDeviceArtifactsError.prototype);
    }
}
exports.BsDeviceArtifactsError = BsDeviceArtifactsError;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.bsDaGetPartnerProducts = exports.bsDaFetchPartnerProducts = exports.bsDaGetPartnerProductsAsJson = exports.bsDaGetFwManifestOptionsByPlayerFamily = exports.bsDaFetchFwManifest = exports.bsDaFetchFileAsArrayBuffer = exports.bsDaGetStaticFileAbsolutePath = exports.bsDaCopyStaticFile = exports.bsDaGetStaticFileSpec = exports.bsDaGetStaticFileAsObject = exports.bsDaGetStaticFileAsBlob = exports.bsDaGetStaticFileAsArrayBuffer = exports.bsDaGetStaticFileAsStream = exports.bsDaGetStaticFileAsJson = exports.bsDaSetFwManifestUrl = exports.bsDaSetDeviceArtifactPath = void 0;
const axios_1 = __webpack_require__(9);
const lodash_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(8);
const bsDeviceArtifactsError_1 = __webpack_require__(0);
let BS_DEVICE_ARTIFACT_PATH = '';
function bsDaSetDeviceArtifactPath(path) {
    if (lodash_1.isString(path)) {
        return BS_DEVICE_ARTIFACT_PATH = path;
    }
}
exports.bsDaSetDeviceArtifactPath = bsDaSetDeviceArtifactPath;
function getBsArtifactsRoot() {
    if (process.env.BS_DEVICE_ARTIFACT_PATH) {
        return process.env.BS_DEVICE_ARTIFACT_PATH + '/';
    }
    else {
        return BS_DEVICE_ARTIFACT_PATH;
    }
}
function validateGetStaticFileOptions(options) {
    const optionErrors = [];
    if (lodash_1.isObject(options)) {
        if (options.hasOwnProperty('onFileProgress') && !lodash_1.isFunction(options.onFileProgress)) {
            const errorMessage = `Invalid options.onFileProgress must me of type object: ${options.onFileProgress}`;
            const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.invalidParameterError, errorMessage);
            optionErrors.push(error);
        }
    }
    return optionErrors;
}
let DEFAULT_FW_MANIFEST_URL = 'https://bsn-staging.s3.amazonaws.com/public/FirmwareManifest.json';
function bsDaSetFwManifestUrl(url) {
    if (lodash_1.isString(url)) {
        return DEFAULT_FW_MANIFEST_URL = url;
    }
}
exports.bsDaSetFwManifestUrl = bsDaSetFwManifestUrl;
function bsDaGetFwManifestUrl() {
    if (process.env.DEFAULT_FW_MANIFEST_URL) {
        return process.env.DEFAULT_FW_MANIFEST_URL;
    }
    else {
        return DEFAULT_FW_MANIFEST_URL;
    }
}
function bsDaGetStaticFileAsJson(path, options) {
    const optionErrors = validateGetStaticFileOptions(options);
    if (optionErrors.length > 0) {
        const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.invalidParameterError);
        error.response = JSON.stringify(optionErrors);
        return Promise.reject(error);
    }
    const url = getBsArtifactsRoot() + path;
    const mergedOptions = {
        responseType: 'json',
    };
    if (lodash_1.isObject(options) && lodash_1.isFunction(options.onFileProgress)) {
        mergedOptions.onDownloadProgress = utils_1.getAxiosProgressEventHandler(path, options.onFileProgress);
    }
    return axios_1.default.get(url, mergedOptions)
        .then((resp) => utils_1.handleAxiosResponse(resp))
        .then((resp) => resp.data);
}
exports.bsDaGetStaticFileAsJson = bsDaGetStaticFileAsJson;
function bsDaGetStaticFileAsStream(path, options) {
    return Promise.reject(new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.methodNotAvailableError));
}
exports.bsDaGetStaticFileAsStream = bsDaGetStaticFileAsStream;
function bsDaGetStaticFileAsArrayBuffer(path, options) {
    const optionErrors = validateGetStaticFileOptions(options);
    if (optionErrors.length > 0) {
        const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.invalidParameterError);
        error.response = JSON.stringify(optionErrors);
        return Promise.reject(error);
    }
    const url = getBsArtifactsRoot() + path;
    const mergedOptions = {
        responseType: 'arraybuffer',
    };
    if (lodash_1.isObject(options) && lodash_1.isFunction(options.onFileProgress)) {
        mergedOptions.onDownloadProgress = utils_1.getAxiosProgressEventHandler(path, options.onFileProgress);
    }
    return axios_1.default.get(url, mergedOptions)
        .then((resp) => utils_1.handleAxiosResponse(resp))
        .then((resp) => resp.data);
}
exports.bsDaGetStaticFileAsArrayBuffer = bsDaGetStaticFileAsArrayBuffer;
function bsDaGetStaticFileAsBlob(path, options) {
    const optionErrors = validateGetStaticFileOptions(options);
    if (optionErrors.length > 0) {
        const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.invalidParameterError);
        error.response = JSON.stringify(optionErrors);
        return Promise.reject(error);
    }
    const url = getBsArtifactsRoot() + path;
    const mergedOptions = {
        responseType: 'blob',
    };
    if (lodash_1.isObject(options) && lodash_1.isFunction(options.onFileProgress)) {
        mergedOptions.onDownloadProgress = utils_1.getAxiosProgressEventHandler(path, options.onFileProgress);
    }
    return axios_1.default.get(url, mergedOptions)
        .then((resp) => utils_1.handleAxiosResponse(resp))
        .then((resp) => resp.data);
}
exports.bsDaGetStaticFileAsBlob = bsDaGetStaticFileAsBlob;
function bsDaGetStaticFileAsObject(path, options) {
    return bsDaGetStaticFileAsBlob(path, options).then((blob) => {
        return new File([blob], path, { type: blob.type });
    });
}
exports.bsDaGetStaticFileAsObject = bsDaGetStaticFileAsObject;
function bsDaGetStaticFileSpec(path, options) {
    return bsDaGetStaticFileAsObject(path, options);
}
exports.bsDaGetStaticFileSpec = bsDaGetStaticFileSpec;
function bsDaCopyStaticFile(src, dest, options) {
    return Promise.reject(new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.methodNotAvailableError));
}
exports.bsDaCopyStaticFile = bsDaCopyStaticFile;
function bsDaGetStaticFileAbsolutePath(path) {
    return getBsArtifactsRoot() + path;
}
exports.bsDaGetStaticFileAbsolutePath = bsDaGetStaticFileAbsolutePath;
function bsDaFetchFileAsArrayBuffer(path, options) {
    const optionErrors = validateGetStaticFileOptions(options);
    if (optionErrors.length > 0) {
        const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.invalidParameterError);
        error.response = JSON.stringify(optionErrors);
        return Promise.reject(error);
    }
    const url = path;
    const mergedOptions = {
        responseType: 'arraybuffer',
    };
    if (lodash_1.isObject(options) && lodash_1.isFunction(options.onFileProgress)) {
        mergedOptions.onDownloadProgress = utils_1.getAxiosProgressEventHandler(path, options.onFileProgress);
    }
    return axios_1.default.get(url, mergedOptions)
        .then((resp) => utils_1.handleAxiosResponse(resp))
        .then((resp) => resp.data);
}
exports.bsDaFetchFileAsArrayBuffer = bsDaFetchFileAsArrayBuffer;
let fWManifestJson = null;
let fwManifestSemaphore = null;
function bsDaFetchFwManifest(options) {
    if (!lodash_1.isNil(fWManifestJson)) {
        return Promise.resolve(fWManifestJson);
    }
    const optionErrors = validateGetStaticFileOptions(options);
    if (optionErrors.length > 0) {
        const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.invalidParameterError);
        error.response = JSON.stringify(optionErrors);
        return Promise.reject(error);
    }
    const url = bsDaGetFwManifestUrl();
    const mergedOptions = {
        responseType: 'json',
    };
    if (lodash_1.isObject(options) && lodash_1.isFunction(options.onFileProgress)) {
        mergedOptions.onDownloadProgress = utils_1.getAxiosProgressEventHandler(url, options.onFileProgress);
    }
    fwManifestSemaphore = axios_1.default.get(url, mergedOptions)
        .then((resp) => {
        return utils_1.handleAxiosResponse(resp);
    }).then((resp) => {
        fWManifestJson = utils_1.parseFwManifestJson(resp.data);
        return fWManifestJson;
    });
    return fwManifestSemaphore;
}
exports.bsDaFetchFwManifest = bsDaFetchFwManifest;
function bsDaGetFwManifestOptionsByPlayerFamily(family) {
    if (!lodash_1.isNil(fWManifestJson) && fWManifestJson.hasOwnProperty(family)) {
        return Object.freeze(fWManifestJson[family]);
    }
    return null;
}
exports.bsDaGetFwManifestOptionsByPlayerFamily = bsDaGetFwManifestOptionsByPlayerFamily;
function bsDaGetPartnerProductsAsJson() {
    return bsDaGetStaticFileAsJson('PartnerProducts.json');
}
exports.bsDaGetPartnerProductsAsJson = bsDaGetPartnerProductsAsJson;
let partnerProductsJson = null;
let partnerProductsPromise = null;
function bsDaFetchPartnerProducts() {
    if (!lodash_1.isNil(partnerProductsJson)) {
        return Promise.resolve(partnerProductsJson);
    }
    partnerProductsPromise = bsDaGetStaticFileAsJson('PartnerProducts.json');
    partnerProductsPromise
        .then((partnerProducts) => {
        partnerProductsJson = partnerProducts;
        return partnerProductsJson;
    });
    return partnerProductsPromise;
}
exports.bsDaFetchPartnerProducts = bsDaFetchPartnerProducts;
function bsDaGetPartnerProducts() {
    return partnerProductsJson;
}
exports.bsDaGetPartnerProducts = bsDaGetPartnerProducts;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsDaGetRegisteredAutorunVersion = void 0;
function bsDaGetRegisteredAutorunVersion() {
    return '10.0.51';
}
exports.bsDaGetRegisteredAutorunVersion = bsDaGetRegisteredAutorunVersion;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsDaGetAutoZipFileAbsolutePath = exports.bsDaGetSetupNetworkDiagnosticsFileAbsolutePath = exports.bsDaGetSetupCommonFileAbsolutePath = exports.bsDaGetSetupFileAbsolutePath = exports.bsDaGetLocalSetupFileAbsolutePath = exports.bsDaGetFeatureMinRevsFileAbsolutePath = exports.bsDaGetAutoXmlFileAbsolutePath = exports.bsDaGetAutoScheduleSetupFileAbsolutePath = exports.baDaGetStandaloneToBsnSetupFileAbsolutePath = exports.bsDaGetSimpleNetworkingSetupFileAbsolutePath = exports.bsDaGetAutoPluginsFileAbsolutePath = exports.bsDaGetBsDateTimeFileAbsolutePath = exports.bsDaGetDeviceWebPageFileAbsolutePath = exports.bsDaGetPartnerProductsFileAbsolutePath = void 0;
const staticFileOperations_1 = __webpack_require__(1);
function bsDaGetPartnerProductsFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('PartnerProducts.json');
}
exports.bsDaGetPartnerProductsFileAbsolutePath = bsDaGetPartnerProductsFileAbsolutePath;
function bsDaGetDeviceWebPageFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('_deviceWebPage.html');
}
exports.bsDaGetDeviceWebPageFileAbsolutePath = bsDaGetDeviceWebPageFileAbsolutePath;
function bsDaGetBsDateTimeFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('bsDateTimeWidget.html');
}
exports.bsDaGetBsDateTimeFileAbsolutePath = bsDaGetBsDateTimeFileAbsolutePath;
function bsDaGetAutoPluginsFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('autoplugins.brs');
}
exports.bsDaGetAutoPluginsFileAbsolutePath = bsDaGetAutoPluginsFileAbsolutePath;
function bsDaGetSimpleNetworkingSetupFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('autorun-setup-simple-networking.brs');
}
exports.bsDaGetSimpleNetworkingSetupFileAbsolutePath = bsDaGetSimpleNetworkingSetupFileAbsolutePath;
function baDaGetStandaloneToBsnSetupFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('standaloneToBsnSetup.brs');
}
exports.baDaGetStandaloneToBsnSetupFileAbsolutePath = baDaGetStandaloneToBsnSetupFileAbsolutePath;
function bsDaGetAutoScheduleSetupFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('autoscheduleSetup.json');
}
exports.bsDaGetAutoScheduleSetupFileAbsolutePath = bsDaGetAutoScheduleSetupFileAbsolutePath;
function bsDaGetAutoXmlFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('autoxml.brs');
}
exports.bsDaGetAutoXmlFileAbsolutePath = bsDaGetAutoXmlFileAbsolutePath;
function bsDaGetFeatureMinRevsFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('featureMinRevs.json');
}
exports.bsDaGetFeatureMinRevsFileAbsolutePath = bsDaGetFeatureMinRevsFileAbsolutePath;
function bsDaGetLocalSetupFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('localSetup.brs');
}
exports.bsDaGetLocalSetupFileAbsolutePath = bsDaGetLocalSetupFileAbsolutePath;
function bsDaGetSetupFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('setup.brs');
}
exports.bsDaGetSetupFileAbsolutePath = bsDaGetSetupFileAbsolutePath;
function bsDaGetSetupCommonFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('setupCommon.brs');
}
exports.bsDaGetSetupCommonFileAbsolutePath = bsDaGetSetupCommonFileAbsolutePath;
function bsDaGetSetupNetworkDiagnosticsFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('setupNetworkDiagnostics.brs');
}
exports.bsDaGetSetupNetworkDiagnosticsFileAbsolutePath = bsDaGetSetupNetworkDiagnosticsFileAbsolutePath;
function bsDaGetAutoZipFileAbsolutePath() {
    return staticFileOperations_1.bsDaGetStaticFileAbsolutePath('autozip.brs');
}
exports.bsDaGetAutoZipFileAbsolutePath = bsDaGetAutoZipFileAbsolutePath;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(0), exports);
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(3), exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFwManifestJson = exports.getAxiosProgressEventHandler = exports.handleAxiosResponse = void 0;
const lodash_1 = __webpack_require__(2);
const bsDeviceArtifactsError_1 = __webpack_require__(0);
function handleAxiosResponse(response) {
    if (response.statusText === 'OK') {
        return response;
    }
    else {
        switch (true) {
            case response.status === 401:
            case response.status === 403: {
                const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.unauthorizedError);
                error.response = response;
                throw error;
            }
            case response.status === 400:
            case response.status > 403 && response.status < 500: {
                const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.clientError);
                error.response = response;
                throw error;
            }
            case response.status > 500: {
                const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.serverError);
                error.response = response;
                throw error;
            }
            default: {
                const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.unknownError);
                error.response = response;
                throw error;
            }
        }
    }
}
exports.handleAxiosResponse = handleAxiosResponse;
function getBsDaGetStaticFileProgressEventFromAxios(file, progressEvent) {
    if (!lodash_1.isNil(progressEvent)) {
        let totalSize = 0;
        if (lodash_1.isNumber(progressEvent.lengthComputable)) {
            totalSize = progressEvent.lengthComputable;
        }
        else if (lodash_1.isNumber(progressEvent.total)) {
            totalSize = progressEvent.total;
        }
        else if (lodash_1.isNumber(progressEvent.target.getResponseHeader('content-length'))) {
            totalSize = progressEvent.target.getResponseHeader('content-length');
        }
        else if (lodash_1.isNumber(progressEvent.target.getResponseHeader('x-decompressed-content-length'))) {
            totalSize = progressEvent.target.getResponseHeader('x-decompressed-content-length');
        }
        const loadedSize = progressEvent.loaded;
        return {
            file,
            loadedSize,
            totalSize,
        };
    }
}
function getAxiosProgressEventHandler(file, callback) {
    if (lodash_1.isFunction(callback)) {
        return (progressEvent) => {
            const parsedProgressEvent = getBsDaGetStaticFileProgressEventFromAxios(file, progressEvent);
            callback(parsedProgressEvent);
        };
    }
}
exports.getAxiosProgressEventHandler = getAxiosProgressEventHandler;
function parseFwManifestJson(data) {
    const fWManifestJson = {};
    const familiesData = data.FirmwareFile;
    for (let i = 0, iLen = familiesData.length; i < iLen; i++) {
        const familyData = familiesData[i];
        const familyName = familyData.family;
        if (lodash_1.isNil(familyName)) {
            continue;
        }
        if (lodash_1.isNil(fWManifestJson[familyName])) {
            fWManifestJson[familyName] = {
                productionVersion: '',
                betaVersion: '',
                compatibleVersion: '',
                productionLink: '',
                betaLink: '',
                compatibleLink: '',
                productionVersionNumber: -1,
                betaVersionNumber: -1,
                compatibleVersionNumber: -1,
                productionReleaseURL: '',
                betaReleaseURL: '',
                compatibleReleaseURL: '',
                productionReleaseSHA1: '',
                betaReleaseSHA1: '',
                compatibleReleaseSHA1: '',
                productionReleaseFileLength: -1,
                betaReleaseFileLength: -1,
                compatibleReleaseFileLength: -1,
            };
        }
        const link = familyData.link;
        const version = familyData.version;
        const versionNumber = parseInt(familyData.versionNumber, 10);
        const releaseURL = familyData.link;
        const releaseSHA1 = familyData.sha1;
        const releaseFileLength = parseInt(familyData.fileLength, 10);
        const type = familyData.type;
        if (lodash_1.isNil(link) || lodash_1.isNil(version) || lodash_1.isNil(releaseURL) || lodash_1.isNil(versionNumber)
            || lodash_1.isNil(releaseURL) || lodash_1.isNil(releaseSHA1) || lodash_1.isNil(releaseSHA1) || lodash_1.isNil(releaseFileLength)
            || lodash_1.isNil(type)) {
            continue;
        }
        switch (type) {
            case 'Production':
                fWManifestJson[familyName].productionVersion = version;
                fWManifestJson[familyName].productionLink = link;
                fWManifestJson[familyName].productionVersionNumber = versionNumber;
                fWManifestJson[familyName].productionReleaseURL = releaseURL;
                fWManifestJson[familyName].productionReleaseSHA1 = releaseSHA1;
                fWManifestJson[familyName].productionReleaseFileLength = releaseFileLength;
                break;
            case 'Beta':
                fWManifestJson[familyName].betaVersion = version;
                fWManifestJson[familyName].betaLink = link;
                fWManifestJson[familyName].betaVersionNumber = versionNumber;
                fWManifestJson[familyName].betaReleaseURL = releaseURL;
                fWManifestJson[familyName].betaReleaseSHA1 = releaseSHA1;
                fWManifestJson[familyName].betaReleaseFileLength = releaseFileLength;
                break;
            case 'MinimumCompatible':
                fWManifestJson[familyName].compatibleVersion = version;
                fWManifestJson[familyName].compatibleLink = link;
                fWManifestJson[familyName].compatibleVersionNumber = versionNumber;
                fWManifestJson[familyName].compatibleReleaseURL = releaseURL;
                fWManifestJson[familyName].compatibleReleaseSHA1 = releaseSHA1;
                fWManifestJson[familyName].compatibleReleaseFileLength = releaseFileLength;
                break;
        }
    }
    return fWManifestJson;
}
exports.parseFwManifestJson = parseFwManifestJson;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);
});
//# sourceMappingURL=bs-device-artifacts.browser.js.map