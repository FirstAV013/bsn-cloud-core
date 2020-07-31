(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("path"), require("fs"), require("assert"), require("lodash"), require("axios"), require("constants"), require("isomorphic-path"), require("os"), require("stream"), require("util"));
	else if(typeof define === 'function' && define.amd)
		define(["path", "fs", "assert", "lodash", "axios", "constants", "isomorphic-path", "os", "stream", "util"], factory);
	else if(typeof exports === 'object')
		exports["bs-device-artifacts"] = factory(require("path"), require("fs"), require("assert"), require("lodash"), require("axios"), require("constants"), require("isomorphic-path"), require("os"), require("stream"), require("util"));
	else
		root["bs-device-artifacts"] = factory(root["path"], root["fs"], root["assert"], root["lodash"], root["axios"], root["constants"], root["isomorphic-path"], root["os"], root["stream"], root["util"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(8)
var polyfills = __webpack_require__(47)
var legacy = __webpack_require__(46)
var clone = __webpack_require__(45)

var util = __webpack_require__(55)

/* istanbul ignore next - node 0.x polyfill */
var gracefulQueue
var previousSymbol

/* istanbul ignore else - node 0.x polyfill */
if (typeof Symbol === 'function' && typeof Symbol.for === 'function') {
  gracefulQueue = Symbol.for('graceful-fs.queue')
  // This is used in testing by future versions
  previousSymbol = Symbol.for('graceful-fs.previous')
} else {
  gracefulQueue = '___graceful-fs.queue'
  previousSymbol = '___graceful-fs.previous'
}

function noop () {}

function publishQueue(context, queue) {
  Object.defineProperty(context, gracefulQueue, {
    get: function() {
      return queue
    }
  })
}

var debug = noop
if (util.debuglog)
  debug = util.debuglog('gfs4')
else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
  debug = function() {
    var m = util.format.apply(util, arguments)
    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ')
    console.error(m)
  }

// Once time initialization
if (!fs[gracefulQueue]) {
  // This queue can be shared by multiple loaded instances
  var queue = global[gracefulQueue] || []
  publishQueue(fs, queue)

  // Patch fs.close/closeSync to shared queue version, because we need
  // to retry() whenever a close happens *anywhere* in the program.
  // This is essential when multiple graceful-fs instances are
  // in play at the same time.
  fs.close = (function (fs$close) {
    function close (fd, cb) {
      return fs$close.call(fs, fd, function (err) {
        // This function uses the graceful-fs shared queue
        if (!err) {
          retry()
        }

        if (typeof cb === 'function')
          cb.apply(this, arguments)
      })
    }

    Object.defineProperty(close, previousSymbol, {
      value: fs$close
    })
    return close
  })(fs.close)

  fs.closeSync = (function (fs$closeSync) {
    function closeSync (fd) {
      // This function uses the graceful-fs shared queue
      fs$closeSync.apply(fs, arguments)
      retry()
    }

    Object.defineProperty(closeSync, previousSymbol, {
      value: fs$closeSync
    })
    return closeSync
  })(fs.closeSync)

  if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
    process.on('exit', function() {
      debug(fs[gracefulQueue])
      __webpack_require__(15).equal(fs[gracefulQueue].length, 0)
    })
  }
}

if (!global[gracefulQueue]) {
  publishQueue(global, fs[gracefulQueue]);
}

module.exports = patch(clone(fs))
if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
    module.exports = patch(fs)
    fs.__patched = true;
}

