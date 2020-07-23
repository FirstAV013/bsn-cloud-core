(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("isomorphic-path"));
	else if(typeof define === 'function' && define.amd)
		define(["isomorphic-path"], factory);
	else if(typeof exports === 'object')
		exports["bsCore"] = factory(require("isomorphic-path"));
	else
		root["bsCore"] = factory(root["isomorphic-path"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_25__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInstanceOfEnum = exports.getEnumKeyOfValue = exports.bscIsBsSize = exports.bscIsBsColor = exports.BsBlack = exports.TwitterFeedRestrictionType = exports.PlayerTagMatchingType = exports.DataFeedUsageType = exports.DataFeedType = exports.HtmlSiteType = exports.PlayFileTriggerType = exports.MediaListPlaybackType = exports.SystemVariableType = exports.NumberParameterType = exports.StringParameterType = exports.AccessType = exports.BlcChannels = exports.BlcTransitionMode = exports.BlcPlaybackMode = exports.BlcBlink = exports.BlcEffect = exports.BlcIndex = exports.BpAction = exports.CommandSequenceType = exports.CommandType = exports.CompareOperator = exports.TransitionType = exports.DistanceUnits = exports.RegionDirection = exports.IrTransmitterDestination = exports.IrReceiverEncodings = exports.IrReceiverSource = exports.ButtonDirection = exports.ButtonPanelNameArray = exports.ButtonPanelName = exports.BpIndex = exports.GpioType = exports.BpType = exports.EventIntrinsicAction = exports.EventType = exports.TextScrollingMethodType = exports.TextHAlignmentType = exports.RotationType = exports.VideoDisplayModeType = exports.MosaicMaxContentResolutionType = exports.AudioMixModeType = exports.AudioOutputType = exports.AudioConfiguration = exports.AudioOutputNameArray = exports.UsbConnectorNameArray = exports.AudioOutputName = exports.UsbConnectorName = exports.AudioMappingType = exports.AudioModeType = exports.AudioOutputSelectionType = exports.ImageOrientationType = exports.ColorSpaceType = exports.ImageModeType = exports.ViewModeType = exports.LanguageKeyType = exports.LanguageType = exports.UdpAddressType = exports.GraphicsZOrderType = exports.TouchCursorDisplayModeType = exports.DeviceWebPageDisplay = exports.MonitorOverscanType = exports.MonitorOrientationType = exports.VideoConnectorType = exports.VideoDecoderSize = exports.VideoDecoderName = exports.VideoDecoderMode = exports.VideoZoneLayerType = exports.ZoneLayerType = exports.ZoneType = exports.bscGetContentItemTypeForMediaType = exports.ContentItemType = exports.PlayableMediaTypes = exports.MediaType = void 0;
var assets_1 = __webpack_require__(4);
var isNil = __webpack_require__(0);
var MediaType = (function () {
    function MediaType() {
    }
    MediaType.Video = 'Video';
    MediaType.Audio = 'Audio';
    MediaType.Image = 'Image';
    MediaType.Text = 'Text';
    MediaType.Font = 'Font';
    MediaType.Css = 'Css';
    MediaType.Auxiliary = 'Auxiliary';
    MediaType.Other = 'Other';
    return MediaType;
}());
exports.MediaType = MediaType;
Object.freeze(MediaType);
var PlayableMediaTypeArray = [
    MediaType.Image, MediaType.Video, MediaType.Audio, MediaType.Text
];
exports.PlayableMediaTypes = new Set(PlayableMediaTypeArray);
var ContentItemType = (function () {
    function ContentItemType() {
    }
    ContentItemType.Video = 'Video';
    ContentItemType.Image = 'Image';
    ContentItemType.Audio = 'Audio';
    ContentItemType.Html = 'Html';
    ContentItemType.LiveVideo = 'LiveVideo';
    ContentItemType.DataFeed = 'DataFeed';
    ContentItemType.MrssFeed = 'MrssFeed';
    ContentItemType.TwitterFeed = 'TwitterFeed';
    ContentItemType.Text = 'Text';
    ContentItemType.UserVariable = 'UserVariable';
    ContentItemType.VideoStream = 'VideoStream';
    ContentItemType.AudioStream = 'AudioStream';
    ContentItemType.MjpegStream = 'MjpegStream';
    ContentItemType.Time = 'Time';
    ContentItemType.Date = 'Date';
    ContentItemType.EventHandler = 'EventHandler';
    ContentItemType.PlayFile = 'PlayFile';
    ContentItemType.MediaList = 'MediaList';
    ContentItemType.LiveText = 'LiveText';
    ContentItemType.SuperState = 'SuperState';
    ContentItemType.Invalid = 'Invalid';
    return ContentItemType;
}());
exports.ContentItemType = ContentItemType;
Object.freeze(ContentItemType);
function bscGetContentItemTypeForMediaType(type) {
    if (assets_1.bscIsMediaTypePlayable(type)) {
        return type;
    }
    return ContentItemType.Invalid;
}
exports.bscGetContentItemTypeForMediaType = bscGetContentItemTypeForMediaType;
var ZoneType = (function () {
    function ZoneType() {
    }
    ZoneType.VideoOrImages = 'VideoOrImages';
    ZoneType.VideoOnly = 'VideoOnly';
    ZoneType.Images = 'Images';
    ZoneType.AudioOnly = 'AudioOnly';
    ZoneType.EnhancedAudio = 'EnhancedAudio';
    ZoneType.Ticker = 'Ticker';
    ZoneType.Clock = 'Clock';
    ZoneType.BackgroundImage = 'BackgroundImage';
    ZoneType.Control = 'Control';
    return ZoneType;
}());
exports.ZoneType = ZoneType;
Object.freeze(ZoneType);
var ZoneLayerType = (function () {
    function ZoneLayerType() {
    }
    ZoneLayerType.Video = 'Video';
    ZoneLayerType.Audio = 'Audio';
    ZoneLayerType.Graphics = 'Graphics';
    ZoneLayerType.Invisible = 'Invisible';
    return ZoneLayerType;
}());
exports.ZoneLayerType = ZoneLayerType;
Object.freeze(ZoneLayerType);
var VideoZoneLayerType = (function () {
    function VideoZoneLayerType() {
    }
    VideoZoneLayerType.FourK = 'FourK';
    VideoZoneLayerType.HD = 'HD';
    return VideoZoneLayerType;
}());
exports.VideoZoneLayerType = VideoZoneLayerType;
Object.freeze(VideoZoneLayerType);
var VideoDecoderMode = (function () {
    function VideoDecoderMode() {
    }
    VideoDecoderMode.Regular = 'Regular';
    VideoDecoderMode.Mosaic = 'Mosaic';
    return VideoDecoderMode;
}());
exports.VideoDecoderMode = VideoDecoderMode;
Object.freeze(VideoDecoderMode);
var VideoDecoderName = (function () {
    function VideoDecoderName() {
    }
    VideoDecoderName.FourKFirstDecoder = '4K';
    VideoDecoderName.FourKSecondDecoder = '4K2';
    VideoDecoderName.HDDecoder = 'Hd';
    return VideoDecoderName;
}());
exports.VideoDecoderName = VideoDecoderName;
Object.freeze(VideoDecoderName);
var VideoDecoderSize = (function () {
    function VideoDecoderSize() {
    }
    VideoDecoderSize.FourK = 'FourK';
    VideoDecoderSize.HD = 'HD';
    return VideoDecoderSize;
}());
exports.VideoDecoderSize = VideoDecoderSize;
Object.freeze(VideoDecoderSize);
var VideoConnectorType = (function () {
    function VideoConnectorType() {
    }
    VideoConnectorType.Hdmi = 'HDMI';
    VideoConnectorType.Vga = 'VGA';
    VideoConnectorType.Component = 'Component';
    VideoConnectorType.None = 'None';
    return VideoConnectorType;
}());
exports.VideoConnectorType = VideoConnectorType;
Object.freeze(VideoConnectorType);
var MonitorOrientationType = (function () {
    function MonitorOrientationType() {
    }
    MonitorOrientationType.Landscape = 'Landscape';
    MonitorOrientationType.PortraitBottomLeft = 'PortraitBottomLeft';
    MonitorOrientationType.PortraitBottomRight = 'PortraitBottomRight';
    MonitorOrientationType.None = 'None';
    return MonitorOrientationType;
}());
exports.MonitorOrientationType = MonitorOrientationType;
Object.freeze(MonitorOrientationType);
var MonitorOverscanType = (function () {
    function MonitorOverscanType() {
    }
    MonitorOverscanType.NoOverscan = 'NoOverscan';
    MonitorOverscanType.OverscanActionSafeArea = 'OverscanActionSafeArea';
    MonitorOverscanType.OverscanTitleSafeArea = 'OverscanTitleSafeArea';
    return MonitorOverscanType;
}());
exports.MonitorOverscanType = MonitorOverscanType;
Object.freeze(MonitorOverscanType);
var DeviceWebPageDisplay = (function () {
    function DeviceWebPageDisplay() {
    }
    DeviceWebPageDisplay.None = 'None';
    DeviceWebPageDisplay.Standard = 'Standard';
    DeviceWebPageDisplay.Custom = 'Custom';
    return DeviceWebPageDisplay;
}());
exports.DeviceWebPageDisplay = DeviceWebPageDisplay;
Object.freeze(DeviceWebPageDisplay);
var TouchCursorDisplayModeType = (function () {
    function TouchCursorDisplayModeType() {
    }
    TouchCursorDisplayModeType.Disabled = 'Disabled';
    TouchCursorDisplayModeType.Auto = 'Auto';
    TouchCursorDisplayModeType.Display = 'Display';
    return TouchCursorDisplayModeType;
}());
exports.TouchCursorDisplayModeType = TouchCursorDisplayModeType;
Object.freeze(TouchCursorDisplayModeType);
var GraphicsZOrderType = (function () {
    function GraphicsZOrderType() {
    }
    GraphicsZOrderType.Back = 'Back';
    GraphicsZOrderType.Middle = 'Middle';
    GraphicsZOrderType.Front = 'Front';
    return GraphicsZOrderType;
}());
exports.GraphicsZOrderType = GraphicsZOrderType;
Object.freeze(GraphicsZOrderType);
var UdpAddressType = (function () {
    function UdpAddressType() {
    }
    UdpAddressType.IPAddress = 'IPAddress';
    UdpAddressType.LocalSubnet = 'LocalSubnet';
    UdpAddressType.Ethernet = 'Ethernet';
    UdpAddressType.Wireless = 'Wireless';
    return UdpAddressType;
}());
exports.UdpAddressType = UdpAddressType;
Object.freeze(UdpAddressType);
var LanguageType = (function () {
    function LanguageType() {
    }
    LanguageType.English = 'English';
    LanguageType.French = 'French';
    LanguageType.German = 'German';
    LanguageType.Spanish = 'Spanish';
    LanguageType.Italian = 'Italian';
    LanguageType.Dutch = 'Dutch';
    LanguageType.Swedish = 'Swedish';
    return LanguageType;
}());
exports.LanguageType = LanguageType;
Object.freeze(LanguageType);
var LanguageKeyType = (function () {
    function LanguageKeyType() {
    }
    LanguageKeyType.English = 'eng';
    LanguageKeyType.French = 'fre';
    LanguageKeyType.German = 'ger';
    LanguageKeyType.Spanish = 'spa';
    LanguageKeyType.Italian = 'ita';
    LanguageKeyType.Dutch = 'dut';
    LanguageKeyType.Swedish = 'swe';
    return LanguageKeyType;
}());
exports.LanguageKeyType = LanguageKeyType;
Object.freeze(LanguageKeyType);
var ViewModeType = (function () {
    function ViewModeType() {
    }
    ViewModeType.ScaleToFill = 'Scale to Fill';
    ViewModeType.Letterboxed = 'Letterboxed and Centered';
    ViewModeType.FillAndCenter = 'Fill Screen and Centered';
    return ViewModeType;
}());
exports.ViewModeType = ViewModeType;
Object.freeze(ViewModeType);
var ImageModeType = (function () {
    function ImageModeType() {
    }
    ImageModeType.CenterImage = 'Center Image';
    ImageModeType.ScaleToFit = 'Scale to Fit';
    ImageModeType.FillAndCrop = 'Scale to Fill and Crop';
    ImageModeType.ScaleToFill = 'Scale to Fill';
    return ImageModeType;
}());
exports.ImageModeType = ImageModeType;
Object.freeze(ImageModeType);
var ColorSpaceType = (function () {
    function ColorSpaceType() {
    }
    ColorSpaceType.Unknown = 'Unknown';
    ColorSpaceType.CMY = 'CMY';
    ColorSpaceType.CMYK = 'CMYK';
    ColorSpaceType.Gray = 'Gray';
    ColorSpaceType.HCL = 'HCL';
    ColorSpaceType.HCLp = 'HCLp';
    ColorSpaceType.HSB = 'HSB';
    ColorSpaceType.HSI = 'HSI';
    ColorSpaceType.HSL = 'HSL';
    ColorSpaceType.HSV = 'HSV';
    ColorSpaceType.HWB = 'HWB';
    ColorSpaceType.Lab = 'Lab';
    ColorSpaceType.LCH = 'LCH';
    ColorSpaceType.LCHab = 'LCHab';
    ColorSpaceType.LCHuv = 'LCHuv';
    ColorSpaceType.Log = 'Log';
    ColorSpaceType.LMS = 'LMS';
    ColorSpaceType.Luv = 'Luv';
    ColorSpaceType.OHTA = 'OHTA';
    ColorSpaceType.Rec601YCbCr = 'Rec601YCbCr';
    ColorSpaceType.Rec709YCbCr = 'Rec709YCbCr';
    ColorSpaceType.RGB = 'RGB';
    ColorSpaceType.scRGB = 'scRGB';
    ColorSpaceType.sRGB = 'sRGB';
    ColorSpaceType.Transparent = 'Transparent';
    ColorSpaceType.XyV = 'XyV';
    ColorSpaceType.XYZ = 'XYZ';
    ColorSpaceType.YCbCr = 'YCbCr';
    ColorSpaceType.YCC = 'YCC';
    ColorSpaceType.YDbDr = 'YDbDr';
    ColorSpaceType.YIQ = 'YIQ';
    ColorSpaceType.YPbPr = 'YPbPr';
    ColorSpaceType.YUV = 'YUV';
    ColorSpaceType.LinearGray = 'LinearGray';
    return ColorSpaceType;
}());
exports.ColorSpaceType = ColorSpaceType;
var ImageOrientationType = (function () {
    function ImageOrientationType() {
    }
    ImageOrientationType.Undefined = 'Undefined';
    ImageOrientationType.TopLeft = 'TopLeft';
    ImageOrientationType.TopRight = 'TopRight';
    ImageOrientationType.BottomRight = 'BottomRight';
    ImageOrientationType.BottomLeft = 'BottomLeft';
    ImageOrientationType.LeftTop = 'LeftTop';
    ImageOrientationType.RightTop = 'RightTop';
    ImageOrientationType.RightBottom = 'RightBottom';
    ImageOrientationType.LeftBottom = 'LeftBottom';
    return ImageOrientationType;
}());
exports.ImageOrientationType = ImageOrientationType;
var AudioOutputSelectionType = (function () {
    function AudioOutputSelectionType() {
    }
    AudioOutputSelectionType.Analog = 'Analog';
    AudioOutputSelectionType.Usb = 'Usb';
    AudioOutputSelectionType.DigitalPcm = 'DigitalPcm';
    AudioOutputSelectionType.DigitalAc3 = 'DigitalAc3';
    AudioOutputSelectionType.AnalogHdmiAc3 = 'AnalogHdmiAc3';
    return AudioOutputSelectionType;
}());
exports.AudioOutputSelectionType = AudioOutputSelectionType;
Object.freeze(AudioOutputSelectionType);
var AudioModeType = (function () {
    function AudioModeType() {
    }
    AudioModeType.Surround = 'Surround';
    AudioModeType.Stereo = 'Stereo';
    AudioModeType.NoAudio = 'NoAudio';
    AudioModeType.Left = 'Left';
    AudioModeType.Right = 'Right';
    return AudioModeType;
}());
exports.AudioModeType = AudioModeType;
Object.freeze(AudioModeType);
var AudioMappingType = (function () {
    function AudioMappingType() {
    }
    AudioMappingType.Audio1 = 'Audio1';
    AudioMappingType.Audio2 = 'Audio2';
    AudioMappingType.Audio3 = 'Audio3';
    AudioMappingType.AudioAll = 'AudioAll';
    return AudioMappingType;
}());
exports.AudioMappingType = AudioMappingType;
Object.freeze(AudioMappingType);
var UsbConnectorName = (function () {
    function UsbConnectorName() {
    }
    UsbConnectorName.UsbA = 'usbA';
    UsbConnectorName.UsbB = 'usbB';
    UsbConnectorName.UsbC = 'usbC';
    UsbConnectorName.UsbD = 'usbD';
    UsbConnectorName.UsbTypeA = 'usbTypeA';
    UsbConnectorName.UsbTypeC = 'usbTypeC';
    UsbConnectorName.Usb700_1 = 'usb700_1';
    UsbConnectorName.Usb700_2 = 'usb700_2';
    UsbConnectorName.Usb700_3 = 'usb700_3';
    UsbConnectorName.Usb700_4 = 'usb700_4';
    UsbConnectorName.Usb700_5 = 'usb700_5';
    UsbConnectorName.Usb700_6 = 'usb700_6';
    UsbConnectorName.Usb700_7 = 'usb700_7';
    UsbConnectorName.Usb_1 = 'usb_1';
    UsbConnectorName.Usb_2 = 'usb_2';
    UsbConnectorName.Usb_3 = 'usb_3';
    UsbConnectorName.Usb_4 = 'usb_4';
    UsbConnectorName.Usb_5 = 'usb_5';
    UsbConnectorName.Usb_6 = 'usb_6';
    return UsbConnectorName;
}());
exports.UsbConnectorName = UsbConnectorName;
Object.freeze(UsbConnectorName);
var AudioOutputName = (function (_super) {
    __extends(AudioOutputName, _super);
    function AudioOutputName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioOutputName.Analog1 = 'analog1';
    AudioOutputName.Analog2 = 'analog2';
    AudioOutputName.Analog3 = 'analog3';
    AudioOutputName.Hdmi = 'hdmi';
    AudioOutputName.Spdif = 'spdif';
    return AudioOutputName;
}(UsbConnectorName));
exports.AudioOutputName = AudioOutputName;
Object.freeze(AudioOutputName);
exports.UsbConnectorNameArray = [
    'usbA', 'usbB', 'usbC', 'usbD',
    'usbTypeA', 'usbTypeC', 'usb700_1', 'usb700_2', 'usb700_3',
    'usb700_4', 'usb700_5', 'usb700_6', 'usb700_7',
    'usb_1', 'usb_2', 'usb_3', 'usb_4', 'usb_5', 'usb_6',
];
exports.AudioOutputNameArray = __spreadArrays([
    'analog1', 'analog2', 'analog3', 'hdmi', 'spdif'
], exports.UsbConnectorNameArray);
var AudioConfiguration = (function () {
    function AudioConfiguration() {
    }
    AudioConfiguration.MixedAudioPCMOnly = 'MixedAudioPCMOnly';
    AudioConfiguration.MixedAudioPCMCompressed = 'MixedAudioPCMCompressed';
    AudioConfiguration.FixedAudio = 'FixedAudio';
    return AudioConfiguration;
}());
exports.AudioConfiguration = AudioConfiguration;
Object.freeze(AudioConfiguration);
var AudioOutputType = (function () {
    function AudioOutputType() {
    }
    AudioOutputType.Pcm = 'Pcm';
    AudioOutputType.Passthrough = 'Passthrough';
    AudioOutputType.Multichannel = 'Multichannel';
    AudioOutputType.None = 'None';
    return AudioOutputType;
}());
exports.AudioOutputType = AudioOutputType;
Object.freeze(AudioOutputType);
var AudioMixModeType = (function () {
    function AudioMixModeType() {
    }
    AudioMixModeType.Stereo = 'Stereo';
    AudioMixModeType.Left = 'Left';
    AudioMixModeType.Right = 'Right';
    return AudioMixModeType;
}());
exports.AudioMixModeType = AudioMixModeType;
Object.freeze(AudioMixModeType);
var MosaicMaxContentResolutionType = (function () {
    function MosaicMaxContentResolutionType() {
    }
    MosaicMaxContentResolutionType.NotApplicable = 'NotApplicable';
    MosaicMaxContentResolutionType.QCIF = 'QCIF';
    MosaicMaxContentResolutionType.CIF = 'CIF';
    MosaicMaxContentResolutionType.SD = 'SD';
    MosaicMaxContentResolutionType.HD = 'HD';
    MosaicMaxContentResolutionType.FK = '4K';
    return MosaicMaxContentResolutionType;
}());
exports.MosaicMaxContentResolutionType = MosaicMaxContentResolutionType;
Object.freeze(MosaicMaxContentResolutionType);
var VideoDisplayModeType = (function () {
    function VideoDisplayModeType() {
    }
    VideoDisplayModeType.m2D = '2D';
    VideoDisplayModeType.m3DTOB = '3DTOB';
    VideoDisplayModeType.m3DSBS = '3DSBS';
    return VideoDisplayModeType;
}());
exports.VideoDisplayModeType = VideoDisplayModeType;
Object.freeze(VideoDisplayModeType);
var RotationType = (function () {
    function RotationType() {
    }
    RotationType.rot0 = '0';
    RotationType.rot90 = '90';
    RotationType.rot180 = '180';
    RotationType.rot270 = '270';
    return RotationType;
}());
exports.RotationType = RotationType;
Object.freeze(RotationType);
var TextHAlignmentType = (function () {
    function TextHAlignmentType() {
    }
    TextHAlignmentType.Left = 'Left';
    TextHAlignmentType.Center = 'Center';
    TextHAlignmentType.Right = 'Right';
    return TextHAlignmentType;
}());
exports.TextHAlignmentType = TextHAlignmentType;
Object.freeze(TextHAlignmentType);
var TextScrollingMethodType = (function () {
    function TextScrollingMethodType() {
    }
    TextScrollingMethodType.Animated = 'Animated';
    TextScrollingMethodType.StaticText = 'StaticText';
    TextScrollingMethodType.Scrolling = 'Scrolling';
    return TextScrollingMethodType;
}());
exports.TextScrollingMethodType = TextScrollingMethodType;
Object.freeze(TextScrollingMethodType);
var EventType = (function () {
    function EventType() {
    }
    EventType.MediaEnd = 'MediaEnd';
    EventType.Timer = 'Timer';
    EventType.MediaEndOrTimer = 'MediaEndOrTimer';
    EventType.MediaListEnd = 'MediaListEnd';
    EventType.Keyboard = 'Keyboard';
    EventType.Remote = 'Remote';
    EventType.Usb = 'Usb';
    EventType.Synchronize = 'Synchronize';
    EventType.ZoneMessage = 'ZoneMessage';
    EventType.InternalSynchronize = 'InternalSynchronize';
    EventType.Success = 'Success';
    EventType.Fail = 'Fail';
    EventType.Serial = 'Serial';
    EventType.TimeClock = 'TimeClock';
    EventType.Gps = 'Gps';
    EventType.AudioTimeCode = 'AudioTimeCode';
    EventType.VideoTimeCode = 'VideoTimeCode';
    EventType.RectangularTouch = 'RectangularTouch';
    EventType.Gpio = 'Gpio';
    EventType.Bp = 'Bp';
    EventType.PluginMessage = 'PluginMessage';
    EventType.Udp = 'Udp';
    EventType.InteractiveMenu = 'InteractiveMenu';
    EventType.WssEvent = 'WssEvent';
    EventType.Button = 'Button';
    EventType.Bmap = 'Bmap';
    EventType.BmapHex = 'BmapHex';
    return EventType;
}());
exports.EventType = EventType;
Object.freeze(EventType);
var EventIntrinsicAction = (function () {
    function EventIntrinsicAction() {
    }
    EventIntrinsicAction.None = 'None';
    EventIntrinsicAction.SequenceForward = 'SeqFwd';
    EventIntrinsicAction.SequenceBackward = 'SeqBack';
    EventIntrinsicAction.ReturnToPriorState = 'ReturnToPriorState';
    EventIntrinsicAction.StopPlayback = 'StopPlayback';
    EventIntrinsicAction.StopPlaybackAndClearScreen = 'StopPlaybackAndClearScreen';
    return EventIntrinsicAction;
}());
exports.EventIntrinsicAction = EventIntrinsicAction;
var BpType = (function () {
    function BpType() {
    }
    BpType.Bp200 = 'bp200';
    BpType.Bp900 = 'bp900';
    BpType.Gpio = 'gpio';
    return BpType;
}());
exports.BpType = BpType;
Object.freeze(BpType);
var GpioType = (function () {
    function GpioType() {
    }
    GpioType.Input = 'input';
    GpioType.Output = 'output';
    return GpioType;
}());
exports.GpioType = GpioType;
Object.freeze(GpioType);
var BpIndex = (function () {
    function BpIndex() {
    }
    BpIndex.A = 'a';
    BpIndex.B = 'b';
    BpIndex.C = 'c';
    BpIndex.D = 'd';
    return BpIndex;
}());
exports.BpIndex = BpIndex;
Object.freeze(BpIndex);
var ButtonPanelName = (function () {
    function ButtonPanelName() {
    }
    ButtonPanelName.Bp900a = 'bp900a';
    ButtonPanelName.Bp900b = 'bp900b';
    ButtonPanelName.Bp900c = 'bp900c';
    ButtonPanelName.Bp900d = 'bp900d';
    ButtonPanelName.Bp200a = 'bp200a';
    ButtonPanelName.Bp200b = 'bp200b';
    ButtonPanelName.Bp200c = 'bp200c';
    ButtonPanelName.Bp200d = 'bp200d';
    return ButtonPanelName;
}());
exports.ButtonPanelName = ButtonPanelName;
Object.freeze(ButtonPanelName);
exports.ButtonPanelNameArray = [
    'bp900a', 'bp900b', 'bp900c', 'bp900d', 'bp200a', 'bp200b', 'bp200c', 'bp200d',
];
var ButtonDirection = (function () {
    function ButtonDirection() {
    }
    ButtonDirection.Down = 'Down';
    ButtonDirection.Up = 'Up';
    return ButtonDirection;
}());
exports.ButtonDirection = ButtonDirection;
Object.freeze(ButtonDirection);
var IrReceiverSource = (function () {
    function IrReceiverSource() {
    }
    IrReceiverSource.IrIn = 'Ir-in';
    IrReceiverSource.GPIO = 'GPIO';
    IrReceiverSource.Iguana = 'Iguana';
    IrReceiverSource.None = 'None';
    return IrReceiverSource;
}());
exports.IrReceiverSource = IrReceiverSource;
Object.freeze(IrReceiverSource);
var IrReceiverEncodings = (function () {
    function IrReceiverEncodings() {
    }
    IrReceiverEncodings.NEC = 'NEC';
    IrReceiverEncodings.RC5 = 'RC5';
    return IrReceiverEncodings;
}());
exports.IrReceiverEncodings = IrReceiverEncodings;
Object.freeze(IrReceiverEncodings);
var IrTransmitterDestination = (function () {
    function IrTransmitterDestination() {
    }
    IrTransmitterDestination.IrOut = 'Ir-out';
    IrTransmitterDestination.Iguana = 'Iguana';
    IrTransmitterDestination.None = 'None';
    return IrTransmitterDestination;
}());
exports.IrTransmitterDestination = IrTransmitterDestination;
Object.freeze(IrTransmitterDestination);
var RegionDirection = (function () {
    function RegionDirection() {
    }
    RegionDirection.Enter = 'Enter';
    RegionDirection.Exit = 'Exit';
    return RegionDirection;
}());
exports.RegionDirection = RegionDirection;
Object.freeze(RegionDirection);
var DistanceUnits = (function () {
    function DistanceUnits() {
    }
    DistanceUnits.Miles = 'Miles';
    DistanceUnits.Kilometers = 'Kilometers';
    return DistanceUnits;
}());
exports.DistanceUnits = DistanceUnits;
Object.freeze(DistanceUnits);
var TransitionType = (function () {
    function TransitionType() {
    }
    TransitionType.None = 'None';
    TransitionType.NoEffect = 'No effect';
    TransitionType.WipeTop = 'Image wipe from top';
    TransitionType.WipeBottom = 'Image wipe from bottom';
    TransitionType.WipeLeft = 'Image wipe from left';
    TransitionType.WipeRight = 'Image wipe from right';
    TransitionType.ExplodeFromCenter = 'Explode from center';
    TransitionType.ExplodeTopLeft = 'Explode top left';
    TransitionType.ExplodeTopRight = 'Explode top right';
    TransitionType.ExplodeBottomLeft = 'Explode bottom left';
    TransitionType.ExplodeBottomRight = 'Explode bottom right';
    TransitionType.BlindsVertical = 'Venetian blinds - vertical';
    TransitionType.BlindsHorizontal = 'Venetian blinds - horizontal';
    TransitionType.CombVertical = 'Comb effect - vertical';
    TransitionType.CombHorizontal = 'Comb effect - horizontal';
    TransitionType.FadeToBackground = 'Fade to background color';
    TransitionType.Fade = 'Fade to new image';
    TransitionType.SlideFromTop = 'Slide from top';
    TransitionType.SlideFromBottom = 'Slide from bottom';
    TransitionType.SlideFromLeft = 'Slide from left';
    TransitionType.SlideFromRight = 'Slide from right';
    return TransitionType;
}());
exports.TransitionType = TransitionType;
Object.freeze(TransitionType);
var CompareOperator = (function () {
    function CompareOperator() {
    }
    CompareOperator.EQ = 'EQ';
    CompareOperator.NEQ = 'NEQ';
    CompareOperator.BTW = 'BTW';
    CompareOperator.GT = 'GT';
    CompareOperator.GTE = 'GTE';
    CompareOperator.LT = 'LT';
    CompareOperator.LTE = 'LTE';
    return CompareOperator;
}());
exports.CompareOperator = CompareOperator;
Object.freeze(CompareOperator);
var CommandType = (function () {
    function CommandType() {
    }
    CommandType.SendBpOutput = 'sendBpOutput';
    CommandType.SetAllAudioOutputs = 'setAllAudioOutputs';
    CommandType.SetAudioMode = 'setAudioMode';
    CommandType.ConfigureAudioResources = 'configureAudioResources';
    CommandType.SetConnectorVolume = 'setConnectorVolume';
    CommandType.IncrementConnectorVolume = 'incrementConnectorVolume';
    CommandType.DecrementConnectorVolume = 'decrementConnectorVolume';
    CommandType.MuteAudioOutputs = 'muteAudioOutputs';
    CommandType.UnmuteAudioOutputs = 'unmuteAudioOutputs';
    CommandType.SetZoneVolume = 'setZoneVolume';
    CommandType.IncrementZoneVolume = 'incrementZoneVolume';
    CommandType.DecrementZoneVolume = 'decrementZoneVolume';
    CommandType.SetZoneChannelVolume = 'setZoneChannelVolume';
    CommandType.IncrementZoneChannelVolume = 'incrementZoneChannelVolume';
    CommandType.DecrementZoneChannelVolume = 'decrementZoneChannelVolume';
    CommandType.SendZoneMessage = 'sendZoneMessage';
    CommandType.SendUdp = 'sendUdp';
    CommandType.SendUdpBytes = 'sendUdpBytes';
    CommandType.SendIRRemote = 'sendIRRemote';
    CommandType.SendProntoIRRemote = 'sendProntoIRRemote';
    CommandType.SerialSendString = 'serialSendString';
    CommandType.SerialSendByte = 'serialSendByte';
    CommandType.SerialSendBytes = 'serialSendBytes';
    CommandType.SendPluginMessage = 'sendPluginMessage';
    CommandType.Synchronize = 'synchronize';
    CommandType.InternalSynchronize = 'internalSynchronize';
    CommandType.GpioOn = 'gpioOn';
    CommandType.GpioOff = 'gpioOff';
    CommandType.GpioSetState = 'gpioSetState';
    CommandType.PauseVideo = 'pauseVideo';
    CommandType.ResumeVideo = 'resumeVideo';
    CommandType.EnablePowerSaveMode = 'enablePowerSaveMode';
    CommandType.DisablePowerSaveMode = 'disablePowerSaveMode';
    CommandType.CecDisplayOn = 'cecDisplayOn';
    CommandType.CecDisplayOff = 'cecDisplayOff';
    CommandType.CecSetSourceToBrightSign = 'cecSetSourceToBrightSign';
    CommandType.CecSendString = 'cecSendString';
    CommandType.CecPhilipsSetVolume = 'cecPhilipsSetVolume';
    CommandType.BeaconStart = 'beaconStart';
    CommandType.BeaconStop = 'beaconStop';
    CommandType.Pause = 'pause';
    CommandType.Resume = 'resume';
    CommandType.SetVariable = 'setVariable';
    CommandType.IncrementVariable = 'incrementVariable';
    CommandType.DecrementVariable = 'decrementVariable';
    CommandType.ResetVariable = 'resetVariable';
    CommandType.ResetVariables = 'resetVariables';
    CommandType.SwitchPresentation = 'switchPresentation';
    CommandType.UpdateDataFeed = 'updateDataFeed';
    CommandType.ResizeZone = 'resizeZone';
    CommandType.HideZone = 'hideZone';
    CommandType.ShowZone = 'showZone';
    CommandType.PauseZonePlayback = 'pauseZonePlayback';
    CommandType.ResumeZonePlayback = 'resumeZonePlayback';
    CommandType.Reboot = 'reboot';
    CommandType.SendBLC400Output = 'sendBLC400Output';
    CommandType.SendWss = 'sendWss';
    CommandType.LightOn = 'lightOn';
    CommandType.LightOff = 'lightOff';
    CommandType.SendBmap = 'sendBmap';
    CommandType.SendBmapHex = 'sendBmapHex';
    return CommandType;
}());
exports.CommandType = CommandType;
Object.freeze(CommandType);
var CommandSequenceType = (function () {
    function CommandSequenceType() {
    }
    CommandSequenceType.StateEntry = 'StateEntry';
    CommandSequenceType.StateExit = 'StateExit';
    CommandSequenceType.Event = 'Event';
    CommandSequenceType.Transition = 'Transition';
    CommandSequenceType.SequenceItemNext = 'ItemNext';
    CommandSequenceType.SequenceItemPrevious = 'ItemPrev';
    return CommandSequenceType;
}());
exports.CommandSequenceType = CommandSequenceType;
Object.freeze(CommandSequenceType);
var BpAction = (function () {
    function BpAction() {
    }
    BpAction.Off = 'Off';
    BpAction.On = 'On';
    BpAction.FastBlink = 'FastBlink';
    BpAction.MediumBlink = 'MediumBlink';
    BpAction.SlowBlink = 'SlowBlink';
    return BpAction;
}());
exports.BpAction = BpAction;
Object.freeze(BpAction);
var BlcIndex = (function () {
    function BlcIndex() {
    }
    BlcIndex.A = 'a';
    BlcIndex.B = 'b';
    BlcIndex.C = 'c';
    return BlcIndex;
}());
exports.BlcIndex = BlcIndex;
Object.freeze(BlcIndex);
var BlcEffect = (function () {
    function BlcEffect() {
    }
    BlcEffect.Intensity = 'Intensity';
    BlcEffect.Blink = 'Blink';
    BlcEffect.Breathe = 'Breathe';
    BlcEffect.Strobe = 'Strobe';
    BlcEffect.Marquee = 'Marquee';
    return BlcEffect;
}());
exports.BlcEffect = BlcEffect;
Object.freeze(BlcEffect);
var BlcBlink = (function () {
    function BlcBlink() {
    }
    BlcBlink.FastBlink = 'FastBlink';
    BlcBlink.MediumBlink = 'MediumBlink';
    BlcBlink.SlowBlink = 'SlowBlink';
    return BlcBlink;
}());
exports.BlcBlink = BlcBlink;
Object.freeze(BlcBlink);
var BlcPlaybackMode = (function () {
    function BlcPlaybackMode() {
    }
    BlcPlaybackMode.Loop = 'Loop';
    BlcPlaybackMode.BackAndForth = 'BackAndForth';
    BlcPlaybackMode.PlayOnce = 'PlayOnce';
    BlcPlaybackMode.Random = 'Random';
    return BlcPlaybackMode;
}());
exports.BlcPlaybackMode = BlcPlaybackMode;
Object.freeze(BlcPlaybackMode);
var BlcTransitionMode = (function () {
    function BlcTransitionMode() {
    }
    BlcTransitionMode.HardOnOff = 'HardOnOff';
    BlcTransitionMode.SmoothDelay = 'SmoothDelay';
    BlcTransitionMode.SmoothFullOverlap = 'SmoothFullOverlap';
    BlcTransitionMode.SmoothPartialOverlap = 'SmoothPartialOverlap';
    return BlcTransitionMode;
}());
exports.BlcTransitionMode = BlcTransitionMode;
Object.freeze(BlcTransitionMode);
var BlcChannels = (function () {
    function BlcChannels() {
    }
    BlcChannels.A = 'A';
    BlcChannels.B = 'B';
    BlcChannels.C = 'C';
    BlcChannels.D = 'D';
    return BlcChannels;
}());
exports.BlcChannels = BlcChannels;
Object.freeze(BlcChannels);
var AccessType = (function () {
    function AccessType() {
    }
    AccessType.Private = 'Private';
    AccessType.Shared = 'Shared';
    return AccessType;
}());
exports.AccessType = AccessType;
Object.freeze(AccessType);
var StringParameterType = (function () {
    function StringParameterType() {
    }
    StringParameterType.Text = 'Text';
    StringParameterType.UserVariable = 'UserVariable';
    StringParameterType.UserVariableName = 'UserVariableName';
    return StringParameterType;
}());
exports.StringParameterType = StringParameterType;
Object.freeze(StringParameterType);
var NumberParameterType = (function () {
    function NumberParameterType() {
    }
    NumberParameterType.Number = 'Number';
    NumberParameterType.UserVariable = 'UserVariable';
    NumberParameterType.UserVariableName = 'UserVariableName';
    return NumberParameterType;
}());
exports.NumberParameterType = NumberParameterType;
Object.freeze(NumberParameterType);
var SystemVariableType = (function () {
    function SystemVariableType() {
    }
    SystemVariableType.SerialNumber = 'SerialNumber';
    SystemVariableType.IPAddressWired = 'IPAddressWired';
    SystemVariableType.IPAddressWireless = 'IPAddressWireless';
    SystemVariableType.FirmwareVersion = 'FirmwareVersion';
    SystemVariableType.ScriptVersion = 'ScriptVersion';
    SystemVariableType.EdidMonitorSerialNumber = 'EdidMonitorSerialNumber';
    SystemVariableType.EdidYearOfManufacture = 'EdidYearOfManufacture';
    SystemVariableType.EdidMonitorName = 'EdidMonitorName';
    SystemVariableType.EdidManufacturer = 'EdidManufacturer';
    SystemVariableType.EdidUnspecifiedText = 'EdidUnspecifiedText';
    SystemVariableType.EdidSerialNumber = 'EdidSerialNumber';
    SystemVariableType.EdidManufacturerProductCode = 'EdidManufacturerProductCode';
    SystemVariableType.EdidWeekOfManufacture = 'EdidWeekOfManufacture';
    SystemVariableType.ActivePresentation = 'ActivePresentation';
    return SystemVariableType;
}());
exports.SystemVariableType = SystemVariableType;
var MediaListPlaybackType = (function () {
    function MediaListPlaybackType() {
    }
    MediaListPlaybackType.FromBeginning = 'FromBeginning';
    MediaListPlaybackType.NextInList = 'NextInList';
    MediaListPlaybackType.FromIndex = 'FromIndex';
    return MediaListPlaybackType;
}());
exports.MediaListPlaybackType = MediaListPlaybackType;
var PlayFileTriggerType = (function () {
    function PlayFileTriggerType() {
    }
    PlayFileTriggerType.ByEventData = 'ByEventData';
    PlayFileTriggerType.ByUserVariable = 'ByUserVariable';
    return PlayFileTriggerType;
}());
exports.PlayFileTriggerType = PlayFileTriggerType;
var HtmlSiteType = (function () {
    function HtmlSiteType() {
    }
    HtmlSiteType.Hosted = 'Hosted';
    HtmlSiteType.Remote = 'Remote';
    return HtmlSiteType;
}());
exports.HtmlSiteType = HtmlSiteType;
Object.freeze(HtmlSiteType);
var DataFeedType = (function () {
    function DataFeedType() {
    }
    DataFeedType.URLDataFeed = 'URLDataFeed';
    DataFeedType.BSNDataFeed = 'BSNDataFeed';
    DataFeedType.BSNMediaFeed = 'BSNMediaFeed';
    DataFeedType.BSNDynamicPlaylist = 'BSNDynamicPlaylist';
    DataFeedType.BSNTaggedPlaylist = 'BSNTaggedPlaylist';
    return DataFeedType;
}());
exports.DataFeedType = DataFeedType;
Object.freeze(DataFeedType);
var DataFeedUsageType = (function () {
    function DataFeedUsageType() {
    }
    DataFeedUsageType.Text = 'Text';
    DataFeedUsageType.Mrss = 'MRSS';
    DataFeedUsageType.MrssWith4K = 'MRSSWith4K';
    DataFeedUsageType.Content = 'Content';
    return DataFeedUsageType;
}());
exports.DataFeedUsageType = DataFeedUsageType;
Object.freeze(DataFeedUsageType);
var PlayerTagMatchingType = (function () {
    function PlayerTagMatchingType() {
    }
    PlayerTagMatchingType.DoNotMatchTags = 'DoNotMatchTags';
    PlayerTagMatchingType.MatchAllMediaTagsToPlayerTags = 'MatchAllMediaTagsToPlayerTags';
    PlayerTagMatchingType.MatchAllPlayerTagsToMediaTags = 'MatchAllPlayerTagsToMediaTags';
    PlayerTagMatchingType.MatchAnyPlayerAndMediaTags = 'MatchAnyPlayerAndMediaTags';
    return PlayerTagMatchingType;
}());
exports.PlayerTagMatchingType = PlayerTagMatchingType;
Object.freeze(PlayerTagMatchingType);
var TwitterFeedRestrictionType = (function () {
    function TwitterFeedRestrictionType() {
    }
    TwitterFeedRestrictionType.None = 'None';
    TwitterFeedRestrictionType.ByCount = 'ByCount';
    TwitterFeedRestrictionType.ByRecentDays = 'ByRecentDays';
    return TwitterFeedRestrictionType;
}());
exports.TwitterFeedRestrictionType = TwitterFeedRestrictionType;
exports.BsBlack = { a: 255, r: 0, g: 0, b: 0 };
Object.freeze(exports.BsBlack);
function bscIsBsColor(value) {
    return !isNil(value)
        && typeof value === 'object'
        && value.hasOwnProperty('r')
        && value.hasOwnProperty('g')
        && value.hasOwnProperty('b')
        && value.hasOwnProperty('a');
}
exports.bscIsBsColor = bscIsBsColor;
function bscIsBsSize(value) {
    return !isNil(value)
        && typeof value === 'object'
        && value.hasOwnProperty('height')
        && value.hasOwnProperty('width');
}
exports.bscIsBsSize = bscIsBsSize;
function getEnumKeyOfValue(enumType, value) {
    for (var _i = 0, _a = Object.keys(enumType); _i < _a.length; _i++) {
        var key = _a[_i];
        if (enumType[key] === value) {
            return key;
        }
    }
    return null;
}
exports.getEnumKeyOfValue = getEnumKeyOfValue;
function isInstanceOfEnum(enumType, value) {
    return getEnumKeyOfValue(enumType, value) !== null;
}
exports.isInstanceOfEnum = isInstanceOfEnum;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bscGetBsnFirmwareKeyForPlayerModel = exports.bscPlayerModelToPlayerFamily = exports.bscSerialToPlayerFamily = exports.AllModels = exports.Series2Models = exports.Series3Models = exports.Series4Models = exports.MonacoModels = exports.PumaModels = exports.PantherModels = exports.CheetahModels = exports.BobcatModels = exports.LynxModels = exports.SebringModels = exports.TigerModels = exports.PanteraModels = exports.ImpalaModels = exports.PaganiHDModels = exports.PaganiModels = exports.MalibuModels = exports.PlayerModel = exports.PlayerMachineNameSuffix = exports.PlayerFamily = void 0;
var PlayerFamily = (function () {
    function PlayerFamily() {
    }
    PlayerFamily.Unknown = 'Unknown';
    PlayerFamily.Malibu = 'Malibu';
    PlayerFamily.Pagani = 'Pagani';
    PlayerFamily.Impala = 'Impala';
    PlayerFamily.Pantera = 'Pantera';
    PlayerFamily.Tiger = 'Tiger';
    PlayerFamily.Sebring = 'Sebring';
    PlayerFamily.Lynx = 'Lynx';
    PlayerFamily.Bobcat = 'Bobcat';
    PlayerFamily.Cheetah = 'Cheetah';
    PlayerFamily.Panther = 'Panther';
    PlayerFamily.Puma = 'Puma';
    PlayerFamily.Monaco = 'Monaco';
    return PlayerFamily;
}());
exports.PlayerFamily = PlayerFamily;
Object.freeze(PlayerFamily);
var PlayerMachineNameSuffix = (function () {
    function PlayerMachineNameSuffix() {
    }
    PlayerMachineNameSuffix.SingleDecoder = 'Single_Decoder';
    PlayerMachineNameSuffix.No4K = 'No4K';
    return PlayerMachineNameSuffix;
}());
exports.PlayerMachineNameSuffix = PlayerMachineNameSuffix;
Object.freeze(PlayerMachineNameSuffix);
var PlayerModel = (function () {
    function PlayerModel() {
    }
    PlayerModel.Unknown = 'Unknown';
    PlayerModel.XD1034 = 'XD1034';
    PlayerModel.XD234 = 'XD234';
    PlayerModel.XT1144 = 'XT1144';
    PlayerModel.XT244 = 'XT244';
    PlayerModel.HD1024 = 'HD1024';
    PlayerModel.HD224 = 'HD224';
    PlayerModel.HS144 = 'HS144';
    PlayerModel.LS424 = 'LS424';
    PlayerModel.HS124 = 'HS124';
    PlayerModel.XD1033 = 'XD1033';
    PlayerModel.XD233 = 'XD233';
    PlayerModel.XT1043 = 'XT1043';
    PlayerModel.XT1143 = 'XT1143';
    PlayerModel.XT243 = 'XT243';
    PlayerModel.HD1023 = 'HD1023';
    PlayerModel.HD223 = 'HD223';
    PlayerModel.HS123 = 'HS123';
    PlayerModel.HO523 = 'HO523';
    PlayerModel.LS423 = 'LS423';
    PlayerModel.FK1142 = '4K1142';
    PlayerModel.FK1042 = '4K1042';
    PlayerModel.FK242 = '4K242';
    PlayerModel.AU325 = 'AU325';
    PlayerModel.AU335 = 'AU335';
    PlayerModel.XD1132 = 'XD1132';
    PlayerModel.XD1032 = 'XD1032';
    PlayerModel.XD232 = 'XD232';
    PlayerModel.HD1022 = 'HD1022';
    PlayerModel.HD222 = 'HD222';
    PlayerModel.HD972 = 'HD972';
    PlayerModel.HD922 = 'HD922';
    PlayerModel.XD1230 = 'XD1230';
    PlayerModel.XD1030 = 'XD1030';
    PlayerModel.XD230 = 'XD230';
    PlayerModel.HD1020 = 'HD1020';
    PlayerModel.HD220 = 'HD220';
    PlayerModel.HD120 = 'HD120';
    PlayerModel.LS422 = 'LS422';
    PlayerModel.LS322 = 'LS322';
    PlayerModel.AU320 = 'AU320';
    PlayerModel.HD970 = 'HD970';
    PlayerModel.HD920 = 'HD920';
    PlayerModel.A915 = 'A915';
    PlayerModel.HD917 = 'HD917';
    PlayerModel.HD210 = 'HD210';
    PlayerModel.HD1010 = 'HD1010';
    PlayerModel.TD1012 = 'TD1012';
    return PlayerModel;
}());
exports.PlayerModel = PlayerModel;
var MalibuModelArray = [
    PlayerModel.XD1034,
    PlayerModel.XD234,
    PlayerModel.XT1144,
    PlayerModel.XT244,
];
exports.MalibuModels = new Set(MalibuModelArray);
var PaganiModelArray = [
    PlayerModel.HD1024,
    PlayerModel.HD224,
    PlayerModel.HS144,
];
exports.PaganiModels = new Set(PaganiModelArray);
var PaganiHDModelArray = [
    PlayerModel.LS424,
    PlayerModel.HS124,
];
exports.PaganiHDModels = new Set(PaganiHDModelArray);
var ImpalaModelArray = [
    PlayerModel.XD1033,
    PlayerModel.XD233,
    PlayerModel.XT1043,
    PlayerModel.XT1143,
    PlayerModel.XT243,
];
exports.ImpalaModels = new Set(ImpalaModelArray);
var PanteraModelArray = [
    PlayerModel.HD1023,
    PlayerModel.HD223,
    PlayerModel.HS123,
    PlayerModel.HO523,
    PlayerModel.LS423,
];
exports.PanteraModels = new Set(PanteraModelArray);
var TigerModelArray = [
    PlayerModel.FK1142,
    PlayerModel.FK1042,
    PlayerModel.FK242,
];
exports.TigerModels = new Set(TigerModelArray);
var SebringModelArray = [
    PlayerModel.AU325,
    PlayerModel.AU335,
];
exports.SebringModels = new Set(SebringModelArray);
var LynxModelArray = [
    PlayerModel.XD1132,
    PlayerModel.XD1032,
    PlayerModel.XD232,
];
exports.LynxModels = new Set(LynxModelArray);
var BobcatModelArray = [
    PlayerModel.HD1022,
    PlayerModel.HD222,
    PlayerModel.HD972,
    PlayerModel.HD922,
];
exports.BobcatModels = new Set(BobcatModelArray);
var CheetahModelArray = [
    PlayerModel.XD1230,
    PlayerModel.XD1030,
    PlayerModel.XD230,
];
exports.CheetahModels = new Set(CheetahModelArray);
var PantherModelArray = [
    PlayerModel.HD1020,
    PlayerModel.HD220,
    PlayerModel.HD120,
    PlayerModel.LS422,
    PlayerModel.LS322,
    PlayerModel.AU320,
];
exports.PantherModels = new Set(PantherModelArray);
var PumaModelArray = [
    PlayerModel.HD970,
    PlayerModel.HD920,
    PlayerModel.A915,
    PlayerModel.HD917,
];
exports.PumaModels = new Set(PumaModelArray);
var MonacoModelArray = [
    PlayerModel.HD210,
    PlayerModel.HD1010,
    PlayerModel.TD1012,
];
exports.MonacoModels = new Set(MonacoModelArray);
exports.Series4Models = new Set(MalibuModelArray.concat(PaganiModelArray, PaganiHDModelArray));
exports.Series3Models = new Set(ImpalaModelArray.concat(PanteraModelArray));
exports.Series2Models = new Set(TigerModelArray.concat(LynxModelArray, BobcatModelArray));
exports.AllModels = new Set(MalibuModelArray.concat(PaganiModelArray, PaganiHDModelArray, ImpalaModelArray, PanteraModelArray, TigerModelArray, SebringModelArray, LynxModelArray, BobcatModelArray, CheetahModelArray, PantherModelArray, PumaModelArray, MonacoModelArray));
var PaganiPrefixArray = [
    '24', '25', '42', '43',
    '44', '45', '46', '47',
    '48', '49', '58', '59',
    '64', '65', '66',
];
var PanteraPrefixArray = [
    '31', '33', '35', '38',
    '53', '55', '57', '61',
];
var ImpalaPrefixArray = [
    '62', '63', 'L6', 'L8',
    'L9', 'R1', 'R2', 'R3',
    'R4', 'R6', 'R7',
];
var MalibuPrefixArray = [
    '67', 'D1', 'D2', 'D3',
    'D4', 'D5', 'D6', 'D7',
    'D8', 'D9', 'E1', 'E2',
    'E3', 'E4', 'E5',
];
var TigerPrefixArray = [
    'X3', 'X4', 'X5',
];
var SebringPrefixArray = [
    'AA', 'AC',
];
function bscSerialToPlayerFamily(serialNumber) {
    if (serialNumber && serialNumber.length > 1) {
        var prefix_1 = serialNumber.substring(0, 2);
        if (PaganiPrefixArray.find(function (p) { return (p === prefix_1); }) !== undefined) {
            return PlayerFamily.Pagani;
        }
        if (PanteraPrefixArray.find(function (p) { return (p === prefix_1); }) !== undefined) {
            return PlayerFamily.Pantera;
        }
        if (ImpalaPrefixArray.find(function (p) { return (p === prefix_1); }) !== undefined) {
            return PlayerFamily.Impala;
        }
        if (MalibuPrefixArray.find(function (p) { return (p === prefix_1); }) !== undefined) {
            return PlayerFamily.Malibu;
        }
        if (TigerPrefixArray.find(function (p) { return (p === prefix_1); }) !== undefined) {
            return PlayerFamily.Tiger;
        }
        if (SebringPrefixArray.find(function (p) { return (p === prefix_1); }) !== undefined) {
            return PlayerFamily.Sebring;
        }
    }
    return null;
}
exports.bscSerialToPlayerFamily = bscSerialToPlayerFamily;
function bscPlayerModelToPlayerFamily(model) {
    if (exports.MalibuModels.has(model)) {
        return PlayerFamily.Malibu;
    }
    else if (exports.PaganiModels.has(model) || exports.PaganiHDModels.has(model)) {
        return PlayerFamily.Pagani;
    }
    else if (exports.ImpalaModels.has(model)) {
        return PlayerFamily.Impala;
    }
    else if (exports.PanteraModels.has(model)) {
        return PlayerFamily.Pantera;
    }
    else if (exports.TigerModels.has(model)) {
        return PlayerFamily.Tiger;
    }
    else if (exports.SebringModels.has(model)) {
        return PlayerFamily.Sebring;
    }
    else if (exports.LynxModels.has(model)) {
        return PlayerFamily.Lynx;
    }
    else if (exports.BobcatModels.has(model)) {
        return PlayerFamily.Bobcat;
    }
    else if (exports.CheetahModels.has(model)) {
        return PlayerFamily.Cheetah;
    }
    else if (exports.PantherModels.has(model)) {
        return PlayerFamily.Panther;
    }
    else if (exports.PumaModels.has(model)) {
        return PlayerFamily.Puma;
    }
    else if (exports.MonacoModels.has(model)) {
        return PlayerFamily.Monaco;
    }
    else {
        return PlayerFamily.Unknown;
    }
}
exports.bscPlayerModelToPlayerFamily = bscPlayerModelToPlayerFamily;
function bscGetBsnFirmwareKeyForPlayerModel(model) {
    switch (bscPlayerModelToPlayerFamily(model)) {
        case PlayerFamily.Malibu: return 'xdX34_XTX44Firmware';
        case PlayerFamily.Pagani: return 'hdX4_HSX4_LSX4Firmware';
        case PlayerFamily.Impala: {
            switch (model) {
                case PlayerModel.XD1033:
                case PlayerModel.XD233:
                    return 'xdX33Firmware';
                default:
                    return 'xtX43Firmware';
            }
        }
        case PlayerFamily.Pantera: {
            switch (model) {
                case PlayerModel.HS123:
                    return 'hsX23Firmware';
                case PlayerModel.HO523:
                    return 'hoX23Firmware';
                case PlayerModel.LS423:
                    return 'lsX23Firmware';
                default:
                    return 'hdX23Firmware';
            }
        }
        case PlayerFamily.Tiger: return '4KX42Firmware';
        case PlayerFamily.Lynx: return 'xdX32Firmware';
        case PlayerFamily.Sebring: return 'aux5Firmware';
    }
    return null;
}
exports.bscGetBsnFirmwareKeyForPlayerModel = bscGetBsnFirmwareKeyForPlayerModel;


/***/ }),
/* 4 */
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
exports.bscGetBscFileTypeInfo = exports.BsAllFileBasedAssetTypes = exports.bscGetAssetItemFileTypeInfo = exports.styleSheetFileSuffixes = exports.fontFileSuffixes = exports.htmlSiteFileSuffixes = exports.projectBpfFileSuffixes = exports.scheduleFileSuffixes = exports.projectFileFragmentSuffixes = exports.projectFileSuffixes = exports.bscGetFileProjectFragmentExtension = exports.bscGetFileProjectFragmentType = exports.bscStripFileExtension = exports.bscIsAssetItemPlayableContent = exports.bscIsMediaTypePlayable = exports.bscGetFileMediaType = exports.textFileSuffixes = exports.audioFileSuffixes = exports.videoFileSuffixes = exports.imageFileSuffixes = exports.bscIsDefaultAssetItem = exports.bscGetDefaultAssetItem = exports.bscIsNullAssetItem = exports.bscGetNullAssetItem = exports.bscGetBsnAssetLocatorKey = exports.bscGetFtpAssetLocatorKey = exports.bscGetLocalAssetLocatorKey = exports.bscGenerateAssetLocatorKey = exports.bscAssetItemFromBasicAssetInfo = exports.bscGetAssetSpecification = exports.bscAssetLocatorForLocalAsset = exports.bscGetAssetFullPath = exports.bscGetAssetExtension = exports.bscGetAssetName = exports.bscAssetLocatorForBsnAsset = exports.bscAssetLocatorFromAssetItem = exports.bscAssetItemFromAssetLocator = exports.bscAssetItemIsBsnDataFeed = exports.bscIsAssetItem = exports.bscIsAssetLocator = exports.bscIsLocalAssetThumbnail = exports.bscCreateNetworkAssetThumbnail = exports.bscCreateLocalAssetThumbnail = exports.BsProjectFragmentType = exports.bscConvertProbeDataToAvMetadata = exports.bscIsImageData = exports.bscIsAudioData = exports.bscIsVideoData = exports.FtpObjectPermissionGroup = exports.BseChildAssetType = exports.AssetType = exports.AssetLocation = exports.bscIsValidAssetId = exports.BsAssetIdNone = void 0;
var metadata_1 = __webpack_require__(1);
var isomorphic_path_1 = __webpack_require__(25);
var isNil = __webpack_require__(0);
var isString = __webpack_require__(2);
var isUndefined = __webpack_require__(24);
exports.BsAssetIdNone = '0';
function bscIsValidAssetId(id) {
    return typeof id === 'string' && id.length >= 8;
}
exports.bscIsValidAssetId = bscIsValidAssetId;
var AssetLocation = (function () {
    function AssetLocation() {
    }
    AssetLocation.Local = 'Local';
    AssetLocation.Bsn = 'Bsn';
    AssetLocation.Ftp = 'Ftp';
    AssetLocation.Blob = 'Blob';
    return AssetLocation;
}());
exports.AssetLocation = AssetLocation;
Object.freeze(AssetLocation);
var AssetType = (function () {
    function AssetType() {
    }
    AssetType.Content = 'Content';
    AssetType.Project = 'Project';
    AssetType.ProjectBpf = 'ProjectBpf';
    AssetType.ProjectFragment = 'ProjectFragment';
    AssetType.Schedule = 'Schedule';
    AssetType.BrightScript = 'BrightScript';
    AssetType.HtmlSite = 'HtmlSite';
    AssetType.DeviceHtmlSite = 'DeviceHtmlSite';
    AssetType.Folder = 'Folder';
    AssetType.BSNDataFeed = 'BSNDataFeed';
    AssetType.BSNMediaFeed = 'BSNMediaFeed';
    AssetType.BSNDynamicPlaylist = 'BSNDynamicPlaylist';
    AssetType.BSNTaggedPlaylist = 'BSNTaggedPlaylist';
    AssetType.Other = 'Other';
    return AssetType;
}());
exports.AssetType = AssetType;
Object.freeze(AssetType);
var BseChildAssetType = (function (_super) {
    __extends(BseChildAssetType, _super);
    function BseChildAssetType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BseChildAssetType.Asset = 'Asset';
    BseChildAssetType.Component = 'Component';
    return BseChildAssetType;
}(AssetType));
exports.BseChildAssetType = BseChildAssetType;
Object.freeze(BseChildAssetType);
var FtpObjectPermissionGroup;
(function (FtpObjectPermissionGroup) {
    FtpObjectPermissionGroup[FtpObjectPermissionGroup["Owner"] = 0] = "Owner";
    FtpObjectPermissionGroup[FtpObjectPermissionGroup["Group"] = 1] = "Group";
    FtpObjectPermissionGroup[FtpObjectPermissionGroup["Other"] = 2] = "Other";
})(FtpObjectPermissionGroup = exports.FtpObjectPermissionGroup || (exports.FtpObjectPermissionGroup = {}));
function bscIsVideoData(mediaData) {
    return !isNil(mediaData) && mediaData.mediaType === metadata_1.MediaType.Video;
}
exports.bscIsVideoData = bscIsVideoData;
function bscIsAudioData(mediaData) {
    return !isNil(mediaData) && mediaData.mediaType === metadata_1.MediaType.Audio;
}
exports.bscIsAudioData = bscIsAudioData;
function bscIsImageData(mediaData) {
    return !isNil(mediaData) && mediaData.mediaType === metadata_1.MediaType.Image;
}
exports.bscIsImageData = bscIsImageData;
function bscConvertProbeDataToAvMetadata(probeData, mediaType) {
    var getHexNumber = function (v) {
        var n = parseInt(v, 16);
        return isNaN(n) ? 0 : n;
    };
    var getNumber = function (v) {
        var n = parseInt(v, 10);
        return isNaN(n) ? 0 : n;
    };
    var getFloatNumber = function (v) {
        var n = parseFloat(v);
        return isNaN(n) ? 0 : Math.round(n * 1000) / 1000;
    };
    if (mediaType === metadata_1.MediaType.Video || mediaType === metadata_1.MediaType.Audio) {
        var metadata_2 = mediaType === metadata_1.MediaType.Audio ?
            { mediaType: 'Audio' } :
            { mediaType: 'Video', size: { width: -1, height: -1 } };
        var items = probeData.split('|');
        items.forEach(function (item) {
            var pair = item.split('=');
            if (pair.length === 2) {
                var val = pair[1];
                switch (pair[0]) {
                    case 'AB':
                        metadata_2.audioBitrate = getHexNumber(val);
                        break;
                    case 'AC':
                        metadata_2.audioCodec = val;
                        break;
                    case 'ACH':
                        metadata_2.audioChannelCount = getNumber(val);
                        break;
                    case 'AD':
                        metadata_2.audioDuration = getHexNumber(val) / 1000;
                        break;
                    case 'AP':
                        metadata_2.audioPid = getNumber(val);
                        break;
                    case 'ASR':
                        metadata_2.audioSampleRate = getNumber(val);
                        break;
                    case 'CD':
                        metadata_2.colorDepth = getNumber(val);
                        break;
                    case 'D':
                        metadata_2.duration = getHexNumber(val) / 1000;
                        break;
                    case 'FT':
                        metadata_2.firstTimestamp = getNumber(val);
                        break;
                    case 'H':
                        metadata_2.size.height = getNumber(val);
                        break;
                    case 'IX':
                        metadata_2.indexed = val.length > 0 && val[0].toUpperCase() === 'Y';
                        break;
                    case 'PL':
                        metadata_2.packetLen = getNumber(val);
                        break;
                    case 'SL':
                        metadata_2.subtitleLanguage = val;
                        break;
                    case 'SP':
                        metadata_2.subtitlePid = getNumber(val);
                        break;
                    case 'TT':
                        metadata_2.transport = val;
                        break;
                    case 'VC':
                        metadata_2.videoCodec = val;
                        break;
                    case 'VD':
                        metadata_2.videoDuration = getHexNumber(val) / 1000;
                        break;
                    case 'VFR':
                        metadata_2.videoFrameRate = getFloatNumber(val);
                        break;
                    case 'VP':
                        metadata_2.videoPid = getNumber(val);
                        break;
                    case 'W':
                        metadata_2.size.width = getNumber(val);
                        break;
                }
            }
        });
        return metadata_2;
    }
    return {};
}
exports.bscConvertProbeDataToAvMetadata = bscConvertProbeDataToAvMetadata;
var BsProjectFragmentType = (function () {
    function BsProjectFragmentType() {
    }
    BsProjectFragmentType.None = 'None';
    BsProjectFragmentType.MediaStateCopySet = 'MediaStateCopySet';
    BsProjectFragmentType.CommandCopySet = 'CommandCopySet';
    BsProjectFragmentType.LiveTextItemCopySet = 'LiveTextItemCopySet';
    BsProjectFragmentType.UserVariableCopySet = 'UserVariableCopySet';
    BsProjectFragmentType.UserDefinedEventSet = 'UserDefinedEventSet';
    return BsProjectFragmentType;
}());
exports.BsProjectFragmentType = BsProjectFragmentType;
function bscCreateLocalAssetThumbnail(data, type, size, hash) {
    return {
        kind: 'local',
        type: type, data: data,
        size: isNil(size) ? null : size,
        hash: isNil(hash) ? null : hash.toLowerCase(),
    };
}
exports.bscCreateLocalAssetThumbnail = bscCreateLocalAssetThumbnail;
function bscCreateNetworkAssetThumbnail(url, size, hash) {
    return {
        kind: 'network',
        url: url,
        size: isNil(size) ? null : size,
        hash: isNil(hash) ? null : hash.toLowerCase(),
    };
}
exports.bscCreateNetworkAssetThumbnail = bscCreateNetworkAssetThumbnail;
function bscIsLocalAssetThumbnail(assetThumbnail) {
    return assetThumbnail.kind === 'local';
}
exports.bscIsLocalAssetThumbnail = bscIsLocalAssetThumbnail;
function bscIsAssetLocator(item) {
    return item != null
        && typeof item === 'object'
        && item.hasOwnProperty('name')
        && item.hasOwnProperty('assetType')
        && item.hasOwnProperty('location');
}
exports.bscIsAssetLocator = bscIsAssetLocator;
function bscIsAssetItem(item) {
    return bscIsAssetLocator(item) && item.hasOwnProperty('locator');
}
exports.bscIsAssetItem = bscIsAssetItem;
function bscAssetItemIsBsnDataFeed(item) {
    return item.hasOwnProperty('assetType')
        && (item.assetType === AssetType.BSNDataFeed
            || item.assetType === AssetType.BSNMediaFeed
            || item.assetType === AssetType.BSNDynamicPlaylist
            || item.assetType === AssetType.BSNTaggedPlaylist);
}
exports.bscAssetItemIsBsnDataFeed = bscAssetItemIsBsnDataFeed;
function bscAssetItemFromAssetLocator(assetLocator) {
    var assetItem = __assign(__assign({ id: exports.BsAssetIdNone }, assetLocator), { locator: bscGenerateAssetLocatorKey(assetLocator) });
    if (assetItem.assetType === AssetType.Content) {
        assetItem.mediaType = bscGetFileMediaType(assetItem.name);
    }
    return assetItem;
}
exports.bscAssetItemFromAssetLocator = bscAssetItemFromAssetLocator;
function bscAssetLocatorFromAssetItem(assetItem) {
    var name = assetItem.name, path = assetItem.path, location = assetItem.location, assetType = assetItem.assetType, childAssetType = assetItem.childAssetType, networkId = assetItem.networkId, scope = assetItem.scope, origin = assetItem.origin;
    var locator = { name: name, path: path, location: location, assetType: assetType, networkId: networkId, scope: scope };
    if (!isNil(childAssetType)) {
        locator.childAssetType = childAssetType;
    }
    if (!isNil(origin)) {
        locator.origin = origin;
    }
    return locator;
}
exports.bscAssetLocatorFromAssetItem = bscAssetLocatorFromAssetItem;
function bscAssetLocatorForBsnAsset(assetType, bsnId, network, name, path, origin) {
    if (network === void 0) { network = ''; }
    if (name === void 0) { name = ''; }
    if (path === void 0) { path = ''; }
    var locator = {
        name: isNil(name) ? '' : name,
        path: isNil(path) ? '' : path,
        location: AssetLocation.Bsn,
        assetType: assetType,
        networkId: bsnId,
        scope: isNil(network) ? '' : network,
    };
    if (!isNil(origin)) {
        locator.origin = origin;
    }
    return locator;
}
exports.bscAssetLocatorForBsnAsset = bscAssetLocatorForBsnAsset;
function bscGetAssetName(locator) {
    if (locator.location === AssetLocation.Bsn && locator.assetType !== AssetType.Content) {
        return locator.name;
    }
    return isomorphic_path_1.default.basename(locator.name, isomorphic_path_1.default.extname(locator.name));
}
exports.bscGetAssetName = bscGetAssetName;
function bscGetAssetExtension(locator) {
    if (locator.location === AssetLocation.Local || locator.assetType === AssetType.Content) {
        return isomorphic_path_1.default.extname(locator.name);
    }
    return '';
}
exports.bscGetAssetExtension = bscGetAssetExtension;
var leadingSep = function (path, assetLocation) {
    var sep = isomorphic_path_1.default.sep;
    if (assetLocation === AssetLocation.Bsn || assetLocation === AssetLocation.Ftp) {
        sep = isomorphic_path_1.default.posix.sep;
    }
    return path.charAt(0) === sep ? '' : sep;
};
var trailingSep = function (path, assetLocation) {
    var sep = isomorphic_path_1.default.sep;
    if (assetLocation === AssetLocation.Bsn || assetLocation === AssetLocation.Ftp) {
        sep = isomorphic_path_1.default.posix.sep;
    }
    return !path || path.charAt(path.length - 1) === sep ? '' : sep;
};
function bscGetAssetFullPath(assetSpec) {
    if (assetSpec.location === AssetLocation.Local) {
        return isomorphic_path_1.default.join(assetSpec.path, assetSpec.name);
    }
    return assetSpec.path + trailingSep(assetSpec.path, assetSpec.location) + assetSpec.name;
}
exports.bscGetAssetFullPath = bscGetAssetFullPath;
function bscAssetLocatorForLocalAsset(assetType, fullPath, scope, origin) {
    if (scope === void 0) { scope = ''; }
    var dirName = isomorphic_path_1.default.dirname(fullPath);
    var locator = {
        name: isomorphic_path_1.default.basename(fullPath),
        path: dirName + trailingSep(dirName),
        location: AssetLocation.Local,
        assetType: assetType,
        networkId: 0,
        scope: isNil(scope) ? '' : scope,
    };
    if (!isNil(origin)) {
        locator.origin = origin;
    }
    return locator;
}
exports.bscAssetLocatorForLocalAsset = bscAssetLocatorForLocalAsset;
function bscGetAssetSpecification(location, assetType, path, fileName) {
    var dirName = isNil(fileName) ? isomorphic_path_1.default.dirname(path) : path;
    return {
        name: isNil(fileName) ? isomorphic_path_1.default.basename(path) : fileName,
        path: dirName + trailingSep(dirName, location),
        location: location,
        assetType: assetType,
    };
}
exports.bscGetAssetSpecification = bscGetAssetSpecification;
function bscAssetItemFromBasicAssetInfo(assetType, fileName, fileDirPath, bsnId, mediaType, scope, origin) {
    if (fileDirPath === void 0) { fileDirPath = null; }
    if (bsnId === void 0) { bsnId = 0; }
    if (mediaType === void 0) { mediaType = null; }
    if (scope === void 0) { scope = ''; }
    var assetLocator;
    if (!fileDirPath) {
        fileDirPath = isomorphic_path_1.default.sep;
    }
    if (isNil(scope)) {
        scope = '';
    }
    if (bsnId) {
        assetLocator = bscAssetLocatorForBsnAsset(assetType, bsnId, scope);
        assetLocator.name = fileName;
        assetLocator.path = fileDirPath;
    }
    else if (fileName) {
        var fullPath = isomorphic_path_1.default.join(fileDirPath, fileName);
        assetLocator = bscAssetLocatorForLocalAsset(assetType, fullPath, scope);
    }
    if (assetLocator) {
        if (origin) {
            assetLocator.origin = origin;
        }
        var assetItem = bscAssetItemFromAssetLocator(assetLocator);
        if (assetType === AssetType.Content) {
            assetItem.mediaType = mediaType ? mediaType : bscGetFileMediaType(assetItem.name);
        }
        return assetItem;
    }
    return null;
}
exports.bscAssetItemFromBasicAssetInfo = bscAssetItemFromBasicAssetInfo;
function bscGenerateAssetLocatorKey(item) {
    switch (item.location) {
        case AssetLocation.Local:
        default:
            if (!isUndefined(item.path) && item.name) {
                return 'file://' + leadingSep(item.path) + item.path + trailingSep(item.path) + item.name;
            }
            break;
        case AssetLocation.Bsn:
            if (!isNil(item.assetType)) {
                return bscGetBsnAssetLocatorKey(item.networkId, item.assetType, item.name, item.path);
            }
            break;
        case AssetLocation.Ftp:
            if (!isNil(item.assetType) && !isNil(item.scope)) {
                return bscGetFtpAssetLocatorKey(item.scope, item.path, item.name);
            }
            break;
        case AssetLocation.Blob:
            if (!isNil(item.name)) {
                var key = 'blob://' + item.name + '/';
                if (bscIsAssetItem(item)) {
                    if (!isNil(item.fileSize)) {
                        key = key + item.fileSize;
                    }
                    else {
                        key = key + '0';
                    }
                    if (!isNil(item.lastModifiedDate)) {
                        key = key + '/' + item.lastModifiedDate.toISOString();
                    }
                }
                return key;
            }
    }
    return '';
}
exports.bscGenerateAssetLocatorKey = bscGenerateAssetLocatorKey;
function bscGetLocalAssetLocatorKey(fullPath) {
    return fullPath ? 'file://' + leadingSep(fullPath) + fullPath : '';
}
exports.bscGetLocalAssetLocatorKey = bscGetLocalAssetLocatorKey;
function bscGetFtpAssetLocatorKey(hostname, path, name) {
    var parsedPath = isString(path) ? path : '';
    return 'ftp://' + hostname + leadingSep(parsedPath, AssetLocation.Ftp) + isomorphic_path_1.default.posix.join(path, name);
}
exports.bscGetFtpAssetLocatorKey = bscGetFtpAssetLocatorKey;
function bscGetBsnAssetLocatorKey(bsnId, assetType, name, path) {
    if (bsnId > 0) {
        return 'bsn://' + assetType + '/' + bsnId;
    }
    else if (bsnId < 0 && name) {
        var key = 'bsn://' + name;
        if (path) {
            key = key + leadingSep(path, AssetLocation.Bsn) + path;
        }
        return key;
    }
    return '';
}
exports.bscGetBsnAssetLocatorKey = bscGetBsnAssetLocatorKey;
var NullAssetBaseName = '__null__';
function bscGetNullAssetItem(assetType, assetLocation, mediaType) {
    if (assetLocation === void 0) { assetLocation = AssetLocation.Local; }
    var nullAssetItem = {
        id: exports.BsAssetIdNone,
        name: NullAssetBaseName + assetType,
        path: '',
        location: assetLocation,
        assetType: assetType,
        networkId: -1,
        scope: '',
        locator: '',
    };
    if (assetType === AssetType.Content && mediaType) {
        nullAssetItem.name = NullAssetBaseName + mediaType;
        nullAssetItem.mediaType = mediaType;
    }
    return nullAssetItem;
}
exports.bscGetNullAssetItem = bscGetNullAssetItem;
function bscIsNullAssetItem(assetItem) {
    return bscIsAssetItem(assetItem)
        && assetItem.name.substr(0, NullAssetBaseName.length) === NullAssetBaseName
        && assetItem.networkId === -1;
}
exports.bscIsNullAssetItem = bscIsNullAssetItem;
var DefaultAssetBaseName = '__default__';
function bscGetDefaultAssetItem(assetType, assetLocation, mediaType, name, path, scope) {
    if (assetLocation === void 0) { assetLocation = AssetLocation.Local; }
    var defaultAssetItem = {
        id: exports.BsAssetIdNone,
        name: DefaultAssetBaseName + assetType,
        path: path ? path : '',
        location: assetLocation,
        assetType: assetType,
        networkId: -1,
        scope: scope ? scope : '',
        locator: '',
    };
    if (assetType === AssetType.Content && mediaType) {
        defaultAssetItem.name = DefaultAssetBaseName + mediaType;
        defaultAssetItem.mediaType = mediaType;
    }
    if (name) {
        defaultAssetItem.name = defaultAssetItem.name + '_' + name;
    }
    defaultAssetItem.locator = bscGenerateAssetLocatorKey(defaultAssetItem);
    return defaultAssetItem;
}
exports.bscGetDefaultAssetItem = bscGetDefaultAssetItem;
function bscIsDefaultAssetItem(assetItem) {
    return bscIsAssetItem(assetItem)
        && assetItem.name.substr(0, DefaultAssetBaseName.length) === DefaultAssetBaseName
        && assetItem.networkId === -1;
}
exports.bscIsDefaultAssetItem = bscIsDefaultAssetItem;
exports.imageFileSuffixes = new Set(['jpg', 'jpeg', 'png', 'bmp']);
exports.videoFileSuffixes = new Set(['mov', 'mp4', 'mpg', 'ts', 'vob', 'wmv', 'm2ts', 'mkv']);
exports.audioFileSuffixes = new Set(['mp3', 'wav', 'ogg', 'flac', 'm4a', 'aac', 'ac3', 'eac3', 'ec3']);
exports.textFileSuffixes = new Set(['txt']);
function bscGetFileExt(pathOrFileName) {
    var result = pathOrFileName.match(/\.([A-Z0-9]+)$/i);
    return result ? result[1].toLowerCase() : '';
}
function bscGetFileMediaType(pathOrFileName) {
    if (pathOrFileName) {
        var ext = bscGetFileExt(pathOrFileName);
        if (ext) {
            if (exports.imageFileSuffixes.has(ext)) {
                return metadata_1.MediaType.Image;
            }
            else if (exports.videoFileSuffixes.has(ext)) {
                return metadata_1.MediaType.Video;
            }
            else if (exports.audioFileSuffixes.has(ext)) {
                return metadata_1.MediaType.Audio;
            }
            else if (exports.textFileSuffixes.has(ext)) {
                return metadata_1.MediaType.Text;
            }
            else if (exports.fontFileSuffixes.has(ext)) {
                return metadata_1.MediaType.Font;
            }
            else if (exports.styleSheetFileSuffixes.has(ext)) {
                return metadata_1.MediaType.Css;
            }
        }
    }
    return metadata_1.MediaType.Auxiliary;
}
exports.bscGetFileMediaType = bscGetFileMediaType;
function bscIsMediaTypePlayable(mediaType) {
    return !isNil(mediaType) && metadata_1.PlayableMediaTypes.has(mediaType);
}
exports.bscIsMediaTypePlayable = bscIsMediaTypePlayable;
function bscIsAssetItemPlayableContent(assetItem) {
    return assetItem.assetType === AssetType.Content && bscIsMediaTypePlayable(assetItem.mediaType);
}
exports.bscIsAssetItemPlayableContent = bscIsAssetItemPlayableContent;
function bscStripFileExtension(pathOrFileName) {
    return pathOrFileName.replace(/\.[^/.]+$/, '');
}
exports.bscStripFileExtension = bscStripFileExtension;
var MediaStateCopySetExt = 'bpfx-ms';
var LiveTextItemCopySetExt = 'bpfx-lt';
var CommandCopySetExt = 'bpfx-cm';
var UserVariableCopySetExt = 'bpfx-uv';
var UserDefinedEventSetExt = 'bpfx-ue';
function bscGetFileProjectFragmentType(pathOrFileName) {
    var ext = bscGetFileExt(pathOrFileName).toLowerCase();
    switch (ext) {
        case MediaStateCopySetExt: return BsProjectFragmentType.MediaStateCopySet;
        case LiveTextItemCopySetExt: return BsProjectFragmentType.LiveTextItemCopySet;
        case CommandCopySetExt: return BsProjectFragmentType.CommandCopySet;
        case UserVariableCopySetExt: return BsProjectFragmentType.UserVariableCopySet;
        case UserDefinedEventSetExt: return BsProjectFragmentType.UserDefinedEventSet;
    }
    return BsProjectFragmentType.None;
}
exports.bscGetFileProjectFragmentType = bscGetFileProjectFragmentType;
function bscGetFileProjectFragmentExtension(type) {
    switch (type) {
        case BsProjectFragmentType.MediaStateCopySet: return MediaStateCopySetExt;
        case BsProjectFragmentType.LiveTextItemCopySet: return LiveTextItemCopySetExt;
        case BsProjectFragmentType.CommandCopySet: return CommandCopySetExt;
        case BsProjectFragmentType.UserVariableCopySet: return UserVariableCopySetExt;
        case BsProjectFragmentType.UserDefinedEventSet: return UserDefinedEventSetExt;
    }
    return '';
}
exports.bscGetFileProjectFragmentExtension = bscGetFileProjectFragmentExtension;
exports.projectFileSuffixes = new Set(['bpfx']);
exports.projectFileFragmentSuffixes = new Set([
    MediaStateCopySetExt, LiveTextItemCopySetExt, CommandCopySetExt, UserVariableCopySetExt, UserDefinedEventSetExt
]);
exports.scheduleFileSuffixes = new Set(['bpsx']);
exports.projectBpfFileSuffixes = new Set(['bpf']);
exports.htmlSiteFileSuffixes = new Set(['html', 'htm', 'js']);
exports.fontFileSuffixes = new Set(['ttf', 'otf']);
exports.styleSheetFileSuffixes = new Set(['css']);
function bscGetAssetItemFileTypeInfo(assetItem) {
    var typeInfo = {
        assetType: assetItem.assetType,
        mediaType: isNil(assetItem.mediaType) ? metadata_1.MediaType.Auxiliary : assetItem.mediaType,
    };
    if (assetItem.assetType === AssetType.ProjectFragment) {
        typeInfo.projectFragmentType = bscGetFileProjectFragmentType(assetItem.name);
    }
    return typeInfo;
}
exports.bscGetAssetItemFileTypeInfo = bscGetAssetItemFileTypeInfo;
exports.BsAllFileBasedAssetTypes = [
    AssetType.Content, AssetType.Project, AssetType.ProjectBpf, AssetType.Schedule,
    AssetType.HtmlSite, AssetType.BrightScript,
];
Object.freeze(exports.BsAllFileBasedAssetTypes);
function bscGetBscFileTypeInfo(pathOrFileName) {
    var typeInfo = {
        assetType: AssetType.Content,
        mediaType: bscGetFileMediaType(pathOrFileName),
    };
    if (typeInfo.mediaType === metadata_1.MediaType.Auxiliary) {
        var ext = bscGetFileExt(pathOrFileName);
        if (ext === 'bpfx') {
            typeInfo.assetType = AssetType.Project;
        }
        else if (ext === 'bpf') {
            typeInfo.assetType = AssetType.ProjectBpf;
        }
        else if (ext === 'bpsx') {
            typeInfo.assetType = AssetType.Schedule;
        }
        else if (exports.htmlSiteFileSuffixes.has(ext)) {
            typeInfo.assetType = AssetType.HtmlSite;
        }
        else if (ext === 'brs') {
            typeInfo.assetType = AssetType.BrightScript;
        }
        else if (exports.projectFileFragmentSuffixes.has(ext)) {
            typeInfo.assetType = AssetType.ProjectFragment;
            typeInfo.projectFragmentType = bscGetFileProjectFragmentType(pathOrFileName);
        }
        else {
            typeInfo.assetType = AssetType.Content;
        }
    }
    return typeInfo;
}
exports.bscGetBscFileTypeInfo = bscGetBscFileTypeInfo;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IrRemoteModel = void 0;
var IrRemoteModel = (function () {
    function IrRemoteModel() {
    }
    IrRemoteModel.Unknown = 'Unknown';
    IrRemoteModel.RC1001 = 'RC-1001';
    IrRemoteModel.RC1002 = 'RC-1002';
    return IrRemoteModel;
}());
exports.IrRemoteModel = IrRemoteModel;
Object.freeze(IrRemoteModel);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.bscPlayerModelToPlayerMachineName = exports.bscPlayerModelHasFeature = exports.ModelFeature = void 0;
var playerModel_1 = __webpack_require__(3);
var ModelFeature = (function () {
    function ModelFeature() {
    }
    ModelFeature.Gpio = 'gpio';
    ModelFeature.Networking = 'net';
    ModelFeature.SingleAnalogVolumeLimitation = '1audVol';
    ModelFeature.Hdmi = 'hdmi';
    ModelFeature.HdmiEArc = 'hdmiEArc';
    ModelFeature.VideoStreaming = 'vstrm';
    ModelFeature.AudioStreaming = 'astrm';
    ModelFeature.AudioMixer = 'amix';
    ModelFeature.Audio = 'aud';
    ModelFeature.EnhancedAudio = 'enhaud';
    ModelFeature.Images = 'img';
    ModelFeature.Video = 'vid';
    ModelFeature.Clock = 'clk';
    ModelFeature.GraphicsZOrdering = 'grfZ';
    ModelFeature.VideoZOrdering = 'vidZ';
    ModelFeature.Html5 = 'html5';
    ModelFeature.Html5Camera = 'htmlCam';
    ModelFeature.AudioOutputControl = 'aoctl';
    ModelFeature.Spdif = 'spdif';
    ModelFeature.IrOut = 'ir';
    ModelFeature.Usb = 'usb';
    ModelFeature.Bp = 'bp';
    ModelFeature.Serial = 'ser';
    ModelFeature.Blc400 = 'blc400';
    ModelFeature.HdmiIn = 'hdmiIn';
    ModelFeature.EnhancedSynchronization = 'enhsync';
    ModelFeature.Pronto = 'pronto';
    ModelFeature.ScrollingTicker = 'scrlTic';
    ModelFeature.TenBitColor = '10bit';
    ModelFeature.FourKImages = '4kimg';
    ModelFeature.FullResGraphics = 'fullResGfx';
    ModelFeature.FullResGraphicsHiFR = 'fullResGfxHiFR';
    ModelFeature.DualDecoder = '2dec';
    ModelFeature.MosaicMode = 'mosaic';
    ModelFeature.Bluetooth = 'btle';
    ModelFeature.AudioConfiguration = 'acnf';
    ModelFeature.DedicatedIr = 'dedir';
    ModelFeature.DolbyVision = 'dolby';
    ModelFeature.UsbTap = 'usbTap';
    ModelFeature.ButtonsByGpio = 'buttonsByGpio';
    ModelFeature.LightsByGpio = 'lightsByGpio';
    ModelFeature.BroadcomSupport = 'BroadcomSupport';
    ModelFeature.RfTuner = 'tun';
    ModelFeature.AudioDetect = 'auddet';
    ModelFeature.ExternalAudioDetect = 'extAudDet';
    ModelFeature.SingleOnBoardAnalogChannel = '1aud';
    ModelFeature.ThreeOnBoardAnalogChannels = '3aud';
    ModelFeature.UsbAudio = 'usbAud';
    ModelFeature.PumaUsbAudio = 'pumaAud';
    ModelFeature.BoseUsb = 'boseUsb';
    ModelFeature.AudioIn = 'audIn';
    ModelFeature.AudioDownMix = 'audDMix';
    return ModelFeature;
}());
exports.ModelFeature = ModelFeature;
Object.freeze(ModelFeature);
var ImpalaFeatureArray = [
    ModelFeature.Gpio, ModelFeature.Networking, ModelFeature.Hdmi,
    ModelFeature.SingleAnalogVolumeLimitation, ModelFeature.VideoStreaming, ModelFeature.AudioStreaming,
    ModelFeature.AudioMixer, ModelFeature.Images, ModelFeature.Video, ModelFeature.Audio, ModelFeature.Clock,
    ModelFeature.GraphicsZOrdering, ModelFeature.VideoZOrdering, ModelFeature.Html5, ModelFeature.Html5Camera,
    ModelFeature.AudioOutputControl, ModelFeature.Spdif, ModelFeature.IrOut,
    ModelFeature.EnhancedSynchronization, ModelFeature.Pronto, ModelFeature.ScrollingTicker, ModelFeature.TenBitColor,
    ModelFeature.FourKImages, ModelFeature.MosaicMode, ModelFeature.Bluetooth, ModelFeature.AudioConfiguration,
    ModelFeature.DedicatedIr, ModelFeature.BroadcomSupport, ModelFeature.EnhancedAudio,
];
var ImpalaEnterpriseFeatureArray = __spreadArrays(ImpalaFeatureArray, [ModelFeature.Serial, ModelFeature.Usb,
    ModelFeature.UsbTap, ModelFeature.Bp, ModelFeature.Blc400]);
