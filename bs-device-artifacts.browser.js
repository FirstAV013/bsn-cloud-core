(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["bs-device-artifacts"] = factory(require("lodash"));
	else
		root["bs-device-artifacts"] = factory(root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(9);
var isBuffer = __webpack_require__(32);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(29);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(5);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(5);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.bsDaGetPartnerProducts = exports.bsDaFetchPartnerProducts = exports.bsDaGetPartnerProductsAsJson = exports.bsDaGetFwManifestOptionsByPlayerFamily = exports.bsDaFetchFwManifest = exports.bsDaFetchFileAsArrayBuffer = exports.bsDaGetStaticFileAbsolutePath = exports.bsDaCopyStaticFile = exports.bsDaGetStaticFileManifest = exports.bsDaGetStaticFileSpec = exports.bsDaGetStaticFileAsObject = exports.bsDaGetStaticFileAsBlob = exports.bsDaGetStaticFileAsArrayBuffer = exports.bsDaGetStaticFileAsStream = exports.bsDaGetStaticFileAsJson = exports.bsDaSetFwManifestUrl = exports.bsDaSetDeviceArtifactPath = void 0;
const axios_1 = __webpack_require__(14);
const lodash_1 = __webpack_require__(10);
const utils_1 = __webpack_require__(35);
const bsDeviceArtifactsError_1 = __webpack_require__(1);
const manifest = __webpack_require__(33);
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
function bsDaGetStaticFileManifest() {
    return Promise.resolve(manifest);
}
exports.bsDaGetStaticFileManifest = bsDaGetStaticFileManifest;
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(21);
var buildURL = __webpack_require__(24);
var parseHeaders = __webpack_require__(30);
var isURLSameOrigin = __webpack_require__(28);
var createError = __webpack_require__(8);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(23);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(26);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(20);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsDaGetRegisteredAutorunVersion = void 0;
function bsDaGetRegisteredAutorunVersion() {
    return '10.0.58';
}
exports.bsDaGetRegisteredAutorunVersion = bsDaGetRegisteredAutorunVersion;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsDaGetAutoZipFileAbsolutePath = exports.bsDaGetSetupNetworkDiagnosticsFileAbsolutePath = exports.bsDaGetSetupCommonFileAbsolutePath = exports.bsDaGetSetupFileAbsolutePath = exports.bsDaGetLocalSetupFileAbsolutePath = exports.bsDaGetFeatureMinRevsFileAbsolutePath = exports.bsDaGetAutoXmlFileAbsolutePath = exports.bsDaGetAutoScheduleSetupFileAbsolutePath = exports.baDaGetStandaloneToBsnSetupFileAbsolutePath = exports.bsDaGetSimpleNetworkingSetupFileAbsolutePath = exports.bsDaGetAutoPluginsFileAbsolutePath = exports.bsDaGetBsDateTimeFileAbsolutePath = exports.bsDaGetDeviceWebPageFileAbsolutePath = exports.bsDaGetPartnerProductsFileAbsolutePath = void 0;
const staticFileOperations_1 = __webpack_require__(4);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(9);
var Axios = __webpack_require__(17);
var defaults = __webpack_require__(3);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(6);
axios.CancelToken = __webpack_require__(16);
axios.isCancel = __webpack_require__(7);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(31);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(6);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(3);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(18);
var dispatchRequest = __webpack_require__(19);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(22);
var isCancel = __webpack_require__(7);
var defaults = __webpack_require__(3);
var isAbsoluteURL = __webpack_require__(27);
var combineURLs = __webpack_require__(25);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(8);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = ["PartnerProducts.bose.json","PartnerProducts.json","_deviceWebPage.html","autoplugins.brs","autorun-setup-simple-networking.brs","autoscheduleSetup.json","autoxml.brs","autozip.brs","bsDateTimeWidget.html","featureMinRevs.json","localSetup.brs","setup.brs","setupCommon.brs","setupNetworkDiagnostics.brs","standaloneToBsnSetup.brs"]

/***/ }),
/* 34 */
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
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(11), exports);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFwManifestJson = exports.getAxiosProgressEventHandler = exports.handleAxiosResponse = void 0;
const lodash_1 = __webpack_require__(10);
const bsDeviceArtifactsError_1 = __webpack_require__(1);
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


/***/ })
/******/ ]);
});
//# sourceMappingURL=bs-device-artifacts.browser.js.map