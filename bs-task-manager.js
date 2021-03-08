(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["bs-task-manager"] = factory(require("lodash"));
	else
		root["bs-task-manager"] = factory(root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
exports.BsTmError = exports.BsTmErrorType = void 0;
var BsTmErrorType;
(function (BsTmErrorType) {
    BsTmErrorType[BsTmErrorType["invalidParameters"] = 0] = "invalidParameters";
    BsTmErrorType[BsTmErrorType["taskBusy"] = 1] = "taskBusy";
    BsTmErrorType[BsTmErrorType["taskToStartNotFound"] = 2] = "taskToStartNotFound";
    BsTmErrorType[BsTmErrorType["unexpectedError"] = 3] = "unexpectedError";
})(BsTmErrorType = exports.BsTmErrorType || (exports.BsTmErrorType = {}));
var bsTmErrorMessage = (_a = {},
    _a[BsTmErrorType.invalidParameters] = 'Invalid parameters',
    _a[BsTmErrorType.unexpectedError] = 'Unexpected error',
    _a[BsTmErrorType.taskBusy] = 'Cannot start a new task. An existing task is in progress.',
    _a[BsTmErrorType.taskToStartNotFound] = 'Cannot start a new task. There is no task pending.',
    _a);
var BsTmError = (function (_super) {
    __extends(BsTmError, _super);
    function BsTmError(type, reason) {
        var _this = _super.call(this) || this;
        _this.name = 'BsTmError';
        _this.type = type;
        if (reason) {
            _this.message = bsTmErrorMessage[type] + ': ' + reason;
        }
        else {
            _this.message = bsTmErrorMessage[type];
        }
        Object.setPrototypeOf(_this, BsTmError.prototype);
        return _this;
    }
    return BsTmError;
}(Error));
exports.BsTmError = BsTmError;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsTaskType = exports.BsTaskStatus = exports.BsTaskIdNone = void 0;
exports.BsTaskIdNone = '0';
var BsTaskStatus;
(function (BsTaskStatus) {
    BsTaskStatus["WaitingForCheck"] = "WaitingForCheck";
    BsTaskStatus["Pending"] = "Pending";
    BsTaskStatus["Initializing"] = "Initializing";
    BsTaskStatus["InProgress"] = "InProgress";
    BsTaskStatus["Completed"] = "Completed";
    BsTaskStatus["Cancelled"] = "Cancelled";
    BsTaskStatus["Failed"] = "Failed";
})(BsTaskStatus = exports.BsTaskStatus || (exports.BsTaskStatus = {}));
var BsTaskType;
(function (BsTaskType) {
    BsTaskType["BpfConverterJob"] = "BpfConverterJob";
    BsTaskType["BsnContentMigrateJob"] = "BsnContentMigrateJob";
    BsTaskType["BsnContentDownloadJob"] = "BsnContentDownloadJob";
    BsTaskType["BsnUploadJob"] = "BsnUploadJob";
    BsTaskType["BsnPluginUploadJob"] = "BsnPluginUploadJob";
    BsTaskType["BsnPresentationUploadJob"] = "BsnPresentationUploadJob";
    BsTaskType["BsnDynamicPlaylistUploadJob"] = "BsnDynamicPlaylistUploadJob";
    BsTaskType["BsnLiveMediaFeedUploadJob"] = "BsnLiveMediaFeedUploadJob";
    BsTaskType["BsnPublishJob"] = "BsnPublishJob";
    BsTaskType["LfnPublishJob"] = "LfnPublishJob";
    BsTaskType["PresentationExportJob"] = "PresentationExportJob";
    BsTaskType["SfnPublishJob"] = "SfnPublishJob";
    BsTaskType["StandalonePublishJob"] = "StandalonePublishJob";
    BsTaskType["LocalToBsnPublishJob"] = "LocalToBsnPublishJob";
    BsTaskType["LocalSetupJob"] = "LocalSetupJob";
    BsTaskType["SfnSetupJob"] = "SfnSetupJob";
    BsTaskType["BsnSetupJob"] = "BsnSetupJob";
    BsTaskType["PartnerApplicationSetupJob"] = "PartnerApplicationSetupJob";
})(BsTaskType = exports.BsTaskType || (exports.BsTaskType = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsTaskManager = exports.tmGetTaskManager = void 0;
var interfaces_1 = __webpack_require__(1);
var error_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var taskManager;
function tmGetTaskManager() {
    if (!taskManager) {
        taskManager = new BsTaskManager();
    }
    return taskManager;
}
exports.tmGetTaskManager = tmGetTaskManager;
var BsTaskManager = (function () {
    function BsTaskManager() {
        this._tasks = [];
        this._tasksCompleted = [];
    }
    Object.defineProperty(BsTaskManager.prototype, "currentTask", {
        get: function () {
            if (this._tasks.length > 0) {
                return this._tasks[0];
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsTaskManager.prototype, "taskIsInProgress", {
        get: function () {
            var currentTask = this.currentTask;
            return !lodash_1.isNil(currentTask)
                && (currentTask.status === interfaces_1.BsTaskStatus.Initializing || currentTask.status === interfaces_1.BsTaskStatus.InProgress);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsTaskManager.prototype, "pendingTasks", {
        get: function () {
            return this._tasks.map(function (task) { return task.id; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsTaskManager.prototype, "pendingTaskCount", {
        get: function () {
            return this._tasks.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsTaskManager.prototype, "completedTasks", {
        get: function () {
            return this._tasksCompleted.map(function (task) { return task.id; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BsTaskManager.prototype, "completedTaskCount", {
        get: function () {
            return this._tasksCompleted.length;
        },
        enumerable: false,
        configurable: true
    });
    BsTaskManager.prototype.addTask = function (task) {
        this._tasks.push(task);
        return task.id;
    };
    BsTaskManager.prototype.startNextTask = function () {
        var _this = this;
        if (this.taskIsInProgress) {
            return Promise.reject(new error_1.BsTmError(error_1.BsTmErrorType.taskBusy));
        }
        var currentTask = this.currentTask;
        if (lodash_1.isNil(currentTask) || currentTask.status !== interfaces_1.BsTaskStatus.Pending) {
            return Promise.reject(new error_1.BsTmError(error_1.BsTmErrorType.taskToStartNotFound));
        }
        return currentTask.start()
            .then(function (taskResult) {
            var completedTask = _this._tasks.shift();
            _this._tasksCompleted.push(completedTask);
            return taskResult;
        })
            .catch(function (error) {
            var failedTask = _this._tasks.shift();
            if (!lodash_1.isNil(failedTask)) {
                if (failedTask.result != null) {
                    failedTask.result.status = interfaces_1.BsTaskStatus.Failed;
                    failedTask.result.exceptionError = error;
                }
            }
            return failedTask.result;
        });
    };
    BsTaskManager.prototype.cancelCurrentTask = function () {
        var currentTask = this.currentTask;
        if (!lodash_1.isNil(currentTask)) {
            currentTask.cancel();
        }
    };
    BsTaskManager.prototype.cancelAllTasks = function () {
        this._tasks.forEach(function (task) {
            task.cancel();
        });
    };
    BsTaskManager.prototype.getTask = function (id) {
        var returnTask = null;
        this._tasks.some(function (task) {
            if (task.id === id) {
                returnTask = task;
                return true;
            }
        });
        if (!returnTask) {
            this._tasksCompleted.some(function (task) {
                if (task.id === id) {
                    returnTask = task;
                    return true;
                }
            });
        }
        return returnTask;
    };
    BsTaskManager.prototype.removeCompletedTask = function (id) {
        var taskIndex = -1;
        this._tasksCompleted.some(function (task, index) {
            if (task.id === id) {
                taskIndex = index;
                return true;
            }
        });
        if (taskIndex >= 0) {
            this._tasksCompleted.splice(taskIndex, 1);
            return true;
        }
        return false;
    };
    BsTaskManager.prototype.clearAllCompletedTasks = function () {
        this._tasksCompleted = [];
    };
    return BsTaskManager;
}());
exports.BsTaskManager = BsTaskManager;


/***/ }),
/* 3 */
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
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(0), exports);
__exportStar(__webpack_require__(2), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })
/******/ ]);
});
//# sourceMappingURL=bs-task-manager.js.map