var XD233Features = new Set(ImpalaFeatureArray);
var XT243Features = new Set(__spreadArrays(ImpalaFeatureArray, [ModelFeature.FullResGraphics, ModelFeature.DualDecoder]));
var XD1033Features = new Set(ImpalaEnterpriseFeatureArray);
var XT1143Features = new Set(__spreadArrays(ImpalaEnterpriseFeatureArray, [ModelFeature.HdmiIn, ModelFeature.FullResGraphics, ModelFeature.DualDecoder]));
var MalibuFeatureArray = __spreadArrays(ImpalaFeatureArray, [ModelFeature.DolbyVision]);
var MalibuEnterpriseFeatureArray = __spreadArrays(ImpalaEnterpriseFeatureArray, [ModelFeature.DolbyVision]);
var XD234Features = new Set(MalibuFeatureArray);
var XT244Features = new Set(__spreadArrays(MalibuFeatureArray, [ModelFeature.FullResGraphics,
    ModelFeature.FullResGraphicsHiFR, ModelFeature.DualDecoder]));
var XD1034Features = new Set(MalibuEnterpriseFeatureArray);
var XT1144Features = new Set(__spreadArrays(MalibuEnterpriseFeatureArray, [ModelFeature.HdmiIn, ModelFeature.FullResGraphics, ModelFeature.FullResGraphicsHiFR, ModelFeature.DualDecoder]));
var PaganiFeatureArray = [
    ModelFeature.Gpio, ModelFeature.Networking, ModelFeature.Hdmi,
    ModelFeature.SingleAnalogVolumeLimitation, ModelFeature.VideoStreaming, ModelFeature.AudioStreaming,
    ModelFeature.AudioMixer, ModelFeature.Images, ModelFeature.Video, ModelFeature.Audio, ModelFeature.Clock,
    ModelFeature.GraphicsZOrdering, ModelFeature.Html5, ModelFeature.AudioOutputControl,
    ModelFeature.Serial, ModelFeature.Usb, ModelFeature.UsbTap, ModelFeature.Bp, ModelFeature.Blc400,
    ModelFeature.EnhancedSynchronization, ModelFeature.Pronto, ModelFeature.ScrollingTicker, ModelFeature.TenBitColor,
    ModelFeature.Bluetooth, ModelFeature.AudioConfiguration, ModelFeature.BroadcomSupport, ModelFeature.EnhancedAudio,
];
var HD224Features = new Set(__spreadArrays(PaganiFeatureArray, [ModelFeature.Html5Camera, ModelFeature.MosaicMode, ModelFeature.Spdif, ModelFeature.DedicatedIr]));
var HS144Features = HD224Features;
var HD1024Features = HD224Features;
var HS124Features = new Set(__spreadArrays(PaganiFeatureArray, [ModelFeature.MosaicMode, ModelFeature.Spdif]));
var LS424Features = new Set(__spreadArrays(PaganiFeatureArray, [ModelFeature.Html5Camera]));
var PanteraFeatureArray = [
    ModelFeature.Gpio, ModelFeature.Networking, ModelFeature.Hdmi,
    ModelFeature.SingleAnalogVolumeLimitation, ModelFeature.VideoStreaming, ModelFeature.AudioStreaming,
    ModelFeature.AudioMixer, ModelFeature.Images, ModelFeature.Video, ModelFeature.Audio, ModelFeature.Clock,
    ModelFeature.Html5, ModelFeature.AudioOutputControl,
    ModelFeature.EnhancedSynchronization, ModelFeature.ScrollingTicker, ModelFeature.TenBitColor,
    ModelFeature.Bluetooth, ModelFeature.AudioConfiguration, ModelFeature.BroadcomSupport, ModelFeature.EnhancedAudio,
];
var PanteraAdvancedFeatureArray = [
    ModelFeature.GraphicsZOrdering, ModelFeature.MosaicMode, ModelFeature.Spdif,
];
var PanteraIoFeatureArray = [
    ModelFeature.Serial, ModelFeature.Bp, ModelFeature.Usb, ModelFeature.UsbTap, ModelFeature.Blc400, ModelFeature.Pronto,
];
var HD223Features = new Set(__spreadArrays(PanteraFeatureArray, PanteraAdvancedFeatureArray, [ModelFeature.Html5Camera]));
var HD1023Features = new Set(__spreadArrays(PanteraFeatureArray, PanteraAdvancedFeatureArray, PanteraIoFeatureArray, [ModelFeature.Html5Camera]));
var HS123Features = new Set(__spreadArrays(PanteraFeatureArray, PanteraAdvancedFeatureArray, PanteraIoFeatureArray));
var HO523Features = new Set(__spreadArrays(PanteraFeatureArray, PanteraAdvancedFeatureArray, PanteraIoFeatureArray, [ModelFeature.Html5Camera, ModelFeature.DedicatedIr]));
var LS423Features = new Set(__spreadArrays(PanteraFeatureArray, PanteraIoFeatureArray, [ModelFeature.Html5Camera]));
var TigerFeatureArray = [
    ModelFeature.Gpio, ModelFeature.Networking, ModelFeature.Hdmi,
    ModelFeature.SingleAnalogVolumeLimitation, ModelFeature.VideoStreaming, ModelFeature.AudioStreaming,
    ModelFeature.AudioMixer, ModelFeature.Images, ModelFeature.Video, ModelFeature.Audio, ModelFeature.Clock,
    ModelFeature.GraphicsZOrdering, ModelFeature.VideoZOrdering, ModelFeature.Html5, ModelFeature.Html5Camera,
    ModelFeature.AudioOutputControl, ModelFeature.IrOut,
    ModelFeature.EnhancedSynchronization, ModelFeature.Pronto, ModelFeature.ScrollingTicker, ModelFeature.TenBitColor,
    ModelFeature.FourKImages, ModelFeature.MosaicMode, ModelFeature.DualDecoder, ModelFeature.Bluetooth,
    ModelFeature.AudioConfiguration, ModelFeature.BroadcomSupport, ModelFeature.EnhancedAudio,
];
var FK242Features = new Set(TigerFeatureArray);
var FK1042Features = new Set(__spreadArrays(TigerFeatureArray, [ModelFeature.Serial, ModelFeature.Bp, ModelFeature.Usb, ModelFeature.Blc400, ModelFeature.Spdif]));
var FK1142Features = new Set(__spreadArrays(TigerFeatureArray, [ModelFeature.Serial, ModelFeature.Bp, ModelFeature.Usb, ModelFeature.Blc400, ModelFeature.Spdif,
    ModelFeature.HdmiIn]));
