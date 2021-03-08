(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("redux"), require("./bscore"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "redux", "./bscore"], factory);
	else if(typeof exports === 'object')
		exports["bs-data-feed-dm"] = factory(require("lodash"), require("redux"), require("./bscore"));
	else
		root["bs-data-feed-dm"] = factory(root["lodash"], root["redux"], root["./bscore"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_28__) {
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
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 1 */
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
exports.DfDmIsDfDmError = exports.DfDmError = exports.DfDmErrorType = void 0;
var DfDmErrorType;
(function (DfDmErrorType) {
    DfDmErrorType[DfDmErrorType["unknownError"] = 0] = "unknownError";
    DfDmErrorType[DfDmErrorType["unexpectedError"] = 1] = "unexpectedError";
    DfDmErrorType[DfDmErrorType["invalidParameters"] = 2] = "invalidParameters";
    DfDmErrorType[DfDmErrorType["invalidDataFeed"] = 3] = "invalidDataFeed";
    DfDmErrorType[DfDmErrorType["emptyFieldName"] = 4] = "emptyFieldName";
    DfDmErrorType[DfDmErrorType["duplicateFieldName"] = 5] = "duplicateFieldName";
})(DfDmErrorType = exports.DfDmErrorType || (exports.DfDmErrorType = {}));
var bsnErrorMessage = (_a = {},
    _a[DfDmErrorType.unknownError] = 'Unknown error',
    _a[DfDmErrorType.unexpectedError] = 'Unexpected error',
    _a[DfDmErrorType.invalidParameters] = 'Invalid parameters',
    _a[DfDmErrorType.invalidDataFeed] = 'Invalid data feed',
    _a[DfDmErrorType.emptyFieldName] = 'Field name cannot be empty',
    _a[DfDmErrorType.duplicateFieldName] = 'Field names have to be identical',
    _a);
var DfDmError = (function (_super) {
    __extends(DfDmError, _super);
    function DfDmError(type, reason, action) {
        var _this = _super.call(this) || this;
        _this.name = 'DfDmError';
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
        Object.setPrototypeOf(_this, DfDmError.prototype);
        return _this;
    }
    DfDmError.prototype.attachAction = function (action) {
        this.action = Object.assign({}, action, { error: true, meta: { reason: this.message } });
    };
    return DfDmError;
}(Error));
exports.DfDmError = DfDmError;
function DfDmIsDfDmError(error) {
    return error instanceof DfDmError;
}
exports.DfDmIsDfDmError = DfDmIsDfDmError;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidModifiedTimeState = exports.isValidFieldsState = exports.isValidDataFeedState = exports.dfDmCheckForDuplicateFieldName = exports.dfDmCheckForEmptyFieldName = exports.dfDmCheckForInvalidDfDmState = void 0;
var dfDmError_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(4);
function dfDmCheckForInvalidDfDmState(state) {
    if (typeof state === 'object'
        && state.hasOwnProperty('dataFeed')
        && exports.isValidDataFeedState(state.dataFeed)
        && state.hasOwnProperty('fields')
        && exports.isValidFieldsState(state.fields)
        && state.hasOwnProperty('modifiedTime')
        && exports.isValidModifiedTimeState(state.modifiedTime)) {
        return null;
    }
    else {
        return new dfDmError_1.DfDmError(dfDmError_1.DfDmErrorType.invalidDataFeed, 'DfDmState structure is invalid');
    }
}
exports.dfDmCheckForInvalidDfDmState = dfDmCheckForInvalidDfDmState;
function dfDmCheckForEmptyFieldName(state) {
    if (dfDmCheckForInvalidDfDmState(state) === null) {
        if (state.fields.fieldsTitleById === {}) {
            return null;
        }
        else {
            var names_1 = state.fields.fieldsTitleById;
            Object.keys(names_1).forEach(function (key) {
                if (names_1[key] === '') {
                    return new dfDmError_1.DfDmError(dfDmError_1.DfDmErrorType.emptyFieldName);
                }
            });
            return null;
        }
    }
    else {
        return new dfDmError_1.DfDmError(dfDmError_1.DfDmErrorType.invalidDataFeed, 'DfDmState structure is invalid');
    }
}
exports.dfDmCheckForEmptyFieldName = dfDmCheckForEmptyFieldName;
function dfDmCheckForDuplicateFieldName(state) {
    if (dfDmCheckForInvalidDfDmState(state) === null) {
        if (state.fields.fieldsTitleById === {}) {
            return null;
        }
        else {
            var temp_1 = {};
            var names_2 = state.fields.fieldsTitleById;
            Object.keys(names_2).forEach(function (key) {
                var _a;
                if (!lodash_1.isNil(temp_1[names_2[key]])) {
                    return new dfDmError_1.DfDmError(dfDmError_1.DfDmErrorType.duplicateFieldName);
                }
                Object.assign(temp_1, (_a = {}, _a[names_2[key]] = names_2[key], _a));
            });
            return null;
        }
    }
    else {
        return new dfDmError_1.DfDmError(dfDmError_1.DfDmErrorType.invalidDataFeed, 'DfDmState structure is invalid');
    }
}
exports.dfDmCheckForDuplicateFieldName = dfDmCheckForDuplicateFieldName;
var isValidDataFeedState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('id')
        && state.hasOwnProperty('name');
};
exports.isValidDataFeedState = isValidDataFeedState;
var isValidFieldsState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('fieldsValue')
        && typeof state.fieldsValue === 'object'
        && state.hasOwnProperty('fieldsTitleById')
        && typeof state.fieldsTitleById === 'object'
        && state.hasOwnProperty('fieldsOrder')
        && Array.isArray(state.fieldsOrder)
        && state.fieldsOrder.length === Object.keys(state.fieldsTitleById).length;
};
exports.isValidFieldsState = isValidFieldsState;
var isValidModifiedTimeState = function (state) {
    return typeof state === 'string';
};
exports.isValidModifiedTimeState = isValidModifiedTimeState;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dfDmGetBaseState = exports.dfDmFilterBaseState = exports.dfDmGetBaseStateForUniversalTimeZone = void 0;
var dfDmError_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(4);
var bscore_1 = __webpack_require__(28);
function dfDmCheckForInvalidDfDmState(state) {
    if (typeof state === 'object'
        && state.hasOwnProperty('dataFeed')
        && state.hasOwnProperty('fields')
        && state.hasOwnProperty('modifiedTime')) {
        return null;
    }
    else {
        return new dfDmError_1.DfDmError(dfDmError_1.DfDmErrorType.invalidDataFeed, 'DfDmState structure is invalid');
    }
}
var dfDmGetBaseStateForUniversalTimeZone = function (state) {
    var baseState = lodash_1.cloneDeep(exports.dfDmFilterBaseState(state));
    baseState.fields.fieldsOrder.forEach(function (id) {
        var fieldsValue = baseState.fields.fieldsValue[id];
        if (fieldsValue.enableValidityDate === true) {
            fieldsValue.validityStartDate = bscore_1.bscReplaceTimeZoneWithUTC(fieldsValue.validityStartDate);
            fieldsValue.validityEndDate = bscore_1.bscReplaceTimeZoneWithUTC(fieldsValue.validityEndDate);
        }
    });
    return baseState;
};
exports.dfDmGetBaseStateForUniversalTimeZone = dfDmGetBaseStateForUniversalTimeZone;
var dfDmFilterBaseState = function (state) {
    if (state.hasOwnProperty('bsdfdm') && (dfDmCheckForInvalidDfDmState(state.bsdfdm) === null)) {
        return state.bsdfdm;
    }
    else if (dfDmCheckForInvalidDfDmState(state) === null) {
        return state;
    }
    else {
        var exceptionMessage = "state must be of type DfDmState or have a field bsdfdm\n      of type DfDmState. invalid state " + JSON.stringify(state);
        throw new dfDmError_1.DfDmError(dfDmError_1.DfDmErrorType.invalidParameters, exceptionMessage);
    }
};
exports.dfDmFilterBaseState = dfDmFilterBaseState;
var dfDmGetBaseState = function (state) {
    return exports.dfDmFilterBaseState(state);
};
exports.dfDmGetBaseState = dfDmGetBaseState;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DfDmIdNone = void 0;
exports.DfDmIdNone = '0';


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dfDmFilterDfDmState = exports.dfDmClearStateAction = exports.dfDmBatchActions = exports.DFDM_CLEAR_STATE = exports.DFDM_BATCH = void 0;
exports.DFDM_BATCH = 'DFDM_BATCH';
exports.DFDM_CLEAR_STATE = 'DFDM_CLEAR_STATE';
function dfDmBatchActions(actions) {
    return { type: exports.DFDM_BATCH, payload: actions };
}
exports.dfDmBatchActions = dfDmBatchActions;
function dfDmClearStateAction() {
    return { type: exports.DFDM_CLEAR_STATE, payload: null };
}
exports.dfDmClearStateAction = dfDmClearStateAction;
function dfDmFilterDfDmState(state) {
    if (state.hasOwnProperty('bsdfdm')) {
        return state.bsdfdm;
    }
    else if (state.hasOwnProperty('bsdatafeed')) {
        return state.bsdatafeed;
    }
    return state;
}
exports.dfDmFilterDfDmState = dfDmFilterDfDmState;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dfDmVerifyAndOpenDataFeed = exports.dfDmLoadDateFeedFromBsn = exports.dfDmOpenDataFeed = exports.dfDmUpdateDataFeedProperties = exports.dfDmNewDataFeed = exports.UPDATE_FEED_MODIFIED_TIME = exports.UPDATE_DATAFEED = exports.OPEN_DATAFEED = exports.NEW_DATAFEED = void 0;
var dfDmInterfaces_1 = __webpack_require__(5);
var actionBase_1 = __webpack_require__(6);
var utils_1 = __webpack_require__(9);
var dfDmStateValidate_1 = __webpack_require__(2);
var lodash_1 = __webpack_require__(4);
var selectors_1 = __webpack_require__(11);
var actionFields_1 = __webpack_require__(8);
exports.NEW_DATAFEED = 'DFDM_NEW_DATAFEED';
exports.OPEN_DATAFEED = 'DFDM_OPEN_DATAFEED';
exports.UPDATE_DATAFEED = 'DFDM_UPDATE_DATAFEED';
exports.UPDATE_FEED_MODIFIED_TIME = 'DFDM_UPDATE_FEED_MODIFIED_TIME';
function dfDmNewDataFeed(name) {
    return {
        type: exports.NEW_DATAFEED,
        payload: utils_1.createDefaultDataFeedProperties(dfDmInterfaces_1.DfDmIdNone, name.trim()),
    };
}
exports.dfDmNewDataFeed = dfDmNewDataFeed;
function dfDmUpdateDataFeedProperties(params) {
    if (!lodash_1.isNil(params.name)) {
        params.name = params.name.trim();
    }
    return {
        type: exports.UPDATE_DATAFEED,
        payload: params,
    };
}
exports.dfDmUpdateDataFeedProperties = dfDmUpdateDataFeedProperties;
function dfDmOpenDataFeed(newState) {
    return {
        type: exports.OPEN_DATAFEED,
        payload: { newState: newState },
    };
}
exports.dfDmOpenDataFeed = dfDmOpenDataFeed;
function dfDmUpdateFeedModifiedTime(lastModifiedDate) {
    return {
        type: exports.UPDATE_FEED_MODIFIED_TIME,
        payload: lastModifiedDate,
    };
}
function dfDmLoadDateFeedFromBsn(assetData, feedName) {
    return function (dispatch, getState) {
        var batchActions = [];
        if (assetData.items) {
            assetData.items.forEach(function (item) {
                var addActionPayload = actionFields_1.dfDmAddNewField(item.title);
                batchActions.push(addActionPayload);
                var updateData = {
                    id: addActionPayload.payload.fieldObject.id,
                    value: item.description,
                };
                if (lodash_1.isDate(item.validityStartDate) && lodash_1.isDate(item.validityEndDate)) {
                    updateData.validityStartDate = item.validityStartDate;
                    updateData.validityEndDate = item.validityEndDate;
                    updateData.enableValidityDate = true;
                }
                else {
                    updateData.enableValidityDate = false;
                }
                batchActions.push(actionFields_1.dfDmUpdateFieldValue(updateData));
            });
        }
        var updatedItem = lodash_1.clone(selectors_1.dfDmGetDataFeedState(getState()));
        updatedItem.name = feedName;
        var updateAction = dfDmUpdateDataFeedProperties(updatedItem);
        batchActions.push(updateAction);
        var lastModifiedDate = assetData.lastModifiedDate;
        if (lodash_1.isNil(lastModifiedDate)) {
            lastModifiedDate = new Date();
        }
        batchActions.push(dfDmUpdateFeedModifiedTime(lastModifiedDate));
        dispatch(actionBase_1.dfDmBatchActions(batchActions));
        return updateAction;
    };
}
exports.dfDmLoadDateFeedFromBsn = dfDmLoadDateFeedFromBsn;
function dfDmVerifyAndOpenDataFeed(newState) {
    return function (dispatch) {
        var action = { type: exports.OPEN_DATAFEED, payload: { newState: newState } };
        var stateError = dfDmStateValidate_1.dfDmCheckForInvalidDfDmState(newState);
        if (stateError) {
            stateError.attachAction(action);
            throw stateError;
        }
        return dispatch(action);
    };
}
exports.dfDmVerifyAndOpenDataFeed = dfDmVerifyAndOpenDataFeed;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dfDmDeleteField = exports.DELETE_FIELD = exports.dfDmUpdateFieldOrder = exports.UPDATE_FIELD_ORDER = exports.dfDmUpdateFieldValue = exports.UPDATE_FIELD_VALUE = exports.dfDmUpdateFieldName = exports.UPDATE_FIELD_TITLE = exports.dfDmAddNewField = exports.ADD_NEW_FIELD = void 0;
var utils_1 = __webpack_require__(9);
exports.ADD_NEW_FIELD = 'DFDM_ADD_NEW_FIELD';
function dfDmAddNewField(title) {
    if (title === void 0) { title = ''; }
    return {
        type: exports.ADD_NEW_FIELD,
        payload: {
            title: title,
            fieldObject: utils_1.createDefaultFieldObject(),
        },
    };
}
exports.dfDmAddNewField = dfDmAddNewField;
exports.UPDATE_FIELD_TITLE = 'DFDM_UPDATE_FIELD_TITLE';
function dfDmUpdateFieldName(id, title) {
    return {
        type: exports.UPDATE_FIELD_TITLE,
        payload: {
            id: id,
            title: title,
        },
    };
}
exports.dfDmUpdateFieldName = dfDmUpdateFieldName;
exports.UPDATE_FIELD_VALUE = 'DFDM_UPDATE_FIELD_VALUE';
function dfDmUpdateFieldValue(params) {
    return {
        type: exports.UPDATE_FIELD_VALUE,
        payload: params,
    };
}
exports.dfDmUpdateFieldValue = dfDmUpdateFieldValue;
exports.UPDATE_FIELD_ORDER = 'DFDM_UPDATE_FIELD_ORDER';
function dfDmUpdateFieldOrder(params) {
    return {
        type: exports.UPDATE_FIELD_ORDER,
        payload: params,
    };
}
exports.dfDmUpdateFieldOrder = dfDmUpdateFieldOrder;
exports.DELETE_FIELD = 'DFDM_DELETE_FIELD';
function dfDmDeleteField(id) {
    var ids = typeof id === 'string' ? [id] : id;
    return {
        type: exports.DELETE_FIELD,
        payload: {
            nameIds: ids,
        },
    };
}
exports.dfDmDeleteField = dfDmDeleteField;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultFieldObject = exports.createDefaultDataFeedProperties = exports.isValidDfDmId = exports.newDfDmId = void 0;
var uuid_1 = __webpack_require__(25);
var newDfDmId = function () { return uuid_1.v4(); };
exports.newDfDmId = newDfDmId;
var reValidId = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var isValidDfDmId = function (id) {
    var ret = id.match(reValidId);
    return ret && id === ret[0];
};
exports.isValidDfDmId = isValidDfDmId;
var createDefaultDataFeedProperties = function (id, name) {
    return {
        id: id,
        name: name,
        lastModifiedDate: null,
    };
};
exports.createDefaultDataFeedProperties = createDefaultDataFeedProperties;
var createDefaultFieldObject = function () {
    return {
        id: exports.newDfDmId(),
        value: '',
        enableValidityDate: false,
        validityStartDate: null,
        validityEndDate: null,
    };
};
exports.createDefaultFieldObject = createDefaultFieldObject;


