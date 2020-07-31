(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("./bscore"), require("redux"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "./bscore", "redux"], factory);
	else if(typeof exports === 'object')
		exports["bs-playlist-dm"] = factory(require("lodash"), require("./bscore"), require("redux"));
	else
		root["bs-playlist-dm"] = factory(root["lodash"], root["./bscore"], root["redux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_15__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlDmIsPlDmError = exports.PlDmError = exports.PlDmErrorType = void 0;
var PlDmErrorType;
(function (PlDmErrorType) {
    PlDmErrorType[PlDmErrorType["unknownError"] = 0] = "unknownError";
    PlDmErrorType[PlDmErrorType["unexpectedError"] = 1] = "unexpectedError";
    PlDmErrorType[PlDmErrorType["invalidParameters"] = 2] = "invalidParameters";
    PlDmErrorType[PlDmErrorType["invalidOperation"] = 3] = "invalidOperation";
    PlDmErrorType[PlDmErrorType["apiError"] = 4] = "apiError";
    PlDmErrorType[PlDmErrorType["assetNotFound"] = 5] = "assetNotFound";
    PlDmErrorType[PlDmErrorType["invalidSign"] = 6] = "invalidSign";
    PlDmErrorType[PlDmErrorType["pluginNameInUse"] = 7] = "pluginNameInUse";
    PlDmErrorType[PlDmErrorType["parserPluginFunctionNameInUse"] = 8] = "parserPluginFunctionNameInUse";
})(PlDmErrorType = exports.PlDmErrorType || (exports.PlDmErrorType = {}));
var bsnErrorMessage = (_a = {},
    _a[PlDmErrorType.unknownError] = 'Unknown error',
    _a[PlDmErrorType.unexpectedError] = 'Unexpected error',
    _a[PlDmErrorType.invalidParameters] = 'Invalid parameters',
    _a[PlDmErrorType.invalidOperation] = 'Invalid operation attempt',
    _a[PlDmErrorType.apiError] = 'API error',
    _a[PlDmErrorType.assetNotFound] = 'The asset was not found in the asset list',
    _a[PlDmErrorType.invalidSign] = 'Invalid presentation',
    _a[PlDmErrorType.pluginNameInUse] = 'Script plugin file name can only be used once',
    _a[PlDmErrorType.parserPluginFunctionNameInUse] = 'Parser plugin function name can only be used once',
    _a);
var PlDmError = (function (_super) {
    __extends(PlDmError, _super);
    function PlDmError(type, reason, action) {
        var _this = _super.call(this) || this;
        _this.name = 'PlDmError';
        _this.type = type;
        if (reason) {
            _this.message = bsnErrorMessage[type] + ': ' + reason;
        }
        else {
            _this.message = bsnErrorMessage[type];
        }
        if (action) {
            _this.action = Object.assign({}, action, { error: true, meta: { reason: _this.message } });
        }
        Object.setPrototypeOf(_this, PlDmError.prototype);
        return _this;
    }
    PlDmError.prototype.attachAction = function (action) {
        this.action = Object.assign({}, action, { error: true, meta: { reason: this.message } });
    };
    return PlDmError;
}(Error));
exports.PlDmError = PlDmError;
function PlDmIsPlDmError(error) {
    return error instanceof PlDmError;
}
exports.PlDmIsPlDmError = PlDmIsPlDmError;


/***/ }),
/* 2 */
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
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(12), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmGetBaseState = exports.plDmGetBaseStateForUniversalTimeZone = exports.plDmFilterBaseState = void 0;
var lodash_1 = __webpack_require__(0);
var plDmError_1 = __webpack_require__(1);
var bscore_1 = __webpack_require__(5);
function plDmCheckForInvalidPlDmPlaylistState(state) {
    if (typeof state === 'object'
        && state.hasOwnProperty('playlist')
        && state.hasOwnProperty('assetMap')
        && state.hasOwnProperty('contentItems')
        && state.hasOwnProperty('modifiedTime')) {
        return null;
    }
    else {
        return new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidSign, 'PlDmState structure is invalid');
    }
}
exports.plDmFilterBaseState = function (state) {
    if (state.hasOwnProperty('bspl') && (plDmCheckForInvalidPlDmPlaylistState(state.bspl) === null)) {
        return state.bspl;
    }
    else if (plDmCheckForInvalidPlDmPlaylistState(state) === null) {
        return state;
    }
    else {
        var exceptionMessage = "state must be of type PlDmState or have a field bspl\n      of type PlDmState. invalid state " + JSON.stringify(state);
        throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, exceptionMessage);
    }
};
exports.plDmGetBaseStateForUniversalTimeZone = function (state) {
    var baseState = lodash_1.cloneDeep(exports.plDmFilterBaseState(state));
    baseState.contentItems.allContentItems.forEach(function (id) {
        var contentItem = baseState.contentItems.contentItemsById[id];
        if (contentItem.enableValidityDate === true) {
            contentItem.validityStartDate = bscore_1.bscReplaceTimeZoneWithUTC(contentItem.validityStartDate);
            contentItem.validityEndDate = bscore_1.bscReplaceTimeZoneWithUTC(contentItem.validityEndDate);
        }
    });
    return baseState;
};
exports.plDmGetBaseState = function (state) {
    return exports.plDmFilterBaseState(state);
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["defaultMemoize"] = defaultMemoize;
/* harmony export (immutable) */ __webpack_exports__["createSelectorCreator"] = createSelectorCreator;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony export (immutable) */ __webpack_exports__["createStructuredSelector"] = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("./bscore");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmFilterPlDmState = exports.plDmClearStateAction = exports.plDmBatchActions = exports.PLDM_CLEAR_STATE = exports.BSDM_BATCH = void 0;
exports.BSDM_BATCH = 'PLDM_BSDM_BATCH';
exports.PLDM_CLEAR_STATE = 'PLDM_CLEAR_STATE';
function plDmBatchActions(actions) {
    return { type: exports.BSDM_BATCH, payload: actions };
}
exports.plDmBatchActions = plDmBatchActions;
function plDmClearStateAction() {
    return { type: exports.PLDM_CLEAR_STATE, payload: null };
}
exports.plDmClearStateAction = plDmClearStateAction;
function plDmFilterPlDmState(state) {
    if (state.hasOwnProperty('bspl')) {
        return state.bspl;
    }
    else if (state.hasOwnProperty('bsplaylist')) {
        return state.bsplaylist;
    }
    return state;
}
exports.plDmFilterPlDmState = plDmFilterPlDmState;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createNextDefaultCustomFieldName = exports.createDefaultLiveMediaFeedProperties = exports.createDefaultPlaylistProperties = exports.isValidPlDmId = exports.newPlDmId = void 0;
var uuid_1 = __webpack_require__(35);
exports.newPlDmId = function () { return uuid_1.v4(); };
var reValidId = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
exports.isValidPlDmId = function (id) {
    var ret = id.match(reValidId);
    return ret && id === ret[0];
};
exports.createDefaultPlaylistProperties = function (id, name, supportsAudio, supportsVideo, supportsImages, shuffle) {
    return {
        id: id,
        name: name,
        shuffle: shuffle ? shuffle : false,
        supportsAudio: supportsAudio,
        supportsVideo: supportsVideo,
        supportsImages: supportsImages,
        lastModifiedDate: null,
    };
};
exports.createDefaultLiveMediaFeedProperties = function (id, name, ttl) {
    if (ttl === void 0) { ttl = 300; }
    return {
        id: id,
        name: name,
        ttl: ttl,
        lastModifiedDate: null,
    };
};
exports.createNextDefaultCustomFieldName = function (currentCustomFieldNames) {
    if (currentCustomFieldNames === void 0) { currentCustomFieldNames = {}; }
    var index = 1;
    var validName = false;
    while (!validName) {
        var match = false;
        for (var _i = 0, _a = Object.keys(currentCustomFieldNames); _i < _a.length; _i++) {
            var id = _a[_i];
            if (currentCustomFieldNames[id] === "CustomField" + index) {
                match = true;
                break;
            }
        }
        if (!match) {
            return "CustomField" + index;
        }
        else {
            index++;
        }
    }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmCreateTextContentItem = exports.plDmCreateImageContentItem = exports.plDmCreateAudioContentItem = exports.plDmCreateVideoContentItem = exports.plDmContentItemIsMediaFeedContentItem = exports.plDmContentItemIsMediaContentItem = exports.plDmCreateLiveMediaFeedMediaContentItem = exports.plDmCreateMediaContentItem = exports.plDmCreateAssetItemFromLocalFile = void 0;
var bscore_1 = __webpack_require__(5);
var lodash_1 = __webpack_require__(0);
var plDmDefaults_1 = __webpack_require__(17);
function plDmCreateAssetItemFromLocalFile(fullPath, id, mediaType, assetType) {
    if (id === void 0) { id = ''; }
    if (mediaType === void 0) { mediaType = null; }
    if (assetType === void 0) { assetType = null; }
    var name = fullPath.replace(/^.*[\\\/]/, '');
    var path = fullPath.substr(0, fullPath.length - name.length);
    var fileTypeInfo;
    if (mediaType) {
        fileTypeInfo = { assetType: bscore_1.AssetType.Content, mediaType: mediaType };
    }
    else {
        fileTypeInfo = bscore_1.bscGetBscFileTypeInfo(name);
    }
    var assetItem = {
        id: id,
        name: name,
        path: path,
        networkId: 0,
        location: bscore_1.AssetLocation.Local,
        locator: bscore_1.bscGetLocalAssetLocatorKey(fullPath),
        assetType: assetType ? assetType : fileTypeInfo.assetType,
        scope: '',
    };
    if (assetItem.assetType === bscore_1.AssetType.Content) {
        assetItem.mediaType = fileTypeInfo.mediaType;
    }
    return assetItem;
}
exports.plDmCreateAssetItemFromLocalFile = plDmCreateAssetItemFromLocalFile;
function plDmCreateMediaContentItem(id, name, assetId, mediaType, displayDuration, validityStartDate, validityEndDate) {
    switch (mediaType) {
        case bscore_1.MediaType.Video:
            return plDmCreateVideoContentItem(id, name, assetId, !lodash_1.isNil(validityStartDate) && !lodash_1.isNil(validityEndDate), validityStartDate, validityEndDate);
        case bscore_1.MediaType.Audio:
            return plDmCreateAudioContentItem(id, name, assetId, !lodash_1.isNil(validityStartDate) && !lodash_1.isNil(validityEndDate), validityStartDate, validityEndDate);
        case bscore_1.MediaType.Image:
            return plDmCreateImageContentItem(id, name, assetId, displayDuration, !lodash_1.isNil(validityStartDate) && !lodash_1.isNil(validityEndDate), validityStartDate, validityEndDate);
        case bscore_1.MediaType.Text:
            return plDmCreateTextContentItem(id, name, assetId, displayDuration, !lodash_1.isNil(validityStartDate) && !lodash_1.isNil(validityEndDate), validityStartDate, validityEndDate);
        default:
            return undefined;
    }
}
exports.plDmCreateMediaContentItem = plDmCreateMediaContentItem;
function plDmCreateLiveMediaFeedMediaContentItem(id, name, assetId, mediaType, customFieldsMap, description, title, displayDuration, validityStartDate, validityEndDate) {
    if (description === void 0) { description = ''; }
    if (title === void 0) { title = ''; }
    var result = plDmCreateMediaContentItem(id, name, assetId, mediaType, displayDuration, validityStartDate, validityEndDate);
    return Object.assign(result, { customFieldsMap: customFieldsMap, description: description, title: title, disable: false });
}
exports.plDmCreateLiveMediaFeedMediaContentItem = plDmCreateLiveMediaFeedMediaContentItem;
function plDmContentItemIsMediaContentItem(contentItem) {
    return contentItem.hasOwnProperty('assetId');
}
exports.plDmContentItemIsMediaContentItem = plDmContentItemIsMediaContentItem;
function plDmContentItemIsMediaFeedContentItem(contentItem) {
    return contentItem.hasOwnProperty('customFieldsMap');
}
exports.plDmContentItemIsMediaFeedContentItem = plDmContentItemIsMediaFeedContentItem;
function plDmCreateVideoContentItem(id, name, assetId, enableValidityDate, validityStartDate, validityEndDate, volume, videoDisplayMode, automaticallyLoop) {
    var defaults = plDmDefaults_1.plDmGetDefaultVideoContentItemData();
    return {
        id: id,
        name: name,
        type: bscore_1.ContentItemType.Video,
        assetId: assetId,
        enableValidityDate: (enableValidityDate === undefined ? false : enableValidityDate),
        validityStartDate: (validityStartDate === undefined ? null : validityStartDate),
        validityEndDate: (validityEndDate === undefined ? null : validityEndDate),
        volume: (volume === undefined ? defaults.volume : volume),
        videoDisplayMode: (videoDisplayMode === undefined ? defaults.videoDisplayMode : videoDisplayMode),
        automaticallyLoop: (automaticallyLoop === undefined ? defaults.automaticallyLoop : automaticallyLoop),
    };
}
exports.plDmCreateVideoContentItem = plDmCreateVideoContentItem;
function plDmCreateAudioContentItem(id, name, assetId, enableValidityDate, validityStartDate, validityEndDate, volume) {
    var defaults = plDmDefaults_1.plDmGetDefaultAudioContentItemData();
    return {
        id: id,
        name: name,
        type: bscore_1.ContentItemType.Audio,
        assetId: assetId,
        enableValidityDate: (enableValidityDate === undefined ? false : enableValidityDate),
        validityStartDate: (validityStartDate === undefined ? null : validityStartDate),
        validityEndDate: (validityEndDate === undefined ? null : validityEndDate),
        volume: (volume === undefined ? defaults.volume : volume),
    };
}
exports.plDmCreateAudioContentItem = plDmCreateAudioContentItem;
function plDmCreateImageContentItem(id, name, assetId, displayDuration, enableValidityDate, validityStartDate, validityEndDate, useImageBuffer, videoPlayerRequired) {
    var defaults = plDmDefaults_1.plDmGetDefaultImageContentItemData();
    return {
        id: id,
        name: name,
        type: bscore_1.ContentItemType.Image,
        assetId: assetId,
        enableValidityDate: (lodash_1.isNil(enableValidityDate) ? false : enableValidityDate),
        validityStartDate: (lodash_1.isNil(validityStartDate) ? null : validityStartDate),
        validityEndDate: (lodash_1.isNil(validityEndDate) ? null : validityEndDate),
        useImageBuffer: (lodash_1.isNil(useImageBuffer) ? defaults.useImageBuffer : useImageBuffer),
        videoPlayerRequired: (lodash_1.isNil(videoPlayerRequired) ? defaults.videoPlayerRequired : videoPlayerRequired),
        displayDuration: (lodash_1.isNil(displayDuration) ? defaults.displayDuration : displayDuration),
    };
}
exports.plDmCreateImageContentItem = plDmCreateImageContentItem;
function plDmCreateTextContentItem(id, name, assetId, displayDuration, enableValidityDate, validityStartDate, validityEndDate) {
    return {
        id: id,
        name: name,
        type: bscore_1.ContentItemType.Text,
        assetId: assetId,
        enableValidityDate: (enableValidityDate === undefined ? false : enableValidityDate),
        validityStartDate: (validityStartDate === undefined ? null : validityStartDate),
        validityEndDate: (validityEndDate === undefined ? null : validityEndDate),
        displayDuration: (displayDuration === undefined ? 6 : displayDuration),
    };
}
exports.plDmCreateTextContentItem = plDmCreateTextContentItem;


/***/ }),
/* 9 */
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
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmRemoveAssetItems = exports.plDmPutAssetItemWithoutTestForLoadNewState = exports.plDmPutAssetItemWithoutTest = exports.plDmSetAssetId = exports.plDmPrepareAssetItem = exports.plDmUpdateAssetLocation = exports.plDmGetFilteredAssetItem = exports.plDmPutAssetItem = exports.UPDATE_ASSET_LOCATION = exports.REMOVE_ASSET_ITEMS = exports.PUT_ASSET_ITEM_FOR_LOAD = exports.PUT_ASSET_ITEM = void 0;
var lodash_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(7);
var plDmError_1 = __webpack_require__(1);
var actionBase_1 = __webpack_require__(6);
var bscore_1 = __webpack_require__(5);
var selectors_1 = __webpack_require__(9);
exports.PUT_ASSET_ITEM = 'PLDM_PUT_ASSET_ITEM';
exports.PUT_ASSET_ITEM_FOR_LOAD = 'PLDM_PUT_ASSET_ITEM_FOR_LOAD';
exports.REMOVE_ASSET_ITEMS = 'PLDM_REMOVE_ASSET_ITEMS';
exports.UPDATE_ASSET_LOCATION = 'DM_UPDATE_ASSET_LOCATION';
function plDmPutAssetItem(params) {
    return function (dispatch, getState) {
        var putAction = {
            type: exports.PUT_ASSET_ITEM,
            payload: params,
        };
        putAction.payload = plDmPrepareAssetItem(actionBase_1.plDmFilterPlDmState(getState()), params, putAction);
        dispatch(putAction);
        return putAction;
    };
}
exports.plDmPutAssetItem = plDmPutAssetItem;
var BaseAssetItemProperties = [
    'id',
    'name',
    'path',
    'networkId',
    'location',
    'assetType',
    'scope',
    'origin',
    'locator',
    'mediaType',
    'fileSize',
    'fileHash',
    'fileUrl',
    'thumbUrl',
    'lastModifiedDate',
    'probeData',
    'refCount',
];
function plDmGetFilteredAssetItem(assetItem) {
    return lodash_1.pick(assetItem, BaseAssetItemProperties);
}
exports.plDmGetFilteredAssetItem = plDmGetFilteredAssetItem;
function plDmUpdateAssetLocation(currentLocator, newAssetItem) {
    return function (dispatch, getState) {
        var locator = bscore_1.bscGenerateAssetLocatorKey(currentLocator);
        var assetId = selectors_1.plDmGetAssetIdByLocator(actionBase_1.plDmFilterPlDmState(getState()), { locator: locator });
        if (lodash_1.isNil(assetId)) {
            throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.assetNotFound, 'dmUpdateAssetLocation: ' + locator);
        }
        var newLocatorKey = bscore_1.bscGenerateAssetLocatorKey(newAssetItem);
        var filteredAssetItem = plDmGetFilteredAssetItem(newAssetItem);
        var assetItem = Object.assign(filteredAssetItem, { id: assetId, locator: newLocatorKey });
        var updateAction = {
            type: exports.UPDATE_ASSET_LOCATION,
            payload: { assetItem: assetItem },
        };
        if (!newLocatorKey) {
            throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, 'plDmUpdateAssetLocation: New AssetLocator does not contain valid locator information', updateAction);
        }
        dispatch(updateAction);
        return updateAction;
    };
}
exports.plDmUpdateAssetLocation = plDmUpdateAssetLocation;
function plDmPrepareAssetItem(state, assetItem, action) {
    var locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
    if (!locator) {
        throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, 'Asset Item does not contain valid locator information', action);
    }
    var preparedAssetItem = __assign(__assign({}, assetItem), { locator: locator });
    if (!preparedAssetItem.id || preparedAssetItem.id === bscore_1.BsAssetIdNone) {
        var assetId = selectors_1.plDmGetAssetIdByLocator(state, { locator: locator });
        preparedAssetItem.id = assetId ? assetId : utils_1.newPlDmId();
    }
    else {
        var assetId = selectors_1.plDmGetAssetIdByLocator(state, { locator: locator });
        preparedAssetItem.id = assetId ? assetId : preparedAssetItem.id;
    }
    return preparedAssetItem;
}
exports.plDmPrepareAssetItem = plDmPrepareAssetItem;
function plDmSetAssetId(state, assetItem) {
    var locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
    var assetId = selectors_1.plDmGetAssetIdByLocator(state, { locator: locator });
    assetItem.id = assetId ? assetId : utils_1.newPlDmId();
    assetItem.locator = locator;
    return assetItem;
}
exports.plDmSetAssetId = plDmSetAssetId;
function plDmPutAssetItemWithoutTest(params) {
    var putAction = {
        type: exports.PUT_ASSET_ITEM,
        payload: Object.assign({}, params),
    };
    var locator = bscore_1.bscGenerateAssetLocatorKey(params);
    putAction.payload.locator = locator;
    if (!putAction.payload.id) {
        putAction.payload.id = utils_1.newPlDmId();
    }
    return putAction;
}
exports.plDmPutAssetItemWithoutTest = plDmPutAssetItemWithoutTest;
function plDmPutAssetItemWithoutTestForLoadNewState(params) {
    var putAction = {
        type: exports.PUT_ASSET_ITEM_FOR_LOAD,
        payload: Object.assign({}, params),
    };
    var locator = bscore_1.bscGenerateAssetLocatorKey(params);
    putAction.payload.locator = locator;
    if (!putAction.payload.id) {
        putAction.payload.id = utils_1.newPlDmId();
    }
    return putAction;
}
exports.plDmPutAssetItemWithoutTestForLoadNewState = plDmPutAssetItemWithoutTestForLoadNewState;
function plDmRemoveAssetItems(id) {
    var assetIds = typeof id === 'string' ? [id] : id;
    return {
        type: exports.REMOVE_ASSET_ITEMS,
        payload: { assetIds: assetIds },
    };
}
exports.plDmRemoveAssetItems = plDmRemoveAssetItems;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmDeleteContentItem = exports.plDmGetContentItemDeleteParams = exports.plDmDeleteContentItemWithIds = exports.plDmUpdateContentItem = exports.plDmUpdateOrder = exports.plDmAddDynamicPlaylistContentItemForLoadNewState = exports.plDmAddContentItemForLoadNewState = exports.plDmAddMediaFeedContentItemForLoadNewState = exports.plDmAddMediaFeedContentItemFromBsContentAssetItems = exports.plDmAddMediaFeedContentItemFromBsAssetItems = exports.plDmAddMediaFeedContentItem = exports.plDmAddDynamicPlaylistContentItem = exports.plDmAddContentItem = exports.plDmContentIsAssetItem = exports.UPDATE_CONTENT_ITEM_ORDER = exports.DELETE_CONTENT_ITEM = exports.UPDATE_CONTENT_ITEM = exports.ADD_CONTENT_ITEM_FOR_LOAD = exports.ADD_CONTENT_ITEM = void 0;
var utils_1 = __webpack_require__(7);
var plDmError_1 = __webpack_require__(1);
var actionBase_1 = __webpack_require__(6);
var bscore_1 = __webpack_require__(5);
var actionAssetMap_1 = __webpack_require__(10);
var lodash_1 = __webpack_require__(0);
var selectors_1 = __webpack_require__(9);
var plDmContentItems_1 = __webpack_require__(8);
var actionCustomFields_1 = __webpack_require__(12);
exports.ADD_CONTENT_ITEM = 'PLDM_ADD_CONTENT_ITEM';
exports.ADD_CONTENT_ITEM_FOR_LOAD = 'PLDM_ADD_CONTENT_ITEM_FOR_LOAD';
exports.UPDATE_CONTENT_ITEM = 'PLDM_UPDATE_CONTENT_ITEM';
exports.DELETE_CONTENT_ITEM = 'PLDM_DELETE_CONTENT_ITEM';
exports.UPDATE_CONTENT_ITEM_ORDER = 'PLDM_UPDATE_CONTENT_ITEM_ORDER';
exports.plDmContentIsAssetItem = function (content) {
    return bscore_1.bscIsAssetItem(content);
};
exports.plDmAddContentItem = plDmAddDynamicPlaylistContentItem;
function plDmAddDynamicPlaylistContentItem(items, index) {
    return function (dispatch, getState) {
        var inputItems = lodash_1.isArray(items) ? items : [items];
        var batchedActions = [];
        var addItems = [];
        var plDmState = actionBase_1.plDmFilterPlDmState(getState());
        var assetItem;
        var cacheMap = {};
        inputItems.forEach(function (x) {
            var _a;
            if (exports.plDmContentIsAssetItem(x.content)) {
                assetItem = actionAssetMap_1.plDmPrepareAssetItem(plDmState, x.content);
                if (cacheMap[assetItem.locator] !== undefined) {
                    assetItem.id = cacheMap[assetItem.locator];
                }
                var assetAction = actionAssetMap_1.plDmPutAssetItemWithoutTest(assetItem);
                batchedActions.push(assetAction);
                var newItem = plDmContentItems_1.plDmCreateMediaContentItem(utils_1.newPlDmId(), x.name, assetItem.id, x.type, x.displayDuration !== undefined ? x.displayDuration : null, x.validityStartDate !== undefined ? x.validityStartDate : null, x.validityEndDate !== undefined ? x.validityEndDate : null);
                Object.assign(cacheMap, (_a = {}, _a[assetItem.locator] = assetItem.id, _a));
                addItems.push(newItem);
            }
            else {
                throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, 'MediaContentItems must be specified by AssetItem parameters');
            }
        });
        var mainAction = {
            type: exports.ADD_CONTENT_ITEM,
            payload: {
                items: addItems,
                index: index,
            },
        };
        batchedActions.push(mainAction);
        dispatch(actionBase_1.plDmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.plDmAddDynamicPlaylistContentItem = plDmAddDynamicPlaylistContentItem;
function plDmAddMediaFeedContentItem(items, index) {
    return function (dispatch, getState) {
        var inputItems = lodash_1.isArray(items) ? items : [items];
        var state = getState();
        var batchedActions = [];
        var addItems = [];
        var plDmState = actionBase_1.plDmFilterPlDmState(state);
        var assetItem;
        var cacheMap = {};
        inputItems.forEach(function (x) {
            var _a;
            if (exports.plDmContentIsAssetItem(x.content)) {
                assetItem = actionAssetMap_1.plDmPrepareAssetItem(plDmState, x.content);
                if (cacheMap[assetItem.locator] !== undefined) {
                    assetItem.id = cacheMap[assetItem.locator];
                }
                var assetAction = actionAssetMap_1.plDmPutAssetItemWithoutTest(assetItem);
                batchedActions.push(assetAction);
                var nameIds = Object.keys(selectors_1.plDmGetCustomFieldsNameMap(plDmState));
                var customFieldAction = actionCustomFields_1.plDmAddCustomFieldsCollectionForNewContentItem({ customFieldsNameIds: nameIds });
                batchedActions.push(customFieldAction);
                var newItem = plDmContentItems_1.plDmCreateLiveMediaFeedMediaContentItem(utils_1.newPlDmId(), x.name, assetItem.id, x.type, customFieldAction.payload.id, '', x.title !== undefined ? x.title : '', x.displayDuration !== undefined ? x.displayDuration : null, x.validityStartDate !== undefined ? x.validityStartDate : null, x.validityEndDate !== undefined ? x.validityEndDate : null);
                Object.assign(cacheMap, (_a = {}, _a[assetItem.locator] = assetItem.id, _a));
                addItems.push(newItem);
            }
            else {
                throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, 'MediaContentItems must be specified by AssetItem parameters');
            }
        });
        var mainAction = {
            type: exports.ADD_CONTENT_ITEM,
            payload: {
                items: addItems,
                index: index,
            },
        };
        batchedActions.push(mainAction);
        dispatch(actionBase_1.plDmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.plDmAddMediaFeedContentItem = plDmAddMediaFeedContentItem;
exports.plDmAddMediaFeedContentItemFromBsAssetItems = plDmAddMediaFeedContentItemFromBsContentAssetItems;
function plDmAddMediaFeedContentItemFromBsContentAssetItems(items, index) {
    return function (dispatch, getState) {
        var inputItems = lodash_1.isArray(items) ? items : [items];
        var state = getState();
        var batchedActions = [];
        var addItems = [];
        var plDmState = actionBase_1.plDmFilterPlDmState(state);
        var assetItem;
        var cacheMap = {};
        var customFieldNameCacheMap = {};
        if (inputItems.length > 0) {
            Object.keys(inputItems[0].contentItemData
                .customFields).forEach(function (name) {
                var _a;
                var newCustomFieldNameAction = actionCustomFields_1.plDmAddNewCustomFieldName(name);
                Object.assign(customFieldNameCacheMap, (_a = {}, _a[name] = newCustomFieldNameAction.payload.nameId, _a));
                batchedActions.push(newCustomFieldNameAction);
            });
        }
        inputItems.forEach(function (x, inputItemIndex) {
            var _a;
            var parsedAssetItem = lodash_1.omit(x, ['id', 'assetData', 'contentItemData']);
            if (exports.plDmContentIsAssetItem(parsedAssetItem)) {
                assetItem = actionAssetMap_1.plDmPrepareAssetItem(plDmState, parsedAssetItem);
                if (cacheMap[assetItem.locator] !== undefined) {
                    assetItem.id = cacheMap[assetItem.locator];
                }
                var assetAction = actionAssetMap_1.plDmPutAssetItemWithoutTestForLoadNewState(assetItem);
                batchedActions.push(assetAction);
                var collection_1 = {};
                var currentItemCustomFields_1 = x.contentItemData.customFields;
                Object.keys(currentItemCustomFields_1).forEach(function (name) {
                    var _a;
                    Object.assign(collection_1, (_a = {}, _a[customFieldNameCacheMap[name]] = currentItemCustomFields_1[name], _a));
                });
                var customFieldAction = actionCustomFields_1.plDmAddCustomFieldsCollectionFromExistingCollection(collection_1);
                var customFieldCollectionId = customFieldAction.payload.id;
                batchedActions.push(customFieldAction);
                var newItem = plDmContentItems_1.plDmCreateLiveMediaFeedMediaContentItem(utils_1.newPlDmId(), x.name, assetItem.id, x.mediaType, customFieldCollectionId, x.contentItemData.description, x.contentItemData.title, x.contentItemData.displayDuration, x.contentItemData.validityStartDate, x.contentItemData.validityEndDate);
                Object.assign(cacheMap, (_a = {}, _a[assetItem.locator] = assetItem.id, _a));
                addItems.push(newItem);
            }
            else {
                throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, 'MediaContentItems must be specified by AssetItem parameters');
            }
        });
        var mainAction = {
            type: exports.ADD_CONTENT_ITEM_FOR_LOAD,
            payload: {
                items: addItems,
                index: index,
            },
        };
        batchedActions.push(mainAction);
        dispatch(actionBase_1.plDmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.plDmAddMediaFeedContentItemFromBsContentAssetItems = plDmAddMediaFeedContentItemFromBsContentAssetItems;
function plDmAddMediaFeedContentItemForLoadNewState(items, index) {
    return function (dispatch, getState) {
        var inputItems = lodash_1.isArray(items) ? items : [items];
        var state = getState();
        var batchedActions = [];
        var addItems = [];
        var plDmState = actionBase_1.plDmFilterPlDmState(state);
        var assetItem;
        var cacheMap = {};
        inputItems.forEach(function (x) {
            var _a;
            if (exports.plDmContentIsAssetItem(x.content)) {
                assetItem = actionAssetMap_1.plDmPrepareAssetItem(plDmState, x.content);
                if (cacheMap[assetItem.locator] !== undefined) {
                    assetItem.id = cacheMap[assetItem.locator];
                }
                var assetAction = actionAssetMap_1.plDmPutAssetItemWithoutTestForLoadNewState(assetItem);
                batchedActions.push(assetAction);
                var nameIds = Object.keys(selectors_1.plDmGetCustomFieldsNameMap(plDmState));
                var customFieldAction = actionCustomFields_1.plDmAddCustomFieldsCollectionForNewContentItem({ customFieldsNameIds: nameIds });
                batchedActions.push(customFieldAction);
                var newItem = plDmContentItems_1.plDmCreateLiveMediaFeedMediaContentItem(utils_1.newPlDmId(), x.name, assetItem.id, x.type, customFieldAction.payload.id, '', x.title !== undefined ? x.title : '', x.displayDuration !== undefined ? x.displayDuration : null, x.validityStartDate !== undefined ? x.validityStartDate : null, x.validityEndDate !== undefined ? x.validityEndDate : null);
                Object.assign(cacheMap, (_a = {}, _a[assetItem.locator] = assetItem.id, _a));
                addItems.push(newItem);
            }
            else {
                throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, 'MediaContentItems must be specified by AssetItem parameters');
            }
        });
        var mainAction = {
            type: exports.ADD_CONTENT_ITEM_FOR_LOAD,
            payload: {
                items: addItems,
                index: index,
            },
        };
        batchedActions.push(mainAction);
        dispatch(actionBase_1.plDmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.plDmAddMediaFeedContentItemForLoadNewState = plDmAddMediaFeedContentItemForLoadNewState;
exports.plDmAddContentItemForLoadNewState = plDmAddDynamicPlaylistContentItemForLoadNewState;
function plDmAddDynamicPlaylistContentItemForLoadNewState(items, index) {
    return function (dispatch, getState) {
        var inputItems = lodash_1.isArray(items) ? items : [items];
        var batchedActions = [];
        var addItems = [];
        var plDmState = actionBase_1.plDmFilterPlDmState(getState());
        var assetItem;
        var cacheMap = {};
        inputItems.forEach(function (x) {
            var _a;
            if (exports.plDmContentIsAssetItem(x.content)) {
                assetItem = actionAssetMap_1.plDmPrepareAssetItem(plDmState, x.content);
                if (cacheMap[assetItem.locator] !== undefined) {
                    assetItem.id = cacheMap[assetItem.locator];
                }
                var assetAction = actionAssetMap_1.plDmPutAssetItemWithoutTestForLoadNewState(assetItem);
                batchedActions.push(assetAction);
                var newItem = plDmContentItems_1.plDmCreateMediaContentItem(utils_1.newPlDmId(), x.name, assetItem.id, x.type, x.displayDuration !== undefined ? x.displayDuration : null, x.validityStartDate !== undefined ? x.validityStartDate : null, x.validityEndDate !== undefined ? x.validityEndDate : null);
                Object.assign(cacheMap, (_a = {}, _a[assetItem.locator] = assetItem.id, _a));
                addItems.push(newItem);
            }
            else {
                throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, 'MediaContentItems must be specified by AssetItem parameters');
            }
        });
        var mainAction = {
            type: exports.ADD_CONTENT_ITEM_FOR_LOAD,
            payload: {
                items: addItems,
                index: index,
            },
        };
        batchedActions.push(mainAction);
        dispatch(actionBase_1.plDmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.plDmAddDynamicPlaylistContentItemForLoadNewState = plDmAddDynamicPlaylistContentItemForLoadNewState;
function plDmUpdateOrder(params) {
    return {
        type: exports.UPDATE_CONTENT_ITEM_ORDER,
        payload: params,
    };
}
exports.plDmUpdateOrder = plDmUpdateOrder;
function plDmUpdateContentItem(params) {
    return {
        type: exports.UPDATE_CONTENT_ITEM,
        payload: params,
    };
}
exports.plDmUpdateContentItem = plDmUpdateContentItem;
function plDmDeleteContentItemWithIds(params) {
    return {
        type: exports.DELETE_CONTENT_ITEM,
        payload: params,
    };
}
exports.plDmDeleteContentItemWithIds = plDmDeleteContentItemWithIds;
function plDmGetContentItemDeleteParams(id) {
    var deleteParams = {
        ids: id,
    };
    return deleteParams;
}
exports.plDmGetContentItemDeleteParams = plDmGetContentItemDeleteParams;
function plDmDeleteContentItem(id) {
    return function (dispatch, getState) {
        var plDmState = actionBase_1.plDmFilterPlDmState(getState());
        var stateIds = typeof id === 'string' ? [id] : id;
        var assetIds = [];
        var customFieldCollectionIds = [];
        stateIds.forEach(function (stateId) {
            var contentItem = selectors_1.plDmGetContentItemStateById(plDmState, { id: stateId });
            if (contentItem) {
                assetIds.push(contentItem.assetId);
                if (!lodash_1.isNil(contentItem.customFieldsMap)) {
                    customFieldCollectionIds.push(contentItem.customFieldsMap);
                }
            }
        });
        var batchedActions = [];
        if (assetIds.length > 0) {
            batchedActions.push(actionAssetMap_1.plDmRemoveAssetItems(assetIds));
        }
        if (customFieldCollectionIds.length > 0) {
            batchedActions.push(actionCustomFields_1.plDmRemoveCustomFieldCollection(customFieldCollectionIds));
        }
        var deleteParams = plDmGetContentItemDeleteParams(stateIds);
        var mainAction = plDmDeleteContentItemWithIds(deleteParams);
        batchedActions.push(mainAction);
        dispatch(actionBase_1.plDmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.plDmDeleteContentItem = plDmDeleteContentItem;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmRemoveCustomFieldCollection = exports.DELETE_CONTENT_ITEM_CUSTOM_FIELD_COLLECTION = exports.plDmRemoveCustomFieldName = exports.DELETE_CUSTOM_FIELD = exports.plDmUpdateCustomFieldName = exports.UPDATE_CUSTOM_FIELD_NAME = exports.plDmUpdateCustomFieldValue = exports.UPDATE_CUSTOM_FIELD_VALUE = exports.plDmAddNewCustomField = exports.plDmAddNewCustomFieldName = exports.ADD_NEW_CUSTOM_FIELD = exports.plDmAddCustomFieldsCollectionForNewContentItem = exports.plDmAddCustomFieldsCollectionFromExistingCollection = exports.ADD_CUSTOM_FIELDS = void 0;
var actionBase_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(7);
var selectorCustomFields_1 = __webpack_require__(14);
exports.ADD_CUSTOM_FIELDS = 'PLDM_ADD_CUSTOM_FIELDS';
function plDmAddCustomFieldsCollectionFromExistingCollection(collection) {
    return {
        type: exports.ADD_CUSTOM_FIELDS,
        payload: {
            id: utils_1.newPlDmId(),
            collection: collection,
        },
    };
}
exports.plDmAddCustomFieldsCollectionFromExistingCollection = plDmAddCustomFieldsCollectionFromExistingCollection;
function plDmAddCustomFieldsCollectionForNewContentItem(params) {
    var collection = {};
    params.customFieldsNameIds.forEach(function (id) {
        collection[id] = '';
    });
    return {
        type: exports.ADD_CUSTOM_FIELDS,
        payload: {
            id: utils_1.newPlDmId(),
            collection: collection,
        },
    };
}
exports.plDmAddCustomFieldsCollectionForNewContentItem = plDmAddCustomFieldsCollectionForNewContentItem;
exports.ADD_NEW_CUSTOM_FIELD = 'PLDM_ADD_CUSTOM_FIELD';
function plDmAddNewCustomFieldName(name) {
    if (name === void 0) { name = ''; }
    return {
        type: exports.ADD_NEW_CUSTOM_FIELD,
        payload: {
            nameId: utils_1.newPlDmId(),
            name: name,
        },
    };
}
exports.plDmAddNewCustomFieldName = plDmAddNewCustomFieldName;
function plDmAddNewCustomField() {
    return function (dispatch, getState) {
        var state = getState();
        var plDmState = actionBase_1.plDmFilterPlDmState(state);
        var name = utils_1.createNextDefaultCustomFieldName(selectorCustomFields_1.plDmGetCustomFieldsNameMap(plDmState));
        var action = plDmAddNewCustomFieldName(name);
        dispatch(action);
        return action;
    };
}
exports.plDmAddNewCustomField = plDmAddNewCustomField;
exports.UPDATE_CUSTOM_FIELD_VALUE = 'PLDM_UPDATE_CUSTOM_FIELD_VALUE';
function plDmUpdateCustomFieldValue(params) {
    return {
        type: exports.UPDATE_CUSTOM_FIELD_VALUE,
        payload: {
            id: params.id,
            nameId: params.nameId,
            value: params.value,
        },
    };
}
exports.plDmUpdateCustomFieldValue = plDmUpdateCustomFieldValue;
exports.UPDATE_CUSTOM_FIELD_NAME = 'PLDM_UPDATE_CUSTOM_FIELD_NAME';
function plDmUpdateCustomFieldName(params) {
    return {
        type: exports.UPDATE_CUSTOM_FIELD_NAME,
        payload: {
            nameId: params.nameId,
            name: params.name,
        },
    };
}
exports.plDmUpdateCustomFieldName = plDmUpdateCustomFieldName;
exports.DELETE_CUSTOM_FIELD = 'PLDM_DELETE_CUSTOM_FIELD';
function plDmRemoveCustomFieldName(nameId) {
    return {
        type: exports.DELETE_CUSTOM_FIELD,
        payload: {
            nameId: nameId,
        },
    };
}
exports.plDmRemoveCustomFieldName = plDmRemoveCustomFieldName;
exports.DELETE_CONTENT_ITEM_CUSTOM_FIELD_COLLECTION = 'PLDM_DELETE_CONTENT_ITEM_CUSTOM_FIELD_COLLECTION';
function plDmRemoveCustomFieldCollection(id) {
    var ids;
    if (!lodash_1.isArray(id)) {
        ids = [id];
    }
    else {
        ids = id;
    }
    return {
        type: exports.DELETE_CONTENT_ITEM_CUSTOM_FIELD_COLLECTION,
        payload: {
            ids: ids,
        },
    };
}
exports.plDmRemoveCustomFieldCollection = plDmRemoveCustomFieldCollection;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmGetContentItemsArrayInOrder = exports.plDmGetAllContentItems = exports.plDmGetContentItemStateById = exports.plDmGetContentItemsState = void 0;
var reselect_1 = __webpack_require__(4);
var base_1 = __webpack_require__(3);
var plDmError_1 = __webpack_require__(1);
var isValidContentItemsState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('contentItemsById')
        && typeof state.contentItemsById === 'object'
        && state.hasOwnProperty('allContentItems')
        && Array.isArray(state.allContentItems)
        && state.allContentItems.length === Object.keys(state.contentItemsById).length;
};
exports.plDmGetContentItemsState = function (state) {
    return getContentItemsState(state);
};
var getContentItemsState = reselect_1.createSelector(base_1.plDmGetBaseState, function (state) {
    if (isValidContentItemsState(state.contentItems)) {
        return state.contentItems;
    }
    else {
        var exceptionMessage = "state must be of type PlDmState or\n        have a field bspl of type PlDmState. invalid state.contentItems\n        " + JSON.stringify(state.contentItems);
        throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, exceptionMessage);
    }
});
function plDmGetContentItemStateById(state, props) {
    var subState = plDmGetAllContentItems(state);
    var contentItem = subState[props.id];
    return contentItem ? contentItem : null;
}
exports.plDmGetContentItemStateById = plDmGetContentItemStateById;
function plDmGetAllContentItems(state) {
    return getAllContentItems(state);
}
exports.plDmGetAllContentItems = plDmGetAllContentItems;
var getAllContentItems = reselect_1.createSelector(exports.plDmGetContentItemsState, function (state) {
    return state.contentItemsById;
});
function plDmGetContentItemsArrayInOrder(state) {
    return getContentItemsArrayInOrder(state);
}
exports.plDmGetContentItemsArrayInOrder = plDmGetContentItemsArrayInOrder;
var getContentItemsArrayInOrder = reselect_1.createSelector(exports.plDmGetContentItemsState, function (state) {
    return state.allContentItems;
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmCustomFieldNameExistCheck = exports.plDmGetCustomFieldNameById = exports.plDmGetCustomFieldValue = exports.plDmGetCustomFieldValueByFieldName = exports.plDmGetFieldIdByName = exports.plDmGetCustomFieldsDerivedCollectionByContentItemId = exports.plDmGetCustomFieldsNameMap = exports.plDmGetCustomFieldsCollectionMap = exports.plDmGetCustomFieldsOrder = exports.plDmGetCustomFieldsState = void 0;
var reselect_1 = __webpack_require__(4);
var lodash_1 = __webpack_require__(0);
var base_1 = __webpack_require__(3);
var plDmError_1 = __webpack_require__(1);
var selectorContentItems_1 = __webpack_require__(13);
var isValidCustomFieldsState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('customFieldsNameById')
        && typeof state.customFieldsNameById === 'object'
        && state.hasOwnProperty('contentItemCustomFields')
        && typeof state.contentItemCustomFields === 'object'
        && state.hasOwnProperty('customFieldsOrder')
        && Array.isArray(state.customFieldsOrder)
        && state.customFieldsOrder.length === Object.keys(state.customFieldsNameById).length;
};
exports.plDmGetCustomFieldsState = function (state) {
    return getCustomFieldsState(state);
};
var getCustomFieldsState = reselect_1.createSelector(base_1.plDmGetBaseState, function (state) {
    if (isValidCustomFieldsState(state.customFields)) {
        return state.customFields;
    }
    else {
        var exceptionMessage = "state must be of type PlDmState or\n        have a field bspl of type PlDmState. invalid state.customFields\n        " + JSON.stringify(state.customFields);
        throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, exceptionMessage);
    }
});
function plDmGetCustomFieldsOrder(state) {
    return getCustomFieldsOrder(state);
}
exports.plDmGetCustomFieldsOrder = plDmGetCustomFieldsOrder;
var getCustomFieldsOrder = reselect_1.createSelector(exports.plDmGetCustomFieldsState, function (state) {
    return state.customFieldsOrder;
});
function plDmGetCustomFieldsCollectionMap(state) {
    return getCustomFieldsCollectionMap(state);
}
exports.plDmGetCustomFieldsCollectionMap = plDmGetCustomFieldsCollectionMap;
var getCustomFieldsCollectionMap = reselect_1.createSelector(exports.plDmGetCustomFieldsState, function (state) {
    return state.contentItemCustomFields;
});
function plDmGetCustomFieldsNameMap(state) {
    return getCustomFieldsNameMap(state);
}
exports.plDmGetCustomFieldsNameMap = plDmGetCustomFieldsNameMap;
var getCustomFieldsNameMap = reselect_1.createSelector(exports.plDmGetCustomFieldsState, function (state) {
    return state.customFieldsNameById;
});
function plDmGetCustomFieldsDerivedCollectionByContentItemId(state, props) {
    return getCustomFieldsDerivedCollectionByContentItemId(state, props);
}
exports.plDmGetCustomFieldsDerivedCollectionByContentItemId = plDmGetCustomFieldsDerivedCollectionByContentItemId;
var getCustomFieldsDerivedCollectionByContentItemId = reselect_1.createSelector(function (state, props) { return selectorContentItems_1.plDmGetContentItemStateById(state, props); }, function (state) { return plDmGetCustomFieldsOrder(state); }, function (state) { return plDmGetCustomFieldsCollectionMap(state); }, function (state) { return plDmGetCustomFieldsNameMap(state); }, function (contentItem, order, collectionMap, nameMap) {
    var collectionId;
    if (contentItem !== null) {
        collectionId = contentItem.customFieldsMap;
    }
    else {
        return {};
    }
    return order.reduce(function (mapObject, id) {
        var _a;
        var newPair = (_a = {}, _a[nameMap[id]] = collectionMap[collectionId][id], _a);
        return __assign(__assign({}, mapObject), newPair);
    }, {});
});
function plDmGetFieldIdByName(state, fieldName) {
    var nameMap = plDmGetCustomFieldsNameMap(state);
    for (var _i = 0, _a = Object.keys(nameMap); _i < _a.length; _i++) {
        var key = _a[_i];
        if (nameMap[key] === fieldName) {
            return key;
        }
    }
    return null;
}
exports.plDmGetFieldIdByName = plDmGetFieldIdByName;
function plDmGetCustomFieldValueByFieldName(state, props) {
    return getCustomFieldValueByFieldName(state, props);
}
exports.plDmGetCustomFieldValueByFieldName = plDmGetCustomFieldValueByFieldName;
var getCustomFieldValueByFieldName = reselect_1.createSelector(function (state, props) {
    return plDmGetFieldIdByName(state, props.fieldName);
}, function (_, props) { return props; }, function (state) { return state; }, function (fieldId, props, state) {
    if (lodash_1.isNil(fieldId)) {
        return null;
    }
    var newProps = {
        id: props.id,
        nameId: fieldId,
    };
    return plDmGetCustomFieldValue(state, newProps);
});
function plDmGetCustomFieldValue(state, props) {
    return getCustomFieldValue(state, props);
}
exports.plDmGetCustomFieldValue = plDmGetCustomFieldValue;
var getCustomFieldValue = reselect_1.createSelector(function (state, props) {
    var customFields = plDmGetCustomFieldsCollectionMap(state);
    return customFields[props.id];
}, function (_, props) { return props; }, function (state, props) { return state[props.nameId]; });
function plDmGetCustomFieldNameById(state, props) {
    return getCustomFieldNameById(state, props);
}
exports.plDmGetCustomFieldNameById = plDmGetCustomFieldNameById;
var getCustomFieldNameById = reselect_1.createSelector(function (_, props) { return props; }, function (state) { return plDmGetCustomFieldsNameMap(state); }, function (props, state) {
    return state[props];
});
function plDmCustomFieldNameExistCheck(state, newName) {
    var id = plDmGetFieldIdByName(state, newName);
    return !(id === null);
}
exports.plDmCustomFieldNameExistCheck = plDmCustomFieldNameExistCheck;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlDmcMediaFeedContentItem = exports.PlDmcDynamicPlaylistContentItem = void 0;
var PlDmcDynamicPlaylistContentItem = (function () {
    function PlDmcDynamicPlaylistContentItem(contentItem, mediaAssetItem) {
        this.contentItem = Object.assign({}, contentItem);
        this.mediaAssetItem = mediaAssetItem ? Object.assign({}, mediaAssetItem) : null;
    }
    return PlDmcDynamicPlaylistContentItem;
}());
exports.PlDmcDynamicPlaylistContentItem = PlDmcDynamicPlaylistContentItem;
var PlDmcMediaFeedContentItem = (function () {
    function PlDmcMediaFeedContentItem(contentItem, mediaAssetItem, customFieldCollection) {
        if (mediaAssetItem === void 0) { mediaAssetItem = null; }
        if (customFieldCollection === void 0) { customFieldCollection = {}; }
        this.contentItem = Object.assign({}, contentItem);
        this.mediaAssetItem = mediaAssetItem ? Object.assign({}, mediaAssetItem) : null;
        this.customFields = customFieldCollection;
    }
    return PlDmcMediaFeedContentItem;
}());
exports.PlDmcMediaFeedContentItem = PlDmcMediaFeedContentItem;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = exports.DefaultProperties = exports.plDmGetDefaultImageContentItemData = exports.initialImageContentItemDefaults = exports.plDmGetDefaultAudioContentItemData = exports.initialAudioContentItemDefaults = exports.plDmResetDefaultPropertyValues = exports.plDmGetDefaultVideoContentItemData = exports.initialVideoContentItemDefaults = void 0;
var bscore_1 = __webpack_require__(5);
var lodash_1 = __webpack_require__(0);
exports.initialVideoContentItemDefaults = {
    volume: 100,
    videoDisplayMode: bscore_1.VideoDisplayModeType.m2D,
    automaticallyLoop: false,
};
Object.freeze(exports.initialVideoContentItemDefaults);
function plDmGetDefaultVideoContentItemData() {
    return exports.defaults.videoContentItem;
}
exports.plDmGetDefaultVideoContentItemData = plDmGetDefaultVideoContentItemData;
function plDmResetDefaultPropertyValues() {
    exports.defaults.reset();
}
exports.plDmResetDefaultPropertyValues = plDmResetDefaultPropertyValues;
exports.initialAudioContentItemDefaults = {
    volume: 100,
};
Object.freeze(exports.initialAudioContentItemDefaults);
function plDmGetDefaultAudioContentItemData() {
    return exports.defaults.audioContentItem;
}
exports.plDmGetDefaultAudioContentItemData = plDmGetDefaultAudioContentItemData;
exports.initialImageContentItemDefaults = {
    useImageBuffer: false,
    videoPlayerRequired: false,
    displayDuration: 6,
};
Object.freeze(exports.initialImageContentItemDefaults);
function plDmGetDefaultImageContentItemData() {
    return exports.defaults.imageContentItem;
}
exports.plDmGetDefaultImageContentItemData = plDmGetDefaultImageContentItemData;
var DefaultProperties = (function () {
    function DefaultProperties() {
        this.reset();
    }
    DefaultProperties.prototype.reset = function () {
        this._videoContentItem = Object.assign({}, exports.initialVideoContentItemDefaults);
        this._audioContentItem = Object.assign({}, exports.initialAudioContentItemDefaults);
        this._imageContentItem = Object.assign({}, exports.initialImageContentItemDefaults);
    };
    DefaultProperties.prototype.merge = function (params) {
        if (params.videoContentItem) {
            Object.assign(this._videoContentItem, params.videoContentItem);
        }
        if (params.audioContentItem) {
            Object.assign(this._audioContentItem, params.audioContentItem);
        }
        if (params.imageContentItem) {
            Object.assign(this._imageContentItem, params.imageContentItem);
        }
    };
    Object.defineProperty(DefaultProperties.prototype, "allDefaults", {
        get: function () {
            return {
                videoContentItem: this.videoContentItem,
                audioContentItem: this.audioContentItem,
                imageContentItem: this.imageContentItem,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultProperties.prototype, "videoContentItem", {
        get: function () {
            return lodash_1.cloneDeep(this._videoContentItem);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultProperties.prototype, "audioContentItem", {
        get: function () {
            return lodash_1.cloneDeep(this._audioContentItem);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultProperties.prototype, "imageContentItem", {
        get: function () {
            return lodash_1.cloneDeep(this._imageContentItem);
        },
        enumerable: false,
        configurable: true
    });
    return DefaultProperties;
}());
exports.DefaultProperties = DefaultProperties;
exports.defaults = new DefaultProperties();


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlDmIdNone = void 0;
exports.PlDmIdNone = '0';


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmVerifyAndOpenPlayist = exports.plDmLoadDynamicPlaylistFromBsn = exports.plDmLoadLiveMediaFeedFromBsn = exports.plDmOpenPlaylist = exports.plDmUpdateLiveMediaFeedPlaylistProperties = exports.plDmUpdatePlaylistProperties = exports.plDmNewLiveMediaFeed = exports.plDmNewPlaylist = exports.UPDATE_PLAYLIST_MODIFIED_TIME = exports.UPDATE_PLAYLIST = exports.OPEN_PLAYLIST = exports.NEW_PLAYLIST = void 0;
var lodash_1 = __webpack_require__(0);
var actionContentItems_1 = __webpack_require__(11);
var plDmError_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(7);
function plDmCheckForInvalidPlDmState(state) {
    if (typeof state === 'object'
        && state.hasOwnProperty('playlist')
        && state.hasOwnProperty('assetMap')
        && state.hasOwnProperty('contentItems')
        && state.hasOwnProperty('modifiedTime')) {
        return null;
    }
    else {
        return new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidSign, 'PlDmState structure is invalid');
    }
}
exports.NEW_PLAYLIST = 'PLDM_NEW_PLAYLIST';
exports.OPEN_PLAYLIST = 'PLDM_OPEN_PLAYLIST';
exports.UPDATE_PLAYLIST = 'PLDM_UPDATE_PLAYLIST';
exports.UPDATE_PLAYLIST_MODIFIED_TIME = 'PLDM_UPDATE_PLAYLIST_MODIFIED_TIME';
function plDmNewPlaylist(name, supportsAudio, supportsVideo, supportsImages, shuffle) {
    return {
        type: exports.NEW_PLAYLIST,
        payload: utils_1.createDefaultPlaylistProperties(utils_1.newPlDmId(), name, supportsAudio, supportsVideo, supportsImages, shuffle),
    };
}
exports.plDmNewPlaylist = plDmNewPlaylist;
function plDmNewLiveMediaFeed(name, ttl) {
    return {
        type: exports.NEW_PLAYLIST,
        payload: utils_1.createDefaultLiveMediaFeedProperties(utils_1.newPlDmId(), name, ttl),
    };
}
exports.plDmNewLiveMediaFeed = plDmNewLiveMediaFeed;
function plDmUpdatePlaylistProperties(params) {
    return {
        type: exports.UPDATE_PLAYLIST,
        payload: params,
    };
}
exports.plDmUpdatePlaylistProperties = plDmUpdatePlaylistProperties;
function plDmUpdateLiveMediaFeedPlaylistProperties(params) {
    return {
        type: exports.UPDATE_PLAYLIST,
        payload: params,
    };
}
exports.plDmUpdateLiveMediaFeedPlaylistProperties = plDmUpdateLiveMediaFeedPlaylistProperties;
function plDmOpenPlaylist(newState) {
    if (!utils_1.isValidPlDmId(newState.playlist.id)) {
        newState.playlist.id = utils_1.newPlDmId();
    }
    return {
        type: exports.OPEN_PLAYLIST,
        payload: { newState: newState },
    };
}
exports.plDmOpenPlaylist = plDmOpenPlaylist;
function plDmUpdatePlaylistModifiedTime(lastModifiedDate) {
    return {
        type: exports.UPDATE_PLAYLIST_MODIFIED_TIME,
        payload: lastModifiedDate,
    };
}
function plDmLoadLiveMediaFeedFromBsn(bsnMediaFeedProperties) {
    return function (dispatch, getState) {
        var lastModifiedDate = bsnMediaFeedProperties.lastModifiedDate;
        if (lodash_1.isNil(lastModifiedDate)) {
            lastModifiedDate = new Date();
        }
        var playlist = {
            id: '0',
            name: bsnMediaFeedProperties.name,
            ttl: bsnMediaFeedProperties.ttl,
            lastModifiedDate: lastModifiedDate,
        };
        var newState = {
            playlist: playlist,
            contentItems: {
                contentItemsById: {},
                allContentItems: [],
            },
            assetMap: {},
            modifiedTime: (new Date()).toISOString(),
            customFields: {
                customFieldsOrder: [],
                customFieldsNameById: {},
                contentItemCustomFields: {},
            },
        };
        var mainAction = plDmOpenPlaylist(newState);
        dispatch(mainAction);
        dispatch(actionContentItems_1.plDmAddMediaFeedContentItemFromBsContentAssetItems(bsnMediaFeedProperties.content));
        dispatch(plDmUpdatePlaylistModifiedTime(lastModifiedDate));
        return mainAction;
    };
}
exports.plDmLoadLiveMediaFeedFromBsn = plDmLoadLiveMediaFeedFromBsn;
function plDmLoadDynamicPlaylistFromBsn(bsnDynamicPlaylistProperties) {
    var lastModifiedDate = bsnDynamicPlaylistProperties.lastModifiedDate;
    if (lodash_1.isNil(lastModifiedDate)) {
        lastModifiedDate = new Date();
    }
    return function (dispatch, getState) {
        var newState = {
            playlist: {
                id: '0',
                name: bsnDynamicPlaylistProperties.name,
                shuffle: false,
                supportsVideo: bsnDynamicPlaylistProperties.supportsVideo,
                supportsImages: bsnDynamicPlaylistProperties.supportsImages,
                supportsAudio: bsnDynamicPlaylistProperties.supportsAudio,
                lastModifiedDate: lastModifiedDate,
            },
            modifiedTime: (new Date()).toISOString(),
            contentItems: {
                contentItemsById: {},
                allContentItems: [],
            },
            assetMap: {},
            customFields: {
                customFieldsOrder: [],
                customFieldsNameById: {},
                contentItemCustomFields: {},
            },
        };
        var mainAction = plDmOpenPlaylist(newState);
        var contentItemToAdd = [];
        (bsnDynamicPlaylistProperties.content || []).map(function (item) {
            var contentItem = {
                name: item.name,
                type: item.mediaType,
                content: lodash_1.omit(item, ['id', 'assetData', 'contentItemData']),
                displayDuration: item.contentItemData.displayDuration,
                validityStartDate: item.contentItemData.validityStartDate,
                validityEndDate: item.contentItemData.validityEndDate,
            };
            contentItemToAdd.push(contentItem);
        });
        dispatch(mainAction);
        dispatch(actionContentItems_1.plDmAddContentItemForLoadNewState(contentItemToAdd));
        return mainAction;
    };
}
exports.plDmLoadDynamicPlaylistFromBsn = plDmLoadDynamicPlaylistFromBsn;
function plDmVerifyAndOpenPlayist(newState) {
    return function (dispatch) {
        var action = { type: exports.OPEN_PLAYLIST, payload: { newState: newState } };
        var stateError = plDmCheckForInvalidPlDmState(newState);
        if (stateError) {
            stateError.attachAction(action);
            throw stateError;
        }
        return dispatch(action);
    };
}
exports.plDmVerifyAndOpenPlayist = plDmVerifyAndOpenPlayist;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidAssetMapState = exports.assetMapReducer = void 0;
var lodash_1 = __webpack_require__(0);
var actions_1 = __webpack_require__(2);
var assetById = function (state, action) {
    var _a, _b;
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_1.NEW_PLAYLIST:
            return {};
        case actions_1.OPEN_PLAYLIST: {
            var newState = payload.newState;
            return newState.assetMap ? newState.assetMap : {};
        }
        case actions_1.PUT_ASSET_ITEM_FOR_LOAD:
        case actions_1.PUT_ASSET_ITEM: {
            var id = payload.id;
            var newItem = void 0;
            if (state[id]) {
                newItem = Object.assign({}, state[id], payload);
            }
            else {
                newItem = Object.assign({}, payload);
            }
            newItem.refCount = newItem.refCount ? newItem.refCount + 1 : 1;
            return Object.assign({}, state, (_a = {}, _a[id] = newItem, _a));
        }
        case actions_1.REMOVE_ASSET_ITEMS: {
            var assetIds = payload.assetIds;
            var newState_1 = lodash_1.cloneDeep(state);
            assetIds.forEach(function (id) {
                if (newState_1[id].refCount && newState_1[id].refCount > 1) {
                    newState_1[id].refCount = newState_1[id].refCount - 1;
                }
                else {
                    delete newState_1[id];
                }
            });
            return newState_1;
        }
        case actions_1.UPDATE_ASSET_LOCATION: {
            var assetItem = payload.assetItem;
            var existingItem = state[assetItem.id];
            if (!lodash_1.isNil(existingItem)) {
                var newItem = __assign(__assign({}, assetItem), { refCount: existingItem.refCount });
                return Object.assign({}, state, (_b = {}, _b[assetItem.id] = newItem, _b));
            }
            break;
        }
        case actions_1.PLDM_CLEAR_STATE: {
            return {};
        }
    }
    return state;
};
exports.assetMapReducer = assetById;
exports.isValidAssetMapState = function (state) {
    return typeof state === 'object';
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidContentItemsState = exports.contentItemsReducer = void 0;
var redux_1 = __webpack_require__(15);
var lodash_1 = __webpack_require__(0);
var actions_1 = __webpack_require__(2);
var contentItemsById = function (state, action) {
    var _a;
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_1.NEW_PLAYLIST:
            return {};
        case actions_1.OPEN_PLAYLIST:
            var newState = payload.newState;
            return newState.contentItems.contentItemsById;
        case actions_1.ADD_CONTENT_ITEM_FOR_LOAD:
        case actions_1.ADD_CONTENT_ITEM: {
            var items = payload.items;
            items.forEach(function (x) {
                var _a;
                state = Object.assign({}, state, (_a = {}, _a[x.id] = x, _a));
            });
            return state;
        }
        case actions_1.UPDATE_CONTENT_ITEM: {
            var id = payload.id;
            if (state[id] !== undefined) {
                var payloadCopy = lodash_1.cloneDeep(payload);
                return Object.assign({}, state, (_a = {}, _a[id] = payloadCopy, _a));
            }
            break;
        }
        case actions_1.DELETE_CONTENT_ITEM: {
            var ids = payload.ids;
            if (ids && ids.length) {
                return lodash_1.omit(state, ids);
            }
        }
        case actions_1.PLDM_CLEAR_STATE: {
            return {};
        }
    }
    return state;
};
var allContentItems = function (state, action) {
    if (state === void 0) { state = []; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_1.NEW_PLAYLIST:
            return [];
        case actions_1.OPEN_PLAYLIST: {
            var newState = payload.newState;
            return newState.contentItems.allContentItems;
        }
        case actions_1.ADD_CONTENT_ITEM_FOR_LOAD:
        case actions_1.ADD_CONTENT_ITEM: {
            var _a = payload, items = _a.items, index = _a.index;
            if (lodash_1.isNil(index) || index >= state.length || index < 0) {
                var newArray_1 = state.slice();
                items.forEach(function (x) {
                    if (newArray_1.indexOf(x.id) < 0) {
                        newArray_1.push(x.id);
                    }
                });
                state = newArray_1;
            }
            else {
                var add_1 = [];
                items.forEach(function (x) {
                    if (state.indexOf(x.id) < 0) {
                        add_1.push(x.id);
                    }
                });
                state = state.slice(0, index).concat(add_1).concat(state.slice(index));
            }
            return state;
        }
        case actions_1.UPDATE_CONTENT_ITEM_ORDER: {
            var _b = payload, ids = _b.ids, index = _b.index;
            var newIndex = index;
            var map_1 = {};
            var newArray = [];
            ids.forEach(function (x) {
                map_1[x] = x;
            });
            for (var i = 0, j = 0; j < ids.length;) {
                if (!lodash_1.isNil(map_1[state[i]])) {
                    newArray.push(state[i]);
                    state = state.slice(0, i).concat(state.slice(i + 1));
                    if (i < newIndex) {
                        newIndex--;
                    }
                    i--;
                    j++;
                }
                i++;
            }
            return state.slice(0, newIndex).concat(newArray).concat(state.slice(newIndex));
        }
        case actions_1.DELETE_CONTENT_ITEM: {
            var ids_1 = payload.ids;
            state = state.slice();
            lodash_1.remove(state, function (n) {
                return ids_1.indexOf(n) >= 0;
            });
            return state;
        }
        case actions_1.PLDM_CLEAR_STATE: {
            return [];
        }
    }
    return state;
};
var contentItems = redux_1.combineReducers({ contentItemsById: contentItemsById, allContentItems: allContentItems });
exports.contentItemsReducer = contentItems;
exports.isValidContentItemsState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('contentItemsById')
        && typeof state.contentItemsById === 'object'
        && state.hasOwnProperty('allContentItems')
        && Array.isArray(state.allContentItems)
        && state.allContentItems.length === Object.keys(state.contentItemsById).length;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCustomFieldsState = exports.customFieldsReducer = void 0;
var lodash_1 = __webpack_require__(0);
var actions_1 = __webpack_require__(2);
var redux_1 = __webpack_require__(15);
var customFieldsNameById = function (state, action) {
    var _a, _b;
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_1.NEW_PLAYLIST:
            return {};
        case actions_1.OPEN_PLAYLIST: {
            var newState = payload.newState;
            if (lodash_1.isNil(newState.customFields)) {
                return {};
            }
            else {
                return newState.customFields.customFieldsNameById;
            }
        }
        case actions_1.ADD_NEW_CUSTOM_FIELD: {
            var _c = payload, nameId = _c.nameId, name_1 = _c.name;
            return Object.assign({}, state, (_a = {}, _a[nameId] = name_1, _a));
        }
        case actions_1.UPDATE_CUSTOM_FIELD_NAME: {
            var _d = payload, nameId = _d.nameId, name_2 = _d.name;
            if (state[nameId] !== undefined) {
                return Object.assign({}, state, (_b = {}, _b[nameId] = name_2, _b));
            }
            break;
        }
        case actions_1.DELETE_CUSTOM_FIELD: {
            var nameId = payload.nameId;
            return lodash_1.omit(state, [nameId]);
        }
        case actions_1.PLDM_CLEAR_STATE: {
            return {};
        }
    }
    return state;
};
var contentItemCustomFields = function (state, action) {
    var _a;
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_1.NEW_PLAYLIST:
            return {};
        case actions_1.OPEN_PLAYLIST: {
            var newState = payload.newState;
            if (lodash_1.isNil(newState.customFields)) {
                return {};
            }
            else {
                return newState.customFields.contentItemCustomFields;
            }
        }
        case actions_1.ADD_CUSTOM_FIELDS: {
            var _b = payload, id = _b.id, collection = _b.collection;
            var collectionCopy = lodash_1.cloneDeep(collection);
            return Object.assign({}, state, (_a = {}, _a[id] = collectionCopy, _a));
        }
        case actions_1.ADD_NEW_CUSTOM_FIELD: {
            var nameId_1 = payload.nameId;
            var newState_1 = {};
            Object.keys(state).forEach(function (key) {
                var _a, _b;
                var eachCollection = {};
                Object.assign(eachCollection, state[key], (_a = {}, _a[nameId_1] = '', _a));
                Object.assign(newState_1, (_b = {}, _b[key] = eachCollection, _b));
            });
            return newState_1;
        }
        case actions_1.DELETE_CUSTOM_FIELD: {
            var nameId_2 = payload.nameId;
            var newState_2 = {};
            Object.keys(state).forEach(function (key) {
                var _a;
                Object.assign(newState_2, (_a = {}, _a[key] = lodash_1.omit(state[key], [nameId_2]), _a));
            });
            return newState_2;
        }
        case actions_1.UPDATE_CUSTOM_FIELD_VALUE: {
            var _c = payload, id = _c.id, nameId = _c.nameId, value = _c.value;
            if (state[id] !== undefined && state[id][nameId] !== undefined) {
                var collection = state[id];
                collection[nameId] = value;
                state[id] = collection;
                return Object.assign({}, state);
            }
            break;
        }
        case actions_1.DELETE_CONTENT_ITEM_CUSTOM_FIELD_COLLECTION: {
            var ids = payload.ids;
            if (ids && ids.length) {
                return lodash_1.omit(state, ids);
            }
        }
        case actions_1.PLDM_CLEAR_STATE: {
            return {};
        }
    }
    return state;
};
var customFieldsOrder = function (state, action) {
    if (state === void 0) { state = []; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_1.NEW_PLAYLIST:
            return [];
        case actions_1.OPEN_PLAYLIST: {
            var newState = payload.newState;
            if (lodash_1.isNil(newState.customFields)) {
                return [];
            }
            else {
                return newState.customFields.customFieldsOrder;
            }
        }
        case actions_1.ADD_NEW_CUSTOM_FIELD: {
            var nameId = payload.nameId;
            var newState = state.slice();
            newState.push(nameId);
            return newState;
        }
        case actions_1.DELETE_CUSTOM_FIELD: {
            var nameId_3 = payload.nameId;
            state = state.slice();
            lodash_1.remove(state, function (n) {
                return nameId_3 === n;
            });
            return state;
        }
        case actions_1.PLDM_CLEAR_STATE: {
            return [];
        }
    }
    return state;
};
var customFields = redux_1.combineReducers({ customFieldsOrder: customFieldsOrder,
    customFieldsNameById: customFieldsNameById,
    contentItemCustomFields: contentItemCustomFields });
exports.customFieldsReducer = customFields;
exports.isValidCustomFieldsState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('customFieldsNameById')
        && typeof state.customFieldsNameById === 'object'
        && state.hasOwnProperty('contentItemCustomFields')
        && typeof state.contentItemCustomFields === 'object'
        && state.hasOwnProperty('customFieldsOrder')
        && Array.isArray(state.customFieldsOrder)
        && state.customFieldsOrder.length === Object.keys(state.customFieldsNameById).length;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastModifiedTime = exports.isValidModifiedTimeState = exports.modifiedTimeReducer = void 0;
var actions_1 = __webpack_require__(2);
var lodash_1 = __webpack_require__(0);
var modifiedTime = function (state, action) {
    if (state === void 0) { state = (new Date()).toISOString(); }
    if (action.type === actions_1.OPEN_PLAYLIST) {
        var newState = action.payload.newState;
        if (!lodash_1.isNil(newState.playlist.lastModifiedDate)) {
            return newState.playlist.lastModifiedDate.toISOString();
        }
        return newState.modifiedTime;
    }
    else if (action.type === actions_1.UPDATE_PLAYLIST_MODIFIED_TIME) {
        var modifiedDate = action.payload;
        return modifiedDate.toISOString();
    }
    else if (actions_1.plDmActionModifiesDmState(action)) {
        return (new Date()).toISOString();
    }
    return state;
};
exports.modifiedTimeReducer = modifiedTime;
exports.isValidModifiedTimeState = function (state) {
    return typeof state === 'string';
};
exports.getLastModifiedTime = function (state) {
    return state !== undefined ? state : (new Date()).toISOString();
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPlaylistState = exports.playlistReducer = void 0;
var plDmInterfaces_1 = __webpack_require__(18);
var actions_1 = __webpack_require__(2);
var utils_1 = __webpack_require__(7);
var newPlaylist = utils_1.createDefaultPlaylistProperties(plDmInterfaces_1.PlDmIdNone, 'Untitled', false, false, false);
var playlist = function (state, _a) {
    if (state === void 0) { state = newPlaylist; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actions_1.NEW_PLAYLIST:
            return Object.assign({}, payload);
        case actions_1.UPDATE_PLAYLIST:
            var id = payload.id;
            if (state.id === id) {
                return Object.assign({}, state, payload);
            }
            break;
        case actions_1.OPEN_PLAYLIST:
            var newState = payload.newState;
            return newState.playlist;
        case actions_1.PLDM_CLEAR_STATE:
            return newPlaylist;
    }
    return state;
};
exports.playlistReducer = playlist;
exports.isValidPlaylistState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('id')
        && state.hasOwnProperty('name');
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 27 */
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
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(30), exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmActionModifiesDmState = exports.modifyingActionTypesSet = exports.modifyingActionTypesArray = void 0;
var actionBase_1 = __webpack_require__(6);
var actionAssetMap_1 = __webpack_require__(10);
var actionContentItems_1 = __webpack_require__(11);
var actionPlaylist_1 = __webpack_require__(19);
var actionCustomFields_1 = __webpack_require__(12);
exports.modifyingActionTypesArray = [
    actionBase_1.PLDM_CLEAR_STATE, actionAssetMap_1.PUT_ASSET_ITEM, actionAssetMap_1.REMOVE_ASSET_ITEMS,
    actionContentItems_1.ADD_CONTENT_ITEM, actionContentItems_1.UPDATE_CONTENT_ITEM, actionContentItems_1.DELETE_CONTENT_ITEM, actionContentItems_1.UPDATE_CONTENT_ITEM_ORDER,
    actionPlaylist_1.NEW_PLAYLIST, actionPlaylist_1.UPDATE_PLAYLIST, actionCustomFields_1.ADD_NEW_CUSTOM_FIELD, actionCustomFields_1.UPDATE_CUSTOM_FIELD_VALUE,
    actionCustomFields_1.UPDATE_CUSTOM_FIELD_NAME, actionCustomFields_1.DELETE_CUSTOM_FIELD, actionCustomFields_1.DELETE_CONTENT_ITEM_CUSTOM_FIELD_COLLECTION,
];
exports.modifyingActionTypesSet = new Set(exports.modifyingActionTypesArray);
function plDmActionModifiesDmState(action) {
    return exports.modifyingActionTypesSet.has(action.type);
}
exports.plDmActionModifiesDmState = plDmActionModifiesDmState;


/***/ }),
/* 29 */
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
__exportStar(__webpack_require__(2), exports);
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(27), exports);
var plDmDefaults_1 = __webpack_require__(17);
Object.defineProperty(exports, "plDmGetDefaultVideoContentItemData", { enumerable: true, get: function () { return plDmDefaults_1.plDmGetDefaultVideoContentItemData; } });
Object.defineProperty(exports, "plDmGetDefaultAudioContentItemData", { enumerable: true, get: function () { return plDmDefaults_1.plDmGetDefaultAudioContentItemData; } });
Object.defineProperty(exports, "plDmGetDefaultImageContentItemData", { enumerable: true, get: function () { return plDmDefaults_1.plDmGetDefaultImageContentItemData; } });
Object.defineProperty(exports, "plDmResetDefaultPropertyValues", { enumerable: true, get: function () { return plDmDefaults_1.plDmResetDefaultPropertyValues; } });


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmCheckForInvalidPlDmPlaylistState = exports.plDmReducer = void 0;
var redux_1 = __webpack_require__(15);
var plDmError_1 = __webpack_require__(1);
var reducerContentItems_1 = __webpack_require__(21);
var reducerPlaylist_1 = __webpack_require__(24);
var reducerAssetMap_1 = __webpack_require__(20);
var reducerModifiedTime_1 = __webpack_require__(23);
var actions_1 = __webpack_require__(2);
var reducerCustomFields_1 = __webpack_require__(22);
function enableBatching(reduce) {
    return function batchingReducer(state, action) {
        switch (action.type) {
            case actions_1.BSDM_BATCH:
                return action.payload.reduce(batchingReducer, state);
            default:
                return reduce(state, action);
        }
    };
}
exports.plDmReducer = enableBatching(redux_1.combineReducers({
    playlist: reducerPlaylist_1.playlistReducer,
    contentItems: reducerContentItems_1.contentItemsReducer,
    assetMap: reducerAssetMap_1.assetMapReducer,
    modifiedTime: reducerModifiedTime_1.modifiedTimeReducer,
    customFields: reducerCustomFields_1.customFieldsReducer,
}));
function plDmCheckForInvalidPlDmPlaylistState(state) {
    if (typeof state === 'object'
        && state.hasOwnProperty('playlist')
        && reducerPlaylist_1.isValidPlaylistState(state.playlist)
        && state.hasOwnProperty('assetMap')
        && reducerAssetMap_1.isValidAssetMapState(state.assetMap)
        && state.hasOwnProperty('contentItems')
        && reducerContentItems_1.isValidContentItemsState(state.contentItems)
        && state.hasOwnProperty('modifiedTime')
        && reducerModifiedTime_1.isValidModifiedTimeState(state.modifiedTime)) {
        return null;
    }
    else {
        return new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidSign, 'PlDmState structure is invalid');
    }
}
exports.plDmCheckForInvalidPlDmPlaylistState = plDmCheckForInvalidPlDmPlaylistState;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmGetBsnPlaylistAssetItemList = exports.plDmGetBlobAssetItemList = exports.plDmGetAssetItemIdsForPlaylist = exports.plDmGetAssetItemByLocator = exports.plDmGetAssetItemById = exports.plDmGetAssetIdByLocator = exports.plDmGetAssetMapState = void 0;
var reselect_1 = __webpack_require__(4);
var lodash_1 = __webpack_require__(0);
var bscore_1 = __webpack_require__(5);
var base_1 = __webpack_require__(3);
var plDmError_1 = __webpack_require__(1);
var isValidAssetMapState = function (state) {
    return typeof state === 'object';
};
exports.plDmGetAssetMapState = function (state) {
    return getAssetMapState(state);
};
var getAssetMapState = reselect_1.createSelector(base_1.plDmGetBaseState, function (state) {
    if (isValidAssetMapState(state.assetMap)) {
        return state.assetMap;
    }
    else {
        var exceptionMessage = "state must be of type PlDmState or\n        have a field baUwDm of type PlDmState. invalid state.assetMap\n        " + JSON.stringify(state.assetMap);
        throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, exceptionMessage);
    }
});
exports.plDmGetAssetIdByLocator = function (state, props) {
    var subState = exports.plDmGetAssetMapState(state);
    var assetId = null;
    var locator = props.locator;
    Object.keys(subState).some(function (id) {
        if (subState[id].locator === locator) {
            assetId = id;
            return true;
        }
    });
    return assetId;
};
function plDmGetAssetItemById(state, props) {
    var subState = exports.plDmGetAssetMapState(state);
    var asset = subState[props.id];
    return !lodash_1.isNil(asset) ? (lodash_1.omit(Object.assign({}, asset), ['refCount'])) : null;
}
exports.plDmGetAssetItemById = plDmGetAssetItemById;
function plDmGetAssetItemByLocator(state, props) {
    var subState = exports.plDmGetAssetMapState(state);
    var asset = null;
    var locator = props.locator;
    Object.keys(subState).some(function (id) {
        var item = subState[id];
        if (item[id].locator === locator) {
            asset = item;
            return true;
        }
    });
    return asset;
}
exports.plDmGetAssetItemByLocator = plDmGetAssetItemByLocator;
function plDmGetAssetItemIdsForPlaylist(state) {
    return getAssetItemIdsForPlaylist(state);
}
exports.plDmGetAssetItemIdsForPlaylist = plDmGetAssetItemIdsForPlaylist;
var getAssetItemIdsForPlaylist = reselect_1.createSelector(exports.plDmGetAssetMapState, function (state) {
    return Object.keys(state);
});
function plDmGetBlobAssetItemList(state) {
    return Object.keys(state.assetMap).reduce(function (acc, assetId) {
        var assetItem = state.assetMap[assetId];
        if (assetItem.location === bscore_1.AssetLocation.Blob) {
            acc.push(assetItem);
        }
        return acc;
    }, []);
}
exports.plDmGetBlobAssetItemList = plDmGetBlobAssetItemList;
function plDmGetBsnPlaylistAssetItemList(state) {
    var assetItemArray = [];
    var hasLocalAsset = false;
    Object.keys(state.assetMap).some(function (id) {
        var assetItem = state.assetMap[id];
        if (assetItem.location !== bscore_1.AssetLocation.Bsn) {
            hasLocalAsset = true;
            return true;
        }
        assetItemArray.push(assetItem);
        return false;
    });
    if (!hasLocalAsset) {
        return assetItemArray;
    }
    return null;
}
exports.plDmGetBsnPlaylistAssetItemList = plDmGetBsnPlaylistAssetItemList;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmGetPlaylistLastModifiedTime = exports.plDmGetModifiedTimeState = void 0;
var reselect_1 = __webpack_require__(4);
var base_1 = __webpack_require__(3);
var plDmError_1 = __webpack_require__(1);
var isValidModifiedTimeState = function (state) {
    return typeof state === 'string';
};
exports.plDmGetModifiedTimeState = function (state) {
    return getModifiedTimeState(state);
};
var getModifiedTimeState = reselect_1.createSelector(base_1.plDmGetBaseState, function (state) {
    if (isValidModifiedTimeState(state.modifiedTime)) {
        return state.modifiedTime;
    }
    else {
        var exceptionMessage = "state must be of type PlDmState or\n        have a field bspl of type PlDmState. invalid state.modifiedTime\n        " + JSON.stringify(state.modifiedTime);
        throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, exceptionMessage);
    }
});
function plDmGetPlaylistLastModifiedTime(state) {
    return getPlaylistLastModifiedTime(state);
}
exports.plDmGetPlaylistLastModifiedTime = plDmGetPlaylistLastModifiedTime;
var getPlaylistLastModifiedTime = reselect_1.createSelector(exports.plDmGetModifiedTimeState, function (state) {
    return new Date(state);
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmGetPlaylistSupports = exports.plDmGetPlaylistProperties = exports.plDmGetPlaylistLastModifiedDate = exports.plDmGetPlaylistName = exports.plDmGetPlaylistId = exports.plDmGetPlaylistState = void 0;
var lodash_1 = __webpack_require__(0);
var reselect_1 = __webpack_require__(4);
var base_1 = __webpack_require__(3);
var plDmError_1 = __webpack_require__(1);
var isValidPlaylistState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('id')
        && state.hasOwnProperty('name');
};
exports.plDmGetPlaylistState = function (state) {
    return getPlaylistState(state);
};
var getPlaylistState = reselect_1.createSelector(base_1.plDmGetBaseState, function (state) {
    if (isValidPlaylistState(state.playlist)) {
        return state.playlist;
    }
    else {
        var exceptionMessage = "state must be of type PlDmState or\n        have a field bspl of type PlDmState. invalid state.playlist\n        " + JSON.stringify(state.playlist);
        throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, exceptionMessage);
    }
});
function plDmGetPlaylistId(state) {
    return getPlaylistId(state);
}
exports.plDmGetPlaylistId = plDmGetPlaylistId;
var getPlaylistId = reselect_1.createSelector(exports.plDmGetPlaylistState, function (state) {
    return state.id;
});
function plDmGetPlaylistName(state) {
    return getPlaylistName(state);
}
exports.plDmGetPlaylistName = plDmGetPlaylistName;
var getPlaylistName = reselect_1.createSelector(exports.plDmGetPlaylistState, function (state) {
    return state.name;
});
function plDmGetPlaylistLastModifiedDate(state) {
    return getPlaylistLastModifiedDate(state);
}
exports.plDmGetPlaylistLastModifiedDate = plDmGetPlaylistLastModifiedDate;
var getPlaylistLastModifiedDate = reselect_1.createSelector(exports.plDmGetPlaylistState, function (state) {
    return state.lastModifiedDate;
});
function plDmGetPlaylistProperties(state) {
    return exports.plDmGetPlaylistState(state);
}
exports.plDmGetPlaylistProperties = plDmGetPlaylistProperties;
function plDmGetPlaylistSupports(state) {
    return getPlaylistSupports(state);
}
exports.plDmGetPlaylistSupports = plDmGetPlaylistSupports;
var getPlaylistSupports = reselect_1.createSelector(exports.plDmGetPlaylistState, function (state) {
    if (lodash_1.isNil(state.supportsVideo)) {
        var exceptionMessage = "state must be of type PlDmState or\n        have a field bspl of type PlDmState. invalid state.playlist\n        " + JSON.stringify(state);
        throw new plDmError_1.PlDmError(plDmError_1.PlDmErrorType.invalidParameters, exceptionMessage);
    }
    return {
        supportsAudio: state.supportsAudio,
        supportsImages: state.supportsImages,
        supportsVideo: state.supportsVideo,
    };
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.plDmGetLiveMediaContentItemById = exports.getLiveMediaContentItemStateById = exports.plDmGetContentItemById = exports.plDmGetDynamicPlaylistContentItemById = exports.getDynamicPlaylistContentItemStateById = void 0;
var reselect_1 = __webpack_require__(4);
var plDmClasses_1 = __webpack_require__(16);
var plDmContentItems_1 = __webpack_require__(8);
var selectorContentItems_1 = __webpack_require__(13);
var selectorCustomFields_1 = __webpack_require__(14);
var createContentItemObject = function (contentItem, assetMap) {
    if (contentItem) {
        var assetItem = void 0;
        if (plDmContentItems_1.plDmContentItemIsMediaContentItem(contentItem)) {
            assetItem = assetMap[contentItem.assetId];
        }
        return new plDmClasses_1.PlDmcDynamicPlaylistContentItem(contentItem, assetItem);
    }
    return null;
};
exports.getDynamicPlaylistContentItemStateById = reselect_1.createSelector(function (state, props) { return selectorContentItems_1.plDmGetContentItemStateById(state, props); }, function (state) { return state.assetMap; }, createContentItemObject);
function plDmGetDynamicPlaylistContentItemById(state, props) {
    return exports.getDynamicPlaylistContentItemStateById(state, props);
}
exports.plDmGetDynamicPlaylistContentItemById = plDmGetDynamicPlaylistContentItemById;
function plDmGetContentItemById(state, props) {
    return exports.getDynamicPlaylistContentItemStateById(state, props);
}
exports.plDmGetContentItemById = plDmGetContentItemById;
var createLiveMediaContentItemObject = function (contentItem, assetMap, customFields) {
    if (contentItem) {
        var assetItem = void 0;
        var customFieldCollection = {};
        if (plDmContentItems_1.plDmContentItemIsMediaContentItem(contentItem) && plDmContentItems_1.plDmContentItemIsMediaFeedContentItem(contentItem)) {
            assetItem = assetMap[contentItem.assetId];
            customFieldCollection = customFields;
        }
        return new plDmClasses_1.PlDmcMediaFeedContentItem(contentItem, assetItem, customFieldCollection);
    }
    return null;
};
exports.getLiveMediaContentItemStateById = reselect_1.createSelector(function (state, props) { return selectorContentItems_1.plDmGetContentItemStateById(state, props); }, function (state) { return state.assetMap; }, function (state, props) { return selectorCustomFields_1.plDmGetCustomFieldsDerivedCollectionByContentItemId(state, props); }, createLiveMediaContentItemObject);
function plDmGetLiveMediaContentItemById(state, props) {
    return exports.getLiveMediaContentItemStateById(state, props);
}
exports.plDmGetLiveMediaContentItemById = plDmGetLiveMediaContentItemById;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(36);
var v4 = __webpack_require__(37);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(26);
var bytesToUuid = __webpack_require__(25);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(26);
var bytesToUuid = __webpack_require__(25);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ })
/******/ ]);
});