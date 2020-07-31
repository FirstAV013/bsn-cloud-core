/* tslint:disable:quotemark max-line-length */
export type BsTaskId = string;
export const BsTaskIdNone = "0";
export enum BsTaskStatus {
    WaitingForCheck = "WaitingForCheck",
    Pending = "Pending",
    Initializing = "Initializing",
    InProgress = "InProgress",
    Completed = "Completed",
    Cancelled = "Cancelled",
    Failed = "Failed"
}
export enum BsTaskType {
    BpfConverterJob = "BpfConverterJob",
    BsnContentMigrateJob = "BsnContentMigrateJob",
    BsnContentDownloadJob = "BsnContentDownloadJob",
    BsnUploadJob = "BsnUploadJob",
    BsnPluginUploadJob = "BsnPluginUploadJob",
    BsnPresentationUploadJob = "BsnPresentationUploadJob",
    BsnDynamicPlaylistUploadJob = "BsnDynamicPlaylistUploadJob",
    BsnLiveMediaFeedUploadJob = "BsnLiveMediaFeedUploadJob",
    BsnPublishJob = "BsnPublishJob",
    LfnPublishJob = "LfnPublishJob",
    PresentationExportJob = "PresentationExportJob",
    SfnPublishJob = "SfnPublishJob",
    StandalonePublishJob = "StandalonePublishJob",
    LocalToBsnPublishJob = "LocalToBsnPublishJob",
    LocalSetupJob = "LocalSetupJob",
    SfnSetupJob = "SfnSetupJob",
    BsnSetupJob = "BsnSetupJob",
    PartnerApplicationSetupJob = "PartnerApplicationSetupJob"
}
export interface BsTaskResult {
    id: BsTaskId;
    type: BsTaskType;
    status: BsTaskStatus;
    startTime: Date;
    hasItemFailures: boolean;
    exceptionError?: Error | null;
}
export interface BsTaskProgress {
    id: BsTaskId;
    type: BsTaskType;
    status: BsTaskStatus;
    startTime: Date;
    totalItems: number;
    completedItems: number;
    failedItems: number;
    totalProgressFraction: number;
}
export type BsTaskProgressCallback = (taskProgress: BsTaskProgress) => void;
export interface BsTask {
    id: BsTaskId;
    name: string;
    type: BsTaskType;
    status: BsTaskStatus;
    startTime: Date;
    progress: BsTaskProgress;
    result: BsTaskResult;
    isDone: boolean;
    isCancelled: boolean;
    cancellationRequested: boolean;
    hasItemFailures: boolean;
    start(): Promise<BsTaskResult>;
    cancel(): void;
}

export enum BsTmErrorType {
    invalidParameters = 0,
    taskBusy = 1,
    taskToStartNotFound = 2,
    unexpectedError = 3
}
export class BsTmError extends Error {
    name: string;
    type: BsTmErrorType;
    constructor(type: BsTmErrorType, reason?: string);
}

export function tmGetTaskManager(): BsTaskManager;
export class BsTaskManager {
    get currentTask(): BsTask;
    get taskIsInProgress(): boolean;
    get pendingTasks(): BsTaskId[];
    get pendingTaskCount(): number;
    get completedTasks(): BsTaskId[];
    get completedTaskCount(): number;
    addTask(task: BsTask): BsTaskId;
    startNextTask(): Promise<BsTaskResult>;
    cancelCurrentTask(): void;
    cancelAllTasks(): void;
    getTask(id: BsTaskId): Readonly<BsTask> | null;
    removeCompletedTask(id: BsTaskId): boolean;
    clearAllCompletedTasks(): void;
}
