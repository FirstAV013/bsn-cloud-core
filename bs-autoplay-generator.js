(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./bscore"), require("./bsdatamodel"), require("lodash"), require("./bsnconnector"), require("./fsconnector"), require("isomorphic-path"), require("redux"), require("string_decoder"));
	else if(typeof define === 'function' && define.amd)
		define(["./bscore", "./bsdatamodel", "lodash", "./bsnconnector", "./fsconnector", "isomorphic-path", "redux", "string_decoder"], factory);
	else if(typeof exports === 'object')
		exports["bs-autoplay-generator"] = factory(require("./bscore"), require("./bsdatamodel"), require("lodash"), require("./bsnconnector"), require("./fsconnector"), require("isomorphic-path"), require("redux"), require("string_decoder"));
	else
		root["bs-autoplay-generator"] = factory(root["./bscore"], root["./bsdatamodel"], root["lodash"], root["./bsnconnector"], root["./fsconnector"], root["isomorphic-path"], root["redux"], root["string_decoder"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__) {
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
/******/ 	__webpack_require__.p = "bs-autoplay-generator/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
exports.convertParameterizedString = exports.convertParameterizedNumber = exports.bsagGenerateAutoplay = exports.bsagConfigBsConsumerKey = void 0;
var isomorphic_path_1 = __webpack_require__(11);
var lodash_1 = __webpack_require__(3);
var redux_1 = __webpack_require__(12);
var redux_thunk_1 = __webpack_require__(8);
var bsnconnector_1 = __webpack_require__(9);
var bscore_1 = __webpack_require__(1);
var bsdatamodel_1 = __webpack_require__(2);
var fsconnector_1 = __webpack_require__(10);
var string_decoder = __webpack_require__(13);
var error_1 = __webpack_require__(7);
var commandGenerator_1 = __webpack_require__(6);
var BSConsumerKey = 'NotOurRealKey';
var _zoneAutorunMediaStatesByZoneId = {};
var _zoneAutorunMediaStatesByMediaStateIdByZoneId = {};
var _stateDataFeedIdToUniqueDataFeedId = {};
function bsagConfigBsConsumerKey(bsConsumerKey) {
    BSConsumerKey = bsConsumerKey;
}
exports.bsagConfigBsConsumerKey = bsagConfigBsConsumerKey;
function bsagGenerateAutoplay(bsdm) {
    var store = redux_1.createStore(bsdatamodel_1.bsDmReducer, redux_1.applyMiddleware(redux_thunk_1.default));
    store.dispatch(bsdatamodel_1.dmOpenSign(bsdm));
    var state = store.getState();
    bsdm = bsdatamodel_1.dmFilterDmState(state);
    var clonedBsdm = lodash_1.cloneDeep(bsdm);
    var brightAuthorMetadata = getBrightAuthorMetadata();
    var autorunSign = __assign(__assign({}, brightAuthorMetadata), { meta: null, zones: [] });
    var playlistObjectPromises = [];
    var zonesMetadata = [];
    var zonesSpecificParameters = [];
    _zoneAutorunMediaStatesByZoneId = {};
    _zoneAutorunMediaStatesByMediaStateIdByZoneId = {};
    var numVideoLayers = 0;
    var numPrecedingVideoLayers = 0;
    var graphicsZOrder = bscore_1.GraphicsZOrderType.Front;
    var videoZoneZOrderFrontById = new Map();
    var zoneLayerIdsInSequence = bsdatamodel_1.dmGetZoneLayerSequence(bsdm);
    zoneLayerIdsInSequence.forEach(function (zoneLayerId) {
        var zoneLayer = bsdatamodel_1.dmGetZoneLayerStateById(bsdm, { id: zoneLayerId });
        if (!lodash_1.isNil(zoneLayer) && zoneLayer.type === bscore_1.ZoneLayerType.Video) {
            numVideoLayers++;
        }
    });
    zoneLayerIdsInSequence.forEach(function (zoneLayerId) {
        var zoneLayer = bsdatamodel_1.dmGetZoneLayerStateById(bsdm, { id: zoneLayerId });
        if (!lodash_1.isNil(zoneLayer)) {
            var videoInFront_1 = numPrecedingVideoLayers === 0 ? true : false;
            if (zoneLayer.type === bscore_1.ZoneLayerType.Video) {
                zoneLayer.zoneSequence.forEach(function (zoneId) {
                    videoZoneZOrderFrontById.set(zoneId, videoInFront_1);
                });
                numPrecedingVideoLayers++;
            }
            else if (zoneLayer.type === bscore_1.ZoneLayerType.Graphics) {
                if (numVideoLayers > 0 && numPrecedingVideoLayers === numVideoLayers) {
                    graphicsZOrder = bscore_1.GraphicsZOrderType.Back;
                }
                else if (numVideoLayers > 1 && (numVideoLayers - 1) === numPrecedingVideoLayers) {
                    graphicsZOrder = bscore_1.GraphicsZOrderType.Middle;
                }
            }
        }
    });
    var liveDataFeeds = getBsdmSignDataFeeds(bsdm);
    var zoneIds = bsdatamodel_1.dmGetZonesForSign(clonedBsdm);
    zoneIds.forEach(function (zoneId) {
        zonesMetadata.push(getZoneMetadata(clonedBsdm, zoneId));
        var zOrderFront = videoZoneZOrderFrontById.get(zoneId);
        zonesSpecificParameters.push(getZoneSpecificParameters(clonedBsdm, zoneId, zOrderFront));
        playlistObjectPromises.push(getPlaylistObjects(clonedBsdm, zoneId));
    });
    var zonePlaylists;
    return Promise.all(playlistObjectPromises)
        .then(function (playlistObjectsArray) {
        zonePlaylists = playlistObjectsArray;
        return getSignMetadata(clonedBsdm);
    }).then(function (signMetadata) {
        signMetadata.liveDataFeeds = liveDataFeeds;
        signMetadata.graphicsZOrder = graphicsZOrder;
        autorunSign.meta = signMetadata;
        return;
    }).then(function () {
        zonePlaylists.forEach(function (zonePlaylist, index) {
            var initialMediaStateName = zonePlaylist.initialMediaStateName;
            var arPlaylist = {};
            arPlaylist = __assign(__assign(__assign({}, getPlaylistMetadata(zonesMetadata[index])), { initialMediaStateName: initialMediaStateName }), zonePlaylist);
            var autorunZone = __assign(__assign({}, zonesMetadata[index]), { zoneSpecificParameters: zonesSpecificParameters[index], playlist: arPlaylist });
            autorunSign.zones.push(autorunZone);
        });
    }).then(function () {
        return {
            BrightAuthor: autorunSign,
        };
    });
}
exports.bsagGenerateAutoplay = bsagGenerateAutoplay;
function getBrightAuthorMetadata() {
    var BrightAuthor = {
        version: 1,
        BrightAuthorConnectedVersion: '0.0.1',
        type: 'publish',
    };
    return BrightAuthor;
}
function getBsdmSignPartnerProducts(bsdm) {
    var partnerProductIds = bsdatamodel_1.dmGetPartnerProducts(bsdm);
    var arPartnerProducts = partnerProductIds.map(function (id) {
        var partnerProduct = bsdatamodel_1.dmGetPartnerProductById(bsdm, { id: id });
        return {
            name: partnerProduct.name,
            productName: partnerProduct.productName,
            port: partnerProduct.port,
        };
    });
    return arPartnerProducts;
}
function getBsdmSignIRRemoteControl(bsdm) {
    return bsdatamodel_1.dmGetSignIrRemoteControl(bsdm);
}
function getBsdmSignScriptPlugins(bsdm) {
    var autorunScriptPlugins = [];
    var scriptPluginIds = bsdatamodel_1.dmGetScriptPluginIds(bsdm);
    scriptPluginIds.forEach(function (scriptPluginId) {
        var scriptPlugin = bsdatamodel_1.dmGetScriptPluginStateById(bsdm, { id: scriptPluginId });
        var name = scriptPlugin.name, assetId = scriptPlugin.assetId;
        var assetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: assetId });
        var autorunScriptPlugin = {
            name: name,
            filePath: bscore_1.bscGetAssetFullPath(assetItem),
        };
        autorunScriptPlugins.push(autorunScriptPlugin);
    });
    return autorunScriptPlugins;
}
function getBsdmSignParserPlugins(bsdm) {
    var autorunParserPlugins = [];
    var parserPluginIds = bsdatamodel_1.dmGetParserPluginIds(bsdm);
    parserPluginIds.forEach(function (parserPluginId) {
        var parserPlugin = bsdatamodel_1.dmGetParserPluginStateById(bsdm, { id: parserPluginId });
        var assetId = parserPlugin.assetId, parseFeedFunctionName = parserPlugin.parseFeedFunctionName, parseUVFunctionName = parserPlugin.parseUVFunctionName, userAgentFunctionName = parserPlugin.userAgentFunctionName;
        var assetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: assetId });
        var filePath = bscore_1.bscGetAssetFullPath(assetItem);
        var autorunParserPlugin = {
            filePath: filePath,
            name: isomorphic_path_1.default.basename(filePath),
            feedParserFunctionName: parseFeedFunctionName,
            userVariableParserFunctionName: parseUVFunctionName,
            userAgentParserFunctionName: userAgentFunctionName,
        };
        autorunParserPlugins.push(autorunParserPlugin);
    });
    return autorunParserPlugins;
}
function getBsdmSignVideoModePlugins(bsdm) {
    var autorunVideoModePlugins = [];
    var videoModePluginIds = bsdatamodel_1.dmGetVideoModePluginIds(bsdm);
    videoModePluginIds.forEach(function (videoModePluginId) {
        var videoModePlugin = bsdatamodel_1.dmGetVideoModePluginStateById(bsdm, { id: videoModePluginId });
        var assetId = videoModePlugin.assetId, functionName = videoModePlugin.functionName;
        var assetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: assetId });
        var filePath = bscore_1.bscGetAssetFullPath(assetItem);
        var autorunVideoModePlugin = {
            filePath: filePath,
            name: isomorphic_path_1.default.basename(filePath),
            functionName: functionName,
        };
        autorunVideoModePlugins.push(autorunVideoModePlugin);
    });
    return autorunVideoModePlugins;
}
function getBsdmSignAuxiliaryFiles(bsdm) {
    return bsdatamodel_1.dmGetAuxiliaryFileAssetNames(bsdm);
}
function getBsdmLinkedPresentations(bsdm) {
    var linkedPresentations = [];
    var presentationAssetIds = bsdatamodel_1.dmGetLinkedPresentationIds(bsdm);
    var processNextLinkedPresentation = function (index) {
        if (index >= presentationAssetIds.length) {
            return Promise.resolve(linkedPresentations);
        }
        var presentationAssetId = presentationAssetIds[index];
        var linkedPresentation = bsdatamodel_1.dmGetLinkedPresentationStateById(bsdm, { id: presentationAssetId });
        var linkedPresentationAssetId = linkedPresentation.assetId;
        var linkedPresentationAssetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: linkedPresentationAssetId });
        var bpfxFilePath = isomorphic_path_1.default.join(linkedPresentationAssetItem.path, linkedPresentationAssetItem.name);
        return fsconnector_1.fsGetLocalJsonFileAsObject(bpfxFilePath).then(function (projectState) {
            var presentationId = linkedPresentation.name;
            var presentationName = bsdatamodel_1.dmGetSignName(projectState.bsdm);
            linkedPresentations.push({
                presentationId: presentationId,
                presentationName: presentationName,
            });
            return processNextLinkedPresentation(index + 1);
        });
    };
    return processNextLinkedPresentation(0);
}
function getBsdmSignMetadata(bsdm) {
    var bsdmSignMetadata = bsdatamodel_1.dmGetSignMetaData(bsdm);
    var bsdmSerialPortConfigurationList = bsdmSignMetadata.serialPortConfigurations;
    var serialPortConfigurations = [];
    bsdmSerialPortConfigurationList.forEach(function (bsdmSerialPortConfiguration) {
        var autorunSerialPortConfiguration = lodash_1.cloneDeep(bsdmSerialPortConfiguration);
        autorunSerialPortConfiguration.parity = convertParity(autorunSerialPortConfiguration.parity);
        serialPortConfigurations.push(autorunSerialPortConfiguration);
    });
    var autorunSignMetadata;
    if (bsdmSignMetadata.model === bscore_1.PlayerModel.AU325) {
        var gpioList = [
            bscore_1.GpioType.Input,
            bscore_1.GpioType.Output,
            bscore_1.GpioType.Input,
            bscore_1.GpioType.Output,
            bscore_1.GpioType.Input,
            bscore_1.GpioType.Output,
            bscore_1.GpioType.Input,
            bscore_1.GpioType.Output,
        ];
        autorunSignMetadata = __assign(__assign({}, bsdmSignMetadata), { gpio: gpioList, dataFeedSources: [], serialPortConfigurations: serialPortConfigurations, customDeviceWebPage: null });
    }
    else {
        autorunSignMetadata = __assign(__assign({}, bsdmSignMetadata), { dataFeedSources: [], serialPortConfigurations: serialPortConfigurations, customDeviceWebPage: null });
    }
    autorunSignMetadata.backgroundScreenColor.a = 0;
    return autorunSignMetadata;
}
function convertParity(bsdmParity) {
    if (bsdmParity === bsdatamodel_1.SerialParity.Even) {
        return 'E';
    }
    else if (bsdmParity === bsdatamodel_1.SerialParity.Odd) {
        return 'O';
    }
    return 'N';
}
function getBsdmCustomDeviceWebPage(bsdm) {
    var deviceWebPageMode = bsdatamodel_1.dmGetSignPresentationWebPageDisplayMode(bsdm);
    if (deviceWebPageMode === bscore_1.DeviceWebPageDisplay.Custom) {
        var deviceWebPage_1 = bsdatamodel_1.dmGetPresentationWebPage(bsdm);
        if (lodash_1.isNil(deviceWebPage_1) || lodash_1.isNil(deviceWebPage_1.customPage)) {
            throw new error_1.BsAutoplayGeneratorError(error_1.BsAutoplayGeneratorErrorType.unexpectedError, 'invalid custom device web page');
        }
        if (!lodash_1.isString(deviceWebPage_1.customPage.name)) {
            throw new error_1.BsAutoplayGeneratorError(error_1.BsAutoplayGeneratorErrorType.unexpectedError, 'custom device webpage must be named');
        }
        if (!bscore_1.bscIsAssetItem(deviceWebPage_1.customPage.indexAssetItem)) {
            throw new error_1.BsAutoplayGeneratorError(error_1.BsAutoplayGeneratorErrorType.unexpectedError, 'no custom device web page provided');
        }
        var assetItem = deviceWebPage_1.customPage.indexAssetItem;
        if (assetItem.location === bscore_1.AssetLocation.Local) {
            var htmlSiteIndexFilePath = bscore_1.bscGetAssetFullPath(assetItem);
            return Promise.resolve({
                name: deviceWebPage_1.customPage.name,
                indexFileName: isomorphic_path_1.default.basename(htmlSiteIndexFilePath),
            });
        }
        else if (assetItem.location === bscore_1.AssetLocation.Bsn) {
            return bsnconnector_1.bsnGetSession().getDeviceWebPageEntity(assetItem.networkId)
                .then(function (htmlSiteEntity) {
                return {
                    name: deviceWebPage_1.customPage.name,
                    indexFileName: htmlSiteEntity.indexFile.fileName,
                };
            });
        }
    }
    else {
        return Promise.resolve(null);
    }
}
function getNodeApp(bsdm, nodeApp) {
    var assetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: nodeApp.indexAssetId });
    if (assetItem.location === bscore_1.AssetLocation.Local) {
        var nodeAppIndexFilePath = bscore_1.bscGetAssetFullPath(assetItem);
        return Promise.resolve({
            name: nodeApp.name,
            prefix: nodeApp.name + '/',
            filePath: nodeAppIndexFilePath,
            fileName: isomorphic_path_1.default.basename(nodeAppIndexFilePath),
        });
    }
    else if (assetItem.location === bscore_1.AssetLocation.Bsn) {
        return bsnconnector_1.bsnGetSession().getHtmlSiteEntity(assetItem.networkId)
            .then(function (htmlSiteEntity) {
            return {
                name: nodeApp.name,
                prefix: nodeApp.name + '/',
                filePath: htmlSiteEntity.indexFile.relativePath,
                fileName: htmlSiteEntity.indexFile.fileName,
            };
        });
    }
}
function getHostedHtmlSite(bsdm, htmlSite) {
    if (htmlSite.type !== bscore_1.HtmlSiteType.Hosted) {
        return Promise.reject(new error_1.BsAutoplayGeneratorError(error_1.BsAutoplayGeneratorErrorType.unexpectedError, 'invalid htmlSite type: ' + htmlSite.type));
    }
    var assetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: htmlSite.indexAssetId });
    if (assetItem.location === bscore_1.AssetLocation.Local) {
        var htmlSiteIndexFilePath = bscore_1.bscGetAssetFullPath(assetItem);
        return Promise.resolve({
            name: htmlSite.name,
            queryString: convertParameterizedString(bsdm, htmlSite.queryString),
            contentIsLocal: true,
            prefix: htmlSite.name + '/',
            filePath: htmlSiteIndexFilePath,
            fileName: isomorphic_path_1.default.basename(htmlSiteIndexFilePath),
            enableNode: lodash_1.isBoolean(htmlSite.enableNode)
                ? htmlSite.enableNode
                : false,
        });
    }
    else if (assetItem.location === bscore_1.AssetLocation.Bsn) {
        return bsnconnector_1.bsnGetSession().getHtmlSiteEntity(assetItem.networkId)
            .then(function (htmlSiteEntity) {
            return {
                name: htmlSite.name,
                queryString: convertParameterizedString(bsdm, htmlSite.queryString),
                contentIsLocal: true,
                prefix: htmlSite.name + '/',
                filePath: htmlSiteEntity.indexFile.relativePath,
                fileName: htmlSiteEntity.indexFile.fileName,
                enableNode: lodash_1.isBoolean(htmlSite.enableNode)
                    ? htmlSite.enableNode
                    : false,
            };
        });
    }
}
function getRemoteHtmlSite(bsdm, htmlSite) {
    if (htmlSite.type !== bscore_1.HtmlSiteType.Remote) {
        return Promise.reject(new error_1.BsAutoplayGeneratorError(error_1.BsAutoplayGeneratorErrorType.unexpectedError, 'invalid htmlSite type: ' + htmlSite.type));
    }
    return Promise.resolve({
        name: htmlSite.name,
        queryString: convertParameterizedString(bsdm, htmlSite.queryString),
        contentIsLocal: false,
        url: convertParameterizedString(bsdm, htmlSite.url),
        enableNode: false,
    });
}
function getBsdmSignNodeApps(bsdm) {
    var autorunNodeApps = [];
    var nodeAppIds = bsdatamodel_1.dmGetNodeAppIdsForSign(bsdm);
    var processNextNodeApp = function (index) {
        if (index >= nodeAppIds.length) {
            return Promise.resolve();
        }
        var nodeAppId = nodeAppIds[index];
        var nodeApp = bsdatamodel_1.dmGetNodeAppById(bsdm, { id: nodeAppId });
        var promise = getNodeApp(bsdm, nodeApp);
        return promise
            .then(function (arNodeApp) {
            autorunNodeApps.push(arNodeApp);
            return processNextNodeApp(index + 1);
        });
    };
    return processNextNodeApp(0)
        .then(function () {
        return autorunNodeApps;
    });
}
function getBsdmSignHtmlSites(bsdm) {
    var autorunHtmlSites = [];
    var htmlSiteIds = bsdatamodel_1.dmGetHtmlSiteIdsForSign(bsdm);
    var processNextHtmlSite = function (index) {
        if (index >= htmlSiteIds.length) {
            return Promise.resolve();
        }
        var htmlSiteId = htmlSiteIds[index];
        var htmlSite = bsdatamodel_1.dmGetHtmlSiteById(bsdm, { id: htmlSiteId });
        var promise = Promise.resolve();
        switch (htmlSite.type) {
            case bscore_1.HtmlSiteType.Hosted: {
                promise = getHostedHtmlSite(bsdm, htmlSite);
                break;
            }
            case bscore_1.HtmlSiteType.Remote: {
                promise = getRemoteHtmlSite(bsdm, htmlSite);
                break;
            }
            default: {
                return Promise.reject(new error_1.BsAutoplayGeneratorError(error_1.BsAutoplayGeneratorErrorType.unexpectedError, 'unknown htmlSite type: ' + htmlSite.type));
            }
        }
        return promise
            .then(function (arHtmlSite) {
            autorunHtmlSites.push(arHtmlSite);
            return processNextHtmlSite(index + 1);
        });
    };
    return processNextHtmlSite(0)
        .then(function () {
        return autorunHtmlSites;
    });
}
function convertParameterizedNumber(bsdm, pnIn) {
    var uvSegments = [];
    if (pnIn.type === bscore_1.NumberParameterType.Number) {
        uvSegments.push({
            type: 'text',
            value: pnIn.value.toString(),
        });
    }
    else if (pnIn.type === bscore_1.NumberParameterType.UserVariable) {
        var userVariableId = pnIn.value;
        var userVariable = bsdatamodel_1.dmGetUserVariableById(bsdm, { id: userVariableId });
        uvSegments.push({
            type: 'userVariable',
            value: userVariable.name,
        });
    }
    else if (pnIn.type === bscore_1.NumberParameterType.UserVariableName) {
        debugger;
    }
    return uvSegments;
}
exports.convertParameterizedNumber = convertParameterizedNumber;
function convertParameterizedString(bsdm, psIn) {
    var uvSegments = [];
    if (lodash_1.isNil(psIn)) {
        uvSegments.push({
            type: 'text',
            value: '',
        });
    }
    else if (lodash_1.isString(psIn)) {
        uvSegments.push({
            type: 'text',
            value: psIn,
        });
    }
    else {
        var ps = psIn;
        ps.params.forEach(function (param) {
            if (param.type === bscore_1.StringParameterType.Text) {
                uvSegments.push({
                    type: 'text',
                    value: param.value,
                });
            }
            else if (param.type === bscore_1.StringParameterType.UserVariable) {
                var userVariableId = param.value;
                var userVariable = bsdatamodel_1.dmGetUserVariableById(bsdm, { id: userVariableId });
                uvSegments.push({
                    type: 'userVariable',
                    value: userVariable.name,
                });
            }
            else if (param.type === bscore_1.StringParameterType.UserVariableName) {
                uvSegments.push({
                    type: 'userVariable',
                    value: param.value,
                });
            }
        });
    }
    return uvSegments;
}
exports.convertParameterizedString = convertParameterizedString;
function dataFeedMatches(dataFeed0, dataFeed1) {
    if (dataFeed0.feedSourceId !== dataFeed1.feedSourceId) {
        return false;
    }
    if (dataFeed0.usage !== dataFeed1.usage) {
        return false;
    }
    if (dataFeed0.parserPlugin !== dataFeed1.parserPlugin) {
        return false;
    }
    if (dataFeed0.autoGenerateUserVariables !== dataFeed1.autoGenerateUserVariables) {
        return false;
    }
    if (dataFeed0.userVariableAccess !== dataFeed1.userVariableAccess) {
        return false;
    }
    if (dataFeed0.isSystemFeed !== dataFeed1.isSystemFeed) {
        return false;
    }
    if (dataFeed0.playerTagMatching !== dataFeed1.playerTagMatching) {
        return false;
    }
    if (dataFeed0.bsnAssetItem !== dataFeed1.bsnAssetItem) {
        return false;
    }
    if (dataFeed0.type !== dataFeed1.type) {
        return false;
    }
    if (dataFeed0.isBsnDataFeed !== dataFeed1.isBsnDataFeed) {
        return false;
    }
    return true;
}
function getMatchingDataFeed(dataFeed, uniqueDataFeeds) {
    for (var _i = 0, uniqueDataFeeds_1 = uniqueDataFeeds; _i < uniqueDataFeeds_1.length; _i++) {
        var existingDataFeed = uniqueDataFeeds_1[_i];
        if (existingDataFeed.id !== dataFeed.id) {
            if (dataFeedMatches(existingDataFeed, dataFeed)) {
                return existingDataFeed;
            }
        }
    }
    return null;
}
function getUniqueDataFeeds(bsdm) {
    var uniqueDataFeeds = [];
    var dataFeedIds = bsdatamodel_1.dmGetDataFeedIdsForSign(bsdm);
    var allDataFeeds = dataFeedIds.map(function (dataFeedId) {
        return bsdatamodel_1.dmGetDataFeedById(bsdm, { id: dataFeedId });
    });
    for (var _i = 0, allDataFeeds_1 = allDataFeeds; _i < allDataFeeds_1.length; _i++) {
        var dataFeed = allDataFeeds_1[_i];
        var matchingDataFeed = getMatchingDataFeed(dataFeed, uniqueDataFeeds);
        if (lodash_1.isNil(matchingDataFeed)) {
            uniqueDataFeeds.push(dataFeed);
            _stateDataFeedIdToUniqueDataFeedId[dataFeed.id] = dataFeed;
        }
        else {
            _stateDataFeedIdToUniqueDataFeedId[dataFeed.id] = matchingDataFeed;
        }
    }
    return uniqueDataFeeds;
}
function getUniqueDataFeedId(dataFeedId) {
    if (!lodash_1.isString(dataFeedId) || dataFeedId === bsdatamodel_1.BsDmIdNone) {
        return '';
    }
    var uniqueDataFeedId = _stateDataFeedIdToUniqueDataFeedId[dataFeedId].id;
    if (lodash_1.isNil(uniqueDataFeedId)) {
        uniqueDataFeedId = '';
    }
    return uniqueDataFeedId;
}
function getBsdmSignDataFeedSources(bsdm) {
    var dataFeedSourceIds = bsdatamodel_1.dmGetDataFeedSourceIdsForSign(bsdm);
    var dataFeedSources = dataFeedSourceIds.map(function (dataFeedSourceId) {
        return bsdatamodel_1.dmGetDataFeedSourceForFeedSourceId(bsdm, { id: dataFeedSourceId });
    });
    return dataFeedSources;
}
function getBsdmSignDataFeeds(bsdm) {
    var uniqueDataFeeds = getUniqueDataFeeds(bsdm);
    var autorunDataFeeds = [];
    for (var _i = 0, uniqueDataFeeds_2 = uniqueDataFeeds; _i < uniqueDataFeeds_2.length; _i++) {
        var uniqueDataFeed = uniqueDataFeeds_2[_i];
        var url = void 0;
        var id = uniqueDataFeed.id, type = uniqueDataFeed.type, usage = uniqueDataFeed.usage, updateInterval = uniqueDataFeed.updateInterval, useHeadRequest = uniqueDataFeed.useHeadRequest, parserPlugin = uniqueDataFeed.parserPlugin, autoGenerateUserVariables = uniqueDataFeed.autoGenerateUserVariables, userVariableAccess = uniqueDataFeed.userVariableAccess, playerTagMatching = uniqueDataFeed.playerTagMatching;
        if (uniqueDataFeed.isBsnDataFeed) {
            var bsnDataFeedAssetItem = bsdatamodel_1.dmGetBsnDataFeedAssetItem(bsdm, { id: uniqueDataFeed.id });
            var fileUrl = bsnDataFeedAssetItem.fileUrl;
            switch (playerTagMatching) {
                case bscore_1.PlayerTagMatchingType.MatchAllMediaTagsToPlayerTags:
                    fileUrl += '&mode=matchPlayerTags';
                    break;
                case bscore_1.PlayerTagMatchingType.MatchAllPlayerTagsToMediaTags:
                    fileUrl += '&mode=matchAllMediaTags';
                    break;
                case bscore_1.PlayerTagMatchingType.MatchAnyPlayerAndMediaTags:
                    fileUrl += '&mode=matchAnyPlayerTags';
                    break;
            }
            url = convertParameterizedString(bsdm, fileUrl);
        }
        else {
            url = convertParameterizedString(bsdm, uniqueDataFeed.url);
        }
        var autorunDataFeed = {
            id: id,
            type: type,
            usage: usage,
            updateInterval: updateInterval,
            useHeadRequest: useHeadRequest,
            autoGenerateUserVariables: autoGenerateUserVariables,
            url: url,
            userVariableAccess: userVariableAccess,
            playerTagMatching: playerTagMatching,
        };
        autorunDataFeed.parserPluginName = '';
        if (!lodash_1.isNil(parserPlugin) && lodash_1.isString(parserPlugin)) {
            var parserBrightScriptPlugin = bsdatamodel_1.dmGetParserPluginStateById(bsdm, { id: parserPlugin });
            if (!lodash_1.isNil(parserBrightScriptPlugin) && lodash_1.isString(parserBrightScriptPlugin.assetId)) {
                var bsAssetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: parserBrightScriptPlugin.assetId });
                if (!lodash_1.isNil(bsAssetItem) && lodash_1.isString(bsAssetItem.name)) {
                    autorunDataFeed.parserPluginName = bsAssetItem.name;
                }
            }
        }
        autorunDataFeeds.push(autorunDataFeed);
    }
    return autorunDataFeeds;
}
function getBsdmSignUserVariables(bsdm) {
    var autorunUserVariables = [];
    var userVariableIds = bsdatamodel_1.dmGetUserVariableIdsForSign(bsdm);
    userVariableIds.forEach(function (userVariableId) {
        var userVariable = bsdatamodel_1.dmGetUserVariableById(bsdm, { id: userVariableId });
        var name = userVariable.name, defaultValue = userVariable.defaultValue, access = userVariable.access, isNetworked = userVariable.isNetworked, dataFeedId = userVariable.dataFeedId;
        var systemVariable = userVariable.systemVariable;
        if (lodash_1.isNil(systemVariable)) {
            systemVariable = '';
        }
        var liveDataFeedId = '';
        if (isNetworked) {
            if (dataFeedId !== '' && dataFeedId !== '0') {
                liveDataFeedId = getUniqueDataFeedId(dataFeedId);
            }
            else {
            }
        }
        var defaultValueAsString = bsdatamodel_1.dmGetDisplayStringFromParameterizedString(bsdm, { paramString: defaultValue });
        var autorunUserVariable = {
            name: name,
            defaultValue: defaultValueAsString,
            access: access,
            systemVariable: systemVariable,
            liveDataFeedId: liveDataFeedId,
            url: '',
        };
        autorunUserVariables.push(autorunUserVariable);
    });
    var bsdmSignMetadata = bsdatamodel_1.dmGetSignMetaData(bsdm);
    if (bsdmSignMetadata.autoCreateMediaCounterVariables) {
        var mediaContentAssetItems = bsdatamodel_1.dmGetMediaContentAssetItemList(bsdm);
        mediaContentAssetItems.forEach(function (mediaContentAssetItem) {
            var autorunUserVariable = {
                name: mediaContentAssetItem.name,
                defaultValue: '0',
                access: bscore_1.AccessType.Private,
                systemVariable: '',
                liveDataFeedId: '',
                url: '',
            };
            autorunUserVariables.push(autorunUserVariable);
        });
    }
    return autorunUserVariables;
}
function getSignMetadata(bsdm) {
    var appSignMetadata = getBsdmSignMetadata(bsdm);
    appSignMetadata.userVariables = getBsdmSignUserVariables(bsdm);
    appSignMetadata.userDefinedEvents = [];
    appSignMetadata.scriptPlugins = getBsdmSignScriptPlugins(bsdm);
    appSignMetadata.parserPlugins = getBsdmSignParserPlugins(bsdm);
    appSignMetadata.videoModePlugins = getBsdmSignVideoModePlugins(bsdm);
    appSignMetadata.auxiliaryFiles = getBsdmSignAuxiliaryFiles(bsdm);
    appSignMetadata.presentationIdentifiers = getBsdmLinkedPresentations(bsdm);
    appSignMetadata.beacons = [];
    appSignMetadata.dataFeedSources = getBsdmSignDataFeedSources(bsdm);
    appSignMetadata.partnerProducts = getBsdmSignPartnerProducts(bsdm);
    appSignMetadata.irRemoteControl = getBsdmSignIRRemoteControl(bsdm);
    return getBsdmLinkedPresentations(bsdm)
        .then(function (presentationIdentifiers) {
        appSignMetadata.presentationIdentifiers = presentationIdentifiers;
        return getBsdmCustomDeviceWebPage(bsdm);
    })
        .then(function (customDeviceWebPage) {
        appSignMetadata.customDeviceWebPage = customDeviceWebPage;
    })
        .then(function () {
        return getBsdmSignNodeApps(bsdm);
    })
        .then(function (nodeApps) {
        appSignMetadata.nodeApps = nodeApps;
        return getBsdmSignHtmlSites(bsdm);
    })
        .then(function (htmlSites) {
        appSignMetadata.htmlSites = htmlSites;
    })
        .then(function () {
        return appSignMetadata;
    });
}
function getAudioZoneSpecificParameters(audioZoneProperties) {
    var arAudioZoneProperties = {};
    arAudioZoneProperties.audioOutput = audioZoneProperties.audioOutput;
    arAudioZoneProperties.audioMode = audioZoneProperties.audioMode;
    arAudioZoneProperties.audioMapping = audioZoneProperties.audioMapping;
    arAudioZoneProperties.audioMixMode = audioZoneProperties.audioMixMode;
    arAudioZoneProperties.analogOutput = audioZoneProperties.audioOutputAssignments.analog1.toString();
    arAudioZoneProperties.hdmiOutput = audioZoneProperties.audioOutputAssignments.hdmi.toString();
    arAudioZoneProperties.spdifOutput = audioZoneProperties.audioOutputAssignments.spdif.toString();
    arAudioZoneProperties.usbOutputTypeA = audioZoneProperties.audioOutputAssignments.usbTypeA.toString();
    arAudioZoneProperties.usbOutputTypeC = audioZoneProperties.audioOutputAssignments.usbTypeC.toString();
    arAudioZoneProperties.usbOutput700_1 = audioZoneProperties.audioOutputAssignments.usb700_1.toString();
    arAudioZoneProperties.usbOutput700_2 = audioZoneProperties.audioOutputAssignments.usb700_2.toString();
    arAudioZoneProperties.usbOutput700_3 = audioZoneProperties.audioOutputAssignments.usb700_3.toString();
    arAudioZoneProperties.usbOutput700_4 = audioZoneProperties.audioOutputAssignments.usb700_4.toString();
    arAudioZoneProperties.usbOutput700_5 = audioZoneProperties.audioOutputAssignments.usb700_5.toString();
    arAudioZoneProperties.usbOutput700_6 = audioZoneProperties.audioOutputAssignments.usb700_6.toString();
    arAudioZoneProperties.usbOutput700_7 = audioZoneProperties.audioOutputAssignments.usb700_7.toString();
    arAudioZoneProperties.usbOutput_1 = audioZoneProperties.audioOutputAssignments.usb_1.toString();
    arAudioZoneProperties.usbOutput_2 = audioZoneProperties.audioOutputAssignments.usb_2.toString();
    arAudioZoneProperties.usbOutput_3 = audioZoneProperties.audioOutputAssignments.usb_3.toString();
    arAudioZoneProperties.usbOutput_4 = audioZoneProperties.audioOutputAssignments.usb_4.toString();
    arAudioZoneProperties.usbOutput_5 = audioZoneProperties.audioOutputAssignments.usb_5.toString();
    arAudioZoneProperties.usbOutput_6 = audioZoneProperties.audioOutputAssignments.usb_6.toString();
    arAudioZoneProperties.minimumVolume = audioZoneProperties.minimumVolume;
    arAudioZoneProperties.maximumVolume = audioZoneProperties.maximumVolume;
    return arAudioZoneProperties;
}
function getEnhancedAudioZoneSpecificParameters(enhancedAudioZoneProperties) {
    var arAudioZoneProperties = getAudioZoneSpecificParameters(enhancedAudioZoneProperties);
    var arEnhancedAudioZoneProperties = {};
    arEnhancedAudioZoneProperties.fadeLength = enhancedAudioZoneProperties.fadeLength;
    arEnhancedAudioZoneProperties = Object.assign(arEnhancedAudioZoneProperties, arAudioZoneProperties);
    return arEnhancedAudioZoneProperties;
}
function getVideoZoneSpecificParameters(videoZoneProperties, zOrderFront) {
    var arAudioZoneProperties = getAudioZoneSpecificParameters(videoZoneProperties);
    var arVideoZoneProperties = {};
    arVideoZoneProperties.viewMode = videoZoneProperties.viewMode;
    arVideoZoneProperties.videoVolume = videoZoneProperties.videoVolume;
    arVideoZoneProperties.zOrderFront = zOrderFront;
    arVideoZoneProperties.mosaic = false;
    arVideoZoneProperties.maxContentResolution = videoZoneProperties.maxContentResolution;
    arVideoZoneProperties.mosaicDecoderName = videoZoneProperties.mosaicDecoderName;
    arVideoZoneProperties = Object.assign(arVideoZoneProperties, arAudioZoneProperties);
    return arVideoZoneProperties;
}
function getImageZoneSpecificParameters(imageZoneProperties) {
    var arImageZoneProperties = {};
    arImageZoneProperties.imageMode = imageZoneProperties.imageMode;
    return arImageZoneProperties;
}
function getVideoOrImagesZoneSpecificParameters(videoOrImagesZoneProperties, zOrderFront) {
    var videoZoneParameters = getVideoZoneSpecificParameters(videoOrImagesZoneProperties, zOrderFront);
    var imageZoneParameters = getImageZoneSpecificParameters(videoOrImagesZoneProperties);
    var zonePropertyParams = Object.assign({}, videoZoneParameters, imageZoneParameters);
    return zonePropertyParams;
}
function getClockZoneSpecificParameters(bsdm, zone, clockZoneProperties) {
    var arClockZoneProperties = {
        clockFormat: 'hh:mm A',
        rotation: bscore_1.RotationType.rot0,
        widget: {
            foregroundTextColor: { r: 0, g: 0, b: 0, a: 1 },
            backgroundTextColor: { r: 255, g: 255, b: 255, a: 1 },
        },
    };
    if (!lodash_1.isNil(clockZoneProperties)) {
        var mediaState = bsdatamodel_1.dmGetMediaStateStateById(bsdm, { id: zone.initialMediaStateId });
        if (!lodash_1.isNil(mediaState) && mediaState.contentItem.type === bscore_1.ContentItemType.Date) {
            arClockZoneProperties.clockFormat = 'dddd, MMMM D, YYYY';
        }
        arClockZoneProperties.rotation = clockZoneProperties.rotation;
        arClockZoneProperties.widget.backgroundTextColor = roundoffColor(clockZoneProperties.widget.backgroundTextColor);
        arClockZoneProperties.widget.fontSize = clockZoneProperties.widget.fontSize;
        arClockZoneProperties.widget.foregroundTextColor = roundoffColor(clockZoneProperties.widget.foregroundTextColor);
        if (!lodash_1.isNil(clockZoneProperties.widget)) {
            if (!lodash_1.isNil(clockZoneProperties.widget.safeTextRegion) && clockZoneProperties.widget.safeTextRegion.pct) {
                arClockZoneProperties.widget.safeTextRegion = {
                    x: clockZoneProperties.widget.safeTextRegion.x,
                    y: clockZoneProperties.widget.safeTextRegion.y,
                    width: clockZoneProperties.widget.safeTextRegion.width,
                    height: clockZoneProperties.widget.safeTextRegion.height,
                    pct: true,
                };
            }
            if (clockZoneProperties.widget.font !== 'System' && clockZoneProperties.widget.font !== bsdatamodel_1.BsDmIdNone) {
                var fontAssetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: clockZoneProperties.widget.font });
                if (!lodash_1.isNil(fontAssetItem)) {
                    arClockZoneProperties.widget.fontFileName = fontAssetItem.name;
                }
            }
            if (!lodash_1.isNil(clockZoneProperties.widget) && !lodash_1.isNil(clockZoneProperties.widget.backgroundBitmapAssetId) &&
                lodash_1.isString(clockZoneProperties.widget.backgroundBitmapAssetId) &&
                clockZoneProperties.widget.backgroundBitmapAssetId !== bsdatamodel_1.BsDmIdNone) {
                var backgroundBitmapAssetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: clockZoneProperties.widget.backgroundBitmapAssetId });
                if (!lodash_1.isNil(backgroundBitmapAssetItem)) {
                    var backgroundBitmapFilePath = bscore_1.bscGetAssetFullPath(backgroundBitmapAssetItem);
                    var backgroundBitmapFileName = isomorphic_path_1.default.basename(backgroundBitmapFilePath);
                    arClockZoneProperties.widget.backgroundBitmapFileName = backgroundBitmapFileName;
                    arClockZoneProperties.widget.stretchBitmapFile = clockZoneProperties.widget.stretchBitmapFile;
                }
            }
        }
    }
    return arClockZoneProperties;
}
function getTickerZoneSpecificParameters(bsdm, zone, tickerZoneProperties) {
    var arTickerZoneProperties = {};
    arTickerZoneProperties.scrollSpeed = convertScrollSpeed(tickerZoneProperties.scrollSpeed);
    arTickerZoneProperties.textWidget = {};
    arTickerZoneProperties.textWidget.alignment = tickerZoneProperties.textWidget.alignment;
    arTickerZoneProperties.textWidget.numberOfLines = tickerZoneProperties.textWidget.numberOfLines;
    arTickerZoneProperties.textWidget.rotation = convertTextRotation(bsdm, tickerZoneProperties.textWidget.rotation);
    arTickerZoneProperties.textWidget.scrollingMethod = tickerZoneProperties.textWidget.scrollingMethod;
    arTickerZoneProperties.textWidget.delay = tickerZoneProperties.textWidget.delay;
    arTickerZoneProperties.widget = {};
    arTickerZoneProperties.widget.backgroundTextColor = roundoffColor(tickerZoneProperties.widget.backgroundTextColor);
    arTickerZoneProperties.widget.fontSize = tickerZoneProperties.widget.fontSize;
    arTickerZoneProperties.widget.foregroundTextColor = roundoffColor(tickerZoneProperties.widget.foregroundTextColor);
    if (!lodash_1.isNil(tickerZoneProperties.widget.safeTextRegion) && tickerZoneProperties.widget.safeTextRegion.pct) {
        var x = zone.absolutePosition.x * (tickerZoneProperties.widget.safeTextRegion.x / 100);
        var y = zone.absolutePosition.height * (tickerZoneProperties.widget.safeTextRegion.y / 100);
        var width = zone.absolutePosition.width * (tickerZoneProperties.widget.safeTextRegion.width / 100);
        var height = zone.absolutePosition.height * (tickerZoneProperties.widget.safeTextRegion.height / 100);
        arTickerZoneProperties.widget.safeTextRegion = {
            x: x,
            y: y,
            width: width,
            height: height,
            pct: false,
        };
    }
    else {
        arTickerZoneProperties.widget.safeTextRegion = tickerZoneProperties.widget.safeTextRegion;
    }
    if (tickerZoneProperties.widget.font !== 'System' && tickerZoneProperties.widget.font !== bsdatamodel_1.BsDmIdNone) {
        var fontAssetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: tickerZoneProperties.widget.font });
        if (!lodash_1.isNil(fontAssetItem)) {
            arTickerZoneProperties.widget.font = fontAssetItem.name;
        }
    }
    else {
        arTickerZoneProperties.widget.font = 'System';
    }
    arTickerZoneProperties.widget.backgroundBitmap = null;
    if (!lodash_1.isNil(tickerZoneProperties.widget) && !lodash_1.isNil(tickerZoneProperties.widget.backgroundBitmapAssetId) &&
        lodash_1.isString(tickerZoneProperties.widget.backgroundBitmapAssetId) &&
        tickerZoneProperties.widget.backgroundBitmapAssetId !== bsdatamodel_1.BsDmIdNone) {
        var backgroundBitmapAssetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: tickerZoneProperties.widget.backgroundBitmapAssetId });
        if (!lodash_1.isNil(backgroundBitmapAssetItem)) {
            var backgroundBitmapFilePath = bscore_1.bscGetAssetFullPath(backgroundBitmapAssetItem);
            var backgroundBitmapFileName = isomorphic_path_1.default.basename(backgroundBitmapFilePath);
            arTickerZoneProperties.widget.backgroundBitmap = {
                file: backgroundBitmapFileName,
                stretch: tickerZoneProperties.widget.stretchBitmapFile,
            };
        }
    }
    return arTickerZoneProperties;
}
function getZoneSpecificParameters(bsdm, zoneId, zOrderFront) {
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    var zonePropertyParams = {};
    switch (zone.type) {
        case bscore_1.ZoneType.VideoOrImages: {
            zonePropertyParams =
                getVideoOrImagesZoneSpecificParameters(zone.properties, zOrderFront);
            break;
        }
        case bscore_1.ZoneType.VideoOnly: {
            zonePropertyParams = getVideoZoneSpecificParameters(zone.properties, zOrderFront);
            break;
        }
        case bscore_1.ZoneType.Images: {
            zonePropertyParams = getImageZoneSpecificParameters(zone.properties);
            break;
        }
        case bscore_1.ZoneType.AudioOnly: {
            zonePropertyParams = getAudioZoneSpecificParameters(zone.properties);
            break;
        }
        case bscore_1.ZoneType.EnhancedAudio: {
            zonePropertyParams = getEnhancedAudioZoneSpecificParameters(zone.properties);
            break;
        }
        case bscore_1.ZoneType.Ticker: {
            zonePropertyParams = getTickerZoneSpecificParameters(bsdm, zone, zone.properties);
            break;
        }
        case bscore_1.ZoneType.Clock: {
            zonePropertyParams = getClockZoneSpecificParameters(bsdm, zone, zone.properties);
            break;
        }
        case bscore_1.ZoneType.Control:
        case bscore_1.ZoneType.BackgroundImage: {
            zonePropertyParams = {};
            break;
        }
        default: {
            throw new error_1.BsAutoplayGeneratorError(error_1.BsAutoplayGeneratorErrorType.unexpectedError, 'unknown zone type: ' + zone.type);
        }
    }
    return zonePropertyParams;
}
function getZoneMetadata(bsdm, zoneId) {
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    var absolutePosition = zone.absolutePosition, tag = zone.tag, name = zone.name, nonInteractive = zone.nonInteractive, percentagePosition = zone.percentagePosition, type = zone.type;
    var autorunZoneMetadata = {
        id: tag,
        name: name,
        type: type,
        absolutePosition: absolutePosition,
        nonInteractive: nonInteractive,
        initialMediaStateName: '',
        percentagePosition: percentagePosition,
    };
    return autorunZoneMetadata;
}
function getPlaylistMetadata(zone) {
    return {
        name: 'Playlist 0',
        type: zone.nonInteractive ? 'non-interactive' : 'interactive',
    };
}
function getAudioListFromEnhancedAudioStates(audioStates) {
    var mediaListName = audioStates[0].name;
    var mediaPlaylistItem = {};
    mediaPlaylistItem.mediaType = 'audio';
    mediaPlaylistItem.advanceOnMediaEnd = true;
    mediaPlaylistItem.advanceOnImageTimeout = true;
    mediaPlaylistItem.dataFeedId = '';
    mediaPlaylistItem.playFromBeginning = true;
    mediaPlaylistItem.imageTimeout = 0;
    mediaPlaylistItem.support4KImage = false;
    mediaPlaylistItem.shuffle = false;
    mediaPlaylistItem.slideTransition = 'No effect';
    mediaPlaylistItem.sendZoneMessage = false;
    mediaPlaylistItem.startIndex = 1;
    mediaPlaylistItem.transitionDuration = 1000;
    mediaPlaylistItem.transitionEffect = {
        transitionType: bscore_1.TransitionType.NoEffect,
        transitionDuration: 1000,
    },
        mediaPlaylistItem.transitionToNextCommands = [],
        mediaPlaylistItem.transitionToPreviousCommands = [],
        mediaPlaylistItem.useDataFeed = false;
    mediaPlaylistItem.contentItems = [];
    audioStates.forEach(function (audioState) {
        var item = {};
        item.type = 'audio';
        item.fileIsLocal = true;
        item.fileName = audioState.mediaAssetItem.name;
        mediaPlaylistItem.contentItems.push(item);
    });
    var arPlaylistState = {
        name: mediaListName,
        mediaListItem: mediaPlaylistItem,
    };
    return Promise.resolve(arPlaylistState);
}
function getStateFromARMediaState(bsdm, zone, autorunMediaState) {
    var state;
    var autorunMediaItem;
    var contentItemType = autorunMediaState.contentItem.type;
    switch (contentItemType) {
        case bscore_1.ContentItemType.Image: {
            if (zone.type === bscore_1.ZoneType.BackgroundImage) {
                autorunMediaItem = buildBackgroundImageItem(bsdm, autorunMediaState.name, autorunMediaState.contentItem);
                state = {
                    backgroundImageItem: autorunMediaItem,
                };
            }
            else {
                autorunMediaItem = buildImageItem(bsdm, autorunMediaState.name, autorunMediaState.contentItem);
                state = {
                    imageItem: autorunMediaItem,
                };
            }
            break;
        }
        case bscore_1.ContentItemType.Video: {
            autorunMediaItem = buildVideoItem(bsdm, autorunMediaState.name, autorunMediaState.contentItem);
            state = {
                videoItem: autorunMediaItem,
            };
            break;
        }
        case bscore_1.ContentItemType.Audio: {
            autorunMediaItem = buildAudioItem(bsdm, autorunMediaState.name, autorunMediaState.contentItem);
            state = {
                audioItem: autorunMediaItem,
            };
            break;
        }
        case bscore_1.ContentItemType.Html: {
            autorunMediaItem = buildHtmlItem(bsdm, autorunMediaState.name, autorunMediaState.contentItem);
            state = {
                html5Item: autorunMediaItem,
            };
            break;
        }
        case bscore_1.ContentItemType.LiveVideo: {
            autorunMediaItem = buildLiveVideoItem(autorunMediaState.name, autorunMediaState.contentItem);
            state = {
                liveVideoItem: autorunMediaItem,
            };
            break;
        }
        case bscore_1.ContentItemType.VideoStream: {
            autorunMediaItem = buildVideoStreamItem(autorunMediaState.name, autorunMediaState.contentItem);
            state = {
                videoStreamItem: autorunMediaItem,
            };
            break;
        }
        case bscore_1.ContentItemType.AudioStream: {
            autorunMediaItem = buildAudioStreamItem(autorunMediaState.name, autorunMediaState.contentItem);
            state = {
                audioStreamItem: autorunMediaItem,
            };
            break;
        }
        case bscore_1.ContentItemType.MjpegStream: {
            autorunMediaItem = buildMjpegStreamItem(autorunMediaState.name, autorunMediaState.contentItem);
            autorunMediaItem.rotation = bscore_1.RotationType.rot0;
            state = {
                mjpegStreamItem: autorunMediaItem,
            };
            break;
        }
        case bscore_1.ContentItemType.MrssFeed: {
            autorunMediaItem = buildMrssFeedItem(bsdm, autorunMediaState.name, autorunMediaState.contentItem);
            state = {
                mrssDataFeedItem: autorunMediaItem,
            };
            break;
        }
        case bscore_1.ContentItemType.DataFeed: {
            autorunMediaItem = buildRSSDataFeedPlaylistItem(bsdm, autorunMediaState.name, autorunMediaState.contentItem);
            state = {
                rssDataFeedPlaylistItem: autorunMediaItem,
            };
            break;
        }
        case bscore_1.ContentItemType.TwitterFeed: {
            state = getArTwitterItem(autorunMediaState);
            break;
        }
        case bscore_1.ContentItemType.Text: {
            return getArTextItem(bsdm, autorunMediaState);
        }
        case bscore_1.ContentItemType.MediaList: {
            var autorunMediaListItem = buildMediaListItem(bsdm, autorunMediaState);
            state = {
                mediaListItem: autorunMediaListItem,
            };
            break;
        }
        case bscore_1.ContentItemType.PlayFile: {
            var autorunPlayFileItem = buildPlayFileItem(bsdm, autorunMediaState);
            state = {
                playFileItem: autorunPlayFileItem,
            };
            break;
        }
        case bscore_1.ContentItemType.EventHandler: {
            var autorunEventHandlerItem = buildEventHandlerItem(autorunMediaState.name, autorunMediaState.contentItem);
            state = {
                eventHandlerItem: autorunEventHandlerItem,
            };
            break;
        }
        case bscore_1.ContentItemType.LiveText: {
            var autorunLiveTextItem = buildLiveTextItem(bsdm, autorunMediaState);
            state = {
                templatePlaylistItem: autorunLiveTextItem,
            };
            break;
        }
        case bscore_1.ContentItemType.SuperState: {
            return getArSuperStateItem(bsdm, zone, autorunMediaState);
        }
        case bscore_1.ContentItemType.Time:
        case bscore_1.ContentItemType.Date: {
            state = {
                clockStateItem: buildClockItem(bsdm, autorunMediaState.name),
            };
            break;
        }
        case bscore_1.ContentItemType.UserVariable:
            var userVariableId = autorunMediaState.contentItem.userVariableId;
            var userVariable = bsdatamodel_1.dmGetUserVariableById(bsdm, { id: userVariableId });
            if (!lodash_1.isNil(userVariable)) {
                state = {
                    userVariableInTickerItem: {
                        userVariableName: userVariable.name,
                    },
                };
            }
            else {
                throw new error_1.BsAutoplayGeneratorError(error_1.BsAutoplayGeneratorErrorType.unexpectedError, 'user variable not found');
            }
            break;
        default:
            throw new error_1.BsAutoplayGeneratorError(error_1.BsAutoplayGeneratorErrorType.unsupportedError, 'unsupported content item type: ' + contentItemType);
    }
    state.name = autorunMediaState.uniqueIdentifier;
    state.entryCommands = autorunMediaState.entryCommands;
    state.exitCommands = autorunMediaState.exitCommands;
    return Promise.resolve(state);
}
function getArSuperStateItem(bsdm, zone, autorunMediaState) {
    return getSuperStateContent(bsdm, zone, autorunMediaState).then(function (arPlaylist) {
        var initialMediaStateId = autorunMediaState.contentItem.initialMediaStateId;
        var initialMediaState = bsdatamodel_1.dmGetMediaStateById(bsdm, { id: initialMediaStateId });
        var initialMediaStateName = lodash_1.isNil(initialMediaState) ? '' : initialMediaState.name;
        var superStateItem = {
            stateName: autorunMediaState.name,
            initialState: initialMediaStateName,
            states: arPlaylist.states,
        };
        var state = {
            name: autorunMediaState.uniqueIdentifier,
            superStateItem: superStateItem,
            entryCommands: getOrderedCommands(bsdm, autorunMediaState.id, bscore_1.CommandSequenceType.StateEntry),
            exitCommands: getOrderedCommands(bsdm, autorunMediaState.id, bscore_1.CommandSequenceType.StateExit),
        };
        return Promise.resolve(state);
    });
}
function getSuperStateContent(bsdm, zone, autorunSuperState) {
    var autorunMediaStates = [];
    var autorunMediaStatesById = {};
    var eventsById = {};
    var superStateId = autorunSuperState.id;
    var mediaStateIds = bsdatamodel_1.dmGetContainedMediaStateIdsForMediaState(bsdm, { id: superStateId });
    mediaStateIds.forEach(function (mediaStateId) {
        var mediaStateInterface = bsdatamodel_1.dmGetMediaStateStateById(bsdm, { id: mediaStateId });
        var mediaState = bsdatamodel_1.dmGetMediaStateById(bsdm, { id: mediaStateId });
        var autorunMediaState = __assign(__assign({}, mediaStateInterface), { mediaAssetItem: mediaState.mediaAssetItem, eventList: mediaState.eventList, entryCommands: getOrderedCommands(bsdm, mediaStateId, bscore_1.CommandSequenceType.StateEntry), exitCommands: getOrderedCommands(bsdm, mediaStateId, bscore_1.CommandSequenceType.StateExit), uniqueIdentifier: mediaState.name });
        autorunMediaStates.push(autorunMediaState);
        autorunMediaStatesById[mediaStateId] = autorunMediaState;
        _zoneAutorunMediaStatesByZoneId[zone.id].push(autorunMediaState);
        _zoneAutorunMediaStatesByMediaStateIdByZoneId[zone.id][mediaStateId] = autorunMediaState;
        var eventIdsForMediaState = bsdatamodel_1.dmGetEventIdsForMediaState(bsdm, { id: mediaStateId });
        if (eventIdsForMediaState.length > 0) {
            eventIdsForMediaState.forEach(function (eventId) {
                var event = bsdatamodel_1.dmGetEventById(bsdm, { id: eventId });
                event = convertBsdmEventToArEvent(event);
                eventsById[eventId] = event;
            });
        }
    });
    var playlistPromises = getArPlaylistStates(bsdm, zone.id, autorunMediaStates, eventsById);
    return Promise.all(playlistPromises)
        .then(function (states) {
        var arPlaylist = {
            states: states,
        };
        return Promise.resolve(arPlaylist);
    });
}
function getArTwitterItem(autorunMediaState) {
    var _a = autorunMediaState.contentItem, authToken = _a.authToken, encryptedTwitterSecrets = _a.encryptedTwitterSecrets, name = _a.name, numberOfTweetsToShow = _a.numberOfTweetsToShow, restrictNumberOfTweets = _a.restrictNumberOfTweets, updateInterval = _a.updateInterval, userName = _a.userName;
    var arTwitterItem = {
        stateName: autorunMediaState.name,
        authToken: authToken,
        BSConsumerKey: BSConsumerKey,
        encryptedTwitterSecrets: encryptedTwitterSecrets,
        numberOfRecentDaysForTweets: 0,
        numberOfTweetsToShow: numberOfTweetsToShow,
        restrictNumberOfTweets: restrictNumberOfTweets,
        updateInterval: updateInterval,
        userName: userName,
    };
    return {
        stateName: autorunMediaState.uniqueIdentifier,
        twitterItem: arTwitterItem,
    };
}
function getArTextItem(bsdm, autorunMediaState) {
    var stateName = autorunMediaState.name;
    var mediaAssetItem = autorunMediaState.mediaAssetItem;
    var textContentItem = autorunMediaState.contentItem;
    return buildTextItem(bsdm, stateName, mediaAssetItem, textContentItem).then(function (autorunMediaItem) {
        var state = {
            name: autorunMediaState.uniqueIdentifier,
            textItem: autorunMediaItem,
        };
        return Promise.resolve(state);
    });
}
function getTransitionEventList(bsdm, eventList) {
    var transitionEventList = [];
    eventList.forEach(function (event) {
        event = convertBsdmEventToArEvent(event);
        var userEventName = getAutorunUserEventName(event);
        var eventData = getArEventDataFromBsdmEventData(bsdm, event);
        if (!lodash_1.isNil(userEventName)) {
            var autorunUserEvent = {
                name: userEventName,
                data: eventData,
            };
            transitionEventList.push(autorunUserEvent);
        }
    });
    return transitionEventList;
}
function buildPlayFileItem(bsdm, autorunMediaState) {
    var playFileState = bsdatamodel_1.dmGetMediaStateById(bsdm, { id: autorunMediaState.id });
    var playFileContentItem = playFileState.contentItem;
    var useDefaultMedia = false;
    var defaultMediaContentItem;
    if (!lodash_1.isNil(playFileState.defaultMediaAssetItem)) {
        useDefaultMedia = true;
        switch (playFileState.defaultMediaAssetItem.mediaType) {
            case bscore_1.MediaType.Image:
                var imageContentItem = bsdatamodel_1.dmCreateImageContentItem(playFileState.defaultMediaAssetItem.name, playFileState.defaultMediaAssetItem.id);
                defaultMediaContentItem = buildImageItem(bsdm, imageContentItem.name, imageContentItem);
                break;
            case bscore_1.MediaType.Video:
                var videoContentItem = bsdatamodel_1.dmCreateVideoContentItem(playFileState.defaultMediaAssetItem.name, playFileState.defaultMediaAssetItem.id);
                defaultMediaContentItem = buildVideoItem(bsdm, videoContentItem.name, videoContentItem);
                break;
            case bscore_1.MediaType.Audio:
                var audioContentItem = bsdatamodel_1.dmCreateAudioContentItem(playFileState.defaultMediaAssetItem.name, playFileState.defaultMediaAssetItem.id);
                defaultMediaContentItem = buildAudioItem(bsdm, audioContentItem.name, audioContentItem);
                break;
        }
    }
    var dataFeedId = '';
    var useDataFeed = playFileContentItem.useDataFeed;
    if (playFileContentItem.useDataFeed) {
        dataFeedId = getUniqueDataFeedId(playFileContentItem.dataFeedId);
    }
    var useUserVariable = false;
    var userVariableName = '';
    if (playFileContentItem.triggerType === bscore_1.PlayFileTriggerType.ByUserVariable) {
        var userVariableId = playFileContentItem.userVariableIdOrName;
        var userVariable = bsdatamodel_1.dmGetUserVariableById(bsdm, { id: userVariableId });
        if (!lodash_1.isNil(userVariable)) {
            useUserVariable = true;
            userVariableName = userVariable.name;
        }
    }
    var playFileItemIds = bsdatamodel_1.dmGetMediaSequenceItemListIds(bsdm, { id: playFileState.id });
    var contentItems = [];
    playFileItemIds.forEach(function (playFileItemStateId) {
        var playFileItemState = bsdatamodel_1.dmGetPlayFileItemById(bsdm, { id: playFileItemStateId });
        var contentItem;
        switch (playFileItemState.contentItem.type) {
            case bscore_1.ContentItemType.Image:
                var imageContentItem = playFileItemState.contentItem;
                contentItem = buildImageItem(bsdm, imageContentItem.name, imageContentItem);
                break;
            case bscore_1.ContentItemType.Video:
                var videoContentItem = playFileItemState.contentItem;
                contentItem = buildVideoItem(bsdm, videoContentItem.name, videoContentItem);
                break;
            case bscore_1.ContentItemType.Audio:
                var audioContentItem = playFileItemState.contentItem;
                contentItem = buildAudioItem(bsdm, audioContentItem.name, audioContentItem);
                break;
        }
        var arPlayFileItemItem = {
            contentItem: contentItem,
            key: playFileItemState.contentItem.key,
            label: playFileItemState.contentItem.name,
            export: playFileItemState.contentItem.exportKey,
            videoDisplayMode: '',
        };
        contentItems.push(arPlayFileItemItem);
    });
    var arPlayFileItem = {
        stateName: autorunMediaState.name,
        contentItems: contentItems,
        useDataFeed: useDataFeed,
        dataFeedId: dataFeedId,
        useDefaultMedia: useDefaultMedia,
        defaultMediaContentItem: defaultMediaContentItem,
        transition: bscore_1.TransitionType.NoEffect,
        useUserVariable: useUserVariable,
        userVariableName: userVariableName,
    };
    return arPlayFileItem;
}
function buildMediaListItem(bsdm, autorunMediaState) {
    var mediaListState = bsdatamodel_1.dmGetMediaStateById(bsdm, { id: autorunMediaState.id });
    var mediaListContentItem = mediaListState.contentItem;
    var mediaListItemIds = bsdatamodel_1.dmGetMediaSequenceItemListIds(bsdm, { id: mediaListState.id });
    var contentItems = [];
    mediaListItemIds.forEach(function (mediaListItemStateId) {
        var mediaListItemState = bsdatamodel_1.dmGetMediaListItemById(bsdm, { id: mediaListItemStateId });
        switch (mediaListItemState.contentItem.type) {
            case bscore_1.ContentItemType.Image:
                var imageContentItem = mediaListItemState.contentItem;
                contentItems.push(buildImageItem(bsdm, imageContentItem.name, imageContentItem));
                break;
            case bscore_1.ContentItemType.Video:
                var videoContentItem = mediaListItemState.contentItem;
                var videoItem = buildVideoItem(bsdm, videoContentItem.name, videoContentItem);
                contentItems.push(buildVideoItem(bsdm, videoContentItem.name, videoContentItem));
                break;
            case bscore_1.ContentItemType.Audio:
                var audioContentItem = mediaListItemState.contentItem;
                contentItems.push(buildAudioItem(bsdm, audioContentItem.name, audioContentItem));
                break;
        }
    });
    var mlDataFeedId = mediaListContentItem.dataFeedId;
    var dataFeedId = getUniqueDataFeedId(mlDataFeedId);
    var transitionToNextEventList = getTransitionEventList(bsdm, mediaListState.itemGlobalForwardEventList);
    var transitionToPreviousEventList = getTransitionEventList(bsdm, mediaListState.itemGlobalBackwardEventList);
    var arMediaListItem = {
        stateName: autorunMediaState.name,
        contentItems: contentItems,
        playbackType: mediaListContentItem.playbackType,
        startIndex: mediaListContentItem.startIndex,
        shuffle: mediaListContentItem.shuffle,
        support4KImage: mediaListContentItem.support4KImage,
        sendZoneMessage: mediaListContentItem.sendMediaZoneMessage,
        inactivityTime: mediaListContentItem.inactivityTime,
        inactivityTimeout: mediaListContentItem.inactivityTimeout,
        useDataFeed: mediaListContentItem.useDataFeed,
        dataFeedId: dataFeedId,
        transitionEffect: {
            transitionType: mediaListContentItem.transition,
            transitionDuration: mediaListContentItem.transitionDuration * 1000,
        },
        transitionToNextEventList: transitionToNextEventList,
        transitionToPreviousEventList: transitionToPreviousEventList,
        transitionToNextCommands: commandGenerator_1.getBsCommands(bsdm, mediaListState.itemGlobalPlayNextCommands),
        transitionToPreviousCommands: commandGenerator_1.getBsCommands(bsdm, mediaListState.itemGlobalPlayPreviousCommands),
    };
    return arMediaListItem;
}
function getEnhancedAudioZoneStates(bsdm, zoneId, mediaStates, eventsById) {
    var states = [];
    var mediaStateIndex = 0;
    while (mediaStateIndex < mediaStates.length) {
        var mediaState = mediaStates[mediaStateIndex];
        if (mediaState.contentItem.type === bscore_1.ContentItemType.Audio) {
            var audioStates = [];
            while ((mediaStateIndex < mediaStates.length)
                && (mediaStates[mediaStateIndex].contentItem.type === bscore_1.ContentItemType.Audio)) {
                audioStates.push(mediaStates[mediaStateIndex]);
                mediaStateIndex++;
            }
            var audioList = getAudioListFromEnhancedAudioStates(audioStates);
            states.push(audioList);
        }
        else if (mediaState.contentItem.type === bscore_1.ContentItemType.MrssFeed) {
            console.log('mrss feed in enhanced audio zone');
            var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
            var state = getStateFromARMediaState(bsdm, zone, mediaState);
            states.push(state);
            mediaStateIndex++;
        }
    }
    return states;
}
function getEnhancedAudioZoneTransitions(bsdm, zoneId, states) {
    var autorunTransitions = [];
    if (states.length > 1) {
        states.forEach(function (state, index) {
            var sourceMediaStateName = state.name;
            var autorunUserEvent = {
                name: 'mediaEnd',
            };
            var targetMediaStateName;
            if (index === (states.length - 1)) {
                targetMediaStateName = states[0].name;
            }
            else {
                targetMediaStateName = states[index + 1].name;
            }
            var autorunTransition = {
                sourceMediaState: sourceMediaStateName,
                userEvent: autorunUserEvent,
                targetMediaState: targetMediaStateName,
                eventAction: bscore_1.EventIntrinsicAction.None,
                assignInputToUserVariable: false,
                variableToAssignFromInput: null,
                assignWildcardToUserVariable: false,
                variableToAssignFromWildcard: null,
                commands: [],
                conditionalTransitions: [],
            };
            autorunTransitions.push(autorunTransition);
        });
    }
    return autorunTransitions;
}
function getZoneStates(bsdm, zoneId, autorunMediaStates, eventsById) {
    var promises = [];
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    autorunMediaStates.forEach(function (autorunMediaState) {
        promises.push(getStateFromARMediaState(bsdm, zone, autorunMediaState));
    });
    return promises;
}
function buildBackgroundImageItem(bsdm, stateName, imageContentItem) {
    var assetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: imageContentItem.assetId });
    return {
        stateName: stateName,
        fileName: assetItem.name,
        filePath: bscore_1.bscGetAssetFullPath(assetItem),
    };
}
function buildClockItem(bsdm, stateName) {
    return Promise.resolve({ stateName: stateName });
}
function buildImageItem(bsdm, stateName, imageContentItem) {
    var assetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: imageContentItem.assetId });
    var arImagePlaylistItem = {
        stateName: stateName,
        fileName: assetItem.name,
        filePath: bscore_1.bscGetAssetFullPath(assetItem),
        transitionEffect: {
            transitionType: imageContentItem.defaultTransition,
            transitionDuration: imageContentItem.transitionDuration * 1000,
        },
    };
    arImagePlaylistItem.type = 'image';
    return arImagePlaylistItem;
}
function buildVideoItem(bsdm, stateName, videoContentItem) {
    var assetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: videoContentItem.assetId });
    return {
        stateName: stateName,
        fileName: assetItem.name,
        filePath: bscore_1.bscGetAssetFullPath(assetItem),
        videoDisplayMode: videoContentItem.videoDisplayMode,
        automaticallyLoop: videoContentItem.automaticallyLoop,
        type: 'video',
    };
}
function toBuffer(ab) {
    var buf = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}
