(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("./bsnconnector"), require("./bscore"), require("./fsconnector"), require("isomorphic-path"), require("./bs-task-manager"), require("uuid"), require("./bsdatamodel"), require("./bs-playlist-dm"), require("./bs-device-artifacts"), require("redux"), require("redux-thunk"), require("./bs-autoplay-generator"), require("./bs-data-feed-dm"), require("./bs-tagged-playlist-dm"), require("dexie"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "./bsnconnector", "./bscore", "./fsconnector", "isomorphic-path", "./bs-task-manager", "uuid", "./bsdatamodel", "./bs-playlist-dm", "./bs-device-artifacts", "redux", "redux-thunk", "./bs-autoplay-generator", "./bs-data-feed-dm", "./bs-tagged-playlist-dm", "dexie"], factory);
	else if(typeof exports === 'object')
		exports["bs-content-manager"] = factory(require("lodash"), require("./bsnconnector"), require("./bscore"), require("./fsconnector"), require("isomorphic-path"), require("./bs-task-manager"), require("uuid"), require("./bsdatamodel"), require("./bs-playlist-dm"), require("./bs-device-artifacts"), require("redux"), require("redux-thunk"), require("./bs-autoplay-generator"), require("./bs-data-feed-dm"), require("./bs-tagged-playlist-dm"), require("dexie"));
	else
		root["bs-content-manager"] = factory(root["lodash"], root["./bsnconnector"], root["./bscore"], root["./fsconnector"], root["isomorphic-path"], root["./bs-task-manager"], root["uuid"], root["./bsdatamodel"], root["./bs-playlist-dm"], root["./bs-device-artifacts"], root["redux"], root["redux-thunk"], root["./bs-autoplay-generator"], root["./bs-data-feed-dm"], root["./bs-tagged-playlist-dm"], root["dexie"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_96__, __WEBPACK_EXTERNAL_MODULE_97__, __WEBPACK_EXTERNAL_MODULE_98__, __WEBPACK_EXTERNAL_MODULE_99__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./bsnconnector");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("./bscore");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
exports.BsCmError = exports.BsCmErrorType = void 0;
var BsCmErrorType;
(function (BsCmErrorType) {
    BsCmErrorType[BsCmErrorType["fsNotAvailableError"] = 0] = "fsNotAvailableError";
    BsCmErrorType[BsCmErrorType["assetNotFoundError"] = 1] = "assetNotFoundError";
    BsCmErrorType[BsCmErrorType["assetNameNotFoundError"] = 2] = "assetNameNotFoundError";
    BsCmErrorType[BsCmErrorType["invalidOperationRequest"] = 3] = "invalidOperationRequest";
    BsCmErrorType[BsCmErrorType["invalidParameters"] = 4] = "invalidParameters";
    BsCmErrorType[BsCmErrorType["unsupportedAssetType"] = 5] = "unsupportedAssetType";
    BsCmErrorType[BsCmErrorType["unsupportedAssetLocation"] = 6] = "unsupportedAssetLocation";
    BsCmErrorType[BsCmErrorType["unsupportedMultipleAssetTypes"] = 7] = "unsupportedMultipleAssetTypes";
    BsCmErrorType[BsCmErrorType["assetNameExists"] = 8] = "assetNameExists";
    BsCmErrorType[BsCmErrorType["unexpectedError"] = 9] = "unexpectedError";
    BsCmErrorType[BsCmErrorType["uploadJobBusy"] = 10] = "uploadJobBusy";
    BsCmErrorType[BsCmErrorType["noUploadJob"] = 11] = "noUploadJob";
    BsCmErrorType[BsCmErrorType["uploadFailed"] = 12] = "uploadFailed";
    BsCmErrorType[BsCmErrorType["deviceNotFound"] = 13] = "deviceNotFound";
    BsCmErrorType[BsCmErrorType["groupNotFound"] = 14] = "groupNotFound";
    BsCmErrorType[BsCmErrorType["userNotFound"] = 15] = "userNotFound";
    BsCmErrorType[BsCmErrorType["roleNotFound"] = 16] = "roleNotFound";
    BsCmErrorType[BsCmErrorType["remoteProcedureError"] = 17] = "remoteProcedureError";
    BsCmErrorType[BsCmErrorType["standardDeviceWebPageUploadFailed"] = 18] = "standardDeviceWebPageUploadFailed";
    BsCmErrorType[BsCmErrorType["presentationUploadJobFailed"] = 19] = "presentationUploadJobFailed";
    BsCmErrorType[BsCmErrorType["dynamicPlaylistUploadJobFailed"] = 20] = "dynamicPlaylistUploadJobFailed";
    BsCmErrorType[BsCmErrorType["mediaFeedUploadJobFailed"] = 21] = "mediaFeedUploadJobFailed";
    BsCmErrorType[BsCmErrorType["presentationDependencyLimitExceeded"] = 22] = "presentationDependencyLimitExceeded";
    BsCmErrorType[BsCmErrorType["presentationDependencyProjectFileMissing"] = 23] = "presentationDependencyProjectFileMissing";
})(BsCmErrorType = exports.BsCmErrorType || (exports.BsCmErrorType = {}));
var bsCmErrorMessage = (_a = {},
    _a[BsCmErrorType.fsNotAvailableError] = 'Local file system is not available for access',
    _a[BsCmErrorType.assetNotFoundError] = 'Asset not found',
    _a[BsCmErrorType.assetNameNotFoundError] = 'Asset name not is not present in the collection',
    _a[BsCmErrorType.invalidOperationRequest] = 'Invalid operation request',
    _a[BsCmErrorType.invalidParameters] = 'Invalid parameters',
    _a[BsCmErrorType.unsupportedAssetType] = 'AssetType not supported',
    _a[BsCmErrorType.unsupportedAssetLocation] = 'AssetLocation not supported',
    _a[BsCmErrorType.unsupportedMultipleAssetTypes] = 'Folder cannot support multiple AssetTypes for this AssetLocation',
    _a[BsCmErrorType.assetNameExists] = 'Requested name for new asset already exists in the collection',
    _a[BsCmErrorType.unexpectedError] = 'Unexpected error',
    _a[BsCmErrorType.uploadJobBusy] = 'Cannot start a new upload job. An existing upload job is in progress.',
    _a[BsCmErrorType.noUploadJob] = 'Cannot start a new upload job. There is no upload job pending.',
    _a[BsCmErrorType.uploadFailed] = 'Upload failed.',
    _a[BsCmErrorType.deviceNotFound] = 'Device serial number not found on current network.',
    _a[BsCmErrorType.groupNotFound] = 'Device group name not found on current network.',
    _a[BsCmErrorType.userNotFound] = 'User login not found on current network.',
    _a[BsCmErrorType.roleNotFound] = 'Role not found on current network.',
    _a[BsCmErrorType.remoteProcedureError] = 'Remote procedure error.',
    _a[BsCmErrorType.standardDeviceWebPageUploadFailed] = 'Standard DeviceWebPage upload failed.',
    _a[BsCmErrorType.presentationUploadJobFailed] = 'Presentation upload failed.',
    _a[BsCmErrorType.dynamicPlaylistUploadJobFailed] = 'DynamicPlaylist upload failed.',
    _a[BsCmErrorType.mediaFeedUploadJobFailed] = 'MediaFeed upload failed.',
    _a[BsCmErrorType.presentationDependencyLimitExceeded] = 'The maximum limit for dependent presentations has been exceeded.',
    _a[BsCmErrorType.presentationDependencyProjectFileMissing] = 'Project file for at least one presentation dependency cannot be found.',
    _a);
var BsCmError = (function (_super) {
    __extends(BsCmError, _super);
    function BsCmError(type, reason) {
        var _this = _super.call(this) || this;
        _this.name = 'BsCmError';
        _this.type = type;
        if (reason) {
            _this.message = bsCmErrorMessage[type] + ': ' + reason;
        }
        else {
            _this.message = bsCmErrorMessage[type];
        }
        Object.setPrototypeOf(_this, BsCmError.prototype);
        return _this;
    }
    return BsCmError;
}(Error));
exports.BsCmError = BsCmError;


/***/ }),
/* 4 */
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
exports.cmGetAssetCollectionNotifier = exports.cmIsAssetUsageComponentNotification = exports.cmIsPresentationScheduleNotification = exports.cmIsAssetItemNotification = exports.AssetCollectionNotificationType = void 0;
var AssetCollectionNotificationType;
(function (AssetCollectionNotificationType) {
    AssetCollectionNotificationType[AssetCollectionNotificationType["addedAssets"] = 0] = "addedAssets";
    AssetCollectionNotificationType[AssetCollectionNotificationType["updatedAssets"] = 1] = "updatedAssets";
    AssetCollectionNotificationType[AssetCollectionNotificationType["removedAssets"] = 2] = "removedAssets";
    AssetCollectionNotificationType[AssetCollectionNotificationType["pinAssets"] = 3] = "pinAssets";
    AssetCollectionNotificationType[AssetCollectionNotificationType["unpinAssets"] = 4] = "unpinAssets";
    AssetCollectionNotificationType[AssetCollectionNotificationType["scheduledPresentations"] = 5] = "scheduledPresentations";
    AssetCollectionNotificationType[AssetCollectionNotificationType["unscheduledPresentations"] = 6] = "unscheduledPresentations";
    AssetCollectionNotificationType[AssetCollectionNotificationType["addAssetUsageComponent"] = 7] = "addAssetUsageComponent";
    AssetCollectionNotificationType[AssetCollectionNotificationType["removeAssetUsageComponent"] = 8] = "removeAssetUsageComponent";
    AssetCollectionNotificationType[AssetCollectionNotificationType["updatedAssetPermissions"] = 9] = "updatedAssetPermissions";
})(AssetCollectionNotificationType = exports.AssetCollectionNotificationType || (exports.AssetCollectionNotificationType = {}));
var AssetItemNotificationSet = new Set([
    AssetCollectionNotificationType.addedAssets, AssetCollectionNotificationType.updatedAssets,
    AssetCollectionNotificationType.removedAssets, AssetCollectionNotificationType.pinAssets,
    AssetCollectionNotificationType.unpinAssets, AssetCollectionNotificationType.updatedAssetPermissions
]);
function cmIsAssetItemNotification(notification) {
    return AssetItemNotificationSet.has(notification.kind);
}
exports.cmIsAssetItemNotification = cmIsAssetItemNotification;
var PresentationScheduleNotificationSet = new Set([
    AssetCollectionNotificationType.scheduledPresentations, AssetCollectionNotificationType.unscheduledPresentations
]);
function cmIsPresentationScheduleNotification(notification) {
    return PresentationScheduleNotificationSet.has(notification.kind);
}
exports.cmIsPresentationScheduleNotification = cmIsPresentationScheduleNotification;
var AssetUsageComponentNotificationSet = new Set([
    AssetCollectionNotificationType.addAssetUsageComponent, AssetCollectionNotificationType.removeAssetUsageComponent
]);
function cmIsAssetUsageComponentNotification(notification) {
    return AssetUsageComponentNotificationSet.has(notification.kind);
}
exports.cmIsAssetUsageComponentNotification = cmIsAssetUsageComponentNotification;
var collectionNotifier;
function cmGetAssetCollectionNotifier() {
    if (!collectionNotifier) {
        collectionNotifier = new CmcAssetCollectionNotifier();
    }
    return collectionNotifier;
}
exports.cmGetAssetCollectionNotifier = cmGetAssetCollectionNotifier;
var CmcAssetCollectionNotifier = (function () {
    function CmcAssetCollectionNotifier() {
        this._subscribers = [];
    }
    CmcAssetCollectionNotifier.prototype.subscribe = function (subscriber) {
        if (this._subscribers.indexOf(subscriber) < 0) {
            this._subscribers.push(subscriber);
        }
    };
    CmcAssetCollectionNotifier.prototype.unsubscribe = function (subscriber) {
        var index = this._subscribers.indexOf(subscriber);
        if (index >= 0) {
            this._subscribers.splice(index, 1);
        }
    };
    CmcAssetCollectionNotifier.prototype.notify = function (kind, data) {
        this._subscribers.forEach(function (subscriber) {
            subscriber.notify(__assign({ kind: kind }, data));
        });
    };
    return CmcAssetCollectionNotifier;
}());


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("./fsconnector");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectPropertyForSort = exports.objectPropertyComparison = exports.compareStringDescending = exports.compareStringAscending = exports.cmIsObjectAEqualOrMoreComplete = exports.cmArePartialObjectsEqual = exports.cmGetFolderAssetSpecificationsForPath = exports.cmGetCurrentAssetScopeForLocation = exports.cmNormalizeBsnHashString = exports.testLocalFileExists = exports.getDirnameFromFileSpec = exports.getExtensionFromFileSpec = exports.getFileDirPathFromFileSpec = exports.getFilenameFromFileSpec = exports.getFileContentFromFileSpec = exports.cmGetBsnNameQuerySegments = exports.cmValidateFilterOptions = exports.cmAreFilterOptionsValid = exports.cmDoesAssetItemMatchFilterOptions = exports.cmAssetTypeCanHaveBsnUsageData = exports.cmIsMultipleAssetTypeArray = exports.cmCreateHashFromAssetLocator = exports.cmNormalizeLocalPathString = exports.cmNormalizeBsnPathString = exports.cmAreBsnAssetLocatorsEqual = exports.cmGetDataFeedReferenceFromAssetLocator = exports.cmGetPresentationReferenceFromAssetLocator = exports.cmIsPresentationAssetType = exports.cmGetFilteredAssetLocator = exports.cmGetFilteredAssetItem = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var fsconnector_1 = __webpack_require__(5);
var isomorphic_path_1 = __webpack_require__(11);
var lodash_1 = __webpack_require__(0);
var error_1 = __webpack_require__(3);
var cmGetFilteredAssetItem = function (assetItem) {
    return lodash_1.pick(assetItem, [
        'id', 'name', 'path', 'networkId', 'location', 'assetType', 'scope', 'locator', 'mediaType',
        'fileSize', 'fileHash', 'fileUrl', 'thumbUrl', 'creationDate', 'lastModifiedDate',
        'uploadDate', 'probeData', 'hasSubFolders', 'hasFiles', 'tags'
    ]);
};
exports.cmGetFilteredAssetItem = cmGetFilteredAssetItem;
var cmGetFilteredAssetLocator = function (assetLocator) {
    return lodash_1.pick(assetLocator, ['name', 'path', 'networkId', 'location', 'assetType', 'childAssetType', 'scope']);
};
exports.cmGetFilteredAssetLocator = cmGetFilteredAssetLocator;
var cmIsPresentationAssetType = function (assetType) {
    return assetType === bscore_1.AssetType.Project || assetType === bscore_1.AssetType.ProjectBpf;
};
exports.cmIsPresentationAssetType = cmIsPresentationAssetType;
var cmGetPresentationReferenceFromAssetLocator = function (assetLocator) {
    return {
        id: assetLocator.networkId,
        name: assetLocator.name,
        type: bscore_1.BsnPresentationReferenceType.Presentation,
    };
};
exports.cmGetPresentationReferenceFromAssetLocator = cmGetPresentationReferenceFromAssetLocator;
var cmGetDataFeedReferenceFromAssetLocator = function (assetLocator) {
    return {
        id: assetLocator.networkId,
        name: assetLocator.name,
    };
};
exports.cmGetDataFeedReferenceFromAssetLocator = cmGetDataFeedReferenceFromAssetLocator;
var cmAreBsnAssetLocatorsEqual = function (a, b) {
    return a.assetType === b.assetType && a.networkId === b.networkId;
};
exports.cmAreBsnAssetLocatorsEqual = cmAreBsnAssetLocatorsEqual;
var cmNormalizeBsnPathString = function (pathStr) {
    if (pathStr.length > 0 && pathStr !== isomorphic_path_1.default.posix.sep) {
        var leading = pathStr.charAt(0) !== isomorphic_path_1.default.posix.sep ? isomorphic_path_1.default.posix.sep : '';
        var trailing = pathStr.charAt(pathStr.length - 1) !== isomorphic_path_1.default.posix.sep ? isomorphic_path_1.default.posix.sep : '';
        return leading + pathStr + trailing;
    }
    return pathStr;
};
exports.cmNormalizeBsnPathString = cmNormalizeBsnPathString;
var cmNormalizeLocalPathString = function (pathStr) {
    if (pathStr.length > 0
        && pathStr !== isomorphic_path_1.default.posix.sep
        && pathStr.charAt(pathStr.length - 1) !== isomorphic_path_1.default.sep) {
        return pathStr + isomorphic_path_1.default.sep;
    }
    return pathStr;
};
exports.cmNormalizeLocalPathString = cmNormalizeLocalPathString;
var cmCreateHashFromAssetLocator = function (locator) {
    var scope = lodash_1.isNil(locator.scope) ? '' : locator.scope;
    var locatorHash = scope + "@" + locator.location + ":/";
    if (locator.location === bscore_1.AssetLocation.Bsn) {
        if (locator.networkId > 0) {
            locatorHash = "/" + locatorHash + locator.assetType + isomorphic_path_1.default.posix.sep + locator.networkId;
        }
        else if (lodash_1.isString(locator.childAssetType)) {
            locatorHash = "/" + locatorHash + locator.path + isomorphic_path_1.default.posix.sep + locator.childAssetType;
        }
    }
    else if (locator.location === bscore_1.AssetLocation.Local) {
        var childAssetType = locator.assetType === bscore_1.AssetType.Folder && lodash_1.isString(locator.childAssetType) ? locator.childAssetType : '';
        locatorHash = "" + locatorHash + childAssetType + "/" + bscore_1.bscGetAssetFullPath(locator);
    }
    else {
        locatorHash = "" + locatorHash + locator.name;
    }
    return locatorHash;
};
exports.cmCreateHashFromAssetLocator = cmCreateHashFromAssetLocator;
var cmIsMultipleAssetTypeArray = function (assetTypes) {
    if (assetTypes.length > 1) {
        var typeArray = lodash_1.uniq(lodash_1.without(assetTypes, bscore_1.AssetType.Folder));
        if (typeArray.length > 1) {
            return typeArray.some(function (type) { return !exports.cmIsPresentationAssetType(type); });
        }
    }
    return false;
};
exports.cmIsMultipleAssetTypeArray = cmIsMultipleAssetTypeArray;
var AssetTypesWithBsnUsageData = new Set([
    bscore_1.AssetType.Content, bscore_1.AssetType.HtmlSite, bscore_1.AssetType.DeviceHtmlSite,
    bscore_1.AssetType.BSNDynamicPlaylist, bscore_1.AssetType.BSNTaggedPlaylist, bscore_1.AssetType.BSNMediaFeed,
]);
var cmAssetTypeCanHaveBsnUsageData = function (assetType) {
    return AssetTypesWithBsnUsageData.has(assetType);
};
exports.cmAssetTypeCanHaveBsnUsageData = cmAssetTypeCanHaveBsnUsageData;
var cmDoesAssetItemMatchFilterOptions = function (assetItem, filterOptions) {
    if (!lodash_1.isNil(filterOptions.assetLocation) && assetItem.location !== filterOptions.assetLocation) {
        return false;
    }
    if (lodash_1.isArray(filterOptions.assetTypes) && filterOptions.assetTypes.indexOf(assetItem.assetType) < 0) {
        return false;
    }
    if (lodash_1.isArray(filterOptions.mediaTypes)
        && !lodash_1.isNil(assetItem.mediaType)
        && filterOptions.mediaTypes.indexOf(assetItem.mediaType) < 0) {
        return false;
    }
    if (!lodash_1.isNil(filterOptions.searchString) && !lodash_1.isEmpty(filterOptions.searchString)) {
        var searchString = filterOptions.searchString.toLowerCase();
        var isPresent = hasSearchString(assetItem.name, searchString);
        if (!isPresent && !lodash_1.isNil(assetItem.mediaType)) {
            isPresent = hasSearchString(assetItem.mediaType, searchString);
        }
        if (!isPresent && !lodash_1.isNil(assetItem.tags)) {
            isPresent = cmDoesSearchStringExistInTags(assetItem.tags, searchString);
        }
        return isPresent;
    }
    return true;
};
exports.cmDoesAssetItemMatchFilterOptions = cmDoesAssetItemMatchFilterOptions;
var hasSearchString = function (value, searchString) {
    return value.toLowerCase().includes(searchString);
};
var cmIsValidAssetType = function (assetType) {
    return lodash_1.values(bscore_1.AssetType).indexOf(assetType) > -1;
};
var cmIsValidMediaType = function (mediaType) {
    return lodash_1.values(bscore_1.MediaType).indexOf(mediaType) > -1;
};
var cmIsValidAssetLocation = function (assetLocation) {
    return !lodash_1.isNil(assetLocation) && lodash_1.values(bscore_1.AssetLocation).indexOf(assetLocation) > -1;
};
var cmDoesSearchStringExistInTags = function (tags, searchString) {
    return tags.some(function (tag) {
        if (tag.name.toLowerCase().includes(searchString)) {
            return true;
        }
        switch (tag.dataType) {
            case bscore_1.BsnTagDataType.String:
                return (tag.value.toLowerCase().includes(searchString));
            case bscore_1.BsnTagDataType.Number:
            case bscore_1.BsnTagDataType.Boolean:
                return (tag.value.toString().toLowerCase().includes(searchString));
            case bscore_1.BsnTagDataType.DateTime: {
                var isoDateTime = new Date(tag.value.getTime()
                    - (tag.value.getTimezoneOffset() * 60000)).toISOString();
                return isoDateTime.includes(searchString);
            }
            case bscore_1.BsnTagDataType.NumericArray:
            case bscore_1.BsnTagDataType.StringArray:
                return (tag.value.join()).toLocaleLowerCase().includes(searchString);
            default:
                return false;
        }
    });
};
var cmAreFilterOptionsValid = function (filterOptions) {
    if (!lodash_1.isNil(filterOptions.assetLocation) && !cmIsValidAssetLocation(filterOptions.assetLocation)) {
        return false;
    }
    if (lodash_1.isArray(filterOptions.assetTypes) && filterOptions.assetTypes.some(function (val) { return !cmIsValidAssetType(val); })) {
        return false;
    }
    return !(lodash_1.isArray(filterOptions.mediaTypes) && filterOptions.mediaTypes.some(function (val) { return !cmIsValidMediaType(val); }));
};
exports.cmAreFilterOptionsValid = cmAreFilterOptionsValid;
var cmValidateFilterOptions = function (filterOptions) {
    var result = {};
    if (lodash_1.isArray(filterOptions.assetTypes)) {
        result.assetTypes = filterOptions.assetTypes.filter(cmIsValidAssetType);
    }
    if (lodash_1.isArray(filterOptions.mediaTypes)) {
        result.mediaTypes = filterOptions.mediaTypes.filter(cmIsValidMediaType);
    }
    if (!lodash_1.isNil(filterOptions.assetLocation) && cmIsValidAssetLocation(filterOptions.assetLocation)) {
        result.assetLocation = filterOptions.assetLocation;
    }
    if (lodash_1.isString(filterOptions.searchString)) {
        result.searchString = filterOptions.searchString;
    }
    return result;
};
exports.cmValidateFilterOptions = cmValidateFilterOptions;
function cmGetBsnNameQuerySegments(items) {
    var queryLimit = 2000;
    var queryOverhead = 37;
    var fileNameOverhead = 9;
    var queryLength = queryOverhead;
    var startIndex = 0;
    var endIndex = 0;
    return items.reduce(function (segArray, item, index, list) {
        var lastItem = index + 1 >= list.length;
        var nameLength = encodeURIComponent(item.name).length;
        if (queryLength + nameLength + fileNameOverhead < queryLimit) {
            endIndex = index + 1;
            queryLength += nameLength + fileNameOverhead;
        }
        else {
            if (endIndex > startIndex) {
                segArray.push(list.slice(startIndex, endIndex));
            }
            queryLength = queryOverhead + nameLength + fileNameOverhead;
            startIndex = index;
            endIndex = index + 1;
        }
        if (lastItem) {
            segArray.push(list.slice(startIndex, endIndex));
        }
        return segArray;
    }, []);
}
exports.cmGetBsnNameQuerySegments = cmGetBsnNameQuerySegments;
var getFileContentFromFileSpec = function (file) {
    if (bscore_1.bscIsLocalFileBuffer(file)) {
        return Promise.resolve(file.data);
    }
    else if (typeof window !== 'undefined' && 'File' in window && file instanceof File) {
        return new Promise(function (resolve, reject) {
            var fileReader = new FileReader();
            fileReader.onload = function () {
                resolve(new Uint8Array(fileReader.result));
            };
            fileReader.onerror = function () {
                reject(new error_1.BsCmError(error_1.BsCmErrorType.assetNotFoundError, 'Cannot read thumbnail file'));
            };
            var nextChunk = file.slice();
            fileReader.readAsArrayBuffer(nextChunk);
        });
    }
    else {
        var filePath = void 0;
        if (typeof file === 'string') {
            filePath = file;
        }
        else if (bscore_1.bscIsAssetItem(file)) {
            filePath = isomorphic_path_1.default.join(file.path, file.name);
        }
        if (filePath) {
            return fsconnector_1.fsGetLocalFileAsArrayBuffer(filePath)
                .then(function (arrayBuffer) { return new Uint8Array(arrayBuffer); });
        }
    }
    return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'getFileContentFromFileSpec'));
};
exports.getFileContentFromFileSpec = getFileContentFromFileSpec;
var getFilenameFromFileSpec = function (file) {
    if (typeof window !== 'undefined' && 'File' in window && file instanceof File) {
        return file.name;
    }
    else if (bscore_1.bscIsLocalFileBuffer(file)) {
        return file.name;
    }
    else if (lodash_1.isString(file)) {
        return isomorphic_path_1.default.basename(file);
    }
    else if (bscore_1.bscIsAssetItem(file)) {
        return file.name;
    }
    return null;
};
exports.getFilenameFromFileSpec = getFilenameFromFileSpec;
var getFileDirPathFromFileSpec = function (file) {
    if (typeof window !== 'undefined' && 'File' in window && file instanceof File) {
        return '';
    }
    else if (bscore_1.bscIsLocalFileBuffer(file)) {
        return '';
    }
    else if (lodash_1.isString(file)) {
        return isomorphic_path_1.default.dirname(file);
    }
    else if (bscore_1.bscIsAssetItem(file)) {
        return file.path;
    }
    return null;
};
exports.getFileDirPathFromFileSpec = getFileDirPathFromFileSpec;
var getExtensionFromFileSpec = function (file) {
    if (typeof window !== 'undefined' && 'File' in window && file instanceof File) {
        return isomorphic_path_1.default.extname(file.name);
    }
    else if (bscore_1.bscIsLocalFileBuffer(file)) {
        return bscore_1.bscGetFileExtensionForMimeType(file.type);
    }
    else if (lodash_1.isString(file)) {
        return isomorphic_path_1.default.extname(file);
    }
    else if (bscore_1.bscIsAssetItem(file)) {
        return isomorphic_path_1.default.extname(file.name);
    }
    return null;
};
exports.getExtensionFromFileSpec = getExtensionFromFileSpec;
var getDirnameFromFileSpec = function (file) {
    if (lodash_1.isString(file)) {
        return isomorphic_path_1.default.dirname(file);
    }
    else if (bscore_1.bscIsAssetItem(file)) {
        return file.path;
    }
    return '';
};
exports.getDirnameFromFileSpec = getDirnameFromFileSpec;
var testLocalFileExists = function (fullPath, assetType) {
    if (fsconnector_1.fsLocalFileExists(fullPath)) {
        return fsconnector_1.fsLocalFileIsDirectory(fullPath)
            .then(function (isDir) { return isDir === (assetType === bscore_1.AssetType.Folder); });
    }
    else {
        return Promise.resolve(false);
    }
};
exports.testLocalFileExists = testLocalFileExists;
var cmNormalizeBsnHashString = function (hash) {
    if (hash) {
        return hash.replace(/^[Ss][Hh][Aa]1:/, '').toLowerCase();
    }
    return hash;
};
exports.cmNormalizeBsnHashString = cmNormalizeBsnHashString;
var cmGetCurrentAssetScopeForLocation = function (location) {
    if (location === bscore_1.AssetLocation.Bsn) {
        return bsnconnector_1.bsnGetSession().networkName;
    }
    else if (location === bscore_1.AssetLocation.Local) {
        return fsconnector_1.fsGetLocalSystemScopeId();
    }
    return '';
};
exports.cmGetCurrentAssetScopeForLocation = cmGetCurrentAssetScopeForLocation;
var cmGetFolderAssetSpecificationsForPath = function (location, folderPath) {
    var getFolderAssetSpec = function (path) {
        var folderAssetSpec = bscore_1.bscGetAssetSpecification(location, bscore_1.AssetType.Folder, path);
        return folderAssetSpec.name.length > 0 ? folderAssetSpec : null;
    };
    var assetSpecList = [];
    var assetSpec = getFolderAssetSpec(folderPath);
    while (!lodash_1.isNil(assetSpec)) {
        assetSpecList.unshift(assetSpec);
        assetSpec = getFolderAssetSpec(assetSpec.path);
    }
    return assetSpecList;
};
exports.cmGetFolderAssetSpecificationsForPath = cmGetFolderAssetSpecificationsForPath;
var cmArePartialObjectsEqual = function (o1, o2, props) {
    return !props.some(function (prop) {
        var v1 = o1[prop];
        var v2 = o2[prop];
        return lodash_1.isNil(v2) !== lodash_1.isNil(v1) || (!lodash_1.isNil(v1) && !lodash_1.isEqual(v2, v1));
    });
};
exports.cmArePartialObjectsEqual = cmArePartialObjectsEqual;
var cmIsObjectAEqualOrMoreComplete = function (objA, objB, props) {
    return !props.some(function (prop) {
        var vA = objA[prop];
        var vB = objB[prop];
        return !(lodash_1.isNil(vB) || lodash_1.isEqual(vB, vA));
    });
};
exports.cmIsObjectAEqualOrMoreComplete = cmIsObjectAEqualOrMoreComplete;
var compareStringAscending = function (a, b) {
    var stringA = a.toUpperCase();
    var stringB = b.toUpperCase();
    if (stringA < stringB) {
        return -1;
    }
    if (stringA > stringB) {
        return 1;
    }
    return 0;
};
exports.compareStringAscending = compareStringAscending;
var compareStringDescending = function (a, b) {
    var stringA = a.toUpperCase();
    var stringB = b.toUpperCase();
    if (stringA > stringB) {
        return -1;
    }
    if (stringA < stringB) {
        return 1;
    }
    return 0;
};
exports.compareStringDescending = compareStringDescending;
function objectPropertyComparison(propertyPath, descending, secondaryPropertyPath) {
    if (descending) {
        return function (a, b) {
            var result = comparePropertyDescending(a, b, propertyPath);
            if (result === 0 && !lodash_1.isNil(secondaryPropertyPath)) {
                result = comparePropertyDescending(a, b, secondaryPropertyPath);
            }
            return result;
        };
    }
    return function (a, b) {
        var result = comparePropertyAscending(a, b, propertyPath);
        if (result === 0 && !lodash_1.isNil(secondaryPropertyPath)) {
            result = comparePropertyAscending(a, b, secondaryPropertyPath);
        }
        return result;
    };
}
exports.objectPropertyComparison = objectPropertyComparison;
function comparePropertyAscending(a, b, propertyPath) {
    var propA = exports.getObjectPropertyForSort(a, propertyPath);
    var propB = exports.getObjectPropertyForSort(b, propertyPath);
    var nilPropA = lodash_1.isNil(propA);
    var nilPropB = lodash_1.isNil(propB);
    if (!nilPropA && nilPropB) {
        return 1;
    }
    else if (nilPropA && !nilPropB) {
        return -1;
    }
    else if (!(nilPropA || nilPropB)) {
        if (propA.valueOf() < propB.valueOf()) {
            return -1;
        }
        if (propA.valueOf() > propB.valueOf()) {
            return 1;
        }
    }
    return 0;
}
function comparePropertyDescending(a, b, propertyPath) {
    var propA = exports.getObjectPropertyForSort(a, propertyPath);
    var propB = exports.getObjectPropertyForSort(b, propertyPath);
    var nilPropA = lodash_1.isNil(propA);
    var nilPropB = lodash_1.isNil(propB);
    if (!nilPropA && nilPropB) {
        return -1;
    }
    else if (nilPropA && !nilPropB) {
        return 1;
    }
    else if (!(nilPropA || nilPropB)) {
        if (propA.valueOf() > propB.valueOf()) {
            return -1;
        }
        if (propA.valueOf() < propB.valueOf()) {
            return 1;
        }
    }
    return 0;
}
var getObjectPropertyForSort = function (obj, propertyPath) {
    var propNames = propertyPath.split('.');
    if (propNames.length > 0) {
        var value = obj[propNames.shift()];
        while (typeof (value) === 'object' && propNames.length > 0) {
            value = value[propNames.shift()];
        }
        if (propNames.length === 0) {
            if (typeof (value) === 'string') {
                return value.toUpperCase();
            }
            else if (typeof (value) === 'number' || typeof (value) === 'boolean'
                || (typeof (value) === 'object' && value instanceof Date)) {
                return value;
            }
        }
    }
    return null;
};
exports.getObjectPropertyForSort = getObjectPropertyForSort;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcAssetCollection = exports.BrightScriptBsnSortFieldMap = exports.HtmlSiteSortFieldMap = exports.DataFeedBsnSortFieldMap = exports.PresentationBsnSortFieldMap = exports.FolderBsnSortFieldMap = exports.ContentBsnSortFieldMap = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var assetItemCache_1 = __webpack_require__(14);
var assetManager_1 = __webpack_require__(10);
var interfaces_1 = __webpack_require__(13);
var notifyExternal_1 = __webpack_require__(20);
var notifyInternal_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(6);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var isomorphic_path_1 = __webpack_require__(11);
var assetContainerCache_1 = __webpack_require__(40);
exports.ContentBsnSortFieldMap = (_a = {},
    _a[interfaces_1.AssetSortField.name] = bsnconnector_1.BsnContentSortField.name,
    _a[interfaces_1.AssetSortField.mediaType] = bsnconnector_1.BsnContentSortField.mediaType,
    _a[interfaces_1.AssetSortField.fileSize] = bsnconnector_1.BsnContentSortField.fileSize,
    _a[interfaces_1.AssetSortField.uploadDate] = bsnconnector_1.BsnContentSortField.uploadDate,
    _a[interfaces_1.AssetSortField.lastModifiedDate] = bsnconnector_1.BsnContentSortField.lastModifiedDate,
    _a[interfaces_1.AssetSortField.creationDate] = bsnconnector_1.BsnContentSortField.uploadDate,
    _a);
exports.FolderBsnSortFieldMap = (_b = {},
    _b[interfaces_1.AssetSortField.name] = bsnconnector_1.BsnContentSortField.name,
    _b[interfaces_1.AssetSortField.lastModifiedDate] = bsnconnector_1.BsnContentSortField.lastModifiedDate,
    _b[interfaces_1.AssetSortField.creationDate] = bsnconnector_1.BsnContentSortField.lastModifiedDate,
    _b[interfaces_1.AssetSortField.uploadDate] = bsnconnector_1.BsnContentSortField.lastModifiedDate,
    _b);
exports.PresentationBsnSortFieldMap = (_c = {},
    _c[interfaces_1.AssetSortField.name] = bsnconnector_1.BsnPresentationSortField.name,
    _c[interfaces_1.AssetSortField.fileSize] = bsnconnector_1.BsnPresentationSortField.name,
    _c[interfaces_1.AssetSortField.lastModifiedDate] = bsnconnector_1.BsnPresentationSortField.lastModifiedDate,
    _c[interfaces_1.AssetSortField.creationDate] = bsnconnector_1.BsnPresentationSortField.creationDate,
    _c[interfaces_1.AssetSortField.uploadDate] = bsnconnector_1.BsnPresentationSortField.creationDate,
    _c);
exports.DataFeedBsnSortFieldMap = (_d = {},
    _d[interfaces_1.AssetSortField.name] = bsnconnector_1.BsnDataFeedSortField.name,
    _d[interfaces_1.AssetSortField.fileSize] = bsnconnector_1.BsnDataFeedSortField.fileSize,
    _d[interfaces_1.AssetSortField.lastModifiedDate] = bsnconnector_1.BsnDataFeedSortField.lastModifiedDate,
    _d[interfaces_1.AssetSortField.creationDate] = bsnconnector_1.BsnDataFeedSortField.creationDate,
    _d[interfaces_1.AssetSortField.uploadDate] = bsnconnector_1.BsnDataFeedSortField.creationDate,
    _d);
exports.HtmlSiteSortFieldMap = (_e = {},
    _e[interfaces_1.AssetSortField.name] = bsnconnector_1.BsnHtmlSiteSortField.name,
    _e[interfaces_1.AssetSortField.fileSize] = bsnconnector_1.BsnHtmlSiteSortField.fileSize,
    _e[interfaces_1.AssetSortField.lastModifiedDate] = bsnconnector_1.BsnHtmlSiteSortField.lastModifiedDate,
    _e[interfaces_1.AssetSortField.uploadDate] = bsnconnector_1.BsnHtmlSiteSortField.uploadDate,
    _e[interfaces_1.AssetSortField.creationDate] = bsnconnector_1.BsnHtmlSiteSortField.uploadDate,
    _e);
exports.BrightScriptBsnSortFieldMap = (_f = {},
    _f[interfaces_1.AssetSortField.name] = bsnconnector_1.BsnPluginSortField.name,
    _f[interfaces_1.AssetSortField.fileSize] = bsnconnector_1.BsnPluginSortField.fileSize,
    _f[interfaces_1.AssetSortField.uploadDate] = bsnconnector_1.BsnPluginSortField.lastModifiedDate,
    _f[interfaces_1.AssetSortField.lastModifiedDate] = bsnconnector_1.BsnPluginSortField.lastModifiedDate,
    _f[interfaces_1.AssetSortField.creationDate] = bsnconnector_1.BsnPluginSortField.creationDate,
    _f);
var AssetTypesWithVirtualPathSupport = new Set([bscore_1.AssetType.Content, bscore_1.AssetType.Folder]);
var CmcAssetCollection = (function () {
    function CmcAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) {
        this._currentAssetScope = '';
        this._currentDirectory = '';
        this._bsnEnumerator = null;
        this._isComplete = false;
        this._defaultBsnPageSize = 100;
        this._assetMap = new Map();
        this._assetNames = [];
        this._newAssetNames = new Set();
        this._addedAssetNames = [];
        this._updatedAssetNames = [];
        this._removedAssetMap = new Map();
        this._pinnedAssetMap = new Map();
        this._assetTypes = Array.isArray(assetType) ? assetType : [assetType];
        if (lodash_1.isString(directoryPath) && location === bscore_1.AssetLocation.Bsn) {
            directoryPath = utils_1.cmNormalizeBsnPathString(directoryPath);
        }
        if (location) {
            this._currentAssetLocation = (location !== bscore_1.AssetLocation.Local || fsconnector_1.fsIsLocalFileSystemAvailable()) ?
                location : bscore_1.AssetLocation.Bsn;
        }
        else {
            this._currentAssetLocation = fsconnector_1.fsIsLocalFileSystemAvailable() ?
                bscore_1.AssetLocation.Local : bscore_1.AssetLocation.Bsn;
        }
        this._enumerationOptions = Object.assign({}, CmcAssetCollection.DefaultEnumerationOptions, enumerationOptions);
        if (this._enumerationOptions.mediaFilters) {
            if (Array.isArray(this._enumerationOptions.mediaFilters)) {
                this._enumerationOptions.mediaFilters = lodash_1.uniq(this._enumerationOptions.mediaFilters);
            }
            else if (typeof this._enumerationOptions.mediaFilters === 'string') {
                this._enumerationOptions.mediaFilters = [this._enumerationOptions.mediaFilters];
            }
            else {
                this._enumerationOptions.mediaFilters = null;
            }
        }
        if (lodash_1.isNil(this._enumerationOptions.sortField)) {
            this._enumerationOptions.sortField = interfaces_1.AssetSortField.name;
        }
        if (this._enumerationOptions.pageSize === 0 || this._enumerationOptions.pageSize > this._defaultBsnPageSize) {
            this._enumerationOptions.pageSize = this._defaultBsnPageSize;
        }
        this._currentDirectory = this.resolveDirectoryPath(directoryPath);
        this.addPinnedAssetItems(pinnedAssetItems);
        if (this._currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var bsnSession = bsnconnector_1.bsnGetSession();
            if (bsnSession.isNetworkActive) {
                this._currentAssetScope = bsnSession.networkName;
            }
        }
        else if (fsconnector_1.fsIsLocalFileSystemAvailable()) {
            this._currentAssetScope = fsconnector_1.fsGetLocalSystemScopeId();
        }
        this._locatorHash = this.createLocatorHash();
        this._sortFieldSet = new Set(this.sortFieldList);
    }
    Object.defineProperty(CmcAssetCollection.prototype, "currentAssetLocation", {
        get: function () { return this._currentAssetLocation; },
        set: function (location) {
            if (location === bscore_1.AssetLocation.Local && !fsconnector_1.fsIsLocalFileSystemAvailable()) {
                return;
            }
            if (this._currentAssetLocation !== location) {
                this.clear();
            }
            this._currentAssetLocation = location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "currentAssetScope", {
        get: function () { return this._currentAssetScope; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "enumerationOptions", {
        get: function () { return this._enumerationOptions; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "isComplete", {
        get: function () { return this._isComplete; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "currentDirectory", {
        get: function () { return this._currentDirectory; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "assetType", {
        get: function () { return this._assetTypes[0]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "assetTypes", {
        get: function () { return this._assetTypes; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "sortField", {
        get: function () {
            var sortField = this._enumerationOptions.sortField;
            return sortField ? sortField : interfaces_1.AssetSortField.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "sortDescending", {
        get: function () {
            return this._enumerationOptions.sortDescending;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "sortFieldSet", {
        get: function () { return this._sortFieldSet; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "sortOptions", {
        get: function () {
            return lodash_1.pick(this._enumerationOptions, ['sortField', 'sortDescending']);
        },
        set: function (value) {
            this.setSortOptions(value.sortField, value.sortDescending);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "assetNames", {
        get: function () {
            if (this._assetNames.length === 0) {
                this._assetNames = this.sortNames(Array.from(this._assetMap.keys()));
            }
            return this._assetNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "newAssetNames", {
        get: function () {
            return this.sortNames(Array.from(this._newAssetNames));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "addedAssetNames", {
        get: function () {
            return this._addedAssetNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "updatedAssetNames", {
        get: function () {
            return this._updatedAssetNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "removedAssetNames", {
        get: function () {
            return Array.from(this._removedAssetMap.keys());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "pinnedAssetNames", {
        get: function () {
            return Array.from(this._pinnedAssetMap.keys());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "folderAssetNames", {
        get: function () {
            var _this = this;
            return this.assetNames.filter(function (name) {
                return _this.getAssetTypeForName(name) === bscore_1.AssetType.Folder;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "fileAssetNames", {
        get: function () {
            var _this = this;
            return this.assetNames.filter(function (name) { return _this.getAssetTypeForName(name) !== bscore_1.AssetType.Folder; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "assetLocators", {
        get: function () {
            return this.getSortedAssetItems().map(bscore_1.bscAssetLocatorFromAssetItem);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "fileAssetLocators", {
        get: function () {
            var _this = this;
            return this.fileAssetNames.map(function (name) { return bscore_1.bscAssetLocatorFromAssetItem(_this.getAssetItem(name)); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "folderAssetLocators", {
        get: function () {
            var _this = this;
            return this.folderAssetNames.map(function (name) { return bscore_1.bscAssetLocatorFromAssetItem(_this.getAssetItem(name)); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "assetLocatorHashes", {
        get: function () {
            return this.getSortedAssetItems().map(utils_1.cmCreateHashFromAssetLocator);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "fileLocatorHashes", {
        get: function () {
            var _this = this;
            return this.fileAssetNames.map(function (name) { return utils_1.cmCreateHashFromAssetLocator(_this.getAssetItem(name)); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "folderLocatorHashes", {
        get: function () {
            var _this = this;
            return this.folderAssetNames.map(function (name) { return utils_1.cmCreateHashFromAssetLocator(_this.getAssetItem(name)); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "fileAssets", {
        get: function () {
            var _this = this;
            return this.fileAssetNames.map(function (name) { return _this.getAsset(name); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "folderAssets", {
        get: function () {
            var _this = this;
            return this.folderAssetNames.map(function (name) { return _this.getAsset(name); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "addedAssets", {
        get: function () {
            var _this = this;
            return this.addedAssetNames.map(function (name) { return _this.getAsset(name); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "updatedAssets", {
        get: function () {
            var _this = this;
            return this.updatedAssetNames.map(function (name) { return _this.getAsset(name); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "removedAssets", {
        get: function () {
            return Array.from(this._removedAssetMap.values())
                .reduce(function (assetArray, assetLocatorHash) {
                var ref = assetItemCache_1.cmGetBsAssetItemCache().getAssetItemCacheItem(assetLocatorHash);
                if (!lodash_1.isNil(ref)) {
                    assetArray.push(assetManager_1.cmGetCmiAsset(ref.assetItem));
                }
                return assetArray;
            }, []);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "allAssets", {
        get: function () {
            var _this = this;
            return this.assetNames.map(function (name) { return _this.getAsset(name); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "pinnedAssetItems", {
        get: function () {
            var _this = this;
            return this.pinnedAssetNames.map(function (name) { return _this.getAssetItem(name); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "sortFieldList", {
        get: function () {
            return [
                interfaces_1.AssetSortField.name,
                interfaces_1.AssetSortField.lastModifiedDate,
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "locatorHash", {
        get: function () { return this._locatorHash; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "functionalLocator", {
        get: function () { return this._locatorHash; },
        enumerable: false,
        configurable: true
    });
    CmcAssetCollection.prototype.update = function () {
        var _this = this;
        this.clearUnpinnedAssets();
        notifyExternal_1.cmGetAssetNotifier().startBatch(this.locatorHash);
        return new Promise(function (resolve, reject) {
            var origPageSize = _this._enumerationOptions.pageSize;
            _this._enumerationOptions.pageSize = 100;
            var finalize = function () {
                _this._enumerationOptions.pageSize = origPageSize;
                notifyExternal_1.cmGetAssetNotifier().stopBatchAndSend(_this.locatorHash);
            };
            var getNext = function () {
                _this.enumerateNext()
                    .then(function () {
                    if (_this.isComplete) {
                        if (_this._newAssetNames.size > 0) {
                            assetContainerCache_1.cmGetCmcAssetContainerCache().notifyCollectionUpdate(_this.locatorHash);
                        }
                        finalize();
                        resolve(_this.assetNames);
                    }
                    else {
                        return getNext();
                    }
                })
                    .catch(function (error) {
                    finalize();
                    reject(error);
                });
            };
            return _this.enumerateStart()
                .then(function () {
                if (_this.isComplete) {
                    if (_this._newAssetNames.size > 0) {
                        assetContainerCache_1.cmGetCmcAssetContainerCache().notifyCollectionUpdate(_this.locatorHash);
                    }
                    finalize();
                    resolve(_this.assetNames);
                }
                else {
                    return getNext();
                }
            })
                .catch(function (error) {
                finalize();
                reject(error);
            });
        });
    };
    CmcAssetCollection.prototype.startUpdate = function () {
        var _this = this;
        var origNewAssetCount = this._newAssetNames.size;
        notifyExternal_1.cmGetAssetNotifier().startBatch(this.locatorHash);
        return this.enumerateStart()
            .then(function () {
            if (_this._newAssetNames.size !== origNewAssetCount) {
                assetContainerCache_1.cmGetCmcAssetContainerCache().notifyCollectionUpdate(_this.locatorHash);
            }
            notifyExternal_1.cmGetAssetNotifier().stopBatchAndSend(_this.locatorHash);
            return _this;
        })
            .catch(function (error) {
            notifyExternal_1.cmGetAssetNotifier().stopBatchAndSend(_this.locatorHash);
            throw error;
        });
    };
    CmcAssetCollection.prototype.updateNext = function () {
        var _this = this;
        var origNewAssetCount = this._newAssetNames.size;
        notifyExternal_1.cmGetAssetNotifier().startBatch(this.locatorHash);
        return this.enumerateNext()
            .then(function () {
            if (_this._newAssetNames.size !== origNewAssetCount) {
                assetContainerCache_1.cmGetCmcAssetContainerCache().notifyCollectionUpdate(_this.locatorHash);
            }
            notifyExternal_1.cmGetAssetNotifier().stopBatchAndSend(_this.locatorHash);
            return _this;
        })
            .catch(function (error) {
            notifyExternal_1.cmGetAssetNotifier().stopBatchAndSend(_this.locatorHash);
            throw error;
        });
    };
    CmcAssetCollection.prototype.updatePinnedAssetItems = function () {
        var _this = this;
        this.clearUnpinnedAssets();
        this.resetPinnedAssetVerification();
        if (this._currentAssetLocation === bscore_1.AssetLocation.Local
            && !fsconnector_1.fsIsLocalFileSystemAvailable()) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.fsNotAvailableError));
        }
        if (this._currentAssetLocation === bscore_1.AssetLocation.Local) {
            return this.enumerateLocalPinnedAssets(this.assetTypes)
                .then(function () {
                _this.processPinnedAssetVerification();
                return _this;
            });
        }
        else if (this._currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            if (this._pinnedAssetMap.size > 0) {
                var pinnedAssetNetworkIds = this.pinnedAssetItems.map(function (item) { return item.networkId; });
                var filterExpression = this.getFilterExpressionFromNetworkIdList(pinnedAssetNetworkIds);
                var enumOptions_1 = Object.assign(this.bsnEnumerationOptions, { filterExpression: filterExpression });
                this._assetNames = [];
                return new Promise(function (resolve, reject) {
                    var getNext = function (enumerator) {
                        return _this.getNextBsnAssetListSegment(enumerator)
                            .then(function (assetListSegment) {
                            _this.processBsnAssetListSegmentItems(assetListSegment);
                            if (assetListSegment.enumerator.isComplete) {
                                _this.processPinnedAssetVerification();
                                resolve(_this);
                            }
                            else {
                                return getNext(assetListSegment.enumerator);
                            }
                        })
                            .catch(function (error) { return reject(error); });
                    };
                    return _this.getInitialBsnAssetListSegment(enumOptions_1)
                        .then(function (contentSegment) {
                        _this.processBsnAssetListSegmentItems(contentSegment);
                        if (contentSegment.enumerator.isComplete) {
                            _this.processPinnedAssetVerification();
                            resolve(_this);
                        }
                        else {
                            return getNext(contentSegment.enumerator);
                        }
                    })
                        .catch(function (error) { return reject(error); });
                });
            }
            else {
                return Promise.resolve(this);
            }
        }
        else {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
        }
    };
    CmcAssetCollection.prototype.getBackendCount = function () {
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            if (!fsconnector_1.fsIsLocalFileSystemAvailable()) {
                return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.fsNotAvailableError));
            }
            return this.getLocalAssetBackendCount(this.localAssetTypeArray);
        }
        else if (this._currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            return this.getBsnAssetBackendCount(this.bsnEnumerationOptions);
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcAssetCollection.prototype.getDuplicateNames = function (matchList) {
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            if (!fsconnector_1.fsIsLocalFileSystemAvailable()) {
                return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.fsNotAvailableError));
            }
            return Promise.resolve([]);
        }
        else if (this._currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            return this.getBsnDuplicateNames(matchList);
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcAssetCollection.prototype.getFilteredAssets = function (filterOptions) {
        return this.getFilteredAssetItems(filterOptions).map(function (assetItem) { return assetManager_1.cmGetCmiAsset(assetItem); });
    };
    CmcAssetCollection.prototype.getFilteredAssetLocators = function (filterOptions) {
        return this.getFilteredAssetItems(filterOptions).map(bscore_1.bscAssetLocatorFromAssetItem);
    };
    CmcAssetCollection.prototype.setSortOptions = function (sortField, sortDescending) {
        if (sortDescending === void 0) { sortDescending = false; }
        this._assetNames = [];
        this._enumerationOptions.sortField = lodash_1.isNil(sortField) ? interfaces_1.AssetSortField.name : sortField;
        this._enumerationOptions.sortDescending = sortDescending;
    };
    CmcAssetCollection.prototype.hasAssetName = function (name) {
        return this._assetMap.has(name);
    };
    CmcAssetCollection.prototype.getAssetTypeForName = function (name) {
        var assetItem = this.getAssetItem(name);
        return lodash_1.isNil(assetItem) ? null : assetItem.assetType;
    };
    CmcAssetCollection.prototype.getAssetNamesForType = function (assetType) {
        var _this = this;
        return this.assetNames.filter(function (name) {
            var type = _this.getAssetTypeForName(name);
            return !lodash_1.isNull(type) && type === assetType;
        });
    };
    CmcAssetCollection.prototype.getAssetsForType = function (assetType) {
        var _this = this;
        return this.getAssetNamesForType(assetType).map(function (name) { return assetManager_1.cmGetCmiAsset(_this.getAssetItem(name)); });
    };
    CmcAssetCollection.prototype.getAssetNamesForMediaType = function (mediaType) {
        var _this = this;
        return this.assetNames.filter(function (name) {
            var assetItem = _this.getAssetItem(name);
            return assetItem.assetType === bscore_1.AssetType.Content
                && assetItem.mediaType && assetItem.mediaType === mediaType;
        });
    };
    CmcAssetCollection.prototype.getAssetsForMediaType = function (mediaType) {
        var _this = this;
        return this.getAssetNamesForMediaType(mediaType).map(function (name) { return assetManager_1.cmGetCmiAsset(_this.getAssetItem(name)); });
    };
    CmcAssetCollection.prototype.getAsset = function (name) {
        var assetItem = this.getAssetItem(name);
        return lodash_1.isNil(assetItem) ? null : assetManager_1.cmGetCmiAsset(assetItem);
    };
    CmcAssetCollection.prototype.getRemovedAsset = function (name) {
        var assetItem = this.getRemovedAssetItem(name);
        return lodash_1.isNil(assetItem) ? null : assetManager_1.cmGetCmiAsset(assetItem);
    };
    CmcAssetCollection.prototype.isAssetTypeIncluded = function (assetType) {
        return this.assetTypes.indexOf(assetType) >= 0;
    };
    CmcAssetCollection.prototype.clearAddedAssets = function () {
        this._addedAssetNames = [];
    };
    CmcAssetCollection.prototype.clearUpdatedAssets = function () {
        this._updatedAssetNames = [];
    };
    CmcAssetCollection.prototype.clearRemovedAssets = function () {
        this._removedAssetMap.clear();
    };
    CmcAssetCollection.prototype.unpinAllPinnedAssetItems = function () {
        this._pinnedAssetMap.clear();
    };
    CmcAssetCollection.prototype.getFolderAssetSpecificationsForPath = function () {
        return utils_1.cmGetFolderAssetSpecificationsForPath(this._currentAssetLocation, this._currentDirectory);
    };
    CmcAssetCollection.prototype.createFolder = function (name) {
        var _this = this;
        if (this.currentDirectory && this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            return this.createLocalFolder(name)
                .then(function (assetItem) {
                if (!lodash_1.isNil(assetItem)) {
                    _this.addAssetItem(assetItem);
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                }
                return assetItem;
            });
        }
        return Promise.resolve(null);
    };
    CmcAssetCollection.prototype.removeFolder = function (name) {
        var _this = this;
        if (this.currentDirectory && this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var dirPath = isomorphic_path_1.default.join(this.currentDirectory, name);
            var assetItem_1 = fsconnector_1.fsGetAssetItemFromFile(dirPath);
            if (!lodash_1.isNil(assetItem_1)) {
                return fsconnector_1.fsDeleteDirectory(dirPath)
                    .then(function () {
                    _this.markAssetItemAsDeleted(name);
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [assetItem_1] });
                })
                    .then(function () { return assetManager_1.cmUpdateAssetItemParentFolder(assetItem_1); })
                    .then(function () {
                    return;
                })
                    .catch(function (error) {
                    throw new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, error.message);
                });
            }
        }
        return Promise.resolve();
    };
    CmcAssetCollection.prototype.notify = function (notification) {
        var _this = this;
        if (notifyInternal_1.cmIsAssetItemNotification(notification)) {
            notification.assetItems.forEach(function (assetItem) {
                if (_this.assetMatchesCollection(assetItem)) {
                    switch (notification.kind) {
                        case notifyInternal_1.AssetCollectionNotificationType.addedAssets:
                            _this._assetMap.set(assetItem.name, utils_1.cmCreateHashFromAssetLocator(assetItem));
                            _this._addedAssetNames.push(assetItem.name);
                            _this._assetNames = [];
                            break;
                        case notifyInternal_1.AssetCollectionNotificationType.updatedAssets:
                        case notifyInternal_1.AssetCollectionNotificationType.updatedAssetPermissions:
                            if (_this._assetMap.has(assetItem.name)) {
                                _this._updatedAssetNames.push(assetItem.name);
                            }
                            break;
                        case notifyInternal_1.AssetCollectionNotificationType.removedAssets:
                            _this._removedAssetMap.set(assetItem.name, utils_1.cmCreateHashFromAssetLocator(assetItem));
                            _this._assetMap.delete(assetItem.name);
                            _this._pinnedAssetMap.delete(assetItem.name);
                            _this._newAssetNames.delete(assetItem.name);
                            _this._addedAssetNames = lodash_1.without(_this._addedAssetNames, assetItem.name);
                            _this._updatedAssetNames = lodash_1.without(_this._updatedAssetNames, assetItem.name);
                            _this._assetNames = [];
                            break;
                        case notifyInternal_1.AssetCollectionNotificationType.pinAssets:
                            _this.addPinnedAssetItem(assetItem);
                            break;
                        case notifyInternal_1.AssetCollectionNotificationType.unpinAssets:
                            _this._pinnedAssetMap.delete(assetItem.name);
                            break;
                    }
                    if (notification.kind !== notifyInternal_1.AssetCollectionNotificationType.pinAssets
                        && notification.kind !== notifyInternal_1.AssetCollectionNotificationType.unpinAssets) {
                        assetContainerCache_1.cmGetCmcAssetContainerCache().notifyCollectionUpdate(_this.locatorHash);
                    }
                }
            });
        }
        else if (notifyInternal_1.cmIsAssetUsageComponentNotification(notification)
            && this.assetHasUsageData(notification.usageComponentAssetLocator.assetType)) {
            notification.assetLocators.forEach(function (assetLocator) {
                var assetItem = _this.getAssetItem(assetLocator.name);
                if (!lodash_1.isNil(assetItem)
                    && utils_1.cmAreBsnAssetLocatorsEqual(assetItem, assetLocator)
                    && lodash_1.isNil(lodash_1.find(_this._updatedAssetNames, ['name', assetItem.name]))) {
                    _this._updatedAssetNames.push(assetItem.name);
                }
            });
        }
    };
    CmcAssetCollection.prototype.getSortedAssetItems = function () {
        var _this = this;
        return this.assetNames.map(function (name) { return _this.getAssetItem(name); });
    };
    CmcAssetCollection.prototype.getAssetItem = function (name) {
        var locatorHash = this._assetMap.get(name);
        if (!lodash_1.isNil(locatorHash)) {
            var ref = assetItemCache_1.cmGetBsAssetItemCache().getAssetItemCacheItem(locatorHash);
            if (!lodash_1.isNil(ref)) {
                return ref.assetItem;
            }
        }
        return null;
    };
    CmcAssetCollection.prototype.getFilteredAssetItems = function (filterOptions) {
        var assetItems = this.getSortedAssetItems();
        if (utils_1.cmAreFilterOptionsValid(filterOptions)) {
            return assetItems.filter(function (assetItem) { return utils_1.cmDoesAssetItemMatchFilterOptions(assetItem, filterOptions); });
        }
        return assetItems;
    };
    CmcAssetCollection.prototype.assetMatchesCollection = function (assetItem) {
        if (this.currentAssetLocation === assetItem.location) {
            if ((this.currentAssetLocation === bscore_1.AssetLocation.Local
                || this.isAssetTypeIncluded(bscore_1.AssetType.Content)
                || this.isAssetTypeIncluded(bscore_1.AssetType.Folder))
                && !lodash_1.isNil(this._currentDirectory)
                && this._currentDirectory !== this.resolveDirectoryPath(assetItem.path)) {
                return false;
            }
            return this.isAssetTypeIncluded(assetItem.assetType)
                || (assetItem.assetType === bscore_1.AssetType.Folder && this._enumerationOptions.folders);
        }
        return false;
    };
    CmcAssetCollection.prototype.addPinnedAssetItems = function (assetItems) {
        var _this = this;
        if (!lodash_1.isNil(assetItems) && Array.isArray(assetItems)) {
            assetItems.forEach(function (assetLocator) {
                var assetItem = bscore_1.bscIsAssetItem(assetLocator) ? assetLocator : bscore_1.bscAssetItemFromAssetLocator(assetLocator);
                if (_this.assetMatchesCollection(assetItem)) {
                    _this.addPinnedAssetItem(assetItem);
                }
            });
        }
    };
    CmcAssetCollection.prototype.sortNames = function (assetNames) {
        switch (this._enumerationOptions.sortField) {
            case interfaces_1.AssetSortField.fileSize:
            case interfaces_1.AssetSortField.mediaType:
            case interfaces_1.AssetSortField.lastModifiedDate:
            case interfaces_1.AssetSortField.creationDate:
            case interfaces_1.AssetSortField.uploadDate:
                return this.sortAssetItemNames(assetNames, utils_1.objectPropertyComparison(this._enumerationOptions.sortField, this._enumerationOptions.sortDescending, 'name'));
            case interfaces_1.AssetSortField.name:
                return this._enumerationOptions.sortDescending ?
                    assetNames.sort(utils_1.compareStringDescending) : assetNames.sort(utils_1.compareStringAscending);
        }
        return assetNames;
    };
    CmcAssetCollection.prototype.assetHasUsageData = function (containerAssetType) {
        return false;
    };
    CmcAssetCollection.prototype.clear = function () {
        this._assetMap.clear();
        this._assetNames = [];
        this._newAssetNames.clear();
        this._addedAssetNames = [];
        this._updatedAssetNames = [];
        this._removedAssetMap.clear();
        this._pinnedAssetMap.clear();
        this._bsnEnumerator = null;
        this._isComplete = false;
    };
    CmcAssetCollection.prototype.enumerateStart = function () {
        var _this = this;
        this.clearUnpinnedAssets();
        this.resetPinnedAssetVerification();
        if (this._currentAssetLocation === bscore_1.AssetLocation.Local
            && !fsconnector_1.fsIsLocalFileSystemAvailable()) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.fsNotAvailableError));
        }
        if (this._currentAssetLocation === bscore_1.AssetLocation.Local) {
            return this.enumerateLocalAssets(this.localAssetTypeArray)
                .then(function () {
                _this.processPinnedAssetVerification();
            });
        }
        else if (this._currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            return this.getInitialBsnAssetListSegment(this.bsnEnumerationOptions)
                .then(function (assetListSegment) {
                _this.processBsnAssetListSegment(assetListSegment);
                if (_this.isComplete) {
                    _this.processPinnedAssetVerification();
                }
            });
        }
        else {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
        }
    };
    CmcAssetCollection.prototype.enumerateNext = function () {
        var _this = this;
        if (this._isComplete || lodash_1.isNil(this._bsnEnumerator)) {
            return Promise.resolve();
        }
        this._assetNames = [];
        this._newAssetNames.clear();
        if (this._currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            return this.getNextBsnAssetListSegment(this._bsnEnumerator)
                .then(function (assetListSegment) {
                _this.processBsnAssetListSegment(assetListSegment);
                if (_this.isComplete) {
                    _this.processPinnedAssetVerification();
                }
            });
        }
        else {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
        }
    };
    CmcAssetCollection.prototype.addAssetItem = function (assetItem) {
        var locatorHash = utils_1.cmCreateHashFromAssetLocator(assetItem);
        assetItemCache_1.cmGetBsAssetItemCache().setAssetItem(locatorHash, assetItem, this.locatorHash);
        this._assetMap.set(assetItem.name, locatorHash);
    };
    CmcAssetCollection.prototype.markAssetItemAsDeleted = function (name) {
        var assetItem = this.getAssetItem(name);
        if (!lodash_1.isNil(assetItem)) {
            var locatorHash = utils_1.cmCreateHashFromAssetLocator(assetItem);
            assetItemCache_1.cmGetBsAssetItemCache().markDeletedFromSource(locatorHash);
        }
    };
    CmcAssetCollection.prototype.getRemovedAssetItem = function (name) {
        var locatorHash = this._removedAssetMap.get(name);
        if (!lodash_1.isNil(locatorHash)) {
            var ref = assetItemCache_1.cmGetBsAssetItemCache().getAssetItemCacheItem(locatorHash);
            if (!lodash_1.isNil(ref)) {
                return ref.assetItem;
            }
        }
        return null;
    };
    CmcAssetCollection.prototype.addPinnedAssetItem = function (assetItem) {
        delete assetItem.refCount;
        assetItem.id = bscore_1.BsAssetIdNone;
        if (!this._assetMap.has(assetItem.name)) {
            this._assetNames = [];
            this._newAssetNames.add(assetItem.name);
            this.addAssetItem(assetItem);
        }
        if (!this._pinnedAssetMap.has(assetItem.name)) {
            this._pinnedAssetMap.set(assetItem.name, { verified: false });
        }
    };
    CmcAssetCollection.prototype.clearUnpinnedAssets = function () {
        var _this = this;
        var pinnedAssetMap = new Map();
        this._assetMap.forEach(function (locatorHash, name) {
            if (_this._pinnedAssetMap.has(name)) {
                pinnedAssetMap.set(name, locatorHash);
            }
        });
        this._assetMap = pinnedAssetMap;
        this._assetNames = [];
        this._newAssetNames.clear();
        this._addedAssetNames = [];
        this._updatedAssetNames = [];
        this._removedAssetMap.clear();
        this._bsnEnumerator = null;
        this._isComplete = false;
    };
    CmcAssetCollection.prototype.resolveDirectoryPath = function (directoryPath) {
        var sep = this.currentAssetLocation === bscore_1.AssetLocation.Bsn ? '/' : isomorphic_path_1.default.sep;
        if (!directoryPath) {
            return sep;
        }
        else if (directoryPath.charAt(directoryPath.length - 1) !== sep) {
            return directoryPath + sep;
        }
        return directoryPath;
    };
    CmcAssetCollection.prototype.enumerateLocalAssets = function (assetTypes) {
        var _this = this;
        var folderEnumerator = new fsconnector_1.FsFolderEnumerator();
        var mediaTypeFilters = this._enumerationOptions.mediaFilters;
        return folderEnumerator.update(this.currentDirectory, assetTypes)
            .then(function (assetItems) {
            assetItems.forEach(function (item) {
                if (item.assetType !== bscore_1.AssetType.Content
                    || mediaTypeFilters === null
                    || mediaTypeFilters.indexOf(item.mediaType) >= 0) {
                    if (!_this._assetMap.has(item.name)) {
                        _this._newAssetNames.add(item.name);
                    }
                    _this.setPinnedAssetVerification(item.name);
                    _this.addAssetItem(item);
                }
            });
            _this._isComplete = true;
        });
    };
    CmcAssetCollection.prototype.createLocalFolder = function (name) {
        var dirPath = isomorphic_path_1.default.join(this.currentDirectory, name);
        if (fsconnector_1.fsLocalFileExists(dirPath)) {
            return fsconnector_1.fsLocalFileIsDirectory(dirPath)
                .then(function (isDir) {
                if (!isDir) {
                    throw new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Requested folder name is in use by a file');
                }
                return fsconnector_1.fsGetAssetItemFromFileWithFileAndFolderCheck(dirPath);
            });
        }
        else {
            return fsconnector_1.fsCreateDirectory(dirPath)
                .then(function () { return fsconnector_1.fsGetAssetItemFromFileWithFileAndFolderCheck(dirPath); });
        }
    };
    CmcAssetCollection.prototype.getLocalAssetBackendCount = function (assetTypes) {
        var folderEnumerator = new fsconnector_1.FsFolderEnumerator();
        return folderEnumerator.getCount(this.currentDirectory, assetTypes, this._enumerationOptions.mediaFilters);
    };
    CmcAssetCollection.prototype.enumerateLocalPinnedAssets = function (assetTypes) {
        var _this = this;
        var folderEnumerator = new fsconnector_1.FsFolderEnumerator();
        var mediaTypeFilters = this._enumerationOptions.mediaFilters;
        return folderEnumerator.update(this.currentDirectory, assetTypes)
            .then(function (assetItems) {
            assetItems.forEach(function (item) {
                if (_this._pinnedAssetMap.has(item.name)
                    && (item.assetType !== bscore_1.AssetType.Content
                        || mediaTypeFilters === null
                        || mediaTypeFilters.indexOf(item.mediaType) >= 0)) {
                    _this.setPinnedAssetVerification(item.name);
                    _this.addAssetItem(item);
                }
            });
            _this._isComplete = true;
        });
    };
    Object.defineProperty(CmcAssetCollection.prototype, "bsnEnumerationOptions", {
        get: function () {
            var enumOptions = {};
            if (this._currentDirectory && AssetTypesWithVirtualPathSupport.has(this.assetTypes[0])) {
                enumOptions.virtualPath = this._currentDirectory;
            }
            var filterExpression = this.filterExpression;
            if (filterExpression) {
                enumOptions.filterExpression = filterExpression;
            }
            if (this._enumerationOptions.sortField && !utils_1.cmIsMultipleAssetTypeArray(this.assetTypes)) {
                var bsnSortField = this.bsnSortField;
                if (bsnSortField) {
                    enumOptions.sortExpression = '[' + bsnSortField.replace(/\./, '].[') + '] '
                        + (this._enumerationOptions.sortDescending ? 'DESC' : 'ASC');
                }
            }
            var pageSize = this._defaultBsnPageSize;
            if (lodash_1.isNumber(this._enumerationOptions.pageSize)
                && this._enumerationOptions.pageSize > 0
                && this._enumerationOptions.pageSize < this._defaultBsnPageSize) {
                pageSize = this._enumerationOptions.pageSize;
            }
            if (pageSize !== this._defaultBsnPageSize) {
                enumOptions.pageSize = pageSize;
            }
            return enumOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "nameProperty", {
        get: function () { return 'name'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "filterExpression", {
        get: function () { return ''; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "bsnSortField", {
        get: function () { return null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetCollection.prototype, "localAssetTypeArray", {
        get: function () {
            var assetTypes = this.assetTypes.slice();
            if (this.enumerationOptions.folders && assetTypes.indexOf(bscore_1.AssetType.Folder) < 0) {
                assetTypes.push(bscore_1.AssetType.Folder);
            }
            return assetTypes;
        },
        enumerable: false,
        configurable: true
    });
    CmcAssetCollection.prototype.getFilterExpressionFromNetworkIdList = function (networkIdList) {
        return '[Id] IS IN (' + networkIdList.join() + ')';
    };
    CmcAssetCollection.prototype.getInitialBsnAssetListSegment = function (enumerationOptions) {
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest));
    };
    CmcAssetCollection.prototype.getNextBsnAssetListSegment = function (enumerator) {
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest));
    };
    CmcAssetCollection.prototype.processBsnAssetListSegmentItems = function (assetListSegment) {
        return;
    };
    CmcAssetCollection.prototype.getBsnAssetBackendCount = function (enumerationOptions) {
        return Promise.resolve(0);
    };
    CmcAssetCollection.prototype.getBsnDuplicateNames = function (matchList) {
        var _this = this;
        var matchListSegments = utils_1.cmGetBsnNameQuerySegments(matchList);
        var getNextSegment = function (matchListSegment) {
            var nameFilterSpec = bscore_1.bscCreateBsnFilterSpecification(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, _this.nameProperty, bscore_1.BsnStringFilterOperator.IsIn, matchListSegment.map(function (item) { return item.name; })));
            var enumOptions = {
                filter: bsnconnector_1.bsnCreateFilter(nameFilterSpec),
            };
            var matchingAssetItems = [];
            return new Promise(function (resolve, reject) {
                var getNext = function (enumerator) {
                    _this.getNextBsnAssetListSegment(enumerator)
                        .then(function (listSegment) {
                        matchingAssetItems.push.apply(matchingAssetItems, _this.processBsnAssetListSegmentDuplicateNameCheck(listSegment.listItems, matchListSegment));
                        if (listSegment.enumerator.isComplete) {
                            resolve(matchingAssetItems);
                        }
                        else {
                            return getNext(listSegment.enumerator);
                        }
                    })
                        .catch(function (error) { return reject(error); });
                };
                return _this.getInitialBsnAssetListSegment(enumOptions)
                    .then(function (listSegment) {
                    matchingAssetItems.push.apply(matchingAssetItems, _this.processBsnAssetListSegmentDuplicateNameCheck(listSegment.listItems, matchListSegment));
                    if (listSegment.enumerator.isComplete) {
                        resolve(matchingAssetItems);
                    }
                    else {
                        return getNext(listSegment.enumerator);
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
        };
        return Promise.all(matchListSegments.map(getNextSegment))
            .then(function (assetItemArrays) {
            var _a;
            return (_a = []).concat.apply(_a, assetItemArrays);
        });
    };
    CmcAssetCollection.prototype.processBsnAssetListSegmentDuplicateNameCheck = function (segmentItems, matchList) {
        return [];
    };
    CmcAssetCollection.prototype.setPinnedAssetVerification = function (name) {
        var assetStatus = this._pinnedAssetMap.get(name);
        if (!lodash_1.isNil(assetStatus)) {
            assetStatus.verified = true;
        }
    };
    CmcAssetCollection.prototype.sortAssetItemNames = function (assetNames, sortFunction) {
        var _this = this;
        var assetItems = assetNames.map(function (name) { return _this.getAssetItem(name); }).sort(sortFunction);
        return assetItems.map(function (item) { return item.name; });
    };
    CmcAssetCollection.prototype.processBsnAssetListSegment = function (assetListSegment) {
        this.processBsnAssetListSegmentItems(assetListSegment);
        this._isComplete = assetListSegment.enumerator.isComplete;
        if (this._isComplete) {
            this._bsnEnumerator = null;
        }
        else {
            this._bsnEnumerator = assetListSegment.enumerator;
        }
    };
    CmcAssetCollection.prototype.resetPinnedAssetVerification = function () {
        this._pinnedAssetMap.forEach(function (status) {
            status.verified = false;
        });
    };
    CmcAssetCollection.prototype.processPinnedAssetVerification = function () {
        var _this = this;
        var unverifiedAssetNames = [];
        this._pinnedAssetMap.forEach(function (status, name) {
            if (!status.verified) {
                unverifiedAssetNames.push(name);
                var assetItem = _this._assetMap.get(name);
                if (assetItem) {
                    _this._removedAssetMap.set(name, assetItem);
                    _this._assetMap.delete(name);
                }
            }
        });
        unverifiedAssetNames.forEach(function (name) { return _this._pinnedAssetMap.delete(name); });
    };
    CmcAssetCollection.prototype.createLocatorHash = function () {
        var loc = '';
        if (this._currentAssetLocation === bscore_1.AssetLocation.Bsn && this._currentAssetScope.length > 0) {
            loc = this._currentAssetScope + '@' + loc;
        }
        var assetTypes = this.assetTypes.slice();
        if (this._enumerationOptions.folders) {
            assetTypes.push(bscore_1.AssetType.Folder);
        }
        if (this._enumerationOptions.includeLegacyAssets && assetTypes.indexOf(bscore_1.AssetType.Project) >= 0) {
            assetTypes.push(bscore_1.AssetType.ProjectBpf);
        }
        assetTypes = lodash_1.uniq(assetTypes).sort();
        loc = loc + this._currentAssetLocation + '/';
        var sep = '';
        assetTypes.forEach(function (type) {
            loc = loc + sep + type;
            sep = '+';
        });
        if (this._enumerationOptions.mediaFilters) {
            sep = '/';
            var mediaTypes = this._enumerationOptions.mediaFilters.sort();
            mediaTypes.forEach(function (type) {
                loc = loc + sep + type;
                sep = '+';
            });
        }
        if (this._currentDirectory && this._currentDirectory !== '/') {
            sep = this._currentDirectory.charAt(0) === '/' ? '' : '/';
            loc = loc + sep + this._currentDirectory;
        }
        return loc;
    };
    CmcAssetCollection.DefaultEnumerationOptions = {
        folders: false,
        includeLegacyAssets: false,
        mediaFilters: null,
        sortField: interfaces_1.AssetSortField.name,
        sortDescending: false,
        pageSize: 100,
    };
    return CmcAssetCollection;
}());
exports.CmcAssetCollection = CmcAssetCollection;


/***/ }),
/* 8 */
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
exports.cmGetBsnSession = exports.cmIsTagRuleAmbiguous = exports.cmResolveBsnTagFilterSpecification = exports.cmGetContentTagKeySpecification = exports.cmGetBsnTagValueStrings = exports.cmGetBsnTagKeys = exports.cmGetBsnPermissionEntityList = exports.cmGetBsnPermissionEntityFromObjectPermission = exports.cmGetBsnObjectPermissionFromBsnEntity = exports.cmGetDefaultClockZoneWebPageAsset = exports.cmGetDefaultPresentationWebPageAsset = exports.DefaultClockZoneWebPageName = exports.DefaultPresentationWebPageName = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var bs_device_artifacts_1 = __webpack_require__(42);
var deviceWebPageAsset_1 = __webpack_require__(23);
var htmlSiteAsset_1 = __webpack_require__(18);
var user_1 = __webpack_require__(26);
var role_1 = __webpack_require__(25);
var assetItemCache_1 = __webpack_require__(14);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
exports.DefaultPresentationWebPageName = 'Default_PresentationWebPage';
exports.DefaultClockZoneWebPageName = 'Default_PresentationBsDateTimeWidget';
function cmGetDefaultPresentationWebPageAsset() {
    return bsnconnector_1.bsnGetSession().existsDeviceWebPage(exports.DefaultPresentationWebPageName)
        .then(function (deviceWebPageExists) {
        if (deviceWebPageExists) {
            return bsnconnector_1.bsnGetSession().getDeviceWebPageEntity(exports.DefaultPresentationWebPageName)
                .then(deviceWebPageAsset_1.CmcDeviceWebPageAsset.getBsAssetDeviceWebPageItemFromBsn);
        }
        else {
            var indexFileName_1 = '_deviceWebPage.html';
            return bs_device_artifacts_1.bsDaGetStaticFileSpec(indexFileName_1)
                .then(function (fileSpec) {
                var defaultSiteSpec = {
                    siteName: exports.DefaultPresentationWebPageName,
                    siteType: bscore_1.AssetType.DeviceHtmlSite,
                    targetName: exports.DefaultPresentationWebPageName,
                    indexUploadFile: {
                        file: fsconnector_1.fsGetUploadFileSource(fileSpec), fileSpec: fileSpec,
                        targetName: indexFileName_1, destinationPath: ''
                    },
                    assetUploadFiles: [],
                };
                return cmUploadDefaultWebPage(defaultSiteSpec, 'presentation webPage');
            })
                .catch(function (error) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.standardDeviceWebPageUploadFailed, error.message);
            });
        }
    });
}
exports.cmGetDefaultPresentationWebPageAsset = cmGetDefaultPresentationWebPageAsset;
function cmGetDefaultClockZoneWebPageAsset() {
    return bsnconnector_1.bsnGetSession().existsHtmlSite(exports.DefaultClockZoneWebPageName)
        .then(function (clockWebPageExists) {
        if (clockWebPageExists) {
            return bsnconnector_1.bsnGetSession().getHtmlSiteEntity(exports.DefaultClockZoneWebPageName)
                .then(htmlSiteAsset_1.CmcHtmlSiteAsset.getBsAssetHtmlSiteItemFromBsn);
        }
        else {
            var indexFileName_2 = 'bsDateTimeWidget.html';
            return bs_device_artifacts_1.bsDaGetStaticFileSpec(indexFileName_2)
                .then(function (fileSpec) {
                var defaultSiteSpec = {
                    siteName: exports.DefaultClockZoneWebPageName,
                    siteType: bscore_1.AssetType.HtmlSite,
                    targetName: exports.DefaultClockZoneWebPageName,
                    indexUploadFile: {
                        file: fsconnector_1.fsGetUploadFileSource(fileSpec), fileSpec: fileSpec,
                        targetName: indexFileName_2, destinationPath: ''
                    },
                    assetUploadFiles: [],
                };
                return cmUploadDefaultWebPage(defaultSiteSpec, 'clock widget');
            });
        }
    });
}
exports.cmGetDefaultClockZoneWebPageAsset = cmGetDefaultClockZoneWebPageAsset;
function cmUploadDefaultWebPage(spec, description) {
    var uploadItem = bsnconnector_1.bsnCreateWebPageUploadItem(spec, 0, null);
    return uploadItem.upload()
        .then(function (uploadResult) {
        if (uploadResult.status === bscore_1.BsUploadItemStatus.Failed) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.uploadFailed, "Default " + description + " upload failed");
        }
        return bsnconnector_1.bsnGetSession().getDeviceWebPageEntity(spec.siteName);
    })
        .then(function (entity) {
        var assetItem = deviceWebPageAsset_1.CmcDeviceWebPageAsset.getBsAssetDeviceWebPageItemFromBsn(entity);
        assetItemCache_1.cmPutAssetItemToCache(assetItem);
        notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
        return assetItem;
    });
}
function cmGetBsnObjectPermissionFromBsnEntity(permissionEntity) {
    var principal = permissionEntity.principal, operationUid = permissionEntity.operationUID, isAllowed = permissionEntity.isAllowed;
    if (principal.type === bsnconnector_1.BsnPermissionPrincipalType.User) {
        return {
            type: bscore_1.BsnObjectPermissionType.User,
            login: principal.login,
            operationUid: operationUid,
            isAllowed: isAllowed,
        };
    }
    else {
        return {
            type: bscore_1.BsnObjectPermissionType.Role,
            roleName: principal.name,
            operationUid: operationUid,
            isAllowed: isAllowed,
        };
    }
}
exports.cmGetBsnObjectPermissionFromBsnEntity = cmGetBsnObjectPermissionFromBsnEntity;
function cmGetBsnPermissionEntityFromObjectPermission(objectPermission, entityId) {
    if (entityId === void 0) { entityId = null; }
    var getPermissionEntity = function (principal) { return ({
        entityId: entityId,
        operationUID: objectPermission.operationUid,
        principal: principal,
        isFixed: false,
        isInherited: false,
        isAllowed: objectPermission.isAllowed,
        creationDate: new Date(),
    }); };
    if (bscore_1.bscIsBsnObjectUserPermission(objectPermission)) {
        return user_1.cmGetValidBsUser(objectPermission.login)
            .then(function (user) { return lodash_1.isNil(user) ? null : getPermissionEntity(user.bsnUserPrincipal); });
    }
    else if (bscore_1.bscIsBsnObjectRolePermission(objectPermission)) {
        return role_1.cmGetValidBsRole(objectPermission.roleName)
            .then(function (role) { return lodash_1.isNil(role) ? null : getPermissionEntity(role.bsnRolePrincipal); });
    }
    return Promise.resolve(null);
}
exports.cmGetBsnPermissionEntityFromObjectPermission = cmGetBsnPermissionEntityFromObjectPermission;
function cmGetBsnPermissionEntityList(objectPermissions, entityId) {
    if (entityId === void 0) { entityId = null; }
    var promises = [];
    objectPermissions.forEach(function (permission) {
        promises.push(cmGetBsnPermissionEntityFromObjectPermission(permission, entityId));
    });
    return Promise.all(promises)
        .then(function (entities) { return entities.filter(function (entityOrNull) { return !lodash_1.isNil(entityOrNull); }); });
}
exports.cmGetBsnPermissionEntityList = cmGetBsnPermissionEntityList;
function cmGetBsnTagKeys(pattern) {
    return bsnconnector_1.bsnGetSession().getTagKeys(pattern);
}
exports.cmGetBsnTagKeys = cmGetBsnTagKeys;
function cmGetBsnTagValueStrings(pattern) {
    return bsnconnector_1.bsnGetSession().getTagValueStrings(pattern);
}
exports.cmGetBsnTagValueStrings = cmGetBsnTagValueStrings;
function cmGetContentTagKeySpecification() {
    var tagKeyPattern = {
        type: bscore_1.BsnTagType.Content,
        name: '*',
    };
    return bsnconnector_1.bsnGetSession().getTagKeys(tagKeyPattern);
}
exports.cmGetContentTagKeySpecification = cmGetContentTagKeySpecification;
function cmResolveBsnTagFilterSpecification(filterSpec, tagKeySpecs) {
    var getValidComponent = function (comp) {
        if (comp.type === bsnconnector_1.BsnPossibleFilterType.stringOrStringArray) {
            var key = lodash_1.isNil(tagKeySpecs) ? null : lodash_1.find(tagKeySpecs, ['name', comp.property]);
            var type = lodash_1.isNil(key) ? bscore_1.BsnFilterType.string : bscore_1.bscGetBsnFilterTypeForTagDataType(key.dataType);
            return __assign(__assign({}, comp), { type: type });
        }
        return comp;
    };
    return {
        components: filterSpec.components.map(getValidComponent),
        combineType: filterSpec.combineType,
    };
}
exports.cmResolveBsnTagFilterSpecification = cmResolveBsnTagFilterSpecification;
function cmIsTagRuleAmbiguous(tagRuleExpression) {
    var filterSpec = bsnconnector_1.bsnParseTagRuleExpression(tagRuleExpression);
    return filterSpec.components.some(function (comp) { return comp.type === bsnconnector_1.BsnPossibleFilterType.stringOrStringArray; });
}
exports.cmIsTagRuleAmbiguous = cmIsTagRuleAmbiguous;
function cmGetBsnSession() {
    return bsnconnector_1.bsnGetSession();
}
exports.cmGetBsnSession = cmGetBsnSession;


/***/ }),
/* 9 */
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
exports.CmcAsset = exports.BsTempScope = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var assetItemCache_1 = __webpack_require__(14);
var thumbnailCache_1 = __webpack_require__(95);
var assetMetadataCache_1 = __webpack_require__(70);
var utils_1 = __webpack_require__(6);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
exports.BsTempScope = '__temp__';
var CmcAsset = (function () {
    function CmcAsset(assetItem) {
        this._locatorHash = utils_1.cmCreateHashFromAssetLocator(assetItem);
        this._name = assetItem.name;
        if (assetItem.scope === exports.BsTempScope) {
            this._tempAssetItem = assetItem;
        }
        else {
            var cache = assetItemCache_1.cmGetBsAssetItemCache();
            if (!cache.hasAssetItemCacheItem(this._locatorHash)) {
                cache.setAssetItem(this._locatorHash, lodash_1.cloneDeep(assetItem));
            }
        }
    }
    Object.defineProperty(CmcAsset.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "assetItem", {
        get: function () {
            return utils_1.cmGetFilteredAssetItem(this.internalAssetItem);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "rawAssetItem", {
        get: function () { return lodash_1.cloneDeep(this.internalAssetItem); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "assetLocator", {
        get: function () {
            return utils_1.cmGetFilteredAssetLocator(this.internalAssetItem);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "assetData", {
        get: function () { return this.getAssetItemProperty('assetData'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "dirPath", {
        get: function () {
            return this.getAssetItemStringProperty('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "fullPath", {
        get: function () {
            return bscore_1.bscGetAssetFullPath(this.internalAssetItem);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "locatorKey", {
        get: function () { return this.getAssetItemStringProperty('locator'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "locator", {
        get: function () { return this.getAssetItemStringProperty('locator'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "locatorHash", {
        get: function () { return this._locatorHash; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "assetType", {
        get: function () {
            var val = this.getAssetItemProperty('assetType');
            return lodash_1.isNil(val) ? bscore_1.AssetType.Other : val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "assetLocation", {
        get: function () {
            var val = this.getAssetItemProperty('location');
            return lodash_1.isNil(val) ? bscore_1.AssetLocation.Local : val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "assetScope", {
        get: function () { return this.getAssetItemStringProperty('scope'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "mediaType", {
        get: function () {
            var mediaType = this.getAssetItemProperty('mediaType');
            return lodash_1.isNil(mediaType) ? bscore_1.MediaType.Auxiliary : mediaType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "fileSize", {
        get: function () { return this.getAssetItemNumberProperty('fileSize'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "uploadDate", {
        get: function () { return this.getAssetItemProperty('uploadDate'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "creationDate", {
        get: function () { return this.getAssetItemProperty('creationDate'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "lastModifiedDate", {
        get: function () { return this.getAssetItemProperty('lastModifiedDate'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "isTemporaryAsset", {
        get: function () { return !lodash_1.isNil(this._tempAssetItem); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "internalAssetItem", {
        get: function () {
            if (this.isTemporaryAsset) {
                return this._tempAssetItem;
            }
            var ref = assetItemCache_1.cmGetBsAssetItemCache().getAssetItemCacheItem(this._locatorHash);
            if (!lodash_1.isNil(ref)) {
                return ref.assetItem;
            }
            throw new error_1.BsCmError(error_1.BsCmErrorType.unexpectedError, "CmiAsset for " + this._name + " does not have corresponding cache item");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "networkId", {
        get: function () {
            var networkId = this.getAssetItemProperty('networkId');
            return lodash_1.isNil(networkId) ? 0 : networkId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAsset.prototype, "networkIdOrName", {
        get: function () {
            var networkId = this.getAssetItemProperty('networkId');
            return lodash_1.isNil(networkId) || networkId === 0 ? this._name : networkId;
        },
        enumerable: false,
        configurable: true
    });
    CmcAsset.prototype.getAssetThumbnail = function () {
        var _this = this;
        var assetItem = this.internalAssetItem;
        if (assetItem.location === bscore_1.AssetLocation.Bsn) {
            var url = lodash_1.isNil(assetItem.thumbUrl) ? null : assetItem.thumbUrl;
            if (!lodash_1.isNil(url)) {
                return Promise.resolve(bscore_1.bscCreateNetworkAssetThumbnail(url));
            }
            else if (assetItem.assetType === bscore_1.AssetType.Content) {
                return this.fetchAssetItemData()
                    .then(function () {
                    assetItem = _this.internalAssetItem;
                    if (!lodash_1.isNil(assetItem.thumbUrl)) {
                        return bscore_1.bscCreateNetworkAssetThumbnail(assetItem.thumbUrl);
                    }
                    return null;
                });
            }
            return Promise.resolve(null);
        }
        else {
            if (thumbnailCache_1.default.isSupported) {
                return thumbnailCache_1.default.getThumbnail(this._locatorHash)
                    .catch(function (error) { return console.log('ThumbnailCache error: ', error.message); })
                    .then(function (cachedThumbnail) {
                    if (cachedThumbnail) {
                        return cachedThumbnail;
                    }
                    return fsconnector_1.fsGetThumbnail(assetItem)
                        .then(function (createdThumbnail) {
                        if (!lodash_1.isNil(createdThumbnail)) {
                            return thumbnailCache_1.default.putThumbnail(_this._locatorHash, createdThumbnail);
                        }
                        else {
                            return null;
                        }
                    })
                        .catch(function (error) {
                        console.log('Thumbnail creation error: ', error.message);
                        return null;
                    });
                });
            }
            return fsconnector_1.fsGetThumbnail(assetItem);
        }
    };
    CmcAsset.prototype.getThumbnail = function () {
        var _this = this;
        var thumbnail = assetMetadataCache_1.cmGetAssetMetadataCache().getAssetThumbnail(this._locatorHash);
        if (!lodash_1.isNil(thumbnail)) {
            return Promise.resolve(thumbnail);
        }
        return this.getAssetThumbnail()
            .then(function (assetThumbnail) {
            if (!lodash_1.isNil(assetThumbnail)) {
                var size = lodash_1.isNil(assetThumbnail.size) ? null : assetThumbnail.size;
                var hash = lodash_1.isNil(assetThumbnail.hash) ? null : assetThumbnail.hash;
                if (assetThumbnail.kind === 'network') {
                    thumbnail = { url: assetThumbnail.url, size: size, hash: hash };
                }
                else if (typeof window !== 'undefined') {
                    var URL_1 = window.URL || window.webkitURL;
                    var blob = new Blob([assetThumbnail.data], { type: assetThumbnail.type });
                    thumbnail = { url: URL_1.createObjectURL(blob), size: size, hash: hash };
                }
                if (!_this.isTemporaryAsset) {
                    assetMetadataCache_1.cmGetAssetMetadataCache().updateAssetThumbnail(_this._locatorHash, thumbnail, _this.lastModifiedDate);
                }
            }
            else {
                thumbnail = null;
            }
            return thumbnail;
        });
    };
    CmcAsset.prototype.getFileHash = function () {
        return Promise.resolve(this.getAssetItemProperty('fileHash'));
    };
    CmcAsset.prototype.fetchAssetItemData = function () {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsGetAssetItemFromFileWithFileAndFolderCheck(this.fullPath)
                .then(function (localAssetItem) {
                if (!lodash_1.isNil(localAssetItem)) {
                    _this.updateCachedAssetItem(localAssetItem);
                }
                return _this;
            });
        }
        return Promise.resolve(this);
    };
    CmcAsset.prototype.testAssetExists = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return utils_1.testLocalFileExists(this.fullPath, this.assetType);
        }
        return Promise.resolve(false);
    };
    CmcAsset.prototype.replacePermissions = function (objectPermissions) {
        if (this.assetLocation !== bscore_1.AssetLocation.Bsn) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Permissions not supported for local assets'));
        }
        return Promise.resolve(this);
    };
    CmcAsset.prototype.setTags = function (tags) {
        var message = this.assetLocation !== bscore_1.AssetLocation.Bsn ?
            'Tags not supported for local assets' : 'Tags not supported for this BSN asset type';
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, message));
    };
    CmcAsset.prototype.deleteTags = function (tagKeys) {
        var message = this.assetLocation !== bscore_1.AssetLocation.Bsn ?
            'Tags not supported for local assets' : 'Tags not supported for this BSN asset type';
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, message));
    };
    CmcAsset.prototype.updateCachedAssetItem = function (assetItem) {
        if (this.isTemporaryAsset) {
            this._locatorHash = utils_1.cmCreateHashFromAssetLocator(assetItem);
            this._tempAssetItem = undefined;
        }
        assetItemCache_1.cmGetBsAssetItemCache().setAssetItem(this._locatorHash, assetItem);
    };
    CmcAsset.prototype.markCachedAssetItemAsDeleted = function () {
        assetItemCache_1.cmGetBsAssetItemCache().markDeletedFromSource(this._locatorHash);
    };
    CmcAsset.prototype.updateCachedAssetItemAssetData = function (assetData) {
        var updatedAssetItem = __assign(__assign({}, this.internalAssetItem), { assetData: assetData });
        assetItemCache_1.cmGetBsAssetItemCache().setAssetItem(this._locatorHash, updatedAssetItem);
    };
    CmcAsset.prototype.getAssetItemProperty = function (propName) {
        var prop = this.internalAssetItem[propName];
        return lodash_1.isNil(prop) ? null : prop;
    };
    CmcAsset.prototype.getAssetItemStringProperty = function (propName) {
        var prop = this.internalAssetItem[propName];
        return lodash_1.isNil(prop) ? '' : prop;
    };
    CmcAsset.prototype.getAssetItemNumberProperty = function (propName) {
        var prop = this.internalAssetItem[propName];
        return lodash_1.isNil(prop) ? 0 : prop;
    };
    return CmcAsset;
}());
exports.CmcAsset = CmcAsset;


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
exports.cmIsTextFeedAsset = exports.cmIsTaggedPlaylistAsset = exports.cmIsScheduleAsset = exports.cmIsPresentationAsset = exports.cmIsMediaFeedAsset = exports.cmIsMediaAsset = exports.cmIsHtmlSiteAsset = exports.cmIsFolderAsset = exports.cmIsDynamicPlaylistAsset = exports.cmIsDeviceWebPageAsset = exports.cmIsContentAsset = exports.cmIsBrightScriptAsset = exports.cmUpdateAssetItemForAssetSpecification = exports.cmUpdateAssetItemParentFolder = exports.cmGetParentFolderAssetSpecification = exports.cmGetBsAssetForLocalFile = exports.cmGetCmiAssetForLocalFile = exports.cmGetBsAssetForBsnAsset = exports.cmGetCmiAssetForBsnAsset = exports.cmGetBsAssetForAssetSpecification = exports.cmGetCmiAssetForAssetSpecification = exports.cmBsAssetExists = exports.cmAssetExists = exports.cmGetBsAssetForAssetLocator = exports.cmGetCmiAssetForAssetLocator = exports.cmGetTemporaryAsset = exports.cmGetBsAsset = exports.cmGetCmiAsset = exports.cmGetAssetUpdateTime = exports.cmHasCachedBsAssetItem = exports.cmGetBsAssetItemForLocatorHash = exports.cmGetCmiAssetForLocatorHash = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var assetItemCache_1 = __webpack_require__(14);
var asset_1 = __webpack_require__(9);
var folderAsset_1 = __webpack_require__(17);
var mediaAsset_1 = __webpack_require__(30);
var presentationAsset_1 = __webpack_require__(24);
var textFeedAsset_1 = __webpack_require__(33);
var mediaFeedAsset_1 = __webpack_require__(31);
var dynamicPlaylistAsset_1 = __webpack_require__(29);
var taggedPlaylistAsset_1 = __webpack_require__(32);
var htmlSiteAsset_1 = __webpack_require__(18);
var deviceWebPageAsset_1 = __webpack_require__(23);
var brightScriptAsset_1 = __webpack_require__(28);
var scheduleAsset_1 = __webpack_require__(46);
var error_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(6);
var isomorphic_path_1 = __webpack_require__(11);
var lodash_1 = __webpack_require__(0);
var notifyInternal_1 = __webpack_require__(4);
function cmGetCmiAssetForLocatorHash(locatorHash) {
    var ref = assetItemCache_1.cmGetBsAssetItemCache().getAssetItemCacheItem(locatorHash);
    return lodash_1.isNil(ref) ? null : cmCreateAsset(ref.assetItem);
}
exports.cmGetCmiAssetForLocatorHash = cmGetCmiAssetForLocatorHash;
function cmGetBsAssetItemForLocatorHash(locatorHash) {
    var ref = assetItemCache_1.cmGetBsAssetItemCache().getAssetItemCacheItem(locatorHash);
    return lodash_1.isNil(ref) ? null : utils_1.cmGetFilteredAssetItem(ref.assetItem);
}
exports.cmGetBsAssetItemForLocatorHash = cmGetBsAssetItemForLocatorHash;
function cmHasCachedBsAssetItem(locatorHash) {
    return assetItemCache_1.cmGetBsAssetItemCache().hasAssetItemCacheItem(locatorHash);
}
exports.cmHasCachedBsAssetItem = cmHasCachedBsAssetItem;
function cmGetAssetUpdateTime(locatorHash) {
    var ref = assetItemCache_1.cmGetBsAssetItemCache().getAssetItemCacheItem(locatorHash);
    return lodash_1.isNil(ref) ? null : ref.updateTime;
}
exports.cmGetAssetUpdateTime = cmGetAssetUpdateTime;
function cmGetCmiAsset(assetItem) {
    return cmCreateAsset(assetItem);
}
exports.cmGetCmiAsset = cmGetCmiAsset;
exports.cmGetBsAsset = cmGetCmiAsset;
function cmGetTemporaryAsset(assetSpec) {
    var tempAssetLocator = __assign(__assign({}, assetSpec), { networkId: 0, scope: asset_1.BsTempScope });
    return cmCreateAsset(bscore_1.bscAssetItemFromAssetLocator(tempAssetLocator));
}
exports.cmGetTemporaryAsset = cmGetTemporaryAsset;
function cmGetCmiAssetForAssetLocator(assetLocator) {
    if (assetLocator.location === bscore_1.AssetLocation.Bsn) {
        return cmGetCmiAssetForBsnAsset(assetLocator);
    }
    else if (assetLocator.location === bscore_1.AssetLocation.Local) {
        return Promise.resolve(cmGetCmiAssetForLocalFile(isomorphic_path_1.default.join(assetLocator.path, assetLocator.name)));
    }
    return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
}
exports.cmGetCmiAssetForAssetLocator = cmGetCmiAssetForAssetLocator;
exports.cmGetBsAssetForAssetLocator = cmGetCmiAssetForAssetLocator;
function cmAssetExists(assetSpec) {
    if (assetSpec.location === bscore_1.AssetLocation.Bsn) {
        var asset = cmGetTemporaryAsset(assetSpec);
        return asset ? asset.testAssetExists() : Promise.resolve(false);
    }
    else if (assetSpec.location === bscore_1.AssetLocation.Local) {
        return utils_1.testLocalFileExists(isomorphic_path_1.default.join(assetSpec.path, assetSpec.name), assetSpec.assetType);
    }
    return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
}
exports.cmAssetExists = cmAssetExists;
exports.cmBsAssetExists = cmAssetExists;
function cmGetCmiAssetForAssetSpecification(assetSpec, forceUpdate) {
    if (forceUpdate === void 0) { forceUpdate = true; }
    if (!forceUpdate) {
        var assetItemRef = assetItemCache_1.cmGetCachedAssetItemForAssetSpecification(assetSpec);
        if (!lodash_1.isNil(assetItemRef)) {
            return Promise.resolve(cmCreateAsset(assetItemRef.assetItem));
        }
    }
    if (assetSpec.location === bscore_1.AssetLocation.Bsn) {
        var asset = cmGetTemporaryAsset(assetSpec);
        if (asset) {
            return asset.fetchAssetItemData()
                .catch(function (error) {
                if (error instanceof bsnconnector_1.BsnError && error.response && error.response.status === 404) {
                    return null;
                }
                else {
                    throw error;
                }
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'Invalid AssetLocator'));
    }
    else if (assetSpec.location === bscore_1.AssetLocation.Local) {
        return fsconnector_1.fsGetAssetItemFromFileWithFileAndFolderCheck(isomorphic_path_1.default.join(assetSpec.path, assetSpec.name))
            .then(function (assetItem) {
            return !lodash_1.isNil(assetItem) && assetItem.assetType === assetSpec.assetType ? cmCreateAsset(assetItem) : null;
        });
    }
    return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
}
exports.cmGetCmiAssetForAssetSpecification = cmGetCmiAssetForAssetSpecification;
exports.cmGetBsAssetForAssetSpecification = cmGetCmiAssetForAssetSpecification;
function cmGetCmiAssetForBsnAsset(assetLocator, forceUpdate) {
    if (forceUpdate === void 0) { forceUpdate = true; }
    var asset = cmGetCmiAsset(bscore_1.bscAssetItemFromAssetLocator(assetLocator));
    if (!lodash_1.isNil(asset)) {
        if (forceUpdate) {
            return asset.fetchAssetItemData()
                .catch(function (error) {
                if (error instanceof bsnconnector_1.BsnError && error.response && error.response.status === 404) {
                    return null;
                }
                else {
                    throw error;
                }
            });
        }
        return Promise.resolve(asset);
    }
    return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'Invalid AssetLocator'));
}
exports.cmGetCmiAssetForBsnAsset = cmGetCmiAssetForBsnAsset;
exports.cmGetBsAssetForBsnAsset = cmGetCmiAssetForBsnAsset;
function cmGetCmiAssetForLocalFile(fullPath) {
    var assetItem = fsconnector_1.fsGetAssetItemFromFile(fullPath);
    return lodash_1.isNil(assetItem) ? null : cmGetCmiAsset(assetItem);
}
exports.cmGetCmiAssetForLocalFile = cmGetCmiAssetForLocalFile;
exports.cmGetBsAssetForLocalFile = cmGetCmiAssetForLocalFile;
function cmGetParentFolderAssetSpecification(assetLocator) {
    if (lodash_1.isString(assetLocator.path) && assetLocator.path.length > 0) {
        var pathParts = assetLocator.location === bscore_1.AssetLocation.Local ?
            isomorphic_path_1.default.parse(assetLocator.path) : isomorphic_path_1.default.posix.parse(assetLocator.path);
        var isAtRoot = pathParts.root === pathParts.dir && pathParts.base.length === 0;
        if (!isAtRoot) {
            var pathSep = assetLocator.location === bscore_1.AssetLocation.Local ? isomorphic_path_1.default.sep : isomorphic_path_1.default.posix.sep;
            var newPath = pathParts.dir.charAt(pathParts.dir.length - 1) === pathSep ?
                pathParts.dir : pathParts.dir + pathSep;
            return {
                name: pathParts.base,
                path: newPath,
                location: assetLocator.location,
                assetType: bscore_1.AssetType.Folder,
            };
        }
    }
    return null;
}
exports.cmGetParentFolderAssetSpecification = cmGetParentFolderAssetSpecification;
function cmUpdateAssetItemParentFolder(assetItem) {
    var parentAssetSpec = cmGetParentFolderAssetSpecification(assetItem);
    if (!lodash_1.isNil(parentAssetSpec)) {
        return cmUpdateAssetItemForAssetSpecification(parentAssetSpec)
            .then(function () { return assetItem; });
    }
    return Promise.resolve(assetItem);
}
exports.cmUpdateAssetItemParentFolder = cmUpdateAssetItemParentFolder;
function cmUpdateAssetItemForAssetSpecification(assetSpec) {
    return cmGetCmiAssetForAssetSpecification(assetSpec)
        .then(function (asset) {
        if (!lodash_1.isNil(asset)) {
            notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssets, { assetItems: [asset.assetItem] });
        }
    });
}
exports.cmUpdateAssetItemForAssetSpecification = cmUpdateAssetItemForAssetSpecification;
function cmCreateAsset(assetItem) {
    if (assetItem) {
        switch (assetItem.assetType) {
            case bscore_1.AssetType.Folder:
                return new folderAsset_1.CmcFolderAsset(assetItem);
            case bscore_1.AssetType.Content:
                return new mediaAsset_1.CmcMediaAsset(assetItem);
            case bscore_1.AssetType.Project:
            case bscore_1.AssetType.ProjectBpf:
                return new presentationAsset_1.CmcPresentationAsset(assetItem);
            case bscore_1.AssetType.BSNDataFeed:
                return new textFeedAsset_1.CmcTextFeedAsset(assetItem);
            case bscore_1.AssetType.BSNMediaFeed:
                return new mediaFeedAsset_1.CmcMediaFeedAsset(assetItem);
            case bscore_1.AssetType.BSNDynamicPlaylist:
                return new dynamicPlaylistAsset_1.CmcDynamicPlaylistAsset(assetItem);
            case bscore_1.AssetType.BSNTaggedPlaylist:
                return new taggedPlaylistAsset_1.CmcTaggedPlaylistAsset(assetItem);
            case bscore_1.AssetType.HtmlSite:
                return new htmlSiteAsset_1.CmcHtmlSiteAsset(assetItem);
            case bscore_1.AssetType.DeviceHtmlSite:
                return new deviceWebPageAsset_1.CmcDeviceWebPageAsset(assetItem);
            case bscore_1.AssetType.BrightScript:
                return new brightScriptAsset_1.CmcBrightScriptAsset(assetItem);
            case bscore_1.AssetType.Schedule:
                return new scheduleAsset_1.CmcScheduleAsset(assetItem);
        }
    }
    return null;
}
function cmIsBrightScriptAsset(obj) {
    return lodash_1.isObject(obj) && obj instanceof brightScriptAsset_1.CmcBrightScriptAsset;
}
exports.cmIsBrightScriptAsset = cmIsBrightScriptAsset;
function cmIsContentAsset(obj) {
    return lodash_1.isObject(obj)
        && (obj instanceof folderAsset_1.CmcFolderAsset || obj instanceof mediaAsset_1.CmcMediaAsset);
}
exports.cmIsContentAsset = cmIsContentAsset;
function cmIsDeviceWebPageAsset(obj) {
    return lodash_1.isObject(obj) && obj instanceof deviceWebPageAsset_1.CmcDeviceWebPageAsset;
}
exports.cmIsDeviceWebPageAsset = cmIsDeviceWebPageAsset;
function cmIsDynamicPlaylistAsset(obj) {
    return lodash_1.isObject(obj) && obj instanceof dynamicPlaylistAsset_1.CmcDynamicPlaylistAsset;
}
exports.cmIsDynamicPlaylistAsset = cmIsDynamicPlaylistAsset;
function cmIsFolderAsset(obj) {
    return lodash_1.isObject(obj) && obj instanceof folderAsset_1.CmcFolderAsset;
}
exports.cmIsFolderAsset = cmIsFolderAsset;
function cmIsHtmlSiteAsset(obj) {
    return lodash_1.isObject(obj) && obj instanceof htmlSiteAsset_1.CmcHtmlSiteAsset;
}
exports.cmIsHtmlSiteAsset = cmIsHtmlSiteAsset;
function cmIsMediaAsset(obj) {
    return lodash_1.isObject(obj) && obj instanceof mediaAsset_1.CmcMediaAsset;
}
exports.cmIsMediaAsset = cmIsMediaAsset;
function cmIsMediaFeedAsset(obj) {
    return lodash_1.isObject(obj) && obj instanceof mediaFeedAsset_1.CmcMediaFeedAsset;
}
exports.cmIsMediaFeedAsset = cmIsMediaFeedAsset;
function cmIsPresentationAsset(obj) {
    return lodash_1.isObject(obj) && obj instanceof presentationAsset_1.CmcPresentationAsset;
}
exports.cmIsPresentationAsset = cmIsPresentationAsset;
function cmIsScheduleAsset(obj) {
    return lodash_1.isObject(obj) && obj instanceof scheduleAsset_1.CmcScheduleAsset;
}
exports.cmIsScheduleAsset = cmIsScheduleAsset;
function cmIsTaggedPlaylistAsset(obj) {
    return lodash_1.isObject(obj) && obj instanceof taggedPlaylistAsset_1.CmcTaggedPlaylistAsset;
}
exports.cmIsTaggedPlaylistAsset = cmIsTaggedPlaylistAsset;
function cmIsTextFeedAsset(obj) {
    return lodash_1.isObject(obj) && obj instanceof textFeedAsset_1.CmcTextFeedAsset;
}
exports.cmIsTextFeedAsset = cmIsTextFeedAsset;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-path");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cmIsTextFeedAssetCollection = exports.cmIsTaggedPlaylistAssetCollection = exports.cmIsScheduleAssetCollection = exports.cmIsPresentationAssetCollection = exports.cmIsMediaFeedAssetCollection = exports.cmIsMediaAssetCollection = exports.cmIsHtmlSiteAssetCollection = exports.cmIsDynamicPlaylistAssetCollection = exports.cmIsDeviceWebPageAssetCollection = exports.cmIsBrightScriptAssetCollection = exports.cmRemoveAssetCollectionsForLocationAndScope = exports.cmGetBsAssetCollectionByLocator = exports.cmGetCmiAssetCollectionByLocator = exports.cmHasBsAssetCollectionForLocator = exports.cmHasAssetCollectionForLocator = exports.cmUnpinAssets = exports.cmPinAssets = exports.cmGetBsAssetCollection = exports.cmGetCmiAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var assetCollection_1 = __webpack_require__(7);
var mediaAssetCollection_1 = __webpack_require__(52);
var presentationAssetCollection_1 = __webpack_require__(55);
var textFeedAssetCollection_1 = __webpack_require__(58);
var mediaFeedAssetCollection_1 = __webpack_require__(53);
var dynamicPlaylistAssetCollection_1 = __webpack_require__(49);
var taggedPlaylistAssetCollection_1 = __webpack_require__(57);
var htmlSiteAssetCollection_1 = __webpack_require__(51);
var deviceWebPageAssetCollection_1 = __webpack_require__(48);
var brightScriptAssetCollection_1 = __webpack_require__(47);
var scheduleAssetCollection_1 = __webpack_require__(56);
var multiAssetTypeCollection_1 = __webpack_require__(54);
var folderAssetCollection_1 = __webpack_require__(50);
var error_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(6);
var notifyInternal_1 = __webpack_require__(4);
var assetCollectionCache_1 = __webpack_require__(92);
var assetItemCache_1 = __webpack_require__(14);
var lodash_1 = __webpack_require__(0);
function cmGetCmiAssetCollection(location, assetType, directoryPath, enumerationOptions, pinnedAssetItems) {
    if (location === bscore_1.AssetLocation.Bsn && !bsnconnector_1.bsnGetSession().isNetworkActive) {
        throw new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'cmGetBsAssetCollection: cannot create a BSN based collection unless a BSN network is active');
    }
    var cache = assetCollectionCache_1.cmGetAssetCollectionCache();
    var newCollection;
    if (Array.isArray(assetType) && utils_1.cmIsMultipleAssetTypeArray(assetType)) {
        newCollection = new multiAssetTypeCollection_1.CmcMultiAssetTypeCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
    }
    else {
        var primaryAssetType = Array.isArray(assetType) ? assetType[0] : assetType;
        switch (primaryAssetType) {
            case bscore_1.AssetType.Content:
                newCollection = new mediaAssetCollection_1.CmcMediaAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
                break;
            case bscore_1.AssetType.Folder:
                newCollection = new folderAssetCollection_1.CmcFolderAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
                break;
            case bscore_1.AssetType.Project:
            case bscore_1.AssetType.ProjectBpf:
                newCollection = new presentationAssetCollection_1.CmcPresentationAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
                break;
            case bscore_1.AssetType.BSNDataFeed:
                newCollection = new textFeedAssetCollection_1.CmcTextFeedAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
                break;
            case bscore_1.AssetType.BSNMediaFeed:
                newCollection = new mediaFeedAssetCollection_1.CmcMediaFeedAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
                break;
            case bscore_1.AssetType.BSNDynamicPlaylist:
                newCollection = new dynamicPlaylistAssetCollection_1.CmcDynamicPlaylistAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
                break;
            case bscore_1.AssetType.BSNTaggedPlaylist:
                newCollection = new taggedPlaylistAssetCollection_1.CmcTaggedPlaylistAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
                break;
            case bscore_1.AssetType.HtmlSite:
                newCollection = new htmlSiteAssetCollection_1.CmcHtmlSiteAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
                break;
            case bscore_1.AssetType.DeviceHtmlSite:
                newCollection = new deviceWebPageAssetCollection_1.CmcDeviceWebPageAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
                break;
            case bscore_1.AssetType.BrightScript:
                newCollection = new brightScriptAssetCollection_1.CmcBrightScriptAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
                break;
            case bscore_1.AssetType.Schedule:
                newCollection = new scheduleAssetCollection_1.CmcScheduleAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
                break;
            default:
                newCollection = new assetCollection_1.CmcAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions);
        }
    }
    var cachedCollection = cache.getCollection(newCollection.locatorHash);
    if (cachedCollection) {
        if (enumerationOptions && !lodash_1.isNil(enumerationOptions.sortField)) {
            var sortDescending = lodash_1.isNil(enumerationOptions.sortDescending) ? false : enumerationOptions.sortDescending;
            cachedCollection.setSortOptions(enumerationOptions.sortField, sortDescending);
        }
        return cachedCollection;
    }
    cache.putCollection(newCollection);
    return newCollection;
}
exports.cmGetCmiAssetCollection = cmGetCmiAssetCollection;
exports.cmGetBsAssetCollection = cmGetCmiAssetCollection;
function cmPinAssets(assetLocators) {
    var cache = assetCollectionCache_1.cmGetAssetCollectionCache();
    var assetItems = [];
    assetLocators.forEach(function (assetLocator) {
        var assetItem = bscore_1.bscIsAssetItem(assetLocator) ? assetLocator : bscore_1.bscAssetItemFromAssetLocator(assetLocator);
        if (!cache.hasCollectionsForAssetItem(assetItem)) {
            exports.cmGetBsAssetCollection(assetItem.location, assetItem.assetType, assetItem.path);
        }
        assetItems.push(assetItem);
    });
    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.pinAssets, { assetItems: assetItems });
}
exports.cmPinAssets = cmPinAssets;
function cmUnpinAssets(assetLocators) {
    var assetItems = [];
    assetLocators.forEach(function (assetLocator) {
        var assetItem = bscore_1.bscIsAssetItem(assetLocator) ? assetLocator : bscore_1.bscAssetItemFromAssetLocator(assetLocator);
        assetItems.push(assetItem);
    });
    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.unpinAssets, { assetItems: assetItems });
}
exports.cmUnpinAssets = cmUnpinAssets;
function cmHasAssetCollectionForLocator(locator) {
    return assetCollectionCache_1.cmGetAssetCollectionCache().hasCollection(locator);
}
exports.cmHasAssetCollectionForLocator = cmHasAssetCollectionForLocator;
exports.cmHasBsAssetCollectionForLocator = cmHasAssetCollectionForLocator;
function cmGetCmiAssetCollectionByLocator(locator) {
    var cachedCollection = assetCollectionCache_1.cmGetAssetCollectionCache().getCollection(locator);
    return cachedCollection ? cachedCollection : null;
}
exports.cmGetCmiAssetCollectionByLocator = cmGetCmiAssetCollectionByLocator;
exports.cmGetBsAssetCollectionByLocator = cmGetCmiAssetCollectionByLocator;
function cmRemoveAssetCollectionsForLocationAndScope(location, scope) {
    var isCollectionInScope = function (collection) {
        return collection.currentAssetLocation === location && collection.currentAssetScope === scope;
    };
    var collectionCache = assetCollectionCache_1.cmGetAssetCollectionCache();
    var collectionLocatorsToRemove = collectionCache.getLocatorListForMatchingAssetCollections(isCollectionInScope);
    if (collectionLocatorsToRemove.length > 0) {
        collectionLocatorsToRemove.forEach(function (locator) {
            var collection = collectionCache.getCollection(locator);
            if (!lodash_1.isNil(collection)) {
                collection.clear();
            }
            collectionCache.removeCollection(locator);
        });
    }
    assetItemCache_1.cmRemoveCachedAssetItemsForLocationAndScope(location, scope);
}
exports.cmRemoveAssetCollectionsForLocationAndScope = cmRemoveAssetCollectionsForLocationAndScope;
function cmIsBrightScriptAssetCollection(obj) {
    return lodash_1.isObject(obj) && obj instanceof brightScriptAssetCollection_1.CmcBrightScriptAssetCollection;
}
exports.cmIsBrightScriptAssetCollection = cmIsBrightScriptAssetCollection;
function cmIsDeviceWebPageAssetCollection(obj) {
    return lodash_1.isObject(obj) && obj instanceof deviceWebPageAssetCollection_1.CmcDeviceWebPageAssetCollection;
}
exports.cmIsDeviceWebPageAssetCollection = cmIsDeviceWebPageAssetCollection;
function cmIsDynamicPlaylistAssetCollection(obj) {
    return lodash_1.isObject(obj) && obj instanceof dynamicPlaylistAssetCollection_1.CmcDynamicPlaylistAssetCollection;
}
exports.cmIsDynamicPlaylistAssetCollection = cmIsDynamicPlaylistAssetCollection;
function cmIsHtmlSiteAssetCollection(obj) {
    return lodash_1.isObject(obj) && obj instanceof htmlSiteAssetCollection_1.CmcHtmlSiteAssetCollection;
}
exports.cmIsHtmlSiteAssetCollection = cmIsHtmlSiteAssetCollection;
function cmIsMediaAssetCollection(obj) {
    return lodash_1.isObject(obj) && obj instanceof mediaAssetCollection_1.CmcMediaAssetCollection;
}
exports.cmIsMediaAssetCollection = cmIsMediaAssetCollection;
function cmIsMediaFeedAssetCollection(obj) {
    return lodash_1.isObject(obj) && obj instanceof mediaFeedAssetCollection_1.CmcMediaFeedAssetCollection;
}
exports.cmIsMediaFeedAssetCollection = cmIsMediaFeedAssetCollection;
function cmIsPresentationAssetCollection(obj) {
    return lodash_1.isObject(obj) && obj instanceof presentationAssetCollection_1.CmcPresentationAssetCollection;
}
exports.cmIsPresentationAssetCollection = cmIsPresentationAssetCollection;
function cmIsScheduleAssetCollection(obj) {
    return lodash_1.isObject(obj) && obj instanceof scheduleAssetCollection_1.CmcScheduleAssetCollection;
}
exports.cmIsScheduleAssetCollection = cmIsScheduleAssetCollection;
function cmIsTaggedPlaylistAssetCollection(obj) {
    return lodash_1.isObject(obj) && obj instanceof taggedPlaylistAssetCollection_1.CmcTaggedPlaylistAssetCollection;
}
exports.cmIsTaggedPlaylistAssetCollection = cmIsTaggedPlaylistAssetCollection;
function cmIsTextFeedAssetCollection(obj) {
    return lodash_1.isObject(obj) && obj instanceof textFeedAssetCollection_1.CmcTextFeedAssetCollection;
}
exports.cmIsTextFeedAssetCollection = cmIsTextFeedAssetCollection;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetSortField = void 0;
var AssetSortField;
(function (AssetSortField) {
    AssetSortField["name"] = "name";
    AssetSortField["mediaType"] = "mediaType";
    AssetSortField["assetType"] = "assetType";
    AssetSortField["fileSize"] = "fileSize";
    AssetSortField["uploadDate"] = "uploadDate";
    AssetSortField["lastModifiedDate"] = "lastModifiedDate";
    AssetSortField["creationDate"] = "creationDate";
})(AssetSortField = exports.AssetSortField || (exports.AssetSortField = {}));


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
exports.CmcAssetItemCache = exports.cmRemoveCachedAssetItems = exports.cmGetCachedAssetItemForAssetSpecification = exports.cmRemoveCachedAssetItemsForLocationAndScope = exports.cmPutAssetItemToCache = exports.cmGetBsAssetItemCache = void 0;
var bscore_1 = __webpack_require__(2);
var notifyInternal_1 = __webpack_require__(4);
var notifyExternal_1 = __webpack_require__(20);
var utils_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(0);
var util_1 = __webpack_require__(69);
var assetItemCache;
function cmGetBsAssetItemCache() {
    if (!assetItemCache) {
        assetItemCache = new CmcAssetItemCache();
    }
    return assetItemCache;
}
exports.cmGetBsAssetItemCache = cmGetBsAssetItemCache;
function cmPutAssetItemToCache(assetItem) {
    var locatorHash = utils_1.cmCreateHashFromAssetLocator(assetItem);
    cmGetBsAssetItemCache().setAssetItem(locatorHash, assetItem);
}
exports.cmPutAssetItemToCache = cmPutAssetItemToCache;
function cmRemoveCachedAssetItemsForLocationAndScope(location, scope) {
    var isAssetInScope = function (assetItem) {
        return assetItem.location === location && assetItem.scope === scope;
    };
    cmRemoveCachedAssetItems(cmGetBsAssetItemCache().getLocatorHashListForMatchingAssetItems(isAssetInScope));
}
exports.cmRemoveCachedAssetItemsForLocationAndScope = cmRemoveCachedAssetItemsForLocationAndScope;
function cmGetCachedAssetItemForAssetSpecification(assetSpec) {
    var currentScope = utils_1.cmGetCurrentAssetScopeForLocation(assetSpec.location);
    return cmGetBsAssetItemCache().getAssetItemReferenceForAssetSpecification(assetSpec, currentScope);
}
exports.cmGetCachedAssetItemForAssetSpecification = cmGetCachedAssetItemForAssetSpecification;
function cmRemoveCachedAssetItems(locatorList) {
    if (locatorList.length > 0) {
        var cache_1 = cmGetBsAssetItemCache();
        var removedAssetCollection_1 = 'removed_assets';
        var notifier = notifyExternal_1.cmGetAssetNotifier();
        notifier.startBatch(removedAssetCollection_1);
        locatorList.forEach(function (locatorHash) { return cache_1.removeAssetItem(locatorHash, removedAssetCollection_1); });
        notifier.stopBatchAndSend(removedAssetCollection_1);
    }
}
exports.cmRemoveCachedAssetItems = cmRemoveCachedAssetItems;
var AssetLocatorProps = [
    'name', 'path', 'networkId', 'location', 'assetType', 'scope',
];
var BaseAssetItemProps = [
    'mediaType', 'fileSize', 'fileHash', 'fileUrl', 'thumbUrl',
    'creationDate', 'lastModifiedDate', 'uploadDate', 'probeData',
    'hasSubFolders', 'hasFiles', 'assetUsage', 'tags', 'permissions', 'childAssetType',
];
var CmcAssetItemCache = (function () {
    function CmcAssetItemCache() {
        this._assetItemCacheMap = new Map();
        notifyInternal_1.cmGetAssetCollectionNotifier().subscribe(this);
    }
    Object.defineProperty(CmcAssetItemCache.prototype, "size", {
        get: function () {
            return this._assetItemCacheMap.size;
        },
        enumerable: false,
        configurable: true
    });
    CmcAssetItemCache.prototype.clear = function () {
        this._assetItemCacheMap.clear();
    };
    CmcAssetItemCache.prototype.hasAssetItemCacheItem = function (locatorHash) {
        return this._assetItemCacheMap.has(locatorHash);
    };
    CmcAssetItemCache.prototype.getAssetItemCacheItem = function (locatorHash) {
        var item = this._assetItemCacheMap.get(locatorHash);
        return lodash_1.isNil(item) ? null : item;
    };
    CmcAssetItemCache.prototype.setAssetItem = function (locatorHash, assetItem, collectionLocatorHash) {
        var existingCacheItem = this._assetItemCacheMap.get(locatorHash);
        var isNewItem = lodash_1.isNil(existingCacheItem);
        var shouldUpdate = function (newAssetItem) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            if (!isNewItem && !lodash_1.isNil(existingCacheItem)) {
                var existingItem = existingCacheItem.assetItem;
                if (!utils_1.cmArePartialObjectsEqual(existingItem, newAssetItem, AssetLocatorProps)) {
                    return true;
                }
                if (newAssetItem.location === bscore_1.AssetLocation.Bsn) {
                    var existingExtData = null;
                    var newExtData = null;
                    switch (newAssetItem.assetType) {
                        case bscore_1.AssetType.Project:
                            existingExtData = (_a = existingItem.assetData) === null || _a === void 0 ? void 0 : _a.files;
                            newExtData = (_b = newAssetItem.assetData) === null || _b === void 0 ? void 0 : _b.files;
                            break;
                        case bscore_1.AssetType.HtmlSite:
                        case bscore_1.AssetType.DeviceHtmlSite:
                            existingExtData = (_c = existingItem.assetData) === null || _c === void 0 ? void 0 : _c.assets;
                            newExtData = (_d = newAssetItem.assetData) === null || _d === void 0 ? void 0 : _d.assets;
                            break;
                        case bscore_1.AssetType.BSNDynamicPlaylist:
                            existingExtData = (_e = existingItem.assetData) === null || _e === void 0 ? void 0 : _e.content;
                            newExtData = (_f = newAssetItem.assetData) === null || _f === void 0 ? void 0 : _f.content;
                            break;
                        case bscore_1.AssetType.BSNMediaFeed:
                            existingExtData = (_g = existingItem.assetData) === null || _g === void 0 ? void 0 : _g.content;
                            newExtData = (_h = newAssetItem.assetData) === null || _h === void 0 ? void 0 : _h.content;
                            break;
                        case bscore_1.AssetType.BSNTaggedPlaylist:
                            existingExtData = (_j = existingItem.assetData) === null || _j === void 0 ? void 0 : _j.content;
                            newExtData = (_k = newAssetItem.assetData) === null || _k === void 0 ? void 0 : _k.content;
                            break;
                        case bscore_1.AssetType.BSNDataFeed:
                            existingExtData = (_l = existingItem.assetData) === null || _l === void 0 ? void 0 : _l.items;
                            newExtData = (_m = newAssetItem.assetData) === null || _m === void 0 ? void 0 : _m.items;
                            break;
                    }
                    if (lodash_1.isNil(existingExtData) && !lodash_1.isNil(newExtData)) {
                        return true;
                    }
                }
                return !utils_1.cmIsObjectAEqualOrMoreComplete(existingItem, newAssetItem, BaseAssetItemProps);
            }
            return true;
        };
        if (shouldUpdate(assetItem)) {
            var updateTime = new Date();
            this._assetItemCacheMap.set(locatorHash, { assetItem: assetItem, updateTime: updateTime, deletedFromSource: false });
            var notificationType = isNewItem ? notifyExternal_1.CmeAssetNotificationType.addAssets : notifyExternal_1.CmeAssetNotificationType.updateAssets;
            notifyExternal_1.cmGetAssetNotifier().notify(notificationType, [{ locatorHash: locatorHash, updateTime: updateTime }], collectionLocatorHash);
        }
    };
    CmcAssetItemCache.prototype.removeAssetItem = function (locatorHash, collectionLocatorHash) {
        this._assetItemCacheMap.delete(locatorHash);
        notifyExternal_1.cmGetAssetNotifier().notify(notifyExternal_1.CmeAssetNotificationType.removeAssets, [locatorHash], collectionLocatorHash);
    };
    CmcAssetItemCache.prototype.getLocatorHashListForMatchingAssetItems = function (testAssetItem) {
        var locatorList = [];
        this._assetItemCacheMap.forEach(function (ref, locatorHash) {
            if (testAssetItem(ref.assetItem)) {
                locatorList.push(locatorHash);
            }
        });
        return locatorList;
    };
    CmcAssetItemCache.prototype.getAssetItemReferenceForAssetSpecification = function (assetSpec, scope) {
        var _this = this;
        var assetSpecPath = utils_1.cmNormalizeBsnPathString(assetSpec.path);
        var assetItemMatches = function (key) {
            var _a;
            var assetItem = (_a = _this.getAssetItemCacheItem(key)) === null || _a === void 0 ? void 0 : _a.assetItem;
            return !lodash_1.isNil(assetItem)
                && assetItem.assetType === assetSpec.assetType
                && assetItem.location === assetSpec.location
                && assetItem.path === assetSpecPath
                && assetItem.name === assetSpec.name
                && (lodash_1.isNil(scope) || assetItem.scope === scope);
        };
        var locatorHashList = Array.from(this._assetItemCacheMap.keys());
        var locatorHash = lodash_1.find(locatorHashList, assetItemMatches);
        return lodash_1.isNil(locatorHash) ? null : this.getAssetItemCacheItem(locatorHash);
    };
    CmcAssetItemCache.prototype.assetItemHasCompleteAssetData = function (locatorHash) {
        var ref = this._assetItemCacheMap.get(locatorHash);
        if (!lodash_1.isNil(ref)) {
            if (ref.assetItem.locator === bscore_1.AssetLocation.Bsn) {
                switch (ref.assetItem.assetType) {
                    case bscore_1.AssetType.Project:
                        return !lodash_1.isNil(ref.assetItem.assetData.files);
                    case bscore_1.AssetType.HtmlSite:
                    case bscore_1.AssetType.DeviceHtmlSite:
                        return !lodash_1.isNil(ref.assetItem.assetData.assets);
                    case bscore_1.AssetType.BSNDataFeed:
                        return !lodash_1.isNil(ref.assetItem.assetData.items);
                    case bscore_1.AssetType.BSNDynamicPlaylist:
                        return !lodash_1.isNil(ref.assetItem.assetData.content);
                    case bscore_1.AssetType.BSNMediaFeed:
                        return !lodash_1.isNil(ref.assetItem.assetData.content);
                    case bscore_1.AssetType.BSNTaggedPlaylist:
                        return !lodash_1.isNil(ref.assetItem.assetData.content);
                }
            }
            return true;
        }
        return false;
    };
    CmcAssetItemCache.prototype.isDeletedFromSource = function (locatorHash) {
        var ref = this.getAssetItemCacheItem(locatorHash);
        return !lodash_1.isNil(ref) && ref.deletedFromSource;
    };
    CmcAssetItemCache.prototype.markDeletedFromSource = function (locatorHash) {
        var ref = this.getAssetItemCacheItem(locatorHash);
        if (!lodash_1.isNil(ref)) {
            ref.updateTime = new Date();
            ref.deletedFromSource = true;
            notifyExternal_1.cmGetAssetNotifier().notify(notifyExternal_1.CmeAssetNotificationType.removeAssets, [locatorHash]);
        }
    };
    CmcAssetItemCache.prototype.notify = function (notification) {
        var _this = this;
        if (notifyInternal_1.cmIsAssetUsageComponentNotification(notification)) {
            var usageDataObject_1 = notification.usageComponentAssetLocator.assetType === bscore_1.AssetType.Project ?
                utils_1.cmGetPresentationReferenceFromAssetLocator(notification.usageComponentAssetLocator) :
                utils_1.cmGetDataFeedReferenceFromAssetLocator(notification.usageComponentAssetLocator);
            var usageDataName_1;
            switch (notification.usageComponentAssetLocator.assetType) {
                case bscore_1.AssetType.Project:
                    usageDataName_1 = 'presentations';
                    break;
                case bscore_1.AssetType.BSNDynamicPlaylist:
                    usageDataName_1 = 'dynamicPlaylists';
                    break;
                case bscore_1.AssetType.BSNMediaFeed:
                    usageDataName_1 = 'liveMediaFeeds';
                    break;
            }
            var updateTime_1 = new Date();
            var assetUpdateRefs = notification.assetLocators.map(function (assetLocator) {
                var locatorHash = utils_1.cmCreateHashFromAssetLocator(assetLocator);
                return { locatorHash: locatorHash, updateTime: updateTime_1 };
            });
            assetUpdateRefs.forEach(function (assetRef) {
                var _a;
                var assetItemRef = _this.getAssetItemCacheItem(assetRef.locatorHash);
                if (!lodash_1.isNil(assetItemRef)) {
                    var assetItem = assetItemRef.assetItem;
                    assetItemRef.updateTime = updateTime_1;
                    if (utils_1.cmAssetTypeCanHaveBsnUsageData(assetItem.assetType)) {
                        if (notification.kind === notifyInternal_1.AssetCollectionNotificationType.addAssetUsageComponent) {
                            if (lodash_1.isNil(assetItem.assetUsage)) {
                                assetItemRef.assetItem = __assign(__assign({}, assetItem), { assetUsage: (_a = {}, _a[usageDataName_1] = [usageDataObject_1], _a) });
                            }
                            else if (lodash_1.isNil(assetItem.assetUsage[usageDataName_1])) {
                                assetItem.assetUsage[usageDataName_1] = [usageDataObject_1];
                            }
                            else if (lodash_1.isNil(lodash_1.find(assetItem.assetUsage[usageDataName_1], ['id', usageDataObject_1.id]))) {
                                assetItem.assetUsage[usageDataName_1].push(usageDataObject_1);
                            }
                        }
                        else if (!lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage[usageDataName_1])) {
                            lodash_1.remove(assetItem.assetUsage[usageDataName_1], function (ref) { return ref.id === usageDataObject_1.id; });
                        }
                    }
                }
            });
            if (assetUpdateRefs.length > 0) {
                notifyExternal_1.cmGetAssetNotifier().notify(notifyExternal_1.CmeAssetNotificationType.updateAssets, assetUpdateRefs);
            }
        }
    };
    CmcAssetItemCache.prototype.dumpToConsole = function () {
        console.log('----');
        console.log('AssetItemCache:');
        this._assetItemCacheMap.forEach(function (value, key) {
            console.log(key + ' :');
            console.log(util_1.inspect(value, { depth: null, colors: true }));
        });
        console.log('----');
    };
    return CmcAssetItemCache;
}());
exports.CmcAssetItemCache = CmcAssetItemCache;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("./bs-task-manager");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcFolderAsset = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var contentAsset_1 = __webpack_require__(71);
var bsnOperations_1 = __webpack_require__(8);
var utils_1 = __webpack_require__(6);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcFolderAsset = (function (_super) {
    __extends(CmcFolderAsset, _super);
    function CmcFolderAsset(assetItem) {
        var _this = this;
        if (assetItem.assetType !== bscore_1.AssetType.Folder) {
            throw (new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Attempt to create CmcFolderAsset object with AssetType.' + assetItem.assetType));
        }
        _this = _super.call(this, assetItem) || this;
        return _this;
    }
    CmcFolderAsset.getBsAssetFolderItemFromBsn = function (item) {
        var assetItem = {
            id: bscore_1.BsAssetIdNone,
            name: item.name,
            path: item.virtualPath,
            networkId: item.id,
            location: bscore_1.AssetLocation.Bsn,
            assetType: bscore_1.AssetType.Folder,
            scope: bsnconnector_1.bsnGetSession().networkName,
            childAssetType: bscore_1.AssetType.Content,
            hasSubFolders: item.hasSubFolders,
            hasFiles: item.hasFiles,
            locator: '',
            thumbUrl: item.thumbPath,
            lastModifiedDate: item.lastModifiedDate,
            creationDate: item.creationDate,
            permissions: lodash_1.isNil(item.permissions) ? [] : item.permissions.map(bsnOperations_1.cmGetBsnObjectPermissionFromBsnEntity),
        };
        assetItem.locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
        return assetItem;
    };
    Object.defineProperty(CmcFolderAsset.prototype, "assetLocator", {
        get: function () {
            return utils_1.cmGetFilteredAssetLocator(this.internalAssetItem);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcFolderAsset.prototype, "hasSubFolders", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return lodash_1.isNil(assetItem.hasSubFolders) ? null : assetItem.hasSubFolders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcFolderAsset.prototype, "hasFiles", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return lodash_1.isNil(assetItem.hasFiles) ? null : assetItem.hasFiles;
        },
        enumerable: false,
        configurable: true
    });
    CmcFolderAsset.prototype.fetchAssetItemData = function () {
        var _this = this;
        var processBsnFolderItem = function (bsnContentItem) {
            if (bsnconnector_1.bsnIsFolderContentEntity(bsnContentItem)) {
                _this.updateCachedAssetItem(CmcFolderAsset.getBsAssetFolderItemFromBsn(bsnContentItem));
            }
            return _this;
        };
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            if (!this.networkId) {
                return bsnconnector_1.bsnGetSession().getContentItemsByName(this.name, this.dirPath)
                    .then(function (items) {
                    if (items.length > 0) {
                        var item = lodash_1.find(items, bsnconnector_1.bsnIsFolderContentEntity);
                        if (item) {
                            return processBsnFolderItem(item);
                        }
                    }
                    return _this;
                });
            }
            return bsnconnector_1.bsnGetSession().getContentItem(this.networkId)
                .then(processBsnFolderItem);
        }
        return _super.prototype.fetchAssetItemData.call(this);
    };
    CmcFolderAsset.prototype.testAssetExists = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().existsContentItem(this._name, this.internalAssetItem.path, true);
        }
        return _super.prototype.testAssetExists.call(this);
    };
    CmcFolderAsset.prototype.replacePermissions = function (objectPermissions) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return this.replaceBsnContentPermissions(objectPermissions)
                .then(function () { return _this; });
        }
        return _super.prototype.replacePermissions.call(this, objectPermissions);
    };
    return CmcFolderAsset;
}(contentAsset_1.CmcContentAsset));
exports.CmcFolderAsset = CmcFolderAsset;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcHtmlSiteAsset = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var asset_1 = __webpack_require__(9);
var bsnOperations_1 = __webpack_require__(8);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(0);
var CmcHtmlSiteAsset = (function (_super) {
    __extends(CmcHtmlSiteAsset, _super);
    function CmcHtmlSiteAsset(assetItem) {
        var _this = this;
        if (assetItem.assetType !== bscore_1.AssetType.HtmlSite) {
            throw (new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Attempt to create CmcHtmlSiteAsset object with AssetType.' + assetItem.assetType));
        }
        _this = _super.call(this, assetItem) || this;
        return _this;
    }
    CmcHtmlSiteAsset.getBsHtmlSiteAssetItemPropertiesFromBsn = function (siteAssetItem) {
        var fileName = siteAssetItem.fileName, physicalPath = siteAssetItem.physicalPath, relativePath = siteAssetItem.relativePath, fileSize = siteAssetItem.fileSize, fileHash = siteAssetItem.fileHash;
        return {
            name: fileName,
            path: relativePath,
            fileUrl: physicalPath,
            fileSize: fileSize,
            fileHash: utils_1.cmNormalizeBsnHashString(fileHash),
        };
    };
    CmcHtmlSiteAsset.getBsHtmlSitePropertiesFromBsn = function (item) {
        var id = item.id, name = item.name, indexFile = item.indexFile, uploadDate = item.uploadDate;
        var htmlSite = {
            location: bscore_1.AssetLocation.Bsn,
            id: id, name: name, uploadDate: uploadDate,
            indexFile: CmcHtmlSiteAsset.getBsHtmlSiteAssetItemPropertiesFromBsn(indexFile),
            assets: null,
            permissions: lodash_1.isNil(item.permissions) ? [] : item.permissions.map(bsnOperations_1.cmGetBsnObjectPermissionFromBsnEntity),
        };
        if (!lodash_1.isNil(item.assets)) {
            htmlSite.assets = item.assets.map(CmcHtmlSiteAsset.getBsHtmlSiteAssetItemPropertiesFromBsn);
        }
        return htmlSite;
    };
    CmcHtmlSiteAsset.getBsAssetHtmlSiteItemFromBsn = function (item) {
        var assetData = CmcHtmlSiteAsset.getBsHtmlSitePropertiesFromBsn(item);
        var assetItem = {
            id: bscore_1.BsAssetIdNone,
            name: item.name,
            path: '',
            networkId: item.id,
            location: bscore_1.AssetLocation.Bsn,
            assetType: bscore_1.AssetType.HtmlSite,
            scope: bsnconnector_1.bsnGetSession().networkName,
            locator: '',
            fileUrl: item.indexFile.physicalPath,
            lastModifiedDate: item.lastModifiedDate,
            uploadDate: item.uploadDate,
            assetData: assetData,
            assetUsage: { presentations: item.presentations },
            permissions: assetData.permissions,
        };
        assetItem.locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
        return assetItem;
    };
    Object.defineProperty(CmcHtmlSiteAsset.prototype, "htmlSiteInfo", {
        get: function () {
            return this.getAssetItemProperty('assetData');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcHtmlSiteAsset.prototype, "indexFile", {
        get: function () {
            var siteProperties = this.htmlSiteInfo;
            return lodash_1.isNull(siteProperties) ? null : siteProperties.indexFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcHtmlSiteAsset.prototype, "presentationList", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcHtmlSiteAsset.prototype, "presentationCount", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcHtmlSiteAsset.prototype, "permissions", {
        get: function () {
            return this.internalAssetItem.permissions;
        },
        enumerable: false,
        configurable: true
    });
    CmcHtmlSiteAsset.prototype.getHtmlSiteAssetList = function () {
        var _this = this;
        if (this.assetLocation !== bscore_1.AssetLocation.Bsn) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'HtmlSite asset list can only be returned for BSN based HTML sites.'));
        }
        var siteProperties = this.htmlSiteInfo;
        if (!lodash_1.isNil(siteProperties) && !lodash_1.isNil(siteProperties.assets)) {
            return Promise.resolve(siteProperties.assets);
        }
        return bsnconnector_1.bsnGetSession().getHtmlSiteEntity(this.name)
            .then(function (entity) {
            _this.updateCachedAssetItemAssetData(CmcHtmlSiteAsset.getBsHtmlSitePropertiesFromBsn(entity));
            siteProperties = _this.htmlSiteInfo;
            var assetItems = siteProperties === null || siteProperties === void 0 ? void 0 : siteProperties.assets;
            return lodash_1.isNil(assetItems) ? null : assetItems;
        });
    };
    CmcHtmlSiteAsset.prototype.fetchAssetItemData = function () {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().getHtmlSiteEntity(this.networkIdOrName)
                .then(function (entity) {
                _this.updateCachedAssetItem(CmcHtmlSiteAsset.getBsAssetHtmlSiteItemFromBsn(entity));
                return _this;
            });
        }
        return _super.prototype.fetchAssetItemData.call(this);
    };
    CmcHtmlSiteAsset.prototype.testAssetExists = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().existsHtmlSite(this._name);
        }
        return _super.prototype.testAssetExists.call(this);
    };
    CmcHtmlSiteAsset.prototype.replacePermissions = function (objectPermissions) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnOperations_1.cmGetBsnPermissionEntityList(objectPermissions, this.networkId)
                .then(function (permissionEntityList) {
                return bsnconnector_1.bsnGetSession().replaceHtmlSitePermissions(_this.networkId, permissionEntityList);
            })
                .then(function () { return _this.fetchAssetItemData(); })
                .then(function () {
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssetPermissions, { assetItems: [_this.internalAssetItem] });
                return _this;
            });
        }
        return _super.prototype.replacePermissions.call(this, objectPermissions);
    };
    return CmcHtmlSiteAsset;
}(asset_1.CmcAsset));
exports.CmcHtmlSiteAsset = CmcHtmlSiteAsset;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsFileBlobCache = exports.cmGetBsFileBlobCache = exports.cmGetAssetItemsForScope = exports.cmGetTotalFileBlobSizeForScope = exports.cmRemoveFileBlobsForScope = exports.cmRemoveFileBlobForAssetItem = exports.cmGetFileBlobForAssetItem = exports.cmCacheFileBlobAndGetAssetItem = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var lodash_1 = __webpack_require__(0);
var fileBlobCache;
function cmCacheFileBlobAndGetAssetItem(file, scope) {
    var assetItem = fsconnector_1.fsGetAssetItemForFileBlob(file, scope);
    return lodash_1.isNil(assetItem) ? null : cmGetBsFileBlobCache().putFile(assetItem, file);
}
exports.cmCacheFileBlobAndGetAssetItem = cmCacheFileBlobAndGetAssetItem;
function cmGetFileBlobForAssetItem(assetItem) {
    return cmGetBsFileBlobCache().getFile(assetItem);
}
exports.cmGetFileBlobForAssetItem = cmGetFileBlobForAssetItem;
function cmRemoveFileBlobForAssetItem(assetItem) {
    return cmGetBsFileBlobCache().removeFile(assetItem);
}
exports.cmRemoveFileBlobForAssetItem = cmRemoveFileBlobForAssetItem;
function cmRemoveFileBlobsForScope(scope) {
    return cmGetBsFileBlobCache().removeFilesForScope(scope);
}
exports.cmRemoveFileBlobsForScope = cmRemoveFileBlobsForScope;
function cmGetTotalFileBlobSizeForScope(scope) {
    return cmGetBsFileBlobCache().getTotalFileBlobSizeForScope(scope);
}
exports.cmGetTotalFileBlobSizeForScope = cmGetTotalFileBlobSizeForScope;
function cmGetAssetItemsForScope(scope) {
    return cmGetBsFileBlobCache().getAssetItemsForScope(scope);
}
exports.cmGetAssetItemsForScope = cmGetAssetItemsForScope;
function cmGetBsFileBlobCache() {
    if (!fileBlobCache) {
        fileBlobCache = new BsFileBlobCache();
    }
    return fileBlobCache;
}
exports.cmGetBsFileBlobCache = cmGetBsFileBlobCache;
var BsFileBlobCache = (function () {
    function BsFileBlobCache() {
        this._fileMap = new Map();
    }
    BsFileBlobCache.getCacheLocator = function (assetItem) {
        if (assetItem.location === bscore_1.AssetLocation.Blob && assetItem.locator) {
            var locator = assetItem.locator;
            return lodash_1.isString(assetItem.scope) && assetItem.scope.length ? locator + '_' + assetItem.scope : locator;
        }
        return null;
    };
    Object.defineProperty(BsFileBlobCache.prototype, "size", {
        get: function () {
            return this._fileMap.size;
        },
        enumerable: false,
        configurable: true
    });
    BsFileBlobCache.prototype.clear = function () {
        this._fileMap.clear();
    };
    BsFileBlobCache.prototype.getFile = function (assetItem) {
        var locator = BsFileBlobCache.getCacheLocator(assetItem);
        if (!lodash_1.isNil(locator)) {
            var blobRecord = this._fileMap.get(locator);
            if (!lodash_1.isNil(blobRecord)) {
                return blobRecord.fileBlob;
            }
        }
        return null;
    };
    BsFileBlobCache.prototype.putFile = function (assetItem, file) {
        var locator = BsFileBlobCache.getCacheLocator(assetItem);
        if (!lodash_1.isNil(locator)) {
            var scope = lodash_1.isString(assetItem.scope) ? assetItem.scope : '';
            this._fileMap.set(locator, { fileBlob: file, scope: scope, assetItem: assetItem });
            return assetItem;
        }
        return null;
    };
    BsFileBlobCache.prototype.removeFile = function (assetItem) {
        var locator = BsFileBlobCache.getCacheLocator(assetItem);
        if (!lodash_1.isNil(locator)) {
            this._fileMap.delete(assetItem.locator);
            return true;
        }
        return false;
    };
    BsFileBlobCache.prototype.removeFilesForScope = function (scope) {
        var newMap = new Map();
        this._fileMap.forEach(function (value, key) {
            if (value.scope !== scope) {
                newMap.set(key, value);
            }
        });
        this._fileMap = newMap;
    };
    BsFileBlobCache.prototype.getTotalFileBlobSizeForScope = function (scope) {
        var sum = 0;
        this._fileMap.forEach(function (value) {
            if (value.scope === scope) {
                sum += value.fileBlob.size;
            }
        });
        return sum;
    };
    BsFileBlobCache.prototype.getAssetItemsForScope = function (scope) {
        var list = [];
        this._fileMap.forEach(function (value) {
            if (value.scope === scope) {
                list.push(value.assetItem);
            }
        });
        return list;
    };
    return BsFileBlobCache;
}());
exports.BsFileBlobCache = BsFileBlobCache;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cmGetAssetNotifier = exports.cmUnsubscribeAssetNotifications = exports.cmSubscribeAssetNotifications = exports.cmIsAssetContainerNotification = exports.cmIsAssetNotification = exports.CmeAssetNotificationType = void 0;
var lodash_1 = __webpack_require__(0);
var CmeAssetNotificationType;
(function (CmeAssetNotificationType) {
    CmeAssetNotificationType["addAssets"] = "addAsset";
    CmeAssetNotificationType["updateAssets"] = "updateAsset";
    CmeAssetNotificationType["removeAssets"] = "removeAsset";
    CmeAssetNotificationType["addAssetContainer"] = "addContainer";
    CmeAssetNotificationType["updateAssetContainer"] = "updateContainer";
    CmeAssetNotificationType["updateAssetContainerFolders"] = "updateContainerFolders";
    CmeAssetNotificationType["removeAssetContainer"] = "removeContainer";
})(CmeAssetNotificationType = exports.CmeAssetNotificationType || (exports.CmeAssetNotificationType = {}));
var CmcAssetItemNotificationSet = new Set([
    CmeAssetNotificationType.addAssets, CmeAssetNotificationType.updateAssets, CmeAssetNotificationType.removeAssets,
]);
function cmIsAssetNotification(notification) {
    return CmcAssetItemNotificationSet.has(notification.kind);
}
exports.cmIsAssetNotification = cmIsAssetNotification;
var CmcAssetContainerNotificationSet = new Set([
    CmeAssetNotificationType.addAssetContainer, CmeAssetNotificationType.removeAssetContainer,
    CmeAssetNotificationType.updateAssetContainer, CmeAssetNotificationType.updateAssetContainerFolders,
]);
function cmIsAssetContainerNotification(notification) {
    return CmcAssetContainerNotificationSet.has(notification.kind);
}
exports.cmIsAssetContainerNotification = cmIsAssetContainerNotification;
function cmSubscribeAssetNotifications(subscriber) {
    cmGetAssetNotifier().subscribe(subscriber);
}
exports.cmSubscribeAssetNotifications = cmSubscribeAssetNotifications;
function cmUnsubscribeAssetNotifications(subscriber) {
    cmGetAssetNotifier().unsubscribe(subscriber);
}
exports.cmUnsubscribeAssetNotifications = cmUnsubscribeAssetNotifications;
var externalAssetNotifier;
function cmGetAssetNotifier() {
    if (!externalAssetNotifier) {
        externalAssetNotifier = new CmcAssetNotifier();
    }
    return externalAssetNotifier;
}
exports.cmGetAssetNotifier = cmGetAssetNotifier;
var CmcAssetNotifier = (function () {
    function CmcAssetNotifier() {
        this._subscribers = [];
        this._batchesByCollection = new Map();
    }
    CmcAssetNotifier.prototype.subscribe = function (subscriber) {
        if (this._subscribers.indexOf(subscriber) < 0) {
            this._subscribers.push(subscriber);
        }
    };
    CmcAssetNotifier.prototype.unsubscribe = function (subscriber) {
        var index = this._subscribers.indexOf(subscriber);
        if (index >= 0) {
            this._subscribers.splice(index, 1);
        }
    };
    CmcAssetNotifier.prototype.startBatch = function (locatorHash) {
        this._batchesByCollection.set(locatorHash, new Map());
    };
    CmcAssetNotifier.prototype.stopBatchAndSend = function (locatorHash) {
        var _this = this;
        var batch = this._batchesByCollection.get(locatorHash);
        if (!lodash_1.isNil(batch)) {
            this._batchesByCollection.delete(locatorHash);
            batch.forEach(function (changedItems, kind) {
                _this._subscribers.forEach(function (subscriber) {
                    subscriber.notify({ kind: kind, changedItems: changedItems });
                });
            });
        }
    };
    CmcAssetNotifier.prototype.notify = function (kind, changedItems, locatorHash) {
        if (!lodash_1.isNil(locatorHash) && this._batchesByCollection.has(locatorHash)) {
            var batch = this._batchesByCollection.get(locatorHash);
            var newChangedItems = batch.get(kind);
            if (lodash_1.isNil(newChangedItems)) {
                newChangedItems = [];
            }
            newChangedItems.push.apply(newChangedItems, changedItems);
            batch.set(kind, newChangedItems);
        }
        else {
            this._subscribers.forEach(function (subscriber) {
                subscriber.notify({ kind: kind, changedItems: changedItems });
            });
        }
    };
    return CmcAssetNotifier;
}());


/***/ }),
/* 21 */
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
exports.CmcAssetUploadJob = exports.cmGetUniqueNameForNameMap = exports.cmGetNameMap = exports.cmScheduleBsnUploadJob = exports.cmCreateBsnUploadJob = void 0;
var bscore_1 = __webpack_require__(2);
var bs_task_manager_1 = __webpack_require__(15);
var bsnconnector_1 = __webpack_require__(1);
var fsconnector_1 = __webpack_require__(5);
var fileBlobCache_1 = __webpack_require__(19);
var notifyInternal_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(6);
var error_1 = __webpack_require__(3);
var assetManager_1 = __webpack_require__(10);
var assetCollectionManager_1 = __webpack_require__(12);
var uuid_1 = __webpack_require__(16);
var lodash_1 = __webpack_require__(0);
var isomorphicPath = __webpack_require__(11);
function cmCreateBsnUploadJob(name, uploadFileSpecs, uploadWebPageSpecs, onProgress, onSuccess, onError, onCancel) {
    return new CmcAssetUploadJob(name, uploadFileSpecs, uploadWebPageSpecs, onProgress, onSuccess, onError, onCancel);
}
exports.cmCreateBsnUploadJob = cmCreateBsnUploadJob;
function cmScheduleBsnUploadJob(uploadJob, taskManager) {
    return taskManager.addTask(uploadJob);
}
exports.cmScheduleBsnUploadJob = cmScheduleBsnUploadJob;
function getObjectFromSpecNameMapKey(key) {
    var objectForSpec = { targetName: '' };
    var parts = key.split('/');
    if (parts.length > 0) {
        var part = parts.pop();
        objectForSpec.targetName = lodash_1.isNil(part) ? '' : part;
        if (parts.length > 0) {
            objectForSpec.destinationPath = utils_1.cmNormalizeBsnPathString(parts.join('/'));
        }
    }
    return objectForSpec;
}
function getKeyForSpecNameMap(spec) {
    return !lodash_1.isNil(spec.destinationPath) ?
        "" + utils_1.cmNormalizeBsnPathString(spec.destinationPath) + spec.targetName : spec.targetName;
}
function cmGetNameMap(specArray, assetType) {
    if (!lodash_1.isNil(specArray)) {
        return specArray.reduce(function (map, spec, index) {
            if (lodash_1.isNil(assetType)
                || (spec.hasOwnProperty('siteType') && spec.siteType === assetType)) {
                var key = getKeyForSpecNameMap(spec);
                var entry = map[key];
                if (lodash_1.isNil(entry)) {
                    map[key] = [index];
                }
                else {
                    map[key].push(index);
                }
            }
            return map;
        }, {});
    }
    return {};
}
exports.cmGetNameMap = cmGetNameMap;
var reNameParts = /^(.+?)(?: \((\d+)\))?$/i;
function cmGetUniqueNameForNameMap(nameMap, proposedName, proposedExt, currentDestinationPath) {
    if (proposedExt === void 0) { proposedExt = ''; }
    var uniqueName = proposedName;
    var nameParts = reNameParts.exec(proposedName);
    if (!lodash_1.isNil(nameParts)) {
        var baseName = nameParts[1];
        var num = lodash_1.isNil(nameParts[2]) ? 1 : Number(nameParts[2]);
        while (!lodash_1.isNil(nameMap[getKeyForSpecNameMap({
            targetName: uniqueName + proposedExt, destinationPath: currentDestinationPath
        })])) {
            uniqueName = baseName + ' (' + num + ')';
            num = num + 1;
        }
    }
    return uniqueName;
}
exports.cmGetUniqueNameForNameMap = cmGetUniqueNameForNameMap;
function getDuplicateNameRecordForFileSpec(uploadItem, specIndex, newTargetName, existingBsnAsset) {
    var dupData = {
        currentAssetName: uploadItem.file.fileName,
        assetType: bscore_1.AssetType.Content,
        assetIndex: specIndex,
        currentPath: uploadItem.file.fileDirPath,
        targetName: newTargetName,
    };
    if (!lodash_1.isNil(uploadItem.parentAssetType) && !lodash_1.isNil(uploadItem.parentAssetNames)) {
        dupData.parentAssetType = uploadItem.parentAssetType;
        dupData.parentAssetNames = uploadItem.parentAssetNames;
    }
    if (!lodash_1.isNil(existingBsnAsset)) {
        dupData.existingBsnAsset = bscore_1.bscAssetLocatorFromAssetItem(existingBsnAsset);
        dupData.existingBsnAsset.mediaType = existingBsnAsset.mediaType;
    }
    return dupData;
}
function getDuplicateNameRecordForWebPageSpec(uploadSession, specIndex, newTargetName, existingBsnAsset) {
    var dupData = {
        currentAssetName: uploadSession.siteName,
        assetType: uploadSession.siteType,
        assetIndex: specIndex,
        currentPath: uploadSession.indexUploadFile.file.fileDirPath,
        targetName: newTargetName,
        replaceExisting: false,
    };
    if (!lodash_1.isNil(uploadSession.presentationNames)) {
        dupData.parentAssetType = bscore_1.AssetType.Project;
        dupData.parentAssetNames = uploadSession.presentationNames;
    }
    if (!lodash_1.isNil(existingBsnAsset)) {
        dupData.existingBsnAsset = existingBsnAsset;
    }
    return dupData;
}
var CmcAssetUploadJob = (function () {
    function CmcAssetUploadJob(name, uploadSpecs, webPageSessions, onProgress, onSuccess, onError, onCancel) {
        this._duplicateFileNameRecordMap = new Map();
        this._duplicateHtmlSiteNameRecordMap = new Map();
        this._completedUploadBytes = 0;
        this._totalUploadBytes = 0;
        this._cancellationRequested = false;
        this._id = uuid_1.v4();
        this._startTime = new Date();
        if (name) {
            this._name = name;
        }
        else {
            this._name = 'UploadJob_' + this._id.slice(0, 8);
        }
        var assetSpecArray;
        if (Array.isArray(uploadSpecs)) {
            assetSpecArray = uploadSpecs;
        }
        else if (uploadSpecs && typeof uploadSpecs === 'object') {
            assetSpecArray = [uploadSpecs];
        }
        if (assetSpecArray && assetSpecArray.length > 0) {
            this._uploadFileSpecs = assetSpecArray.map(CmcAssetUploadJob.getBsUploadFileItemSpec);
        }
        else {
            this._uploadFileSpecs = null;
        }
        var webPageSpecArray;
        if (Array.isArray(webPageSessions)) {
            webPageSpecArray = webPageSessions;
        }
        else if (webPageSessions && typeof webPageSessions === 'object') {
            webPageSpecArray = [webPageSessions];
        }
        if (webPageSpecArray) {
            this._webPageUploadSessions = webPageSpecArray.map(CmcAssetUploadJob.getUploadWebPageSessionSpec);
        }
        else {
            this._webPageUploadSessions = null;
        }
        this.mergeDuplicateUploadSpecs();
        this._totalUploadBytes = this.getTotalUploadBytes();
        this._onProgress = lodash_1.isNil(onProgress) ? null : onProgress;
        this._onSuccess = lodash_1.isNil(onSuccess) ? null : onSuccess;
        this._onError = lodash_1.isNil(onError) ? null : onError;
        this._onCancel = lodash_1.isNil(onCancel) ? null : onCancel;
        this.init();
    }
    CmcAssetUploadJob.getBsUploadFileItemSpec = function (assetSpec) {
        var fileSpec = assetSpec.file;
        if (bscore_1.bscIsAssetItem(assetSpec.file) && assetSpec.file.location === bscore_1.AssetLocation.Blob) {
            fileSpec = fileBlobCache_1.cmGetFileBlobForAssetItem(assetSpec.file);
        }
        if (lodash_1.isNil(fileSpec)) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'GetBsUploadFileItemSpec: Cannot find cached File object for Blob assetItem');
        }
        var file = fsconnector_1.fsGetUploadFileSource(fileSpec);
        if (lodash_1.isNil(file)) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'GetBsUploadFileItemSpec: Invalid File specification encountered in BsAssetUploadJob');
        }
        var spec = {
            file: file,
            fileSpec: assetSpec.file,
            destinationPath: lodash_1.isNil(assetSpec.destinationPath) ? '' : assetSpec.destinationPath,
            targetName: lodash_1.isNil(assetSpec.targetName) ? file.fileName : assetSpec.targetName,
        };
        if (!lodash_1.isNil(assetSpec.parentAssetType)) {
            spec.parentAssetType = assetSpec.parentAssetType;
        }
        if (!lodash_1.isNil(assetSpec.parentAssetNames)) {
            spec.parentAssetNames = assetSpec.parentAssetNames;
        }
        return spec;
    };
    CmcAssetUploadJob.initBsUploadFileProgress = function (fileSpec, jobIndex) {
        return {
            jobIndex: jobIndex,
            fileName: fileSpec.file.fileName,
            filePath: fileSpec.file.fileDirPath,
            targetName: fileSpec.targetName,
            destinationPath: fileSpec.destinationPath,
            fileSize: fileSpec.file.fileSize,
            status: bscore_1.BsUploadItemStatus.Pending,
            fractionComplete: 0,
        };
    };
    CmcAssetUploadJob.getUploadWebPageSessionSpec = function (sessionSpec) {
        var siteName = sessionSpec.siteName.trim();
        var htmlSiteSessionSpec = {
            siteName: siteName,
            siteType: sessionSpec.siteType === bscore_1.AssetType.DeviceHtmlSite ? bscore_1.AssetType.DeviceHtmlSite : bscore_1.AssetType.HtmlSite,
            targetName: siteName,
            indexUploadFile: CmcAssetUploadJob.getBsUploadFileItemSpec(sessionSpec.indexUploadFile),
            assetUploadFiles: [],
        };
        if (Array.isArray(sessionSpec.assetUploadFiles)) {
            htmlSiteSessionSpec.assetUploadFiles =
                sessionSpec.assetUploadFiles.map(CmcAssetUploadJob.getBsUploadFileItemSpec);
        }
        if (!lodash_1.isNil(sessionSpec.existingAsset)) {
            htmlSiteSessionSpec.existingAsset = sessionSpec.existingAsset;
        }
        if (!lodash_1.isNil(sessionSpec.presentationNames)) {
            htmlSiteSessionSpec.presentationNames = sessionSpec.presentationNames;
        }
        return htmlSiteSessionSpec;
    };
    CmcAssetUploadJob.initBsUploadWebPageProgress = function (sessionSpec, jobIndex) {
        var assetUploadProgress = sessionSpec.assetUploadFiles == null ? [] :
            sessionSpec.assetUploadFiles.map(function (fileSpec, assetIndex) {
                return CmcAssetUploadJob.initBsUploadFileProgress(fileSpec, assetIndex + 1);
            });
        return {
            jobIndex: jobIndex,
            name: sessionSpec.siteName,
            totalFiles: sessionSpec.assetUploadFiles.length + 1,
            totalBytes: CmcAssetUploadJob.getWebPageSessionTotalBytes(sessionSpec),
            uploadedFiles: 0,
            indexFileUploadProgress: CmcAssetUploadJob.initBsUploadFileProgress(sessionSpec.indexUploadFile, 0),
            assetUploadProgress: assetUploadProgress,
            status: bscore_1.BsUploadItemStatus.Pending,
            fractionComplete: 0,
        };
    };
    CmcAssetUploadJob.getWebPageSessionTotalBytes = function (sessionSpec) {
        if (!(sessionSpec && sessionSpec.indexUploadFile)) {
            return 0;
        }
        var indexFileSize = sessionSpec.indexUploadFile.file.fileSize;
        if (!sessionSpec.assetUploadFiles) {
            return indexFileSize;
        }
        return sessionSpec.assetUploadFiles.reduce(function (acc, fileSource) { return acc + fileSource.file.fileSize; }, indexFileSize);
    };
    Object.defineProperty(CmcAssetUploadJob.prototype, "id", {
        get: function () { return this._id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "startTime", {
        get: function () { return this._startTime; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "type", {
        get: function () { return bs_task_manager_1.BsTaskType.BsnUploadJob; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "status", {
        get: function () { return this._uploadJobResult.status; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "isDone", {
        get: function () {
            return this.status === bs_task_manager_1.BsTaskStatus.Completed ||
                this.status === bs_task_manager_1.BsTaskStatus.Failed || this.status === bs_task_manager_1.BsTaskStatus.Cancelled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "isCancelled", {
        get: function () { return this.status === bs_task_manager_1.BsTaskStatus.Cancelled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "cancellationRequested", {
        get: function () { return this._cancellationRequested; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "hasItemFailures", {
        get: function () { return this._uploadJobResult.hasItemFailures; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "progress", {
        get: function () { return this._uploadJobProgress; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "result", {
        get: function () { return this._uploadJobResult; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "uploadFileSpecs", {
        get: function () { return this._uploadFileSpecs; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "webPageUploadSessions", {
        get: function () { return this._webPageUploadSessions; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "uploadJobItemCount", {
        get: function () {
            var count = 0;
            if (this._uploadFileSpecs) {
                count = count + this._uploadFileSpecs.length;
            }
            if (this._webPageUploadSessions) {
                count = count + this._webPageUploadSessions.length;
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "onSuccess", {
        get: function () { return this._onSuccess; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "onError", {
        get: function () { return this._onError; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetUploadJob.prototype, "onCancel", {
        get: function () { return this._onCancel; },
        enumerable: false,
        configurable: true
    });
    CmcAssetUploadJob.prototype.start = function () {
        var _this = this;
        this.init();
        this.setTaskStatus(bs_task_manager_1.BsTaskStatus.InProgress);
        this.initUploadJobProgress();
        return this.processFileUploads()
            .then(function () { return _this.processWebPageUploads(); })
            .then(function () {
            var uploadedAssetItems = [];
            var uploadedContentParentFolderSpecs = [];
            _this._uploadJobResult.fileUploadResults.forEach(function (fileResult) {
                if (fileResult.status === bscore_1.BsUploadItemStatus.Uploaded) {
                    uploadedAssetItems.push(fileResult.assetItem);
                    var parentFolderSpec = assetManager_1.cmGetParentFolderAssetSpecification(fileResult.assetItem);
                    if (!lodash_1.isNil(parentFolderSpec) && lodash_1.isNil(lodash_1.find(uploadedContentParentFolderSpecs, parentFolderSpec))) {
                        uploadedContentParentFolderSpecs.push(parentFolderSpec);
                    }
                }
            });
            _this._uploadJobResult.webPageUploadResults.forEach(function (webPageResult) {
                if (webPageResult.status === bscore_1.BsUploadItemStatus.Uploaded) {
                    uploadedAssetItems.push(webPageResult.assetItem);
                }
            });
            if (uploadedAssetItems && uploadedAssetItems.length > 0) {
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: uploadedAssetItems });
            }
            if (uploadedContentParentFolderSpecs.length > 0) {
                return Promise.all(uploadedContentParentFolderSpecs.map(assetManager_1.cmUpdateAssetItemForAssetSpecification));
            }
        })
            .then(function () {
            _this.setTaskStatus(_this._cancellationRequested ? bs_task_manager_1.BsTaskStatus.Cancelled : bs_task_manager_1.BsTaskStatus.Completed);
            return _this._uploadJobResult;
        })
            .catch(function (error) {
            _this._uploadJobResult.exceptionError = error;
            _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Failed);
            return _this._uploadJobResult;
        });
    };
    CmcAssetUploadJob.prototype.check = function () {
        var _this = this;
        var getDuplicatedBsnFileAssetNames = function () {
            if (!lodash_1.isNil(_this._uploadFileSpecs) && _this._uploadFileSpecs.length > 0) {
                return Promise.all(_this._uploadFileSpecs.map(function (itemSpec) {
                    return itemSpec.file.getFileHash()
                        .then(function (fileHash) {
                        return {
                            name: itemSpec.targetName,
                            fileHash: fileHash,
                            destinationPath: utils_1.cmNormalizeBsnPathString(itemSpec.destinationPath),
                        };
                    });
                }))
                    .then(function (matchList) {
                    var mediaFileCollection = assetCollectionManager_1.cmGetCmiAssetCollection(bscore_1.AssetLocation.Bsn, bscore_1.AssetType.Content);
                    return mediaFileCollection.getDuplicateNames(matchList);
                });
            }
            return Promise.resolve([]);
        };
        var getDuplicatedBsnHtmlSiteAssetNames = function () {
            if (!lodash_1.isNil(_this._webPageUploadSessions) && _this._webPageUploadSessions.length > 0) {
                var htmlSiteMatchList = _this._webPageUploadSessions
                    .filter(function (session) { return session.siteType === bscore_1.AssetType.HtmlSite && lodash_1.isNil(session.existingAsset); })
                    .map(function (session) { return ({ name: session.targetName, fileHash: null }); });
                if (htmlSiteMatchList.length > 0) {
                    var htmlSiteCollection = assetCollectionManager_1.cmGetCmiAssetCollection(bscore_1.AssetLocation.Bsn, bscore_1.AssetType.HtmlSite);
                    return htmlSiteCollection.getDuplicateNames(htmlSiteMatchList)
                        .then(function (dupAssetItems) { return dupAssetItems.map(bscore_1.bscAssetLocatorFromAssetItem); });
                }
            }
            return Promise.resolve([]);
        };
        var getDuplicatedBsnDeviceWebPageAssetNames = function () {
            if (!lodash_1.isNil(_this._webPageUploadSessions) && _this._webPageUploadSessions.length > 0) {
                var deviceWebPageMatchList = _this._webPageUploadSessions
                    .filter(function (session) { return session.siteType === bscore_1.AssetType.DeviceHtmlSite && lodash_1.isNil(session.existingAsset); })
                    .map(function (session) { return ({ name: session.targetName, fileHash: null }); });
                if (deviceWebPageMatchList.length > 0) {
                    var deviceWebPageCollection = assetCollectionManager_1.cmGetCmiAssetCollection(bscore_1.AssetLocation.Bsn, bscore_1.AssetType.DeviceHtmlSite);
                    return deviceWebPageCollection.getDuplicateNames(deviceWebPageMatchList)
                        .then(function (dupAssetItems) { return dupAssetItems.map(bscore_1.bscAssetLocatorFromAssetItem); });
                }
            }
            return Promise.resolve([]);
        };
        var checkBsnDuplicates = function () {
            var dupData = {
                duplicatedContentFiles: [],
                duplicatedHtmlSites: [],
            };
            return getDuplicatedBsnFileAssetNames()
                .then(function (dupContentAssetItems) {
                dupData.duplicatedContentFiles = dupContentAssetItems;
                return getDuplicatedBsnHtmlSiteAssetNames();
            })
                .then(function (dupHtmlLocators) {
                dupData.duplicatedHtmlSites = dupHtmlLocators;
                return getDuplicatedBsnDeviceWebPageAssetNames();
            })
                .then(function (dupHtmlLocators) {
                var _a;
                (_a = dupData.duplicatedHtmlSites).push.apply(_a, dupHtmlLocators);
                return dupData;
            });
        };
        var processBsnDuplicates = function (dupData) {
            var hasNewContentDuplicates = dupData.duplicatedContentFiles.length > 0;
            var hasNewHtmlDuplicates = dupData.duplicatedHtmlSites.length > 0;
            if (hasNewContentDuplicates) {
                var contentNameMap_1 = cmGetNameMap(_this._uploadFileSpecs);
                dupData.duplicatedContentFiles.forEach(function (assetItem) {
                    return _this.setUniqueNameForUploadFile(contentNameMap_1, assetItem.name, assetItem.path, assetItem);
                });
            }
            if (hasNewHtmlDuplicates) {
                dupData.duplicatedHtmlSites.forEach(function (locator) { return _this.setExistingLocatorForUploadWebPage(locator); });
            }
            if (hasNewContentDuplicates || hasNewHtmlDuplicates) {
                return checkBsnDuplicates()
                    .then(processBsnDuplicates);
            }
            _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Pending);
            var result = { hasDuplicates: false };
            if (_this._duplicateFileNameRecordMap.size > 0 || _this._duplicateHtmlSiteNameRecordMap.size > 0) {
                result = {
                    hasDuplicates: true,
                    duplicatedFileData: lodash_1.cloneDeep(Array.from(_this._duplicateFileNameRecordMap.values())),
                    duplicatedHtmlData: lodash_1.cloneDeep(Array.from(_this._duplicateHtmlSiteNameRecordMap.values())),
                };
            }
            return Promise.resolve(result);
        };
        this.resolveLocalUploadSpecDuplicates();
        return checkBsnDuplicates()
            .then(processBsnDuplicates);
    };
    CmcAssetUploadJob.prototype.updateDuplicateResolutionAndCheck = function (modifiedCheckResult) {
        var _this = this;
        if (!lodash_1.isNil(modifiedCheckResult.duplicatedFileData) && modifiedCheckResult.duplicatedFileData.length > 0) {
            modifiedCheckResult.duplicatedFileData.forEach(function (nameData) {
                var dupMapData = _this._duplicateFileNameRecordMap.get(nameData.assetIndex);
                if (!lodash_1.isNil(dupMapData)) {
                    var targetName = nameData.targetName.trim();
                    if (nameData.currentAssetName === dupMapData.currentAssetName
                        && targetName !== dupMapData.targetName) {
                        _this._uploadFileSpecs[nameData.assetIndex].targetName = targetName;
                        dupMapData.targetName = targetName;
                    }
                    dupMapData.verifiedResolution = true;
                }
            });
        }
        if (!lodash_1.isNil(modifiedCheckResult.duplicatedHtmlData) && modifiedCheckResult.duplicatedHtmlData.length > 0) {
            modifiedCheckResult.duplicatedHtmlData.forEach(function (htmlData) {
                var dupMapData = _this._duplicateHtmlSiteNameRecordMap.get(htmlData.assetIndex);
                if (!lodash_1.isNil(dupMapData)) {
                    if (htmlData.currentAssetName === dupMapData.currentAssetName
                        && htmlData.assetType === dupMapData.assetType) {
                        var htmlSessionSpec = _this._webPageUploadSessions[htmlData.assetIndex];
                        if (htmlData.replaceExisting && !lodash_1.isNil(htmlData.existingBsnAsset)) {
                            htmlSessionSpec.existingAsset = htmlData.existingBsnAsset;
                            htmlSessionSpec.targetName = htmlData.existingBsnAsset.name;
                            dupMapData.replaceExisting = true;
                        }
                        else {
                            htmlSessionSpec.existingAsset = null;
                            var targetName = htmlData.targetName.trim();
                            htmlSessionSpec.targetName = targetName;
                            dupMapData.targetName = targetName;
                        }
                        dupMapData.verifiedResolution = true;
                    }
                }
            });
        }
        return this.check();
    };
    CmcAssetUploadJob.prototype.cancel = function () {
        this._cancellationRequested = true;
        if (this._currentFileUploadItem) {
            this._currentFileUploadItem.cancel();
        }
        if (this._currentWebPageUploadItem) {
            this._currentWebPageUploadItem.cancel();
        }
    };
    CmcAssetUploadJob.prototype.init = function () {
        this._currentFileUploadItem = null;
        this._currentWebPageUploadItem = null;
        this._uploadJobResult = {
            id: this._id,
            type: bs_task_manager_1.BsTaskType.BsnUploadJob,
            status: bs_task_manager_1.BsTaskStatus.WaitingForCheck,
            startTime: this._startTime,
            hasItemFailures: false,
            fileUploadResults: [],
            webPageUploadResults: [],
            failedFileUploads: 0,
            failedWebPageUploads: 0,
        };
        this._uploadJobProgress = {
            id: this._id,
            type: bs_task_manager_1.BsTaskType.BsnUploadJob,
            status: bs_task_manager_1.BsTaskStatus.WaitingForCheck,
            startTime: this._startTime,
            totalItems: this.uploadJobItemCount,
            completedItems: 0,
            failedItems: 0,
            totalProgressFraction: 0,
            fileStatus: [],
            webPageStatus: [],
        };
    };
    CmcAssetUploadJob.prototype.initUploadJobProgress = function () {
        this._uploadJobProgress.fileStatus = this._uploadFileSpecs == null ? [] :
            this._uploadFileSpecs.map(CmcAssetUploadJob.initBsUploadFileProgress);
        this._uploadJobProgress.webPageStatus = this._webPageUploadSessions == null ? [] :
            this._webPageUploadSessions.map(CmcAssetUploadJob.initBsUploadWebPageProgress);
    };
    CmcAssetUploadJob.prototype.mergeDuplicateUploadSpecs = function () {
        if (!lodash_1.isNil(this._uploadFileSpecs)) {
            this._uploadFileSpecs = this._uploadFileSpecs.reduce(function (specArray, spec) {
                var dupSpec = lodash_1.find(specArray, function (spec2) {
                    return spec.targetName.toLowerCase() === spec2.targetName.toLowerCase()
                        && spec.destinationPath === spec2.destinationPath
                        && (spec2.file.fileDirPath.length === 0
                            || spec.file.fileDirPath.toLowerCase() === spec2.file.fileDirPath.toLowerCase());
                });
                if (!lodash_1.isNil(dupSpec)) {
                    if (!lodash_1.isNil(dupSpec.parentAssetNames) && !lodash_1.isNil(spec.parentAssetNames)) {
                        dupSpec.parentAssetNames = lodash_1.uniq(dupSpec.parentAssetNames.concat(spec.parentAssetNames));
                    }
                }
                else {
                    specArray.push(spec);
                }
                return specArray;
            }, []);
        }
        if (!lodash_1.isNil(this._webPageUploadSessions)) {
            this._webPageUploadSessions = this._webPageUploadSessions.reduce(function (specArray, spec) {
                var dupSpec = lodash_1.find(specArray, function (spec2) {
                    return spec.targetName.toLowerCase() === spec2.targetName.toLowerCase()
                        && spec.siteType === spec2.siteType
                        && (spec2.indexUploadFile.file.fileDirPath.length === 0
                            || spec.indexUploadFile.file.fileDirPath.toLowerCase()
                                === spec2.indexUploadFile.file.fileDirPath.toLowerCase());
                });
                if (!lodash_1.isNil(dupSpec)) {
                    if (!lodash_1.isNil(dupSpec.presentationNames) && !lodash_1.isNil(spec.presentationNames)) {
                        dupSpec.presentationNames = lodash_1.uniq(dupSpec.presentationNames.concat(spec.presentationNames));
                    }
                }
                else {
                    specArray.push(spec);
                }
                return specArray;
            }, []);
        }
    };
    CmcAssetUploadJob.prototype.resolveLocalUploadSpecDuplicates = function () {
        var _this = this;
        var contentNameMap = cmGetNameMap(this._uploadFileSpecs);
        var dupContentNames = Object.keys(contentNameMap).filter(function (name) { return contentNameMap[name].length > 1; });
        dupContentNames.forEach(function (name) {
            var _a = getObjectFromSpecNameMapKey(name), targetName = _a.targetName, destinationPath = _a.destinationPath;
            _this.setUniqueNameForUploadFile(contentNameMap, targetName, destinationPath);
        });
        var htmlSiteNameMap = cmGetNameMap(this._webPageUploadSessions, bscore_1.AssetType.HtmlSite);
        var dupHtmlSessions = Object.keys(htmlSiteNameMap).filter(function (name) { return htmlSiteNameMap[name].length > 1; });
        dupHtmlSessions.forEach(function (name) { return _this.setUniqueNameForUploadWebPage(htmlSiteNameMap, name); });
        var deviceHtmlSiteNameMap = cmGetNameMap(this._webPageUploadSessions, bscore_1.AssetType.DeviceHtmlSite);
        var dupDeviceHtmlSessions = Object.keys(deviceHtmlSiteNameMap)
            .filter(function (name) { return deviceHtmlSiteNameMap[name].length > 1; });
        dupDeviceHtmlSessions.forEach(function (name) { return _this.setUniqueNameForUploadWebPage(deviceHtmlSiteNameMap, name); });
    };
    CmcAssetUploadJob.prototype.setUniqueNameForUploadFile = function (contentNameMap, currentTargetName, currentDestinationPath, existingBsnAsset) {
        var _this = this;
        var indexArray = contentNameMap[getKeyForSpecNameMap({ targetName: currentTargetName, destinationPath: currentDestinationPath })];
        var setUniqueName = function (i) {
            var uploadSpec = _this._uploadFileSpecs[i];
            var fileName = uploadSpec.targetName;
            var ext = isomorphicPath.extname(fileName);
            var baseName = isomorphicPath.basename(fileName, ext);
            var newName = cmGetUniqueNameForNameMap(contentNameMap, baseName, ext, currentDestinationPath) + ext;
            uploadSpec.targetName = newName;
            var dupData = getDuplicateNameRecordForFileSpec(uploadSpec, i, newName, existingBsnAsset);
            dupData.verifiedResolution = false;
            _this._duplicateFileNameRecordMap.set(i, dupData);
            contentNameMap[newName] = [i];
        };
        for (var i = 1; i < indexArray.length; ++i) {
            setUniqueName(indexArray[i]);
        }
        if (!lodash_1.isNil(existingBsnAsset) && existingBsnAsset.name === currentTargetName) {
            setUniqueName(indexArray[0]);
            delete contentNameMap[currentTargetName];
        }
        else {
            contentNameMap[currentTargetName] = [indexArray[0]];
        }
    };
    CmcAssetUploadJob.prototype.setUniqueNameForUploadWebPage = function (htmlSiteNameMap, currentTargetName, existingBsnAsset) {
        var _this = this;
        var indexArray = htmlSiteNameMap[currentTargetName];
        var setUniqueName = function (i) {
            var uploadSessionSpec = _this._webPageUploadSessions[i];
            var newName = cmGetUniqueNameForNameMap(htmlSiteNameMap, uploadSessionSpec.targetName);
            uploadSessionSpec.targetName = newName;
            var dupData = getDuplicateNameRecordForWebPageSpec(uploadSessionSpec, i, newName, existingBsnAsset);
            dupData.replaceExisting = false;
            dupData.verifiedResolution = false;
            _this._duplicateHtmlSiteNameRecordMap.set(i, dupData);
            htmlSiteNameMap[newName] = [i];
        };
        for (var i = 1; i < indexArray.length; ++i) {
            setUniqueName(indexArray[i]);
        }
        if (!lodash_1.isNil(existingBsnAsset) && existingBsnAsset.name === currentTargetName) {
            setUniqueName(indexArray[0]);
            delete htmlSiteNameMap[currentTargetName];
        }
        else {
            htmlSiteNameMap[currentTargetName] = [indexArray[0]];
        }
    };
    CmcAssetUploadJob.prototype.setExistingLocatorForUploadWebPage = function (existingWebPageLocator) {
        var _this = this;
        this._webPageUploadSessions.forEach(function (uploadSessionSpec, index) {
            if (existingWebPageLocator.name.toLowerCase() === uploadSessionSpec.targetName.toLowerCase()) {
                uploadSessionSpec.existingAsset = existingWebPageLocator;
                var dupData = getDuplicateNameRecordForWebPageSpec(uploadSessionSpec, index, uploadSessionSpec.targetName, existingWebPageLocator);
                dupData.replaceExisting = true;
                dupData.verifiedResolution = false;
                _this._duplicateHtmlSiteNameRecordMap.set(index, dupData);
            }
        });
    };
    CmcAssetUploadJob.prototype.processFileUploads = function () {
        var _this = this;
        if (!this._uploadFileSpecs || this._uploadFileSpecs.length === 0 || this.cancellationRequested) {
            return Promise.resolve();
        }
        return new Promise(function (resolve, reject) {
            var doProgressCallback = function () {
                if (_this._onProgress) {
                    try {
                        _this._onProgress(_this._uploadJobProgress);
                    }
                    catch (error) {
                        reject(new error_1.BsCmError(error_1.BsCmErrorType.unexpectedError, 'Exception in progress callback: ' + error.message));
                    }
                }
            };
            var processNextFileUpload = function (jobIndex) {
                var uploadFileSpec = _this._uploadFileSpecs[jobIndex];
                var processFileProgress = function (progress) {
                    _this._uploadJobProgress.totalProgressFraction =
                        (_this._completedUploadBytes +
                            (uploadFileSpec.file.fileSize * progress.fractionComplete)) / _this._totalUploadBytes;
                    _this._uploadJobProgress.fileStatus[progress.jobIndex] = progress;
                    doProgressCallback();
                };
                if (!_this._cancellationRequested) {
                    _this._currentFileUploadItem =
                        bsnconnector_1.bsnCreateFileUploadItem(uploadFileSpec.file, uploadFileSpec.destinationPath, jobIndex, processFileProgress, null, null, null, null, null, uploadFileSpec.targetName);
                    _this._currentFileUploadItem.upload()
                        .then(function (uploadResult) {
                        if (uploadResult.status === bscore_1.BsUploadItemStatus.Uploaded) {
                            return assetManager_1.cmGetCmiAssetForBsnAsset(uploadResult.assetItem)
                                .then(function (asset) {
                                if (!lodash_1.isNil(asset)) {
                                    uploadResult = __assign(__assign({}, uploadResult), { assetItem: asset.assetItem });
                                }
                                return uploadResult;
                            });
                        }
                        else {
                            return uploadResult;
                        }
                    })
                        .then(function (uploadResult) {
                        _this._uploadJobResult.fileUploadResults.push(uploadResult);
                        if (uploadResult.status !== bscore_1.BsUploadItemStatus.Cancelled) {
                            if (uploadResult.status === bscore_1.BsUploadItemStatus.Failed) {
                                _this._uploadJobResult.hasItemFailures = true;
                                _this._uploadJobResult.failedFileUploads = _this._uploadJobResult.failedFileUploads + 1;
                                _this._uploadJobProgress.failedItems = _this._uploadJobProgress.failedItems + 1;
                            }
                            var moreFilesToUpload = !_this._cancellationRequested && jobIndex + 1 < _this._uploadFileSpecs.length;
                            if (!moreFilesToUpload) {
                                _this._uploadJobProgress.status =
                                    _this._cancellationRequested ? bs_task_manager_1.BsTaskStatus.Cancelled : bs_task_manager_1.BsTaskStatus.Completed;
                            }
                            _this._uploadJobProgress.completedItems = _this._uploadJobProgress.completedItems + 1;
                            _this._completedUploadBytes = _this._completedUploadBytes + uploadFileSpec.file.fileSize;
                            _this._uploadJobProgress.totalProgressFraction = _this._completedUploadBytes / _this._totalUploadBytes;
                            doProgressCallback();
                            if (moreFilesToUpload) {
                                return processNextFileUpload(jobIndex + 1);
                            }
                            else {
                                resolve();
                            }
                        }
                        else {
                            _this.cancelNow();
                            resolve();
                        }
                    });
                }
                else {
                    _this.cancelNow();
                    resolve();
                }
            };
            return processNextFileUpload(0);
        });
    };
    CmcAssetUploadJob.prototype.processWebPageUploads = function () {
        var _this = this;
        if (!this._webPageUploadSessions || this._webPageUploadSessions.length === 0 || this.cancellationRequested) {
            return Promise.resolve();
        }
        return new Promise(function (resolve, reject) {
            var doProgressCallback = function () {
                if (_this._onProgress) {
                    try {
                        _this._onProgress(_this._uploadJobProgress);
                    }
                    catch (error) {
                        reject(new error_1.BsCmError(error_1.BsCmErrorType.unexpectedError, 'Exception in progress callback: ' + error.message));
                    }
                }
            };
            var processNextWebPageUpload = function (jobIndex) {
                var webPageUploadSession = _this._webPageUploadSessions[jobIndex];
                webPageUploadSession.siteName = webPageUploadSession.targetName;
                var processWebPageProgress = function (progress) {
                    _this._uploadJobProgress.totalProgressFraction =
                        (_this._completedUploadBytes +
                            (progress.totalBytes * progress.fractionComplete)) / _this._totalUploadBytes;
                    _this._uploadJobProgress.webPageStatus[progress.jobIndex] = progress;
                    doProgressCallback();
                };
                if (!_this._cancellationRequested) {
                    _this._currentWebPageUploadItem =
                        bsnconnector_1.bsnCreateWebPageUploadItem(webPageUploadSession, jobIndex, processWebPageProgress);
                    _this._currentWebPageUploadItem.upload()
                        .then(function (uploadResult) {
                        if (uploadResult.status === bscore_1.BsUploadItemStatus.Uploaded) {
                            return assetManager_1.cmGetCmiAssetForBsnAsset(uploadResult.assetItem)
                                .then(function (asset) {
                                if (!lodash_1.isNil(asset)) {
                                    uploadResult = __assign(__assign({}, uploadResult), { assetItem: asset.assetItem });
                                }
                                return uploadResult;
                            });
                        }
                        else {
                            return uploadResult;
                        }
                    })
                        .then(function (uploadResult) {
                        _this._uploadJobResult.webPageUploadResults.push(uploadResult);
                        if (uploadResult.status !== bscore_1.BsUploadItemStatus.Cancelled) {
                            if (uploadResult.status === bscore_1.BsUploadItemStatus.Failed) {
                                _this._uploadJobResult.hasItemFailures = true;
                                _this._uploadJobResult.failedWebPageUploads = _this._uploadJobResult.failedWebPageUploads + 1;
                                _this._uploadJobProgress.failedItems = _this._uploadJobProgress.failedItems + 1;
                            }
                            var moreWebPageSessionsToUpload = !_this._cancellationRequested && jobIndex + 1 < _this._webPageUploadSessions.length;
                            if (!moreWebPageSessionsToUpload) {
                                _this._uploadJobProgress.status =
                                    _this._cancellationRequested ? bs_task_manager_1.BsTaskStatus.Cancelled : bs_task_manager_1.BsTaskStatus.Completed;
                            }
                            _this._uploadJobProgress.completedItems = _this._uploadJobProgress.completedItems + 1;
                            var totalWebPageBytes = _this._uploadJobProgress.webPageStatus[jobIndex].totalBytes;
                            _this._completedUploadBytes = _this._completedUploadBytes + totalWebPageBytes;
                            _this._uploadJobProgress.totalProgressFraction = _this._completedUploadBytes / _this._totalUploadBytes;
                            doProgressCallback();
                            if (moreWebPageSessionsToUpload) {
                                return processNextWebPageUpload(jobIndex + 1);
                            }
                            else {
                                resolve();
                            }
                        }
                        else {
                            _this.cancelNow();
                            resolve();
                        }
                    });
                }
                else {
                    _this.cancelNow();
                    resolve();
                }
            };
            return processNextWebPageUpload(0);
        });
    };
    CmcAssetUploadJob.prototype.getTotalUploadBytes = function () {
        var totalBytes = 0;
        if (this._uploadFileSpecs) {
            totalBytes += this._uploadFileSpecs.reduce(function (acc, fileSource) { return acc + fileSource.file.fileSize; }, 0);
        }
        if (this._webPageUploadSessions) {
            totalBytes += this._webPageUploadSessions.reduce(function (acc, sessionSpec) {
                return acc + CmcAssetUploadJob.getWebPageSessionTotalBytes(sessionSpec);
            }, 0);
        }
        return totalBytes;
    };
    CmcAssetUploadJob.prototype.setTaskStatus = function (status) {
        this._uploadJobResult.status = status;
        this._uploadJobProgress.status = status;
        if (status === bs_task_manager_1.BsTaskStatus.Failed && lodash_1.isFunction(this.onError)) {
            this.onError(this);
        }
        if (status === bs_task_manager_1.BsTaskStatus.Completed && lodash_1.isFunction(this.onSuccess)) {
            this.onSuccess(this);
        }
        if (status === bs_task_manager_1.BsTaskStatus.Cancelled && lodash_1.isFunction(this.onCancel)) {
            this.onCancel(this);
        }
    };
    CmcAssetUploadJob.prototype.cancelNow = function () {
        this._cancellationRequested = true;
        this._uploadJobProgress.status = bs_task_manager_1.BsTaskStatus.Cancelled;
        if (this._onProgress) {
            try {
                this._onProgress(this._uploadJobProgress);
            }
            catch (error) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.unexpectedError, 'Exception in progress callback: ' + error.message);
            }
        }
    };
    return CmcAssetUploadJob;
}());
exports.CmcAssetUploadJob = CmcAssetUploadJob;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("./bsdatamodel");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcDeviceWebPageAsset = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var asset_1 = __webpack_require__(9);
var htmlSiteAsset_1 = __webpack_require__(18);
var bsnOperations_1 = __webpack_require__(8);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcDeviceWebPageAsset = (function (_super) {
    __extends(CmcDeviceWebPageAsset, _super);
    function CmcDeviceWebPageAsset(assetItem) {
        var _this = this;
        if (assetItem.assetType !== bscore_1.AssetType.DeviceHtmlSite) {
            throw (new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Attempt to create CmcDeviceWebPageAsset object with AssetType.' + assetItem.assetType));
        }
        _this = _super.call(this, assetItem) || this;
        return _this;
    }
    CmcDeviceWebPageAsset.getBsAssetDeviceWebPageItemFromBsn = function (item) {
        var assetItem = htmlSiteAsset_1.CmcHtmlSiteAsset.getBsAssetHtmlSiteItemFromBsn(item);
        assetItem.assetType = bscore_1.AssetType.DeviceHtmlSite;
        return assetItem;
    };
    Object.defineProperty(CmcDeviceWebPageAsset.prototype, "deviceWebPageInfo", {
        get: function () {
            return this.getAssetItemProperty('assetData');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceWebPageAsset.prototype, "indexFile", {
        get: function () {
            var siteProperties = this.deviceWebPageInfo;
            return lodash_1.isNull(siteProperties) ? null : siteProperties.indexFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceWebPageAsset.prototype, "presentationList", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceWebPageAsset.prototype, "presentationCount", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceWebPageAsset.prototype, "permissions", {
        get: function () {
            var deviceWebPageInfo = this.deviceWebPageInfo;
            return lodash_1.isNil(deviceWebPageInfo) || lodash_1.isNil(deviceWebPageInfo.permissions) ? [] : deviceWebPageInfo.permissions;
        },
        enumerable: false,
        configurable: true
    });
    CmcDeviceWebPageAsset.prototype.getDeviceWebPageAssetList = function () {
        var _this = this;
        if (this.assetLocation !== bscore_1.AssetLocation.Bsn) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'DeviceWebPage asset list can only be returned for BSN based DeviceWebPages.'));
        }
        var siteProperties = this.deviceWebPageInfo;
        if (!lodash_1.isNil(siteProperties) && !lodash_1.isNil(siteProperties.assets)) {
            return Promise.resolve(siteProperties.assets);
        }
        return bsnconnector_1.bsnGetSession().getDeviceWebPageEntity(this.name)
            .then(function (entity) {
            _this.updateCachedAssetItem(CmcDeviceWebPageAsset.getBsAssetDeviceWebPageItemFromBsn(entity));
            siteProperties = _this.deviceWebPageInfo;
            var assetItems = siteProperties === null || siteProperties === void 0 ? void 0 : siteProperties.assets;
            return lodash_1.isNil(assetItems) ? null : assetItems;
        });
    };
    CmcDeviceWebPageAsset.prototype.fetchAssetItemData = function () {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().getDeviceWebPageEntity(this.networkIdOrName)
                .then(function (entity) {
                _this.updateCachedAssetItem(CmcDeviceWebPageAsset.getBsAssetDeviceWebPageItemFromBsn(entity));
                return _this;
            });
        }
        return _super.prototype.fetchAssetItemData.call(this);
    };
    CmcDeviceWebPageAsset.prototype.testAssetExists = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().existsDeviceWebPage(this._name);
        }
        return _super.prototype.testAssetExists.call(this);
    };
    CmcDeviceWebPageAsset.prototype.replacePermissions = function (objectPermissions) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnOperations_1.cmGetBsnPermissionEntityList(objectPermissions, this.networkId)
                .then(function (permissionEntityList) {
                return bsnconnector_1.bsnGetSession().replaceDeviceWebPagePermissions(_this.networkId, permissionEntityList);
            })
                .then(function () { return _this.fetchAssetItemData(); })
                .then(function () {
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssetPermissions, { assetItems: [_this.internalAssetItem] });
                return _this;
            });
        }
        return _super.prototype.replacePermissions.call(this, objectPermissions);
    };
    return CmcDeviceWebPageAsset;
}(asset_1.CmcAsset));
exports.CmcDeviceWebPageAsset = CmcDeviceWebPageAsset;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcPresentationAsset = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var bsdatamodel_1 = __webpack_require__(22);
var bs_device_artifacts_1 = __webpack_require__(42);
var bs_autoplay_generator_1 = __webpack_require__(96);
var notifyInternal_1 = __webpack_require__(4);
var asset_1 = __webpack_require__(9);
var error_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(6);
var assetManager_1 = __webpack_require__(10);
var assetMetadataCache_1 = __webpack_require__(70);
var bsnOperations_1 = __webpack_require__(8);
var lodash_1 = __webpack_require__(0);
var CmcPresentationAsset = (function (_super) {
    __extends(CmcPresentationAsset, _super);
    function CmcPresentationAsset(assetItem) {
        var _this = _super.call(this, assetItem) || this;
        _this._autorunVersion = bs_device_artifacts_1.bsDaGetRegisteredAutorunVersion();
        if (!(assetItem.assetType === bscore_1.AssetType.Project || assetItem.assetType === bscore_1.AssetType.ProjectBpf)) {
            throw (new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Attempt to create CmcPresentationAsset object with AssetType.' + assetItem.assetType));
        }
        return _this;
    }
    CmcPresentationAsset.getBsAssetPresentationItemFromBsn = function (item) {
        var _a, _b, _c;
        var assetType = lodash_1.isNil((_a = item.projectFile) === null || _a === void 0 ? void 0 : _a.name) ?
            bscore_1.AssetType.Project : bscore_1.bscGetBscFileTypeInfo(item.projectFile.name).assetType;
        var assetData = CmcPresentationAsset.getBsnPresentationPropertiesFromBsnEntity(item);
        var assetItem = {
            id: bscore_1.BsAssetIdNone,
            name: item.name,
            path: '',
            networkId: item.id,
            location: bscore_1.AssetLocation.Bsn,
            assetType: assetType,
            scope: bsnconnector_1.bsnGetSession().networkName,
            locator: '',
            fileSize: lodash_1.isNil((_b = item.projectFile) === null || _b === void 0 ? void 0 : _b.size) ? 0 : item.projectFile.size,
            thumbUrl: null,
            creationDate: item.creationDate,
            lastModifiedDate: lodash_1.isNil((_c = item.projectFile) === null || _c === void 0 ? void 0 : _c.lastModifiedDate) ?
                item.lastModifiedDate : item.projectFile.lastModifiedDate,
            assetData: assetData,
            permissions: assetData.permissions,
        };
        if (item.thumbnailFile) {
            assetItem.thumbUrl = item.thumbnailFile.path;
        }
        assetItem.locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
        return assetItem;
    };
    CmcPresentationAsset.getBsnPresentationSaveData = function (name, state, autorunVersion, id, thumbnailFileId, thumbnailData, thumbnailExt) {
        if (id === void 0) { id = 0; }
        var dmState = bsdatamodel_1.dmFilterDmState(state);
        var error = bsdatamodel_1.dmCheckForInvalidDmSignState(dmState);
        if (error) {
            throw error;
        }
        var signMetadata = bsdatamodel_1.dmGetSignMetaData(dmState);
        var data = {
            name: name,
            autorunVersion: autorunVersion,
            deviceModel: signMetadata.model,
            videoMode: signMetadata.videoMode,
            connector: signMetadata.videoConnector,
            backgroundColor: signMetadata.backgroundScreenColor,
            language: signMetadata.language,
            projectState: state,
        };
        if (id) {
            data.id = id;
        }
        if (!lodash_1.isNil(thumbnailFileId)) {
            data.thumbnailFileId = thumbnailFileId;
        }
        else if (!lodash_1.isNil(thumbnailData)) {
            data.thumbnailData = thumbnailData;
            if (!lodash_1.isNil(thumbnailExt)) {
                data.thumbnailExt = thumbnailExt;
            }
        }
        return data;
    };
    CmcPresentationAsset.getBsnPresentationAssetFileData = function (state) {
        var dmState = bsdatamodel_1.dmFilterDmState(state);
        var presentationAssetSpec = bsdatamodel_1.dmGetBsnPresentationAssetItemSpecification(dmState);
        var assetFileData = {};
        if (!lodash_1.isNil(presentationAssetSpec)) {
            if (!lodash_1.isNil(presentationAssetSpec.mediaFiles)) {
                assetFileData.mediaFiles =
                    presentationAssetSpec.mediaFiles.map(CmcPresentationAsset.getPresentationFileFromAssetItem);
            }
            if (!lodash_1.isNil(presentationAssetSpec.webPages)) {
                assetFileData.webPages =
                    presentationAssetSpec.webPages.map(CmcPresentationAsset.getPresentationFileFromAssetItem);
            }
            if (!lodash_1.isNil(presentationAssetSpec.liveTextFeeds)) {
                assetFileData.liveTextFeeds =
                    presentationAssetSpec.liveTextFeeds.map(CmcPresentationAsset.getPresentationFileFromAssetItem);
            }
            if (!lodash_1.isNil(presentationAssetSpec.liveMediaFeeds)) {
                assetFileData.liveMediaFeeds =
                    presentationAssetSpec.liveMediaFeeds.map(CmcPresentationAsset.getPresentationFileFromAssetItem);
            }
            if (!lodash_1.isNil(presentationAssetSpec.dynamicPlaylists)) {
                assetFileData.dynamicPlaylists =
                    presentationAssetSpec.dynamicPlaylists.map(CmcPresentationAsset.getPresentationFileFromAssetItem);
            }
            if (!lodash_1.isNil(presentationAssetSpec.taggedPlaylists)) {
                assetFileData.taggedPlaylists =
                    presentationAssetSpec.taggedPlaylists.map(CmcPresentationAsset.getPresentationFileFromAssetItem);
            }
            if (!lodash_1.isNil(presentationAssetSpec.autorunPlugins)) {
                assetFileData.autorunPlugins =
                    presentationAssetSpec.autorunPlugins.map(CmcPresentationAsset.getPresentationFileFromAssetItem);
            }
            var defaultWebPagePromises = [];
            if (presentationAssetSpec.useStandardDeviceWebPage) {
                var standardDeviceWebPagePromise = bsnOperations_1.cmGetDefaultPresentationWebPageAsset()
                    .then(function (standardWebPageAssetItem) {
                    assetFileData.deviceWebPage =
                        CmcPresentationAsset.getPresentationFileFromAssetItem(standardWebPageAssetItem);
                });
                defaultWebPagePromises.push(standardDeviceWebPagePromise);
            }
            else if (!lodash_1.isNil(presentationAssetSpec.deviceWebPage)) {
                assetFileData.deviceWebPage =
                    CmcPresentationAsset.getPresentationFileFromAssetItem(presentationAssetSpec.deviceWebPage);
            }
            if (presentationAssetSpec.useClockZoneWebPage) {
                var clockWidgetWebPagePromise = bsnOperations_1.cmGetDefaultClockZoneWebPageAsset()
                    .then(function (clockWidgetWebPageAssetItem) {
                    var presentationFile = CmcPresentationAsset.getPresentationFileFromAssetItem(clockWidgetWebPageAssetItem);
                    if (lodash_1.isNil(assetFileData.webPages)) {
                        assetFileData.webPages = [presentationFile];
                    }
                    else {
                        assetFileData.webPages.push(presentationFile);
                    }
                });
                defaultWebPagePromises.push(clockWidgetWebPagePromise);
            }
            if (defaultWebPagePromises.length) {
                return Promise.all(defaultWebPagePromises)
                    .then(function () { return assetFileData; });
            }
        }
        return Promise.resolve(assetFileData);
    };
    CmcPresentationAsset.getBsnPresentationDependentPresentationData = function (state, assetFileData, sizeLimit) {
        if (sizeLimit === void 0) { sizeLimit = 20; }
        var assetLocatorToRefEntity = function (locator) { return ({
            id: locator.networkId,
            name: locator.name,
            type: bscore_1.BsnPresentationReferenceType.Presentation,
        }); };
        return CmcPresentationAsset.getDependentPresentationAssetLocators(state, bscore_1.AssetLocation.Bsn, sizeLimit)
            .then(function (assetLocators) {
            if (assetLocators.length > 0) {
                assetFileData.presentationDependencies = assetLocators.map(assetLocatorToRefEntity);
            }
            return assetFileData;
        });
    };
    CmcPresentationAsset.getDependentPresentationAssetLocators = function (state, location, sizeLimit) {
        if (sizeLimit === void 0) { sizeLimit = 20; }
        var rootPresentationName = bsdatamodel_1.dmGetSignName(bsdatamodel_1.dmFilterDmState(state));
        var assetLocators = [];
        var getDependencies = function (bsdmState) {
            var dmState = bsdatamodel_1.dmFilterDmState(bsdmState);
            var linkedPresentationAssets = bsdatamodel_1.dmGetLinkedPresentationAssetLocatorList(dmState)
                .filter(function (locator) { return locator.location === location; });
            var newLocators = linkedPresentationAssets.filter(function (locator) {
                if (locator.name === rootPresentationName) {
                    return false;
                }
                if (location === bscore_1.AssetLocation.Bsn) {
                    return lodash_1.isNil(lodash_1.find(assetLocators, ['networkId', locator.networkId]));
                }
                else {
                    return lodash_1.isNil(lodash_1.find(assetLocators, ['name', locator.name]));
                }
            });
            if (assetLocators.length + newLocators.length > sizeLimit) {
                return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.presentationDependencyLimitExceeded));
            }
            if (newLocators.length > 0) {
                assetLocators.push.apply(assetLocators, newLocators);
                return Promise.all(newLocators.map(function (locator) {
                    return assetManager_1.cmGetCmiAssetForAssetSpecification(locator)
                        .then(function (asset) {
                        if (!lodash_1.isNil(asset)) {
                            return asset.getProjectState()
                                .then(getDependencies);
                        }
                        return Promise.resolve([]);
                    });
                }))
                    .then(function () { return assetLocators; });
            }
            return Promise.resolve([]);
        };
        return getDependencies(state);
    };
    CmcPresentationAsset.getCurrentBsnPresentationAssetLocatorList = function (presentationProperties) {
        if (lodash_1.isNil(presentationProperties)) {
            return [];
        }
        var fileLocators = lodash_1.isNil(presentationProperties.files) ? [] :
            presentationProperties.files
                .map(bscore_1.bscAssetLocatorFromAssetItem)
                .filter(function (locator) { return locator.name !== 'autoplugins.brs'; });
        var pluginLocators = lodash_1.isNil(presentationProperties.autorunPlugins) ? [] :
            presentationProperties.autorunPlugins.map(bscore_1.bscAssetLocatorFromAssetItem);
        var locators = __spreadArrays(fileLocators, pluginLocators);
        if (!lodash_1.isNil(presentationProperties.deviceWebPage)
            && presentationProperties.deviceWebPage.name !== bsnOperations_1.DefaultPresentationWebPageName) {
            locators.push(bscore_1.bscAssetLocatorFromAssetItem(presentationProperties.deviceWebPage));
        }
        return locators;
    };
    CmcPresentationAsset.getBsnPresentationPublishData = function (state, options) {
        return CmcPresentationAsset.getBsnPresentationAssetFileData(state)
            .then(function (assetFileData) {
            var publishData = __assign({ autoplayFileData: options.autoplayFileData }, assetFileData);
            if (!lodash_1.isNil(options.resourcesFileData)) {
                publishData.resourcesFileData = options.resourcesFileData;
            }
            else if (!lodash_1.isNil(options.resourcesFileId)) {
                publishData.resourcesFileId = options.resourcesFileId;
            }
            if (options.userDefinedEventsData) {
                publishData.userDefinedEventsData = options.userDefinedEventsData;
            }
            else if (!lodash_1.isNil(options.userDefinedEventsId)) {
                publishData.userDefinedEventsId = options.userDefinedEventsId;
            }
            return publishData;
        });
    };
    CmcPresentationAsset.getBsnPresentationPropertiesFromBsnEntity = function (item) {
        var presentationProperties = {
            id: item.id,
            name: item.name,
            type: item.type,
            status: item.status,
            creationDate: item.creationDate,
            lastModifiedDate: item.lastModifiedDate,
            autorun: item.autorun,
            deviceModel: item.deviceModel,
            screenSettings: item.screenSettings,
            language: item.language,
            autoplayFile: CmcPresentationAsset.getBsAssetPresentationFileItemFromBsn(item.autoplayFile),
            projectFile: CmcPresentationAsset.getBsAssetPresentationFileItemFromBsn(item.projectFile, bscore_1.AssetType.Project),
            resourcesFile: CmcPresentationAsset.getBsAssetPresentationFileItemFromBsn(item.resourcesFile),
            userDefinedEventsFile: CmcPresentationAsset.getBsAssetPresentationFileItemFromBsn(item.userDefinedEventsFile),
            deviceWebPage: CmcPresentationAsset.getBsAssetPresentationFileItemFromBsn(item.deviceWebPage, bscore_1.AssetType.DeviceHtmlSite),
            thumbnailFile: CmcPresentationAsset.getBsAssetPresentationFileItemFromBsn(item.thumbnailFile),
            autorunPlugins: !lodash_1.isNil(item.autorunPlugins) ? item.autorunPlugins.map(function (file) { return CmcPresentationAsset.getBsAssetPresentationFileItemFromBsn(file, bscore_1.AssetType.BrightScript); }) : null,
            files: !lodash_1.isNil(item.files) ? item.files.map(function (file) { return CmcPresentationAsset.getBsAssetPresentationFileItemFromBsn(file); }) : null,
            dependencies: item.dependencies,
            groups: item.groups,
            permissions: lodash_1.isNil(item.permissions) ? [] : item.permissions.map(bsnOperations_1.cmGetBsnObjectPermissionFromBsnEntity),
        };
        return presentationProperties;
    };
    CmcPresentationAsset.getBsAssetPresentationFileItemFromBsn = function (item, type) {
        if (!lodash_1.isNil(item)) {
            var fileInfo = bsnconnector_1.bsnPresentationFileEntityToFileTypeInfo(item);
            var assetItem = {
                id: bscore_1.BsAssetIdNone,
                name: lodash_1.isNil(item.name) ? '' : item.name,
                path: '',
                networkId: item.id,
                location: bscore_1.AssetLocation.Bsn,
                assetType: lodash_1.isNil(type) ? fileInfo.assetType : type,
                scope: bsnconnector_1.bsnGetSession().networkName,
                locator: '',
            };
            if (!lodash_1.isNil(item.path)) {
                assetItem.fileUrl = item.path;
            }
            if (!lodash_1.isNil(item.size)) {
                assetItem.fileSize = item.size;
            }
            if (!lodash_1.isNil(item.hash)) {
                assetItem.fileHash = utils_1.cmNormalizeBsnHashString(item.hash);
            }
            if (!lodash_1.isNil(item.creationDate)) {
                assetItem.creationDate = item.creationDate;
            }
            if (!lodash_1.isNil(item.lastModifiedDate)) {
                assetItem.lastModifiedDate = item.lastModifiedDate;
            }
            if (item.hasOwnProperty('mediaType')) {
                assetItem.mediaType = item.mediaType;
            }
            else if (assetItem.assetType === bscore_1.AssetType.Content) {
                assetItem.mediaType = fileInfo.mediaType;
            }
            assetItem.locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
            return assetItem;
        }
        return null;
    };
    CmcPresentationAsset.getPresentationFileFromAssetItem = function (assetItem) {
        var presentationFileItem = {
            id: assetItem.networkId,
            path: null,
            type: bsnconnector_1.bsnAssetItemToBsnPresentationFileType(assetItem),
            name: assetItem.name,
            size: lodash_1.isNil(assetItem.fileSize) ? null : assetItem.fileSize,
            hash: lodash_1.isNil(assetItem.fileHash) ? null : assetItem.fileHash,
            creationDate: null,
            lastModifiedDate: null,
        };
        if (assetItem.mediaType) {
            presentationFileItem.mediaType = assetItem.mediaType;
        }
        return presentationFileItem;
    };
    Object.defineProperty(CmcPresentationAsset.prototype, "presentationProperties", {
        get: function () {
            return this.getAssetItemProperty('assetData');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPresentationAsset.prototype, "presentationBsnStatus", {
        get: function () {
            var presentationProps = this.presentationProperties;
            return lodash_1.isNil(presentationProps) ? bscore_1.BsnPresentationStatus.Draft : presentationProps.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPresentationAsset.prototype, "isScheduledOnBsn", {
        get: function () {
            var properties = this.presentationProperties;
            return !lodash_1.isNil(properties)
                && properties.status === bscore_1.BsnPresentationStatus.Published
                && !lodash_1.isNil(properties.groups)
                && properties.groups.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPresentationAsset.prototype, "bsnGroups", {
        get: function () {
            var properties = this.presentationProperties;
            return !lodash_1.isNil(properties) && !lodash_1.isNil(properties.groups) ? properties.groups : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPresentationAsset.prototype, "dependentPresentationNames", {
        get: function () {
            var properties = this.presentationProperties;
            return !lodash_1.isNil(properties) && !lodash_1.isNil(properties.dependencies) ? properties.dependencies.map(function (ref) { return ref.name; }) : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPresentationAsset.prototype, "permissions", {
        get: function () {
            return this.internalAssetItem.permissions;
        },
        enumerable: false,
        configurable: true
    });
    CmcPresentationAsset.prototype.fetchAssetItemData = function () {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().getPresentationEntity(this.networkIdOrName)
                .then(function (entity) {
                _this.updateCachedAssetItem(CmcPresentationAsset.getBsAssetPresentationItemFromBsn(entity));
                return _this;
            });
        }
        return _super.prototype.fetchAssetItemData.call(this);
    };
    CmcPresentationAsset.prototype.getPresentationProperties = function () {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn
            && (lodash_1.isNil(this.presentationProperties) || lodash_1.isNil(this.presentationProperties.files))) {
            return this.fetchAssetItemData()
                .then(function () { return _this.presentationProperties; });
        }
        return Promise.resolve(this.presentationProperties);
    };
    CmcPresentationAsset.prototype.testAssetExists = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().existsPresentation(this._name);
        }
        return _super.prototype.testAssetExists.call(this);
    };
    CmcPresentationAsset.prototype.replacePermissions = function (objectPermissions) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnOperations_1.cmGetBsnPermissionEntityList(objectPermissions, this.networkId)
                .then(function (permissionEntityList) {
                return bsnconnector_1.bsnGetSession().replacePresentationPermissions(_this.networkId, permissionEntityList);
            })
                .then(function () { return _this.fetchAssetItemData(); })
                .then(function () {
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssetPermissions, { assetItems: [_this.internalAssetItem] });
                return _this;
            });
        }
        return _super.prototype.replacePermissions.call(this, objectPermissions);
    };
    CmcPresentationAsset.prototype.getProjectState = function () {
        var _a, _b;
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsGetLocalJsonFileAsObject(this.fullPath)
                .then(function (object) { return object; });
        }
        else if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            if (!lodash_1.isNil((_b = (_a = this.presentationProperties) === null || _a === void 0 ? void 0 : _a.projectFile) === null || _b === void 0 ? void 0 : _b.fileUrl)) {
                return bsnconnector_1.bsnGetSession().getStoredJsonFile(this.presentationProperties.projectFile.fileUrl)
                    .then(function (object) { return object; });
            }
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unexpectedError, 'File URL not available for BSN project file'));
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcPresentationAsset.prototype.getLinkedPresentationAssetLocators = function () {
        var _this = this;
        return this.getProjectState()
            .then(function (projectState) {
            return CmcPresentationAsset.getDependentPresentationAssetLocators(projectState, _this.assetLocation);
        });
    };
    CmcPresentationAsset.prototype.saveProjectState = function (state, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (!lodash_1.isNil(options.autorunVersion)) {
            this._autorunVersion = options.autorunVersion;
        }
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, this.fullPath)
                .then(function () {
                var assetItem = fsconnector_1.fsGetAssetItemFromFile(_this.fullPath);
                _this.updateCachedAssetItem(assetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                return _this.updateAssetThumbnail();
            })
                .then(function () { return _this.assetItem; });
        }
        else if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            if (this.presentationBsnStatus === bscore_1.BsnPresentationStatus.Published) {
                return this.publish(state, options);
            }
            else {
                var saveData_1 = this.getSaveData(state);
                var assetFileDelta_1;
                return this.getPresentationAssetDelta(state)
                    .then(function (delta) {
                    assetFileDelta_1 = delta;
                    return CmcPresentationAsset.getBsnPresentationAssetFileData(state);
                })
                    .then(function (assetFileData) {
                    return CmcPresentationAsset.getBsnPresentationDependentPresentationData(state, assetFileData);
                })
                    .then(function (assetFileData) { return bsnconnector_1.bsnGetSession().updatePresentation(saveData_1, assetFileData); })
                    .then(function () { return bsnconnector_1.bsnGetSession().getPresentationEntity(_this.networkId); })
                    .then(function (entity) { return _this.processSavedPresentationEntity(entity, assetFileDelta_1); })
                    .then(function () { return _this.updateAssetThumbnail(); })
                    .then(function () { return _this.assetItem; });
            }
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcPresentationAsset.prototype.getAssetThumbnail = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return this.getPresentationProperties()
                .then(function (presentationProperties) {
                if (!lodash_1.isNil(presentationProperties === null || presentationProperties === void 0 ? void 0 : presentationProperties.thumbnailFile)) {
                    var _a = presentationProperties.thumbnailFile, fileUrl = _a.fileUrl, fileHash = _a.fileHash;
                    return bscore_1.bscCreateNetworkAssetThumbnail(fileUrl, null, fileHash);
                }
                else {
                    return null;
                }
            });
        }
        else if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsGetLocalJsonFileAsObject(this.fullPath)
                .then(function (object) {
                var dmState = bsdatamodel_1.dmFilterDmState(object);
                return bsdatamodel_1.dmGetThumbnail(dmState);
            });
        }
        return Promise.resolve(null);
    };
    CmcPresentationAsset.prototype.publish = function (state, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            if (!lodash_1.isNil(options.autorunVersion)) {
                this._autorunVersion = options.autorunVersion;
            }
            var saveData_2 = this.getSaveData(state);
            var assetFileDelta_2;
            return this.getPresentationAssetDelta(state)
                .then(function (delta) {
                assetFileDelta_2 = delta;
                return lodash_1.isNil(options.autoplayFileData) ?
                    bs_autoplay_generator_1.bsagGenerateAutoplay(bsdatamodel_1.dmFilterDmState(state)) : options.autoplayFileData;
            })
                .then(function (autoplayFileData) {
                var publishOptions = { autoplayFileData: autoplayFileData };
                if (lodash_1.isNil(options.resourcesFileData)) {
                    if (!lodash_1.isNil(_this.presentationProperties) && !lodash_1.isNil(_this.presentationProperties.resourcesFile)) {
                        publishOptions.resourcesFileId = _this.presentationProperties.resourcesFile.networkId;
                    }
                    else {
                        publishOptions.resourcesFileData = new Uint8Array(0);
                    }
                }
                else {
                    publishOptions.resourcesFileData = options.resourcesFileData;
                }
                if (!lodash_1.isNil(options.userDefinedEventsData)) {
                    publishOptions.userDefinedEventsData = options.userDefinedEventsData;
                }
                else if (!lodash_1.isNil(_this.presentationProperties) && !lodash_1.isNil(_this.presentationProperties.userDefinedEventsFile)) {
                    publishOptions.userDefinedEventsId = _this.presentationProperties.userDefinedEventsFile.networkId;
                }
                return CmcPresentationAsset.getBsnPresentationPublishData(state, publishOptions);
            })
                .then(function (publishData) {
                return CmcPresentationAsset.getBsnPresentationDependentPresentationData(state, publishData);
            })
                .then(function (publishData) {
                return bsnconnector_1.bsnGetSession().publishPresentation(saveData_2, publishData);
            })
                .then(function () { return bsnconnector_1.bsnGetSession().getPresentationEntity(_this.networkId); })
                .then(function (entity) { return _this.processSavedPresentationEntity(entity, assetFileDelta_2); })
                .then(function () { return _this.updateAssetThumbnail(); })
                .then(function () { return _this.assetItem; });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcPresentationAsset.prototype.updateAssetThumbnail = function () {
        var _this = this;
        return this.getAssetThumbnail()
            .then(function (assetThumbnail) {
            if (!lodash_1.isNil(assetThumbnail)) {
                var thumbnail = {
                    url: null,
                    size: lodash_1.isNil(assetThumbnail.size) ? null : assetThumbnail.size,
                    hash: lodash_1.isNil(assetThumbnail.hash) ? null : assetThumbnail.hash,
                };
                if (assetThumbnail.kind === 'network') {
                    thumbnail.url = assetThumbnail.url;
                }
                else if (typeof window !== 'undefined') {
                    var URL_1 = window.URL || window.webkitURL;
                    var blob = new Blob([assetThumbnail.data], { type: assetThumbnail.type });
                    thumbnail.url = URL_1.createObjectURL(blob);
                }
                assetMetadataCache_1.cmGetAssetMetadataCache()
                    .updateAssetThumbnail(_this._locatorHash, thumbnail, _this.lastModifiedDate);
            }
        });
    };
    CmcPresentationAsset.prototype.getSaveData = function (state) {
        var _a;
        var presentationId = this.networkId;
        var dmThumbnail = bsdatamodel_1.dmGetThumbnail(bsdatamodel_1.dmFilterDmState(state));
        var thumbnailId = 0;
        var thumbnailHash = '';
        if (!lodash_1.isNil((_a = this.presentationProperties) === null || _a === void 0 ? void 0 : _a.thumbnailFile)) {
            thumbnailId = this.presentationProperties.thumbnailFile.networkId;
            if (this.presentationProperties.thumbnailFile.fileHash) {
                thumbnailHash = this.presentationProperties.thumbnailFile.fileHash;
            }
        }
        if (!lodash_1.isNil(dmThumbnail) && !(dmThumbnail.hash && thumbnailHash && dmThumbnail.hash === thumbnailHash)) {
            return CmcPresentationAsset.getBsnPresentationSaveData(this.name, state, this._autorunVersion, presentationId, null, dmThumbnail.data, bscore_1.bscGetFileExtensionForMimeType(dmThumbnail.type));
        }
        return CmcPresentationAsset.getBsnPresentationSaveData(this.name, state, this._autorunVersion, presentationId, thumbnailId);
    };
    CmcPresentationAsset.prototype.getPresentationAssetDelta = function (state) {
        var assetDelta = { addedAssets: null, removedAssets: null };
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return this.getPresentationProperties()
                .then(function (props) {
                if (!lodash_1.isNil(props)) {
                    var currentAssetLocators = CmcPresentationAsset.getCurrentBsnPresentationAssetLocatorList(props);
                    var projectStateAssetLocators = bsdatamodel_1.dmGetBsnAssetLocatorList(bsdatamodel_1.dmFilterDmState(state));
                    assetDelta.addedAssets =
                        lodash_1.differenceWith(projectStateAssetLocators, currentAssetLocators, utils_1.cmAreBsnAssetLocatorsEqual);
                    assetDelta.removedAssets =
                        lodash_1.differenceWith(currentAssetLocators, projectStateAssetLocators, utils_1.cmAreBsnAssetLocatorsEqual);
                }
                return assetDelta;
            });
        }
        return Promise.resolve(assetDelta);
    };
    CmcPresentationAsset.prototype.processSavedPresentationEntity = function (entity, assetFileDelta) {
        var updatedAssetItem = __assign(__assign({}, this.internalAssetItem), { assetData: CmcPresentationAsset.getBsnPresentationPropertiesFromBsnEntity(entity), thumbUrl: lodash_1.isNil(entity.thumbnailFile) ? null : entity.thumbnailFile.path });
        if (!lodash_1.isNil(entity.projectFile)) {
            if (!lodash_1.isNil(entity.projectFile.size)) {
                updatedAssetItem.fileSize = entity.projectFile.size;
            }
            if (!lodash_1.isNil(entity.projectFile.lastModifiedDate)) {
                updatedAssetItem.lastModifiedDate = entity.projectFile.lastModifiedDate;
            }
        }
        this.updateCachedAssetItem(updatedAssetItem);
        notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssets, { assetItems: [this.internalAssetItem] });
        if (!lodash_1.isNil(assetFileDelta.addedAssets) && assetFileDelta.addedAssets.length > 0) {
            notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addAssetUsageComponent, { assetLocators: assetFileDelta.addedAssets, usageComponentAssetLocator: this.assetLocator });
        }
        if (!lodash_1.isNil(assetFileDelta.removedAssets) && assetFileDelta.removedAssets.length > 0) {
            notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removeAssetUsageComponent, { assetLocators: assetFileDelta.removedAssets, usageComponentAssetLocator: this.assetLocator });
        }
        return this.assetItem;
    };
    return CmcPresentationAsset;
}(asset_1.CmcAsset));
exports.CmcPresentationAsset = CmcPresentationAsset;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BsCurrentUserRole = exports.BsRole = exports.cmGetValidCurrentUserRole = exports.cmGetValidBsRole = exports.cmGetBsRole = exports.cmGetRoleOperationPermission = void 0;
var bsnconnector_1 = __webpack_require__(1);
var roleCache_1 = __webpack_require__(38);
var operationManager_1 = __webpack_require__(37);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
function cmGetRoleOperationPermission(operationUid, isAllowed) {
    return { operationUid: operationUid, isAllowed: isAllowed };
}
exports.cmGetRoleOperationPermission = cmGetRoleOperationPermission;
function cmGetBsRole(name) {
    return new BsRole(name);
}
exports.cmGetBsRole = cmGetBsRole;
function cmGetValidBsRole(name) {
    var role = new BsRole(name);
    return role.checkRoleData()
        .catch(function (error) {
        if (error instanceof error_1.BsCmError && error.type === error_1.BsCmErrorType.roleNotFound) {
            return null;
        }
        throw error;
    });
}
exports.cmGetValidBsRole = cmGetValidBsRole;
function cmGetValidCurrentUserRole() {
    var role = new BsCurrentUserRole();
    return role.checkRoleData()
        .catch(function (error) {
        if (error instanceof error_1.BsCmError && error.type === error_1.BsCmErrorType.roleNotFound) {
            return null;
        }
        throw error;
    });
}
exports.cmGetValidCurrentUserRole = cmGetValidCurrentUserRole;
var BsRole = (function () {
    function BsRole(name) {
        this._id = 0;
        this._name = name;
    }
    Object.defineProperty(BsRole.prototype, "isRoleDataValid", {
        get: function () { return roleCache_1.cmGetBsRoleCache().hasRole(this._name); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "lastRoleDataUpdateTime", {
        get: function () { return roleCache_1.cmGetBsRoleCache().getRoleUpdateTime(this._name); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "roleData", {
        get: function () { return roleCache_1.cmGetBsRoleCache().getRoleEntity(this._name); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "description", {
        get: function () {
            var roleData = this.roleData;
            return lodash_1.isNil(roleData) ? null : roleData.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "userCount", {
        get: function () {
            var roleData = this.roleData;
            return lodash_1.isNil(roleData) ? 0 : roleData.userCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "isRoleUserDataValid", {
        get: function () {
            var roleData = this.roleData;
            return !lodash_1.isNil(roleData)
                && (roleData.userCount === 0 || (!lodash_1.isNil(roleData.users) && roleData.users.length === roleData.userCount));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "isCustom", {
        get: function () {
            var roleData = this.roleData;
            return lodash_1.isNil(roleData) ? true : roleData.isCustom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "users", {
        get: function () {
            var roleData = this.roleData;
            return lodash_1.isNil(roleData) || lodash_1.isNil(roleData.users) ? [] : roleData.users;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "permissions", {
        get: function () {
            var roleData = this.roleData;
            return lodash_1.isNil(roleData) || lodash_1.isNil(roleData.permissions) ? [] : roleData.permissions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "permissionsCopy", {
        get: function () {
            var roleData = this.roleData;
            var permissionsCopy = [];
            if (!lodash_1.isNil(roleData) && !lodash_1.isNil(roleData.permissions)) {
                permissionsCopy = roleData.permissions.map(function (permission) { return ({
                    operationUid: permission.operationUID,
                    isAllowed: permission.isAllowed,
                }); });
            }
            return permissionsCopy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "bsnRolePrincipal", {
        get: function () {
            return {
                id: this.bsnId,
                type: bsnconnector_1.BsnPermissionPrincipalType.Role,
                name: this._name,
                isCustom: this.isCustom,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRole.prototype, "bsnId", {
        get: function () {
            if (!this._id) {
                var roleData = this.roleData;
                if (!lodash_1.isNil(roleData)) {
                    this._id = roleData.id;
                }
            }
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    BsRole.prototype.isOperationAllowed = function (operationUid, entityId) {
        if (entityId === void 0) { entityId = null; }
        var prm = lodash_1.find(this.permissions, { operationUID: operationUid, entityId: entityId });
        var operation = operationManager_1.cmGetOperationManager().getOperationByUid(operationUid);
        if (lodash_1.isNil(prm)) {
            var opParent = lodash_1.isNil(operation) ? null : operation.parent;
            while (!lodash_1.isNil(opParent)) {
                prm = lodash_1.find(this.permissions, { operationUID: opParent.uid, entityId: entityId });
                if (!lodash_1.isNil(prm)) {
                    return prm.isAllowed;
                }
                opParent = opParent.parent;
            }
        }
        if (lodash_1.isNil(prm)) {
            return lodash_1.isNil(entityId) ? false : null;
        }
        return prm.isAllowed;
    };
    BsRole.prototype.fetchRoleData = function () {
        var _this = this;
        return bsnconnector_1.bsnGetSession().getRoleEntity(this.bsnId ? this.bsnId : this._name)
            .then(function (role) {
            _this._id = role.id;
            roleCache_1.cmGetBsRoleCache().setRole(role);
            return _this;
        })
            .catch(function (error) {
            if (error instanceof bsnconnector_1.BsnError && !lodash_1.isNil(error.response) && error.response.status === 404) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.roleNotFound, _this._name);
            }
            throw error;
        });
    };
    BsRole.prototype.checkRoleData = function () {
        if (!this.isRoleDataValid) {
            return this.fetchRoleData();
        }
        return Promise.resolve(this);
    };
    BsRole.prototype.updateRole = function (updateData) {
        var _this = this;
        return bsnconnector_1.bsnGetSession().updateRole(updateData)
            .then(function () { return _this.fetchRoleData(); });
    };
    return BsRole;
}());
exports.BsRole = BsRole;
var BsCurrentUserRole = (function (_super) {
    __extends(BsCurrentUserRole, _super);
    function BsCurrentUserRole() {
        return _super.call(this, bsnconnector_1.bsnGetSession().roleName) || this;
    }
    BsCurrentUserRole.prototype.fetchRoleData = function () {
        var _this = this;
        return bsnconnector_1.bsnGetSession().getSelfRoleEntity()
            .then(function (role) {
            _this._id = role.id;
            roleCache_1.cmGetBsRoleCache().setRole(role);
            return _this;
        })
            .catch(function (error) {
            if (error instanceof bsnconnector_1.BsnError && !lodash_1.isNil(error.response) && error.response.status === 404) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.roleNotFound, _this.name);
            }
            throw error;
        });
    };
    return BsCurrentUserRole;
}(BsRole));
exports.BsCurrentUserRole = BsCurrentUserRole;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BsCurrentUser = exports.BsUser = exports.cmGetValidCurrentUser = exports.cmGetValidBsUser = exports.cmGetBsUser = void 0;
var bsnconnector_1 = __webpack_require__(1);
var userCache_1 = __webpack_require__(39);
var operationManager_1 = __webpack_require__(37);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
function cmGetBsUser(login) {
    return new BsUser(login);
}
exports.cmGetBsUser = cmGetBsUser;
function cmGetValidBsUser(login) {
    var user = new BsUser(login);
    return user.checkUserData()
        .catch(function (error) {
        if (error instanceof error_1.BsCmError && error.type === error_1.BsCmErrorType.userNotFound) {
            return null;
        }
        throw error;
    });
}
exports.cmGetValidBsUser = cmGetValidBsUser;
function cmGetValidCurrentUser() {
    var user = new BsCurrentUser();
    return user.checkUserData()
        .catch(function (error) {
        if (error instanceof error_1.BsCmError && error.type === error_1.BsCmErrorType.userNotFound) {
            return null;
        }
        throw error;
    });
}
exports.cmGetValidCurrentUser = cmGetValidCurrentUser;
var BsUser = (function () {
    function BsUser(login) {
        this._id = 0;
        this._login = login;
    }
    Object.defineProperty(BsUser.prototype, "isUserDataValid", {
        get: function () { return userCache_1.cmGetBsUserCache().hasUser(this._login); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUser.prototype, "lastUserDataUpdateTime", {
        get: function () { return userCache_1.cmGetBsUserCache().getUserUpdateTime(this._login); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUser.prototype, "userData", {
        get: function () { return userCache_1.cmGetBsUserCache().getUserEntity(this._login); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUser.prototype, "login", {
        get: function () { return this._login; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUser.prototype, "firstName", {
        get: function () {
            var userData = this.userData;
            return lodash_1.isNil(userData) ? null : userData.person.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUser.prototype, "lastName", {
        get: function () {
            var userData = this.userData;
            return lodash_1.isNil(userData) ? null : userData.person.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUser.prototype, "isLockedOut", {
        get: function () {
            var userData = this.userData;
            return lodash_1.isNil(userData) ? false : userData.isLockedOut;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUser.prototype, "description", {
        get: function () {
            var userData = this.userData;
            return lodash_1.isNil(userData) ? null : userData.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUser.prototype, "roleName", {
        get: function () {
            var userData = this.userData;
            return lodash_1.isNil(userData) ? null : userData.roleName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUser.prototype, "permissions", {
        get: function () {
            var userData = this.userData;
            return lodash_1.isNil(userData) ? [] : userData.permissions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUser.prototype, "bsnUserPrincipal", {
        get: function () {
            return {
                id: this.bsnId,
                type: bsnconnector_1.BsnPermissionPrincipalType.User,
                login: this._login,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUser.prototype, "bsnId", {
        get: function () {
            if (!this._id) {
                var userData = this.userData;
                if (!lodash_1.isNil(userData)) {
                    this._id = userData.id;
                }
            }
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    BsUser.prototype.isOperationAllowed = function (operationUid, entityId) {
        var prm = lodash_1.find(this.permissions, { operationUID: operationUid, entityId: entityId });
        var operation = operationManager_1.cmGetOperationManager().getOperationByUid(operationUid);
        if (lodash_1.isNil(prm) && !lodash_1.isNil(operation)) {
            var opParent = operation.parent;
            while (!lodash_1.isNil(opParent)) {
                prm = lodash_1.find(this.permissions, { operationUID: opParent.uid, entityId: entityId });
                if (!lodash_1.isNil(prm)) {
                    return prm.isAllowed;
                }
                opParent = opParent.parent;
            }
        }
        return lodash_1.isNil(prm) ? null : prm.isAllowed;
    };
    BsUser.prototype.fetchUserData = function () {
        var _this = this;
        return bsnconnector_1.bsnGetSession().getUserEntity(this.bsnId ? this.bsnId : this._login)
            .then(function (user) {
            _this._id = user.id;
            userCache_1.cmGetBsUserCache().setUser(user);
            return _this;
        })
            .catch(function (error) {
            if (error instanceof bsnconnector_1.BsnError && !lodash_1.isNil(error.response) && error.response.status === 404) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.userNotFound, _this._login);
            }
            throw error;
        });
    };
    BsUser.prototype.checkUserData = function () {
        if (!this.isUserDataValid) {
            return this.fetchUserData();
        }
        return Promise.resolve(this);
    };
    BsUser.prototype.updateUser = function (updateData) {
        var _this = this;
        return bsnconnector_1.bsnGetSession().updateUser(updateData)
            .then(function () { return _this.fetchUserData(); });
    };
    return BsUser;
}());
exports.BsUser = BsUser;
var BsCurrentUser = (function (_super) {
    __extends(BsCurrentUser, _super);
    function BsCurrentUser() {
        return _super.call(this, bsnconnector_1.bsnGetSession().userName) || this;
    }
    BsCurrentUser.prototype.fetchUserData = function () {
        var _this = this;
        return bsnconnector_1.bsnGetSession().getSelfUserEntity()
            .then(function (user) {
            _this._id = user.id;
            userCache_1.cmGetBsUserCache().setUser(user);
            return _this;
        })
            .catch(function (error) {
            if (error instanceof bsnconnector_1.BsnError && !lodash_1.isNil(error.response) && error.response.status === 404) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.userNotFound, 'current user: ' + _this.login);
            }
            throw error;
        });
    };
    return BsCurrentUser;
}(BsUser));
exports.BsCurrentUser = BsCurrentUser;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("./bs-playlist-dm");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcBrightScriptAsset = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var fsconnector_1 = __webpack_require__(5);
var asset_1 = __webpack_require__(9);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(0);
var isomorphic_path_1 = __webpack_require__(11);
var CmcBrightScriptAsset = (function (_super) {
    __extends(CmcBrightScriptAsset, _super);
    function CmcBrightScriptAsset(assetItem) {
        var _this = this;
        if (assetItem.assetType !== bscore_1.AssetType.BrightScript) {
            throw (new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Attempt to create BrightScript object with AssetType.' + assetItem.assetType));
        }
        _this = _super.call(this, assetItem) || this;
        return _this;
    }
    CmcBrightScriptAsset.getBsAssetPluginItemFromBsn = function (item) {
        var assetItem = {
            id: bscore_1.BsAssetIdNone,
            name: item.fileInfo.name,
            path: '',
            networkId: item.id,
            location: bscore_1.AssetLocation.Bsn,
            assetType: bscore_1.AssetType.BrightScript,
            scope: bsnconnector_1.bsnGetSession().networkName,
            locator: '',
            fileSize: item.fileInfo.size,
            fileHash: utils_1.cmNormalizeBsnHashString(item.fileInfo.hash),
            fileUrl: item.fileInfo.path,
            creationDate: item.fileInfo.creationDate,
            lastModifiedDate: item.fileInfo.lastModifiedDate,
        };
        assetItem.locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
        return assetItem;
    };
    CmcBrightScriptAsset.getBsnPluginSaveData = function (fileName, pluginData, id) {
        if (id === void 0) { id = 0; }
        var data = {
            name: isomorphic_path_1.default.parse(fileName).name,
            fileName: fileName,
            pluginData: pluginData,
        };
        if (id) {
            data.id = id;
        }
        return data;
    };
    CmcBrightScriptAsset.prototype.savePlugin = function (file) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return fsconnector_1.fsGetFileSha1(file)
                .then(function (sha1) {
                var assetItem = _this.internalAssetItem;
                var sourceFileName = utils_1.getFilenameFromFileSpec(file);
                var sourceFilePath = utils_1.getFileDirPathFromFileSpec(file);
                if (lodash_1.isNil(assetItem.fileHash) || sha1.toUpperCase() !== assetItem.fileHash.toUpperCase()) {
                    return utils_1.getFileContentFromFileSpec(file)
                        .then(function (data) {
                        var pluginId = assetItem.networkId;
                        var saveData = CmcBrightScriptAsset.getBsnPluginSaveData(assetItem.name, data, pluginId);
                        return bsnconnector_1.bsnGetSession().updatePlugin(saveData)
                            .then(function () { return bsnconnector_1.bsnGetSession().getPluginEntity(pluginId); })
                            .then(function (entity) {
                            assetItem = CmcBrightScriptAsset.getBsAssetPluginItemFromBsn(entity);
                            _this.updateCachedAssetItem(assetItem);
                            notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssets, { assetItems: [assetItem] });
                            return {
                                jobIndex: 0,
                                sourceFileName: sourceFileName, sourceFilePath: sourceFilePath,
                                assetItem: _this.assetItem, status: bscore_1.BsUploadItemStatus.Uploaded
                            };
                        })
                            .catch(function (error) {
                            return {
                                jobIndex: 0,
                                sourceFileName: sourceFileName, sourceFilePath: sourceFilePath,
                                assetItem: null, status: bscore_1.BsUploadItemStatus.Failed,
                                error: error
                            };
                        });
                    });
                }
                else {
                    return {
                        jobIndex: 0,
                        sourceFileName: sourceFileName, sourceFilePath: sourceFilePath,
                        assetItem: _this.assetItem, status: bscore_1.BsUploadItemStatus.Matched
                    };
                }
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcBrightScriptAsset.prototype.fetchAssetItemData = function () {
        return _super.prototype.fetchAssetItemData.call(this);
    };
    CmcBrightScriptAsset.prototype.testAssetExists = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            var scriptEntityName = isomorphic_path_1.default.basename(this._name, '.brs');
            return bsnconnector_1.bsnGetSession().existsPlugin(scriptEntityName);
        }
        return _super.prototype.testAssetExists.call(this);
    };
    return CmcBrightScriptAsset;
}(asset_1.CmcAsset));
exports.CmcBrightScriptAsset = CmcBrightScriptAsset;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcDynamicPlaylistAsset = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var bs_playlist_dm_1 = __webpack_require__(27);
var asset_1 = __webpack_require__(9);
var bsnOperations_1 = __webpack_require__(8);
var notifyInternal_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(6);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcDynamicPlaylistAsset = (function (_super) {
    __extends(CmcDynamicPlaylistAsset, _super);
    function CmcDynamicPlaylistAsset(assetItem) {
        var _this = this;
        if (assetItem.assetType !== bscore_1.AssetType.BSNDynamicPlaylist) {
            throw (new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Attempt to create CmcDynamicPlaylistAsset object with AssetType.' + assetItem.assetType));
        }
        _this = _super.call(this, assetItem) || this;
        return _this;
    }
    CmcDynamicPlaylistAsset.getBsAssetItemFromDynamicPlaylistEntity = function (feedItem) {
        var contentId = feedItem.contentId, fileName = feedItem.fileName, displayDuration = feedItem.displayDuration, validityStartDate = feedItem.validityStartDate, validityEndDate = feedItem.validityEndDate;
        var contentItemData = {
            displayDuration: bscore_1.bscTimeSpanStringToSeconds(displayDuration),
            validityStartDate: validityStartDate, validityEndDate: validityEndDate,
        };
        var contentAssetItem = {
            id: bscore_1.BsAssetIdNone,
            name: fileName,
            path: '',
            networkId: contentId,
            location: bscore_1.AssetLocation.Bsn,
            assetType: bscore_1.AssetType.Content,
            scope: bsnconnector_1.bsnGetSession().networkName,
            locator: '',
            mediaType: bscore_1.bscGetFileMediaType(fileName),
            contentItemData: contentItemData,
        };
        contentAssetItem.locator = bscore_1.bscGenerateAssetLocatorKey(contentAssetItem);
        return contentAssetItem;
    };
    CmcDynamicPlaylistAsset.getBsDynamicPlaylistPropertiesFromBsn = function (item) {
        var id = item.id, name = item.name, physicalPath = item.physicalPath, fileSize = item.fileSize, fileHash = item.fileHash, creationDate = item.creationDate, lastModifiedDate = item.lastModifiedDate, supportsAudio = item.supportsAudio, supportsVideo = item.supportsVideo, supportsImages = item.supportsImages, permissions = item.permissions;
        var dynamicPlaylist = {
            type: 'BSNDynamicPlaylist',
            location: bscore_1.AssetLocation.Bsn,
            id: id, name: name, physicalPath: physicalPath, fileSize: fileSize, fileHash: fileHash, creationDate: creationDate, lastModifiedDate: lastModifiedDate,
            supportsAudio: supportsAudio, supportsVideo: supportsVideo, supportsImages: supportsImages,
            content: null,
            permissions: lodash_1.isNil(permissions) ? [] : permissions.map(bsnOperations_1.cmGetBsnObjectPermissionFromBsnEntity),
        };
        if (!lodash_1.isNil(item.content)) {
            dynamicPlaylist.content = item.content.map(CmcDynamicPlaylistAsset.getBsAssetItemFromDynamicPlaylistEntity);
        }
        return dynamicPlaylist;
    };
    CmcDynamicPlaylistAsset.getBsAssetDynamicPlaylistItemFromBsn = function (item) {
        var assetData = CmcDynamicPlaylistAsset.getBsDynamicPlaylistPropertiesFromBsn(item);
        var assetItem = {
            id: bscore_1.BsAssetIdNone,
            name: item.name,
            path: '',
            networkId: item.id,
            location: bscore_1.AssetLocation.Bsn,
            assetType: bscore_1.AssetType.BSNDynamicPlaylist,
            scope: bsnconnector_1.bsnGetSession().networkName,
            locator: '',
            fileUrl: item.physicalPath,
            fileSize: item.fileSize,
            fileHash: utils_1.cmNormalizeBsnHashString(item.fileHash),
            creationDate: item.creationDate,
            lastModifiedDate: item.lastModifiedDate,
            assetData: assetData,
            assetUsage: { presentations: item.presentations },
            permissions: assetData.permissions,
        };
        assetItem.locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
        return assetItem;
    };
    CmcDynamicPlaylistAsset.getBsnDynamicPlaylistSaveData = function (state, dynamicPlaylistId) {
        var plDmState = bs_playlist_dm_1.plDmFilterPlDmState(state);
        var supports = bs_playlist_dm_1.plDmGetPlaylistSupports(plDmState);
        var error = bs_playlist_dm_1.plDmCheckForInvalidPlDmPlaylistState(plDmState);
        if (error) {
            throw error;
        }
        var contents = bs_playlist_dm_1.plDmGetContentItemsArrayInOrder(plDmState).map(function (id) {
            var item = bs_playlist_dm_1.plDmGetDynamicPlaylistContentItemById(plDmState, { id: id });
            return {
                contentId: item.mediaAssetItem.networkId,
                fileName: item.mediaAssetItem.name,
                displayDuration: item.contentItem.displayDuration ?
                    bscore_1.bscTimeSpanStringFromSeconds(item.contentItem.displayDuration) : null,
                validityStartDate: item.contentItem.enableValidityDate === true ? item.contentItem.validityStartDate : null,
                validityEndDate: item.contentItem.enableValidityDate === true ? item.contentItem.validityEndDate : null,
            };
        });
        var saveData = {
            name: bs_playlist_dm_1.plDmGetPlaylistName(plDmState),
            supportsAudio: supports.supportsAudio,
            supportsVideo: supports.supportsVideo,
            supportsImages: supports.supportsImages,
            content: contents,
        };
        if (dynamicPlaylistId) {
            saveData.id = dynamicPlaylistId;
        }
        return saveData;
    };
    CmcDynamicPlaylistAsset.getCurrentDynamicPlaylistAssetLocatorList = function (playlistProperties) {
        return lodash_1.isNil(playlistProperties === null || playlistProperties === void 0 ? void 0 : playlistProperties.content) ? [] : playlistProperties.content.map(bscore_1.bscAssetLocatorFromAssetItem);
    };
    CmcDynamicPlaylistAsset.getPlaylistStateDynamicPlaylistAssetLocatorList = function (state) {
        var plDmState = bs_playlist_dm_1.plDmFilterPlDmState(state);
        return bs_playlist_dm_1.plDmGetContentItemsArrayInOrder(plDmState).map(function (id) {
            var item = bs_playlist_dm_1.plDmGetDynamicPlaylistContentItemById(plDmState, { id: id });
            return bscore_1.bscAssetLocatorFromAssetItem(item.mediaAssetItem);
        });
    };
    Object.defineProperty(CmcDynamicPlaylistAsset.prototype, "isContentDataValid", {
        get: function () {
            var feedInfo = this.feedInfo;
            return !lodash_1.isNil(feedInfo) && !lodash_1.isNil(feedInfo.content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDynamicPlaylistAsset.prototype, "feedInfo", {
        get: function () {
            return this.getAssetItemProperty('assetData');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDynamicPlaylistAsset.prototype, "presentationList", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDynamicPlaylistAsset.prototype, "presentationCount", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDynamicPlaylistAsset.prototype, "permissions", {
        get: function () {
            return this.internalAssetItem.permissions;
        },
        enumerable: false,
        configurable: true
    });
    CmcDynamicPlaylistAsset.prototype.getFeedInfoWithContent = function () {
        var _this = this;
        var feedInfo = this.feedInfo;
        if (feedInfo && !lodash_1.isNil(feedInfo.content)) {
            return Promise.resolve(feedInfo);
        }
        return this.fetchAssetItemData()
            .then(function () { return _this.feedInfo; });
    };
    CmcDynamicPlaylistAsset.prototype.fetchAssetItemData = function () {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().getDynamicPlaylistEntity(this.networkIdOrName)
                .then(function (feedEntity) {
                _this.updateCachedAssetItem(CmcDynamicPlaylistAsset.getBsAssetDynamicPlaylistItemFromBsn(feedEntity));
                return _this;
            });
        }
        return _super.prototype.fetchAssetItemData.call(this);
    };
    CmcDynamicPlaylistAsset.prototype.testAssetExists = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().existsDynamicPlaylist(this._name);
        }
        return Promise.resolve(false);
    };
    CmcDynamicPlaylistAsset.prototype.replacePermissions = function (objectPermissions) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnOperations_1.cmGetBsnPermissionEntityList(objectPermissions, this.networkId)
                .then(function (permissionEntityList) {
                return bsnconnector_1.bsnGetSession().replaceDynamicPlaylistPermissions(_this.networkId, permissionEntityList);
            })
                .then(function () { return _this.fetchAssetItemData(); })
                .then(function () {
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssetPermissions, { assetItems: [_this.internalAssetItem] });
                return _this;
            });
        }
        return _super.prototype.replacePermissions.call(this, objectPermissions);
    };
    CmcDynamicPlaylistAsset.prototype.updateDynamicPlaylist = function (state) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, this.fullPath);
        }
        else if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            var dynamicPlaylistId_1 = this.networkId;
            var saveData_1 = CmcDynamicPlaylistAsset.getBsnDynamicPlaylistSaveData(state, dynamicPlaylistId_1);
            var assetFileDelta_1;
            return this.getPlaylistAssetDelta(state)
                .then(function (delta) {
                assetFileDelta_1 = delta;
                return bsnconnector_1.bsnGetSession().updateDynamicPlaylist(saveData_1);
            })
                .then(function () { return bsnconnector_1.bsnGetSession().getDynamicPlaylistEntity(dynamicPlaylistId_1); })
                .then(function (feedEntity) {
                var updatedAssetItem = CmcDynamicPlaylistAsset.getBsAssetDynamicPlaylistItemFromBsn(feedEntity);
                _this.updateCachedAssetItem(updatedAssetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssets, { assetItems: [_this.internalAssetItem] });
                if (!lodash_1.isNil(assetFileDelta_1.addedAssets) && assetFileDelta_1.addedAssets.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addAssetUsageComponent, { assetLocators: assetFileDelta_1.addedAssets, usageComponentAssetLocator: _this.assetLocator });
                }
                if (!lodash_1.isNil(assetFileDelta_1.removedAssets) && assetFileDelta_1.removedAssets.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removeAssetUsageComponent, { assetLocators: assetFileDelta_1.removedAssets, usageComponentAssetLocator: _this.assetLocator });
                }
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcDynamicPlaylistAsset.prototype.getPlaylistAssetDelta = function (state) {
        var assetDelta = { addedAssets: null, removedAssets: null };
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return this.getFeedInfoWithContent()
                .then(function (props) {
                var currentAssetLocators = CmcDynamicPlaylistAsset.getCurrentDynamicPlaylistAssetLocatorList(props);
                var playlistStateAssetLocators = CmcDynamicPlaylistAsset.getPlaylistStateDynamicPlaylistAssetLocatorList(state);
                assetDelta.addedAssets =
                    lodash_1.differenceWith(playlistStateAssetLocators, currentAssetLocators, utils_1.cmAreBsnAssetLocatorsEqual);
                assetDelta.removedAssets =
                    lodash_1.differenceWith(currentAssetLocators, playlistStateAssetLocators, utils_1.cmAreBsnAssetLocatorsEqual);
                return assetDelta;
            });
        }
        return Promise.resolve(assetDelta);
    };
    return CmcDynamicPlaylistAsset;
}(asset_1.CmcAsset));
exports.CmcDynamicPlaylistAsset = CmcDynamicPlaylistAsset;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.CmcMediaAsset = void 0;
var bscore_1 = __webpack_require__(2);
var bsdatamodel_1 = __webpack_require__(22);
var bsnconnector_1 = __webpack_require__(1);
var fsconnector_1 = __webpack_require__(5);
var contentAsset_1 = __webpack_require__(71);
var bsnOperations_1 = __webpack_require__(8);
var error_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(0);
var notifyInternal_1 = __webpack_require__(4);
var CmcMediaAsset = (function (_super) {
    __extends(CmcMediaAsset, _super);
    function CmcMediaAsset(assetItem) {
        var _this = this;
        if (assetItem.assetType !== bscore_1.AssetType.Content) {
            throw (new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Attempt to create CmcMediaAsset object with AssetType.' + assetItem.assetType));
        }
        _this = _super.call(this, assetItem) || this;
        return _this;
    }
    CmcMediaAsset.getBsAssetMediaFileItemFromBsn = function (item) {
        var assetItem = {
            id: bscore_1.BsAssetIdNone,
            name: item.fileName,
            path: item.virtualPath,
            networkId: item.id,
            location: bscore_1.AssetLocation.Bsn,
            assetType: bscore_1.AssetType.Content,
            scope: bsnconnector_1.bsnGetSession().networkName,
            locator: '',
            mediaType: item.mediaType,
            fileSize: item.fileSize,
            fileHash: utils_1.cmNormalizeBsnHashString(item.fileHash),
            fileUrl: item.physicalPath,
            lastModifiedDate: item.fileLastModifiedDate,
            creationDate: item.uploadDate,
            uploadDate: item.uploadDate,
            thumbUrl: item.thumbPath,
            probeData: item.probeData,
            assetData: CmcMediaAsset.getBsMediaFileDataFromBsn(item.metadata, item.mediaType),
            assetUsage: {
                presentations: item.presentations,
                dynamicPlaylists: item.dynamicPlaylists,
                liveMediaFeeds: item.liveMediaFeeds,
                taggedPlaylists: item.taggedPlaylists,
            },
            tags: item.tags,
            permissions: lodash_1.isNil(item.permissions) ? [] : item.permissions.map(bsnOperations_1.cmGetBsnObjectPermissionFromBsnEntity),
        };
        assetItem.locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
        return assetItem;
    };
    CmcMediaAsset.getBsMediaFileDataFromBsn = function (metadata, mediaType) {
        var avBaseData = function (data) {
            var baseData = __assign({}, lodash_1.pick(data, ['transport', 'packetLen', 'indexed', 'audioCodec',
                'audioPid', 'audioChannelCount', 'audioSampleRate', 'audioBitrate']));
            if (!lodash_1.isNil(data.duration)) {
                baseData.duration = bscore_1.bscTimeSpanStringToSeconds(data.duration);
            }
            return baseData;
        };
        if (!lodash_1.isNil(metadata)) {
            switch (mediaType) {
                case bscore_1.MediaType.Video:
                    var videoMetadata = metadata;
                    var videoData = __assign(__assign({ mediaType: 'Video' }, avBaseData(videoMetadata)), lodash_1.pick(videoMetadata, ['videoCodec', 'videoPid', 'subtitlePid', 'subtitleLanguage']));
                    if (!lodash_1.isNil(videoMetadata.widthPx) && !lodash_1.isNil(videoMetadata.heightPx)) {
                        videoData.size = { width: videoMetadata.widthPx, height: videoMetadata.heightPx };
                    }
                    if (!lodash_1.isNil(videoMetadata.videoDuration)) {
                        videoData.videoDuration = bscore_1.bscTimeSpanStringToSeconds(videoMetadata.videoDuration);
                    }
                    if (!lodash_1.isNil(videoMetadata.audioDuration)) {
                        videoData.audioDuration = bscore_1.bscTimeSpanStringToSeconds(videoMetadata.audioDuration);
                    }
                    return videoData;
                case bscore_1.MediaType.Audio:
                    return __assign({ mediaType: 'Audio' }, avBaseData(metadata));
                case bscore_1.MediaType.Image:
                    var imageMetadata = metadata;
                    return __assign({ mediaType: 'Image', size: lodash_1.isNil(imageMetadata.widthPx) || lodash_1.isNil(imageMetadata.heightPx) ? { width: -1, height: -1 } :
                            { width: imageMetadata.widthPx, height: imageMetadata.heightPx }, orientation: bscore_1.bscImageOrientationToRotationType(imageMetadata.orientation) }, lodash_1.pick(imageMetadata, ['colorSpace', 'colorDepthBit', 'imageFormat', 'dateTaken']));
            }
        }
        return null;
    };
    Object.defineProperty(CmcMediaAsset.prototype, "assetItem", {
        get: function () {
            return lodash_1.pick(this.internalAssetItem, [
                'id', 'name', 'path', 'networkId', 'location', 'assetType', 'scope', 'locator', 'mediaType',
                'fileSize', 'fileHash', 'fileUrl', 'thumbUrl', 'creationDate', 'lastModifiedDate',
                'uploadDate', 'probeData', 'assetData', 'hasSubFolders', 'tags'
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAsset.prototype, "presentationList", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAsset.prototype, "presentationCount", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAsset.prototype, "dynamicPlaylistList", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.dynamicPlaylists) ?
                assetItem.assetUsage.dynamicPlaylists : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAsset.prototype, "dynamicPlaylistCount", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.dynamicPlaylists) ?
                assetItem.assetUsage.dynamicPlaylists.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAsset.prototype, "liveMediaFeedList", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.liveMediaFeeds) ?
                assetItem.assetUsage.liveMediaFeeds : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAsset.prototype, "liveMediaFeedCount", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.liveMediaFeeds) ?
                assetItem.assetUsage.liveMediaFeeds.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAsset.prototype, "taggedPlaylistList", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.taggedPlaylists) ?
                assetItem.assetUsage.taggedPlaylists : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAsset.prototype, "taggedPlaylistCount", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.taggedPlaylists) ?
                assetItem.assetUsage.taggedPlaylists.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAsset.prototype, "tags", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.tags) ? assetItem.tags : [];
        },
        enumerable: false,
        configurable: true
    });
    CmcMediaAsset.prototype.getVideoData = function () {
        var _this = this;
        var mediaData = this.getAssetItemProperty('assetData');
        if (bscore_1.bscIsVideoData(mediaData)) {
            return Promise.resolve(mediaData);
        }
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsGetMediaFileMetadata(this.internalAssetItem)
                .then(function (data) {
                if (bscore_1.bscIsVideoData(data)) {
                    _this.updateCachedAssetItemAssetData(data);
                }
                return Promise.resolve(data);
            })
                .catch(function () { return null; });
        }
        return Promise.resolve(null);
    };
    CmcMediaAsset.prototype.getAudioData = function () {
        var _this = this;
        var mediaData = this.getAssetItemProperty('assetData');
        if (bscore_1.bscIsAudioData(mediaData)) {
            return Promise.resolve(mediaData);
        }
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsGetMediaFileMetadata(this.internalAssetItem)
                .then(function (data) {
                if (bscore_1.bscIsAudioData(data) || bscore_1.bscIsVideoData(data)) {
                    _this.updateCachedAssetItemAssetData(data);
                }
                return Promise.resolve(data);
            })
                .catch(function () { return null; });
        }
        return Promise.resolve(null);
    };
    CmcMediaAsset.prototype.getImageData = function () {
        var _this = this;
        var mediaData = this.getAssetItemProperty('assetData');
        if (bscore_1.bscIsImageData(mediaData)) {
            return Promise.resolve(mediaData);
        }
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsGetExifData(this.internalAssetItem)
                .then(function (data) {
                if (bscore_1.bscIsImageData(data)) {
                    _this.updateCachedAssetItemAssetData(data);
                }
                return Promise.resolve(data);
            });
        }
        return Promise.resolve(null);
    };
    CmcMediaAsset.prototype.getMediaFileData = function () {
        switch (this.mediaType) {
            case bscore_1.MediaType.Video:
                return this.getVideoData();
            case bscore_1.MediaType.Audio:
                return this.getAudioData();
            case bscore_1.MediaType.Image:
                return this.getImageData();
        }
        return Promise.resolve(null);
    };
    CmcMediaAsset.prototype.isMediaFileLegalForProject = function (state) {
        var signMetadata = bsdatamodel_1.dmGetSignMetaData(bsdatamodel_1.dmFilterDmState(state));
        if (this.mediaType === bscore_1.MediaType.Image) {
            return fsconnector_1.fsGetIsMediaLegal({
                file: this.internalAssetItem,
                videoMode: signMetadata.videoMode,
                fullResGraphics: signMetadata.fullResGraphicsEnabled,
            });
        }
        else {
            return fsconnector_1.fsGetIsMediaLegal({
                file: this.internalAssetItem,
                model: signMetadata.model,
            });
        }
    };
    CmcMediaAsset.prototype.getFileHash = function () {
        var _this = this;
        if (this.internalAssetItem.fileHash) {
            return Promise.resolve(this.internalAssetItem.fileHash);
        }
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return this.fetchAssetItemData()
                .then(function () { return _this.internalAssetItem.fileHash ? _this.internalAssetItem.fileHash : null; });
        }
        else if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsGetLocalFileSha1(this.fullPath)
                .then(function (hash) {
                if (hash) {
                    _this.updateCachedAssetItem(__assign(__assign({}, _this.internalAssetItem), { fileHash: hash }));
                    return hash;
                }
                return null;
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcMediaAsset.prototype.fetchAssetItemData = function () {
        var _this = this;
        var processBsnContentItem = function (bsnContentItem) {
            if (bsnconnector_1.bsnIsFileContentEntity(bsnContentItem)) {
                _this.updateCachedAssetItem(CmcMediaAsset.getBsAssetMediaFileItemFromBsn(bsnContentItem));
            }
            return _this;
        };
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            if (!this.networkId) {
                return bsnconnector_1.bsnGetSession().getContentItemsByName(this.name, this.dirPath)
                    .then(function (items) {
                    if (items.length > 0) {
                        var item = lodash_1.find(items, bsnconnector_1.bsnIsFileContentEntity);
                        if (item) {
                            return processBsnContentItem(item);
                        }
                    }
                    return _this;
                });
            }
            return bsnconnector_1.bsnGetSession().getContentItem(this.networkId)
                .then(processBsnContentItem);
        }
        return _super.prototype.fetchAssetItemData.call(this);
    };
    CmcMediaAsset.prototype.testAssetExists = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().existsContentItem(this._name, this.internalAssetItem.path);
        }
        return _super.prototype.testAssetExists.call(this);
    };
    CmcMediaAsset.prototype.replacePermissions = function (objectPermissions) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return this.replaceBsnContentPermissions(objectPermissions)
                .then(function () { return _this; });
        }
        return _super.prototype.replacePermissions.call(this, objectPermissions);
    };
    CmcMediaAsset.prototype.setTags = function (tags) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return this.checkBsnAssetItemData()
                .then(function () { return bsnconnector_1.bsnGetSession().setContentItemTags(_this.networkId, tags); })
                .then(function () { return _this.fetchAssetItemData(); })
                .then(function () {
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssets, { assetItems: [_this.internalAssetItem] });
                return;
            });
        }
        return _super.prototype.setTags.call(this, tags);
    };
    CmcMediaAsset.prototype.deleteTags = function (tagKeys) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return this.checkBsnAssetItemData()
                .then(function () { return bsnconnector_1.bsnGetSession().deleteContentItemTags(_this.networkId, tagKeys); })
                .then(function () { return _this.fetchAssetItemData(); })
                .then(function () {
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssets, { assetItems: [_this.internalAssetItem] });
                return;
            });
        }
        return _super.prototype.deleteTags.call(this, tagKeys);
    };
    CmcMediaAsset.prototype.checkBsnAssetItemData = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn && !this.networkId) {
            return this.fetchAssetItemData().then(function () { return; });
        }
        return Promise.resolve();
    };
    return CmcMediaAsset;
}(contentAsset_1.CmcContentAsset));
exports.CmcMediaAsset = CmcMediaAsset;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcMediaFeedAsset = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var bs_playlist_dm_1 = __webpack_require__(27);
var asset_1 = __webpack_require__(9);
var bsnOperations_1 = __webpack_require__(8);
var notifyInternal_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(6);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcMediaFeedAsset = (function (_super) {
    __extends(CmcMediaFeedAsset, _super);
    function CmcMediaFeedAsset(assetItem) {
        var _this = this;
        if (assetItem.assetType !== bscore_1.AssetType.BSNMediaFeed) {
            throw (new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Attempt to create CmcMediaFeedAsset object with AssetType.' + assetItem.assetType));
        }
        _this = _super.call(this, assetItem) || this;
        return _this;
    }
    CmcMediaFeedAsset.getBsAssetItemFromMediaFeedEntity = function (feedItem) {
        var contentId = feedItem.contentId, fileName = feedItem.fileName, title = feedItem.title, description = feedItem.description, displayDuration = feedItem.displayDuration, validityStartDate = feedItem.validityStartDate, validityEndDate = feedItem.validityEndDate, customFields = feedItem.customFields;
        var contentItemData = {
            title: title, description: description,
            displayDuration: bscore_1.bscTimeSpanStringToSeconds(displayDuration),
            validityStartDate: validityStartDate, validityEndDate: validityEndDate,
            customFields: lodash_1.isNil(customFields) ? {} : customFields,
        };
        var contentAssetItem = {
            id: bscore_1.BsAssetIdNone,
            name: fileName,
            path: '',
            networkId: contentId,
            location: bscore_1.AssetLocation.Bsn,
            assetType: bscore_1.AssetType.Content,
            scope: bsnconnector_1.bsnGetSession().networkName,
            locator: '',
            mediaType: bscore_1.bscGetFileMediaType(fileName),
            contentItemData: contentItemData,
        };
        contentAssetItem.locator = bscore_1.bscGenerateAssetLocatorKey(contentAssetItem);
        return contentAssetItem;
    };
    CmcMediaFeedAsset.getBsMediaFeedPropertiesFromBsn = function (item) {
        var id = item.id, name = item.name, ttl = item.ttl, physicalPath = item.physicalPath, fileSize = item.fileSize, fileHash = item.fileHash, creationDate = item.creationDate, lastModifiedDate = item.lastModifiedDate, permissions = item.permissions;
        var mediaFeed = {
            type: 'BSNMediaFeed',
            location: bscore_1.AssetLocation.Bsn,
            id: id, name: name, physicalPath: physicalPath, fileSize: fileSize,
            fileHash: utils_1.cmNormalizeBsnHashString(fileHash),
            ttl: bscore_1.bscTimeSpanStringToSeconds(ttl),
            creationDate: creationDate,
            lastModifiedDate: lastModifiedDate,
            content: null,
            permissions: lodash_1.isNil(permissions) ? [] : permissions.map(bsnOperations_1.cmGetBsnObjectPermissionFromBsnEntity),
        };
        if (!lodash_1.isNil(item.content)) {
            mediaFeed.content = item.content.map(CmcMediaFeedAsset.getBsAssetItemFromMediaFeedEntity);
        }
        return mediaFeed;
    };
    CmcMediaFeedAsset.getBsAssetMediaFeedItemFromBsn = function (item) {
        var assetData = CmcMediaFeedAsset.getBsMediaFeedPropertiesFromBsn(item);
        var assetItem = {
            id: bscore_1.BsAssetIdNone,
            name: item.name,
            path: '',
            networkId: item.id,
            location: bscore_1.AssetLocation.Bsn,
            assetType: bscore_1.AssetType.BSNMediaFeed,
            scope: bsnconnector_1.bsnGetSession().networkName,
            locator: '',
            fileUrl: item.physicalPath,
            fileSize: item.fileSize,
            fileHash: item.fileHash,
            creationDate: item.creationDate,
            lastModifiedDate: item.lastModifiedDate,
            assetData: assetData,
            assetUsage: { presentations: item.presentations },
            permissions: assetData.permissions,
        };
        assetItem.locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
        return assetItem;
    };
    CmcMediaFeedAsset.getBsnMediaFeedSaveData = function (state, mediaFeedId) {
        var plDmState = bs_playlist_dm_1.plDmFilterPlDmState(state);
        var error = bs_playlist_dm_1.plDmCheckForInvalidPlDmPlaylistState(plDmState);
        if (error) {
            throw error;
        }
        var contents = bs_playlist_dm_1.plDmGetContentItemsArrayInOrder(plDmState).map(function (id) {
            var item = bs_playlist_dm_1.plDmGetLiveMediaContentItemById(plDmState, { id: id });
            return {
                contentId: item.mediaAssetItem.networkId,
                fileName: item.mediaAssetItem.name,
                title: lodash_1.isNil(item.contentItem.title) || item.contentItem.title === '' ?
                    item.mediaAssetItem.name : item.contentItem.title,
                description: lodash_1.isNil(item.contentItem.description) ? '' : item.contentItem.description,
                displayDuration: lodash_1.isNil(item.contentItem.displayDuration) ? null :
                    bscore_1.bscTimeSpanStringFromSeconds(item.contentItem.displayDuration),
                disabled: item.contentItem.disable,
                customFields: item.customFields,
                validityStartDate: item.contentItem.enableValidityDate === true ? item.contentItem.validityStartDate : null,
                validityEndDate: item.contentItem.enableValidityDate === true ? item.contentItem.validityEndDate : null,
            };
        });
        var ttlSeconds = bs_playlist_dm_1.plDmGetPlaylistProperties(plDmState).ttl;
        var saveData = {
            name: bs_playlist_dm_1.plDmGetPlaylistName(plDmState),
            ttl: bscore_1.bscTimeSpanStringFromSeconds(ttlSeconds ? ttlSeconds : 300),
            content: contents,
        };
        if (mediaFeedId) {
            saveData.id = mediaFeedId;
        }
        return saveData;
    };
    CmcMediaFeedAsset.getCurrentMediaFeedAssetLocatorList = function (mediaFeedProperties) {
        return lodash_1.isNil(mediaFeedProperties === null || mediaFeedProperties === void 0 ? void 0 : mediaFeedProperties.content) ? [] : mediaFeedProperties.content.map(bscore_1.bscAssetLocatorFromAssetItem);
    };
    CmcMediaFeedAsset.getMediaFeedStateMediaFeedAssetLocatorList = function (state) {
        var plDmState = bs_playlist_dm_1.plDmFilterPlDmState(state);
        return bs_playlist_dm_1.plDmGetContentItemsArrayInOrder(plDmState).map(function (id) {
            var item = bs_playlist_dm_1.plDmGetLiveMediaContentItemById(plDmState, { id: id });
            return bscore_1.bscAssetLocatorFromAssetItem(item.mediaAssetItem);
        });
    };
    Object.defineProperty(CmcMediaFeedAsset.prototype, "isContentDataValid", {
        get: function () {
            var feedInfo = this.feedInfo;
            return !lodash_1.isNil(feedInfo) && !lodash_1.isNil(feedInfo.content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaFeedAsset.prototype, "feedInfo", {
        get: function () {
            return this.getAssetItemProperty('assetData');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaFeedAsset.prototype, "presentationList", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaFeedAsset.prototype, "presentationCount", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaFeedAsset.prototype, "permissions", {
        get: function () {
            return this.internalAssetItem.permissions;
        },
        enumerable: false,
        configurable: true
    });
    CmcMediaFeedAsset.prototype.getFeedInfoWithContent = function () {
        var _this = this;
        var feedInfo = this.feedInfo;
        if (feedInfo && !lodash_1.isNil(feedInfo.content)) {
            return Promise.resolve(feedInfo);
        }
        return this.fetchAssetItemData()
            .then(function () { return _this.feedInfo; });
    };
    CmcMediaFeedAsset.prototype.getCustomFieldNames = function () {
        var getCustomFieldNames = function (feedAssetData) {
            var names = [];
            var contentArray = feedAssetData === null || feedAssetData === void 0 ? void 0 : feedAssetData.content;
            if (!lodash_1.isNil(contentArray) && contentArray.length > 0) {
                var customFields = (contentArray[0].contentItemData).customFields;
                names = Object.keys(customFields);
            }
            return names;
        };
        if (this.isContentDataValid) {
            return Promise.resolve(getCustomFieldNames(this.feedInfo));
        }
        return this.getFeedInfoWithContent()
            .then(function (feedInfo) {
            return getCustomFieldNames(feedInfo);
        });
    };
    CmcMediaFeedAsset.prototype.fetchAssetItemData = function () {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().getMediaFeedEntity(this.networkIdOrName)
                .then(function (feedEntity) {
                _this.updateCachedAssetItem(CmcMediaFeedAsset.getBsAssetMediaFeedItemFromBsn(feedEntity));
                return _this;
            });
        }
        return _super.prototype.fetchAssetItemData.call(this);
    };
    CmcMediaFeedAsset.prototype.testAssetExists = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().existsMediaFeed(this._name);
        }
        return Promise.resolve(false);
    };
    CmcMediaFeedAsset.prototype.replacePermissions = function (objectPermissions) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnOperations_1.cmGetBsnPermissionEntityList(objectPermissions, this.networkId)
                .then(function (permissionEntityList) {
                return bsnconnector_1.bsnGetSession().replaceMediaFeedPermissions(_this.networkId, permissionEntityList);
            })
                .then(function () { return _this.fetchAssetItemData(); })
                .then(function () {
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssetPermissions, { assetItems: [_this.internalAssetItem] });
                return _this;
            });
        }
        return _super.prototype.replacePermissions.call(this, objectPermissions);
    };
    CmcMediaFeedAsset.prototype.updateMediaFeed = function (state) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, this.fullPath);
        }
        else if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            var mediaFeedId_1 = this.networkId;
            var saveData_1 = CmcMediaFeedAsset.getBsnMediaFeedSaveData(state, mediaFeedId_1);
            var assetFileDelta_1;
            return this.getMediaFeedAssetDelta(state)
                .then(function (delta) {
                assetFileDelta_1 = delta;
                return bsnconnector_1.bsnGetSession().updateMediaFeed(saveData_1);
            })
                .then(function () { return bsnconnector_1.bsnGetSession().getMediaFeedEntity(mediaFeedId_1); })
                .then(function (feedEntity) {
                var updatedAssetItem = CmcMediaFeedAsset.getBsAssetMediaFeedItemFromBsn(feedEntity);
                _this.updateCachedAssetItem(updatedAssetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssets, { assetItems: [_this.internalAssetItem] });
                if (!lodash_1.isNil(assetFileDelta_1.addedAssets) && assetFileDelta_1.addedAssets.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addAssetUsageComponent, { assetLocators: assetFileDelta_1.addedAssets, usageComponentAssetLocator: _this.assetLocator });
                }
                if (!lodash_1.isNil(assetFileDelta_1.removedAssets) && assetFileDelta_1.removedAssets.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removeAssetUsageComponent, { assetLocators: assetFileDelta_1.removedAssets, usageComponentAssetLocator: _this.assetLocator });
                }
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcMediaFeedAsset.prototype.getMediaFeedAssetDelta = function (state) {
        var assetDelta = { addedAssets: null, removedAssets: null };
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return this.getFeedInfoWithContent()
                .then(function (props) {
                var currentAssetLocators = CmcMediaFeedAsset.getCurrentMediaFeedAssetLocatorList(props);
                var mediaFeedStateAssetLocators = CmcMediaFeedAsset.getMediaFeedStateMediaFeedAssetLocatorList(state);
                assetDelta.addedAssets =
                    lodash_1.differenceWith(mediaFeedStateAssetLocators, currentAssetLocators, utils_1.cmAreBsnAssetLocatorsEqual);
                assetDelta.removedAssets =
                    lodash_1.differenceWith(currentAssetLocators, mediaFeedStateAssetLocators, utils_1.cmAreBsnAssetLocatorsEqual);
                return assetDelta;
            });
        }
        return Promise.resolve(assetDelta);
    };
    return CmcMediaFeedAsset;
}(asset_1.CmcAsset));
exports.CmcMediaFeedAsset = CmcMediaFeedAsset;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.CmcTaggedPlaylistAsset = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var bs_tagged_playlist_dm_1 = __webpack_require__(98);
var asset_1 = __webpack_require__(9);
var bsnOperations_1 = __webpack_require__(8);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var fsconnector_1 = __webpack_require__(5);
var utils_1 = __webpack_require__(6);
var CmcTaggedPlaylistAsset = (function (_super) {
    __extends(CmcTaggedPlaylistAsset, _super);
    function CmcTaggedPlaylistAsset(assetItem) {
        var _this = this;
        if (assetItem.assetType !== bscore_1.AssetType.BSNTaggedPlaylist) {
            throw (new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Attempt to create CmcTaggedPlaylistAsset object with AssetType.' + assetItem.assetType));
        }
        _this = _super.call(this, assetItem) || this;
        return _this;
    }
    CmcTaggedPlaylistAsset.getBsAssetItemFromTaggedPlaylistEntity = function (feedItem) {
        var contentId = feedItem.contentId, fileName = feedItem.fileName, displayDuration = feedItem.displayDuration, validityStartDate = feedItem.validityStartDate, validityEndDate = feedItem.validityEndDate, state = feedItem.state;
        var contentItemData = {
            displayDuration: bscore_1.bscTimeSpanStringToSeconds(displayDuration),
            validityStartDate: validityStartDate, validityEndDate: validityEndDate, state: state,
        };
        var contentAssetItem = {
            id: bscore_1.BsAssetIdNone,
            name: fileName,
            path: '',
            networkId: contentId,
            location: bscore_1.AssetLocation.Bsn,
            assetType: bscore_1.AssetType.Content,
            scope: bsnconnector_1.bsnGetSession().networkName,
            locator: '',
            mediaType: bscore_1.bscGetFileMediaType(fileName),
            contentItemData: contentItemData,
        };
        contentAssetItem.locator = bscore_1.bscGenerateAssetLocatorKey(contentAssetItem);
        return contentAssetItem;
    };
    CmcTaggedPlaylistAsset.getBsTaggedPlaylistPropertiesFromBsn = function (item, tagKeySpecs) {
        var id = item.id, name = item.name, physicalPath = item.physicalPath, contentsVirtualPath = item.contentsVirtualPath, rule = item.rule, orderTag = item.orderTag, ttl = item.ttl, waitingForApprove = item.waitingForApprove, creationDate = item.creationDate, lastModifiedDate = item.lastModifiedDate, permissions = item.permissions;
        var filterSpec = bsnOperations_1.cmResolveBsnTagFilterSpecification(bsnconnector_1.bsnParseTagRuleExpression(rule), tagKeySpecs);
        var tagSortSpec = bsnconnector_1.bsnParseTagOrderExpression(orderTag);
        var taggedPlaylist = {
            type: 'BSNTaggedPlaylist',
            location: bscore_1.AssetLocation.Bsn,
            id: id, name: name, physicalPath: physicalPath, contentsVirtualPath: contentsVirtualPath, waitingForApprove: waitingForApprove,
            taggedListSpec: __assign({ filterSpec: filterSpec }, tagSortSpec),
            ttl: bscore_1.bscTimeSpanStringToSeconds(ttl),
            creationDate: creationDate,
            lastModifiedDate: lastModifiedDate,
            content: null,
            permissions: lodash_1.isNil(permissions) ? [] : permissions.map(bsnOperations_1.cmGetBsnObjectPermissionFromBsnEntity),
        };
        if (!lodash_1.isNil(item.content)) {
            taggedPlaylist.content = item.content.map(function (feedItem) {
                return CmcTaggedPlaylistAsset.getBsAssetItemFromTaggedPlaylistEntity(feedItem);
            });
        }
        return taggedPlaylist;
    };
    CmcTaggedPlaylistAsset.getBsAssetTaggedPlaylistItemFromBsn = function (item, tagKeySpecs) {
        var assetData = CmcTaggedPlaylistAsset.getBsTaggedPlaylistPropertiesFromBsn(item, tagKeySpecs);
        var assetItem = {
            id: bscore_1.BsAssetIdNone,
            name: item.name,
            path: '',
            networkId: item.id,
            location: bscore_1.AssetLocation.Bsn,
            assetType: bscore_1.AssetType.BSNTaggedPlaylist,
            scope: bsnconnector_1.bsnGetSession().networkName,
            locator: '',
            fileUrl: item.physicalPath,
            creationDate: item.creationDate,
            lastModifiedDate: item.lastModifiedDate,
            assetData: assetData,
            assetUsage: { presentations: item.presentations },
            permissions: assetData.permissions,
        };
        assetItem.locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
        return assetItem;
    };
    CmcTaggedPlaylistAsset.getBsnTaggedPlaylistSaveData = function (state, taggedPlaylistId) {
        var tplDmState = bs_tagged_playlist_dm_1.tplDmFilterTplDmState(state);
        var error = bs_tagged_playlist_dm_1.tplDmCheckForInvalidTplDmPlaylistState(tplDmState);
        if (error) {
            throw error;
        }
        var contents = bs_tagged_playlist_dm_1.tplDmGetContentItemForBsnList(tplDmState).map(function (item) {
            return __assign(__assign({}, item), { displayDuration: item.displayDuration ?
                    bscore_1.bscTimeSpanStringFromSeconds(item.displayDuration) : null, state: null });
        });
        var taggedListSpec = bs_tagged_playlist_dm_1.tplDmGetTaggedPlaylistSpecification(tplDmState);
        var contentsVirtualPath = bs_tagged_playlist_dm_1.tplDmGetPlaylistContentsVirtualPath(tplDmState);
        var tagFilter = bsnconnector_1.bsnCreateTagFilter(taggedListSpec.filterSpec, contentsVirtualPath);
        var saveData = {
            name: bs_tagged_playlist_dm_1.tplDmGetPlaylistName(tplDmState),
            contentsVirtualPath: contentsVirtualPath,
            rule: tagFilter.ruleExpression,
            orderTag: bsnconnector_1.bsnGetTaggedPlaylistOrderTagString(taggedListSpec),
            ttl: bscore_1.bscTimeSpanStringFromSeconds(bs_tagged_playlist_dm_1.tplDmGetPlaylistTTL(tplDmState)),
            content: contents,
        };
        if (taggedPlaylistId) {
            saveData.id = taggedPlaylistId;
        }
        return saveData;
    };
    CmcTaggedPlaylistAsset.getCurrentTaggedPlaylistAssetLocatorList = function (playlistProperties) {
        return lodash_1.isNil(playlistProperties === null || playlistProperties === void 0 ? void 0 : playlistProperties.content) ? [] : playlistProperties.content.map(bscore_1.bscAssetLocatorFromAssetItem);
    };
    CmcTaggedPlaylistAsset.getPlaylistStateTaggedPlaylistAssetLocatorList = function (state) {
        var tplDmState = bs_tagged_playlist_dm_1.tplDmFilterTplDmState(state);
        return bs_tagged_playlist_dm_1.tplDmGetContentItemListWithAssetItem(tplDmState)
            .map(function (item) { return bscore_1.bscAssetLocatorFromAssetItem(item.asset); });
    };
    Object.defineProperty(CmcTaggedPlaylistAsset.prototype, "isContentDataValid", {
        get: function () {
            var feedInfo = this.feedInfo;
            return !lodash_1.isNil(feedInfo) && !lodash_1.isNil(feedInfo.content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTaggedPlaylistAsset.prototype, "feedInfo", {
        get: function () {
            return this.getAssetItemProperty('assetData');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTaggedPlaylistAsset.prototype, "contentsVirtualPath", {
        get: function () {
            var feedInfo = this.feedInfo;
            return lodash_1.isNil(feedInfo) ? null : feedInfo.contentsVirtualPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTaggedPlaylistAsset.prototype, "tagRuleFilterSpecification", {
        get: function () {
            var feedInfo = this.feedInfo;
            return lodash_1.isNil(feedInfo) ? null : feedInfo.taggedListSpec.filterSpec;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTaggedPlaylistAsset.prototype, "tagSortSpecification", {
        get: function () {
            var feedInfo = this.feedInfo;
            return lodash_1.isNil(feedInfo) ? null : lodash_1.pick(feedInfo.taggedListSpec, ['sortTagName', 'sortDescending']);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTaggedPlaylistAsset.prototype, "taggedPlaylistSpecification", {
        get: function () {
            var feedInfo = this.feedInfo;
            return lodash_1.isNil(feedInfo) ? null : feedInfo.taggedListSpec;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTaggedPlaylistAsset.prototype, "presentationList", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTaggedPlaylistAsset.prototype, "presentationCount", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTaggedPlaylistAsset.prototype, "permissions", {
        get: function () {
            return this.internalAssetItem.permissions;
        },
        enumerable: false,
        configurable: true
    });
    CmcTaggedPlaylistAsset.prototype.getFeedInfoWithContent = function () {
        var _this = this;
        var feedInfo = this.feedInfo;
        if (feedInfo && !lodash_1.isNil(feedInfo.content)) {
            return Promise.resolve(feedInfo);
        }
        return this.fetchAssetItemData()
            .then(function () { return _this.feedInfo; });
    };
    CmcTaggedPlaylistAsset.prototype.fetchAssetItemData = function () {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            var getTagKeysForRuleValidation_1 = function (feedEntity) {
                return !lodash_1.isNil(feedEntity.rule) && bsnOperations_1.cmIsTagRuleAmbiguous(feedEntity.rule) ?
                    bsnOperations_1.cmGetContentTagKeySpecification() : Promise.resolve(null);
            };
            return bsnconnector_1.bsnGetSession().getTaggedPlaylistEntity(this.networkIdOrName)
                .then(function (feedEntity) {
                return getTagKeysForRuleValidation_1(feedEntity)
                    .then(function (tagKeySpecs) {
                    _this.updateCachedAssetItem(CmcTaggedPlaylistAsset.getBsAssetTaggedPlaylistItemFromBsn(feedEntity, tagKeySpecs));
                    return _this;
                });
            });
        }
        return _super.prototype.fetchAssetItemData.call(this);
    };
    CmcTaggedPlaylistAsset.prototype.testAssetExists = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().existsTaggedPlaylist(this._name);
        }
        return Promise.resolve(false);
    };
    CmcTaggedPlaylistAsset.prototype.replacePermissions = function (objectPermissions) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnOperations_1.cmGetBsnPermissionEntityList(objectPermissions, this.networkId)
                .then(function (permissionEntityList) {
                return bsnconnector_1.bsnGetSession().replaceTaggedPlaylistPermissions(_this.networkId, permissionEntityList);
            })
                .then(function () { return _this.fetchAssetItemData(); })
                .then(function () {
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssetPermissions, { assetItems: [_this.internalAssetItem] });
                return _this;
            });
        }
        return _super.prototype.replacePermissions.call(this, objectPermissions);
    };
    CmcTaggedPlaylistAsset.prototype.updateTaggedPlaylist = function (state) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, this.fullPath);
        }
        else if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            var taggedPlaylistId_1 = this.networkId;
            var saveData_1 = CmcTaggedPlaylistAsset.getBsnTaggedPlaylistSaveData(state, taggedPlaylistId_1);
            var assetFileDelta_1;
            var tagKeySpecs_1;
            return bsnOperations_1.cmGetContentTagKeySpecification()
                .then(function (specs) {
                tagKeySpecs_1 = specs;
                return _this.getPlaylistAssetDelta(state);
            })
                .then(function (delta) {
                assetFileDelta_1 = delta;
                return bsnconnector_1.bsnGetSession().updateTaggedPlaylist(saveData_1);
            })
                .then(function () { return bsnconnector_1.bsnGetSession().getTaggedPlaylistEntity(taggedPlaylistId_1); })
                .then(function (feedEntity) {
                var updatedAssetItem = CmcTaggedPlaylistAsset.getBsAssetTaggedPlaylistItemFromBsn(feedEntity, tagKeySpecs_1);
                _this.updateCachedAssetItem(updatedAssetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssets, { assetItems: [_this.internalAssetItem] });
                if (!lodash_1.isNil(assetFileDelta_1.addedAssets) && assetFileDelta_1.addedAssets.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addAssetUsageComponent, { assetLocators: assetFileDelta_1.addedAssets, usageComponentAssetLocator: _this.assetLocator });
                }
                if (!lodash_1.isNil(assetFileDelta_1.removedAssets) && assetFileDelta_1.removedAssets.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removeAssetUsageComponent, { assetLocators: assetFileDelta_1.removedAssets, usageComponentAssetLocator: _this.assetLocator });
                }
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcTaggedPlaylistAsset.prototype.getPlaylistAssetDelta = function (state) {
        var assetDelta = { addedAssets: null, removedAssets: null };
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return this.getFeedInfoWithContent()
                .then(function (props) {
                var currentAssetLocators = CmcTaggedPlaylistAsset.getCurrentTaggedPlaylistAssetLocatorList(props);
                var playlistStateAssetLocators = CmcTaggedPlaylistAsset.getPlaylistStateTaggedPlaylistAssetLocatorList(state);
                assetDelta.addedAssets =
                    lodash_1.differenceWith(playlistStateAssetLocators, currentAssetLocators, utils_1.cmAreBsnAssetLocatorsEqual);
                assetDelta.removedAssets =
                    lodash_1.differenceWith(currentAssetLocators, playlistStateAssetLocators, utils_1.cmAreBsnAssetLocatorsEqual);
                return assetDelta;
            });
        }
        return Promise.resolve(assetDelta);
    };
    return CmcTaggedPlaylistAsset;
}(asset_1.CmcAsset));
exports.CmcTaggedPlaylistAsset = CmcTaggedPlaylistAsset;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcTextFeedAsset = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var bs_data_feed_dm_1 = __webpack_require__(97);
var asset_1 = __webpack_require__(9);
var bsnOperations_1 = __webpack_require__(8);
var error_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(6);
var notifyInternal_1 = __webpack_require__(4);
var lodash_1 = __webpack_require__(0);
var CmcTextFeedAsset = (function (_super) {
    __extends(CmcTextFeedAsset, _super);
    function CmcTextFeedAsset(assetItem) {
        var _this = this;
        if (assetItem.assetType !== bscore_1.AssetType.BSNDataFeed) {
            throw (new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Attempt to create CmcTextFeedAsset object with AssetType.' + assetItem.assetType));
        }
        _this = _super.call(this, assetItem) || this;
        return _this;
    }
    CmcTextFeedAsset.getBsTextFeedPropertiesFromBsn = function (item) {
        if (item) {
            var id = item.id, name_1 = item.name, physicalPath = item.physicalPath, fileSize = item.fileSize, fileHash = item.fileHash, creationDate = item.creationDate, lastModifiedDate = item.lastModifiedDate, items = item.items, permissions = item.permissions;
            return {
                type: 'BSNDataFeed',
                location: bscore_1.AssetLocation.Bsn,
                id: id, name: name_1, physicalPath: physicalPath, fileSize: fileSize, fileHash: fileHash, creationDate: creationDate, lastModifiedDate: lastModifiedDate, items: items,
                permissions: lodash_1.isNil(permissions) ? [] : permissions.map(bsnOperations_1.cmGetBsnObjectPermissionFromBsnEntity),
            };
        }
        return null;
    };
    CmcTextFeedAsset.getBsAssetTextFeedItemFromBsn = function (item) {
        var assetData = CmcTextFeedAsset.getBsTextFeedPropertiesFromBsn(item);
        var assetItem = {
            id: bscore_1.BsAssetIdNone,
            name: item.name,
            path: '',
            networkId: item.id,
            location: bscore_1.AssetLocation.Bsn,
            assetType: bscore_1.AssetType.BSNDataFeed,
            scope: bsnconnector_1.bsnGetSession().networkName,
            locator: '',
            fileUrl: item.physicalPath,
            fileSize: item.fileSize,
            fileHash: utils_1.cmNormalizeBsnHashString(item.fileHash),
            creationDate: item.creationDate,
            lastModifiedDate: item.lastModifiedDate,
            assetData: assetData,
            assetUsage: { presentations: item.presentations },
            permissions: lodash_1.isNil(assetData) ? [] : assetData.permissions,
        };
        assetItem.locator = bscore_1.bscGenerateAssetLocatorKey(assetItem);
        return assetItem;
    };
    CmcTextFeedAsset.getBsnTextFeedSaveData = function (state, textFeedId) {
        var dfDmState = bs_data_feed_dm_1.dfDmFilterBaseState(state);
        var error = bs_data_feed_dm_1.dfDmCheckForInvalidDfDmState(dfDmState);
        if (error) {
            throw error;
        }
        var items = [];
        for (var i = 0, iLen = dfDmState.fields.fieldsOrder.length; i < iLen; i++) {
            var itemKey = dfDmState.fields.fieldsOrder[i];
            var title = dfDmState.fields.fieldsTitleById[itemKey];
            items.push({
                title: dfDmState.fields.fieldsTitleById[itemKey],
                description: dfDmState.fields.fieldsValue[itemKey].value,
                validityStartDate: dfDmState.fields.fieldsValue[itemKey].enableValidityDate === true
                    ? dfDmState.fields.fieldsValue[itemKey].validityStartDate : null,
                validityEndDate: dfDmState.fields.fieldsValue[itemKey].enableValidityDate === true
                    ? dfDmState.fields.fieldsValue[itemKey].validityEndDate : null,
            });
        }
        var saveData = {
            name: dfDmState.dataFeed.name,
            items: items,
        };
        if (textFeedId) {
            saveData.id = textFeedId;
        }
        return saveData;
    };
    Object.defineProperty(CmcTextFeedAsset.prototype, "isContentDataValid", {
        get: function () {
            var feedInfo = this.feedInfo;
            return !lodash_1.isNil(feedInfo) && !lodash_1.isNil(feedInfo.items);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTextFeedAsset.prototype, "feedInfo", {
        get: function () {
            return this.getAssetItemProperty('assetData');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTextFeedAsset.prototype, "presentationList", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTextFeedAsset.prototype, "presentationCount", {
        get: function () {
            var assetItem = this.internalAssetItem;
            return !lodash_1.isNil(assetItem.assetUsage) && !lodash_1.isNil(assetItem.assetUsage.presentations) ?
                assetItem.assetUsage.presentations.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcTextFeedAsset.prototype, "permissions", {
        get: function () {
            return this.internalAssetItem.permissions;
        },
        enumerable: false,
        configurable: true
    });
    CmcTextFeedAsset.prototype.getFeedInfoWithContent = function () {
        var _this = this;
        var feedInfo = this.feedInfo;
        if (feedInfo && !lodash_1.isNil(feedInfo.items)) {
            return Promise.resolve(feedInfo);
        }
        return this.fetchAssetItemData()
            .then(function () { return _this.feedInfo; });
    };
    CmcTextFeedAsset.prototype.fetchAssetItemData = function () {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().getTextFeedEntity(this.networkIdOrName)
                .then(function (feedEntity) {
                _this.updateCachedAssetItem(CmcTextFeedAsset.getBsAssetTextFeedItemFromBsn(feedEntity));
                return _this;
            });
        }
        return _super.prototype.fetchAssetItemData.call(this);
    };
    CmcTextFeedAsset.prototype.testAssetExists = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().existsTextFeed(this._name);
        }
        return Promise.resolve(false);
    };
    CmcTextFeedAsset.prototype.replacePermissions = function (objectPermissions) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            return bsnOperations_1.cmGetBsnPermissionEntityList(objectPermissions, this.networkId)
                .then(function (permissionEntityList) {
                return bsnconnector_1.bsnGetSession().replaceTextFeedPermissions(_this.networkId, permissionEntityList);
            })
                .then(function () { return _this.fetchAssetItemData(); })
                .then(function () {
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssetPermissions, { assetItems: [_this.internalAssetItem] });
                return _this;
            });
        }
        return _super.prototype.replacePermissions.call(this, objectPermissions);
    };
    CmcTextFeedAsset.prototype.updateTextFeed = function (state) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, this.fullPath);
        }
        else if (this.assetLocation === bscore_1.AssetLocation.Bsn) {
            var textFeedId_1 = this.networkId;
            var saveData = CmcTextFeedAsset.getBsnTextFeedSaveData(state, textFeedId_1);
            return bsnconnector_1.bsnGetSession().updateTextFeed(saveData)
                .then(function () { return bsnconnector_1.bsnGetSession().getTextFeedEntity(textFeedId_1); })
                .then(function (feedEntity) {
                var updatedAssetItem = CmcTextFeedAsset.getBsAssetTextFeedItemFromBsn(feedEntity);
                _this.updateCachedAssetItem(updatedAssetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssets, { assetItems: [_this.internalAssetItem] });
            });
        }
        return Promise.resolve();
    };
    return CmcTextFeedAsset;
}(asset_1.CmcAsset));
exports.CmcTextFeedAsset = CmcTextFeedAsset;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcMediaAssetBaseCollection = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var folderAsset_1 = __webpack_require__(17);
var assetCollection_1 = __webpack_require__(7);
var assetManager_1 = __webpack_require__(10);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcMediaAssetBaseCollection = (function (_super) {
    __extends(CmcMediaAssetBaseCollection, _super);
    function CmcMediaAssetBaseCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CmcMediaAssetBaseCollection.prototype.createFolder = function (name) {
        var _this = this;
        if (this.currentDirectory && this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var session_1 = bsnconnector_1.bsnGetSession();
            return session_1.getContentItemsByName(name, this.currentDirectory)
                .then(function (items) {
                if (items.length > 0) {
                    var item = lodash_1.find(items, bsnconnector_1.bsnIsFolderContentEntity);
                    if (!item) {
                        throw new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Requested folder name is in use by a file');
                    }
                    return folderAsset_1.CmcFolderAsset.getBsAssetFolderItemFromBsn(item);
                }
                else {
                    return session_1.createFolder(name, _this.currentDirectory)
                        .then(function (item) {
                        var assetItem = folderAsset_1.CmcFolderAsset.getBsAssetFolderItemFromBsn(item);
                        _this.addAssetItem(assetItem);
                        notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                        return assetItem;
                    })
                        .then(assetManager_1.cmUpdateAssetItemParentFolder);
                }
            });
        }
        return _super.prototype.createFolder.call(this, name);
    };
    CmcMediaAssetBaseCollection.prototype.removeFolder = function (name) {
        var _this = this;
        if (this.currentDirectory && this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var session_2 = bsnconnector_1.bsnGetSession();
            return session_2.getContentItemsByName(name, this.currentDirectory)
                .then(function (items) {
                var item = lodash_1.find(items, bsnconnector_1.bsnIsFolderContentEntity);
                if (!lodash_1.isNil(item)) {
                    var assetItem_1 = folderAsset_1.CmcFolderAsset.getBsAssetFolderItemFromBsn(item);
                    return session_2.deleteContentItem(item.id)
                        .then(function () {
                        _this.markAssetItemAsDeleted(name);
                        return notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [assetItem_1] });
                    })
                        .then(function () { return assetManager_1.cmUpdateAssetItemParentFolder(assetItem_1); })
                        .then();
                }
            });
        }
        return _super.prototype.removeFolder.call(this, name);
    };
    CmcMediaAssetBaseCollection.prototype.getInitialBsnAssetListSegment = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getContentBySegment(enumerationOptions);
    };
    CmcMediaAssetBaseCollection.prototype.getNextBsnAssetListSegment = function (enumerator) {
        return bsnconnector_1.bsnGetSession().getNextContentSegment(enumerator);
    };
    CmcMediaAssetBaseCollection.prototype.getBsnAssetBackendCount = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getContentItemCount(enumerationOptions);
    };
    return CmcMediaAssetBaseCollection;
}(assetCollection_1.CmcAssetCollection));
exports.CmcMediaAssetBaseCollection = CmcMediaAssetBaseCollection;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsDeviceApplicationCache = exports.cmGetBsDeviceApplicationCache = void 0;
var deviceApplicationCache;
function cmGetBsDeviceApplicationCache() {
    if (!deviceApplicationCache) {
        deviceApplicationCache = new BsDeviceApplicationCache();
    }
    return deviceApplicationCache;
}
exports.cmGetBsDeviceApplicationCache = cmGetBsDeviceApplicationCache;
var BsDeviceApplicationCache = (function () {
    function BsDeviceApplicationCache() {
        this._deviceApplicationCacheMap = new Map();
    }
    Object.defineProperty(BsDeviceApplicationCache.prototype, "size", {
        get: function () {
            return this._deviceApplicationCacheMap.size;
        },
        enumerable: false,
        configurable: true
    });
    BsDeviceApplicationCache.prototype.clear = function () {
        this._deviceApplicationCacheMap.clear();
    };
    BsDeviceApplicationCache.prototype.hasDeviceApplication = function (url) {
        return this._deviceApplicationCacheMap.has(url);
    };
    BsDeviceApplicationCache.prototype.getDeviceApplicationEntity = function (url) {
        var cacheItem = this._deviceApplicationCacheMap.get(url);
        return cacheItem ? cacheItem : null;
    };
    BsDeviceApplicationCache.prototype.setDeviceApplication = function (dataEntity) {
        this._deviceApplicationCacheMap.set(dataEntity.url, { name: dataEntity.name, url: dataEntity.url,
            partnerLogoUrl: dataEntity.partnerLogoUrl,
            sortOrder: dataEntity.sortOrder });
    };
    BsDeviceApplicationCache.prototype.removeDeviceApplication = function (url) {
        this._deviceApplicationCacheMap.delete(url);
    };
    return BsDeviceApplicationCache;
}());
exports.BsDeviceApplicationCache = BsDeviceApplicationCache;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvisionalDeviceCache = exports.cmGetProvisionalDeviceCache = void 0;
var deviceProvisionalCache;
function cmGetProvisionalDeviceCache() {
    if (!deviceProvisionalCache) {
        deviceProvisionalCache = new ProvisionalDeviceCache();
    }
    return deviceProvisionalCache;
}
exports.cmGetProvisionalDeviceCache = cmGetProvisionalDeviceCache;
var ProvisionalDeviceCache = (function () {
    function ProvisionalDeviceCache() {
        this._deviceProvisionalCacheMap = new Map();
    }
    Object.defineProperty(ProvisionalDeviceCache.prototype, "size", {
        get: function () {
            return this._deviceProvisionalCacheMap.size;
        },
        enumerable: false,
        configurable: true
    });
    ProvisionalDeviceCache.prototype.clear = function () {
        this._deviceProvisionalCacheMap.clear();
    };
    ProvisionalDeviceCache.prototype.hasProvisionalDevice = function (serial) {
        return this._deviceProvisionalCacheMap.has(serial);
    };
    ProvisionalDeviceCache.prototype.getProvisionalDeviceEntity = function (serial) {
        var cacheItem = this._deviceProvisionalCacheMap.get(serial);
        return cacheItem ? cacheItem.dataEntity : null;
    };
    ProvisionalDeviceCache.prototype.getProvisionalDeviceUpdateTime = function (serial) {
        var cacheItem = this._deviceProvisionalCacheMap.get(serial);
        return cacheItem ? cacheItem.updateTime : null;
    };
    ProvisionalDeviceCache.prototype.setProvisionalDevice = function (dataEntity) {
        this._deviceProvisionalCacheMap.set(dataEntity.serial, { dataEntity: dataEntity, updateTime: new Date() });
    };
    ProvisionalDeviceCache.prototype.removeProvisionalDevice = function (serial) {
        this._deviceProvisionalCacheMap.delete(serial);
    };
    return ProvisionalDeviceCache;
}());
exports.ProvisionalDeviceCache = ProvisionalDeviceCache;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsOperationManager = exports.cmIsOperationAllowedByCurrentUser = exports.cmIsOperationAllowedByUser = exports.cmIsOperationInScopeForCurrentUser = exports.cmUpdateOperationManager = exports.cmGetCompletedBsnOperationManager = exports.cmGetOperationManager = void 0;
var bsnconnector_1 = __webpack_require__(1);
var roleCollection_1 = __webpack_require__(67);
var role_1 = __webpack_require__(25);
var userCollection_1 = __webpack_require__(68);
var user_1 = __webpack_require__(26);
var lodash_1 = __webpack_require__(0);
var error_1 = __webpack_require__(3);
var bizOpManager;
function cmGetOperationManager() {
    if (!bizOpManager) {
        bizOpManager = new BsOperationManager();
    }
    return bizOpManager;
}
exports.cmGetOperationManager = cmGetOperationManager;
function cmGetCompletedBsnOperationManager() {
    if (!bizOpManager) {
        bizOpManager = new BsOperationManager();
    }
    return bizOpManager.isValid ? Promise.resolve(bizOpManager) : bizOpManager.update();
}
exports.cmGetCompletedBsnOperationManager = cmGetCompletedBsnOperationManager;
function cmUpdateOperationManager() {
    var opMgr = cmGetOperationManager();
    var promises = [
        opMgr.update(),
        roleCollection_1.cmGetCompletedBsnRoleCollection(),
        userCollection_1.cmGetCompletedBsnUserCollection(),
    ];
    return Promise.all(promises)
        .then(function () { return opMgr; });
}
exports.cmUpdateOperationManager = cmUpdateOperationManager;
function cmIsOperationInScopeForCurrentUser(operation, action) {
    return bsnconnector_1.bsnGetSession().hasScopeForOperation(operation, action);
}
exports.cmIsOperationInScopeForCurrentUser = cmIsOperationInScopeForCurrentUser;
function cmIsOperationAllowedByUser(operationUid, user, targetEntityId) {
    if (targetEntityId === void 0) { targetEntityId = null; }
    return user.checkUserData()
        .then(function () {
        if (!lodash_1.isNil(user.roleName)) {
            return cmIsOperationAllowedForRoleAndUser(operationUid, user, role_1.cmGetBsRole(user.roleName), targetEntityId);
        }
        return false;
    });
}
exports.cmIsOperationAllowedByUser = cmIsOperationAllowedByUser;
function cmIsOperationAllowedByCurrentUser(operationUid, targetEntityId) {
    if (targetEntityId === void 0) { targetEntityId = null; }
    var currentUser = null;
    return user_1.cmGetValidCurrentUser()
        .then(function (user) {
        currentUser = user;
        return role_1.cmGetValidCurrentUserRole();
    })
        .then(function (currentRole) {
        if (!lodash_1.isNil(currentUser) && !lodash_1.isNil(currentRole)) {
            return cmIsOperationAllowedForRoleAndUser(operationUid, currentUser, currentRole, targetEntityId);
        }
        return false;
    });
}
exports.cmIsOperationAllowedByCurrentUser = cmIsOperationAllowedByCurrentUser;
function cmIsOperationAllowedForRoleAndUser(operationUid, user, role, targetEntityId) {
    if (targetEntityId === void 0) { targetEntityId = null; }
    var operation;
    return cmGetCompletedBsnOperationManager()
        .then(function (opMgr) {
        var op = opMgr.getOperationByUid(operationUid);
        if (lodash_1.isNil(op)) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'cmIsOperationAllowedForRoleAndUser - invalid operationUid');
        }
        operation = op;
        if (!user.isUserDataValid) {
            return user.fetchUserData();
        }
    })
        .then(function () {
        if (!role.isRoleDataValid) {
            return role.fetchRoleData();
        }
    })
        .then(function () {
        if (!lodash_1.isNil(targetEntityId)) {
            var allowed_1 = user.isOperationAllowed(operationUid, targetEntityId);
            if (!lodash_1.isNil(allowed_1)) {
                return allowed_1;
            }
            else if (operation.targetEntity === bsnconnector_1.BsnBusinessOperationType.Content) {
                return bsnconnector_1.bsnGetSession().getContentItem(targetEntityId)
                    .then(function (contentEntity) {
                    return bsnconnector_1.bsnGetSession().getParentFolderListForContentPath(contentEntity.virtualPath);
                })
                    .then(function (parentFolders) {
                    parentFolders.some(function (folderEntity) {
                        allowed_1 = user.isOperationAllowed(operationUid, folderEntity.id);
                        return !lodash_1.isNil(allowed_1);
                    });
                    if (!lodash_1.isNil(role)) {
                        if (lodash_1.isNil(allowed_1)) {
                            allowed_1 = role.isOperationAllowed(operationUid, targetEntityId);
                        }
                        if (lodash_1.isNil(allowed_1)) {
                            parentFolders.some(function (folderEntity) {
                                allowed_1 = role.isOperationAllowed(operationUid, folderEntity.id);
                                return !lodash_1.isNil(allowed_1);
                            });
                        }
                    }
                    return allowed_1;
                });
            }
            allowed_1 = role.isOperationAllowed(operationUid, targetEntityId);
            return allowed_1;
        }
        return null;
    })
        .then(function (objectPermissionAllowed) {
        var allowed = lodash_1.isNil(objectPermissionAllowed) ? role.isOperationAllowed(operationUid) : objectPermissionAllowed;
        return !lodash_1.isNil(allowed) && allowed;
    });
}
var BsOperationManager = (function () {
    function BsOperationManager() {
        this._opTree = null;
        this._opMap = new Map();
    }
    Object.defineProperty(BsOperationManager.prototype, "isValid", {
        get: function () {
            return !lodash_1.isNil(this._opTree);
        },
        enumerable: false,
        configurable: true
    });
    BsOperationManager.prototype.update = function () {
        var _this = this;
        return this.fetchNetworkOpTree()
            .then(function () { return _this; });
    };
    BsOperationManager.prototype.getOperationTree = function (root) {
        var _a;
        if (!lodash_1.isNil((_a = this._opTree) === null || _a === void 0 ? void 0 : _a.descendants) && !lodash_1.isNil(root)) {
            var opEntity = lodash_1.find(this._opTree.descendants, function (op) { return op.targetEntity === root; });
            return lodash_1.isNil(opEntity) ? null : opEntity;
        }
        return this._opTree;
    };
    BsOperationManager.prototype.getRootOperationList = function () {
        var _a;
        if (!lodash_1.isNil((_a = this._opTree) === null || _a === void 0 ? void 0 : _a.descendants)) {
            return this._opTree.descendants;
        }
        return [];
    };
    BsOperationManager.prototype.getOperationByUid = function (uid) {
        if (this.isValid) {
            var op = this._opMap.get(uid);
            return lodash_1.isNil(op) ? null : op;
        }
        return null;
    };
    BsOperationManager.prototype.getOperationByTypeAndSingularName = function (type, name) {
        if (this.isValid) {
            var op = lodash_1.find(Array.from(this._opMap.values()), { targetEntity: type, singularName: name });
            if (!lodash_1.isNil(op)) {
                return op;
            }
        }
        return null;
    };
    BsOperationManager.prototype.getOperationUidByTypeAndSingularName = function (type, name) {
        if (this.isValid) {
            var op = lodash_1.find(Array.from(this._opMap.values()), { targetEntity: type, singularName: name });
            if (!lodash_1.isNil(op)) {
                return op.uid;
            }
        }
        return null;
    };
    BsOperationManager.prototype.fetchNetworkOpTree = function () {
        var _this = this;
        var addToOpMap = function (descendants) {
            if (!lodash_1.isNil(descendants)) {
                descendants.forEach(function (op) {
                    _this._opMap.set(op.uid, op);
                    addToOpMap(op.descendants);
                });
            }
        };
        this._opMap.clear();
        return bsnconnector_1.bsnGetSession().getBusinessOperationTree()
            .then(function (opTree) {
            _this._opTree = opTree;
            return addToOpMap(opTree.descendants);
        })
            .then(function () { return _this._opTree; });
    };
    return BsOperationManager;
}());
exports.BsOperationManager = BsOperationManager;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsRoleCache = exports.cmGetBsRoleCache = void 0;
var roleCache;
function cmGetBsRoleCache() {
    if (!roleCache) {
        roleCache = new BsRoleCache();
    }
    return roleCache;
}
exports.cmGetBsRoleCache = cmGetBsRoleCache;
var BsRoleCache = (function () {
    function BsRoleCache() {
        this._roleCacheMap = new Map();
    }
    Object.defineProperty(BsRoleCache.prototype, "size", {
        get: function () {
            return this._roleCacheMap.size;
        },
        enumerable: false,
        configurable: true
    });
    BsRoleCache.prototype.clear = function () {
        this._roleCacheMap.clear();
    };
    BsRoleCache.prototype.hasRole = function (name) {
        return this._roleCacheMap.has(name);
    };
    BsRoleCache.prototype.getRoleEntity = function (name) {
        var cacheItem = this._roleCacheMap.get(name);
        return cacheItem ? cacheItem.roleEntity : null;
    };
    BsRoleCache.prototype.getRoleUpdateTime = function (name) {
        var cacheItem = this._roleCacheMap.get(name);
        return cacheItem ? cacheItem.updateTime : null;
    };
    BsRoleCache.prototype.setRole = function (roleEntity) {
        this._roleCacheMap.set(roleEntity.name, { roleEntity: roleEntity, updateTime: new Date() });
    };
    BsRoleCache.prototype.removeRole = function (name) {
        this._roleCacheMap.delete(name);
    };
    return BsRoleCache;
}());
exports.BsRoleCache = BsRoleCache;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsUserCache = exports.cmGetBsUserCache = void 0;
var userCache;
function cmGetBsUserCache() {
    if (!userCache) {
        userCache = new BsUserCache();
    }
    return userCache;
}
exports.cmGetBsUserCache = cmGetBsUserCache;
var BsUserCache = (function () {
    function BsUserCache() {
        this._userCacheMap = new Map();
    }
    Object.defineProperty(BsUserCache.prototype, "size", {
        get: function () {
            return this._userCacheMap.size;
        },
        enumerable: false,
        configurable: true
    });
    BsUserCache.prototype.clear = function () {
        this._userCacheMap.clear();
    };
    BsUserCache.prototype.hasUser = function (login) {
        return this._userCacheMap.has(login);
    };
    BsUserCache.prototype.getUserEntity = function (login) {
        var cacheItem = this._userCacheMap.get(login);
        return cacheItem ? cacheItem.userEntity : null;
    };
    BsUserCache.prototype.getUserUpdateTime = function (login) {
        var cacheItem = this._userCacheMap.get(login);
        return cacheItem ? cacheItem.updateTime : null;
    };
    BsUserCache.prototype.setUser = function (userEntity) {
        this._userCacheMap.set(userEntity.person.login, { userEntity: userEntity, updateTime: new Date() });
    };
    BsUserCache.prototype.removeUser = function (login) {
        this._userCacheMap.delete(login);
    };
    return BsUserCache;
}());
exports.BsUserCache = BsUserCache;


/***/ }),
/* 40 */
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
exports.CmcAssetContainerCache = exports.cmGetCmcAssetContainerCache = void 0;
var lodash_1 = __webpack_require__(0);
var util_1 = __webpack_require__(69);
var containerCache;
function cmGetCmcAssetContainerCache() {
    if (!containerCache) {
        containerCache = new CmcAssetContainerCache();
    }
    return containerCache;
}
exports.cmGetCmcAssetContainerCache = cmGetCmcAssetContainerCache;
var CmcAssetContainerCache = (function () {
    function CmcAssetContainerCache() {
        this._containerMap = new Map();
    }
    Object.defineProperty(CmcAssetContainerCache.prototype, "size", {
        get: function () { return this._containerMap.size; },
        enumerable: false,
        configurable: true
    });
    CmcAssetContainerCache.prototype.getContainerCacheItem = function (locatorHash) {
        var item = this._containerMap.get(locatorHash);
        return lodash_1.isNil(item) ? null : item;
    };
    CmcAssetContainerCache.prototype.getContainerCacheReference = function (locatorHash) {
        var item = this._containerMap.get(locatorHash);
        return lodash_1.isNil(item) ? null : { locatorHash: locatorHash, updateTime: item.updateTime };
    };
    CmcAssetContainerCache.prototype.putContainer = function (assetContainer) {
        this._containerMap.set(assetContainer.locatorHash, { assetContainer: assetContainer, updateTime: new Date() });
    };
    CmcAssetContainerCache.prototype.removeContainer = function (locatorHash) {
        this._containerMap.delete(locatorHash);
    };
    CmcAssetContainerCache.prototype.getLocatorHashListForMatchingAssetContainers = function (testAssetContainer) {
        var locatorHashList = [];
        this._containerMap.forEach(function (ref, locatorHash) {
            if (testAssetContainer(ref.assetContainer)) {
                locatorHashList.push(locatorHash);
            }
        });
        return locatorHashList;
    };
    CmcAssetContainerCache.prototype.setContainerUpdate = function (containerLocatorHash) {
        var item = this._containerMap.get(containerLocatorHash);
        if (!lodash_1.isNil(item)) {
            this._containerMap.set(containerLocatorHash, __assign(__assign({}, item), { updateTime: new Date() }));
        }
    };
    CmcAssetContainerCache.prototype.notifyCollectionUpdate = function (collectionLocatorHash) {
        this._containerMap.forEach(function (item) {
            item.assetContainer.notifyCollectionUpdate(collectionLocatorHash);
        });
    };
    CmcAssetContainerCache.prototype.clearAll = function () {
        this._containerMap.clear();
    };
    CmcAssetContainerCache.prototype.dumpToConsole = function () {
        console.log('----');
        console.log('AssetContainerCache:');
        this._containerMap.forEach(function (value, key) {
            console.log(key + ' :');
            console.log(util_1.inspect(value, { depth: null, colors: true }));
        });
        console.log('----');
    };
    return CmcAssetContainerCache;
}());
exports.CmcAssetContainerCache = CmcAssetContainerCache;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsDeviceSetupCache = exports.cmGetBsDeviceSetupCache = void 0;
var deviceSetupCache;
function cmGetBsDeviceSetupCache() {
    if (!deviceSetupCache) {
        deviceSetupCache = new BsDeviceSetupCache();
    }
    return deviceSetupCache;
}
exports.cmGetBsDeviceSetupCache = cmGetBsDeviceSetupCache;
var BsDeviceSetupCache = (function () {
    function BsDeviceSetupCache() {
        this._deviceSetupCacheMap = new Map();
    }
    Object.defineProperty(BsDeviceSetupCache.prototype, "size", {
        get: function () {
            return this._deviceSetupCacheMap.size;
        },
        enumerable: false,
        configurable: true
    });
    BsDeviceSetupCache.prototype.clear = function () {
        this._deviceSetupCacheMap.clear();
    };
    BsDeviceSetupCache.prototype.hasDeviceSetup = function (name) {
        return this._deviceSetupCacheMap.has(name);
    };
    BsDeviceSetupCache.prototype.getDeviceSetupEntity = function (name) {
        var cacheItem = this._deviceSetupCacheMap.get(name);
        return cacheItem ? cacheItem.dataEntity : null;
    };
    BsDeviceSetupCache.prototype.getDeviceSetupUpdateTime = function (name) {
        var cacheItem = this._deviceSetupCacheMap.get(name);
        return cacheItem ? cacheItem.updateTime : null;
    };
    BsDeviceSetupCache.prototype.setDeviceSetup = function (dataEntity) {
        this._deviceSetupCacheMap.set(dataEntity.bDeploy.packageName, { dataEntity: dataEntity, updateTime: new Date() });
    };
    BsDeviceSetupCache.prototype.removeDeviceSetup = function (name) {
        this._deviceSetupCacheMap.delete(name);
    };
    return BsDeviceSetupCache;
}());
exports.BsDeviceSetupCache = BsDeviceSetupCache;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("./bs-device-artifacts");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 45 */
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
exports.CmcAssetContainer = exports.CmnDefaultBsnLoadPageSize = void 0;
var bscore_1 = __webpack_require__(2);
var assetContainerCache_1 = __webpack_require__(40);
var assetCollectionManager_1 = __webpack_require__(12);
var assetManager_1 = __webpack_require__(10);
var assetItemCache_1 = __webpack_require__(14);
var notifyExternal_1 = __webpack_require__(20);
var utils_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(0);
exports.CmnDefaultBsnLoadPageSize = 15;
var CmcAssetContainer = (function () {
    function CmcAssetContainer(assetLocator, collection, folderCollection) {
        if (collection === void 0) { collection = null; }
        if (folderCollection === void 0) { folderCollection = null; }
        this._creationDate = null;
        this._lastModifiedDate = null;
        this._assetLocator = assetLocator;
        this._collectionLocatorHash = lodash_1.isNil(collection) ? null : collection.locatorHash;
        this._folderCollectionLocatorHash = lodash_1.isNil(folderCollection) ? null : folderCollection.locatorHash;
        this._locatorHash = utils_1.cmCreateHashFromAssetLocator(this._assetLocator);
        if (assetLocator.hasOwnProperty('creationDate')) {
            var value = assetLocator.creationDate;
            this._creationDate = value instanceof Date ? value : null;
        }
        if (assetLocator.hasOwnProperty('lastModifiedDate')) {
            var value = assetLocator.lastModifiedDate;
            this._lastModifiedDate = value instanceof Date ? value : null;
        }
    }
    Object.defineProperty(CmcAssetContainer.prototype, "name", {
        get: function () { return this._assetLocator.name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "dirPath", {
        get: function () { return this._assetLocator.path; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "assetType", {
        get: function () { return this._assetLocator.assetType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "assetLocation", {
        get: function () { return this._assetLocator.location; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "assetScope", {
        get: function () { return this._assetLocator.scope; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "childAssetType", {
        get: function () {
            return lodash_1.isNil(this._assetLocator.childAssetType) ? null : this._assetLocator.childAssetType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "locatorHash", {
        get: function () { return this._locatorHash; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "mediaType", {
        get: function () { return bscore_1.MediaType.Other; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "creationDate", {
        get: function () { return this._creationDate; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "lastModifiedDate", {
        get: function () { return this._lastModifiedDate; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "isBsnSystemContainer", {
        get: function () {
            return this.assetLocation === bscore_1.AssetLocation.Bsn && this._assetLocator.networkId === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "sortOptions", {
        get: function () {
            var collection = this.collection;
            if (!lodash_1.isNil(collection)) {
                return collection.sortOptions;
            }
            return { sortField: null, sortDescending: false };
        },
        set: function (value) {
            var collection = this.collection;
            if (!lodash_1.isNil(collection)) {
                collection.sortOptions = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "collection", {
        get: function () {
            if (!lodash_1.isNil(this._collectionLocatorHash)) {
                return assetCollectionManager_1.cmGetCmiAssetCollectionByLocator(this._collectionLocatorHash);
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "folderCollection", {
        get: function () {
            if (!lodash_1.isNil(this._folderCollectionLocatorHash)) {
                return assetCollectionManager_1.cmGetCmiAssetCollectionByLocator(this._folderCollectionLocatorHash);
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "hasCollection", {
        get: function () {
            return !lodash_1.isNil(this._collectionLocatorHash)
                && assetCollectionManager_1.cmHasAssetCollectionForLocator(this._collectionLocatorHash);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "canHaveFolders", {
        get: function () {
            return this.assetLocation === bscore_1.AssetLocation.Local
                || (this.assetLocation === bscore_1.AssetLocation.Bsn && this.childAssetType === bscore_1.AssetType.Content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "hasFolderCollection", {
        get: function () {
            return !lodash_1.isNil(this._folderCollectionLocatorHash)
                && assetCollectionManager_1.cmHasAssetCollectionForLocator(this._folderCollectionLocatorHash);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "isComplete", {
        get: function () {
            var collection = this.collection;
            return lodash_1.isNil(collection) || collection.isComplete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "hasFiles", {
        get: function () {
            if (this.canHaveFolders && !this.isBsnSystemContainer) {
                var folderAssetItem = this.getFolderAssetItemFromCache();
                if (!lodash_1.isNil(folderAssetItem)) {
                    return folderAssetItem.hasFiles;
                }
            }
            else if (this.hasCollection) {
                return this.collection.fileAssetNames.length > 0;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "hasSubFolders", {
        get: function () {
            if (this.canHaveFolders) {
                if (!this.isBsnSystemContainer) {
                    var folderAssetItem = this.getFolderAssetItemFromCache();
                    if (!lodash_1.isNil(folderAssetItem)) {
                        return folderAssetItem.hasSubFolders;
                    }
                }
                else if (this.hasFolderCollection) {
                    return this.folderCollection.assetNames.length > 0;
                }
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "areSubFoldersEnumerated", {
        get: function () {
            var folderCollection = this.folderCollection;
            if (!lodash_1.isNil(folderCollection)) {
                return folderCollection.isComplete;
            }
            var collection = this.collection;
            return lodash_1.isNil(collection) || collection.isComplete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "assetLocator", {
        get: function () { return this._assetLocator; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "assetItem", {
        get: function () {
            return __assign(__assign({}, this._assetLocator), { id: bscore_1.BsAssetIdNone, locator: '', fileSize: 0, thumbUrl: null });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "childAssetLocators", {
        get: function () {
            return this.getChildAssetItems().map(bscore_1.bscAssetLocatorFromAssetItem);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "childAssets", {
        get: function () {
            return this.getChildAssetItems().map(function (assetItem) { return assetManager_1.cmGetCmiAsset(assetItem); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcAssetContainer.prototype, "fullPath", {
        get: function () {
            if (this.isBsnSystemContainer && this.childAssetType === bscore_1.AssetType.Content) {
                return '/';
            }
            return bscore_1.bscGetAssetFullPath(this._assetLocator);
        },
        enumerable: false,
        configurable: true
    });
    CmcAssetContainer.prototype.getFolderAsset = function () {
        var _this = this;
        if (this.canHaveFolders && !this.isBsnSystemContainer) {
            return assetManager_1.cmGetCmiAssetForAssetSpecification(this._assetLocator, false)
                .then(function (asset) {
                if (!lodash_1.isNil(asset)) {
                    _this._creationDate = asset.creationDate;
                    _this._lastModifiedDate = asset.lastModifiedDate;
                }
                return asset;
            });
        }
        return Promise.resolve(null);
    };
    CmcAssetContainer.prototype.getSubFolderAsset = function (name) {
        if (this.canHaveFolders && (!this.isBsnSystemContainer || this.childAssetType === bscore_1.AssetType.Content)) {
            var spec = bscore_1.bscGetAssetSpecification(this.assetLocation, bscore_1.AssetType.Folder, this.fullPath, name);
            return assetManager_1.cmGetCmiAssetForAssetSpecification(spec, false)
                .then(function (asset) { return lodash_1.isNil(asset) ? null : asset; });
        }
        return Promise.resolve(null);
    };
    CmcAssetContainer.prototype.getSubFolderContainerHashes = function () {
        var folderCollection = this.folderCollection;
        if (lodash_1.isNil(folderCollection) && this.canHaveFolders) {
            folderCollection = this.collection;
        }
        if (lodash_1.isNil(folderCollection)) {
            return Promise.resolve([]);
        }
        if (!folderCollection.isComplete) {
            return folderCollection.update()
                .then(function () {
                return folderCollection.folderLocatorHashes;
            });
        }
        return Promise.resolve(folderCollection.folderLocatorHashes);
    };
    CmcAssetContainer.prototype.getSubFolderAssets = function () {
        var folderCollection = this.folderCollection;
        if (lodash_1.isNil(folderCollection) && this.canHaveFolders) {
            folderCollection = this.collection;
        }
        return lodash_1.isNil(folderCollection) ? [] : folderCollection.folderAssets;
    };
    CmcAssetContainer.prototype.update = function (onlyIfNecessary) {
        if (onlyIfNecessary === void 0) { onlyIfNecessary = false; }
        var updatePromises = [];
        if (this.canHaveFolders && (this.assetLocation === bscore_1.AssetLocation.Local || !this.isBsnSystemContainer)) {
            updatePromises.push(assetManager_1.cmGetCmiAssetForAssetSpecification(this._assetLocator).then());
        }
        var collection = this.collection;
        if (!lodash_1.isNil(collection) && !(onlyIfNecessary && collection.isComplete)) {
            updatePromises.push(collection.update().then());
        }
        var folderCollection = this.folderCollection;
        if (!lodash_1.isNil(folderCollection) && !(onlyIfNecessary && folderCollection.isComplete)) {
            updatePromises.push(folderCollection.update().then());
        }
        return updatePromises.length > 0 ? Promise.all(updatePromises).then() : Promise.resolve();
    };
    CmcAssetContainer.prototype.startUpdate = function (onlyIfNecessary) {
        if (onlyIfNecessary === void 0) { onlyIfNecessary = false; }
        var updatePromises = [];
        if (this.canHaveFolders && (this.assetLocation === bscore_1.AssetLocation.Local || !this.isBsnSystemContainer)) {
            updatePromises.push(assetManager_1.cmGetCmiAssetForAssetSpecification(this._assetLocator).then());
        }
        var collection = this.collection;
        if (!lodash_1.isNil(collection) && !(onlyIfNecessary && collection.isComplete)) {
            updatePromises.push(collection.startUpdate().then());
        }
        var folderCollection = this.folderCollection;
        if (!lodash_1.isNil(folderCollection) && !(onlyIfNecessary && folderCollection.isComplete)) {
            updatePromises.push(folderCollection.update().then());
        }
        return updatePromises.length > 0 ? Promise.all(updatePromises).then() : Promise.resolve();
    };
    CmcAssetContainer.prototype.updateNext = function () {
        var collection = this.collection;
        return lodash_1.isNil(collection) ? Promise.resolve() : collection.updateNext().then();
    };
    CmcAssetContainer.prototype.getFilteredChildAssetLocators = function (filterOptions) {
        return this.getFilteredChildAssetItems(filterOptions).map(bscore_1.bscAssetLocatorFromAssetItem);
    };
    CmcAssetContainer.prototype.getFilteredChildAssets = function (filterOptions) {
        return this.getFilteredChildAssetItems(filterOptions).map(function (assetItem) { return assetManager_1.cmGetCmiAsset(assetItem); });
    };
    CmcAssetContainer.prototype.notifyCollectionUpdate = function (collectionLocatorHash) {
        if (collectionLocatorHash === this._collectionLocatorHash
            || collectionLocatorHash === this._folderCollectionLocatorHash) {
            assetContainerCache_1.cmGetCmcAssetContainerCache().setContainerUpdate(this.locatorHash);
            var type = collectionLocatorHash === this._folderCollectionLocatorHash ?
                notifyExternal_1.CmeAssetNotificationType.updateAssetContainerFolders : notifyExternal_1.CmeAssetNotificationType.updateAssetContainer;
            var ref = assetContainerCache_1.cmGetCmcAssetContainerCache().getContainerCacheReference(this.locatorHash);
            if (!lodash_1.isNil(ref)) {
                notifyExternal_1.cmGetAssetNotifier().notify(type, [ref], collectionLocatorHash);
            }
        }
    };
    CmcAssetContainer.prototype.getChildAssetItems = function () {
        var collection = this.collection;
        var folderCollection = this.folderCollection;
        if (!lodash_1.isNil(folderCollection)) {
            if (!lodash_1.isNil(collection)) {
                var assetItems = collection.getSortedAssetItems()
                    .concat(folderCollection.getSortedAssetItems());
                if (!lodash_1.isNil(this.sortOptions.sortField)) {
                    var sortFunction = utils_1.objectPropertyComparison(this.sortOptions.sortField, this.sortOptions.sortDescending, 'name');
                    assetItems.sort(sortFunction);
                }
                return assetItems;
            }
            return folderCollection.getSortedAssetItems();
        }
        return lodash_1.isNil(collection) ? [] : collection.getSortedAssetItems();
    };
    CmcAssetContainer.prototype.getFilteredChildAssetItems = function (filterOptions) {
        var assetItems = this.getChildAssetItems();
        if (!lodash_1.isNil(filterOptions) && utils_1.cmAreFilterOptionsValid(filterOptions)) {
            return assetItems.filter(function (assetItem) { return utils_1.cmDoesAssetItemMatchFilterOptions(assetItem, filterOptions); });
        }
        return assetItems;
    };
    CmcAssetContainer.prototype.getFolderAssetItemFromCache = function () {
        var ref = assetItemCache_1.cmGetBsAssetItemCache().getAssetItemReferenceForAssetSpecification(this.assetLocator);
        return lodash_1.isNil(ref) ? null : ref.assetItem;
    };
    CmcAssetContainer.DefaultLoaderPageSize = exports.CmnDefaultBsnLoadPageSize;
    return CmcAssetContainer;
}());
exports.CmcAssetContainer = CmcAssetContainer;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcScheduleAsset = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var error_1 = __webpack_require__(3);
var notifyInternal_1 = __webpack_require__(4);
var asset_1 = __webpack_require__(9);
var CmcScheduleAsset = (function (_super) {
    __extends(CmcScheduleAsset, _super);
    function CmcScheduleAsset(assetItem) {
        var _this = _super.call(this, assetItem) || this;
        if (assetItem.assetType !== bscore_1.AssetType.Schedule) {
            throw (new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'Attempt to create CmcScheduleAsset object with AssetType.' + assetItem.assetType));
        }
        return _this;
    }
    CmcScheduleAsset.prototype.saveSchedule = function (state) {
        var _this = this;
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, this.fullPath)
                .then(function () {
                var assetItem = fsconnector_1.fsGetAssetItemFromFile(_this.fullPath);
                _this.updateCachedAssetItem(assetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                return assetItem;
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcScheduleAsset.prototype.getScheduleState = function () {
        if (this.assetLocation === bscore_1.AssetLocation.Local) {
            return fsconnector_1.fsGetLocalJsonFileAsObject(this.fullPath);
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    return CmcScheduleAsset;
}(asset_1.CmcAsset));
exports.CmcScheduleAsset = CmcScheduleAsset;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcBrightScriptAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var brightScriptAsset_1 = __webpack_require__(28);
var assetCollection_1 = __webpack_require__(7);
var interfaces_1 = __webpack_require__(13);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(0);
var CmcBrightScriptAssetCollection = (function (_super) {
    __extends(CmcBrightScriptAssetCollection, _super);
    function CmcBrightScriptAssetCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CmcBrightScriptAssetCollection.prototype, "sortFieldList", {
        get: function () {
            return [
                interfaces_1.AssetSortField.name,
                interfaces_1.AssetSortField.fileSize,
                interfaces_1.AssetSortField.lastModifiedDate,
                interfaces_1.AssetSortField.creationDate,
            ];
        },
        enumerable: false,
        configurable: true
    });
    CmcBrightScriptAssetCollection.prototype.uploadNewPlugin = function (file, targetName) {
        var _this = this;
        if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            if (!lodash_1.isNil(targetName)) {
                targetName = targetName.trim();
            }
            var sourceFileName_1 = utils_1.getFilenameFromFileSpec(file);
            if (lodash_1.isNil(sourceFileName_1)) {
                return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'Invalid file spec'));
            }
            if (this.hasAssetName(lodash_1.isNil(targetName) ? sourceFileName_1 : targetName)) {
                return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.assetNameExists, 'BrightScript asset'));
            }
            var sourceFilePath_1 = utils_1.getFileDirPathFromFileSpec(file);
            return utils_1.getFileContentFromFileSpec(file)
                .then(function (data) {
                var saveData = brightScriptAsset_1.CmcBrightScriptAsset.getBsnPluginSaveData(lodash_1.isNil(targetName) ? sourceFileName_1 : targetName, data);
                return bsnconnector_1.bsnGetSession().createPlugin(saveData)
                    .then(function (entity) {
                    var assetItem = brightScriptAsset_1.CmcBrightScriptAsset.getBsAssetPluginItemFromBsn(entity);
                    _this.addAssetItem(assetItem);
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                    return {
                        jobIndex: 0,
                        sourceFileName: sourceFileName_1, sourceFilePath: sourceFilePath_1,
                        assetItem: assetItem,
                        status: bscore_1.BsUploadItemStatus.Uploaded
                    };
                })
                    .catch(function (error) {
                    return {
                        jobIndex: 0,
                        sourceFileName: sourceFileName_1, sourceFilePath: sourceFilePath_1,
                        assetItem: null, status: bscore_1.BsUploadItemStatus.Failed,
                        error: error
                    };
                });
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcBrightScriptAssetCollection.prototype.deletePlugin = function (filename) {
        var _this = this;
        var assetType = this.getAssetTypeForName(filename);
        if (lodash_1.isNil(assetType)) {
            return Promise.resolve();
        }
        if (assetType === bscore_1.AssetType.Folder) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'DeletePlugin: Folder name cannot be specified'));
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var asset_1 = this.getAsset(filename);
            if (lodash_1.isNil(asset_1)) {
                return Promise.resolve();
            }
            return fsconnector_1.fsDeleteFile(asset_1.fullPath)
                .then(function () {
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [asset_1.assetItem] });
            });
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var assetItem_1 = this.getAssetItem(filename);
            if (lodash_1.isNil(assetItem_1)) {
                return Promise.resolve();
            }
            return bsnconnector_1.bsnGetSession().deletePlugin(assetItem_1.networkId)
                .then(function () {
                _this.markAssetItemAsDeleted(filename);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [assetItem_1] });
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    Object.defineProperty(CmcBrightScriptAssetCollection.prototype, "nameProperty", {
        get: function () { return 'fileInfo.name'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBrightScriptAssetCollection.prototype, "bsnSortField", {
        get: function () {
            var sortField = null;
            if (this._enumerationOptions.sortField) {
                sortField = assetCollection_1.BrightScriptBsnSortFieldMap[this._enumerationOptions.sortField];
            }
            return sortField ? sortField : null;
        },
        enumerable: false,
        configurable: true
    });
    CmcBrightScriptAssetCollection.prototype.getInitialBsnAssetListSegment = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getPluginListBySegment(enumerationOptions);
    };
    CmcBrightScriptAssetCollection.prototype.getNextBsnAssetListSegment = function (enumerator) {
        return bsnconnector_1.bsnGetSession().getNextPluginListSegment(enumerator);
    };
    CmcBrightScriptAssetCollection.prototype.processBsnAssetListSegmentItems = function (assetListSegment) {
        var _this = this;
        assetListSegment.listItems.forEach(function (pluginEntity) {
            var assetItem = brightScriptAsset_1.CmcBrightScriptAsset.getBsAssetPluginItemFromBsn(pluginEntity);
            if (!_this._assetMap.has(assetItem.name)) {
                _this._newAssetNames.add(assetItem.name);
            }
            _this.setPinnedAssetVerification(assetItem.name);
            _this.addAssetItem(assetItem);
        });
    };
    CmcBrightScriptAssetCollection.prototype.getBsnAssetBackendCount = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getPluginCount(enumerationOptions);
    };
    CmcBrightScriptAssetCollection.prototype.processBsnAssetListSegmentDuplicateNameCheck = function (segmentItems, matchList) {
        return segmentItems.reduce(function (items, item) {
            var matchProps = lodash_1.find(matchList, { name: item.fileInfo.name });
            if (lodash_1.isNil(matchProps)
                || lodash_1.isNil(matchProps.fileHash)
                || lodash_1.isEmpty(matchProps.fileHash)
                || lodash_1.isNil(item.fileInfo.hash)
                || utils_1.cmNormalizeBsnHashString(matchProps.fileHash) !== utils_1.cmNormalizeBsnHashString(item.fileInfo.hash)) {
                items.push(brightScriptAsset_1.CmcBrightScriptAsset.getBsAssetPluginItemFromBsn(item));
            }
            return items;
        }, []);
    };
    return CmcBrightScriptAssetCollection;
}(assetCollection_1.CmcAssetCollection));
exports.CmcBrightScriptAssetCollection = CmcBrightScriptAssetCollection;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcDeviceWebPageAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var deviceWebPageAsset_1 = __webpack_require__(23);
var assetCollection_1 = __webpack_require__(7);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var CmcDeviceWebPageAssetCollection = (function (_super) {
    __extends(CmcDeviceWebPageAssetCollection, _super);
    function CmcDeviceWebPageAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) {
        var _this = this;
        if (location === bscore_1.AssetLocation.Local) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation, 'Device HTML Sites cannot currently be stored in the local file system.');
        }
        _this = _super.call(this, location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) || this;
        return _this;
    }
    CmcDeviceWebPageAssetCollection.prototype.deleteDeviceWebPageAsset = function (name) {
        var _this = this;
        if (!this.hasAssetName(name)) {
            return Promise.resolve();
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var assetItem_1 = this.getAssetItem(name);
            return bsnconnector_1.bsnGetSession().deleteDeviceWebPage(assetItem_1.networkId)
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [assetItem_1] });
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    Object.defineProperty(CmcDeviceWebPageAssetCollection.prototype, "bsnSortField", {
        get: function () {
            var sortField = null;
            if (this._enumerationOptions.sortField) {
                sortField = assetCollection_1.HtmlSiteSortFieldMap[this._enumerationOptions.sortField];
            }
            return sortField ? sortField : null;
        },
        enumerable: false,
        configurable: true
    });
    CmcDeviceWebPageAssetCollection.prototype.getInitialBsnAssetListSegment = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getDeviceWebPageListBySegment(enumerationOptions);
    };
    CmcDeviceWebPageAssetCollection.prototype.getNextBsnAssetListSegment = function (enumerator) {
        return bsnconnector_1.bsnGetSession().getNextDeviceWebPageListSegment(enumerator);
    };
    CmcDeviceWebPageAssetCollection.prototype.processBsnAssetListSegmentItems = function (assetListSegment) {
        var _this = this;
        assetListSegment.listItems.forEach(function (htmlSite) {
            if (!_this._assetMap.has(htmlSite.name)) {
                _this._newAssetNames.add(htmlSite.name);
            }
            _this.setPinnedAssetVerification(htmlSite.name);
            _this.addAssetItem(deviceWebPageAsset_1.CmcDeviceWebPageAsset.getBsAssetDeviceWebPageItemFromBsn(htmlSite));
        });
    };
    CmcDeviceWebPageAssetCollection.prototype.getBsnAssetBackendCount = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getDeviceWebPageCount(enumerationOptions);
    };
    CmcDeviceWebPageAssetCollection.prototype.processBsnAssetListSegmentDuplicateNameCheck = function (segmentItems, matchList) {
        return segmentItems.reduce(function (items, item) {
            items.push(deviceWebPageAsset_1.CmcDeviceWebPageAsset.getBsAssetDeviceWebPageItemFromBsn(item));
            return items;
        }, []);
    };
    return CmcDeviceWebPageAssetCollection;
}(assetCollection_1.CmcAssetCollection));
exports.CmcDeviceWebPageAssetCollection = CmcDeviceWebPageAssetCollection;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcDynamicPlaylistAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var dynamicPlaylistAsset_1 = __webpack_require__(29);
var assetCollection_1 = __webpack_require__(7);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcDynamicPlaylistAssetCollection = (function (_super) {
    __extends(CmcDynamicPlaylistAssetCollection, _super);
    function CmcDynamicPlaylistAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) {
        var _this = this;
        if (location === bscore_1.AssetLocation.Local) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation, 'Dynamic Playlists cannot currently be stored in the local file system.');
        }
        _this = _super.call(this, location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) || this;
        return _this;
    }
    CmcDynamicPlaylistAssetCollection.prototype.createNewDynamicPlaylist = function (name, state) {
        var _this = this;
        name = name.trim();
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            name = name + '.bpdpl';
        }
        if (this.hasAssetName(name)) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.assetNameExists, 'DynamicPlaylist asset'));
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var fullPath_1 = this.currentDirectory + name;
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, fullPath_1)
                .then(function () {
                var assetItem = fsconnector_1.fsGetAssetItemFromFile(fullPath_1);
                if (!lodash_1.isNil(assetItem)) {
                    _this.addAssetItem(assetItem);
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                }
            });
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var saveData = dynamicPlaylistAsset_1.CmcDynamicPlaylistAsset.getBsnDynamicPlaylistSaveData(state);
            var playlistAssetLocators_1 = dynamicPlaylistAsset_1.CmcDynamicPlaylistAsset.getPlaylistStateDynamicPlaylistAssetLocatorList(state);
            return bsnconnector_1.bsnGetSession().createDynamicPlaylist(saveData)
                .then(function (dynamicPlaylistEntity) {
                var assetItem = dynamicPlaylistAsset_1.CmcDynamicPlaylistAsset.getBsAssetDynamicPlaylistItemFromBsn(dynamicPlaylistEntity);
                _this.addAssetItem(assetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                if (playlistAssetLocators_1.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addAssetUsageComponent, {
                        assetLocators: playlistAssetLocators_1,
                        usageComponentAssetLocator: bscore_1.bscAssetLocatorFromAssetItem(assetItem)
                    });
                }
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcDynamicPlaylistAssetCollection.prototype.deleteDynamicPlaylist = function (name) {
        var _this = this;
        if (!this.hasAssetName(name)) {
            return Promise.resolve();
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var asset_1 = this.getAsset(name);
            return fsconnector_1.fsDeleteFile(asset_1.fullPath)
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [asset_1.assetItem] });
            });
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var assetItem_1 = this.getAssetItem(name);
            var playlistAsset = this.getAsset(name);
            var playlistAssetLocators_2;
            return playlistAsset.getFeedInfoWithContent()
                .then(function (props) {
                playlistAssetLocators_2 = dynamicPlaylistAsset_1.CmcDynamicPlaylistAsset.getCurrentDynamicPlaylistAssetLocatorList(props);
                return bsnconnector_1.bsnGetSession().deleteDynamicPlaylist(name);
            })
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [assetItem_1] });
                if (playlistAssetLocators_2.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removeAssetUsageComponent, {
                        assetLocators: playlistAssetLocators_2,
                        usageComponentAssetLocator: bscore_1.bscAssetLocatorFromAssetItem(assetItem_1)
                    });
                }
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcDynamicPlaylistAssetCollection.prototype.assetHasUsageData = function (containerAssetType) {
        return this.currentAssetLocation === bscore_1.AssetLocation.Bsn && containerAssetType === bscore_1.AssetType.Project;
    };
    Object.defineProperty(CmcDynamicPlaylistAssetCollection.prototype, "bsnSortField", {
        get: function () {
            var sortField = null;
            if (this._enumerationOptions.sortField) {
                sortField = assetCollection_1.DataFeedBsnSortFieldMap[this._enumerationOptions.sortField];
            }
            return sortField ? sortField : null;
        },
        enumerable: false,
        configurable: true
    });
    CmcDynamicPlaylistAssetCollection.prototype.getInitialBsnAssetListSegment = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getDynamicPlaylistListBySegment(enumerationOptions);
    };
    CmcDynamicPlaylistAssetCollection.prototype.getNextBsnAssetListSegment = function (enumerator) {
        return bsnconnector_1.bsnGetSession().getNextDynamicPlaylistListSegment(enumerator);
    };
    CmcDynamicPlaylistAssetCollection.prototype.processBsnAssetListSegmentItems = function (assetListSegment) {
        var _this = this;
        assetListSegment.listItems.forEach(function (feed) {
            var assetItem = dynamicPlaylistAsset_1.CmcDynamicPlaylistAsset.getBsAssetDynamicPlaylistItemFromBsn(feed);
            if (!_this._assetMap.has(feed.name)) {
                _this._newAssetNames.add(feed.name);
            }
            _this.setPinnedAssetVerification(feed.name);
            _this.addAssetItem(assetItem);
        });
    };
    CmcDynamicPlaylistAssetCollection.prototype.getBsnAssetBackendCount = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getDynamicPlaylistCount(enumerationOptions);
    };
    return CmcDynamicPlaylistAssetCollection;
}(assetCollection_1.CmcAssetCollection));
exports.CmcDynamicPlaylistAssetCollection = CmcDynamicPlaylistAssetCollection;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcFolderAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var folderAsset_1 = __webpack_require__(17);
var assetCollection_1 = __webpack_require__(7);
var mediaAssetBaseCollection_1 = __webpack_require__(34);
var interfaces_1 = __webpack_require__(13);
var CmcFolderAssetCollection = (function (_super) {
    __extends(CmcFolderAssetCollection, _super);
    function CmcFolderAssetCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CmcFolderAssetCollection.prototype, "sortFieldList", {
        get: function () {
            return [
                interfaces_1.AssetSortField.name,
                interfaces_1.AssetSortField.lastModifiedDate,
                interfaces_1.AssetSortField.creationDate,
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcFolderAssetCollection.prototype, "filterExpression", {
        get: function () {
            return '[MediaType] IS IN (\'Folder\')';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcFolderAssetCollection.prototype, "bsnSortField", {
        get: function () {
            var sortField = null;
            if (this._enumerationOptions.sortField) {
                sortField = assetCollection_1.FolderBsnSortFieldMap[this._enumerationOptions.sortField];
            }
            return sortField ? sortField : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcFolderAssetCollection.prototype, "localAssetTypeArray", {
        get: function () {
            return [bscore_1.AssetType.Folder];
        },
        enumerable: false,
        configurable: true
    });
    CmcFolderAssetCollection.prototype.processBsnAssetListSegmentItems = function (assetListSegment) {
        var _this = this;
        assetListSegment.listItems.forEach(function (item) {
            if (bsnconnector_1.bsnIsFolderContentEntity(item)) {
                if (!_this._assetMap.has(item.name)) {
                    _this._newAssetNames.add(item.name);
                }
                _this.setPinnedAssetVerification(item.name);
                _this.addAssetItem(folderAsset_1.CmcFolderAsset.getBsAssetFolderItemFromBsn(item));
            }
        });
    };
    return CmcFolderAssetCollection;
}(mediaAssetBaseCollection_1.CmcMediaAssetBaseCollection));
exports.CmcFolderAssetCollection = CmcFolderAssetCollection;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcHtmlSiteAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var htmlSiteAsset_1 = __webpack_require__(18);
var assetCollection_1 = __webpack_require__(7);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var CmcHtmlSiteAssetCollection = (function (_super) {
    __extends(CmcHtmlSiteAssetCollection, _super);
    function CmcHtmlSiteAssetCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CmcHtmlSiteAssetCollection.prototype.deleteHtmlSiteAsset = function (name) {
        var _this = this;
        if (!this.hasAssetName(name)) {
            return Promise.resolve();
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var asset_1 = this.getAsset(name);
            return fsconnector_1.fsDeleteFile(asset_1.fullPath)
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [asset_1.assetItem] });
            });
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var assetItem_1 = this.getAssetItem(name);
            return bsnconnector_1.bsnGetSession().deleteHtmlSite(assetItem_1.networkId)
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [assetItem_1] });
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcHtmlSiteAssetCollection.prototype.assetHasUsageData = function (containerAssetType) {
        return this.currentAssetLocation === bscore_1.AssetLocation.Bsn && containerAssetType === bscore_1.AssetType.Project;
    };
    Object.defineProperty(CmcHtmlSiteAssetCollection.prototype, "bsnSortField", {
        get: function () {
            var sortField = null;
            if (this._enumerationOptions.sortField) {
                sortField = assetCollection_1.HtmlSiteSortFieldMap[this._enumerationOptions.sortField];
            }
            return sortField ? sortField : null;
        },
        enumerable: false,
        configurable: true
    });
    CmcHtmlSiteAssetCollection.prototype.getInitialBsnAssetListSegment = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getHtmlSiteListBySegment(enumerationOptions);
    };
    CmcHtmlSiteAssetCollection.prototype.getNextBsnAssetListSegment = function (enumerator) {
        return bsnconnector_1.bsnGetSession().getNextHtmlSiteListSegment(enumerator);
    };
    CmcHtmlSiteAssetCollection.prototype.processBsnAssetListSegmentItems = function (assetListSegment) {
        var _this = this;
        assetListSegment.listItems.forEach(function (htmlSite) {
            if (!_this._assetMap.has(htmlSite.name)) {
                _this._newAssetNames.add(htmlSite.name);
            }
            _this.setPinnedAssetVerification(htmlSite.name);
            _this.addAssetItem(htmlSiteAsset_1.CmcHtmlSiteAsset.getBsAssetHtmlSiteItemFromBsn(htmlSite));
        });
    };
    CmcHtmlSiteAssetCollection.prototype.getBsnAssetBackendCount = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getHtmlSiteCount(enumerationOptions);
    };
    CmcHtmlSiteAssetCollection.prototype.processBsnAssetListSegmentDuplicateNameCheck = function (segmentItems, matchList) {
        return segmentItems.reduce(function (items, item) {
            items.push(htmlSiteAsset_1.CmcHtmlSiteAsset.getBsAssetHtmlSiteItemFromBsn(item));
            return items;
        }, []);
    };
    return CmcHtmlSiteAssetCollection;
}(assetCollection_1.CmcAssetCollection));
exports.CmcHtmlSiteAssetCollection = CmcHtmlSiteAssetCollection;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.CmcMediaAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var mediaAsset_1 = __webpack_require__(30);
var folderAsset_1 = __webpack_require__(17);
var assetCollection_1 = __webpack_require__(7);
var mediaAssetBaseCollection_1 = __webpack_require__(34);
var interfaces_1 = __webpack_require__(13);
var assetManager_1 = __webpack_require__(10);
var notifyInternal_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(6);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcMediaAssetCollection = (function (_super) {
    __extends(CmcMediaAssetCollection, _super);
    function CmcMediaAssetCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tagFilteredAssetNames = [];
        _this._tagFilterEnumerationIsComplete = false;
        _this._tagFilterSpecification = null;
        _this._tagEnumerationOptions = null;
        _this._tagEnumerator = null;
        return _this;
    }
    Object.defineProperty(CmcMediaAssetCollection.prototype, "tagFilteredAssetNames", {
        get: function () {
            return this._tagFilteredAssetNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAssetCollection.prototype, "tagFilterEnumerationIsComplete", {
        get: function () {
            return this._tagFilterEnumerationIsComplete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAssetCollection.prototype, "tagFilterSpecification", {
        get: function () {
            return this._tagFilterSpecification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAssetCollection.prototype, "sortFieldList", {
        get: function () {
            return [
                interfaces_1.AssetSortField.name,
                interfaces_1.AssetSortField.fileSize,
                interfaces_1.AssetSortField.lastModifiedDate,
                interfaces_1.AssetSortField.creationDate,
            ];
        },
        enumerable: false,
        configurable: true
    });
    CmcMediaAssetCollection.prototype.deleteMediaAsset = function (name) {
        var _this = this;
        var assetType = this.getAssetTypeForName(name);
        if (lodash_1.isNil(assetType)) {
            return Promise.resolve();
        }
        if (assetType === bscore_1.AssetType.Folder) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'DeleteMediaAsset: Folder name cannot be specified'));
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var asset_1 = this.getAsset(name);
            if (!lodash_1.isNil(asset_1)) {
                return fsconnector_1.fsDeleteFile(asset_1.fullPath)
                    .then(function () {
                    _this.markAssetItemAsDeleted(name);
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [asset_1.assetItem] });
                })
                    .then(function () { return assetManager_1.cmUpdateAssetItemParentFolder(asset_1.assetItem); })
                    .then();
            }
            return Promise.resolve();
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var assetItem_1 = this.getAssetItem(name);
            if (!lodash_1.isNil(assetItem_1)) {
                return bsnconnector_1.bsnGetSession().deleteContentItem(assetItem_1.networkId)
                    .then(function () {
                    _this.markAssetItemAsDeleted(name);
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [assetItem_1] });
                })
                    .then(function () { return assetManager_1.cmUpdateAssetItemParentFolder(assetItem_1); })
                    .then();
            }
            return Promise.resolve();
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcMediaAssetCollection.prototype.retrieveBsnAssetListForTagFilter = function (enumOps) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var getNext = function () {
                _this.nextRetrieveBsnAssetListForTagFilter()
                    .then(function () {
                    if (_this._tagFilterEnumerationIsComplete) {
                        resolve(_this._tagFilteredAssetNames);
                    }
                    else {
                        return getNext();
                    }
                })
                    .catch(function (error) { return reject(error); });
            };
            return _this.startRetrieveBsnAssetListForTagFilter(__assign(__assign({}, enumOps), { pageSize: 100 }))
                .then(function () {
                if (_this._tagFilterEnumerationIsComplete) {
                    resolve(_this._tagFilteredAssetNames);
                }
                else {
                    return getNext();
                }
            })
                .catch(function (error) { return reject(error); });
        });
    };
    CmcMediaAssetCollection.prototype.startRetrieveBsnAssetListForTagFilter = function (enumOps) {
        var _this = this;
        if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            this._tagFilteredAssetNames = [];
            this._tagFilterEnumerationIsComplete = false;
            this._tagFilterSpecification = enumOps.filterSpec;
            this._tagEnumerationOptions = { filter: bsnconnector_1.bsnCreateTagFilter(enumOps.filterSpec, this.currentDirectory) };
            this._tagEnumerationOptions.sortExpression = bsnconnector_1.bsnGetTaggedPlaylistOrderTagString(enumOps);
            this._tagEnumerationOptions.pageSize =
                lodash_1.isNil(enumOps.pageSize) || enumOps.pageSize < 1 || enumOps.pageSize > 100 ? 100 : enumOps.pageSize;
            return this.getInitialBsnAssetListSegment(this._tagEnumerationOptions)
                .then(function (assetListSegment) {
                _this.processTagAssetListSegment(assetListSegment);
                return _this;
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcMediaAssetCollection.prototype.nextRetrieveBsnAssetListForTagFilter = function () {
        var _this = this;
        if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            if (this._tagFilterEnumerationIsComplete || lodash_1.isNil(this._tagEnumerator)) {
                return Promise.resolve(this);
            }
            return this.getNextBsnAssetListSegment(this._tagEnumerator)
                .then(function (assetListSegment) {
                _this.processTagAssetListSegment(assetListSegment);
                return _this;
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcMediaAssetCollection.prototype.clearTagFilteredAssetList = function () {
        this._tagFilteredAssetNames = [];
        this._tagFilterEnumerationIsComplete = false;
        this._tagFilterSpecification = null;
        this._tagEnumerationOptions = null;
        this._tagEnumerator = null;
    };
    CmcMediaAssetCollection.prototype.assetMatchesCollection = function (assetItem) {
        var matches = _super.prototype.assetMatchesCollection.call(this, assetItem)
            && (!this._enumerationOptions.mediaFilters
                || this._enumerationOptions.mediaFilters.indexOf(assetItem.mediaType) >= 0);
        return matches;
    };
    CmcMediaAssetCollection.prototype.assetHasUsageData = function (containerAssetType) {
        if (this.currentAssetLocation !== bscore_1.AssetLocation.Bsn) {
            return false;
        }
        var typeSet = new Set([
            bscore_1.AssetType.Project, bscore_1.AssetType.BSNDynamicPlaylist, bscore_1.AssetType.BSNMediaFeed, bscore_1.AssetType.BSNTaggedPlaylist
        ]);
        return typeSet.has(containerAssetType);
    };
    Object.defineProperty(CmcMediaAssetCollection.prototype, "nameProperty", {
        get: function () { return 'fileName'; },
        enumerable: false,
        configurable: true
    });
    CmcMediaAssetCollection.prototype.clearUnpinnedAssets = function () {
        _super.prototype.clearUnpinnedAssets.call(this);
        this.clearTagFilteredAssetList();
    };
    Object.defineProperty(CmcMediaAssetCollection.prototype, "filterExpression", {
        get: function () {
            var filterExpression = '';
            var mediaTypeFilters = this._enumerationOptions.mediaFilters;
            if (mediaTypeFilters) {
                filterExpression = '[MediaType] IS IN (';
                var sep_1 = '';
                mediaTypeFilters.forEach(function (type) {
                    filterExpression = filterExpression + sep_1 + '\'' + type + '\'';
                    sep_1 = ', ';
                });
                if (this.enumerationOptions.folders) {
                    filterExpression = filterExpression + sep_1 + '\'Folder\'';
                }
                filterExpression = filterExpression + ')';
            }
            else if (!this._enumerationOptions.folders) {
                filterExpression = '[MediaType] IS NOT \'Folder\'';
            }
            return filterExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMediaAssetCollection.prototype, "bsnSortField", {
        get: function () {
            var sortField = null;
            if (this._enumerationOptions.sortField) {
                sortField = assetCollection_1.ContentBsnSortFieldMap[this._enumerationOptions.sortField];
            }
            return sortField ? sortField : null;
        },
        enumerable: false,
        configurable: true
    });
    CmcMediaAssetCollection.prototype.processBsnAssetListSegmentItems = function (assetListSegment) {
        var _this = this;
        var mediaTypeFilters = this._enumerationOptions.mediaFilters;
        assetListSegment.listItems.forEach(function (item) {
            if (bsnconnector_1.bsnIsFolderContentEntity(item)) {
                if (_this.enumerationOptions.folders) {
                    if (!_this._assetMap.has(item.name)) {
                        _this._newAssetNames.add(item.name);
                    }
                    _this.setPinnedAssetVerification(item.name);
                    _this.addAssetItem(folderAsset_1.CmcFolderAsset.getBsAssetFolderItemFromBsn(item));
                }
            }
            else {
                var assetItem = mediaAsset_1.CmcMediaAsset.getBsAssetMediaFileItemFromBsn(item);
                if (mediaTypeFilters === null || mediaTypeFilters.indexOf(assetItem.mediaType) >= 0) {
                    if (!_this._assetMap.has(assetItem.name)) {
                        _this._newAssetNames.add(assetItem.name);
                    }
                    _this.setPinnedAssetVerification(assetItem.name);
                    _this.addAssetItem(assetItem);
                }
            }
        });
    };
    CmcMediaAssetCollection.prototype.processBsnAssetListSegmentDuplicateNameCheck = function (segmentItems, matchList) {
        return segmentItems.reduce(function (items, item) {
            var criteria = {
                name: bsnconnector_1.bsnIsFolderContentEntity(item) ? item.name : item.fileName,
                destinationPath: item.virtualPath,
            };
            var matchProps = lodash_1.find(matchList, criteria);
            if (!lodash_1.isNil(matchProps)) {
                if (bsnconnector_1.bsnIsFolderContentEntity(item)) {
                    items.push(folderAsset_1.CmcFolderAsset.getBsAssetFolderItemFromBsn(item));
                }
                else if (lodash_1.isNil(matchProps)
                    || lodash_1.isNil(matchProps.fileHash)
                    || lodash_1.isEmpty(matchProps.fileHash)
                    || utils_1.cmNormalizeBsnHashString(matchProps.fileHash) !== utils_1.cmNormalizeBsnHashString(item.fileHash)) {
                    items.push(mediaAsset_1.CmcMediaAsset.getBsAssetMediaFileItemFromBsn(item));
                }
            }
            return items;
        }, []);
    };
    CmcMediaAssetCollection.prototype.processTagAssetListSegment = function (assetListSegment) {
        var _this = this;
        assetListSegment.listItems.forEach(function (item) {
            if (bsnconnector_1.bsnIsFileContentEntity(item)) {
                var assetItem = mediaAsset_1.CmcMediaAsset.getBsAssetMediaFileItemFromBsn(item);
                _this.addAssetItem(assetItem);
                _this._tagFilteredAssetNames.push(assetItem.name);
            }
        });
        this._tagFilterEnumerationIsComplete = assetListSegment.enumerator.isComplete;
        if (this._tagFilterEnumerationIsComplete) {
            this._tagEnumerator = null;
        }
        else {
            this._tagEnumerator = assetListSegment.enumerator;
        }
    };
    return CmcMediaAssetCollection;
}(mediaAssetBaseCollection_1.CmcMediaAssetBaseCollection));
exports.CmcMediaAssetCollection = CmcMediaAssetCollection;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcMediaFeedAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var mediaFeedAsset_1 = __webpack_require__(31);
var assetCollection_1 = __webpack_require__(7);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcMediaFeedAssetCollection = (function (_super) {
    __extends(CmcMediaFeedAssetCollection, _super);
    function CmcMediaFeedAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) {
        var _this = this;
        if (location === bscore_1.AssetLocation.Local) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation, 'Media Feeds cannot currently be stored in the local file system.');
        }
        _this = _super.call(this, location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) || this;
        return _this;
    }
    CmcMediaFeedAssetCollection.prototype.createNewMediaFeed = function (name, state) {
        var _this = this;
        name = name.trim();
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            name = name + '.bpmdfd';
        }
        if (this.hasAssetName(name)) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.assetNameExists, 'MediaFeed asset'));
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var fullPath_1 = this.currentDirectory + name;
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, fullPath_1)
                .then(function () {
                var assetItem = fsconnector_1.fsGetAssetItemFromFile(fullPath_1);
                if (!lodash_1.isNil(assetItem)) {
                    _this.addAssetItem(assetItem);
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                }
            });
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var saveData = mediaFeedAsset_1.CmcMediaFeedAsset.getBsnMediaFeedSaveData(state);
            var mediaFeedAssetLocators_1 = mediaFeedAsset_1.CmcMediaFeedAsset.getMediaFeedStateMediaFeedAssetLocatorList(state);
            return bsnconnector_1.bsnGetSession().createMediaFeed(saveData)
                .then(function (mediaFeedEntity) {
                var assetItem = mediaFeedAsset_1.CmcMediaFeedAsset.getBsAssetMediaFeedItemFromBsn(mediaFeedEntity);
                _this.addAssetItem(assetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                if (mediaFeedAssetLocators_1.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addAssetUsageComponent, {
                        assetLocators: mediaFeedAssetLocators_1,
                        usageComponentAssetLocator: bscore_1.bscAssetLocatorFromAssetItem(assetItem)
                    });
                }
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcMediaFeedAssetCollection.prototype.deleteMediaFeed = function (name) {
        var _this = this;
        if (!this.hasAssetName(name)) {
            return Promise.resolve();
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var asset_1 = this.getAsset(name);
            return fsconnector_1.fsDeleteFile(asset_1.fullPath)
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [asset_1.assetItem] });
            });
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var assetItem_1 = this.getAssetItem(name);
            var mediaFeedAsset = this.getAsset(name);
            var mediaFeedAssetLocators_2;
            return mediaFeedAsset.getFeedInfoWithContent()
                .then(function (props) {
                mediaFeedAssetLocators_2 = mediaFeedAsset_1.CmcMediaFeedAsset.getCurrentMediaFeedAssetLocatorList(props);
                return bsnconnector_1.bsnGetSession().deleteMediaFeed(name);
            })
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [assetItem_1] });
                if (mediaFeedAssetLocators_2.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removeAssetUsageComponent, {
                        assetLocators: mediaFeedAssetLocators_2,
                        usageComponentAssetLocator: bscore_1.bscAssetLocatorFromAssetItem(assetItem_1)
                    });
                }
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcMediaFeedAssetCollection.prototype.assetHasUsageData = function (containerAssetType) {
        return this.currentAssetLocation === bscore_1.AssetLocation.Bsn && containerAssetType === bscore_1.AssetType.Project;
    };
    Object.defineProperty(CmcMediaFeedAssetCollection.prototype, "bsnSortField", {
        get: function () {
            var sortField = null;
            if (this._enumerationOptions.sortField) {
                sortField = assetCollection_1.DataFeedBsnSortFieldMap[this._enumerationOptions.sortField];
            }
            return sortField ? sortField : null;
        },
        enumerable: false,
        configurable: true
    });
    CmcMediaFeedAssetCollection.prototype.getInitialBsnAssetListSegment = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getMediaFeedListBySegment(enumerationOptions);
    };
    CmcMediaFeedAssetCollection.prototype.getNextBsnAssetListSegment = function (enumerator) {
        return bsnconnector_1.bsnGetSession().getNextMediaFeedListSegment(enumerator);
    };
    CmcMediaFeedAssetCollection.prototype.processBsnAssetListSegmentItems = function (assetListSegment) {
        var _this = this;
        assetListSegment.listItems.forEach(function (feed) {
            var assetItem = mediaFeedAsset_1.CmcMediaFeedAsset.getBsAssetMediaFeedItemFromBsn(feed);
            if (!_this._assetMap.has(feed.name)) {
                _this._newAssetNames.add(feed.name);
            }
            _this.setPinnedAssetVerification(feed.name);
            _this.addAssetItem(assetItem);
        });
    };
    CmcMediaFeedAssetCollection.prototype.getBsnAssetBackendCount = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getMediaFeedCount(enumerationOptions);
    };
    return CmcMediaFeedAssetCollection;
}(assetCollection_1.CmcAssetCollection));
exports.CmcMediaFeedAssetCollection = CmcMediaFeedAssetCollection;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcMultiAssetTypeCollection = void 0;
var bscore_1 = __webpack_require__(2);
var assetCollection_1 = __webpack_require__(7);
var interfaces_1 = __webpack_require__(13);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcMultiAssetTypeCollection = (function (_super) {
    __extends(CmcMultiAssetTypeCollection, _super);
    function CmcMultiAssetTypeCollection(location, assetTypes, directoryPath, pinnedAssetItems, enumerationOptions) {
        var _this = this;
        if (location === bscore_1.AssetLocation.Bsn) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.unsupportedMultipleAssetTypes);
        }
        var assetTypeArray = Array.isArray(assetTypes) ? assetTypes : [assetTypes];
        if (enumerationOptions && enumerationOptions.folders) {
            assetTypeArray.push(bscore_1.AssetType.Folder);
        }
        if (enumerationOptions && enumerationOptions.includeLegacyAssets
            && assetTypeArray.indexOf(bscore_1.AssetType.Project) >= 0) {
            assetTypeArray.push(bscore_1.AssetType.ProjectBpf);
        }
        _this = _super.call(this, location, lodash_1.uniq(assetTypeArray), directoryPath, pinnedAssetItems, enumerationOptions) || this;
        return _this;
    }
    Object.defineProperty(CmcMultiAssetTypeCollection.prototype, "sortFieldList", {
        get: function () {
            return [
                interfaces_1.AssetSortField.name,
                interfaces_1.AssetSortField.lastModifiedDate,
                interfaces_1.AssetSortField.creationDate,
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcMultiAssetTypeCollection.prototype, "localAssetTypeArray", {
        get: function () {
            return this.assetTypes;
        },
        enumerable: false,
        configurable: true
    });
    return CmcMultiAssetTypeCollection;
}(assetCollection_1.CmcAssetCollection));
exports.CmcMultiAssetTypeCollection = CmcMultiAssetTypeCollection;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.CmcPresentationAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var bsdatamodel_1 = __webpack_require__(22);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var bs_device_artifacts_1 = __webpack_require__(42);
var presentationAsset_1 = __webpack_require__(24);
var assetCollection_1 = __webpack_require__(7);
var interfaces_1 = __webpack_require__(13);
var assetManager_1 = __webpack_require__(10);
var notifyInternal_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(6);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcPresentationAssetCollection = (function (_super) {
    __extends(CmcPresentationAssetCollection, _super);
    function CmcPresentationAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) {
        var _this = this;
        var typeArray = (Array.isArray(assetType) ? assetType : [assetType]).filter(function (type) {
            return utils_1.cmIsPresentationAssetType(type) || (location !== bscore_1.AssetLocation.Bsn && type === bscore_1.AssetType.Folder);
        });
        if (typeArray.indexOf(bscore_1.AssetType.ProjectBpf) < 0
            && !lodash_1.isNil(enumerationOptions)
            && enumerationOptions.includeLegacyAssets) {
            typeArray.push(bscore_1.AssetType.ProjectBpf);
        }
        _this = _super.call(this, location, typeArray.length ? typeArray : [bscore_1.AssetType.Project], directoryPath, pinnedAssetItems, enumerationOptions) || this;
        return _this;
    }
    Object.defineProperty(CmcPresentationAssetCollection.prototype, "sortFieldList", {
        get: function () {
            return [
                interfaces_1.AssetSortField.name,
                interfaces_1.AssetSortField.fileSize,
                interfaces_1.AssetSortField.lastModifiedDate,
                interfaces_1.AssetSortField.creationDate,
            ];
        },
        enumerable: false,
        configurable: true
    });
    CmcPresentationAssetCollection.prototype.testPresentationListExists = function (assetSpecs) {
        var _this = this;
        if (assetSpecs.length > 0) {
            var location_1 = assetSpecs[0].location;
            if (assetSpecs.some(function (spec) { return spec.location !== location_1 || spec.assetType !== bscore_1.AssetType.Project; })) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'testPresentationListExists - all specs must refer to Presentation assets in the same location');
            }
            if (location_1 === bscore_1.AssetLocation.Local) {
                return Promise.all(assetSpecs.map(assetManager_1.cmBsAssetExists));
            }
            else if (location_1 === bscore_1.AssetLocation.Bsn) {
                var getNextSegment = function (specSegment) {
                    var nameFilterSpec = bscore_1.bscCreateBsnFilterSpecification(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'name', bscore_1.BsnStringFilterOperator.IsIn, specSegment.map(function (spec) { return spec.name; })));
                    var filter = bsnconnector_1.bsnCreateFilter(nameFilterSpec);
                    var matchingNames = [];
                    var getNext = function (enumerator) {
                        return _this.getNextBsnAssetListSegment(enumerator)
                            .then(function (listSegment) {
                            matchingNames.push.apply(matchingNames, listSegment.listItems.map(function (item) { return item.name; }));
                            if (listSegment.enumerator.isComplete) {
                                return matchingNames;
                            }
                            else {
                                return getNext(listSegment.enumerator);
                            }
                        });
                    };
                    return _this.getInitialBsnAssetListSegment({ filter: filter })
                        .then(function (listSegment) {
                        matchingNames.push.apply(matchingNames, listSegment.listItems.map(function (item) { return item.name; }));
                        if (listSegment.enumerator.isComplete) {
                            return matchingNames;
                        }
                        else {
                            return getNext(listSegment.enumerator);
                        }
                    });
                };
                var specSegments = utils_1.cmGetBsnNameQuerySegments(assetSpecs);
                return Promise.all(specSegments.map(getNextSegment))
                    .then(function (assetNameArrays) {
                    var catArray = assetNameArrays.reduce(function (final, array) {
                        final.push.apply(final, array);
                        return final;
                    }, []);
                    var names = new Set(catArray);
                    return assetSpecs.map(function (spec) { return names.has(spec.name); });
                });
            }
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'testPresentationListExists - specified AssetLocation not supported');
        }
        return Promise.resolve([]);
    };
    CmcPresentationAssetCollection.prototype.createNewPresentation = function (name, state, autorunVersion) {
        var _this = this;
        name = name.trim();
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            name = name + '.bpfx';
        }
        if (this.hasAssetName(name)) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.assetNameExists, 'Presentation asset'));
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var fullPath_1 = this.currentDirectory + name;
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, fullPath_1)
                .then(function () {
                var assetItem = fsconnector_1.fsGetAssetItemFromFile(fullPath_1);
                if (!lodash_1.isNil(assetItem)) {
                    _this.addAssetItem(assetItem);
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                    return assetItem;
                }
                throw new error_1.BsCmError(error_1.BsCmErrorType.unexpectedError, 'CreateNewPresentation (Local): presentation file save failed');
            });
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var dmState = bsdatamodel_1.dmFilterDmState(state);
            var autorun = autorunVersion ? autorunVersion : bs_device_artifacts_1.bsDaGetRegisteredAutorunVersion();
            var dmThumbnail = bsdatamodel_1.dmGetThumbnail(dmState);
            var thumbnailData = dmThumbnail ? dmThumbnail.data : null;
            var thumbnailExt = dmThumbnail ? bscore_1.bscGetFileExtensionForMimeType(dmThumbnail.type) : null;
            var saveData_1 = presentationAsset_1.CmcPresentationAsset.getBsnPresentationSaveData(name, state, autorun, 0, null, thumbnailData, thumbnailExt);
            var presentationAssetLocators_1 = bsdatamodel_1.dmGetBsnAssetLocatorList(dmState);
            return presentationAsset_1.CmcPresentationAsset.getBsnPresentationAssetFileData(state)
                .then(function (assetFileData) { return bsnconnector_1.bsnGetSession().createPresentation(saveData_1, assetFileData); })
                .then(function (presentationEntity) {
                var assetItem = presentationAsset_1.CmcPresentationAsset.getBsAssetPresentationItemFromBsn(presentationEntity);
                _this.addAssetItem(assetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                if (presentationAssetLocators_1.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addAssetUsageComponent, {
                        assetLocators: presentationAssetLocators_1,
                        usageComponentAssetLocator: bscore_1.bscAssetLocatorFromAssetItem(assetItem)
                    });
                }
                return assetItem;
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcPresentationAssetCollection.prototype.deletePresentation = function (name) {
        var _this = this;
        var assetType = this.getAssetTypeForName(name);
        if (lodash_1.isNil(assetType)) {
            return Promise.resolve();
        }
        if (assetType === bscore_1.AssetType.Folder) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'DeletePresentation: Folder name cannot be specified'));
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var asset_1 = this.getAsset(name);
            return fsconnector_1.fsDeleteFile(asset_1.fullPath)
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [asset_1.assetItem] });
            });
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var assetItem_1 = this.getAssetItem(name);
            var presentationAsset = this.getAsset(name);
            var presentationAssetLocators_2;
            return presentationAsset.getPresentationProperties()
                .then(function (props) {
                presentationAssetLocators_2 = presentationAsset_1.CmcPresentationAsset.getCurrentBsnPresentationAssetLocatorList(props);
                return bsnconnector_1.bsnGetSession().deletePresentation(name);
            })
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [assetItem_1] });
                if (presentationAssetLocators_2.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removeAssetUsageComponent, {
                        assetLocators: presentationAssetLocators_2,
                        usageComponentAssetLocator: bscore_1.bscAssetLocatorFromAssetItem(assetItem_1)
                    });
                }
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcPresentationAssetCollection.prototype.notify = function (notification) {
        var _this = this;
        if (notifyInternal_1.cmIsPresentationScheduleNotification(notification)) {
            notification.presentationLocators.forEach(function (locator) {
                var presentationAssetItem = _this.getAssetItem(locator.name);
                if (!lodash_1.isNil(presentationAssetItem)) {
                    var assetData = presentationAssetItem.assetData;
                    if (!lodash_1.isNil(assetData)) {
                        var groupList = assetData.groups;
                        if (!lodash_1.isNil(groupList)) {
                            var presentationAssetUpdated = false;
                            if (notification.kind === notifyInternal_1.AssetCollectionNotificationType.scheduledPresentations) {
                                if (lodash_1.isNil(lodash_1.find(groupList, ['id', notification.group.id]))) {
                                    groupList.push(__assign({}, notification.group));
                                    presentationAssetUpdated = true;
                                }
                            }
                            else if (notification.kind === notifyInternal_1.AssetCollectionNotificationType.unscheduledPresentations) {
                                var origLength = groupList.length;
                                lodash_1.remove(groupList, function (groupItem) { return groupItem.id === notification.group.id; });
                                presentationAssetUpdated = groupList.length !== origLength;
                            }
                            if (presentationAssetUpdated
                                && lodash_1.isNil(lodash_1.find(_this._updatedAssetNames, ['name', presentationAssetItem.name]))) {
                                _this._updatedAssetNames.push(presentationAssetItem.name);
                            }
                        }
                    }
                }
            });
        }
        else {
            _super.prototype.notify.call(this, notification);
        }
    };
    Object.defineProperty(CmcPresentationAssetCollection.prototype, "filterExpression", {
        get: function () {
            var includeBpfx = this.isAssetTypeIncluded(bscore_1.AssetType.Project);
            var includeBpf = this.isAssetTypeIncluded(bscore_1.AssetType.ProjectBpf);
            var mainFilter;
            if (includeBpfx && includeBpf) {
                mainFilter = '[type] IS \'Complete\' AND [ProjectFile] IS NOT NULL';
            }
            else {
                var fileExt = includeBpfx ? 'bpfx' : 'bpf';
                mainFilter = "[type] IS 'Complete' AND [ProjectFile].[Name] ENDS WITH '." + fileExt + "'";
            }
            return mainFilter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPresentationAssetCollection.prototype, "localAssetTypeArray", {
        get: function () {
            var assetTypes = this.assetTypes.slice();
            if (this.enumerationOptions.folders && assetTypes.indexOf(bscore_1.AssetType.Folder) < 0) {
                assetTypes.push(bscore_1.AssetType.Folder);
            }
            if (this.enumerationOptions.includeLegacyAssets && assetTypes.indexOf(bscore_1.AssetType.ProjectBpf) < 0) {
                assetTypes.push(bscore_1.AssetType.ProjectBpf);
            }
            return assetTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPresentationAssetCollection.prototype, "bsnSortField", {
        get: function () {
            var sortField = null;
            if (this._enumerationOptions.sortField) {
                sortField = assetCollection_1.PresentationBsnSortFieldMap[this._enumerationOptions.sortField];
            }
            return sortField ? sortField : null;
        },
        enumerable: false,
        configurable: true
    });
    CmcPresentationAssetCollection.prototype.getInitialBsnAssetListSegment = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getPresentationListBySegment(enumerationOptions);
    };
    CmcPresentationAssetCollection.prototype.getNextBsnAssetListSegment = function (enumerator) {
        return bsnconnector_1.bsnGetSession().getNextPresentationListSegment(enumerator);
    };
    CmcPresentationAssetCollection.prototype.processBsnAssetListSegmentItems = function (assetListSegment) {
        var _this = this;
        assetListSegment.listItems.forEach(function (presentationEntity) {
            var assetItem = presentationAsset_1.CmcPresentationAsset.getBsAssetPresentationItemFromBsn(presentationEntity);
            if (!_this._assetMap.has(assetItem.name)) {
                _this._newAssetNames.add(assetItem.name);
            }
            _this.setPinnedAssetVerification(assetItem.name);
            _this.addAssetItem(assetItem);
        });
    };
    CmcPresentationAssetCollection.prototype.getBsnAssetBackendCount = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getPresentationCount(enumerationOptions);
    };
    return CmcPresentationAssetCollection;
}(assetCollection_1.CmcAssetCollection));
exports.CmcPresentationAssetCollection = CmcPresentationAssetCollection;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcScheduleAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var assetCollection_1 = __webpack_require__(7);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcScheduleAssetCollection = (function (_super) {
    __extends(CmcScheduleAssetCollection, _super);
    function CmcScheduleAssetCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CmcScheduleAssetCollection.prototype.createNewSchedule = function (name, state) {
        var _this = this;
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            name = name + '.bpsx';
        }
        if (this.hasAssetName(name)) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.assetNameExists, 'Schedule'));
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var fullPath_1 = this.currentDirectory + name;
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, fullPath_1)
                .then(function () {
                var assetItem = fsconnector_1.fsGetAssetItemFromFile(fullPath_1);
                if (!lodash_1.isNil(assetItem)) {
                    _this.addAssetItem(assetItem);
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                    return assetItem;
                }
                throw new error_1.BsCmError(error_1.BsCmErrorType.unexpectedError, 'CreateNewSchedule (Local): schedule file save failed');
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcScheduleAssetCollection.prototype.deleteSchedule = function (name) {
        var _this = this;
        var assetType = this.getAssetTypeForName(name);
        if (lodash_1.isNil(assetType)) {
            return Promise.resolve();
        }
        if (assetType === bscore_1.AssetType.Folder) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'DeleteSchedule: Folder name cannot be specified'));
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var asset_1 = this.getAsset(name);
            return fsconnector_1.fsDeleteFile(asset_1.fullPath)
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [asset_1.assetItem] });
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    return CmcScheduleAssetCollection;
}(assetCollection_1.CmcAssetCollection));
exports.CmcScheduleAssetCollection = CmcScheduleAssetCollection;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcTaggedPlaylistAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var taggedPlaylistAsset_1 = __webpack_require__(32);
var assetCollection_1 = __webpack_require__(7);
var bsnOperations_1 = __webpack_require__(8);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcTaggedPlaylistAssetCollection = (function (_super) {
    __extends(CmcTaggedPlaylistAssetCollection, _super);
    function CmcTaggedPlaylistAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) {
        var _this = this;
        if (location === bscore_1.AssetLocation.Local) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation, 'Tagged Playlists cannot currently be stored in the local file system.');
        }
        _this = _super.call(this, location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) || this;
        return _this;
    }
    Object.defineProperty(CmcTaggedPlaylistAssetCollection, "tagKeySpecification", {
        get: function () {
            return CmcTaggedPlaylistAssetCollection._tagKeySpecification;
        },
        enumerable: false,
        configurable: true
    });
    CmcTaggedPlaylistAssetCollection.updateTagKeySpecification = function () {
        return bsnOperations_1.cmGetContentTagKeySpecification()
            .then(function (tagKeySpecs) {
            CmcTaggedPlaylistAssetCollection._tagKeySpecification = tagKeySpecs;
            return tagKeySpecs;
        });
    };
    CmcTaggedPlaylistAssetCollection.prototype.createNewTaggedPlaylist = function (name, state) {
        var _this = this;
        name = name.trim();
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            name = name + '.bptpl';
        }
        if (this.hasAssetName(name)) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.assetNameExists, 'TaggedPlaylist asset'));
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var fullPath_1 = this.currentDirectory + name;
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, fullPath_1)
                .then(function () {
                var assetItem = fsconnector_1.fsGetAssetItemFromFile(fullPath_1);
                if (!lodash_1.isNil(assetItem)) {
                    _this.addAssetItem(assetItem);
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                }
            });
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var saveData_1 = taggedPlaylistAsset_1.CmcTaggedPlaylistAsset.getBsnTaggedPlaylistSaveData(state);
            var playlistAssetLocators_1 = taggedPlaylistAsset_1.CmcTaggedPlaylistAsset.getPlaylistStateTaggedPlaylistAssetLocatorList(state);
            return CmcTaggedPlaylistAssetCollection.updateTagKeySpecification()
                .then(function () { return bsnconnector_1.bsnGetSession().createTaggedPlaylist(saveData_1); })
                .then(function (taggedPlaylistEntity) {
                var assetItem = taggedPlaylistAsset_1.CmcTaggedPlaylistAsset.getBsAssetTaggedPlaylistItemFromBsn(taggedPlaylistEntity, CmcTaggedPlaylistAssetCollection.tagKeySpecification);
                _this.addAssetItem(assetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                if (playlistAssetLocators_1.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addAssetUsageComponent, {
                        assetLocators: playlistAssetLocators_1,
                        usageComponentAssetLocator: bscore_1.bscAssetLocatorFromAssetItem(assetItem)
                    });
                }
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcTaggedPlaylistAssetCollection.prototype.deleteTaggedPlaylist = function (name) {
        var _this = this;
        if (!this.hasAssetName(name)) {
            return Promise.resolve();
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var asset_1 = this.getAsset(name);
            return fsconnector_1.fsDeleteFile(asset_1.fullPath)
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [asset_1.assetItem] });
            });
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var assetItem_1 = this.getAssetItem(name);
            return bsnconnector_1.bsnGetSession().deleteTaggedPlaylist(name)
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [assetItem_1] });
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcTaggedPlaylistAssetCollection.prototype.assetHasUsageData = function (containerAssetType) {
        return this.currentAssetLocation === bscore_1.AssetLocation.Bsn && containerAssetType === bscore_1.AssetType.Project;
    };
    Object.defineProperty(CmcTaggedPlaylistAssetCollection.prototype, "bsnSortField", {
        get: function () {
            var sortField = null;
            if (this._enumerationOptions.sortField) {
                sortField = assetCollection_1.DataFeedBsnSortFieldMap[this._enumerationOptions.sortField];
            }
            return sortField ? sortField : null;
        },
        enumerable: false,
        configurable: true
    });
    CmcTaggedPlaylistAssetCollection.prototype.getInitialBsnAssetListSegment = function (enumerationOptions) {
        return CmcTaggedPlaylistAssetCollection.updateTagKeySpecification()
            .then(function () { return bsnconnector_1.bsnGetSession().getTaggedPlaylistListBySegment(enumerationOptions); });
    };
    CmcTaggedPlaylistAssetCollection.prototype.getNextBsnAssetListSegment = function (enumerator) {
        return bsnconnector_1.bsnGetSession().getNextTaggedPlaylistListSegment(enumerator);
    };
    CmcTaggedPlaylistAssetCollection.prototype.processBsnAssetListSegmentItems = function (assetListSegment) {
        var _this = this;
        assetListSegment.listItems.forEach(function (feed) {
            var assetItem = taggedPlaylistAsset_1.CmcTaggedPlaylistAsset.getBsAssetTaggedPlaylistItemFromBsn(feed, CmcTaggedPlaylistAssetCollection.tagKeySpecification);
            if (!_this._assetMap.has(feed.name)) {
                _this._newAssetNames.add(feed.name);
            }
            _this.setPinnedAssetVerification(feed.name);
            _this.addAssetItem(assetItem);
        });
    };
    CmcTaggedPlaylistAssetCollection.prototype.getBsnAssetBackendCount = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getTaggedPlaylistCount(enumerationOptions);
    };
    CmcTaggedPlaylistAssetCollection._tagKeySpecification = [];
    return CmcTaggedPlaylistAssetCollection;
}(assetCollection_1.CmcAssetCollection));
exports.CmcTaggedPlaylistAssetCollection = CmcTaggedPlaylistAssetCollection;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcTextFeedAssetCollection = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var textFeedAsset_1 = __webpack_require__(33);
var assetCollection_1 = __webpack_require__(7);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var CmcTextFeedAssetCollection = (function (_super) {
    __extends(CmcTextFeedAssetCollection, _super);
    function CmcTextFeedAssetCollection(location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) {
        var _this = this;
        if (location === bscore_1.AssetLocation.Local) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation, 'Text feeds cannot currently be stored in the local file system.');
        }
        _this = _super.call(this, location, assetType, directoryPath, pinnedAssetItems, enumerationOptions) || this;
        return _this;
    }
    CmcTextFeedAssetCollection.prototype.createNewTextFeed = function (name, state) {
        var _this = this;
        name = name.trim();
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            name = name + '.bptxfd';
        }
        if (this.hasAssetName(name)) {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.assetNameExists, 'TextFeed asset'));
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var fullPath_1 = this.currentDirectory + name;
            return fsconnector_1.fsSaveObjectAsLocalJsonFile(state, fullPath_1)
                .then(function () {
                var assetItem = fsconnector_1.fsGetAssetItemFromFile(fullPath_1);
                if (!lodash_1.isNil(assetItem)) {
                    _this.addAssetItem(assetItem);
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
                }
            });
        }
        else {
            var saveData = textFeedAsset_1.CmcTextFeedAsset.getBsnTextFeedSaveData(state);
            return bsnconnector_1.bsnGetSession().createTextFeed(saveData)
                .then(function (mediaFeedEntity) {
                var assetItem = textFeedAsset_1.CmcTextFeedAsset.getBsAssetTextFeedItemFromBsn(mediaFeedEntity);
                _this.addAssetItem(assetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [assetItem] });
            });
        }
    };
    CmcTextFeedAssetCollection.prototype.deleteTextFeed = function (name) {
        var _this = this;
        if (!this.hasAssetName(name)) {
            return Promise.resolve();
        }
        if (this.currentAssetLocation === bscore_1.AssetLocation.Local) {
            var asset_1 = this.getAsset(name);
            return fsconnector_1.fsDeleteFile(asset_1.fullPath)
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [asset_1.assetItem] });
            });
        }
        else if (this.currentAssetLocation === bscore_1.AssetLocation.Bsn) {
            var assetItem_1 = this.getAssetItem(name);
            return bsnconnector_1.bsnGetSession().deleteTextFeed(name)
                .then(function () {
                _this.markAssetItemAsDeleted(name);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [assetItem_1] });
            });
        }
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation));
    };
    CmcTextFeedAssetCollection.prototype.assetHasUsageData = function (containerAssetType) {
        return this.currentAssetLocation === bscore_1.AssetLocation.Bsn && containerAssetType === bscore_1.AssetType.Project;
    };
    Object.defineProperty(CmcTextFeedAssetCollection.prototype, "bsnSortField", {
        get: function () {
            var sortField = null;
            if (this._enumerationOptions.sortField) {
                sortField = assetCollection_1.DataFeedBsnSortFieldMap[this._enumerationOptions.sortField];
            }
            return sortField ? sortField : null;
        },
        enumerable: false,
        configurable: true
    });
    CmcTextFeedAssetCollection.prototype.getInitialBsnAssetListSegment = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getTextFeedListBySegment(enumerationOptions);
    };
    CmcTextFeedAssetCollection.prototype.getNextBsnAssetListSegment = function (enumerator) {
        return bsnconnector_1.bsnGetSession().getNextTextFeedListSegment(enumerator);
    };
    CmcTextFeedAssetCollection.prototype.processBsnAssetListSegmentItems = function (assetListSegment) {
        var _this = this;
        assetListSegment.listItems.forEach(function (feed) {
            var assetItem = textFeedAsset_1.CmcTextFeedAsset.getBsAssetTextFeedItemFromBsn(feed);
            if (!_this._assetMap.has(feed.name)) {
                _this._newAssetNames.add(feed.name);
            }
            _this.setPinnedAssetVerification(feed.name);
            _this.addAssetItem(assetItem);
        });
    };
    CmcTextFeedAssetCollection.prototype.getBsnAssetBackendCount = function (enumerationOptions) {
        return bsnconnector_1.bsnGetSession().getTextFeedCount(enumerationOptions);
    };
    return CmcTextFeedAssetCollection;
}(assetCollection_1.CmcAssetCollection));
exports.CmcTextFeedAssetCollection = CmcTextFeedAssetCollection;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsDeviceApplicationObject = exports.cmGetBsDeviceApplication = void 0;
var deviceApplicationCache_1 = __webpack_require__(35);
var lodash_1 = __webpack_require__(0);
function cmGetBsDeviceApplication(url) {
    return new BsDeviceApplicationObject(url);
}
exports.cmGetBsDeviceApplication = cmGetBsDeviceApplication;
var BsDeviceApplicationObject = (function () {
    function BsDeviceApplicationObject(name) {
        this._url = name;
    }
    Object.defineProperty(BsDeviceApplicationObject.prototype, "isDataValid", {
        get: function () { return deviceApplicationCache_1.cmGetBsDeviceApplicationCache().hasDeviceApplication(this._url); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceApplicationObject.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceApplicationObject.prototype, "name", {
        get: function () {
            var data = deviceApplicationCache_1.cmGetBsDeviceApplicationCache().getDeviceApplicationEntity(this._url);
            if (lodash_1.isNull(data)) {
                return '';
            }
            return data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceApplicationObject.prototype, "partnerLogoUrl", {
        get: function () {
            var data = deviceApplicationCache_1.cmGetBsDeviceApplicationCache().getDeviceApplicationEntity(this._url);
            if (lodash_1.isNull(data)) {
                return '';
            }
            return data.partnerLogoUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceApplicationObject.prototype, "sortOrder", {
        get: function () {
            var data = deviceApplicationCache_1.cmGetBsDeviceApplicationCache().getDeviceApplicationEntity(this._url);
            if (lodash_1.isNull(data)) {
                return -1;
            }
            return data.sortOrder;
        },
        enumerable: false,
        configurable: true
    });
    return BsDeviceApplicationObject;
}());
exports.BsDeviceApplicationObject = BsDeviceApplicationObject;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcDeviceLogRecord = void 0;
var CmcDeviceLogRecord = (function () {
    function CmcDeviceLogRecord(recordEntity) {
        this._networkName = recordEntity.networkName;
        this._logType = recordEntity.logType;
        this._serial = recordEntity.serial;
        this._deviceTimeStamp = recordEntity.deviceTimeStamp;
        this._rawMessage = recordEntity.rawMessage;
    }
    Object.defineProperty(CmcDeviceLogRecord.prototype, "networkName", {
        get: function () { return this._networkName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceLogRecord.prototype, "logType", {
        get: function () { return this._logType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceLogRecord.prototype, "serial", {
        get: function () { return this._serial; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceLogRecord.prototype, "deviceTimeStamp", {
        get: function () { return this._deviceTimeStamp; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceLogRecord.prototype, "rawMessage", {
        get: function () { return this._rawMessage; },
        enumerable: false,
        configurable: true
    });
    return CmcDeviceLogRecord;
}());
exports.CmcDeviceLogRecord = CmcDeviceLogRecord;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsDeviceSetupObject = exports.cmGetBsDeviceSetup = void 0;
var deviceSetupCache_1 = __webpack_require__(41);
var lodash_1 = __webpack_require__(0);
var bsnconnector_1 = __webpack_require__(1);
function cmGetBsDeviceSetup(name) {
    return new BsDeviceSetupObject(name);
}
exports.cmGetBsDeviceSetup = cmGetBsDeviceSetup;
var BsDeviceSetupObject = (function () {
    function BsDeviceSetupObject(name) {
        this._deviceSetupName = name;
    }
    Object.defineProperty(BsDeviceSetupObject.prototype, "isDataValid", {
        get: function () { return deviceSetupCache_1.cmGetBsDeviceSetupCache().hasDeviceSetup(this._deviceSetupName); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "lastDeviceSetupDataUpdateTime", {
        get: function () {
            return deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupUpdateTime(this._deviceSetupName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "setupJson", {
        get: function () {
            var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
            if (lodash_1.isNull(data)) {
                return null;
            }
            return data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "username", {
        get: function () {
            var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
            if (lodash_1.isNull(data)) {
                return '';
            }
            return data.bDeploy.username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "packageName", {
        get: function () { return this._deviceSetupName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "deviceDescription", {
        get: function () {
            var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
            if (lodash_1.isNull(data)) {
                return '';
            }
            return data.deviceDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "createdAt", {
        get: function () {
            var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
            if (lodash_1.isNull(data)) {
                return null;
            }
            return new Date();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "updatedAt", {
        get: function () {
            var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
            if (lodash_1.isNull(data)) {
                return null;
            }
            return new Date();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "bsnGroupName", {
        get: function () {
            var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
            if (lodash_1.isNull(data)) {
                return '';
            }
            return data.bsnGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "client", {
        get: function () {
            var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
            if (lodash_1.isNull(data)) {
                return '';
            }
            return data.bDeploy.client;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "networkName", {
        get: function () {
            var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
            if (lodash_1.isNull(data)) {
                return '';
            }
            return data.bDeploy.networkName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "setupType", {
        get: function () {
            var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
            if (lodash_1.isNull(data)) {
                return '';
            }
            return data.setupType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "version", {
        get: function () {
            var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
            if (lodash_1.isNull(data)) {
                return '';
            }
            return data.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupObject.prototype, "deviceName", {
        get: function () {
            var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
            if (lodash_1.isNull(data)) {
                return '';
            }
            return data.deviceName;
        },
        enumerable: false,
        configurable: true
    });
    BsDeviceSetupObject.prototype.getSetupUseCount = function () {
        var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(this._deviceSetupName);
        if (lodash_1.isNull(data)) {
            return Promise.resolve(0);
        }
        return bsnconnector_1.bsnGetSession().getBDeployDeviceSetupUseCount(data._id);
    };
    return BsDeviceSetupObject;
}());
exports.BsDeviceSetupObject = BsDeviceSetupObject;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsPlayerDevice = exports.cmGetBsPlayerDevice = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var bsnOperations_1 = __webpack_require__(8);
var playerDeviceCache_1 = __webpack_require__(72);
var playerDeviceInfoEntityCache_1 = __webpack_require__(94);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
function cmGetBsPlayerDevice(serial) {
    return new BsPlayerDevice(serial);
}
exports.cmGetBsPlayerDevice = cmGetBsPlayerDevice;
var cmBsPlayerDeviceErrorPageSize = 100;
var cmBsPlayerDeviceDownloadPageSize = 100;
var BsPlayerDevice = (function () {
    function BsPlayerDevice(serial) {
        this._id = 0;
        this._serial = serial;
    }
    Object.defineProperty(BsPlayerDevice, "deviceErrorPageSize", {
        get: function () { return cmBsPlayerDeviceErrorPageSize; },
        set: function (value) {
            cmBsPlayerDeviceErrorPageSize = value > 0 && value < 100 ? value : 100;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice, "deviceDownloadPageSize", {
        get: function () { return cmBsPlayerDeviceDownloadPageSize; },
        set: function (value) {
            cmBsPlayerDeviceDownloadPageSize = value > 0 && value < 100 ? value : 100;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "isDeviceDataValid", {
        get: function () { return playerDeviceCache_1.cmGetBsDeviceCache().hasPlayer(this._serial); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "lastDeviceDataUpdateTime", {
        get: function () { return playerDeviceCache_1.cmGetBsDeviceCache().getPlayerUpdateTime(this._serial); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "deviceData", {
        get: function () { return playerDeviceCache_1.cmGetBsDeviceCache().getPlayerDeviceEntity(this._serial); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "serial", {
        get: function () { return this._serial; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "name", {
        get: function () {
            var deviceData = this.deviceData;
            return lodash_1.isNil(deviceData) ? null : deviceData.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "description", {
        get: function () {
            var deviceData = this.deviceData;
            return lodash_1.isNil(deviceData) ? null : deviceData.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "model", {
        get: function () {
            var deviceData = this.deviceData;
            return lodash_1.isNil(deviceData) ? null : deviceData.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "healthStatus", {
        get: function () {
            var deviceData = this.deviceData;
            return lodash_1.isNil(deviceData) ? null : deviceData.healthStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "uptime", {
        get: function () {
            var deviceData = this.deviceData;
            return lodash_1.isNil(deviceData) ? null : deviceData.uptime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "externalIpAddress", {
        get: function () {
            var deviceData = this.deviceData;
            return lodash_1.isNil(deviceData) ? null : deviceData.externalIpAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "snapshotEnabled", {
        get: function () {
            var deviceData = this.deviceData;
            return lodash_1.isNil(deviceData) ? false : deviceData.remoteSnapshotSettings.enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "deviceErrorList", {
        get: function () {
            return playerDeviceInfoEntityCache_1.cmGetBsDeviceErrorCache().getDeviceInfoList(this._serial);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "isDeviceErrorListEnumerationComplete", {
        get: function () {
            return playerDeviceInfoEntityCache_1.cmGetBsDeviceErrorCache().isDeviceInfoListComplete(this._serial);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "doNewDeviceErrorsExist", {
        get: function () {
            var deviceData = this.deviceData;
            var latestErrorTimeInList = playerDeviceInfoEntityCache_1.cmGetBsDeviceErrorCache().getLatestDeviceInfoTime(this._serial);
            if (!lodash_1.isNil(deviceData) && !lodash_1.isNil(deviceData.lastErrorTime)) {
                return lodash_1.isNil(latestErrorTimeInList) || deviceData.lastErrorTime > latestErrorTimeInList;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "deviceDownloadList", {
        get: function () {
            return playerDeviceInfoEntityCache_1.cmGetBsDeviceDownloadCache().getDeviceInfoList(this._serial);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "isDeviceDownloadListEnumerationComplete", {
        get: function () {
            return playerDeviceInfoEntityCache_1.cmGetBsDeviceDownloadCache().isDeviceInfoListComplete(this._serial);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "doNewDeviceDownloadsExist", {
        get: function () {
            var deviceData = this.deviceData;
            var latestDownloadTimeInList = playerDeviceInfoEntityCache_1.cmGetBsDeviceDownloadCache().getLatestDeviceInfoTime(this._serial);
            if (!lodash_1.isNil(deviceData) && !lodash_1.isNil(deviceData.lastContentDownloadEndTime)) {
                return lodash_1.isNil(latestDownloadTimeInList)
                    || deviceData.lastContentDownloadEndTime.getTime() > latestDownloadTimeInList.getTime() + 2000;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "permissions", {
        get: function () {
            var deviceData = this.deviceData;
            return lodash_1.isNil(deviceData) || lodash_1.isNil(deviceData.permissions) ? [] :
                deviceData.permissions.map(bsnOperations_1.cmGetBsnObjectPermissionFromBsnEntity);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "tags", {
        get: function () {
            var deviceData = this.deviceData;
            return !lodash_1.isNil(deviceData === null || deviceData === void 0 ? void 0 : deviceData.tags) ? deviceData.tags : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "deviceUpdateData", {
        get: function () {
            var deviceData = this.deviceData;
            if (!lodash_1.isNil(deviceData)) {
                var id = deviceData.id, serial = deviceData.serial, name_1 = deviceData.name, concatUnitNameAndSerial = deviceData.concatUnitNameAndSerial, description = deviceData.description, targetBrightWallScreenNumber = deviceData.targetBrightWallScreenNumber, targetTimeZone = deviceData.targetTimeZone, contentCheckPeriod = deviceData.contentCheckPeriod, contentDownloadsStartTime = deviceData.contentDownloadsStartTime, contentDownloadsEndTime = deviceData.contentDownloadsEndTime, healthReportingPeriod = deviceData.healthReportingPeriod, healthReportingStartTime = deviceData.healthReportingStartTime, healthReportingEndTime = deviceData.healthReportingEndTime, forceReboot = deviceData.forceReboot, forceRecovery = deviceData.forceRecovery, forceReformat = deviceData.forceReformat, forceLogUpload = deviceData.forceLogUpload;
                return {
                    id: id, serial: serial, name: name_1, concatUnitNameAndSerial: concatUnitNameAndSerial, description: description,
                    targetGroup: lodash_1.cloneDeep(deviceData.targetGroup),
                    targetBrightWall: lodash_1.cloneDeep(deviceData.targetBrightWall),
                    targetBrightWallScreenNumber: targetBrightWallScreenNumber, targetTimeZone: targetTimeZone,
                    contentCheckPeriod: contentCheckPeriod, contentDownloadsStartTime: contentDownloadsStartTime, contentDownloadsEndTime: contentDownloadsEndTime,
                    healthReportingPeriod: healthReportingPeriod, healthReportingStartTime: healthReportingStartTime, healthReportingEndTime: healthReportingEndTime,
                    screenColor: deviceData.screenColor ? bsnconnector_1.bsnColorToBsColor(deviceData.screenColor) : bscore_1.BsBlack,
                    networkSettings: lodash_1.cloneDeep(deviceData.networkSettings),
                    remoteSnapshotSettings: lodash_1.cloneDeep(deviceData.remoteSnapshotSettings),
                    logsSettings: lodash_1.cloneDeep(deviceData.logsSettings),
                    diagnosticWebServerSettings: lodash_1.cloneDeep(deviceData.diagnosticWebServerSettings),
                    localWebServerSettings: lodash_1.cloneDeep(deviceData.localWebServerSettings),
                    deviceLocation: lodash_1.pick(deviceData.deviceLocation, ['gpsLatitude', 'gpsLongitude']),
                    forceReboot: forceReboot, forceRecovery: forceRecovery, forceReformat: forceReformat, forceLogUpload: forceLogUpload,
                };
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDevice.prototype, "bsnId", {
        get: function () {
            if (!this._id) {
                var deviceData = this.deviceData;
                if (!lodash_1.isNil(deviceData)) {
                    this._id = deviceData.id;
                }
            }
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    BsPlayerDevice.prototype.fetchDeviceData = function () {
        var _this = this;
        return bsnconnector_1.bsnGetSession().getDeviceEntity(this.bsnId ? this.bsnId : this._serial)
            .then(function (device) {
            _this._id = device.id;
            playerDeviceCache_1.cmGetBsDeviceCache().setPlayerDevice(device);
            return _this;
        })
            .catch(function (error) {
            if (error instanceof bsnconnector_1.BsnError && !lodash_1.isNil(error.response) && error.response.status === 404) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.deviceNotFound, _this._serial);
            }
            throw error;
        });
    };
    BsPlayerDevice.prototype.startUpdateErrorList = function () {
        var _this = this;
        playerDeviceInfoEntityCache_1.cmGetBsDeviceErrorCache().removePlayerDeviceInfoList(this._serial);
        return bsnconnector_1.bsnGetSession().getDeviceErrorListBySegment(this._serial, { pageSize: cmBsPlayerDeviceErrorPageSize })
            .then(function (errorListSegment) { return _this.processDeviceErrorListSegment(errorListSegment); });
    };
    BsPlayerDevice.prototype.updateNextErrorListSegment = function () {
        var _this = this;
        if (this.isDeviceErrorListEnumerationComplete) {
            return Promise.resolve(this.deviceErrorList);
        }
        var enumerator = playerDeviceInfoEntityCache_1.cmGetBsDeviceErrorCache().getDeviceInfoBsnEnumerator(this._serial);
        if (!lodash_1.isNil(enumerator)) {
            return bsnconnector_1.bsnGetSession().getNextDeviceErrorListSegment(this._serial, enumerator)
                .then(function (errorListSegment) { return _this.processDeviceErrorListSegment(errorListSegment); });
        }
        else {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'BsPlayerDevice.updateNextErrorListSegment: Device error enumeration has not been started'));
        }
    };
    BsPlayerDevice.prototype.startUpdateDownloadList = function () {
        var _this = this;
        playerDeviceInfoEntityCache_1.cmGetBsDeviceDownloadCache().removePlayerDeviceInfoList(this._serial);
        return bsnconnector_1.bsnGetSession().getDeviceDownloadListBySegment(this._serial, { pageSize: cmBsPlayerDeviceDownloadPageSize })
            .then(function (downloadListSegment) { return _this.processDeviceDownloadListSegment(downloadListSegment); });
    };
    BsPlayerDevice.prototype.updateNextDownloadListSegment = function () {
        var _this = this;
        if (this.isDeviceDownloadListEnumerationComplete) {
            return Promise.resolve(this.deviceDownloadList);
        }
        var enumerator = playerDeviceInfoEntityCache_1.cmGetBsDeviceDownloadCache().getDeviceInfoBsnEnumerator(this._serial);
        if (!lodash_1.isNil(enumerator)) {
            return bsnconnector_1.bsnGetSession().getNextDeviceDownloadListSegment(this._serial, enumerator)
                .then(function (downloadListSegment) { return _this.processDeviceDownloadListSegment(downloadListSegment); });
        }
        else {
            return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidOperationRequest, 'BsPlayerDevice.updateNextDownloadListSegment: Device download enumeration has not been started'));
        }
    };
    BsPlayerDevice.prototype.checkDeviceData = function () {
        if (!this.isDeviceDataValid) {
            return this.fetchDeviceData();
        }
        return Promise.resolve(this);
    };
    BsPlayerDevice.prototype.updateDevice = function (updateData) {
        var _this = this;
        return bsnconnector_1.bsnGetSession().updateDevice(updateData)
            .then(function () { return _this.fetchDeviceData(); });
    };
    BsPlayerDevice.prototype.replacePermissions = function (objectPermissions) {
        var _this = this;
        return this.checkDeviceData()
            .then(function () { return bsnOperations_1.cmGetBsnPermissionEntityList(objectPermissions, _this.bsnId); })
            .then(function (permissionEntityList) {
            return bsnconnector_1.bsnGetSession().replaceDevicePermissions(_this.bsnId, permissionEntityList);
        })
            .then(function () { return _this.fetchDeviceData(); });
    };
    BsPlayerDevice.prototype.setTags = function (tags) {
        var _this = this;
        return this.checkDeviceData()
            .then(function () { return bsnconnector_1.bsnGetSession().setDeviceTags(_this.bsnId, tags); })
            .then(function () { return _this.fetchDeviceData(); });
    };
    BsPlayerDevice.prototype.deleteTags = function (tagKeys) {
        var _this = this;
        return this.checkDeviceData()
            .then(function () { return bsnconnector_1.bsnGetSession().deleteDeviceTags(_this.bsnId, tagKeys); })
            .then(function () { return _this.fetchDeviceData(); });
    };
    BsPlayerDevice.prototype.processDeviceErrorListSegment = function (errorListSegment) {
        var cache = playerDeviceInfoEntityCache_1.cmGetBsDeviceErrorCache();
        cache.addDeviceInfo(this._serial, errorListSegment);
        return cache.getDeviceInfoList(this._serial);
    };
    BsPlayerDevice.prototype.processDeviceDownloadListSegment = function (downloadListSegment) {
        var cache = playerDeviceInfoEntityCache_1.cmGetBsDeviceDownloadCache();
        cache.addDeviceInfo(this._serial, downloadListSegment);
        return cache.getDeviceInfoList(this._serial);
    };
    return BsPlayerDevice;
}());
exports.BsPlayerDevice = BsPlayerDevice;


/***/ }),
/* 63 */
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
exports.BsPlayerDeviceCollection = void 0;
var bsnconnector_1 = __webpack_require__(1);
var playerDevice_1 = __webpack_require__(62);
var playerDeviceCache_1 = __webpack_require__(72);
var utils_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(0);
var BsPlayerDeviceCollection = (function () {
    function BsPlayerDeviceCollection(deviceFilter, enumerationOptions) {
        this._isComplete = false;
        this._deviceSerials = [];
        this._newDeviceSerials = [];
        this._deviceFilter = null;
        this._bsnEnumerationOptions = {};
        this._bsnEnumerator = null;
        this._defaultBsnPageSize = 100;
        if (!lodash_1.isNil(deviceFilter)) {
            this._deviceFilter = deviceFilter;
            this._bsnEnumerationOptions.filter = deviceFilter;
        }
        this._enumerationOptions = __assign(__assign({}, BsPlayerDeviceCollection.DefaultEnumerationOptions), enumerationOptions);
        this.setBsnSortExpression();
        if (this._enumerationOptions.pageSize > 100 || this._enumerationOptions.pageSize < 0) {
            this._enumerationOptions.pageSize = this._defaultBsnPageSize;
        }
        this._bsnEnumerationOptions.pageSize = this._enumerationOptions.pageSize;
    }
    Object.defineProperty(BsPlayerDeviceCollection.prototype, "deviceFilter", {
        get: function () { return this._deviceFilter; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDeviceCollection.prototype, "isComplete", {
        get: function () { return this._isComplete; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDeviceCollection.prototype, "sortField", {
        get: function () {
            var sortField = this._enumerationOptions.sortField;
            return sortField ? sortField : bsnconnector_1.BsnDeviceField.serial;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDeviceCollection.prototype, "sortDescending", {
        get: function () {
            return this._enumerationOptions.sortDescending;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDeviceCollection.prototype, "playerSerials", {
        get: function () {
            return this._deviceSerials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDeviceCollection.prototype, "newPlayerSerials", {
        get: function () {
            return this._newDeviceSerials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDeviceCollection.prototype, "playerDevices", {
        get: function () {
            var _this = this;
            return this.playerSerials.map(function (serial) { return _this.getPlayerDevice(serial); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerDeviceCollection.prototype, "functionalLocator", {
        get: function () {
            return !lodash_1.isNil(this._deviceFilter) && this._deviceFilter.filterExpression.length > 0 ?
                this._deviceFilter.filterExpression : '<all>';
        },
        enumerable: false,
        configurable: true
    });
    BsPlayerDeviceCollection.prototype.update = function () {
        var _this = this;
        this._deviceSerials = [];
        this._newDeviceSerials = [];
        return new Promise(function (resolve, reject) {
            var getNext = function () {
                bsnconnector_1.bsnGetSession().getNextDeviceListSegment(_this._bsnEnumerator)
                    .then(function (deviceListSegment) {
                    _this.processDeviceListSegment(deviceListSegment);
                    if (_this.isComplete) {
                        resolve(_this.playerSerials);
                    }
                    else {
                        return getNext();
                    }
                })
                    .catch(function (error) { return reject(error); });
            };
            return bsnconnector_1.bsnGetSession().getDeviceListBySegment(_this._bsnEnumerationOptions)
                .then(function (deviceListSegment) {
                _this.processDeviceListSegment(deviceListSegment);
                if (_this.isComplete) {
                    resolve(_this.playerSerials);
                }
                else {
                    return getNext();
                }
            })
                .catch(function (error) { return reject(error); });
        });
    };
    BsPlayerDeviceCollection.prototype.startUpdate = function () {
        var _this = this;
        this._deviceSerials = [];
        this._newDeviceSerials = [];
        return bsnconnector_1.bsnGetSession().getDeviceListBySegment(this._bsnEnumerationOptions)
            .then(function (deviceListSegment) {
            _this.processDeviceListSegment(deviceListSegment);
            return _this;
        });
    };
    BsPlayerDeviceCollection.prototype.updateNext = function () {
        var _this = this;
        this._newDeviceSerials = [];
        if (this.isComplete) {
            return Promise.resolve(this);
        }
        return bsnconnector_1.bsnGetSession().getNextDeviceListSegment(this._bsnEnumerator)
            .then(function (deviceListSegment) {
            _this.processDeviceListSegment(deviceListSegment);
            return _this;
        });
    };
    BsPlayerDeviceCollection.prototype.getPlayerDevice = function (serial) {
        return playerDevice_1.cmGetBsPlayerDevice(serial);
    };
    BsPlayerDeviceCollection.prototype.getPlayerDeviceCount = function () {
        return bsnconnector_1.bsnGetSession().getDeviceListCount(this._bsnEnumerationOptions);
    };
    BsPlayerDeviceCollection.prototype.setSortOptions = function (sortField, sortDescending) {
        if (sortDescending === void 0) { sortDescending = false; }
        this._enumerationOptions.sortField = lodash_1.isNil(sortField) ? bsnconnector_1.BsnDeviceField.serial : sortField;
        this._enumerationOptions.sortDescending = sortDescending;
        this.setBsnSortExpression();
        var sortFunction = utils_1.objectPropertyComparison(this._enumerationOptions.sortField, this._enumerationOptions.sortDescending, bsnconnector_1.BsnDeviceField.serial);
        this._deviceSerials = this.sortDeviceSerials(this._deviceSerials, sortFunction);
        this._newDeviceSerials = this.sortDeviceSerials(this._newDeviceSerials, sortFunction);
    };
    BsPlayerDeviceCollection.prototype.deletePlayerDevice = function (serial) {
        var _this = this;
        return bsnconnector_1.bsnGetSession().deleteDevice(serial)
            .then(function () {
            playerDeviceCache_1.cmGetBsDeviceCache().removePlayerDevice(serial);
            _this._deviceSerials = lodash_1.without(_this._deviceSerials, serial);
            _this._newDeviceSerials = lodash_1.without(_this._newDeviceSerials, serial);
        });
    };
    BsPlayerDeviceCollection.prototype.processDeviceListSegment = function (deviceListSegment) {
        var _this = this;
        var deviceCache = playerDeviceCache_1.cmGetBsDeviceCache();
        deviceListSegment.listItems.forEach(function (deviceEntity) {
            deviceCache.setPlayerDevice(deviceEntity);
            _this._deviceSerials.push(deviceEntity.serial);
            _this._newDeviceSerials.push(deviceEntity.serial);
        });
        this._isComplete = deviceListSegment.enumerator.isComplete;
        if (this._isComplete) {
            this._bsnEnumerator = null;
        }
        else {
            this._bsnEnumerator = deviceListSegment.enumerator;
        }
    };
    BsPlayerDeviceCollection.prototype.sortDeviceSerials = function (serials, sortFunction) {
        var cache = playerDeviceCache_1.cmGetBsDeviceCache();
        var devices = serials
            .map(function (serial) { return cache.getPlayerDeviceEntity(serial); })
            .filter(function (device) { return !lodash_1.isNil(device); })
            .sort(sortFunction);
        return devices.map(function (device) { return device.serial; });
    };
    BsPlayerDeviceCollection.prototype.setBsnSortExpression = function () {
        this._bsnEnumerationOptions.sortExpression = '[' + this._enumerationOptions.sortField + '] '
            + (this._enumerationOptions.sortDescending ? 'DESC' : 'ASC');
    };
    BsPlayerDeviceCollection.DefaultEnumerationOptions = {
        sortField: bsnconnector_1.BsnDeviceField.serial,
        sortDescending: false,
        pageSize: 100,
    };
    return BsPlayerDeviceCollection;
}());
exports.BsPlayerDeviceCollection = BsPlayerDeviceCollection;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsPlayerGroupObject = exports.getFullDateFromUtcDateAndBsnHmsTime = exports.cmGetBsPlayerGroup = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var bsnOperations_1 = __webpack_require__(8);
var playerGroupCache_1 = __webpack_require__(73);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
function cmGetBsPlayerGroup(name) {
    return new BsPlayerGroupObject(name);
}
exports.cmGetBsPlayerGroup = cmGetBsPlayerGroup;
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var getDurationMinutes = function (dur) {
    var values = dur.split(':');
    return (values[0] === '1.00' ? 1440 : Number(values[0]) * 60) + Number(values[1]);
};
var getBsnUTCHmsTimeFromDate = function (date) {
    return ('00' + date.getUTCHours().toString()).slice(-2) + ':' +
        ('00' + date.getUTCMinutes().toString()).slice(-2) + ':' +
        ('00' + date.getUTCSeconds().toString()).slice(-2);
};
var getUTCDateWithoutTime = function (dateUTC) {
    return new Date(Date.UTC(dateUTC.getUTCFullYear(), dateUTC.getUTCMonth(), dateUTC.getUTCDate()));
};
var getFullDateFromUtcDateAndBsnHmsTime = function (date, hmsTime) {
    var result = new Date(date.getTime());
    if (!lodash_1.isNil(hmsTime)) {
        var matchResult = hmsTime.match(/(\d*):(\d*):(\d*)/);
        if (matchResult != null && matchResult.length === 4) {
            result.setUTCHours(Number(matchResult[1]), Number(matchResult[2]), Number(matchResult[3]));
        }
    }
    return result;
};
exports.getFullDateFromUtcDateAndBsnHmsTime = getFullDateFromUtcDateAndBsnHmsTime;
var getDaysOfWeekFromBitmask = function (daysOfWeekMask) {
    if (daysOfWeekMask === 127) {
        return 'EveryDay';
    }
    else if (daysOfWeekMask === 65) {
        return 'EveryWeekend';
    }
    else if (daysOfWeekMask === 62) {
        return 'EveryWeekday';
    }
    else if (daysOfWeekMask === 0) {
        return 'None';
    }
    else {
        var output_1 = '';
        var more_1 = false;
        [0, 1, 2, 3, 4, 5, 6].forEach(function (value) {
            if ((daysOfWeekMask & (1 << value)) !== 0) {
                output_1 += (more_1 ? ', ' : '') + dayNames[value];
                more_1 = true;
            }
        });
        return output_1;
    }
};
var dateMax = Date.UTC(9999, 11, 31, 0, 0, 0);
var BsPlayerGroupObject = (function () {
    function BsPlayerGroupObject(groupName) {
        this._id = 0;
        this._schedule = null;
        this._groupName = groupName;
    }
    BsPlayerGroupObject.getPresentationScheduleItemFromBsnScheduleItem = function (item) {
        var daysOfWeek = item.daysOfWeek.split(',').map(function (value) { return value.trim(); });
        var bitwiseDaysOfWeek = 0;
        var recurrencePattern = bscore_1.ScheduleRecurrencePattern.Custom;
        if (daysOfWeek.length === 0 || daysOfWeek[0] === 'None') {
            recurrencePattern = bscore_1.ScheduleRecurrencePattern.Custom;
            bitwiseDaysOfWeek = 0;
        }
        else if (daysOfWeek.length === 1 && dayNames.indexOf(daysOfWeek[0]) === -1) {
            if (daysOfWeek.indexOf('EveryDay') !== -1) {
                bitwiseDaysOfWeek = 127;
                recurrencePattern = bscore_1.ScheduleRecurrencePattern.AllDays;
            }
            else if (daysOfWeek.indexOf('EveryWeekday') !== -1) {
                bitwiseDaysOfWeek = 62;
                recurrencePattern = bscore_1.ScheduleRecurrencePattern.Weekdays;
            }
            else if (daysOfWeek.indexOf('EveryWeekend') !== -1) {
                recurrencePattern = bscore_1.ScheduleRecurrencePattern.Weekends;
                bitwiseDaysOfWeek = 65;
            }
        }
        else {
            var daysActive = lodash_1.clone(daysOfWeek);
            if (daysOfWeek.indexOf('EveryWeekend') !== -1) {
                daysActive.push(dayNames[0], dayNames[6]);
            }
            if (daysOfWeek.indexOf('EveryWeekday') !== -1) {
                daysActive.push(dayNames[1], dayNames[2], dayNames[3], dayNames[4], dayNames[5]);
            }
            recurrencePattern = bscore_1.ScheduleRecurrencePattern.Custom;
            bitwiseDaysOfWeek = daysActive.reduce(function (value, dayName) {
                var day = dayNames.indexOf(dayName);
                return day >= 0 ? value + (1 << day) : value;
            }, 0);
        }
        var processedRecurrenceStartDate = item.recurrenceStartDate
            ? getUTCDateWithoutTime(item.recurrenceStartDate) : new Date(0);
        var processedRecurrenceEndDate = item.recurrenceEndDate
            ? getUTCDateWithoutTime(item.recurrenceEndDate) : new Date(dateMax);
        var scheduleItem = {
            presentationLocator: bscore_1.bscAssetLocatorForBsnAsset(bscore_1.AssetType.Project, item.presentationId, bsnconnector_1.bsnGetSession().networkName, item.presentationName),
            dateTime: item.isRecurrent ? processedRecurrenceStartDate
                : getUTCDateWithoutTime(item.eventDate),
            duration: getDurationMinutes(item.duration),
            allDayEveryDay: false,
            recurrence: item.isRecurrent,
            recurrencePattern: recurrencePattern,
            recurrencePatternDaysOfWeek: bitwiseDaysOfWeek,
            recurrenceStartDate: processedRecurrenceStartDate,
            recurrenceGoesForever: item.isRecurrent && item.recurrenceEndDate === null,
            recurrenceEndDate: processedRecurrenceEndDate,
            interruption: item.interruptScheduling,
        };
        scheduleItem.presentationLocator.name = item.presentationName;
        if (!scheduleItem.dateTime) {
            scheduleItem.dateTime = new Date(0);
        }
        scheduleItem.dateTime = exports.getFullDateFromUtcDateAndBsnHmsTime(scheduleItem.dateTime, item.startTime);
        scheduleItem.allDayEveryDay = bitwiseDaysOfWeek === 127 && scheduleItem.duration === 1440;
        return scheduleItem;
    };
    BsPlayerGroupObject.getBsnScheduleItemFromPresentationScheduleItem = function (item) {
        var isRecurrent = item.recurrence || item.allDayEveryDay;
        var eventDate = isRecurrent ? item.recurrenceStartDate : item.dateTime;
        return {
            id: null,
            presentationId: item.presentationLocator.networkId,
            presentationName: item.presentationLocator.name,
            isRecurrent: isRecurrent,
            interruptScheduling: item.interruption,
            eventDate: eventDate,
            startTime: getBsnUTCHmsTimeFromDate(item.dateTime),
            duration: item.duration === 1440 ? '1.00:00:00' : bscore_1.bscTimeSpanStringFromSeconds(item.duration * 60),
            recurrenceStartDate: isRecurrent && item.recurrenceStartDate.getTime() > Date.UTC(2018, 0) ?
                getUTCDateWithoutTime(item.recurrenceStartDate) : null,
            recurrenceEndDate: isRecurrent && !item.recurrenceGoesForever ?
                getUTCDateWithoutTime(item.recurrenceEndDate) : null,
            daysOfWeek: getDaysOfWeekFromBitmask(item.recurrencePatternDaysOfWeek),
            creationDate: null,
            lastModifiedDate: null,
            expirationDate: null,
        };
    };
    Object.defineProperty(BsPlayerGroupObject.prototype, "name", {
        get: function () { return this._groupName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "isGroupDataValid", {
        get: function () { return playerGroupCache_1.cmGetBsPlayerGroupCache().hasGroup(this._groupName); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "lastGroupDataUpdateTime", {
        get: function () { return playerGroupCache_1.cmGetBsPlayerGroupCache().getGroupUpdateTime(this._groupName); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "groupData", {
        get: function () {
            return playerGroupCache_1.cmGetBsPlayerGroupCache().getPlayerGroupEntity(this._groupName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "groupItem", {
        get: function () {
            var groupData = this.groupData;
            return lodash_1.isNil(groupData) ? null : lodash_1.pick(groupData, ['id', 'name']);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "publishData", {
        get: function () {
            var groupData = this.groupData;
            return lodash_1.isNil(groupData) ? null : lodash_1.pick(groupData, bscore_1.PublishDataKeys);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "schedule", {
        get: function () {
            var groupData = this.groupData;
            if (!lodash_1.isNil(groupData)) {
                if (!this._schedule && !lodash_1.isNil(groupData.schedule)) {
                    this._schedule = groupData.schedule.map(BsPlayerGroupObject.getPresentationScheduleItemFromBsnScheduleItem);
                }
                return lodash_1.cloneDeep(this._schedule);
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "playerDeviceCount", {
        get: function () {
            var groupData = this.groupData;
            return lodash_1.isNil(groupData) ? 0 : groupData.devicesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "playerDevices", {
        get: function () {
            var groupData = this.groupData;
            if (!lodash_1.isNil(groupData)) {
                var devices = groupData.devices;
                if (!lodash_1.isNil(devices)) {
                    return (devices).map(function (deviceRef) { return deviceRef.serial; });
                }
                return [];
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "playerDeviceListIsValid", {
        get: function () {
            var groupData = this.groupData;
            return !lodash_1.isNil(groupData) && !lodash_1.isNil(groupData.devices) && groupData.devicesCount === groupData.devices.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "aggregateHealthStatus", {
        get: function () {
            var groupData = this.groupData;
            return lodash_1.isNil(groupData) ? null : groupData.devicesHealthStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "autorunProperties", {
        get: function () {
            var groupData = this.groupData;
            return lodash_1.isNil(groupData) ? null : groupData.autorun;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "permissions", {
        get: function () {
            var groupData = this.groupData;
            return lodash_1.isNil(groupData) || lodash_1.isNil(groupData.permissions) ? [] :
                groupData.permissions.map(bsnOperations_1.cmGetBsnObjectPermissionFromBsnEntity);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupObject.prototype, "bsnId", {
        get: function () {
            if (!this._id) {
                var groupData = this.groupData;
                if (!lodash_1.isNil(groupData)) {
                    this._id = groupData.id;
                }
            }
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    BsPlayerGroupObject.prototype.update = function (scheduleItems, publishData) {
        var _this = this;
        var schedule = null;
        var scheduleChanges;
        if (scheduleItems) {
            schedule = scheduleItems.map(BsPlayerGroupObject.getBsnScheduleItemFromPresentationScheduleItem);
        }
        var groupEntity = Object.assign({}, this.groupData, publishData, !lodash_1.isNil(schedule) ? { schedule: schedule } : null);
        this.clearFwIds(groupEntity);
        return this.getScheduleChanges(scheduleItems)
            .then(function (changes) {
            scheduleChanges = changes;
            return bsnconnector_1.bsnGetSession().updateRegularGroup(groupEntity);
        })
            .then(function () {
            var groupItem = _this.groupItem;
            if (!lodash_1.isNil(scheduleChanges) && !lodash_1.isNil(groupItem)) {
                if (!lodash_1.isNil(scheduleChanges.addedPresentations) && scheduleChanges.addedPresentations.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.scheduledPresentations, { presentationLocators: scheduleChanges.addedPresentations, group: groupItem });
                }
                if (!lodash_1.isNil(scheduleChanges.removedPresentations) && scheduleChanges.removedPresentations.length > 0) {
                    notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.unscheduledPresentations, { presentationLocators: scheduleChanges.removedPresentations, group: groupItem });
                }
            }
            return _this.fetchGroupData();
        });
    };
    BsPlayerGroupObject.prototype.fetchGroupData = function () {
        var _this = this;
        return bsnconnector_1.bsnGetSession().getRegularGroupEntity(this.bsnId ? this.bsnId : this._groupName)
            .then(function (entity) {
            playerGroupCache_1.cmGetBsPlayerGroupCache().setPlayerGroup(entity);
            _this._schedule = null;
            return _this;
        })
            .catch(function (error) {
            if (error instanceof bsnconnector_1.BsnError && !lodash_1.isNil(error.response) && error.response.status === 404) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.groupNotFound, _this._groupName);
            }
            throw error;
        });
    };
    BsPlayerGroupObject.prototype.checkGroupData = function () {
        if (!this.isGroupDataValid) {
            return this.fetchGroupData();
        }
        return Promise.resolve(this);
    };
    BsPlayerGroupObject.prototype.replacePermissions = function (objectPermissions) {
        var _this = this;
        return this.checkGroupData()
            .then(function () { return bsnOperations_1.cmGetBsnPermissionEntityList(objectPermissions, _this.bsnId); })
            .then(function (permissionEntityList) {
            return bsnconnector_1.bsnGetSession().replaceRegularGroupPermissions(_this.bsnId, permissionEntityList);
        })
            .then(function () { return _this.fetchGroupData(); });
    };
    BsPlayerGroupObject.prototype.getScheduleChanges = function (newSchedule) {
        var _this = this;
        if (!lodash_1.isNil(newSchedule)) {
            return this.fetchGroupData()
                .then(function () {
                var locatorMap = new Map();
                locatorMap = _this.schedule.reduce(function (acc, item) {
                    acc.set(item.presentationLocator.networkId, item.presentationLocator);
                    return acc;
                }, locatorMap);
                locatorMap = newSchedule.reduce(function (acc, item) {
                    acc.set(item.presentationLocator.networkId, item.presentationLocator);
                    return acc;
                }, locatorMap);
                var oldSchedulePresentationIdSet = new Set(_this.schedule.map(function (item) { return item.presentationLocator.networkId; }));
                var newSchedulePresentationIdSet = new Set(newSchedule.map(function (item) { return item.presentationLocator.networkId; }));
                var addedPresentationIds = Array.from(newSchedulePresentationIdSet).filter(function (id) { return !oldSchedulePresentationIdSet.has(id); });
                var removedPresentationIds = Array.from(oldSchedulePresentationIdSet).filter(function (id) { return !newSchedulePresentationIdSet.has(id); });
                var addedPresentations = addedPresentationIds.map(function (id) { return locatorMap.get(id); });
                var removedPresentations = removedPresentationIds.map(function (id) { return locatorMap.get(id); });
                return { addedPresentations: addedPresentations, removedPresentations: removedPresentations };
            });
        }
        return Promise.resolve(null);
    };
    BsPlayerGroupObject.prototype.clearFwIds = function (groupEntity) {
        groupEntity.auX5FirmwareId = -1;
        groupEntity.hdX4_HSX4_LSX4FirmwareId = -1;
        groupEntity.hdX23FirmwareId = -1;
        groupEntity.hoX23FirmwareId = -1;
        groupEntity.hsX23FirmwareId = -1;
        groupEntity.lsX23FirmwareId = -1;
        groupEntity.xdX33FirmwareId = -1;
        groupEntity.xdX34_XTX44FirmwareId = -1;
        groupEntity.xtX43FirmwareId = -1;
        groupEntity['4KX42FirmwareId'] = -1;
    };
    return BsPlayerGroupObject;
}());
exports.BsPlayerGroupObject = BsPlayerGroupObject;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsProvisionalDeviceObject = exports.cmGetBsProvisionalDevice = void 0;
var provisionalDeviceCache_1 = __webpack_require__(36);
var bscore_1 = __webpack_require__(2);
var lodash_1 = __webpack_require__(0);
function cmGetBsProvisionalDevice(serial) {
    return new BsProvisionalDeviceObject(serial);
}
exports.cmGetBsProvisionalDevice = cmGetBsProvisionalDevice;
var BsProvisionalDeviceObject = (function () {
    function BsProvisionalDeviceObject(serial) {
        this._serial = serial;
    }
    Object.defineProperty(BsProvisionalDeviceObject.prototype, "isDataValid", {
        get: function () { return provisionalDeviceCache_1.cmGetProvisionalDeviceCache().hasProvisionalDevice(this._serial); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceObject.prototype, "lastProvisionalDeviceDataUpdateTime", {
        get: function () {
            return provisionalDeviceCache_1.cmGetProvisionalDeviceCache().getProvisionalDeviceUpdateTime(this._serial);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceObject.prototype, "serial", {
        get: function () {
            return this._serial;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceObject.prototype, "name", {
        get: function () {
            var data = provisionalDeviceCache_1.cmGetProvisionalDeviceCache().getProvisionalDeviceEntity(this._serial);
            var name = data === null || data === void 0 ? void 0 : data.name;
            return lodash_1.isNil(name) ? '' : name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceObject.prototype, "model", {
        get: function () {
            var data = provisionalDeviceCache_1.cmGetProvisionalDeviceCache().getProvisionalDeviceEntity(this._serial);
            var model = data === null || data === void 0 ? void 0 : data.model;
            return lodash_1.isNil(model) ? bscore_1.PlayerModel.Unknown : model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceObject.prototype, "setupId", {
        get: function () {
            var data = provisionalDeviceCache_1.cmGetProvisionalDeviceCache().getProvisionalDeviceEntity(this._serial);
            var setupId = data === null || data === void 0 ? void 0 : data.setupId;
            return lodash_1.isNil(setupId) ? '' : setupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceObject.prototype, "setupName", {
        get: function () {
            var data = provisionalDeviceCache_1.cmGetProvisionalDeviceCache().getProvisionalDeviceEntity(this._serial);
            var setupName = data === null || data === void 0 ? void 0 : data.setupName;
            return lodash_1.isNil(setupName) ? '' : setupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceObject.prototype, "url", {
        get: function () {
            var data = provisionalDeviceCache_1.cmGetProvisionalDeviceCache().getProvisionalDeviceEntity(this._serial);
            var url = data === null || data === void 0 ? void 0 : data.url;
            return lodash_1.isNil(url) ? '' : url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceObject.prototype, "desc", {
        get: function () {
            var data = provisionalDeviceCache_1.cmGetProvisionalDeviceCache().getProvisionalDeviceEntity(this._serial);
            var desc = data === null || data === void 0 ? void 0 : data.desc;
            return lodash_1.isNil(desc) ? '' : desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceObject.prototype, "createdAt", {
        get: function () {
            var data = provisionalDeviceCache_1.cmGetProvisionalDeviceCache().getProvisionalDeviceEntity(this._serial);
            var createdAt = data === null || data === void 0 ? void 0 : data.createdAt;
            return lodash_1.isNil(createdAt) ? null : createdAt;
        },
        enumerable: false,
        configurable: true
    });
    return BsProvisionalDeviceObject;
}());
exports.BsProvisionalDeviceObject = BsProvisionalDeviceObject;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcPluginUploadJob = exports.cmScheduleBsnPluginUploadJob = exports.cmCreateBsnPluginUploadJob = void 0;
var bscore_1 = __webpack_require__(2);
var bs_task_manager_1 = __webpack_require__(15);
var fsconnector_1 = __webpack_require__(5);
var assetCollectionManager_1 = __webpack_require__(12);
var assetUploadJob_1 = __webpack_require__(21);
var utils_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(0);
var isomorphicPath = __webpack_require__(11);
var uuid_1 = __webpack_require__(16);
var reNameParts = /^(.+?)(?:_(\d+))?$/i;
function cmGetUniquePluginNameForNameMap(nameMap, proposedName, proposedExt) {
    if (proposedExt === void 0) { proposedExt = ''; }
    var uniqueName = proposedName;
    var nameParts = reNameParts.exec(proposedName);
    if (!lodash_1.isNil(nameParts)) {
        var baseName = nameParts[1];
        var num = lodash_1.isNil(nameParts[2]) ? 1 : Number(nameParts[2]);
        while (!lodash_1.isNil(nameMap[uniqueName + proposedExt])) {
            uniqueName = baseName + '_' + num;
            num = num + 1;
        }
    }
    return uniqueName;
}
function getDuplicateNameRecordForPluginSpec(uploadItem, specIndex, newTargetName, existingBsnAsset) {
    var dupData = {
        currentAssetName: utils_1.getFilenameFromFileSpec(uploadItem.file),
        assetType: bscore_1.AssetType.BrightScript,
        assetIndex: specIndex,
        currentPath: utils_1.getDirnameFromFileSpec(uploadItem.file),
        targetName: newTargetName,
    };
    if (!lodash_1.isNil(uploadItem.presentationNames)) {
        dupData.parentAssetType = bscore_1.AssetType.Project;
        dupData.parentAssetNames = uploadItem.presentationNames;
    }
    if (!lodash_1.isNil(existingBsnAsset)) {
        dupData.existingBsnAsset = existingBsnAsset;
    }
    return dupData;
}
function cmCreateBsnPluginUploadJob(pluginUploadFileItemSpecs, onProgress, onSuccess, onError, onCancel) {
    return new CmcPluginUploadJob(pluginUploadFileItemSpecs, onProgress, onSuccess, onError, onCancel);
}
exports.cmCreateBsnPluginUploadJob = cmCreateBsnPluginUploadJob;
function cmScheduleBsnPluginUploadJob(uploadJob, taskManager) {
    return taskManager.addTask(uploadJob);
}
exports.cmScheduleBsnPluginUploadJob = cmScheduleBsnPluginUploadJob;
var CmcPluginUploadJob = (function () {
    function CmcPluginUploadJob(pluginUploadFileItemSpecs, onProgress, onSuccess, onError, onCancel) {
        this._duplicateFileNameRecordMap = new Map();
        this._onProgress = null;
        this._cancellationRequested = false;
        this._id = uuid_1.v4();
        this._startTime = new Date();
        this._uploadPluginSpecs = pluginUploadFileItemSpecs;
        this.checkPluginNames();
        this.mergeDuplicateUploadSpecs();
        this.init();
        this.resolveLocalUploadSpecDuplicates();
        this._onProgress = lodash_1.isNil(onProgress) ? null : onProgress;
        this._onSuccess = lodash_1.isNil(onSuccess) ? null : onSuccess;
        this._onError = lodash_1.isNil(onError) ? null : onError;
        this._onCancel = lodash_1.isNil(onCancel) ? null : onCancel;
    }
    Object.defineProperty(CmcPluginUploadJob.prototype, "id", {
        get: function () { return this._id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "startTime", {
        get: function () { return this._startTime; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "type", {
        get: function () { return bs_task_manager_1.BsTaskType.BsnUploadJob; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "status", {
        get: function () { return this._uploadJobResult.status; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "isDone", {
        get: function () {
            return this.status === bs_task_manager_1.BsTaskStatus.Completed ||
                this.status === bs_task_manager_1.BsTaskStatus.Failed || this.status === bs_task_manager_1.BsTaskStatus.Cancelled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "isCancelled", {
        get: function () { return this.status === bs_task_manager_1.BsTaskStatus.Cancelled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "cancellationRequested", {
        get: function () { return this._cancellationRequested; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "hasItemFailures", {
        get: function () { return this._uploadJobResult.hasItemFailures; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "progress", {
        get: function () { return this._uploadJobProgress; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "result", {
        get: function () { return this._uploadJobResult; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "uploadPluginSpecs", {
        get: function () { return this._uploadPluginSpecs; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "pluginCount", {
        get: function () {
            return lodash_1.isNil(this._uploadPluginSpecs) ? 0 : this._uploadPluginSpecs.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "onSuccess", {
        get: function () { return this._onSuccess; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "onError", {
        get: function () { return this._onError; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcPluginUploadJob.prototype, "onCancel", {
        get: function () { return this._onCancel; },
        enumerable: false,
        configurable: true
    });
    CmcPluginUploadJob.prototype.start = function () {
        var _this = this;
        if (this.pluginCount > 0) {
            var pluginCollection_1 = assetCollectionManager_1.cmGetCmiAssetCollection(bscore_1.AssetLocation.Bsn, bscore_1.AssetType.BrightScript);
            var pluginUploadPromises_1 = [];
            return pluginCollection_1.update()
                .then(function () {
                _this._uploadPluginSpecs.forEach(function (itemSpec, index) {
                    var pluginAsset = pluginCollection_1.getAsset(itemSpec.targetName);
                    if (!lodash_1.isNil(pluginAsset)) {
                        pluginUploadPromises_1.push(pluginAsset.savePlugin(itemSpec.file)
                            .then(function (result) { return _this.processPluginUpload(result, index); }));
                    }
                    else {
                        pluginUploadPromises_1.push(pluginCollection_1.uploadNewPlugin(itemSpec.file, itemSpec.targetName)
                            .then(function (result) { return _this.processPluginUpload(result, index); }));
                    }
                });
                return Promise.all(pluginUploadPromises_1)
                    .then(function (itemResults) {
                    _this._uploadJobResult.pluginUploadResults = itemResults;
                    _this.setTaskStatus(_this._cancellationRequested ? bs_task_manager_1.BsTaskStatus.Cancelled : bs_task_manager_1.BsTaskStatus.Completed);
                    return _this._uploadJobResult;
                });
            });
        }
        return Promise.resolve(this._uploadJobResult);
    };
    CmcPluginUploadJob.prototype.check = function () {
        var _this = this;
        var checkBsnPluginDuplicates = function () {
            if (_this.pluginCount > 0) {
                var pluginMatchList = _this._uploadPluginSpecs
                    .filter(function (uploadSpec) { return lodash_1.isNil(uploadSpec.existingAsset); });
                if (pluginMatchList.length > 0) {
                    return Promise.all(pluginMatchList.map(function (itemSpec) {
                        return fsconnector_1.fsGetFileSha1(itemSpec.file)
                            .then(function (fileHash) { return ({ name: itemSpec.targetName, fileHash: fileHash }); });
                    }))
                        .then(function (matchList) {
                        var pluginCollection = assetCollectionManager_1.cmGetCmiAssetCollection(bscore_1.AssetLocation.Bsn, bscore_1.AssetType.BrightScript);
                        return pluginCollection.getDuplicateNames(matchList);
                    })
                        .then(function (duplicatedPlugins) { return duplicatedPlugins.map(bscore_1.bscAssetLocatorFromAssetItem); });
                }
            }
            return Promise.resolve([]);
        };
        var processBsnPluginDuplicates = function (duplicatedPlugins) {
            var hasNewDuplicates = duplicatedPlugins.length > 0;
            if (hasNewDuplicates) {
                duplicatedPlugins.forEach(function (locator) {
                    _this.setExistingLocatorForUploadPlugin(locator);
                });
                if (hasNewDuplicates) {
                    return checkBsnPluginDuplicates()
                        .then(processBsnPluginDuplicates);
                }
            }
            _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Pending);
            var result = { hasDuplicates: false };
            if (_this._duplicateFileNameRecordMap.size > 0) {
                result = {
                    hasDuplicates: true,
                    duplicatedPluginData: Array.from(_this._duplicateFileNameRecordMap.values()),
                };
            }
            return Promise.resolve(result);
        };
        return checkBsnPluginDuplicates()
            .then(processBsnPluginDuplicates);
    };
    CmcPluginUploadJob.prototype.updateDuplicateResolutionAndCheck = function (modifiedCheckResult) {
        var _this = this;
        if (!lodash_1.isNil(modifiedCheckResult.duplicatedPluginData)) {
            modifiedCheckResult.duplicatedPluginData.forEach(function (pluginData) {
                var dupMapData = _this._duplicateFileNameRecordMap.get(pluginData.assetIndex);
                if (pluginData.currentAssetName === dupMapData.currentAssetName) {
                    var pluginUploadSpec = _this._uploadPluginSpecs[pluginData.assetIndex];
                    if (pluginData.replaceExisting && !lodash_1.isNil(pluginData.existingBsnAsset)) {
                        pluginUploadSpec.existingAsset = pluginData.existingBsnAsset;
                        pluginUploadSpec.targetName = pluginData.existingBsnAsset.name;
                        dupMapData.replaceExisting = true;
                    }
                    else {
                        pluginUploadSpec.existingAsset = null;
                        var targetName = pluginData.targetName.trim();
                        pluginUploadSpec.targetName = targetName;
                        dupMapData.targetName = targetName;
                    }
                    dupMapData.verifiedResolution = true;
                }
            });
            return this.check();
        }
        return Promise.resolve(modifiedCheckResult);
    };
    CmcPluginUploadJob.prototype.cancel = function () {
        this._cancellationRequested = true;
    };
    CmcPluginUploadJob.prototype.init = function () {
        this._uploadJobResult = {
            id: this._id,
            type: bs_task_manager_1.BsTaskType.BsnPluginUploadJob,
            status: bs_task_manager_1.BsTaskStatus.WaitingForCheck,
            startTime: this._startTime,
            hasItemFailures: false,
            pluginUploadResults: [],
        };
        this._uploadJobProgress = {
            id: this._id,
            type: bs_task_manager_1.BsTaskType.BsnPluginUploadJob,
            status: bs_task_manager_1.BsTaskStatus.WaitingForCheck,
            startTime: this._startTime,
            totalItems: this.pluginCount,
            completedItems: 0,
            failedItems: 0,
            totalProgressFraction: 0,
            pluginStatus: [],
        };
    };
    CmcPluginUploadJob.prototype.checkPluginNames = function () {
        if (!lodash_1.isNil(this._uploadPluginSpecs)) {
            this._uploadPluginSpecs.forEach(function (spec) {
                if (spec.targetName.indexOf(' ') >= 0) {
                    spec.targetName = spec.targetName.replace(/ /g, '_');
                }
            });
        }
    };
    CmcPluginUploadJob.prototype.mergeDuplicateUploadSpecs = function () {
        if (!lodash_1.isNil(this._uploadPluginSpecs)) {
            this._uploadPluginSpecs = this._uploadPluginSpecs.reduce(function (specArray, spec) {
                var pluginPath1 = utils_1.getDirnameFromFileSpec(spec.file);
                var dupSpec = lodash_1.find(specArray, function (spec2) {
                    var pluginPath2 = utils_1.getDirnameFromFileSpec(spec2.file);
                    return spec.targetName.toLowerCase() === spec2.targetName.toLowerCase()
                        && (pluginPath2.length === 0 || pluginPath1.toLowerCase() === pluginPath2.toLowerCase());
                });
                if (!lodash_1.isNil(dupSpec)) {
                    if (!lodash_1.isNil(dupSpec.presentationNames) && !lodash_1.isNil(spec.presentationNames)) {
                        dupSpec.presentationNames = lodash_1.uniq(dupSpec.presentationNames.concat(spec.presentationNames));
                    }
                }
                else {
                    specArray.push(spec);
                }
                return specArray;
            }, []);
        }
    };
    CmcPluginUploadJob.prototype.resolveLocalUploadSpecDuplicates = function () {
        var _this = this;
        var pluginNameMap = assetUploadJob_1.cmGetNameMap(this._uploadPluginSpecs);
        var dupPluginNames = Object.keys(pluginNameMap).filter(function (name) { return pluginNameMap[name].length > 1; });
        dupPluginNames.forEach(function (name) { return _this.setUniqueNameForUploadPlugin(pluginNameMap, name); });
    };
    CmcPluginUploadJob.prototype.setUniqueNameForUploadPlugin = function (pluginNameMap, currentTargetName, existingBsnAsset) {
        var _this = this;
        var indexArray = pluginNameMap[currentTargetName];
        var setUniqueName = function (i) {
            var uploadSpec = _this._uploadPluginSpecs[i];
            var fileName = uploadSpec.targetName;
            var ext = isomorphicPath.extname(fileName);
            var baseName = isomorphicPath.basename(fileName, ext);
            var newName = cmGetUniquePluginNameForNameMap(pluginNameMap, baseName, ext) + ext;
            uploadSpec.targetName = newName;
            var dupData = getDuplicateNameRecordForPluginSpec(uploadSpec, i, newName, existingBsnAsset);
            _this._duplicateFileNameRecordMap.set(i, dupData);
            pluginNameMap[newName] = [i];
        };
        for (var i = 1; i < indexArray.length; ++i) {
            setUniqueName(indexArray[i]);
        }
        if (!lodash_1.isNil(existingBsnAsset) && existingBsnAsset.name === currentTargetName) {
            setUniqueName(indexArray[0]);
            delete pluginNameMap[currentTargetName];
        }
        else {
            pluginNameMap[currentTargetName] = [indexArray[0]];
        }
    };
    CmcPluginUploadJob.prototype.setExistingLocatorForUploadPlugin = function (existingPluginLocator) {
        var _this = this;
        this._uploadPluginSpecs.forEach(function (uploadSpec, index) {
            if (existingPluginLocator.name.toLowerCase() === uploadSpec.targetName.toLowerCase()) {
                uploadSpec.existingAsset = existingPluginLocator;
                var dupData = getDuplicateNameRecordForPluginSpec(uploadSpec, index, uploadSpec.targetName, existingPluginLocator);
                dupData.replaceExisting = true;
                dupData.verifiedResolution = false;
                _this._duplicateFileNameRecordMap.set(index, dupData);
            }
        });
    };
    CmcPluginUploadJob.prototype.processPluginUpload = function (result, jobIndex) {
        if (result.status === bscore_1.BsUploadItemStatus.Failed) {
            this._uploadJobProgress.failedItems += 1;
            this._uploadJobResult.hasItemFailures = true;
        }
        this._uploadJobProgress.completedItems += 1;
        this._uploadJobProgress.totalProgressFraction =
            this._uploadJobProgress.completedItems / this._uploadJobProgress.totalItems;
        this._uploadJobProgress.pluginStatus.push({
            jobIndex: jobIndex,
            fileName: result.sourceFileName,
            filePath: result.sourceFilePath,
            targetName: result.assetItem.name,
            status: result.status,
        });
        if (!lodash_1.isNil(this._onProgress)) {
            try {
                this._onProgress(this._uploadJobProgress);
            }
            catch (_) {
                return result;
            }
        }
        return result;
    };
    CmcPluginUploadJob.prototype.setTaskStatus = function (status) {
        this._uploadJobResult.status = status;
        this._uploadJobProgress.status = status;
        if (status === bs_task_manager_1.BsTaskStatus.Failed && lodash_1.isFunction(this.onError)) {
            this.onError(this);
        }
        if (status === bs_task_manager_1.BsTaskStatus.Completed && lodash_1.isFunction(this.onSuccess)) {
            this.onSuccess(this);
        }
        if (status === bs_task_manager_1.BsTaskStatus.Cancelled && lodash_1.isFunction(this.onCancel)) {
            this.onCancel(this);
        }
    };
    return CmcPluginUploadJob;
}());
exports.CmcPluginUploadJob = CmcPluginUploadJob;


/***/ }),
/* 67 */
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BsRoleCollection = exports.cmGetCompletedBsnRoleCollection = exports.cmGetBsnRoleCollection = void 0;
var bsnconnector_1 = __webpack_require__(1);
var role_1 = __webpack_require__(25);
var roleCache_1 = __webpack_require__(38);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var roleCollection;
function cmGetBsnRoleCollection() {
    if (lodash_1.isNil(roleCollection)) {
        roleCollection = new BsRoleCollection();
    }
    return roleCollection;
}
exports.cmGetBsnRoleCollection = cmGetBsnRoleCollection;
function cmGetCompletedBsnRoleCollection() {
    if (lodash_1.isNil(roleCollection)) {
        roleCollection = new BsRoleCollection();
    }
    return roleCollection.isComplete ? Promise.resolve(roleCollection) : roleCollection.update();
}
exports.cmGetCompletedBsnRoleCollection = cmGetCompletedBsnRoleCollection;
var BsRoleCollection = (function () {
    function BsRoleCollection() {
        this._bsnEnumerator = null;
        this._isComplete = false;
        this._roleNames = [];
        this._newRoleNames = [];
    }
    BsRoleCollection.getRoleOperationPermissionEntity = function (rop, principal) {
        return {
            entityId: null,
            operationUID: rop.operationUid,
            principal: principal,
            isFixed: false,
            isInherited: false,
            isAllowed: rop.isAllowed,
            creationDate: null,
        };
    };
    Object.defineProperty(BsRoleCollection.prototype, "isComplete", {
        get: function () { return this._isComplete; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRoleCollection.prototype, "roleNames", {
        get: function () {
            return this._roleNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsRoleCollection.prototype, "newRoleNames", {
        get: function () {
            return this._newRoleNames;
        },
        enumerable: false,
        configurable: true
    });
    BsRoleCollection.prototype.clear = function () {
        this._roleNames = [];
        this._newRoleNames = [];
        this._isComplete = false;
    };
    BsRoleCollection.prototype.update = function () {
        var _this = this;
        this.clear();
        return bsnconnector_1.bsnGetSession().getRoleList()
            .then(function (roleEntityList) {
            roleEntityList.forEach(function (roleEntity) {
                roleCache_1.cmGetBsRoleCache().setRole(roleEntity);
                _this._roleNames.push(roleEntity.name);
                _this._newRoleNames.push(roleEntity.name);
                _this._isComplete = true;
            });
            return _this;
        });
    };
    BsRoleCollection.prototype.startUpdate = function () {
        var _this = this;
        this.clear();
        return bsnconnector_1.bsnGetSession().getRoleListBySegment()
            .then(function (roleSegment) {
            _this.processBsnRoleSegment(roleSegment);
            return _this;
        });
    };
    BsRoleCollection.prototype.updateNext = function () {
        var _this = this;
        if (this._isComplete || lodash_1.isNil(this._bsnEnumerator)) {
            return Promise.resolve(this);
        }
        this._roleNames = [];
        this._newRoleNames = [];
        return bsnconnector_1.bsnGetSession().getNextRoleListSegment(this._bsnEnumerator)
            .then(function (roleSegment) {
            _this.processBsnRoleSegment(roleSegment);
            return _this;
        });
    };
    BsRoleCollection.prototype.hasRole = function (name) {
        return roleCache_1.cmGetBsRoleCache().hasRole(name);
    };
    BsRoleCollection.prototype.getRole = function (name) {
        return roleCache_1.cmGetBsRoleCache().hasRole(name) ? role_1.cmGetBsRole(name) : null;
    };
    BsRoleCollection.prototype.createCustomRole = function (data) {
        var _this = this;
        if (lodash_1.find(this._roleNames, function (name) { return name.toLowerCase() === data.name.toLowerCase(); })) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'CreateCustomRole - a role with the given name already exists');
        }
        var permissions = [];
        if (!lodash_1.isNil(data.permissions)) {
            var rolePrincipal_1 = role_1.cmGetBsRole(data.name).bsnRolePrincipal;
            permissions =
                data.permissions.map(function (rop) { return BsRoleCollection.getRoleOperationPermissionEntity(rop, rolePrincipal_1); });
        }
        var newRoleEntity = {
            id: null,
            isCustom: true,
            name: data.name,
            description: lodash_1.isNil(data.description) ? '' : data.description,
            creationDate: null,
            userCount: lodash_1.isNil(data.users) ? 0 : data.users.length,
            users: lodash_1.isNil(data.users) ? null : data.users.map(function (user) { return user.bsnUserPrincipal; }),
            permissions: permissions,
        };
        return bsnconnector_1.bsnGetSession().createRole(newRoleEntity)
            .then(function (roleEntity) {
            roleCache_1.cmGetBsRoleCache().setRole(roleEntity);
            _this._roleNames.push(roleEntity.name);
            _this._newRoleNames.push(roleEntity.name);
            return role_1.cmGetBsRole(roleEntity.name);
        });
    };
    BsRoleCollection.prototype.updateCustomRole = function (data) {
        var compileNewRoleEntity = function (existing) {
            var roleName = lodash_1.isNil(data.name) || data.name.length === 0 ? existing.name : data.name;
            var roleNameChanged = roleName !== existing.name;
            var users = existing.users;
            if (!lodash_1.isNil(data.usersToDelete)) {
                users = lodash_1.without.apply(void 0, __spreadArrays([existing.users], data.usersToDelete.map(function (user) { return user.bsnUserPrincipal; })));
            }
            if (!lodash_1.isNil(data.usersToAdd)) {
                users.push.apply(users, data.usersToAdd.map(function (user) { return user.bsnUserPrincipal; }));
            }
            var permissions = existing.permissions;
            var rolePrincipal = existing.bsnRolePrincipal;
            if (roleNameChanged) {
                rolePrincipal.name = roleName;
            }
            if (!lodash_1.isNil(data.permissions)) {
                permissions =
                    data.permissions.map(function (rop) { return BsRoleCollection.getRoleOperationPermissionEntity(rop, rolePrincipal); });
            }
            else if (roleNameChanged) {
                permissions = permissions.map(function (permission) { return (__assign(__assign({}, permission), { principal: rolePrincipal })); });
            }
            return {
                id: existing.bsnId,
                isCustom: true,
                name: roleName,
                description: lodash_1.isNil(data.description) ? existing.description : data.description,
                creationDate: null,
                userCount: lodash_1.isNil(users) ? 0 : users.length,
                users: users,
                permissions: permissions,
            };
        };
        if (lodash_1.isNil(data.role)) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'UpdateCustomRole - BsRole object is invalid');
        }
        if (!data.role.bsnId) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'UpdateCustomRole - role ID is invalid');
        }
        var newRoleEntity;
        return data.role.fetchRoleData()
            .then(function (existing) {
            if (!lodash_1.isNil(existing)) {
                newRoleEntity = compileNewRoleEntity(existing);
                return bsnconnector_1.bsnGetSession().updateRole(newRoleEntity);
            }
            else {
                throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'UpdateCustomRole - role not found for given role ID');
            }
        })
            .then(function () {
            var role = role_1.cmGetBsRole(newRoleEntity.name);
            return role.fetchRoleData();
        });
    };
    BsRoleCollection.prototype.deleteCustomRole = function (name) {
        var _this = this;
        return bsnconnector_1.bsnGetSession().deleteRole(name)
            .then(function () {
            roleCache_1.cmGetBsRoleCache().removeRole(name);
            _this._roleNames = lodash_1.without(_this._roleNames, name);
            _this._newRoleNames = lodash_1.without(_this._newRoleNames, name);
        });
    };
    BsRoleCollection.prototype.processBsnRoleSegment = function (roleSegment) {
        var _this = this;
        var cache = roleCache_1.cmGetBsRoleCache();
        roleSegment.listItems.forEach(function (roleEntity) {
            cache.setRole(roleEntity);
            _this._roleNames.push(roleEntity.name);
            _this._newRoleNames.push(roleEntity.name);
        });
        this._isComplete = roleSegment.enumerator.isComplete;
        if (this._isComplete) {
            this._bsnEnumerator = null;
        }
        else {
            this._bsnEnumerator = roleSegment.enumerator;
        }
    };
    return BsRoleCollection;
}());
exports.BsRoleCollection = BsRoleCollection;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsUserCollection = exports.cmGetCompletedBsnUserCollection = exports.cmGetBsnUserCollection = void 0;
var bsnconnector_1 = __webpack_require__(1);
var user_1 = __webpack_require__(26);
var userCache_1 = __webpack_require__(39);
var error_1 = __webpack_require__(3);
var lodash_1 = __webpack_require__(0);
var userCollection;
function cmGetBsnUserCollection() {
    if (!userCollection) {
        userCollection = new BsUserCollection();
    }
    return userCollection;
}
exports.cmGetBsnUserCollection = cmGetBsnUserCollection;
function cmGetCompletedBsnUserCollection() {
    if (!userCollection) {
        userCollection = new BsUserCollection();
    }
    return userCollection.isComplete ? Promise.resolve(userCollection) : userCollection.update();
}
exports.cmGetCompletedBsnUserCollection = cmGetCompletedBsnUserCollection;
var BsUserCollection = (function () {
    function BsUserCollection() {
        this._bsnEnumerator = null;
        this._isComplete = false;
        this._userLogins = [];
        this._newUserLogins = [];
    }
    Object.defineProperty(BsUserCollection.prototype, "isComplete", {
        get: function () { return this._isComplete; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUserCollection.prototype, "userLogins", {
        get: function () {
            return this._userLogins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsUserCollection.prototype, "newUserLogins", {
        get: function () {
            return this._newUserLogins;
        },
        enumerable: false,
        configurable: true
    });
    BsUserCollection.prototype.clear = function () {
        this._userLogins = [];
        this._newUserLogins = [];
        this._isComplete = false;
    };
    BsUserCollection.prototype.update = function () {
        var _this = this;
        this.clear();
        return bsnconnector_1.bsnGetSession().getUserList()
            .then(function (userEntityList) {
            userEntityList.forEach(function (userEntity) {
                userCache_1.cmGetBsUserCache().setUser(userEntity);
                _this._userLogins.push(userEntity.person.login);
                _this._newUserLogins.push(userEntity.person.login);
                _this._isComplete = true;
            });
            return _this;
        });
    };
    BsUserCollection.prototype.startUpdate = function () {
        var _this = this;
        this.clear();
        return bsnconnector_1.bsnGetSession().getUserListBySegment()
            .then(function (userSegment) {
            _this.processBsnUserSegment(userSegment);
            return _this;
        });
    };
    BsUserCollection.prototype.updateNext = function () {
        var _this = this;
        if (this._isComplete || lodash_1.isNil(this._bsnEnumerator)) {
            return Promise.resolve(this);
        }
        this._userLogins = [];
        this._newUserLogins = [];
        return bsnconnector_1.bsnGetSession().getNextUserListSegment(this._bsnEnumerator)
            .then(function (userSegment) {
            _this.processBsnUserSegment(userSegment);
            return _this;
        });
    };
    BsUserCollection.prototype.hasUser = function (login) {
        return userCache_1.cmGetBsUserCache().hasUser(login);
    };
    BsUserCollection.prototype.getUser = function (login) {
        return userCache_1.cmGetBsUserCache().hasUser(login) ? user_1.cmGetBsUser(login) : null;
    };
    BsUserCollection.prototype.createUser = function (data) {
        var _this = this;
        var newUserEntity = {
            id: null,
            person: {
                id: null,
                login: lodash_1.isNil(data.login) ? '' : data.login,
                password: null,
                firstName: lodash_1.isNil(data.firstName) ? '' : data.firstName,
                lastName: lodash_1.isNil(data.lastName) ? '' : data.lastName,
                creationDate: null,
                lastModifiedDate: null,
                activationDate: null,
            },
            description: lodash_1.isNil(data.description) ? '' : data.description,
            creationDate: null,
            lastModifiedDate: null,
            lastLoginDate: null,
            isLockedOut: lodash_1.isNil(data.isLockedOut) ? false : data.isLockedOut,
            lastLockoutDate: null,
            roleName: lodash_1.isNil(data.roleName) ? null : data.roleName,
            permissions: null,
        };
        return bsnconnector_1.bsnGetSession().createUser(newUserEntity)
            .then(function (userEntity) {
            userCache_1.cmGetBsUserCache().setUser(userEntity);
            _this._userLogins.push(userEntity.person.login);
            _this._newUserLogins.push(userEntity.person.login);
            return {
                user: user_1.cmGetBsUser(userEntity.person.login),
                newPassword: userEntity.person.password,
            };
        });
    };
    BsUserCollection.prototype.updateUser = function (data) {
        var compileNewUserEntity = function (existing) {
            return {
                id: existing.id,
                person: existing.person,
                description: lodash_1.isNil(data.description) ? existing.description : data.description,
                creationDate: null,
                lastModifiedDate: null,
                lastLoginDate: null,
                isLockedOut: lodash_1.isNil(data.isLockedOut) ? false : data.isLockedOut,
                lastLockoutDate: null,
                roleName: lodash_1.isNil(data.roleName) ? null : data.roleName,
                permissions: existing.permissions,
            };
        };
        if (!data.id) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'UpdateCustomUser - user ID is invalid');
        }
        var newUserEntity;
        return bsnconnector_1.bsnGetSession().getUserEntity(data.id)
            .then(function (existing) {
            newUserEntity = compileNewUserEntity(existing);
            return bsnconnector_1.bsnGetSession().updateUser(newUserEntity);
        })
            .then(function () {
            var user = user_1.cmGetBsUser(newUserEntity.person.login);
            return user.fetchUserData();
        });
    };
    BsUserCollection.prototype.deleteUser = function (login) {
        var _this = this;
        return bsnconnector_1.bsnGetSession().getUserEntity(login)
            .then(function (userEntity) { return bsnconnector_1.bsnGetSession().deleteUser(userEntity.id); })
            .then(function () {
            userCache_1.cmGetBsUserCache().removeUser(login);
            _this._userLogins = lodash_1.without(_this._userLogins, login);
            _this._newUserLogins = lodash_1.without(_this._newUserLogins, login);
        })
            .then(function () { return; });
    };
    BsUserCollection.prototype.processBsnUserSegment = function (userSegment) {
        var _this = this;
        var cache = userCache_1.cmGetBsUserCache();
        userSegment.listItems.forEach(function (userEntity) {
            cache.setUser(userEntity);
            _this._userLogins.push(userEntity.person.login);
            _this._newUserLogins.push(userEntity.person.login);
        });
        this._isComplete = userSegment.enumerator.isComplete;
        if (this._isComplete) {
            this._bsnEnumerator = null;
        }
        else {
            this._bsnEnumerator = userSegment.enumerator;
        }
    };
    return BsUserCollection;
}());
exports.BsUserCollection = BsUserCollection;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(91);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(90);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(89)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcAssetMetadataCache = exports.cmGetAssetMetadataCache = void 0;
var lodash_1 = __webpack_require__(0);
var assetMetadataCache;
function cmGetAssetMetadataCache() {
    if (!assetMetadataCache) {
        assetMetadataCache = new CmcAssetMetadataCache();
    }
    return assetMetadataCache;
}
exports.cmGetAssetMetadataCache = cmGetAssetMetadataCache;
var CmcAssetMetadataCache = (function () {
    function CmcAssetMetadataCache() {
        this._assetCacheMap = new Map();
    }
    Object.defineProperty(CmcAssetMetadataCache.prototype, "size", {
        get: function () {
            return this._assetCacheMap.size;
        },
        enumerable: false,
        configurable: true
    });
    CmcAssetMetadataCache.prototype.clear = function () {
        this._assetCacheMap.clear();
    };
    CmcAssetMetadataCache.prototype.getAssetThumbnail = function (locatorHash) {
        var cacheItem = this._assetCacheMap.get(locatorHash);
        return lodash_1.isNil(cacheItem) ? null : cacheItem.thumbnail;
    };
    CmcAssetMetadataCache.prototype.updateAssetThumbnail = function (locatorHash, thumbnail, modifiedDate) {
        var cacheItem = this._assetCacheMap.get(locatorHash);
        if (lodash_1.isNil(modifiedDate)) {
            modifiedDate = new Date();
        }
        if (lodash_1.isNil(cacheItem)) {
            this._assetCacheMap.set(locatorHash, { thumbnail: thumbnail, modifiedDate: modifiedDate, lastPut: new Date() });
        }
        else {
            cacheItem.lastPut = new Date();
            cacheItem.thumbnail = thumbnail;
            cacheItem.modifiedDate = modifiedDate;
        }
    };
    return CmcAssetMetadataCache;
}());
exports.CmcAssetMetadataCache = CmcAssetMetadataCache;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.CmcContentAsset = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var fsconnector_1 = __webpack_require__(5);
var asset_1 = __webpack_require__(9);
var bsnOperations_1 = __webpack_require__(8);
var notifyInternal_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(6);
var isomorphic_path_1 = __webpack_require__(11);
var CmcContentAsset = (function (_super) {
    __extends(CmcContentAsset, _super);
    function CmcContentAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CmcContentAsset.prototype, "permissions", {
        get: function () {
            return this.internalAssetItem.permissions;
        },
        enumerable: false,
        configurable: true
    });
    CmcContentAsset.prototype.moveAsset = function (destinationPath) {
        var _this = this;
        var isBsnAsset = this.assetLocation === bscore_1.AssetLocation.Bsn;
        var newPath = isBsnAsset ?
            utils_1.cmNormalizeBsnPathString(destinationPath) : utils_1.cmNormalizeLocalPathString(destinationPath);
        if (this.dirPath !== newPath) {
            var movePromise = isBsnAsset ?
                bsnconnector_1.bsnGetSession().changeContentPath(this.networkId, newPath) :
                fsconnector_1.fsMoveLocalFile(this.fullPath, isomorphic_path_1.default.join(newPath, this._name), false);
            return movePromise
                .then(function () {
                _this.markCachedAssetItemAsDeleted();
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.removedAssets, { assetItems: [_this.internalAssetItem] });
                var updatedAssetItem = __assign(__assign({}, _this.internalAssetItem), { path: newPath });
                updatedAssetItem.locator = bscore_1.bscGenerateAssetLocatorKey(updatedAssetItem);
                _this._locatorHash = utils_1.cmCreateHashFromAssetLocator(updatedAssetItem);
                _this.updateCachedAssetItem(updatedAssetItem);
                notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: [_this.internalAssetItem] });
            });
        }
        return Promise.resolve();
    };
    CmcContentAsset.prototype.replaceBsnContentPermissions = function (objectPermissions) {
        var _this = this;
        return bsnOperations_1.cmGetBsnPermissionEntityList(objectPermissions, this.networkId)
            .then(function (permissionEntityList) {
            return bsnconnector_1.bsnGetSession().replaceContentItemPermissions(_this.networkId, permissionEntityList);
        })
            .then(function () { return _this.fetchAssetItemData(); })
            .then(function () {
            notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.updatedAssetPermissions, { assetItems: [_this.internalAssetItem] });
        });
    };
    return CmcContentAsset;
}(asset_1.CmcAsset));
exports.CmcContentAsset = CmcContentAsset;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsPlayerDeviceCache = exports.cmGetBsDeviceCache = void 0;
var deviceCache;
function cmGetBsDeviceCache() {
    if (!deviceCache) {
        deviceCache = new BsPlayerDeviceCache();
    }
    return deviceCache;
}
exports.cmGetBsDeviceCache = cmGetBsDeviceCache;
var BsPlayerDeviceCache = (function () {
    function BsPlayerDeviceCache() {
        this._deviceCacheMap = new Map();
    }
    Object.defineProperty(BsPlayerDeviceCache.prototype, "size", {
        get: function () {
            return this._deviceCacheMap.size;
        },
        enumerable: false,
        configurable: true
    });
    BsPlayerDeviceCache.prototype.clear = function () {
        this._deviceCacheMap.clear();
    };
    BsPlayerDeviceCache.prototype.hasPlayer = function (serial) {
        return this._deviceCacheMap.has(serial);
    };
    BsPlayerDeviceCache.prototype.getPlayerDeviceEntity = function (serial) {
        var cacheItem = this._deviceCacheMap.get(serial);
        return cacheItem ? cacheItem.deviceEntity : null;
    };
    BsPlayerDeviceCache.prototype.getPlayerUpdateTime = function (serial) {
        var cacheItem = this._deviceCacheMap.get(serial);
        return cacheItem ? cacheItem.updateTime : null;
    };
    BsPlayerDeviceCache.prototype.setPlayerDevice = function (deviceEntity) {
        this._deviceCacheMap.set(deviceEntity.serial, { deviceEntity: deviceEntity, updateTime: new Date() });
    };
    BsPlayerDeviceCache.prototype.removePlayerDevice = function (serial) {
        this._deviceCacheMap.delete(serial);
    };
    return BsPlayerDeviceCache;
}());
exports.BsPlayerDeviceCache = BsPlayerDeviceCache;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsPlayerGroupCache = exports.cmGetBsPlayerGroupCache = void 0;
var playerGroupCache;
function cmGetBsPlayerGroupCache() {
    if (!playerGroupCache) {
        playerGroupCache = new BsPlayerGroupCache();
    }
    return playerGroupCache;
}
exports.cmGetBsPlayerGroupCache = cmGetBsPlayerGroupCache;
var BsPlayerGroupCache = (function () {
    function BsPlayerGroupCache() {
        this._groupCacheMap = new Map();
    }
    Object.defineProperty(BsPlayerGroupCache.prototype, "size", {
        get: function () {
            return this._groupCacheMap.size;
        },
        enumerable: false,
        configurable: true
    });
    BsPlayerGroupCache.prototype.clear = function () {
        this._groupCacheMap.clear();
    };
    BsPlayerGroupCache.prototype.hasGroup = function (name) {
        return this._groupCacheMap.has(name);
    };
    BsPlayerGroupCache.prototype.getPlayerGroupEntity = function (name) {
        var cacheItem = this._groupCacheMap.get(name);
        return cacheItem ? cacheItem.groupEntity : null;
    };
    BsPlayerGroupCache.prototype.getGroupUpdateTime = function (name) {
        var cacheItem = this._groupCacheMap.get(name);
        return cacheItem ? cacheItem.updateTime : null;
    };
    BsPlayerGroupCache.prototype.setPlayerGroup = function (groupEntity) {
        this._groupCacheMap.set(groupEntity.name, { groupEntity: groupEntity, updateTime: new Date() });
    };
    BsPlayerGroupCache.prototype.removePlayerGroup = function (name) {
        this._groupCacheMap.delete(name);
    };
    return BsPlayerGroupCache;
}());
exports.BsPlayerGroupCache = BsPlayerGroupCache;


/***/ }),
/* 74 */
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
exports.cmGetAssetContainerPath = exports.cmRemoveAssetContainersForLocationAndScope = exports.cmSetContainerDefaultLoaderPageSize = exports.cmGetLocatorHashForAssetLocator = exports.cmGetContainerLocatorForChildAsset = exports.cmGetExistingAssetContainerForContainerLocator = exports.cmGetExistingAssetContainerForLocatorHash = exports.cmGetUpdatedAssetContainer = exports.cmGetAssetContainer = exports.cmGetOrCreateCmcAssetContainerForAssetLocator = exports.cmIsBsnSystemParentContainerForChildAsset = exports.cmIsBsnMediaContainerAssetLocator = exports.cmIsSystemContainerAssetLocator = exports.cmIsSystemRootContainerAssetLocator = exports.cmGetContainerAssetLocatorFromCache = exports.cmGetContainerAssetLocator = exports.cmGetBsnSystemContainerLocator = void 0;
var bscore_1 = __webpack_require__(2);
var bsnconnector_1 = __webpack_require__(1);
var isomorphic_path_1 = __webpack_require__(11);
var lodash_1 = __webpack_require__(0);
var assetManager_1 = __webpack_require__(10);
var assetItemCache_1 = __webpack_require__(14);
var utils_1 = __webpack_require__(6);
var assetCollectionManager_1 = __webpack_require__(12);
var assetContainer_1 = __webpack_require__(45);
var assetContainerCache_1 = __webpack_require__(40);
var notifyExternal_1 = __webpack_require__(20);
var error_1 = __webpack_require__(3);
var BsnComponentAssetTypeArray = [
    bscore_1.AssetType.BrightScript,
    bscore_1.AssetType.HtmlSite,
    bscore_1.AssetType.DeviceHtmlSite,
    bscore_1.AssetType.BSNDataFeed,
    bscore_1.AssetType.BSNMediaFeed,
    bscore_1.AssetType.BSNDynamicPlaylist,
    bscore_1.AssetType.BSNTaggedPlaylist,
];
var BsnComponentAssetTypeSet = new Set(BsnComponentAssetTypeArray);
var LocalAssetContainerTypeArray = [
    bscore_1.AssetType.Content,
    bscore_1.AssetType.Project,
    bscore_1.AssetType.ProjectBpf,
    bscore_1.AssetType.ProjectFragment,
    bscore_1.AssetType.Schedule,
    bscore_1.AssetType.BrightScript,
    bscore_1.AssetType.HtmlSite,
    bscore_1.AssetType.DeviceHtmlSite,
    bscore_1.AssetType.Folder,
];
function cmGetBsnSystemContainerLocator(childAssetType, name) {
    var path = '';
    if (childAssetType === bscore_1.BseContainerAssetType.Component) {
        path = isomorphic_path_1.default.posix.sep;
    }
    else if (childAssetType === bscore_1.AssetType.Content) {
        path = isomorphic_path_1.default.posix.join(bscore_1.BseContainerAssetType.Asset, bscore_1.AssetType.Content);
    }
    else if (BsnComponentAssetTypeSet.has(childAssetType)) {
        path = isomorphic_path_1.default.posix.join(bscore_1.BseContainerAssetType.Asset, bscore_1.BseContainerAssetType.Component);
    }
    return {
        name: lodash_1.isNil(name) ? childAssetType : name,
        path: path,
        location: bscore_1.AssetLocation.Bsn,
        assetType: bscore_1.AssetType.Folder,
        childAssetType: childAssetType,
        networkId: 0,
        scope: bsnconnector_1.bsnGetSession().networkName,
    };
}
exports.cmGetBsnSystemContainerLocator = cmGetBsnSystemContainerLocator;
function cmGetContainerAssetLocator(location, childAssetType, path) {
    if (path === void 0) { path = bscore_1.bscGetAssetRootPath(location); }
    if (location === bscore_1.AssetLocation.Bsn) {
        if (lodash_1.isNil(childAssetType)) {
            childAssetType = bscore_1.AssetType.Content;
        }
        if (cmIsBsnSystemParentContainerForChildAsset(childAssetType, path)) {
            return Promise.resolve(cmGetBsnSystemContainerLocator(childAssetType));
        }
    }
    var spec = bscore_1.bscGetAssetSpecification(location, bscore_1.AssetType.Folder, path);
    return assetManager_1.cmGetCmiAssetForAssetSpecification(spec, false)
        .then(function (folderAsset) {
        if (!lodash_1.isNil(folderAsset) && folderAsset.assetType === bscore_1.AssetType.Folder) {
            return __assign(__assign({}, folderAsset.assetLocator), { assetType: bscore_1.AssetType.Folder, childAssetType: childAssetType });
        }
        return null;
    });
}
exports.cmGetContainerAssetLocator = cmGetContainerAssetLocator;
function cmGetContainerAssetLocatorFromCache(location, childAssetType, path) {
    if (path === void 0) { path = bscore_1.bscGetAssetRootPath(location); }
    if (location === bscore_1.AssetLocation.Bsn) {
        if (lodash_1.isNil(childAssetType)) {
            childAssetType = bscore_1.AssetType.Content;
        }
        if (cmIsBsnSystemParentContainerForChildAsset(childAssetType, path)) {
            return cmGetBsnSystemContainerLocator(childAssetType);
        }
    }
    var spec = bscore_1.bscGetAssetSpecification(location, bscore_1.AssetType.Folder, path);
    var assetItemRef = assetItemCache_1.cmGetCachedAssetItemForAssetSpecification(spec);
    return lodash_1.isNil(assetItemRef) ? null : bscore_1.bscAssetLocatorFromAssetItem(assetItemRef.assetItem);
}
exports.cmGetContainerAssetLocatorFromCache = cmGetContainerAssetLocatorFromCache;
function cmIsSystemRootContainerAssetLocator(assetLocator) {
    return !lodash_1.isNil(assetLocator)
        && assetLocator.location === bscore_1.AssetLocation.Bsn
        && assetLocator.networkId === 0
        && !lodash_1.isNil(assetLocator.childAssetType)
        && (assetLocator.childAssetType === bscore_1.BseContainerAssetType.Asset
            || assetLocator.childAssetType === bscore_1.BseContainerAssetType.Component);
}
exports.cmIsSystemRootContainerAssetLocator = cmIsSystemRootContainerAssetLocator;
function cmIsSystemContainerAssetLocator(assetLocator) {
    return !lodash_1.isNil(assetLocator)
        && assetLocator.location === bscore_1.AssetLocation.Bsn
        && !lodash_1.isNil(assetLocator.childAssetType)
        && assetLocator.networkId === 0;
}
exports.cmIsSystemContainerAssetLocator = cmIsSystemContainerAssetLocator;
function cmIsBsnMediaContainerAssetLocator(locator) {
    return bscore_1.bscIsAssetContainerLocator(locator)
        && locator.location === bscore_1.AssetLocation.Bsn
        && locator.childAssetType === bscore_1.AssetType.Content;
}
exports.cmIsBsnMediaContainerAssetLocator = cmIsBsnMediaContainerAssetLocator;
function cmIsBsnSystemParentContainerForChildAsset(childAssetType, path) {
    if (path === void 0) { path = ''; }
    return BsnComponentAssetTypeSet.has(childAssetType)
        || childAssetType === bscore_1.AssetType.Project
        || childAssetType === bscore_1.BseContainerAssetType.Component
        || childAssetType === bscore_1.BseContainerAssetType.Asset
        || (childAssetType === bscore_1.AssetType.Content && !path);
}
exports.cmIsBsnSystemParentContainerForChildAsset = cmIsBsnSystemParentContainerForChildAsset;
function cmGetOrCreateCmcAssetContainerForAssetLocator(assetLocator, loaderOptions) {
    if (bscore_1.bscIsAssetContainerLocator(assetLocator)) {
        var locatorHash = utils_1.cmCreateHashFromAssetLocator(assetLocator);
        var container = cmGetExistingAssetContainerForLocatorHash(locatorHash);
        var pinnedAssetItems = null;
        if (!lodash_1.isNil(loaderOptions)
            && lodash_1.isArray(loaderOptions.preloadedAssetLocators)
            && loaderOptions.preloadedAssetLocators.length > 0) {
            pinnedAssetItems = loaderOptions.preloadedAssetLocators;
        }
        if (lodash_1.isNil(container)) {
            var collection = null;
            var folderCollection = null;
            if (!cmIsSystemRootContainerAssetLocator(assetLocator)) {
                var enumOptions = lodash_1.isNil(loaderOptions) ? {} :
                    lodash_1.pick(loaderOptions, ['sortField', 'sortDescending', 'pageSize']);
                if (lodash_1.isNil(enumOptions.pageSize)) {
                    enumOptions.pageSize = assetContainer_1.CmcAssetContainer.DefaultLoaderPageSize;
                }
                var childAssetTypes = void 0;
                if (assetLocator.location === bscore_1.AssetLocation.Local && lodash_1.isNil(assetLocator.childAssetType)) {
                    childAssetTypes = LocalAssetContainerTypeArray.slice();
                }
                else {
                    childAssetTypes = [assetLocator.childAssetType];
                }
                var assetPath = cmGetAssetContainerPath(assetLocator);
                collection = assetCollectionManager_1.cmGetCmiAssetCollection(assetLocator.location, childAssetTypes, assetPath, enumOptions, pinnedAssetItems);
                if (assetLocator.location === bscore_1.AssetLocation.Bsn && assetLocator.childAssetType === bscore_1.AssetType.Content) {
                    folderCollection = assetCollectionManager_1.cmGetCmiAssetCollection(assetLocator.location, bscore_1.AssetType.Folder, assetPath);
                }
            }
            var newContainer = new assetContainer_1.CmcAssetContainer(assetLocator, collection, folderCollection);
            assetContainerCache_1.cmGetCmcAssetContainerCache().putContainer(newContainer);
            var containerRef = assetContainerCache_1.cmGetCmcAssetContainerCache().getContainerCacheReference(newContainer.locatorHash);
            if (!lodash_1.isNil(containerRef)) {
                notifyExternal_1.cmGetAssetNotifier().notify(notifyExternal_1.CmeAssetNotificationType.addAssetContainer, [containerRef]);
            }
            container = newContainer;
        }
        else if (!lodash_1.isNil(loaderOptions) && container.hasCollection) {
            var sortOptions = __assign(__assign({}, container.collection.sortOptions), lodash_1.pick(loaderOptions, ['sortField', 'sortDescending']));
            if (!lodash_1.isEqual(sortOptions, container.collection.sortOptions)) {
                container.collection.sortOptions = sortOptions;
            }
            if (!lodash_1.isNil(pinnedAssetItems)) {
                assetCollectionManager_1.cmPinAssets(pinnedAssetItems);
            }
        }
        return container;
    }
    else {
        throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'cmGetOrCreateCmcAssetContainerForLocator: assetLocator must represent a Folder asset');
    }
}
exports.cmGetOrCreateCmcAssetContainerForAssetLocator = cmGetOrCreateCmcAssetContainerForAssetLocator;
function cmGetAssetContainer(location, childAssetType, path, loaderOptions) {
    if (path === void 0) { path = ''; }
    return cmGetContainerAssetLocator(location, childAssetType, path)
        .then(function (locator) {
        return lodash_1.isNil(locator) ? null : cmGetOrCreateCmcAssetContainerForAssetLocator(locator, loaderOptions);
    });
}
exports.cmGetAssetContainer = cmGetAssetContainer;
function cmGetUpdatedAssetContainer(location, childAssetType, path, loaderOptions) {
    if (path === void 0) { path = ''; }
    return cmGetAssetContainer(location, childAssetType, path, loaderOptions)
        .then(function (container) {
        return lodash_1.isNil(container) ? null : container.update().then(function () { return container; });
    });
}
exports.cmGetUpdatedAssetContainer = cmGetUpdatedAssetContainer;
function cmGetExistingAssetContainerForLocatorHash(locatorHash) {
    var cache = assetContainerCache_1.cmGetCmcAssetContainerCache();
    var cachedContainerItem = cache.getContainerCacheItem(locatorHash);
    return lodash_1.isNil(cachedContainerItem) ? null : cachedContainerItem.assetContainer;
}
exports.cmGetExistingAssetContainerForLocatorHash = cmGetExistingAssetContainerForLocatorHash;
function cmGetExistingAssetContainerForContainerLocator(assetLocator) {
    if (bscore_1.bscIsAssetContainerLocator(assetLocator)) {
        var locatorHash = utils_1.cmCreateHashFromAssetLocator(assetLocator);
        return cmGetExistingAssetContainerForLocatorHash(locatorHash);
    }
    throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'cmGetExistingAssetContainerForContainerLocator: assetLocator must represent an AssetContainer');
}
exports.cmGetExistingAssetContainerForContainerLocator = cmGetExistingAssetContainerForContainerLocator;
function cmGetContainerLocatorForChildAsset(childAssetLocator) {
    if (!cmIsSystemContainerAssetLocator(childAssetLocator)) {
        var dirPath = '';
        if (childAssetLocator.path) {
            var isBsn = childAssetLocator.location === bscore_1.AssetLocation.Bsn;
            dirPath = isBsn ? isomorphic_path_1.default.posix.dirname(childAssetLocator.path) :
                isomorphic_path_1.default.dirname(childAssetLocator.path);
        }
        var assetType = bscore_1.bscIsAssetContainerLocator(childAssetLocator) ?
            childAssetLocator.childAssetType : childAssetLocator.assetType;
        return cmGetContainerAssetLocator(childAssetLocator.location, assetType, dirPath);
    }
    return Promise.resolve(null);
}
exports.cmGetContainerLocatorForChildAsset = cmGetContainerLocatorForChildAsset;
function cmGetLocatorHashForAssetLocator(assetLocator) {
    return utils_1.cmCreateHashFromAssetLocator(assetLocator);
}
exports.cmGetLocatorHashForAssetLocator = cmGetLocatorHashForAssetLocator;
function cmSetContainerDefaultLoaderPageSize(size) {
    assetContainer_1.CmcAssetContainer.DefaultLoaderPageSize = (size < 1 || size > 100) ? 100 : size;
}
exports.cmSetContainerDefaultLoaderPageSize = cmSetContainerDefaultLoaderPageSize;
function cmRemoveAssetContainersForLocationAndScope(location, scope) {
    var isContainerInScope = function (container) {
        return container.assetLocation === location && container.assetScope === scope;
    };
    var containerCache = assetContainerCache_1.cmGetCmcAssetContainerCache();
    var containerHashesToRemove = containerCache.getLocatorHashListForMatchingAssetContainers(isContainerInScope);
    if (containerHashesToRemove.length > 0) {
        containerHashesToRemove.forEach(function (locatorHash) {
            containerCache.removeContainer(locatorHash);
        });
        notifyExternal_1.cmGetAssetNotifier().notify(notifyExternal_1.CmeAssetNotificationType.removeAssetContainer, containerHashesToRemove);
    }
    assetCollectionManager_1.cmRemoveAssetCollectionsForLocationAndScope(location, scope);
}
exports.cmRemoveAssetContainersForLocationAndScope = cmRemoveAssetContainersForLocationAndScope;
function cmGetAssetContainerPath(locator) {
    return cmIsSystemContainerAssetLocator(locator) ? '' : bscore_1.bscGetAssetFullPath(locator);
}
exports.cmGetAssetContainerPath = cmGetAssetContainerPath;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cmGetResizedImageName = exports.cmGetBsnDownsampleResult = exports.cmConstructRemoteDownsampleRequestEntity = exports.cmNotifyAssetCollectionsOfDownsampledAssets = exports.cmDownsampleBsnImages = exports.cmDownsampleLocalImages = exports.cmCreateDownsampleCopy = exports.BsCmMediaProcessFailureType = void 0;
var bscore_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(5);
var bsnconnector_1 = __webpack_require__(1);
var isomorphic_path_1 = __webpack_require__(11);
var notifyInternal_1 = __webpack_require__(4);
var error_1 = __webpack_require__(3);
var assetManager_1 = __webpack_require__(10);
var lodash_1 = __webpack_require__(0);
var BsCmMediaProcessFailureType;
(function (BsCmMediaProcessFailureType) {
    BsCmMediaProcessFailureType["NotSupport"] = "NotSupport";
    BsCmMediaProcessFailureType["UserCancel"] = "UserCancel";
    BsCmMediaProcessFailureType["FailProcess"] = "FailProcess";
})(BsCmMediaProcessFailureType = exports.BsCmMediaProcessFailureType || (exports.BsCmMediaProcessFailureType = {}));
function cmCreateDownsampleCopy(prepareEntities) {
    var downsamplePrepareEntities = lodash_1.isArray(prepareEntities)
        ? prepareEntities : [prepareEntities];
    if (downsamplePrepareEntities.length < 1) {
        var downsampleProcessQ = [];
        return Promise.all(downsampleProcessQ);
    }
    if (downsamplePrepareEntities[0].mediaAsset.assetItem.location === bscore_1.AssetLocation.Local) {
        return cmDownsampleLocalImages(downsamplePrepareEntities);
    }
    else if (downsamplePrepareEntities[0].mediaAsset.assetItem.location === bscore_1.AssetLocation.Bsn) {
        return cmDownsampleBsnImages(downsamplePrepareEntities);
    }
    else {
        return Promise.reject(new error_1.BsCmError(error_1.BsCmErrorType.unsupportedAssetLocation, 'CreateDownsampleCopy: Invalid asset location'));
    }
}
exports.cmCreateDownsampleCopy = cmCreateDownsampleCopy;
function cmDownsampleLocalImages(downsamplePrepareEntities) {
    var downsampleProcessQ = downsamplePrepareEntities.map(function (prepareEntity) {
        var assetItem = prepareEntity.mediaAsset.assetItem;
        return cmGetResizedImageName(assetItem, 0)
            .then(function (destinationPath) {
            return fsconnector_1.fsDownsampleImage(assetItem, prepareEntity.targetSize.width, prepareEntity.targetSize.height, destinationPath);
        })
            .then(function (assetLocator) {
            return {
                ok: true,
                assetItem: assetItem,
                processedAssetLocator: assetLocator,
                failureType: null,
            };
        })
            .catch(function (_) {
            return {
                ok: false,
                assetItem: assetItem,
                processedAssetLocator: null,
                failureType: BsCmMediaProcessFailureType.FailProcess,
            };
        });
    });
    return Promise.all(downsampleProcessQ)
        .then(function (results) { return cmNotifyAssetCollectionsOfDownsampledAssets(results); });
}
exports.cmDownsampleLocalImages = cmDownsampleLocalImages;
function cmDownsampleBsnImages(downsamplePrepareEntities) {
    var bsnSession = bsnconnector_1.bsnGetSession();
    var username = bsnSession.userName;
    var networkName = bsnSession.networkName;
    if (downsamplePrepareEntities.length > 0) {
        return cmConstructRemoteDownsampleRequestEntity(downsamplePrepareEntities, username, networkName)
            .then(function (requestEntity) { return bsnSession.assignDownsampleImageJob(requestEntity); })
            .then(function (jobEntity) { return exports.cmGetBsnDownsampleResult(jobEntity.jobId); })
            .then(function (results) {
            var downsampledAssets = results.reduce(function (resultArray, result) {
                try {
                    var jobData = JSON.parse(result.jobData);
                    if (result.status === 'Done') {
                        var createdAssetItem = JSON.parse(result.result);
                        resultArray.push({
                            ok: true,
                            assetItem: jobData.sourceAssetItem,
                            processedAssetLocator: bscore_1.bscAssetLocatorFromAssetItem(createdAssetItem),
                            failureType: null,
                        });
                    }
                    else {
                        resultArray.push({
                            ok: false,
                            assetItem: jobData.sourceAssetItem,
                            processedAssetLocator: null,
                            failureType: BsCmMediaProcessFailureType.FailProcess,
                        });
                    }
                }
                catch (_) {
                }
                return resultArray;
            }, []);
            return cmNotifyAssetCollectionsOfDownsampledAssets(downsampledAssets);
        });
    }
    return Promise.resolve([]);
}
exports.cmDownsampleBsnImages = cmDownsampleBsnImages;
function cmNotifyAssetCollectionsOfDownsampledAssets(downsampledAssets) {
    var getNewBsAssets = [];
    downsampledAssets.forEach(function (result) {
        if (lodash_1.isNil(result.failureType) && !lodash_1.isNil(result.processedAssetLocator)) {
            getNewBsAssets.push(assetManager_1.cmGetCmiAssetForAssetLocator(result.processedAssetLocator));
        }
    });
    return Promise.all(getNewBsAssets)
        .then(function (newBsAssets) {
        var bsAssetItems = [];
        newBsAssets.forEach(function (bsAsset) {
            if (!lodash_1.isNil(bsAsset)) {
                bsAssetItems.push(bsAsset.assetItem);
            }
        });
        notifyInternal_1.cmGetAssetCollectionNotifier().notify(notifyInternal_1.AssetCollectionNotificationType.addedAssets, { assetItems: bsAssetItems });
        return downsampledAssets;
    });
}
exports.cmNotifyAssetCollectionsOfDownsampledAssets = cmNotifyAssetCollectionsOfDownsampledAssets;
function cmConstructRemoteDownsampleRequestEntity(downsamplePrepareEntities, username, network) {
    var requestEntity = {
        jobType: 'ImageDownsample',
        items: [],
        authenticationToken: '',
        username: username,
        network: network,
    };
    var getImageNamePromiseQ = downsamplePrepareEntities.map(function (prepareEntity) { return cmGetResizedImageName(prepareEntity.mediaAsset.assetItem, 0); });
    return Promise.all(getImageNamePromiseQ)
        .then(function (destinationPaths) {
        requestEntity.items = destinationPaths.map(function (destinationPath, index) {
            var destPath = isomorphic_path_1.default.dirname(destinationPath);
            var targetName = isomorphic_path_1.default.basename(destinationPath);
            var width = downsamplePrepareEntities[index].targetSize.width;
            var height = downsamplePrepareEntities[index].targetSize.height;
            return {
                assetItem: downsamplePrepareEntities[index].mediaAsset.assetItem,
                destinationPath: destPath,
                targetName: targetName,
                width: width,
                height: height,
            };
        });
        return requestEntity;
    });
}
exports.cmConstructRemoteDownsampleRequestEntity = cmConstructRemoteDownsampleRequestEntity;
var cmGetBsnDownsampleResult = function (jobId) {
    var bsnSession = bsnconnector_1.bsnGetSession();
    return new Promise(function (resolve, reject) {
        var interval = setInterval(function () {
            bsnSession.queryRemoteProcedureJobStatus(jobId)
                .then(function (results) {
                var anyPending = results.some(function (result) { return result.status !== 'Failed' && result.status !== 'Done'; });
                if (anyPending === false) {
                    clearInterval(interval);
                    clearTimeout(timeout);
                    resolve(results);
                }
            })
                .catch(function (error) {
                clearInterval(interval);
                clearTimeout(timeout);
                reject(new error_1.BsCmError(error_1.BsCmErrorType.remoteProcedureError, error.message));
            });
        }, 7000);
        var timeout = setTimeout(function () {
            clearInterval(interval);
            reject(new error_1.BsCmError(error_1.BsCmErrorType.remoteProcedureError, 'Remote procedure time out'));
        }, 180000);
    });
};
exports.cmGetBsnDownsampleResult = cmGetBsnDownsampleResult;
function cmGetResizedImageName(assetItem, index) {
    var newFileName = index === 0
        ? isomorphic_path_1.default.parse(assetItem.name).name + "_resized" : isomorphic_path_1.default.parse(assetItem.name).name + "_resized (" + index + ")";
    if (isomorphic_path_1.default.extname(assetItem.name) !== '') {
        newFileName = "" + newFileName + isomorphic_path_1.default.extname(assetItem.name);
    }
    var destinationPath;
    if (assetItem.location === bscore_1.AssetLocation.Bsn) {
        destinationPath = isomorphic_path_1.default.posix.join(assetItem.path, newFileName);
    }
    else {
        destinationPath = isomorphic_path_1.default.join(assetItem.path, newFileName);
    }
    var spec = bscore_1.bscGetAssetSpecification(assetItem.location, assetItem.assetType, destinationPath);
    return assetManager_1.cmBsAssetExists(spec)
        .then(function (result) {
        if (result === true) {
            return cmGetResizedImageName(assetItem, index + 1);
        }
        else {
            return destinationPath;
        }
    });
}
exports.cmGetResizedImageName = cmGetResizedImageName;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cmTestUrl = exports.cmGetSimpleRssItemArray = void 0;
var bsnconnector_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(0);
function cmGetSimpleRssItemArray(feedUrl) {
    return bsnconnector_1.bsnGetSession().getStoredXmlFile(feedUrl, { explicitArray: false, ignoreAttrs: true })
        .then(function (feedObject) {
        var obj = feedObject;
        if (!lodash_1.isNil(obj) && !lodash_1.isNil(obj.rss) && !lodash_1.isNil(obj.rss.channel) && !lodash_1.isNil(obj.rss.channel.item)) {
            var items = Array.isArray(obj.rss.channel.item) ? obj.rss.channel.item :
                [obj.rss.channel.item];
            return items.map(function (item) { return ({ title: item.title, description: item.description }); });
        }
        return null;
    })
        .catch(function () { return null; });
}
exports.cmGetSimpleRssItemArray = cmGetSimpleRssItemArray;
function cmTestUrl(url) {
    return bsnconnector_1.bsnGetSession().testUrl(url);
}
exports.cmTestUrl = cmTestUrl;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsDeviceApplicationCollection = exports.cmGetDeviceApplicationCollection = void 0;
var bsnconnector_1 = __webpack_require__(1);
var deviceApplicationCache_1 = __webpack_require__(35);
var deviceApplication_1 = __webpack_require__(59);
var deviceApplicationCollection;
function cmGetDeviceApplicationCollection() {
    if (!deviceApplicationCollection) {
        deviceApplicationCollection = new BsDeviceApplicationCollection();
    }
    return deviceApplicationCollection;
}
exports.cmGetDeviceApplicationCollection = cmGetDeviceApplicationCollection;
var BsDeviceApplicationCollection = (function () {
    function BsDeviceApplicationCollection() {
        this._allNames = [];
    }
    Object.defineProperty(BsDeviceApplicationCollection.prototype, "deviceApplicationUrls", {
        get: function () {
            return this._allNames;
        },
        enumerable: false,
        configurable: true
    });
    BsDeviceApplicationCollection.prototype.clear = function () {
        this._allNames = [];
        deviceApplicationCache_1.cmGetBsDeviceApplicationCache().clear();
    };
    BsDeviceApplicationCollection.prototype.getDeviceApplication = function (url) {
        return deviceApplication_1.cmGetBsDeviceApplication(url);
    };
    BsDeviceApplicationCollection.prototype.update = function () {
        var _this = this;
        this.clear();
        return bsnconnector_1.bsnGetSession().getBDeployApplicationList()
            .then(function (dataEntityList) {
            _this.processDataEntityList(dataEntityList);
            return _this.deviceApplicationUrls;
        });
    };
    BsDeviceApplicationCollection.prototype.processDataEntityList = function (dataEntityList) {
        var _this = this;
        dataEntityList.forEach(function (dataEntity) {
            deviceApplicationCache_1.cmGetBsDeviceApplicationCache().setDeviceApplication(dataEntity);
            _this._allNames.push(dataEntity.url);
        });
    };
    return BsDeviceApplicationCollection;
}());
exports.BsDeviceApplicationCollection = BsDeviceApplicationCollection;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcDeviceLogCollection = exports.cmGetDeviceLogCollection = void 0;
var bsnconnector_1 = __webpack_require__(1);
var deviceLog_1 = __webpack_require__(60);
var utils_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(0);
function cmGetDeviceLogCollection(filter, sortOrder, pageSize) {
    return new CmcDeviceLogCollection(filter, sortOrder, pageSize);
}
exports.cmGetDeviceLogCollection = cmGetDeviceLogCollection;
var CmcDeviceLogCollection = (function () {
    function CmcDeviceLogCollection(filter, sortOrder, pageSize) {
        this._isComplete = false;
        this._logFilter = null;
        this._sortOrder = null;
        this._pageSize = null;
        this._logEnumerator = null;
        if (!lodash_1.isNil(filter)) {
            this._logFilter = filter;
        }
        if (!lodash_1.isNil(sortOrder)) {
            this._sortOrder = sortOrder;
        }
        if (!lodash_1.isNil(pageSize)) {
            this._pageSize = pageSize;
        }
    }
    Object.defineProperty(CmcDeviceLogCollection.prototype, "isComplete", {
        get: function () {
            return this._isComplete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceLogCollection.prototype, "logRecords", {
        get: function () {
            return this._logRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceLogCollection.prototype, "newLogRecords", {
        get: function () {
            return this._newLogRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceLogCollection.prototype, "logFilter", {
        get: function () {
            return this._logFilter;
        },
        set: function (val) {
            this._logFilter = val;
            this.initEnumeration();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceLogCollection.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (val) {
            this._sortOrder = val;
            this._logEnumerator = null;
            this.sortLogRecords();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceLogCollection.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (val) {
            this._pageSize = val;
        },
        enumerable: false,
        configurable: true
    });
    CmcDeviceLogCollection.prototype.update = function () {
        var _this = this;
        this.initEnumeration();
        return bsnconnector_1.bsnGetSession().getDeviceLogList(this.enumOptions)
            .then(function (logRecords) {
            _this._logRecords = logRecords.map(function (record) { return new deviceLog_1.CmcDeviceLogRecord(record); });
            _this._newLogRecords = _this._logRecords;
            _this._isComplete = true;
            return _this;
        });
    };
    CmcDeviceLogCollection.prototype.startUpdate = function () {
        var _this = this;
        this.initEnumeration();
        return bsnconnector_1.bsnGetSession().getDeviceLogListBySegment(this.enumOptions)
            .then(function (deviceLogListSegment) {
            _this.processDeviceLogListSegment(deviceLogListSegment);
            return _this;
        });
    };
    CmcDeviceLogCollection.prototype.updateNext = function () {
        var _this = this;
        if (!lodash_1.isNil(this._logEnumerator)) {
            this._newLogRecords = [];
            return bsnconnector_1.bsnGetSession().getNextDeviceLogListSegment(this._logEnumerator)
                .then(function (deviceLogListSegment) {
                _this.processDeviceLogListSegment(deviceLogListSegment);
                return _this;
            });
        }
        return this.startUpdate();
    };
    Object.defineProperty(CmcDeviceLogCollection.prototype, "enumOptions", {
        get: function () {
            var options = {};
            if (!lodash_1.isNil(this.logFilter)) {
                options.filter = this.logFilter;
            }
            if (!lodash_1.isNil(this.sortOrder)) {
                options.sortOrder = this.sortOrder;
            }
            if (!lodash_1.isNil(this.pageSize)) {
                options.pageSize = this.pageSize;
            }
            return options;
        },
        enumerable: false,
        configurable: true
    });
    CmcDeviceLogCollection.prototype.initEnumeration = function () {
        this._isComplete = false;
        this._logEnumerator = null;
        this._logRecords = [];
        this._newLogRecords = [];
    };
    CmcDeviceLogCollection.prototype.processDeviceLogListSegment = function (listSegment) {
        this._newLogRecords = listSegment.items.map(function (record) { return new deviceLog_1.CmcDeviceLogRecord(record); });
        this._logRecords = this._logRecords.concat(this._newLogRecords);
        this._logEnumerator = listSegment.enumerator;
        this._isComplete = this._logEnumerator.hasNextPage;
    };
    CmcDeviceLogCollection.prototype.sortLogRecords = function () {
        if (!lodash_1.isNil(this.sortOrder) && this.sortOrder.length > 0) {
            var secondaryProp = this.sortOrder.length > 1 ? this.sortOrder[1].field : null;
            var sortFunction = utils_1.objectPropertyComparison(this.sortOrder[0].field, this.sortOrder[0].descending, secondaryProp);
            this._logRecords = this._logRecords.sort(sortFunction);
        }
    };
    return CmcDeviceLogCollection;
}());
exports.CmcDeviceLogCollection = CmcDeviceLogCollection;


/***/ }),
/* 79 */
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
exports.cmGetBDeployDeviceSetupExists = exports.BsDeviceSetupCollection = exports.cmGetBDeployDeviceSetupCollection = exports.CmBDeploySortByField = void 0;
var bsnconnector_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(0);
var deviceSetupCache_1 = __webpack_require__(41);
var deviceSetup_1 = __webpack_require__(61);
var deviceSetupCollection;
var CmBDeploySortByField = (function () {
    function CmBDeploySortByField() {
    }
    CmBDeploySortByField.networkName = 'networkName';
    CmBDeploySortByField.username = 'username';
    CmBDeploySortByField.packageName = 'packageName';
    CmBDeploySortByField.bsnGroupName = 'bsnGroupName';
    CmBDeploySortByField.setupType = 'setupType';
    CmBDeploySortByField.deviceName = 'deviceName';
    return CmBDeploySortByField;
}());
exports.CmBDeploySortByField = CmBDeploySortByField;
Object.freeze(CmBDeploySortByField);
function cmGetBDeployDeviceSetupCollection(enumerationOptions) {
    if (!deviceSetupCollection) {
        deviceSetupCollection = new BsDeviceSetupCollection(enumerationOptions);
    }
    if (enumerationOptions && !lodash_1.isNil(enumerationOptions.sortField) &&
        (enumerationOptions.sortField !== deviceSetupCollection.sortField ||
            enumerationOptions.sortDescending !== deviceSetupCollection.sortDescending)) {
        var sortDescending = lodash_1.isNil(enumerationOptions.sortDescending) ? false : enumerationOptions.sortDescending;
        deviceSetupCollection.setSortOptions(enumerationOptions.sortField, sortDescending);
    }
    return deviceSetupCollection;
}
exports.cmGetBDeployDeviceSetupCollection = cmGetBDeployDeviceSetupCollection;
var BsDeviceSetupCollection = (function () {
    function BsDeviceSetupCollection(enumerationOptions) {
        this._isComplete = false;
        this._allNames = [];
        this._newNames = [];
        this._enumerationOptions = {};
        if (lodash_1.isNil(enumerationOptions)) {
            this._enumerationOptions = __assign({}, BsDeviceSetupCollection.DefaultEnumerationOptions);
        }
        else {
            this._enumerationOptions = __assign(__assign({}, BsDeviceSetupCollection.DefaultEnumerationOptions), enumerationOptions);
        }
    }
    Object.defineProperty(BsDeviceSetupCollection.prototype, "isComplete", {
        get: function () { return this._isComplete; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupCollection.prototype, "deviceSetupListNames", {
        get: function () {
            return this._allNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupCollection.prototype, "sortField", {
        get: function () {
            return this._enumerationOptions.sortField;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupCollection.prototype, "sortDescending", {
        get: function () {
            return this._enumerationOptions.sortDescending;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsDeviceSetupCollection.prototype, "newDeviceSetupListNames", {
        get: function () {
            return this._newNames;
        },
        enumerable: false,
        configurable: true
    });
    BsDeviceSetupCollection.prototype.clear = function () {
        this._allNames = [];
        this._isComplete = false;
        this._enumerationOptions.pageNumber = 1;
        deviceSetupCache_1.cmGetBsDeviceSetupCache().clear();
    };
    BsDeviceSetupCollection.prototype.update = function () {
        var _this = this;
        var loadNext = function () {
            if (_this.isComplete) {
                return _this._allNames;
            }
            return _this.updateNext()
                .then(loadNext);
        };
        return this.startUpdate()
            .then(loadNext);
    };
    BsDeviceSetupCollection.prototype.startUpdate = function () {
        var _a;
        var _this = this;
        this.clear();
        var options = {
            page: {
                pageNum: this._enumerationOptions.pageNumber,
                pageSize: this._enumerationOptions.pageSize,
            },
            sort: (_a = {},
                _a[this._enumerationOptions.sortField] = this._enumerationOptions.sortDescending === true ? -1 : 1,
                _a),
        };
        return bsnconnector_1.bsnGetSession().getBDeployDeviceSetupList(options)
            .then(function (dataEntityList) {
            _this.processDataEntityList(dataEntityList);
            return _this;
        });
    };
    BsDeviceSetupCollection.prototype.updateNext = function () {
        var _a;
        var _this = this;
        if (this._isComplete) {
            return Promise.resolve(this);
        }
        this._enumerationOptions.pageNumber = this._enumerationOptions.pageNumber + 1;
        var options = {
            page: {
                pageNum: this._enumerationOptions.pageNumber,
                pageSize: this._enumerationOptions.pageSize,
            },
            sort: (_a = {},
                _a[this._enumerationOptions.sortField] = this._enumerationOptions.sortDescending === true ? -1 : 1,
                _a),
        };
        return bsnconnector_1.bsnGetSession().getBDeployDeviceSetupList(options)
            .then(function (dataEntityList) {
            _this.processDataEntityList(dataEntityList);
            return _this;
        });
    };
    BsDeviceSetupCollection.prototype.getDeviceSetup = function (name) {
        return deviceSetup_1.cmGetBsDeviceSetup(name);
    };
    BsDeviceSetupCollection.prototype.setSortOptions = function (sortField, sortDescending) {
        if (sortDescending === void 0) { sortDescending = false; }
        this._enumerationOptions.sortField = sortField;
        this._enumerationOptions.sortDescending = sortDescending;
    };
    BsDeviceSetupCollection.prototype.deleteDeviceSetup = function (name) {
        var _this = this;
        var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(name);
        if (lodash_1.isNil(data)) {
            return Promise.resolve();
        }
        return bsnconnector_1.bsnGetSession().deleteBDeployDeviceSetup(data._id)
            .then(function () {
            deviceSetupCache_1.cmGetBsDeviceSetupCache().removeDeviceSetup(name);
            _this._allNames = lodash_1.without(_this._allNames, name);
            _this._newNames = lodash_1.without(_this._allNames, name);
        })
            .then();
    };
    BsDeviceSetupCollection.prototype.updateDeviceSetup = function (name, setupJson) {
        var _this = this;
        var data = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(name);
        if (lodash_1.isNil(data)) {
            return Promise.resolve(null);
        }
        setupJson._id = data._id;
        return bsnconnector_1.bsnGetSession().updateBDeployDeviceSetup(setupJson)
            .then(function (dataEntity) {
            var options = {
                query: {
                    packageName: name,
                },
            };
            return bsnconnector_1.bsnGetSession().getBDeployDeviceSetupList(options)
                .then(function (dataEntityList) {
                _this.processDataEntityList(dataEntityList);
                return deviceSetup_1.cmGetBsDeviceSetup(name);
            });
        });
    };
    BsDeviceSetupCollection.prototype.addDeviceSetup = function (name, setupJson) {
        var _this = this;
        return bsnconnector_1.bsnGetSession().addBDeployDeviceSetup(setupJson)
            .then(function (dataEntity) {
            var options = {
                query: {
                    packageName: name,
                },
            };
            return bsnconnector_1.bsnGetSession().getBDeployDeviceSetupList(options)
                .then(function (dataEntityList) {
                _this.processDataEntityList(dataEntityList);
                return deviceSetup_1.cmGetBsDeviceSetup(name);
            });
        });
    };
    BsDeviceSetupCollection.prototype.processDataEntityList = function (dataEntityList) {
        var _this = this;
        this._newNames = [];
        dataEntityList.forEach(function (dataEntity) {
            deviceSetupCache_1.cmGetBsDeviceSetupCache().setDeviceSetup(dataEntity);
            _this._allNames.push(dataEntity.bDeploy.packageName);
            _this._newNames.push(dataEntity.bDeploy.packageName);
        });
        if (this._enumerationOptions.pageSize > dataEntityList.length) {
            this._isComplete = true;
        }
    };
    BsDeviceSetupCollection.DefaultEnumerationOptions = {
        pageNumber: 1,
        pageSize: 50,
        sortField: CmBDeploySortByField.packageName,
        sortDescending: false,
    };
    return BsDeviceSetupCollection;
}());
exports.BsDeviceSetupCollection = BsDeviceSetupCollection;
function cmGetBDeployDeviceSetupExists(name) {
    var options = {
        query: {
            packageName: name,
        },
    };
    return bsnconnector_1.bsnGetSession().getBDeployDeviceSetupList(options)
        .then(function (dataEntityList) {
        return dataEntityList.length !== 0;
    });
}
exports.cmGetBDeployDeviceSetupExists = cmGetBDeployDeviceSetupExists;


/***/ }),
/* 80 */
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
exports.CmcDeviceSubscriptionCollection = exports.cmGetDeviceSubscriptionCollection = void 0;
var bsnconnector_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(0);
var deviceSubscriptionCollection;
function cmGetDeviceSubscriptionCollection(subscriptionFilter, enumerationOptions) {
    if (lodash_1.isNil(deviceSubscriptionCollection)) {
        deviceSubscriptionCollection = new CmcDeviceSubscriptionCollection(subscriptionFilter, enumerationOptions);
    }
    return deviceSubscriptionCollection;
}
exports.cmGetDeviceSubscriptionCollection = cmGetDeviceSubscriptionCollection;
var CmcDeviceSubscriptionCollection = (function () {
    function CmcDeviceSubscriptionCollection(subscriptionFilter, enumerationOptions) {
        this._isComplete = false;
        this._deviceSubscriptions = [];
        this._newDeviceSubscriptions = [];
        this._subscriptionFilter = null;
        this._bsnEnumerationOptions = {};
        this._bsnEnumerator = null;
        this._defaultBsnPageSize = 100;
        if (!lodash_1.isNil(subscriptionFilter)) {
            this._subscriptionFilter = subscriptionFilter;
            this._bsnEnumerationOptions.filter = subscriptionFilter;
        }
        this._enumerationOptions = __assign(__assign({}, CmcDeviceSubscriptionCollection.DefaultEnumerationOptions), enumerationOptions);
        this.setBsnSortExpression();
        if (this._enumerationOptions.pageSize > 100 || this._enumerationOptions.pageSize < 0) {
            this._enumerationOptions.pageSize = this._defaultBsnPageSize;
        }
        this._bsnEnumerationOptions.pageSize = this._enumerationOptions.pageSize;
    }
    Object.defineProperty(CmcDeviceSubscriptionCollection.prototype, "isComplete", {
        get: function () { return this._isComplete; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceSubscriptionCollection.prototype, "deviceSubscriptions", {
        get: function () {
            return this._deviceSubscriptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceSubscriptionCollection.prototype, "newDeviceSubscriptions", {
        get: function () {
            return this._newDeviceSubscriptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceSubscriptionCollection.prototype, "deviceSubscriptionTotalCount", {
        get: function () {
            return this._deviceSubscriptions.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceSubscriptionCollection.prototype, "deviceSubscriptionInUseCount", {
        get: function () {
            return this._deviceSubscriptions
                .filter(function (sub) { return !lodash_1.isNil(sub.deviceId) && sub.status === bsnconnector_1.BsnDeviceSubscriptionStatus.Active; }).length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceSubscriptionCollection.prototype, "deviceSubscriptionActiveCount", {
        get: function () {
            return this._deviceSubscriptions
                .filter(function (sub) { return sub.status === bsnconnector_1.BsnDeviceSubscriptionStatus.Active; }).length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcDeviceSubscriptionCollection.prototype, "deviceSubscriptionSuspendedCount", {
        get: function () {
            return this._deviceSubscriptions
                .filter(function (sub) { return sub.status !== bsnconnector_1.BsnDeviceSubscriptionStatus.Active; }).length;
        },
        enumerable: false,
        configurable: true
    });
    CmcDeviceSubscriptionCollection.prototype.update = function () {
        var _this = this;
        this._deviceSubscriptions = [];
        this._newDeviceSubscriptions = [];
        return new Promise(function (resolve, reject) {
            var getNext = function () {
                bsnconnector_1.bsnGetSession().getNextDeviceSubscriptionListSegment(_this._bsnEnumerator)
                    .then(function (subscriptionListSegment) {
                    _this.processSubscriptionListSegment(subscriptionListSegment);
                    if (_this.isComplete) {
                        resolve(_this);
                    }
                    else {
                        return getNext();
                    }
                })
                    .catch(function (error) { return reject(error); });
            };
            return bsnconnector_1.bsnGetSession().getDeviceSubscriptionListBySegment(_this._bsnEnumerationOptions)
                .then(function (subscriptionListSegment) {
                _this.processSubscriptionListSegment(subscriptionListSegment);
                if (_this.isComplete) {
                    resolve(_this);
                }
                else {
                    return getNext();
                }
            })
                .catch(function (error) { return reject(error); });
        });
    };
    CmcDeviceSubscriptionCollection.prototype.startUpdate = function () {
        var _this = this;
        this._deviceSubscriptions = [];
        this._newDeviceSubscriptions = [];
        return bsnconnector_1.bsnGetSession().getDeviceSubscriptionListBySegment(this._bsnEnumerationOptions)
            .then(function (subscriptionListSegment) {
            _this.processSubscriptionListSegment(subscriptionListSegment);
            return _this;
        });
    };
    CmcDeviceSubscriptionCollection.prototype.updateNext = function () {
        var _this = this;
        this._newDeviceSubscriptions = [];
        if (this.isComplete || lodash_1.isNil(this._bsnEnumerator)) {
            return Promise.resolve(this);
        }
        return bsnconnector_1.bsnGetSession().getNextDeviceSubscriptionListSegment(this._bsnEnumerator)
            .then(function (subscriptionListSegment) {
            _this.processSubscriptionListSegment(subscriptionListSegment);
            return _this;
        });
    };
    CmcDeviceSubscriptionCollection.prototype.getSubscriptionForDeviceId = function (deviceId) {
        var sub = lodash_1.find(this._deviceSubscriptions, ['deviceId', deviceId]);
        return lodash_1.isNil(sub) ? null : sub;
    };
    CmcDeviceSubscriptionCollection.prototype.setSortOptions = function (sortField, sortDescending) {
        if (sortDescending === void 0) { sortDescending = false; }
        this._enumerationOptions.sortField = lodash_1.isNil(sortField) ? 'id' : sortField;
        this._enumerationOptions.sortDescending = sortDescending;
        this.setBsnSortExpression();
        var sortFunction = utils_1.objectPropertyComparison(this._enumerationOptions.sortField, this._enumerationOptions.sortDescending, 'id');
        this._deviceSubscriptions = this._deviceSubscriptions.sort(sortFunction);
        this._newDeviceSubscriptions = this._newDeviceSubscriptions.sort(sortFunction);
    };
    CmcDeviceSubscriptionCollection.prototype.clear = function () {
        this._deviceSubscriptions = [];
        this._newDeviceSubscriptions = [];
        this._isComplete = false;
    };
    CmcDeviceSubscriptionCollection.prototype.processSubscriptionListSegment = function (subscriptionListSegment) {
        var _a, _b;
        (_a = this._deviceSubscriptions).push.apply(_a, subscriptionListSegment.listItems);
        (_b = this._newDeviceSubscriptions).push.apply(_b, subscriptionListSegment.listItems);
        this._isComplete = subscriptionListSegment.enumerator.isComplete;
        if (this._isComplete) {
            this._bsnEnumerator = null;
        }
        else {
            this._bsnEnumerator = subscriptionListSegment.enumerator;
        }
    };
    CmcDeviceSubscriptionCollection.prototype.setBsnSortExpression = function () {
        this._bsnEnumerationOptions.sortExpression = '[' + this._enumerationOptions.sortField + '] '
            + (this._enumerationOptions.sortDescending ? 'DESC' : 'ASC');
    };
    CmcDeviceSubscriptionCollection.DefaultEnumerationOptions = {
        sortField: 'id',
        sortDescending: true,
        pageSize: 100,
    };
    return CmcDeviceSubscriptionCollection;
}());
exports.CmcDeviceSubscriptionCollection = CmcDeviceSubscriptionCollection;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsPlayerDeviceCollectionCache = exports.cmGetPlayerDeviceCollection = exports.cmGetBsPlayerDeviceCollectionCache = void 0;
var playerDeviceCollection_1 = __webpack_require__(63);
var lodash_1 = __webpack_require__(0);
var collectionCache;
function cmGetBsPlayerDeviceCollectionCache() {
    if (!collectionCache) {
        collectionCache = new BsPlayerDeviceCollectionCache();
    }
    return collectionCache;
}
exports.cmGetBsPlayerDeviceCollectionCache = cmGetBsPlayerDeviceCollectionCache;
function cmGetPlayerDeviceCollection(deviceFilter, enumerationOptions) {
    var cache = cmGetBsPlayerDeviceCollectionCache();
    var newCollection = new playerDeviceCollection_1.BsPlayerDeviceCollection(deviceFilter, enumerationOptions);
    var cachedCollection = cache.getCollection(newCollection.functionalLocator);
    if (cachedCollection) {
        if (enumerationOptions && !lodash_1.isNil(enumerationOptions.sortField)) {
            var sortDescending = lodash_1.isNil(enumerationOptions.sortDescending) ? false : enumerationOptions.sortDescending;
            cachedCollection.setSortOptions(enumerationOptions.sortField, sortDescending);
        }
        return cachedCollection;
    }
    cache.putCollection(newCollection);
    return newCollection;
}
exports.cmGetPlayerDeviceCollection = cmGetPlayerDeviceCollection;
var BsPlayerDeviceCollectionCache = (function () {
    function BsPlayerDeviceCollectionCache() {
        this._collectionMap = new Map();
    }
    Object.defineProperty(BsPlayerDeviceCollectionCache.prototype, "size", {
        get: function () { return this._collectionMap.size; },
        enumerable: false,
        configurable: true
    });
    BsPlayerDeviceCollectionCache.prototype.getCollection = function (locator) {
        var collection = this._collectionMap.get(locator);
        return lodash_1.isNil(collection) ? null : collection;
    };
    BsPlayerDeviceCollectionCache.prototype.putCollection = function (collection) {
        this._collectionMap.set(collection.functionalLocator, collection);
    };
    BsPlayerDeviceCollectionCache.prototype.clearAll = function () {
        this._collectionMap.clear();
    };
    return BsPlayerDeviceCollectionCache;
}());
exports.BsPlayerDeviceCollectionCache = BsPlayerDeviceCollectionCache;


/***/ }),
/* 82 */
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
exports.BsPlayerGroupCollection = exports.cmGetBsnPlayerGroupCollection = void 0;
var bsnconnector_1 = __webpack_require__(1);
var playerGroup_1 = __webpack_require__(64);
var playerGroupCache_1 = __webpack_require__(73);
var lodash_1 = __webpack_require__(0);
var playerGroupCollection;
function cmGetBsnPlayerGroupCollection() {
    if (!playerGroupCollection) {
        playerGroupCollection = new BsPlayerGroupCollection();
    }
    return playerGroupCollection;
}
exports.cmGetBsnPlayerGroupCollection = cmGetBsnPlayerGroupCollection;
var BsPlayerGroupCollection = (function () {
    function BsPlayerGroupCollection() {
        this._bsnEnumerator = null;
        this._isComplete = false;
        this._groupNames = [];
        this._newGroupNames = [];
    }
    Object.defineProperty(BsPlayerGroupCollection.prototype, "isComplete", {
        get: function () { return this._isComplete; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupCollection.prototype, "playerGroupNames", {
        get: function () {
            return this._groupNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsPlayerGroupCollection.prototype, "newPlayerGroupNames", {
        get: function () {
            return this._newGroupNames;
        },
        enumerable: false,
        configurable: true
    });
    BsPlayerGroupCollection.prototype.clear = function () {
        this._groupNames = [];
        this._newGroupNames = [];
        this._isComplete = false;
    };
    BsPlayerGroupCollection.prototype.update = function () {
        var _this = this;
        this.clear();
        return bsnconnector_1.bsnGetSession().getRegularGroupList()
            .then(function (groupEntityList) {
            groupEntityList.forEach(function (groupEntity) {
                playerGroupCache_1.cmGetBsPlayerGroupCache().setPlayerGroup(groupEntity);
                _this._groupNames.push(groupEntity.name);
                _this._newGroupNames.push(groupEntity.name);
                _this._isComplete = true;
            });
            return _this.playerGroupNames;
        });
    };
    BsPlayerGroupCollection.prototype.startUpdate = function () {
        var _this = this;
        this.clear();
        return bsnconnector_1.bsnGetSession().getRegularGroupListBySegment()
            .then(function (groupSegment) {
            _this.processBsnGroupSegment(groupSegment);
            return _this;
        });
    };
    BsPlayerGroupCollection.prototype.updateNext = function () {
        var _this = this;
        if (this._isComplete || lodash_1.isNil(this._bsnEnumerator)) {
            return Promise.resolve(this);
        }
        this._groupNames = [];
        this._newGroupNames = [];
        return bsnconnector_1.bsnGetSession().getNextRegularGroupListSegment(this._bsnEnumerator)
            .then(function (groupSegment) {
            _this.processBsnGroupSegment(groupSegment);
            return _this;
        });
    };
    BsPlayerGroupCollection.prototype.getPlayerGroup = function (name) {
        return playerGroup_1.cmGetBsPlayerGroup(name);
    };
    BsPlayerGroupCollection.prototype.getBackendCount = function () {
        return bsnconnector_1.bsnGetSession().getRegularGroupCount();
    };
    BsPlayerGroupCollection.prototype.createNewPlayerGroup = function (name, publishData) {
        var _this = this;
        var newGroupEntity = __assign(__assign(__assign({}, bsnconnector_1.bsnGetRegularGroupEntityTemplate()), publishData), { name: name });
        return bsnconnector_1.bsnGetSession().createRegularGroup(newGroupEntity)
            .then(function (groupEntity) {
            playerGroupCache_1.cmGetBsPlayerGroupCache().setPlayerGroup(groupEntity);
            _this._groupNames.push(groupEntity.name);
            _this._newGroupNames.push(groupEntity.name);
            return playerGroup_1.cmGetBsPlayerGroup(name);
        });
    };
    BsPlayerGroupCollection.prototype.deletePlayerGroup = function (name) {
        var _this = this;
        return bsnconnector_1.bsnGetSession().deleteRegularGroup(name)
            .then(function () {
            playerGroupCache_1.cmGetBsPlayerGroupCache().removePlayerGroup(name);
            _this._groupNames = lodash_1.without(_this._groupNames, name);
            _this._newGroupNames = lodash_1.without(_this._newGroupNames, name);
            return playerGroup_1.cmGetBsPlayerGroup('Unassigned').fetchGroupData();
        })
            .then();
    };
    BsPlayerGroupCollection.prototype.processBsnGroupSegment = function (groupSegment) {
        var _this = this;
        var cache = playerGroupCache_1.cmGetBsPlayerGroupCache();
        groupSegment.listItems.forEach(function (groupEntity) {
            cache.setPlayerGroup(groupEntity);
            _this._groupNames.push(groupEntity.name);
            _this._newGroupNames.push(groupEntity.name);
        });
        this._isComplete = groupSegment.enumerator.isComplete;
        if (this._isComplete) {
            this._bsnEnumerator = null;
        }
        else {
            this._bsnEnumerator = groupSegment.enumerator;
        }
    };
    return BsPlayerGroupCollection;
}());
exports.BsPlayerGroupCollection = BsPlayerGroupCollection;


/***/ }),
/* 83 */
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
exports.cmGetProvisionalDeviceExists = exports.BsProvisionalDeviceCollection = exports.cmGetProvisionalDeviceCollection = exports.CmProvisionalDeviceSortByField = void 0;
var lodash_1 = __webpack_require__(0);
var bsnconnector_1 = __webpack_require__(1);
var provisionalDeviceCache_1 = __webpack_require__(36);
var provisionalDevice_1 = __webpack_require__(65);
var deviceSetupCache_1 = __webpack_require__(41);
var deviceProvisionalCollection;
var CmProvisionalDeviceSortByField = (function () {
    function CmProvisionalDeviceSortByField() {
    }
    CmProvisionalDeviceSortByField.serial = 'serial';
    CmProvisionalDeviceSortByField.deviceName = 'name';
    CmProvisionalDeviceSortByField.model = 'model';
    CmProvisionalDeviceSortByField.setupId = 'setupId';
    CmProvisionalDeviceSortByField.setupName = 'setupName';
    CmProvisionalDeviceSortByField.url = 'url';
    CmProvisionalDeviceSortByField.createdAt = 'createdAt';
    CmProvisionalDeviceSortByField.desc = 'desc';
    return CmProvisionalDeviceSortByField;
}());
exports.CmProvisionalDeviceSortByField = CmProvisionalDeviceSortByField;
Object.freeze(CmProvisionalDeviceSortByField);
function cmGetProvisionalDeviceCollection(enumerationOptions) {
    if (!deviceProvisionalCollection) {
        deviceProvisionalCollection = new BsProvisionalDeviceCollection(enumerationOptions);
    }
    if (enumerationOptions && !lodash_1.isNil(enumerationOptions.sortField) &&
        (enumerationOptions.sortField !== deviceProvisionalCollection.sortField ||
            enumerationOptions.sortDescending !== deviceProvisionalCollection.sortDescending)) {
        var sortDescending = lodash_1.isNil(enumerationOptions.sortDescending) ? false : enumerationOptions.sortDescending;
        deviceProvisionalCollection.setSortOptions(enumerationOptions.sortField, sortDescending);
    }
    return deviceProvisionalCollection;
}
exports.cmGetProvisionalDeviceCollection = cmGetProvisionalDeviceCollection;
var BsProvisionalDeviceCollection = (function () {
    function BsProvisionalDeviceCollection(enumerationOptions) {
        this._isComplete = false;
        this._allNames = [];
        this._newNames = [];
        this._enumerationOptions = {};
        if (lodash_1.isNil(enumerationOptions)) {
            this._enumerationOptions = __assign({}, BsProvisionalDeviceCollection.DefaultEnumerationOptions);
        }
        else {
            this._enumerationOptions = __assign(__assign({}, BsProvisionalDeviceCollection.DefaultEnumerationOptions), enumerationOptions);
        }
    }
    Object.defineProperty(BsProvisionalDeviceCollection.prototype, "isComplete", {
        get: function () { return this._isComplete; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceCollection.prototype, "deviceListSerialNos", {
        get: function () {
            return this._allNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceCollection.prototype, "sortField", {
        get: function () {
            return this._enumerationOptions.sortField;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceCollection.prototype, "sortDescending", {
        get: function () {
            return this._enumerationOptions.sortDescending;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsProvisionalDeviceCollection.prototype, "newDeviceSerialNos", {
        get: function () {
            return this._newNames;
        },
        enumerable: false,
        configurable: true
    });
    BsProvisionalDeviceCollection.prototype.clear = function () {
        this._allNames = [];
        this._isComplete = false;
        this._enumerationOptions.pageNumber = 1;
        provisionalDeviceCache_1.cmGetProvisionalDeviceCache().clear();
    };
    BsProvisionalDeviceCollection.prototype.update = function () {
        var _a;
        var _this = this;
        this.clear();
        var options = {
            sort: (_a = {},
                _a[this._enumerationOptions.sortField] = this._enumerationOptions.sortDescending === true ? -1 : 1,
                _a),
        };
        return bsnconnector_1.bsnGetSession().getBDeployDeviceList(options)
            .then(function (dataEntityList) {
            _this.processDataEntityList(dataEntityList);
            _this._isComplete = true;
            return _this.deviceListSerialNos;
        });
    };
    BsProvisionalDeviceCollection.prototype.startUpdate = function () {
        var _a;
        var _this = this;
        this.clear();
        var options = {
            page: {
                pageNum: this._enumerationOptions.pageNumber,
                pageSize: this._enumerationOptions.pageSize,
            },
            sort: (_a = {},
                _a[this._enumerationOptions.sortField] = this._enumerationOptions.sortDescending === true ? -1 : 1,
                _a),
        };
        return bsnconnector_1.bsnGetSession().getBDeployDeviceList(options)
            .then(function (dataEntityList) {
            _this.processDataEntityList(dataEntityList);
            return _this;
        });
    };
    BsProvisionalDeviceCollection.prototype.updateNext = function () {
        var _a;
        var _this = this;
        if (this._isComplete) {
            return Promise.resolve(this);
        }
        this._enumerationOptions.pageNumber = this._enumerationOptions.pageNumber + 1;
        var options = {
            page: {
                pageNum: this._enumerationOptions.pageNumber,
                pageSize: this._enumerationOptions.pageSize,
            },
            sort: (_a = {},
                _a[this._enumerationOptions.sortField] = this._enumerationOptions.sortDescending === true ? -1 : 1,
                _a),
        };
        return bsnconnector_1.bsnGetSession().getBDeployDeviceList(options)
            .then(function (dataEntityList) {
            _this.processDataEntityList(dataEntityList);
            return _this;
        });
    };
    BsProvisionalDeviceCollection.prototype.getProvisionalDevice = function (serial) {
        return provisionalDevice_1.cmGetBsProvisionalDevice(serial);
    };
    BsProvisionalDeviceCollection.prototype.setSortOptions = function (sortField, sortDescending) {
        if (sortDescending === void 0) { sortDescending = false; }
        this._enumerationOptions.sortField = sortField;
        this._enumerationOptions.sortDescending = sortDescending;
    };
    BsProvisionalDeviceCollection.prototype.addProvisionalDevice = function (setupJson) {
        var _this = this;
        if (!lodash_1.isNil(setupJson.setupName)) {
            var packageInfo = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(setupJson.setupName);
            if (!lodash_1.isNil(packageInfo)) {
                setupJson.setupId = packageInfo._id;
            }
        }
        return bsnconnector_1.bsnGetSession().addBDeployDevice(setupJson)
            .then(function (_) {
            return bsnconnector_1.bsnGetSession().getBDeployDevice(setupJson.serial)
                .then(function (dataEntity) {
                if (!lodash_1.isNull(dataEntity)) {
                    _this.processDataEntityList([dataEntity]);
                }
                return provisionalDevice_1.cmGetBsProvisionalDevice(setupJson.serial);
            });
        });
    };
    BsProvisionalDeviceCollection.prototype.deleteProvisionalDevice = function (serial) {
        var _this = this;
        var data = provisionalDeviceCache_1.cmGetProvisionalDeviceCache().getProvisionalDeviceEntity(serial);
        if (lodash_1.isNil(data)) {
            return Promise.resolve();
        }
        return bsnconnector_1.bsnGetSession().deleteBDeployDevice(data._id)
            .then(function () {
            provisionalDeviceCache_1.cmGetProvisionalDeviceCache().removeProvisionalDevice(serial);
            _this._allNames = lodash_1.without(_this._allNames, serial);
            _this._newNames = lodash_1.without(_this._allNames, serial);
        });
    };
    BsProvisionalDeviceCollection.prototype.updateDevice = function (serial, updateData) {
        var data = provisionalDeviceCache_1.cmGetProvisionalDeviceCache().getProvisionalDeviceEntity(serial);
        if (lodash_1.isNil(data)) {
            return Promise.resolve(null);
        }
        var setupJson = Object.assign({}, data, updateData);
        return bsnconnector_1.bsnGetSession().updateBDeployDevice(setupJson)
            .then(function (_) {
            return bsnconnector_1.bsnGetSession().getBDeployDevice(setupJson.serial)
                .then(function (dataEntity) {
                if (!lodash_1.isNull(dataEntity)) {
                    provisionalDeviceCache_1.cmGetProvisionalDeviceCache().setProvisionalDevice(dataEntity);
                }
                return provisionalDevice_1.cmGetBsProvisionalDevice(setupJson.serial);
            });
        });
    };
    BsProvisionalDeviceCollection.prototype.updateDeviceSetupFile = function (serial, packageName) {
        var data = provisionalDeviceCache_1.cmGetProvisionalDeviceCache().getProvisionalDeviceEntity(serial);
        var packageInfo = deviceSetupCache_1.cmGetBsDeviceSetupCache().getDeviceSetupEntity(packageName);
        if (lodash_1.isNil(data) || lodash_1.isNil(packageInfo)) {
            return Promise.resolve(null);
        }
        var setupJson = lodash_1.clone(data);
        setupJson.setupId = packageInfo._id;
        setupJson.setupName = packageInfo.bDeploy.packageName;
        return bsnconnector_1.bsnGetSession().updateBDeployDevice(setupJson)
            .then(function (_) {
            return bsnconnector_1.bsnGetSession().getBDeployDevice(setupJson.serial)
                .then(function (dataEntity) {
                if (!lodash_1.isNull(dataEntity)) {
                    provisionalDeviceCache_1.cmGetProvisionalDeviceCache().setProvisionalDevice(dataEntity);
                }
                return provisionalDevice_1.cmGetBsProvisionalDevice(setupJson.serial);
            });
        });
    };
    BsProvisionalDeviceCollection.prototype.processDataEntityList = function (dataEntityList) {
        var _this = this;
        this._newNames = [];
        dataEntityList.forEach(function (dataEntity) {
            provisionalDeviceCache_1.cmGetProvisionalDeviceCache().setProvisionalDevice(dataEntity);
            _this._allNames.push(dataEntity.serial);
            _this._newNames.push(dataEntity.serial);
        });
        if (this._enumerationOptions.pageSize > dataEntityList.length) {
            this._isComplete = true;
        }
    };
    BsProvisionalDeviceCollection.DefaultEnumerationOptions = {
        pageNumber: 1,
        pageSize: 50,
        sortField: CmProvisionalDeviceSortByField.serial,
        sortDescending: false,
    };
    return BsProvisionalDeviceCollection;
}());
exports.BsProvisionalDeviceCollection = BsProvisionalDeviceCollection;
function cmGetProvisionalDeviceExists(serial) {
    return bsnconnector_1.bsnGetSession().getBDeployDevice(serial)
        .then(function (dataEntity) {
        if (lodash_1.isNull(dataEntity)) {
            return false;
        }
        else if (dataEntity.setupId || dataEntity.url) {
            return true;
        }
        return false;
    });
}
exports.cmGetProvisionalDeviceExists = cmGetProvisionalDeviceExists;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cmShutdown = void 0;
var fsconnector_1 = __webpack_require__(5);
function cmShutdown() {
    return fsconnector_1.fsCloseConnectorPool();
}
exports.cmShutdown = cmShutdown;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcBsnDynamicPlaylistUploadJob = exports.cmScheduleBsnDynamicPlaylistUploadJob = exports.cmCreateBsnDynamicPlaylistUploadJob = void 0;
var redux_1 = __webpack_require__(43);
var redux_thunk_1 = __webpack_require__(44);
var bscore_1 = __webpack_require__(2);
var bs_playlist_dm_1 = __webpack_require__(27);
var bs_task_manager_1 = __webpack_require__(15);
var assetCollectionManager_1 = __webpack_require__(12);
var fileBlobCache_1 = __webpack_require__(19);
var assetUploadJob_1 = __webpack_require__(21);
var error_1 = __webpack_require__(3);
var uuid_1 = __webpack_require__(16);
var lodash_1 = __webpack_require__(0);
function cmCreateBsnDynamicPlaylistUploadJob(name, dynamicPlaylistState, contentPath, progressCallback, onSuccess, onError, onCancel) {
    return new CmcBsnDynamicPlaylistUploadJob(name, dynamicPlaylistState, contentPath, progressCallback, onSuccess, onError, onCancel);
}
exports.cmCreateBsnDynamicPlaylistUploadJob = cmCreateBsnDynamicPlaylistUploadJob;
function cmScheduleBsnDynamicPlaylistUploadJob(uploadJob, taskManager) {
    return taskManager.addTask(uploadJob);
}
exports.cmScheduleBsnDynamicPlaylistUploadJob = cmScheduleBsnDynamicPlaylistUploadJob;
var CmcBsnDynamicPlaylistUploadJob = (function () {
    function CmcBsnDynamicPlaylistUploadJob(name, dynamicPlaylistState, contentPath, progressCallback, onSuccess, onError, onCancel) {
        this._dynamicPlaylistUploadSpec = null;
        this._cancellationRequested = false;
        var dmState = bs_playlist_dm_1.plDmFilterBaseState(dynamicPlaylistState);
        var stateError = bs_playlist_dm_1.plDmCheckForInvalidPlDmPlaylistState(dmState);
        if (stateError) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'DynamicPlaylist state is not valid: ' + stateError.message);
        }
        this._id = uuid_1.v4();
        this._name = name;
        this._startTime = new Date();
        this._dynamicPlaylistState = dmState;
        this._contentPath = !lodash_1.isNil(contentPath) ? contentPath : '/Shared/Incoming/';
        this._progressCallback = lodash_1.isNil(progressCallback) ? null : progressCallback;
        this._onSuccess = lodash_1.isNil(onSuccess) ? null : onSuccess;
        this._onError = lodash_1.isNil(onError) ? null : onError;
        this._onCancel = lodash_1.isNil(onCancel) ? null : onCancel;
        this._uploadResult = {
            id: this._id,
            type: this.type,
            status: bs_task_manager_1.BsTaskStatus.WaitingForCheck,
            startTime: this._startTime,
            fileUploadResults: [],
            webPageUploadResults: [],
            dynamicPlaylistStateBsn: null,
            dynamicPlaylistAsset: null,
            failedFileUploads: 0,
            failedWebPageUploads: 0,
            hasItemFailures: false,
        };
        this._uploadProgress = {
            id: this._id,
            type: this.type,
            status: bs_task_manager_1.BsTaskStatus.WaitingForCheck,
            startTime: this._startTime,
            totalItems: 0,
            completedItems: 0,
            failedItems: 0,
            totalProgressFraction: 0,
            fileStatus: [],
            webPageStatus: [],
        };
    }
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "id", {
        get: function () { return this._id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "startTime", {
        get: function () { return this._startTime; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "type", {
        get: function () { return bs_task_manager_1.BsTaskType.BsnDynamicPlaylistUploadJob; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "status", {
        get: function () { return this._uploadResult.status; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "isDone", {
        get: function () { return this.status === bs_task_manager_1.BsTaskStatus.Completed || this.status === bs_task_manager_1.BsTaskStatus.Failed; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "isCancelled", {
        get: function () { return this.status === bs_task_manager_1.BsTaskStatus.Cancelled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "cancellationRequested", {
        get: function () { return this._cancellationRequested; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "hasItemFailures", {
        get: function () { return this._uploadJob ? this._uploadJob.hasItemFailures : false; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "progress", {
        get: function () { return this._uploadProgress; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "result", {
        get: function () { return this._uploadResult; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "onSuccess", {
        get: function () { return this._onSuccess; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "onError", {
        get: function () { return this._onError; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "onCancel", {
        get: function () { return this._onCancel; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnDynamicPlaylistUploadJob.prototype, "dynamicPlaylistId", {
        get: function () { return bs_playlist_dm_1.plDmGetPlaylistId(this._dynamicPlaylistState); },
        enumerable: false,
        configurable: true
    });
    CmcBsnDynamicPlaylistUploadJob.prototype.start = function () {
        var _this = this;
        this.setTaskStatus(bs_task_manager_1.BsTaskStatus.InProgress);
        var dynamicPlaylistCollection = assetCollectionManager_1.cmGetCmiAssetCollection(bscore_1.AssetLocation.Bsn, bscore_1.AssetType.BSNDynamicPlaylist);
        var dynamicPlaylistName = bs_playlist_dm_1.plDmGetPlaylistName(this._dynamicPlaylistState);
        return dynamicPlaylistCollection.update()
            .then(function () { return _this._uploadJob.start(); })
            .then(function (uploadResult) {
            _this._uploadResult.fileUploadResults = uploadResult.fileUploadResults;
            _this._uploadResult.webPageUploadResults = uploadResult.webPageUploadResults;
            _this._uploadResult.failedFileUploads = uploadResult.failedFileUploads;
            _this._uploadResult.failedWebPageUploads = uploadResult.failedWebPageUploads;
            _this._uploadResult.hasItemFailures = uploadResult.hasItemFailures;
            if (!_this._cancellationRequested && uploadResult.hasItemFailures) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.dynamicPlaylistUploadJobFailed, "File upload failures: " + uploadResult.failedFileUploads);
            }
        })
            .then(function () {
            if (!_this._cancellationRequested) {
                _this._uploadResult.dynamicPlaylistStateBsn = _this.updateDynamicPlaylistStateFromUploadResult();
                var dynamicPlaylistAsset = dynamicPlaylistCollection.getAsset(dynamicPlaylistName);
                fileBlobCache_1.cmRemoveFileBlobsForScope(_this.dynamicPlaylistId);
                var updatedProjectState = {
                    bspl: bs_playlist_dm_1.plDmGetBaseState(_this._uploadResult.dynamicPlaylistStateBsn),
                };
                if (dynamicPlaylistAsset) {
                    return dynamicPlaylistAsset.updateDynamicPlaylist(updatedProjectState);
                }
                else {
                    return dynamicPlaylistCollection.createNewDynamicPlaylist(dynamicPlaylistName, updatedProjectState);
                }
            }
        })
            .then(function () {
            if (_this._cancellationRequested) {
                _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Cancelled);
            }
            else {
                _this._uploadResult.dynamicPlaylistAsset =
                    dynamicPlaylistCollection.getAsset(dynamicPlaylistName);
                _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Completed);
            }
            return _this._uploadResult;
        })
            .catch(function (error) {
            _this._uploadResult.exceptionError = error;
            _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Failed);
            return _this._uploadResult;
        });
    };
    CmcBsnDynamicPlaylistUploadJob.prototype.check = function () {
        var _this = this;
        var result = { hasDuplicates: false, hasNewDuplicates: false };
        return this.getDynamicPlaylistUploadSpec(this._dynamicPlaylistState)
            .then(function (uploadSpec) {
            _this._dynamicPlaylistUploadSpec = uploadSpec;
            _this._uploadJob = assetUploadJob_1.cmCreateBsnUploadJob(_this.name, _this._dynamicPlaylistUploadSpec.uploadFileSpecs, null, _this.processUploadJobProgress.bind(_this));
            return _this._uploadJob.check();
        })
            .then(function (assetCheckResult) {
            if (assetCheckResult.hasDuplicates) {
                result.hasDuplicates = true;
                if (!lodash_1.isNil(assetCheckResult.duplicatedFileData)) {
                    result.duplicatedFileData = assetCheckResult.duplicatedFileData;
                }
            }
            _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Pending);
            return result;
        });
    };
    CmcBsnDynamicPlaylistUploadJob.prototype.updateDuplicateResolutionAndCheck = function (modifiedCheckResult) {
        return this._uploadJob.updateDuplicateResolutionAndCheck(modifiedCheckResult)
            .then(function (checkResult) {
            modifiedCheckResult.hasNewDuplicates = checkResult.hasDuplicates;
            modifiedCheckResult.hasDuplicates = modifiedCheckResult.hasDuplicates || modifiedCheckResult.hasDuplicates;
            if (!lodash_1.isNil(checkResult.duplicatedFileData)) {
                modifiedCheckResult.duplicatedFileData = checkResult.duplicatedFileData;
            }
            return modifiedCheckResult;
        });
    };
    CmcBsnDynamicPlaylistUploadJob.prototype.cancel = function () {
        if (!this._uploadJob.isDone) {
            this._cancellationRequested = true;
            if (this._uploadJob && this._uploadJob.status === bs_task_manager_1.BsTaskStatus.InProgress) {
                this._uploadJob.cancel();
            }
        }
    };
    CmcBsnDynamicPlaylistUploadJob.prototype.processUploadJobProgress = function (uploadJobProgress) {
        this._uploadProgress.totalItems = uploadJobProgress.totalItems;
        this._uploadProgress.completedItems = uploadJobProgress.completedItems;
        this._uploadProgress.failedItems = uploadJobProgress.failedItems;
        this._uploadProgress.totalProgressFraction = uploadJobProgress.totalProgressFraction;
        if (uploadJobProgress.fileStatus) {
            this._uploadProgress.fileStatus = lodash_1.cloneDeep(uploadJobProgress.fileStatus);
        }
        if (uploadJobProgress.webPageStatus) {
            this._uploadProgress.webPageStatus = lodash_1.cloneDeep(uploadJobProgress.webPageStatus);
        }
        if (this._progressCallback) {
            try {
                this._progressCallback(this._uploadProgress);
            }
            catch (error) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.unexpectedError, 'Exception in dynamicPlaylist upload progress callback: ' + error.message);
            }
        }
    };
    CmcBsnDynamicPlaylistUploadJob.prototype.getDynamicPlaylistUploadSpec = function (dmState) {
        var _this = this;
        var spec = {
            uploadFileSpecs: [],
        };
        if (!this._cancellationRequested) {
            var dynamicPlaylistName_1 = bs_playlist_dm_1.plDmGetPlaylistName(dmState);
            var assetIds = bs_playlist_dm_1.plDmGetAssetItemIdsForPlaylist(dmState);
            assetIds.forEach(function (id) {
                var assetItem = bs_playlist_dm_1.plDmGetAssetItemById(dmState, { id: id });
                if (assetItem.location === bscore_1.AssetLocation.Local || assetItem.location === bscore_1.AssetLocation.Blob) {
                    if (assetItem.assetType === bscore_1.AssetType.Content) {
                        spec.uploadFileSpecs.push({
                            file: assetItem,
                            destinationPath: _this._contentPath,
                            targetName: assetItem.name,
                            parentAssetType: bscore_1.AssetType.BSNDynamicPlaylist,
                            parentAssetNames: [dynamicPlaylistName_1],
                        });
                    }
                }
            });
        }
        return Promise.resolve(spec);
    };
    CmcBsnDynamicPlaylistUploadJob.prototype.updateDynamicPlaylistStateFromUploadResult = function () {
        var _this = this;
        var store = redux_1.createStore(bs_playlist_dm_1.plDmReducer, lodash_1.cloneDeep(this._dynamicPlaylistState), redux_1.applyMiddleware(redux_thunk_1.default));
        this._dynamicPlaylistUploadSpec.uploadFileSpecs.forEach(function (fileUploadSpec, index) {
            var bsnAssetItem = _this._uploadResult.fileUploadResults[index].assetItem;
            store.dispatch(bs_playlist_dm_1.plDmUpdateAssetLocation(fileUploadSpec.file, bsnAssetItem));
        });
        return bs_playlist_dm_1.plDmGetBaseState(store.getState());
    };
    CmcBsnDynamicPlaylistUploadJob.prototype.setTaskStatus = function (status) {
        this._uploadResult.status = status;
        this._uploadProgress.status = status;
        if (status === bs_task_manager_1.BsTaskStatus.Failed && lodash_1.isFunction(this.onError)) {
            this.onError(this);
        }
        if (status === bs_task_manager_1.BsTaskStatus.Completed && lodash_1.isFunction(this.onSuccess)) {
            this.onSuccess(this);
        }
        if (status === bs_task_manager_1.BsTaskStatus.Cancelled && lodash_1.isFunction(this.onCancel)) {
            this.onCancel(this);
        }
    };
    return CmcBsnDynamicPlaylistUploadJob;
}());
exports.CmcBsnDynamicPlaylistUploadJob = CmcBsnDynamicPlaylistUploadJob;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcBsnMediaFeedUploadJob = exports.cmScheduleBsnMediaFeedUploadJob = exports.cmCreateBsnMediaFeedUploadJob = void 0;
var redux_1 = __webpack_require__(43);
var redux_thunk_1 = __webpack_require__(44);
var bscore_1 = __webpack_require__(2);
var bs_playlist_dm_1 = __webpack_require__(27);
var bs_task_manager_1 = __webpack_require__(15);
var assetCollectionManager_1 = __webpack_require__(12);
var fileBlobCache_1 = __webpack_require__(19);
var assetUploadJob_1 = __webpack_require__(21);
var error_1 = __webpack_require__(3);
var uuid_1 = __webpack_require__(16);
var lodash_1 = __webpack_require__(0);
function cmCreateBsnMediaFeedUploadJob(name, mediaFeedState, contentPath, progressCallback, onSuccess, onError, onCancel) {
    return new CmcBsnMediaFeedUploadJob(name, mediaFeedState, contentPath, progressCallback, onSuccess, onError, onCancel);
}
exports.cmCreateBsnMediaFeedUploadJob = cmCreateBsnMediaFeedUploadJob;
function cmScheduleBsnMediaFeedUploadJob(uploadJob, taskManager) {
    return taskManager.addTask(uploadJob);
}
exports.cmScheduleBsnMediaFeedUploadJob = cmScheduleBsnMediaFeedUploadJob;
var CmcBsnMediaFeedUploadJob = (function () {
    function CmcBsnMediaFeedUploadJob(name, mediaFeedState, contentPath, progressCallback, onSuccess, onError, onCancel) {
        this._mediaFeedUploadSpec = null;
        this._cancellationRequested = false;
        var dmState = bs_playlist_dm_1.plDmFilterBaseState(mediaFeedState);
        var stateError = bs_playlist_dm_1.plDmCheckForInvalidPlDmPlaylistState(dmState);
        if (stateError) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'MediaFeed state is not valid: ' + stateError.message);
        }
        this._id = uuid_1.v4();
        this._name = name;
        this._startTime = new Date();
        this._mediaFeedState = dmState;
        this._contentPath = contentPath ? contentPath : '/Shared/Incoming/';
        this._progressCallback = lodash_1.isNil(progressCallback) ? null : progressCallback;
        this._onSuccess = lodash_1.isNil(onSuccess) ? null : onSuccess;
        this._onError = lodash_1.isNil(onError) ? null : onError;
        this._onCancel = lodash_1.isNil(onCancel) ? null : onCancel;
        this._uploadResult = {
            id: this._id,
            type: this.type,
            status: bs_task_manager_1.BsTaskStatus.WaitingForCheck,
            startTime: this._startTime,
            fileUploadResults: [],
            webPageUploadResults: [],
            mediaFeedStateBsn: null,
            mediaFeedAsset: null,
            failedFileUploads: 0,
            failedWebPageUploads: 0,
            hasItemFailures: false,
        };
        this._uploadProgress = {
            id: this._id,
            type: this.type,
            status: bs_task_manager_1.BsTaskStatus.WaitingForCheck,
            startTime: this._startTime,
            totalItems: 0,
            completedItems: 0,
            failedItems: 0,
            totalProgressFraction: 0,
            fileStatus: [],
            webPageStatus: [],
        };
    }
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "id", {
        get: function () { return this._id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "type", {
        get: function () { return bs_task_manager_1.BsTaskType.BsnLiveMediaFeedUploadJob; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "status", {
        get: function () { return this._uploadResult.status; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "isDone", {
        get: function () { return this.status === bs_task_manager_1.BsTaskStatus.Completed || this.status === bs_task_manager_1.BsTaskStatus.Failed; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "isCancelled", {
        get: function () { return this.status === bs_task_manager_1.BsTaskStatus.Cancelled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "cancellationRequested", {
        get: function () { return this._cancellationRequested; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "hasItemFailures", {
        get: function () { return this._uploadJob ? this._uploadJob.hasItemFailures : false; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "progress", {
        get: function () { return this._uploadProgress; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "result", {
        get: function () { return this._uploadResult; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "onSuccess", {
        get: function () { return this._onSuccess; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "onError", {
        get: function () { return this._onError; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "onCancel", {
        get: function () { return this._onCancel; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnMediaFeedUploadJob.prototype, "mediaFeedId", {
        get: function () { return bs_playlist_dm_1.plDmGetPlaylistId(this._mediaFeedState); },
        enumerable: false,
        configurable: true
    });
    CmcBsnMediaFeedUploadJob.prototype.start = function () {
        var _this = this;
        this.setTaskStatus(bs_task_manager_1.BsTaskStatus.InProgress);
        var mediaFeedCollection = assetCollectionManager_1.cmGetCmiAssetCollection(bscore_1.AssetLocation.Bsn, bscore_1.AssetType.BSNMediaFeed);
        var mediaFeedName = bs_playlist_dm_1.plDmGetPlaylistName(this._mediaFeedState);
        return mediaFeedCollection.update()
            .then(function () { return _this._uploadJob.start(); })
            .then(function (uploadResult) {
            _this._uploadResult.fileUploadResults = uploadResult.fileUploadResults;
            _this._uploadResult.webPageUploadResults = uploadResult.webPageUploadResults;
            _this._uploadResult.failedFileUploads = uploadResult.failedFileUploads;
            _this._uploadResult.failedWebPageUploads = uploadResult.failedWebPageUploads;
            _this._uploadResult.hasItemFailures = uploadResult.hasItemFailures;
            if (!_this._cancellationRequested && uploadResult.hasItemFailures) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.dynamicPlaylistUploadJobFailed, "File upload failures: " + uploadResult.failedFileUploads);
            }
        })
            .then(function () {
            if (!_this._cancellationRequested) {
                _this._uploadResult.mediaFeedStateBsn = _this.updateMediaFeedStateFromUploadResult();
                var mediaFeedAsset = mediaFeedCollection.getAsset(mediaFeedName);
                fileBlobCache_1.cmRemoveFileBlobsForScope(_this.mediaFeedId);
                var updatedProjectState = {
                    bspl: bs_playlist_dm_1.plDmGetBaseState(_this._uploadResult.mediaFeedStateBsn),
                };
                if (mediaFeedAsset) {
                    return mediaFeedAsset.updateMediaFeed(updatedProjectState);
                }
                else {
                    return mediaFeedCollection.createNewMediaFeed(mediaFeedName, updatedProjectState);
                }
            }
        })
            .then(function () {
            if (_this._cancellationRequested) {
                _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Cancelled);
            }
            else {
                _this._uploadResult.mediaFeedAsset =
                    mediaFeedCollection.getAsset(mediaFeedName);
                _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Completed);
            }
            return _this._uploadResult;
        })
            .catch(function (error) {
            _this._uploadResult.exceptionError = error;
            _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Failed);
            return _this._uploadResult;
        });
    };
    CmcBsnMediaFeedUploadJob.prototype.check = function () {
        var _this = this;
        var result = { hasDuplicates: false, hasNewDuplicates: false };
        return this.getMediaFeedUploadSpec(this._mediaFeedState)
            .then(function (uploadSpec) {
            _this._mediaFeedUploadSpec = uploadSpec;
            _this._uploadJob = assetUploadJob_1.cmCreateBsnUploadJob(_this.name, _this._mediaFeedUploadSpec.uploadFileSpecs, null, _this.processUploadJobProgress.bind(_this));
            return _this._uploadJob.check();
        })
            .then(function (assetCheckResult) {
            if (assetCheckResult.hasDuplicates) {
                result.hasDuplicates = true;
                if (!lodash_1.isNil(assetCheckResult.duplicatedFileData)) {
                    result.duplicatedFileData = assetCheckResult.duplicatedFileData;
                }
            }
            _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Pending);
            return result;
        });
    };
    CmcBsnMediaFeedUploadJob.prototype.updateDuplicateResolutionAndCheck = function (modifiedCheckResult) {
        return this._uploadJob.updateDuplicateResolutionAndCheck(modifiedCheckResult)
            .then(function (checkResult) {
            modifiedCheckResult.hasNewDuplicates = checkResult.hasDuplicates;
            modifiedCheckResult.hasDuplicates = modifiedCheckResult.hasDuplicates || modifiedCheckResult.hasDuplicates;
            if (!lodash_1.isNil(checkResult.duplicatedFileData)) {
                modifiedCheckResult.duplicatedFileData = checkResult.duplicatedFileData;
            }
            return modifiedCheckResult;
        });
    };
    CmcBsnMediaFeedUploadJob.prototype.cancel = function () {
        if (!this._uploadJob.isDone) {
            this._cancellationRequested = true;
            if (this._uploadJob && this._uploadJob.status === bs_task_manager_1.BsTaskStatus.InProgress) {
                this._uploadJob.cancel();
            }
        }
    };
    CmcBsnMediaFeedUploadJob.prototype.processUploadJobProgress = function (uploadJobProgress) {
        this._uploadProgress.totalItems = uploadJobProgress.totalItems;
        this._uploadProgress.completedItems = uploadJobProgress.completedItems;
        this._uploadProgress.failedItems = uploadJobProgress.failedItems;
        this._uploadProgress.totalProgressFraction = uploadJobProgress.totalProgressFraction;
        if (uploadJobProgress.fileStatus) {
            this._uploadProgress.fileStatus = lodash_1.cloneDeep(uploadJobProgress.fileStatus);
        }
        if (uploadJobProgress.webPageStatus) {
            this._uploadProgress.webPageStatus = lodash_1.cloneDeep(uploadJobProgress.webPageStatus);
        }
        if (this._progressCallback) {
            try {
                this._progressCallback(this._uploadProgress);
            }
            catch (error) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.unexpectedError, 'Exception in mediaFeed upload progress callback: ' + error.message);
            }
        }
    };
    CmcBsnMediaFeedUploadJob.prototype.getMediaFeedUploadSpec = function (dmState) {
        var _this = this;
        var spec = {
            uploadFileSpecs: [],
        };
        if (!this._cancellationRequested) {
            var mediaFeedName_1 = bs_playlist_dm_1.plDmGetPlaylistName(dmState);
            var assetIds = bs_playlist_dm_1.plDmGetAssetItemIdsForPlaylist(dmState);
            assetIds.forEach(function (id) {
                var assetItem = bs_playlist_dm_1.plDmGetAssetItemById(dmState, { id: id });
                if (assetItem.location === bscore_1.AssetLocation.Local || assetItem.location === bscore_1.AssetLocation.Blob) {
                    if (assetItem.assetType === bscore_1.AssetType.Content) {
                        spec.uploadFileSpecs.push({
                            file: assetItem,
                            destinationPath: _this._contentPath,
                            targetName: assetItem.name,
                            parentAssetType: bscore_1.AssetType.BSNMediaFeed,
                            parentAssetNames: [mediaFeedName_1],
                        });
                    }
                }
            });
        }
        return Promise.resolve(spec);
    };
    CmcBsnMediaFeedUploadJob.prototype.updateMediaFeedStateFromUploadResult = function () {
        var _this = this;
        var store = redux_1.createStore(bs_playlist_dm_1.plDmReducer, lodash_1.cloneDeep(this._mediaFeedState), redux_1.applyMiddleware(redux_thunk_1.default));
        this._mediaFeedUploadSpec.uploadFileSpecs.forEach(function (fileUploadSpec, index) {
            var bsnAssetItem = _this._uploadResult.fileUploadResults[index].assetItem;
            store.dispatch(bs_playlist_dm_1.plDmUpdateAssetLocation(fileUploadSpec.file, bsnAssetItem));
        });
        return bs_playlist_dm_1.plDmGetBaseState(store.getState());
    };
    CmcBsnMediaFeedUploadJob.prototype.setTaskStatus = function (status) {
        this._uploadResult.status = status;
        this._uploadProgress.status = status;
        if (status === bs_task_manager_1.BsTaskStatus.Failed && lodash_1.isFunction(this.onError)) {
            this.onError(this);
        }
        if (status === bs_task_manager_1.BsTaskStatus.Completed && lodash_1.isFunction(this.onSuccess)) {
            this.onSuccess(this);
        }
        if (status === bs_task_manager_1.BsTaskStatus.Cancelled && lodash_1.isFunction(this.onCancel)) {
            this.onCancel(this);
        }
    };
    return CmcBsnMediaFeedUploadJob;
}());
exports.CmcBsnMediaFeedUploadJob = CmcBsnMediaFeedUploadJob;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PresentationExportJob = exports.cmCreatePresentationExportJob = exports.BsExportItemStatus = void 0;
var isomorphic_path_1 = __webpack_require__(11);
var bscore_1 = __webpack_require__(2);
var bsdatamodel_1 = __webpack_require__(22);
var bs_task_manager_1 = __webpack_require__(15);
var fsconnector_1 = __webpack_require__(5);
var error_1 = __webpack_require__(3);
var uuid_1 = __webpack_require__(16);
var lodash_1 = __webpack_require__(0);
var BsExportItemStatus = (function () {
    function BsExportItemStatus() {
    }
    BsExportItemStatus.Pending = 'Pending';
    BsExportItemStatus.Copying = 'Copying';
    BsExportItemStatus.Exporting = 'Exporting';
    BsExportItemStatus.Exported = 'Exported';
    BsExportItemStatus.Cancelled = 'Canceled';
    BsExportItemStatus.Failed = 'Failed';
    return BsExportItemStatus;
}());
exports.BsExportItemStatus = BsExportItemStatus;
function cmCreatePresentationExportJob(name, taskManager, presentationState, presentationLocator, targetFolder, progressCallback, onError, onSuccess, onCancel) {
    var exportJob = new PresentationExportJob(name, presentationState, presentationLocator, targetFolder, progressCallback, onError, onSuccess, onCancel);
    return taskManager.addTask(exportJob);
}
exports.cmCreatePresentationExportJob = cmCreatePresentationExportJob;
var PresentationExportJob = (function () {
    function PresentationExportJob(name, presentationState, presentationLocator, targetFolder, progressCallback, onError, onSuccess, onCancel) {
        this._completedExportSize = 0;
        this._totalExportSize = 0;
        this._cancellationRequested = false;
        var dmState = bsdatamodel_1.dmFilterDmState(presentationState);
        var stateError = bsdatamodel_1.dmCheckForInvalidDmSignState(dmState);
        if (stateError) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'Presentation state is not valid: ' + stateError.message);
        }
        this._id = uuid_1.v4();
        this._name = name;
        this._startTime = new Date();
        this._type = bs_task_manager_1.BsTaskType.PresentationExportJob;
        this._status = bs_task_manager_1.BsTaskStatus.Pending;
        this._onError = lodash_1.isNil(onError) ? null : onError;
        this._onSuccess = lodash_1.isNil(onSuccess) ? null : onSuccess;
        this._onCancel = lodash_1.isNil(onCancel) ? null : onCancel;
        this._result = {
            id: this._id,
            type: this._type,
            status: this._status,
            startTime: this._startTime,
            exportResults: [],
            hasItemFailures: false,
        };
        this._progress = {
            id: this._id,
            type: this._type,
            status: this._status,
            startTime: this._startTime,
            totalItems: 0,
            completedItems: 0,
            failedItems: 0,
            totalProgressFraction: 0,
            exportStatuses: [],
        };
        this._progressCallback = lodash_1.isNil(progressCallback) ? null : progressCallback;
        this._completedExportSize = 0;
        this._totalExportSize = 0;
        this._cancellationRequested = false;
        this._presentationState = dmState;
        this._presentationLocator = presentationLocator;
        this._targetFolder = targetFolder;
    }
    Object.defineProperty(PresentationExportJob.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "isDone", {
        get: function () {
            return this.status === bs_task_manager_1.BsTaskStatus.Completed
                || this.status === bs_task_manager_1.BsTaskStatus.Failed
                || this.status === bs_task_manager_1.BsTaskStatus.Cancelled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "isCancelled", {
        get: function () {
            return this._status === bs_task_manager_1.BsTaskStatus.Cancelled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "cancellationRequested", {
        get: function () {
            return this._cancellationRequested;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "hasItemFailures", {
        get: function () {
            return this._result.hasItemFailures;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "onError", {
        get: function () {
            return this._onError;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "onSuccess", {
        get: function () {
            return this._onSuccess;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PresentationExportJob.prototype, "onCancel", {
        get: function () {
            return this._onCancel;
        },
        enumerable: false,
        configurable: true
    });
    PresentationExportJob.prototype.start = function () {
        var _this = this;
        var allFilesToCopy;
        this._setTaskStatus(bs_task_manager_1.BsTaskStatus.InProgress);
        this.buildPresentationExportSpec();
        return this.getFilesToCopy()
            .then(function (filesToCopy) {
            allFilesToCopy = filesToCopy;
            return _this.prepareForFileCopies(allFilesToCopy);
        })
            .then(function () {
            return _this.copyLocalFiles(allFilesToCopy);
        })
            .then(function () {
            if (_this._cancellationRequested) {
                _this._setTaskStatus(bs_task_manager_1.BsTaskStatus.Cancelled);
                return Promise.resolve();
            }
            else {
                _this._setTaskStatus(bs_task_manager_1.BsTaskStatus.Completed);
                return Promise.resolve();
            }
        })
            .then(function () { return _this.result; })
            .catch(function (error) {
            _this._result.exceptionError = error;
            _this._setTaskStatus(bs_task_manager_1.BsTaskStatus.Failed);
            return _this._result;
        });
    };
    PresentationExportJob.prototype.cancel = function () {
        if (!this.isDone) {
            this._cancellationRequested = true;
        }
    };
    PresentationExportJob.prototype._setTaskStatus = function (status) {
        if (this._status === bs_task_manager_1.BsTaskStatus.Failed
            || this._status === bs_task_manager_1.BsTaskStatus.Cancelled
            || this._status === bs_task_manager_1.BsTaskStatus.Completed) {
            this._result.status = this._status;
            this._progress.status = this._status;
        }
        else {
            if (status === bs_task_manager_1.BsTaskStatus.Failed) {
                this._result.hasItemFailures = true;
                this._status = status;
                if (lodash_1.isFunction(this.onError)) {
                    this.onError(this);
                }
            }
            else if (status === bs_task_manager_1.BsTaskStatus.Completed) {
                this._result.hasItemFailures = false;
                this._status = status;
                if (lodash_1.isFunction(this.onSuccess)) {
                    this.onSuccess(this);
                }
            }
            else if (status === bs_task_manager_1.BsTaskStatus.Cancelled) {
                this._result.hasItemFailures = false;
                this._status = status;
                if (lodash_1.isFunction(this.onCancel)) {
                    this.onCancel(this);
                }
            }
            this._result.status = status;
            this._progress.status = status;
            this._status = status;
        }
        if (this._progressCallback) {
            this._progressCallback(this._progress);
        }
    };
    PresentationExportJob.prototype.prepareForFileCopies = function (filesToCopy) {
        this._result.exportResults = filesToCopy
            .map(function (fileToCopy, index) {
            return {
                jobIndex: index,
                filePath: fileToCopy.sourceFilePath,
                status: BsExportItemStatus.Pending,
            };
        });
        this._progress.exportStatuses = filesToCopy
            .map(function (fileToCopy, index) {
            return {
                jobIndex: index,
                filePath: fileToCopy.sourceFilePath,
                status: BsExportItemStatus.Pending,
                fractionComplete: 0,
            };
        });
        this._progress.totalItems = filesToCopy.length;
        this._totalExportSize = filesToCopy.length;
    };
    PresentationExportJob.prototype.getFilesToCopy = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this._result.status === BsExportItemStatus.Cancelled
                || _this._result.status === BsExportItemStatus.Failed) {
                return Promise.resolve();
            }
            else if (_this._cancellationRequested) {
                _this._setTaskStatus(bs_task_manager_1.BsTaskStatus.Cancelled);
                return Promise.resolve();
            }
            var filesToCopy = [];
            var destinationFolder = _this._targetFolder;
            var exportSpec = _this._presentationExportSpec;
            var sourceFilePath = isomorphic_path_1.default.join(exportSpec.presentationFileSpec.path, exportSpec.presentationFileSpec.name);
            var destinationFilePath = isomorphic_path_1.default.join(destinationFolder, exportSpec.presentationFileSpec.name);
            filesToCopy.push({
                sourceFilePath: sourceFilePath,
                destinationFilePath: destinationFilePath,
            });
            exportSpec.exportFileSpecs.forEach(function (exportFileSpec) {
                sourceFilePath = isomorphic_path_1.default.join(exportFileSpec.path, exportFileSpec.name);
                destinationFilePath = isomorphic_path_1.default.join(destinationFolder, exportFileSpec.name);
                filesToCopy.push({
                    sourceFilePath: sourceFilePath,
                    destinationFilePath: destinationFilePath,
                });
            });
            var promises = [];
            exportSpec.exportHtmlSiteAssetTypeSpecs.forEach(function (exportHtmlSiteSpec) {
                promises.push(_this.getHtmlSiteFilesToExport(exportHtmlSiteSpec));
            });
            Promise.all(promises).then(function (htmlSitesFilesToCopy) {
                htmlSitesFilesToCopy.forEach(function (htmlSiteFilesToCopy) {
                    filesToCopy = filesToCopy.concat(htmlSiteFilesToCopy);
                });
                resolve(filesToCopy);
            });
        });
    };
    PresentationExportJob.prototype.performFileCopy = function (fileToCopy) {
        return fsconnector_1.fsCopyLocalFile(fileToCopy.sourceFilePath, fileToCopy.destinationFilePath, true);
    };
    PresentationExportJob.prototype.copyLocalFiles = function (filesToCopy) {
        var _this = this;
        var failureCount = 0;
        var processNextFileCopy = function (jobIndex) {
            var fileToCopy = filesToCopy[jobIndex];
            if (_this._result.status !== BsExportItemStatus.Cancelled) {
                if (_this._result.status === BsExportItemStatus.Failed) {
                    _this._setTaskStatus(bs_task_manager_1.BsTaskStatus.Failed);
                    return Promise.resolve();
                }
                else if (_this._cancellationRequested) {
                    _this._setTaskStatus(bs_task_manager_1.BsTaskStatus.Cancelled);
                    _this._progress.exportStatuses[jobIndex].status = BsExportItemStatus.Cancelled;
                    _this._result.exportResults[jobIndex].status = BsExportItemStatus.Cancelled;
                    return Promise.resolve();
                }
                _this._progress.exportStatuses[jobIndex].status = BsExportItemStatus.Exporting;
                _this._result.exportResults[jobIndex].status = BsExportItemStatus.Exporting;
                return fsconnector_1.fsCopyLocalFile(fileToCopy.sourceFilePath, fileToCopy.destinationFilePath, true).then(function () {
                    _this._completedExportSize += 1;
                    _this._progress.completedItems += 1;
                    _this._progress.totalProgressFraction = _this._completedExportSize / _this._totalExportSize;
                    _this._progress.exportStatuses[jobIndex].fractionComplete = 1;
                    _this._progress.exportStatuses[jobIndex].status = BsExportItemStatus.Exported;
                    _this._result.exportResults[jobIndex].status = BsExportItemStatus.Exported;
                    failureCount = 0;
                    if (_this._progressCallback) {
                        _this._progressCallback(_this._progress);
                    }
                    var moreFilesToExport = jobIndex + 1 < filesToCopy.length;
                    if (moreFilesToExport) {
                        return processNextFileCopy(jobIndex + 1);
                    }
                }).catch(function (error) {
                    if (failureCount > 3) {
                        _this._progress.exportStatuses[jobIndex].status = BsExportItemStatus.Failed;
                        _this._result.exportResults[jobIndex].status = BsExportItemStatus.Failed;
                        _this._result.exportResults[jobIndex].error = error;
                        _this._result.hasItemFailures = true;
                        _this._progress.failedItems += 1;
                        _this._setTaskStatus(bs_task_manager_1.BsTaskStatus.Failed);
                        return;
                    }
                    failureCount++;
                    return processNextFileCopy(jobIndex);
                });
            }
            else {
                return Promise.resolve();
            }
        };
        return processNextFileCopy(0);
    };
    PresentationExportJob.prototype.getHtmlAssetsToExport = function (htmlSite, dmState) {
        return new Promise(function (resolve, reject) {
            var htmlAssets = [];
            var htmlSiteIndexFileAssetItem = bsdatamodel_1.dmGetAssetItemById(dmState, { id: (htmlSite.indexFileAssetItem).id });
            if (lodash_1.isNil(htmlSiteIndexFileAssetItem)) {
                reject(new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'PresentationExportJob.getHtmlAssetsToExport: '
                    + ("index file not found in dmState for site " + htmlSite.siteName)));
            }
            var htmlSiteIndexFilePath = bscore_1.bscGetAssetFullPath(htmlSiteIndexFileAssetItem);
            var htmlSiteIndexFile = {
                fileName: htmlSiteIndexFileAssetItem.name,
                filePath: htmlSiteIndexFilePath,
                relativeUrl: '',
            };
            htmlAssets.push(htmlSiteIndexFile);
            var promise = fsconnector_1.fsGetLocalHtmlSiteSessionSpecForIndexFile(htmlSiteIndexFilePath);
            promise.then(function (fsHtmlSiteSessionFileSpec) {
                fsHtmlSiteSessionFileSpec.assetFiles.forEach(function (htmlSiteSessionFile) {
                    var filePath = bscore_1.bscIsAssetItem(htmlSiteSessionFile.file) ?
                        bscore_1.bscGetAssetFullPath(htmlSiteSessionFile.file) : htmlSiteSessionFile.file;
                    var fileName = bscore_1.bscIsAssetItem(htmlSiteSessionFile.file) ?
                        htmlSiteSessionFile.file.name : htmlSiteSessionFile.file;
                    var htmlSiteAssetFile = {
                        filePath: filePath,
                        fileName: fileName,
                        relativeUrl: lodash_1.isNil(htmlSiteSessionFile.destinationPath) ? '' : htmlSiteSessionFile.destinationPath,
                    };
                    htmlAssets.push(htmlSiteAssetFile);
                });
                resolve(htmlAssets);
            });
        });
    };
    PresentationExportJob.prototype.getHtmlSiteAssets = function (targetSiteFolder, htmlAssets) {
        var filesToCopy = [];
        htmlAssets.forEach(function (htmlAsset) {
            var sourceFilePath = htmlAsset.filePath;
            var destinationFilePath = isomorphic_path_1.default.join(targetSiteFolder, htmlAsset.relativeUrl);
            filesToCopy.push({
                sourceFilePath: sourceFilePath,
                destinationFilePath: isomorphic_path_1.default.join(destinationFilePath, htmlAsset.fileName),
            });
        });
        return filesToCopy;
    };
    PresentationExportJob.prototype.getHtmlSiteFilesToExport = function (htmlSite) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var siteName = htmlSite.siteName;
            var siteTargetFolder = isomorphic_path_1.default.join(_this._targetFolder, siteName);
            _this.getHtmlAssetsToExport(htmlSite, _this._presentationState).then(function (htmlAssets) {
                var filesToCopy = _this.getHtmlSiteAssets(siteTargetFolder, htmlAssets);
                resolve(filesToCopy);
            });
        });
    };
    PresentationExportJob.prototype.getPresentationFileAsset = function (presentationLocator) {
        return bscore_1.bscAssetItemFromAssetLocator(presentationLocator);
    };
    PresentationExportJob.prototype.getLocalAssets = function (dmState) {
        var assetIds = bsdatamodel_1.dmGetAssetItemIdsForSign(dmState);
        var localAssetSpecs = [];
        assetIds.forEach(function (id) {
            var assetItem = bsdatamodel_1.dmGetAssetItemById(dmState, { id: id });
            if (assetItem.location === bscore_1.AssetLocation.Local) {
                if (assetItem.assetType === bscore_1.AssetType.Content || assetItem.assetType === bscore_1.AssetType.BrightScript
                    || assetItem.assetType === bscore_1.AssetType.Project || assetItem.assetType === bscore_1.AssetType.Other) {
                    localAssetSpecs.push(assetItem);
                }
            }
        });
        return localAssetSpecs;
    };
    PresentationExportJob.prototype.getNodeAppSpecs = function (dmState) {
        var nodeAppSpecs = [];
        var nodeAppIds = bsdatamodel_1.dmGetNodeAppIdsForSign(dmState);
        nodeAppIds.forEach(function (id) {
            var nodeApp = bsdatamodel_1.dmGetNodeAppById(dmState, { id: id });
            if (!lodash_1.isNil(nodeApp) && !lodash_1.isNil(nodeApp.indexAssetItem)) {
                nodeAppSpecs.push({
                    siteName: nodeApp.name,
                    siteType: bscore_1.AssetType.HtmlSite,
                    indexFileAssetItem: nodeApp.indexAssetItem,
                });
            }
        });
        return nodeAppSpecs;
    };
    PresentationExportJob.prototype.getHtmlSiteSpecs = function (dmState) {
        var htmlSiteSpecs = [];
        var htmlSiteIds = bsdatamodel_1.dmGetHtmlSiteIdsForSign(dmState);
        htmlSiteIds.forEach(function (id) {
            var htmlSite = bsdatamodel_1.dmGetHtmlSiteById(dmState, { id: id });
            if (!lodash_1.isNil(htmlSite) && htmlSite.type === bscore_1.HtmlSiteType.Hosted && !lodash_1.isNil(htmlSite.indexAssetItem)) {
                htmlSiteSpecs.push({
                    siteName: htmlSite.name,
                    siteType: bscore_1.AssetType.HtmlSite,
                    indexFileAssetItem: htmlSite.indexAssetItem,
                });
            }
        });
        return htmlSiteSpecs;
    };
    PresentationExportJob.prototype.getDeviceWebPageSpec = function (dmState) {
        var deviceWebPageSpec = null;
        var presentationWebPage = bsdatamodel_1.dmGetPresentationWebPage(dmState);
        if (presentationWebPage.mode === bscore_1.DeviceWebPageDisplay.Custom && !lodash_1.isNil(presentationWebPage.customPage)) {
            var indexFileAssetItem = presentationWebPage.customPage.indexAssetItem;
            deviceWebPageSpec = {
                siteName: presentationWebPage.customPage.name,
                siteType: bscore_1.AssetType.DeviceHtmlSite,
                indexFileAssetItem: indexFileAssetItem,
            };
        }
        return deviceWebPageSpec;
    };
    PresentationExportJob.prototype.buildPresentationExportSpec = function () {
        var dmState = this._presentationState;
        var exportSpec = {
            presentationFileSpec: null,
            exportFileSpecs: [],
            exportHtmlSiteAssetTypeSpecs: [],
        };
        exportSpec.presentationFileSpec = this.getPresentationFileAsset(this._presentationLocator);
        exportSpec.exportFileSpecs = this.getLocalAssets(dmState);
        var nodeAppSpecs = this.getNodeAppSpecs(dmState);
        var htmlSiteSpecs = this.getHtmlSiteSpecs(dmState);
        var allHtmlSiteAssetTypeSpecs = nodeAppSpecs.concat(htmlSiteSpecs);
        var deviceWebPageSpec = this.getDeviceWebPageSpec(dmState);
        if (!lodash_1.isNil(deviceWebPageSpec)) {
            allHtmlSiteAssetTypeSpecs.push(deviceWebPageSpec);
        }
        exportSpec.exportHtmlSiteAssetTypeSpecs = allHtmlSiteAssetTypeSpecs.map(function (htmlSiteSpec) {
            return ({
                siteName: htmlSiteSpec.siteName,
                siteType: htmlSiteSpec.siteType,
                indexFileAssetItem: htmlSiteSpec.indexFileAssetItem,
            });
        });
        this._presentationExportSpec = exportSpec;
    };
    return PresentationExportJob;
}());
exports.PresentationExportJob = PresentationExportJob;


/***/ }),
/* 88 */
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
exports.CmcBsnPresentationUploadJob = exports.cmScheduleBsnPresentationUploadJob = exports.cmCreateBsnPresentationUploadJob = void 0;
var redux_1 = __webpack_require__(43);
var redux_thunk_1 = __webpack_require__(44);
var bscore_1 = __webpack_require__(2);
var bsdatamodel_1 = __webpack_require__(22);
var bs_task_manager_1 = __webpack_require__(15);
var fsconnector_1 = __webpack_require__(5);
var presentationAsset_1 = __webpack_require__(24);
var assetCollectionManager_1 = __webpack_require__(12);
var assetManager_1 = __webpack_require__(10);
var fileBlobCache_1 = __webpack_require__(19);
var assetUploadJob_1 = __webpack_require__(21);
var pluginUploadJob_1 = __webpack_require__(66);
var error_1 = __webpack_require__(3);
var uuid_1 = __webpack_require__(16);
var lodash_1 = __webpack_require__(0);
var getDefaultPresentationCheckResult = function (name) {
    return {
        presentationName: name,
        targetName: name,
        existsOnBsn: false,
        publishedOnBsn: false,
        verifiedResolution: false,
        previousTargetName: name,
    };
};
function cmCreateBsnPresentationUploadJob(name, presentationState, contentPath, progressCallback, onSuccess, onError, onCancel) {
    return new CmcBsnPresentationUploadJob(name, presentationState, contentPath, progressCallback, onSuccess, onError, onCancel);
}
exports.cmCreateBsnPresentationUploadJob = cmCreateBsnPresentationUploadJob;
function cmScheduleBsnPresentationUploadJob(uploadJob, taskManager) {
    return taskManager.addTask(uploadJob);
}
exports.cmScheduleBsnPresentationUploadJob = cmScheduleBsnPresentationUploadJob;
var CmcBsnPresentationUploadJob = (function () {
    function CmcBsnPresentationUploadJob(name, projectState, contentPath, progressCallback, onSuccess, onError, onCancel) {
        this._presentationUploadSpec = null;
        this._cancellationRequested = false;
        this._dependentPresentationLocators = [];
        this._dependentPresentationStateMap = null;
        this._dependentPresentationUploadSpecs = [];
        this._presentationCheckMap = new Map();
        this._presentationResolutionMap = new Map();
        this._progressPhase = {
            asset: 0.8,
            plugin: 0.1,
            presentation: 0.1,
        };
        this._progressCompletions = {
            asset: 0,
            plugin: 0,
            presentation: 0,
        };
        this._presentationUpdateProgress = {
            totalItems: 1,
            completedItems: 0,
            totalOps: 1,
            completedOps: 0,
            progressFraction: 0,
        };
        var dmState = bsdatamodel_1.dmFilterDmState(projectState);
        var stateError = bsdatamodel_1.dmCheckForInvalidDmSignState(dmState);
        if (stateError) {
            throw new error_1.BsCmError(error_1.BsCmErrorType.invalidParameters, 'Presentation state is not valid: ' + stateError.message);
        }
        this._id = uuid_1.v4();
        this._name = name;
        this._startTime = new Date();
        this._presentationState = dmState;
        this._presentationName = bsdatamodel_1.dmGetSignName(dmState);
        if (projectState.hasOwnProperty('bsdm')) {
            this._projectState = projectState;
        }
        else {
            this._projectState = { bsdm: projectState };
        }
        this._contentPath = contentPath ? contentPath : '/Shared/Incoming/';
        this._progressCallback = lodash_1.isNil(progressCallback) ? null : progressCallback;
        this._onSuccess = lodash_1.isNil(onSuccess) ? null : onSuccess;
        this._onError = lodash_1.isNil(onError) ? null : onError;
        this._onCancel = lodash_1.isNil(onCancel) ? null : onCancel;
        this._uploadResult = {
            id: this._id,
            type: this.type,
            status: bs_task_manager_1.BsTaskStatus.WaitingForCheck,
            startTime: this._startTime,
            pluginUploadResults: [],
            fileUploadResults: [],
            webPageUploadResults: [],
            presentationStateBsn: null,
            presentationAsset: null,
            failedFileUploads: 0,
            failedWebPageUploads: 0,
            hasItemFailures: false,
        };
        this._uploadProgress = {
            id: this._id,
            type: this.type,
            status: bs_task_manager_1.BsTaskStatus.WaitingForCheck,
            startTime: this._startTime,
            totalItems: 0,
            completedItems: 0,
            failedItems: 0,
            totalProgressFraction: 0,
            fileStatus: [],
            webPageStatus: [],
            pluginStatus: null,
        };
    }
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "id", {
        get: function () { return this._id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "type", {
        get: function () { return bs_task_manager_1.BsTaskType.BsnPresentationUploadJob; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "status", {
        get: function () { return this._uploadResult.status; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "isDone", {
        get: function () { return this.status === bs_task_manager_1.BsTaskStatus.Completed || this.status === bs_task_manager_1.BsTaskStatus.Failed; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "isCancelled", {
        get: function () { return this.status === bs_task_manager_1.BsTaskStatus.Cancelled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "cancellationRequested", {
        get: function () { return this._cancellationRequested; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "hasItemFailures", {
        get: function () { return this._uploadJob ? this._uploadJob.hasItemFailures : false; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "progress", {
        get: function () { return this._uploadProgress; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "result", {
        get: function () { return this._uploadResult; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "onSuccess", {
        get: function () { return this._onSuccess; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "onError", {
        get: function () { return this._onError; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "onCancel", {
        get: function () { return this._onCancel; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "presentationId", {
        get: function () { return bsdatamodel_1.dmGetSignId(this._presentationState); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmcBsnPresentationUploadJob.prototype, "dependentPresentationCount", {
        get: function () {
            return lodash_1.isNil(this._dependentPresentationLocators) ? 0 : this._dependentPresentationLocators.length;
        },
        enumerable: false,
        configurable: true
    });
    CmcBsnPresentationUploadJob.prototype.start = function () {
        var _this = this;
        this.setTaskStatus(bs_task_manager_1.BsTaskStatus.InProgress);
        var presentationCollection = assetCollectionManager_1.cmGetCmiAssetCollection(bscore_1.AssetLocation.Bsn, bscore_1.AssetType.Project);
        this._progressCompletions.asset = 0;
        this._progressCompletions.plugin = 0;
        this._progressCompletions.presentation = 0;
        return this._uploadJob.start()
            .then(function (uploadResult) {
            _this._uploadResult.fileUploadResults = uploadResult.fileUploadResults;
            _this._uploadResult.webPageUploadResults = uploadResult.webPageUploadResults;
            _this._uploadResult.failedFileUploads = uploadResult.failedFileUploads;
            _this._uploadResult.failedWebPageUploads = uploadResult.failedWebPageUploads;
            _this._uploadResult.hasItemFailures = uploadResult.hasItemFailures;
            if (!_this._cancellationRequested && uploadResult.hasItemFailures) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.presentationUploadJobFailed, "File upload failures: " + uploadResult.failedFileUploads + "; webPage upload failures: " + uploadResult.failedWebPageUploads);
            }
            if (!_this._cancellationRequested && !lodash_1.isNil(_this._pluginUploadJob) && _this._pluginUploadJob.pluginCount > 0) {
                return _this._pluginUploadJob.start()
                    .then(function (pluginUploadResult) {
                    _this._uploadResult.pluginUploadResults = pluginUploadResult.pluginUploadResults;
                    if (!_this._cancellationRequested && pluginUploadResult.hasItemFailures) {
                        throw new error_1.BsCmError(error_1.BsCmErrorType.presentationUploadJobFailed, 'Plugin upload failure');
                    }
                });
            }
        })
            .then(function () {
            if (!_this._cancellationRequested) {
                return _this.updateAllBsnPresentations(presentationCollection);
            }
        })
            .then(function () { return _this.checkAndResolvePresentationDependencies(presentationCollection); })
            .then(function () {
            if (_this._cancellationRequested) {
                _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Cancelled);
            }
            else {
                fileBlobCache_1.cmRemoveFileBlobsForScope(_this.presentationId);
                _this._uploadResult.presentationAsset =
                    presentationCollection.getAsset(_this._presentationName);
                _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Completed);
            }
            return _this._uploadResult;
        })
            .catch(function (error) {
            _this._uploadResult.exceptionError = error;
            _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Failed);
            return _this._uploadResult;
        });
    };
    CmcBsnPresentationUploadJob.prototype.check = function () {
        var _this = this;
        var presentationCollection = assetCollectionManager_1.cmGetCmiAssetCollection(bscore_1.AssetLocation.Bsn, bscore_1.AssetType.Project);
        var result = {
            hasDuplicates: false,
            hasNewDuplicates: false,
            presentationCheckResult: getDefaultPresentationCheckResult(this._presentationName),
        };
        return presentationCollection.update()
            .then(function () {
            result.presentationCheckResult =
                _this.updatePresentationCheckResult(result.presentationCheckResult, presentationCollection);
            _this._presentationCheckMap.set(_this._presentationName, __assign({}, result.presentationCheckResult));
            return presentationAsset_1.CmcPresentationAsset.getDependentPresentationAssetLocators(_this._presentationState, bscore_1.AssetLocation.Local);
        })
            .then(function (dependentPresentationLocators) {
            if (dependentPresentationLocators.length > 0) {
                _this._dependentPresentationLocators = dependentPresentationLocators;
                _this._presentationUpdateProgress.totalItems = dependentPresentationLocators.length + 1;
                _this._presentationUpdateProgress.totalOps = 3 * _this._presentationUpdateProgress.totalItems;
                result.dependentPresentationCheckResults = dependentPresentationLocators.map(function (locator) {
                    return _this.updatePresentationCheckResult(getDefaultPresentationCheckResult(locator.name), presentationCollection);
                });
                result.dependentPresentationCheckResults.forEach(function (checkResult) {
                    _this._presentationCheckMap.set(checkResult.presentationName, checkResult);
                });
                return Promise.all(dependentPresentationLocators.map(function (locator) {
                    return assetManager_1.cmGetCmiAssetForAssetSpecification(locator)
                        .then(function (asset) { return lodash_1.isNil(asset) ? null : asset.getProjectState(); });
                }))
                    .then(function (projectStates) {
                    if (projectStates.indexOf(null) >= 0) {
                        throw new error_1.BsCmError((error_1.BsCmErrorType.presentationDependencyProjectFileMissing));
                    }
                    _this._dependentPresentationStateMap = new Map();
                    projectStates.forEach(function (ps) {
                        var dmState = bsdatamodel_1.dmFilterDmState(ps);
                        var depName = bsdatamodel_1.dmGetSignName(dmState);
                        _this._dependentPresentationStateMap.set(depName, ps);
                        _this._presentationResolutionMap.set(depName, {
                            targetName: depName,
                            updateStatus: {
                                allContentUpdated: false,
                                allDependenciesUpdated: bsdatamodel_1.dmGetLinkedPresentationCount(dmState) === 0,
                            },
                            bsnAssetItem: null,
                        });
                    });
                    return Promise.all(projectStates.map(function (state) {
                        return _this.getPresentationUploadSpec(bsdatamodel_1.dmFilterDmState(state));
                    }));
                });
            }
            return [];
        })
            .then(function (dependentUploadSpecs) {
            _this._dependentPresentationUploadSpecs = dependentUploadSpecs;
            _this._presentationResolutionMap.set(_this._presentationName, {
                targetName: _this._presentationName,
                updateStatus: {
                    allContentUpdated: false,
                    allDependenciesUpdated: dependentUploadSpecs.length === 0,
                },
                bsnAssetItem: null,
            });
            return _this.getPresentationUploadSpec(_this._presentationState);
        })
            .then(function (uploadSpec) {
            if (_this._dependentPresentationUploadSpecs.length > 0) {
                var uploadFileSpecs_1 = uploadSpec.uploadFileSpecs;
                var uploadWebPageSpecs_1 = uploadSpec.uploadWebPageSpecs;
                var pluginFileSpecs_1 = uploadSpec.pluginFileSpecs;
                _this._dependentPresentationUploadSpecs.forEach(function (spec) {
                    uploadFileSpecs_1 = uploadFileSpecs_1.concat(spec.uploadFileSpecs);
                    uploadWebPageSpecs_1 = uploadWebPageSpecs_1.concat(spec.uploadWebPageSpecs);
                    pluginFileSpecs_1 = pluginFileSpecs_1.concat(spec.pluginFileSpecs);
                });
                _this._presentationUploadSpec = { uploadFileSpecs: uploadFileSpecs_1, uploadWebPageSpecs: uploadWebPageSpecs_1, pluginFileSpecs: pluginFileSpecs_1 };
            }
            else {
                _this._presentationUploadSpec = uploadSpec;
            }
            _this._uploadJob = assetUploadJob_1.cmCreateBsnUploadJob(_this.name, _this._presentationUploadSpec.uploadFileSpecs, _this._presentationUploadSpec.uploadWebPageSpecs, _this.processUploadJobProgress.bind(_this));
            _this._pluginUploadJob = pluginUploadJob_1.cmCreateBsnPluginUploadJob(_this._presentationUploadSpec.pluginFileSpecs, _this.processPluginUploadProgress.bind(_this));
            _this._uploadProgress.totalItems = _this._uploadJob.uploadJobItemCount
                + _this._pluginUploadJob.pluginCount + _this._presentationUpdateProgress.totalItems;
            _this.calculateProgressPhases();
            return _this._uploadJob.check();
        })
            .then(function (assetCheckResult) {
            if (assetCheckResult.hasDuplicates) {
                result.hasDuplicates = true;
                if (!lodash_1.isNil(assetCheckResult.duplicatedFileData)) {
                    result.duplicatedFileData = assetCheckResult.duplicatedFileData;
                }
                if (!lodash_1.isNil(assetCheckResult.duplicatedHtmlData)) {
                    result.duplicatedHtmlData = assetCheckResult.duplicatedHtmlData;
                }
            }
            return _this._pluginUploadJob.check();
        })
            .then(function (pluginCheckResult) {
            if (pluginCheckResult.hasDuplicates) {
                result.hasDuplicates = true;
                result.hasNewDuplicates = true;
                result.duplicatedPluginData = pluginCheckResult.duplicatedPluginData;
            }
            _this.setTaskStatus(bs_task_manager_1.BsTaskStatus.Pending);
            return result;
        });
    };
    CmcBsnPresentationUploadJob.prototype.updateDuplicateResolutionAndCheck = function (modifiedCheckResult) {
        var _this = this;
        var presentationCollection = assetCollectionManager_1.cmGetCmiAssetCollection(bscore_1.AssetLocation.Bsn, bscore_1.AssetType.Project);
        modifiedCheckResult.presentationCheckResult.verifiedResolution = true;
        modifiedCheckResult.presentationCheckResult =
            this.updatePresentationCheckResult(modifiedCheckResult.presentationCheckResult, presentationCollection);
        if (!lodash_1.isNil(modifiedCheckResult.dependentPresentationCheckResults)) {
            modifiedCheckResult.dependentPresentationCheckResults
                .forEach(function (checkResult) { checkResult.verifiedResolution = true; });
            modifiedCheckResult.dependentPresentationCheckResults =
                modifiedCheckResult.dependentPresentationCheckResults.map(function (checkResult) {
                    return _this.updatePresentationCheckResult(checkResult, presentationCollection);
                });
        }
        return Promise.all([
            this._uploadJob.updateDuplicateResolutionAndCheck(modifiedCheckResult),
            this._pluginUploadJob.updateDuplicateResolutionAndCheck(modifiedCheckResult)
        ])
            .then(function (checkResults) {
            modifiedCheckResult.hasNewDuplicates = checkResults[0].hasDuplicates || checkResults[1].hasDuplicates;
            modifiedCheckResult.hasDuplicates = modifiedCheckResult.hasDuplicates || modifiedCheckResult.hasDuplicates;
            if (!lodash_1.isNil(checkResults[0].duplicatedFileData)) {
                modifiedCheckResult.duplicatedFileData = checkResults[0].duplicatedFileData;
            }
            if (!lodash_1.isNil(checkResults[0].duplicatedHtmlData)) {
                modifiedCheckResult.duplicatedHtmlData = checkResults[0].duplicatedHtmlData;
            }
            if (!lodash_1.isNil(checkResults[1].duplicatedPluginData)) {
                modifiedCheckResult.duplicatedPluginData = checkResults[1].duplicatedPluginData;
            }
            return modifiedCheckResult;
        });
    };
    CmcBsnPresentationUploadJob.prototype.cancel = function () {
        if (!this._uploadJob.isDone) {
            this._cancellationRequested = true;
            if (this._uploadJob && this._uploadJob.status === bs_task_manager_1.BsTaskStatus.InProgress) {
                this._uploadJob.cancel();
            }
        }
    };
    CmcBsnPresentationUploadJob.prototype.calculateProgressPhases = function () {
        this._progressPhase.plugin = this._pluginUploadJob.pluginCount > 0 ? 0.1 : 0;
        this._progressPhase.presentation = this._presentationUpdateProgress.totalItems > 1 ? 0.1 : 0.03;
        this._progressPhase.asset = 1.0 - this._progressPhase.plugin - this._progressPhase.presentation;
    };
    CmcBsnPresentationUploadJob.prototype.processUploadJobProgress = function (uploadJobProgress) {
        this._progressCompletions.asset = uploadJobProgress.completedItems;
        this._uploadProgress.completedItems = uploadJobProgress.completedItems;
        this._uploadProgress.failedItems = uploadJobProgress.failedItems;
        this._uploadProgress.totalProgressFraction = uploadJobProgress.totalProgressFraction * this._progressPhase.asset;
        if (uploadJobProgress.fileStatus) {
            this._uploadProgress.fileStatus = lodash_1.cloneDeep(uploadJobProgress.fileStatus);
        }
        if (uploadJobProgress.webPageStatus) {
            this._uploadProgress.webPageStatus = lodash_1.cloneDeep(uploadJobProgress.webPageStatus);
        }
        this.doProgressCallback();
    };
    CmcBsnPresentationUploadJob.prototype.processPluginUploadProgress = function (uploadStatus) {
        this._progressCompletions.plugin = uploadStatus.completedItems;
        this._uploadProgress.completedItems = this._progressCompletions.asset + uploadStatus.completedItems;
        this._uploadProgress.totalProgressFraction =
            this._progressPhase.asset + (uploadStatus.totalProgressFraction * this._progressPhase.plugin);
        this._uploadProgress.pluginStatus = uploadStatus;
        this.doProgressCallback();
    };
    CmcBsnPresentationUploadJob.prototype.processPresentationUpdateProgress = function () {
        this._progressCompletions.presentation = this._presentationUpdateProgress.completedItems;
        this._uploadProgress.completedItems = this._progressCompletions.asset
            + this._progressCompletions.plugin + this._presentationUpdateProgress.completedItems;
        this._uploadProgress.totalProgressFraction =
            this._progressPhase.asset + this._progressPhase.plugin
                + (this._presentationUpdateProgress.progressFraction * this._progressPhase.presentation);
        this.doProgressCallback();
    };
    CmcBsnPresentationUploadJob.prototype.doProgressCallback = function () {
        if (this._progressCallback) {
            try {
                this._progressCallback(this._uploadProgress);
            }
            catch (error) {
                throw new error_1.BsCmError(error_1.BsCmErrorType.unexpectedError, 'Exception in presentation upload progress callback: ' + error.message);
            }
        }
    };
    CmcBsnPresentationUploadJob.prototype.getPresentationUploadSpec = function (dmState) {
        var _this = this;
        var spec = {
            uploadFileSpecs: [],
            uploadWebPageSpecs: [],
            pluginFileSpecs: [],
        };
        if (!this._cancellationRequested) {
            var presentationName_1 = bsdatamodel_1.dmGetSignName(dmState);
            var assetIds = bsdatamodel_1.dmGetAssetItemIdsForSign(dmState);
            assetIds.forEach(function (id) {
                var assetItem = bsdatamodel_1.dmGetAssetItemById(dmState, { id: id });
                if (assetItem.location === bscore_1.AssetLocation.Local || assetItem.location === bscore_1.AssetLocation.Blob) {
                    if (assetItem.assetType === bscore_1.AssetType.Content) {
                        spec.uploadFileSpecs.push({
                            file: assetItem,
                            destinationPath: _this._contentPath,
                            targetName: assetItem.name,
                            parentAssetType: bscore_1.AssetType.Project,
                            parentAssetNames: [presentationName_1],
                        });
                    }
                    else if (assetItem.assetType === bscore_1.AssetType.BrightScript) {
                        spec.pluginFileSpecs.push({
                            file: assetItem,
                            targetName: assetItem.name,
                            presentationNames: [presentationName_1],
                        });
                    }
                }
            });
            var webSpecPromises_1 = [];
            var webSpecObjects_1 = [];
            var htmlSiteMap_1 = new Map();
            var htmlSiteIds = bsdatamodel_1.dmGetHtmlSiteIdsForSign(dmState);
            htmlSiteIds.forEach(function (id) {
                var htmlSite = bsdatamodel_1.dmGetHtmlSiteById(dmState, { id: id });
                if (htmlSite.type === bscore_1.HtmlSiteType.Hosted && !htmlSiteMap_1.has(htmlSite.indexAssetId)) {
                    htmlSiteMap_1.set(htmlSite.indexAssetId, htmlSite.name);
                }
            });
            var nodeAppIds = bsdatamodel_1.dmGetNodeAppIdsForSign(dmState);
            nodeAppIds.forEach(function (id) {
                var nodeApp = bsdatamodel_1.dmGetNodeAppById(dmState, { id: id });
                if (!htmlSiteMap_1.has(nodeApp.indexAssetId)) {
                    htmlSiteMap_1.set(nodeApp.indexAssetId, nodeApp.name);
                }
            });
            htmlSiteMap_1.forEach(function (siteName, assetId) {
                var indexFileAssetItem = bsdatamodel_1.dmGetAssetItemById(dmState, { id: assetId });
                if (!lodash_1.isNil(indexFileAssetItem)) {
                    webSpecPromises_1.push(fsconnector_1.fsGetLocalHtmlSiteSessionSpecForIndexFile(indexFileAssetItem));
                    webSpecObjects_1.push({
                        siteName: siteName,
                        siteType: bscore_1.AssetType.HtmlSite,
                        indexUploadFile: null,
                        assetUploadFiles: null,
                        presentationNames: [presentationName_1],
                    });
                }
            });
            var deviceWebPage = bsdatamodel_1.dmGetDeviceWebPageForPort(dmState, { port: 0 });
            if (deviceWebPage) {
                var indexFileAssetItem = bsdatamodel_1.dmGetAssetItemById(dmState, { id: deviceWebPage.indexAssetId });
                if (indexFileAssetItem) {
                    if (!bscore_1.bscIsDefaultAssetItem(indexFileAssetItem)) {
                        webSpecPromises_1.push(fsconnector_1.fsGetLocalHtmlSiteSessionSpecForIndexFile(indexFileAssetItem));
                        webSpecObjects_1.push({
                            siteName: deviceWebPage.name,
                            siteType: bscore_1.AssetType.DeviceHtmlSite,
                            indexUploadFile: null,
                            assetUploadFiles: null,
                            presentationNames: [presentationName_1],
                        });
                    }
                }
            }
            if (webSpecPromises_1.length > 0) {
                return Promise.all(webSpecPromises_1)
                    .then(function (sessionSpecs) {
                    sessionSpecs.forEach(function (sessionSpec, index) {
                        var webPageSpec = webSpecObjects_1[index];
                        webPageSpec.indexUploadFile = sessionSpec.indexFile;
                        webPageSpec.assetUploadFiles = sessionSpec.assetFiles;
                        spec.uploadWebPageSpecs.push(webPageSpec);
                    });
                    return spec;
                });
            }
        }
        return Promise.resolve(spec);
    };
    CmcBsnPresentationUploadJob.prototype.updatePresentationCheckResult = function (checkResult, presentationCollection) {
        checkResult.existsOnBsn = presentationCollection.hasAssetName(checkResult.targetName);
        if (checkResult.existsOnBsn) {
            var asset = presentationCollection.getAsset(checkResult.targetName);
            checkResult.publishedOnBsn = asset.presentationBsnStatus === bscore_1.BsnPresentationStatus.Published;
        }
        var previousCheckResult = this._presentationCheckMap.get(checkResult.presentationName);
        checkResult.previousTargetName = lodash_1.isNil(previousCheckResult) ?
            checkResult.targetName : previousCheckResult.targetName;
        if (checkResult.targetName.toLowerCase() !== checkResult.previousTargetName.toLowerCase()) {
            var resolutionData = this._presentationResolutionMap.get(checkResult.presentationName);
            resolutionData.targetName = checkResult.targetName;
            checkResult.verifiedResolution = !checkResult.existsOnBsn;
        }
        this._presentationCheckMap.set(checkResult.presentationName, checkResult);
        return checkResult;
    };
    CmcBsnPresentationUploadJob.prototype.updateBsnPresentationNames = function () {
        var _this = this;
        var presentationsToUpdate = Array.from(this._presentationResolutionMap.keys());
        presentationsToUpdate.forEach(function (name) {
            var prData = _this._presentationResolutionMap.get(name);
            if (name !== prData.targetName) {
                if (name === _this._presentationName) {
                    _this._presentationName = prData.targetName;
                }
                else {
                    var projectState = _this._dependentPresentationStateMap.get(name);
                    if (!lodash_1.isNil(projectState)) {
                        _this._dependentPresentationStateMap.set(prData.targetName, projectState);
                        _this._dependentPresentationStateMap.delete(name);
                    }
                }
                _this._presentationResolutionMap.set(prData.targetName, prData);
                _this._presentationResolutionMap.delete(name);
            }
        });
    };
    CmcBsnPresentationUploadJob.prototype.updateAllBsnPresentations = function (presentationCollection) {
        var _this = this;
        this.updateBsnPresentationNames();
        var presentationsToUpdate = Array.from(this._presentationResolutionMap.keys());
        var rootAssetItem;
        var getNextRequiredUpdate = function (index) {
            if (index >= presentationsToUpdate.length)
                index = 0;
            var start = index;
            do {
                var prData = _this._presentationResolutionMap.get(presentationsToUpdate[index]);
                if (!prData.updateStatus.allContentUpdated || !prData.updateStatus.allDependenciesUpdated) {
                    return index;
                }
                index = ++index;
                if (index >= presentationsToUpdate.length)
                    index = 0;
            } while (index !== start);
            return -1;
        };
        var checkNextUpdate = function (index) {
            var nextUpdateIndex = getNextRequiredUpdate(index);
            if (nextUpdateIndex >= 0) {
                return _this.updateBsnPresentation(presentationsToUpdate[nextUpdateIndex], presentationCollection)
                    .then(function (assetItem) {
                    if (presentationsToUpdate[nextUpdateIndex] === _this._presentationName) {
                        rootAssetItem = assetItem;
                    }
                    var completedOps = 0;
                    var completedItems = 0;
                    _this._presentationResolutionMap.forEach(function (prData) {
                        if (prData.updateStatus.allContentUpdated && prData.updateStatus.allDependenciesUpdated) {
                            completedItems += 1;
                        }
                        if (prData.updateStatus.allContentUpdated) {
                            completedOps += 1;
                        }
                        if (prData.updateStatus.allDependenciesUpdated) {
                            completedOps += 1;
                        }
                    });
                    _this._presentationUpdateProgress.completedOps = completedOps;
                    _this._presentationUpdateProgress.completedItems = completedItems;
                    _this._presentationUpdateProgress.progressFraction =
                        completedOps / _this._presentationUpdateProgress.totalOps;
                    _this.processPresentationUpdateProgress();
                    return checkNextUpdate(nextUpdateIndex + 1);
                });
            }
            return Promise.resolve();
        };
        if (this.dependentPresentationCount === 0) {
            return this.updateBsnPresentation(this._presentationName, presentationCollection)
                .then(function (assetItem) {
                _this._presentationUpdateProgress.completedItems = 1;
                _this._presentationUpdateProgress.progressFraction = 1;
                _this.processPresentationUpdateProgress();
                return assetItem;
            });
        }
        else {
            return checkNextUpdate(0).then(function () { return rootAssetItem; });
        }
    };
    CmcBsnPresentationUploadJob.prototype.updateBsnPresentation = function (name, presentationCollection) {
        var projectState = this.getPresentationProjectStateForName(name);
        if (!lodash_1.isNil(projectState)) {
            var updatedState = this.updatePresentationStateFromUploadResult(name, bsdatamodel_1.dmFilterDmState(projectState));
            var presentationAsset_2 = presentationCollection.getAsset(name);
            var updatedProjectState_1 = __assign(__assign({}, projectState), { bsdm: updatedState });
            var prData_1 = this._presentationResolutionMap.get(name);
            if (name === this._presentationName) {
                this._presentationState = updatedState;
                this._uploadResult.presentationStateBsn = updatedState;
                this._projectState = updatedProjectState_1;
            }
            else {
                this._dependentPresentationStateMap.set(name, updatedProjectState_1);
            }
            return Promise.resolve()
                .then(function () {
                if (!lodash_1.isNil(presentationAsset_2)) {
                    return presentationAsset_2.saveProjectState(updatedProjectState_1);
                }
                return presentationCollection.createNewPresentation(name, updatedProjectState_1);
            })
                .then(function (presentationAssetItem) {
                prData_1.bsnAssetItem = presentationAssetItem;
                return presentationAssetItem;
            });
        }
        throw new error_1.BsCmError(error_1.BsCmErrorType.unexpectedError, "updateBsnPresentation: presentation state missing for name: " + name);
    };
    CmcBsnPresentationUploadJob.prototype.updatePresentationStateFromUploadResult = function (name, dmState) {
        var _this = this;
        var store = redux_1.createStore(bsdatamodel_1.bsDmReducer, lodash_1.cloneDeep(dmState), redux_1.applyMiddleware(redux_thunk_1.default));
        var currentName = bsdatamodel_1.dmGetSignName(store.getState());
        if (name !== currentName) {
            store.dispatch(bsdatamodel_1.dmUpdateSignProperties({ id: bsdatamodel_1.BsDmIdNone, name: name }));
        }
        var prData = this._presentationResolutionMap.get(name);
        if (!prData.updateStatus.allContentUpdated) {
            this._presentationUploadSpec.uploadFileSpecs.forEach(function (fileUploadSpec, index) {
                var localAssetItem = fileUploadSpec.file;
                if (!lodash_1.isNil(bsdatamodel_1.dmGetAssetIdByLocator(store.getState(), { locator: localAssetItem.locator }))) {
                    var bsnAssetItem = _this._uploadResult.fileUploadResults[index].assetItem;
                    store.dispatch(bsdatamodel_1.dmUpdateAssetItem(localAssetItem, bsnAssetItem));
                }
            });
            this._presentationUploadSpec.pluginFileSpecs.forEach(function (pluginUploadSpec, index) {
                var localAssetItem = pluginUploadSpec.file;
                if (!lodash_1.isNil(bsdatamodel_1.dmGetAssetIdByLocator(store.getState(), { locator: localAssetItem.locator }))) {
                    var bsnAssetItem = _this._uploadResult.pluginUploadResults[index].assetItem;
                    store.dispatch(bsdatamodel_1.dmUpdateAssetItem(localAssetItem, bsnAssetItem));
                }
            });
            this._presentationUploadSpec.uploadWebPageSpecs.forEach(function (webPageUploadSpec, index) {
                var localAssetItem = webPageUploadSpec.indexUploadFile.file;
                if (!lodash_1.isNil(bsdatamodel_1.dmGetAssetIdByLocator(store.getState(), { locator: localAssetItem.locator }))) {
                    var bsnAssetItem = _this._uploadResult.webPageUploadResults[index].assetItem;
                    try {
                        if (bsnAssetItem.assetType === bscore_1.AssetType.DeviceHtmlSite) {
                            store.dispatch(bsdatamodel_1.dmUpdateDeviceWebPageAssetLocation(localAssetItem, bsnAssetItem));
                        }
                        else {
                            store.dispatch(bsdatamodel_1.dmUpdateAssetItem(localAssetItem, bsnAssetItem));
                        }
                    }
                    catch (error) {
                        if (!(error instanceof bsdatamodel_1.BsDmError)) {
                            throw error;
                        }
                    }
                }
            });
            prData.updateStatus.allContentUpdated = true;
        }
        if (!prData.updateStatus.allDependenciesUpdated) {
            var linkedPresentationLocators = bsdatamodel_1.dmGetLinkedPresentationAssetLocatorList(store.getState());
            var allLinked_1 = true;
            linkedPresentationLocators.forEach(function (locator) {
                if (locator.location === bscore_1.AssetLocation.Local) {
                    var presentationName = bscore_1.bscStripFileExtension(locator.name);
                    var lpData = _this._presentationResolutionMap.get(presentationName);
                    if (!lodash_1.isNil(lpData.bsnAssetItem)) {
                        store.dispatch(bsdatamodel_1.dmUpdateAssetItem(locator, lpData.bsnAssetItem));
                    }
                    else {
                        allLinked_1 = false;
                    }
                }
            });
            prData.updateStatus.allDependenciesUpdated = allLinked_1;
        }
        return bsdatamodel_1.dmGetSignState(store.getState());
    };
    CmcBsnPresentationUploadJob.prototype.checkAndResolvePresentationDependencies = function (presentationCollection) {
        var _this = this;
        var presentationsToCheck = Array.from(this._presentationResolutionMap.keys());
        var updateStatus = function () {
            if (_this._presentationUpdateProgress.completedOps < _this._presentationUpdateProgress.totalOps) {
                _this._presentationUpdateProgress.completedOps += 1;
                _this._presentationUpdateProgress.progressFraction =
                    _this._presentationUpdateProgress.completedOps / _this._presentationUpdateProgress.totalOps;
                _this.processPresentationUpdateProgress();
            }
        };
        return Promise.all(presentationsToCheck.map(function (presentationName) {
            var presentationAsset = presentationCollection.getAsset(presentationName);
            var projectState = _this.getPresentationProjectStateForName(presentationName);
            if (!lodash_1.isNil(presentationAsset) && !lodash_1.isNil(projectState)) {
                var presentationAssetDependencies_1 = presentationAsset.dependentPresentationNames;
                return presentationAsset_1.CmcPresentationAsset.getDependentPresentationAssetLocators(projectState, bscore_1.AssetLocation.Bsn)
                    .then(function (assetLocators) {
                    var assetNeedsUpdate = assetLocators.some(function (locator) {
                        return lodash_1.isNil(lodash_1.find(presentationAssetDependencies_1, ['name', locator.name]));
                    });
                    if (assetNeedsUpdate) {
                        return presentationAsset.saveProjectState(projectState)
                            .then(updateStatus);
                    }
                    updateStatus();
                });
            }
        }))
            .then();
    };
    CmcBsnPresentationUploadJob.prototype.getPresentationProjectStateForName = function (presentationName) {
        if (presentationName === this._presentationName) {
            return this._projectState;
        }
        else if (!lodash_1.isNil(this._dependentPresentationStateMap)) {
            var state = this._dependentPresentationStateMap.get(presentationName);
            if (!lodash_1.isNil(state)) {
                return state;
            }
        }
        return null;
    };
    CmcBsnPresentationUploadJob.prototype.setTaskStatus = function (status) {
        this._uploadResult.status = status;
        this._uploadProgress.status = status;
        if (status === bs_task_manager_1.BsTaskStatus.Failed && lodash_1.isFunction(this.onError)) {
            this.onError(this);
        }
        if ((status === bs_task_manager_1.BsTaskStatus.Completed) && lodash_1.isFunction(this.onSuccess)) {
            this.onSuccess(this);
        }
        if ((status === bs_task_manager_1.BsTaskStatus.Cancelled) && lodash_1.isFunction(this.onCancel)) {
            this.onCancel(this);
        }
    };
    return CmcBsnPresentationUploadJob;
}());
exports.CmcBsnPresentationUploadJob = CmcBsnPresentationUploadJob;


/***/ }),
/* 89 */
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
/* 90 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CmcAssetCollectionCache = exports.cmGetAssetCollectionCache = void 0;
var notifyInternal_1 = __webpack_require__(4);
var lodash_1 = __webpack_require__(0);
var collectionCache;
function cmGetAssetCollectionCache() {
    if (!collectionCache) {
        collectionCache = new CmcAssetCollectionCache();
    }
    return collectionCache;
}
exports.cmGetAssetCollectionCache = cmGetAssetCollectionCache;
var CmcAssetCollectionCache = (function () {
    function CmcAssetCollectionCache() {
        this._collectionMap = new Map();
        notifyInternal_1.cmGetAssetCollectionNotifier().subscribe(this);
    }
    Object.defineProperty(CmcAssetCollectionCache.prototype, "size", {
        get: function () { return this._collectionMap.size; },
        enumerable: false,
        configurable: true
    });
    CmcAssetCollectionCache.prototype.hasCollection = function (locator) {
        return this._collectionMap.has(locator);
    };
    CmcAssetCollectionCache.prototype.getCollection = function (locator) {
        var collection = this._collectionMap.get(locator);
        return lodash_1.isNil(collection) ? null : collection;
    };
    CmcAssetCollectionCache.prototype.putCollection = function (collection) {
        this._collectionMap.set(collection.locatorHash, collection);
    };
    CmcAssetCollectionCache.prototype.removeCollection = function (locator) {
        this._collectionMap.delete(locator);
    };
    CmcAssetCollectionCache.prototype.getLocatorListForMatchingAssetCollections = function (testAssetCollection) {
        var locatorList = [];
        this._collectionMap.forEach(function (collection, locatorHash) {
            if (testAssetCollection(collection)) {
                locatorList.push(locatorHash);
            }
        });
        return locatorList;
    };
    CmcAssetCollectionCache.prototype.getCollectionsForAssetItem = function (assetItem) {
        var collections = [];
        this._collectionMap.forEach(function (collection) {
            if (collection.assetMatchesCollection(assetItem)) {
                collections.push(collection);
            }
        });
        return collections.length ? collections : null;
    };
    CmcAssetCollectionCache.prototype.hasCollectionsForAssetItem = function (assetItem) {
        var hasCollection = false;
        this._collectionMap.forEach(function (collection) {
            if (collection.assetMatchesCollection(assetItem)) {
                hasCollection = true;
            }
        });
        return hasCollection;
    };
    CmcAssetCollectionCache.prototype.notify = function (notification) {
        this._collectionMap.forEach(function (collection) {
            collection.notify(notification);
        });
    };
    CmcAssetCollectionCache.prototype.clearAll = function () {
        this._collectionMap.clear();
    };
    return CmcAssetCollectionCache;
}());
exports.CmcAssetCollectionCache = CmcAssetCollectionCache;


/***/ }),
/* 93 */
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
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(51), exports);
__exportStar(__webpack_require__(52), exports);
__exportStar(__webpack_require__(53), exports);
__exportStar(__webpack_require__(54), exports);
__exportStar(__webpack_require__(55), exports);
__exportStar(__webpack_require__(56), exports);
__exportStar(__webpack_require__(57), exports);
__exportStar(__webpack_require__(58), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(74), exports);
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(87), exports);
__exportStar(__webpack_require__(88), exports);
__exportStar(__webpack_require__(85), exports);
__exportStar(__webpack_require__(86), exports);
__exportStar(__webpack_require__(66), exports);
__exportStar(__webpack_require__(82), exports);
__exportStar(__webpack_require__(64), exports);
__exportStar(__webpack_require__(63), exports);
__exportStar(__webpack_require__(81), exports);
__exportStar(__webpack_require__(62), exports);
__exportStar(__webpack_require__(79), exports);
__exportStar(__webpack_require__(61), exports);
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(60), exports);
__exportStar(__webpack_require__(80), exports);
__exportStar(__webpack_require__(83), exports);
__exportStar(__webpack_require__(65), exports);
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(77), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(59), exports);
__exportStar(__webpack_require__(68), exports);
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(67), exports);
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(76), exports);
__exportStar(__webpack_require__(75), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(84), exports);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsPlayerDeviceInfoEntityCache = exports.cmGetBsDeviceDownloadCache = exports.cmGetBsDeviceErrorCache = void 0;
var lodash_1 = __webpack_require__(0);
var deviceErrorCache;
var deviceDownloadCache;
function cmGetBsDeviceErrorCache() {
    if (!deviceErrorCache) {
        deviceErrorCache = new BsPlayerDeviceInfoEntityCache();
    }
    return deviceErrorCache;
}
exports.cmGetBsDeviceErrorCache = cmGetBsDeviceErrorCache;
function cmGetBsDeviceDownloadCache() {
    if (!deviceDownloadCache) {
        deviceDownloadCache = new BsPlayerDeviceInfoEntityCache();
    }
    return deviceDownloadCache;
}
exports.cmGetBsDeviceDownloadCache = cmGetBsDeviceDownloadCache;
function isDeviceErrorEntity(infoItem) {
    return !lodash_1.isNil(infoItem) && infoItem.hasOwnProperty('errorName');
}
function isDeviceDownloadReportEntity(infoItem) {
    return !lodash_1.isNil(infoItem) && infoItem.hasOwnProperty('fileHash');
}
var BsPlayerDeviceInfoEntityCache = (function () {
    function BsPlayerDeviceInfoEntityCache() {
        this._deviceInfoCacheMap = new Map();
    }
    Object.defineProperty(BsPlayerDeviceInfoEntityCache.prototype, "size", {
        get: function () {
            return this._deviceInfoCacheMap.size;
        },
        enumerable: false,
        configurable: true
    });
    BsPlayerDeviceInfoEntityCache.prototype.clear = function () {
        this._deviceInfoCacheMap.clear();
    };
    BsPlayerDeviceInfoEntityCache.prototype.hasDeviceInfo = function (serial) {
        return this._deviceInfoCacheMap.has(serial);
    };
    BsPlayerDeviceInfoEntityCache.prototype.getDeviceInfoList = function (serial) {
        var cacheItem = this._deviceInfoCacheMap.get(serial);
        if (!lodash_1.isNil(cacheItem)) {
            return Array.from(cacheItem.infoMap.values())
                .sort(function (error1, error2) { return error2.timestamp.getTime() - error1.timestamp.getTime(); });
        }
        return [];
    };
    BsPlayerDeviceInfoEntityCache.prototype.getLatestDeviceInfoTime = function (serial) {
        var cacheItem = this._deviceInfoCacheMap.get(serial);
        if (!lodash_1.isNil(cacheItem)) {
            var errors = Array.from(cacheItem.infoMap.values());
            if (errors.length) {
                return errors.reduce(function (time, err) {
                    if (err.timestamp > time) {
                        time = err.timestamp;
                    }
                    return time;
                }, new Date(0));
            }
        }
        return null;
    };
    BsPlayerDeviceInfoEntityCache.prototype.isDeviceInfoListComplete = function (serial) {
        var cacheItem = this._deviceInfoCacheMap.get(serial);
        return lodash_1.isNil(cacheItem) ? false : cacheItem.enumerator.isComplete;
    };
    BsPlayerDeviceInfoEntityCache.prototype.getDeviceInfoBsnEnumerator = function (serial) {
        var cacheItem = this._deviceInfoCacheMap.get(serial);
        return lodash_1.isNil(cacheItem) ? null : cacheItem.enumerator;
    };
    BsPlayerDeviceInfoEntityCache.prototype.addDeviceInfo = function (serial, infoListSegment) {
        var cacheItem = this._deviceInfoCacheMap.get(serial);
        var infoMap = lodash_1.isNil(cacheItem) ? new Map() : cacheItem.infoMap;
        infoListSegment.listItems.forEach(function (infoItem) {
            var key = infoItem.timestamp.getTime().toString();
            if (isDeviceErrorEntity(infoItem)) {
                key += infoItem.errorName;
            }
            else if (isDeviceDownloadReportEntity(infoItem)) {
                key += infoItem.fileHash;
            }
            infoMap.set(key, infoItem);
        });
        this._deviceInfoCacheMap.set(serial, { infoMap: infoMap, enumerator: infoListSegment.enumerator });
    };
    BsPlayerDeviceInfoEntityCache.prototype.removePlayerDeviceInfoList = function (serial) {
        this._deviceInfoCacheMap.delete(serial);
    };
    return BsPlayerDeviceInfoEntityCache;
}());
exports.BsPlayerDeviceInfoEntityCache = BsPlayerDeviceInfoEntityCache;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.thumbnailCache = exports.ThumbnailCache = void 0;
var dexie_1 = __webpack_require__(99);
var lodash_1 = __webpack_require__(0);
var ThumbnailCache = (function (_super) {
    __extends(ThumbnailCache, _super);
    function ThumbnailCache() {
        var _this = _super.call(this, 'bsContentDB') || this;
        _this._keys = [];
        _this.initialize();
        return _this;
    }
    Object.defineProperty(ThumbnailCache.prototype, "isSupported", {
        get: function () {
            return typeof window !== 'undefined' && window.indexedDB !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    ThumbnailCache.prototype.initialize = function () {
        var _this = this;
        if (this.isSupported) {
            this.version(1).stores({
                thumbnails: 'locator, type, data, width, height, hash',
            });
        }
        if (this.thumbnails) {
            this._keyPromise = new Promise(function (resolve) {
                _this.thumbnails.toCollection().primaryKeys()
                    .then(function (keys) {
                    _this._keys = keys;
                    resolve(_this._keys);
                });
            });
        }
        else {
            this._keyPromise = Promise.resolve(this._keys);
        }
    };
    ThumbnailCache.prototype.count = function () {
        var _this = this;
        if (!this.isSupported) {
            return Promise.resolve(0);
        }
        return new Promise(function (resolve) {
            _this.thumbnails.count()
                .then(function (count) { return resolve(count); });
        });
    };
    ThumbnailCache.prototype.putThumbnail = function (locator, assetThumbnail) {
        var _this = this;
        if (!this.isSupported) {
            return Promise.resolve(null);
        }
        var record = {
            locator: locator,
            type: assetThumbnail.type,
            data: assetThumbnail.data,
            width: lodash_1.isNil(assetThumbnail.size) ? null : assetThumbnail.size.width,
            height: lodash_1.isNil(assetThumbnail.size) ? null : assetThumbnail.size.height,
            hash: lodash_1.isNil(assetThumbnail.hash) ? null : assetThumbnail.hash,
        };
        return new Promise(function (resolve) {
            _this.thumbnails.put(record)
                .then(function () {
                _this._keys.push(locator);
                resolve(assetThumbnail);
            });
        });
    };
    ThumbnailCache.prototype.getThumbnail = function (locator) {
        var _this = this;
        if (!this.isSupported) {
            return Promise.resolve(null);
        }
        return this._keyPromise
            .then(function (keys) {
            if (keys.indexOf(locator) >= 0) {
                return new Promise(function (resolve) {
                    _this.thumbnails.get(locator)
                        .then(function (thumbnailRecord) {
                        if (!thumbnailRecord) {
                            resolve(null);
                            return;
                        }
                        var type = thumbnailRecord.type, data = thumbnailRecord.data, width = thumbnailRecord.width, height = thumbnailRecord.height, hash = thumbnailRecord.hash;
                        var assetThumbnail = {
                            kind: 'local',
                            type: type,
                            data: data,
                            size: lodash_1.isNil(width) || lodash_1.isNil(height) ? null : { width: width, height: height },
                            hash: hash,
                        };
                        _this._keys.push(locator);
                        resolve(assetThumbnail);
                    });
                });
            }
            else {
                return Promise.resolve(null);
            }
        });
    };
    ThumbnailCache.prototype.deleteThumbnail = function (locator) {
        var _this = this;
        if (!this.isSupported) {
            return Promise.resolve();
        }
        return new Promise(function (resolve) {
            _this.thumbnails.delete(locator)
                .then(function () { return resolve(); });
        });
    };
    ThumbnailCache.prototype.deleteAll = function () {
        var _this = this;
        if (!this.isSupported) {
            return Promise.resolve();
        }
        return new Promise(function (resolve) {
            _this.thumbnails.clear()
                .then(function () { return resolve(); });
        });
    };
    return ThumbnailCache;
}(dexie_1.default));
exports.ThumbnailCache = ThumbnailCache;
exports.thumbnailCache = new ThumbnailCache();
exports.default = exports.thumbnailCache;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("./bs-autoplay-generator");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("./bs-data-feed-dm");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("./bs-tagged-playlist-dm");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("dexie");

/***/ })
/******/ ]);
});