/***/ }),
/* 10 */
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
/* 11 */
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
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(23), exports);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dataFeedReducer = void 0;
var utils_1 = __webpack_require__(9);
var dfDmInterfaces_1 = __webpack_require__(5);
var actionDataFeed_1 = __webpack_require__(7);
var actionBase_1 = __webpack_require__(6);
var newDataFeed = utils_1.createDefaultDataFeedProperties(dfDmInterfaces_1.DfDmIdNone, 'Untitled');
var dataFeed = function (state, _a) {
    if (state === void 0) { state = newDataFeed; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actionDataFeed_1.NEW_DATAFEED: {
            return Object.assign({}, payload);
        }
        case actionDataFeed_1.UPDATE_DATAFEED: {
            var id = payload.id;
            if (state.id === id) {
                return Object.assign({}, state, payload);
            }
            break;
        }
        case actionDataFeed_1.OPEN_DATAFEED: {
            var newState = payload.newState;
            return newState.dataFeed;
        }
        case actionBase_1.DFDM_CLEAR_STATE: {
            return newDataFeed;
        }
    }
    return state;
};
exports.dataFeedReducer = dataFeed;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldsReducer = void 0;
var redux_1 = __webpack_require__(17);
var lodash_1 = __webpack_require__(4);
var actions_1 = __webpack_require__(0);
var actions_2 = __webpack_require__(0);
var actions_3 = __webpack_require__(0);
var fieldsTitleById = function (state, action) {
    var _a, _b;
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_2.NEW_DATAFEED: {
            return {};
        }
        case actions_2.OPEN_DATAFEED: {
            var newState = payload.newState;
            return Object.assign({}, newState.fields.fieldsTitleById);
        }
        case actions_1.ADD_NEW_FIELD: {
            var _c = payload, fieldObject = _c.fieldObject, title = _c.title;
            return Object.assign({}, state, (_a = {}, _a[fieldObject.id] = title, _a));
        }
        case actions_1.UPDATE_FIELD_TITLE: {
            var _d = payload, id = _d.id, title = _d.title;
            if (state[id] !== undefined) {
                return Object.assign({}, state, (_b = {}, _b[id] = title, _b));
            }
            break;
        }
        case actions_1.DELETE_FIELD: {
            var nameIds = payload.nameIds;
            return lodash_1.omit(state, nameIds);
        }
        case actions_3.DFDM_CLEAR_STATE: {
            return {};
        }
    }
    return state;
};
var fieldsValue = function (state, action) {
    var _a, _b;
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_2.NEW_DATAFEED: {
            return {};
        }
        case actions_2.OPEN_DATAFEED: {
            var newState = payload.newState;
            return Object.assign({}, newState.fields.fieldsValue);
        }
        case actions_1.ADD_NEW_FIELD: {
            var fieldObject = payload.fieldObject;
            return Object.assign({}, state, (_a = {}, _a[fieldObject.id] = fieldObject, _a));
        }
        case actions_1.UPDATE_FIELD_VALUE: {
            var fieldObject = payload;
            if (state[fieldObject.id] !== undefined) {
                var newObject = Object.assign({}, state[fieldObject.id], fieldObject);
                return Object.assign({}, state, (_b = {}, _b[fieldObject.id] = newObject, _b));
            }
            break;
        }
        case actions_1.DELETE_FIELD: {
            var nameIds = payload.nameIds;
            return lodash_1.omit(state, nameIds);
        }
        case actions_3.DFDM_CLEAR_STATE: {
            return {};
        }
    }
    return state;
};
var fieldsOrder = function (state, action) {
    if (state === void 0) { state = []; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actions_2.NEW_DATAFEED: {
            return [];
        }
        case actions_2.OPEN_DATAFEED: {
            var newState = payload.newState;
            return Object.assign([], newState.fields.fieldsOrder);
        }
        case actions_1.ADD_NEW_FIELD: {
            var fieldObject = payload.fieldObject;
            var newState = state.slice();
            newState.push(fieldObject.id);
            return newState;
        }
        case actions_1.UPDATE_FIELD_ORDER: {
            var _a = payload, nameIds = _a.nameIds, index = _a.index;
            var newIndex = index;
            var map_1 = {};
            var newArray = [];
            nameIds.forEach(function (x) {
                map_1[x] = x;
            });
            for (var i = 0, j = 0; j < nameIds.length;) {
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
        case actions_1.DELETE_FIELD: {
            var nameIds_1 = payload.nameIds;
            return state.filter(function (n) { return nameIds_1.indexOf(n) < 0; });
        }
        case actions_3.DFDM_CLEAR_STATE: {
            return [];
        }
    }
    return state;
};
var fields = redux_1.combineReducers({ fieldsOrder: fieldsOrder, fieldsTitleById: fieldsTitleById, fieldsValue: fieldsValue });
exports.fieldsReducer = fields;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastModifiedTime = exports.dfModifiedTimeReducer = void 0;
var actions_1 = __webpack_require__(0);
var modifiedTime = function (state, action) {
    if (state === void 0) { state = (new Date()).toISOString(); }
    if (action.type === actions_1.UPDATE_FEED_MODIFIED_TIME) {
        var modifiedDate = action.payload;
        return modifiedDate.toISOString();
    }
    else if (actions_1.dfDmActionModifiesDmState(action)) {
        return (new Date()).toISOString();
    }
    return state;
};
exports.dfModifiedTimeReducer = modifiedTime;
var getLastModifiedTime = function (state) {
    return state !== undefined ? state : (new Date()).toISOString();
};
exports.getLastModifiedTime = getLastModifiedTime;


/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux");

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
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dfDmActionModifiesDmState = exports.modifyingActionTypesSet = exports.modifyingActionTypesArray = void 0;
var actionFields_1 = __webpack_require__(8);
var actionDataFeed_1 = __webpack_require__(7);
exports.modifyingActionTypesArray = [
    actionFields_1.ADD_NEW_FIELD, actionFields_1.UPDATE_FIELD_TITLE, actionFields_1.UPDATE_FIELD_VALUE, actionDataFeed_1.NEW_DATAFEED, actionDataFeed_1.UPDATE_DATAFEED, actionFields_1.DELETE_FIELD,
];
exports.modifyingActionTypesSet = new Set(exports.modifyingActionTypesArray);
function dfDmActionModifiesDmState(action) {
    return exports.modifyingActionTypesSet.has(action.type);
}
exports.dfDmActionModifiesDmState = dfDmActionModifiesDmState;


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
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(0), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(2), exports);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dfDmReducer = void 0;
var redux_1 = __webpack_require__(17);
var actions_1 = __webpack_require__(0);
var reducerDataFeed_1 = __webpack_require__(12);
var reducerFields_1 = __webpack_require__(13);
var reducerModifiedTime_1 = __webpack_require__(14);
function enableBatching(reduce) {
    return function batchingReducer(state, action) {
        switch (action.type) {
            case actions_1.DFDM_BATCH:
                return action.payload.reduce(batchingReducer, state);
            default:
                return reduce(state, action);
        }
    };
}
exports.dfDmReducer = enableBatching(redux_1.combineReducers({
    dataFeed: reducerDataFeed_1.dataFeedReducer,
    fields: reducerFields_1.fieldsReducer,
    modifiedTime: reducerModifiedTime_1.dfModifiedTimeReducer,
}));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dfDmGetDataFeedName = exports.dfDmGetDataFeedState = void 0;
var reselect_1 = __webpack_require__(10);
var base_1 = __webpack_require__(3);
var dfDmStateValidate_1 = __webpack_require__(2);
var dfDmError_1 = __webpack_require__(1);
var dfDmGetDataFeedState = function (state) {
    return getDataFeedState(state);
};
exports.dfDmGetDataFeedState = dfDmGetDataFeedState;
var getDataFeedState = reselect_1.createSelector(base_1.dfDmGetBaseState, function (state) {
    if (dfDmStateValidate_1.isValidDataFeedState(state.dataFeed)) {
        return state.dataFeed;
    }
    else {
        var exceptionMessage = "state must be of type DfDmState or\n        have a field bsdfdm of type DfDmState. invalid state.dataFeed\n        " + JSON.stringify(state.dataFeed);
        throw new dfDmError_1.DfDmError(dfDmError_1.DfDmErrorType.invalidParameters, exceptionMessage);
    }
});
function dfDmGetDataFeedName(state) {
    return getDataFeedName(state);
}
exports.dfDmGetDataFeedName = dfDmGetDataFeedName;
var getDataFeedName = reselect_1.createSelector(exports.dfDmGetDataFeedState, function (state) {
    return state.name;
});


/***/ }),
/* 23 */
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
exports.dfDmGetAllFieldValueEntities = exports.dfDmGetFieldValueEntityById = exports.dfDmGetFieldValueObjectById = exports.dfDmGetFieldTitleById = exports.dfDmGetFieldsValueMap = exports.dfDmGetFieldsTitleMap = exports.dfDmGetFieldsOrder = exports.dfDmGetFieldsState = void 0;
var reselect_1 = __webpack_require__(10);
var base_1 = __webpack_require__(3);
var dfDmStateValidate_1 = __webpack_require__(2);
var dfDmError_1 = __webpack_require__(1);
var dfDmGetFieldsState = function (state) {
    return getFieldsState(state);
};
exports.dfDmGetFieldsState = dfDmGetFieldsState;
var getFieldsState = reselect_1.createSelector(base_1.dfDmGetBaseState, function (state) {
    if (dfDmStateValidate_1.isValidFieldsState(state.fields)) {
        return state.fields;
    }
    else {
        var exceptionMessage = "state must be of type DfDmState or\n        have a field bsdfdm of type DfDmState. invalid state.fields\n        " + JSON.stringify(state.fields);
        throw new dfDmError_1.DfDmError(dfDmError_1.DfDmErrorType.invalidParameters, exceptionMessage);
    }
});
function dfDmGetFieldsOrder(state) {
    return getFieldsOrder(state);
}
exports.dfDmGetFieldsOrder = dfDmGetFieldsOrder;
var getFieldsOrder = reselect_1.createSelector(exports.dfDmGetFieldsState, function (state) {
    return state.fieldsOrder;
});
function dfDmGetFieldsTitleMap(state) {
    return getFieldsNameMap(state);
}
exports.dfDmGetFieldsTitleMap = dfDmGetFieldsTitleMap;
var getFieldsNameMap = reselect_1.createSelector(exports.dfDmGetFieldsState, function (state) {
    return state.fieldsTitleById;
});
function dfDmGetFieldsValueMap(state) {
    return getFieldsValueMap(state);
}
exports.dfDmGetFieldsValueMap = dfDmGetFieldsValueMap;
var getFieldsValueMap = reselect_1.createSelector(exports.dfDmGetFieldsState, function (state) {
    return state.fieldsValue;
});
function dfDmGetFieldTitleById(state, props) {
    var subState = dfDmGetFieldsTitleMap(state);
    var title = subState[props.id];
    return title ? title : null;
}
exports.dfDmGetFieldTitleById = dfDmGetFieldTitleById;
function dfDmGetFieldValueObjectById(state, props) {
    var subState = dfDmGetFieldsValueMap(state);
    var valueObject = subState[props.id];
    return valueObject ? valueObject : null;
}
exports.dfDmGetFieldValueObjectById = dfDmGetFieldValueObjectById;
function dfDmGetFieldValueEntityById(state, props) {
    var title = dfDmGetFieldTitleById(state, props);
    var valueObject = dfDmGetFieldValueObjectById(state, props);
    return __assign({ title: title }, valueObject);
}
exports.dfDmGetFieldValueEntityById = dfDmGetFieldValueEntityById;
function dfDmGetAllFieldValueEntities(state) {
    var order = dfDmGetFieldsOrder(state);
    return order.map(function (id) { return dfDmGetFieldValueEntityById(state, { id: id }); });
}
exports.dfDmGetAllFieldValueEntities = dfDmGetAllFieldValueEntities;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dfDmGetDataFeedLastModifiedTime = exports.dfDmGetModifiedTimeState = void 0;
var reselect_1 = __webpack_require__(10);
var base_1 = __webpack_require__(3);
var dfDmError_1 = __webpack_require__(1);
var dfDmStateValidate_1 = __webpack_require__(2);
var dfDmGetModifiedTimeState = function (state) {
    return getModifiedTimeState(state);
};
exports.dfDmGetModifiedTimeState = dfDmGetModifiedTimeState;
var getModifiedTimeState = reselect_1.createSelector(base_1.dfDmGetBaseState, function (state) {
    if (dfDmStateValidate_1.isValidModifiedTimeState(state.modifiedTime)) {
        return state.modifiedTime;
    }
    else {
        var exceptionMessage = "state must be of type DfDmState or\n        have a field bsdfdm of type DfDmState. invalid state.modifiedTime\n        " + JSON.stringify(state.modifiedTime);
        throw new dfDmError_1.DfDmError(dfDmError_1.DfDmErrorType.invalidParameters, exceptionMessage);
    }
});
function dfDmGetDataFeedLastModifiedTime(state) {
    return getDataFeedLastModifiedTime(state);
}
exports.dfDmGetDataFeedLastModifiedTime = dfDmGetDataFeedLastModifiedTime;
var getDataFeedLastModifiedTime = reselect_1.createSelector(exports.dfDmGetModifiedTimeState, function (state) {
    return new Date(state);
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(26);
var v4 = __webpack_require__(27);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(16);
var bytesToUuid = __webpack_require__(15);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(16);
var bytesToUuid = __webpack_require__(15);

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


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("./bscore");

/***/ })
/******/ ]);
});