function patch (fs) {
  // Everything that references the open() function needs to be in here
  polyfills(fs)
  fs.gracefulify = patch

  fs.createReadStream = createReadStream
  fs.createWriteStream = createWriteStream
  var fs$readFile = fs.readFile
  fs.readFile = readFile
  function readFile (path, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$readFile(path, options, cb)

    function go$readFile (path, options, cb) {
      return fs$readFile(path, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$readFile, [path, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$writeFile = fs.writeFile
  fs.writeFile = writeFile
  function writeFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$writeFile(path, data, options, cb)

    function go$writeFile (path, data, options, cb) {
      return fs$writeFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$writeFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$appendFile = fs.appendFile
  if (fs$appendFile)
    fs.appendFile = appendFile
  function appendFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$appendFile(path, data, options, cb)

    function go$appendFile (path, data, options, cb) {
      return fs$appendFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$appendFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$readdir = fs.readdir
  fs.readdir = readdir
  function readdir (path, options, cb) {
    var args = [path]
    if (typeof options !== 'function') {
      args.push(options)
    } else {
      cb = options
    }
    args.push(go$readdir$cb)

    return go$readdir(args)

    function go$readdir$cb (err, files) {
      if (files && files.sort)
        files.sort()

      if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
        enqueue([go$readdir, [args]])

      else {
        if (typeof cb === 'function')
          cb.apply(this, arguments)
        retry()
      }
    }
  }

  function go$readdir (args) {
    return fs$readdir.apply(fs, args)
  }

  if (process.version.substr(0, 4) === 'v0.8') {
    var legStreams = legacy(fs)
    ReadStream = legStreams.ReadStream
    WriteStream = legStreams.WriteStream
  }

  var fs$ReadStream = fs.ReadStream
  if (fs$ReadStream) {
    ReadStream.prototype = Object.create(fs$ReadStream.prototype)
    ReadStream.prototype.open = ReadStream$open
  }

  var fs$WriteStream = fs.WriteStream
  if (fs$WriteStream) {
    WriteStream.prototype = Object.create(fs$WriteStream.prototype)
    WriteStream.prototype.open = WriteStream$open
  }

  Object.defineProperty(fs, 'ReadStream', {
    get: function () {
      return ReadStream
    },
    set: function (val) {
      ReadStream = val
    },
    enumerable: true,
    configurable: true
  })
  Object.defineProperty(fs, 'WriteStream', {
    get: function () {
      return WriteStream
    },
    set: function (val) {
      WriteStream = val
    },
    enumerable: true,
    configurable: true
  })

  // legacy names
  var FileReadStream = ReadStream
  Object.defineProperty(fs, 'FileReadStream', {
    get: function () {
      return FileReadStream
    },
    set: function (val) {
      FileReadStream = val
    },
    enumerable: true,
    configurable: true
  })
  var FileWriteStream = WriteStream
  Object.defineProperty(fs, 'FileWriteStream', {
    get: function () {
      return FileWriteStream
    },
    set: function (val) {
      FileWriteStream = val
    },
    enumerable: true,
    configurable: true
  })

  function ReadStream (path, options) {
    if (this instanceof ReadStream)
      return fs$ReadStream.apply(this, arguments), this
    else
      return ReadStream.apply(Object.create(ReadStream.prototype), arguments)
  }

  function ReadStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        if (that.autoClose)
          that.destroy()

        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
        that.read()
      }
    })
  }

  function WriteStream (path, options) {
    if (this instanceof WriteStream)
      return fs$WriteStream.apply(this, arguments), this
    else
      return WriteStream.apply(Object.create(WriteStream.prototype), arguments)
  }

  function WriteStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        that.destroy()
        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
      }
    })
  }

  function createReadStream (path, options) {
    return new fs.ReadStream(path, options)
  }

  function createWriteStream (path, options) {
    return new fs.WriteStream(path, options)
  }

  var fs$open = fs.open
  fs.open = open
  function open (path, flags, mode, cb) {
    if (typeof mode === 'function')
      cb = mode, mode = null

    return go$open(path, flags, mode, cb)

    function go$open (path, flags, mode, cb) {
      return fs$open(path, flags, mode, function (err, fd) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$open, [path, flags, mode, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  return fs
}

function enqueue (elem) {
  debug('ENQUEUE', elem[0].name, elem[1])
  fs[gracefulQueue].push(elem)
}

function retry () {
  var elem = fs[gracefulQueue].shift()
  if (elem) {
    debug('RETRY', elem[0].name, elem[1])
    elem[0].apply(null, elem[1])
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.fromCallback = function (fn) {
  return Object.defineProperty(function () {
    if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments)
    else {
      return new Promise((resolve, reject) => {
        arguments[arguments.length] = (err, res) => {
          if (err) return reject(err)
          resolve(res)
        }
        arguments.length++
        fn.apply(this, arguments)
      })
    }
  }, 'name', { value: fn.name })
}

exports.fromPromise = function (fn) {
  return Object.defineProperty(function () {
    const cb = arguments[arguments.length - 1]
    if (typeof cb !== 'function') return fn.apply(this, arguments)
    else fn.apply(this, arguments).then(r => cb(null, r), cb)
  }, 'name', { value: fn.name })
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const u = __webpack_require__(2).fromCallback
const mkdirs = u(__webpack_require__(38))
const mkdirsSync = __webpack_require__(37)

module.exports = {
  mkdirs: mkdirs,
  mkdirsSync: mkdirsSync,
  // alias
  mkdirp: mkdirs,
  mkdirpSync: mkdirsSync,
  ensureDir: mkdirs,
  ensureDirSync: mkdirsSync
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const u = __webpack_require__(2).fromPromise
const fs = __webpack_require__(12)

function pathExists (path) {
  return fs.access(path).then(() => true).catch(() => false)
}

module.exports = {
  pathExists: u(pathExists),
  pathExistsSync: fs.existsSync
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(2).fromCallback
const rimraf = __webpack_require__(42)

module.exports = {
  remove: u(rimraf),
  removeSync: rimraf.sync
}


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(2).fromCallback
const jsonFile = __webpack_require__(49)

module.exports = {
  // jsonfile exports
  readJson: u(jsonFile.readFile),
  readJsonSync: jsonFile.readFileSync,
  writeJson: u(jsonFile.writeFile),
  writeJsonSync: jsonFile.writeFileSync
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsDaGetPartnerProducts = exports.bsDaFetchPartnerProducts = exports.bsDaGetPartnerProductsAsJson = exports.bsDaGetFwManifestOptionsByPlayerFamily = exports.bsDaFetchFwManifest = exports.bsDaFetchFileAsArrayBuffer = exports.bsDaGetStaticFileAbsolutePath = exports.bsDaCopyStaticFile = exports.bsDaGetStaticFileManifest = exports.bsDaGetStaticFileSpec = exports.bsDaGetStaticFileAsObject = exports.bsDaGetStaticFileAsBlob = exports.bsDaGetStaticFileAsArrayBuffer = exports.bsDaGetStaticFileAsStream = exports.bsDaGetStaticFileAsJson = exports.bsDaSetFwManifestUrl = exports.bsDaSetDeviceArtifactPath = void 0;
const fse = __webpack_require__(33);
const axios_1 = __webpack_require__(50);
const isomorphicPath = __webpack_require__(52);
const lodash_1 = __webpack_require__(16);
const utils_1 = __webpack_require__(21);
const bsDeviceArtifactsError_1 = __webpack_require__(6);
const manifest = __webpack_require__(48);
let DEFAULT_BS_DEVICE_ARTIFACT_PATH = './';
function bsDaSetDeviceArtifactPath(path) {
    if (fse.existsSync(path)) {
        return DEFAULT_BS_DEVICE_ARTIFACT_PATH = path;
    }
    else {
        throw new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.invalidParameterError, 'path does not exist ' + path);
    }
}
exports.bsDaSetDeviceArtifactPath = bsDaSetDeviceArtifactPath;
function getBsArtifactsRoot() {
    try {
        if (process.env.BS_DEVICE_ARTIFACT_PATH && fse.existsSync(process.env.BS_DEVICE_ARTIFACT_PATH)) {
            return process.env.BS_DEVICE_ARTIFACT_PATH;
        }
        else {
            throw new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.artifactsNotFoundError, process.env.BS_DEVICE_ARTIFACT_PATH);
        }
    }
    catch (e) {
        if (fse.existsSync(DEFAULT_BS_DEVICE_ARTIFACT_PATH)) {
            return DEFAULT_BS_DEVICE_ARTIFACT_PATH;
        }
        else {
            throw new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.artifactsNotFoundError, process.env.BS_DEVICE_ARTIFACT_PATH);
        }
    }
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
function getBsDaGetStaticFileProgressEvent(file, loadedSize, totalSize) {
    return {
        file,
        loadedSize,
        totalSize,
    };
}
function handleProgressEvent(file, callback) {
    if (lodash_1.isFunction(callback)) {
        return (loadedSize, totalSize) => {
            const parsedProgressEvent = getBsDaGetStaticFileProgressEvent(file, loadedSize, totalSize);
            callback(parsedProgressEvent);
        };
    }
}
function bsDaGetStaticFileAsJson(path, options) {
    const optionErrors = validateGetStaticFileOptions(options);
    if (optionErrors.length > 0) {
        const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.invalidParameterError);
        error.response = JSON.stringify(optionErrors);
        return Promise.reject(error);
    }
    const absolutePath = isomorphicPath.default.join(getBsArtifactsRoot(), path);
    let length = 0;
    let handler = (loadedSize, totalSize) => { return; };
    if (lodash_1.isObject(options) && lodash_1.isFunction(options.onFileProgress)) {
        handler = handleProgressEvent(path, options.onFileProgress);
    }
    return fse.stat(absolutePath)
        .then((stats) => {
        length = stats.size;
        handler(0, length);
        return stats;
    })
        .then((stats) => fse.readJson(absolutePath))
        .then((json) => {
        handler(length, length);
        return json;
    })
        .catch((error) => {
        return Promise.reject(new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.fileReadError, error.stack));
    });
}
exports.bsDaGetStaticFileAsJson = bsDaGetStaticFileAsJson;
function bsDaGetStaticFileAsStream(path, options) {
    const optionErrors = validateGetStaticFileOptions(options);
    if (optionErrors.length > 0) {
        const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.invalidParameterError);
        error.response = JSON.stringify(optionErrors);
        return Promise.reject(error);
    }
    const absolutePath = isomorphicPath.default.join(getBsArtifactsRoot(), path);
    let length = 0;
    let handler = (loadedSize, totalSize) => { return; };
    if (lodash_1.isObject(options) && lodash_1.isFunction(options.onFileProgress)) {
        handler = handleProgressEvent(absolutePath, options.onFileProgress);
    }
    return fse.stat(absolutePath)
        .then((stats) => {
        length = stats.size;
        handler(0, length);
        return stats;
    })
        .then((stats) => fse.createReadStream(absolutePath))
        .then((stream) => {
        handler(length, length);
        return stream;
    })
        .catch((error) => {
        return Promise.reject(new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.fileReadError, error.stack));
    });
}
exports.bsDaGetStaticFileAsStream = bsDaGetStaticFileAsStream;
function bsDaGetStaticFileAsArrayBuffer(path, options) {
    const optionErrors = validateGetStaticFileOptions(options);
    if (optionErrors.length > 0) {
        const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.invalidParameterError);
        error.response = JSON.stringify(optionErrors);
        return Promise.reject(error);
    }
    const absolutePath = isomorphicPath.default.join(getBsArtifactsRoot(), path);
    let length = 0;
    let handler = (loadedSize, totalSize) => { return; };
    if (lodash_1.isObject(options) && lodash_1.isFunction(options.onFileProgress)) {
        handler = handleProgressEvent(absolutePath, options.onFileProgress);
    }
    return fse.stat(absolutePath)
        .then((stats) => {
        length = stats.size;
        handler(0, length);
        return stats;
    })
        .then((stats) => fse.readFile(absolutePath))
        .then((buffer) => {
        handler(length, length);
        const arrayBuffer = new ArrayBuffer(buffer.length);
        const view = new Uint8Array(arrayBuffer);
        for (let i = 0; i < length; i++) {
            view[i] = buffer[i];
        }
        return arrayBuffer;
    })
        .catch((error) => {
        return Promise.reject(new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.fileReadError, error.stack));
    });
}
exports.bsDaGetStaticFileAsArrayBuffer = bsDaGetStaticFileAsArrayBuffer;
function bsDaGetStaticFileAsBlob(path, options) {
    return Promise.reject(new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.methodNotAvailableError));
}
exports.bsDaGetStaticFileAsBlob = bsDaGetStaticFileAsBlob;
function bsDaGetStaticFileAsObject(path, options) {
    return Promise.reject(new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.methodNotAvailableError));
}
exports.bsDaGetStaticFileAsObject = bsDaGetStaticFileAsObject;
function bsDaGetStaticFileSpec(path, options) {
    return Promise.resolve(bsDaGetStaticFileAbsolutePath(path));
}
exports.bsDaGetStaticFileSpec = bsDaGetStaticFileSpec;
function bsDaGetStaticFileManifest() {
    return Promise.resolve(manifest);
}
exports.bsDaGetStaticFileManifest = bsDaGetStaticFileManifest;
function bsDaCopyStaticFile(path, dest, options) {
    const optionErrors = validateGetStaticFileOptions(options);
    if (optionErrors.length > 0) {
        const error = new bsDeviceArtifactsError_1.BsDeviceArtifactsError(bsDeviceArtifactsError_1.BsDeviceArtifactsErrorType.invalidParameterError);
        error.response = JSON.stringify(optionErrors);
        return Promise.reject(error);
    }
    const absolutePath = isomorphicPath.default.join(getBsArtifactsRoot(), path);
    let length = 0;
    let handler = (loadedSize, totalSize) => { return; };
    if (lodash_1.isObject(options) && lodash_1.isFunction(options.onFileProgress)) {
        handler = handleProgressEvent(absolutePath, options.onFileProgress);
    }
    return fse.stat(absolutePath)
        .then((stats) => {
        length = stats.size;
        handler(0, length);
        return stats;
    })
        .then((stats) => fse.copy(absolutePath, dest))
        .then(() => handler(length, length));
}
exports.bsDaCopyStaticFile = bsDaCopyStaticFile;
function bsDaGetStaticFileAbsolutePath(path) {
    return isomorphicPath.default.join(getBsArtifactsRoot(), path);
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


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  copySync: __webpack_require__(23)
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// imported from ncp (this is temporary, will rewrite)

var fs = __webpack_require__(0)
var path = __webpack_require__(1)
var utimes = __webpack_require__(44)

function ncp (source, dest, options, callback) {
  if (!callback) {
    callback = options
    options = {}
  }

  var basePath = process.cwd()
  var currentPath = path.resolve(basePath, source)
  var targetPath = path.resolve(basePath, dest)

  var filter = options.filter
  var transform = options.transform
  var overwrite = options.overwrite
  // If overwrite is undefined, use clobber, otherwise default to true:
  if (overwrite === undefined) overwrite = options.clobber
  if (overwrite === undefined) overwrite = true
  var errorOnExist = options.errorOnExist
  var dereference = options.dereference
  var preserveTimestamps = options.preserveTimestamps === true

  var started = 0
  var finished = 0
  var running = 0

  var errored = false

  startCopy(currentPath)

  function startCopy (source) {
    started++
    if (filter) {
      if (filter instanceof RegExp) {
        console.warn('Warning: fs-extra: Passing a RegExp filter is deprecated, use a function')
        if (!filter.test(source)) {
          return doneOne(true)
        }
      } else if (typeof filter === 'function') {
        if (!filter(source, dest)) {
          return doneOne(true)
        }
      }
    }
    return getStats(source)
  }

  function getStats (source) {
    var stat = dereference ? fs.stat : fs.lstat
    running++
    stat(source, function (err, stats) {
      if (err) return onError(err)

      // We need to get the mode from the stats object and preserve it.
      var item = {
        name: source,
        mode: stats.mode,
        mtime: stats.mtime, // modified time
        atime: stats.atime, // access time
        stats: stats // temporary
      }

      if (stats.isDirectory()) {
        return onDir(item)
      } else if (stats.isFile() || stats.isCharacterDevice() || stats.isBlockDevice()) {
        return onFile(item)
      } else if (stats.isSymbolicLink()) {
        // Symlinks don't really need to know about the mode.
        return onLink(source)
      }
    })
  }

  function onFile (file) {
    var target = file.name.replace(currentPath, targetPath.replace('$', '$$$$')) // escapes '$' with '$$'
    isWritable(target, function (writable) {
      if (writable) {
        copyFile(file, target)
      } else {
        if (overwrite) {
          rmFile(target, function () {
            copyFile(file, target)
          })
        } else if (errorOnExist) {
          onError(new Error(target + ' already exists'))
        } else {
          doneOne()
        }
      }
    })
  }

  function copyFile (file, target) {
    var readStream = fs.createReadStream(file.name)
    var writeStream = fs.createWriteStream(target, { mode: file.mode })

    readStream.on('error', onError)
    writeStream.on('error', onError)

    if (transform) {
      transform(readStream, writeStream, file)
    } else {
      writeStream.on('open', function () {
        readStream.pipe(writeStream)
      })
    }

    writeStream.once('close', function () {
      fs.chmod(target, file.mode, function (err) {
        if (err) return onError(err)
        if (preserveTimestamps) {
          utimes.utimesMillis(target, file.atime, file.mtime, function (err) {
            if (err) return onError(err)
            return doneOne()
          })
        } else {
          doneOne()
        }
      })
    })
  }

  function rmFile (file, done) {
    fs.unlink(file, function (err) {
      if (err) return onError(err)
      return done()
    })
  }

  function onDir (dir) {
    var target = dir.name.replace(currentPath, targetPath.replace('$', '$$$$')) // escapes '$' with '$$'
    isWritable(target, function (writable) {
      if (writable) {
        return mkDir(dir, target)
      }
      copyDir(dir.name)
    })
  }

  function mkDir (dir, target) {
    fs.mkdir(target, dir.mode, function (err) {
      if (err) return onError(err)
      // despite setting mode in fs.mkdir, doesn't seem to work
      // so we set it here.
      fs.chmod(target, dir.mode, function (err) {
        if (err) return onError(err)
        copyDir(dir.name)
      })
    })
  }

  function copyDir (dir) {
    fs.readdir(dir, function (err, items) {
      if (err) return onError(err)
      items.forEach(function (item) {
        startCopy(path.join(dir, item))
      })
      return doneOne()
    })
  }

  function onLink (link) {
    var target = link.replace(currentPath, targetPath)
    fs.readlink(link, function (err, resolvedPath) {
      if (err) return onError(err)
      checkLink(resolvedPath, target)
    })
  }

  function checkLink (resolvedPath, target) {
    if (dereference) {
      resolvedPath = path.resolve(basePath, resolvedPath)
    }
    isWritable(target, function (writable) {
      if (writable) {
        return makeLink(resolvedPath, target)
      }
      fs.readlink(target, function (err, targetDest) {
        if (err) return onError(err)

        if (dereference) {
          targetDest = path.resolve(basePath, targetDest)
        }
        if (targetDest === resolvedPath) {
          return doneOne()
        }
        return rmFile(target, function () {
          makeLink(resolvedPath, target)
        })
      })
    })
  }

  function makeLink (linkPath, target) {
    fs.symlink(linkPath, target, function (err) {
      if (err) return onError(err)
      return doneOne()
    })
  }

  function isWritable (path, done) {
    fs.lstat(path, function (err) {
      if (err) {
        if (err.code === 'ENOENT') return done(true)
        return done(false)
      }
      return done(false)
    })
  }

  function onError (err) {
    // ensure callback is defined & called only once:
    if (!errored && callback !== undefined) {
      errored = true
      return callback(err)
    }
  }

  function doneOne (skipped) {
    if (!skipped) running--
    finished++
    if ((started === finished) && (running === 0)) {
      if (callback !== undefined) {
        return callback(null)
      }
    }
  }
}

module.exports = ncp


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// This is adapted from https://github.com/normalize/mz
// Copyright (c) 2014-2016 Jonathan Ong me@jongleberry.com and Contributors
const u = __webpack_require__(2).fromCallback
const fs = __webpack_require__(0)

const api = [
  'access',
  'appendFile',
  'chmod',
  'chown',
  'close',
  'copyFile',
  'fchmod',
  'fchown',
  'fdatasync',
  'fstat',
  'fsync',
  'ftruncate',
  'futimes',
  'lchown',
  'link',
  'lstat',
  'mkdir',
  'mkdtemp',
  'open',
  'readFile',
  'readdir',
  'readlink',
  'realpath',
  'rename',
  'rmdir',
  'stat',
  'symlink',
  'truncate',
  'unlink',
  'utimes',
  'writeFile'
].filter(key => {
  // Some commands are not available on some systems. Ex:
  // fs.copyFile was added in Node.js v8.5.0
  // fs.mkdtemp was added in Node.js v5.10.0
  // fs.lchown is not available on at least some Linux
  return typeof fs[key] === 'function'
})

// Export all keys:
Object.keys(fs).forEach(key => {
  exports[key] = fs[key]
})

// Universalify async methods:
api.forEach(method => {
  exports[method] = u(fs[method])
})

// We differ from mz/fs in that we still ship the old, broken, fs.exists()
// since we are a drop-in replacement for the native module
exports.exists = function (filename, callback) {
  if (typeof callback === 'function') {
    return fs.exists(filename, callback)
  }
  return new Promise(resolve => {
    return fs.exists(filename, resolve)
  })
}

// fs.read() & fs.write need special treatment due to multiple callback args

exports.read = function (fd, buffer, offset, length, position, callback) {
  if (typeof callback === 'function') {
    return fs.read(fd, buffer, offset, length, position, callback)
  }
  return new Promise((resolve, reject) => {
    fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => {
      if (err) return reject(err)
      resolve({ bytesRead, buffer })
    })
  })
}

