(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./bscore"), require("lodash"), require("base64-js"), require("qs"), require("form-urlencoded"), require("isomorphic-fetch-extended"), require("xml2js"));
	else if(typeof define === 'function' && define.amd)
		define(["./bscore", "lodash", "base64-js", "qs", "form-urlencoded", "isomorphic-fetch-extended", "xml2js"], factory);
	else if(typeof exports === 'object')
		exports["bsnConnector"] = factory(require("./bscore"), require("lodash"), require("base64-js"), require("qs"), require("form-urlencoded"), require("isomorphic-fetch-extended"), require("xml2js"));
	else
		root["bsnConnector"] = factory(root["./bscore"], root["lodash"], root["base64-js"], root["qs"], root["form-urlencoded"], root["isomorphic-fetch-extended"], root["xml2js"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
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
exports.getTagSpecificationArrayFromTagEntity = exports.getTagKeySpecification = exports.parseTagValueString = exports.getTagValueString = exports.getTagKeyString = exports.getTagKey = exports.getTagKeyPatternQueryString = exports.checkEnclosingPathSeparators = exports.standardPathToBsnRelativePath = exports.standardPathToBsnVirtualPathForQueryString = exports.standardPathToBsnVirtualPath = exports.bsnVirtualPathToStandardPath = exports.checkFileRetrievalStatus = exports.getDateFromBsnDateString = exports.updateEntityDataTypes = exports.processBsnRequestError = exports.deleteBsnEntityTags = exports.setBsnEntityTags = exports.getBsnEntityTags = exports.TagsApiPathElement = exports.deleteBsnEntityPermissions = exports.replaceBsnEntityPermissions = exports.setBsnEntityPermissions = exports.getBsnEntityPermissions = exports.PermissionApiPathElement = exports.getAllBsnListFragments = exports.getNextBsnListSegment = exports.getBsnListBySegment = exports.getBsnBinaryData = exports.deleteBsnEntity = exports.updateBsnEntity = exports.getBsnEntityCount = exports.getBsnEntityData = exports.encodeIdOrName = exports.getBsnListData = exports.addBsnListItem = exports.executeApiCallWithNullResponse = exports.executeApiCall = exports.bsnFetch = exports.setServerUrl = exports.configServerUrl = exports.configClientRedirectUrl = exports.addBDeployListItem = exports.bsnGetUploadApiUrl = exports.BsnUploadUrl = exports.BsnUploadApiEndpoint = exports.bsnGetApiUrl = exports.BsnUrl = exports.BsnRestApiEndpoint = exports.bsnGetAuthUrl = exports.BsnAuthUrl = exports.BsnAuthEndpoint = exports.getIndexUrl = exports.getBdeployUrl = exports.getClientRedirectUrl = exports.fetchOAuthToken = exports.getOAuthTokenUrl = exports.BsnLogLevel = exports.BsnSessionStatus = void 0;
var bscore_1 = __webpack_require__(2);
var error_1 = __webpack_require__(1);
var enumerator_1 = __webpack_require__(9);
var authenticator_1 = __webpack_require__(4);
var permission_1 = __webpack_require__(10);
var lodash_1 = __webpack_require__(3);
var BsnSessionStatus;
(function (BsnSessionStatus) {
    BsnSessionStatus["invalidUserInfo"] = "invalidUserInfo";
    BsnSessionStatus["userInfoValidNoNetwork"] = "userInfoValidNoNetwork";
    BsnSessionStatus["waitingForAuthentication"] = "waitingForAuthentication";
    BsnSessionStatus["personActive"] = "personActive";
    BsnSessionStatus["networkActive"] = "networkActive";
    BsnSessionStatus["authenticationFailed"] = "authenticationFailed";
    BsnSessionStatus["noConnection"] = "noConnection";
    BsnSessionStatus["serverError"] = "serverError";
})(BsnSessionStatus = exports.BsnSessionStatus || (exports.BsnSessionStatus = {}));
var BsnLogLevel;
(function (BsnLogLevel) {
    BsnLogLevel[BsnLogLevel["None"] = 0] = "None";
    BsnLogLevel[BsnLogLevel["Error"] = 1] = "Error";
    BsnLogLevel[BsnLogLevel["Warn"] = 2] = "Warn";
    BsnLogLevel[BsnLogLevel["Info"] = 3] = "Info";
})(BsnLogLevel = exports.BsnLogLevel || (exports.BsnLogLevel = {}));
var OAuthTokenUrl = 'https://oa.bsn.cloud/v1/token';
function getOAuthTokenUrl() {
    try {
        if (process.env.OAUTH_TOKEN_URL) {
            return process.env.OAUTH_TOKEN_URL;
        }
        return OAuthTokenUrl;
    }
    catch (error) {
        return OAuthTokenUrl;
    }
}
exports.getOAuthTokenUrl = getOAuthTokenUrl;
function fetchOAuthToken() {
    var authenticator = authenticator_1.getBsnAuthenticator();
    return authenticator.checkAuthentication()
        .then(function () { return authenticator.checkNetworkActive(); })
        .then(function () { return authenticator.oauthAccessToken; })
        .catch(function (error) { throw processBsnRequestError(error); });
}
exports.fetchOAuthToken = fetchOAuthToken;
var clientRedirectUrl = 'https://www.bsn.cloud';
function getClientRedirectUrl() {
    try {
        if (process.env.BACON_URL) {
            return process.env.BACON_URL;
        }
        return clientRedirectUrl;
    }
    catch (error) {
        return clientRedirectUrl;
    }
}
exports.getClientRedirectUrl = getClientRedirectUrl;
var bdeployUrl = 'https://provision.bsn.cloud';
function getBdeployUrl() {
    try {
        if (process.env.BDEPLOY_URL) {
            return process.env.BDEPLOY_URL;
        }
        return bdeployUrl;
    }
    catch (error) {
        return bdeployUrl;
    }
}
exports.getBdeployUrl = getBdeployUrl;
var indexUrl = 'https://searchqa.bsn.cloud';
function getIndexUrl() {
    try {
        if (process.env.INDEX_SERVER_URL) {
            return process.env.INDEX_SERVER_URL;
        }
        return indexUrl;
    }
    catch (error) {
        return indexUrl;
    }
}
exports.getIndexUrl = getIndexUrl;
var BsnDefaultUrl = 'https://api.bsn.cloud';
function getDefaultUrl() {
    try {
        if (process.env.BSN_API_URL) {
            return process.env.BSN_API_URL;
        }
        return BsnDefaultUrl;
    }
    catch (error) {
        return BsnDefaultUrl;
    }
}
exports.BsnAuthEndpoint = '/2019/03/REST/';
exports.BsnAuthUrl = getDefaultUrl() + exports.BsnAuthEndpoint;
function bsnGetAuthUrl() {
    return exports.BsnAuthUrl;
}
exports.bsnGetAuthUrl = bsnGetAuthUrl;
exports.BsnRestApiEndpoint = '/2019/03/REST/';
exports.BsnUrl = getDefaultUrl() + exports.BsnRestApiEndpoint;
function bsnGetApiUrl() {
    return exports.BsnUrl;
}
exports.bsnGetApiUrl = bsnGetApiUrl;
exports.BsnUploadApiEndpoint = '/2019/03/REST/';
exports.BsnUploadUrl = getDefaultUrl() + '/Upload' + exports.BsnUploadApiEndpoint;
function bsnGetUploadApiUrl() {
    return exports.BsnUploadUrl;
}
exports.bsnGetUploadApiUrl = bsnGetUploadApiUrl;
function addBDeployListItem(body) {
    var authenticator = authenticator_1.getBsnAuthenticator();
    return fetchOAuthToken()
        .then(function () {
        var request = new Request(getBdeployUrl() + '/rest-device/v2/device', { method: 'POST', headers: authenticator.bDeployHeaders, body: body });
        return fetch(request)
            .then(function (response) { return authenticator.checkStatus(response, request, body); });
    })
        .then(function (response) { return authenticator.getJsonResponse(response); })
        .catch(function (error) { throw processBsnRequestError(error); });
}
exports.addBDeployListItem = addBDeployListItem;
function configClientRedirectUrl(clientRedirectUrlFromConfig) {
    clientRedirectUrl = clientRedirectUrlFromConfig;
}
exports.configClientRedirectUrl = configClientRedirectUrl;
function configServerUrl(bsnServerConfiguration, bDeployServerConfiguration, indexServerConfiguration, oAuthServerConfiguration) {
    OAuthTokenUrl = oAuthServerConfiguration.oAuthTokenUrl;
    bdeployUrl = bDeployServerConfiguration.bDeployUrl;
    indexUrl = indexServerConfiguration.indexUrl;
    BsnDefaultUrl = bsnServerConfiguration.bsnDefaultUrl;
    exports.BsnAuthEndpoint = bsnServerConfiguration.bsnAuthEndpoint;
    exports.BsnRestApiEndpoint = bsnServerConfiguration.bsnRestApiEndpoint;
    exports.BsnUploadApiEndpoint = bsnServerConfiguration.bsnUploadApiEndpoint;
    setServerUrl(BsnDefaultUrl);
}
exports.configServerUrl = configServerUrl;
function setServerUrl(url) {
    if (!url) {
        url = getDefaultUrl();
    }
    if (url.charAt(url.length - 1) === '/') {
        url = url.substr(0, url.length - 1);
    }
    exports.BsnAuthUrl = url + exports.BsnAuthEndpoint;
    exports.BsnUrl = url + exports.BsnRestApiEndpoint;
    exports.BsnUploadUrl = url + '/Upload' + exports.BsnUploadApiEndpoint;
}
exports.setServerUrl = setServerUrl;
function bsnFetch(url, init, networkRequired) {
    if (init === void 0) { init = {}; }
    if (networkRequired === void 0) { networkRequired = true; }
    var authenticator = authenticator_1.getBsnAuthenticator();
    var fetchInfo = authenticator.getFetchInfo(networkRequired);
    return authenticator.checkAuthentication()
        .then(function () { return authenticator.checkNetwork(fetchInfo); })
        .then(function () {
        if (lodash_1.isNil(init.headers)) {
            init.headers = lodash_1.isNil(init.body) ? authenticator.requestHeaders : authenticator.requestHeadersForPostOrPut;
        }
        var request = new Request(url, init);
        return fetch(request)
            .then(function (response) { return authenticator.checkStatus(response, request, init.body, fetchInfo); });
    });
}
exports.bsnFetch = bsnFetch;
function executeApiCall(url, init, networkRequired) {
    if (init === void 0) { init = {}; }
    if (networkRequired === void 0) { networkRequired = true; }
    return bsnFetch(url, init, networkRequired)
        .then(function (response) { return authenticator_1.getBsnAuthenticator().getJsonResponse(response); })
        .then(function (response) { return updateEntityDataTypes(response); })
        .catch(function (error) { throw processBsnRequestError(error); });
}
exports.executeApiCall = executeApiCall;
function executeApiCallWithNullResponse(url, init, networkRequired) {
    if (init === void 0) { init = {}; }
    if (networkRequired === void 0) { networkRequired = true; }
    return bsnFetch(url, init, networkRequired)
        .then(function () { return null; })
        .catch(function (error) { throw processBsnRequestError(error); });
}
exports.executeApiCallWithNullResponse = executeApiCallWithNullResponse;
function addBsnListItem(apiPath, body) {
    return executeApiCall(exports.BsnUrl + apiPath, { method: 'POST', body: body });
}
exports.addBsnListItem = addBsnListItem;
function getBsnListData(apiPath, enumerator) {
    var queryString = lodash_1.isNil(enumerator) ? '' : enumerator.queryString;
    return executeApiCall(exports.BsnUrl + apiPath + queryString);
}
exports.getBsnListData = getBsnListData;
function encodeIdOrName(idOrName) {
    return typeof idOrName === 'string' ? encodeURIComponent(idOrName) : idOrName.toString();
}
exports.encodeIdOrName = encodeIdOrName;
function getBsnEntityData(apiPath, entityIdOrName) {
    return executeApiCall(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + '/');
}
exports.getBsnEntityData = getBsnEntityData;
function getBsnEntityCount(apiPath, options, allowVirtualPath) {
    if (allowVirtualPath === void 0) { allowVirtualPath = false; }
    var enumerator = new enumerator_1.BsnEnumerator(options, allowVirtualPath);
    return bsnFetch(exports.BsnUrl + apiPath + 'count/' + enumerator.queryString)
        .then(function (response) { return authenticator_1.getBsnAuthenticator().getTextResponse(response); })
        .then(function (text) {
        var count = parseInt(text, 10);
        return lodash_1.isNaN(count) ? 0 : count;
    })
        .catch(function (error) { throw processBsnRequestError(error); });
}
exports.getBsnEntityCount = getBsnEntityCount;
function updateBsnEntity(apiPath, entityIdOrName, body) {
    return executeApiCallWithNullResponse(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + '/', { method: 'PUT', body: body });
}
exports.updateBsnEntity = updateBsnEntity;
function deleteBsnEntity(apiPath, entityIdOrName) {
    return executeApiCallWithNullResponse(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + '/', { method: 'DELETE' });
}
exports.deleteBsnEntity = deleteBsnEntity;
function getBsnBinaryData(apiPath, body) {
    var authenticator = authenticator_1.getBsnAuthenticator();
    return authenticator.checkAuthentication()
        .then(function () { return authenticator.checkNetworkActive(); })
        .then(function () {
        var request = new Request(exports.BsnUrl + apiPath, { method: 'COMPILE', headers: authenticator.requestBinaryDataHeaders, body: body });
        return fetch(request)
            .then(function (response) { return authenticator.checkStatus(response, request, body); });
    })
        .then(function (response) {
        if (response.arrayBuffer) {
            return response.arrayBuffer();
        }
        else {
            if (response.buffer) {
                return response.buffer()
                    .then(function (data) { return data.buffer; });
            }
        }
        return null;
    });
}
exports.getBsnBinaryData = getBsnBinaryData;
function getBsnListBySegment(apiPath, options, allowVirtualPath) {
    if (allowVirtualPath === void 0) { allowVirtualPath = false; }
    var enumerator = new enumerator_1.BsnEnumerator(options, allowVirtualPath);
    return this.getNextBsnListSegment(apiPath, enumerator);
}
exports.getBsnListBySegment = getBsnListBySegment;
function getNextBsnListSegment(apiPath, enumerator) {
    return new Promise(function (resolve, reject) {
        var listItems = [];
        getBsnListData(apiPath, enumerator)
            .then(function (data) {
            listItems = listItems.concat(data.items);
            enumerator.marker = data.isTruncated ? data.nextMarker : '';
            enumerator.isComplete = !data.isTruncated;
            resolve({ listItems: listItems, enumerator: enumerator });
        })
            .catch(reject);
    });
}
exports.getNextBsnListSegment = getNextBsnListSegment;
function getAllBsnListFragments(apiPath, options, allowVirtualPath) {
    if (allowVirtualPath === void 0) { allowVirtualPath = false; }
    return new Promise(function (resolve, reject) {
        var allListItems = [];
        var enumerator = new enumerator_1.BsnEnumerator(options, allowVirtualPath);
        var getNextListFragment = function () {
            getNextBsnListSegment(apiPath, enumerator)
                .then(function (segment) {
                allListItems =
                    allListItems.concat(segment.listItems);
                if (segment.enumerator.isComplete) {
                    resolve(allListItems);
                }
                else {
                    enumerator = segment.enumerator;
                    return getNextListFragment();
                }
            })
                .catch(reject);
        };
        return getNextListFragment();
    });
}
exports.getAllBsnListFragments = getAllBsnListFragments;
exports.PermissionApiPathElement = '/Permissions/';
function getBsnEntityPermissions(apiPath, entityIdOrName) {
    if (!entityIdOrName) {
        return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Entity ID/Name is not valid'));
    }
    return executeApiCall(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.PermissionApiPathElement);
}
exports.getBsnEntityPermissions = getBsnEntityPermissions;
function setBsnEntityPermissions(apiPath, entityIdOrName, permissions) {
    if (!entityIdOrName) {
        return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Entity ID/Name is not valid'));
    }
    var authenticator = authenticator_1.getBsnAuthenticator();
    return authenticator.checkAuthentication()
        .then(function () { return authenticator.checkNetworkActive(); })
        .then(function () {
        var request = new Request(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.PermissionApiPathElement, { headers: authenticator.requestHeaders });
        return fetch(request)
            .then(function (response) { return authenticator.checkStatus(response, request); });
    })
        .then(function (response) { return authenticator.getJsonResponse(response); })
        .then(function (permissionObjects) {
        var permissionsToReplace = permissionObjects.filter(function (permission) {
            return !lodash_1.isNil(permission_1.bsnFindMatchingPermission(permissions, permission));
        });
        if (permissionsToReplace.length) {
            var replaceBody_1 = JSON.stringify(permissionsToReplace, null, 0);
            var request2_1 = new Request(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.PermissionApiPathElement, { method: 'DELETE', headers: authenticator.requestHeadersForPostOrPut, body: replaceBody_1 });
            return fetch(request2_1)
                .then(function (response) { return authenticator.checkStatus(response, request2_1, replaceBody_1); });
        }
    })
        .then(function () {
        var body = JSON.stringify(permissions, null, 0);
        var request3 = new Request(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.PermissionApiPathElement, { method: 'POST', headers: authenticator.requestHeadersForPostOrPut, body: body });
        return fetch(request3)
            .then(function (response) { return authenticator.checkStatus(response, request3, body); });
    })
        .then(function () { return null; })
        .catch(function (error) { throw processBsnRequestError(error); });
}
exports.setBsnEntityPermissions = setBsnEntityPermissions;
function replaceBsnEntityPermissions(apiPath, entityIdOrName, permissions) {
    if (!entityIdOrName) {
        return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Entity ID/Name is not valid'));
    }
    if (lodash_1.isNil(permissions)) {
        permissions = [];
    }
    var authenticator = authenticator_1.getBsnAuthenticator();
    return authenticator.checkAuthentication()
        .then(function () { return authenticator.checkNetworkActive(); })
        .then(function () {
        var request = new Request(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.PermissionApiPathElement, { headers: authenticator.requestHeaders });
        return fetch(request)
            .then(function (response) { return authenticator.checkStatus(response, request); });
    })
        .then(function (response) { return authenticator.getJsonResponse(response); })
        .then(function (permissionObjects) {
        if (permissionObjects.length) {
            var deleteBody_1 = JSON.stringify(permissionObjects, null, 0);
            var request2_2 = new Request(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.PermissionApiPathElement, { method: 'DELETE', headers: authenticator.requestHeadersForPostOrPut, body: deleteBody_1 });
            return fetch(request2_2)
                .then(function (response) { return authenticator.checkStatus(response, request2_2, deleteBody_1); });
        }
    })
        .then(function () {
        if (permissions.length) {
            var body_1 = JSON.stringify(permissions, null, 0);
            var request3_1 = new Request(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.PermissionApiPathElement, { method: 'POST', headers: authenticator.requestHeadersForPostOrPut, body: body_1 });
            return fetch(request3_1)
                .then(function (response) { return authenticator.checkStatus(response, request3_1, body_1); });
        }
    })
        .then(function () { return null; })
        .catch(function (error) { throw processBsnRequestError(error); });
}
exports.replaceBsnEntityPermissions = replaceBsnEntityPermissions;
function deleteBsnEntityPermissions(apiPath, entityIdOrName, permissions) {
    if (!entityIdOrName) {
        return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Entity ID/Name is not valid'));
    }
    var body = JSON.stringify(permissions, null, 0);
    return executeApiCallWithNullResponse(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.PermissionApiPathElement, { method: 'DELETE', body: body });
}
exports.deleteBsnEntityPermissions = deleteBsnEntityPermissions;
exports.TagsApiPathElement = '/Tags/';
function getBsnEntityTags(apiPath, entityIdOrName) {
    if (!entityIdOrName) {
        return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Entity ID/Name is not valid'));
    }
    return executeApiCall(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.TagsApiPathElement)
        .then(getTagSpecificationArrayFromTagEntity);
}
exports.getBsnEntityTags = getBsnEntityTags;
function setBsnEntityTags(apiPath, entityIdOrName, tags) {
    if (!entityIdOrName) {
        return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Entity ID/Name is not valid'));
    }
    var authenticator = authenticator_1.getBsnAuthenticator();
    return authenticator.checkAuthentication()
        .then(function () { return authenticator.checkNetworkActive(); })
        .then(function () {
        var request = new Request(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.TagsApiPathElement, { headers: authenticator.requestHeaders });
        return fetch(request)
            .then(function (response) { return authenticator.checkStatus(response, request); });
    })
        .then(function (response) { return authenticator.getJsonResponse(response); })
        .then(function (tagEntity) {
        var newTagNames = new Set(tags.map(function (tagSpec) { return tagSpec.name; }));
        var tagKeysToReplace = Object.keys(tagEntity).reduce(function (strArray, tagKey) {
            var keySpec = getTagKeySpecification(tagKey);
            if (!lodash_1.isNil(keySpec) && newTagNames.has(keySpec.name)) {
                strArray.push(tagKey);
            }
            return strArray;
        }, []);
        if (tagKeysToReplace.length) {
            var replaceBody_2 = JSON.stringify(tagKeysToReplace, null, 0);
            var request2_3 = new Request(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.TagsApiPathElement, { method: 'DELETE', headers: authenticator.requestHeadersForPostOrPut, body: replaceBody_2 });
            return fetch(request2_3)
                .then(function (response) { return authenticator.checkStatus(response, request2_3, replaceBody_2); });
        }
    })
        .then(function () {
        if (tags.length) {
            var tagEntity = tags.reduce(function (result, spec) {
                result[getTagKeyString(spec)] = getTagValueString(spec);
                return result;
            }, {});
            var body_2 = JSON.stringify(tagEntity, null, 0);
            var request3_2 = new Request(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.TagsApiPathElement, { method: 'POST', headers: authenticator.requestHeadersForPostOrPut, body: body_2 });
            return fetch(request3_2)
                .then(function (response) { return authenticator.checkStatus(response, request3_2, body_2); });
        }
    })
        .then(function () { return null; })
        .catch(function (error) { throw processBsnRequestError(error); });
}
exports.setBsnEntityTags = setBsnEntityTags;
function deleteBsnEntityTags(apiPath, entityIdOrName, tagKeys) {
    if (!entityIdOrName) {
        return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Entity ID/Name is not valid'));
    }
    var body = JSON.stringify(tagKeys.map(getTagKey), null, 0);
    return executeApiCallWithNullResponse(exports.BsnUrl + apiPath + encodeIdOrName(entityIdOrName) + exports.TagsApiPathElement, { method: 'DELETE', body: body });
}
exports.deleteBsnEntityTags = deleteBsnEntityTags;
function processBsnRequestError(error) {
    if (error instanceof Error) {
        if (error instanceof error_1.BsnError) {
            return error;
        }
        else {
            var reason = error.message;
            if (error.name === 'FetchError') {
                return new error_1.BsnError(error_1.BsnErrorType.networkError, reason);
            }
            else {
                return new error_1.BsnError(error_1.BsnErrorType.requestError, reason);
            }
        }
    }
    else {
        var reason = (typeof error === 'string') ? error : '';
        return new error_1.BsnError(error_1.BsnErrorType.unknownError, reason);
    }
}
exports.processBsnRequestError = processBsnRequestError;
var dateRegEx = /^\d*-\d*-\d*T\d*:\d*:\d*(\.\d+)?Z?$/;
function updateEntityDataTypes(entity) {
    if (typeof entity === 'object') {
        Object.keys(entity).forEach(function (property) {
            if (entity[property]) {
                if (Array.isArray(entity[property])) {
                    entity[property].map(updateEntityDataTypes);
                }
                else if (typeof entity[property] === 'object') {
                    if (property === 'tags') {
                        entity[property] = getTagSpecificationArrayFromTagEntity(entity[property]);
                    }
                    else {
                        updateEntityDataTypes(entity[property]);
                    }
                }
                else if (typeof entity[property] === 'string') {
                    if (property === 'virtualPath' || property === 'contentsVirtualPath') {
                        entity[property] = bsnVirtualPathToStandardPath(entity[property]);
                    }
                    else if (property !== 'nextMarker' && entity[property].match(dateRegEx)) {
                        entity[property] = exports.getDateFromBsnDateString(entity[property]);
                    }
                }
            }
        });
    }
    return entity;
}
exports.updateEntityDataTypes = updateEntityDataTypes;
exports.getDateFromBsnDateString = function (str) {
    str = str.trim();
    var modStr = str.endsWith('Z') ? str : str + 'Z';
    return new Date(modStr);
};
function checkFileRetrievalStatus(response) {
    if (response.ok) {
        return response;
    }
    else {
        var error = new error_1.BsnError(error_1.BsnErrorType.requestError, response.statusText + ' (' + response.status + ')');
        error.response = response;
        throw error;
    }
}
exports.checkFileRetrievalStatus = checkFileRetrievalStatus;
function bsnVirtualPathToStandardPath(bsnPath) {
    return lodash_1.isString(bsnPath) ? bsnPath.replace(/\\/g, '/') : '/';
}
exports.bsnVirtualPathToStandardPath = bsnVirtualPathToStandardPath;
function standardPathToBsnVirtualPath(path) {
    if (!lodash_1.isString(path)) {
        path = '';
    }
    var leading = path.charAt(0) === '/' ? '' : '\\';
    var trailing = path.length === 0 || path.charAt(path.length - 1) === '/' ? '' : '\\';
    return leading + path.replace(/\//g, '\\') + trailing;
}
exports.standardPathToBsnVirtualPath = standardPathToBsnVirtualPath;
function standardPathToBsnVirtualPathForQueryString(path) {
    if (lodash_1.isString(path)) {
        var leading = path.charAt(0) === '/' ? '' : '\\\\';
        var trailing = path.length === 0 || path.charAt(path.length - 1) === '/' ? '' : '\\\\';
        return leading + path.replace(/\//g, '\\\\') + trailing;
    }
    return '\\\\';
}
exports.standardPathToBsnVirtualPathForQueryString = standardPathToBsnVirtualPathForQueryString;
function standardPathToBsnRelativePath(path) {
    if (!lodash_1.isString(path) || path.length === 0 || path === '/') {
        return '\\';
    }
    if (path.charAt(0) === '/') {
        path = path.substr(1);
    }
    var trailing = path.charAt(path.length - 1) === '/' ? '' : '\\';
    return path.replace(/\//g, '\\') + trailing;
}
exports.standardPathToBsnRelativePath = standardPathToBsnRelativePath;
function checkEnclosingPathSeparators(path) {
    var leading = path.charAt(0) === '/' ? '' : '/';
    var trailing = path.length === 0 || path.charAt(path.length - 1) === '/' ? '' : '/';
    return leading + path + trailing;
}
exports.checkEnclosingPathSeparators = checkEnclosingPathSeparators;
function getTagKeyPatternQueryString(spec) {
    var defaultStr = '';
    if (!lodash_1.isNil(spec)) {
        var str = spec.name.length > 0 ? "<" + spec.name + ">" : defaultStr;
        if (!lodash_1.isNil(spec.type)) {
            str = spec.type + '.' + str;
        }
        if (!lodash_1.isNil(spec.dataType)) {
            str = spec.dataType + '::' + str;
        }
        return '?pattern=' + str;
    }
    return defaultStr;
}
exports.getTagKeyPatternQueryString = getTagKeyPatternQueryString;
function getTagKey(spec) {
    if (spec.name.length > 0) {
        var type = lodash_1.isNil(spec.type) ? bscore_1.BsnTagType.Content : spec.type;
        var dataType = lodash_1.isNil(spec.dataType) ? bscore_1.BsnTagDataType.String : spec.dataType;
        return dataType + '::' + type + '.<' + spec.name + '>';
    }
    return '';
}
exports.getTagKey = getTagKey;
function getTagKeyString(spec) {
    return spec.dataType + '::' + spec.type + '.<' + spec.name + '>';
}
exports.getTagKeyString = getTagKeyString;
function getTagValueString(spec) {
    if (spec.dataType === bscore_1.BsnTagDataType.NumericArray) {
        return spec.value.join(',');
    }
    else if (spec.dataType === bscore_1.BsnTagDataType.StringArray) {
        return '"' + spec.value.join('","') + '"';
    }
    else if (spec.dataType === bscore_1.BsnTagDataType.DateTime) {
        return spec.value.toISOString();
    }
    return spec.value.toString();
}
exports.getTagValueString = getTagValueString;
function parseTagValueString(keySpec, val) {
    switch (keySpec.dataType.toLowerCase()) {
        default:
        case 'string':
            return lodash_1.isNil(val) ? '' : val;
        case 'number':
            return lodash_1.isNil(val) ? 0 : Number(val);
        case 'boolean':
            return lodash_1.isNil(val) ? false : val.toLowerCase() === 'true';
        case 'datetime':
            return new Date(lodash_1.isNil(val) ? 0 : val);
        case 'numericarray':
            return lodash_1.isNil(val) ? [] : val.split(',').map(function (s) { return s.trim(); });
        case 'stringarray':
            return lodash_1.isNil(val) ? [] : val.split(',').map(function (s) { return s.replace(/['" ]/g, ''); });
    }
}
exports.parseTagValueString = parseTagValueString;
function getTagKeySpecification(keyString) {
    var regEx = /(\w+)::(\[.*]).<(.*)>/;
    var matchResult = keyString.match(regEx);
    if (matchResult != null && matchResult.length === 4) {
        return {
            type: matchResult[2],
            dataType: (matchResult[1].charAt(0).toLowerCase() + matchResult[1].slice(1)),
            name: matchResult[3],
        };
    }
    return null;
}
exports.getTagKeySpecification = getTagKeySpecification;
function getTagSpecificationArrayFromTagEntity(tagEntity) {
    return Object.keys(tagEntity).reduce(function (result, key) {
        var keySpec = getTagKeySpecification(key);
        if (!lodash_1.isNil(keySpec)) {
            result.push(__assign(__assign({}, keySpec), { value: parseTagValueString(keySpec, tagEntity[key]) }));
        }
        return result;
    }, []);
}
exports.getTagSpecificationArrayFromTagEntity = getTagSpecificationArrayFromTagEntity;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

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
exports.BsnError = exports.BsnErrorType = void 0;
var BsnErrorType;
(function (BsnErrorType) {
    BsnErrorType[BsnErrorType["unknownError"] = 0] = "unknownError";
    BsnErrorType[BsnErrorType["unexpectedError"] = 1] = "unexpectedError";
    BsnErrorType[BsnErrorType["invalidUserPassword"] = 2] = "invalidUserPassword";
    BsnErrorType[BsnErrorType["noActiveNetwork"] = 3] = "noActiveNetwork";
    BsnErrorType[BsnErrorType["invalidParameters"] = 4] = "invalidParameters";
    BsnErrorType[BsnErrorType["imageDownsampleFailed"] = 5] = "imageDownsampleFailed";
    BsnErrorType[BsnErrorType["networkError"] = 6] = "networkError";
    BsnErrorType[BsnErrorType["requestError"] = 7] = "requestError";
    BsnErrorType[BsnErrorType["apiError"] = 8] = "apiError";
    BsnErrorType[BsnErrorType["serverError"] = 9] = "serverError";
    BsnErrorType[BsnErrorType["assetNotFoundError"] = 10] = "assetNotFoundError";
    BsnErrorType[BsnErrorType["webPageUploadError"] = 11] = "webPageUploadError";
    BsnErrorType[BsnErrorType["bDeployError"] = 12] = "bDeployError";
    BsnErrorType[BsnErrorType["permissionError"] = 13] = "permissionError";
    BsnErrorType[BsnErrorType["scopeError"] = 14] = "scopeError";
    BsnErrorType[BsnErrorType["invalidDataError"] = 15] = "invalidDataError";
    BsnErrorType[BsnErrorType["reActivationRequired"] = 16] = "reActivationRequired";
    BsnErrorType[BsnErrorType["originatingUserInvalid"] = 17] = "originatingUserInvalid";
    BsnErrorType[BsnErrorType["invalidTagRuleExpression"] = 18] = "invalidTagRuleExpression";
    BsnErrorType[BsnErrorType["indexServerError"] = 19] = "indexServerError";
    BsnErrorType[BsnErrorType["invalidGrantError"] = 20] = "invalidGrantError";
})(BsnErrorType = exports.BsnErrorType || (exports.BsnErrorType = {}));
var bsnErrorMessage = (_a = {},
    _a[BsnErrorType.unknownError] = 'Unknown error',
    _a[BsnErrorType.unexpectedError] = 'Unexpected error',
    _a[BsnErrorType.imageDownsampleFailed] = 'Failed to downsample the image',
    _a[BsnErrorType.invalidUserPassword] = 'Invalid user name or password',
    _a[BsnErrorType.noActiveNetwork] = 'A BSN network is not currently activated',
    _a[BsnErrorType.invalidParameters] = 'Invalid parameters',
    _a[BsnErrorType.networkError] = 'Network error',
    _a[BsnErrorType.requestError] = 'Request error',
    _a[BsnErrorType.apiError] = 'API error',
    _a[BsnErrorType.serverError] = 'Server error',
    _a[BsnErrorType.assetNotFoundError] = 'The requested asset could not be found',
    _a[BsnErrorType.webPageUploadError] = 'One or more file uploads for webPage failed',
    _a[BsnErrorType.bDeployError] = 'An error was encountered during a bDeploy operation',
    _a[BsnErrorType.permissionError] = 'User does not have permission for the requested operation',
    _a[BsnErrorType.scopeError] = 'The current BSN network does not allow the requested operation',
    _a[BsnErrorType.invalidDataError] = 'Invalid data returned',
    _a[BsnErrorType.reActivationRequired] = 'The user must re-authenticate',
    _a[BsnErrorType.originatingUserInvalid] = 'The user that originated the request is no longer valid',
    _a[BsnErrorType.invalidTagRuleExpression] = 'The tag rule expression is invalid',
    _a[BsnErrorType.indexServerError] = 'An error was encountered during an index server operation',
    _a[BsnErrorType.invalidGrantError] = 'Refresh token has expired',
    _a);
var BsnError = (function (_super) {
    __extends(BsnError, _super);
    function BsnError(type, reason) {
        var _this = _super.call(this) || this;
        _this.name = 'BsnError';
        _this.type = type;
        if (reason) {
            _this.message = bsnErrorMessage[type] + ': ' + reason;
        }
        else {
            _this.message = bsnErrorMessage[type];
        }
        Object.setPrototypeOf(_this, BsnError.prototype);
        return _this;
    }
    return BsnError;
}(Error));
exports.BsnError = BsnError;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("./bscore");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnAuthenticator = exports.getBsnAuthenticator = exports.configOAuthClient = exports.configBsnClient = void 0;
var form_urlencoded_1 = __webpack_require__(41);
var lodash_1 = __webpack_require__(3);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var configurator_1 = __webpack_require__(7);
var ClientId = 'BrightAuthor:Connect';
var ClientSecret = '6F8933A0-416E-43B7-8162-FBF3DCF6A512';
var refreshExpirationInterval = 300000;
var OauthClientId = '8ybX72Gt';
var OauthClientSecret = 'oJkARlw1-Ta2G-5WMo-gKJ3-5RxvHpaD5Ngk';
function configBsnClient(config) {
    ClientId = config.id;
    ClientSecret = config.secret;
}
exports.configBsnClient = configBsnClient;
function configOAuthClient(config) {
    OauthClientId = config.id;
    OauthClientSecret = config.secret;
    refreshExpirationInterval = config.refreshExpirationInterval;
}
exports.configOAuthClient = configOAuthClient;
var bsnIsTokenResponse = function (response) {
    return !lodash_1.isNil(response)
        && response.hasOwnProperty('token_type')
        && response.hasOwnProperty('access_token')
        && response.hasOwnProperty('refresh_token')
        && response.hasOwnProperty('scope');
};
var bsnIsPersonTokenResponse = function (response) {
    return response.hasOwnProperty('person');
};
var bsnIsUserTokenResponse = function (response) {
    return response.hasOwnProperty('user');
};
var authenticator;
exports.getBsnAuthenticator = function () {
    if (!authenticator) {
        authenticator = new BsnAuthenticator();
    }
    return authenticator;
};
var BsnAuthenticator = (function () {
    function BsnAuthenticator() {
        this._userName = '';
        this._networkName = '';
        this._currentUser = null;
        this._currentPerson = null;
        this._accessToken = '';
        this._refreshToken = '';
        this._accessTokenExpiration = new Date();
        this._status = common_1.BsnSessionStatus.invalidUserInfo;
        this._logLevel = common_1.BsnLogLevel.Error;
        this._logOptions = { logRequestBody: true, logResponseBody: true };
        this._checkAuthenticationPromise = null;
        this._scopeSet = new Set();
        this._passwordRefreshFunction = null;
    }
    BsnAuthenticator.reActivate = function () {
        if (lodash_1.isFunction(configurator_1.bsnClientFunctionForReactivate)) {
            return configurator_1.bsnClientFunctionForReactivate();
        }
        else {
            throw new error_1.BsnError(error_1.BsnErrorType.reActivationRequired);
        }
    };
    Object.defineProperty(BsnAuthenticator.prototype, "userName", {
        get: function () { return this._userName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "networkName", {
        get: function () { return this._networkName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "logLevel", {
        get: function () { return this._logLevel; },
        set: function (value) {
            if (this._logLevel !== value) {
                this._logLevel = value;
                console.warn('BsnSession: changing log level to:', common_1.BsnLogLevel[value]);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "logOptions", {
        get: function () { return this._logOptions; },
        set: function (opts) {
            var newOpts = {
                logRequestBody: !lodash_1.isNil(opts.logRequestBody) && opts.logRequestBody,
                logResponseBody: !lodash_1.isNil(opts.logResponseBody) && opts.logResponseBody,
            };
            if (newOpts.logRequestBody !== this._logOptions.logRequestBody) {
                console.warn('BsnSession: changing logRequestBody log option to:', newOpts.logRequestBody);
            }
            if (newOpts.logResponseBody !== this._logOptions.logResponseBody) {
                console.warn('BsnSession: changing logResponseBody log option to:', newOpts.logResponseBody);
            }
            this._logOptions = newOpts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "status", {
        get: function () { return this._status; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "personId", {
        get: function () {
            return lodash_1.isNil(this._currentPerson) ? 0 : this._currentPerson.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "personInfo", {
        get: function () {
            return lodash_1.isNil(this._currentPerson) ? null : this._currentPerson;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "userId", {
        get: function () {
            return lodash_1.isNil(this._currentUser) ? 0 : this._currentUser.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "roleId", {
        get: function () {
            return lodash_1.isNil(this._currentUser) ? 0 : this._currentUser.role.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "roleName", {
        get: function () {
            return lodash_1.isNil(this._currentUser) ? '' : this._currentUser.role.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "subscriptionLevel", {
        get: function () {
            return lodash_1.isNil(this._currentUser) ? null : this._currentUser.network.subscription.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "subscriptionInfo", {
        get: function () {
            return lodash_1.isNil(this._currentUser) ? null : this._currentUser.network.subscription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "userInfo", {
        get: function () {
            return lodash_1.isNil(this._currentUser) ? null : this._currentUser;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "oauthAccessToken", {
        get: function () { return this._accessToken; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "oauthRefreshToken", {
        get: function () { return this._refreshToken; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "oauthAccessTokenExpiration", {
        get: function () {
            return this._accessTokenExpiration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "isUserInfoValid", {
        get: function () {
            return this._userName.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i) !== null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "isNetworkSpecified", {
        get: function () {
            return this.isUserInfoValid && !lodash_1.isNil(this._networkName) && this._networkName.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "isUserActive", {
        get: function () {
            return this.isUserInfoValid
                && (this._status === common_1.BsnSessionStatus.networkActive || this._status === common_1.BsnSessionStatus.personActive);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "isNetworkActive", {
        get: function () {
            return this.isNetworkSpecified && this._status === common_1.BsnSessionStatus.networkActive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "commonHeaders", {
        get: function () {
            return new Headers({
                Authorization: 'Bearer ' + this._accessToken,
                'Accept-Encoding': 'gzip,deflate',
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "bDeployHeaders", {
        get: function () {
            return new Headers({
                Authorization: 'Bearer ' + this._accessToken,
                'Content-Type': 'application/json',
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "deviceLogHeaders", {
        get: function () {
            return new Headers({
                Authorization: 'Bearer ' + this._accessToken,
                'Content-Type': 'application/json',
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "requestHeaders", {
        get: function () {
            var headers = new Headers(this.commonHeaders);
            headers.set('Accept', 'application/json');
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "requestBinaryDataHeaders", {
        get: function () {
            var headers = new Headers(this.commonHeaders);
            headers.set('Accept', 'application/zip');
            headers.set('Content-Type', 'application/json');
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "requestHeadersForPostOrPut", {
        get: function () {
            var headers = new Headers(this.requestHeaders);
            headers.set('Content-Type', 'application/json');
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnAuthenticator.prototype, "requestHeadersForPostOrPutWithNotification", {
        get: function () {
            var headers = new Headers(this.requestHeaders);
            headers.set('Content-Type', 'application/json');
            headers.set('BSN-Notifications-Enabled', 'True');
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    BsnAuthenticator.prototype.getFetchInfo = function (networkRequired) {
        var info = {
            userName: this._userName,
            networkRequired: networkRequired,
        };
        if (networkRequired) {
            info.networkName = this._networkName;
        }
        return info;
    };
    BsnAuthenticator.prototype.setPasswordRefreshFunction = function (fn) {
        this._passwordRefreshFunction = fn;
    };
    BsnAuthenticator.prototype.activateWithRefreshOAuthToken = function (userName, networkName, refreshToken) {
        this.init(userName, '', networkName);
        var refreshRequest = {
            grant_type: 'refresh_token',
            client_id: OauthClientId,
            client_secret: OauthClientSecret,
            refresh_token: refreshToken,
            username: networkName + '/' + this._userName,
        };
        return this.doTokenRefresh(refreshRequest);
    };
    BsnAuthenticator.prototype.activate = function (userName, password, networkName, serverUrl) {
        var _this = this;
        this.init(userName, password, networkName, serverUrl);
        if (this._status === common_1.BsnSessionStatus.invalidUserInfo || !lodash_1.isString(password)) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidUserPassword));
        }
        var tokenRequest = {
            grant_type: 'password',
            client_id: OauthClientId,
            client_secret: OauthClientSecret,
            username: this._userName,
            password: password,
        };
        if (this.isNetworkSpecified) {
            tokenRequest.username = this._networkName + '/' + this._userName;
        }
        var body = form_urlencoded_1.default(tokenRequest);
        var request = new Request(common_1.BsnAuthUrl + 'Token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
            },
            body: body,
        });
        return fetch(request)
            .then(function (response) { return _this.logResponse(response, request, body); })
            .then(function (response) {
            if (!response.ok) {
                return response.json()
                    .catch(function () { return null; })
                    .then(function (json) {
                    if (!lodash_1.isNil(json) && response.status >= 400) {
                        _this.logJsonResponse(json, true);
                    }
                    if (response.status >= 400 && response.status < 500) {
                        _this._status = common_1.BsnSessionStatus.authenticationFailed;
                        throw new error_1.BsnError(error_1.BsnErrorType.invalidUserPassword);
                    }
                    else if (response.status > 500) {
                        _this._status = common_1.BsnSessionStatus.serverError;
                        throw new error_1.BsnError(error_1.BsnErrorType.serverError);
                    }
                    return null;
                });
            }
            return response;
        })
            .then(function (response) { return lodash_1.isNil(response) ? {} : _this.getJsonResponse(response); })
            .then(function (data) {
            _this.getAuthenticationData(data);
            if (_this._currentPerson === null) {
                return common_1.bsnFetch(common_1.BsnUrl + 'Self/');
            }
        })
            .then(function (response) {
            if (!lodash_1.isNil(response)) {
                return _this.getJsonResponse(response)
                    .then(function (personEntity) {
                    var id = personEntity.id, login = personEntity.login, firstName = personEntity.firstName, lastName = personEntity.lastName;
                    _this._currentPerson = { id: id, login: login, firstName: firstName, lastName: lastName, users: [] };
                })
                    .catch();
            }
        })
            .catch(function (error) {
            throw common_1.processBsnRequestError(error);
        });
    };
    BsnAuthenticator.prototype.refreshPasswordAndActivate = function () {
        if (!lodash_1.isNil(this._passwordRefreshFunction)) {
            var password = this._passwordRefreshFunction(this.getFetchInfo(this.isNetworkSpecified));
            return this.activate(this._userName, password, this._networkName);
        }
        return Promise.resolve();
    };
    BsnAuthenticator.prototype.deactivate = function () {
        this.init('', '', '');
    };
    BsnAuthenticator.prototype.openNetwork = function (networkName) {
        if (!lodash_1.isNil(networkName) && networkName.length && networkName !== this._networkName) {
            return this.refreshAuthentication(networkName);
        }
        return Promise.resolve();
    };
    BsnAuthenticator.prototype.checkAuthentication = function () {
        var _this = this;
        if (!(this._accessToken && this._refreshToken)) {
            if (!lodash_1.isNil(this._passwordRefreshFunction)) {
                var password = this._passwordRefreshFunction(this.getFetchInfo(this.isNetworkSpecified));
                return this.activate(this._userName, password, this._networkName);
            }
            throw new error_1.BsnError((error_1.BsnErrorType.invalidUserPassword));
        }
        else {
            var expiresIn = this._accessTokenExpiration.valueOf() - Date.now();
            if (expiresIn > refreshExpirationInterval) {
                return Promise.resolve();
            }
            else {
                if (!lodash_1.isNil(this._checkAuthenticationPromise)) {
                    return this._checkAuthenticationPromise;
                }
                this._checkAuthenticationPromise = this.refreshAuthentication()
                    .then(function () {
                    _this._checkAuthenticationPromise = null;
                })
                    .catch(function (error) {
                    _this._checkAuthenticationPromise = null;
                    throw error;
                });
                return this._checkAuthenticationPromise;
            }
        }
    };
    BsnAuthenticator.prototype.checkFetchInfo = function (fetchInfo) {
        if (fetchInfo.userName !== this._userName
            || (fetchInfo.networkRequired && fetchInfo.networkName !== this.networkName)) {
            throw new error_1.BsnError(error_1.BsnErrorType.originatingUserInvalid);
        }
    };
    BsnAuthenticator.prototype.checkNetwork = function (fetchInfo) {
        this.checkFetchInfo(fetchInfo);
        if (fetchInfo.networkRequired) {
            this.checkNetworkActive();
        }
    };
    BsnAuthenticator.prototype.checkNetworkActive = function () {
        if (!this.isNetworkActive) {
            throw new error_1.BsnError(error_1.BsnErrorType.noActiveNetwork);
        }
    };
    BsnAuthenticator.prototype.checkStatus = function (response, request, requestBody, fetchInfo) {
        var _this = this;
        if (!lodash_1.isNil(fetchInfo)) {
            this.checkFetchInfo(fetchInfo);
        }
        this.logResponse(response, request, requestBody);
        if (response.ok) {
            return Promise.resolve(response);
        }
        else {
            if (response.status === 400 || (response.status > 403 && response.status < 500)) {
                return response.json()
                    .catch(function () {
                    var error = new error_1.BsnError(error_1.BsnErrorType.apiError, response.statusText);
                    error.response = response;
                    throw error;
                })
                    .then(function (resp) {
                    _this.logJsonResponse(resp, true);
                    if (resp.error === 'invalid_grant' && lodash_1.isNil(resp.error_description)) {
                        var invalidGrantError = new error_1.BsnError(error_1.BsnErrorType.invalidGrantError);
                        throw invalidGrantError;
                    }
                    var error = new error_1.BsnError(error_1.BsnErrorType.apiError, resp.message);
                    error.response = response;
                    throw error;
                });
            }
            else if (response.status === 403) {
                var error = new error_1.BsnError(error_1.BsnErrorType.scopeError);
                error.response = response;
                throw error;
            }
            else {
                var errorType = response.status > 500 ? error_1.BsnErrorType.serverError : error_1.BsnErrorType.requestError;
                if (response.status === 401) {
                    this.tokenClearForAuthentication();
                }
                var error = new error_1.BsnError(errorType, response.statusText + ' (' + response.status + ')');
                error.response = response;
                throw error;
            }
        }
    };
    BsnAuthenticator.prototype.logResponse = function (response, request, requestBody) {
        var _this = this;
        var getDisplayableHeaders = function (headers) {
            if (!lodash_1.isNil(headers)) {
                var result_1 = {};
                headers.forEach(function (value, key) {
                    if (key !== 'authorization') {
                        result_1[key] = value;
                    }
                });
                return result_1;
            }
            return null;
        };
        var getResponseDisplayLine = function () {
            var result = lodash_1.pick(response, ['status', 'statusText']);
            result.headers = getDisplayableHeaders(response.headers);
            return JSON.stringify(result);
        };
        var getRequestDisplayLine = function () {
            var result = lodash_1.pick(request, ['method', 'url']);
            result.headers = getDisplayableHeaders(request.headers);
            return JSON.stringify(result);
        };
        var doLogResponse = function (logFunc) {
            if (!lodash_1.isNil(request)) {
                logFunc('Request:');
                logFunc(getRequestDisplayLine());
                if (lodash_1.isString(requestBody) && _this._logOptions.logRequestBody) {
                    logFunc('Request body:');
                    if (request.method === 'POST' && request.url.endsWith('Token')) {
                        logFunc(requestBody.replace(/password=.*$/, 'password=***'));
                    }
                    else {
                        logFunc(requestBody);
                    }
                }
            }
            logFunc('Response:');
            logFunc(getResponseDisplayLine());
        };
        if (response.ok) {
            if (this._logLevel >= common_1.BsnLogLevel.Info) {
                console.log('*** BsnConnector - API call ***');
                doLogResponse(console.log);
            }
        }
        else if (this._logLevel >= common_1.BsnLogLevel.Error) {
            console.error('*** BsnConnector - error from API call ***');
            doLogResponse(console.error);
        }
        return response;
    };
    BsnAuthenticator.prototype.getJsonResponse = function (response) {
        var _this = this;
        return response.json()
            .then(function (json) {
            _this.logJsonResponse(json);
            return json;
        });
    };
    BsnAuthenticator.prototype.logJsonResponse = function (json, error) {
        if (error === void 0) { error = false; }
        if (this._logOptions.logResponseBody
            && ((error && this._logLevel >= common_1.BsnLogLevel.Error) || this._logLevel === common_1.BsnLogLevel.Info)) {
            var logFunc = error ? console.error : console.log;
            logFunc('Response body:');
            logFunc(JSON.stringify(json));
        }
    };
    BsnAuthenticator.prototype.getTextResponse = function (response) {
        var _this = this;
        return response.text()
            .then(function (text) {
            _this.logTextResponse(text);
            return text;
        });
    };
    BsnAuthenticator.prototype.logTextResponse = function (text, error) {
        if (error === void 0) { error = false; }
        if (this._logOptions.logResponseBody
            && ((error && this._logLevel >= common_1.BsnLogLevel.Error) || this._logLevel === common_1.BsnLogLevel.Info)) {
            var logFunc = error ? console.error : console.log;
            logFunc('Response body:');
            logFunc(text);
        }
    };
    BsnAuthenticator.prototype.hasScope = function (scope) {
        if (this._scopeSet.size > 0) {
            var reScopePath = /(.*)\.(\w*)/;
            var testScope = scope.toLowerCase();
            while (testScope.length) {
                if (this._scopeSet.has(testScope)) {
                    return true;
                }
                var reResult = reScopePath.exec(testScope);
                testScope = lodash_1.isNil(reResult) ? '' : reResult[1];
            }
        }
        return false;
    };
    BsnAuthenticator.prototype.validateActivationCode = function (token, activationCode) {
        var _this = this;
        var request = new Request(common_1.getBdeployUrl() + '/rest-device/v2/validate-activation-code?code=' + activationCode, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return fetch(request)
            .then(function (response) { return _this.logResponse(response, request); })
            .then(function (response) {
            if (response && response.ok) {
                return response.json();
            }
            else {
                var errorType = response.status > 500 ? error_1.BsnErrorType.serverError : error_1.BsnErrorType.requestError;
                throw new error_1.BsnError(errorType, response.statusText + ' (' + response.status + ')');
            }
        })
            .catch(function (error) {
            throw common_1.processBsnRequestError(error);
        });
    };
    BsnAuthenticator.prototype.deleteActivationCode = function (token, activationCode) {
        var _this = this;
        var request = new Request(common_1.getBdeployUrl() + '/rest-device/v2/activation-code?code=' + activationCode, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return fetch(request)
            .then(function (response) { return _this.logResponse(response, request); })
            .then(function (response) {
            if (response && response.ok) {
                return response.json();
            }
            else {
                var errorType = response.status > 500 ? error_1.BsnErrorType.serverError : error_1.BsnErrorType.requestError;
                throw new error_1.BsnError(errorType, response.statusText + ' (' + response.status + ')');
            }
        })
            .catch(function (error) {
            throw common_1.processBsnRequestError(error);
        });
    };
    BsnAuthenticator.prototype.setupTestExpiredToken = function () {
        this.init('user@company.com', 'password', 'myNetwork');
        this._accessToken = '1Z5GqJ4GkojvRHoBH4Bn913I';
        this._refreshToken = '62ae9ddd54cc493593e9905125080b4b';
        this._accessTokenExpiration = new Date(new Date().getTime() - (2 * refreshExpirationInterval));
        this._status = common_1.BsnSessionStatus.networkActive;
        this._logLevel = common_1.BsnLogLevel.None;
    };
    BsnAuthenticator.prototype.modifyRefreshTokenToExpired = function () {
        this._accessToken = '1Z5GqJ4GkojvRHoBH4Bn913I';
        this._refreshToken = '62ae9ddd54cc493593e9905125080b4b';
        this._accessTokenExpiration = new Date(new Date().getTime() - (2 * refreshExpirationInterval));
    };
    BsnAuthenticator.prototype.modifyAccessTokenToExpired = function () {
        this._accessToken = '1Z5GqJ4GkojvRHoBH4Bn913I';
        this._accessTokenExpiration = new Date(new Date().getTime() - (2 * refreshExpirationInterval));
    };
    BsnAuthenticator.prototype.init = function (userName, password, networkName, serverUrl) {
        if (serverUrl) {
            common_1.setServerUrl(serverUrl);
        }
        this._userName = userName;
        this._networkName = lodash_1.isNil(networkName) ? '' : networkName;
        this._currentUser = null;
        this._currentPerson = null;
        this._accessToken = '';
        this._refreshToken = '';
        this._scopeSet = new Set();
        this._accessTokenExpiration = new Date();
        if (!this.isUserInfoValid) {
            this._status = common_1.BsnSessionStatus.invalidUserInfo;
        }
        else if (!this.isNetworkSpecified) {
            this._status = common_1.BsnSessionStatus.userInfoValidNoNetwork;
        }
        else {
            this._status = common_1.BsnSessionStatus.waitingForAuthentication;
        }
    };
    BsnAuthenticator.prototype.refreshAuthentication = function (networkName) {
        var refreshRequest = {
            grant_type: 'refresh_token',
            client_id: OauthClientId,
            client_secret: OauthClientSecret,
            refresh_token: this._refreshToken,
        };
        if (!lodash_1.isNil(networkName) && networkName.length && networkName !== this._networkName) {
            this._networkName = networkName;
            refreshRequest.username = networkName + '/' + this._userName;
        }
        return this.doTokenRefresh(refreshRequest);
    };
    BsnAuthenticator.prototype.doTokenRefresh = function (refreshRequest) {
        var _this = this;
        var body = form_urlencoded_1.default(refreshRequest);
        var request = new Request(common_1.BsnAuthUrl + 'Token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
            },
            body: body,
        });
        return fetch(request)
            .then(function (response) { return _this.checkStatus(response, request, body); })
            .then(function (response) { return _this.getJsonResponse(response); })
            .then(function (data) {
            _this.getAuthenticationData(data);
            if (_this._currentPerson === null) {
                return common_1.bsnFetch(common_1.BsnUrl + 'Self/');
            }
        })
            .then(function (response) {
            if (!lodash_1.isNil(response)) {
                return _this.getJsonResponse(response)
                    .then(function (personEntity) {
                    var id = personEntity.id, login = personEntity.login, firstName = personEntity.firstName, lastName = personEntity.lastName;
                    _this._currentPerson = { id: id, login: login, firstName: firstName, lastName: lastName, users: [] };
                    _this._checkAuthenticationPromise = null;
                })
                    .catch(_this._checkAuthenticationPromise = null);
            }
            else {
                _this._checkAuthenticationPromise = null;
            }
        })
            .catch(function (error) {
            var bsnError = common_1.processBsnRequestError(error);
            if (_this._status === common_1.BsnSessionStatus.waitingForAuthentication) {
                return BsnAuthenticator.reActivate();
            }
            else {
                throw bsnError;
            }
        });
    };
    BsnAuthenticator.prototype.getAuthenticationData = function (data) {
        if (bsnIsTokenResponse(data)) {
            this._accessToken = data.access_token;
            this._refreshToken = data.refresh_token;
            this._accessTokenExpiration = new Date(data['.expires']);
            this._scopeSet = new Set(data.scope.split(' '));
            if (bsnIsUserTokenResponse(data)) {
                this._currentUser = data.user;
                this._currentPerson = null;
                this._status = common_1.BsnSessionStatus.networkActive;
            }
            else if (bsnIsPersonTokenResponse(data)) {
                this._currentUser = null;
                this._currentPerson = data.person;
                this._status = common_1.BsnSessionStatus.personActive;
            }
        }
    };
    BsnAuthenticator.prototype.tokenClearForAuthentication = function () {
        this._accessToken = undefined;
        this._refreshToken = undefined;
        this._currentUser = null;
        this._currentPerson = null;
        this._status = common_1.BsnSessionStatus.waitingForAuthentication;
    };
    return BsnAuthenticator;
}());
exports.BsnAuthenticator = BsnAuthenticator;


/***/ }),
/* 5 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bsnParseTagOrderExpression = exports.bsnParseTagRuleExpression = exports.BsnParsedFilterType = exports.BsnTagFilter = exports.BsnFilter = exports.bsnCreateTagFilter = exports.bsnCreateFilter = void 0;
var bscore_1 = __webpack_require__(2);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(3);
function bsnCreateFilter() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    if (params.length > 0) {
        if (bscore_1.bscIsBsnFilterSpecification(params[0])) {
            return new BsnFilter(params[0]);
        }
        else {
            var combineType = params.length > 1 ? params[1] : bscore_1.BsnFilterCombineType.All;
            return new BsnFilter(bscore_1.bscCreateBsnFilterSpecification(params[0], combineType));
        }
    }
    return new BsnFilter(null);
}
exports.bsnCreateFilter = bsnCreateFilter;
function bsnCreateTagFilter(spec, virtualPath) {
    return new BsnTagFilter(spec, virtualPath);
}
exports.bsnCreateTagFilter = bsnCreateTagFilter;
var adjustFilterStringValue = function (str) {
    if (str.indexOf('\'') >= 0) {
        return str.replace(/\'/, '\'\'');
    }
    return str;
};
var buildFilterComponentExpression = function (component, isTagName) {
    if (component.params.length > 0) {
        var valueString = void 0;
        var propertyString = isTagName ?
            '<' + component.property + '>' :
            '[' + component.property.replace(/\./, '].[') + ']';
        if (component.type === bscore_1.BsnFilterType.string
            || component.type === bscore_1.BsnFilterType.stringArray
            || component.type === bscore_1.BsnFilterType.enum
            || component.type === bscore_1.BsnFilterType.boolean) {
            var valueArray = component.params.map(adjustFilterStringValue);
            switch (component.operator) {
                case bscore_1.BsnStringFilterOperator.Is:
                case bscore_1.BsnStringFilterOperator.IsNot:
                case bscore_1.BsnStringFilterOperator.BeginsWith:
                case bscore_1.BsnStringFilterOperator.EndsWith:
                case bscore_1.BsnStringFilterOperator.Contains:
                case bscore_1.BsnStringFilterOperator.DoesNotContain:
                    valueString = "'" + valueArray[0] + "'";
                    break;
                case bscore_1.BsnStringFilterOperator.ContainsAll:
                case bscore_1.BsnStringFilterOperator.ContainsAny:
                case bscore_1.BsnStringFilterOperator.IsIn:
                case bscore_1.BsnStringFilterOperator.IsNotIn:
                    valueString = "('" + valueArray.join("','") + "')";
                    break;
                default:
                    return '';
            }
            return propertyString + ' ' + component.operator + ' ' + valueString;
        }
        else if (component.type === bscore_1.BsnFilterType.number) {
            switch (component.operator) {
                case bscore_1.BsnNumberFilterOperator.Is:
                case bscore_1.BsnNumberFilterOperator.IsNot:
                case bscore_1.BsnNumberFilterOperator.IsGreaterThan:
                case bscore_1.BsnNumberFilterOperator.IsLessThan:
                    valueString = '' + component.params[0];
                    break;
                case bscore_1.BsnNumberFilterOperator.IsInTheRange:
                case bscore_1.BsnNumberFilterOperator.IsNotInTheRange:
                    valueString = component.params[0] + ' AND '
                        + (component.params[1] ? component.params[1] : component.params[0]);
                    break;
                case bscore_1.BsnNumberFilterOperator.IsIn:
                case bscore_1.BsnNumberFilterOperator.IsNotIn:
                    valueString = '(' + component.params.join(',') + ')';
                    break;
                default:
                    return '';
            }
        }
        else if (component.type === bscore_1.BsnFilterType.dateTime) {
            switch (component.operator) {
                case bscore_1.BsnDateFilterOperator.Is:
                case bscore_1.BsnDateFilterOperator.IsNot:
                case bscore_1.BsnDateFilterOperator.IsAfter:
                case bscore_1.BsnDateFilterOperator.IsBefore:
                    valueString = "'" + component.params[0].toISOString() + "'";
                    break;
                case bscore_1.BsnDateFilterOperator.InTheLast:
                case bscore_1.BsnDateFilterOperator.NotInTheLast:
                    var timeSpan = component.params;
                    valueString = "(" + timeSpan.units + ", " + timeSpan.length + ", '" + timeSpan.dateTime.toISOString() + "')";
                    break;
                case bscore_1.BsnDateFilterOperator.IsInTheRange:
                case bscore_1.BsnDateFilterOperator.IsNotInTheRange:
                    valueString = "'" + component.params[0].toISOString() + "' AND '" + component.params[1].toISOString() + "'";
                    break;
                case bscore_1.BsnDateFilterOperator.IsIn:
                case bscore_1.BsnDateFilterOperator.IsNotIn:
                    var dateStrArray = component.params.map(function (dt) { return dt.toISOString(); });
                    valueString = "('" + dateStrArray.join('\', \'') + "')";
                    break;
            }
        }
        else if (component.type === bscore_1.BsnFilterType.numericArray) {
            switch (component.operator) {
                case bscore_1.BsnArrayFilterOperator.Contains:
                    valueString = '' + component.params[0];
                    break;
                case bscore_1.BsnStringFilterOperator.ContainsAll:
                case bscore_1.BsnStringFilterOperator.ContainsAny:
                    valueString = '(' + component.params.join(',') + ')';
                    break;
                default:
                    return '';
            }
        }
        return propertyString + ' ' + component.operator + ' ' + valueString;
    }
    return '';
};
var buildPropertyFilterComponentExpression = function (component) {
    return buildFilterComponentExpression(component, false);
};
var buildTagFilterComponentExpression = function (component) {
    return buildFilterComponentExpression(component, true);
};
var BsnFilter = (function () {
    function BsnFilter(spec) {
        this._filterExpression = '';
        this.getFilterSpecString(spec);
    }
    Object.defineProperty(BsnFilter.prototype, "filterExpression", {
        get: function () { return this._filterExpression; },
        enumerable: false,
        configurable: true
    });
    BsnFilter.prototype.getFilterSpecString = function (spec) {
        if (!lodash_1.isNil(spec)) {
            if (spec.components.length > 1) {
                var filterExprs = spec.components.map(buildPropertyFilterComponentExpression);
                this._filterExpression = filterExprs.join(' ' + spec.combineType + ' ');
            }
            else if (spec.components.length === 1) {
                this._filterExpression = buildPropertyFilterComponentExpression(spec.components[0]);
            }
        }
        else {
            this._filterExpression = '';
        }
    };
    return BsnFilter;
}());
exports.BsnFilter = BsnFilter;
var BsnTagFilter = (function (_super) {
    __extends(BsnTagFilter, _super);
    function BsnTagFilter(spec, virtualPath) {
        var _this = _super.call(this, spec) || this;
        _this._ruleExpression = '';
        _this._ruleExpression = _this._filterExpression;
        var virtualPathComponent = bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'virtualPath', bscore_1.BsnStringFilterOperator.Is, common_1.standardPathToBsnVirtualPathForQueryString(virtualPath) + '*');
        var virtualPathString = buildPropertyFilterComponentExpression(virtualPathComponent);
        var multipleComponents = spec.components.length > 1;
        var pc1 = multipleComponents ? ' AND (' : ' AND ';
        var pc2 = multipleComponents ? ')' : '';
        _this._filterExpression = lodash_1.isEmpty(_this._ruleExpression)
            ? virtualPathString
            : virtualPathString + pc1 + _this._ruleExpression + pc2;
        return _this;
    }
    Object.defineProperty(BsnTagFilter.prototype, "ruleExpression", {
        get: function () { return this._ruleExpression; },
        enumerable: false,
        configurable: true
    });
    BsnTagFilter.prototype.getFilterSpecString = function (spec) {
        if (!lodash_1.isNil(spec)) {
            if (spec.components.length > 1) {
                var filterExprs = spec.components.map(buildTagFilterComponentExpression);
                this._filterExpression = filterExprs.join(' ' + spec.combineType + ' ');
            }
            else if (spec.components.length === 1) {
                this._filterExpression = buildTagFilterComponentExpression(spec.components[0]);
            }
        }
        else {
            this._filterExpression = '';
        }
    };
    return BsnTagFilter;
}(BsnFilter));
exports.BsnTagFilter = BsnTagFilter;
var TagStringOperators = new Set([
    bscore_1.BsnStringFilterOperator.BeginsWith, bscore_1.BsnStringFilterOperator.EndsWith,
    bscore_1.BsnStringFilterOperator.DoesNotContain,
]);
var TagNumberOperators = new Set([
    bscore_1.BsnNumberFilterOperator.IsGreaterThan, bscore_1.BsnNumberFilterOperator.IsLessThan,
]);
var TagDateTimeOperators = new Set([
    bscore_1.BsnDateFilterOperator.IsAfter, bscore_1.BsnDateFilterOperator.IsBefore,
    bscore_1.BsnDateFilterOperator.InTheLast, bscore_1.BsnDateFilterOperator.NotInTheLast,
]);
var TagArrayOperators = new Set([
    bscore_1.BsnArrayFilterOperator.Contains,
    bscore_1.BsnArrayFilterOperator.ContainsAll, bscore_1.BsnArrayFilterOperator.ContainsAny,
]);
function getTagFilterTypeFromOperator(operator) {
    if (TagStringOperators.has(operator)) {
        return bscore_1.BsnFilterType.string;
    }
    else if (TagNumberOperators.has(operator)) {
        return bscore_1.BsnFilterType.number;
    }
    else if (TagDateTimeOperators.has(operator)) {
        return bscore_1.BsnFilterType.dateTime;
    }
    return null;
}
function stripQuotes(str) {
    var len = str.length;
    if (len > 2) {
        var start = str[0] === '\'' || str[0] === '"' ? 1 : 0;
        var end = str[len - 1] === '\'' || str[len - 1] === '"' ? len - 1 : len;
        return str.substring(start, end).replace(/''/, '\'');
    }
    return str;
}
var tagNameRe = /\s*<([\w. ]+)>\s*/;
var opWordRe = /\s*(\w+)\s*/;
var quoteValRe = /'([^']*)'\s*/;
var parenValRe = /\(([^)]*)\)\s*/;
var numValRe = /([\d.]*)\s*/;
var isoDateRe = /\d*-\d*-\d*T\d*:\d*:\d*(\.\d+)?Z?/;
var andValExprRe = /\s*AND\s+'*([\d-:.TZ]+)'*\s*/;
var combineRe = /\s*(AND|OR)\s*/;
var startValueCharArray = ['\'', '(', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var BsnParsedFilterType = (function (_super) {
    __extends(BsnParsedFilterType, _super);
    function BsnParsedFilterType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BsnParsedFilterType.stringOrStringArray = 'stringOrStringArray';
    return BsnParsedFilterType;
}(bscore_1.BsnFilterType));
exports.BsnParsedFilterType = BsnParsedFilterType;
function bsnParseTagRuleExpression(ruleExpr) {
    var components = [];
    var combineType = bscore_1.BsnFilterCombineType.All;
    if (lodash_1.isString(ruleExpr) && ruleExpr.length > 0) {
        var checkRE = function (reResult) {
            if (lodash_1.isNil(reResult)) {
                throw (new error_1.BsnError(error_1.BsnErrorType.invalidTagRuleExpression, 'Expression: ' + ruleExpr));
            }
            return reResult;
        };
        var str = ruleExpr;
        while (str.length > 0) {
            var comp = {
                type: BsnParsedFilterType.string,
                property: '',
                operator: bscore_1.BsnStringFilterOperator.Is,
                params: [],
            };
            var result = tagNameRe.exec(str);
            if (checkRE(result)) {
                comp.property = result[1];
            }
            var opStr = '';
            var sep = '';
            while (true) {
                str = str.substring(result[0].length);
                if (str.length === 0 || startValueCharArray.indexOf(str[0]) >= 0) {
                    break;
                }
                else {
                    result = opWordRe.exec(str);
                    if (checkRE(result)) {
                        opStr += sep + result[1];
                        sep = ' ';
                    }
                }
            }
            comp.operator = opStr;
            comp.type = getTagFilterTypeFromOperator(opStr);
            var valStr = '';
            result = null;
            if (str[0] === '\'') {
                result = quoteValRe.exec(str);
                if (checkRE(result)) {
                    valStr = result[1];
                    str = str.substring(result[0].length);
                    while (str[0] === '\'') {
                        result = quoteValRe.exec(str);
                        if (checkRE(result)) {
                            valStr += '\'' + result[1];
                            str = str.substring(result[0].length);
                        }
                    }
                }
                var ucValStr = valStr.toUpperCase();
                comp.params = [valStr];
                if (lodash_1.isNil(comp.type)) {
                    if (comp.operator === 'IS' && (ucValStr === 'TRUE' || ucValStr === 'FALSE')) {
                        comp.type = BsnParsedFilterType.boolean;
                    }
                    else if (valStr.trim().match(isoDateRe)) {
                        comp.params = [common_1.getDateFromBsnDateString(valStr)];
                        comp.type = BsnParsedFilterType.dateTime;
                    }
                    else {
                        if (comp.operator === bscore_1.BsnStringFilterOperator.Contains) {
                            comp.type = BsnParsedFilterType.stringOrStringArray;
                        }
                        else {
                            comp.type = BsnParsedFilterType.string;
                        }
                    }
                }
                if (comp.type === BsnParsedFilterType.dateTime
                    && (comp.operator === bscore_1.BsnDateFilterOperator.IsInTheRange
                        || comp.operator === bscore_1.BsnDateFilterOperator.IsNotInTheRange)) {
                    result = andValExprRe.exec(str);
                    if (checkRE(result)) {
                        comp.params.push(common_1.getDateFromBsnDateString(result[1]));
                        str = str.substring(result[0].length);
                    }
                }
            }
            else if (str[0] === '(') {
                result = parenValRe.exec(str);
                if (checkRE(result)) {
                    str = str.substring(result[0].length);
                    var elements = result[1].split(',').map(function (elStr) { return elStr.trim(); });
                    if (comp.operator === bscore_1.BsnDateFilterOperator.InTheLast
                        || comp.operator === bscore_1.BsnDateFilterOperator.NotInTheLast) {
                        comp.params = {
                            units: elements[0],
                            length: Number(elements[1]),
                            dateTime: common_1.getDateFromBsnDateString(stripQuotes(elements[2])),
                        };
                    }
                    else {
                        var elementsAreStrings = elements[0].charAt(0) === '\'';
                        if (elementsAreStrings) {
                            elements = elements.map(stripQuotes);
                        }
                        if (lodash_1.isNil(comp.type)) {
                            if (elementsAreStrings) {
                                if (elements.some(function (el) { return !el.match(isoDateRe); })) {
                                    if (TagArrayOperators.has(comp.operator)) {
                                        comp.type = BsnParsedFilterType.stringOrStringArray;
                                    }
                                    else {
                                        comp.type = BsnParsedFilterType.string;
                                    }
                                }
                                else {
                                    comp.type = BsnParsedFilterType.dateTime;
                                }
                            }
                            else {
                                if (TagArrayOperators.has(comp.operator)) {
                                    comp.type = BsnParsedFilterType.numericArray;
                                }
                                else {
                                    comp.type = BsnParsedFilterType.number;
                                }
                            }
                        }
                        if (comp.type === BsnParsedFilterType.dateTime) {
                            comp.params = elements.map(function (elStr) { return common_1.getDateFromBsnDateString(elStr); });
                        }
                        else if (comp.type === BsnParsedFilterType.number || comp.type === BsnParsedFilterType.numericArray) {
                            comp.params = elements.map(function (elStr) { return Number(elStr); });
                        }
                        else {
                            comp.params = elements;
                        }
                    }
                }
            }
            else {
                result = numValRe.exec(str);
                if (checkRE(result)) {
                    str = str.substring(result[0].length);
                    comp.params = [Number(result[1])];
                    if (comp.operator === bscore_1.BsnArrayFilterOperator.Contains) {
                        comp.type = BsnParsedFilterType.numericArray;
                    }
                    else {
                        comp.type = BsnParsedFilterType.number;
                        if (comp.operator === bscore_1.BsnDateFilterOperator.IsInTheRange
                            || comp.operator === bscore_1.BsnDateFilterOperator.IsNotInTheRange) {
                            result = andValExprRe.exec(str);
                            if (checkRE(result)) {
                                comp.params.push(Number(result[1]));
                                str = str.substring(result[0].length);
                            }
                        }
                    }
                }
            }
            components.push(comp);
            if (str.length > 0) {
                result = combineRe.exec(str);
                if (!lodash_1.isNil(result)) {
                    combineType = result[1];
                    str = str.substring(result[0].length);
                }
                else {
                    str = '';
                }
            }
        }
    }
    return { components: components, combineType: combineType };
}
exports.bsnParseTagRuleExpression = bsnParseTagRuleExpression;
function bsnParseTagOrderExpression(tagOrderExpr) {
    var tagSortSpec = bscore_1.bscCreateTagSortSpecification();
    var tagOrderRe = /\s*<([\w.]+)>\s*(ASC|DESC)/;
    var result = tagOrderRe.exec(tagOrderExpr);
    if (!lodash_1.isNil(result)) {
        if (!lodash_1.isNil(result[2])) {
            tagSortSpec.sortDescending = result[2] === 'DESC';
        }
        if (!lodash_1.isNil(result[1])) {
            tagSortSpec.sortTagName = result[1];
        }
    }
    return tagSortSpec;
}
exports.bsnParseTagOrderExpression = bsnParseTagOrderExpression;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsneDeviceLogSortField = exports.bsnGetRequiredScopeForOperation = exports.BsnOperationAction = exports.BsnBusinessOperationType = exports.BsnPermissionPrincipalType = exports.BsnNetworkSubscriptionLevel = exports.BsnNetworkStatus = exports.BsnUserStatus = exports.BsnDeviceField = exports.BsnContentCheckPeriod = exports.BsnDeviceSetupType = exports.BsnDeviceSubscriptionStatus = exports.BsnDeviceSubscriptionType = exports.BsnDeviceHealthStatus = exports.BsnPluginSortField = exports.BsnHtmlSiteSortField = exports.bsnGetTaggedPlaylistOrderTagString = exports.BsnDataFeedSortField = exports.bsnColorToBsColor = exports.bsColorToBsnColor = exports.BsnPresentationSortField = exports.BsnPresentationReferenceTypeField = exports.bsnAssetItemToBsnPresentationFileType = exports.bsnPresentationFileEntityToFileTypeInfo = exports.BsnPresentationFileType = exports.BsnContentSortField = exports.bsnIsFileContentEntity = exports.bsnIsFolderContentEntity = void 0;
var bscore_1 = __webpack_require__(2);
var lodash_1 = __webpack_require__(3);
var BsnFolderMediaTypeString = 'Folder';
function bsnIsFolderContentEntity(item) {
    return item.mediaType && item.mediaType === BsnFolderMediaTypeString;
}
exports.bsnIsFolderContentEntity = bsnIsFolderContentEntity;
function bsnIsFileContentEntity(item) {
    return item.mediaType && item.mediaType !== BsnFolderMediaTypeString;
}
exports.bsnIsFileContentEntity = bsnIsFileContentEntity;
var BsnContentSortField;
(function (BsnContentSortField) {
    BsnContentSortField["name"] = "fileName";
    BsnContentSortField["mediaType"] = "mediaType";
    BsnContentSortField["fileSize"] = "fileSize";
    BsnContentSortField["uploadDate"] = "uploadDate";
    BsnContentSortField["lastModifiedDate"] = "fileLastModifiedDate";
})(BsnContentSortField = exports.BsnContentSortField || (exports.BsnContentSortField = {}));
var BsnPresentationFileType;
(function (BsnPresentationFileType) {
    BsnPresentationFileType["New"] = "New";
    BsnPresentationFileType["Stored"] = "Stored";
    BsnPresentationFileType["Media"] = "Media";
    BsnPresentationFileType["LiveTextFeed"] = "LiveTextFeed";
    BsnPresentationFileType["LiveMediaFeed"] = "LiveMediaFeed";
    BsnPresentationFileType["DynamicPlaylist"] = "DynamicPlaylist";
    BsnPresentationFileType["TaggedPlaylist"] = "TaggedPlaylist";
    BsnPresentationFileType["WebPage"] = "WebPage";
    BsnPresentationFileType["DeviceWebPage"] = "DeviceWebPage";
    BsnPresentationFileType["Remote"] = "Remote";
})(BsnPresentationFileType = exports.BsnPresentationFileType || (exports.BsnPresentationFileType = {}));
function bsnPresentationFileEntityToFileTypeInfo(pf) {
    var typeInfo = {
        assetType: bscore_1.AssetType.Content,
    };
    switch (pf.type) {
        case BsnPresentationFileType.Media:
            typeInfo.assetType = bscore_1.AssetType.Content;
            break;
        case BsnPresentationFileType.WebPage:
            typeInfo.assetType = bscore_1.AssetType.HtmlSite;
            break;
        case BsnPresentationFileType.LiveTextFeed:
            typeInfo.assetType = bscore_1.AssetType.BSNDataFeed;
            break;
        case BsnPresentationFileType.LiveMediaFeed:
            typeInfo.assetType = bscore_1.AssetType.BSNMediaFeed;
            break;
        case BsnPresentationFileType.DynamicPlaylist:
            typeInfo.assetType = bscore_1.AssetType.BSNDynamicPlaylist;
            break;
        case BsnPresentationFileType.TaggedPlaylist:
            typeInfo.assetType = bscore_1.AssetType.BSNTaggedPlaylist;
            break;
        case BsnPresentationFileType.Stored:
            typeInfo = bscore_1.bscGetBscFileTypeInfo(pf.name);
            break;
    }
    return typeInfo;
}
exports.bsnPresentationFileEntityToFileTypeInfo = bsnPresentationFileEntityToFileTypeInfo;
function bsnAssetItemToBsnPresentationFileType(assetItem) {
    switch (assetItem.assetType) {
        case bscore_1.AssetType.Content:
            if (lodash_1.isNil(assetItem.mediaType) || bscore_1.bscIsMediaTypePlayable(assetItem.mediaType)) {
                return BsnPresentationFileType.Media;
            }
            break;
        case bscore_1.AssetType.HtmlSite: return BsnPresentationFileType.WebPage;
        case bscore_1.AssetType.BSNDataFeed: return BsnPresentationFileType.LiveTextFeed;
        case bscore_1.AssetType.BSNMediaFeed: return BsnPresentationFileType.LiveMediaFeed;
        case bscore_1.AssetType.BSNDynamicPlaylist: return BsnPresentationFileType.DynamicPlaylist;
        case bscore_1.AssetType.BSNTaggedPlaylist: return BsnPresentationFileType.TaggedPlaylist;
        case bscore_1.AssetType.BrightScript: return BsnPresentationFileType.Stored;
    }
    return BsnPresentationFileType.Stored;
}
exports.bsnAssetItemToBsnPresentationFileType = bsnAssetItemToBsnPresentationFileType;
var BsnPresentationReferenceTypeField;
(function (BsnPresentationReferenceTypeField) {
    BsnPresentationReferenceTypeField["Presentation"] = "Presentation";
    BsnPresentationReferenceTypeField["BrightWallPresentation"] = "BrightWallPresentation";
})(BsnPresentationReferenceTypeField = exports.BsnPresentationReferenceTypeField || (exports.BsnPresentationReferenceTypeField = {}));
var BsnPresentationSortField;
(function (BsnPresentationSortField) {
    BsnPresentationSortField["name"] = "name";
    BsnPresentationSortField["type"] = "type";
    BsnPresentationSortField["status"] = "status";
    BsnPresentationSortField["creationDate"] = "creationDate";
    BsnPresentationSortField["lastModifiedDate"] = "lastModifiedDate";
})(BsnPresentationSortField = exports.BsnPresentationSortField || (exports.BsnPresentationSortField = {}));
exports.bsColorToBsnColor = function (color) {
    return 'RGB:'
        + ('00' + color.r.toString(16)).slice(-2).toUpperCase()
        + ('00' + color.g.toString(16)).slice(-2).toUpperCase()
        + ('00' + color.b.toString(16)).slice(-2).toUpperCase();
};
exports.bsnColorToBsColor = function (color) {
    return {
        a: 255,
        r: parseInt(color.slice(4, 6), 16),
        g: parseInt(color.slice(6, 8), 16),
        b: parseInt(color.slice(8, 10), 16),
    };
};
var BsnDataFeedSortField;
(function (BsnDataFeedSortField) {
    BsnDataFeedSortField["name"] = "name";
    BsnDataFeedSortField["fileSize"] = "fileSize";
    BsnDataFeedSortField["creationDate"] = "creationDate";
    BsnDataFeedSortField["lastModifiedDate"] = "lastModifiedDate";
})(BsnDataFeedSortField = exports.BsnDataFeedSortField || (exports.BsnDataFeedSortField = {}));
function bsnGetTaggedPlaylistOrderTagString(spec) {
    return (lodash_1.isNil(spec.sortTagName) ? '<FileName> ' : '<' + spec.sortTagName + '> ')
        + (!lodash_1.isNil(spec.sortDescending) && spec.sortDescending === true ? 'DESC' : 'ASC');
}
exports.bsnGetTaggedPlaylistOrderTagString = bsnGetTaggedPlaylistOrderTagString;
var BsnHtmlSiteSortField;
(function (BsnHtmlSiteSortField) {
    BsnHtmlSiteSortField["name"] = "name";
    BsnHtmlSiteSortField["fileSize"] = "fileSize";
    BsnHtmlSiteSortField["uploadDate"] = "uploadDate";
    BsnHtmlSiteSortField["lastModifiedDate"] = "lastModifiedDate";
})(BsnHtmlSiteSortField = exports.BsnHtmlSiteSortField || (exports.BsnHtmlSiteSortField = {}));
var BsnPluginSortField;
(function (BsnPluginSortField) {
    BsnPluginSortField["name"] = "fileInfo.name";
    BsnPluginSortField["fileSize"] = "fileInfo.size";
    BsnPluginSortField["lastModifiedDate"] = "fileInfo.lastModifiedDate";
    BsnPluginSortField["creationDate"] = "fileInfo.creationDate";
})(BsnPluginSortField = exports.BsnPluginSortField || (exports.BsnPluginSortField = {}));
var BsnDeviceHealthStatus;
(function (BsnDeviceHealthStatus) {
    BsnDeviceHealthStatus["Normal"] = "Normal";
    BsnDeviceHealthStatus["Warning"] = "Warning";
    BsnDeviceHealthStatus["Error"] = "Error";
    BsnDeviceHealthStatus["NoSubscriptions"] = "NoSubscriptions";
    BsnDeviceHealthStatus["Provision"] = "Provision";
})(BsnDeviceHealthStatus = exports.BsnDeviceHealthStatus || (exports.BsnDeviceHealthStatus = {}));
var BsnDeviceSubscriptionType;
(function (BsnDeviceSubscriptionType) {
    BsnDeviceSubscriptionType["Grace"] = "Grace";
    BsnDeviceSubscriptionType["Demo"] = "Demo";
    BsnDeviceSubscriptionType["Commercial"] = "Commercial";
})(BsnDeviceSubscriptionType = exports.BsnDeviceSubscriptionType || (exports.BsnDeviceSubscriptionType = {}));
var BsnDeviceSubscriptionStatus;
(function (BsnDeviceSubscriptionStatus) {
    BsnDeviceSubscriptionStatus["Active"] = "Active";
    BsnDeviceSubscriptionStatus["Suspending"] = "Suspending";
    BsnDeviceSubscriptionStatus["Suspended"] = "Suspended";
})(BsnDeviceSubscriptionStatus = exports.BsnDeviceSubscriptionStatus || (exports.BsnDeviceSubscriptionStatus = {}));
var BsnDeviceSetupType;
(function (BsnDeviceSetupType) {
    BsnDeviceSetupType["Unknowm"] = "Unknown";
    BsnDeviceSetupType["BSN"] = "BSN";
    BsnDeviceSetupType["SFN"] = "SFN";
    BsnDeviceSetupType["LFN"] = "LFN";
    BsnDeviceSetupType["Standalone"] = "Standalone";
})(BsnDeviceSetupType = exports.BsnDeviceSetupType || (exports.BsnDeviceSetupType = {}));
var BsnContentCheckPeriod;
(function (BsnContentCheckPeriod) {
    BsnContentCheckPeriod["Custom"] = "Custom";
    BsnContentCheckPeriod["ThirtySeconds"] = "ThirtySeconds";
    BsnContentCheckPeriod["OneMinute"] = "OneMinute";
    BsnContentCheckPeriod["FiveMinutes"] = "FiveMinutes";
    BsnContentCheckPeriod["FifteenMinutes"] = "FifteenMinutes";
    BsnContentCheckPeriod["ThirtyMinutes"] = "ThirtyMinutes";
    BsnContentCheckPeriod["OneHour"] = "OneHour";
    BsnContentCheckPeriod["SixHours"] = "SixHours";
    BsnContentCheckPeriod["TwelveHours"] = "TwelveHours";
    BsnContentCheckPeriod["OneDay"] = "OneDay";
})(BsnContentCheckPeriod = exports.BsnContentCheckPeriod || (exports.BsnContentCheckPeriod = {}));
var BsnDeviceField;
(function (BsnDeviceField) {
    BsnDeviceField["serial"] = "serial";
    BsnDeviceField["name"] = "name";
    BsnDeviceField["description"] = "description";
    BsnDeviceField["healthStatus"] = "healthStatus";
    BsnDeviceField["model"] = "model";
    BsnDeviceField["groupName"] = "targetGroup.name";
    BsnDeviceField["groupId"] = "targetGroup.id";
    BsnDeviceField["firmwareVersion"] = "firmwareVersion";
    BsnDeviceField["timezone"] = "targetTimeZone";
    BsnDeviceField["uptime"] = "uptime";
    BsnDeviceField["lastErrorTime"] = "lastErrorTime";
})(BsnDeviceField = exports.BsnDeviceField || (exports.BsnDeviceField = {}));
var BsnUserStatus;
(function (BsnUserStatus) {
    BsnUserStatus["Enabled"] = "Enabled";
    BsnUserStatus["Disabled"] = "Disabled";
})(BsnUserStatus = exports.BsnUserStatus || (exports.BsnUserStatus = {}));
var BsnNetworkStatus;
(function (BsnNetworkStatus) {
    BsnNetworkStatus["Active"] = "Active";
    BsnNetworkStatus["Suspending"] = "Suspending";
    BsnNetworkStatus["Suspended"] = "Suspended";
})(BsnNetworkStatus = exports.BsnNetworkStatus || (exports.BsnNetworkStatus = {}));
var BsnNetworkSubscriptionLevel;
(function (BsnNetworkSubscriptionLevel) {
    BsnNetworkSubscriptionLevel["Content"] = "Content";
    BsnNetworkSubscriptionLevel["Control"] = "Control";
    BsnNetworkSubscriptionLevel["Management"] = "Management";
    BsnNetworkSubscriptionLevel["Trial"] = "Trial";
})(BsnNetworkSubscriptionLevel = exports.BsnNetworkSubscriptionLevel || (exports.BsnNetworkSubscriptionLevel = {}));
var BsnPermissionPrincipalType;
(function (BsnPermissionPrincipalType) {
    BsnPermissionPrincipalType["User"] = "User";
    BsnPermissionPrincipalType["Role"] = "Role";
})(BsnPermissionPrincipalType = exports.BsnPermissionPrincipalType || (exports.BsnPermissionPrincipalType = {}));
var BsnBusinessOperationType;
(function (BsnBusinessOperationType) {
    BsnBusinessOperationType["Device"] = "Device";
    BsnBusinessOperationType["Group"] = "Group";
    BsnBusinessOperationType["TaggedGroup"] = "TaggedGroup";
    BsnBusinessOperationType["BrightWall"] = "BrightWall";
    BsnBusinessOperationType["BrightWallConfiguration"] = "BrightWallConfiguration";
    BsnBusinessOperationType["BrightWallScreen"] = "BrightWallScreen";
    BsnBusinessOperationType["BrightWallGroup"] = "BrightWallGroup";
    BsnBusinessOperationType["Presentation"] = "Presentation";
    BsnBusinessOperationType["BrightWallPresentation"] = "BrightWallPresentation";
    BsnBusinessOperationType["Content"] = "Content";
    BsnBusinessOperationType["DynamicPlaylist"] = "DynamicPlaylist";
    BsnBusinessOperationType["TaggedPlaylist"] = "TaggedPlaylist";
    BsnBusinessOperationType["LiveTextFeed"] = "LiveTextFeed";
    BsnBusinessOperationType["LiveMediaFeed"] = "LiveMediaFeed";
    BsnBusinessOperationType["WebPage"] = "WebPage";
    BsnBusinessOperationType["DeviceWebPage"] = "DeviceWebPage";
    BsnBusinessOperationType["Subscription"] = "Subscription";
    BsnBusinessOperationType["SubscriptionKey"] = "SubscriptionKey";
    BsnBusinessOperationType["SubscriptionInvoice"] = "SubscriptionInvoice";
    BsnBusinessOperationType["TrafficInvoice"] = "TrafficInvoice";
    BsnBusinessOperationType["DeviceSetupPackage"] = "DeviceSetupPackage";
    BsnBusinessOperationType["AutorunPlugin"] = "AutorunPlugin";
    BsnBusinessOperationType["Person"] = "Person";
    BsnBusinessOperationType["Network"] = "Network";
    BsnBusinessOperationType["User"] = "User";
    BsnBusinessOperationType["Role"] = "Role";
})(BsnBusinessOperationType = exports.BsnBusinessOperationType || (exports.BsnBusinessOperationType = {}));
var BsnOperationAction;
(function (BsnOperationAction) {
    BsnOperationAction["Create"] = "create";
    BsnOperationAction["Retrieve"] = "retrieve";
    BsnOperationAction["Update"] = "update";
    BsnOperationAction["Delete"] = "delete";
})(BsnOperationAction = exports.BsnOperationAction || (exports.BsnOperationAction = {}));
function bsnGetRequiredScopeForOperation(operation, action) {
    var apiMain = 'bsn.api.main.';
    var actionSuffix = lodash_1.isString(action) ? '.' + action : '';
    switch (operation) {
        case BsnBusinessOperationType.Person:
            return 'bsn.api.self';
        case BsnBusinessOperationType.User:
            return apiMain + 'users' + actionSuffix;
        case BsnBusinessOperationType.Role:
            return apiMain + 'roles' + actionSuffix;
        case BsnBusinessOperationType.Device:
            if (lodash_1.isNil(action) || action !== BsnOperationAction.Create) {
                return apiMain + 'devices' + actionSuffix;
            }
            break;
        case BsnBusinessOperationType.Content:
            if (!lodash_1.isNil(action) && action === BsnOperationAction.Create) {
                return 'bsn.api.upload.content';
            }
            return apiMain + 'content' + actionSuffix;
        case BsnBusinessOperationType.WebPage:
            if (!lodash_1.isNil(action) && action === BsnOperationAction.Create) {
                return 'bsn.api.upload.websites';
            }
            return apiMain + 'webpages' + actionSuffix;
        case BsnBusinessOperationType.DeviceWebPage:
            if (!lodash_1.isNil(action) && action === BsnOperationAction.Create) {
                return 'bsn.api.upload.websites';
            }
            return apiMain + 'devicewebpages' + actionSuffix;
        case BsnBusinessOperationType.Presentation:
            return apiMain + 'presentations' + actionSuffix;
        case BsnBusinessOperationType.DynamicPlaylist:
            return apiMain + 'playlists.dynamic' + actionSuffix;
        case BsnBusinessOperationType.TaggedPlaylist:
            return apiMain + 'playlists.tagged' + actionSuffix;
        case BsnBusinessOperationType.LiveTextFeed:
            return apiMain + 'feeds.text' + actionSuffix;
        case BsnBusinessOperationType.LiveMediaFeed:
            return apiMain + 'feeds.media' + actionSuffix;
        case BsnBusinessOperationType.AutorunPlugin:
            return apiMain + 'autoruns.plugins' + actionSuffix;
        case BsnBusinessOperationType.Group:
            return apiMain + 'groups.regular' + actionSuffix;
        case BsnBusinessOperationType.TaggedGroup:
            return apiMain + 'groups.tagged' + actionSuffix;
        case BsnBusinessOperationType.Subscription:
            if (action !== BsnOperationAction.Delete) {
                return apiMain + 'subscriptions' + actionSuffix;
            }
            break;
        case BsnBusinessOperationType.BrightWall:
            return apiMain + 'brightwalls.' + action;
        case BsnBusinessOperationType.BrightWallConfiguration:
            return apiMain + 'brightwalls.configurations.' + action;
        case BsnBusinessOperationType.BrightWallPresentation:
            return apiMain + 'brightwalls.presentations.' + action;
        case BsnBusinessOperationType.BrightWallGroup:
            return apiMain + 'brightwalls.groups.' + action;
    }
    return null;
}
exports.bsnGetRequiredScopeForOperation = bsnGetRequiredScopeForOperation;
var BsneDeviceLogSortField;
(function (BsneDeviceLogSortField) {
    BsneDeviceLogSortField["LogType"] = "logType";
    BsneDeviceLogSortField["Serial"] = "serial";
    BsneDeviceLogSortField["DeviceTimeStamp"] = "deviceTimeStamp";
    BsneDeviceLogSortField["RawMessage"] = "rawMessage";
})(BsneDeviceLogSortField = exports.BsneDeviceLogSortField || (exports.BsneDeviceLogSortField = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsnClientReactivateFunctionConfig = exports.bsnClientFunctionForReactivate = exports.bsnConnectorConfig = void 0;
var common_1 = __webpack_require__(0);
var authenticator_1 = __webpack_require__(4);
var contentProcessOperation_1 = __webpack_require__(12);
function bsnConnectorConfig(config) {
    var bsnClientConfig = config.bsnClient;
    var oAuthClient = config.oAuthClient;
    var oAuthServerConfiguration = config.oAuthServerConfiguration;
    var bDeployServerConfiguration = config.bDeployServerConfiguration;
    var indexServerConfiguration = config.indexServerConfiguration;
    var bsnServerConfiguration = config.bsnServerConfiguration;
    var clientRedirectUrl = config.clientRedirectUrl;
    var remoteProcedureConfiguration = config.bsnRemoteProcedureConfiguration;
    common_1.configServerUrl(bsnServerConfiguration, bDeployServerConfiguration, indexServerConfiguration, oAuthServerConfiguration);
    authenticator_1.configBsnClient(bsnClientConfig);
    authenticator_1.configOAuthClient(oAuthClient);
    common_1.configClientRedirectUrl(clientRedirectUrl);
    contentProcessOperation_1.configRemoteProcedureUrl(remoteProcedureConfiguration);
}
exports.bsnConnectorConfig = bsnConnectorConfig;
exports.bsnClientFunctionForReactivate = null;
function bsnClientReactivateFunctionConfig(clientFunction) {
    exports.bsnClientFunctionForReactivate = clientFunction;
}
exports.bsnClientReactivateFunctionConfig = bsnClientReactivateFunctionConfig;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsnGetReguarGroupEntityTemplate = exports.bsnGetRegularGroupEntityTemplate = exports.bsnGetFolderContentEntityTemplate = exports.bsnGetFileContentEntityTemplate = void 0;
function bsnGetFileContentEntityTemplate() {
    return {
        id: 0,
        fileName: null,
        physicalPath: null,
        virtualPath: null,
        thumbPath: null,
        mediaType: null,
        fileSize: null,
        fileHash: null,
        uploadDate: null,
        lastModifiedDate: null,
        fileLastModifiedDate: null,
        metadata: null,
        probeData: null,
        dynamicPlaylists: null,
        liveMediaFeeds: null,
        taggedPlaylists: null,
        presentations: null,
        tags: null,
        permissions: null,
    };
}
exports.bsnGetFileContentEntityTemplate = bsnGetFileContentEntityTemplate;
function bsnGetFolderContentEntityTemplate() {
    return {
        id: 0,
        name: null,
        virtualPath: null,
        thumbPath: null,
        mediaType: null,
        creationDate: null,
        lastModifiedDate: null,
        hasSubFolders: null,
        hasFiles: null,
        permissions: null,
    };
}
exports.bsnGetFolderContentEntityTemplate = bsnGetFolderContentEntityTemplate;
function bsnGetRegularGroupEntityTemplate() {
    var _a;
    return _a = {
            id: 0,
            name: null,
            creationDate: null,
            lastModifiedDate: null,
            autorun: null,
            hdX23Firmware: null,
            hdX23FirmwareId: null,
            lsX23Firmware: null,
            lsX23FirmwareId: null,
            hsX23Firmware: null,
            hsX23FirmwareId: null,
            hoX23Firmware: null,
            hoX23FirmwareId: null,
            xdX32Firmware: null,
            xdX32FirmwareId: null,
            xdX33Firmware: null,
            xdX33FirmwareId: null,
            xtX43Firmware: null,
            xtX43FirmwareId: null,
            xdX34_XTX44Firmware: null,
            xdX34_XTX44FirmwareId: null,
            hdX4_HSX4_LSX4Firmware: null,
            hdX4_HSX4_LSX4FirmwareId: null
        },
        _a['4KX42Firmware'] = null,
        _a['4KX42FirmwareId'] = null,
        _a.enableSerialDebugging = false,
        _a.enableSystemLogDebugging = false,
        _a.enableStorageSpaceLimit = false,
        _a.storageSpaceLimitUnits = null,
        _a.publishedDataSizeLimit = null,
        _a.dynamicDataSizeLimit = null,
        _a.htmlDataSizeLimit = null,
        _a.htmlLocalStorageSizeLimit = null,
        _a.webDatabaseSizeLimit = null,
        _a.devicesCount = null,
        _a.devicesHealthStatus = null,
        _a.devices = null,
        _a.schedule = null,
        _a.permissions = null,
        _a;
}
exports.bsnGetRegularGroupEntityTemplate = bsnGetRegularGroupEntityTemplate;
exports.bsnGetReguarGroupEntityTemplate = bsnGetRegularGroupEntityTemplate;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnEnumerator = void 0;
var common_1 = __webpack_require__(0);
var BsnEnumerator = (function () {
    function BsnEnumerator(options, allowVirtualPath) {
        this.marker = '';
        this.filterExpression = '';
        this.pathExpression = null;
        this.sortExpression = '';
        this.pageSize = null;
        this.isComplete = false;
        if (options) {
            if (options.hasOwnProperty('filter')) {
                this.filterExpression = options.filter.filterExpression;
            }
            else if (options.hasOwnProperty('filterExpression')) {
                this.filterExpression = options.filterExpression;
            }
            if (options.hasOwnProperty('sortExpression')) {
                this.sortExpression = options.sortExpression;
            }
            if (options.hasOwnProperty('pageSize')) {
                this.pageSize = options.pageSize;
            }
            if (allowVirtualPath && options.hasOwnProperty('virtualPath')) {
                this.pathExpression = common_1.standardPathToBsnVirtualPathForQueryString(options.virtualPath);
            }
        }
    }
    Object.defineProperty(BsnEnumerator.prototype, "queryString", {
        get: function () {
            var query = '';
            var sep = '?';
            var filterValue = '';
            if (this.marker) {
                query = '?marker=' + encodeURIComponent(this.marker);
                sep = '&';
            }
            if (this.pathExpression) {
                filterValue = '[VirtualPath] IS \'' + this.pathExpression + '\'';
            }
            if (this.filterExpression) {
                if (filterValue) {
                    filterValue = filterValue + ' AND ' + this.filterExpression;
                }
                else {
                    filterValue = this.filterExpression;
                }
            }
            if (filterValue) {
                query = query + sep + 'filter=' + encodeURIComponent(filterValue);
                sep = '&';
            }
            if (this.sortExpression) {
                query = query + sep + 'sort=' + encodeURIComponent(this.sortExpression);
                sep = '&';
            }
            if (this.pageSize) {
                query = query + sep + 'pageSize=' + this.pageSize;
            }
            return query;
        },
        enumerable: false,
        configurable: true
    });
    return BsnEnumerator;
}());
exports.BsnEnumerator = BsnEnumerator;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsnCreateRolePermission = exports.bsnCreateUserPermission = exports.bsnFindMatchingPermission = exports.bsnFindRolePermission = exports.bsnFindUserPermission = void 0;
var entities_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(3);
function bsnFindUserPermission(permissionList, user, operationUid) {
    var permission = lodash_1.find(permissionList, function (prm) {
        return operationUid === prm.operationUID
            && entities_1.BsnPermissionPrincipalType.User === prm.principal.type
            && user.id === prm.principal.id;
    });
    return lodash_1.isNil(permission) ? null : permission;
}
exports.bsnFindUserPermission = bsnFindUserPermission;
function bsnFindRolePermission(permissionList, role, operationUid) {
    var permission = lodash_1.find(permissionList, function (prm) {
        return operationUid === prm.operationUID
            && entities_1.BsnPermissionPrincipalType.Role === prm.principal.type
            && role.id === prm.principal.id;
    });
    return lodash_1.isNil(permission) ? null : permission;
}
exports.bsnFindRolePermission = bsnFindRolePermission;
function bsnFindMatchingPermission(permissionList, permissionToMatch) {
    var permission = lodash_1.find(permissionList, function (prm) {
        return permissionToMatch.operationUID === prm.operationUID
            && permissionToMatch.principal.type === prm.principal.type
            && permissionToMatch.principal.id === prm.principal.id;
    });
    return lodash_1.isNil(permission) ? null : permission;
}
exports.bsnFindMatchingPermission = bsnFindMatchingPermission;
function bsnCreateUserPermission(user, targetEntityId, operationUid, isAllowed) {
    return {
        entityId: targetEntityId,
        operationUID: operationUid,
        principal: {
            login: user.person.login,
            type: entities_1.BsnPermissionPrincipalType.User,
            id: user.id,
        },
        isFixed: false,
        isInherited: false,
        isAllowed: isAllowed,
        creationDate: null,
    };
}
exports.bsnCreateUserPermission = bsnCreateUserPermission;
function bsnCreateRolePermission(role, targetEntityId, operationUid, isAllowed) {
    return {
        entityId: targetEntityId,
        operationUID: operationUid,
        principal: {
            name: role.name,
            type: entities_1.BsnPermissionPrincipalType.Role,
            isCustom: role.isCustom,
            id: role.id,
        },
        isFixed: false,
        isInherited: false,
        isAllowed: isAllowed,
        creationDate: null,
    };
}
exports.bsnCreateRolePermission = bsnCreateRolePermission;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnFileUploadItem = exports.bsnCreateFileUploadItem = exports.getUploadMediaTypeForFile = exports.BsnUploadMediaType = exports.UploadAcceptHeader = exports.UploadChunkStatus = exports.FileUploadState = void 0;
var bscore_1 = __webpack_require__(2);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var authenticator_1 = __webpack_require__(4);
var common_2 = __webpack_require__(0);
var testFramework_1 = __webpack_require__(40);
var lodash_1 = __webpack_require__(3);
var FileUploadState;
(function (FileUploadState) {
    FileUploadState["Unknown"] = "Unknown";
    FileUploadState["Queued"] = "Queued";
    FileUploadState["Started"] = "Started";
    FileUploadState["Uploading"] = "Uploading";
    FileUploadState["Stopped"] = "Stopped";
    FileUploadState["Uploaded"] = "Uploaded";
    FileUploadState["Verified"] = "Verified";
    FileUploadState["Cancelled"] = "Cancelled";
    FileUploadState["Corrupted"] = "Corrupted";
    FileUploadState["Collected"] = "Collected";
    FileUploadState["Terminated"] = "Terminated";
    FileUploadState["Completed"] = "Completed";
})(FileUploadState = exports.FileUploadState || (exports.FileUploadState = {}));
var UploadChunkStatus;
(function (UploadChunkStatus) {
    UploadChunkStatus[UploadChunkStatus["pending"] = 0] = "pending";
    UploadChunkStatus[UploadChunkStatus["pendingRetry"] = 1] = "pendingRetry";
    UploadChunkStatus[UploadChunkStatus["uploading"] = 2] = "uploading";
    UploadChunkStatus[UploadChunkStatus["complete"] = 3] = "complete";
    UploadChunkStatus[UploadChunkStatus["failed"] = 4] = "failed";
})(UploadChunkStatus = exports.UploadChunkStatus || (exports.UploadChunkStatus = {}));
var UploadAcceptHeader;
(function (UploadAcceptHeader) {
    UploadAcceptHeader["contentStatusList"] = "application/vnd.bsn.content.upload.status.pagedlist.201903+json";
    UploadAcceptHeader["contentStartUpload"] = "application/vnd.bsn.start.content.upload.arguments.201903+json";
    UploadAcceptHeader["contentStartUpdate"] = "application/vnd.bsn.start.content.update.arguments.201903+json";
    UploadAcceptHeader["contentUploadArguments"] = "application/vnd.bsn.content.upload.arguments.201903+json";
    UploadAcceptHeader["contentUpdateArguments"] = "application/vnd.bsn.content.update.arguments.201903+json";
    UploadAcceptHeader["contentCompleteUpload"] = "application/vnd.bsn.complete.content.upload.arguments.201903+json";
    UploadAcceptHeader["contentCompleteUpdate"] = "application/vnd.bsn.complete.content.update.arguments.201903+json";
    UploadAcceptHeader["contentUploadStatus"] = "application/vnd.bsn.content.upload.status.201903+json";
    UploadAcceptHeader["contentUploadNegotiationStatus"] = "application/vnd.bsn.content.upload.negotiation.status.201903+json";
    UploadAcceptHeader["webpageAssetStartUpload"] = "application/vnd.bsn.start.webpage.asset.upload.arguments.201903+json";
    UploadAcceptHeader["webpageAssetUploadArguments"] = "application/vnd.bsn.webpage.asset.upload.arguments.201903+json";
    UploadAcceptHeader["webpageAssetUpdateArguments"] = "application/vnd.bsn.webpage.asset.update.arguments.201903+json";
    UploadAcceptHeader["webpageAssetCompleteUpload"] = "application/vnd.bsn.complete.webpage.asset.upload.arguments.201903+json";
    UploadAcceptHeader["webpageStatusList"] = "application/vnd.bsn.webpage.upload.status.pagedlist.201903+json";
    UploadAcceptHeader["webpageStartUpload"] = "application/vnd.bsn.start.webpage.upload.arguments.201903+json";
    UploadAcceptHeader["webpageStartUpdate"] = "application/vnd.bsn.start.webpage.update.arguments.201903+json";
    UploadAcceptHeader["webpageUploadArguments"] = "application/vnd.bsn.webpage.upload.arguments.201903+json";
    UploadAcceptHeader["webpageUpdateArguments"] = "application/vnd.bsn.webpage.update.arguments.201903+json";
    UploadAcceptHeader["webpageCompleteUpload"] = "application/vnd.bsn.complete.webpage.upload.arguments.201903+json";
    UploadAcceptHeader["webpageCompleteUpdate"] = "application/vnd.bsn.complete.webpage.update.arguments.201903+json";
    UploadAcceptHeader["webpageUploadStatus"] = "application/vnd.bsn.webpage.upload.status.201903+json";
    UploadAcceptHeader["chunkStatusList"] = "application/vnd.bsn.upload.content.chunk.status.list.201903+json";
    UploadAcceptHeader["chunkData"] = "application/octet-stream";
    UploadAcceptHeader["uploadError"] = "application/vnd.bsn.error+json";
})(UploadAcceptHeader = exports.UploadAcceptHeader || (exports.UploadAcceptHeader = {}));
var BsnUploadMediaType;
(function (BsnUploadMediaType) {
    BsnUploadMediaType["Auto"] = "Auto";
    BsnUploadMediaType["Text"] = "Text";
    BsnUploadMediaType["Image"] = "Image";
    BsnUploadMediaType["Video"] = "Video";
    BsnUploadMediaType["Audio"] = "Audio";
    BsnUploadMediaType["Font"] = "Font";
    BsnUploadMediaType["Css"] = "Css";
    BsnUploadMediaType["Auxiliary"] = "Auxiliary";
    BsnUploadMediaType["WebPage"] = "WebPage";
    BsnUploadMediaType["DeviceWebPage"] = "DeviceWebPage";
})(BsnUploadMediaType = exports.BsnUploadMediaType || (exports.BsnUploadMediaType = {}));
function getUploadMediaTypeForFile(fileName) {
    var mediaType = bscore_1.bscGetFileMediaType(fileName);
    if (mediaType === bscore_1.MediaType.Other) {
        return BsnUploadMediaType.Auto;
    }
    return mediaType;
}
exports.getUploadMediaTypeForFile = getUploadMediaTypeForFile;
function bsnCreateFileUploadItem(fileSource, destinationPath, jobIndex, progressHandler, existingAsset, sessionToken, uploadToken, relativePath, uploadMediaType, targetName) {
    return new BsnFileUploadItem(fileSource, destinationPath, jobIndex, progressHandler, existingAsset, sessionToken, uploadToken, relativePath, uploadMediaType, targetName);
}
exports.bsnCreateFileUploadItem = bsnCreateFileUploadItem;
var BsnFileUploadItem = (function () {
    function BsnFileUploadItem(fileSource, virtualPath, jobIndex, progressCallback, existingAsset, sessionToken, uploadToken, relativePath, uploadMediaType, targetName) {
        if (virtualPath === void 0) { virtualPath = ''; }
        if (jobIndex === void 0) { jobIndex = 0; }
        this.chunkSize = 1024 * 512;
        this.maxChunkRetries = 3;
        this._chunkStatusList = [];
        this._activeUploadMap = new Map();
        this._authenticator = authenticator_1.getBsnAuthenticator();
        this._cancellationRequested = false;
        this._bsnUploadParams = {
            sessionToken: null,
            uploadToken: null,
            fileName: undefined,
            virtualPath: undefined,
            mediaType: BsnUploadMediaType.Auto,
            fileSize: 0,
            fileLastModifiedDate: new Date(),
            shA1Hash: null,
            fileThumb: null,
        };
        this._status = bscore_1.BsUploadItemStatus.Pending;
        if (!fileSource) {
            throw new error_1.BsnError(error_1.BsnErrorType.assetNotFoundError);
        }
        this._uploadSource = fileSource;
        this._jobIndex = jobIndex;
        this._bsnUploadParams.fileName = lodash_1.isNil(targetName) ? this._uploadSource.fileName : targetName;
        this._bsnUploadParams.virtualPath = virtualPath ? common_2.standardPathToBsnVirtualPath(virtualPath) : '\\';
        this._bsnUploadParams.mediaType =
            uploadMediaType ? uploadMediaType : getUploadMediaTypeForFile(this._bsnUploadParams.fileName);
        this._bsnUploadParams.fileSize = this._uploadSource.fileSize;
        this._bsnUploadParams.fileLastModifiedDate = this._uploadSource.lastModifiedDate;
        this._progressCallback = progressCallback;
        this._existingAsset = existingAsset ? existingAsset : null;
        if (sessionToken) {
            this._bsnUploadParams.sessionToken = sessionToken;
            this._bsnUploadParams.webPageAssetId = 0;
            this._bsnUploadParams.relativePath =
                relativePath ? common_2.standardPathToBsnVirtualPath(relativePath) : '\\';
        }
        if (uploadToken) {
            this._bsnUploadParams.uploadToken = uploadToken;
        }
        var chunkCount = Math.ceil(this._bsnUploadParams.fileSize / this.chunkSize);
        var startOffset = 0;
        while (this._chunkStatusList.length < chunkCount) {
            this._chunkStatusList.push({
                startOffset: startOffset,
                size: startOffset + this.chunkSize <= this._bsnUploadParams.fileSize ?
                    this.chunkSize : this._bsnUploadParams.fileSize - startOffset + 1,
                status: UploadChunkStatus.pending,
            });
            startOffset = startOffset + this.chunkSize;
        }
    }
    BsnFileUploadItem.getBsnFileUploadStatus = function (entity) {
        var sessionToken = entity.sessionToken, uploadToken = entity.uploadToken, contentId = entity.contentId, fileName = entity.fileName, fileSize = entity.fileSize, shA1Hash = entity.shA1Hash, state = entity.state, chunks = entity.chunks;
        var status = {
            sessionToken: sessionToken,
            uploadToken: uploadToken,
            contentId: contentId,
            fileName: fileName,
            fileSize: fileSize,
            shA1Hash: shA1Hash,
            state: state,
            startTime: entity.startTime ? new Date(entity.startTime) : null,
            endTime: entity.endTime ? new Date(entity.endTime) : null,
            lastActivityTime: entity.lastActivityTime ? new Date(entity.lastActivityTime) : null,
            chunks: chunks,
        };
        if (entity.hasOwnProperty('matchingFiles')) {
            status.matchingFiles = [];
            entity.matchingFiles.forEach(function (fileEntity) {
                var matchingFile = {
                    id: fileEntity.id,
                    fileName: fileEntity.fileName,
                    virtualPath: fileEntity.virtualPath,
                    mediaType: fileEntity.mediaType,
                    fileSize: fileEntity.fileSize,
                    shA1Hash: fileEntity.shA1Hash,
                    uploadDate: new Date(fileEntity.uploadDate),
                };
                status.matchingFiles.push(matchingFile);
            });
        }
        return status;
    };
    Object.defineProperty(BsnFileUploadItem.prototype, "jobIndex", {
        get: function () {
            return this._jobIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "fileName", {
        get: function () {
            return this._bsnUploadParams.fileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "fileSize", {
        get: function () {
            return this._bsnUploadParams.fileSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "totalChunkCount", {
        get: function () {
            return this._chunkStatusList.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "isWebPageAssetUpload", {
        get: function () {
            return this._bsnUploadParams.hasOwnProperty('webPageAssetId');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "sessionToken", {
        get: function () {
            return this._bsnUploadParams.sessionToken ? this._bsnUploadParams.sessionToken : 'None';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "maxConcurrentChunkUploads", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "bsnUploadParameters", {
        get: function () {
            return this._bsnUploadParams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "bsnUploadStatus", {
        get: function () {
            return this._bsnUploadStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "fractionComplete", {
        get: function () {
            if (this._status === bscore_1.BsUploadItemStatus.Matched
                || this._status === bscore_1.BsUploadItemStatus.Cancelled
                || this._status === bscore_1.BsUploadItemStatus.Failed) {
                return 1;
            }
            if (!this._fileChunkSummary) {
                return 0;
            }
            var pct = (this._fileChunkSummary.complete * this.chunkSize) / this._bsnUploadParams.fileSize;
            return pct <= 1 ? pct : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "uploadProgress", {
        get: function () {
            return {
                jobIndex: this.jobIndex,
                fileName: this.fileName,
                fileSize: this.fileSize,
                status: this.status,
                fractionComplete: this.fractionComplete,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "startUploadHeaders", {
        get: function () {
            var headers = new Headers(this._authenticator.commonHeaders);
            headers.append('Accept', UploadAcceptHeader.contentUploadStatus);
            headers.append('Accept', UploadAcceptHeader.contentUploadNegotiationStatus);
            headers.append('Accept', UploadAcceptHeader.uploadError);
            headers.set('Content-Type', this.isWebPageAssetUpload ?
                UploadAcceptHeader.webpageAssetStartUpload : UploadAcceptHeader.contentStartUpload);
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "chunkUploadHeaders", {
        get: function () {
            var headers = new Headers(this._authenticator.commonHeaders);
            headers.append('Accept', UploadAcceptHeader.uploadError);
            headers.set('Content-Type', 'application/octet-stream');
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "uploadStatusHeaders", {
        get: function () {
            var headers = new Headers(this._authenticator.commonHeaders);
            headers.append('Accept', UploadAcceptHeader.contentUploadStatus);
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "chunkUploadStatusHeaders", {
        get: function () {
            var headers = new Headers(this._authenticator.commonHeaders);
            headers.append('Accept', UploadAcceptHeader.chunkStatusList);
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnFileUploadItem.prototype, "completeUploadHeaders", {
        get: function () {
            var headers = new Headers(this.startUploadHeaders);
            headers.set('Content-Type', this.isWebPageAssetUpload ?
                UploadAcceptHeader.webpageAssetCompleteUpload : UploadAcceptHeader.contentCompleteUpload);
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    BsnFileUploadItem.prototype.upload = function () {
        var _this = this;
        testFramework_1.testHook(testFramework_1.Breakpoint.beforeStartingFileUpload);
        this._status = bscore_1.BsUploadItemStatus.Uploading;
        if (this._progressCallback) {
            try {
                this._progressCallback(this.uploadProgress);
            }
            catch (error) {
                return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.unexpectedError, 'Exception in progress callback: ' + error.message));
            }
        }
        return this.startUpload()
            .then(function (startUploadStatus) {
            if (_this.uploadFileMatchesExistingFile(startUploadStatus)) {
                var assetItem_1 = _this.getBsAssetItemFromUpload(startUploadStatus);
                return _this.cancelUpload()
                    .then(function () {
                    _this._status = bscore_1.BsUploadItemStatus.Matched;
                    if (_this._progressCallback) {
                        _this._progressCallback(_this.uploadProgress);
                    }
                    return {
                        jobIndex: _this._jobIndex,
                        assetItem: assetItem_1,
                        status: _this._status,
                    };
                });
            }
            testFramework_1.testHook(testFramework_1.Breakpoint.beforeProcessChunkUploads);
            return _this.processChunkUploads()
                .then(function () {
                if (_this._cancellationRequested) {
                    return _this._bsnUploadStatus;
                }
                return _this.completeUpload();
            })
                .then(function (completedUploadStatus) {
                var assetItem = null;
                if (_this._cancellationRequested) {
                    _this._status = bscore_1.BsUploadItemStatus.Cancelled;
                }
                else {
                    _this._status = bscore_1.BsUploadItemStatus.Uploaded;
                    assetItem = _this.getBsAssetItemFromUpload(completedUploadStatus);
                }
                if (_this._progressCallback) {
                    _this._progressCallback(_this.uploadProgress);
                }
                return {
                    jobIndex: _this._jobIndex,
                    assetItem: assetItem,
                    status: _this._status,
                };
            });
        })
            .catch(function (error) {
            _this._status = bscore_1.BsUploadItemStatus.Failed;
            if (_this._progressCallback) {
                _this._progressCallback(_this.uploadProgress);
            }
            return {
                jobIndex: _this._jobIndex,
                assetItem: null,
                status: _this._status,
                error: common_2.processBsnRequestError(error),
            };
        });
    };
    BsnFileUploadItem.prototype.cancel = function () {
        this._cancellationRequested = true;
    };
    BsnFileUploadItem.prototype.startUpload = function () {
        var _this = this;
        return this._uploadSource.getFileHash()
            .then(function (hash) {
            _this._bsnUploadParams.shA1Hash = hash;
            return _this._authenticator.checkAuthentication();
        })
            .then(function () { return _this._authenticator.checkNetworkActive(); })
            .then(function () {
            var body = JSON.stringify(_this._bsnUploadParams);
            var url = common_1.BsnUploadUrl + 'Sessions/' + _this.sessionToken + '/Uploads/';
            var method = 'POST';
            if (_this.isWebPageAssetUpload) {
                url = url + _this._bsnUploadParams.uploadToken + '/';
                method = 'PUT';
            }
            var headers = _this.startUploadHeaders;
            var request = new Request(url, { method: method, headers: headers, body: body });
            return fetch(request)
                .then(function (response) { return _this._authenticator.checkStatus(response, request, body); });
        })
            .then(function (response) { return _this._authenticator.getJsonResponse(response); })
            .then(function (statusEntity) {
            _this._bsnUploadStatus = BsnFileUploadItem.getBsnFileUploadStatus(statusEntity);
            _this._bsnUploadParams.uploadToken = _this._bsnUploadStatus.uploadToken;
            return _this._bsnUploadStatus;
        })
            .catch(function (error) {
            throw common_2.processBsnRequestError(error);
        });
    };
    BsnFileUploadItem.prototype.completeUpload = function () {
        var _this = this;
        var body = JSON.stringify(this._bsnUploadParams);
        return this._authenticator.checkAuthentication()
            .then(function () {
            var request = new Request(common_1.BsnUploadUrl + 'Sessions/' + _this.sessionToken + '/Uploads/' + _this._bsnUploadParams.uploadToken + '/', { method: 'PUT',
                headers: _this.completeUploadHeaders, body: body,
            });
            return fetch(request)
                .then(function (response) { return _this._authenticator.checkStatus(response, request, body); });
        })
            .then(function (response) { return _this._authenticator.getJsonResponse(response); })
            .then(function (statusEntity) {
            _this._bsnUploadStatus = BsnFileUploadItem.getBsnFileUploadStatus(statusEntity);
            return _this._bsnUploadStatus;
        })
            .catch(function (error) {
            throw common_2.processBsnRequestError(error);
        });
    };
    BsnFileUploadItem.prototype.cancelUpload = function () {
        var _this = this;
        testFramework_1.testHook(testFramework_1.Breakpoint.beforeCancelUpload);
        return this._authenticator.checkAuthentication()
            .then(function () {
            var request = new Request(common_1.BsnUploadUrl + 'Sessions/' + _this.sessionToken + '/Uploads/' + _this._bsnUploadParams.uploadToken + '/', {
                method: 'DELETE',
                headers: _this._authenticator.requestHeaders,
            });
            return fetch(request)
                .then(function (response) { return _this._authenticator.checkStatus(response, request); });
        })
            .then(function (response) { return response.status; })
            .catch(function (error) {
            throw common_2.processBsnRequestError(error);
        });
    };
    BsnFileUploadItem.prototype.getBsnUploadStatus = function () {
        var _this = this;
        return this._authenticator.checkAuthentication()
            .then(function () {
            var request = new Request(common_1.BsnUploadUrl + 'Sessions/' + _this.sessionToken + '/Uploads/' + _this._bsnUploadParams.uploadToken, { method: 'GET',
                headers: _this.uploadStatusHeaders,
            });
            return fetch(request)
                .then(function (response) { return _this._authenticator.checkStatus(response, request); });
        })
            .then(function (response) { return _this._authenticator.getJsonResponse(response); })
            .then(function (statusEntity) { return BsnFileUploadItem.getBsnFileUploadStatus(statusEntity); })
            .catch(function (error) {
            throw common_2.processBsnRequestError(error);
        });
    };
    BsnFileUploadItem.prototype.processChunkUploads = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var processNextChunkUpload = function () {
                _this.updateFileChunkSummary();
                testFramework_1.testHook(testFramework_1.Breakpoint.beforeRandomChunkUpload, { chunksComplete: _this._fileChunkSummary.complete });
                if (_this._fileChunkSummary.complete === _this.totalChunkCount) {
                    _this.getBsnUploadStatus()
                        .then(function (status) {
                        _this._bsnUploadStatus = status;
                        resolve(status);
                    })
                        .catch(function (error) { return reject(error); });
                }
                else {
                    if (_this._progressCallback && _this._fileChunkSummary.complete) {
                        try {
                            _this._progressCallback(_this.uploadProgress);
                        }
                        catch (error) {
                            reject(new error_1.BsnError(error_1.BsnErrorType.unexpectedError, 'Exception in progress callback: ' + error.message));
                            return;
                        }
                    }
                    if (!_this._cancellationRequested) {
                        if (_this._fileChunkSummary.uploading < _this.maxConcurrentChunkUploads) {
                            if (_this._fileChunkSummary.nextPendingIndex !== null) {
                                var nextChunkStatus = _this._chunkStatusList[_this._fileChunkSummary.nextPendingIndex];
                                _this._activeUploadMap.set(nextChunkStatus.startOffset, _this.uploadChunk(nextChunkStatus));
                            }
                        }
                        if (_this._activeUploadMap.size === 0) {
                            reject(new error_1.BsnError(error_1.BsnErrorType.unexpectedError, 'File chunk Upload map is inconsistent'));
                            return;
                        }
                    }
                    else if (_this._fileChunkSummary.uploading === 0) {
                        _this.cancelUpload()
                            .then(function () {
                            resolve(_this._bsnUploadStatus);
                            return;
                        })
                            .catch(function () {
                            resolve(_this._bsnUploadStatus);
                            return;
                        });
                    }
                    return Promise.race(_this._activeUploadMap.values())
                        .then(function (chunkStatus) {
                        _this._activeUploadMap.delete(chunkStatus.startOffset);
                        if (chunkStatus.status === UploadChunkStatus.failed && !_this._cancellationRequested) {
                            reject(chunkStatus.error);
                            return;
                        }
                        return processNextChunkUpload();
                    });
                }
            };
            return processNextChunkUpload();
        });
    };
    BsnFileUploadItem.prototype.uploadChunk = function (chunkStatus) {
        var _this = this;
        chunkStatus.status = UploadChunkStatus.uploading;
        return this._authenticator.checkAuthentication()
            .then(function () { return _this._uploadSource.getChunk(chunkStatus.startOffset, chunkStatus.size); })
            .then(function (chunkData) {
            var request = new Request(common_1.BsnUploadUrl + 'Sessions/' + _this.sessionToken + '/Uploads/' + _this._bsnUploadParams.uploadToken
                + '/Chunks/?offset=' + chunkStatus.startOffset, { method: 'POST',
                headers: _this.chunkUploadHeaders,
                body: chunkData,
            });
            return fetch(request)
                .then(function (response) { return _this._authenticator.checkStatus(response, request); });
        })
            .then(function () {
            chunkStatus.status = UploadChunkStatus.complete;
            return chunkStatus;
        })
            .catch(function (error) {
            var bsnError = common_2.processBsnRequestError(error);
            if (!_this.canRetryUpload(bsnError, chunkStatus)) {
                chunkStatus.status = UploadChunkStatus.failed;
                chunkStatus.error = bsnError;
                return chunkStatus;
            }
            chunkStatus.retryCount = typeof chunkStatus.retryCount === 'number' ? chunkStatus.retryCount + 1 : 1;
            chunkStatus.status = UploadChunkStatus.pendingRetry;
            return chunkStatus;
        });
    };
    BsnFileUploadItem.prototype.canRetryUpload = function (error, chunkStatus) {
        return !this._cancellationRequested
            && (error.type === error_1.BsnErrorType.networkError || error.type === error_1.BsnErrorType.requestError)
            && (!chunkStatus.retryCount || chunkStatus.retryCount < this.maxChunkRetries);
    };
    BsnFileUploadItem.prototype.updateFileChunkSummary = function () {
        var _this = this;
        this._fileChunkSummary = { pending: 0, uploading: 0, complete: 0, failed: 0, nextPendingIndex: null };
        this._chunkStatusList.forEach(function (chunkStatus, index) {
            switch (chunkStatus.status) {
                case UploadChunkStatus.pending:
                case UploadChunkStatus.pendingRetry:
                    if (_this._fileChunkSummary.nextPendingIndex === null) {
                        _this._fileChunkSummary.nextPendingIndex = index;
                    }
                    _this._fileChunkSummary.pending++;
                    break;
                case UploadChunkStatus.uploading:
                    _this._fileChunkSummary.uploading++;
                    break;
                case UploadChunkStatus.complete:
                    _this._fileChunkSummary.complete++;
                    break;
                case UploadChunkStatus.failed:
                    _this._fileChunkSummary.failed++;
                    break;
            }
        });
    };
    BsnFileUploadItem.prototype.uploadFileMatchesExistingFile = function (status) {
        var _this = this;
        var isMatched = false;
        if (status.hasOwnProperty('matchingFiles')) {
            status.matchingFiles.some(function (fileStatus) {
                isMatched = fileStatus.virtualPath === _this._bsnUploadParams.virtualPath;
                if (isMatched) {
                    status.contentId = fileStatus.id;
                    status.shA1Hash = fileStatus.shA1Hash;
                    return true;
                }
            });
        }
        return isMatched;
    };
    BsnFileUploadItem.prototype.getBsAssetItemFromUpload = function (status) {
        var contentId = status.contentId, fileName = status.fileName, fileSize = status.fileSize, shA1Hash = status.shA1Hash;
        var typeInfo = bscore_1.bscGetBscFileTypeInfo(fileName);
        var assetItem = {
            id: '0',
            name: fileName,
            path: common_2.bsnVirtualPathToStandardPath(this._bsnUploadParams.virtualPath),
            networkId: contentId,
            location: bscore_1.AssetLocation.Bsn,
            locator: bscore_1.bscGetBsnAssetLocatorKey(contentId, typeInfo.assetType),
            assetType: typeInfo.assetType,
            scope: this._authenticator.networkName,
            fileSize: fileSize,
            fileHash: shA1Hash,
            lastModifiedDate: this._bsnUploadParams.fileLastModifiedDate,
        };
        if (typeInfo.assetType === bscore_1.AssetType.Content) {
            assetItem.mediaType = typeInfo.mediaType;
        }
        return assetItem;
    };
    return BsnFileUploadItem;
}());
exports.BsnFileUploadItem = BsnFileUploadItem;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteContentProcessOperations = exports.configRemoteProcedureUrl = void 0;
var qs = __webpack_require__(14);
var error_1 = __webpack_require__(1);
var common_1 = __webpack_require__(0);
var authenticator_1 = __webpack_require__(4);
var lodash_1 = __webpack_require__(3);
var bsnRemoteProcedureJobAssignEndPoint = '/procedureJobAssign';
var bsnRemoteProcedureJobStatusEndPoint = '/procedureJobQuery';
var bsnRemoteProcedureJobDeleteEndPoint = '/procedureJobRemove';
var bsnRemoteProcedureDefaultUrl = 'https://fzytsw2kig.execute-api.us-east-1.amazonaws.com/staging';
var bsnRemoteProcedureJobAssignUrl = bsnRemoteProcedureDefaultUrl + bsnRemoteProcedureJobAssignEndPoint;
var bsnRemoteProcedureJobStatusUrl = bsnRemoteProcedureDefaultUrl + bsnRemoteProcedureJobStatusEndPoint;
var bsnRemoteProcedureJobDeleteUrl = bsnRemoteProcedureDefaultUrl + bsnRemoteProcedureJobDeleteEndPoint;
function configRemoteProcedureUrl(clientConfig) {
    bsnRemoteProcedureDefaultUrl = clientConfig.bsnRemoteProcedureDefaultUrl;
    bsnRemoteProcedureJobAssignEndPoint = clientConfig.bsnRemoteProcedureJobAssignEndPoint;
    bsnRemoteProcedureJobStatusEndPoint = clientConfig.bsnRemoteProcedureJobStatusEndPoint;
    bsnRemoteProcedureJobDeleteEndPoint = clientConfig.bsnRemoteProcedureJobDeleteEndPoint;
    bsnRemoteProcedureJobAssignUrl = bsnRemoteProcedureDefaultUrl + bsnRemoteProcedureJobAssignEndPoint;
    bsnRemoteProcedureJobStatusUrl = bsnRemoteProcedureDefaultUrl + bsnRemoteProcedureJobStatusEndPoint;
    bsnRemoteProcedureJobDeleteUrl = bsnRemoteProcedureDefaultUrl + bsnRemoteProcedureJobDeleteEndPoint;
}
exports.configRemoteProcedureUrl = configRemoteProcedureUrl;
var RemoteContentProcessOperations = (function () {
    function RemoteContentProcessOperations() {
    }
    RemoteContentProcessOperations.prototype.assignDownsampleImageJob = function (downsampleEntity) {
        var headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('Content-Type', 'application/json');
        var authenticator = authenticator_1.getBsnAuthenticator();
        downsampleEntity.authenticationToken = authenticator.oauthRefreshToken;
        var body = JSON.stringify(downsampleEntity);
        var request = new Request(bsnRemoteProcedureJobAssignUrl, { method: 'POST', headers: headers, body: body });
        return fetch(request)
            .then(function (response) { return authenticator.logResponse(response, request, body); })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (result) { return downsampleResultProcess(result); })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    RemoteContentProcessOperations.prototype.queryRemoteProcedureJobStatus = function (jobId) {
        var headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('Content-Type', 'application/json');
        var authenticator = authenticator_1.getBsnAuthenticator();
        var finalOptions = {
            jobId: jobId,
            username: authenticator.userName,
            network: authenticator.networkName,
            authenticationToken: authenticator.oauthRefreshToken,
        };
        var queryString = qs.stringify(finalOptions);
        var request = new Request(bsnRemoteProcedureJobStatusUrl + ("?" + queryString), { method: 'GET', headers: headers });
        return fetch(request)
            .then(function (response) { return authenticator.logResponse(response, request); })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    RemoteContentProcessOperations.prototype.removeRemoteProcedureJob = function (jobId) {
        var headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('Content-Type', 'application/json');
        var authenticator = authenticator_1.getBsnAuthenticator();
        var finalOptions = {
            username: authenticator.userName,
            network: authenticator.networkName,
            authenticationToken: authenticator.oauthRefreshToken,
        };
        var queryString = qs.stringify(finalOptions);
        var request = new Request(bsnRemoteProcedureJobDeleteUrl + ("/" + jobId) + ("?" + queryString), { method: 'DELETE', headers: headers });
        return fetch(request)
            .then(function (response) { return authenticator.logResponse(response, request); })
            .then(function () { return null; })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    return RemoteContentProcessOperations;
}());
exports.RemoteContentProcessOperations = RemoteContentProcessOperations;
function downsampleResultProcess(body) {
    if (lodash_1.isString(body.jobId)) {
        return body;
    }
    else {
        throw new error_1.BsnError(error_1.BsnErrorType.imageDownsampleFailed);
    }
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("base64-js");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnSession = exports.getBsnSession = exports.bsnGetSession = void 0;
__webpack_require__(42);
var common_1 = __webpack_require__(0);
var authenticator_1 = __webpack_require__(4);
var entities_1 = __webpack_require__(6);
var content_1 = __webpack_require__(20);
var device_1 = __webpack_require__(21);
var deviceProvisioning_1 = __webpack_require__(23);
var deviceLog_1 = __webpack_require__(22);
var contentProcessOperation_1 = __webpack_require__(12);
var presentation_1 = __webpack_require__(31);
var textFeed_1 = __webpack_require__(38);
var mediaFeed_1 = __webpack_require__(28);
var dynamicPlaylist_1 = __webpack_require__(25);
var taggedPlaylist_1 = __webpack_require__(36);
var htmlSite_1 = __webpack_require__(27);
var deviceWebPage_1 = __webpack_require__(24);
var plugin_1 = __webpack_require__(30);
var tags_1 = __webpack_require__(37);
var group_1 = __webpack_require__(26);
var user_1 = __webpack_require__(39);
var role_1 = __webpack_require__(33);
var businessOperation_1 = __webpack_require__(19);
var subscription_1 = __webpack_require__(35);
var profile_1 = __webpack_require__(32);
var self_1 = __webpack_require__(34);
var password_1 = __webpack_require__(29);
var error_1 = __webpack_require__(1);
var xml2js_1 = __webpack_require__(43);
var lodash_1 = __webpack_require__(3);
var session;
function bsnGetSession() {
    if (!session) {
        session = new BsnSession();
    }
    return session;
}
exports.bsnGetSession = bsnGetSession;
function getBsnSession() {
    if (!session) {
        session = new BsnSession();
    }
    return session;
}
exports.getBsnSession = getBsnSession;
var BsnSession = (function () {
    function BsnSession() {
        this._authenticator = authenticator_1.getBsnAuthenticator();
    }
    Object.defineProperty(BsnSession.prototype, "userName", {
        get: function () { return this._authenticator.userName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "networkName", {
        get: function () { return this._authenticator.networkName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "personId", {
        get: function () { return this._authenticator.personId; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "personInfo", {
        get: function () { return this._authenticator.personInfo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "userId", {
        get: function () { return this._authenticator.userId; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "roleId", {
        get: function () { return this._authenticator.roleId; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "roleName", {
        get: function () { return this._authenticator.roleName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "status", {
        get: function () { return this._authenticator.status; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "subscriptionLevel", {
        get: function () { return this._authenticator.subscriptionLevel; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "subscriptionInfo", {
        get: function () {
            return this._authenticator.subscriptionInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "userInfo", {
        get: function () { return this._authenticator.userInfo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "oauthAccessTokenExpirationTime", {
        get: function () {
            return this._authenticator.oauthAccessTokenExpiration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "isUserInfoValid", {
        get: function () { return this._authenticator.isUserInfoValid; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "isNetworkSpecified", {
        get: function () { return this._authenticator.isNetworkSpecified; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "isUserActive", {
        get: function () { return this._authenticator.isUserActive; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "isNetworkActive", {
        get: function () { return this._authenticator.isNetworkActive; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "logLevel", {
        get: function () { return this._authenticator.logLevel; },
        set: function (value) { this._authenticator.logLevel = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnSession.prototype, "logOptions", {
        get: function () { return this._authenticator.logOptions; },
        set: function (value) { this._authenticator.logOptions = value; },
        enumerable: false,
        configurable: true
    });
    BsnSession.prototype.activate = function (userName, password, networkName, serverUrl) {
        var _this = this;
        return this._authenticator.activate(userName, password, networkName, serverUrl)
            .then(function () { return _this; });
    };
    BsnSession.prototype.activateWithRefreshToken = function (userName, networkName, refreshToken) {
        var _this = this;
        return this._authenticator.activateWithRefreshOAuthToken(userName, networkName, refreshToken)
            .then(function () { return _this; });
    };
    BsnSession.prototype.deactivate = function () { this._authenticator.deactivate(); };
    BsnSession.prototype.setPasswordRefreshFunction = function (fn) {
        this._authenticator.setPasswordRefreshFunction(fn);
    };
    BsnSession.prototype.openNetwork = function (networkName) {
        var _this = this;
        return this._authenticator.openNetwork(networkName)
            .then(function () { return _this; });
    };
    BsnSession.prototype.hasScope = function (scope) {
        return this._authenticator.hasScope(scope);
    };
    BsnSession.prototype.hasScopeForOperation = function (operation, action) {
        var requiredScope = entities_1.bsnGetRequiredScopeForOperation(operation, action);
        return !lodash_1.isNil(requiredScope) && this._authenticator.hasScope(requiredScope);
    };
    BsnSession.prototype.getStoredJsonFile = function (url) {
        if (!url) {
            var errorReason = 'getStoredJsonFile: File URL must be provided';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        var authenticator = authenticator_1.getBsnAuthenticator();
        var request = new Request(url);
        return fetch(request)
            .then(function (response) { return authenticator.logResponse(response, request); })
            .then(function (response) { return common_1.checkFileRetrievalStatus(response); })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (fileObject) { return fileObject; })
            .catch(function (error) {
            throw common_1.processBsnRequestError(error);
        });
    };
    BsnSession.prototype.getStoredXmlFile = function (url, options) {
        if (!url) {
            var errorReason = 'getStoredXmlFile: File URL must be provided';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        var authenticator = authenticator_1.getBsnAuthenticator();
        var request = new Request(url);
        return fetch(request)
            .then(function (response) { return authenticator.logResponse(response, request); })
            .then(function (response) { return common_1.checkFileRetrievalStatus(response); })
            .then(function (response) { return authenticator.getTextResponse(response); })
            .then(function (xmlText) {
            return new Promise(function (resolve, reject) {
                xml2js_1.parseString(xmlText, options, function (error, result) {
                    if (error) {
                        reject(new error_1.BsnError(error_1.BsnErrorType.invalidDataError, 'getStoredXmlFile: Could not parse XML: ' + error.message));
                    }
                    else {
                        resolve(result);
                    }
                });
            });
        })
            .then(function (fileObject) { return fileObject; })
            .catch(function (error) {
            throw common_1.processBsnRequestError(error);
        });
    };
    BsnSession.prototype.getStoredTextFile = function (url) {
        if (!url) {
            var errorReason = 'getStoredTextFile: File URL must be provided';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        var authenticator = authenticator_1.getBsnAuthenticator();
        var request = new Request(url);
        return fetch(request)
            .then(function (response) { return authenticator.logResponse(response, request); })
            .then(function (response) { return common_1.checkFileRetrievalStatus(response); })
            .then(function (response) { return authenticator.getTextResponse(response); })
            .catch(function (error) {
            throw common_1.processBsnRequestError(error);
        });
    };
    BsnSession.prototype.testUrl = function (url) {
        if (!url) {
            var errorReason = 'testUrl: a valid string for the URL must be provided';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        var request = new Request(url);
        return fetch(request)
            .then(function (response) { return authenticator_1.getBsnAuthenticator().logResponse(response, request); })
            .then(function (response) { return common_1.checkFileRetrievalStatus(response); })
            .then(function () { return true; })
            .catch(function () { return false; });
    };
    BsnSession.prototype.fetchOAuthToken = function () {
        return common_1.fetchOAuthToken();
    };
    BsnSession.prototype.validateActivationCode = function (token, activationCode) {
        return this._authenticator.validateActivationCode(token, activationCode);
    };
    BsnSession.prototype.deleteActivationCode = function (token, activationCode) {
        return this._authenticator.deleteActivationCode(token, activationCode);
    };
    BsnSession.prototype.setupTestExpiredToken = function () {
        this._authenticator.setupTestExpiredToken();
    };
    BsnSession.prototype.modifyRefreshTokenToExpired = function () {
        this._authenticator.modifyRefreshTokenToExpired();
    };
    BsnSession.prototype.modifyAccessTokenToExpired = function () {
        this._authenticator.modifyAccessTokenToExpired();
    };
    return BsnSession;
}());
exports.BsnSession = BsnSession;
(function (derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
})(BsnSession, [
    content_1.BsnContentOperations, presentation_1.BsnPresentationOperations,
    textFeed_1.BsnTextFeedOperations, mediaFeed_1.BsnMediaFeedOperations, dynamicPlaylist_1.BsnDynamicPlaylistOperations, taggedPlaylist_1.BsnTaggedPlaylistOperations,
    htmlSite_1.BsnHtmlSiteOperations, deviceWebPage_1.BsnDeviceWebPageOperations, plugin_1.BsnPluginOperations, tags_1.BsnTagOperations, profile_1.BsnProfileOperations,
    self_1.BsnSelfOperations, device_1.BsnDeviceOperations, deviceProvisioning_1.BsnDeviceProvisioningOperations, group_1.BsnGroupOperations,
    user_1.BsnUserOperations, role_1.BsnRoleOperations, businessOperation_1.BsnBusinessOperationOperations, password_1.BsnPasswordOperations,
    contentProcessOperation_1.RemoteContentProcessOperations, deviceLog_1.BsnDeviceLogOperations, subscription_1.BsnSubscriptionOperations,
]);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnWebPageUploadItem = exports.bsnCreateWebPageUploadItem = void 0;
var bscore_1 = __webpack_require__(2);
var error_1 = __webpack_require__(1);
var authenticator_1 = __webpack_require__(4);
var common_1 = __webpack_require__(0);
var uploadFileItem_1 = __webpack_require__(11);
function bsnCreateWebPageUploadItem(htmlSiteSpec, jobIndex, progressCallback) {
    return new BsnWebPageUploadItem(htmlSiteSpec, jobIndex, progressCallback);
}
exports.bsnCreateWebPageUploadItem = bsnCreateWebPageUploadItem;
var BsnWebPageUploadItem = (function () {
    function BsnWebPageUploadItem(htmlSiteSpec, jobIndex, progressCallback) {
        var _this = this;
        if (jobIndex === void 0) { jobIndex = 0; }
        this._activeUploadMap = new Map();
        this._authenticator = authenticator_1.getBsnAuthenticator();
        this._totalBytes = 0;
        this._cancellationRequested = false;
        this._bsnWebPageUploadParams = {
            name: null,
            sessionToken: null,
            uploadToken: null,
            fileName: undefined,
            virtualPath: null,
            mediaType: uploadFileItem_1.BsnUploadMediaType.WebPage,
            fileSize: 0,
            fileLastModifiedDate: new Date(),
            shA1Hash: null,
            fileThumb: null,
            assets: [],
        };
        this._status = bscore_1.BsUploadItemStatus.Pending;
        if (!htmlSiteSpec) {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'HtmlSite specification is invalid');
        }
        if (!htmlSiteSpec.siteName) {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Web site name must be specified');
        }
        if (!htmlSiteSpec.indexUploadFile) {
            throw new error_1.BsnError(error_1.BsnErrorType.assetNotFoundError, 'Index file not specified');
        }
        if (!(htmlSiteSpec.siteType === bscore_1.AssetType.HtmlSite || htmlSiteSpec.siteType === bscore_1.AssetType.DeviceHtmlSite)) {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Web site type must be HtmlSite or DeviceHtmlSite');
        }
        this._indexFileSpec = htmlSiteSpec.indexUploadFile;
        this._assetFileSpec = htmlSiteSpec.assetUploadFiles;
        this._jobIndex = jobIndex;
        this._webPageType = htmlSiteSpec.siteType;
        this._bsnWebPageUploadParams.name = htmlSiteSpec.siteName;
        this._bsnWebPageUploadParams.fileName = this._indexFileSpec.file.fileName;
        this._bsnWebPageUploadParams.mediaType = htmlSiteSpec.siteType === bscore_1.AssetType.DeviceHtmlSite ?
            uploadFileItem_1.BsnUploadMediaType.DeviceWebPage : uploadFileItem_1.BsnUploadMediaType.WebPage;
        this._bsnWebPageUploadParams.fileSize = this._indexFileSpec.file.fileSize;
        this._bsnWebPageUploadParams.fileLastModifiedDate = this._indexFileSpec.file.lastModifiedDate;
        this._progressCallback = progressCallback;
        this._indexFileIndex = this._assetFileSpec ? this._assetFileSpec.length : 0;
        this._assetFileIndexOffset = 0;
        var initFileProgress = function (fileIndex, fileName, fileSize) { return ({
            jobIndex: fileIndex,
            fileName: fileName, fileSize: fileSize,
            status: bscore_1.BsUploadItemStatus.Pending, fractionComplete: 0,
        }); };
        this._indexFileUploadProgress =
            initFileProgress(this._indexFileIndex, this._indexFileSpec.file.fileName, this._indexFileSpec.file.fileSize);
        var initFileResult = function (fileIndex) { return ({
            jobIndex: fileIndex, assetItem: null, status: bscore_1.BsUploadItemStatus.Pending,
        }); };
        this._indexFileUploadResult = initFileResult(this._indexFileIndex);
        this._bsnWebPageUploadParams.assets = [];
        this._assetUploadProgress = [];
        this._assetUploadResult = [];
        this._totalBytes = this._bsnWebPageUploadParams.fileSize;
        if (this._assetFileSpec) {
            this._assetFileSpec.forEach(function (webPageAsset, assetIndex) {
                _this._bsnWebPageUploadParams.assets.push({
                    sessionToken: null,
                    uploadToken: null,
                    fileName: webPageAsset.file.fileName,
                    virtualPath: null,
                    mediaType: uploadFileItem_1.getUploadMediaTypeForFile(webPageAsset.file.fileName),
                    fileSize: webPageAsset.file.fileSize,
                    fileLastModifiedDate: webPageAsset.file.lastModifiedDate,
                    shA1Hash: null,
                    fileThumb: null,
                    webPageAssetId: 0,
                    relativePath: common_1.standardPathToBsnRelativePath(webPageAsset.destinationPath),
                });
                _this._assetUploadProgress.push(initFileProgress(assetIndex + _this._assetFileIndexOffset, webPageAsset.file.fileName, webPageAsset.file.fileSize));
                _this._assetUploadResult.push(initFileResult(assetIndex + _this._assetFileIndexOffset));
                _this._totalBytes += webPageAsset.file.fileSize;
            });
        }
        if (htmlSiteSpec.existingAsset && htmlSiteSpec.existingAsset.networkId) {
            this._bsnWebPageUploadParams.webPageId =
                htmlSiteSpec.existingAsset.networkId;
        }
    }
    BsnWebPageUploadItem.getBsnWebPageUploadStatus = function (entity) {
        var name = entity.name, sessionToken = entity.sessionToken, uploadToken = entity.uploadToken, contentId = entity.contentId, fileName = entity.fileName, fileSize = entity.fileSize, shA1Hash = entity.shA1Hash, state = entity.state, chunks = entity.chunks, assets = entity.assets;
        var status = {
            name: name,
            sessionToken: sessionToken,
            uploadToken: uploadToken,
            contentId: contentId,
            fileName: fileName,
            fileSize: fileSize,
            shA1Hash: shA1Hash,
            state: state,
            startTime: entity.startTime ? new Date(entity.startTime) : null,
            endTime: entity.endTime ? new Date(entity.endTime) : null,
            lastActivityTime: entity.lastActivityTime ? new Date(entity.lastActivityTime) : null,
            chunks: chunks,
            assets: [],
        };
        if (assets) {
            status.assets = assets.map(function (asset) {
                return uploadFileItem_1.BsnFileUploadItem.getBsnFileUploadStatus(asset);
            });
        }
        return status;
    };
    Object.defineProperty(BsnWebPageUploadItem.prototype, "jobIndex", {
        get: function () {
            return this._jobIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "name", {
        get: function () {
            return this._bsnWebPageUploadParams.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "totalFileCount", {
        get: function () {
            return this._bsnWebPageUploadParams.assets.length + 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "uploadedFileCount", {
        get: function () {
            return this._assetSummary ? this._assetSummary.complete : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "totalByteCount", {
        get: function () {
            return this._totalBytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "maxConcurrentFileUploads", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "fractionComplete", {
        get: function () {
            if (this._status === bscore_1.BsUploadItemStatus.Cancelled || this._status === bscore_1.BsUploadItemStatus.Failed) {
                return 1;
            }
            var getUploadedBytes = function (uploadFileProgress) {
                switch (uploadFileProgress.status) {
                    case bscore_1.BsUploadItemStatus.Uploaded:
                    case bscore_1.BsUploadItemStatus.Matched:
                    case bscore_1.BsUploadItemStatus.Failed:
                    case bscore_1.BsUploadItemStatus.Cancelled:
                        return uploadFileProgress.fileSize;
                    case bscore_1.BsUploadItemStatus.Uploading:
                        return Math.trunc(uploadFileProgress.fileSize * uploadFileProgress.fractionComplete);
                    default:
                        return 0;
                }
            };
            var totalUploadBytes = this._assetUploadProgress.reduce(function (total, uploadFileProgress) {
                return total + getUploadedBytes(uploadFileProgress);
            }, getUploadedBytes(this._indexFileUploadProgress));
            var pct = totalUploadBytes / this._totalBytes;
            return pct <= 1 ? pct : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "detailedUploadProgress", {
        get: function () {
            return {
                jobIndex: this.jobIndex,
                name: this._bsnWebPageUploadParams.name,
                totalFiles: this.totalFileCount,
                totalBytes: this.totalByteCount,
                uploadedFiles: this.uploadedFileCount,
                indexFileUploadProgress: this._indexFileUploadProgress,
                assetUploadProgress: this._assetUploadProgress,
                status: this.status,
                fractionComplete: this.fractionComplete,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "summarizedUploadProgress", {
        get: function () {
            return {
                jobIndex: this.jobIndex,
                name: this._bsnWebPageUploadParams.name,
                totalFiles: this.totalFileCount,
                totalBytes: this.totalByteCount,
                uploadedFiles: this.uploadedFileCount,
                status: this.status,
                fractionComplete: this.fractionComplete,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "isUpdate", {
        get: function () {
            return this._bsnWebPageUploadParams.hasOwnProperty('webPageId');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "startWebPageUploadHeaders", {
        get: function () {
            var headers = new Headers(this._authenticator.commonHeaders);
            headers.append('Accept', uploadFileItem_1.UploadAcceptHeader.webpageUploadStatus);
            headers.append('Accept', uploadFileItem_1.UploadAcceptHeader.uploadError);
            headers.set('Content-Type', uploadFileItem_1.UploadAcceptHeader.webpageStartUpload);
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "startWebPageUpdateHeaders", {
        get: function () {
            var headers = new Headers(this._authenticator.commonHeaders);
            headers.append('Accept', uploadFileItem_1.UploadAcceptHeader.webpageUploadStatus);
            headers.append('Accept', uploadFileItem_1.UploadAcceptHeader.uploadError);
            headers.set('Content-Type', uploadFileItem_1.UploadAcceptHeader.webpageStartUpdate);
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "webPageUploadStatusHeaders", {
        get: function () {
            var headers = new Headers(this._authenticator.commonHeaders);
            headers.append('Accept', uploadFileItem_1.UploadAcceptHeader.webpageUploadStatus);
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "completeWebPageUploadHeaders", {
        get: function () {
            var headers = new Headers(this.startWebPageUploadHeaders);
            headers.set('Content-Type', uploadFileItem_1.UploadAcceptHeader.webpageCompleteUpload);
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsnWebPageUploadItem.prototype, "completeWebPageUpdateHeaders", {
        get: function () {
            var headers = new Headers(this.startWebPageUpdateHeaders);
            headers.set('Content-Type', uploadFileItem_1.UploadAcceptHeader.webpageCompleteUpdate);
            return headers;
        },
        enumerable: false,
        configurable: true
    });
    BsnWebPageUploadItem.prototype.upload = function () {
        var _this = this;
        this._status = bscore_1.BsUploadItemStatus.Uploading;
        if (this._progressCallback) {
            try {
                this._progressCallback(this.detailedUploadProgress);
            }
            catch (error) {
                return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.unexpectedError, 'Exception in progress callback: ' + error.message));
            }
        }
        return this.startWebPageSession()
            .then(function () {
            return _this.processWebPageAssetUploads()
                .then(function () {
                if (_this._cancellationRequested) {
                    return _this._bsnWebPageUploadStatus;
                }
                return _this.completeWebPageUpload();
            })
                .then(function (webPageUploadStatus) {
                var assetItem = null;
                if (_this._cancellationRequested) {
                    _this._status = bscore_1.BsUploadItemStatus.Cancelled;
                }
                else {
                    _this._status = bscore_1.BsUploadItemStatus.Uploaded;
                    assetItem = _this.getBsAssetItemFromUpload(webPageUploadStatus);
                }
                if (_this._progressCallback) {
                    _this._progressCallback(_this.detailedUploadProgress);
                }
                return {
                    jobIndex: _this._jobIndex,
                    assetItem: assetItem,
                    status: _this._status,
                };
            });
        })
            .catch(function (error) {
            _this._status = bscore_1.BsUploadItemStatus.Failed;
            if (_this._progressCallback) {
                _this._progressCallback(_this.detailedUploadProgress);
            }
            return {
                jobIndex: _this._jobIndex,
                assetItem: null,
                status: _this._status,
                error: common_1.processBsnRequestError(error),
            };
        });
    };
    BsnWebPageUploadItem.prototype.cancel = function () {
        this._cancellationRequested = true;
    };
    BsnWebPageUploadItem.prototype.startWebPageSession = function () {
        var _this = this;
        var body = JSON.stringify(this._bsnWebPageUploadParams);
        return this._authenticator.checkAuthentication()
            .then(function () { return _this._authenticator.checkNetworkActive(); })
            .then(function () {
            var headers = _this.isUpdate ? _this.startWebPageUpdateHeaders : _this.startWebPageUploadHeaders;
            var request = new Request(common_1.BsnUploadUrl + 'Sessions/', { method: 'POST', headers: headers, body: body });
            return fetch(request)
                .then(function (response) { return _this._authenticator.checkStatus(response, request, body); });
        })
            .then(function (response) { return _this._authenticator.getJsonResponse(response); })
            .then(function (statusEntity) {
            _this._bsnWebPageUploadStatus = BsnWebPageUploadItem.getBsnWebPageUploadStatus(statusEntity);
            _this._bsnWebPageUploadParams.sessionToken = _this._bsnWebPageUploadStatus.sessionToken;
            _this._bsnWebPageUploadParams.uploadToken = _this._bsnWebPageUploadStatus.uploadToken;
            _this._bsnWebPageUploadParams.assets.forEach(function (asset, index) {
                asset.sessionToken = _this._bsnWebPageUploadStatus.sessionToken;
                asset.uploadToken = _this._bsnWebPageUploadStatus.assets[index].uploadToken;
            });
            return _this._bsnWebPageUploadStatus;
        })
            .catch(function (error) {
            throw common_1.processBsnRequestError(error);
        });
    };
    BsnWebPageUploadItem.prototype.processWebPageAssetUploads = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var processNextWebPageAssetUpload = function () {
                _this.updateWebPageAssetSummary();
                if (_this._assetSummary.complete === _this.totalFileCount) {
                    _this.getBsnWebPageUploadStatus()
                        .then(function (status) {
                        _this._bsnWebPageUploadStatus = status;
                        resolve(_this._bsnWebPageUploadStatus);
                    })
                        .catch(function (error) { return reject(error); });
                }
                else {
                    if (!_this._cancellationRequested) {
                        if (_this._assetSummary.uploading < _this.maxConcurrentFileUploads) {
                            var nextIndex = _this._assetSummary.nextPendingIndex;
                            if (nextIndex !== null) {
                                _this._activeUploadMap.set(nextIndex, _this.uploadWebPageFile(nextIndex));
                            }
                        }
                        if (_this._activeUploadMap.size === 0) {
                            reject(new error_1.BsnError(error_1.BsnErrorType.unexpectedError, 'Web page upload map is inconsistent'));
                            return;
                        }
                    }
                    else {
                        if (_this._assetSummary.uploading !== 0) {
                            _this._activeUploadMap.forEach(function (webPageUploadItem) { return webPageUploadItem.uploadFile.cancel(); });
                        }
                        resolve(_this._bsnWebPageUploadStatus);
                        return;
                    }
                    var promiseArray_1 = [];
                    _this._activeUploadMap.forEach(function (webPageUploadItem) { return promiseArray_1.push(webPageUploadItem.promise); });
                    return Promise.race(promiseArray_1)
                        .then(function (uploadResult) {
                        _this._activeUploadMap.delete(uploadResult.jobIndex);
                        if (uploadResult.jobIndex === _this._indexFileIndex) {
                            _this._indexFileUploadResult = uploadResult;
                        }
                        else {
                            var assetIndex = uploadResult.jobIndex - _this._assetFileIndexOffset;
                            _this._assetUploadResult[assetIndex] = uploadResult;
                            if (uploadResult.status !== bscore_1.BsUploadItemStatus.Failed) {
                                _this._bsnWebPageUploadParams.assets[assetIndex].webPageAssetId =
                                    uploadResult.assetItem.networkId;
                            }
                            else {
                                var reason = 'File: ' + _this._assetUploadProgress[assetIndex].fileName;
                                if (uploadResult.error) {
                                    reason += ', reason: ' + uploadResult.error.message;
                                }
                                reject(new error_1.BsnError(error_1.BsnErrorType.webPageUploadError, reason));
                                return;
                            }
                        }
                        return processNextWebPageAssetUpload();
                    });
                }
            };
            return processNextWebPageAssetUpload();
        });
    };
    BsnWebPageUploadItem.prototype.uploadWebPageFile = function (fileIndex) {
        var fileUploadSpec = fileIndex === this._indexFileIndex ?
            this._indexFileSpec : this._assetFileSpec[fileIndex - this._assetFileIndexOffset];
        var uploadParams = fileIndex === this._indexFileIndex ?
            this._bsnWebPageUploadParams : this._bsnWebPageUploadParams.assets[fileIndex - this._assetFileIndexOffset];
        var uploadFile = uploadFileItem_1.bsnCreateFileUploadItem(fileUploadSpec.file, uploadParams.virtualPath, fileIndex, this.processFileUploadProgress.bind(this), null, uploadParams.sessionToken, uploadParams.uploadToken, fileUploadSpec.destinationPath, uploadParams.mediaType);
        return { uploadFile: uploadFile, promise: uploadFile.upload() };
    };
    BsnWebPageUploadItem.prototype.processFileUploadProgress = function (progress) {
        if (progress.jobIndex === this._indexFileIndex) {
            this._indexFileUploadProgress = progress;
        }
        else {
            this._assetUploadProgress[progress.jobIndex - this._assetFileIndexOffset] = progress;
        }
        if (this._progressCallback) {
            this.updateWebPageAssetSummary();
            this._progressCallback(this.detailedUploadProgress);
        }
    };
    BsnWebPageUploadItem.prototype.completeWebPageUpload = function () {
        var _this = this;
        var body = JSON.stringify(this._bsnWebPageUploadParams);
        return this._authenticator.checkAuthentication()
            .then(function () {
            var headers = _this.isUpdate ? _this.completeWebPageUpdateHeaders : _this.completeWebPageUploadHeaders;
            var request = new Request(common_1.BsnUploadUrl + 'Sessions/' + _this._bsnWebPageUploadParams.sessionToken + '/', { method: 'PUT', headers: headers, body: body });
            return fetch(request)
                .then(function (response) { return _this._authenticator.checkStatus(response, request, body); });
        })
            .then(function (response) { return _this._authenticator.getJsonResponse(response); })
            .then(function (statusEntity) {
            _this._bsnWebPageUploadStatus = BsnWebPageUploadItem.getBsnWebPageUploadStatus(statusEntity);
            return _this._bsnWebPageUploadStatus;
        })
            .catch(function (error) {
            throw common_1.processBsnRequestError(error);
        });
    };
    BsnWebPageUploadItem.prototype.cancelWebPageUpload = function () {
        var _this = this;
        return this._authenticator.checkAuthentication()
            .then(function () {
            var request = new Request(common_1.BsnUploadUrl + 'Sessions/' + _this._bsnWebPageUploadParams.sessionToken, { method: 'DELETE',
                headers: _this._authenticator.requestHeaders,
            });
            return fetch(request)
                .then(function (response) { return _this._authenticator.checkStatus(response, request); });
        })
            .then(function () { return null; })
            .catch(function (error) {
            throw common_1.processBsnRequestError(error);
        });
    };
    BsnWebPageUploadItem.prototype.getBsnWebPageUploadStatus = function () {
        var _this = this;
        return this._authenticator.checkAuthentication()
            .then(function () {
            var request = new Request(common_1.BsnUploadUrl + 'Sessions/' + _this._bsnWebPageUploadParams.sessionToken, { method: 'GET',
                headers: _this.webPageUploadStatusHeaders,
            });
            return fetch(request)
                .then(function (response) { return _this._authenticator.checkStatus(response, request); });
        })
            .then(function (response) { return _this._authenticator.getJsonResponse(response); })
            .then(function (statusEntity) {
            _this._bsnWebPageUploadStatus = BsnWebPageUploadItem.getBsnWebPageUploadStatus(statusEntity);
            return _this._bsnWebPageUploadStatus;
        })
            .catch(function (error) {
            throw common_1.processBsnRequestError(error);
        });
    };
    BsnWebPageUploadItem.prototype.updateWebPageAssetSummary = function () {
        var _this = this;
        this._assetSummary = { pending: 0, uploading: 0, complete: 0, failed: 0, nextPendingIndex: null };
        var updateSummaryForUploadProgress = function (uploadProgress) {
            switch (uploadProgress.status) {
                case bscore_1.BsUploadItemStatus.Pending:
                    if (_this._assetSummary.nextPendingIndex === null) {
                        _this._assetSummary.nextPendingIndex = uploadProgress.jobIndex;
                    }
                    _this._assetSummary.pending++;
                    break;
                case bscore_1.BsUploadItemStatus.Uploading:
                    _this._assetSummary.uploading++;
                    break;
                case bscore_1.BsUploadItemStatus.Uploaded:
                case bscore_1.BsUploadItemStatus.Matched:
                    _this._assetSummary.complete++;
                    break;
                case bscore_1.BsUploadItemStatus.Cancelled:
                case bscore_1.BsUploadItemStatus.Failed:
                    _this._assetSummary.failed++;
                    break;
            }
        };
        this._assetUploadProgress.forEach(updateSummaryForUploadProgress);
        updateSummaryForUploadProgress(this._indexFileUploadProgress);
    };
    BsnWebPageUploadItem.prototype.getBsAssetItemFromUpload = function (status) {
        var _this = this;
        var name = status.name, contentId = status.contentId, indexFileName = status.fileName, fileSize = status.fileSize, indexFileHash = status.shA1Hash;
        var assetItem = {
            id: '0',
            name: name,
            path: '/',
            networkId: contentId,
            location: bscore_1.AssetLocation.Bsn,
            locator: bscore_1.bscGetBsnAssetLocatorKey(contentId, this._webPageType),
            assetType: this._webPageType,
            scope: this._authenticator.networkName,
            fileSize: fileSize,
            fileHash: indexFileHash,
            lastModifiedDate: this._bsnWebPageUploadParams.fileLastModifiedDate,
            uploadDate: status.endTime,
        };
        var htmlSite = {
            location: bscore_1.AssetLocation.Bsn,
            id: contentId,
            name: name,
            uploadDate: status.endTime,
            indexFile: {
                name: indexFileName,
                path: '/',
                fileUrl: null,
                fileSize: fileSize,
                fileHash: indexFileHash,
            },
            permissions: [],
            assets: null,
        };
        if (status.assets) {
            htmlSite.assets = [];
            status.assets.forEach(function (fileUploadStatus, index) {
                var fileName = fileUploadStatus.fileName, assetFileSize = fileUploadStatus.fileSize, assetHash = fileUploadStatus.shA1Hash;
                var htmlAsset = {
                    name: fileName,
                    path: _this._assetFileSpec[index].destinationPath,
                    fileUrl: null,
                    fileSize: assetFileSize,
                    fileHash: assetHash,
                };
                htmlSite.assets.push(htmlAsset);
            });
        }
        assetItem.assetData = htmlSite;
        return assetItem;
    };
    return BsnWebPageUploadItem;
}());
exports.BsnWebPageUploadItem = BsnWebPageUploadItem;


/***/ }),
/* 17 */
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
/* 18 */
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
__exportStar(__webpack_require__(1), exports);
var session_1 = __webpack_require__(15);
Object.defineProperty(exports, "BsnSession", { enumerable: true, get: function () { return session_1.BsnSession; } });
Object.defineProperty(exports, "bsnGetSession", { enumerable: true, get: function () { return session_1.bsnGetSession; } });
Object.defineProperty(exports, "getBsnSession", { enumerable: true, get: function () { return session_1.getBsnSession; } });
var common_1 = __webpack_require__(0);
Object.defineProperty(exports, "BsnSessionStatus", { enumerable: true, get: function () { return common_1.BsnSessionStatus; } });
Object.defineProperty(exports, "bsnGetAuthUrl", { enumerable: true, get: function () { return common_1.bsnGetAuthUrl; } });
Object.defineProperty(exports, "bsnGetApiUrl", { enumerable: true, get: function () { return common_1.bsnGetApiUrl; } });
Object.defineProperty(exports, "bsnGetUploadApiUrl", { enumerable: true, get: function () { return common_1.bsnGetUploadApiUrl; } });
Object.defineProperty(exports, "BsnLogLevel", { enumerable: true, get: function () { return common_1.BsnLogLevel; } });
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(7), exports);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnBusinessOperationOperations = void 0;
var common_1 = __webpack_require__(0);
var entities_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(3);
var BusinessOperationApiPath = 'Operations/Root/';
var BsnBusinessOperationOperations = (function () {
    function BsnBusinessOperationOperations() {
    }
    BsnBusinessOperationOperations.prototype.getBusinessOperationTree = function (root) {
        var opType = lodash_1.isNil(root) || root === entities_1.BsnBusinessOperationType.Network ? '' : root + '/';
        return common_1.getBsnListData(BusinessOperationApiPath + opType);
    };
    return BsnBusinessOperationOperations;
}());
exports.BsnBusinessOperationOperations = BsnBusinessOperationOperations;


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
exports.BsnContentOperations = void 0;
var bscore_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var entityTemplate_1 = __webpack_require__(8);
var error_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(3);
var ContentApiPath = 'Content/';
var BsnContentOperations = (function () {
    function BsnContentOperations() {
    }
    BsnContentOperations.prototype.getContent = function (options) {
        return common_1.getAllBsnListFragments(ContentApiPath, options, true);
    };
    BsnContentOperations.prototype.getContentBySegment = function (options) {
        return common_1.getBsnListBySegment(ContentApiPath, options, true);
    };
    BsnContentOperations.prototype.getNextContentSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(ContentApiPath, enumerator);
    };
    BsnContentOperations.prototype.getContentItemCount = function (options) {
        return common_1.getBsnEntityCount(ContentApiPath, options, true);
    };
    BsnContentOperations.prototype.getContentItem = function (id) {
        if (!id) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Content ID is not valid'));
        }
        return common_1.getBsnEntityData(ContentApiPath, id);
    };
    BsnContentOperations.prototype.getContentItemsByName = function (name, virtualPath) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Content name is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'fileName', bscore_1.BsnStringFilterOperator.Is, name)),
        };
        if (virtualPath) {
            enumOptions.virtualPath = virtualPath;
        }
        return this.getContent(enumOptions);
    };
    BsnContentOperations.prototype.existsContentItem = function (name, virtualPath, folder) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Name is not valid'));
        }
        var folderComparator = folder ? bscore_1.BsnStringFilterOperator.Is : bscore_1.BsnStringFilterOperator.IsNot;
        var enumOptions = {
            filter: filter_1.bsnCreateFilter([
                bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'fileName', bscore_1.BsnStringFilterOperator.Is, name),
                bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'mediaType', folderComparator, 'Folder'),
            ]),
        };
        if (virtualPath) {
            enumOptions.virtualPath = virtualPath;
        }
        return common_1.getBsnEntityCount(ContentApiPath, enumOptions, true)
            .then(function (count) { return count > 0; });
    };
    BsnContentOperations.prototype.getParentFolderListForContentPath = function (virtualPath) {
        var _this = this;
        var folderNames = virtualPath.split('/').reduce(function (res, str) {
            if (str.length) {
                res.push(str);
            }
            return res;
        }, []);
        var promises = [];
        var tempPath = '/';
        folderNames.forEach(function (name) {
            var promise = _this.getContentItemsByName(name, tempPath)
                .then(function (entities) {
                var folderEntity = null;
                if (entities.length) {
                    entities.some(function (entity) {
                        if (entity.mediaType === 'Folder') {
                            folderEntity = entity;
                            return true;
                        }
                        return false;
                    });
                }
                return folderEntity;
            });
            promises.push(promise);
            tempPath = tempPath.concat(name + '/');
        });
        if (promises.length) {
            return Promise.all(promises)
                .then(function (folderEntities) {
                var parentList = [];
                folderNames.reverse().forEach(function (folderName) {
                    var entity = lodash_1.find(folderEntities, ['name', folderName]);
                    if (!lodash_1.isNil(entity)) {
                        parentList.push(entity);
                    }
                });
                return parentList;
            });
        }
        return Promise.resolve([]);
    };
    BsnContentOperations.prototype.deleteContentItem = function (id) {
        if (!id) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Content ID must be provided for delete'));
        }
        return common_1.deleteBsnEntity(ContentApiPath, id);
    };
    BsnContentOperations.prototype.changeContentPath = function (id, newVirtualPath) {
        if (!id) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Content ID must be provided for path change'));
        }
        return this.getContentItem(id)
            .then(function (entity) {
            var virtualPath = common_1.checkEnclosingPathSeparators(newVirtualPath);
            if (entity.virtualPath.toUpperCase() !== virtualPath.toUpperCase()) {
                virtualPath = common_1.standardPathToBsnVirtualPath(virtualPath);
                var newEntity = void 0;
                if (entity.mediaType === 'Folder') {
                    newEntity = __assign(__assign({}, entityTemplate_1.bsnGetFolderContentEntityTemplate()), { id: entity.id, virtualPath: virtualPath, permissions: entity.permissions });
                }
                else {
                    newEntity = __assign(__assign({}, entityTemplate_1.bsnGetFileContentEntityTemplate()), { id: entity.id, virtualPath: virtualPath, tags: entity.tags, permissions: entity.permissions });
                }
                return common_1.updateBsnEntity(ContentApiPath, id, JSON.stringify(newEntity));
            }
            return null;
        });
    };
    BsnContentOperations.prototype.createFolder = function (name, virtualPath) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Folder name is not valid'));
        }
        if (lodash_1.isNil(virtualPath) || virtualPath.length === 0) {
            virtualPath = '/';
        }
        else if (virtualPath.charAt(0) !== '/') {
            virtualPath = '/' + virtualPath;
        }
        var apiPath = ContentApiPath + 'Root' + virtualPath;
        return common_1.addBsnListItem(apiPath, JSON.stringify({ name: name }, null, 0));
    };
    BsnContentOperations.prototype.getContentItemTags = function (id) {
        return common_1.getBsnEntityTags(ContentApiPath, id);
    };
    BsnContentOperations.prototype.setContentItemTags = function (id, tags) {
        return common_1.setBsnEntityTags(ContentApiPath, id, tags);
    };
    BsnContentOperations.prototype.deleteContentItemTags = function (id, tagKeys) {
        return common_1.deleteBsnEntityTags(ContentApiPath, id, tagKeys);
    };
    BsnContentOperations.prototype.getContentItemPermissions = function (id) {
        return common_1.getBsnEntityPermissions(ContentApiPath, id);
    };
    BsnContentOperations.prototype.setContentItemPermissions = function (id, permissions) {
        return common_1.setBsnEntityPermissions(ContentApiPath, id, permissions);
    };
    BsnContentOperations.prototype.replaceContentItemPermissions = function (id, permissions) {
        return common_1.replaceBsnEntityPermissions(ContentApiPath, id, permissions);
    };
    BsnContentOperations.prototype.deleteContentItemPermissions = function (id, permissions) {
        return common_1.deleteBsnEntityPermissions(ContentApiPath, id, permissions);
    };
    return BsnContentOperations;
}());
exports.BsnContentOperations = BsnContentOperations;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnDeviceOperations = void 0;
var bscore_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var entities_1 = __webpack_require__(6);
var error_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(3);
var DeviceApiPath = 'Devices/';
var DeviceErrorApiPathElement = "/Errors/";
var DeviceDownloadApiPathElement = "/Downloads/";
var DeviceScreenshotApiPathElement = '/Screenshots/';
var DeviceBeaconApiPathElement = '/Beacons/';
var BsnDeviceOperations = (function () {
    function BsnDeviceOperations() {
    }
    BsnDeviceOperations.getDeviceEntityForUpdate = function (updateData) {
        var id = updateData.id, serial = updateData.serial, name = updateData.name, concatUnitNameAndSerial = updateData.concatUnitNameAndSerial, description = updateData.description, targetGroup = updateData.targetGroup, targetBrightWall = updateData.targetBrightWall, targetBrightWallScreenNumber = updateData.targetBrightWallScreenNumber, targetTimeZone = updateData.targetTimeZone, contentCheckPeriod = updateData.contentCheckPeriod, contentDownloadsStartTime = updateData.contentDownloadsStartTime, contentDownloadsEndTime = updateData.contentDownloadsEndTime, healthReportingPeriod = updateData.healthReportingPeriod, healthReportingStartTime = updateData.healthReportingStartTime, healthReportingEndTime = updateData.healthReportingEndTime, networkSettings = updateData.networkSettings, remoteSnapshotSettings = updateData.remoteSnapshotSettings, logsSettings = updateData.logsSettings, diagnosticWebServerSettings = updateData.diagnosticWebServerSettings, localWebServerSettings = updateData.localWebServerSettings, deviceLocation = updateData.deviceLocation, forceReboot = updateData.forceReboot, forceRecovery = updateData.forceRecovery, forceReformat = updateData.forceReformat, forceLogUpload = updateData.forceLogUpload;
        var screenColor = entities_1.bsColorToBsnColor(updateData.screenColor);
        return {
            id: id, serial: serial, name: name, concatUnitNameAndSerial: concatUnitNameAndSerial, description: description,
            targetGroup: targetGroup, targetBrightWall: targetBrightWall, targetBrightWallScreenNumber: targetBrightWallScreenNumber,
            targetTimeZone: targetTimeZone, screenColor: screenColor, contentCheckPeriod: contentCheckPeriod, contentDownloadsStartTime: contentDownloadsStartTime, contentDownloadsEndTime: contentDownloadsEndTime,
            healthReportingPeriod: healthReportingPeriod, healthReportingStartTime: healthReportingStartTime, healthReportingEndTime: healthReportingEndTime,
            networkSettings: networkSettings, remoteSnapshotSettings: remoteSnapshotSettings, logsSettings: logsSettings,
            diagnosticWebServerSettings: diagnosticWebServerSettings, localWebServerSettings: localWebServerSettings, deviceLocation: deviceLocation,
            forceReboot: forceReboot, forceRecovery: forceRecovery, forceReformat: forceReformat, forceLogUpload: forceLogUpload,
        };
    };
    BsnDeviceOperations.prototype.getDeviceList = function (options) {
        return common_1.getAllBsnListFragments(DeviceApiPath, options);
    };
    BsnDeviceOperations.prototype.getDeviceListBySegment = function (options) {
        return common_1.getBsnListBySegment(DeviceApiPath, options);
    };
    BsnDeviceOperations.prototype.getNextDeviceListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(DeviceApiPath, enumerator);
    };
    BsnDeviceOperations.prototype.getDeviceListCount = function (options) {
        return common_1.getBsnEntityCount(DeviceApiPath, options);
    };
    BsnDeviceOperations.prototype.getDeviceEntity = function (idOrSerial) {
        return common_1.getBsnEntityData(DeviceApiPath, idOrSerial);
    };
    BsnDeviceOperations.prototype.existsDevice = function (serial) {
        if (!serial) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Serial string is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, entities_1.BsnDeviceField.serial, bscore_1.BsnStringFilterOperator.Is, serial)),
        };
        return common_1.getBsnEntityCount(DeviceApiPath, enumOptions)
            .then(function (count) { return count > 0; });
    };
    BsnDeviceOperations.prototype.updateDevice = function (data) {
        if (lodash_1.isNil(data) || (!data.id && !data.serial)) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Device ID or Serial must be provided for update'));
        }
        try {
            var deviceUpdateEntity = BsnDeviceOperations.getDeviceEntityForUpdate(data);
            return common_1.updateBsnEntity(DeviceApiPath, deviceUpdateEntity.id ? deviceUpdateEntity.id : deviceUpdateEntity.serial, JSON.stringify(deviceUpdateEntity, null, 0));
        }
        catch (error) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Device UpdateData is incomplete or invalid'));
        }
    };
    BsnDeviceOperations.prototype.deleteDevice = function (idOrSerial) {
        if (!idOrSerial) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Device ID or Serial must be provided for delete'));
        }
        return common_1.deleteBsnEntity(DeviceApiPath, idOrSerial);
    };
    BsnDeviceOperations.prototype.getDeviceErrors = function (idOrSerial, options) {
        if (!idOrSerial) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Device ID or Serial must be provided for error retrieval'));
        }
        var path = DeviceApiPath + idOrSerial + DeviceErrorApiPathElement;
        return common_1.getAllBsnListFragments(path, options);
    };
    BsnDeviceOperations.prototype.getDeviceErrorListBySegment = function (idOrSerial, options) {
        var path = DeviceApiPath + idOrSerial + DeviceErrorApiPathElement;
        return common_1.getBsnListBySegment(path, options);
    };
    BsnDeviceOperations.prototype.getNextDeviceErrorListSegment = function (idOrSerial, enumerator) {
        var path = DeviceApiPath + idOrSerial + DeviceErrorApiPathElement;
        return common_1.getNextBsnListSegment(path, enumerator);
    };
    BsnDeviceOperations.prototype.getDeviceDownloads = function (idOrSerial, options) {
        if (!idOrSerial) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Device ID or Serial must be provided for download retrieval'));
        }
        var path = DeviceApiPath + idOrSerial + DeviceDownloadApiPathElement;
        return common_1.getAllBsnListFragments(path, options);
    };
    BsnDeviceOperations.prototype.getDeviceDownloadListBySegment = function (idOrSerial, options) {
        var path = DeviceApiPath + idOrSerial + DeviceDownloadApiPathElement;
        return common_1.getBsnListBySegment(path, options);
    };
    BsnDeviceOperations.prototype.getNextDeviceDownloadListSegment = function (idOrSerial, enumerator) {
        var path = DeviceApiPath + idOrSerial + DeviceDownloadApiPathElement;
        return common_1.getNextBsnListSegment(path, enumerator);
    };
    BsnDeviceOperations.prototype.getDeviceScreenshots = function (idOrSerial, options) {
        if (!idOrSerial) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Device ID or Serial must be provided for screenshot retrieval'));
        }
        var path = DeviceApiPath + idOrSerial + DeviceScreenshotApiPathElement;
        return common_1.getAllBsnListFragments(path, options);
    };
    BsnDeviceOperations.prototype.getDeviceScreenshotsBySegment = function (idOrSerial, options) {
        var path = DeviceApiPath + idOrSerial + DeviceScreenshotApiPathElement;
        return common_1.getBsnListBySegment(path, options);
    };
    BsnDeviceOperations.prototype.getNextDeviceScreenshotsSegment = function (idOrSerial, enumerator) {
        var path = DeviceApiPath + idOrSerial + DeviceScreenshotApiPathElement;
        return common_1.getNextBsnListSegment(path, enumerator);
    };
    BsnDeviceOperations.prototype.getDeviceBeacons = function (idOrSerial, options) {
        if (!idOrSerial) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Device ID or Serial must be provided for Beacon retrieval'));
        }
        var path = DeviceApiPath + idOrSerial + DeviceBeaconApiPathElement;
        return common_1.getAllBsnListFragments(path, options);
    };
    BsnDeviceOperations.prototype.getDeviceBeaconListBySegment = function (idOrSerial, options) {
        var path = DeviceApiPath + idOrSerial + DeviceBeaconApiPathElement;
        return common_1.getBsnListBySegment(path, options);
    };
    BsnDeviceOperations.prototype.getNextDeviceBeaconListSegment = function (idOrSerial, enumerator) {
        var path = DeviceApiPath + idOrSerial + DeviceBeaconApiPathElement;
        return common_1.getNextBsnListSegment(path, enumerator);
    };
    BsnDeviceOperations.prototype.getDeviceBeaconEntity = function (deviceIdOrSerial, beaconId) {
        return common_1.executeApiCall(common_1.BsnUrl + DeviceApiPath + common_1.encodeIdOrName(deviceIdOrSerial) + DeviceBeaconApiPathElement + beaconId + '/');
    };
    BsnDeviceOperations.prototype.getDeviceTags = function (id) {
        return common_1.getBsnEntityTags(DeviceApiPath, id);
    };
    BsnDeviceOperations.prototype.setDeviceTags = function (id, tags) {
        return common_1.setBsnEntityTags(DeviceApiPath, id, tags);
    };
    BsnDeviceOperations.prototype.deleteDeviceTags = function (id, tagKeys) {
        return common_1.deleteBsnEntityTags(DeviceApiPath, id, tagKeys);
    };
    BsnDeviceOperations.prototype.getDevicePermissions = function (idOrSerial) {
        return common_1.getBsnEntityPermissions(DeviceApiPath, idOrSerial);
    };
    BsnDeviceOperations.prototype.setDevicePermissions = function (idOrSerial, permissions) {
        return common_1.setBsnEntityPermissions(DeviceApiPath, idOrSerial, permissions);
    };
    BsnDeviceOperations.prototype.replaceDevicePermissions = function (idOrSerial, permissions) {
        return common_1.replaceBsnEntityPermissions(DeviceApiPath, idOrSerial, permissions);
    };
    BsnDeviceOperations.prototype.deleteDevicePermissions = function (idOrSerial, permissions) {
        return common_1.deleteBsnEntityPermissions(DeviceApiPath, idOrSerial, permissions);
    };
    return BsnDeviceOperations;
}());
exports.BsnDeviceOperations = BsnDeviceOperations;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnDeviceLogOperations = exports.BsncDeviceLogEnumerator = void 0;
var authenticator_1 = __webpack_require__(4);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(3);
var DeviceLogApiPath = '/api/v1/logs/';
var BsncDeviceLogEnumerator = (function () {
    function BsncDeviceLogEnumerator(options) {
        this.serial = null;
        this.startTimeStamp = null;
        this.endTimeStamp = null;
        this.sortOrder = null;
        this.textSearch = null;
        this.pageSize = null;
        this.hasNextPage = true;
        this.scrollId = null;
        if (!lodash_1.isNil(options.filter)) {
            if (lodash_1.isString(options.filter.serial)) {
                this.serial = options.filter.serial;
            }
            var hasTimeStamp = options.filter.startTimeStamp instanceof Date;
            if (hasTimeStamp) {
                this.startTimeStamp = options.filter.startTimeStamp;
                this.endTimeStamp = options.filter.endTimeStamp instanceof Date ? options.filter.endTimeStamp : new Date();
            }
            if (lodash_1.isString(options.filter.textSearch)) {
                this.textSearch = options.filter.textSearch;
            }
        }
        if (Array.isArray(options.sortOrder) && options.sortOrder.length > 0) {
            this.sortOrder = options.sortOrder;
        }
        if (lodash_1.isNumber(options.pageSize)) {
            this.pageSize = options.pageSize;
        }
    }
    Object.defineProperty(BsncDeviceLogEnumerator.prototype, "queryString", {
        get: function () {
            var query = '';
            if (!lodash_1.isNil(this.scrollId)) {
                query = '?scrollId=' + encodeURIComponent(this.scrollId);
            }
            else {
                var sep = '?';
                if (!lodash_1.isNil(this.serial)) {
                    query = sep + "serial=" + this.serial;
                    sep = '&';
                }
                if (!lodash_1.isNil(this.startTimeStamp)) {
                    query +=
                        sep + "startTimeStamp=" + this.startTimeStamp.toISOString() + "&endTimeStamp=" + this.endTimeStamp.toISOString();
                    sep = '&';
                }
                if (!lodash_1.isNil(this.sortOrder)) {
                    var sortStr = this.sortOrder
                        .map(function (el) { return el.field + ":" + (el.descending ? 'desc' : 'asc'); })
                        .join(',');
                    query += sep + "sort=" + sortStr;
                    sep = '&';
                }
                if (!lodash_1.isNil(this.textSearch)) {
                    query += sep + "textSearch=" + this.textSearch;
                    sep = '&';
                }
                if (!lodash_1.isNil(this.pageSize)) {
                    query += sep + "pageSize=" + this.pageSize;
                }
            }
            return query;
        },
        enumerable: false,
        configurable: true
    });
    return BsncDeviceLogEnumerator;
}());
exports.BsncDeviceLogEnumerator = BsncDeviceLogEnumerator;
function deviceLogFetch(url, init) {
    if (init === void 0) { init = {}; }
    var authenticator = authenticator_1.getBsnAuthenticator();
    var fetchInfo = authenticator.getFetchInfo(true);
    return authenticator.checkAuthentication()
        .then(function () { return authenticator.checkNetwork(fetchInfo); })
        .then(function () {
        if (lodash_1.isNil(init.headers)) {
            init.headers = authenticator.deviceLogHeaders;
        }
        var request = new Request(url, init);
        return fetch(request)
            .then(function (response) {
            authenticator.checkFetchInfo(fetchInfo);
            return authenticator.logResponse(response, request, init.body);
        });
    });
}
var BsnDeviceLogOperations = (function () {
    function BsnDeviceLogOperations() {
    }
    BsnDeviceLogOperations.prototype.getDeviceLogListBySegment = function (options) {
        var enumerator = new BsncDeviceLogEnumerator(options);
        return this.getNextDeviceLogListSegment(enumerator);
    };
    BsnDeviceLogOperations.prototype.getNextDeviceLogListSegment = function (enumerator) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        var queryString = lodash_1.isNil(enumerator) ? '' : enumerator.queryString;
        return deviceLogFetch(common_1.getIndexUrl() + DeviceLogApiPath + queryString)
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) { return common_1.updateEntityDataTypes(response); })
            .then(function (response) {
            if (lodash_1.isNil(response.error)) {
                if (!lodash_1.isNil(response.result)) {
                    enumerator.hasNextPage = response.result.hasNextPage;
                    enumerator.scrollId = response.result.scrollId;
                    return {
                        items: response.result.logList,
                        enumerator: enumerator,
                    };
                }
                else {
                    throw new error_1.BsnError(error_1.BsnErrorType.indexServerError, 'getNextDeviceLogListSegment: result is missing');
                }
            }
            else {
                var reason = response.error;
                if (!lodash_1.isNil(response.error_description)) {
                    reason += ': ' + response.error_description;
                }
                throw new error_1.BsnError(error_1.BsnErrorType.indexServerError, 'getNextDeviceLogListSegment: ' + reason);
            }
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceLogOperations.prototype.getDeviceLogList = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var allListItems = [];
            var enumerator = new BsncDeviceLogEnumerator(options);
            var getNextListFragment = function () {
                _this.getNextDeviceLogListSegment(enumerator)
                    .then(function (segment) {
                    allListItems =
                        allListItems.concat(segment.items);
                    if (!segment.enumerator.hasNextPage) {
                        resolve(allListItems);
                    }
                    else {
                        enumerator = segment.enumerator;
                        return getNextListFragment();
                    }
                })
                    .catch(reject);
            };
            return getNextListFragment();
        });
    };
    return BsnDeviceLogOperations;
}());
exports.BsnDeviceLogOperations = BsnDeviceLogOperations;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnDeviceProvisioningOperations = void 0;
var common_1 = __webpack_require__(0);
var authenticator_1 = __webpack_require__(4);
var error_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(3);
var qs = __webpack_require__(14);
var DeviceSetupApiPath = 'Provisioning/Setups/';
var DeviceProvisioningApiPath = 'Provisioning/Devices/';
function bDeployFetch(url, init, networkRequired) {
    if (init === void 0) { init = {}; }
    if (networkRequired === void 0) { networkRequired = true; }
    var authenticator = authenticator_1.getBsnAuthenticator();
    var fetchInfo = authenticator.getFetchInfo(networkRequired);
    return authenticator.checkAuthentication()
        .then(function () { return authenticator.checkNetwork(fetchInfo); })
        .then(function () {
        if (lodash_1.isNil(init.headers)) {
            init.headers = authenticator.bDeployHeaders;
        }
        var request = new Request(url, init);
        return fetch(request)
            .then(function (response) {
            authenticator.checkFetchInfo(fetchInfo);
            return authenticator.logResponse(response, request, init.body);
        });
    });
}
var BsnDeviceProvisioningOperations = (function () {
    function BsnDeviceProvisioningOperations() {
    }
    BsnDeviceProvisioningOperations.prototype.getDeviceSetupList = function (options) {
        return common_1.getAllBsnListFragments(DeviceSetupApiPath, options);
    };
    BsnDeviceProvisioningOperations.prototype.getDeviceSetupListBySegment = function (options) {
        return common_1.getBsnListBySegment(DeviceSetupApiPath, options);
    };
    BsnDeviceProvisioningOperations.prototype.getNextDeviceSetupListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(DeviceSetupApiPath, enumerator);
    };
    BsnDeviceProvisioningOperations.prototype.getDeviceSetupCount = function (options) {
        return common_1.getBsnEntityCount(DeviceSetupApiPath, options);
    };
    BsnDeviceProvisioningOperations.prototype.getDeviceSetupEntity = function (setupId) {
        return common_1.getBsnEntityData(DeviceSetupApiPath, setupId);
    };
    BsnDeviceProvisioningOperations.prototype.addDeviceSetup = function (deviceSettings) {
        return common_1.addBsnListItem(DeviceSetupApiPath, JSON.stringify(deviceSettings, null, 0));
    };
    BsnDeviceProvisioningOperations.prototype.updateDeviceSetup = function (deviceSettings) {
        return common_1.updateBsnEntity(DeviceSetupApiPath, deviceSettings.id, JSON.stringify(deviceSettings, null, 0));
    };
    BsnDeviceProvisioningOperations.prototype.deleteDeviceSetup = function (setupId) {
        return common_1.deleteBsnEntity(DeviceSetupApiPath, setupId);
    };
    BsnDeviceProvisioningOperations.prototype.getDeviceSetupFile = function (deviceSettings) {
        return common_1.getBsnBinaryData(DeviceSetupApiPath, JSON.stringify(deviceSettings, null, 0));
    };
    BsnDeviceProvisioningOperations.prototype.getDeviceRegistrationToken = function () {
        var body = JSON.stringify('');
        var authenticator = authenticator_1.getBsnAuthenticator();
        return authenticator.checkAuthentication()
            .then(function () { return authenticator.checkNetworkActive(); })
            .then(function () {
            var request = new Request(common_1.BsnUrl + 'Provisioning/Setups/Tokens/', { method: 'POST', headers: authenticator.requestHeadersForPostOrPut, body: body });
            return fetch(request)
                .then(function (response) { return authenticator.logResponse(response, request, body); });
        })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (result) { return common_1.updateEntityDataTypes(result); })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceProvisioningOperations.prototype.getDeviceProvisionList = function (options) {
        return common_1.getAllBsnListFragments(DeviceProvisioningApiPath, options);
    };
    BsnDeviceProvisioningOperations.prototype.getDeviceProvisionListBySegment = function (options) {
        return common_1.getBsnListBySegment(DeviceProvisioningApiPath, options);
    };
    BsnDeviceProvisioningOperations.prototype.getNextDeviceProvisionListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(DeviceProvisioningApiPath, enumerator);
    };
    BsnDeviceProvisioningOperations.prototype.getDeviceProvisionCount = function (options) {
        return common_1.getBsnEntityCount(DeviceProvisioningApiPath, options);
    };
    BsnDeviceProvisioningOperations.prototype.getDeviceProvisionEntity = function (deviceId) {
        return common_1.getBsnEntityData(DeviceProvisioningApiPath, deviceId);
    };
    BsnDeviceProvisioningOperations.prototype.addDeviceProvision = function (device) {
        return common_1.addBsnListItem(DeviceProvisioningApiPath, JSON.stringify(device, null, 0));
    };
    BsnDeviceProvisioningOperations.prototype.updateDeviceProvision = function (device) {
        return common_1.updateBsnEntity(DeviceProvisioningApiPath, device.id, JSON.stringify(device, null, 0));
    };
    BsnDeviceProvisioningOperations.prototype.deleteDeviceProvision = function (deviceId) {
        return common_1.deleteBsnEntity(DeviceProvisioningApiPath, deviceId);
    };
    BsnDeviceProvisioningOperations.prototype.getBDeployDevice = function (serial) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        if (lodash_1.isUndefined(serial)) {
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'getBDeployDevice: Serial number must be provided');
        }
        var finalOptions = {
            query: {
                NetworkName: authenticator.networkName,
                serial: serial,
            },
        };
        var queryString = qs.stringify(finalOptions);
        return bDeployFetch(common_1.getBdeployUrl() + '/rest-device/v2/device?' + queryString)
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) {
            if (lodash_1.isNull(response.error)) {
                if (lodash_1.isNull(response.result) || response.result.players.length === 0) {
                    return null;
                }
                return common_1.updateEntityDataTypes(response.result.players[0]);
            }
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'getBDeployDevice: Error in getting device');
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceProvisioningOperations.prototype.getBDeployDeviceList = function (options) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        var finalOptions = Object.assign({}, options);
        if (lodash_1.isObject(options.query)) {
            finalOptions.query.NetworkName = authenticator.networkName;
        }
        else {
            finalOptions.query = {
                NetworkName: authenticator.networkName,
            };
        }
        var queryString = qs.stringify(finalOptions);
        return bDeployFetch(common_1.getBdeployUrl() + '/rest-device/v2/device?' + queryString)
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) {
            if (lodash_1.isNull(response.error)) {
                return common_1.updateEntityDataTypes(response.result.players);
            }
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'getBDeployDeviceList: Error in getting device list');
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceProvisioningOperations.prototype.addBDeployDevice = function (params) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        params.NetworkName = authenticator.networkName;
        params.username = authenticator.userName;
        var body = JSON.stringify(params);
        return bDeployFetch(common_1.getBdeployUrl() + '/rest-device/v2/device', { method: 'POST', body: body })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) {
            if (lodash_1.isNull(response.error)) {
                return response.result;
            }
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'addBDeployDevice: Error adding device');
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceProvisioningOperations.prototype.updateBDeployDevice = function (params) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        var body = JSON.stringify(params);
        return bDeployFetch(common_1.getBdeployUrl() + '/rest-device/v2/device', { method: 'PUT', body: body })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) {
            if (lodash_1.isNull(response.error)) {
                return response.result;
            }
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'updateBDeployDevice: Error Editing device');
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceProvisioningOperations.prototype.deleteBDeployDevice = function (id) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        var queryString = 'query.username=' + authenticator.userName;
        queryString = queryString + '&_id=' + id;
        return bDeployFetch(common_1.getBdeployUrl() + '/rest-device/v2/device?' + queryString, { method: 'DELETE' })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) {
            if (lodash_1.isNull(response.error)) {
                return null;
            }
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'deleteBDeployDeviceSetup: Error in deleting device');
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceProvisioningOperations.prototype.getBDeployApplicationList = function () {
        var authenticator = authenticator_1.getBsnAuthenticator();
        return bDeployFetch(common_1.getBdeployUrl() + '/rest-device/v2/application')
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) {
            if (lodash_1.isNull(response.error)) {
                return common_1.updateEntityDataTypes(response.result.PartnerApplicationFile);
            }
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'getBDeployApplicationList: Error in getting device applications');
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceProvisioningOperations.prototype.getBDeployDeviceSetupList = function (options) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        var finalOptions = Object.assign({}, options);
        if (lodash_1.isObject(options.query)) {
            finalOptions.query.networkName = authenticator.networkName;
        }
        else {
            finalOptions.query = {
                networkName: authenticator.networkName,
            };
        }
        var queryString = qs.stringify(finalOptions);
        return bDeployFetch(common_1.getBdeployUrl() + '/rest-setup/v2/setup?' + queryString)
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) {
            if (lodash_1.isNull(response.error)) {
                return response.result.map(function (eachParam) {
                    return common_1.updateEntityDataTypes(JSON.parse(eachParam.setupJson));
                });
            }
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'getBDeployDeviceSetupList: Error in getting device setup list');
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceProvisioningOperations.prototype.getBDeployDeviceSetupUseCount = function (id) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        return authenticator.checkAuthentication()
            .then(function () { return authenticator.checkNetworkActive(); })
            .then(function () {
            var request = new Request(common_1.getBdeployUrl() + '/rest-device/v2/count-setups/' + id, { method: 'GET', headers: authenticator.bDeployHeaders });
            return fetch(request)
                .then(function (response) { return authenticator.logResponse(response, request); });
        })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) {
            if (lodash_1.isNull(response.error)) {
                return response.result;
            }
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'getBDeployApplicationList: Error in getting device setup count');
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceProvisioningOperations.prototype.deleteBDeployDeviceSetup = function (id) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        var queryString = 'query.username=' + authenticator.userName;
        queryString = queryString + '&query.networkName=' + authenticator.networkName;
        queryString = queryString + '&_id=' + id;
        return bDeployFetch(common_1.getBdeployUrl() + '/rest-setup/v2/setup?' + queryString, { method: 'DELETE' })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) {
            if (lodash_1.isNull(response.error)) {
                return null;
            }
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'deleteBDeployDeviceSetup: Error in deleting device setup');
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceProvisioningOperations.prototype.addBDeployDeviceSetup = function (params) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        var body = JSON.stringify(params);
        return bDeployFetch(common_1.getBdeployUrl() + '/rest-setup/v2/setup', { method: 'POST', body: body })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) {
            if (lodash_1.isNull(response.error)) {
                return response.result;
            }
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'addBDeployDeviceSetup: Error adding device setup');
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnDeviceProvisioningOperations.prototype.updateBDeployDeviceSetup = function (params) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        var body = JSON.stringify(params);
        return bDeployFetch(common_1.getBdeployUrl() + '/rest-setup/v2/setup', { method: 'PUT', body: body })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) {
            if (lodash_1.isNull(response.error)) {
                return response.result;
            }
            throw new error_1.BsnError(error_1.BsnErrorType.bDeployError, 'updateBDeployDeviceSetup: Error Editing device setup');
        })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    return BsnDeviceProvisioningOperations;
}());
exports.BsnDeviceProvisioningOperations = BsnDeviceProvisioningOperations;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnDeviceWebPageOperations = void 0;
var bscore_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var DeviceWebPageApiPath = 'DeviceWebPages/';
var BsnDeviceWebPageOperations = (function () {
    function BsnDeviceWebPageOperations() {
    }
    BsnDeviceWebPageOperations.prototype.getDeviceWebPageList = function (options) {
        return common_1.getAllBsnListFragments(DeviceWebPageApiPath, options);
    };
    BsnDeviceWebPageOperations.prototype.getDeviceWebPageListBySegment = function (options) {
        return common_1.getBsnListBySegment(DeviceWebPageApiPath, options);
    };
    BsnDeviceWebPageOperations.prototype.getNextDeviceWebPageListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(DeviceWebPageApiPath, enumerator);
    };
    BsnDeviceWebPageOperations.prototype.getDeviceWebPageCount = function (options) {
        return common_1.getBsnEntityCount(DeviceWebPageApiPath, options);
    };
    BsnDeviceWebPageOperations.prototype.getDeviceWebPageEntity = function (idOrName) {
        return common_1.getBsnEntityData(DeviceWebPageApiPath, idOrName);
    };
    BsnDeviceWebPageOperations.prototype.existsDeviceWebPage = function (name) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Name is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'name', bscore_1.BsnStringFilterOperator.Is, name)),
        };
        return common_1.getBsnEntityCount(DeviceWebPageApiPath, enumOptions)
            .then(function (count) { return count > 0; });
    };
    BsnDeviceWebPageOperations.prototype.deleteDeviceWebPage = function (idOrName) {
        if (!idOrName) {
            var errorReason = 'DeviceWebPage ID or name must be provided for delete';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        return common_1.deleteBsnEntity(DeviceWebPageApiPath, idOrName);
    };
    BsnDeviceWebPageOperations.prototype.getDeviceWebPagePermissions = function (idOrName) {
        return common_1.getBsnEntityPermissions(DeviceWebPageApiPath, idOrName);
    };
    BsnDeviceWebPageOperations.prototype.setDeviceWebPagePermissions = function (idOrName, permissions) {
        return common_1.setBsnEntityPermissions(DeviceWebPageApiPath, idOrName, permissions);
    };
    BsnDeviceWebPageOperations.prototype.replaceDeviceWebPagePermissions = function (idOrName, permissions) {
        return common_1.replaceBsnEntityPermissions(DeviceWebPageApiPath, idOrName, permissions);
    };
    BsnDeviceWebPageOperations.prototype.deleteDeviceWebPagePermissions = function (idOrName, permissions) {
        return common_1.deleteBsnEntityPermissions(DeviceWebPageApiPath, idOrName, permissions);
    };
    return BsnDeviceWebPageOperations;
}());
exports.BsnDeviceWebPageOperations = BsnDeviceWebPageOperations;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnDynamicPlaylistOperations = void 0;
var bscore_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var DynamicPlaylistApiPath = 'Playlists/Dynamic/';
var BsnDynamicPlaylistOperations = (function () {
    function BsnDynamicPlaylistOperations() {
    }
    BsnDynamicPlaylistOperations.prototype.getDynamicPlaylistList = function (options) {
        return common_1.getAllBsnListFragments(DynamicPlaylistApiPath, options);
    };
    BsnDynamicPlaylistOperations.prototype.getDynamicPlaylistListBySegment = function (options) {
        return common_1.getBsnListBySegment(DynamicPlaylistApiPath, options);
    };
    BsnDynamicPlaylistOperations.prototype.getNextDynamicPlaylistListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(DynamicPlaylistApiPath, enumerator);
    };
    BsnDynamicPlaylistOperations.prototype.getDynamicPlaylistCount = function (options) {
        return common_1.getBsnEntityCount(DynamicPlaylistApiPath, options);
    };
    BsnDynamicPlaylistOperations.prototype.getDynamicPlaylistEntity = function (idOrName) {
        return common_1.getBsnEntityData(DynamicPlaylistApiPath, idOrName);
    };
    BsnDynamicPlaylistOperations.prototype.existsDynamicPlaylist = function (name) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Name is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'name', bscore_1.BsnStringFilterOperator.Is, name)),
        };
        return common_1.getBsnEntityCount(DynamicPlaylistApiPath, enumOptions)
            .then(function (count) { return count > 0; });
    };
    BsnDynamicPlaylistOperations.prototype.createDynamicPlaylist = function (data) {
        return common_1.addBsnListItem(DynamicPlaylistApiPath, JSON.stringify(data, null, 0));
    };
    BsnDynamicPlaylistOperations.prototype.updateDynamicPlaylist = function (data) {
        if (!data.id && !data.name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Dynamic Playlist ID or Name must be provided for update'));
        }
        return common_1.updateBsnEntity(DynamicPlaylistApiPath, data.id ? data.id : data.name, JSON.stringify(data, null, 0));
    };
    BsnDynamicPlaylistOperations.prototype.deleteDynamicPlaylist = function (idOrName) {
        if (!idOrName) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Dynamic Playlist ID or name must be provided for delete'));
        }
        return common_1.deleteBsnEntity(DynamicPlaylistApiPath, idOrName);
    };
    BsnDynamicPlaylistOperations.prototype.getDynamicPlaylistPermissions = function (idOrName) {
        return common_1.getBsnEntityPermissions(DynamicPlaylistApiPath, idOrName);
    };
    BsnDynamicPlaylistOperations.prototype.setDynamicPlaylistPermissions = function (idOrName, permissions) {
        return common_1.setBsnEntityPermissions(DynamicPlaylistApiPath, idOrName, permissions);
    };
    BsnDynamicPlaylistOperations.prototype.replaceDynamicPlaylistPermissions = function (idOrName, permissions) {
        return common_1.replaceBsnEntityPermissions(DynamicPlaylistApiPath, idOrName, permissions);
    };
    BsnDynamicPlaylistOperations.prototype.deleteDynamicPlaylistPermissions = function (idOrName, permissions) {
        return common_1.deleteBsnEntityPermissions(DynamicPlaylistApiPath, idOrName, permissions);
    };
    return BsnDynamicPlaylistOperations;
}());
exports.BsnDynamicPlaylistOperations = BsnDynamicPlaylistOperations;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnGroupOperations = void 0;
var bscore_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var RegularGroupApiPath = 'Groups/Regular/';
var TaggedGroupApiPath = 'Groups/Tagged/';
var BsnGroupOperations = (function () {
    function BsnGroupOperations() {
    }
    BsnGroupOperations.prototype.getRegularGroupList = function (options) {
        return common_1.getAllBsnListFragments(RegularGroupApiPath, options);
    };
    BsnGroupOperations.prototype.getRegularGroupListBySegment = function (options) {
        return common_1.getBsnListBySegment(RegularGroupApiPath, options);
    };
    BsnGroupOperations.prototype.getNextRegularGroupListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(RegularGroupApiPath, enumerator);
    };
    BsnGroupOperations.prototype.getRegularGroupCount = function (options) {
        return common_1.getBsnEntityCount(RegularGroupApiPath, options);
    };
    BsnGroupOperations.prototype.getRegularGroupEntity = function (idOrName) {
        return common_1.getBsnEntityData(RegularGroupApiPath, idOrName);
    };
    BsnGroupOperations.prototype.existsRegularGroup = function (name) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Name is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'name', bscore_1.BsnStringFilterOperator.Is, name)),
        };
        return common_1.getBsnEntityCount(RegularGroupApiPath, enumOptions)
            .then(function (count) { return count > 0; });
    };
    BsnGroupOperations.prototype.createRegularGroup = function (data) {
        return common_1.addBsnListItem(RegularGroupApiPath, JSON.stringify(data, null, 0));
    };
    BsnGroupOperations.prototype.updateRegularGroup = function (data) {
        if (!data.id && !data.name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Regular Group ID or Name must be provided for update'));
        }
        return common_1.updateBsnEntity(RegularGroupApiPath, data.id ? data.id : data.name, JSON.stringify(data, null, 0));
    };
    BsnGroupOperations.prototype.deleteRegularGroup = function (idOrName) {
        if (!idOrName) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Regular Group ID or name must be provided for delete'));
        }
        return common_1.deleteBsnEntity(RegularGroupApiPath, idOrName);
    };
    BsnGroupOperations.prototype.getRegularGroupPermissions = function (idOrName) {
        return common_1.getBsnEntityPermissions(RegularGroupApiPath, idOrName);
    };
    BsnGroupOperations.prototype.setRegularGroupPermissions = function (idOrName, permissions) {
        return common_1.setBsnEntityPermissions(RegularGroupApiPath, idOrName, permissions);
    };
    BsnGroupOperations.prototype.replaceRegularGroupPermissions = function (idOrName, permissions) {
        return common_1.replaceBsnEntityPermissions(RegularGroupApiPath, idOrName, permissions);
    };
    BsnGroupOperations.prototype.deleteRegularGroupPermissions = function (idOrName, permissions) {
        return common_1.deleteBsnEntityPermissions(RegularGroupApiPath, idOrName, permissions);
    };
    BsnGroupOperations.prototype.getTaggedGroupList = function (options) {
        return common_1.getAllBsnListFragments(TaggedGroupApiPath, options);
    };
    BsnGroupOperations.prototype.getTaggedGroupListBySegment = function (options) {
        return common_1.getBsnListBySegment(TaggedGroupApiPath, options);
    };
    BsnGroupOperations.prototype.getNextTaggedGroupListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(TaggedGroupApiPath, enumerator);
    };
    BsnGroupOperations.prototype.getTaggedGroupCount = function (options) {
        return common_1.getBsnEntityCount(TaggedGroupApiPath, options);
    };
    BsnGroupOperations.prototype.getTaggedGroupEntity = function (idOrName) {
        return common_1.getBsnEntityData(TaggedGroupApiPath, idOrName);
    };
    BsnGroupOperations.prototype.existsTaggedGroup = function (name) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Name is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'name', bscore_1.BsnStringFilterOperator.Is, name)),
        };
        return common_1.getBsnEntityCount(TaggedGroupApiPath, enumOptions)
            .then(function (count) { return count > 0; });
    };
    BsnGroupOperations.prototype.createTaggedGroup = function (data) {
        return common_1.addBsnListItem(TaggedGroupApiPath, JSON.stringify(data, null, 0));
    };
    BsnGroupOperations.prototype.updateTaggedGroup = function (data) {
        if (!data.id) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Tagged Group ID must be provided for update'));
        }
        return common_1.updateBsnEntity(TaggedGroupApiPath, data.id, JSON.stringify(data, null, 0));
    };
    BsnGroupOperations.prototype.deleteTaggedGroup = function (idOrName) {
        if (!idOrName) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Tagged Group ID or name must be provided for delete'));
        }
        return common_1.deleteBsnEntity(TaggedGroupApiPath, idOrName);
    };
    BsnGroupOperations.prototype.getTaggedGroupPermissions = function (idOrName) {
        return common_1.getBsnEntityPermissions(TaggedGroupApiPath, idOrName);
    };
    BsnGroupOperations.prototype.setTaggedGroupPermissions = function (idOrName, permissions) {
        return common_1.setBsnEntityPermissions(TaggedGroupApiPath, idOrName, permissions);
    };
    BsnGroupOperations.prototype.replaceTaggedGroupPermissions = function (idOrName, permissions) {
        return common_1.replaceBsnEntityPermissions(TaggedGroupApiPath, idOrName, permissions);
    };
    BsnGroupOperations.prototype.deleteTaggedGroupPermissions = function (idOrName, permissions) {
        return common_1.deleteBsnEntityPermissions(TaggedGroupApiPath, idOrName, permissions);
    };
    return BsnGroupOperations;
}());
exports.BsnGroupOperations = BsnGroupOperations;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnHtmlSiteOperations = void 0;
var bscore_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var HtmlSiteApiPath = 'WebPages/';
var BsnHtmlSiteOperations = (function () {
    function BsnHtmlSiteOperations() {
    }
    BsnHtmlSiteOperations.prototype.getHtmlSiteList = function (options) {
        return common_1.getAllBsnListFragments(HtmlSiteApiPath, options);
    };
    BsnHtmlSiteOperations.prototype.getHtmlSiteListBySegment = function (options) {
        return common_1.getBsnListBySegment(HtmlSiteApiPath, options);
    };
    BsnHtmlSiteOperations.prototype.getNextHtmlSiteListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(HtmlSiteApiPath, enumerator);
    };
    BsnHtmlSiteOperations.prototype.getHtmlSiteCount = function (options) {
        return common_1.getBsnEntityCount(HtmlSiteApiPath, options);
    };
    BsnHtmlSiteOperations.prototype.getHtmlSiteEntity = function (idOrName) {
        return common_1.getBsnEntityData(HtmlSiteApiPath, idOrName);
    };
    BsnHtmlSiteOperations.prototype.existsHtmlSite = function (name) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Name is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'name', bscore_1.BsnStringFilterOperator.Is, name)),
        };
        return common_1.getBsnEntityCount(HtmlSiteApiPath, enumOptions)
            .then(function (count) { return count > 0; });
    };
    BsnHtmlSiteOperations.prototype.deleteHtmlSite = function (idOrName) {
        if (!idOrName) {
            var errorReason = 'HtmlSite ID or name must be provided for delete';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        return common_1.deleteBsnEntity(HtmlSiteApiPath, idOrName);
    };
    BsnHtmlSiteOperations.prototype.getHtmlSitePermissions = function (idOrName) {
        return common_1.getBsnEntityPermissions(HtmlSiteApiPath, idOrName);
    };
    BsnHtmlSiteOperations.prototype.setHtmlSitePermissions = function (idOrName, permissions) {
        return common_1.setBsnEntityPermissions(HtmlSiteApiPath, idOrName, permissions);
    };
    BsnHtmlSiteOperations.prototype.replaceHtmlSitePermissions = function (idOrName, permissions) {
        return common_1.replaceBsnEntityPermissions(HtmlSiteApiPath, idOrName, permissions);
    };
    BsnHtmlSiteOperations.prototype.deleteHtmlSitePermissions = function (idOrName, permissions) {
        return common_1.deleteBsnEntityPermissions(HtmlSiteApiPath, idOrName, permissions);
    };
    return BsnHtmlSiteOperations;
}());
exports.BsnHtmlSiteOperations = BsnHtmlSiteOperations;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnMediaFeedOperations = void 0;
var bscore_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var MediaFeedApiPath = 'Feeds/Media/';
var BsnMediaFeedOperations = (function () {
    function BsnMediaFeedOperations() {
    }
    BsnMediaFeedOperations.prototype.getMediaFeedList = function (options) {
        return common_1.getAllBsnListFragments(MediaFeedApiPath, options);
    };
    BsnMediaFeedOperations.prototype.getMediaFeedListBySegment = function (options) {
        return common_1.getBsnListBySegment(MediaFeedApiPath, options);
    };
    BsnMediaFeedOperations.prototype.getNextMediaFeedListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(MediaFeedApiPath, enumerator);
    };
    BsnMediaFeedOperations.prototype.getMediaFeedCount = function (options) {
        return common_1.getBsnEntityCount(MediaFeedApiPath, options);
    };
    BsnMediaFeedOperations.prototype.getMediaFeedEntity = function (idOrName) {
        return common_1.getBsnEntityData(MediaFeedApiPath, idOrName);
    };
    BsnMediaFeedOperations.prototype.existsMediaFeed = function (name) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Name is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'name', bscore_1.BsnStringFilterOperator.Is, name)),
        };
        return common_1.getBsnEntityCount(MediaFeedApiPath, enumOptions)
            .then(function (count) { return count > 0; });
    };
    BsnMediaFeedOperations.prototype.createMediaFeed = function (data) {
        return common_1.addBsnListItem(MediaFeedApiPath, JSON.stringify(data, null, 0));
    };
    BsnMediaFeedOperations.prototype.updateMediaFeed = function (data) {
        if (!data.id && !data.name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Media Feed ID or Name must be provided for update'));
        }
        return common_1.updateBsnEntity(MediaFeedApiPath, data.id ? data.id : data.name, JSON.stringify(data, null, 0));
    };
    BsnMediaFeedOperations.prototype.deleteMediaFeed = function (idOrName) {
        if (!idOrName) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Media Feed ID or name must be provided for delete'));
        }
        return common_1.deleteBsnEntity(MediaFeedApiPath, idOrName);
    };
    BsnMediaFeedOperations.prototype.getMediaFeedPermissions = function (idOrName) {
        return common_1.getBsnEntityPermissions(MediaFeedApiPath, idOrName);
    };
    BsnMediaFeedOperations.prototype.setMediaFeedPermissions = function (idOrName, permissions) {
        return common_1.setBsnEntityPermissions(MediaFeedApiPath, idOrName, permissions);
    };
    BsnMediaFeedOperations.prototype.replaceMediaFeedPermissions = function (idOrName, permissions) {
        return common_1.replaceBsnEntityPermissions(MediaFeedApiPath, idOrName, permissions);
    };
    BsnMediaFeedOperations.prototype.deleteMediaFeedPermissions = function (idOrName, permissions) {
        return common_1.deleteBsnEntityPermissions(MediaFeedApiPath, idOrName, permissions);
    };
    return BsnMediaFeedOperations;
}());
exports.BsnMediaFeedOperations = BsnMediaFeedOperations;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnPasswordOperations = void 0;
var authenticator_1 = __webpack_require__(4);
var common_1 = __webpack_require__(0);
var PasswordApiPath = 'Password/';
var BsnPasswordOperations = (function () {
    function BsnPasswordOperations() {
    }
    BsnPasswordOperations.prototype.resetPassword = function (userName) {
        var returnUrl = common_1.getClientRedirectUrl();
        var authenticator = authenticator_1.getBsnAuthenticator();
        var request = new Request(common_1.BsnUrl + (encodeURIComponent(userName) + "/")
            + PasswordApiPath + ("?returnUrl=" + encodeURIComponent(returnUrl)));
        return fetch(request)
            .then(function (response) { return authenticator.checkStatus(response, request); })
            .then(function () { return null; })
            .catch(function (error) {
            throw common_1.processBsnRequestError(error);
        });
    };
    return BsnPasswordOperations;
}());
exports.BsnPasswordOperations = BsnPasswordOperations;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnPluginOperations = void 0;
var base64 = __webpack_require__(13);
var bscore_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(5);
var entities_1 = __webpack_require__(6);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var PluginApiPath = 'Autoruns/Plugins/';
var BsnPluginOperations = (function () {
    function BsnPluginOperations() {
    }
    BsnPluginOperations.getPluginItemForSaveOrCreate = function (data) {
        if (data.name && typeof data.name === 'string') {
            if (data.pluginData && data.pluginData instanceof Uint8Array) {
                var pluginItem = {
                    id: data.id ? data.id : 0,
                    name: data.name,
                    fileInfo: {
                        type: entities_1.BsnPresentationFileType.New,
                        name: data.fileName,
                        body: base64.fromByteArray(data.pluginData),
                        transferEncoding: 'base64',
                        size: 0,
                        creationDate: null,
                        lastModifiedDate: null,
                    },
                    presentations: null,
                };
                return pluginItem;
            }
            else {
                throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Invalid plugin data');
            }
        }
        else {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Invalid plugin name');
        }
    };
    BsnPluginOperations.prototype.getPluginList = function (options) {
        return common_1.getAllBsnListFragments(PluginApiPath, options);
    };
    BsnPluginOperations.prototype.getPluginListBySegment = function (options) {
        return common_1.getBsnListBySegment(PluginApiPath, options);
    };
    BsnPluginOperations.prototype.getNextPluginListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(PluginApiPath, enumerator);
    };
    BsnPluginOperations.prototype.getPluginCount = function (options) {
        return common_1.getBsnEntityCount(PluginApiPath, options);
    };
    BsnPluginOperations.prototype.getPluginEntity = function (idOrName) {
        if (!idOrName) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Plugin ID or name is not valid'));
        }
        return common_1.getBsnEntityData(PluginApiPath, idOrName);
    };
    BsnPluginOperations.prototype.existsPlugin = function (name) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Name is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'name', bscore_1.BsnStringFilterOperator.Is, name)),
        };
        return common_1.getBsnEntityCount(PluginApiPath, enumOptions)
            .then(function (count) { return count > 0; });
    };
    BsnPluginOperations.prototype.createPlugin = function (data) {
        if (!data.pluginData) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Plugin data is missing'));
        }
        var pluginItem = BsnPluginOperations.getPluginItemForSaveOrCreate(data);
        return common_1.addBsnListItem(PluginApiPath, JSON.stringify(pluginItem, null, 0));
    };
    BsnPluginOperations.prototype.updatePlugin = function (data) {
        if (!data.id && !data.name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Plugin ID or Name must be provided'));
        }
        var pluginItem = BsnPluginOperations.getPluginItemForSaveOrCreate(data);
        return common_1.updateBsnEntity(PluginApiPath, data.id ? data.id : data.name, JSON.stringify(pluginItem, null, 0));
    };
    BsnPluginOperations.prototype.deletePlugin = function (idOrName) {
        if (!idOrName) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Plugin ID or name must be provided for delete'));
        }
        return common_1.deleteBsnEntity(PluginApiPath, idOrName);
    };
    return BsnPluginOperations;
}());
exports.BsnPluginOperations = BsnPluginOperations;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnPresentationOperations = void 0;
var base64 = __webpack_require__(13);
var bscore_1 = __webpack_require__(2);
var entities_1 = __webpack_require__(6);
var filter_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(3);
var PresentationApiPath = 'Presentations/';
var BsnPresentationOperations = (function () {
    function BsnPresentationOperations() {
    }
    BsnPresentationOperations.getPresentationItem = function (item) {
        var screenSettings;
        if (item.screenSettings) {
            screenSettings = {};
            screenSettings.videoMode = item.screenSettings.videoMode;
            screenSettings.connector = item.screenSettings.connector;
            screenSettings.backgroundColor = entities_1.bsnColorToBsColor(item.screenSettings.backgroundColor);
        }
        var id = item.id, name = item.name, type = item.type, status = item.status, creationDate = item.creationDate, lastModifiedDate = item.lastModifiedDate, autorun = item.autorun, deviceModel = item.deviceModel, language = item.language, autoplayFile = item.autoplayFile, projectFile = item.projectFile, resourcesFile = item.resourcesFile, userDefinedEventsFile = item.userDefinedEventsFile, deviceWebPage = item.deviceWebPage, thumbnailFile = item.thumbnailFile, autorunPlugins = item.autorunPlugins, files = item.files, dependencies = item.dependencies, groups = item.groups, permissions = item.permissions;
        return {
            id: id, name: name, type: type, status: status, creationDate: creationDate, lastModifiedDate: lastModifiedDate, autorun: autorun, deviceModel: deviceModel,
            screenSettings: screenSettings, language: language,
            autoplayFile: autoplayFile ? autoplayFile : null,
            projectFile: projectFile ? projectFile : null,
            resourcesFile: resourcesFile ? resourcesFile : null,
            userDefinedEventsFile: userDefinedEventsFile ? userDefinedEventsFile : null,
            thumbnailFile: thumbnailFile ? thumbnailFile : null,
            deviceWebPage: deviceWebPage, autorunPlugins: autorunPlugins, files: files, dependencies: dependencies, groups: groups, permissions: permissions,
        };
    };
    BsnPresentationOperations.getPresentationItemForSaveOrCreate = function (data) {
        if (!data.projectState && !data.projectFileId) {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'A new or existing presentation project file must be specified');
        }
        if (lodash_1.isNil(data.deviceModel)) {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Device model must be specified');
        }
        if (lodash_1.isNil(data.autorunVersion)) {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Autorun version must be specified');
        }
        if (lodash_1.isNil(data.videoMode)) {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Video mode must be specified');
        }
        if (lodash_1.isNil(data.backgroundColor)) {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Background color must be specified');
        }
        if (!bscore_1.bscIsBsColor(data.backgroundColor)) {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Background color must be a BsColor object');
        }
        if (lodash_1.isString(data.name)) {
            var timestamp = new Date().toISOString();
            var projectFile = null;
            var thumbnailFile = null;
            if (!lodash_1.isNil(data.projectState)) {
                projectFile = {
                    id: 0,
                    type: entities_1.BsnPresentationFileType.New,
                    name: data.name + '.bpfx',
                    body: data.projectState,
                    transferEncoding: 'none',
                    size: 0,
                    lastModifiedDate: timestamp,
                    creationDate: null,
                };
            }
            else if (data.projectFileId) {
                projectFile = {
                    id: data.projectFileId,
                    type: entities_1.BsnPresentationFileType.Stored,
                    name: null,
                    path: null,
                    size: null,
                    hash: null,
                    creationDate: null,
                    lastModifiedDate: null,
                };
            }
            if (data.thumbnailData) {
                var ext = data.thumbnailExt ? data.thumbnailExt : '.jpg';
                if (ext.charAt(0) !== '.') {
                    ext = '.' + ext;
                }
                thumbnailFile = {
                    id: 0,
                    type: entities_1.BsnPresentationFileType.New,
                    name: data.name + '.thmb' + ext,
                    body: base64.fromByteArray(data.thumbnailData),
                    transferEncoding: 'base64',
                    size: 0,
                    lastModifiedDate: timestamp,
                    creationDate: null,
                };
            }
            else if (data.thumbnailFileId) {
                thumbnailFile = {
                    id: data.thumbnailFileId,
                    type: entities_1.BsnPresentationFileType.Stored,
                    name: null,
                    path: null,
                    size: null,
                    hash: null,
                    creationDate: null,
                    lastModifiedDate: null,
                };
            }
            return {
                id: lodash_1.isNil(data.id) ? 0 : data.id,
                type: bscore_1.BsnPresentationType.Complete,
                status: bscore_1.BsnPresentationStatus.Draft,
                name: data.name,
                creationDate: null,
                lastModifiedDate: timestamp,
                autorun: {
                    version: data.autorunVersion,
                    isCustom: false,
                    minFirmwares: null,
                    isRevoked: null,
                },
                deviceModel: data.deviceModel,
                deviceWebPage: null,
                screenSettings: {
                    videoMode: data.videoMode,
                    orientation: null,
                    connector: lodash_1.isNil(data.connector) ? 'HDMI' : data.connector,
                    backgroundColor: entities_1.bsColorToBsnColor(data.backgroundColor),
                    overscan: null,
                },
                language: lodash_1.isNil(data.language) ? null : data.language,
                projectFile: lodash_1.isNil(projectFile) ? null : projectFile,
                thumbnailFile: lodash_1.isNil(thumbnailFile) ? null : thumbnailFile,
                autoplayFile: null,
                resourcesFile: null,
                userDefinedEventsFile: null,
                autorunPlugins: null,
                files: null,
                dependencies: null,
                groups: null,
                permissions: null,
            };
        }
        else {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Invalid presentation name');
        }
    };
    BsnPresentationOperations.setPresentationItemAssetFiles = function (presentationItem, assetFiles) {
        presentationItem.files = [];
        if (assetFiles.mediaFiles) {
            presentationItem.files = presentationItem.files.concat(assetFiles.mediaFiles);
        }
        if (assetFiles.webPages) {
            presentationItem.files = presentationItem.files.concat(assetFiles.webPages);
        }
        if (assetFiles.liveTextFeeds) {
            presentationItem.files = presentationItem.files.concat(assetFiles.liveTextFeeds);
        }
        if (assetFiles.liveMediaFeeds) {
            presentationItem.files = presentationItem.files.concat(assetFiles.liveMediaFeeds);
        }
        if (assetFiles.dynamicPlaylists) {
            presentationItem.files = presentationItem.files.concat(assetFiles.dynamicPlaylists);
        }
        if (assetFiles.taggedPlaylists) {
            presentationItem.files = presentationItem.files.concat(assetFiles.taggedPlaylists);
        }
        if (assetFiles.autorunPlugins) {
            presentationItem.autorunPlugins = assetFiles.autorunPlugins;
        }
        if (assetFiles.deviceWebPage) {
            presentationItem.deviceWebPage = assetFiles.deviceWebPage;
        }
        if (assetFiles.presentationDependencies) {
            presentationItem.dependencies = assetFiles.presentationDependencies;
        }
        return presentationItem;
    };
    BsnPresentationOperations.setPresentationItemPublishFiles = function (presentationItem, publishFiles) {
        if (!publishFiles.autoplayFileData || typeof publishFiles.autoplayFileData !== 'object') {
            throw new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Autoplay file must be specified');
        }
        var timestamp = new Date().toISOString();
        var autoplayFileName = 'autoplay-' + presentationItem.name + '.json';
        presentationItem.autoplayFile = {
            type: entities_1.BsnPresentationFileType.New,
            name: autoplayFileName,
            body: publishFiles.autoplayFileData,
            transferEncoding: 'none',
            size: 0,
            lastModifiedDate: timestamp,
            creationDate: null,
        };
        if (!lodash_1.isNil(publishFiles.resourcesFileData)) {
            presentationItem.resourcesFile = {
                type: entities_1.BsnPresentationFileType.New,
                name: 'resources.txt',
                body: base64.fromByteArray(publishFiles.resourcesFileData),
                transferEncoding: 'base64',
                size: 0,
                lastModifiedDate: timestamp,
                creationDate: null,
            };
        }
        else if (!lodash_1.isNil(publishFiles.resourcesFileId)) {
            presentationItem.resourcesFile = {
                id: publishFiles.resourcesFileId,
                type: entities_1.BsnPresentationFileType.Stored,
                name: 'resources.txt',
                path: null,
                size: null,
                hash: null,
                creationDate: null,
                lastModifiedDate: null,
            };
        }
        if (!lodash_1.isNil(publishFiles.userDefinedEventsData)) {
            presentationItem.userDefinedEventsFile = {
                type: entities_1.BsnPresentationFileType.New,
                name: 'userDefinedEvents.json',
                body: publishFiles.userDefinedEventsData,
                transferEncoding: 'none',
                size: 0,
                lastModifiedDate: timestamp,
                creationDate: null,
            };
        }
        else if (!lodash_1.isNil(publishFiles.userDefinedEventsId)) {
            presentationItem.userDefinedEventsFile = {
                id: publishFiles.userDefinedEventsId,
                type: entities_1.BsnPresentationFileType.Stored,
                name: 'userDefinedEvents.json',
                path: null,
                size: null,
                hash: null,
                creationDate: null,
                lastModifiedDate: null,
            };
        }
        presentationItem.status = bscore_1.BsnPresentationStatus.Published;
        return BsnPresentationOperations.setPresentationItemAssetFiles(presentationItem, publishFiles);
    };
    BsnPresentationOperations.prototype.getPresentationList = function (options) {
        return common_1.getAllBsnListFragments(PresentationApiPath, options)
            .then(function (presentationItems) { return presentationItems.map(BsnPresentationOperations.getPresentationItem); });
    };
    BsnPresentationOperations.prototype.getPresentationListBySegment = function (options) {
        return common_1.getBsnListBySegment(PresentationApiPath, options)
            .then(function (segment) { return ({
            listItems: segment.listItems.map(BsnPresentationOperations.getPresentationItem),
            enumerator: segment.enumerator,
        }); });
    };
    BsnPresentationOperations.prototype.getNextPresentationListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(PresentationApiPath, enumerator)
            .then(function (segment) { return ({
            listItems: segment.listItems.map(BsnPresentationOperations.getPresentationItem),
            enumerator: segment.enumerator,
        }); });
    };
    BsnPresentationOperations.prototype.getPresentationCount = function (options) {
        return common_1.getBsnEntityCount(PresentationApiPath, options);
    };
    BsnPresentationOperations.prototype.getPresentationEntity = function (idOrName) {
        if (!idOrName) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Presentation ID or name is not valid'));
        }
        return common_1.getBsnEntityData(PresentationApiPath, idOrName)
            .then(BsnPresentationOperations.getPresentationItem);
    };
    BsnPresentationOperations.prototype.existsPresentation = function (name) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Name is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'name', bscore_1.BsnStringFilterOperator.Is, name)),
        };
        return common_1.getBsnEntityCount(PresentationApiPath, enumOptions)
            .then(function (count) { return count > 0; });
    };
    BsnPresentationOperations.prototype.createPresentation = function (data, assetFiles, permissions) {
        if (!data.projectState) {
            var errorReason = 'Project document is missing';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        var presentationItem = BsnPresentationOperations.getPresentationItemForSaveOrCreate(data);
        if (!lodash_1.isNil(assetFiles)) {
            presentationItem = BsnPresentationOperations.setPresentationItemAssetFiles(presentationItem, assetFiles);
        }
        if (!lodash_1.isNil(permissions)) {
            presentationItem.permissions = permissions;
        }
        return common_1.addBsnListItem(PresentationApiPath, JSON.stringify(presentationItem, null, 0))
            .then(BsnPresentationOperations.getPresentationItem);
    };
    BsnPresentationOperations.prototype.updatePresentation = function (data, assetFiles, permissions) {
        var _this = this;
        try {
            var presentationEntity_1 = BsnPresentationOperations.getPresentationItemForSaveOrCreate(data);
            if (!lodash_1.isNil(assetFiles)) {
                presentationEntity_1 = BsnPresentationOperations.setPresentationItemAssetFiles(presentationEntity_1, assetFiles);
            }
            return (lodash_1.isNil(permissions) ?
                (lodash_1.isNil(data.id) ? Promise.resolve(null) : this.getPresentationPermissions(data.id))
                : Promise.resolve(permissions))
                .then(function (permissions1) {
                if (!lodash_1.isNil(permissions1)) {
                    presentationEntity_1.permissions = permissions1;
                }
                return _this.putPresentationEntity(presentationEntity_1);
            });
        }
        catch (error) {
            return Promise.reject(error);
        }
    };
    BsnPresentationOperations.prototype.publishPresentation = function (data, publishFiles, permissions) {
        var _this = this;
        try {
            var presentationEntity_2 = BsnPresentationOperations.setPresentationItemPublishFiles(BsnPresentationOperations.getPresentationItemForSaveOrCreate(data), publishFiles);
            return (lodash_1.isNil(permissions) ?
                (lodash_1.isNil(data.id) ? Promise.resolve(null) : this.getPresentationPermissions(data.id))
                : Promise.resolve(permissions))
                .then(function (permissions1) {
                if (!lodash_1.isNil(permissions1)) {
                    presentationEntity_2.permissions = permissions1;
                }
                return _this.putPresentationEntity(presentationEntity_2);
            });
        }
        catch (error) {
            return Promise.reject(error);
        }
    };
    BsnPresentationOperations.prototype.deletePresentation = function (idOrName) {
        if (!idOrName) {
            var errorReason = 'Presentation ID or name must be provided for delete';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        return common_1.deleteBsnEntity(PresentationApiPath, idOrName);
    };
    BsnPresentationOperations.prototype.getPresentationPermissions = function (idOrName) {
        return common_1.getBsnEntityPermissions(PresentationApiPath, idOrName);
    };
    BsnPresentationOperations.prototype.setPresentationPermissions = function (idOrName, permissions) {
        return common_1.setBsnEntityPermissions(PresentationApiPath, idOrName, permissions);
    };
    BsnPresentationOperations.prototype.replacePresentationPermissions = function (idOrName, permissions) {
        return common_1.replaceBsnEntityPermissions(PresentationApiPath, idOrName, permissions);
    };
    BsnPresentationOperations.prototype.deletePresentationPermissions = function (idOrName, permissions) {
        return common_1.deleteBsnEntityPermissions(PresentationApiPath, idOrName, permissions);
    };
    BsnPresentationOperations.prototype.putPresentationEntity = function (rawEntity) {
        if (!rawEntity.id && !rawEntity.name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Presentation ID or Name must be provided'));
        }
        return common_1.updateBsnEntity(PresentationApiPath, rawEntity.id ? rawEntity.id : rawEntity.name, JSON.stringify(rawEntity, null, 0));
    };
    return BsnPresentationOperations;
}());
exports.BsnPresentationOperations = BsnPresentationOperations;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnProfileOperations = void 0;
var authenticator_1 = __webpack_require__(4);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var BsnProfileOperations = (function () {
    function BsnProfileOperations() {
    }
    BsnProfileOperations.getProfileValueFromRead = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    BsnProfileOperations.getProfileMapFromRead = function (map) {
        var profile = {};
        if (typeof map === 'object') {
            Object.keys(map).forEach(function (key) {
                profile[key] = BsnProfileOperations.getProfileValueFromRead(map[key]);
            });
        }
        return profile;
    };
    BsnProfileOperations.getProfileEntityFromCreate = function (profileAttribute) {
        var _a;
        return BsnProfileOperations.getProfileMapFromRead((_a = {},
            _a[profileAttribute.key] = profileAttribute.value,
            _a));
    };
    BsnProfileOperations.getProfileValueForCreateOrUpdate = function (value) {
        if (typeof value === 'string') {
            return value;
        }
        else {
            return JSON.stringify(value);
        }
    };
    BsnProfileOperations.getProfileAttributeEntityForCreate = function (key, value) {
        return {
            key: key,
            value: BsnProfileOperations.getProfileValueForCreateOrUpdate(value),
        };
    };
    BsnProfileOperations.prototype.getPersonProfileMap = function () {
        return common_1.bsnFetch(common_1.BsnUrl + 'Self/Profile/', {}, false)
            .then(function (response) { return authenticator_1.getBsnAuthenticator().getJsonResponse(response); })
            .then(function (data) { return BsnProfileOperations.getProfileMapFromRead(data); })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnProfileOperations.prototype.createPersonProfileValue = function (profileKey, profileValue) {
        if (typeof profileKey !== 'string') {
            var errorReason = 'profileKey must be of type string';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        else if (typeof profileValue !== 'object' && typeof profileValue !== 'string') {
            var errorReason = 'profileValue must be of type object or string';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        var profileSaveAttribute = BsnProfileOperations.getProfileAttributeEntityForCreate(profileKey, profileValue);
        var body = JSON.stringify(profileSaveAttribute);
        return common_1.bsnFetch(common_1.BsnUrl + 'Self/Profile/', { method: 'POST', body: body })
            .then(function (response) { return authenticator_1.getBsnAuthenticator().getJsonResponse(response); })
            .then(function (item) { return BsnProfileOperations.getProfileEntityFromCreate(item); })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnProfileOperations.prototype.updatePersonProfileValue = function (profileKey, profileValue) {
        if (typeof profileKey !== 'string') {
            var errorReason = 'profileKey must be of type string';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        else if (typeof profileValue !== 'object' && typeof profileValue !== 'string') {
            var errorReason = 'profileValue must be of type object or string';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        var profileSaveValue = BsnProfileOperations.getProfileValueForCreateOrUpdate(profileValue);
        var body = JSON.stringify(profileSaveValue);
        return common_1.executeApiCallWithNullResponse(common_1.BsnUrl + ("Self/Profile/" + profileKey + "/"), { method: 'PUT', body: body });
    };
    BsnProfileOperations.prototype.deletePersonProfileValue = function (profileKey) {
        if (typeof profileKey !== 'string') {
            var errorReason = 'profileKey must be of type string';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        return common_1.executeApiCallWithNullResponse(common_1.BsnUrl + ("Self/Profile/" + profileKey + "/"), { method: 'DELETE' });
    };
    BsnProfileOperations.prototype.getUserProfileMap = function () {
        var authenticator = authenticator_1.getBsnAuthenticator();
        return common_1.bsnFetch(common_1.BsnUrl + ("Self/Users/" + authenticator.userId + "/Profile/"), {}, false)
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (data) { return BsnProfileOperations.getProfileMapFromRead(data); })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnProfileOperations.prototype.createUserProfileValue = function (profileKey, profileValue) {
        if (typeof profileKey !== 'string') {
            var errorReason = 'profileKey must be of type string';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        else if (typeof profileValue !== 'object' &&
            typeof profileValue !== 'string' &&
            typeof profileValue !== 'boolean') {
            var errorReason = 'profileValue must be of type object or string';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        var authenticator = authenticator_1.getBsnAuthenticator();
        var profileSaveAttribute = BsnProfileOperations.getProfileAttributeEntityForCreate(profileKey, profileValue);
        var body = JSON.stringify(profileSaveAttribute);
        return common_1.bsnFetch(common_1.BsnUrl + ("Self/Users/" + authenticator.userId + "/Profile/"), { method: 'POST', body: body })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (item) { return BsnProfileOperations.getProfileEntityFromCreate(item); })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnProfileOperations.prototype.updateUserProfileValue = function (profileKey, profileValue) {
        if (typeof profileKey !== 'string') {
            var errorReason = 'profileKey must be of type string';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        else if (typeof profileValue !== 'object' && typeof profileValue !== 'string') {
            var errorReason = 'profileValue must be of type object or string';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        var authenticator = authenticator_1.getBsnAuthenticator();
        var profileSaveValue = BsnProfileOperations.getProfileValueForCreateOrUpdate(profileValue);
        var body = JSON.stringify(profileSaveValue);
        return common_1.executeApiCallWithNullResponse(common_1.BsnUrl + ("Self/Users/" + authenticator.userId + "/Profile/" + profileKey + "/"), { method: 'PUT', body: body });
    };
    BsnProfileOperations.prototype.deleteUserProfileValue = function (profileKey) {
        if (typeof profileKey !== 'string') {
            var errorReason = 'profileKey must be of type string';
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, errorReason));
        }
        var authenticator = authenticator_1.getBsnAuthenticator();
        return common_1.executeApiCallWithNullResponse(common_1.BsnUrl + ("Self/Users/" + authenticator.userId + "/Profile/" + profileKey + "/"), { method: 'DELETE' });
    };
    return BsnProfileOperations;
}());
exports.BsnProfileOperations = BsnProfileOperations;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnRoleOperations = void 0;
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var RoleApiPath = 'Roles/';
var BsnRoleOperations = (function () {
    function BsnRoleOperations() {
    }
    BsnRoleOperations.prototype.getRoleList = function (options) {
        return common_1.getAllBsnListFragments(RoleApiPath, options);
    };
    BsnRoleOperations.prototype.getRoleListBySegment = function (options) {
        return common_1.getBsnListBySegment(RoleApiPath, options);
    };
    BsnRoleOperations.prototype.getNextRoleListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(RoleApiPath, enumerator);
    };
    BsnRoleOperations.prototype.getRoleEntity = function (idOrName) {
        return common_1.getBsnEntityData(RoleApiPath, idOrName);
    };
    BsnRoleOperations.prototype.createRole = function (data) {
        return common_1.addBsnListItem(RoleApiPath, JSON.stringify(data, null, 0));
    };
    BsnRoleOperations.prototype.updateRole = function (data) {
        if (!data.id && !data.name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Role ID or name must be provided for update'));
        }
        return common_1.updateBsnEntity(RoleApiPath, data.id ? data.id : data.name, JSON.stringify(data, null, 0));
    };
    BsnRoleOperations.prototype.deleteRole = function (idOrName) {
        if (!idOrName) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Role ID or name must be provided for delete'));
        }
        return common_1.deleteBsnEntity(RoleApiPath, idOrName);
    };
    BsnRoleOperations.prototype.getRolePermissions = function (idOrName) {
        return common_1.getBsnEntityPermissions(RoleApiPath, idOrName);
    };
    BsnRoleOperations.prototype.setRolePermissions = function (idOrName, permissions) {
        return common_1.setBsnEntityPermissions(RoleApiPath, idOrName, permissions);
    };
    BsnRoleOperations.prototype.replaceRolePermissions = function (idOrName, permissions) {
        return common_1.replaceBsnEntityPermissions(RoleApiPath, idOrName, permissions);
    };
    BsnRoleOperations.prototype.deleteRolePermissions = function (idOrName, permissions) {
        return common_1.deleteBsnEntityPermissions(RoleApiPath, idOrName, permissions);
    };
    return BsnRoleOperations;
}());
exports.BsnRoleOperations = BsnRoleOperations;


/***/ }),
/* 34 */
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
exports.BsnSelfOperations = void 0;
var authenticator_1 = __webpack_require__(4);
var common_1 = __webpack_require__(0);
var common_2 = __webpack_require__(0);
var SelfApiPath = 'Self/';
var NetworkApiPath = 'Self/Networks/';
var UsersApiPath = 'Self/Users/';
var SettingsApiPathElement = '/Settings';
var SubscriptionApiPathElement = '/Subscription';
var SubscriptionHistoryApiPathElement = '/Subscriptions';
var RoleApiPathElement = '/Role';
var BsnSelfOperations = (function () {
    function BsnSelfOperations() {
    }
    BsnSelfOperations.getNetworkCreationEntity = function (name) {
        return {
            id: 0,
            name: name,
            creationDate: null,
            setupCompletionDate: null,
            lockoutDate: null,
            isLockedOut: false,
            lastLockoutDate: null,
            settings: {
                webUIAccessRestricted: false,
                brightAuthorAccessRestricted: false,
                userAccessTokenLifetime: '00:15:00',
                userRefreshTokenLifetime: '1.00:00:00',
                deviceAccessTokenLifetime: '3.00:00:00',
                deviceRefreshTokenLifetime: '90.00:00:00',
                deviceRegistrationTokenLifetime: '180.00:00:00',
                automaticSubscriptionsManagementEnabled: true,
                automaticTaggedPlaylistApprovementEnabled: false,
            },
            subscription: null,
        };
    };
    BsnSelfOperations.prototype.createPerson = function (personData) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        var returnUrl = common_1.getClientRedirectUrl();
        var body = JSON.stringify(personData, null, 0);
        var request = new Request(common_1.BsnUrl + SelfApiPath + ("?returnUrl=" + encodeURIComponent(returnUrl)), {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            body: body,
        });
        var bodyWithObfuscatedPassword = JSON.stringify(__assign(__assign({}, personData), { password: '***' }), null, 0);
        return fetch(request)
            .then(function (response) { return authenticator.checkStatus(response, request, bodyWithObfuscatedPassword); })
            .then(function (response) { return authenticator.getJsonResponse(response); })
            .then(function (response) { return common_1.updateEntityDataTypes(response); })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnSelfOperations.prototype.getPerson = function () {
        return common_1.executeApiCall(common_1.BsnUrl + SelfApiPath);
    };
    BsnSelfOperations.prototype.createNetwork = function (networkName) {
        var networkData = BsnSelfOperations.getNetworkCreationEntity(networkName);
        var body = JSON.stringify(networkData, null, 0);
        var authenticator = authenticator_1.getBsnAuthenticator();
        return common_1.executeApiCall(common_1.BsnUrl + NetworkApiPath, {
            method: 'POST',
            headers: new Headers(authenticator.requestHeadersForPostOrPutWithNotification),
            body: body,
        }, false);
    };
    BsnSelfOperations.prototype.getNetworkSubscriptionHistory = function () {
        var networkName = authenticator_1.getBsnAuthenticator().networkName;
        return common_1.executeApiCall(common_1.BsnUrl + NetworkApiPath + networkName + SubscriptionHistoryApiPathElement + '/');
    };
    BsnSelfOperations.prototype.getNetworkList = function () {
        return common_1.executeApiCall(common_1.BsnUrl + NetworkApiPath, {}, false);
    };
    BsnSelfOperations.prototype.getNetworkListForUser = function () {
        return this.getNetworkList()
            .then(function (entityList) { return entityList.map(function (item) { return item.name; }); });
    };
    BsnSelfOperations.prototype.getSelfUserEntity = function () {
        return common_1.executeApiCall(common_1.BsnUrl + UsersApiPath + authenticator_1.getBsnAuthenticator().userId + '/');
    };
    BsnSelfOperations.prototype.updateNetworkSettings = function (settings) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        var body = JSON.stringify(settings, null, 0);
        return common_1.bsnFetch(common_1.BsnUrl + NetworkApiPath + authenticator.networkName + SettingsApiPathElement + '/', { method: 'PUT', body: body })
            .then(function () { return null; })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnSelfOperations.prototype.updateNetworkSubscriptionLevel = function (level) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        var body = JSON.stringify({ level: level }, null, 0);
        return common_1.bsnFetch(common_1.BsnUrl + NetworkApiPath + authenticator.networkName + SubscriptionApiPathElement + '/', {
            method: 'PUT',
            headers: new Headers(authenticator.requestHeadersForPostOrPutWithNotification),
            body: body,
        })
            .then(function () { return authenticator.refreshPasswordAndActivate(); })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    BsnSelfOperations.prototype.getSelfRoleEntity = function () {
        return common_1.executeApiCall(common_1.BsnUrl + UsersApiPath + authenticator_1.getBsnAuthenticator().userId + RoleApiPathElement + '/');
    };
    BsnSelfOperations.prototype.getSelfRolePermissions = function () {
        return common_1.executeApiCall(common_1.BsnUrl + UsersApiPath + authenticator_1.getBsnAuthenticator().userId + RoleApiPathElement + common_2.PermissionApiPathElement);
    };
    return BsnSelfOperations;
}());
exports.BsnSelfOperations = BsnSelfOperations;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnSubscriptionOperations = void 0;
var common_1 = __webpack_require__(0);
var SubscriptionApiPath = 'Subscriptions/';
var BsnSubscriptionOperations = (function () {
    function BsnSubscriptionOperations() {
    }
    BsnSubscriptionOperations.prototype.getDeviceSubscriptionList = function (options) {
        return common_1.getAllBsnListFragments(SubscriptionApiPath, options);
    };
    BsnSubscriptionOperations.prototype.getDeviceSubscriptionListBySegment = function (options) {
        return common_1.getBsnListBySegment(SubscriptionApiPath, options);
    };
    BsnSubscriptionOperations.prototype.getNextDeviceSubscriptionListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(SubscriptionApiPath, enumerator);
    };
    return BsnSubscriptionOperations;
}());
exports.BsnSubscriptionOperations = BsnSubscriptionOperations;


/***/ }),
/* 36 */
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
exports.BsnTaggedPlaylistOperations = void 0;
var bscore_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(3);
var TaggedPlaylistApiPath = 'Playlists/Tagged/';
var correctedSaveData = function (data) {
    var contentsVirtualPath = lodash_1.isNil(data.contentsVirtualPath) ? '\\' : common_1.standardPathToBsnVirtualPath(data.contentsVirtualPath);
    return __assign(__assign({}, data), { contentsVirtualPath: contentsVirtualPath });
};
var BsnTaggedPlaylistOperations = (function () {
    function BsnTaggedPlaylistOperations() {
    }
    BsnTaggedPlaylistOperations.prototype.getTaggedPlaylistList = function (options) {
        return common_1.getAllBsnListFragments(TaggedPlaylistApiPath, options);
    };
    BsnTaggedPlaylistOperations.prototype.getTaggedPlaylistListBySegment = function (options) {
        return common_1.getBsnListBySegment(TaggedPlaylistApiPath, options);
    };
    BsnTaggedPlaylistOperations.prototype.getNextTaggedPlaylistListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(TaggedPlaylistApiPath, enumerator);
    };
    BsnTaggedPlaylistOperations.prototype.getTaggedPlaylistCount = function (options) {
        return common_1.getBsnEntityCount(TaggedPlaylistApiPath, options);
    };
    BsnTaggedPlaylistOperations.prototype.getTaggedPlaylistEntity = function (idOrName) {
        return common_1.getBsnEntityData(TaggedPlaylistApiPath, idOrName);
    };
    BsnTaggedPlaylistOperations.prototype.existsTaggedPlaylist = function (name) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Name is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'name', bscore_1.BsnStringFilterOperator.Is, name)),
        };
        return common_1.getBsnEntityCount(TaggedPlaylistApiPath, enumOptions)
            .then(function (count) { return count > 0; });
    };
    BsnTaggedPlaylistOperations.prototype.createTaggedPlaylist = function (data) {
        return common_1.addBsnListItem(TaggedPlaylistApiPath, JSON.stringify(correctedSaveData(data), null, 0));
    };
    BsnTaggedPlaylistOperations.prototype.updateTaggedPlaylist = function (data) {
        if (!data.id && !data.name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Tagged Playlist ID or Name must be provided for update'));
        }
        return common_1.updateBsnEntity(TaggedPlaylistApiPath, data.id ? data.id : data.name, JSON.stringify(correctedSaveData(data), null, 0));
    };
    BsnTaggedPlaylistOperations.prototype.deleteTaggedPlaylist = function (idOrName) {
        if (!idOrName) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Tagged Playlist ID or name must be provided for delete'));
        }
        return common_1.deleteBsnEntity(TaggedPlaylistApiPath, idOrName);
    };
    BsnTaggedPlaylistOperations.prototype.getTaggedPlaylistPermissions = function (idOrName) {
        return common_1.getBsnEntityPermissions(TaggedPlaylistApiPath, idOrName);
    };
    BsnTaggedPlaylistOperations.prototype.setTaggedPlaylistPermissions = function (idOrName, permissions) {
        return common_1.setBsnEntityPermissions(TaggedPlaylistApiPath, idOrName, permissions);
    };
    BsnTaggedPlaylistOperations.prototype.replaceTaggedPlaylistPermissions = function (idOrName, permissions) {
        return common_1.replaceBsnEntityPermissions(TaggedPlaylistApiPath, idOrName, permissions);
    };
    BsnTaggedPlaylistOperations.prototype.deleteTaggedPlaylistPermissions = function (idOrName, permissions) {
        return common_1.deleteBsnEntityPermissions(TaggedPlaylistApiPath, idOrName, permissions);
    };
    return BsnTaggedPlaylistOperations;
}());
exports.BsnTaggedPlaylistOperations = BsnTaggedPlaylistOperations;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnTagOperations = void 0;
var common_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(3);
var authenticator_1 = __webpack_require__(4);
var TagApiPath = 'Tags/';
var BsnTagOperations = (function () {
    function BsnTagOperations() {
    }
    BsnTagOperations.prototype.getTagKeys = function (pattern) {
        return common_1.executeApiCall(common_1.BsnUrl + TagApiPath + 'Keys/' + common_1.getTagKeyPatternQueryString(pattern))
            .then(function (keyStrings) { return keyStrings.reduce(function (arr, keyString) {
            var spec = common_1.getTagKeySpecification(keyString);
            if (!lodash_1.isNil(spec)) {
                arr.push(spec);
            }
            return arr;
        }, []); });
    };
    BsnTagOperations.prototype.getTagValueStrings = function (pattern) {
        var queryString = common_1.getTagKeyPatternQueryString(pattern);
        if (queryString.length > 0 && !lodash_1.isNil(pattern)) {
            queryString += lodash_1.isNil(pattern.value) ? ':*' : ':' + pattern.value;
        }
        return common_1.bsnFetch(common_1.BsnUrl + TagApiPath + 'Values/' + queryString)
            .then(function (response) { return authenticator_1.getBsnAuthenticator().getJsonResponse(response); })
            .catch(function (error) { throw common_1.processBsnRequestError(error); });
    };
    return BsnTagOperations;
}());
exports.BsnTagOperations = BsnTagOperations;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnTextFeedOperations = void 0;
var bscore_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var TextFeedApiPath = 'Feeds/Text/';
var BsnTextFeedOperations = (function () {
    function BsnTextFeedOperations() {
    }
    BsnTextFeedOperations.prototype.getTextFeedList = function (options) {
        return common_1.getAllBsnListFragments(TextFeedApiPath, options);
    };
    BsnTextFeedOperations.prototype.getTextFeedListBySegment = function (options) {
        return common_1.getBsnListBySegment(TextFeedApiPath, options);
    };
    BsnTextFeedOperations.prototype.getNextTextFeedListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(TextFeedApiPath, enumerator);
    };
    BsnTextFeedOperations.prototype.getTextFeedCount = function (options) {
        return common_1.getBsnEntityCount(TextFeedApiPath, options);
    };
    BsnTextFeedOperations.prototype.getTextFeedEntity = function (idOrName) {
        return common_1.getBsnEntityData(TextFeedApiPath, idOrName);
    };
    BsnTextFeedOperations.prototype.existsTextFeed = function (name) {
        if (!name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Name is not valid'));
        }
        var enumOptions = {
            filter: filter_1.bsnCreateFilter(bscore_1.bscCreateFilterComponent(bscore_1.BsnFilterType.string, 'name', bscore_1.BsnStringFilterOperator.Is, name)),
        };
        return common_1.getBsnEntityCount(TextFeedApiPath, enumOptions)
            .then(function (count) { return count > 0; });
    };
    BsnTextFeedOperations.prototype.createTextFeed = function (data) {
        return common_1.addBsnListItem(TextFeedApiPath, JSON.stringify(data, null, 0));
    };
    BsnTextFeedOperations.prototype.updateTextFeed = function (data) {
        if (!data.id && !data.name) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Text Feed ID or Name must be provided for update'));
        }
        return common_1.updateBsnEntity(TextFeedApiPath, data.id ? data.id : data.name, JSON.stringify(data, null, 0));
    };
    BsnTextFeedOperations.prototype.deleteTextFeed = function (idOrName) {
        if (!idOrName) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'Text Feed ID or name must be provided for delete'));
        }
        return common_1.deleteBsnEntity(TextFeedApiPath, idOrName);
    };
    BsnTextFeedOperations.prototype.getTextFeedPermissions = function (idOrName) {
        return common_1.getBsnEntityPermissions(TextFeedApiPath, idOrName);
    };
    BsnTextFeedOperations.prototype.setTextFeedPermissions = function (idOrName, permissions) {
        return common_1.setBsnEntityPermissions(TextFeedApiPath, idOrName, permissions);
    };
    BsnTextFeedOperations.prototype.replaceTextFeedPermissions = function (idOrName, permissions) {
        return common_1.replaceBsnEntityPermissions(TextFeedApiPath, idOrName, permissions);
    };
    BsnTextFeedOperations.prototype.deleteTextFeedPermissions = function (idOrName, permissions) {
        return common_1.deleteBsnEntityPermissions(TextFeedApiPath, idOrName, permissions);
    };
    return BsnTextFeedOperations;
}());
exports.BsnTextFeedOperations = BsnTextFeedOperations;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsnUserOperations = void 0;
var authenticator_1 = __webpack_require__(4);
var common_1 = __webpack_require__(0);
var error_1 = __webpack_require__(1);
var UserApiPath = 'Users/';
var BsnUserOperations = (function () {
    function BsnUserOperations() {
    }
    BsnUserOperations.prototype.getUserList = function (options) {
        return common_1.getAllBsnListFragments(UserApiPath, options);
    };
    BsnUserOperations.prototype.getUserListBySegment = function (options) {
        return common_1.getBsnListBySegment(UserApiPath, options);
    };
    BsnUserOperations.prototype.getNextUserListSegment = function (enumerator) {
        return common_1.getNextBsnListSegment(UserApiPath, enumerator);
    };
    BsnUserOperations.prototype.getUserEntity = function (idOrLogin) {
        return common_1.getBsnEntityData(UserApiPath, idOrLogin);
    };
    BsnUserOperations.prototype.createUser = function (data) {
        var authenticator = authenticator_1.getBsnAuthenticator();
        return common_1.executeApiCall(common_1.BsnUrl + UserApiPath, {
            method: 'POST',
            headers: new Headers(authenticator.requestHeadersForPostOrPutWithNotification),
            body: JSON.stringify(data, null, 0),
        });
    };
    BsnUserOperations.prototype.updateUser = function (data) {
        if (!data.id) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'User ID must be provided for update'));
        }
        return common_1.updateBsnEntity(UserApiPath, data.id, JSON.stringify(data, null, 0));
    };
    BsnUserOperations.prototype.deleteUser = function (id) {
        if (!id) {
            return Promise.reject(new error_1.BsnError(error_1.BsnErrorType.invalidParameters, 'User ID must be provided for delete'));
        }
        return common_1.deleteBsnEntity(UserApiPath, id);
    };
    BsnUserOperations.prototype.getUserPermissions = function (idOrLogin) {
        return common_1.getBsnEntityPermissions(UserApiPath, idOrLogin);
    };
    BsnUserOperations.prototype.setUserPermissions = function (idOrLogin, permissions) {
        return common_1.setBsnEntityPermissions(UserApiPath, idOrLogin, permissions);
    };
    BsnUserOperations.prototype.replaceUserPermissions = function (idOrLogin, permissions) {
        return common_1.replaceBsnEntityPermissions(UserApiPath, idOrLogin, permissions);
    };
    BsnUserOperations.prototype.deleteUserPermissions = function (idOrLogin, permissions) {
        return common_1.deleteBsnEntityPermissions(UserApiPath, idOrLogin, permissions);
    };
    return BsnUserOperations;
}());
exports.BsnUserOperations = BsnUserOperations;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.testHook = exports.bsnSetNetworkTestHandler = exports.Breakpoint = void 0;
var Breakpoint;
(function (Breakpoint) {
    Breakpoint["beforeProcessChunkUploads"] = "beforeProcessChunkUploads";
    Breakpoint["beforeRandomChunkUpload"] = "beforeRandomChunkUpload";
    Breakpoint["beforeCancelUpload"] = "beforeCancelUpload";
    Breakpoint["beforeStartingFileUpload"] = "beforeStartingFileUpload";
})(Breakpoint = exports.Breakpoint || (exports.Breakpoint = {}));
var networkTestProfileHandler = null;
function bsnSetNetworkTestHandler(testHandler) {
    networkTestProfileHandler = testHandler;
}
exports.bsnSetNetworkTestHandler = bsnSetNetworkTestHandler;
function testHook(breakpoint, data) {
    if (networkTestProfileHandler) {
        networkTestProfileHandler.handleProfile(breakpoint, data);
    }
}
exports.testHook = testHook;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("form-urlencoded");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch-extended");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("xml2js");

/***/ })
/******/ ]);
});