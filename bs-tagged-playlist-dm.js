(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("./bscore"), require("reselect"), require("redux"), require("redux-thunk"), require("uuid"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "./bscore", "reselect", "redux", "redux-thunk", "uuid"], factory);
	else if(typeof exports === 'object')
		exports["bs-tagged-playlist-dm"] = factory(require("lodash"), require("./bscore"), require("reselect"), require("redux"), require("redux-thunk"), require("uuid"));
	else
		root["bs-tagged-playlist-dm"] = factory(root["lodash"], root["./bscore"], root["reselect"], root["redux"], root["redux-thunk"], root["uuid"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_35__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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
exports.TplDmIsPlDmError = exports.TplDmError = exports.TplDmErrorType = void 0;
var TplDmErrorType;
(function (TplDmErrorType) {
    TplDmErrorType[TplDmErrorType["unknownError"] = 0] = "unknownError";
    TplDmErrorType[TplDmErrorType["unexpectedError"] = 1] = "unexpectedError";
    TplDmErrorType[TplDmErrorType["invalidParameters"] = 2] = "invalidParameters";
    TplDmErrorType[TplDmErrorType["invalidOperation"] = 3] = "invalidOperation";
    TplDmErrorType[TplDmErrorType["invalidState"] = 4] = "invalidState";
    TplDmErrorType[TplDmErrorType["apiError"] = 5] = "apiError";
})(TplDmErrorType = exports.TplDmErrorType || (exports.TplDmErrorType = {}));
var tplDmErrorMessage = (_a = {},
    _a[TplDmErrorType.unknownError] = 'Unknown error',
    _a[TplDmErrorType.unexpectedError] = 'Unexpected error',
    _a[TplDmErrorType.invalidParameters] = 'Invalid parameters',
    _a[TplDmErrorType.invalidOperation] = 'Invalid operation attempt',
    _a[TplDmErrorType.invalidState] = 'Invalid tagged playlist state',
    _a[TplDmErrorType.apiError] = 'API error',
    _a);
var TplDmError = (function (_super) {
    __extends(TplDmError, _super);
    function TplDmError(type, reason, action) {
        var _this = _super.call(this) || this;
        _this.name = 'TplDmError';
        _this.type = type;
        if (reason) {
            _this.message = tplDmErrorMessage[type] + ': ' + reason;
        }
        else {
            _this.message = tplDmErrorMessage[type];
        }
        if (action) {
            _this.action = Object.assign({}, action, { error: true, meta: { reason: _this.message } });
        }
        Object.setPrototypeOf(_this, TplDmError.prototype);
        return _this;
    }
    TplDmError.prototype.attachAction = function (action) {
        this.action = Object.assign({}, action, { error: true, meta: { reason: this.message } });
    };
    return TplDmError;
}(Error));
exports.TplDmError = TplDmError;
function TplDmIsPlDmError(error) {
    return error instanceof TplDmError;
}
exports.TplDmIsPlDmError = TplDmIsPlDmError;


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
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(15), exports);
__exportStar(__webpack_require__(11), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("./bscore");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmIsValidContentsState = exports.tplDmIsValidAssetMapState = exports.tplDmIsValidRulesState = exports.tplDmIsValidPlaylistState = exports.tplDmIsValidModifiedTimeState = exports.tplDmCheckForInvalidTplDmPlaylistState = void 0;
var tplDmError_1 = __webpack_require__(1);
function tplDmCheckForInvalidTplDmPlaylistState(state) {
    if (typeof state === 'object'
        && state.hasOwnProperty('playlist')
        && exports.tplDmIsValidPlaylistState(state.playlist)
        && state.hasOwnProperty('rules')
        && exports.tplDmIsValidRulesState(state.rules)
        && state.hasOwnProperty('modifiedTime')
        && exports.tplDmIsValidModifiedTimeState(state.modifiedTime)
        && state.hasOwnProperty('contents')
        && exports.tplDmIsValidContentsState(state.contents)
        && state.hasOwnProperty('assetMap')
        && exports.tplDmIsValidAssetMapState(state.assetMap)) {
        return null;
    }
    else {
        return new tplDmError_1.TplDmError(tplDmError_1.TplDmErrorType.invalidState, 'TplDmState structure is invalid');
    }
}
exports.tplDmCheckForInvalidTplDmPlaylistState = tplDmCheckForInvalidTplDmPlaylistState;
exports.tplDmIsValidModifiedTimeState = function (state) {
    return typeof state === 'string';
};
exports.tplDmIsValidPlaylistState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('id')
        && state.hasOwnProperty('name');
};
exports.tplDmIsValidRulesState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('order')
        && state.hasOwnProperty('ruleEntities')
        && state.hasOwnProperty('combiner');
};
exports.tplDmIsValidAssetMapState = function (state) {
    return typeof state === 'object';
};
exports.tplDmIsValidContentsState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('order')
        && state.hasOwnProperty('contentItems');
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultTaggedPlaylistProperties = exports.TplDefaultSortTagName = exports.newTplDmId = void 0;
var lodash_1 = __webpack_require__(0);
var uuid_1 = __webpack_require__(35);
exports.newTplDmId = function () { return uuid_1.v4(); };
exports.TplDefaultSortTagName = 'FileName';
exports.createDefaultTaggedPlaylistProperties = function (params) {
    var playlistSpec = params.playlistSpec;
    return {
        id: lodash_1.isNil(params.id) ? exports.newTplDmId() : params.id,
        name: params.name,
        sortTagName: lodash_1.isNil(playlistSpec) ? exports.TplDefaultSortTagName : params.playlistSpec.sortTagName,
        sortDescending: lodash_1.isNil(playlistSpec) ? false : params.playlistSpec.sortDescending,
        contentsVirtualPath: lodash_1.isNil(params.contentsVirtualPath) ? '\\' : params.contentsVirtualPath,
        ttl: lodash_1.isNil(params.ttl) ? 300 : params.ttl,
        lastModifiedDate: null,
        waitingForApprove: lodash_1.isNil(params.waitingForApprove) ? true : params.waitingForApprove,
    };
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmGetBaseState = exports.tplDmFilterBaseState = void 0;
var tplDmError_1 = __webpack_require__(1);
var tplDmValidation_1 = __webpack_require__(4);
exports.tplDmFilterBaseState = function (state) {
    if (state.hasOwnProperty('bstpldm') && (tplDmValidation_1.tplDmCheckForInvalidTplDmPlaylistState(state.bstpldm) === null)) {
        return state.bstpldm;
    }
    else if (tplDmValidation_1.tplDmCheckForInvalidTplDmPlaylistState(state) === null) {
        return state;
    }
    else {
        var exceptionMessage = "state must be of type TplDmState or have a field bstpldm\n      of type TplDmState. invalid state " + JSON.stringify(state);
        throw new tplDmError_1.TplDmError(tplDmError_1.TplDmErrorType.invalidParameters, exceptionMessage);
    }
};
exports.tplDmGetBaseState = function (state) {
    return exports.tplDmFilterBaseState(state);
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 8 */
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
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(24), exports);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmFilterTplDmState = exports.tplDmClearStateAction = exports.tplDmBatchActions = exports.TPLDM_CLEAR_STATE = exports.TPLDM_BATCH = void 0;
exports.TPLDM_BATCH = 'TPLDM_BATCH';
exports.TPLDM_CLEAR_STATE = 'TPLDM_CLEAR_STATE';
function tplDmBatchActions(actions) {
    return { type: exports.TPLDM_BATCH, payload: actions };
}
exports.tplDmBatchActions = tplDmBatchActions;
function tplDmClearStateAction() {
    return { type: exports.TPLDM_CLEAR_STATE, payload: null };
}
exports.tplDmClearStateAction = tplDmClearStateAction;
function tplDmFilterTplDmState(state) {
    if (state.hasOwnProperty('bstpldm')) {
        return state.bstpldm;
    }
    return state;
}
exports.tplDmFilterTplDmState = tplDmFilterTplDmState;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
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
exports.tplDmPrepareAssetItem = exports.tplDmRemoveAssetItems = exports.tplDmHydrateAssetItemsWithoutTest = exports.tplDmHydrateAssetItems = exports.TPLDM_REMOVE_ASSET_ITEMS = exports.TPLDM_HYDRATE_ASSET_ITEMS = void 0;
var bscore_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var base_1 = __webpack_require__(9);
var selectors_1 = __webpack_require__(8);
var tplDmError_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(5);
exports.TPLDM_HYDRATE_ASSET_ITEMS = 'TPLDM_HYDRATE_ASSET_ITEMS';
exports.TPLDM_REMOVE_ASSET_ITEMS = 'TPLDM_REMOVE_ASSET_ITEMS';
function tplDmHydrateAssetItems(params) {
    return function (dispatch, getState) {
        var items = lodash_1.isArray(params) ? params : [params];
        var preparedItems = [];
        var state = getState();
        items.forEach(function (item) {
            preparedItems.push(tplDmPrepareAssetItem(base_1.tplDmFilterTplDmState(state), item));
        });
        var putAction = {
            type: exports.TPLDM_HYDRATE_ASSET_ITEMS,
            payload: preparedItems,
        };
        dispatch(putAction);
        return putAction;
    };
}
exports.tplDmHydrateAssetItems = tplDmHydrateAssetItems;
function tplDmHydrateAssetItemsWithoutTest(params) {
    return {
        type: exports.TPLDM_HYDRATE_ASSET_ITEMS,
        payload: params,
    };
}
exports.tplDmHydrateAssetItemsWithoutTest = tplDmHydrateAssetItemsWithoutTest;
function tplDmRemoveAssetItems(id) {
    var assetIds = typeof id === 'string' ? [id] : id;
    return {
        type: exports.TPLDM_REMOVE_ASSET_ITEMS,
        payload: assetIds,
    };
}
exports.tplDmRemoveAssetItems = tplDmRemoveAssetItems;
function tplDmPrepareAssetItem(state, assetItem, action) {
    var locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
    if (!locator) {
        throw new tplDmError_1.TplDmError(tplDmError_1.TplDmErrorType.invalidParameters, 'Asset Item does not contain valid locator information', action);
    }
    var preparedAssetItem = __assign(__assign({}, assetItem), { locator: locator });
    if (!preparedAssetItem.id || preparedAssetItem.id === bscore_1.BsAssetIdNone) {
        var assetId = selectors_1.tplDmGetAssetIdByLocator(state, { locator: locator });
        preparedAssetItem.id = assetId ? assetId : utils_1.newTplDmId();
    }
    else {
        var assetId = selectors_1.tplDmGetAssetIdByLocator(state, { locator: locator });
        preparedAssetItem.id = assetId ? assetId : preparedAssetItem.id;
    }
    return preparedAssetItem;
}
exports.tplDmPrepareAssetItem = tplDmPrepareAssetItem;


/***/ }),
/* 12 */
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
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(18), exports);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TplDmcTaggedPlaylistProperties = exports.TplDmcTaggedPlaylistSpecificationWithContentsForUniversalTimeZone = exports.TplDmcTaggedPlaylistForUniversalTimeZone = void 0;
var TplDmcTaggedPlaylistForUniversalTimeZone = (function () {
    function TplDmcTaggedPlaylistForUniversalTimeZone(properties, filterSpecification, contents) {
        if (contents === void 0) { contents = []; }
        this.properties = properties;
        this.filterSpecification = filterSpecification;
        this.contents = contents;
    }
    return TplDmcTaggedPlaylistForUniversalTimeZone;
}());
exports.TplDmcTaggedPlaylistForUniversalTimeZone = TplDmcTaggedPlaylistForUniversalTimeZone;
var TplDmcTaggedPlaylistSpecificationWithContentsForUniversalTimeZone = (function () {
    function TplDmcTaggedPlaylistSpecificationWithContentsForUniversalTimeZone(spec, contents) {
        this.taggedPlaylistSpecification = spec;
        this.contents = contents;
    }
    return TplDmcTaggedPlaylistSpecificationWithContentsForUniversalTimeZone;
}());
exports.TplDmcTaggedPlaylistSpecificationWithContentsForUniversalTimeZone = TplDmcTaggedPlaylistSpecificationWithContentsForUniversalTimeZone;
var TplDmcTaggedPlaylistProperties = (function () {
    function TplDmcTaggedPlaylistProperties(params) {
        this.name = params.name;
        this.sortTagName = params.sortTagName;
        this.sortDescending = params.sortDescending;
        this.contentsVirtualPath = params.contentsVirtualPath;
        this.ttl = params.ttl;
        this.waitingForApprove = params.waitingForApprove;
    }
    return TplDmcTaggedPlaylistProperties;
}());
exports.TplDmcTaggedPlaylistProperties = TplDmcTaggedPlaylistProperties;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmCreateContentItem = void 0;
var bscore_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
function tplDmCreateContentItem(params) {
    var contentItem = {};
    switch (params.mediaType) {
        case bscore_1.MediaType.Video: {
            Object.assign(contentItem, {
                type: bscore_1.ContentItemType.Video,
            });
            break;
        }
        case bscore_1.MediaType.Audio: {
            Object.assign(contentItem, {
                type: bscore_1.ContentItemType.Audio,
            });
            break;
        }
        case bscore_1.MediaType.Image: {
            Object.assign(contentItem, {
                type: bscore_1.ContentItemType.Image,
            });
            break;
        }
        case bscore_1.MediaType.Text: {
            Object.assign(contentItem, {
                type: bscore_1.ContentItemType.Text,
            });
            break;
        }
        default: {
            Object.assign(contentItem, {
                type: bscore_1.ContentItemType.Image,
            });
        }
    }
    if (!lodash_1.isNil(params.displayDuration)) {
        Object.assign(contentItem, {
            displayDuration: params.displayDuration,
        });
    }
    if (lodash_1.isNil(params.validityStartDate) && lodash_1.isNil(params.validityEndDate)) {
        Object.assign(contentItem, {
            enableValidityDate: false,
            validityStartDate: null,
            validityEndDate: null,
        });
    }
    else {
        Object.assign(contentItem, {
            enableValidityDate: true,
            validityStartDate: params.validityStartDate,
            validityEndDate: params.validityEndDate,
        });
    }
    Object.assign(contentItem, {
        id: params.id,
        name: params.name,
        assetId: params.assetId,
        state: lodash_1.isNil(params.state) ? bscore_1.BsnTaggedPlaylistItemStatus.Pending : params.state,
    });
    return contentItem;
}
exports.tplDmCreateContentItem = tplDmCreateContentItem;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmUpdateContentItemsPosition = exports.tplDmRemoveContentItemsWithAssetItems = exports.tplDmRemoveContents = exports.tplDmUpdateContentItem = exports.tplDmHydrateContentItemsForLoadNewPlaylist = exports.tplDmHydrateContentItems = exports.tplDmHydrateContents = exports.TPLDM_UPDATE_CONTENT_ITEMS_POSITION = exports.TPLDM_REMOVE_CONTENTS = exports.TPLDM_UPDATE_CONTENT_ITEM = exports.TPLDM_HYDRATE_CONTENTS_FOR_LOAD = exports.TPLDM_HYDRATE_CONTENTS = void 0;
var lodash_1 = __webpack_require__(0);
var bscore_1 = __webpack_require__(3);
var actionAssetMap_1 = __webpack_require__(11);
var tplDmContentItems_1 = __webpack_require__(14);
var actionAssetMap_2 = __webpack_require__(11);
var tplDmError_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(5);
var base_1 = __webpack_require__(9);
var selectors_1 = __webpack_require__(8);
exports.TPLDM_HYDRATE_CONTENTS = 'TPLDM_HYDRATE_CONTENTS';
exports.TPLDM_HYDRATE_CONTENTS_FOR_LOAD = 'TPLDM_HYDRATE_CONTENTS_FOR_LOAD';
exports.TPLDM_UPDATE_CONTENT_ITEM = 'TPLDM_UPDATE_CONTENT_ITEM';
exports.TPLDM_REMOVE_CONTENTS = 'TPLDM_REMOVE_CONTENTS';
exports.TPLDM_UPDATE_CONTENT_ITEMS_POSITION = 'TPLDM_UPDATE_CONTENT_ITEMS_POSITION';
function tplDmHydrateContents(items, newPlaylistInitialization) {
    if (newPlaylistInitialization === void 0) { newPlaylistInitialization = false; }
    return function (dispatch, getState) {
        var inputItems = lodash_1.isArray(items) ? items : [items];
        var batchedActions = [];
        var addItems = [];
        var tplDmState = base_1.tplDmFilterTplDmState(getState());
        var assetItems = [];
        inputItems.forEach(function (x) {
            if (bscore_1.bscIsAssetItem(x.content)) {
                var preparedAssetItem = actionAssetMap_1.tplDmPrepareAssetItem(tplDmState, x.content);
                assetItems.push(preparedAssetItem);
                var newItem = tplDmContentItems_1.tplDmCreateContentItem({
                    id: utils_1.newTplDmId(),
                    name: x.name,
                    assetId: preparedAssetItem.id,
                    mediaType: x.type,
                    displayDuration: !lodash_1.isNil(x.displayDuration) ? x.displayDuration : null,
                    validityStartDate: !lodash_1.isNil(x.validityStartDate) ? x.validityStartDate.toISOString() : null,
                    validityEndDate: !lodash_1.isNil(x.validityEndDate) ? x.validityEndDate.toISOString() : null,
                    state: !lodash_1.isNil(x.state) ? x.state : null,
                });
                addItems.push(newItem);
            }
            else {
                throw new tplDmError_1.TplDmError(tplDmError_1.TplDmErrorType.invalidParameters, 'ContentItems must be specified by AssetItem parameters');
            }
        });
        var mainAction;
        if (newPlaylistInitialization) {
            mainAction = tplDmHydrateContentItemsForLoadNewPlaylist(addItems);
        }
        else {
            mainAction = tplDmHydrateContentItems(addItems);
        }
        batchedActions.push(actionAssetMap_2.tplDmHydrateAssetItemsWithoutTest(assetItems));
        batchedActions.push(mainAction);
        dispatch(base_1.tplDmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.tplDmHydrateContents = tplDmHydrateContents;
function tplDmHydrateContentItems(params) {
    return {
        type: exports.TPLDM_HYDRATE_CONTENTS,
        payload: params,
    };
}
exports.tplDmHydrateContentItems = tplDmHydrateContentItems;
function tplDmHydrateContentItemsForLoadNewPlaylist(params) {
    return {
        type: exports.TPLDM_HYDRATE_CONTENTS_FOR_LOAD,
        payload: params,
    };
}
exports.tplDmHydrateContentItemsForLoadNewPlaylist = tplDmHydrateContentItemsForLoadNewPlaylist;
function tplDmUpdateContentItem(params) {
    return {
        type: exports.TPLDM_UPDATE_CONTENT_ITEM,
        payload: params,
    };
}
exports.tplDmUpdateContentItem = tplDmUpdateContentItem;
function tplDmRemoveContents(ids) {
    var params = lodash_1.isArray(ids) ? ids : [ids];
    return {
        type: exports.TPLDM_REMOVE_CONTENTS,
        payload: params,
    };
}
exports.tplDmRemoveContents = tplDmRemoveContents;
function tplDmRemoveContentItemsWithAssetItems(ids) {
    return function (dispatch, getState) {
        var tplDmState = base_1.tplDmFilterTplDmState(getState());
        var stateIds = typeof ids === 'string' ? [ids] : ids;
        var assetIds = [];
        stateIds.forEach(function (stateId) {
            var contentItem = selectors_1.tplDmGetContentItemById(tplDmState, stateId);
            if (contentItem) {
                assetIds.push(contentItem.assetId);
            }
        });
        var batchedActions = [];
        if (assetIds.length > 0) {
            batchedActions.push(actionAssetMap_2.tplDmRemoveAssetItems(assetIds));
        }
        var mainAction = tplDmRemoveContents(stateIds);
        batchedActions.push(mainAction);
        dispatch(base_1.tplDmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.tplDmRemoveContentItemsWithAssetItems = tplDmRemoveContentItemsWithAssetItems;
function tplDmUpdateContentItemsPosition(params) {
    return {
        type: exports.TPLDM_UPDATE_CONTENT_ITEMS_POSITION,
        payload: params,
    };
}
exports.tplDmUpdateContentItemsPosition = tplDmUpdateContentItemsPosition;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmUpdatePlaylist = exports.tplDmOpenPlaylist = exports.tplDmNewPlaylist = exports.TPLDM_UPDATE_PLAYLIST = exports.TPLDM_OPEN_PLAYLIST = exports.TPLDM_NEW_PLAYLIST = void 0;
var bscore_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(5);
var lodash_1 = __webpack_require__(0);
exports.TPLDM_NEW_PLAYLIST = 'TPLDM_NEW_PLAYLIST';
exports.TPLDM_OPEN_PLAYLIST = 'TPLDM_OPEN_PLAYLIST';
exports.TPLDM_UPDATE_PLAYLIST = 'TPLDM_UPDATE_PLAYLIST';
function tplDmNewPlaylist(params) {
    var filterSpec = !lodash_1.isNil(params.playlistSpec) && !lodash_1.isNil(params.playlistSpec.filterSpec) ?
        params.playlistSpec.filterSpec : null;
    var parsedFilterSpec;
    if (lodash_1.isNil(filterSpec)) {
        parsedFilterSpec = {
            ruleEntities: [],
            combiner: bscore_1.BsnFilterCombineType.All,
        };
    }
    else {
        parsedFilterSpec = {
            ruleEntities: filterSpec.components.map(function (entity) {
                return Object.assign(entity, { id: utils_1.newTplDmId() });
            }),
            combiner: filterSpec.combineType,
        };
    }
    return {
        type: exports.TPLDM_NEW_PLAYLIST,
        payload: {
            playlist: utils_1.createDefaultTaggedPlaylistProperties(params),
            parsedFilterSpec: parsedFilterSpec,
        },
    };
}
exports.tplDmNewPlaylist = tplDmNewPlaylist;
function tplDmOpenPlaylist(newState) {
    return {
        type: exports.TPLDM_OPEN_PLAYLIST,
        payload: newState,
    };
}
exports.tplDmOpenPlaylist = tplDmOpenPlaylist;
function tplDmUpdatePlaylist(params) {
    return {
        type: exports.TPLDM_UPDATE_PLAYLIST,
        payload: params,
    };
}
exports.tplDmUpdatePlaylist = tplDmUpdatePlaylist;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmRemoveAllRules = exports.tplDmRemoveRules = exports.tplDmUpdateRule = exports.tplDmUpdateRuleCombiner = exports.tplDmAddRules = exports.TPLDM_REMOVE_ALL_RULES = exports.TPLDM_REMOVE_RULES = exports.TPLDM_UPDATE_RULE_COMBINER = exports.TPLDM_UPDATE_RULE = exports.TPLDM_ADD_RULES = void 0;
var lodash_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(5);
exports.TPLDM_ADD_RULES = 'TPLDM_ADD_RULES';
exports.TPLDM_UPDATE_RULE = 'TPLDM_UPDATE_RULE';
exports.TPLDM_UPDATE_RULE_COMBINER = 'TPLDM_UPDATE_RULE_COMBINER';
exports.TPLDM_REMOVE_RULES = 'TPLDM_REMOVE_RULES';
exports.TPLDM_REMOVE_ALL_RULES = 'TPLDM_REMOVE_ALL_RULES';
function tplDmAddRules(entities) {
    var params = lodash_1.cloneDeep((lodash_1.isArray(entities) ? entities : [entities])).map(function (entity) {
        return Object.assign(entity, { id: utils_1.newTplDmId() });
    });
    return {
        type: exports.TPLDM_ADD_RULES,
        payload: params,
    };
}
exports.tplDmAddRules = tplDmAddRules;
function tplDmUpdateRuleCombiner(combiner) {
    return {
        type: exports.TPLDM_UPDATE_RULE_COMBINER,
        payload: combiner,
    };
}
exports.tplDmUpdateRuleCombiner = tplDmUpdateRuleCombiner;
function tplDmUpdateRule(params) {
    return {
        type: exports.TPLDM_UPDATE_RULE,
        payload: params,
    };
}
exports.tplDmUpdateRule = tplDmUpdateRule;
function tplDmRemoveRules(ids) {
    var params = lodash_1.isArray(ids) ? ids : [ids];
    return {
        type: exports.TPLDM_REMOVE_RULES,
        payload: params,
    };
}
exports.tplDmRemoveRules = tplDmRemoveRules;
function tplDmRemoveAllRules() {
    return {
        type: exports.TPLDM_REMOVE_ALL_RULES,
        payload: null,
    };
}
exports.tplDmRemoveAllRules = tplDmRemoveAllRules;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assetMapReducer = void 0;
var lodash_1 = __webpack_require__(0);
var actions_1 = __webpack_require__(2);
var assetById = function (state, action) {
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_1.TPLDM_NEW_PLAYLIST:
            return {};
        case actions_1.TPLDM_OPEN_PLAYLIST: {
            var newState = payload;
            return newState.assetMap ? newState.assetMap : {};
        }
        case actions_1.TPLDM_HYDRATE_ASSET_ITEMS: {
            var list = payload;
            var newState_1 = {};
            list.forEach(function (item) {
                var _a;
                var newItem = Object.assign({}, { refCount: 1 }, item);
                Object.assign(newState_1, (_a = {}, _a[newItem.id] = newItem, _a));
            });
            return newState_1;
        }
        case actions_1.TPLDM_REMOVE_ASSET_ITEMS: {
            var ids = payload;
            var newState_2 = lodash_1.cloneDeep(state);
            ids.forEach(function (id) {
                if (newState_2[id].refCount && newState_2[id].refCount > 1) {
                    newState_2[id].refCount = newState_2[id].refCount - 1;
                }
                else {
                    delete newState_2[id];
                }
            });
            return newState_2;
        }
        case actions_1.TPLDM_CLEAR_STATE: {
            return {};
        }
    }
    return state;
};
exports.assetMapReducer = assetById;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.contentsReducer = void 0;
var lodash_1 = __webpack_require__(0);
var redux_1 = __webpack_require__(10);
var actions_1 = __webpack_require__(2);
var order = function (state, action) {
    if (state === void 0) { state = []; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_1.TPLDM_NEW_PLAYLIST: {
            return [];
        }
        case actions_1.TPLDM_OPEN_PLAYLIST: {
            var newState = payload;
            return newState.contents.order;
        }
        case actions_1.TPLDM_HYDRATE_CONTENTS_FOR_LOAD:
        case actions_1.TPLDM_HYDRATE_CONTENTS: {
            var newOrder_1 = [];
            var items = payload;
            items.forEach(function (item) {
                newOrder_1.push(item.id);
            });
            return newOrder_1;
        }
        case actions_1.TPLDM_UPDATE_CONTENT_ITEMS_POSITION: {
            var _a = payload, ids = _a.ids, index = _a.index;
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
        case actions_1.TPLDM_REMOVE_CONTENTS: {
            var ids_1 = payload;
            state = state.slice();
            lodash_1.remove(state, function (n) {
                return ids_1.indexOf(n) >= 0;
            });
            return state;
        }
        case actions_1.TPLDM_CLEAR_STATE: {
            return [];
        }
    }
    return state;
};
var contentItems = function (state, _a) {
    var _b;
    if (state === void 0) { state = {}; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actions_1.TPLDM_NEW_PLAYLIST: {
            return {};
        }
        case actions_1.TPLDM_OPEN_PLAYLIST: {
            var newState = payload;
            return newState.contents.contentItems;
        }
        case actions_1.TPLDM_HYDRATE_CONTENTS_FOR_LOAD:
        case actions_1.TPLDM_HYDRATE_CONTENTS: {
            var newItems_1 = {};
            var items = payload;
            items.forEach(function (item) {
                var _a;
                Object.assign(newItems_1, (_a = {}, _a[item.id] = item, _a));
            });
            return Object.assign({}, newItems_1);
        }
        case actions_1.TPLDM_UPDATE_CONTENT_ITEM: {
            var id = payload.id;
            if (state.hasOwnProperty(id)) {
                var newItem = Object.assign({}, state[id], payload);
                return Object.assign({}, state, (_b = {}, _b[newItem.id] = newItem, _b));
            }
            break;
        }
        case actions_1.TPLDM_REMOVE_CONTENTS: {
            var ids = payload;
            if (ids && ids.length) {
                return lodash_1.omit(state, ids);
            }
            break;
        }
        case actions_1.TPLDM_CLEAR_STATE: {
            return {};
        }
    }
    return state;
};
var contents = redux_1.combineReducers({ order: order, contentItems: contentItems });
exports.contentsReducer = contents;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplModifiedTimeReducer = void 0;
var actions_1 = __webpack_require__(2);
var lodash_1 = __webpack_require__(0);
var modifiedTime = function (state, action) {
    if (state === void 0) { state = (new Date()).toISOString(); }
    if (action.type === actions_1.TPLDM_OPEN_PLAYLIST) {
        var newState = action.payload;
        if (!lodash_1.isNil(newState.playlist.lastModifiedDate)) {
            return newState.playlist.lastModifiedDate;
        }
        return newState.modifiedTime;
    }
    else if (actions_1.tplDmActionModifiesDmState(action)) {
        return (new Date()).toISOString();
    }
    return state;
};
exports.tplModifiedTimeReducer = modifiedTime;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistReducer = void 0;
var actions_1 = __webpack_require__(2);
var utils_1 = __webpack_require__(5);
var newPlaylist = utils_1.createDefaultTaggedPlaylistProperties({ name: 'Untitled' });
var playlist = function (state, _a) {
    if (state === void 0) { state = newPlaylist; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actions_1.TPLDM_NEW_PLAYLIST: {
            return Object.assign({}, payload.playlist);
        }
        case actions_1.TPLDM_UPDATE_PLAYLIST: {
            var id = payload.id;
            if (state.id === id) {
                return Object.assign({}, state, payload);
            }
            break;
        }
        case actions_1.TPLDM_OPEN_PLAYLIST: {
            var newState = payload;
            return newState.playlist;
        }
        case actions_1.TPLDM_CLEAR_STATE: {
            return newPlaylist;
        }
    }
    return state;
};
exports.playlistReducer = playlist;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rulesReducer = void 0;
var lodash_1 = __webpack_require__(0);
var redux_1 = __webpack_require__(10);
var bscore_1 = __webpack_require__(3);
var actions_1 = __webpack_require__(2);
var combiner = function (state, action) {
    if (state === void 0) { state = bscore_1.BsnFilterCombineType.All; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_1.TPLDM_NEW_PLAYLIST: {
            return payload.parsedFilterSpec.combiner;
        }
        case actions_1.TPLDM_OPEN_PLAYLIST: {
            var newState = payload;
            return newState.rules.combiner;
        }
        case actions_1.TPLDM_UPDATE_RULE_COMBINER: {
            return payload;
        }
        case actions_1.TPLDM_CLEAR_STATE: {
            return bscore_1.BsnFilterCombineType.All;
        }
    }
    return state;
};
var order = function (state, action) {
    if (state === void 0) { state = []; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_1.TPLDM_NEW_PLAYLIST: {
            var newOrder_1 = [];
            var entities = payload.parsedFilterSpec.ruleEntities;
            entities.forEach(function (entity) {
                newOrder_1.push(entity.id);
            });
            return newOrder_1;
        }
        case actions_1.TPLDM_OPEN_PLAYLIST: {
            var newState = payload;
            return newState.rules.order;
        }
        case actions_1.TPLDM_ADD_RULES: {
            var newOrder_2 = state.slice();
            var entities = payload;
            entities.forEach(function (entity) {
                newOrder_2.push(entity.id);
            });
            return newOrder_2;
        }
        case actions_1.TPLDM_REMOVE_RULES: {
            var ids_1 = payload;
            state = state.slice();
            lodash_1.remove(state, function (n) {
                return ids_1.indexOf(n) >= 0;
            });
            return state;
        }
        case actions_1.TPLDM_REMOVE_ALL_RULES:
        case actions_1.TPLDM_CLEAR_STATE: {
            return [];
        }
    }
    return state;
};
var ruleEntities = function (state, _a) {
    var _b;
    if (state === void 0) { state = {}; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actions_1.TPLDM_NEW_PLAYLIST: {
            var newEntities_1 = {};
            var entities = payload.parsedFilterSpec.ruleEntities;
            entities.forEach(function (entity) {
                var _a;
                Object.assign(newEntities_1, (_a = {}, _a[entity.id] = entity, _a));
            });
            return Object.assign({}, newEntities_1);
        }
        case actions_1.TPLDM_OPEN_PLAYLIST: {
            var newState = payload;
            return newState.rules.ruleEntities;
        }
        case actions_1.TPLDM_ADD_RULES: {
            var newEntities_2 = {};
            var entities = payload;
            entities.forEach(function (entity) {
                var _a;
                Object.assign(newEntities_2, (_a = {}, _a[entity.id] = entity, _a));
            });
            return Object.assign({}, state, newEntities_2);
        }
        case actions_1.TPLDM_UPDATE_RULE: {
            var id = payload.id;
            var component = payload.component;
            if (state.hasOwnProperty(id)) {
                var newEntity = Object.assign({}, state[id], component);
                return Object.assign({}, state, (_b = {}, _b[newEntity.id] = newEntity, _b));
            }
            break;
        }
        case actions_1.TPLDM_REMOVE_RULES: {
            var ids = payload;
            if (ids && ids.length) {
                return lodash_1.omit(state, ids);
            }
            break;
        }
        case actions_1.TPLDM_REMOVE_ALL_RULES:
        case actions_1.TPLDM_CLEAR_STATE: {
            return {};
        }
    }
    return state;
};
var rules = redux_1.combineReducers({ order: order, ruleEntities: ruleEntities, combiner: combiner });
exports.rulesReducer = rules;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmGetAssetItemIdsForPlaylist = exports.tplDmGetAssetItemByLocator = exports.tplDmGetAssetItemById = exports.tplDmGetAssetIdByLocator = exports.tplDmGetAssetMapState = void 0;
var reselect_1 = __webpack_require__(7);
var lodash_1 = __webpack_require__(0);
var tplDmValidation_1 = __webpack_require__(4);
var base_1 = __webpack_require__(6);
var tplDmError_1 = __webpack_require__(1);
exports.tplDmGetAssetMapState = function (state) {
    return getAssetMapState(state);
};
var getAssetMapState = reselect_1.createSelector(base_1.tplDmGetBaseState, function (state) {
    if (tplDmValidation_1.tplDmIsValidAssetMapState(state.assetMap)) {
        return state.assetMap;
    }
    else {
        var exceptionMessage = "state must be of type TplDmState or\n        have a field bstpldm of type TplDmState. invalid state.assetMap\n        " + JSON.stringify(state.assetMap);
        throw new tplDmError_1.TplDmError(tplDmError_1.TplDmErrorType.invalidParameters, exceptionMessage);
    }
});
exports.tplDmGetAssetIdByLocator = function (state, props) {
    var subState = exports.tplDmGetAssetMapState(state);
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
function tplDmGetAssetItemById(state, id) {
    var subState = exports.tplDmGetAssetMapState(state);
    var asset = subState[id];
    return !lodash_1.isNil(asset) ? (lodash_1.omit(Object.assign({}, asset), ['refCount'])) : null;
}
exports.tplDmGetAssetItemById = tplDmGetAssetItemById;
function tplDmGetAssetItemByLocator(state, props) {
    var subState = exports.tplDmGetAssetMapState(state);
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
exports.tplDmGetAssetItemByLocator = tplDmGetAssetItemByLocator;
function tplDmGetAssetItemIdsForPlaylist(state) {
    return getAssetItemIdsForPlaylist(state);
}
exports.tplDmGetAssetItemIdsForPlaylist = tplDmGetAssetItemIdsForPlaylist;
var getAssetItemIdsForPlaylist = reselect_1.createSelector(exports.tplDmGetAssetMapState, function (state) {
    return Object.keys(state);
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmGetContentItemByIdWithAssetItem = exports.tplDmGetContentItemListWithAssetItem = exports.tplDmGetContentItemForBsnListUniversalTimeZone = exports.tplDmGetContentItemForBsnList = exports.tplDmGetContentItemById = exports.tplDmGetContentItemList = exports.tplDmGetContentMap = exports.tplDmGetContentIdsInOrder = exports.tplDmGetContentsState = void 0;
var bscore_1 = __webpack_require__(3);
var reselect_1 = __webpack_require__(7);
var lodash_1 = __webpack_require__(0);
var selectorAssetMap_1 = __webpack_require__(23);
var base_1 = __webpack_require__(6);
var tplDmValidation_1 = __webpack_require__(4);
var tplDmError_1 = __webpack_require__(1);
exports.tplDmGetContentsState = function (state) {
    return getContentsState(state);
};
var getContentsState = reselect_1.createSelector(base_1.tplDmGetBaseState, function (state) {
    if (tplDmValidation_1.tplDmIsValidContentsState(state.contents)) {
        return state.contents;
    }
    else {
        var exceptionMessage = "state must be of type TplDmState or\n        have a field bstpldm of type TplDmState. invalid state.contents\n        " + JSON.stringify(state.contents);
        throw new tplDmError_1.TplDmError(tplDmError_1.TplDmErrorType.invalidParameters, exceptionMessage);
    }
});
function tplDmGetContentIdsInOrder(state) {
    return getContentIdsInOrder(state);
}
exports.tplDmGetContentIdsInOrder = tplDmGetContentIdsInOrder;
var getContentIdsInOrder = reselect_1.createSelector(exports.tplDmGetContentsState, function (state) {
    return state.order;
});
function tplDmGetContentMap(state) {
    return getContentMap(state);
}
exports.tplDmGetContentMap = tplDmGetContentMap;
var getContentMap = reselect_1.createSelector(exports.tplDmGetContentsState, function (state) {
    return state.contentItems;
});
function tplDmGetContentItemList(state) {
    var ids = tplDmGetContentIdsInOrder(state);
    var map = tplDmGetContentMap(state);
    var results = [];
    ids.forEach(function (id) {
        if (!lodash_1.isNil(map[id])) {
            results.push(map[id]);
        }
    });
    return results;
}
exports.tplDmGetContentItemList = tplDmGetContentItemList;
function tplDmGetContentItemById(state, id) {
    return getContentItemById(state, id);
}
exports.tplDmGetContentItemById = tplDmGetContentItemById;
var getContentItemById = reselect_1.createSelector(tplDmGetContentMap, function (_, id) { return id; }, function (contentMap, id) {
    if (lodash_1.isNil(contentMap[id])) {
        return null;
    }
    return contentMap[id];
});
function tplDmGetContentItemForBsnList(state) {
    var contentItemsWithAssetItems = tplDmGetContentItemListWithAssetItem(state);
    var results = [];
    contentItemsWithAssetItems.forEach(function (item) {
        results.push({
            contentId: item.asset.networkId,
            fileName: item.asset.name,
            displayDuration: lodash_1.isNil(item.contentItem.displayDuration) ? null
                : item.contentItem.displayDuration,
            validityStartDate: (item.contentItem.enableValidityDate && !lodash_1.isNil(item.contentItem.validityStartDate))
                ? new Date(item.contentItem.validityStartDate) : null,
            validityEndDate: (item.contentItem.enableValidityDate && !lodash_1.isNil(item.contentItem.validityEndDate))
                ? new Date(item.contentItem.validityEndDate) : null,
        });
    });
    return results;
}
exports.tplDmGetContentItemForBsnList = tplDmGetContentItemForBsnList;
function tplDmGetContentItemForBsnListUniversalTimeZone(state) {
    var contentItemsWithAssetItems = tplDmGetContentItemListWithAssetItem(state);
    var results = [];
    contentItemsWithAssetItems.forEach(function (item) {
        results.push({
            contentId: item.asset.networkId,
            fileName: item.asset.name,
            displayDuration: lodash_1.isNil(item.contentItem.displayDuration) ? null
                : item.contentItem.displayDuration,
            validityStartDate: (item.contentItem.enableValidityDate && !lodash_1.isNil(item.contentItem.validityStartDate))
                ? bscore_1.bscReplaceTimeZoneWithUTC(new Date(item.contentItem.validityStartDate)) : null,
            validityEndDate: (item.contentItem.enableValidityDate && !lodash_1.isNil(item.contentItem.validityEndDate))
                ? bscore_1.bscReplaceTimeZoneWithUTC(new Date(item.contentItem.validityEndDate)) : null,
        });
    });
    return results;
}
exports.tplDmGetContentItemForBsnListUniversalTimeZone = tplDmGetContentItemForBsnListUniversalTimeZone;
function tplDmGetContentItemListWithAssetItem(state) {
    var ids = tplDmGetContentIdsInOrder(state);
    var map = tplDmGetContentMap(state);
    var results = [];
    ids.forEach(function (id) {
        if (!lodash_1.isNil(map[id])) {
            var assetItem = selectorAssetMap_1.tplDmGetAssetItemById(state, map[id].assetId);
            results.push({
                contentItem: map[id],
                asset: assetItem,
            });
        }
    });
    return results;
}
exports.tplDmGetContentItemListWithAssetItem = tplDmGetContentItemListWithAssetItem;
function tplDmGetContentItemByIdWithAssetItem(state, id) {
    var contentItem = tplDmGetContentItemById(state, id);
    return {
        contentItem: contentItem,
        asset: selectorAssetMap_1.tplDmGetAssetItemById(state, contentItem.assetId),
    };
}
exports.tplDmGetContentItemByIdWithAssetItem = tplDmGetContentItemByIdWithAssetItem;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmGetPlaylistTTL = exports.tplDmGetPlaylistSortDescending = exports.tplDmIsPlaylistWaitingForApprove = exports.tplDmGetPlaylistSortTagName = exports.tplDmGetPlaylistOrderTag = exports.tplDmGetPlaylistContentsVirtualPath = exports.tplDmGetPlaylistLastModifiedDate = exports.tplDmGetPlaylistName = exports.tplDmGetPlaylistId = exports.tplDmGetPlaylistState = void 0;
var tplDmValidation_1 = __webpack_require__(4);
var reselect_1 = __webpack_require__(7);
var base_1 = __webpack_require__(6);
var tplDmError_1 = __webpack_require__(1);
exports.tplDmGetPlaylistState = function (state) {
    return getPlaylistState(state);
};
var getPlaylistState = reselect_1.createSelector(base_1.tplDmGetBaseState, function (state) {
    if (tplDmValidation_1.tplDmIsValidPlaylistState(state.playlist)) {
        return state.playlist;
    }
    else {
        var exceptionMessage = "state must be of type TplDmState or\n        have a field bstpl of type TplDmState. invalid state.playlist\n        " + JSON.stringify(state.playlist);
        throw new tplDmError_1.TplDmError(tplDmError_1.TplDmErrorType.invalidParameters, exceptionMessage);
    }
});
function tplDmGetPlaylistId(state) {
    return getPlaylistId(state);
}
exports.tplDmGetPlaylistId = tplDmGetPlaylistId;
var getPlaylistId = reselect_1.createSelector(exports.tplDmGetPlaylistState, function (state) {
    return state.id;
});
function tplDmGetPlaylistName(state) {
    return getPlaylistName(state);
}
exports.tplDmGetPlaylistName = tplDmGetPlaylistName;
var getPlaylistName = reselect_1.createSelector(exports.tplDmGetPlaylistState, function (state) {
    return state.name;
});
function tplDmGetPlaylistLastModifiedDate(state) {
    return getPlaylistLastModifiedDate(state);
}
exports.tplDmGetPlaylistLastModifiedDate = tplDmGetPlaylistLastModifiedDate;
var getPlaylistLastModifiedDate = reselect_1.createSelector(exports.tplDmGetPlaylistState, function (state) {
    return state.lastModifiedDate;
});
function tplDmGetPlaylistContentsVirtualPath(state) {
    return getPlaylistContentsVirtualPath(state);
}
exports.tplDmGetPlaylistContentsVirtualPath = tplDmGetPlaylistContentsVirtualPath;
var getPlaylistContentsVirtualPath = reselect_1.createSelector(exports.tplDmGetPlaylistState, function (state) {
    return state.contentsVirtualPath;
});
exports.tplDmGetPlaylistOrderTag = tplDmGetPlaylistSortTagName;
function tplDmGetPlaylistSortTagName(state) {
    return getPlaylistOrderTag(state);
}
exports.tplDmGetPlaylistSortTagName = tplDmGetPlaylistSortTagName;
var getPlaylistOrderTag = reselect_1.createSelector(exports.tplDmGetPlaylistState, function (state) {
    return state.sortTagName;
});
function tplDmIsPlaylistWaitingForApprove(state) {
    return isPlaylistWaitingForApprove(state);
}
exports.tplDmIsPlaylistWaitingForApprove = tplDmIsPlaylistWaitingForApprove;
var isPlaylistWaitingForApprove = reselect_1.createSelector(exports.tplDmGetPlaylistState, function (state) {
    return state.waitingForApprove;
});
function tplDmGetPlaylistSortDescending(state) {
    return getPlaylistSortDescending(state);
}
exports.tplDmGetPlaylistSortDescending = tplDmGetPlaylistSortDescending;
var getPlaylistSortDescending = reselect_1.createSelector(exports.tplDmGetPlaylistState, function (state) {
    return state.sortDescending;
});
function tplDmGetPlaylistTTL(state) {
    return getPlaylistTTL(state);
}
exports.tplDmGetPlaylistTTL = tplDmGetPlaylistTTL;
var getPlaylistTTL = reselect_1.createSelector(exports.tplDmGetPlaylistState, function (state) {
    return state.ttl;
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmGetInvalidRuleIds = exports.tplDmIsValidRuleFilterComponent = exports.tplDmGetFilterComponentByRuleId = exports.tplDmGetRuleEntityById = exports.tplDmGetBsnFilterSpecification = exports.tplDmGetFilerComponentList = exports.tplDmGetRuleEntityList = exports.tplDmGetRuleEntityMap = exports.tplDmGetRuleIdsInOrder = exports.tplDmGetRuleCombiner = exports.tplDmGetRulesState = void 0;
var reselect_1 = __webpack_require__(7);
var lodash_1 = __webpack_require__(0);
var bscore_1 = __webpack_require__(3);
var base_1 = __webpack_require__(6);
var tplDmValidation_1 = __webpack_require__(4);
var tplDmError_1 = __webpack_require__(1);
exports.tplDmGetRulesState = function (state) {
    return getRulesState(state);
};
var getRulesState = reselect_1.createSelector(base_1.tplDmGetBaseState, function (state) {
    if (tplDmValidation_1.tplDmIsValidRulesState(state.rules)) {
        return state.rules;
    }
    else {
        var exceptionMessage = "state must be of type TplDmState or\n        have a field bstpl of type TplDmState. invalid state.rules\n        " + JSON.stringify(state.rules);
        throw new tplDmError_1.TplDmError(tplDmError_1.TplDmErrorType.invalidParameters, exceptionMessage);
    }
});
function tplDmGetRuleCombiner(state) {
    return getRuleCombiner(state);
}
exports.tplDmGetRuleCombiner = tplDmGetRuleCombiner;
var getRuleCombiner = reselect_1.createSelector(exports.tplDmGetRulesState, function (state) {
    return state.combiner;
});
function tplDmGetRuleIdsInOrder(state) {
    return getRuleIdsInOrder(state);
}
exports.tplDmGetRuleIdsInOrder = tplDmGetRuleIdsInOrder;
var getRuleIdsInOrder = reselect_1.createSelector(exports.tplDmGetRulesState, function (state) {
    return state.order;
});
function tplDmGetRuleEntityMap(state) {
    return getRuleEntityMap(state);
}
exports.tplDmGetRuleEntityMap = tplDmGetRuleEntityMap;
var getRuleEntityMap = reselect_1.createSelector(exports.tplDmGetRulesState, function (state) {
    return state.ruleEntities;
});
function tplDmGetRuleEntityList(state) {
    var ids = tplDmGetRuleIdsInOrder(state);
    var map = tplDmGetRuleEntityMap(state);
    var results = [];
    ids.forEach(function (id) {
        if (!lodash_1.isNil(map[id])) {
            results.push(map[id]);
        }
    });
    return results;
}
exports.tplDmGetRuleEntityList = tplDmGetRuleEntityList;
function tplDmGetFilerComponentList(state) {
    return getFilerComponentList(state);
}
exports.tplDmGetFilerComponentList = tplDmGetFilerComponentList;
var getFilerComponentList = reselect_1.createSelector(tplDmGetRuleEntityList, function (state) {
    return state.map(function (entity) {
        return lodash_1.omit(entity, ['id']);
    });
});
function tplDmGetBsnFilterSpecification(state) {
    return bscore_1.bscCreateBsnFilterSpecification(tplDmGetFilerComponentList(state), tplDmGetRuleCombiner(state));
}
exports.tplDmGetBsnFilterSpecification = tplDmGetBsnFilterSpecification;
function tplDmGetRuleEntityById(state, id) {
    return getRuleEntityById(state, id);
}
exports.tplDmGetRuleEntityById = tplDmGetRuleEntityById;
var getRuleEntityById = reselect_1.createSelector(tplDmGetRuleEntityMap, function (_, id) { return id; }, function (ruleMap, id) {
    if (lodash_1.isNil(ruleMap[id])) {
        return null;
    }
    return ruleMap[id];
});
function tplDmGetFilterComponentByRuleId(state, id) {
    var entity = tplDmGetRuleEntityById(state, id);
    if (lodash_1.isNil(entity)) {
        return null;
    }
    else {
        return lodash_1.omit(tplDmGetRuleEntityById(state, id), ['id']);
    }
}
exports.tplDmGetFilterComponentByRuleId = tplDmGetFilterComponentByRuleId;
function tplDmIsValidRuleFilterComponent(state, id) {
    var filterComponent = tplDmGetFilterComponentByRuleId(state, id);
    if (lodash_1.isNil(filterComponent)) {
        return false;
    }
    else {
        return bscore_1.bscIsValidBsnFilterComponent(filterComponent);
    }
}
exports.tplDmIsValidRuleFilterComponent = tplDmIsValidRuleFilterComponent;
function tplDmGetInvalidRuleIds(state) {
    var result = [];
    var ruleList = tplDmGetRuleEntityList(state);
    ruleList.forEach(function (entity) {
        if (!bscore_1.bscIsValidBsnFilterComponent(lodash_1.omit(entity, ['id']))) {
            result.push(entity.id);
        }
    });
    return result;
}
exports.tplDmGetInvalidRuleIds = tplDmGetInvalidRuleIds;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmGetStateFromBsnTaggedPlaylistProperties = exports.tplDmLoadTaggedPlaylistFromBsnProperties = void 0;
var redux_1 = __webpack_require__(10);
var lodash_1 = __webpack_require__(0);
var redux_thunk_1 = __webpack_require__(34);
var reducers_1 = __webpack_require__(12);
var actions_1 = __webpack_require__(2);
var selectors_1 = __webpack_require__(8);
function tplDmLoadTaggedPlaylistFromBsnProperties(bsnProperties) {
    return function (dispatch) {
        var playlistState = tplDmGetStateFromBsnTaggedPlaylistProperties(bsnProperties);
        var mainAction = actions_1.tplDmOpenPlaylist(playlistState);
        dispatch(mainAction);
        return mainAction;
    };
}
exports.tplDmLoadTaggedPlaylistFromBsnProperties = tplDmLoadTaggedPlaylistFromBsnProperties;
function tplDmGetStateFromBsnTaggedPlaylistProperties(bsnProperties) {
    var properties = lodash_1.cloneDeep(bsnProperties);
    var playlistSpec = properties.taggedListSpec;
    var params = {
        name: properties.name,
        playlistSpec: playlistSpec,
        id: properties.id + '',
        contentsVirtualPath: properties.contentsVirtualPath,
        ttl: properties.ttl,
        waitingForApprove: properties.waitingForApprove,
    };
    var store = redux_1.createStore(reducers_1.tplDmReducer, redux_1.applyMiddleware(redux_thunk_1.default));
    store.dispatch(actions_1.tplDmNewPlaylist(params));
    var contentItemToAdd = [];
    (properties.content || []).map(function (item) {
        var contentItem = {
            name: item.name,
            type: item.mediaType,
            content: lodash_1.omit(item, ['contentItemData']),
        };
        if (!lodash_1.isNil(item.contentItemData)) {
            Object.assign(contentItem, {
                displayDuration: item.contentItemData.displayDuration,
                validityStartDate: item.contentItemData.validityStartDate,
                validityEndDate: item.contentItemData.validityEndDate,
                state: item.contentItemData.state,
            });
        }
        contentItemToAdd.push(contentItem);
    });
    store.dispatch(actions_1.tplDmHydrateContents(contentItemToAdd));
    var updatePlaylistParams = {
        id: selectors_1.tplDmGetPlaylistId(store.getState()),
        lastModifiedDate: properties.lastModifiedDate.toISOString(),
    };
    store.dispatch(actions_1.tplDmUpdatePlaylist(updatePlaylistParams));
    return store.getState();
}
exports.tplDmGetStateFromBsnTaggedPlaylistProperties = tplDmGetStateFromBsnTaggedPlaylistProperties;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmActionModifiesDmState = exports.modifyingActionTypesSet = exports.modifyingActionTypesArray = void 0;
var base_1 = __webpack_require__(9);
var actionRules_1 = __webpack_require__(17);
var actionPlaylist_1 = __webpack_require__(16);
var actionContents_1 = __webpack_require__(15);
exports.modifyingActionTypesArray = [
    base_1.TPLDM_CLEAR_STATE, actionRules_1.TPLDM_ADD_RULES, actionRules_1.TPLDM_UPDATE_RULE, actionRules_1.TPLDM_REMOVE_RULES,
    actionPlaylist_1.TPLDM_NEW_PLAYLIST, actionPlaylist_1.TPLDM_UPDATE_PLAYLIST, actionContents_1.TPLDM_HYDRATE_CONTENTS,
    actionContents_1.TPLDM_UPDATE_CONTENT_ITEM, actionContents_1.TPLDM_REMOVE_CONTENTS, actionContents_1.TPLDM_UPDATE_CONTENT_ITEMS_POSITION,
];
exports.modifyingActionTypesSet = new Set(exports.modifyingActionTypesArray);
function tplDmActionModifiesDmState(action) {
    return exports.modifyingActionTypesSet.has(action.type);
}
exports.tplDmActionModifiesDmState = tplDmActionModifiesDmState;


/***/ }),
/* 30 */
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
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(2), exports);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmReducer = void 0;
var redux_1 = __webpack_require__(10);
var reducerPlaylist_1 = __webpack_require__(21);
var reducerContents_1 = __webpack_require__(19);
var reducerRules_1 = __webpack_require__(22);
var reducerAssetMap_1 = __webpack_require__(18);
var reducerModifiedTime_1 = __webpack_require__(20);
var actions_1 = __webpack_require__(2);
function enableBatching(reduce) {
    return function batchingReducer(state, action) {
        switch (action.type) {
            case actions_1.TPLDM_BATCH:
                return action.payload.reduce(batchingReducer, state);
            default:
                return reduce(state, action);
        }
    };
}
exports.tplDmReducer = enableBatching(redux_1.combineReducers({
    playlist: reducerPlaylist_1.playlistReducer,
    rules: reducerRules_1.rulesReducer,
    contents: reducerContents_1.contentsReducer,
    modifiedTime: reducerModifiedTime_1.tplModifiedTimeReducer,
    assetMap: reducerAssetMap_1.assetMapReducer,
}));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmGetModifiedTimeStateInDate = exports.tplDmGetModifiedTimeState = void 0;
var reselect_1 = __webpack_require__(7);
var base_1 = __webpack_require__(6);
var tplDmValidation_1 = __webpack_require__(4);
var tplDmError_1 = __webpack_require__(1);
exports.tplDmGetModifiedTimeState = function (state) {
    return getModifiedTimeState(state);
};
var getModifiedTimeState = reselect_1.createSelector(base_1.tplDmGetBaseState, function (state) {
    if (tplDmValidation_1.tplDmIsValidModifiedTimeState(state.modifiedTime)) {
        return state.modifiedTime;
    }
    else {
        var exceptionMessage = "state must be of type TplDmState or\n        have a field bstpl of type TplDmState. invalid state.modifiedTime\n        " + JSON.stringify(state.modifiedTime);
        throw new tplDmError_1.TplDmError(tplDmError_1.TplDmErrorType.invalidParameters, exceptionMessage);
    }
});
exports.tplDmGetModifiedTimeStateInDate = function (state) {
    return new Date(exports.tplDmGetModifiedTimeState(state));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tplDmcGetTaggedPlaylistEntityForUniversalTimeZone = exports.tplDmcGetTaggedPlaylistSpecificationWithContentsForUniversalTimeZone = exports.tplDmGetTaggedPlaylistSpecification = exports.tplDmcGetTaggedPlaylistProperties = void 0;
var reselect_1 = __webpack_require__(7);
var bscore_1 = __webpack_require__(3);
var selectorPlaylist_1 = __webpack_require__(25);
var selectorRules_1 = __webpack_require__(26);
var selectorContents_1 = __webpack_require__(24);
var tplDmClasses_1 = __webpack_require__(13);
function tplDmcGetTaggedPlaylistProperties(state) {
    return getTaggedPlaylistProperties(state);
}
exports.tplDmcGetTaggedPlaylistProperties = tplDmcGetTaggedPlaylistProperties;
var getTaggedPlaylistProperties = reselect_1.createSelector(selectorPlaylist_1.tplDmGetPlaylistState, function (state) {
    var params = {
        name: state.name,
        sortTagName: state.sortTagName,
        sortDescending: state.sortDescending,
        contentsVirtualPath: state.contentsVirtualPath,
        ttl: state.ttl,
        waitingForApprove: state.waitingForApprove,
    };
    return new tplDmClasses_1.TplDmcTaggedPlaylistProperties(params);
});
function tplDmGetTaggedPlaylistSpecification(state) {
    var bsnFilterSpecification = selectorRules_1.tplDmGetBsnFilterSpecification(state);
    var sortDescending = selectorPlaylist_1.tplDmGetPlaylistSortDescending(state);
    var orderTag = selectorPlaylist_1.tplDmGetPlaylistSortTagName(state);
    return bscore_1.bscCreateTaggedListSpecification(bsnFilterSpecification, orderTag, sortDescending);
}
exports.tplDmGetTaggedPlaylistSpecification = tplDmGetTaggedPlaylistSpecification;
function tplDmcGetTaggedPlaylistSpecificationWithContentsForUniversalTimeZone(state) {
    var spec = tplDmGetTaggedPlaylistSpecification(state);
    var contents = selectorContents_1.tplDmGetContentItemForBsnListUniversalTimeZone(state);
    return new tplDmClasses_1.TplDmcTaggedPlaylistSpecificationWithContentsForUniversalTimeZone(spec, contents);
}
exports.tplDmcGetTaggedPlaylistSpecificationWithContentsForUniversalTimeZone = tplDmcGetTaggedPlaylistSpecificationWithContentsForUniversalTimeZone;
function tplDmcGetTaggedPlaylistEntityForUniversalTimeZone(state) {
    var properties = tplDmcGetTaggedPlaylistProperties(state);
    var contents = selectorContents_1.tplDmGetContentItemForBsnListUniversalTimeZone(state);
    var bsnFilterSpecification = selectorRules_1.tplDmGetBsnFilterSpecification(state);
    return new tplDmClasses_1.TplDmcTaggedPlaylistForUniversalTimeZone(properties, bsnFilterSpecification, contents);
}
exports.tplDmcGetTaggedPlaylistEntityForUniversalTimeZone = tplDmcGetTaggedPlaylistEntityForUniversalTimeZone;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })
/******/ ]);
});