// Function signature can be
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// OR
// fs.write(fd, string[, position[, encoding]], callback)
// so we need to handle both cases
exports.write = function (fd, buffer, a, b, c, callback) {
  if (typeof arguments[arguments.length - 1] === 'function') {
    return fs.write(fd, buffer, a, b, c, callback)
  }

  // Check for old, depricated fs.write(fd, string[, position[, encoding]], callback)
  if (typeof buffer === 'string') {
    return new Promise((resolve, reject) => {
      fs.write(fd, buffer, a, b, (err, bytesWritten, buffer) => {
        if (err) return reject(err)
        resolve({ bytesWritten, buffer })
      })
    })
  }

  return new Promise((resolve, reject) => {
    fs.write(fd, buffer, a, b, c, (err, bytesWritten, buffer) => {
      if (err) return reject(err)
      resolve({ bytesWritten, buffer })
    })
  })
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(1)

// get drive on windows
function getRootPath (p) {
  p = path.normalize(path.resolve(p)).split(path.sep)
  if (p.length > 0) return p[0]
  return null
}

// http://stackoverflow.com/a/62888/10333 contains more accurate
// TODO: expand to include the rest
const INVALID_PATH_CHARS = /[<>:"|?*]/

function invalidWin32Path (p) {
  const rp = getRootPath(p)
  p = p.replace(rp, '')
  return INVALID_PATH_CHARS.test(p)
}

module.exports = {
  getRootPath,
  invalidWin32Path
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/* eslint-disable node/no-deprecated-api */
module.exports = function (size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    try {
      return Buffer.allocUnsafe(size)
    } catch (e) {
      return new Buffer(size)
    }
  }
  return new Buffer(size)
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsDaGetRegisteredAutorunVersion = void 0;
function bsDaGetRegisteredAutorunVersion() {
    return '10.0.51';
}
exports.bsDaGetRegisteredAutorunVersion = bsDaGetRegisteredAutorunVersion;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsDaGetAutoZipFileAbsolutePath = exports.bsDaGetSetupNetworkDiagnosticsFileAbsolutePath = exports.bsDaGetSetupCommonFileAbsolutePath = exports.bsDaGetSetupFileAbsolutePath = exports.bsDaGetLocalSetupFileAbsolutePath = exports.bsDaGetFeatureMinRevsFileAbsolutePath = exports.bsDaGetAutoXmlFileAbsolutePath = exports.bsDaGetAutoScheduleSetupFileAbsolutePath = exports.baDaGetStandaloneToBsnSetupFileAbsolutePath = exports.bsDaGetSimpleNetworkingSetupFileAbsolutePath = exports.bsDaGetAutoPluginsFileAbsolutePath = exports.bsDaGetBsDateTimeFileAbsolutePath = exports.bsDaGetDeviceWebPageFileAbsolutePath = exports.bsDaGetPartnerProductsFileAbsolutePath = void 0;
const staticFileOperations_1 = __webpack_require__(9);
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 20 */
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
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(17), exports);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFwManifestJson = exports.getAxiosProgressEventHandler = exports.handleAxiosResponse = void 0;
const lodash_1 = __webpack_require__(16);
const bsDeviceArtifactsError_1 = __webpack_require__(6);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(0)

const BUF_LENGTH = 64 * 1024
const _buff = __webpack_require__(14)(BUF_LENGTH)

function copyFileSync (srcFile, destFile, options) {
  const overwrite = options.overwrite
  const errorOnExist = options.errorOnExist
  const preserveTimestamps = options.preserveTimestamps

  if (fs.existsSync(destFile)) {
    if (overwrite) {
      fs.unlinkSync(destFile)
    } else if (errorOnExist) {
      throw new Error(`${destFile} already exists`)
    } else return
  }

  const fdr = fs.openSync(srcFile, 'r')
  const stat = fs.fstatSync(fdr)
  const fdw = fs.openSync(destFile, 'w', stat.mode)
  let bytesRead = 1
  let pos = 0

  while (bytesRead > 0) {
    bytesRead = fs.readSync(fdr, _buff, 0, BUF_LENGTH, pos)
    fs.writeSync(fdw, _buff, 0, bytesRead)
    pos += bytesRead
  }

  if (preserveTimestamps) {
    fs.futimesSync(fdw, stat.atime, stat.mtime)
  }

  fs.closeSync(fdr)
  fs.closeSync(fdw)
}

module.exports = copyFileSync


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(0)
const path = __webpack_require__(1)
const copyFileSync = __webpack_require__(22)
const mkdir = __webpack_require__(3)

function copySync (src, dest, options) {
  if (typeof options === 'function' || options instanceof RegExp) {
    options = {filter: options}
  }

  options = options || {}
  options.recursive = !!options.recursive

  // default to true for now
  options.clobber = 'clobber' in options ? !!options.clobber : true
  // overwrite falls back to clobber
  options.overwrite = 'overwrite' in options ? !!options.overwrite : options.clobber
  options.dereference = 'dereference' in options ? !!options.dereference : false
  options.preserveTimestamps = 'preserveTimestamps' in options ? !!options.preserveTimestamps : false

  options.filter = options.filter || function () { return true }

  // Warn about using preserveTimestamps on 32-bit node:
  if (options.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`)
  }

  const stats = (options.recursive && !options.dereference) ? fs.lstatSync(src) : fs.statSync(src)
  const destFolder = path.dirname(dest)
  const destFolderExists = fs.existsSync(destFolder)
  let performCopy = false

  if (options.filter instanceof RegExp) {
    console.warn('Warning: fs-extra: Passing a RegExp filter is deprecated, use a function')
    performCopy = options.filter.test(src)
  } else if (typeof options.filter === 'function') performCopy = options.filter(src, dest)

  if (stats.isFile() && performCopy) {
    if (!destFolderExists) mkdir.mkdirsSync(destFolder)
    copyFileSync(src, dest, {
      overwrite: options.overwrite,
      errorOnExist: options.errorOnExist,
      preserveTimestamps: options.preserveTimestamps
    })
  } else if (stats.isDirectory() && performCopy) {
    if (!fs.existsSync(dest)) mkdir.mkdirsSync(dest)
    const contents = fs.readdirSync(src)
    contents.forEach(content => {
      const opts = options
      opts.recursive = true
      copySync(path.join(src, content), path.join(dest, content), opts)
    })
  } else if (options.recursive && stats.isSymbolicLink() && performCopy) {
    const srcPath = fs.readlinkSync(src)
    fs.symlinkSync(srcPath, dest)
  }
}

module.exports = copySync


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(0)
const path = __webpack_require__(1)
const ncp = __webpack_require__(11)
const mkdir = __webpack_require__(3)
const pathExists = __webpack_require__(4).pathExists

function copy (src, dest, options, callback) {
  if (typeof options === 'function' && !callback) {
    callback = options
    options = {}
  } else if (typeof options === 'function' || options instanceof RegExp) {
    options = {filter: options}
  }
  callback = callback || function () {}
  options = options || {}

  // Warn about using preserveTimestamps on 32-bit node:
  if (options.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`)
  }

  // don't allow src and dest to be the same
  const basePath = process.cwd()
  const currentPath = path.resolve(basePath, src)
  const targetPath = path.resolve(basePath, dest)
  if (currentPath === targetPath) return callback(new Error('Source and destination must not be the same.'))

  fs.lstat(src, (err, stats) => {
    if (err) return callback(err)

    let dir = null
    if (stats.isDirectory()) {
      const parts = dest.split(path.sep)
      parts.pop()
      dir = parts.join(path.sep)
    } else {
      dir = path.dirname(dest)
    }

    pathExists(dir, (err, dirExists) => {
      if (err) return callback(err)
      if (dirExists) return ncp(src, dest, options, callback)
      mkdir.mkdirs(dir, err => {
        if (err) return callback(err)
        ncp(src, dest, options, callback)
      })
    })
  })
}

module.exports = copy


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const u = __webpack_require__(2).fromCallback
module.exports = {
  copy: u(__webpack_require__(24))
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(2).fromCallback
const fs = __webpack_require__(8)
const path = __webpack_require__(1)
const mkdir = __webpack_require__(3)
const remove = __webpack_require__(5)

const emptyDir = u(function emptyDir (dir, callback) {
  callback = callback || function () {}
  fs.readdir(dir, (err, items) => {
    if (err) return mkdir.mkdirs(dir, callback)

    items = items.map(item => path.join(dir, item))

    deleteItem()

    function deleteItem () {
      const item = items.pop()
      if (!item) return callback()
      remove.remove(item, err => {
        if (err) return callback(err)
        deleteItem()
      })
    }
  })
})

function emptyDirSync (dir) {
  let items
  try {
    items = fs.readdirSync(dir)
  } catch (err) {
    return mkdir.mkdirsSync(dir)
  }

  items.forEach(item => {
    item = path.join(dir, item)
    remove.removeSync(item)
  })
}

module.exports = {
  emptyDirSync,
  emptydirSync: emptyDirSync,
  emptyDir,
  emptydir: emptyDir
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(2).fromCallback
const path = __webpack_require__(1)
const fs = __webpack_require__(0)
const mkdir = __webpack_require__(3)
const pathExists = __webpack_require__(4).pathExists

function createFile (file, callback) {
  function makeFile () {
    fs.writeFile(file, '', err => {
      if (err) return callback(err)
      callback()
    })
  }

  fs.stat(file, (err, stats) => { // eslint-disable-line handle-callback-err
    if (!err && stats.isFile()) return callback()
    const dir = path.dirname(file)
    pathExists(dir, (err, dirExists) => {
      if (err) return callback(err)
      if (dirExists) return makeFile()
      mkdir.mkdirs(dir, err => {
        if (err) return callback(err)
        makeFile()
      })
    })
  })
}

function createFileSync (file) {
  let stats
  try {
    stats = fs.statSync(file)
  } catch (e) {}
  if (stats && stats.isFile()) return

  const dir = path.dirname(file)
  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir)
  }

  fs.writeFileSync(file, '')
}

module.exports = {
  createFile: u(createFile),
  createFileSync
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const file = __webpack_require__(27)
const link = __webpack_require__(29)
const symlink = __webpack_require__(32)

module.exports = {
  // file
  createFile: file.createFile,
  createFileSync: file.createFileSync,
  ensureFile: file.createFile,
  ensureFileSync: file.createFileSync,
  // link
  createLink: link.createLink,
  createLinkSync: link.createLinkSync,
  ensureLink: link.createLink,
  ensureLinkSync: link.createLinkSync,
  // symlink
  createSymlink: symlink.createSymlink,
  createSymlinkSync: symlink.createSymlinkSync,
  ensureSymlink: symlink.createSymlink,
  ensureSymlinkSync: symlink.createSymlinkSync
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(2).fromCallback
const path = __webpack_require__(1)
const fs = __webpack_require__(0)
const mkdir = __webpack_require__(3)
const pathExists = __webpack_require__(4).pathExists

function createLink (srcpath, dstpath, callback) {
  function makeLink (srcpath, dstpath) {
    fs.link(srcpath, dstpath, err => {
      if (err) return callback(err)
      callback(null)
    })
  }

  pathExists(dstpath, (err, destinationExists) => {
    if (err) return callback(err)
    if (destinationExists) return callback(null)
    fs.lstat(srcpath, (err, stat) => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureLink')
        return callback(err)
      }

      const dir = path.dirname(dstpath)
      pathExists(dir, (err, dirExists) => {
        if (err) return callback(err)
        if (dirExists) return makeLink(srcpath, dstpath)
        mkdir.mkdirs(dir, err => {
          if (err) return callback(err)
          makeLink(srcpath, dstpath)
        })
      })
    })
  })
}

function createLinkSync (srcpath, dstpath, callback) {
  const destinationExists = fs.existsSync(dstpath)
  if (destinationExists) return undefined

  try {
    fs.lstatSync(srcpath)
  } catch (err) {
    err.message = err.message.replace('lstat', 'ensureLink')
    throw err
  }

  const dir = path.dirname(dstpath)
  const dirExists = fs.existsSync(dir)
  if (dirExists) return fs.linkSync(srcpath, dstpath)
  mkdir.mkdirsSync(dir)

  return fs.linkSync(srcpath, dstpath)
}

module.exports = {
  createLink: u(createLink),
  createLinkSync
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(1)
const fs = __webpack_require__(0)
const pathExists = __webpack_require__(4).pathExists

/**
 * Function that returns two types of paths, one relative to symlink, and one
 * relative to the current working directory. Checks if path is absolute or
 * relative. If the path is relative, this function checks if the path is
 * relative to symlink or relative to current working directory. This is an
 * initiative to find a smarter `srcpath` to supply when building symlinks.
 * This allows you to determine which path to use out of one of three possible
 * types of source paths. The first is an absolute path. This is detected by
 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
 * see if it exists. If it does it's used, if not an error is returned
 * (callback)/ thrown (sync). The other two options for `srcpath` are a
 * relative url. By default Node's `fs.symlink` works by creating a symlink
 * using `dstpath` and expects the `srcpath` to be relative to the newly
 * created symlink. If you provide a `srcpath` that does not exist on the file
 * system it results in a broken symlink. To minimize this, the function
 * checks to see if the 'relative to symlink' source file exists, and if it
 * does it will use it. If it does not, it checks if there's a file that
 * exists that is relative to the current working directory, if does its used.
 * This preserves the expectations of the original fs.symlink spec and adds
 * the ability to pass in `relative to current working direcotry` paths.
 */

function symlinkPaths (srcpath, dstpath, callback) {
  if (path.isAbsolute(srcpath)) {
    return fs.lstat(srcpath, (err, stat) => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureSymlink')
        return callback(err)
      }
      return callback(null, {
        'toCwd': srcpath,
        'toDst': srcpath
      })
    })
  } else {
    const dstdir = path.dirname(dstpath)
    const relativeToDst = path.join(dstdir, srcpath)
    return pathExists(relativeToDst, (err, exists) => {
      if (err) return callback(err)
      if (exists) {
        return callback(null, {
          'toCwd': relativeToDst,
          'toDst': srcpath
        })
      } else {
        return fs.lstat(srcpath, (err, stat) => {
          if (err) {
            err.message = err.message.replace('lstat', 'ensureSymlink')
            return callback(err)
          }
          return callback(null, {
            'toCwd': srcpath,
            'toDst': path.relative(dstdir, srcpath)
          })
        })
      }
    })
  }
}