var SebringFeatureArray = [
    ModelFeature.Networking,
    ModelFeature.SingleAnalogVolumeLimitation, ModelFeature.AudioStreaming,
    ModelFeature.Audio,
    ModelFeature.AudioOutputControl,
    ModelFeature.EnhancedSynchronization,
    ModelFeature.Usb,
    ModelFeature.UsbTap,
];
var AU325Features = new Set(__spreadArrays(SebringFeatureArray, [ModelFeature.ButtonsByGpio, ModelFeature.LightsByGpio]));
var AU335Features = new Set(__spreadArrays(SebringFeatureArray, [ModelFeature.Bp, ModelFeature.HdmiEArc, ModelFeature.Gpio, ModelFeature.Serial]));
var LynxFeatureArray = [
    ModelFeature.Gpio, ModelFeature.Networking, ModelFeature.Hdmi,
    ModelFeature.SingleAnalogVolumeLimitation, ModelFeature.VideoStreaming, ModelFeature.AudioStreaming,
    ModelFeature.AudioMixer, ModelFeature.Images, ModelFeature.Video, ModelFeature.Audio, ModelFeature.Clock,
    ModelFeature.GraphicsZOrdering, ModelFeature.VideoZOrdering, ModelFeature.Html5, ModelFeature.AudioOutputControl,
    ModelFeature.IrOut,
    ModelFeature.EnhancedSynchronization, ModelFeature.Pronto, ModelFeature.ScrollingTicker,
    ModelFeature.MosaicMode, ModelFeature.AudioConfiguration, ModelFeature.BroadcomSupport, ModelFeature.EnhancedAudio,
];
var XD232Features = new Set(LynxFeatureArray);
var XD1032Features = new Set(__spreadArrays(LynxFeatureArray, [ModelFeature.Serial, ModelFeature.Bp, ModelFeature.Usb, ModelFeature.Blc400, ModelFeature.Spdif]));
var XD1132Features = new Set(__spreadArrays(LynxFeatureArray, [ModelFeature.Serial, ModelFeature.Bp, ModelFeature.Usb, ModelFeature.Blc400, ModelFeature.Spdif,
    ModelFeature.HdmiIn]));