function getBsnTextFileContents(textFileLocator) {
    if (textFileLocator.location === bscore_1.AssetLocation.Bsn) {
        return bsnconnector_1.bsnGetSession().getContentItem(textFileLocator.networkId)
            .then(function (contentEntity) {
            if (bsnconnector_1.bsnIsFileContentEntity(contentEntity)) {
                if (contentEntity.mediaType === bscore_1.MediaType.Text
                    && lodash_1.isString(contentEntity.physicalPath)
                    && contentEntity.physicalPath.length > 0) {
                    return bsnconnector_1.bsnGetSession().getStoredTextFile(contentEntity.physicalPath);
                }
            }
        });
    }
    return Promise.resolve('');
}
function getLocalTextFileContents(textFileLocator) {
    var filePath = isomorphic_path_1.default.join(textFileLocator.path, textFileLocator.name);
    return fsconnector_1.fsGetLocalFileAsArrayBuffer(filePath).then(function (arrayBuffer) {
        var buf = toBuffer(arrayBuffer);
        var decoder = new string_decoder.StringDecoder('utf8');
        return decoder.write(buf);
    });
}
function getTextFileContents(bsdm, mediaAssetItem, textContentItem) {
    if (mediaAssetItem.location === bscore_1.AssetLocation.Bsn) {
        return getBsnTextFileContents(mediaAssetItem);
    }
    else {
        return getLocalTextFileContents(mediaAssetItem);
    }
}
function buildTextItem(bsdm, stateName, mediaAssetItem, textContentItem) {
    var assetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: textContentItem.assetId });
    return getTextFileContents(bsdm, mediaAssetItem, textContentItem).then(function (fileContentsAsString) {
        var textStrings = fileContentsAsString.split('\n');
        var textStringItems = [];
        textStrings.forEach(function (textString) {
            if (textString !== '') {
                textStringItems.push({
                    textString: textString,
                });
            }
        });
        var arTextItem = {
            stateName: stateName,
            fileName: assetItem.name,
            filePath: bscore_1.bscGetAssetFullPath(assetItem),
            strings: textStringItems,
        };
        return Promise.resolve(arTextItem);
    });
}
function buildAudioItem(bsdm, stateName, audioContentItem) {
    var assetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: audioContentItem.assetId });
    return {
        stateName: stateName,
        fileName: assetItem.name,
        filePath: bscore_1.bscGetAssetFullPath(assetItem),
        volume: audioContentItem.volume,
        type: 'audio',
    };
}
function buildHtmlItem(bsdm, stateName, htmlContentItem) {
    var htmlSite = bsdatamodel_1.dmGetHtmlSiteById(bsdm, { id: htmlContentItem.siteId });
    var customFonts = [];
    var html5Item = {
        stateName: stateName,
        htmlSiteName: htmlSite.name,
        enableBrightSignJavascriptObjects: htmlContentItem.enableBrightSignJavascriptObjects,
        enableCrossDomainPolicyChecks: htmlContentItem.enableCrossDomainPolicyChecks,
        enableCamera: htmlContentItem.enableCamera,
        ignoreHttpsCertificateErrors: htmlContentItem.ignoreHttpsCertificateErrors,
        enableMouseEvents: htmlContentItem.enableMouseEvents,
        displayCursor: htmlContentItem.displayCursor,
        hwzOn: htmlContentItem.hwzOn,
        useUserStylesheet: htmlContentItem.useUserStylesheet,
        customFonts: customFonts,
    };
    return html5Item;
}
function populateArWidgetFromDmWidget(bsdm, liveTextItem) {
    var fontName = 'System';
    var id = liveTextItem.widget.font;
    if (lodash_1.isString(id)) {
        var fontAssetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: id });
        fontName = lodash_1.isNil(fontAssetItem) ? 'System' : fontAssetItem.name;
    }
    liveTextItem.widget.backgroundTextColor = roundoffColor(liveTextItem.widget.backgroundTextColor);
    var arWidget = lodash_1.cloneDeep(liveTextItem.widget);
    arWidget.font = fontName;
    return arWidget;
}
function buildLiveTextItem(bsdm, autorunMediaState) {
    var arStaticLiveTextItems = [];
    var arSystemVariableLiveTextItems = [];
    var arUserVariableLiveTextItems = [];
    var arMediaCounterLiveTextItems = [];
    var arIndexedLiveTextDataLiveTextItems = [];
    var arTitledLiveTextDataLiveTextItems = [];
    var arImageLiveTextItems = [];
    var arSimpleRssLiveTextItems = [];
    var arMediaRssLiveDataFeedIds = [];
    var arMediaRssTextLiveTextItems = [];
    var arMediaRssCustomFieldTextTemplateItems = [];
    var arMediaRssMediaTextLiveTextItem = {};
    var liveTextState = bsdatamodel_1.dmGetMediaStateById(bsdm, { id: autorunMediaState.id });
    var canvas = liveTextState.canvas;
    var backgroundAssetItem = canvas.backgroundAssetItem;
    var backgroundImageFile = null;
    if (lodash_1.isObject(backgroundAssetItem) && backgroundAssetItem.id !== bsdatamodel_1.BsDmIdNone) {
        var backgroundImageAssetItem = bsdatamodel_1.dmGetAssetItemById(bsdm, { id: backgroundAssetItem.id });
        var backgroundImageFilePath = bscore_1.bscGetAssetFullPath(backgroundImageAssetItem);
        var backgroundImageWidth = canvas.backgroundWidth === 0 ? -1 : canvas.backgroundWidth;
        var backgroundImageHeight = canvas.backgroundHeight === 0 ? -1 : canvas.backgroundHeight;
        backgroundImageFile = {
            fileName: backgroundAssetItem.name,
            filePath: backgroundImageFilePath,
            width: backgroundImageWidth,
            height: backgroundImageHeight,
        };
    }
    var arWidget;
    var liveTextItems = canvas.itemList;
    liveTextItems.forEach(function (liveTextItem) {
        switch (liveTextItem.type) {
            case bsdatamodel_1.LiveTextItemType.StaticText:
                var staticLiveTextItem = liveTextItem;
                var textWidget = lodash_1.cloneDeep(staticLiveTextItem.textWidget);
                textWidget.rotation = convertTextRotation(bsdm, textWidget.rotation);
                arWidget = populateArWidgetFromDmWidget(bsdm, staticLiveTextItem);
                var arStaticLiveTextItem = {
                    text: staticLiveTextItem.text,
                    textWidget: textWidget,
                    widget: arWidget,
                    backgroundColorSpecified: staticLiveTextItem.useBackgroundColor,
                    x: staticLiveTextItem.position.x,
                    y: staticLiveTextItem.position.y,
                    width: staticLiveTextItem.position.width,
                    height: staticLiveTextItem.position.height,
                    layer: staticLiveTextItem.layerIndex,
                };
                arStaticLiveTextItems.push(arStaticLiveTextItem);
                break;
            case bsdatamodel_1.LiveTextItemType.UserVariable:
                var userVariableLiveTextItem = liveTextItem;
                var name_1;
                if (lodash_1.isNil(userVariableLiveTextItem.userVariable)) {
                    name_1 = userVariableLiveTextItem.userVariableIdOrName;
                }
                else {
                    name_1 = userVariableLiveTextItem.userVariable.name;
                }
                arWidget = populateArWidgetFromDmWidget(bsdm, userVariableLiveTextItem);
                var arUserVariableLiveTextItem = {
                    name: name_1,
                    textWidget: userVariableLiveTextItem.textWidget,
                    widget: arWidget,
                    backgroundColorSpecified: userVariableLiveTextItem.useBackgroundColor,
                    x: userVariableLiveTextItem.position.x,
                    y: userVariableLiveTextItem.position.y,
                    width: userVariableLiveTextItem.position.width,
                    height: userVariableLiveTextItem.position.height,
                    layer: userVariableLiveTextItem.layerIndex,
                };
                arUserVariableLiveTextItems.push(arUserVariableLiveTextItem);
                break;
            case bsdatamodel_1.LiveTextItemType.SystemVariable:
                var systemVariableLiveTextItem = liveTextItem;
                arWidget = populateArWidgetFromDmWidget(bsdm, systemVariableLiveTextItem);
                var arSystemVariableLiveTextItem = {
                    systemVariable: systemVariableLiveTextItem.variable.toString(),
                    textWidget: systemVariableLiveTextItem.textWidget,
                    widget: arWidget,
                    backgroundColorSpecified: systemVariableLiveTextItem.useBackgroundColor,
                    x: systemVariableLiveTextItem.position.x,
                    y: systemVariableLiveTextItem.position.y,
                    width: systemVariableLiveTextItem.position.width,
                    height: systemVariableLiveTextItem.position.height,
                    layer: systemVariableLiveTextItem.layerIndex,
                };
                arSystemVariableLiveTextItems.push(arSystemVariableLiveTextItem);
                break;
            case bsdatamodel_1.LiveTextItemType.MediaCounter:
                var mediaCounterLiveTextItem = liveTextItem;
                var fileName = mediaCounterLiveTextItem.assetItem.name;
                arWidget = populateArWidgetFromDmWidget(bsdm, mediaCounterLiveTextItem);
                var arMediaCounterLiveTextItem = {
                    fileName: fileName,
                    textWidget: mediaCounterLiveTextItem.textWidget,
                    widget: arWidget,
                    backgroundColorSpecified: mediaCounterLiveTextItem.useBackgroundColor,
                    x: mediaCounterLiveTextItem.position.x,
                    y: mediaCounterLiveTextItem.position.y,
                    width: mediaCounterLiveTextItem.position.width,
                    height: mediaCounterLiveTextItem.position.height,
                    layer: mediaCounterLiveTextItem.layerIndex,
                };
                arMediaCounterLiveTextItems.push(arMediaCounterLiveTextItem);
                break;
            case bsdatamodel_1.LiveTextItemType.IndexedDataFeed:
                var indexedLiveTextItem = liveTextItem;
                var indexSpecParameterValue = convertParameterizedNumber(bsdm, indexedLiveTextItem.index);
                arWidget = populateArWidgetFromDmWidget(bsdm, indexedLiveTextItem);
                var arIndexedLiveTextItem = {
                    indexSpec: indexSpecParameterValue,
                    liveDataFeedId: getUniqueDataFeedId(indexedLiveTextItem.dataFeed.id),
                    textWidget: indexedLiveTextItem.textWidget,
                    widget: arWidget,
                    backgroundColorSpecified: indexedLiveTextItem.useBackgroundColor,
                    x: indexedLiveTextItem.position.x,
                    y: indexedLiveTextItem.position.y,
                    width: indexedLiveTextItem.position.width,
                    height: indexedLiveTextItem.position.height,
                    layer: indexedLiveTextItem.layerIndex,
                };
                arIndexedLiveTextDataLiveTextItems.push(arIndexedLiveTextItem);
                break;
            case bsdatamodel_1.LiveTextItemType.TitledDataFeed:
                var titledLiveTextItem = liveTextItem;
                var titleSpecParameterValue = convertParameterizedString(bsdm, titledLiveTextItem.title);
                arWidget = populateArWidgetFromDmWidget(bsdm, titledLiveTextItem);
                var arTitledLiveTextItem = {
                    titleSpec: titleSpecParameterValue,
                    liveDataFeedId: getUniqueDataFeedId(titledLiveTextItem.dataFeed.id),
                    textWidget: titledLiveTextItem.textWidget,
                    widget: arWidget,
                    backgroundColorSpecified: titledLiveTextItem.useBackgroundColor,
                    x: titledLiveTextItem.position.x,
                    y: titledLiveTextItem.position.y,
                    width: titledLiveTextItem.position.width,
                    height: titledLiveTextItem.position.height,
                    layer: titledLiveTextItem.layerIndex,
                };
                arTitledLiveTextDataLiveTextItems.push(arTitledLiveTextItem);
                break;
            case bsdatamodel_1.LiveTextItemType.Image:
                var imageLiveTextItem = liveTextItem;
                var arImageLiveTextItem = {
                    fileName: imageLiveTextItem.assetItem.name,
                    x: imageLiveTextItem.position.x,
                    y: imageLiveTextItem.position.y,
                    width: imageLiveTextItem.position.width,
                    height: imageLiveTextItem.position.height,
                    layer: imageLiveTextItem.layerIndex,
                };
                arImageLiveTextItems.push(arImageLiveTextItem);
                break;
            case bsdatamodel_1.LiveTextItemType.SimpleRss:
                var simpleRssTextItem = liveTextItem;
                var rssLiveDataFeedIds_1 = [];
                simpleRssTextItem.dataFeeds.forEach(function (simpleRssDataFeed) {
                    rssLiveDataFeedIds_1.push(getUniqueDataFeedId(simpleRssDataFeed.id));
                });
                arWidget = populateArWidgetFromDmWidget(bsdm, simpleRssTextItem);
                var arSimpleRssLiveTextItem = {
                    id: simpleRssTextItem.groupId,
                    elementName: simpleRssTextItem.element,
                    displayTime: simpleRssTextItem.displayTime,
                    rssLiveDataFeedIds: rssLiveDataFeedIds_1,
                    textWidget: simpleRssTextItem.textWidget,
                    widget: arWidget,
                    backgroundColorSpecified: simpleRssTextItem.useBackgroundColor,
                    x: simpleRssTextItem.position.x,
                    y: simpleRssTextItem.position.y,
                    width: simpleRssTextItem.position.width,
                    height: simpleRssTextItem.position.height,
                    layer: simpleRssTextItem.layerIndex,
                };
                arSimpleRssLiveTextItems.push(arSimpleRssLiveTextItem);
                break;
            case bsdatamodel_1.LiveTextItemType.MediaRssText:
                var mediaRssTextItem = liveTextItem;
                if (arMediaRssLiveDataFeedIds.length === 0) {
                    mediaRssTextItem.dataFeeds.forEach(function (dataFeed) {
                        arMediaRssLiveDataFeedIds.push(getUniqueDataFeedId(dataFeed.id));
                    });
                }
                arWidget = populateArWidgetFromDmWidget(bsdm, mediaRssTextItem);
                if (mediaRssTextItem.element === 'Custom') {
                    var arCustomFieldTextTemplateItem = {
                        elementName: mediaRssTextItem.customFieldName,
                        x: mediaRssTextItem.position.x,
                        y: mediaRssTextItem.position.y,
                        width: mediaRssTextItem.position.width,
                        height: mediaRssTextItem.position.height,
                        layer: mediaRssTextItem.layerIndex,
                        backgroundColorSpecified: mediaRssTextItem.useBackgroundColor,
                        widget: arWidget,
                        textWidget: mediaRssTextItem.textWidget,
                    };
                    arMediaRssCustomFieldTextTemplateItems.push(arCustomFieldTextTemplateItem);
                }
                else {
                    var arMediaRssTextLiveTextItem = {
                        elementName: mediaRssTextItem.element,
                        x: mediaRssTextItem.position.x,
                        y: mediaRssTextItem.position.y,
                        width: mediaRssTextItem.position.width,
                        height: mediaRssTextItem.position.height,
                        layer: mediaRssTextItem.layerIndex,
                        backgroundColorSpecified: mediaRssTextItem.useBackgroundColor,
                        widget: arWidget,
                        textWidget: mediaRssTextItem.textWidget,
                    };
                    arMediaRssTextLiveTextItems.push(arMediaRssTextLiveTextItem);
                }
                break;
            case bsdatamodel_1.LiveTextItemType.MediaRssMedia:
                var mediaRssMediaItem = liveTextItem;
                if (arMediaRssLiveDataFeedIds.length === 0) {
                    mediaRssTextItem.dataFeeds.forEach(function (dataFeed) {
                        arMediaRssLiveDataFeedIds.push(getUniqueDataFeedId(dataFeed.id));
                    });
                }
                arMediaRssMediaTextLiveTextItem = {
                    x: mediaRssMediaItem.position.x,
                    y: mediaRssMediaItem.position.y,
                    width: mediaRssMediaItem.position.width,
                    height: mediaRssMediaItem.position.height,
                    layer: mediaRssMediaItem.layerIndex,
                };
                break;
            default:
                debugger;
        }
    });
    return {
        stateName: autorunMediaState.name,
        backgroundImageFile: backgroundImageFile,
        constantTextTemplateItems: arStaticLiveTextItems,
        systemVariableTemplateItems: arSystemVariableLiveTextItems,
        userVariableTemplateItems: arUserVariableLiveTextItems,
        mediaCounterLiveTextItems: arMediaCounterLiveTextItems,
        indexedLiveTextDataItems: arIndexedLiveTextDataLiveTextItems,
        titledLiveTextDataItems: arTitledLiveTextDataLiveTextItems,
        imageTemplateItems: arImageLiveTextItems,
        mediaRssLiveDataFeedIds: arMediaRssLiveDataFeedIds,
        mediaRssTextTemplateItems: arMediaRssTextLiveTextItems,
        mediaRssCustomFieldTemplateItems: arMediaRssCustomFieldTextTemplateItems,
        mediaRssMediaTemplateItem: arMediaRssMediaTextLiveTextItem,
        simpleRssTemplateItems: arSimpleRssLiveTextItems,
    };
}
function buildLiveVideoItem(stateName, liveVideoContentItem) {
    var liveVideoItem = {
        stateName: stateName,
        volume: liveVideoContentItem.volume,
        overscan: liveVideoContentItem.overscan,
    };
    return liveVideoItem;
}
function buildVideoStreamItem(stateName, videoStreamContentItem) {
    var videoStreamItem = {
        stateName: stateName,
        url: videoStreamContentItem.url,
    };
    return videoStreamItem;
}
function buildAudioStreamItem(stateName, audioStreamContentItem) {
    var audioStreamItem = {
        stateName: stateName,
        url: audioStreamContentItem.url,
    };
    return audioStreamItem;
}
function buildMjpegStreamItem(stateName, mjpegStreamContentItem) {
    var mjpegStreamItem = {
        stateName: stateName,
        url: mjpegStreamContentItem.url,
        rotation: mjpegStreamContentItem.rotation,
    };
    return mjpegStreamItem;
}
function buildEventHandlerItem(stateName, eventHandlerContentItem) {
    var eventHandlerItem = {
        stateName: stateName,
        stopPlayback: eventHandlerContentItem.stopPlayback,
    };
    return eventHandlerItem;
}
function buildMrssFeedItem(bsdm, stateName, mrssDataFeedContentItem) {
    var dataFeedId = getUniqueDataFeedId(mrssDataFeedContentItem.dataFeedId);
    var mrssDataFeedItem = {
        stateName: stateName,
        liveDataFeedId: dataFeedId,
    };
    return mrssDataFeedItem;
}
function buildRSSDataFeedPlaylistItem(bsdm, stateName, dataFeedContentItem) {
    var rssDataFeedPlaylistItem = {
        stateName: stateName,
        liveDataFeedId: getUniqueDataFeedId(dataFeedContentItem.dataFeedId),
    };
    return rssDataFeedPlaylistItem;
}
function getMinutesSinceMidnight(date) {
    var timeAtMidnight = new Date(date);
    timeAtMidnight.setHours(0, 0, 0, 0);
    var specifiedTime = new Date(date);
    var offsetInMsec = specifiedTime.getTime() - timeAtMidnight.getTime();
    var offsetInMinutes = Math.floor(offsetInMsec / 60000);
    return offsetInMinutes;
}
function escapeRegExp(input) {
    return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function fixWildcardEventData(payload, wildcardSpec) {
    var indexOfWildcardDesignator = payload.indexOf(wildcardSpec);
    if (indexOfWildcardDesignator >= 0) {
        var dataBeforeWildcardDesignator = payload.slice(0, indexOfWildcardDesignator);
        var dataAfterWildcardDesignator = payload.slice(indexOfWildcardDesignator + wildcardSpec.length);
        payload = escapeRegExp(dataBeforeWildcardDesignator)
            + '(.*)' + escapeRegExp(dataAfterWildcardDesignator);
    }
    return payload;
}
function getArEventDataFromBsdmEventData(bsdm, event) {
    var eventData = event.data;
    switch (event.type) {
        case bscore_1.EventType.Serial:
            eventData.data = fixWildcardEventData(eventData.data, '<*>');
            eventData.port = eventData.port.toString();
            break;
        case bscore_1.EventType.ZoneMessage: {
            eventData.data = fixWildcardEventData(eventData.data, '<*>');
            break;
        }
        case bscore_1.EventType.PluginMessage: {
            var pluginMessageEventData = eventData;
            var scriptPlugin = bsdatamodel_1.dmGetScriptPluginById(bsdm, { id: pluginMessageEventData.pluginId });
            eventData.name = scriptPlugin.name;
            eventData.data = fixWildcardEventData(pluginMessageEventData.message, '<*>');
            break;
        }
        case bscore_1.EventType.Udp: {
            eventData.data = fixWildcardEventData(eventData.data, '<any>');
            break;
        }
    }
    if (event.type === bscore_1.EventType.TimeClock) {
        var timeClockEventData = eventData;
        if (timeClockEventData.type === bsdatamodel_1.DmTimeClockEventType.DateTime) {
        }
        else if (timeClockEventData.type === bsdatamodel_1.DmTimeClockEventType.ByUserVariable) {
            var data = timeClockEventData.data;
            var userVariableId = data.userVariableId;
            var userVariable = bsdatamodel_1.dmGetUserVariableById(bsdm, { id: userVariableId });
            eventData.data.userVariableName = userVariable.name;
            delete eventData.data.userVariableId;
        }
        else if (timeClockEventData.type === bsdatamodel_1.DmTimeClockEventType.DailyOnce) {
            var data = timeClockEventData.data;
            eventData.data.time = getMinutesSinceMidnight(data.time);
        }
        else if (timeClockEventData.type === bsdatamodel_1.DmTimeClockEventType.DailyPeriodic) {
            var data = timeClockEventData.data;
            eventData.data.startTime = getMinutesSinceMidnight(data.startTime);
            eventData.data.endTime = getMinutesSinceMidnight(data.endTime);
        }
    }
    return eventData;
}
function convertBsdmEventToArEvent(event) {
    if (event.type === bscore_1.EventType.Button) {
        var gpioEventData = {
            buttonNumber: event.data.buttonNumber * 2,
            buttonDirection: event.data.buttonDirection,
            pressContinuous: event.data.pressContinuous,
        };
        var clonedEvent = lodash_1.cloneDeep(event);
        clonedEvent.type = bscore_1.EventType.Gpio;
        clonedEvent.data = gpioEventData;
        event = clonedEvent;
    }
    return event;
}
function getZoneTransitions(bsdm, mediaStatesById, eventsById) {
    var autorunTransitions = [];
    var _loop_1 = function (eventId) {
        if (eventsById.hasOwnProperty(eventId)) {
            var event_1 = eventsById[eventId];
            if (!event_1.disabled) {
                var userEventName_1 = getAutorunUserEventName(event_1);
                if (!lodash_1.isNil(userEventName_1)) {
                    var sourceMediaStateId = event_1.mediaStateId;
                    var sourceMediaState_1 = mediaStatesById[sourceMediaStateId];
                    if (userEventName_1 === 'videoTimeCodeEvent' || userEventName_1 === 'audioTimeCodeEvent') {
                        event_1.commands.forEach(function (command) {
                            var _a, _b;
                            var timeCode = command.startTime;
                            var operations = command.operations;
                            var autorunUserEvent = {
                                name: userEventName_1,
                                data: {
                                    type: userEventName_1,
                                    eventTime: timeCode,
                                },
                            };
                            var commandOperation = command.operations[0];
                            var bsCommandParameters;
                            var commandType = commandOperation.type;
                            if (!lodash_1.isNil(commandOperation.data)) {
                                bsCommandParameters = commandGenerator_1.getBsCommandParameterValueItems(bsdm, commandType, commandOperation.data);
                            }
                            else {
                                bsCommandParameters = null;
                            }
                            var arCommandType = commandGenerator_1.getArCommandTypeFromCommandType(commandType);
                            var arCommand;
                            if (lodash_1.isNil(bsCommandParameters)) {
                                arCommand = (_a = {},
                                    _a[arCommandType] = null,
                                    _a);
                            }
                            else {
                                arCommand = (_b = {},
                                    _b[arCommandType] = bsCommandParameters,
                                    _b);
                            }
                            var arTransition = {
                                sourceMediaState: sourceMediaState_1.uniqueIdentifier,
                                userEvent: autorunUserEvent,
                                targetMediaState: null,
                                eventAction: bscore_1.EventIntrinsicAction.None,
                                assignInputToUserVariable: false,
                                assignWildcardToUserVariable: false,
                                variableToAssignFromInput: null,
                                variableToAssignFromWildcard: null,
                                commands: [arCommand],
                                conditionalTransitions: [],
                            };
                            autorunTransitions.push(arTransition);
                        });
                    }
                    else if (!lodash_1.isNil(event_1.defaultTransition)) {
                        var autorunTransition = getArTransitionFromDmcEvent(bsdm, event_1, mediaStatesById);
                        if (!lodash_1.isNil(autorunTransition)) {
                            autorunTransitions.push(autorunTransition);
                        }
                    }
                    else {
                        var eventData = getArEventDataFromBsdmEventData(bsdm, event_1);
                        var conditionalTransitions = getConditionalTransitions(bsdm, event_1);
                        var userEventVariableParameters = getUserEventVariableParameters(bsdm, event_1);
                        var assignInputToUserVariable = userEventVariableParameters.assignInputToUserVariable, assignWildcardToUserVariable = userEventVariableParameters.assignWildcardToUserVariable, variableToAssignFromInput = userEventVariableParameters.variableToAssignFromInput, variableToAssignFromWildcard = userEventVariableParameters.variableToAssignFromWildcard;
                        var autorunUserEvent = {
                            name: userEventName_1,
                            data: eventData,
                        };
                        autorunTransitions.push({
                            sourceMediaState: sourceMediaState_1.uniqueIdentifier,
                            userEvent: autorunUserEvent,
                            targetMediaState: null,
                            eventAction: event_1.action,
                            assignInputToUserVariable: assignInputToUserVariable,
                            variableToAssignFromInput: variableToAssignFromInput,
                            assignWildcardToUserVariable: assignWildcardToUserVariable,
                            variableToAssignFromWildcard: variableToAssignFromWildcard,
                            commands: getOrderedCommands(bsdm, event_1.id, bscore_1.CommandSequenceType.Event),
                            conditionalTransitions: conditionalTransitions,
                        });
                    }
                }
            }
        }
    };
    for (var eventId in eventsById) {
        _loop_1(eventId);
    }
    return autorunTransitions;
}
function getEventSupportsAssignInputToVariables(event) {
    switch (event.type) {
        case bscore_1.EventType.PluginMessage:
        case bscore_1.EventType.Serial:
        case bscore_1.EventType.Udp:
        case bscore_1.EventType.WssEvent:
            return true;
    }
    return false;
}
function getUserEventVariableParameters(bsdm, event) {
    var assignInputToUserVariable = false;
    var assignWildcardToUserVariable = false;
    var variableToAssignFromInput = null;
    var variableToAssignFromWildcard = null;
    if (getEventSupportsAssignInputToVariables(event)) {
        var assignInputEventData = event.data;
        assignInputToUserVariable = assignInputEventData.assignInputToUserVariable;
        if (assignInputToUserVariable && !lodash_1.isNil(assignInputEventData.userVariableToAssignInput)) {
            var userVariable = bsdatamodel_1.dmGetUserVariableById(bsdm, { id: assignInputEventData.userVariableToAssignInput });
            if (!lodash_1.isNil(userVariable)) {
                variableToAssignFromInput = userVariable.name;
            }
        }
        assignWildcardToUserVariable = assignInputEventData.assignWildcardToUserVariable;
        variableToAssignFromWildcard = assignInputEventData.userVariableToAssignWildcard;
        if (assignWildcardToUserVariable && !lodash_1.isNil(assignInputEventData.userVariableToAssignWildcard)) {
            var userVariable = bsdatamodel_1.dmGetUserVariableById(bsdm, { id: assignInputEventData.userVariableToAssignWildcard });
            if (!lodash_1.isNil(userVariable)) {
                variableToAssignFromWildcard = userVariable.name;
            }
        }
    }
    return {
        assignInputToUserVariable: assignInputToUserVariable,
        assignWildcardToUserVariable: assignWildcardToUserVariable,
        variableToAssignFromInput: variableToAssignFromInput,
        variableToAssignFromWildcard: variableToAssignFromWildcard,
    };
}
function getArTransitionFromDmcEvent(bsdm, event, mediaStatesById) {
    var transition = event.defaultTransition;
    var sourceMediaStateId = event.mediaStateId;
    var sourceMediaState = mediaStatesById[sourceMediaStateId];
    var targetMediaStateId = transition.targetMediaStateId;
    var targetMediaStateUniqueIdentifier = '';
    if (mediaStatesById.hasOwnProperty(targetMediaStateId)) {
        targetMediaStateUniqueIdentifier = mediaStatesById[targetMediaStateId].uniqueIdentifier;
    }
    else {
        var targetMediaState = bsdatamodel_1.dmGetMediaStateById(bsdm, { id: targetMediaStateId });
        targetMediaStateUniqueIdentifier = targetMediaState.name;
    }
    var eventData = getArEventDataFromBsdmEventData(bsdm, event);
    var userEventName = getAutorunUserEventName(event);
    if (!lodash_1.isNil(userEventName)) {
        var autorunUserEvent = {
            name: userEventName,
            data: eventData,
        };
        var userEventVariableParameters = getUserEventVariableParameters(bsdm, event);
        var assignInputToUserVariable = userEventVariableParameters.assignInputToUserVariable, assignWildcardToUserVariable = userEventVariableParameters.assignWildcardToUserVariable, variableToAssignFromInput = userEventVariableParameters.variableToAssignFromInput, variableToAssignFromWildcard = userEventVariableParameters.variableToAssignFromWildcard;
        var conditionalTransitions = getConditionalTransitions(bsdm, event);
        var autorunTransition = {
            sourceMediaState: sourceMediaState.uniqueIdentifier,
            userEvent: autorunUserEvent,
            targetMediaState: targetMediaStateUniqueIdentifier,
            eventAction: bscore_1.EventIntrinsicAction.None,
            assignInputToUserVariable: assignInputToUserVariable,
            assignWildcardToUserVariable: assignWildcardToUserVariable,
            variableToAssignFromInput: variableToAssignFromInput,
            variableToAssignFromWildcard: variableToAssignFromWildcard,
            commands: getOrderedCommands(bsdm, event.id, bscore_1.CommandSequenceType.Event),
            conditionalTransitions: conditionalTransitions,
        };
        return autorunTransition;
    }
    return null;
}
function getConditionalTransitions(bsdm, event) {
    var conditionalTransitionIds = bsdatamodel_1.dmGetConditionalTransitionIdsForEvent(bsdm, { id: event.id });
    var conditionalTransitions = conditionalTransitionIds.map(function (id) {
        var transition = bsdatamodel_1.dmGetTransitionById(bsdm, { id: id });
        var condition = transition.condition, targetMediaStateId = transition.targetMediaStateId, conditionalAction = transition.conditionalAction, commands = transition.commands;
        var userVariable = bsdatamodel_1.dmGetUserVariableById(bsdm, { id: condition.userVariableId });
        var targetMediaState = bsdatamodel_1.dmGetMediaStateById(bsdm, { id: targetMediaStateId });
        var targetMediaStateName = '';
        if (!lodash_1.isNil(targetMediaState)) {
            targetMediaStateName = targetMediaState.name;
        }
        var conditionalTransition = {
            variableName: userVariable.name,
            compareOperator: condition.compareOperator,
            compareValue1: convertParameterizedString(bsdm, condition.compareValue1),
            compareValue2: lodash_1.isNil(condition.compareValue2) ? null : convertParameterizedString(bsdm, condition.compareValue2),
            conditionalAction: conditionalAction,
            targetMediaState: targetMediaStateName,
            commands: getOrderedCommands(bsdm, id, bscore_1.CommandSequenceType.Transition),
        };
        return conditionalTransition;
    });
    return conditionalTransitions;
}
function getAutorunUserEventName(event) {
    var userEventName;
    switch (event.type) {
        case bscore_1.EventType.Gpio:
            userEventName = 'gpioUserEvent';
            break;
        case bscore_1.EventType.Button:
            userEventName = 'buttonUserEvent';
            break;
        case bscore_1.EventType.Bp: {
            var bpEventData = event.data;
            switch (bpEventData.bpType) {
                case bscore_1.BpType.Bp900:
                    switch (bpEventData.bpIndex) {
                        case bscore_1.BpIndex.A: {
                            userEventName = 'bp900AUserEvent';
                            break;
                        }
                        case bscore_1.BpIndex.B: {
                            userEventName = 'bp900BUserEvent';
                            break;
                        }
                        case bscore_1.BpIndex.C: {
                            userEventName = 'bp900CUserEvent';
                            break;
                        }
                        case bscore_1.BpIndex.D: {
                            userEventName = 'bp900DUserEvent';
                            break;
                        }
                    }
                    break;
                case bscore_1.BpType.Bp200:
                    switch (bpEventData.bpIndex) {
                        case bscore_1.BpIndex.A: {
                            userEventName = 'bp200AUserEvent';
                            break;
                        }
                        case bscore_1.BpIndex.B: {
                            userEventName = 'bp200BUserEvent';
                            break;
                        }
                        case bscore_1.BpIndex.C: {
                            userEventName = 'bp200CUserEvent';
                            break;
                        }
                        case bscore_1.BpIndex.D: {
                            userEventName = 'bp200DUserEvent';
                            break;
                        }
                    }
                    break;
            }
            break;
        }
        case bscore_1.EventType.InternalSynchronize:
            userEventName = 'internalSynchronize';
            break;
        case bscore_1.EventType.Keyboard:
            userEventName = 'keyboard';
            break;
        case bscore_1.EventType.MediaEnd:
            userEventName = 'mediaEnd';
            break;
        case bscore_1.EventType.MediaListEnd:
            userEventName = 'mediaListEnd';
            break;
        case bscore_1.EventType.PluginMessage:
            userEventName = 'pluginMessageEvent';
            break;
        case bscore_1.EventType.RectangularTouch:
            userEventName = 'rectangularTouchEvent';
            break;
        case bscore_1.EventType.Serial:
            userEventName = 'serial';
            break;
        case bscore_1.EventType.Synchronize:
            userEventName = 'synchronize';
            break;
        case bscore_1.EventType.InternalSynchronize:
            userEventName = 'internalSynchronize';
            break;
        case bscore_1.EventType.Timer: {
            userEventName = 'timeout';
            if (event.data.interval === 0) {
                userEventName = null;
            }
            break;
        }
        case bscore_1.EventType.Udp:
            userEventName = 'udp';
            break;
        case bscore_1.EventType.Usb:
            userEventName = 'usb';
            break;
        case bscore_1.EventType.ZoneMessage:
            userEventName = 'zoneMessage';
            break;
        case bscore_1.EventType.VideoTimeCode:
            userEventName = 'videoTimeCodeEvent';
            break;
        case bscore_1.EventType.AudioTimeCode:
            userEventName = 'audioTimeCodeEvent';
            break;
        case bscore_1.EventType.TimeClock:
            userEventName = 'timeClockEvent';
            break;
        case bscore_1.EventType.Remote:
            userEventName = 'remote';
            break;
        case bscore_1.EventType.WssEvent:
            userEventName = 'wssEvent';
            break;
        default:
            console.log('unsupported event type: ', event.type);
            break;
    }
    return userEventName;
}
function getOrderedCommands(bsdm, mediaStateId, commandSequenceType) {
    var sequenceId = bsdatamodel_1.dmGetCommandSequenceIdForParentAndType(bsdm, { id: mediaStateId, type: commandSequenceType.toString() });
    var sequence = bsdatamodel_1.dmGetCommandSequenceStateById(bsdm, { id: sequenceId });
    if (lodash_1.isNil(sequence)) {
        return [];
    }
    var commands = sequence.sequence.map(function (commandId) {
        var command = bsdatamodel_1.dmGetCommandById(bsdm, { id: commandId });
        return command;
    });
    return commandGenerator_1.getBsCommands(bsdm, commands);
}
function getPlaylistObjects(bsdm, zoneId) {
    var autorunMediaStates = [];
    var autorunMediaStatesById = {};
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    var mediaStateIds = zone.nonInteractive
        ? bsdatamodel_1.dmGetZoneSimplePlaylist(bsdm, { id: zoneId })
        : bsdatamodel_1.dmGetMediaStateIdsForZone(bsdm, { id: zoneId });
    mediaStateIds.forEach(function (mediaStateId) {
        var mediaStateInterface = bsdatamodel_1.dmGetMediaStateStateById(bsdm, { id: mediaStateId });
        var mediaState = bsdatamodel_1.dmGetMediaStateById(bsdm, { id: mediaStateId });
        var autorunMediaState = __assign(__assign({}, mediaStateInterface), { mediaAssetItem: mediaState.mediaAssetItem, eventList: mediaState.eventList, entryCommands: getOrderedCommands(bsdm, mediaStateId, bscore_1.CommandSequenceType.StateEntry), exitCommands: getOrderedCommands(bsdm, mediaStateId, bscore_1.CommandSequenceType.StateExit), uniqueIdentifier: mediaState.name });
        autorunMediaStates.push(autorunMediaState);
        autorunMediaStatesById[mediaStateId] = autorunMediaState;
        if (lodash_1.isNil(_zoneAutorunMediaStatesByZoneId[zoneId])) {
            _zoneAutorunMediaStatesByZoneId[zoneId] = [];
        }
        _zoneAutorunMediaStatesByZoneId[zoneId].push(autorunMediaState);
        if (lodash_1.isNil(_zoneAutorunMediaStatesByMediaStateIdByZoneId[zoneId])) {
            _zoneAutorunMediaStatesByMediaStateIdByZoneId[zoneId] = {};
        }
        _zoneAutorunMediaStatesByMediaStateIdByZoneId[zoneId][mediaStateId] = autorunMediaState;
    });
    var eventsById = {};
    var zoneMediaStatesIds = bsdatamodel_1.dmGetAllTargetableMediaStateIdsForContainer(bsdm, { id: zoneId });
    zoneMediaStatesIds.forEach(function (mediaStateId) {
        var eventIdsForMediaState = bsdatamodel_1.dmGetEventIdsForMediaState(bsdm, { id: mediaStateId });
        if (eventIdsForMediaState.length > 0) {
            eventIdsForMediaState.forEach(function (eventId) {
                var event = bsdatamodel_1.dmGetEventById(bsdm, { id: eventId });
                event = convertBsdmEventToArEvent(event);
                eventsById[eventId] = event;
            });
        }
    });
    var initialMediaStateName = '';
    if (zone.nonInteractive) {
        if (autorunMediaStates.length > 0) {
            initialMediaStateName = autorunMediaStates[0].name;
        }
    }
    else {
        var initialMediaState = bsdatamodel_1.dmGetMediaStateStateById(bsdm, { id: zone.initialMediaStateId });
        if (!lodash_1.isNil(initialMediaState)) {
            initialMediaStateName = initialMediaState.name;
        }
    }
    return getArPlaylist(bsdm, zoneId, autorunMediaStates, eventsById)
        .then(function (arPlaylist) {
        arPlaylist.initialMediaStateName = initialMediaStateName;
        return Promise.resolve(arPlaylist);
    });
}
function getArPlaylist(bsdm, zoneId, autorunMediaStates, eventsById) {
    var playlistPromises = getArPlaylistStates(bsdm, zoneId, autorunMediaStates, eventsById);
    return Promise.all(playlistPromises).then(function (states) {
        var transitions = getArPlaylistTransitions(bsdm, zoneId, states, _zoneAutorunMediaStatesByMediaStateIdByZoneId[zoneId], eventsById);
        var arPlaylist = {
            states: states,
            transitions: transitions,
        };
        return Promise.resolve(arPlaylist);
    });
}
function getArPlaylistStates(bsdm, zoneId, autorunMediaStates, eventsById) {
    var promises = [];
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    if (zone.type === bscore_1.ZoneType.EnhancedAudio) {
        promises = getEnhancedAudioZoneStates(bsdm, zoneId, autorunMediaStates, eventsById);
    }
    else {
        promises = getZoneStates(bsdm, zoneId, autorunMediaStates, eventsById);
    }
    return promises;
}
function getArPlaylistTransitions(bsdm, zoneId, states, mediaStatesById, eventsById) {
    var autorunTransitions = [];
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    if (zone.type === bscore_1.ZoneType.EnhancedAudio) {
        autorunTransitions = getEnhancedAudioZoneTransitions(bsdm, zoneId, states);
    }
    else {
        autorunTransitions = getZoneTransitions(bsdm, mediaStatesById, eventsById);
    }
    return autorunTransitions;
}
function convertScrollSpeed(scrollSpeed) {
    return scrollSpeed * 100;
}
function convertTextRotation(bsdm, rotation) {
    switch (bsdatamodel_1.dmGetSignMonitorOrientation(bsdm)) {
        case bscore_1.MonitorOrientationType.PortraitBottomLeft:
            switch (rotation) {
                case bscore_1.RotationType.rot90:
                    return bscore_1.RotationType.rot0;
                case bscore_1.RotationType.rot180:
                    return bscore_1.RotationType.rot90;
                case bscore_1.RotationType.rot270:
                    return bscore_1.RotationType.rot180;
                case bscore_1.RotationType.rot0:
                default:
                    return bscore_1.RotationType.rot270;
            }
        case bscore_1.MonitorOrientationType.PortraitBottomRight:
            switch (rotation) {
                case bscore_1.RotationType.rot90:
                    return bscore_1.RotationType.rot180;
                case bscore_1.RotationType.rot180:
                    return bscore_1.RotationType.rot270;
                case bscore_1.RotationType.rot270:
                    return bscore_1.RotationType.rot0;
                case bscore_1.RotationType.rot0:
                default:
                    return bscore_1.RotationType.rot90;
            }
        case bscore_1.MonitorOrientationType.Landscape:
        default:
            return rotation;
    }
}
function roundoffColor(color) {
    color.r = Math.round(color.r);
    color.g = Math.round(color.g);
    color.b = Math.round(color.b);
    color.a = Math.round(color.a);
    return color;
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./bscore");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("./bsdatamodel");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArCommands = void 0;
var ArCommands = (function () {
    function ArCommands() {
    }
    ArCommands.arGpioOnCommand = 'gpioOnCommand';
    ArCommands.arGpioOffCommand = 'gpioOffCommand';
    ArCommands.arGpioSetStateCommand = 'gpioSetStateCommand';
    ArCommands.arSetConnectorVolume = 'setConnectorVolume';
    ArCommands.arIncrementConnectorVolume = 'incrementConnectorVolume';
    ArCommands.arDecrementConnectorVolume = 'decrementConnectorVolume';
    ArCommands.arSetZoneVolume = 'setZoneVolume';
    ArCommands.arIncrementZoneVolume = 'incrementZoneVolume';
    ArCommands.arDecrementZoneVolume = 'decrementZoneVolume';
    ArCommands.arSetZoneChannelVolume = 'setZoneChannelVolume';
    ArCommands.arIncrementZoneChannelVolume = 'incrementZoneChannelVolume';
    ArCommands.arDecrementZoneChannelVolume = 'decrementZoneChannelVolume';
    ArCommands.arSendSerialStringCommand = 'sendSerialStringCommand';
    ArCommands.arSendSerialBlockCommand = 'sendSerialBlockCommand';
    ArCommands.arSendSerialByteCommand = 'sendSerialByteCommand';
    ArCommands.arSendSerialBytesCommand = 'sendSerialBytesCommand';
    ArCommands.arSendUDPCommand = 'sendUDPCommand';
    ArCommands.arSendUDPBytesCommand = 'sendUDPBytesCommand';
    ArCommands.arSendIRRemote = 'sendIRRemote';
    ArCommands.arSendBLC400Output = 'sendBLC400Output';
    ArCommands.arSendBPOutput = 'sendBPOutput';
    ArCommands.arSynchronize = 'synchronize';
    ArCommands.arSendZoneMessage = 'sendZoneMessage';
    ArCommands.arSendPluginMessage = 'sendPluginMessage';
    ArCommands.arResizeZone = 'resizeZone';
    ArCommands.arHideZone = 'hideZone';
    ArCommands.arShowZone = 'showZone';
    ArCommands.arPauseZonePlayback = 'pauseZonePlayback';
    ArCommands.arResumeZonePlayback = 'resumeZonePlayback';
    ArCommands.arInternalSynchronize = 'internalSynchronize';
    ArCommands.arReboot = 'reboot';
    ArCommands.arCecDisplayOn = 'cecDisplayOn';
    ArCommands.arCecDisplayOff = 'cecDisplayOff';
    ArCommands.arCecSendString = 'cecSendString';
    ArCommands.arCecPhilipsSetVolume = 'cecPhilipsSetVolume';
    ArCommands.arCecSetSourceToBrightSign = 'cecSetSourceToBrightSign';
    ArCommands.arEnablePowerSaveMode = 'enablePowerSaveMode';
    ArCommands.arDisablePowerSaveMode = 'disablePowerSaveMode';
    ArCommands.arPause = 'pause';
    ArCommands.arSetVariable = 'setVariable';
    ArCommands.arIncrementVariable = 'incrementVariable';
    ArCommands.arDecrementVariable = 'decrementVariable';
    ArCommands.arResetVariable = 'resetVariable';
    ArCommands.arResetVariables = 'resetVariables';
    ArCommands.arConfigureAudioResources = 'configureAudioResources';
    ArCommands.arBeaconStart = 'beaconStart';
    ArCommands.arBeaconStop = 'beaconStop';
    ArCommands.arSetAllAudioOutputs = 'setAllAudioOutputs';
    ArCommands.arSetAudioMode = 'setAudioMode';
    ArCommands.arMuteAudioOutputs = 'muteAudioOutputs';
    ArCommands.arUnmuteAudioOutputs = 'unmuteAudioOutputs';
    ArCommands.arSendProntoIRRemote = 'sendProntoIRRemote';
    ArCommands.arPauseVideo = 'pauseVideo';
    ArCommands.arResumeVideo = 'resumeVideo';
    ArCommands.arResume = 'resume';
    ArCommands.arSwitchPresentation = 'switchPresentation';
    ArCommands.arUpdateDataFeed = 'updateDataFeed';
    ArCommands.arSendWss = 'sendWss';
    ArCommands.arSendBlc400Output = 'sendBLC400Output';
    return ArCommands;
}());
exports.ArCommands = ArCommands;
Object.freeze(ArCommands);


/***/ }),
/* 5 */
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
__exportStar(__webpack_require__(0), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getBsCommandParameterValueItems = exports.getBsCommands = exports.getArCommandTypeFromCommandType = void 0;
var lodash_1 = __webpack_require__(3);
var bscore_1 = __webpack_require__(1);
var bsdatamodel_1 = __webpack_require__(2);
var arConstants_1 = __webpack_require__(4);
var autoplayGenerator_1 = __webpack_require__(0);
function getArCommandTypeFromCommandType(commandType) {
    var arCommandType = commandType.toString();
    switch (commandType) {
        case bscore_1.CommandType.GpioOn:
        case bscore_1.CommandType.LightOn:
            arCommandType = arConstants_1.ArCommands.arGpioOnCommand;
            break;
        case bscore_1.CommandType.GpioOff:
        case bscore_1.CommandType.LightOff:
            arCommandType = arConstants_1.ArCommands.arGpioOffCommand;
            break;
        case bscore_1.CommandType.GpioSetState:
            arCommandType = arConstants_1.ArCommands.arGpioSetStateCommand;
            break;
        case bscore_1.CommandType.SerialSendString:
            arCommandType = arConstants_1.ArCommands.arSendSerialStringCommand;
            break;
        case bscore_1.CommandType.SendZoneMessage:
            arCommandType = arConstants_1.ArCommands.arSendZoneMessage;
            break;
        case bscore_1.CommandType.Synchronize:
            arCommandType = arConstants_1.ArCommands.arSynchronize;
            break;
        case bscore_1.CommandType.SendIRRemote:
            arCommandType = arConstants_1.ArCommands.arSendIRRemote;
            break;
        case bscore_1.CommandType.SendUdp:
            arCommandType = arConstants_1.ArCommands.arSendUDPCommand;
            break;
        case bscore_1.CommandType.SendUdpBytes:
            arCommandType = arConstants_1.ArCommands.arSendUDPBytesCommand;
            break;
        case bscore_1.CommandType.CecDisplayOff:
            arCommandType = arConstants_1.ArCommands.arCecDisplayOff;
            break;
        case bscore_1.CommandType.CecDisplayOn:
            arCommandType = arConstants_1.ArCommands.arCecDisplayOn;
            break;
        case bscore_1.CommandType.CecPhilipsSetVolume:
            arCommandType = arConstants_1.ArCommands.arCecPhilipsSetVolume;
            break;
        case bscore_1.CommandType.CecSendString:
            arCommandType = arConstants_1.ArCommands.arCecSendString;
            break;
        case bscore_1.CommandType.CecSetSourceToBrightSign:
            arCommandType = arConstants_1.ArCommands.arCecSetSourceToBrightSign;
            break;
        case bscore_1.CommandType.SerialSendByte:
            arCommandType = arConstants_1.ArCommands.arSendSerialByteCommand;
            break;
        case bscore_1.CommandType.SerialSendBytes:
            arCommandType = arConstants_1.ArCommands.arSendSerialBytesCommand;
            break;
        case bscore_1.CommandType.SetZoneVolume:
            arCommandType = arConstants_1.ArCommands.arSetZoneVolume;
            break;
        case bscore_1.CommandType.IncrementZoneVolume:
            arCommandType = arConstants_1.ArCommands.arIncrementZoneVolume;
            break;
        case bscore_1.CommandType.DecrementZoneVolume:
            arCommandType = arConstants_1.ArCommands.arDecrementZoneVolume;
            break;
        case bscore_1.CommandType.SendBpOutput:
            arCommandType = arConstants_1.ArCommands.arSendBPOutput;
            break;
        case bscore_1.CommandType.Pause:
            arCommandType = arConstants_1.ArCommands.arPause;
            break;
        case bscore_1.CommandType.ResetVariables:
            arCommandType = arConstants_1.ArCommands.arResetVariables;
            break;
        case bscore_1.CommandType.ResetVariable:
            arCommandType = arConstants_1.ArCommands.arResetVariable;
            break;
        case bscore_1.CommandType.SetVariable:
            arCommandType = arConstants_1.ArCommands.arSetVariable;
            break;
        case bscore_1.CommandType.SetConnectorVolume:
            arCommandType = arConstants_1.ArCommands.arSetConnectorVolume;
            break;
        case bscore_1.CommandType.SendPluginMessage:
            arCommandType = arConstants_1.ArCommands.arSendPluginMessage;
            break;
        case bscore_1.CommandType.ConfigureAudioResources:
            arCommandType = arConstants_1.ArCommands.arConfigureAudioResources;
            break;
        case bscore_1.CommandType.DecrementConnectorVolume:
            arCommandType = arConstants_1.ArCommands.arDecrementConnectorVolume;
            break;
        case bscore_1.CommandType.DecrementVariable:
            arCommandType = arConstants_1.ArCommands.arDecrementVariable;
            break;
        case bscore_1.CommandType.DisablePowerSaveMode:
            arCommandType = arConstants_1.ArCommands.arDisablePowerSaveMode;
            break;
        case bscore_1.CommandType.EnablePowerSaveMode:
            arCommandType = arConstants_1.ArCommands.arEnablePowerSaveMode;
            break;
        case bscore_1.CommandType.HideZone:
            arCommandType = arConstants_1.ArCommands.arHideZone;
            break;
        case bscore_1.CommandType.IncrementConnectorVolume:
            arCommandType = arConstants_1.ArCommands.arIncrementConnectorVolume;
            break;
        case bscore_1.CommandType.IncrementVariable:
            arCommandType = arConstants_1.ArCommands.arIncrementVariable;
            break;
        case bscore_1.CommandType.SetAllAudioOutputs:
            arCommandType = arConstants_1.ArCommands.arSetAllAudioOutputs;
            break;
        case bscore_1.CommandType.SetAudioMode:
            arCommandType = arConstants_1.ArCommands.arSetAudioMode;
            break;
        case bscore_1.CommandType.MuteAudioOutputs:
            arCommandType = arConstants_1.ArCommands.arMuteAudioOutputs;
            break;
        case bscore_1.CommandType.UnmuteAudioOutputs:
            arCommandType = arConstants_1.ArCommands.arUnmuteAudioOutputs;
            break;
        case bscore_1.CommandType.SetZoneChannelVolume:
            arCommandType = arConstants_1.ArCommands.arSetZoneChannelVolume;
            break;
        case bscore_1.CommandType.IncrementZoneChannelVolume:
            arCommandType = arConstants_1.ArCommands.arIncrementZoneChannelVolume;
            break;
        case bscore_1.CommandType.DecrementZoneChannelVolume:
            arCommandType = arConstants_1.ArCommands.arDecrementZoneChannelVolume;
            break;
        case bscore_1.CommandType.SendProntoIRRemote:
            arCommandType = arConstants_1.ArCommands.arSendProntoIRRemote;
            break;
        case bscore_1.CommandType.InternalSynchronize:
            arCommandType = arConstants_1.ArCommands.arInternalSynchronize;
            break;
        case bscore_1.CommandType.PauseVideo:
            arCommandType = arConstants_1.ArCommands.arPauseVideo;
            break;
        case bscore_1.CommandType.ResumeVideo:
            arCommandType = arConstants_1.ArCommands.arResumeVideo;
            break;
        case bscore_1.CommandType.BeaconStart:
            arCommandType = arConstants_1.ArCommands.arBeaconStart;
            break;
        case bscore_1.CommandType.BeaconStop:
            arCommandType = arConstants_1.ArCommands.arBeaconStop;
            break;
        case bscore_1.CommandType.Resume:
            arCommandType = arConstants_1.ArCommands.arResume;
            break;
        case bscore_1.CommandType.SwitchPresentation:
            arCommandType = arConstants_1.ArCommands.arSwitchPresentation;
            break;
        case bscore_1.CommandType.UpdateDataFeed:
            arCommandType = arConstants_1.ArCommands.arUpdateDataFeed;
            break;
        case bscore_1.CommandType.ShowZone:
            arCommandType = arConstants_1.ArCommands.arShowZone;
            break;
        case bscore_1.CommandType.ResizeZone:
            arCommandType = arConstants_1.ArCommands.arResizeZone;
            break;
        case bscore_1.CommandType.PauseZonePlayback:
            arCommandType = arConstants_1.ArCommands.arPauseZonePlayback;
            break;
        case bscore_1.CommandType.ResumeZonePlayback:
            arCommandType = arConstants_1.ArCommands.arResumeZonePlayback;
            break;
        case bscore_1.CommandType.Reboot:
            arCommandType = arConstants_1.ArCommands.arReboot;
            break;
        case bscore_1.CommandType.SendWss:
            arCommandType = arConstants_1.ArCommands.arSendWss;
            break;
        case bscore_1.CommandType.SendBLC400Output:
            arCommandType = arConstants_1.ArCommands.arSendBlc400Output;
            break;
        default:
            console.log('unknown command: ', commandType);
            break;
    }
    return arCommandType;
}
exports.getArCommandTypeFromCommandType = getArCommandTypeFromCommandType;
function getBsCommands(bsdm, dmCommands) {
    var arCommands = [];
    dmCommands.forEach(function (dmCommand) {
        var commandName = dmCommand.name;
        var bsCommandParameters;
        dmCommand.operations.forEach(function (dmCommandOperation) {
            var _a, _b;
            var commandType = dmCommandOperation.type;
            if (!lodash_1.isNil(dmCommandOperation.data)) {
                bsCommandParameters = getBsCommandParameterValueItems(bsdm, commandType, dmCommandOperation.data);
            }
            else {
                bsCommandParameters = null;
            }
            var arCommandType = getArCommandTypeFromCommandType(commandType);
            var arCommand;
            if (lodash_1.isNil(bsCommandParameters)) {
                arCommand = (_a = {},
                    _a[arCommandType] = null,
                    _a);
            }
            else {
                arCommand = (_b = {},
                    _b[arCommandType] = bsCommandParameters,
                    _b);
            }
            arCommands.push(arCommand);
        });
    });
    return arCommands;
}
exports.getBsCommands = getBsCommands;
function getBsCommandParameterValueItems(bsdm, commandType, dmCommandData) {
    var pvItems = [];
    switch (commandType) {
        case bscore_1.CommandType.ResetVariables:
        case bscore_1.CommandType.CecDisplayOn:
        case bscore_1.CommandType.CecDisplayOff:
        case bscore_1.CommandType.CecSetSourceToBrightSign:
        case bscore_1.CommandType.ConfigureAudioResources:
        case bscore_1.CommandType.EnablePowerSaveMode:
        case bscore_1.CommandType.DisablePowerSaveMode:
        case bscore_1.CommandType.PauseVideo:
        case bscore_1.CommandType.ResumeVideo:
        case bscore_1.CommandType.Resume:
        case bscore_1.CommandType.Reboot:
            pvItems = null;
            break;
        case bscore_1.CommandType.SerialSendString:
        case bscore_1.CommandType.SerialSendByte:
        case bscore_1.CommandType.SerialSendBytes:
            pvItems = getSerialMessageCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.SendUdp:
        case bscore_1.CommandType.SendUdpBytes:
        case bscore_1.CommandType.SendIRRemote:
        case bscore_1.CommandType.SendProntoIRRemote:
        case bscore_1.CommandType.Synchronize:
        case bscore_1.CommandType.InternalSynchronize:
        case bscore_1.CommandType.SendZoneMessage:
            pvItems = getMessageCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.CecSendString:
            pvItems = getCecSendStringCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.LightOff:
        case bscore_1.CommandType.LightOn:
            pvItems = getLightCommandData(dmCommandData);
            break;
        case bscore_1.CommandType.GpioOn:
        case bscore_1.CommandType.GpioOff:
            pvItems = getGpioCommandData(dmCommandData);
            break;
        case bscore_1.CommandType.GpioSetState:
            pvItems = getGpioStateCommandData(dmCommandData);
            break;
        case bscore_1.CommandType.SendPluginMessage:
            pvItems = getPluginCommandMessageData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.IncrementVariable:
        case bscore_1.CommandType.DecrementVariable:
        case bscore_1.CommandType.SetVariable:
        case bscore_1.CommandType.ResetVariable:
            pvItems = getUserVariableCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.ResizeZone:
            pvItems = getResizeZoneCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.SendBpOutput:
            pvItems = getSendBpOutputCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.SetAllAudioOutputs:
            pvItems = getSetAllAudioOutputsCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.SetAudioMode:
            pvItems = getSetAudioModeCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.SetConnectorVolume:
        case bscore_1.CommandType.IncrementConnectorVolume:
        case bscore_1.CommandType.DecrementConnectorVolume:
            pvItems = getConnectorVolumeData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.MuteAudioOutputs:
        case bscore_1.CommandType.UnmuteAudioOutputs:
            pvItems = getConnectorListData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.SetZoneVolume:
        case bscore_1.CommandType.IncrementZoneVolume:
        case bscore_1.CommandType.DecrementZoneVolume:
            pvItems = getZoneVolumeData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.SetZoneChannelVolume:
        case bscore_1.CommandType.IncrementZoneChannelVolume:
        case bscore_1.CommandType.DecrementZoneChannelVolume:
            pvItems = getZoneChannelVolumeData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.CecPhilipsSetVolume:
            pvItems = getCecSetVolumeCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.BeaconStart:
            debugger;
            break;
        case bscore_1.CommandType.BeaconStop:
            debugger;
            break;
        case bscore_1.CommandType.Pause:
            pvItems = getPauseCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.SwitchPresentation:
            pvItems = getSwitchPresentationCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.UpdateDataFeed:
            pvItems = getUpdateDataFeedCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.HideZone:
        case bscore_1.CommandType.ShowZone:
        case bscore_1.CommandType.PauseZonePlayback:
        case bscore_1.CommandType.ResumeZonePlayback:
            pvItems = getZoneCommandData(bsdm, dmCommandData);
            break;
        case bscore_1.CommandType.SendBLC400Output:
            pvItems = getBlc400CommandData(bsdm, dmCommandData);
            break;
        default:
            debugger;
            break;
    }
    return pvItems;
}
exports.getBsCommandParameterValueItems = getBsCommandParameterValueItems;
function getMessageCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var messageCommandData = dmCommandData;
    var messageCommandParameterValueItems = autoplayGenerator_1.convertParameterizedString(bsdm, messageCommandData.messageData);
    pvItems.push({
        message: messageCommandParameterValueItems,
    });
    return pvItems;
}
function getSerialMessageCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var serialMessageCommandData = dmCommandData;
    pvItems.push({
        port: [
            {
                type: 'text',
                value: serialMessageCommandData.port.toString(),
            },
        ],
    });
    var serialParameterValueItems = autoplayGenerator_1.convertParameterizedString(bsdm, serialMessageCommandData.messageData);
    pvItems.push({
        message: serialParameterValueItems,
    });
    return pvItems;
}
function getLightCommandData(dmCommandData) {
    var pvItems = [];
    var lightCommandData = dmCommandData;
    pvItems.push({
        gpioNumber: [
            {
                type: 'text',
                value: ((lightCommandData.lightNumber * 2) + 1).toString(),
            },
        ],
    });
    return pvItems;
}
function getGpioCommandData(dmCommandData) {
    var pvItems = [];
    var gpioCommandData = dmCommandData;
    pvItems.push({
        gpioNumber: [
            {
                type: 'text',
                value: gpioCommandData.gpioNumber.toString(),
            },
        ],
    });
    return pvItems;
}
function getGpioStateCommandData(dmCommandData) {
    var pvItems = [];
    var gpioSetStateCommandData = dmCommandData;
    pvItems.push({
        gpioState: [
            {
                type: 'text',
                value: gpioSetStateCommandData.gpioState.toString(),
            },
        ],
    });
    return pvItems;
}
function getPluginCommandMessageData(bsdm, dmCommandData) {
    var pvItems = [];
    var pluginMessageCommandData = dmCommandData;
    var pluginId = pluginMessageCommandData.pluginId, messageData = pluginMessageCommandData.messageData;
    var plugin = bsdatamodel_1.dmGetScriptPluginById(bsdm, { id: pluginId });
    var parameterValueItems = autoplayGenerator_1.convertParameterizedString(bsdm, messageData);
    pvItems.push({
        pluginName: [
            {
                type: 'text',
                value: plugin.name,
            },
        ],
    });
    pvItems.push({
        message: parameterValueItems,
    });
    return pvItems;
}
function getUserVariableCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var dmUserVariableCommandData = dmCommandData;
    var userVariableId = dmUserVariableCommandData.userVariableId, userVariableValue = dmUserVariableCommandData.userVariableValue;
    var userVariable = bsdatamodel_1.dmGetUserVariableById(bsdm, { id: userVariableId });
    pvItems.push({
        variableName: [
            {
                type: 'userVariable',
                value: userVariable.name,
            },
        ],
    });
    if (!lodash_1.isNil(userVariableValue)) {
        var pvVariableValueItems = autoplayGenerator_1.convertParameterizedString(bsdm, userVariableValue);
        pvItems.push({
            variableValue: pvVariableValueItems,
        });
    }
    return pvItems;
}
function getResizeZoneCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var resizeCommandData = dmCommandData;
    var zoneId = resizeCommandData.zoneId;
    var position = resizeCommandData.position;
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    var zoneTag = zone.tag;
    pvItems.push({
        zoneId: [{
                type: 'text',
                value: zoneTag,
            }],
    });
    pvItems.push({
        x: [{
                type: 'text',
                value: position.x.toString(),
            }],
    });
    pvItems.push({
        y: [{
                type: 'text',
                value: position.y.toString(),
            }],
    });
    pvItems.push({
        width: [{
                type: 'text',
                value: position.width.toString(),
            }],
    });
    pvItems.push({
        height: [{
                type: 'text',
                value: position.height.toString(),
            }],
    });
    return pvItems;
}
function bpTypeToArButtonPanelType(bpType) {
    switch (bpType) {
        case bscore_1.BpType.Bp200:
            return 'BP200';
        case bscore_1.BpType.Bp900:
            return 'BP900';
        default:
            debugger;
    }
}
function bpActionToArAction(bpAction) {
    switch (bpAction) {
        case bscore_1.BpAction.Off:
            return 'off';
        case bscore_1.BpAction.On:
            return 'on';
        case bscore_1.BpAction.FastBlink:
            return 'fastBlink';
        case bscore_1.BpAction.MediumBlink:
            return 'mediumBlink';
        case bscore_1.BpAction.SlowBlink:
            return 'slowBlink';
        default:
            debugger;
    }
}
function bpIndexToArButtonPanelIndex(bpIndex) {
    switch (bpIndex) {
        case bscore_1.BpIndex.A:
            return '0';
        case bscore_1.BpIndex.B:
            return '1';
        case bscore_1.BpIndex.C:
            return '2';
        case bscore_1.BpIndex.D:
            return '3';
        default:
            debugger;
    }
}
function getSendBpOutputCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var bpOutputCommandData = dmCommandData;
    var bpType = bpOutputCommandData.bpType, bpIndex = bpOutputCommandData.bpIndex, buttonNumber = bpOutputCommandData.buttonNumber, bpAction = bpOutputCommandData.bpAction;
    pvItems.push({
        buttonNumber: [{
                type: 'text',
                value: buttonNumber.toString(),
            }],
    });
    pvItems.push({
        action: [{
                type: 'text',
                value: bpActionToArAction(bpAction),
            }],
    });
    pvItems.push({
        buttonPanelIndex: [{
                type: 'text',
                value: bpIndexToArButtonPanelIndex(bpIndex),
            }],
    });
    pvItems.push({
        buttonPanelType: [{
                type: 'text',
                value: bpTypeToArButtonPanelType(bpType),
            }],
    });
    return pvItems;
}
function audioOutputTypeToArAudioOutputType(audioOutputType) {
    switch (audioOutputType) {
        case bscore_1.AudioOutputType.Pcm:
            return 'pcm';
        case bscore_1.AudioOutputType.Passthrough:
            return 'passthrough';
        case bscore_1.AudioOutputType.Multichannel:
            return 'multichannel';
        case bscore_1.AudioOutputType.None:
            return 'none';
        default:
            debugger;
    }
}
function setAudioOutput(pvItems, audioOutputAssignments, audioOutputName) {
    var _a;
    var audioOutputType = audioOutputAssignments[audioOutputName.toString()];
    pvItems.push((_a = {},
        _a[audioOutputName.toString()] = [
            {
                type: 'text',
                value: audioOutputTypeToArAudioOutputType(audioOutputType),
            },
        ],
        _a));
}
function getSetAllAudioOutputsCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var audioOutputCommandData = dmCommandData;
    var zoneId = audioOutputCommandData.zoneId, audioOutputAssignments = audioOutputCommandData.audioOutputAssignments;
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    var zoneTag = zone.tag;
    pvItems.push({
        zoneId: [
            {
                type: 'text',
                value: zoneTag,
            },
        ],
    });
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Analog1);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.UsbTypeA);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.UsbTypeC);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb700_1);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb700_2);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb700_3);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb700_4);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb700_5);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb700_6);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb700_7);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb_1);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb_2);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb_3);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb_4);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb_5);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Usb_6);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Hdmi);
    setAudioOutput(pvItems, audioOutputAssignments, bscore_1.AudioOutputName.Spdif);
    return pvItems;
}
function getSetAudioModeCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var audioModeCommandData = dmCommandData;
    var zoneId = audioModeCommandData.zoneId, mode = audioModeCommandData.mode;
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    var zoneTag = zone.tag;
    pvItems.push({
        zoneId: [
            {
                type: 'text',
                value: zoneTag,
            },
        ],
    });
    pvItems.push({
        mode: [
            {
                type: 'text',
                value: mode.toString(),
            },
        ],
    });
    return pvItems;
}
function getConnectorVolumeData(bsdm, dmCommandData) {
    var pvItems = [];
    var connectorVolumeData = dmCommandData;
    var connector = connectorVolumeData.connector, volume = connectorVolumeData.volume;
    pvItems.push({
        connector: [{
                type: 'text',
                value: connector.toString(),
            }],
    });
    var volumeParameterValueItems = autoplayGenerator_1.convertParameterizedNumber(bsdm, volume);
    pvItems.push({
        volume: volumeParameterValueItems,
    });
    return pvItems;
}
function setConnectorListItem(pvItems, connectorList, connector) {
    var _a;
    var value = (connectorList.indexOf(connector) >= 0) ? 'true' : 'false';
    pvItems.push((_a = {},
        _a[connector] = [
            {
                type: 'text',
                value: value,
            },
        ],
        _a));
}
function getConnectorListData(bsdm, dmCommandData) {
    var pvItems = [];
    var connectorListData = dmCommandData;
    var connectorList = connectorListData.connectorList;
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Analog1);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Hdmi);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Spdif);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.UsbTypeA);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.UsbTypeC);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb700_1);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb700_2);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb700_3);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb700_4);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb700_5);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb700_6);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb700_7);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb_1);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb_2);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb_3);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb_4);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb_5);
    setConnectorListItem(pvItems, connectorList, bscore_1.AudioOutputName.Usb_6);
    return pvItems;
}
function getZoneVolumeData(bsdm, dmCommandData) {
    var pvItems = [];
    var zoneVolumeData = dmCommandData;
    var zoneId = zoneVolumeData.zoneId, volume = zoneVolumeData.volume;
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    var zoneTag = zone.tag;
    pvItems.push({
        zoneId: [
            {
                type: 'text',
                value: zoneTag,
            },
        ],
    });
    var volumeParameterValueItems = autoplayGenerator_1.convertParameterizedNumber(bsdm, volume);
    pvItems.push({
        volume: volumeParameterValueItems,
    });
    return pvItems;
}
function getZoneChannelVolumeData(bsdm, dmCommandData) {
    var pvItems = [];
    var zoneVolumeData = dmCommandData;
    var zoneId = zoneVolumeData.zoneId, channel = zoneVolumeData.channel, volume = zoneVolumeData.volume;
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    var zoneTag = zone.tag;
    pvItems.push({
        zoneId: [
            {
                type: 'text',
                value: zoneTag,
            },
        ],
    });
    pvItems.push({
        channel: [
            {
                type: 'text',
                value: channel.toString(),
            },
        ],
    });
    var volumeParameterValueItems = autoplayGenerator_1.convertParameterizedNumber(bsdm, volume);
    pvItems.push({
        volume: volumeParameterValueItems,
    });
    return pvItems;
}
function getCecSetVolumeCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var volumeData = dmCommandData;
    var volume = volumeData.volume;
    var volumeParameterValueItems = autoplayGenerator_1.convertParameterizedNumber(bsdm, volume);
    pvItems.push({
        volume: volumeParameterValueItems,
    });
    return pvItems;
}
function getCecSendStringCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var sendStringData = dmCommandData;
    var hexString = sendStringData.hexString, substituteSourceAddress = sendStringData.substituteSourceAddress;
    var cecSendStringCommandParameterValueItems = autoplayGenerator_1.convertParameterizedString(bsdm, hexString);
    pvItems.push({
        cecString: cecSendStringCommandParameterValueItems,
    });
    var substituteSourceAddressStr = (substituteSourceAddress) ? 'true' : 'false';
    pvItems.push({
        cecSubstituteSourceAddress: [
            {
                type: 'text',
                value: substituteSourceAddressStr,
            },
        ],
    });
    return pvItems;
}
function getPauseCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var pauseData = dmCommandData;
    var pauseTime = pauseData.pauseTime;
    var pauseParameterValueItems = autoplayGenerator_1.convertParameterizedNumber(bsdm, pauseTime);
    pvItems.push({
        pauseTime: pauseParameterValueItems,
    });
    return pvItems;
}
function getSwitchPresentationCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var switchPresentationData = dmCommandData;
    var presentationId = switchPresentationData.presentationId, userVariableId = switchPresentationData.userVariableId;
    var useUserVariable = (userVariableId !== null && userVariableId !== bsdatamodel_1.BsDmIdNone) ? 'true' : 'false';
    pvItems.push({
        useUserVariable: [
            {
                type: 'text',
                value: useUserVariable,
            },
        ],
    });
    var linkedPresentationName = bsdatamodel_1.dmGetLinkedPresentationNameForId(bsdm, { id: presentationId });
    if (!lodash_1.isString(linkedPresentationName)) {
        linkedPresentationName = '';
    }
    var ps = bsdatamodel_1.dmGetParameterizedStringFromString(linkedPresentationName);
    var presentationNameParameterValueItems = autoplayGenerator_1.convertParameterizedString(bsdm, ps);
    pvItems.push({
        presentationName: presentationNameParameterValueItems,
    });
    return pvItems;
}
function getUpdateDataFeedCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var updateDataFeedData = dmCommandData;
    var dataFeedSourceId = updateDataFeedData.dataFeedSourceId;
    var dataFeed = null;
    var dataFeedIds = bsdatamodel_1.dmGetDataFeedIdsForSign(bsdm);
    for (var _i = 0, dataFeedIds_1 = dataFeedIds; _i < dataFeedIds_1.length; _i++) {
        var dataFeedId = dataFeedIds_1[_i];
        dataFeed = bsdatamodel_1.dmGetDataFeedById(bsdm, { id: dataFeedId });
        if (!lodash_1.isNil(dataFeed) && (dataFeed.feedSourceId === dataFeedSourceId)) {
            pvItems.push({
                dataFeed: [
                    {
                        type: 'text',
                        value: dataFeed.id,
                    },
                ],
            });
            break;
        }
    }
    return pvItems;
}
function getZoneCommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var zoneCommandData = dmCommandData;
    var zoneId = zoneCommandData.zoneId;
    var zone = bsdatamodel_1.dmGetZoneById(bsdm, { id: zoneId });
    var zoneTag = zone.tag;
    pvItems.push({
        zoneId: [
            {
                type: 'text',
                value: zoneTag,
            },
        ],
    });
    return pvItems;
}
function getBlc400CommandData(bsdm, dmCommandData) {
    var pvItems = [];
    var blcCommandData = dmCommandData;
    var controllerIndex = '0';
    switch (blcCommandData.blcIndex) {
        case bscore_1.BlcIndex.B:
            controllerIndex = '1';
            break;
        case bscore_1.BlcIndex.C:
            controllerIndex = '2';
            break;
    }
    pvItems.push({
        controllerIndex: [
            {
                type: 'text',
                value: controllerIndex,
            },
        ],
    });
    pvItems.push({
        effect: [
            {
                type: 'text',
                value: blcCommandData.blcEffect.toString().toLowerCase(),
            },
        ],
    });
    pvItems.push({
        channels: [
            {
                type: 'text',
                value: blcCommandData.blcChannels.toString(),
            },
        ],
    });
    if (!lodash_1.isNil(blcCommandData.blcEffectTime)) {
        pvItems.push({
            time: [
                {
                    type: 'text',
                    value: blcCommandData.blcEffectTime.toString().toLowerCase(),
                },
            ],
        });
    }
    if (!lodash_1.isNil(blcCommandData.blcIntensity)) {
        pvItems.push({
            intensity: [
                {
                    type: 'text',
                    value: blcCommandData.blcIntensity.toString().toLowerCase(),
                },
            ],
        });
    }
    if (!lodash_1.isNil(blcCommandData.blcBlink)) {
        pvItems.push({
            blinkRate: [
                {
                    type: 'text',
                    value: blcCommandData.blcBlink.toString().toLowerCase(),
                },
            ],
        });
    }
    if (!lodash_1.isNil(blcCommandData.blcStrobeTime)) {
        pvItems.push({
            time: [
                {
                    type: 'text',
                    value: blcCommandData.blcStrobeTime.toString().toLowerCase(),
                },
            ],
        });
    }
    if (!lodash_1.isNil(blcCommandData.blcBreatheMin)) {
        pvItems.push({
            minimumIntensity: [
                {
                    type: 'text',
                    value: blcCommandData.blcBreatheMin.toString().toLowerCase(),
                },
            ],
        });
    }
    if (!lodash_1.isNil(blcCommandData.blcBreatheMax)) {
        pvItems.push({
            maximumIntensity: [
                {
                    type: 'text',
                    value: blcCommandData.blcBreatheMax.toString().toLowerCase(),
                },
            ],
        });
    }
    if (!lodash_1.isNil(blcCommandData.blcMarqueeTimeOn)) {
        pvItems.push({
            lightOnTime: [
                {
                    type: 'text',
                    value: blcCommandData.blcMarqueeTimeOn.toString().toLowerCase(),
                },
            ],
        });
    }
    if (!lodash_1.isNil(blcCommandData.blcMarqueeTimeOff)) {
        pvItems.push({
            lightOffTime: [
                {
                    type: 'text',
                    value: blcCommandData.blcMarqueeTimeOff.toString().toLowerCase(),
                },
            ],
        });
    }
    if (!lodash_1.isNil(blcCommandData.blcTransitionMode)) {
        pvItems.push({
            transitionMode: [
                {
                    type: 'text',
                    value: blcCommandData.blcTransitionMode.toString().toLowerCase(),
                },
            ],
        });
    }
    if (!lodash_1.isNil(blcCommandData.blcPlaybackMode)) {
        pvItems.push({
            playbackMode: [
                {
                    type: 'text',
                    value: blcCommandData.blcPlaybackMode.toString().toLowerCase(),
                },
            ],
        });
    }
    return pvItems;
}