function symlinkPathsSync (srcpath, dstpath) {
  let exists
  if (path.isAbsolute(srcpath)) {
    exists = fs.existsSync(srcpath)
    if (!exists) throw new Error('absolute srcpath does not exist')
    return {
      'toCwd': srcpath,
      'toDst': srcpath
    }
  } else {
    const dstdir = path.dirname(dstpath)
    const relativeToDst = path.join(dstdir, srcpath)
    exists = fs.existsSync(relativeToDst)
    if (exists) {
      return {
        'toCwd': relativeToDst,
        'toDst': srcpath
      }
    } else {
      exists = fs.existsSync(srcpath)
      if (!exists) throw new Error('relative srcpath does not exist')
      return {
        'toCwd': srcpath,
        'toDst': path.relative(dstdir, srcpath)
      }
    }
  }
}

module.exports = {
  symlinkPaths,
  symlinkPathsSync
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(0)

function symlinkType (srcpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type
  if (type) return callback(null, type)
  fs.lstat(srcpath, (err, stats) => {
    if (err) return callback(null, 'file')
    type = (stats && stats.isDirectory()) ? 'dir' : 'file'
    callback(null, type)
  })
}

function symlinkTypeSync (srcpath, type) {
  let stats

  if (type) return type
  try {
    stats = fs.lstatSync(srcpath)
  } catch (e) {
    return 'file'
  }
  return (stats && stats.isDirectory()) ? 'dir' : 'file'
}

module.exports = {
  symlinkType,
  symlinkTypeSync
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(2).fromCallback
const path = __webpack_require__(1)
const fs = __webpack_require__(0)
const _mkdirs = __webpack_require__(3)
const mkdirs = _mkdirs.mkdirs
const mkdirsSync = _mkdirs.mkdirsSync

const _symlinkPaths = __webpack_require__(30)
const symlinkPaths = _symlinkPaths.symlinkPaths
const symlinkPathsSync = _symlinkPaths.symlinkPathsSync

const _symlinkType = __webpack_require__(31)
const symlinkType = _symlinkType.symlinkType
const symlinkTypeSync = _symlinkType.symlinkTypeSync

const pathExists = __webpack_require__(4).pathExists

function createSymlink (srcpath, dstpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type

  pathExists(dstpath, (err, destinationExists) => {
    if (err) return callback(err)
    if (destinationExists) return callback(null)
    symlinkPaths(srcpath, dstpath, (err, relative) => {
      if (err) return callback(err)
      srcpath = relative.toDst
      symlinkType(relative.toCwd, type, (err, type) => {
        if (err) return callback(err)
        const dir = path.dirname(dstpath)
        pathExists(dir, (err, dirExists) => {
          if (err) return callback(err)
          if (dirExists) return fs.symlink(srcpath, dstpath, type, callback)
          mkdirs(dir, err => {
            if (err) return callback(err)
            fs.symlink(srcpath, dstpath, type, callback)
          })
        })
      })
    })
  })
}

function createSymlinkSync (srcpath, dstpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type

  const destinationExists = fs.existsSync(dstpath)
  if (destinationExists) return undefined

  const relative = symlinkPathsSync(srcpath, dstpath)
  srcpath = relative.toDst
  type = symlinkTypeSync(relative.toCwd, type)
  const dir = path.dirname(dstpath)
  const exists = fs.existsSync(dir)
  if (exists) return fs.symlinkSync(srcpath, dstpath, type)
  mkdirsSync(dir)
  return fs.symlinkSync(srcpath, dstpath, type)
}

module.exports = {
  createSymlink: u(createSymlink),
  createSymlinkSync
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assign = __webpack_require__(43)

const fs = {}

// Export graceful-fs:
assign(fs, __webpack_require__(12))
// Export extra methods:
assign(fs, __webpack_require__(25))
assign(fs, __webpack_require__(10))
assign(fs, __webpack_require__(3))
assign(fs, __webpack_require__(5))
assign(fs, __webpack_require__(34))
assign(fs, __webpack_require__(40))
assign(fs, __webpack_require__(39))
assign(fs, __webpack_require__(26))
assign(fs, __webpack_require__(28))
assign(fs, __webpack_require__(41))
assign(fs, __webpack_require__(4))

module.exports = fs


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(2).fromCallback
const jsonFile = __webpack_require__(7)

jsonFile.outputJson = u(__webpack_require__(36))
jsonFile.outputJsonSync = __webpack_require__(35)
// aliases
jsonFile.outputJSON = jsonFile.outputJson
jsonFile.outputJSONSync = jsonFile.outputJsonSync
jsonFile.writeJSON = jsonFile.writeJson
jsonFile.writeJSONSync = jsonFile.writeJsonSync
jsonFile.readJSON = jsonFile.readJson
jsonFile.readJSONSync = jsonFile.readJsonSync

module.exports = jsonFile


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(0)
const path = __webpack_require__(1)
const mkdir = __webpack_require__(3)
const jsonFile = __webpack_require__(7)

function outputJsonSync (file, data, options) {
  const dir = path.dirname(file)

  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir)
  }

  jsonFile.writeJsonSync(file, data, options)
}

module.exports = outputJsonSync


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(1)
const mkdir = __webpack_require__(3)
const pathExists = __webpack_require__(4).pathExists
const jsonFile = __webpack_require__(7)

function outputJson (file, data, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  const dir = path.dirname(file)

  pathExists(dir, (err, itDoes) => {
    if (err) return callback(err)
    if (itDoes) return jsonFile.writeJson(file, data, options, callback)

    mkdir.mkdirs(dir, err => {
      if (err) return callback(err)
      jsonFile.writeJson(file, data, options, callback)
    })
  })
}

module.exports = outputJson


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(0)
const path = __webpack_require__(1)
const invalidWin32Path = __webpack_require__(13).invalidWin32Path

const o777 = parseInt('0777', 8)

function mkdirsSync (p, opts, made) {
  if (!opts || typeof opts !== 'object') {
    opts = { mode: opts }
  }

  let mode = opts.mode
  const xfs = opts.fs || fs

  if (process.platform === 'win32' && invalidWin32Path(p)) {
    const errInval = new Error(p + ' contains invalid WIN32 path characters.')
    errInval.code = 'EINVAL'
    throw errInval
  }

  if (mode === undefined) {
    mode = o777 & (~process.umask())
  }
  if (!made) made = null

  p = path.resolve(p)

  try {
    xfs.mkdirSync(p, mode)
    made = made || p
  } catch (err0) {
    switch (err0.code) {
      case 'ENOENT':
        if (path.dirname(p) === p) throw err0
        made = mkdirsSync(path.dirname(p), opts, made)
        mkdirsSync(p, opts, made)
        break

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        let stat
        try {
          stat = xfs.statSync(p)
        } catch (err1) {
          throw err0
        }
        if (!stat.isDirectory()) throw err0
        break
    }
  }

  return made
}

module.exports = mkdirsSync


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(0)
const path = __webpack_require__(1)
const invalidWin32Path = __webpack_require__(13).invalidWin32Path

const o777 = parseInt('0777', 8)

function mkdirs (p, opts, callback, made) {
  if (typeof opts === 'function') {
    callback = opts
    opts = {}
  } else if (!opts || typeof opts !== 'object') {
    opts = { mode: opts }
  }

  if (process.platform === 'win32' && invalidWin32Path(p)) {
    const errInval = new Error(p + ' contains invalid WIN32 path characters.')
    errInval.code = 'EINVAL'
    return callback(errInval)
  }

  let mode = opts.mode
  const xfs = opts.fs || fs

  if (mode === undefined) {
    mode = o777 & (~process.umask())
  }
  if (!made) made = null

  callback = callback || function () {}
  p = path.resolve(p)

  xfs.mkdir(p, mode, er => {
    if (!er) {
      made = made || p
      return callback(null, made)
    }
    switch (er.code) {
      case 'ENOENT':
        if (path.dirname(p) === p) return callback(er)
        mkdirs(path.dirname(p), opts, (er, made) => {
          if (er) callback(er, made)
          else mkdirs(p, opts, callback, made)
        })
        break

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        xfs.stat(p, (er2, stat) => {
          // if the stat fails, then that's super weird.
          // let the original error be the failure reason.
          if (er2 || !stat.isDirectory()) callback(er, made)
          else callback(null, made)
        })
        break
    }
  })
}

module.exports = mkdirs


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(0)
const path = __webpack_require__(1)
const copySync = __webpack_require__(10).copySync
const removeSync = __webpack_require__(5).removeSync
const mkdirpSync = __webpack_require__(3).mkdirsSync
const buffer = __webpack_require__(14)

function moveSync (src, dest, options) {
  options = options || {}
  const overwrite = options.overwrite || options.clobber || false

  src = path.resolve(src)
  dest = path.resolve(dest)

  if (src === dest) return fs.accessSync(src)

  if (isSrcSubdir(src, dest)) throw new Error(`Cannot move '${src}' into itself '${dest}'.`)

  mkdirpSync(path.dirname(dest))
  tryRenameSync()

  function tryRenameSync () {
    if (overwrite) {
      try {
        return fs.renameSync(src, dest)
      } catch (err) {
        if (err.code === 'ENOTEMPTY' || err.code === 'EEXIST' || err.code === 'EPERM') {
          removeSync(dest)
          options.overwrite = false // just overwriteed it, no need to do it again
          return moveSync(src, dest, options)
        }

        if (err.code !== 'EXDEV') throw err
        return moveSyncAcrossDevice(src, dest, overwrite)
      }
    } else {
      try {
        fs.linkSync(src, dest)
        return fs.unlinkSync(src)
      } catch (err) {
        if (err.code === 'EXDEV' || err.code === 'EISDIR' || err.code === 'EPERM' || err.code === 'ENOTSUP') {
          return moveSyncAcrossDevice(src, dest, overwrite)
        }
        throw err
      }
    }
  }
}

function moveSyncAcrossDevice (src, dest, overwrite) {
  const stat = fs.statSync(src)

  if (stat.isDirectory()) {
    return moveDirSyncAcrossDevice(src, dest, overwrite)
  } else {
    return moveFileSyncAcrossDevice(src, dest, overwrite)
  }
}

function moveFileSyncAcrossDevice (src, dest, overwrite) {
  const BUF_LENGTH = 64 * 1024
  const _buff = buffer(BUF_LENGTH)

  const flags = overwrite ? 'w' : 'wx'

  const fdr = fs.openSync(src, 'r')
  const stat = fs.fstatSync(fdr)
  const fdw = fs.openSync(dest, flags, stat.mode)
  let bytesRead = 1
  let pos = 0

  while (bytesRead > 0) {
    bytesRead = fs.readSync(fdr, _buff, 0, BUF_LENGTH, pos)
    fs.writeSync(fdw, _buff, 0, bytesRead)
    pos += bytesRead
  }

  fs.closeSync(fdr)
  fs.closeSync(fdw)
  return fs.unlinkSync(src)
}

function moveDirSyncAcrossDevice (src, dest, overwrite) {
  const options = {
    overwrite: false
  }

  if (overwrite) {
    removeSync(dest)
    tryCopySync()
  } else {
    tryCopySync()
  }

  function tryCopySync () {
    copySync(src, dest, options)
    return removeSync(src)
  }
}

// return true if dest is a subdir of src, otherwise false.
// extract dest base dir and check if that is the same as src basename
function isSrcSubdir (src, dest) {
  try {
    return fs.statSync(src).isDirectory() &&
           src !== dest &&
           dest.indexOf(src) > -1 &&
           dest.split(path.dirname(src) + path.sep)[1].split(path.sep)[0] === path.basename(src)
  } catch (e) {
    return false
  }
}

module.exports = {
  moveSync
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// most of this code was written by Andrew Kelley
// licensed under the BSD license: see
// https://github.com/andrewrk/node-mv/blob/master/package.json

// this needs a cleanup

const u = __webpack_require__(2).fromCallback
const fs = __webpack_require__(0)
const ncp = __webpack_require__(11)
const path = __webpack_require__(1)
const remove = __webpack_require__(5).remove
const mkdirp = __webpack_require__(3).mkdirs

function move (src, dest, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  const overwrite = options.overwrite || options.clobber || false

  isSrcSubdir(src, dest, (err, itIs) => {
    if (err) return callback(err)
    if (itIs) return callback(new Error(`Cannot move '${src}' to a subdirectory of itself, '${dest}'.`))
    mkdirp(path.dirname(dest), err => {
      if (err) return callback(err)
      doRename()
    })
  })

  function doRename () {
    if (path.resolve(src) === path.resolve(dest)) {
      fs.access(src, callback)
    } else if (overwrite) {
      fs.rename(src, dest, err => {
        if (!err) return callback()

        if (err.code === 'ENOTEMPTY' || err.code === 'EEXIST') {
          remove(dest, err => {
            if (err) return callback(err)
            options.overwrite = false // just overwriteed it, no need to do it again
            move(src, dest, options, callback)
          })
          return
        }

        // weird Windows shit
        if (err.code === 'EPERM') {
          setTimeout(() => {
            remove(dest, err => {
              if (err) return callback(err)
              options.overwrite = false
              move(src, dest, options, callback)
            })
          }, 200)
          return
        }

        if (err.code !== 'EXDEV') return callback(err)
        moveAcrossDevice(src, dest, overwrite, callback)
      })
    } else {
      fs.link(src, dest, err => {
        if (err) {
          if (err.code === 'EXDEV' || err.code === 'EISDIR' || err.code === 'EPERM' || err.code === 'ENOTSUP') {
            return moveAcrossDevice(src, dest, overwrite, callback)
          }
          return callback(err)
        }
        return fs.unlink(src, callback)
      })
    }
  }
}

function moveAcrossDevice (src, dest, overwrite, callback) {
  fs.stat(src, (err, stat) => {
    if (err) return callback(err)

    if (stat.isDirectory()) {
      moveDirAcrossDevice(src, dest, overwrite, callback)
    } else {
      moveFileAcrossDevice(src, dest, overwrite, callback)
    }
  })
}

function moveFileAcrossDevice (src, dest, overwrite, callback) {
  const flags = overwrite ? 'w' : 'wx'
  const ins = fs.createReadStream(src)
  const outs = fs.createWriteStream(dest, { flags })

  ins.on('error', err => {
    ins.destroy()
    outs.destroy()
    outs.removeListener('close', onClose)

    // may want to create a directory but `out` line above
    // creates an empty file for us: See #108
    // don't care about error here
    fs.unlink(dest, () => {
      // note: `err` here is from the input stream errror
      if (err.code === 'EISDIR' || err.code === 'EPERM') {
        moveDirAcrossDevice(src, dest, overwrite, callback)
      } else {
        callback(err)
      }
    })
  })

  outs.on('error', err => {
    ins.destroy()
    outs.destroy()
    outs.removeListener('close', onClose)
    callback(err)
  })

  outs.once('close', onClose)
  ins.pipe(outs)

  function onClose () {
    fs.unlink(src, callback)
  }
}

function moveDirAcrossDevice (src, dest, overwrite, callback) {
  const options = {
    overwrite: false
  }

  if (overwrite) {
    remove(dest, err => {
      if (err) return callback(err)
      startNcp()
    })
  } else {
    startNcp()
  }

  function startNcp () {
    ncp(src, dest, options, err => {
      if (err) return callback(err)
      remove(src, callback)
    })
  }
}

// return true if dest is a subdir of src, otherwise false.
// extract dest base dir and check if that is the same as src basename
function isSrcSubdir (src, dest, cb) {
  fs.stat(src, (err, st) => {
    if (err) return cb(err)
    if (st.isDirectory()) {
      const baseDir = dest.split(path.dirname(src) + path.sep)[1]
      if (baseDir) {
        const destBasename = baseDir.split(path.sep)[0]
        if (destBasename) return cb(null, src !== dest && dest.indexOf(src) > -1 && destBasename === path.basename(src))
        return cb(null, false)
      }
      return cb(null, false)
    }
    return cb(null, false)
  })
}

module.exports = {
  move: u(move)
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(2).fromCallback
const fs = __webpack_require__(0)
const path = __webpack_require__(1)
const mkdir = __webpack_require__(3)
const pathExists = __webpack_require__(4).pathExists

function outputFile (file, data, encoding, callback) {
  if (typeof encoding === 'function') {
    callback = encoding
    encoding = 'utf8'
  }

  const dir = path.dirname(file)
  pathExists(dir, (err, itDoes) => {
    if (err) return callback(err)
    if (itDoes) return fs.writeFile(file, data, encoding, callback)

    mkdir.mkdirs(dir, err => {
      if (err) return callback(err)

      fs.writeFile(file, data, encoding, callback)
    })
  })
}

function outputFileSync (file, data, encoding) {
  const dir = path.dirname(file)
  if (fs.existsSync(dir)) {
    return fs.writeFileSync.apply(fs, arguments)
  }
  mkdir.mkdirsSync(dir)
  fs.writeFileSync.apply(fs, arguments)
}

module.exports = {
  outputFile: u(outputFile),
  outputFileSync
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(0)
const path = __webpack_require__(1)
const assert = __webpack_require__(15)

const isWindows = (process.platform === 'win32')

function defaults (options) {
  const methods = [
    'unlink',
    'chmod',
    'stat',
    'lstat',
    'rmdir',
    'readdir'
  ]
  methods.forEach(m => {
    options[m] = options[m] || fs[m]
    m = m + 'Sync'
    options[m] = options[m] || fs[m]
  })

  options.maxBusyTries = options.maxBusyTries || 3
}

function rimraf (p, options, cb) {
  let busyTries = 0

  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  assert(p, 'rimraf: missing path')
  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
  assert.equal(typeof cb, 'function', 'rimraf: callback function required')
  assert(options, 'rimraf: invalid options argument provided')
  assert.equal(typeof options, 'object', 'rimraf: options should be object')

  defaults(options)

  rimraf_(p, options, function CB (er) {
    if (er) {
      if ((er.code === 'EBUSY' || er.code === 'ENOTEMPTY' || er.code === 'EPERM') &&
          busyTries < options.maxBusyTries) {
        busyTries++
        let time = busyTries * 100
        // try again, with the same exact callback as this one.
        return setTimeout(() => rimraf_(p, options, CB), time)
      }

      // already gone
      if (er.code === 'ENOENT') er = null
    }

    cb(er)
  })
}

// Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.
function rimraf_ (p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  // sunos lets the root user unlink directories, which is... weird.
  // so we have to lstat here and make sure it's not a dir.
  options.lstat(p, (er, st) => {
    if (er && er.code === 'ENOENT') {
      return cb(null)
    }

    // Windows can EPERM on stat.  Life is suffering.
    if (er && er.code === 'EPERM' && isWindows) {
      return fixWinEPERM(p, options, er, cb)
    }

    if (st && st.isDirectory()) {
      return rmdir(p, options, er, cb)
    }

    options.unlink(p, er => {
      if (er) {
        if (er.code === 'ENOENT') {
          return cb(null)
        }
        if (er.code === 'EPERM') {
          return (isWindows)
            ? fixWinEPERM(p, options, er, cb)
            : rmdir(p, options, er, cb)
        }
        if (er.code === 'EISDIR') {
          return rmdir(p, options, er, cb)
        }
      }
      return cb(er)
    })
  })
}

function fixWinEPERM (p, options, er, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')
  if (er) {
    assert(er instanceof Error)
  }

  options.chmod(p, 0o666, er2 => {
    if (er2) {
      cb(er2.code === 'ENOENT' ? null : er)
    } else {
      options.stat(p, (er3, stats) => {
        if (er3) {
          cb(er3.code === 'ENOENT' ? null : er)
        } else if (stats.isDirectory()) {
          rmdir(p, options, er, cb)
        } else {
          options.unlink(p, cb)
        }
      })
    }
  })
}

function fixWinEPERMSync (p, options, er) {
  let stats

  assert(p)
  assert(options)
  if (er) {
    assert(er instanceof Error)
  }

  try {
    options.chmodSync(p, 0o666)
  } catch (er2) {
    if (er2.code === 'ENOENT') {
      return
    } else {
      throw er
    }
  }

  try {
    stats = options.statSync(p)
  } catch (er3) {
    if (er3.code === 'ENOENT') {
      return
    } else {
      throw er
    }
  }

  if (stats.isDirectory()) {
    rmdirSync(p, options, er)
  } else {
    options.unlinkSync(p)
  }
}

function rmdir (p, options, originalEr, cb) {
  assert(p)
  assert(options)
  if (originalEr) {
    assert(originalEr instanceof Error)
  }
  assert(typeof cb === 'function')

  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
  // if we guessed wrong, and it's not a directory, then
  // raise the original error.
  options.rmdir(p, er => {
    if (er && (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM')) {
      rmkids(p, options, cb)
    } else if (er && er.code === 'ENOTDIR') {
      cb(originalEr)
    } else {
      cb(er)
    }
  })
}

function rmkids (p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  options.readdir(p, (er, files) => {
    if (er) return cb(er)

    let n = files.length
    let errState

    if (n === 0) return options.rmdir(p, cb)

    files.forEach(f => {
      rimraf(path.join(p, f), options, er => {
        if (errState) {
          return
        }
        if (er) return cb(errState = er)
        if (--n === 0) {
          options.rmdir(p, cb)
        }
      })
    })
  })
}

// this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.
function rimrafSync (p, options) {
  let st

  options = options || {}
  defaults(options)

  assert(p, 'rimraf: missing path')
  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
  assert(options, 'rimraf: missing options')
  assert.equal(typeof options, 'object', 'rimraf: options should be object')

  try {
    st = options.lstatSync(p)
  } catch (er) {
    if (er.code === 'ENOENT') {
      return
    }

    // Windows can EPERM on stat.  Life is suffering.
    if (er.code === 'EPERM' && isWindows) {
      fixWinEPERMSync(p, options, er)
    }
  }

  try {
    // sunos lets the root user unlink directories, which is... weird.
    if (st && st.isDirectory()) {
      rmdirSync(p, options, null)
    } else {
      options.unlinkSync(p)
    }
  } catch (er) {
    if (er.code === 'ENOENT') {
      return
    } else if (er.code === 'EPERM') {
      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
    } else if (er.code !== 'EISDIR') {
      throw er
    }
    rmdirSync(p, options, er)
  }
}

function rmdirSync (p, options, originalEr) {
  assert(p)
  assert(options)
  if (originalEr) {
    assert(originalEr instanceof Error)
  }

  try {
    options.rmdirSync(p)
  } catch (er) {
    if (er.code === 'ENOTDIR') {
      throw originalEr
    } else if (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM') {
      rmkidsSync(p, options)
    } else if (er.code !== 'ENOENT') {
      throw er
    }
  }
}

function rmkidsSync (p, options) {
  assert(p)
  assert(options)
  options.readdirSync(p).forEach(f => rimrafSync(path.join(p, f), options))

  // We only end up here once we got ENOTEMPTY at least once, and
  // at this point, we are guaranteed to have removed all the kids.
  // So, we know that it won't be ENOENT or ENOTDIR or anything else.
  // try really hard to delete stuff on windows, because it has a
  // PROFOUNDLY annoying habit of not closing handles promptly when
  // files are deleted, resulting in spurious ENOTEMPTY errors.
  const retries = isWindows ? 100 : 1
  let i = 0
  do {
    let threw = true
    try {
      const ret = options.rmdirSync(p, options)
      threw = false
      return ret
    } finally {
      if (++i < retries && threw) continue // eslint-disable-line
    }
  } while (true)
}

module.exports = rimraf
rimraf.sync = rimrafSync


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// simple mutable assign
function assign () {
  const args = [].slice.call(arguments).filter(i => i)
  const dest = args.shift()
  args.forEach(src => {
    Object.keys(src).forEach(key => {
      dest[key] = src[key]
    })
  })

  return dest
}

module.exports = assign


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(0)
const os = __webpack_require__(53)
const path = __webpack_require__(1)

// HFS, ext{2,3}, FAT do not, Node.js v0.10 does not
function hasMillisResSync () {
  let tmpfile = path.join('millis-test-sync' + Date.now().toString() + Math.random().toString().slice(2))
  tmpfile = path.join(os.tmpdir(), tmpfile)

  // 550 millis past UNIX epoch
  const d = new Date(1435410243862)
  fs.writeFileSync(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141')
  const fd = fs.openSync(tmpfile, 'r+')
  fs.futimesSync(fd, d, d)
  fs.closeSync(fd)
  return fs.statSync(tmpfile).mtime > 1435410243000
}

function hasMillisRes (callback) {
  let tmpfile = path.join('millis-test' + Date.now().toString() + Math.random().toString().slice(2))
  tmpfile = path.join(os.tmpdir(), tmpfile)

  // 550 millis past UNIX epoch
  const d = new Date(1435410243862)
  fs.writeFile(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141', err => {
    if (err) return callback(err)
    fs.open(tmpfile, 'r+', (err, fd) => {
      if (err) return callback(err)
      fs.futimes(fd, d, d, err => {
        if (err) return callback(err)
        fs.close(fd, err => {
          if (err) return callback(err)
          fs.stat(tmpfile, (err, stats) => {
            if (err) return callback(err)
            callback(null, stats.mtime > 1435410243000)
          })
        })
      })
    })
  })
}

function timeRemoveMillis (timestamp) {
  if (typeof timestamp === 'number') {
    return Math.floor(timestamp / 1000) * 1000
  } else if (timestamp instanceof Date) {
    return new Date(Math.floor(timestamp.getTime() / 1000) * 1000)
  } else {
    throw new Error('fs-extra: timeRemoveMillis() unknown parameter type')
  }
}

function utimesMillis (path, atime, mtime, callback) {
  // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
  fs.open(path, 'r+', (err, fd) => {
    if (err) return callback(err)
    fs.futimes(fd, atime, mtime, futimesErr => {
      fs.close(fd, closeErr => {
        if (callback) callback(futimesErr || closeErr)
      })
    })
  })
}

module.exports = {
  hasMillisRes,
  hasMillisResSync,
  timeRemoveMillis,
  utimesMillis
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = clone

function clone (obj) {
  if (obj === null || typeof obj !== 'object')
    return obj

  if (obj instanceof Object)
    var copy = { __proto__: obj.__proto__ }
  else
    var copy = Object.create(null)

  Object.getOwnPropertyNames(obj).forEach(function (key) {
    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key))
  })

  return copy
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Stream = __webpack_require__(54).Stream

module.exports = legacy

function legacy (fs) {
  return {
    ReadStream: ReadStream,
    WriteStream: WriteStream
  }

  function ReadStream (path, options) {
    if (!(this instanceof ReadStream)) return new ReadStream(path, options);

    Stream.call(this);

    var self = this;

    this.path = path;
    this.fd = null;
    this.readable = true;
    this.paused = false;

    this.flags = 'r';
    this.mode = 438; /*=0666*/
    this.bufferSize = 64 * 1024;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.encoding) this.setEncoding(this.encoding);

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.end === undefined) {
        this.end = Infinity;
      } else if ('number' !== typeof this.end) {
        throw TypeError('end must be a Number');
      }

      if (this.start > this.end) {
        throw new Error('start must be <= end');
      }

      this.pos = this.start;
    }

    if (this.fd !== null) {
      process.nextTick(function() {
        self._read();
      });
      return;
    }

    fs.open(this.path, this.flags, this.mode, function (err, fd) {
      if (err) {
        self.emit('error', err);
        self.readable = false;
        return;
      }

      self.fd = fd;
      self.emit('open', fd);
      self._read();
    })
  }

  function WriteStream (path, options) {
    if (!(this instanceof WriteStream)) return new WriteStream(path, options);

    Stream.call(this);

    this.path = path;
    this.fd = null;
    this.writable = true;

    this.flags = 'w';
    this.encoding = 'binary';
    this.mode = 438; /*=0666*/
    this.bytesWritten = 0;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.start < 0) {
        throw new Error('start must be >= zero');
      }

      this.pos = this.start;
    }

    this.busy = false;
    this._queue = [];

    if (this.fd === null) {
      this._open = fs.open;
      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
      this.flush();
    }
  }
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var constants = __webpack_require__(51)

var origCwd = process.cwd
var cwd = null

var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform

process.cwd = function() {
  if (!cwd)
    cwd = origCwd.call(process)
  return cwd
}
try {
  process.cwd()
} catch (er) {}

var chdir = process.chdir
process.chdir = function(d) {
  cwd = null
  chdir.call(process, d)
}

module.exports = patch

function patch (fs) {
  // (re-)implement some things that are known busted or missing.

  // lchmod, broken prior to 0.6.2
  // back-port the fix here.
  if (constants.hasOwnProperty('O_SYMLINK') &&
      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
    patchLchmod(fs)
  }

  // lutimes implementation, or no-op
  if (!fs.lutimes) {
    patchLutimes(fs)
  }

  // https://github.com/isaacs/node-graceful-fs/issues/4
  // Chown should not fail on einval or eperm if non-root.
  // It should not fail on enosys ever, as this just indicates
  // that a fs doesn't support the intended operation.

  fs.chown = chownFix(fs.chown)
  fs.fchown = chownFix(fs.fchown)
  fs.lchown = chownFix(fs.lchown)

  fs.chmod = chmodFix(fs.chmod)
  fs.fchmod = chmodFix(fs.fchmod)
  fs.lchmod = chmodFix(fs.lchmod)

  fs.chownSync = chownFixSync(fs.chownSync)
  fs.fchownSync = chownFixSync(fs.fchownSync)
  fs.lchownSync = chownFixSync(fs.lchownSync)

  fs.chmodSync = chmodFixSync(fs.chmodSync)
  fs.fchmodSync = chmodFixSync(fs.fchmodSync)
  fs.lchmodSync = chmodFixSync(fs.lchmodSync)

  fs.stat = statFix(fs.stat)
  fs.fstat = statFix(fs.fstat)
  fs.lstat = statFix(fs.lstat)

  fs.statSync = statFixSync(fs.statSync)
  fs.fstatSync = statFixSync(fs.fstatSync)
  fs.lstatSync = statFixSync(fs.lstatSync)

  // if lchmod/lchown do not exist, then make them no-ops
  if (!fs.lchmod) {
    fs.lchmod = function (path, mode, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchmodSync = function () {}
  }
  if (!fs.lchown) {
    fs.lchown = function (path, uid, gid, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchownSync = function () {}
  }

  // on Windows, A/V software can lock the directory, causing this
  // to fail with an EACCES or EPERM if the directory contains newly
  // created files.  Try again on failure, for up to 60 seconds.

  // Set the timeout this long because some Windows Anti-Virus, such as Parity
  // bit9, may lock files for up to a minute, causing npm package install
  // failures. Also, take care to yield the scheduler. Windows scheduling gives
  // CPU to a busy looping process, which can cause the program causing the lock
  // contention to be starved of CPU by node, so the contention doesn't resolve.
  if (platform === "win32") {
    fs.rename = (function (fs$rename) { return function (from, to, cb) {
      var start = Date.now()
      var backoff = 0;
      fs$rename(from, to, function CB (er) {
        if (er
            && (er.code === "EACCES" || er.code === "EPERM")
            && Date.now() - start < 60000) {
          setTimeout(function() {
            fs.stat(to, function (stater, st) {
              if (stater && stater.code === "ENOENT")
                fs$rename(from, to, CB);
              else
                cb(er)
            })
          }, backoff)
          if (backoff < 100)
            backoff += 10;
          return;
        }
        if (cb) cb(er)
      })
    }})(fs.rename)
  }

  // if read() returns EAGAIN, then just try it again.
  fs.read = (function (fs$read) {
    function read (fd, buffer, offset, length, position, callback_) {
      var callback
      if (callback_ && typeof callback_ === 'function') {
        var eagCounter = 0
        callback = function (er, _, __) {
          if (er && er.code === 'EAGAIN' && eagCounter < 10) {
            eagCounter ++
            return fs$read.call(fs, fd, buffer, offset, length, position, callback)
          }
          callback_.apply(this, arguments)
        }
      }
      return fs$read.call(fs, fd, buffer, offset, length, position, callback)
    }

    // This ensures `util.promisify` works as it does for native `fs.read`.
    read.__proto__ = fs$read
    return read
  })(fs.read)

  fs.readSync = (function (fs$readSync) { return function (fd, buffer, offset, length, position) {
    var eagCounter = 0
    while (true) {
      try {
        return fs$readSync.call(fs, fd, buffer, offset, length, position)
      } catch (er) {
        if (er.code === 'EAGAIN' && eagCounter < 10) {
          eagCounter ++
          continue
        }
        throw er
      }
    }
  }})(fs.readSync)

  function patchLchmod (fs) {
    fs.lchmod = function (path, mode, callback) {
      fs.open( path
             , constants.O_WRONLY | constants.O_SYMLINK
             , mode
             , function (err, fd) {
        if (err) {
          if (callback) callback(err)
          return
        }
        // prefer to return the chmod error, if one occurs,
        // but still try to close, and report closing errors if they occur.
        fs.fchmod(fd, mode, function (err) {
          fs.close(fd, function(err2) {
            if (callback) callback(err || err2)
          })
        })
      })
    }

    fs.lchmodSync = function (path, mode) {
      var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode)

      // prefer to return the chmod error, if one occurs,
      // but still try to close, and report closing errors if they occur.
      var threw = true
      var ret
      try {
        ret = fs.fchmodSync(fd, mode)
        threw = false
      } finally {
        if (threw) {
          try {
            fs.closeSync(fd)
          } catch (er) {}
        } else {
          fs.closeSync(fd)
        }
      }
      return ret
    }
  }

  function patchLutimes (fs) {
    if (constants.hasOwnProperty("O_SYMLINK")) {
      fs.lutimes = function (path, at, mt, cb) {
        fs.open(path, constants.O_SYMLINK, function (er, fd) {
          if (er) {
            if (cb) cb(er)
            return
          }
          fs.futimes(fd, at, mt, function (er) {
            fs.close(fd, function (er2) {
              if (cb) cb(er || er2)
            })
          })
        })
      }

      fs.lutimesSync = function (path, at, mt) {
        var fd = fs.openSync(path, constants.O_SYMLINK)
        var ret
        var threw = true
        try {
          ret = fs.futimesSync(fd, at, mt)
          threw = false
        } finally {
          if (threw) {
            try {
              fs.closeSync(fd)
            } catch (er) {}
          } else {
            fs.closeSync(fd)
          }
        }
        return ret
      }

    } else {
      fs.lutimes = function (_a, _b, _c, cb) { if (cb) process.nextTick(cb) }
      fs.lutimesSync = function () {}
    }
  }

  function chmodFix (orig) {
    if (!orig) return orig
    return function (target, mode, cb) {
      return orig.call(fs, target, mode, function (er) {
        if (chownErOk(er)) er = null
        if (cb) cb.apply(this, arguments)
      })
    }
  }

  function chmodFixSync (orig) {
    if (!orig) return orig
    return function (target, mode) {
      try {
        return orig.call(fs, target, mode)
      } catch (er) {
        if (!chownErOk(er)) throw er
      }
    }
  }


  function chownFix (orig) {
    if (!orig) return orig
    return function (target, uid, gid, cb) {
      return orig.call(fs, target, uid, gid, function (er) {
        if (chownErOk(er)) er = null
        if (cb) cb.apply(this, arguments)
      })
    }
  }

  function chownFixSync (orig) {
    if (!orig) return orig
    return function (target, uid, gid) {
      try {
        return orig.call(fs, target, uid, gid)
      } catch (er) {
        if (!chownErOk(er)) throw er
      }
    }
  }

  function statFix (orig) {
    if (!orig) return orig
    // Older versions of Node erroneously returned signed integers for
    // uid + gid.
    return function (target, options, cb) {
      if (typeof options === 'function') {
        cb = options
        options = null
      }
      function callback (er, stats) {
        if (stats) {
          if (stats.uid < 0) stats.uid += 0x100000000
          if (stats.gid < 0) stats.gid += 0x100000000
        }
        if (cb) cb.apply(this, arguments)
      }
      return options ? orig.call(fs, target, options, callback)
        : orig.call(fs, target, callback)
    }
  }

  function statFixSync (orig) {
    if (!orig) return orig
    // Older versions of Node erroneously returned signed integers for
    // uid + gid.
    return function (target, options) {
      var stats = options ? orig.call(fs, target, options)
        : orig.call(fs, target)
      if (stats.uid < 0) stats.uid += 0x100000000
      if (stats.gid < 0) stats.gid += 0x100000000
      return stats;
    }
  }

  // ENOSYS means that the fs doesn't support the op. Just ignore
  // that, because it doesn't matter.
  //
  // if there's no getuid, or if getuid() is something other
  // than 0, and the error is EINVAL or EPERM, then just ignore
  // it.
  //
  // This specific case is a silent failure in cp, install, tar,
  // and most other unix tools that manage permissions.
  //
  // When running as root, or if other types of errors are
  // encountered, then it's strict.
  function chownErOk (er) {
    if (!er)
      return true

    if (er.code === "ENOSYS")
      return true

    var nonroot = !process.getuid || process.getuid() !== 0
    if (nonroot) {
      if (er.code === "EINVAL" || er.code === "EPERM")
        return true
    }

    return false
  }
}


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = ["PartnerProducts.bose.json","PartnerProducts.json","_deviceWebPage.html","autoplugins.brs","autorun-setup-simple-networking.brs","autoscheduleSetup.json","autoxml.brs","autozip.brs","bsDateTimeWidget.html","featureMinRevs.json","localSetup.brs","setup.brs","setupCommon.brs","setupNetworkDiagnostics.brs","standaloneToBsnSetup.brs"]

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var _fs
try {
  _fs = __webpack_require__(0)
} catch (_) {
  _fs = __webpack_require__(8)
}

function readFile (file, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }

  if (typeof options === 'string') {
    options = {encoding: options}
  }

  options = options || {}
  var fs = options.fs || _fs

  var shouldThrow = true
  if ('throws' in options) {
    shouldThrow = options.throws
  }

  fs.readFile(file, options, function (err, data) {
    if (err) return callback(err)

    data = stripBom(data)

    var obj
    try {
      obj = JSON.parse(data, options ? options.reviver : null)
    } catch (err2) {
      if (shouldThrow) {
        err2.message = file + ': ' + err2.message
        return callback(err2)
      } else {
        return callback(null, null)
      }
    }

    callback(null, obj)
  })
}

function readFileSync (file, options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {encoding: options}
  }

  var fs = options.fs || _fs

  var shouldThrow = true
  if ('throws' in options) {
    shouldThrow = options.throws
  }

  try {
    var content = fs.readFileSync(file, options)
    content = stripBom(content)
    return JSON.parse(content, options.reviver)
  } catch (err) {
    if (shouldThrow) {
      err.message = file + ': ' + err.message
      throw err
    } else {
      return null
    }
  }
}