var BaseBobcatFeatureArray = [
    ModelFeature.Gpio, ModelFeature.Networking, ModelFeature.Hdmi,
    ModelFeature.VideoStreaming, ModelFeature.AudioStreaming,
    ModelFeature.AudioMixer, ModelFeature.Images, ModelFeature.Video, ModelFeature.Audio, ModelFeature.Clock,
    ModelFeature.GraphicsZOrdering, ModelFeature.Html5, ModelFeature.AudioOutputControl,
    ModelFeature.EnhancedSynchronization, ModelFeature.MosaicMode, ModelFeature.BroadcomSupport,
    ModelFeature.EnhancedAudio,
];
var BobcatFeatureArray = __spreadArrays(BaseBobcatFeatureArray, [ModelFeature.ScrollingTicker, ModelFeature.SingleAnalogVolumeLimitation, ModelFeature.AudioConfiguration]);
var BoseBobcatFeatureArray = __spreadArrays(BaseBobcatFeatureArray, [ModelFeature.Serial, ModelFeature.Bp, ModelFeature.Usb, ModelFeature.Blc400, ModelFeature.Pronto,
    ModelFeature.IrOut, ModelFeature.Spdif, ModelFeature.BoseUsb, ModelFeature.AudioIn, ModelFeature.PumaUsbAudio,
    ModelFeature.AudioDetect, ModelFeature.ExternalAudioDetect]);
var HD222Features = new Set(BobcatFeatureArray);
var HD1022Features = new Set(__spreadArrays(BobcatFeatureArray, [ModelFeature.Serial, ModelFeature.Bp, ModelFeature.Usb, ModelFeature.Blc400, ModelFeature.Pronto]));
var HD922Features = new Set(BoseBobcatFeatureArray);
var HD972Features = new Set(__spreadArrays(BoseBobcatFeatureArray, [ModelFeature.ThreeOnBoardAnalogChannels]));
var CheetahFeatureArray = [
    ModelFeature.Networking, ModelFeature.Hdmi,
    ModelFeature.SingleAnalogVolumeLimitation, ModelFeature.VideoStreaming, ModelFeature.AudioStreaming,
    ModelFeature.AudioMixer, ModelFeature.Images, ModelFeature.Video, ModelFeature.Audio, ModelFeature.Clock,
    ModelFeature.GraphicsZOrdering, ModelFeature.VideoZOrdering, ModelFeature.Html5, ModelFeature.AudioOutputControl,
    ModelFeature.IrOut, ModelFeature.EnhancedSynchronization, ModelFeature.Pronto, ModelFeature.ScrollingTicker,
    ModelFeature.BroadcomSupport, ModelFeature.EnhancedAudio,
];
var XD230Features = new Set(CheetahFeatureArray);
var XD1030Features = new Set(__spreadArrays(CheetahFeatureArray, [ModelFeature.Gpio, ModelFeature.Serial, ModelFeature.Bp, ModelFeature.Usb, ModelFeature.Blc400,
    ModelFeature.Spdif]));
var XD1230Features = new Set(__spreadArrays(CheetahFeatureArray, [ModelFeature.Gpio, ModelFeature.Serial, ModelFeature.Bp, ModelFeature.Usb, ModelFeature.Blc400,
    ModelFeature.Spdif, ModelFeature.RfTuner, ModelFeature.HdmiIn]));
var BasePantherFeatureArray = [
    ModelFeature.SingleAnalogVolumeLimitation,
    ModelFeature.AudioMixer, ModelFeature.Images, ModelFeature.Audio, ModelFeature.Clock,
    ModelFeature.AudioOutputControl, ModelFeature.BroadcomSupport, ModelFeature.EnhancedAudio,
];
var PantherFeatureArray = __spreadArrays(BasePantherFeatureArray, [ModelFeature.Hdmi, ModelFeature.Networking, ModelFeature.Video,
    ModelFeature.VideoStreaming, ModelFeature.AudioStreaming,
    ModelFeature.EnhancedSynchronization,]);
var HD120Features = new Set(__spreadArrays(BasePantherFeatureArray, [ModelFeature.Gpio, ModelFeature.Hdmi, ModelFeature.Video]));
var HD220Features = new Set(PantherFeatureArray);
var HD1020Features = new Set(__spreadArrays(PantherFeatureArray, [ModelFeature.Gpio, ModelFeature.Serial, ModelFeature.Bp, ModelFeature.Usb, ModelFeature.Blc400,
    ModelFeature.Pronto]));
var LS322Features = new Set(__spreadArrays(BasePantherFeatureArray, [ModelFeature.Gpio, ModelFeature.Networking, ModelFeature.AudioStreaming,
    ModelFeature.Bp, ModelFeature.Usb, ModelFeature.Blc400, ModelFeature.Spdif, ModelFeature.Pronto]));
var LS422Features = new Set(__spreadArrays(PantherFeatureArray, [ModelFeature.Gpio, ModelFeature.Bp, ModelFeature.Usb, ModelFeature.Blc400,
    ModelFeature.Spdif, ModelFeature.Pronto]));
var AU320Features = new Set([
    ModelFeature.Serial, ModelFeature.Networking, ModelFeature.Bp, ModelFeature.SingleAnalogVolumeLimitation,
    ModelFeature.AudioMixer, ModelFeature.AudioOutputControl, ModelFeature.AudioStreaming, ModelFeature.Usb,
    ModelFeature.Pronto
]);
var PumaFeatureArray = [
    ModelFeature.Gpio, ModelFeature.Serial, ModelFeature.Networking, ModelFeature.Hdmi, ModelFeature.Bp,
    ModelFeature.AudioStreaming, ModelFeature.Images, ModelFeature.Video, ModelFeature.Audio, ModelFeature.Clock,
    ModelFeature.Usb, ModelFeature.AudioOutputControl, ModelFeature.BoseUsb, ModelFeature.IrOut,
    ModelFeature.AudioIn, ModelFeature.PumaUsbAudio, ModelFeature.Blc400, ModelFeature.AudioDetect,
    ModelFeature.EnhancedSynchronization, ModelFeature.Pronto, ModelFeature.BroadcomSupport, ModelFeature.EnhancedAudio,
];
var HD917Features = new Set(PumaFeatureArray);
var A915Features = HD917Features;
var HD920Features = new Set(__spreadArrays(PumaFeatureArray, [ModelFeature.VideoStreaming, ModelFeature.Spdif, ModelFeature.ExternalAudioDetect]));
var HD970Features = new Set(__spreadArrays(PumaFeatureArray, [ModelFeature.VideoStreaming, ModelFeature.Spdif, ModelFeature.ExternalAudioDetect,
    ModelFeature.ThreeOnBoardAnalogChannels]));
var FeaturesByPlayerModel = (_a = {},
    _a[playerModel_1.PlayerModel.XD1034] = XD1034Features,
    _a[playerModel_1.PlayerModel.XD234] = XD234Features,
    _a[playerModel_1.PlayerModel.XT1144] = XT1144Features,
    _a[playerModel_1.PlayerModel.XT244] = XT244Features,
    _a[playerModel_1.PlayerModel.HD1024] = HD1024Features,
    _a[playerModel_1.PlayerModel.HD224] = HD224Features,
    _a[playerModel_1.PlayerModel.HS144] = HS144Features,
    _a[playerModel_1.PlayerModel.HS124] = HS124Features,
    _a[playerModel_1.PlayerModel.LS424] = LS424Features,
    _a[playerModel_1.PlayerModel.AU335] = AU335Features,
    _a[playerModel_1.PlayerModel.AU325] = AU325Features,
    _a[playerModel_1.PlayerModel.XD1033] = XD1033Features,
    _a[playerModel_1.PlayerModel.XD233] = XD233Features,
    _a[playerModel_1.PlayerModel.XT1143] = XT1143Features,
    _a[playerModel_1.PlayerModel.XT243] = XT243Features,
    _a[playerModel_1.PlayerModel.HD1023] = HD1023Features,
    _a[playerModel_1.PlayerModel.HD223] = HD223Features,
    _a[playerModel_1.PlayerModel.HS123] = HS123Features,
    _a[playerModel_1.PlayerModel.HO523] = HO523Features,
    _a[playerModel_1.PlayerModel.LS423] = LS423Features,
    _a[playerModel_1.PlayerModel.FK1142] = FK1142Features,
    _a[playerModel_1.PlayerModel.FK1042] = FK1042Features,
    _a[playerModel_1.PlayerModel.FK242] = FK242Features,
    _a[playerModel_1.PlayerModel.XD1132] = XD1132Features,
    _a[playerModel_1.PlayerModel.XD1032] = XD1032Features,
    _a[playerModel_1.PlayerModel.XD232] = XD232Features,
    _a[playerModel_1.PlayerModel.HD1022] = HD1022Features,
    _a[playerModel_1.PlayerModel.HD222] = HD222Features,
    _a[playerModel_1.PlayerModel.HD972] = HD972Features,
    _a[playerModel_1.PlayerModel.HD922] = HD922Features,
    _a[playerModel_1.PlayerModel.XD1230] = XD1230Features,
    _a[playerModel_1.PlayerModel.XD1030] = XD1030Features,
    _a[playerModel_1.PlayerModel.XD230] = XD230Features,
    _a[playerModel_1.PlayerModel.HD1020] = HD1020Features,
    _a[playerModel_1.PlayerModel.HD220] = HD220Features,
    _a[playerModel_1.PlayerModel.HD120] = HD120Features,
    _a[playerModel_1.PlayerModel.LS422] = LS422Features,
    _a[playerModel_1.PlayerModel.LS322] = LS322Features,
    _a[playerModel_1.PlayerModel.AU320] = AU320Features,
    _a[playerModel_1.PlayerModel.HD970] = HD970Features,
    _a[playerModel_1.PlayerModel.HD920] = HD920Features,
    _a[playerModel_1.PlayerModel.HD917] = HD917Features,
    _a[playerModel_1.PlayerModel.A915] = A915Features,
    _a);