/***/ }),
/* 7 */
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
exports.BsAutoplayGeneratorError = exports.BsAutoplayGeneratorErrorType = void 0;
var BsAutoplayGeneratorErrorType;
(function (BsAutoplayGeneratorErrorType) {
    BsAutoplayGeneratorErrorType[BsAutoplayGeneratorErrorType["unexpectedError"] = 0] = "unexpectedError";
    BsAutoplayGeneratorErrorType[BsAutoplayGeneratorErrorType["unsupportedError"] = 1] = "unsupportedError";
})(BsAutoplayGeneratorErrorType = exports.BsAutoplayGeneratorErrorType || (exports.BsAutoplayGeneratorErrorType = {}));
var bsAutoplayGeneratorErrorMessage = (_a = {},
    _a[BsAutoplayGeneratorErrorType.unexpectedError] = 'Unexpected error',
    _a[BsAutoplayGeneratorErrorType.unsupportedError] = 'unsupported',
    _a);
var BsAutoplayGeneratorError = (function (_super) {
    __extends(BsAutoplayGeneratorError, _super);
    function BsAutoplayGeneratorError(type, reason) {
        var _this = _super.call(this) || this;
        _this.name = 'BsAutoplayGeneratorError';
        _this.type = type;
        if (reason) {
            _this.message = bsAutoplayGeneratorErrorMessage[type] + ': ' + reason;
        }
        else {
            _this.message = bsAutoplayGeneratorErrorMessage[type];
        }
        Object.setPrototypeOf(_this, BsAutoplayGeneratorError.prototype);
        return _this;
    }
    return BsAutoplayGeneratorError;
}(Error));
exports.BsAutoplayGeneratorError = BsAutoplayGeneratorError;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("./bsnconnector");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("./fsconnector");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-path");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ })
/******/ ]);
});