function stringify (obj, options) {
  var spaces
  var EOL = '\n'
  if (typeof options === 'object' && options !== null) {
    if (options.spaces) {
      spaces = options.spaces
    }
    if (options.EOL) {
      EOL = options.EOL
    }
  }

  var str = JSON.stringify(obj, options ? options.replacer : null, spaces)

  return str.replace(/\n/g, EOL) + EOL
}

function writeFile (file, obj, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }
  options = options || {}
  var fs = options.fs || _fs

  var str = ''
  try {
    str = stringify(obj, options)
  } catch (err) {
    // Need to return whether a callback was passed or not
    if (callback) callback(err, null)
    return
  }

  fs.writeFile(file, str, options, callback)
}

function writeFileSync (file, obj, options) {
  options = options || {}
  var fs = options.fs || _fs

  var str = stringify(obj, options)
  // not sure if fs.writeFileSync returns anything, but just in case
  return fs.writeFileSync(file, str, options)
}

function stripBom (content) {
  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
  if (Buffer.isBuffer(content)) content = content.toString('utf8')
  content = content.replace(/^\uFEFF/, '')
  return content
}

var jsonfile = {
  readFile: readFile,
  readFileSync: readFileSync,
  writeFile: writeFile,
  writeFileSync: writeFileSync
}

module.exports = jsonfile


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-path");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })
/******/ ]);
});
//# sourceMappingURL=bs-device-artifacts.js.map