function bscPlayerModelHasFeature(model, feature) {
    var featureSet = FeaturesByPlayerModel[model];
    if (featureSet) {
        return featureSet.has(feature);
    }
    return false;
}
exports.bscPlayerModelHasFeature = bscPlayerModelHasFeature;
function bscPlayerModelToPlayerMachineName(model) {
    var name = playerModel_1.bscPlayerModelToPlayerFamily(model);
    if (name === playerModel_1.PlayerFamily.Pagani) {
        if (playerModel_1.PaganiHDModels.has(model)) {
            name = name + ':' + playerModel_1.PlayerMachineNameSuffix.No4K;
        }
    }
    else if (name === playerModel_1.PlayerFamily.Malibu || name === playerModel_1.PlayerFamily.Impala) {
        if (!bscPlayerModelHasFeature(model, ModelFeature.DualDecoder)) {
            name = name + ':' + playerModel_1.PlayerMachineNameSuffix.SingleDecoder;
        }
    }
    return name.toUpperCase();
}
exports.bscPlayerModelToPlayerMachineName = bscPlayerModelToPlayerMachineName;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProbePlayableStatus = exports.ImagePlayableStatus = exports.DecoderName = exports.ProbeContentResolutionType = void 0;
var ProbeContentResolutionType = (function () {
    function ProbeContentResolutionType() {
    }
    ProbeContentResolutionType.NA = 'N/A';
    ProbeContentResolutionType.FK = '4K';
    ProbeContentResolutionType.HD = 'HD';
    ProbeContentResolutionType.SD = 'SD';
    ProbeContentResolutionType.CIF = 'CIF';
    ProbeContentResolutionType.QCIF = 'QCIF';
    return ProbeContentResolutionType;
}());
exports.ProbeContentResolutionType = ProbeContentResolutionType;
Object.freeze(ProbeContentResolutionType);
var DecoderName = (function () {
    function DecoderName() {
    }
    DecoderName.HD1 = 'HD1';
    DecoderName.HD2 = 'HD2';
    DecoderName.FK = '4K';
    DecoderName.FK2 = '4K2';
    return DecoderName;
}());
exports.DecoderName = DecoderName;
Object.freeze(DecoderName);
var ImagePlayableStatus = (function () {
    function ImagePlayableStatus() {
    }
    ImagePlayableStatus.playable = 'playable';
    ImagePlayableStatus.playableSeamlessly = 'playableSeamlessly';
    ImagePlayableStatus.noMedia = 'noMedia';
    ImagePlayableStatus.imageSizeExceeded = 'imageSizeExceeded';
    ImagePlayableStatus.imageSizeUnknown = 'imageSizeUnknown';
    ImagePlayableStatus.imageIsCmyk = 'imageIsCmyk';
    return ImagePlayableStatus;
}());
exports.ImagePlayableStatus = ImagePlayableStatus;
Object.freeze(ImagePlayableStatus);
var ProbePlayableStatus = (function () {
    function ProbePlayableStatus() {
    }
    ProbePlayableStatus.cpPlayable = 0;
    ProbePlayableStatus.cpPlayableSeamlessly = 1;
    ProbePlayableStatus.cpPlayableMax = 99;
    ProbePlayableStatus.cpProbString = 100;
    ProbePlayableStatus.cpContainer = 200;
    ProbePlayableStatus.cpNoMedia = 300;
    ProbePlayableStatus.cpAudioSampleRate = 400;
    ProbePlayableStatus.cpAudioType = 401;
    ProbePlayableStatus.cpAudioChannels = 402;
    ProbePlayableStatus.cpVideoType = 501;
    ProbePlayableStatus.cpVideoResolution = 502;
    ProbePlayableStatus.cpVideoH265 = 503;
    return ProbePlayableStatus;
}());
exports.ProbePlayableStatus = ProbePlayableStatus;
Object.freeze(ProbePlayableStatus);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsRectFull = exports.bscGetPercentageRectForWidthAndHeight = exports.bscGetPercentageRectForVideoMode = exports.bscGetAbsoluteRectForWidthAndHeight = exports.bscGetAbsoluteRectForVideoMode = exports.bscScaleAbsoluteRect = exports.bscCreateAbsoluteRect = exports.bscCreatePercentageRect = void 0;
var main_1 = __webpack_require__(9);
function bscCreatePercentageRect(x, y, width, height) {
    return { x: x, y: y, width: width, height: height, pct: true };
}
exports.bscCreatePercentageRect = bscCreatePercentageRect;
function bscCreateAbsoluteRect(x, y, width, height) {
    return { x: x, y: y, width: width, height: height, pct: false };
}
exports.bscCreateAbsoluteRect = bscCreateAbsoluteRect;
function bscScaleAbsoluteRect(rect, increase, scaleFactorX, scaleFactorY) {
    var doScale = function (value, scaleFactor) {
        return scaleFactor === 2 ? (increase ? value << 1 : value >> 1) :
            (scaleFactor === 4 ? (increase ? value << 2 : value >> 2) :
                (increase ? Math.round(value * scaleFactor) : Math.round(value / scaleFactor)));
    };
    var scaleY = scaleFactorY ? scaleFactorY : scaleFactorX;
    if (!rect.pct && scaleFactorX > 0) {
        return {
            x: doScale(rect.x, scaleFactorX),
            y: doScale(rect.y, scaleY),
            width: doScale(rect.width, scaleFactorX),
            height: doScale(rect.height, scaleY),
            pct: false,
        };
    }
    return rect;
}
exports.bscScaleAbsoluteRect = bscScaleAbsoluteRect;
function bscGetAbsoluteRectForVideoMode(rect, mode) {
    var _a = main_1.bscParseVideoModeComponents(mode), width = _a.width, height = _a.height;
    return bscGetAbsoluteRectForWidthAndHeight(rect, { width: width, height: height });
}
exports.bscGetAbsoluteRectForVideoMode = bscGetAbsoluteRectForVideoMode;
function bscGetAbsoluteRectForWidthAndHeight(rect, size) {
    var returnRect = rect;
    if (rect.pct) {
        returnRect = bscCreateAbsoluteRect(Math.round(rect.x * size.width / 100), Math.round(rect.y * size.height / 100), Math.round(rect.width * size.width / 100), Math.round(rect.height * size.height / 100));
    }
    return returnRect;
}
exports.bscGetAbsoluteRectForWidthAndHeight = bscGetAbsoluteRectForWidthAndHeight;
function bscGetPercentageRectForVideoMode(rect, mode) {
    var _a = main_1.bscParseVideoModeComponents(mode), width = _a.width, height = _a.height;
    return bscGetPercentageRectForWidthAndHeight(rect, { width: width, height: height });
}
exports.bscGetPercentageRectForVideoMode = bscGetPercentageRectForVideoMode;
function bscGetPercentageRectForWidthAndHeight(rect, size) {
    var returnRect = rect;
    if (!rect.pct) {
        if (!(size.width && size.height)) {
            returnRect = bscCreatePercentageRect(0, 0, 0, 0);
        }
        else {
            returnRect = bscCreatePercentageRect(Math.round(rect.x * 10000 / size.width) / 100, Math.round(rect.y * 10000 / size.height) / 100, Math.round(rect.width * 10000 / size.width) / 100, Math.round(rect.height * 10000 / size.height) / 100);
        }
    }
    return returnRect;
}
exports.bscGetPercentageRectForWidthAndHeight = bscGetPercentageRectForWidthAndHeight;
exports.BsRectFull = { x: 0, y: 0, width: 100, height: 100, pct: true };
Object.freeze(exports.BsRectFull);


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
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BDeploySortType = void 0;
var BDeploySortType = (function () {
    function BDeploySortType() {
    }
    BDeploySortType.ASC = 1;
    BDeploySortType.DESC = -1;
    return BDeploySortType;
}());
exports.BDeploySortType = BDeploySortType;
Object.freeze(BDeploySortType);


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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bscIsTaggedListSpecification = exports.bscCreateTaggedListSpecification = exports.bscIsTagSortSpecification = exports.bscCreateTagSortSpecification = exports.bscIsBsnFilterSpecification = exports.bscCreateBsnFilterSpecification = exports.bscIsValidBsnFilterComponent = exports.bscCreateTagFilterComponent = exports.bscGetBsnFilterTypeForTagDataType = exports.bscCreateFilterComponent = exports.bscIsTimeSpanFilterParam = exports.BsnFilterCombineType = exports.bscGetOperatorListForTagDataType = exports.bscGetOperatorListForFilterType = exports.BsnArrayFilterOperator = exports.BsnBooleanFilterOperator = exports.BsnDateFilterOperator = exports.BsnNumberFilterOperator = exports.BsnStringFilterOperator = exports.BsnTimeUnits = exports.BsnFilterType = exports.bscIsBsnObjectUserPermission = exports.bscCreateBsnObjectUserPermission = exports.bscIsBsnObjectRolePermission = exports.bscCreateBsnObjectRolePermission = exports.BsnObjectPermissionType = exports.BsnPresentationReferenceType = exports.BsnPresentationStatus = exports.BsnPresentationType = exports.BsnTagType = exports.BsnTagDataType = exports.BsnTaggedPlaylistItemStatus = void 0;
var isNil = __webpack_require__(0);
var isString = __webpack_require__(2);
var BsnTaggedPlaylistItemStatus = (function () {
    function BsnTaggedPlaylistItemStatus() {
    }
    BsnTaggedPlaylistItemStatus.Approved = 'Approved';
    BsnTaggedPlaylistItemStatus.PendingAddition = 'PendingAddition';
    BsnTaggedPlaylistItemStatus.PendingDeletion = 'PendingDeletion';
    BsnTaggedPlaylistItemStatus.Pending = 'Pending';
    return BsnTaggedPlaylistItemStatus;
}());
exports.BsnTaggedPlaylistItemStatus = BsnTaggedPlaylistItemStatus;
Object.freeze(BsnTaggedPlaylistItemStatus);
var BsnTagDataType = (function () {
    function BsnTagDataType() {
    }
    BsnTagDataType.String = 'string';
    BsnTagDataType.Number = 'number';
    BsnTagDataType.Boolean = 'boolean';
    BsnTagDataType.DateTime = 'dateTime';
    BsnTagDataType.NumericArray = 'numericArray';
    BsnTagDataType.StringArray = 'stringArray';
    return BsnTagDataType;
}());
exports.BsnTagDataType = BsnTagDataType;
Object.freeze(BsnTagDataType);
var BsnTagType = (function () {
    function BsnTagType() {
    }
    BsnTagType.SystemDevice = '[sys].[Device]';
    BsnTagType.SystemContent = '[sys].[Content]';
    BsnTagType.Device = '[Device]';
    BsnTagType.Content = '[Content]';
    return BsnTagType;
}());
exports.BsnTagType = BsnTagType;
Object.freeze(BsnTagType);
var BsnPresentationType = (function () {
    function BsnPresentationType() {
    }
    BsnPresentationType.Simple = 'Simple';
    BsnPresentationType.Complete = 'Complete';
    return BsnPresentationType;
}());
exports.BsnPresentationType = BsnPresentationType;
Object.freeze(BsnPresentationType);
var BsnPresentationStatus = (function () {
    function BsnPresentationStatus() {
    }
    BsnPresentationStatus.Draft = 'Draft';
    BsnPresentationStatus.Published = 'Published';
    return BsnPresentationStatus;
}());
exports.BsnPresentationStatus = BsnPresentationStatus;
Object.freeze(BsnPresentationStatus);
var BsnPresentationReferenceType = (function () {
    function BsnPresentationReferenceType() {
    }
    BsnPresentationReferenceType.Presentation = 'Presentation';
    BsnPresentationReferenceType.BrightWallPresentation = 'BrightWallPresentation';
    return BsnPresentationReferenceType;
}());
exports.BsnPresentationReferenceType = BsnPresentationReferenceType;
Object.freeze(BsnPresentationReferenceType);
var BsnObjectPermissionType = (function () {
    function BsnObjectPermissionType() {
    }
    BsnObjectPermissionType.Role = 'Role';
    BsnObjectPermissionType.User = 'User';
    return BsnObjectPermissionType;
}());
exports.BsnObjectPermissionType = BsnObjectPermissionType;
Object.freeze(BsnObjectPermissionType);
function bscCreateBsnObjectRolePermission(roleName, operationUid, isAllowed) {
    return {
        type: 'Role',
        roleName: roleName,
        operationUid: operationUid,
        isAllowed: isAllowed,
    };
}
exports.bscCreateBsnObjectRolePermission = bscCreateBsnObjectRolePermission;
function bscIsBsnObjectRolePermission(permission) {
    return !isNil(permission) && permission.type === BsnObjectPermissionType.Role;
}
exports.bscIsBsnObjectRolePermission = bscIsBsnObjectRolePermission;
function bscCreateBsnObjectUserPermission(login, operationUid, isAllowed) {
    return {
        type: 'User',
        login: login,
        operationUid: operationUid,
        isAllowed: isAllowed,
    };
}
exports.bscCreateBsnObjectUserPermission = bscCreateBsnObjectUserPermission;
function bscIsBsnObjectUserPermission(permission) {
    return !isNil(permission) && permission.type === BsnObjectPermissionType.User;
}
exports.bscIsBsnObjectUserPermission = bscIsBsnObjectUserPermission;
var BsnFilterType = (function () {
    function BsnFilterType() {
    }
    BsnFilterType.string = 'string';
    BsnFilterType.enum = 'enum';
    BsnFilterType.number = 'number';
    BsnFilterType.dateTime = 'dateTime';
    BsnFilterType.boolean = 'boolean';
    BsnFilterType.stringArray = 'stringArray';
    BsnFilterType.numericArray = 'numericArray';
    return BsnFilterType;
}());
exports.BsnFilterType = BsnFilterType;
Object.freeze(BsnFilterType);
var BsnTimeUnits = (function () {
    function BsnTimeUnits() {
    }
    BsnTimeUnits.years = 'years';
    BsnTimeUnits.months = 'months';
    BsnTimeUnits.days = 'days';
    return BsnTimeUnits;
}());
exports.BsnTimeUnits = BsnTimeUnits;
var BsnStringFilterOperator = (function () {
    function BsnStringFilterOperator() {
    }
    BsnStringFilterOperator.Is = 'IS';
    BsnStringFilterOperator.IsNot = 'IS NOT';
    BsnStringFilterOperator.BeginsWith = 'BEGINS WITH';
    BsnStringFilterOperator.EndsWith = 'ENDS WITH';
    BsnStringFilterOperator.Contains = 'CONTAINS';
    BsnStringFilterOperator.ContainsAll = 'CONTAINS ALL';
    BsnStringFilterOperator.ContainsAny = 'CONTAINS ANY';
    BsnStringFilterOperator.DoesNotContain = 'DOES NOT CONTAIN';
    BsnStringFilterOperator.IsIn = 'IS IN';
    BsnStringFilterOperator.IsNotIn = 'IS NOT IN';
    return BsnStringFilterOperator;
}());
exports.BsnStringFilterOperator = BsnStringFilterOperator;
Object.freeze(BsnStringFilterOperator);
var BsnNumberFilterOperator = (function () {
    function BsnNumberFilterOperator() {
    }
    BsnNumberFilterOperator.Is = 'IS';
    BsnNumberFilterOperator.IsNot = 'IS NOT';
    BsnNumberFilterOperator.IsGreaterThan = 'IS GREATER THAN';
    BsnNumberFilterOperator.IsLessThan = 'IS LESS THAN';
    BsnNumberFilterOperator.IsInTheRange = 'IS IN THE RANGE';
    BsnNumberFilterOperator.IsNotInTheRange = 'IS NOT IN THE RANGE';
    BsnNumberFilterOperator.IsIn = 'IS IN';
    BsnNumberFilterOperator.IsNotIn = 'IS NOT IN';
    return BsnNumberFilterOperator;
}());
exports.BsnNumberFilterOperator = BsnNumberFilterOperator;
Object.freeze(BsnNumberFilterOperator);
var BsnDateFilterOperator = (function () {
    function BsnDateFilterOperator() {
    }
    BsnDateFilterOperator.Is = 'IS';
    BsnDateFilterOperator.IsNot = 'IS NOT';
    BsnDateFilterOperator.IsAfter = 'IS AFTER';
    BsnDateFilterOperator.IsBefore = 'IS BEFORE';
    BsnDateFilterOperator.InTheLast = 'IN THE LAST';
    BsnDateFilterOperator.NotInTheLast = 'NOT IN THE LAST';
    BsnDateFilterOperator.IsInTheRange = 'IS IN THE RANGE';
    BsnDateFilterOperator.IsNotInTheRange = 'IS NOT IN THE RANGE';
    BsnDateFilterOperator.IsIn = 'IS IN';
    BsnDateFilterOperator.IsNotIn = 'IS NOT IN';
    return BsnDateFilterOperator;
}());
exports.BsnDateFilterOperator = BsnDateFilterOperator;
Object.freeze(BsnDateFilterOperator);
var BsnBooleanFilterOperator = (function () {
    function BsnBooleanFilterOperator() {
    }
    BsnBooleanFilterOperator.Is = 'IS';
    return BsnBooleanFilterOperator;
}());
exports.BsnBooleanFilterOperator = BsnBooleanFilterOperator;
Object.freeze(BsnBooleanFilterOperator);
var BsnArrayFilterOperator = (function () {
    function BsnArrayFilterOperator() {
    }
    BsnArrayFilterOperator.Contains = 'CONTAINS';
    BsnArrayFilterOperator.ContainsAll = 'CONTAINS ALL';
    BsnArrayFilterOperator.ContainsAny = 'CONTAINS ANY';
    return BsnArrayFilterOperator;
}());
exports.BsnArrayFilterOperator = BsnArrayFilterOperator;
Object.freeze(BsnArrayFilterOperator);
var commonFilterOperators = [
    BsnStringFilterOperator.Is, BsnStringFilterOperator.IsNot,
    BsnStringFilterOperator.IsIn, BsnStringFilterOperator.IsNotIn,
];
var stringFilterOperators = __spreadArrays(commonFilterOperators, [BsnStringFilterOperator.BeginsWith, BsnStringFilterOperator.EndsWith,
    BsnStringFilterOperator.Contains, BsnStringFilterOperator.ContainsAll, BsnStringFilterOperator.ContainsAny,]);
var numberFilterOperators = __spreadArrays(commonFilterOperators, [BsnNumberFilterOperator.IsGreaterThan, BsnNumberFilterOperator.IsLessThan,
    BsnNumberFilterOperator.IsInTheRange, BsnNumberFilterOperator.IsNotInTheRange,]);
var dateTimeFilterOperators = __spreadArrays(commonFilterOperators, [BsnDateFilterOperator.IsAfter, BsnDateFilterOperator.IsBefore,
    BsnDateFilterOperator.InTheLast, BsnDateFilterOperator.NotInTheLast,
    BsnDateFilterOperator.IsInTheRange, BsnDateFilterOperator.IsNotInTheRange,]);
var arrayFilterOperators = [
    BsnArrayFilterOperator.Contains, BsnArrayFilterOperator.ContainsAll, BsnArrayFilterOperator.ContainsAny,
];
function bscGetOperatorListForFilterType(type) {
    switch (type) {
        default:
        case BsnFilterType.string:
        case BsnFilterType.enum:
            return stringFilterOperators;
        case BsnFilterType.number:
            return numberFilterOperators;
        case BsnFilterType.dateTime:
            return dateTimeFilterOperators;
        case BsnFilterType.boolean:
            return [BsnBooleanFilterOperator.Is];
        case BsnFilterType.stringArray:
        case BsnFilterType.numericArray:
            return arrayFilterOperators;
    }
}
exports.bscGetOperatorListForFilterType = bscGetOperatorListForFilterType;
function bscGetOperatorListForTagDataType(dataType) {
    switch (dataType) {
        default:
        case BsnTagDataType.String:
            return stringFilterOperators;
        case BsnTagDataType.Number:
            return numberFilterOperators;
        case BsnTagDataType.DateTime:
            return dateTimeFilterOperators;
        case BsnTagDataType.Boolean:
            return [BsnBooleanFilterOperator.Is];
        case BsnTagDataType.StringArray:
        case BsnTagDataType.NumericArray:
            return arrayFilterOperators;
    }
}
exports.bscGetOperatorListForTagDataType = bscGetOperatorListForTagDataType;
var BsnFilterCombineType = (function () {
    function BsnFilterCombineType() {
    }
    BsnFilterCombineType.All = 'AND';
    BsnFilterCombineType.Any = 'OR';
    return BsnFilterCombineType;
}());
exports.BsnFilterCombineType = BsnFilterCombineType;
Object.freeze(BsnFilterCombineType);
function bscIsTimeSpanFilterParam(param) {
    return !isNil(param)
        && typeof param === 'object'
        && param.hasOwnProperty('units')
        && param.hasOwnProperty('length')
        && param.hasOwnProperty('dateTime');
}
exports.bscIsTimeSpanFilterParam = bscIsTimeSpanFilterParam;
function bscCreateFilterComponent(type, property, operator, values) {
    var getBoolValue = function (val) {
        if (isString(val)) {
            return val.length > 0 && val[0].toUpperCase() === 'T' ? 'TRUE' : 'FALSE';
        }
        else {
            return Boolean(val) ? 'TRUE' : 'FALSE';
        }
    };
    var params;
    if (Array.isArray(values)) {
        if (type === BsnFilterType.boolean) {
            params = [getBoolValue(values[0])];
        }
        else {
            params = values;
        }
    }
    else {
        switch (type) {
            default:
            case BsnFilterType.boolean:
                params = [getBoolValue(values)];
                break;
            case BsnFilterType.enum:
            case BsnFilterType.stringArray:
            case BsnFilterType.string:
                params = [values];
                break;
            case BsnFilterType.numericArray:
            case BsnFilterType.number:
                params = [values];
                break;
            case BsnFilterType.dateTime: {
                if (operator === BsnDateFilterOperator.InTheLast || operator === BsnDateFilterOperator.NotInTheLast) {
                    if (bscIsTimeSpanFilterParam(values)) {
                        params = __assign({}, values);
                    }
                    else {
                        params = { units: BsnTimeUnits.days, length: 0, dateTime: new Date(0) };
                    }
                }
                else {
                    params = [values];
                }
                break;
            }
        }
    }
    return { type: type, property: property, operator: operator, params: params };
}
exports.bscCreateFilterComponent = bscCreateFilterComponent;
function bscGetBsnFilterTypeForTagDataType(dataType) {
    switch (dataType) {
        default:
        case BsnTagDataType.String:
            return BsnFilterType.string;
        case BsnTagDataType.Number:
            return BsnFilterType.number;
        case BsnTagDataType.DateTime:
            return BsnFilterType.dateTime;
        case BsnTagDataType.Boolean:
            return BsnFilterType.boolean;
        case BsnTagDataType.StringArray:
            return BsnFilterType.stringArray;
        case BsnTagDataType.NumericArray:
            return BsnFilterType.numericArray;
    }
}
exports.bscGetBsnFilterTypeForTagDataType = bscGetBsnFilterTypeForTagDataType;
function bscCreateTagFilterComponent(tagKey, operator, values) {
    var validOperators = bscGetOperatorListForTagDataType(tagKey.dataType);
    if (validOperators.indexOf(operator) >= 0) {
        var type = bscGetBsnFilterTypeForTagDataType(tagKey.dataType);
        return bscCreateFilterComponent(type, tagKey.name, operator, values);
    }
    return null;
}
exports.bscCreateTagFilterComponent = bscCreateTagFilterComponent;
function bscIsValidBsnFilterComponent(comp) {
    var isNumberArray = function (array) {
        return Array.isArray(array) && !array.some(function (el) { return typeof el !== 'number'; });
    };
    var isStringArray = function (array) {
        return Array.isArray(array) && !array.some(function (el) { return !isString(el); });
    };
    var ops = bscGetOperatorListForFilterType(comp.type);
    if (ops.indexOf(comp.operator) >= 0) {
        switch (comp.type) {
            case BsnFilterType.string:
            case BsnFilterType.enum:
                return isStringArray(comp.params);
            case BsnFilterType.stringArray:
                return isStringArray(comp.params) && comp.params.length <= 10;
            case BsnFilterType.number:
                return isNumberArray(comp.params);
            case BsnFilterType.numericArray:
                return isNumberArray(comp.params) && comp.params.length <= 10;
            case BsnFilterType.dateTime:
                if (comp.operator === BsnDateFilterOperator.InTheLast || comp.operator === BsnDateFilterOperator.NotInTheLast) {
                    return bscIsTimeSpanFilterParam(comp.params);
                }
                return Array.isArray(comp.params) && !comp.params.some(function (el) { return !(el instanceof Date); });
            case BsnFilterType.boolean:
                return Array.isArray(comp.params) && (comp.params[0] === 'TRUE' || comp.params[0] === 'FALSE');
        }
    }
    return false;
}
exports.bscIsValidBsnFilterComponent = bscIsValidBsnFilterComponent;
function bscCreateBsnFilterSpecification(components, combineType) {
    if (combineType === void 0) { combineType = BsnFilterCombineType.All; }
    return {
        components: Array.isArray(components) ? components : [components],
        combineType: combineType,
    };
}
exports.bscCreateBsnFilterSpecification = bscCreateBsnFilterSpecification;
function bscIsBsnFilterSpecification(value) {
    return !isNil(value)
        && typeof value === 'object'
        && value.hasOwnProperty('components')
        && Array.isArray(value.components)
        && value.hasOwnProperty('combineType');
}
exports.bscIsBsnFilterSpecification = bscIsBsnFilterSpecification;
function bscCreateTagSortSpecification(sortTagName, sortDescending) {
    if (sortTagName === void 0) { sortTagName = null; }
    if (sortDescending === void 0) { sortDescending = false; }
    return { sortTagName: sortTagName, sortDescending: sortDescending };
}
exports.bscCreateTagSortSpecification = bscCreateTagSortSpecification;
function bscIsTagSortSpecification(value) {
    return !isNil(value)
        && typeof value === 'object'
        && value.hasOwnProperty('sortTagName')
        && value.hasOwnProperty('sortDescending');
}
exports.bscIsTagSortSpecification = bscIsTagSortSpecification;
function bscCreateTaggedListSpecification(filterSpec, sortTagName, sortDescending) {
    if (sortTagName === void 0) { sortTagName = null; }
    if (sortDescending === void 0) { sortDescending = false; }
    return { filterSpec: filterSpec, sortTagName: sortTagName, sortDescending: sortDescending };
}
exports.bscCreateTaggedListSpecification = bscCreateTaggedListSpecification;
function bscIsTaggedListSpecification(value) {
    return !isNil(value)
        && typeof value === 'object'
        && value.hasOwnProperty('filterSpec')
        && (value.filterSpec === null || bscIsBsnFilterSpecification(value.filterSpec))
        && value.hasOwnProperty('sortTagName')
        && value.hasOwnProperty('sortDescending');
}
exports.bscIsTaggedListSpecification = bscIsTaggedListSpecification;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceSetupProperties = exports.BsDsLwsConfiguration = exports.TimeZone = exports.UnitNamingMethod = exports.DeviceNetworkingConfiguration = void 0;
var DeviceNetworkingConfiguration = (function () {
    function DeviceNetworkingConfiguration() {
    }
    DeviceNetworkingConfiguration.Standalone = 'standalone';
    DeviceNetworkingConfiguration.LocalFileNetworking = 'lfn';
    DeviceNetworkingConfiguration.LegacyLocalFileNetworking = 'legacyLfn';
    DeviceNetworkingConfiguration.SimpleFileNetworking = 'sfn';
    DeviceNetworkingConfiguration.BrightSignNetworking = 'bsn';
    DeviceNetworkingConfiguration.LocalToBrightSignNetworking = 'localToBsn';
    DeviceNetworkingConfiguration.PartnerApplication = 'partnerApplication';
    return DeviceNetworkingConfiguration;
}());
exports.DeviceNetworkingConfiguration = DeviceNetworkingConfiguration;
Object.freeze(DeviceNetworkingConfiguration);
var UnitNamingMethod = (function () {
    function UnitNamingMethod() {
    }
    UnitNamingMethod.UnitNameOnly = 'unitNameOnly';
    UnitNamingMethod.AppendUnitId = 'appendUnitIDToUnitName';
    return UnitNamingMethod;
}());
exports.UnitNamingMethod = UnitNamingMethod;
Object.freeze(UnitNamingMethod);
var TimeZone = (function () {
    function TimeZone() {
    }
    TimeZone.EST = 'EST';
    TimeZone.PST = 'PST';
    TimeZone.CST = 'CST';
    TimeZone.JST = 'JST';
    TimeZone.MST = 'MST';
    TimeZone.GMTBST = 'GMTBST';
    TimeZone.WET = 'WET';
    TimeZone.CET = 'CET';
    TimeZone.EET = 'EET';
    TimeZone.MSK = 'MSK';
    TimeZone.AWST = 'AWST';
    TimeZone.AWST1 = 'AWST1';
    TimeZone.ACST = 'ACST';
    TimeZone.ACST1 = 'ACST1';
    TimeZone.AEST = 'AEST';
    TimeZone.AEST1 = 'AEST1';
    TimeZone.NFT = 'NFT';
    TimeZone.NZST = 'NZST';
    TimeZone.GMT = 'GMT';
    TimeZone.AKST = 'AKST';
    TimeZone.HST = 'HST';
    TimeZone.HST1 = 'HST1';
    TimeZone.MST1 = 'MST1';
    TimeZone.EST1 = 'EST1';
    TimeZone.AST = 'AST';
    TimeZone.CST2 = 'CST2';
    TimeZone.MST2 = 'MST2';
    TimeZone.PST2 = 'PST2';
    TimeZone.BRT = 'BRT';
    TimeZone.NST = 'NST';
    TimeZone.AZOT = 'AZOT';
    TimeZone.SAMT = 'SAMT';
    TimeZone.YEKT = 'YEKT';
    TimeZone.IST = 'IST';
    TimeZone.NPT = 'NPT';
    TimeZone.OMST = 'OMST';
    TimeZone.CXT = 'CXT';
    TimeZone.GMTMINUSONE = 'GMT-1';
    TimeZone.GMTMINUSTWO = 'GMT-2';
    TimeZone.GMTMINUSTHREE = 'GMT-3';
    TimeZone.GMTMINUSFOUR = 'GMT-4';
    TimeZone.GMTMINUSFIVE = 'GMT-5';
    TimeZone.GMTMINUSSIX = 'GMT-6';
    TimeZone.GMTMINUSSEVEN = 'GMT-7';
    TimeZone.GMTMINUSEIGHT = 'GMT-8';
    TimeZone.GMTMINUSNINE = 'GMT-9';
    TimeZone.GMTMINUSTEN = 'GMT-10';
    TimeZone.GMTMINUSELEVEN = 'GMT-11';
    TimeZone.GMTMINUSTWELEVE = 'GMT-12';
    TimeZone.GMTMINUSTHIRTEEN = 'GMT-13';
    TimeZone.GMTMINUSFOURTEEN = 'GMT-14';
    TimeZone.GMTPLUSONE = 'GMT+1';
    TimeZone.GMTPLUSTWO = 'GMT+2';
    TimeZone.GMTPLUSTHREE = 'GMT+3';
    TimeZone.GMTPLUSFOUR = 'GMT+4';
    TimeZone.GMTPLUSFIVE = 'GMT+5';
    TimeZone.GMTPLUSSIX = 'GMT+6';
    TimeZone.GMTPLUSSEVEN = 'GMT+7';
    TimeZone.GMTPLUSEIGHT = 'GMT+8';
    TimeZone.GMTPLUSNINE = 'GMT+9';
    TimeZone.GMTPLUSNINEHALF = 'GMT+9:30';
    TimeZone.GMTPLUSTEN = 'GMT+10';
    TimeZone.GMTPLUSELEVEN = 'GMT+11';
    TimeZone.GMTPLUSTWELEVE = 'GMT+12';
    TimeZone.GMTPLUSTHIRTEEN = 'GMT+13';
    TimeZone.GMTPLUSFOURTEEN = 'GMT+14';
    return TimeZone;
}());
exports.TimeZone = TimeZone;
Object.freeze(TimeZone);
var BsDsLwsConfiguration = (function () {
    function BsDsLwsConfiguration() {
    }
    BsDsLwsConfiguration.Content = 'content';
    BsDsLwsConfiguration.Status = 'status';
    BsDsLwsConfiguration.None = 'none';
    return BsDsLwsConfiguration;
}());
exports.BsDsLwsConfiguration = BsDsLwsConfiguration;
Object.freeze(BsDsLwsConfiguration);
var DeviceSetupProperties = (function () {
    function DeviceSetupProperties() {
    }
    DeviceSetupProperties.DeviceName = 'deviceName';
    DeviceSetupProperties.DeviceDescription = 'deviceDescription';
    DeviceSetupProperties.UnitNamingMethod = 'unitNamingMethod';
    DeviceSetupProperties.TimeZone = 'timeZone';
    DeviceSetupProperties.IdleScreenColor = 'idleScreenColor';
    DeviceSetupProperties.SetupType = 'setupType';
    DeviceSetupProperties.BsnDeviceRegistrationTokenEntity = 'bsnDeviceRegistrationTokenEntity';
    DeviceSetupProperties.BDeploy = 'bDeploy';
    DeviceSetupProperties.BsnGroupName = 'bsnGroupName';
    DeviceSetupProperties.TimeBetweenContentChecks = 'timeBetweenNetConnects';
    DeviceSetupProperties.TimeBetweenHeartbeats = 'timeBetweenHeartbeats';
    DeviceSetupProperties.SfnWebFolderUrl = 'sfnWebFolderUrl';
    DeviceSetupProperties.SfnUserName = 'sfnUserName';
    DeviceSetupProperties.SfnPassword = 'sfnPassword';
    DeviceSetupProperties.SfnEnableBasicAuthentication = 'sfnEnableBasicAuthentication';
    DeviceSetupProperties.TimeServer = 'timeServer';
    DeviceSetupProperties.UseWireless = 'useWireless';
    DeviceSetupProperties.SSID = 'ssid';
    DeviceSetupProperties.Passphrase = 'passphrase';
    DeviceSetupProperties.RemoteDwsEnabled = 'remoteDwsEnabled';
    DeviceSetupProperties.DwsEnabled = 'dwsEnabled';
    DeviceSetupProperties.DwsPassword = 'dwsPassword';
    DeviceSetupProperties.LwsEnabled = 'lwsEnabled';
    DeviceSetupProperties.LwsUserName = 'lwsUserName';
    DeviceSetupProperties.LwsPassword = 'lwsPassword';
    DeviceSetupProperties.LwsEnableUpdateNotifications = 'lwsEnableUpdateNotifications';
    DeviceSetupProperties.LwsConfig = 'lwsConfig';
    DeviceSetupProperties.BsnCloudEnabled = 'bsnCloudEnabled';
    DeviceSetupProperties.PlaybackLoggingEnabled = 'playbackLoggingEnabled';
    DeviceSetupProperties.EventLoggingEnabled = 'eventLoggingEnabled';
    DeviceSetupProperties.DiagnosticLoggingEnabled = 'diagnosticLoggingEnabled';
    DeviceSetupProperties.StateLoggingEnabled = 'stateLoggingEnabled';
    DeviceSetupProperties.VariableLoggingEnabled = 'variableLoggingEnabled';
    DeviceSetupProperties.UploadLogFilesAtBoot = 'uploadLogFilesAtBoot';
    DeviceSetupProperties.UploadLogFilesAtSpecificTime = 'uploadLogFilesAtSpecificTime';
    DeviceSetupProperties.UploadLogFilesTime = 'uploadLogFilesTime';
    DeviceSetupProperties.LogHandlerUrl = 'logHandlerUrl';
    DeviceSetupProperties.EnableRemoteSnapshot = 'enableRemoteSnapshot';
    DeviceSetupProperties.RemoteSnapshotInterval = 'remoteSnapshotInterval';
    DeviceSetupProperties.RemoteSnapshotMaxImages = 'remoteSnapshotMaxImages';
    DeviceSetupProperties.RemoteSnapshotJpegQualityLevel = 'remoteSnapshotJpegQualityLevel';
    DeviceSetupProperties.RemoteSnapshotScreenOrientation = 'remoteSnapshotScreenOrientation';
    DeviceSetupProperties.RemoteSnapshotHandlerUrl = 'remoteSnapshotHandlerUrl';
    DeviceSetupProperties.EnableSerialDebugging = 'enableSerialDebugging';
    DeviceSetupProperties.EnableSystemLogDebugging = 'enableSystemLogDebugging';
    DeviceSetupProperties.ContentDataTypeEnabledWired = 'contentDataTypeEnabledWired';
    DeviceSetupProperties.TextFeedsDataTypeEnabledWired = 'textFeedsDataTypeEnabledWired';
    DeviceSetupProperties.HealthDataTypeEnabledWired = 'healthDataTypeEnabledWired';
    DeviceSetupProperties.MediaFeedsDataTypeEnabledWired = 'mediaFeedsDataTypeEnabledWired';
    DeviceSetupProperties.LogUploadsXfersEnabledWired = 'logUploadsXfersEnabledWired';
    DeviceSetupProperties.ContentDataTypeEnabledWireless = 'contentDataTypeEnabledWireless';
    DeviceSetupProperties.TextFeedsDataTypeEnabledWireless = 'textFeedsDataTypeEnabledWireless';
    DeviceSetupProperties.HealthDataTypeEnabledWireless = 'healthDataTypeEnabledWireless';
    DeviceSetupProperties.MediaFeedsDataTypeEnabledWireless = 'mediaFeedsDataTypeEnabledWireless';
    DeviceSetupProperties.LogUploadsXfersEnabledWireless = 'logUploadsXfersEnabledWireless';
    DeviceSetupProperties.UseDhcp = 'useDHCP';
    DeviceSetupProperties.StaticIpAddress = 'staticIPAddress';
    DeviceSetupProperties.SubnetMask = 'subnetMask';
    DeviceSetupProperties.Gateway = 'gateway';
    DeviceSetupProperties.Dns1 = 'dns1';
    DeviceSetupProperties.Dns2 = 'dns2';
    DeviceSetupProperties.Dns3 = 'dns3';
    DeviceSetupProperties.RateLimitModeOutsideWindow = 'rateLimitModeOutsideWindow';
    DeviceSetupProperties.RateLimitRateOutsideWindow = 'rateLimitRateOutsideWindow';
    DeviceSetupProperties.RateLimitModeInWindow = 'rateLimitModeInWindow';
    DeviceSetupProperties.RateLimitRateInWindow = 'rateLimitRateInWindow';
    DeviceSetupProperties.RateLimitModeInitialDownloads = 'rateLimitModeInitialDownloads';
    DeviceSetupProperties.RateLimitRateInitialDownloads = 'rateLimitRateInitialDownloads';
    DeviceSetupProperties.UseDhcp2 = 'useDHCP_2';
    DeviceSetupProperties.StaticIpAddress2 = 'staticIPAddress_2';
    DeviceSetupProperties.SubnetMask2 = 'subnetMask_2';
    DeviceSetupProperties.Gateway2 = 'gateway_2';
    DeviceSetupProperties.Dns12 = 'dns1_2';
    DeviceSetupProperties.Dns22 = 'dns2_2';
    DeviceSetupProperties.Dns32 = 'dns3_2';
    DeviceSetupProperties.RateLimitModeOutsideWindow2 = 'rateLimitModeOutsideWindow_2';
    DeviceSetupProperties.RateLimitRateOutsideWindow2 = 'rateLimitRateOutsideWindow_2';
    DeviceSetupProperties.RateLimitModeInWindow2 = 'rateLimitModeInWindow_2';
    DeviceSetupProperties.RateLimitRateInWindow2 = 'rateLimitRateInWindow_2';
    DeviceSetupProperties.RateLimitModeInitialDownloads2 = 'rateLimitModeInitialDownloads_2';
    DeviceSetupProperties.RateLimitRateInitialDownloads2 = 'rateLimitRateInitialDownloads_2';
    DeviceSetupProperties.NetworkConnectionPriority = 'networkConnectionPriority';
    DeviceSetupProperties.SpecifyHostname = 'specifyHostname';
    DeviceSetupProperties.Hostname = 'hostname';
    DeviceSetupProperties.UseProxy = 'useProxy';
    DeviceSetupProperties.ProxyAddress = 'proxyAddress';
    DeviceSetupProperties.ProxyPort = 'proxyPort';
    DeviceSetupProperties.NetworkHosts = 'networkHosts';
    DeviceSetupProperties.NetworkDiagnosticsEnabled = 'networkDiagnosticsEnabled';
    DeviceSetupProperties.TestEthernetEnabled = 'testEthernetEnabled';
    DeviceSetupProperties.TestWirelessEnabled = 'testWirelessEnabled';
    DeviceSetupProperties.TestInternetEnabled = 'testInternetEnabled';
    DeviceSetupProperties.UseCustomSplashScreen = 'useCustomSplashScreen';
    DeviceSetupProperties.ContentDownloadsRestricted = 'contentDownloadsRestricted';
    DeviceSetupProperties.ContentDownloadRangeStart = 'contentDownloadRangeStart';
    DeviceSetupProperties.ContentDownloadRangeEnd = 'contentDownloadRangeEnd';
    DeviceSetupProperties.HeartbeatsRestricted = 'heartbeatsRestricted';
    DeviceSetupProperties.HeartbeatsRangeStart = 'heartbeatsRangeStart';
    DeviceSetupProperties.HeartbeatsRangeEnd = 'heartbeatsRangeEnd';
    DeviceSetupProperties.BrightWallNameKey = 'BrightWallName';
    DeviceSetupProperties.BrightWallScreenNumberKey = 'BrightWallScreenNumber';
    DeviceSetupProperties.UsbUpdatePassword = 'usbUpdatePassword';
    DeviceSetupProperties.EnablePhysicalLan = 'enablePhysicalLan';
    DeviceSetupProperties.Vlans = 'vlans';
    DeviceSetupProperties.InheritNetworkProperties = 'inheritNetworkProperties';
    DeviceSetupProperties.InternalCaArtifacts = 'internalCaArtifacts';
    return DeviceSetupProperties;
}());
exports.DeviceSetupProperties = DeviceSetupProperties;
Object.freeze(DeviceSetupProperties);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bscValidateSerialNumber = void 0;
var isString = __webpack_require__(2);
var isNil = __webpack_require__(0);
var isNaN = __webpack_require__(23);
var convertFromBase31 = function (codePoint) {
    codePoint = codePoint % 31;
    if (codePoint < 10) {
        return String.fromCharCode(codePoint + 48);
    }
    if (codePoint === 10) {
        return 'A';
    }
    if (codePoint >= 11 && codePoint <= 16) {
        return String.fromCharCode(codePoint + 67 - 11);
    }
    if (codePoint >= 17 && codePoint <= 21) {
        return String.fromCharCode(codePoint + 74 - 17);
    }
    if (codePoint === 22) {
        return 'P';
    }
    if (codePoint >= 23 && codePoint <= 830) {
        return String.fromCharCode(codePoint + 82 - 23);
    }
    return null;
};
var convertToBase31 = function (infoUC, index) {
    if (isNil(index)) {
        index = 0;
    }
    var charVal = infoUC.charCodeAt(index);
    if (charVal >= 48 && charVal <= 57) {
        return charVal - 48;
    }
    if (charVal === 65) {
        return 10;
    }
    if (charVal >= 67 && charVal <= 72) {
        return charVal - 67 + 11;
    }
    if (charVal >= 74 && charVal <= 78) {
        return charVal - 74 + 17;
    }
    if (charVal === 80) {
        return 22;
    }
    if (charVal >= 82 && charVal <= 89) {
        return charVal - 82 + 23;
    }
    return NaN;
};
var getCheckChar = function (infoUC) {
    var i;
    var x;
    var valArray = [];
    for (i = 0; i < 12; i++) {
        x = convertToBase31(infoUC, i);
        if (isNaN(x)) {
            return null;
        }
        if (i !== 5) {
            valArray.push(x);
        }
    }
    for (i = 0; i < 11; i += 2) {
        x = valArray[i] * 2;
        if (x > 30) {
            x = (x % 31) + 1;
        }
        valArray[i] = x;
    }
    var sum = valArray.reduce(function (previousValue, currentValue) {
        return currentValue + previousValue;
    });
    return convertFromBase31(31 - sum % 31);
};
function bscValidateSerialNumber(serial) {
    if (!isString(serial)) {
        return false;
    }
    if (serial.length !== 12) {
        return false;
    }
    var upperCaseInfo = serial.toUpperCase();
    var checkChar = getCheckChar(upperCaseInfo);
    if (checkChar !== upperCaseInfo.charAt(5)) {
        return false;
    }
    return true;
}
exports.bscValidateSerialNumber = bscValidateSerialNumber;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bscCreatePublishFirmware = exports.bscGetFirmwareSourceUrl = exports.bscGetFirmwareFileName = exports.bscGetFirmwareUpdateTargetFileName = exports.FirmwareUpdateType = exports.FirmwareUpdateSource = void 0;
var isNil = __webpack_require__(0);
var FirmwareUpdateSource = (function () {
    function FirmwareUpdateSource() {
    }
    FirmwareUpdateSource.Production = 'production';
    FirmwareUpdateSource.Beta = 'beta';
    FirmwareUpdateSource.MinimumCompatible = 'compatible';
    FirmwareUpdateSource.SpecificFile = 'specific';
    FirmwareUpdateSource.SpecificUrl = 'specificUrl';
    FirmwareUpdateSource.None = 'none';
    FirmwareUpdateSource.Existing = 'existing';
    return FirmwareUpdateSource;
}());
exports.FirmwareUpdateSource = FirmwareUpdateSource;
Object.freeze(FirmwareUpdateSource);
var FirmwareUpdateType = (function () {
    function FirmwareUpdateType() {
    }
    FirmwareUpdateType.Standard = 'standard';
    FirmwareUpdateType.Different = 'different';
    FirmwareUpdateType.Newer = 'newer';
    FirmwareUpdateType.Save = 'save';
    return FirmwareUpdateType;
}());
exports.FirmwareUpdateType = FirmwareUpdateType;
Object.freeze(FirmwareUpdateType);
function bscGetFirmwareUpdateTargetFileName(firmWare, firmwareUpdateType) {
    switch (firmwareUpdateType) {
        case FirmwareUpdateType.Different:
            return firmWare.firmwareUpdateDifferentTargetFileName;
        case FirmwareUpdateType.Newer:
            return firmWare.firmwareUpdateNewerTargetFileName;
        case FirmwareUpdateType.Save:
            return firmWare.firmwareUpdateSaveTargetFileName;
        case FirmwareUpdateType.Standard:
        default:
            return firmWare.firmwareUpdateStandardTargetFileName;
    }
}
exports.bscGetFirmwareUpdateTargetFileName = bscGetFirmwareUpdateTargetFileName;
function bscGetFirmwareFileName(firmWare, firmwareUpdateType) {
    switch (firmwareUpdateType) {
        case FirmwareUpdateType.Different:
            return firmWare.firmwareUpdateDifferentTargetFileName;
        case FirmwareUpdateType.Newer:
            return firmWare.firmwareUpdateNewerTargetFileName;
        case FirmwareUpdateType.Save:
            return firmWare.firmwareUpdateSaveTargetFileName;
        case FirmwareUpdateType.Standard:
        default:
            return firmWare.firmwareUpdateStandardTargetFileName;
    }
}
exports.bscGetFirmwareFileName = bscGetFirmwareFileName;
function bscGetFirmwareSourceUrl(firmWare) {
    switch (firmWare.firmwareUpdateSource) {
        case FirmwareUpdateSource.Production:
        default: {
            return firmWare.productionReleaseURL;
        }
        case FirmwareUpdateSource.Beta: {
            return firmWare.betaReleaseURL;
        }
        case FirmwareUpdateSource.SpecificFile: {
            return firmWare.firmwareUpdateSourceFilePath;
        }
        case FirmwareUpdateSource.MinimumCompatible: {
            return firmWare.compatibleReleaseURL;
        }
        case FirmwareUpdateSource.SpecificUrl: {
            return firmWare.firmwareUpdateSourceUrl;
        }
    }
}
exports.bscGetFirmwareSourceUrl = bscGetFirmwareSourceUrl;
function bscCreatePublishFirmware(props) {
    if (!isNil(props)) {
        return {
            firmwareUpdateSource: !isNil(props.firmwareUpdateSource) ? props.firmwareUpdateSource : null,
            firmwareUpdateSourceFilePath: !isNil(props.firmwareUpdateSourceFilePath) ? props.firmwareUpdateSourceFilePath : '',
            firmwareUpdateSourceUrl: !isNil(props.firmwareUpdateSourceUrl) ? props.firmwareUpdateSourceUrl : '',
            firmwareUpdateStandardTargetFileName: !isNil(props.firmwareUpdateStandardTargetFileName) ? props.firmwareUpdateStandardTargetFileName : '',
            firmwareUpdateDifferentTargetFileName: !isNil(props.firmwareUpdateDifferentTargetFileName) ? props.firmwareUpdateDifferentTargetFileName : '',
            firmwareUpdateNewerTargetFileName: !isNil(props.firmwareUpdateNewerTargetFileName) ? props.firmwareUpdateNewerTargetFileName : '',
            firmwareUpdateSaveTargetFileName: !isNil(props.firmwareUpdateSaveTargetFileName) ? props.firmwareUpdateSaveTargetFileName : '',
            firmwareUpdateVersion: !isNil(props.firmwareUpdateVersion) ? props.firmwareUpdateVersion : '',
            productionReleaseURL: !isNil(props.productionReleaseURL) ? props.productionReleaseURL : '',
            betaReleaseURL: !isNil(props.betaReleaseURL) ? props.betaReleaseURL : '',
            compatibleReleaseURL: !isNil(props.compatibleReleaseURL) ? props.compatibleReleaseURL : '',
            productionVersion: !isNil(props.productionVersion) ? props.productionVersion : '',
            betaVersion: !isNil(props.betaVersion) ? props.betaVersion : '',
            compatibleVersion: !isNil(props.compatibleVersion) ? props.compatibleVersion : '',
            productionVersionNumber: !isNil(props.productionVersionNumber) ? props.productionVersionNumber : -1,
            betaVersionNumber: !isNil(props.betaVersionNumber) ? props.betaVersionNumber : -1,
            compatibleVersionNumber: !isNil(props.compatibleVersionNumber) ? props.compatibleVersionNumber : -1,
            productionReleaseSHA1: !isNil(props.productionReleaseSHA1) ? props.productionReleaseSHA1 : '',
            betaReleaseSHA1: !isNil(props.betaReleaseSHA1) ? props.betaReleaseSHA1 : '',
            compatibleReleaseSHA1: !isNil(props.compatibleReleaseSHA1) ? props.compatibleReleaseSHA1 : '',
            productionReleaseFileLength: !isNil(props.productionReleaseFileLength) ? props.productionReleaseFileLength : -1,
            betaReleaseFileLength: !isNil(props.betaReleaseFileLength) ? props.betaReleaseFileLength : -1,
            compatibleReleaseFileLength: !isNil(props.compatibleReleaseFileLength) ? props.compatibleReleaseFileLength : -1,
            existingFWContentID: !isNil(props.existingFWContentID) ? props.existingFWContentID : '',
        };
    }
    else {
        return {
            firmwareUpdateSource: null,
            firmwareUpdateSourceFilePath: '',
            firmwareUpdateSourceUrl: '',
            firmwareUpdateStandardTargetFileName: '',
            firmwareUpdateDifferentTargetFileName: '',
            firmwareUpdateNewerTargetFileName: '',
            firmwareUpdateSaveTargetFileName: '',
            firmwareUpdateVersion: '',
            productionReleaseURL: '',
            betaReleaseURL: '',
            compatibleReleaseURL: '',
            productionVersion: '',
            betaVersion: '',
            compatibleVersion: '',
            productionVersionNumber: -1,
            betaVersionNumber: -1,
            compatibleVersionNumber: -1,
            productionReleaseSHA1: '',
            betaReleaseSHA1: '',
            compatibleReleaseSHA1: '',
            productionReleaseFileLength: -1,
            betaReleaseFileLength: -1,
            compatibleReleaseFileLength: -1,
            existingFWContentID: '',
        };
    }
}
exports.bscCreatePublishFirmware = bscCreatePublishFirmware;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bscGetIrRemoteControl = void 0;
var irRemoteModel_1 = __webpack_require__(5);
function bscGetIrRemoteControl(irRemoteModel) {
    var _a, _b;
    switch (irRemoteModel) {
        case irRemoteModel_1.IrRemoteModel.RC1001:
        default:
            return {
                id: 'RC-1001',
                encoding: 'NEC',
                manufacturerCode: 0x6F90,
                buttons: (_a = {},
                    _a[0x16] = { buttonCode: 0x16, buttonDescription: 'Power' },
                    _a[0x42] = { buttonCode: 0x42, buttonDescription: 'Brightness' },
                    _a[0x17] = { buttonCode: 0x17, buttonDescription: 'Home' },
                    _a[0x18] = { buttonCode: 0x18, buttonDescription: 'Search' },
                    _a[0x15] = { buttonCode: 0x15, buttonDescription: 'Back' },
                    _a[0x12] = { buttonCode: 0x12, buttonDescription: 'Up' },
                    _a[0x11] = { buttonCode: 0x11, buttonDescription: 'Right' },
                    _a[0x13] = { buttonCode: 0x13, buttonDescription: 'Down' },
                    _a[0x10] = { buttonCode: 0x10, buttonDescription: 'Left' },
                    _a[0x14] = { buttonCode: 0x14, buttonDescription: 'Ok' },
                    _a[0x1b] = { buttonCode: 0x1b, buttonDescription: 'Rewind' },
                    _a[0x19] = { buttonCode: 0x19, buttonDescription: 'Play' },
                    _a[0x1a] = { buttonCode: 0x1a, buttonDescription: 'Fast Forward' },
                    _a[0x1c] = { buttonCode: 0x1c, buttonDescription: 'Pause' },
                    _a[0x1e] = { buttonCode: 0x1e, buttonDescription: 'Shuffle' },
                    _a[0x1d] = { buttonCode: 0x1d, buttonDescription: 'Add' },
                    _a[0x1f] = { buttonCode: 0x1f, buttonDescription: 'Repeat' },
                    _a[0x40] = { buttonCode: 0x40, buttonDescription: 'Volume Up' },
                    _a[0x41] = { buttonCode: 0x41, buttonDescription: 'Volume Down' },
                    _a),
            };
        case irRemoteModel_1.IrRemoteModel.RC1002:
            return {
                id: 'RC-1002',
                encoding: 'NEC',
                manufacturerCode: 0x6F90,
                buttons: (_b = {},
                    _b[0x16] = { buttonCode: 0x16, buttonDescription: 'Power' },
                    _b[0x42] = { buttonCode: 0x42, buttonDescription: 'Brightness' },
                    _b[0x17] = { buttonCode: 0x17, buttonDescription: 'Home' },
                    _b[0x18] = { buttonCode: 0x18, buttonDescription: 'Search' },
                    _b[0x15] = { buttonCode: 0x15, buttonDescription: 'Back' },
                    _b[0x12] = { buttonCode: 0x12, buttonDescription: 'Up' },
                    _b[0x11] = { buttonCode: 0x11, buttonDescription: 'Right' },
                    _b[0x13] = { buttonCode: 0x13, buttonDescription: 'Down' },
                    _b[0x10] = { buttonCode: 0x10, buttonDescription: 'Left' },
                    _b[0x14] = { buttonCode: 0x14, buttonDescription: 'Ok' },
                    _b[0x1b] = { buttonCode: 0x1b, buttonDescription: 'Rewind' },
                    _b[0x19] = { buttonCode: 0x19, buttonDescription: 'Play' },
                    _b[0x1a] = { buttonCode: 0x1a, buttonDescription: 'Fast Forward' },
                    _b[0x1c] = { buttonCode: 0x1c, buttonDescription: 'Pause' },
                    _b[0x1e] = { buttonCode: 0x1e, buttonDescription: 'Shuffle' },
                    _b[0x1d] = { buttonCode: 0x1d, buttonDescription: 'Add' },
                    _b[0x1f] = { buttonCode: 0x1f, buttonDescription: 'Repeat' },
                    _b[0x40] = { buttonCode: 0x40, buttonDescription: 'Volume Up' },
                    _b[0x41] = { buttonCode: 0x41, buttonDescription: 'Volume Down' },
                    _b[0x43] = { buttonCode: 0x43, buttonDescription: 'Info' },
                    _b[0x0B] = { buttonCode: 0x0B, buttonDescription: 'Channel Up' },
                    _b[0x0D] = { buttonCode: 0x0D, buttonDescription: 'Channel Down' },
                    _b[0x0F] = { buttonCode: 0x0F, buttonDescription: 'Mute' },
                    _b[0x01] = { buttonCode: 0x01, buttonDescription: '1' },
                    _b[0x02] = { buttonCode: 0x02, buttonDescription: '2' },
                    _b[0x03] = { buttonCode: 0x03, buttonDescription: '3' },
                    _b[0x04] = { buttonCode: 0x04, buttonDescription: '4' },
                    _b[0x05] = { buttonCode: 0x05, buttonDescription: '5' },
                    _b[0x06] = { buttonCode: 0x06, buttonDescription: '6' },
                    _b[0x07] = { buttonCode: 0x07, buttonDescription: '7' },
                    _b[0x08] = { buttonCode: 0x08, buttonDescription: '8' },
                    _b[0x09] = { buttonCode: 0x09, buttonDescription: '9' },
                    _b[0x45] = { buttonCode: 0x45, buttonDescription: '0' },
                    _b[0x0C] = { buttonCode: 0x0C, buttonDescription: 'Period "."' },
                    _b[0x47] = { buttonCode: 0x47, buttonDescription: 'Last' },
                    _b[0x00] = { buttonCode: 0x00, buttonDescription: 'Option' },
                    _b[0x0E] = { buttonCode: 0x0E, buttonDescription: 'Source' },
                    _b[0x0A] = { buttonCode: 0x0A, buttonDescription: 'Exit' },
                    _b[0x46] = { buttonCode: 0x46, buttonDescription: 'Stop' },
                    _b[0x53] = { buttonCode: 0x53, buttonDescription: 'Red' },
                    _b[0x44] = { buttonCode: 0x44, buttonDescription: 'Green' },
                    _b[0x57] = { buttonCode: 0x57, buttonDescription: 'Yellow' },
                    _b[0x54] = { buttonCode: 0x54, buttonDescription: 'Blue' },
                    _b),
            };
    }
}
exports.bscGetIrRemoteControl = bscGetIrRemoteControl;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bscIsUsbHidCommunicationDevice = exports.bscIsUsbNetworkedDevice = exports.bscIsUsbAudioDevice = exports.bscDisplayUsbPortNames = exports.EolType = exports.CommandLibrarySupportType = exports.BMapProtocolType = exports.TapProtocolType = void 0;
var isNil = __webpack_require__(0);
var isString = __webpack_require__(2);
var TapProtocolType = (function () {
    function TapProtocolType() {
    }
    TapProtocolType.Serial = 'SERIAL';
    TapProtocolType.Cdc = 'CDC';
    TapProtocolType.Hid = 'HID';
    return TapProtocolType;
}());
exports.TapProtocolType = TapProtocolType;
Object.freeze(TapProtocolType);
var BMapProtocolType = (function () {
    function BMapProtocolType() {
    }
    BMapProtocolType.Hid = 'HID';
    BMapProtocolType.None = 'None';
    return BMapProtocolType;
}());
exports.BMapProtocolType = BMapProtocolType;
Object.freeze(BMapProtocolType);
var CommandLibrarySupportType = (function () {
    function CommandLibrarySupportType() {
    }
    CommandLibrarySupportType.Bmap = 'BMAP';
    CommandLibrarySupportType.Riviera = 'Riviera';
    CommandLibrarySupportType.None = 'None';
    return CommandLibrarySupportType;
}());
exports.CommandLibrarySupportType = CommandLibrarySupportType;
Object.freeze(CommandLibrarySupportType);
var EolType = (function () {
    function EolType() {
    }
    EolType.CR = 'CR';
    EolType.LF = 'LF';
    EolType.CRLF = 'CR+LF';
    return EolType;
}());
exports.EolType = EolType;
Object.freeze(EolType);
function bscDisplayUsbPortNames(partnerProduct) {
    return (bscIsUsbAudioDevice(partnerProduct)
        || bscIsUsbNetworkedDevice(partnerProduct)
        || bscIsUsbHidCommunicationDevice(partnerProduct));
}
exports.bscDisplayUsbPortNames = bscDisplayUsbPortNames;
function bscIsUsbAudioDevice(partnerProduct) {
    return (!isNil(partnerProduct.usbAudioInterfaceIndex) &&
        isString(partnerProduct.usbAudioInterfaceIndex) && partnerProduct.usbAudioInterfaceIndex.length > 0);
}
exports.bscIsUsbAudioDevice = bscIsUsbAudioDevice;
function bscIsUsbNetworkedDevice(partnerProduct) {
    return (!isNil(partnerProduct.usbNetInterfaceIndex) &&
        isString(partnerProduct.usbNetInterfaceIndex) && partnerProduct.usbNetInterfaceIndex.length > 0);
}
exports.bscIsUsbNetworkedDevice = bscIsUsbNetworkedDevice;
function bscIsUsbHidCommunicationDevice(partnerProduct) {
    return (!isNil(partnerProduct.tapProtocol) &&
        partnerProduct.tapProtocol === TapProtocolType.Hid);
}
exports.bscIsUsbHidCommunicationDevice = bscIsUsbHidCommunicationDevice;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bscGetPlayerCapabilities = void 0;
var playerModel_1 = __webpack_require__(3);
var metadata_1 = __webpack_require__(1);
var probe_1 = __webpack_require__(7);
function bscGetPlayerCapabilities(model) {
    switch (model) {
        case playerModel_1.PlayerModel.XT1144:
        case playerModel_1.PlayerModel.XT1143:
            return {
                videoDecoderCount: 2,
                videoDecoder4kCount: 2,
                videoPlaneCount: 2,
                maxImageSize: { width: 4096, height: 2160 },
                maxVideoSize: { width: 4096, height: 2160 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.FK,
                audioDecoderCount: 3,
                usbConnectorNames: [metadata_1.UsbConnectorName.UsbTypeA, metadata_1.UsbConnectorName.UsbTypeC, metadata_1.UsbConnectorName.Usb700_1,
                    metadata_1.UsbConnectorName.Usb700_2, metadata_1.UsbConnectorName.Usb700_3, metadata_1.UsbConnectorName.Usb700_4,
                    metadata_1.UsbConnectorName.Usb700_5, metadata_1.UsbConnectorName.Usb700_6, metadata_1.UsbConnectorName.Usb700_7],
            };
        case playerModel_1.PlayerModel.XT244:
        case playerModel_1.PlayerModel.XT243:
            return {
                videoDecoderCount: 2,
                videoDecoder4kCount: 2,
                videoPlaneCount: 2,
                maxImageSize: { width: 4096, height: 2160 },
                maxVideoSize: { width: 4096, height: 2160 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.FK,
                audioDecoderCount: 3,
                usbConnectorNames: [],
            };
        case playerModel_1.PlayerModel.XT1043:
            return {
                videoDecoderCount: 2,
                videoDecoder4kCount: 1,
                videoPlaneCount: 2,
                maxImageSize: { width: 2048, height: 1080 },
                maxVideoSize: { width: 4096, height: 2160 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.FK,
                audioDecoderCount: 3,
                usbConnectorNames: [],
            };
        case playerModel_1.PlayerModel.FK1142:
        case playerModel_1.PlayerModel.FK1042:
            return {
                videoDecoderCount: 2,
                videoDecoder4kCount: 1,
                videoPlaneCount: 2,
                maxImageSize: { width: 2048, height: 1080 },
                maxVideoSize: { width: 4096, height: 2160 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.FK,
                audioDecoderCount: 3,
                usbConnectorNames: [metadata_1.UsbConnectorName.UsbTypeA, metadata_1.UsbConnectorName.Usb700_1,
                    metadata_1.UsbConnectorName.Usb700_2, metadata_1.UsbConnectorName.Usb700_3, metadata_1.UsbConnectorName.Usb700_4,
                    metadata_1.UsbConnectorName.Usb700_5, metadata_1.UsbConnectorName.Usb700_6, metadata_1.UsbConnectorName.Usb700_7],
            };
        case playerModel_1.PlayerModel.FK242:
            return {
                videoDecoderCount: 2,
                videoDecoder4kCount: 1,
                videoPlaneCount: 2,
                maxImageSize: { width: 2048, height: 1080 },
                maxVideoSize: { width: 4096, height: 2160 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.FK,
                audioDecoderCount: 3,
                usbConnectorNames: [],
            };
        case playerModel_1.PlayerModel.XD1034:
        case playerModel_1.PlayerModel.XD1033:
            return {
                videoDecoderCount: 1,
                videoDecoder4kCount: 1,
                videoPlaneCount: 2,
                maxImageSize: { width: 2048, height: 1080 },
                maxVideoSize: { width: 4096, height: 2160 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.FK,
                audioDecoderCount: 3,
                usbConnectorNames: [metadata_1.UsbConnectorName.UsbTypeA, metadata_1.UsbConnectorName.UsbTypeC, metadata_1.UsbConnectorName.Usb700_1,
                    metadata_1.UsbConnectorName.Usb700_2, metadata_1.UsbConnectorName.Usb700_3, metadata_1.UsbConnectorName.Usb700_4,
                    metadata_1.UsbConnectorName.Usb700_5, metadata_1.UsbConnectorName.Usb700_6, metadata_1.UsbConnectorName.Usb700_7],
            };
        case playerModel_1.PlayerModel.XD234:
        case playerModel_1.PlayerModel.XD233:
            return {
                videoDecoderCount: 1,
                videoDecoder4kCount: 1,
                videoPlaneCount: 2,
                maxImageSize: { width: 2048, height: 1080 },
                maxVideoSize: { width: 4096, height: 2160 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.FK,
                audioDecoderCount: 3,
                usbConnectorNames: [],
            };
        case playerModel_1.PlayerModel.HD1024:
            return {
                videoDecoderCount: 1,
                videoDecoder4kCount: 1,
                videoPlaneCount: 1,
                maxImageSize: { width: 2048, height: 1080 },
                maxVideoSize: { width: 4096, height: 2160 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.FK,
                audioDecoderCount: 3,
                usbConnectorNames: [metadata_1.UsbConnectorName.UsbTypeA, metadata_1.UsbConnectorName.Usb700_1,
                    metadata_1.UsbConnectorName.Usb700_2, metadata_1.UsbConnectorName.Usb700_3, metadata_1.UsbConnectorName.Usb700_4,
                    metadata_1.UsbConnectorName.Usb700_5, metadata_1.UsbConnectorName.Usb700_6, metadata_1.UsbConnectorName.Usb700_7],
            };
        case playerModel_1.PlayerModel.HD224:
        case playerModel_1.PlayerModel.HS144:
            return {
                videoDecoderCount: 1,
                videoDecoder4kCount: 1,
                videoPlaneCount: 1,
                maxImageSize: { width: 2048, height: 1080 },
                maxVideoSize: { width: 4096, height: 2160 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.FK,
                audioDecoderCount: 3,
                usbConnectorNames: [],
            };
        case playerModel_1.PlayerModel.LS424:
            return {
                videoDecoderCount: 1,
                videoDecoder4kCount: 0,
                videoPlaneCount: 1,
                maxImageSize: { width: 1920, height: 1080 },
                maxVideoSize: { width: 1920, height: 1200 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.HD,
                audioDecoderCount: 3,
                usbConnectorNames: [metadata_1.UsbConnectorName.UsbTypeC, metadata_1.UsbConnectorName.Usb700_1,
                    metadata_1.UsbConnectorName.Usb700_2, metadata_1.UsbConnectorName.Usb700_3, metadata_1.UsbConnectorName.Usb700_4,
                    metadata_1.UsbConnectorName.Usb700_5, metadata_1.UsbConnectorName.Usb700_6, metadata_1.UsbConnectorName.Usb700_7],
            };
        case playerModel_1.PlayerModel.HD1023:
            return {
                videoDecoderCount: 1,
                videoDecoder4kCount: 0,
                videoPlaneCount: 1,
                maxImageSize: { width: 1920, height: 1080 },
                maxVideoSize: { width: 1920, height: 1200 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.HD,
                audioDecoderCount: 3,
                usbConnectorNames: [metadata_1.UsbConnectorName.UsbTypeA, metadata_1.UsbConnectorName.Usb700_1,
                    metadata_1.UsbConnectorName.Usb700_2, metadata_1.UsbConnectorName.Usb700_3, metadata_1.UsbConnectorName.Usb700_4,
                    metadata_1.UsbConnectorName.Usb700_5, metadata_1.UsbConnectorName.Usb700_6, metadata_1.UsbConnectorName.Usb700_7],
            };
        case playerModel_1.PlayerModel.HS124:
        case playerModel_1.PlayerModel.HD223:
        case playerModel_1.PlayerModel.HS123:
        case playerModel_1.PlayerModel.HO523:
        default:
            return {
                videoDecoderCount: 1,
                videoDecoder4kCount: 0,
                videoPlaneCount: 1,
                maxImageSize: { width: 1920, height: 1080 },
                maxVideoSize: { width: 1920, height: 1200 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.HD,
                audioDecoderCount: 3,
                usbConnectorNames: [],
            };
        case playerModel_1.PlayerModel.LS423:
            return {
                videoDecoderCount: 1,
                videoDecoder4kCount: 0,
                videoPlaneCount: 1,
                maxImageSize: { width: 1920, height: 1080 },
                maxVideoSize: { width: 1920, height: 1200 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.HD,
                audioDecoderCount: 3,
                usbConnectorNames: [metadata_1.UsbConnectorName.UsbTypeC, metadata_1.UsbConnectorName.Usb700_1,
                    metadata_1.UsbConnectorName.Usb700_2, metadata_1.UsbConnectorName.Usb700_3, metadata_1.UsbConnectorName.Usb700_4,
                    metadata_1.UsbConnectorName.Usb700_5, metadata_1.UsbConnectorName.Usb700_6, metadata_1.UsbConnectorName.Usb700_7],
            };
        case playerModel_1.PlayerModel.AU325:
            return {
                videoDecoderCount: 0,
                videoDecoder4kCount: 0,
                videoPlaneCount: 0,
                maxImageSize: { width: 0, height: 0 },
                maxVideoSize: { width: 0, height: 0 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.NA,
                audioDecoderCount: 3,
                usbConnectorNames: [
                    metadata_1.UsbConnectorName.Usb_1,
                    metadata_1.UsbConnectorName.Usb_2,
                    metadata_1.UsbConnectorName.Usb_3,
                    metadata_1.UsbConnectorName.Usb_4,
                    metadata_1.UsbConnectorName.Usb_5,
                    metadata_1.UsbConnectorName.Usb_6,
                ],
            };
        case playerModel_1.PlayerModel.AU335:
            return {
                videoDecoderCount: 0,
                videoDecoder4kCount: 0,
                videoPlaneCount: 0,
                maxImageSize: { width: 0, height: 0 },
                maxVideoSize: { width: 0, height: 0 },
                maxVideoContentResolution: probe_1.ProbeContentResolutionType.NA,
                audioDecoderCount: 3,
                usbConnectorNames: [metadata_1.UsbConnectorName.UsbTypeC],
            };
    }
}
exports.bscGetPlayerCapabilities = bscGetPlayerCapabilities;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishDataKeys = exports.StorageSpaceLimitUnits = exports.ScheduleRecurrencePattern = void 0;
var ScheduleRecurrencePattern = (function () {
    function ScheduleRecurrencePattern() {
    }
    ScheduleRecurrencePattern.AllDays = 'AllDays';
    ScheduleRecurrencePattern.Weekends = 'Weekends';
    ScheduleRecurrencePattern.Weekdays = 'Weekdays';
    ScheduleRecurrencePattern.Custom = 'Custom';
    return ScheduleRecurrencePattern;
}());
exports.ScheduleRecurrencePattern = ScheduleRecurrencePattern;
Object.freeze(ScheduleRecurrencePattern);
var StorageSpaceLimitUnits = (function () {
    function StorageSpaceLimitUnits() {
    }
    StorageSpaceLimitUnits.Percentage = 'Percentage';
    StorageSpaceLimitUnits.Megabyte = 'Megabyte';
    return StorageSpaceLimitUnits;
}());
exports.StorageSpaceLimitUnits = StorageSpaceLimitUnits;
exports.PublishDataKeys = [
    'hdX23Firmware', 'lsX23Firmware',
    'hsX23Firmware', 'hoX23Firmware',
    'xdX33Firmware', 'xtX43Firmware',
    'xdX34_XTX44Firmware', 'hdX4_HSX4_LSX4Firmware',
    '4KX42Firmware', 'aux5Firmware',
    'enableSerialDebugging', 'enableSystemLogDebugging', 'enableStorageSpaceLimit',
    'storageSpaceLimitUnits', 'publishedDataSizeLimit', 'dynamicDataSizeLimit',
    'htmlDataSizeLimit', 'htmlLocalStorageSizeLimit', 'webDatabaseSizeLimit',
];


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bscGetMimeTypeForFileExtension = exports.bscGetFileExtensionForMimeType = exports.bscIsLocalFileBuffer = exports.bscCreateLocalFileBuffer = exports.BsUploadItemStatus = void 0;
var BsUploadItemStatus = (function () {
    function BsUploadItemStatus() {
    }
    BsUploadItemStatus.Pending = 'Pending';
    BsUploadItemStatus.Uploading = 'Uploading';
    BsUploadItemStatus.Uploaded = 'Uploaded';
    BsUploadItemStatus.Matched = 'Matched';
    BsUploadItemStatus.Cancelled = 'Cancelled';
    BsUploadItemStatus.Failed = 'Failed';
    return BsUploadItemStatus;
}());
exports.BsUploadItemStatus = BsUploadItemStatus;
Object.freeze(BsUploadItemStatus);
function bscCreateLocalFileBuffer(name, data, type, lastModifiedDate, hash) {
    var obj = {
        name: name, data: data,
        type: type.toLowerCase(),
        lastModifiedDate: lastModifiedDate ? lastModifiedDate : new Date(),
    };
    if (hash) {
        obj.hash = hash;
    }
    return obj;
}
exports.bscCreateLocalFileBuffer = bscCreateLocalFileBuffer;
function bscIsLocalFileBuffer(obj) {
    return obj != null
        && typeof obj === 'object'
        && obj.hasOwnProperty('name') && typeof obj.name === 'string'
        && obj.hasOwnProperty('data') && (obj.data instanceof Uint8Array)
        && obj.hasOwnProperty('type') && typeof obj.name === 'string';
}
exports.bscIsLocalFileBuffer = bscIsLocalFileBuffer;
var mimeTypeExtensionMap = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/bmp': 'bmp',
    'image/svg+xml': 'svg',
    'video/mp4': 'mp4',
    'video/h264': 'mp4',
    'video/h265': 'mp4',
    'video/quicktime': 'mov',
    'video/mpeg': 'mpg',
    'video/mp2t': 'ts',
    'video/x-ms-vob': 'vob',
    'video/x-ms-wmv': 'wmv',
    'video/x-matroska': 'mkv',
    'audio/mp3': 'mp3',
    'audio/wav': 'wav',
    'audio/x-wav': 'wav',
    'audio/mp4': 'm4a',
    'audio/x-m4a': 'm4a',
    'audio/x-aiff': 'aiff',
    'audio/aac': 'aac',
    'text/plain': 'txt',
    'text/html': 'html',
    'text/xml': 'xml',
    'text/css': 'css',
    'text/javascript': 'js',
    'text/brightscript': 'brs',
    'font/ttf': 'ttf',
    'font/otf': 'otf',
    'application/bpfx': 'bpfx',
    'application/bpf': 'bpf',
};
function bscGetFileExtensionForMimeType(mimeType) {
    var ext = mimeTypeExtensionMap[mimeType];
    return ext ? '.' + ext : null;
}
exports.bscGetFileExtensionForMimeType = bscGetFileExtensionForMimeType;
var extensionMimeTypeMap;
var buildExtMap = function () {
    extensionMimeTypeMap = {};
    Object.keys(mimeTypeExtensionMap).forEach(function (mimeType) {
        var ext = mimeTypeExtensionMap[mimeType];
        if (!extensionMimeTypeMap[ext]) {
            extensionMimeTypeMap[ext] = mimeType;
        }
    });
    extensionMimeTypeMap['htm'] = extensionMimeTypeMap['html'];
};
function bscGetMimeTypeForFileExtension(extension) {
    if (!extensionMimeTypeMap) {
        buildExtMap();
    }
    if (extension.charAt(0) === '.') {
        extension = extension.slice(1);
    }
    var type = extensionMimeTypeMap[extension];
    return type ? type : 'application/octet-stream';
}
exports.bscGetMimeTypeForFileExtension = bscGetMimeTypeForFileExtension;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bscIsNumericArray = exports.bscImageOrientationToRotationType = exports.bscTimeSpanStringFromSeconds = exports.bscTimeSpanStringToSeconds = exports.bscReplaceTimeZoneWithUTC = void 0;
var metadata_1 = __webpack_require__(1);
var isString = __webpack_require__(2);
var isNil = __webpack_require__(0);
function bscReplaceTimeZoneWithUTC(time) {
    return new Date(Date.UTC(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds()));
}
exports.bscReplaceTimeZoneWithUTC = bscReplaceTimeZoneWithUTC;
function bscTimeSpanStringToSeconds(ts) {
    if (!isNil(ts)) {
        var matchResult = ts.match(/(?:(\d+)\.)?(\d\d):(\d\d):(\d\d)(\.\d+)?/);
        if (matchResult != null && matchResult.length === 6) {
            try {
                var seconds = (Number(matchResult[2]) * 3600)
                    + (Number(matchResult[3]) * 60)
                    + (Number(matchResult[4]));
                if (typeof (matchResult[1]) !== 'undefined') {
                    seconds += Number(matchResult[1]) * 86400;
                }
                if (typeof (matchResult[5]) !== 'undefined') {
                    seconds += Math.round(Number(matchResult[5]) * 1000) / 1000;
                }
                return seconds;
            }
            catch (e) {
                return 0;
            }
        }
    }
    return 0;
}
exports.bscTimeSpanStringToSeconds = bscTimeSpanStringToSeconds;
function bscTimeSpanStringFromSeconds(totalSeconds) {
    var days = Math.trunc(totalSeconds / 86400);
    var rem = totalSeconds - (days * 86400);
    var hours = Math.trunc(rem / 3600);
    rem -= (hours * 3600);
    var minutes = Math.trunc(rem / 60);
    var seconds = rem - (minutes * 60);
    var wholeSeconds = Math.floor(seconds);
    var fraction = seconds - Math.floor(seconds);
    var fractionString = fraction > 0 ? fraction.toFixed(3).substring(1) : '';
    return (days > 0 ? days.toString() + '.' : '') +
        ('00' + hours.toString()).slice(-2) + ':' +
        ('00' + minutes.toString()).slice(-2) + ':' +
        ('00' + wholeSeconds.toString()).slice(-2) + fractionString;
}
exports.bscTimeSpanStringFromSeconds = bscTimeSpanStringFromSeconds;
function bscImageOrientationToRotationType(orientation) {
    switch (orientation) {
        case metadata_1.ImageOrientationType.BottomRight:
        case metadata_1.ImageOrientationType.BottomLeft:
            return metadata_1.RotationType.rot180;
        case metadata_1.ImageOrientationType.RightTop:
        case metadata_1.ImageOrientationType.RightBottom:
            return metadata_1.RotationType.rot270;
        case metadata_1.ImageOrientationType.LeftBottom:
        case metadata_1.ImageOrientationType.LeftTop:
            return metadata_1.RotationType.rot90;
    }
    return metadata_1.RotationType.rot0;
}
exports.bscImageOrientationToRotationType = bscImageOrientationToRotationType;
function bscIsNumericArray(strArray) {
    var regEx = /\s*\d+(?:\s*-\d+)*\s*/;
    return !strArray.some(function (str) { return !(isString(str) && regEx.test(str)); });
}
exports.bscIsNumericArray = bscIsNumericArray;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bscIsFullResGraphicScalingNeeded = exports.bscScaleRectangleFromFullResolutionCoordinates = exports.bscScaleRectangleToFullResolutionCoordinates = exports.bscGetGraphicsResolution = exports.bscIsFullResGraphicsSupported = exports.bscIsHDVideoResolutionOrSmaller = exports.bscParseVideoModeResolutionAndRate = exports.bscParseVideoModeComponents = exports.bscIsValidFrameRate = exports.bscIsValidResolution = exports.bscGetFrameRates = exports.bscGetPlayerVideoModeSpecs = exports.bscIsValidConnectorType = exports.bscGetPlayerVideoConnectorTypes = exports.HdmiVideoConnectorTypeSpec = exports.AllVideoConnectorTypeSpec = exports.BobcatVgaVideoModeSpec = exports.BobcatComponentVideoModeSpec = exports.BobcatHdmiVideoModeSpec = exports.LynxVgaVideoModeSpec = exports.LynxComponentVideoModeSpec = exports.LynxHdmiVideoModeSpec = exports.PanteraVideoModeSpec = exports.FourKVideoModeSpec = exports.bscGetVideoMode = exports.VideoMode = exports.VideoFrameRate = exports.VideoResolution = void 0;
var playerModel_1 = __webpack_require__(3);
var playerFeature_1 = __webpack_require__(6);
var metadata_1 = __webpack_require__(1);
var rectangle_1 = __webpack_require__(8);
var VideoResolution = (function () {
    function VideoResolution() {
    }
    VideoResolution.v4096x2160 = '4096x2160';
    VideoResolution.v3840x2160 = '3840x2160';
    VideoResolution.v3840x1080 = '3840x1080';
    VideoResolution.v3840x600 = '3840x600';
    VideoResolution.v3440x1440 = '3440x1440';
    VideoResolution.v2560x1600 = '2560x1600';
    VideoResolution.v2560x1440 = '2560x1440';
    VideoResolution.v2560x1080 = '2560x1080';
    VideoResolution.v2560x960 = '2560x960';
    VideoResolution.v2376x288 = '2376x288';
    VideoResolution.v2048x1152 = '2048x1152';
    VideoResolution.v1920x1920 = '1920x1920';
    VideoResolution.v1920x1200 = '1920x1200';
    VideoResolution.v1920x1080 = '1920x1080';
    VideoResolution.v1920x540 = '1920x540';
    VideoResolution.v1792x1344 = '1792x1344';
    VideoResolution.v1680x1050 = '1680x1050';
    VideoResolution.v1600x1200 = '1600x1200';
    VideoResolution.v1600x900 = '1600x900';
    VideoResolution.v1440x1088 = '1440x1088';
    VideoResolution.v1440x1080 = '1440x1080';
    VideoResolution.v1440x900 = '1440x900';
    VideoResolution.v1400x1050 = '1400x1050';
    VideoResolution.v1366x768 = '1366x768';
    VideoResolution.v1360x768 = '1360x768';
    VideoResolution.v1280x1024 = '1280x1024';
    VideoResolution.v1280x960 = '1280x960';
    VideoResolution.v1280x800 = '1280x800';
    VideoResolution.v1280x768 = '1280x768';
    VideoResolution.v1280x720 = '1280x720';
    VideoResolution.v1200x1920 = '1200x1920';
    VideoResolution.v1024x768 = '1024x768';
    VideoResolution.v960x960 = '960x960';
    VideoResolution.v848x480 = '848x480';
    VideoResolution.v800x1280 = '800x1280';
    VideoResolution.v800x600 = '800x600';
    VideoResolution.v720x576 = '720x576';
    VideoResolution.v720x480 = '720x480';
    VideoResolution.v640x480 = '640x480';
    VideoResolution.vNtscComponent = 'NTSC-COMPONENT';
    VideoResolution.vNtscM = 'NTSC-M';
    VideoResolution.vNtscMJpn = 'NTSC-M-JPN';
    VideoResolution.vPalComponent = 'PAL-COMPONENT';
    VideoResolution.vPalI = 'PAL-I';
    VideoResolution.vPalBG = 'PAL-BG';
    VideoResolution.vPalN = 'PAL-N';
    VideoResolution.vPalNC = 'PAL-NC';
    VideoResolution.vPalM = 'PAL-M';
    VideoResolution.vSecam = 'SECAM';
    VideoResolution.None = '0x0';
    return VideoResolution;
}());
exports.VideoResolution = VideoResolution;
var VideoFrameRate = (function () {
    function VideoFrameRate() {
    }
    VideoFrameRate.r75p = '75p';
    VideoFrameRate.r60p = '60p';
    VideoFrameRate.r59p = '59.94p';
    VideoFrameRate.r57p = '57p';
    VideoFrameRate.r50p = '50p';
    VideoFrameRate.r30p = '30p';
    VideoFrameRate.r29p = '29.97p';
    VideoFrameRate.r25p = '25p';
    VideoFrameRate.r24p = '24p';
    VideoFrameRate.r23p = '23.976p';
    VideoFrameRate.r60i = '60i';
    VideoFrameRate.r59i = '59.94i';
    VideoFrameRate.r50i = '50i';
    VideoFrameRate.None = '0p';
    return VideoFrameRate;
}());
exports.VideoFrameRate = VideoFrameRate;
var VideoMode = (function () {
    function VideoMode() {
    }
    VideoMode.v4096x2160x60p = '4096x2160x60p';
    VideoMode.v4096x2160x59p = '4096x2160x59.94p';
    VideoMode.v4096x2160x50p = '4096x2160x50p';
    VideoMode.v4096x2160x30p = '4096x2160x30p';
    VideoMode.v4096x2160x29p = '4096x2160x29.97p';
    VideoMode.v4096x2160x25p = '4096x2160x25p';
    VideoMode.v4096x2160x24p = '4096x2160x24p';
    VideoMode.v4096x2160x23p = '4096x2160x23.976p';
    VideoMode.v3840x2160x60p = '3840x2160x60p';
    VideoMode.v3840x2160x59p = '3840x2160x59.94p';
    VideoMode.v3840x2160x50p = '3840x2160x50p';
    VideoMode.v3840x2160x30p = '3840x2160x30p';
    VideoMode.v3840x2160x29p = '3840x2160x29.97p';
    VideoMode.v3840x2160x25p = '3840x2160x25p';
    VideoMode.v3840x2160x24p = '3840x2160x24p';
    VideoMode.v3840x2160x23p = '3840x2160x23.976p';
    VideoMode.v3840x1080x60p = '3840x1080x60p';
    VideoMode.v3840x1080x50p = '3840x1080x50p';
    VideoMode.v3840x1080x30p = '3840x1080x30p';
    VideoMode.v3840x1080x25p = '3840x1080x25p';
    VideoMode.v3840x600x60p = '3840x600x60p';
    VideoMode.v3440x1440x60p = '3440x1440x60p';
    VideoMode.v3440x1440x50p = '3440x1440x50p';
    VideoMode.v3440x1440x30p = '3440x1440x30p';
    VideoMode.v2560x1600x60p = '2560x1600x60p';
    VideoMode.v2560x1440x60p = '2560x1440x60p';
    VideoMode.v2560x1440x30p = '2560x1440x30p';
    VideoMode.v2560x1080x60p = '2560x1080x60p';
    VideoMode.v2560x960x60p = '2560x960x60p';
    VideoMode.v2376x288x60p = '2376x288x60p';
    VideoMode.v2048x1152x60p = '2048x1152x60p';
    VideoMode.v1920x1920x60p = '1920x1920x60p';
    VideoMode.v1920x1200x60p = '1920x1200x60p';
    VideoMode.v1920x1200x50p = '1920x1200x50p';
    VideoMode.v1920x1080x60p = '1920x1080x60p';
    VideoMode.v1920x1080x59p = '1920x1080x59.94p';
    VideoMode.v1920x1080x50p = '1920x1080x50p';
    VideoMode.v1920x1080x30p = '1920x1080x30p';
    VideoMode.v1920x1080x29p = '1920x1080x29.97p';
    VideoMode.v1920x1080x25p = '1920x1080x25p';
    VideoMode.v1920x1080x24p = '1920x1080x24p';
    VideoMode.v1920x1080x23p = '1920x1080x23.976p';
    VideoMode.v1920x1080x60i = '1920x1080x60i';
    VideoMode.v1920x1080x59i = '1920x1080x59.94i';
    VideoMode.v1920x1080x50i = '1920x1080x50i';
    VideoMode.v1920x540x60p = '1920x540x60p';
    VideoMode.v1792x1344x60p = '1792x1344x60p';
    VideoMode.v1680x1050x60p = '1680x1050x60p';
    VideoMode.v1600x1200x60p = '1600x1200x60p';
    VideoMode.v1600x900x60p = '1600x900x60p';
    VideoMode.v1440x1088x57p = '1440x1088x57p';
    VideoMode.v1440x1080x60p = '1440x1080x60p';
    VideoMode.v1440x900x75p = '1440x900x75p';
    VideoMode.v1440x900x60p = '1440x900x60p';
    VideoMode.v1400x1050x75p = '1400x1050x75p';
    VideoMode.v1400x1050x60p = '1400x1050x60p';
    VideoMode.v1366x768x60p = '1366x768x60p';
    VideoMode.v1360x768x60p = '1360x768x60p';
    VideoMode.v1280x1024x75p = '1280x1024x75p';
    VideoMode.v1280x1024x60p = '1280x1024x60p';
    VideoMode.v1280x960x60p = '1280x960x60p';
    VideoMode.v1280x800x75p = '1280x800x75p';
    VideoMode.v1280x800x60p = '1280x800x60p';
    VideoMode.v1280x768x60p = '1280x768x60p';
    VideoMode.v1280x720x60p = '1280x720x60p';
    VideoMode.v1280x720x59p = '1280x720x59.94p';
    VideoMode.v1280x720x50p = '1280x720x50p';
    VideoMode.v1280x720x25p = '1280x720x25p';
    VideoMode.v1280x720x24p = '1280x720x24p';
    VideoMode.v1280x720x23p = '1280x720x23.976p';
    VideoMode.v1200x1920x60p = '1200x1920x60p';
    VideoMode.v1024x768x75p = '1024x768x75p';
    VideoMode.v1024x768x60p = '1024x768x60p';
    VideoMode.v960x960x60p = '960x960x60p';
    VideoMode.v848x480x60p = '848x480x60p';
    VideoMode.v800x1280x60p = '800x1280x60p';
    VideoMode.v800x600x75p = '800x600x75p';
    VideoMode.v800x600x60p = '800x600x60p';
    VideoMode.v720x576x50p = '720x576x50p';
    VideoMode.v720x576x50i = '720x576x50i';
    VideoMode.v720x480x60p = '720x480x60p';
    VideoMode.v720x480x59p = '720x480x59.94p';
    VideoMode.v720x480x60i = '720x480x60i';
    VideoMode.v640x480x60p = '640x480x60p';
    VideoMode.vNtscComponent = 'NTSC-COMPONENT';
    VideoMode.vNtscM = 'NTSC-M';
    VideoMode.vNtscMJpn = 'NTSC-M-JPN';
    VideoMode.vPalComponent = 'PAL-COMPONENT';
    VideoMode.vPalI = 'PAL-I';
    VideoMode.vPalBG = 'PAL-BG';
    VideoMode.vPalN = 'PAL-N';
    VideoMode.vPalNC = 'PAL-NC';
    VideoMode.vPalM = 'PAL-M';
    VideoMode.vSecam = 'SECAM';
    VideoMode.None = '0x0x0p';
    return VideoMode;
}());
exports.VideoMode = VideoMode;
function bscGetVideoMode(resolution, frameRate) {
    if (resolution[0] === 'N' || resolution[0] === 'P' || resolution[0] === 'S') {
        return resolution;
    }
    else {
        return resolution + 'x' + frameRate;
    }
}
exports.bscGetVideoMode = bscGetVideoMode;
exports.FourKVideoModeSpec = [
    { resolution: VideoResolution.v4096x2160, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p, VideoFrameRate.r30p, VideoFrameRate.r29p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p
        ] },
    { resolution: VideoResolution.v3840x2160, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p, VideoFrameRate.r30p, VideoFrameRate.r29p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p
        ] },
    { resolution: VideoResolution.v3840x1080, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r50p, VideoFrameRate.r30p, VideoFrameRate.r25p
        ] },
    { resolution: VideoResolution.v3840x600, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v3440x1440, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r50p, VideoFrameRate.r30p
        ] },
    { resolution: VideoResolution.v2560x1600, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v2560x1440, availableRates: [VideoFrameRate.r60p, VideoFrameRate.r30p] },
    { resolution: VideoResolution.v2560x1080, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v2560x960, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v2376x288, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v2048x1152, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1920x1920, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1920x1200, availableRates: [VideoFrameRate.r60p, VideoFrameRate.r50p] },
    { resolution: VideoResolution.v1920x1080, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p, VideoFrameRate.r30p, VideoFrameRate.r29p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p,
            VideoFrameRate.r60i, VideoFrameRate.r59i, VideoFrameRate.r50i
        ] },
    { resolution: VideoResolution.v1920x540, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1792x1344, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1680x1050, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1600x1200, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1600x900, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x1088, availableRates: [VideoFrameRate.r57p] },
    { resolution: VideoResolution.v1440x1080, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x900, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1400x1050, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1366x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1360x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x1024, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x960, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x800, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x720, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p
        ] },
    { resolution: VideoResolution.v1200x1920, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1024x768, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v960x960, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v848x480, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v800x1280, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v800x600, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v720x576, availableRates: [VideoFrameRate.r50p, VideoFrameRate.r50i] },
    { resolution: VideoResolution.v720x480, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r60i, VideoFrameRate.r59p
        ] },
    { resolution: VideoResolution.v640x480, availableRates: [VideoFrameRate.r60p] },
];
exports.PanteraVideoModeSpec = [
    { resolution: VideoResolution.v1920x1200, availableRates: [VideoFrameRate.r60p, VideoFrameRate.r50p] },
    { resolution: VideoResolution.v1920x1080, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p, VideoFrameRate.r30p, VideoFrameRate.r29p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p,
            VideoFrameRate.r60i, VideoFrameRate.r59i, VideoFrameRate.r50i
        ] },
    { resolution: VideoResolution.v1920x540, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1680x1050, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1600x1200, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1600x900, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x1088, availableRates: [VideoFrameRate.r57p] },
    { resolution: VideoResolution.v1440x1080, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x900, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1400x1050, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1366x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1360x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x1024, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x960, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x800, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x720, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p
        ] },
    { resolution: VideoResolution.v1200x1920, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1024x768, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v960x960, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v848x480, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v800x1280, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v800x600, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v720x576, availableRates: [VideoFrameRate.r50p, VideoFrameRate.r50i] },
    { resolution: VideoResolution.v720x480, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r60i, VideoFrameRate.r59p
        ] },
    { resolution: VideoResolution.v640x480, availableRates: [VideoFrameRate.r60p] },
];
exports.LynxHdmiVideoModeSpec = [
    { resolution: VideoResolution.v3840x2160, availableRates: [
            VideoFrameRate.r30p, VideoFrameRate.r29p, VideoFrameRate.r25p, VideoFrameRate.r24p
        ] },
    { resolution: VideoResolution.v1920x1200, availableRates: [VideoFrameRate.r60p, VideoFrameRate.r50p] },
    { resolution: VideoResolution.v1920x1080, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p, VideoFrameRate.r30p, VideoFrameRate.r29p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p,
            VideoFrameRate.r60i, VideoFrameRate.r59i, VideoFrameRate.r50i
        ] },
    { resolution: VideoResolution.v1920x540, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1792x1344, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1680x1050, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1600x1200, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x1080, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x900, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1400x1050, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1360x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x1024, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x960, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x800, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x720, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p
        ] },
    { resolution: VideoResolution.v1024x768, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v960x960, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v848x480, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v800x600, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v720x576, availableRates: [VideoFrameRate.r50p] },
    { resolution: VideoResolution.v720x480, availableRates: [VideoFrameRate.r60p, VideoFrameRate.r59p] },
    { resolution: VideoResolution.v640x480, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.vSecam, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vNtscComponent, availableRates: [VideoFrameRate.r59i] },
    { resolution: VideoResolution.vPalComponent, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vNtscM, availableRates: [VideoFrameRate.r59i] },
    { resolution: VideoResolution.vNtscMJpn, availableRates: [VideoFrameRate.r59i] },
    { resolution: VideoResolution.vPalI, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vPalBG, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vPalN, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vPalNC, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vPalM, availableRates: [VideoFrameRate.r59i] },
];
exports.LynxComponentVideoModeSpec = [
    { resolution: VideoResolution.v1920x1080, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p, VideoFrameRate.r30p, VideoFrameRate.r29p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p,
            VideoFrameRate.r60i, VideoFrameRate.r59i, VideoFrameRate.r50i
        ] },
    { resolution: VideoResolution.v1792x1344, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x720, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p
        ] },
    { resolution: VideoResolution.v720x576, availableRates: [VideoFrameRate.r50p] },
    { resolution: VideoResolution.v720x480, availableRates: [VideoFrameRate.r60p, VideoFrameRate.r59p] },
    { resolution: VideoResolution.vNtscComponent, availableRates: [VideoFrameRate.r59i] },
    { resolution: VideoResolution.vPalComponent, availableRates: [VideoFrameRate.r50i] },
];
exports.LynxVgaVideoModeSpec = [
    { resolution: VideoResolution.v1920x1200, availableRates: [VideoFrameRate.r60p, VideoFrameRate.r50p] },
    { resolution: VideoResolution.v1680x1050, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1600x1200, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x1080, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x900, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1400x1050, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1360x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x1024, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x960, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x800, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1024x768, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v800x600, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v640x480, availableRates: [VideoFrameRate.r60p] },
];
exports.BobcatHdmiVideoModeSpec = [
    { resolution: VideoResolution.v3840x2160, availableRates: [
            VideoFrameRate.r30p, VideoFrameRate.r29p, VideoFrameRate.r25p, VideoFrameRate.r24p
        ] },
    { resolution: VideoResolution.v1920x1200, availableRates: [VideoFrameRate.r60p, VideoFrameRate.r50p] },
    { resolution: VideoResolution.v1920x1080, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p, VideoFrameRate.r30p, VideoFrameRate.r29p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p,
            VideoFrameRate.r60i, VideoFrameRate.r59i, VideoFrameRate.r50i
        ] },
    { resolution: VideoResolution.v1920x540, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1680x1050, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1600x1200, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x1080, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x900, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1360x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x1024, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x960, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x800, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x720, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p
        ] },
    { resolution: VideoResolution.v1024x768, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v960x960, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v848x480, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v800x600, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v720x576, availableRates: [VideoFrameRate.r50p, VideoFrameRate.r50i] },
    { resolution: VideoResolution.v720x480, availableRates: [VideoFrameRate.r60p, VideoFrameRate.r60i, VideoFrameRate.r59p] },
    { resolution: VideoResolution.v640x480, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.vSecam, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vNtscComponent, availableRates: [VideoFrameRate.r59i] },
    { resolution: VideoResolution.vPalComponent, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vNtscM, availableRates: [VideoFrameRate.r59i] },
    { resolution: VideoResolution.vNtscMJpn, availableRates: [VideoFrameRate.r59i] },
    { resolution: VideoResolution.vPalI, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vPalBG, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vPalN, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vPalNC, availableRates: [VideoFrameRate.r50i] },
    { resolution: VideoResolution.vPalM, availableRates: [VideoFrameRate.r59i] },
];
exports.BobcatComponentVideoModeSpec = [
    { resolution: VideoResolution.v1920x1080, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p, VideoFrameRate.r30p, VideoFrameRate.r29p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p,
            VideoFrameRate.r60i, VideoFrameRate.r59i, VideoFrameRate.r50i
        ] },
    { resolution: VideoResolution.v1280x720, availableRates: [
            VideoFrameRate.r60p, VideoFrameRate.r59p, VideoFrameRate.r50p,
            VideoFrameRate.r25p, VideoFrameRate.r24p, VideoFrameRate.r23p
        ] },
    { resolution: VideoResolution.v720x576, availableRates: [VideoFrameRate.r50p] },
    { resolution: VideoResolution.v720x480, availableRates: [VideoFrameRate.r60p, VideoFrameRate.r59p] },
    { resolution: VideoResolution.vNtscComponent, availableRates: [VideoFrameRate.r59i] },
    { resolution: VideoResolution.vPalComponent, availableRates: [VideoFrameRate.r50i] },
];
exports.BobcatVgaVideoModeSpec = [
    { resolution: VideoResolution.v1920x1200, availableRates: [VideoFrameRate.r60p, VideoFrameRate.r50p] },
    { resolution: VideoResolution.v1680x1050, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1600x1200, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x1080, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1440x900, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1360x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x960, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x800, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1280x768, availableRates: [VideoFrameRate.r60p] },
    { resolution: VideoResolution.v1024x768, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v800x600, availableRates: [VideoFrameRate.r75p, VideoFrameRate.r60p] },
    { resolution: VideoResolution.v640x480, availableRates: [VideoFrameRate.r60p] },
];
exports.AllVideoConnectorTypeSpec = [
    metadata_1.VideoConnectorType.Hdmi,
    metadata_1.VideoConnectorType.Vga,
    metadata_1.VideoConnectorType.Component,
];
exports.HdmiVideoConnectorTypeSpec = [
    metadata_1.VideoConnectorType.Hdmi,
];
function bscGetPlayerVideoConnectorTypes(model) {
    switch (true) {
        case playerModel_1.Series4Models.has(model):
        case playerModel_1.Series3Models.has(model):
        case playerModel_1.TigerModels.has(model):
            return exports.HdmiVideoConnectorTypeSpec;
        case playerModel_1.LynxModels.has(model):
        case playerModel_1.BobcatModels.has(model):
        case playerModel_1.CheetahModels.has(model):
            return exports.AllVideoConnectorTypeSpec;
        case playerModel_1.PantherModels.has(model): {
            if (model !== playerModel_1.PlayerModel.LS322 && model !== playerModel_1.PlayerModel.AU320) {
                return model !== playerModel_1.PlayerModel.LS422 ? exports.AllVideoConnectorTypeSpec : exports.HdmiVideoConnectorTypeSpec;
            }
            else {
                return null;
            }
        }
        case playerModel_1.PumaModels.has(model): {
            if (model === playerModel_1.PlayerModel.HD920 || model === playerModel_1.PlayerModel.HD970) {
                return exports.AllVideoConnectorTypeSpec;
            }
            else {
                return exports.HdmiVideoConnectorTypeSpec;
            }
        }
        default:
            return null;
    }
}
exports.bscGetPlayerVideoConnectorTypes = bscGetPlayerVideoConnectorTypes;
function bscIsValidConnectorType(model, connectorType) {
    var validConnectorTypes = bscGetPlayerVideoConnectorTypes(model);
    if (validConnectorTypes !== null) {
        return validConnectorTypes.indexOf(connectorType) > -1;
    }
    else {
        return false;
    }
}
exports.bscIsValidConnectorType = bscIsValidConnectorType;
function bscGetPlayerVideoModeSpecs(model, connectorType) {
    switch (true) {
        case playerModel_1.MalibuModels.has(model):
        case playerModel_1.PaganiModels.has(model):
        case playerModel_1.ImpalaModels.has(model):
        case playerModel_1.TigerModels.has(model):
            return exports.FourKVideoModeSpec;
        case playerModel_1.PaganiHDModels.has(model):
        case playerModel_1.PanteraModels.has(model):
            return exports.PanteraVideoModeSpec;
        case playerModel_1.LynxModels.has(model): {
            switch (connectorType) {
                case metadata_1.VideoConnectorType.Hdmi: return exports.LynxHdmiVideoModeSpec;
                case metadata_1.VideoConnectorType.Vga: return exports.LynxVgaVideoModeSpec;
                case metadata_1.VideoConnectorType.Component: return exports.LynxComponentVideoModeSpec;
                default: return null;
            }
        }
        case playerModel_1.BobcatModels.has(model): {
            switch (connectorType) {
                case metadata_1.VideoConnectorType.Hdmi: return exports.BobcatHdmiVideoModeSpec;
                case metadata_1.VideoConnectorType.Vga: return exports.BobcatVgaVideoModeSpec;
                case metadata_1.VideoConnectorType.Component: return exports.BobcatComponentVideoModeSpec;
                default: return null;
            }
        }
        default:
            return null;
    }
}
exports.bscGetPlayerVideoModeSpecs = bscGetPlayerVideoModeSpecs;
function bscGetFrameRates(model, connectorType, resolution) {
    var videoModeOptions = bscGetPlayerVideoModeSpecs(model, connectorType);
    if (videoModeOptions !== null) {
        for (var _i = 0, videoModeOptions_1 = videoModeOptions; _i < videoModeOptions_1.length; _i++) {
            var videoModeOption = videoModeOptions_1[_i];
            if (resolution === videoModeOption.resolution) {
                return videoModeOption.availableRates;
            }
        }
    }
    return null;
}
exports.bscGetFrameRates = bscGetFrameRates;
function bscIsValidResolution(model, connectorType, resolution) {
    return bscGetFrameRates(model, connectorType, resolution) !== null;
}
exports.bscIsValidResolution = bscIsValidResolution;
function bscIsValidFrameRate(model, connectorType, resolution, frameRate) {
    var validFrameRates = bscGetFrameRates(model, connectorType, resolution);
    if (validFrameRates !== null) {
        return validFrameRates.indexOf(frameRate) > -1;
    }
    else {
        return false;
    }
}
exports.bscIsValidFrameRate = bscIsValidFrameRate;
function bscParseVideoModeComponents(mode) {
    var components = { width: 0, height: 0, frameRate: 0, interlaced: false };
    var matchResult = mode.match(/(\d*)x(\d*)x(.*|.*\..*)([ip])/);
    if (matchResult != null && matchResult.length === 5) {
        components.width = Number(matchResult[1]);
        components.height = Number(matchResult[2]);
        components.frameRate = Number(matchResult[3]);
        components.interlaced = matchResult[4] === 'i';
    }
    else if (mode.match(/NTSC/) || mode.match(/PAL-M/)) {
        components.width = 720;
        components.height = 480;
        components.frameRate = 59.94;
        components.interlaced = true;
    }
    else if (mode.match(/PAL/) || mode.match(/SECAM/)) {
        components.width = 720;
        components.height = 576;
        components.frameRate = 50;
        components.interlaced = true;
    }
    return components;
}
exports.bscParseVideoModeComponents = bscParseVideoModeComponents;
function bscParseVideoModeResolutionAndRate(mode) {
    var result = {
        resolution: VideoResolution.v1920x1080,
        frameRate: VideoFrameRate.r60p,
    };
    var matchResult = mode.match(/(\d*x\d*)x(.*|.*\..*[ip])/);
    if (matchResult != null && matchResult.length === 3) {
        result.resolution = matchResult[1];
        result.frameRate = matchResult[2];
    }
    else if (mode.match(/NTSC/) || mode.match(/PAL-M/)) {
        result.resolution = mode;
        result.frameRate = VideoFrameRate.r59i;
    }
    else if (mode.match(/PAL/) || mode.match(/SECAM/)) {
        result.resolution = mode;
        result.frameRate = VideoFrameRate.r50i;
    }
    else {
        return null;
    }
    return result;
}
exports.bscParseVideoModeResolutionAndRate = bscParseVideoModeResolutionAndRate;
function bscIsHDVideoResolutionOrSmaller(mode) {
    var components = bscParseVideoModeComponents(mode);
    return components.width <= 1920 && components.height <= 1080;
}
exports.bscIsHDVideoResolutionOrSmaller = bscIsHDVideoResolutionOrSmaller;
var FiveMPix = 5242880;
var TwoPFiveMPix = 2621440;
var MaxHiResGfxFrameRate = 30;
function bscIsFullResGraphicsSupported(model, videoMode) {
    var supported = false;
    if (playerFeature_1.bscPlayerModelHasFeature(model, playerFeature_1.ModelFeature.FullResGraphics)) {
        var videoModeComponents = bscParseVideoModeComponents(videoMode);
        if (!videoModeComponents.interlaced) {
            var totalPixels = videoModeComponents.width * videoModeComponents.height;
            supported = playerFeature_1.bscPlayerModelHasFeature(model, playerFeature_1.ModelFeature.FullResGraphicsHiFR)
                || (totalPixels > TwoPFiveMPix && totalPixels <= FiveMPix)
                || (totalPixels > FiveMPix && videoModeComponents.frameRate <= MaxHiResGfxFrameRate);
        }
    }
    return supported;
}
exports.bscIsFullResGraphicsSupported = bscIsFullResGraphicsSupported;
var VideoModesForFullResGraphicScaling = new Set([
    VideoMode.v4096x2160x60p, VideoMode.v4096x2160x59p, VideoMode.v4096x2160x50p, VideoMode.v4096x2160x30p,
    VideoMode.v4096x2160x29p, VideoMode.v4096x2160x25p, VideoMode.v4096x2160x24p, VideoMode.v4096x2160x23p,
    VideoMode.v3840x2160x60p, VideoMode.v3840x2160x59p, VideoMode.v3840x2160x50p, VideoMode.v3840x2160x23p,
    VideoMode.v3840x2160x30p, VideoMode.v3840x2160x29p, VideoMode.v3840x2160x25p, VideoMode.v3840x2160x24p,
    VideoMode.v3840x1080x60p, VideoMode.v3840x1080x50p, VideoMode.v3840x1080x30p, VideoMode.v3840x1080x25p,
    VideoMode.v3840x600x60p, VideoMode.v3440x1440x60p, VideoMode.v3440x1440x50p, VideoMode.v3440x1440x30p,
    VideoMode.v2560x1600x60p, VideoMode.v2560x1440x60p, VideoMode.v2560x1440x30p, VideoMode.v2560x1080x60p,
    VideoMode.v2560x960x60p, VideoMode.v2048x1152x60p, VideoMode.v1920x1920x60p, VideoMode.v1792x1344x60p,
]);
function bscGetGraphicsResolution(mode, fullResGraphics) {
    var videoModeComponents = bscParseVideoModeComponents(mode);
    if (!fullResGraphics && VideoModesForFullResGraphicScaling.has(mode)) {
        return {
            height: videoModeComponents.height / 2,
            width: videoModeComponents.width / 2,
        };
    }
    return {
        height: videoModeComponents.height,
        width: videoModeComponents.width,
    };
}
exports.bscGetGraphicsResolution = bscGetGraphicsResolution;
function bscScaleRectangleToFullResolutionCoordinates(rect, mode, fullResGraphics) {
    if (bscIsFullResGraphicScalingNeeded(mode, fullResGraphics) && !rect.pct) {
        return rectangle_1.bscScaleAbsoluteRect(rect, true, 2, 2);
    }
    return rect;
}
exports.bscScaleRectangleToFullResolutionCoordinates = bscScaleRectangleToFullResolutionCoordinates;
function bscScaleRectangleFromFullResolutionCoordinates(rect, mode, fullResGraphics) {
    if (bscIsFullResGraphicScalingNeeded(mode, fullResGraphics) && !rect.pct) {
        return rectangle_1.bscScaleAbsoluteRect(rect, false, 2, 2);
    }
    return rect;
}
exports.bscScaleRectangleFromFullResolutionCoordinates = bscScaleRectangleFromFullResolutionCoordinates;
function bscIsFullResGraphicScalingNeeded(mode, fullResGraphics) {
    return !fullResGraphics && VideoModesForFullResGraphicScaling.has(mode);
}
exports.bscIsFullResGraphicScalingNeeded = bscIsFullResGraphicScalingNeeded;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
 * which returns `true` for `undefined` and other non-numeric values.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && objectToString.call(value) == numberTag);
}

module.exports = isNaN;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-path");

/***/ })
/******/ ]);
});
//# sourceMappingURL=bscore.js.map