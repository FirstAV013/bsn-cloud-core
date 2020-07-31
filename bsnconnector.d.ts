/* tslint:disable:quotemark max-line-length trailing-comma */
import {BsAssetItem, BscFileTypeInfo, BsColor, BsnAutorunProperties, BsnCustomFields, BsnGroupItem, BsnPresentationStatus, BsnPresentationType, BsnScreenSettings, BsnTaggedPlaylistItemStatus, BsnTagSpecification, ColorSpaceType, ImageOrientationType, LanguageType, MediaType, MonitorOrientationType, PlayerFamily, PlayerModel, StorageSpaceLimitUnits, TimeSpanString, VideoConnectorType, VideoMode, BsnConnectorOverrideProps, BsnFilterCombineType, BsnFilterComponent, BsnFilterSpecification, BsnFilterType, BsnTagSortSpecification, BsnTagKeySpecification, BsnTagKeyPatternSpecification, BsnTagValuePatternSpecification, BsProfileEntity, BDeployApplication, BDeployDevice, BDeployDeviceFilter, BDeploySetupFilter, BsDsSetupParams, BsnDeviceRegistrationTokenEntity, BsAssetLocator, BsUploadFile, BsUploadFileProgressCallback, BsUploadFileSource, BsUploadWebPage, BsUploadWebPageProgressCallback, BsUploadWebPageSessionSpec} from './bscore';
export interface BsnFileContentEntity {
    id: number;
    fileName: string;
    physicalPath: string;
    virtualPath: string;
    thumbPath: string;
    mediaType: MediaType;
    fileSize: number;
    fileHash: string;
    uploadDate: Date;
    lastModifiedDate: Date;
    fileLastModifiedDate: Date;
    metadata: BsnMediaFileMetadata;
    probeData: string;
    dynamicPlaylists: BsnDataFeedReferenceEntity[];
    liveMediaFeeds: BsnDataFeedReferenceEntity[];
    taggedPlaylists: BsnDataFeedReferenceEntity[];
    presentations: BsnPresentationReferenceEntity[];
    tags: BsnTagSpecification[];
    permissions: BsnPermissionEntity[];
}
export interface BsnFolderContentEntity {
    id: number;
    name: string;
    mediaType: 'Folder';
    virtualPath: string;
    thumbPath: string;
    creationDate: Date;
    lastModifiedDate: Date;
    hasSubFolders: boolean;
    hasFiles: boolean;
    permissions: BsnPermissionEntity[];
}
export type BsnContentEntity = BsnFileContentEntity | BsnFolderContentEntity;
export function bsnIsFolderContentEntity(item: BsnContentEntity): item is BsnFolderContentEntity;
export function bsnIsFileContentEntity(item: BsnContentEntity): item is BsnFileContentEntity;
export enum BsnContentSortField {
    name = "fileName",
    mediaType = "mediaType",
    fileSize = "fileSize",
    uploadDate = "uploadDate",
    lastModifiedDate = "fileLastModifiedDate"
}
export type BsnSortField = BsnContentSortField | BsnPresentationSortField | BsnDataFeedSortField | BsnHtmlSiteSortField | BsnPluginSortField;
export interface BsnAudioFileMetadata {
    transport?: string | null;
    packetLen?: number | null;
    indexed?: boolean | null;
    audioCodec?: string | null;
    audioPid?: number | null;
    audioChannelCount?: number | null;
    audioSampleRate?: number | null;
    audioBitrate?: number | null;
    duration?: TimeSpanString | null;
}
export interface BsnVideoFileMetadata extends BsnAudioFileMetadata {
    videoCodec?: string | null;
    videoPid?: number | null;
    widthPx?: number | null;
    heightPx?: number | null;
    subtitlePid?: number | null;
    subtitleLanguage?: string | null;
    videoDuration?: TimeSpanString | null;
    audioDuration?: TimeSpanString | null;
}
export interface BsnImageFileMetadata {
    widthPx: number;
    heightPx: number;
    colorSpace: ColorSpaceType;
    colorDepthBit: number;
    imageFormat: string;
    dateTaken?: Date | null;
    orientation: ImageOrientationType;
}
export type BsnMediaFileMetadata = BsnVideoFileMetadata | BsnAudioFileMetadata | BsnImageFileMetadata | {};
export enum BsnPresentationFileType {
    New = "New",
    Stored = "Stored",
    Media = "Media",
    LiveTextFeed = "LiveTextFeed",
    LiveMediaFeed = "LiveMediaFeed",
    DynamicPlaylist = "DynamicPlaylist",
    TaggedPlaylist = "TaggedPlaylist",
    WebPage = "WebPage",
    DeviceWebPage = "DeviceWebPage",
    Remote = "Remote"
}
export function bsnPresentationFileEntityToFileTypeInfo(pf: BsnPresentationFile): BscFileTypeInfo;
export function bsnAssetItemToBsnPresentationFileType(assetItem: BsAssetItem): BsnPresentationFileType;
export interface BsnPresentationFile {
    id: number;
    path: string | null;
    type: BsnPresentationFileType;
    mediaType?: MediaType | null;
    name: string | null;
    size: number | null;
    hash: string | null;
    creationDate: Date | null;
    lastModifiedDate: Date | null;
}
export interface BsnPresentationNewFile {
    type: 'New';
    name: string;
    body: object | string;
    transferEncoding: string;
    size: number;
    lastModifiedDate: Date | string;
    creationDate: Date | string;
}
export interface BsnPresentationEntity {
    id: number;
    name: string;
    type: BsnPresentationType;
    status: BsnPresentationStatus;
    creationDate: Date;
    lastModifiedDate: Date;
    autorun: BsnAutorunProperties;
    deviceModel: PlayerModel;
    screenSettings: BsnScreenSettings;
    language: LanguageType;
    autoplayFile: BsnPresentationFile | null;
    projectFile: BsnPresentationFile | null;
    resourcesFile: BsnPresentationFile | null;
    userDefinedEventsFile: BsnPresentationFile | null;
    thumbnailFile: BsnPresentationFile | null;
    deviceWebPage: BsnPresentationFile | null;
    autorunPlugins: BsnPresentationFile[] | null;
    files: BsnPresentationFile[] | null;
    dependencies: BsnPresentationReferenceEntity[] | null;
    groups: BsnGroupItem[];
    permissions: BsnPermissionEntity[];
}
export enum BsnPresentationReferenceTypeField {
    Presentation = "Presentation",
    BrightWallPresentation = "BrightWallPresentation"
}
export interface BsnPresentationReferenceEntity {
    id: number;
    name: string;
    type: BsnPresentationReferenceTypeField;
}
export interface BsnPresentationSaveData {
    id?: number;
    name?: string;
    autorunVersion: string;
    deviceModel: PlayerModel;
    videoMode: VideoMode;
    connector?: VideoConnectorType;
    backgroundColor: BsColor;
    language?: LanguageType;
    projectState?: object;
    projectFileId?: number;
    thumbnailData?: Uint8Array;
    thumbnailExt?: string;
    thumbnailFileId?: number;
}
export interface BsnPresentationAssetFileData {
    mediaFiles?: BsnPresentationFile[];
    webPages?: BsnPresentationFile[];
    liveTextFeeds?: BsnPresentationFile[];
    liveMediaFeeds?: BsnPresentationFile[];
    dynamicPlaylists?: BsnPresentationFile[];
    taggedPlaylists?: BsnPresentationFile[];
    autorunPlugins?: BsnPresentationFile[];
    deviceWebPage?: BsnPresentationFile;
    presentationDependencies?: BsnPresentationReferenceEntity[];
}
export interface BsnPresentationPublishFileData extends BsnPresentationAssetFileData {
    autoplayFileData: object;
    resourcesFileData?: Uint8Array;
    resourcesFileId?: number;
    userDefinedEventsData?: object;
    userDefinedEventsId?: number;
}
export enum BsnPresentationSortField {
    name = "name",
    type = "type",
    status = "status",
    creationDate = "creationDate",
    lastModifiedDate = "lastModifiedDate"
}
export const bsColorToBsnColor: (color: BsColor) => string;
export const bsnColorToBsColor: (color: string) => BsColor;
export interface BsnEntityListBase {
    totalItemCount: number;
    matchingItemCount: number;
    pageSize: number;
    nextMarker: string;
    isTruncated: boolean;
    sortExpression: string;
    filterExpression: string;
}
export interface BsnDataFeedItemEntityBase {
    title: string;
    description: string;
    validityStartDate: Date;
    validityEndDate: Date;
}
export interface BsnDataFeedEntityBase {
    id: number;
    name: string;
    physicalPath: string;
    fileSize: number;
    fileHash: string;
    creationDate: Date;
    lastModifiedDate: Date;
    presentations: BsnPresentationReferenceEntity[];
    permissions: BsnPermissionEntity[];
}
export enum BsnDataFeedSortField {
    name = "name",
    fileSize = "fileSize",
    creationDate = "creationDate",
    lastModifiedDate = "lastModifiedDate"
}
export type BsnTextFeedItemEntity = BsnDataFeedItemEntityBase;
export interface BsnTextFeedEntity extends BsnDataFeedEntityBase {
    items: BsnTextFeedItemEntity[] | null;
}
export interface BsnTextFeedListEntity extends BsnEntityListBase {
    items: BsnTextFeedEntity[];
}
export interface BsnTextFeedSaveData {
    id?: number;
    name: string;
    items: BsnTextFeedItemEntity[];
}
export interface BsnMediaFeedItemEntity extends BsnDataFeedItemEntityBase {
    contentId: number;
    fileName: string;
    disabled: boolean;
    displayDuration: TimeSpanString;
    customFields: BsnCustomFields | null;
}
export interface BsnMediaFeedEntity extends BsnDataFeedEntityBase {
    ttl: TimeSpanString;
    content: BsnMediaFeedItemEntity[] | null;
}
export interface BsnMediaFeedListEntity extends BsnEntityListBase {
    items: BsnMediaFeedEntity[];
}
export interface BsnMediaFeedSaveData {
    id?: number;
    name: string;
    ttl: TimeSpanString;
    content: BsnMediaFeedItemEntity[] | null;
}
export interface BsnDynamicPlaylistItemEntity {
    contentId: number;
    fileName: string;
    displayDuration: TimeSpanString | null;
    validityStartDate: Date | null;
    validityEndDate: Date | null;
}
export interface BsnTaggedPlaylistItemEntity extends BsnDynamicPlaylistItemEntity {
    state: BsnTaggedPlaylistItemStatus;
}
export interface BsnDynamicPlaylistEntity extends BsnDataFeedEntityBase {
    supportsAudio: boolean;
    supportsVideo: boolean;
    supportsImages: boolean;
    content: BsnDynamicPlaylistItemEntity[] | null;
}
export interface BsnDynamicPlaylistSaveData {
    id?: number;
    name: string;
    supportsAudio: boolean;
    supportsVideo: boolean;
    supportsImages: boolean;
    content: BsnDynamicPlaylistItemEntity[] | null;
}
export interface BsnDynamicPlaylistListEntity extends BsnEntityListBase {
    items: BsnDynamicPlaylistEntity[];
}
export interface BsnTaggedPlaylistEntity {
    id: number;
    name: string;
    physicalPath: string;
    contentsVirtualPath: string;
    rule: string | null;
    orderTag: string | null;
    ttl: TimeSpanString;
    waitingForApprove: boolean;
    creationDate: Date;
    lastModifiedDate: Date;
    content: BsnTaggedPlaylistItemEntity[] | null;
    presentations: BsnPresentationReferenceEntity[];
    permissions: BsnPermissionEntity[];
}
export interface BsnTaggedPlaylistListEntity extends BsnEntityListBase {
    items: BsnTaggedPlaylistEntity[];
}
export interface BsnTaggedPlaylistSaveData {
    id?: number;
    name: string;
    contentsVirtualPath: string;
    rule: string;
    orderTag: string;
    ttl: TimeSpanString;
    content: BsnTaggedPlaylistItemEntity[] | null;
}
export interface TaggedPlaylistSortSpecification {
    sortTagName?: string | null;
    sortDescending?: boolean;
}
export function bsnGetTaggedPlaylistOrderTagString(spec: TaggedPlaylistSortSpecification): string;
export type BsnDataFeedEntity = BsnTextFeedEntity | BsnMediaFeedEntity | BsnDynamicPlaylistEntity | BsnTaggedPlaylistEntity;
export interface BsnDataFeedReferenceEntity {
    id: number;
    name: string;
}
export interface BsnHtmlSiteAssetEntity {
    fileName: string;
    physicalPath: string;
    relativePath: string;
    fileSize: number;
    fileHash: string;
}
export interface BsnHtmlSiteEntity {
    id: number;
    name: string;
    uploadDate: Date;
    lastModifiedDate: Date;
    indexFile: BsnHtmlSiteAssetEntity;
    assets: BsnHtmlSiteAssetEntity[] | null;
    presentations: BsnPresentationReferenceEntity[];
    permissions: BsnPermissionEntity[];
}
export enum BsnHtmlSiteSortField {
    name = "name",
    fileSize = "fileSize",
    uploadDate = "uploadDate",
    lastModifiedDate = "lastModifiedDate"
}
export interface BsnHtmlSiteListEntity extends BsnEntityListBase {
    items: BsnHtmlSiteEntity[];
}
export interface BsnPluginEntity {
    id: number;
    name: string;
    fileInfo: BsnPresentationFile;
    presentations: BsnPresentationReferenceEntity[];
}
export interface BsnNewPluginEntity {
    id: number;
    name: string;
    fileInfo: BsnPresentationNewFile;
    presentations: BsnPresentationReferenceEntity[];
}
export interface BsnPluginSaveData {
    id?: number;
    name: string;
    fileName: string;
    pluginData: Uint8Array;
}
export enum BsnPluginSortField {
    name = "fileInfo.name",
    fileSize = "fileInfo.size",
    lastModifiedDate = "fileInfo.lastModifiedDate",
    creationDate = "fileInfo.creationDate"
}
export enum BsnDeviceHealthStatus {
    Normal = "Normal",
    Warning = "Warning",
    Error = "Error",
    NoSubscriptions = "NoSubscriptions",
    Provision = "Provision"
}
export interface BsnDeviceRegularGroupInfoEntity {
    id: number;
    name: string;
}
export interface BsnDeviceTaggedGroupEntity {
    id: number;
    name: string;
}
export interface BsnDeviceRemoteSnapshotSettingsEntity {
    enabled: boolean;
    captureInterval: string;
    screenShotsCountLimit: number;
    imageQuality: number;
    screenOrientation: MonitorOrientationType;
}
export interface BsnDeviceLogsSettingsEntity {
    enableDiagnosticLog: boolean;
    enableEventLog: boolean;
    enablePlaybackLog: boolean;
    enableStateLog: boolean;
    enableVariableLog: boolean;
    uploadAtBoot: boolean;
    uploadTime: string;
}
export interface BsnDeviceDiagnosticWebServerSettingsEntity {
    enabled: boolean;
    password: string;
}
export interface BsnDeviceLocalWebServerSettingsEntity {
    enabled: boolean;
    enableUpdateNotifications: boolean;
    userName: string;
    password: string;
}
export interface BsnDeviceLocationSettingsEntity {
    placeId: string;
    gpsLatitude: number;
    gpsLongitude: number;
    country: string;
    countryLongName: string;
    adminAreaLevel1: string;
    adminAreaLevel1LongName: string;
    adminAreaLevel2: string;
    adminAreaLevel2LongName: string;
    locality: string;
    localityLongName: string;
    path: string;
    pathLongName: string;
}
export interface BsnDeviceNetworkConnectionSettingsEntity {
    useDHCP: boolean;
    ipAddress: string;
    subnetMask: string;
    defaultGateway: string;
    dnS1: string;
    dnS2: string;
    dnS3: string;
    rateLimitInsideContentDownloadWindow: number;
    rateLimitOutsideContentDownloadWindow: number;
    rateLimitDuringInitialDownloads: number;
    contentDownloadEnabled: boolean;
    textFeedsDownloadEnabled: boolean;
    mediaFeedsDownloadEnabled: boolean;
    healthReportingEnabled: boolean;
    logsUploadEnabled: boolean;
}
export interface BsnDeviceNetworkWirelessConnectionSettingsEntity extends BsnDeviceNetworkConnectionSettingsEntity {
    enabled: boolean;
    ssid: string;
    passphrase: string;
}
export interface BsnDeviceNetworkSettingsEntity {
    hostname: string | null;
    proxyServer: string | null;
    proxyBypass: string[] | null;
    timeServer: string;
    wiredConnectionPriority: number;
    wirelessConnectionPriority: number;
    wired: BsnDeviceNetworkConnectionSettingsEntity;
    wireless: BsnDeviceNetworkWirelessConnectionSettingsEntity;
}
export enum BsnDeviceSubscriptionType {
    Grace = "Grace",
    Demo = "Demo",
    Commercial = "Commercial"
}
export enum BsnDeviceSubscriptionStatus {
    Active = "Active",
    Suspending = "Suspending",
    Suspended = "Suspended"
}
export interface BsnDeviceSubscriptionEntity {
    id: number;
    deviceId: number;
    type: BsnDeviceSubscriptionType;
    activityPeriod: TimeSpanString;
    status: BsnDeviceSubscriptionStatus;
    creationDate: Date;
    activationDate: Date;
    suspensionDate: Date;
    expirationDate: Date;
}
export interface BrightWallInfoEntity {
    id: number;
    name: string;
}
export enum BsnDeviceSetupType {
    Unknowm = "Unknown",
    BSN = "BSN",
    SFN = "SFN",
    LFN = "LFN",
    Standalone = "Standalone"
}
export enum BsnContentCheckPeriod {
    Custom = "Custom",
    ThirtySeconds = "ThirtySeconds",
    OneMinute = "OneMinute",
    FiveMinutes = "FiveMinutes",
    FifteenMinutes = "FifteenMinutes",
    ThirtyMinutes = "ThirtyMinutes",
    OneHour = "OneHour",
    SixHours = "SixHours",
    TwelveHours = "TwelveHours",
    OneDay = "OneDay"
}
export interface BsnBeaconEntityBase {
    id: number;
    name: string;
    mode: string;
    creationDate: Date;
    powerLevel: number;
}
export interface BsnAppleBeaconEntity extends BsnBeaconEntityBase {
    uuid: string;
    major: number;
    minor: number;
}
export interface BsnEddystoneURLBeaconEntity extends BsnBeaconEntityBase {
    url: string;
}
export interface BsnEddystoneUIDBeaconEntity extends BsnBeaconEntityBase {
    namespaceId: string;
    instanceId: string;
}
export type BsnBeaconEntity = BsnAppleBeaconEntity | BsnEddystoneURLBeaconEntity | BsnEddystoneUIDBeaconEntity;
export interface BsnTagEntity {
    [tagName: string]: string;
}
export interface BsnContentItemInfoEntity {
    id: number;
    fileName: string;
}
export interface BsnDeviceReferenceEntity {
    id: number;
    serial: string;
}
export interface BsnDeviceEntity {
    id: number;
    serial: string;
    name: string;
    concatUnitNameAndSerial: boolean;
    description: string;
    model: PlayerModel;
    family: PlayerFamily;
    firmwareVersion: string;
    currentSubscription: BsnDeviceSubscriptionEntity;
    targetGroup: BsnDeviceRegularGroupInfoEntity;
    reportedGroup: BsnDeviceRegularGroupInfoEntity;
    taggedGroups: BsnDeviceTaggedGroupEntity[];
    targetBrightWall: BrightWallInfoEntity;
    targetBrightWallScreenNumber: number;
    reportedBrightWall: BrightWallInfoEntity;
    reportedBrightWallScreenNumber: number;
    presentation: BsnPresentationReferenceEntity;
    lastModifiedDate: Date;
    autorun: BsnAutorunProperties;
    cardSize: string;
    cardFreeSize: string;
    targetTimeZone: string;
    reportedTimeZone: string;
    externalIpAddress: string;
    screenColor: string;
    setupType: BsnDeviceSetupType;
    contentCheckPeriod: BsnContentCheckPeriod;
    healthReportingPeriod: BsnContentCheckPeriod;
    contentDownloadsStartTime: string;
    contentDownloadsEndTime: string;
    healthReportingStartTime: string;
    healthReportingEndTime: string;
    lastContentCheckTime: Date;
    lastContentDownloadStartTime: Date;
    lastContentDownloadEndTime: Date;
    lastHeartbeatTime: Date;
    lastSyncSpecProcessedTime: Date;
    lastErrorTime: Date;
    uptime: string;
    healthStatus: BsnDeviceHealthStatus;
    networkSettings: BsnDeviceNetworkSettingsEntity;
    remoteSnapshotSettings: BsnDeviceRemoteSnapshotSettingsEntity;
    logsSettings: BsnDeviceLogsSettingsEntity;
    diagnosticWebServerSettings: BsnDeviceDiagnosticWebServerSettingsEntity;
    localWebServerSettings: BsnDeviceLocalWebServerSettingsEntity;
    deviceLocation: BsnDeviceLocationSettingsEntity;
    forceReboot: boolean;
    forceRecovery: boolean;
    forceReformat: boolean;
    forceLogUpload: boolean;
    beacons: BsnBeaconEntity[];
    tags: BsnTagSpecification[];
    permissions: BsnPermissionEntity[];
}
export enum BsnDeviceField {
    serial = "serial",
    name = "name",
    description = "description",
    healthStatus = "healthStatus",
    model = "model",
    groupName = "targetGroup.name",
    groupId = "targetGroup.id",
    firmwareVersion = "firmwareVersion",
    timezone = "targetTimeZone",
    uptime = "uptime",
    lastErrorTime = "lastErrorTime"
}
export interface BsnDeviceLocationSettingsUpdateEntity {
    gpsLatitude: number;
    gpsLongitude: number;
}
export interface BsnDeviceUpdateData {
    id: number;
    serial: string;
    name: string;
    concatUnitNameAndSerial: boolean;
    description: string;
    targetGroup: BsnDeviceRegularGroupInfoEntity;
    targetBrightWall: BrightWallInfoEntity;
    targetBrightWallScreenNumber: number;
    targetTimeZone: string;
    screenColor: BsColor;
    contentCheckPeriod: BsnContentCheckPeriod;
    contentDownloadsStartTime: TimeSpanString;
    contentDownloadsEndTime: TimeSpanString;
    healthReportingPeriod: BsnContentCheckPeriod;
    healthReportingStartTime: TimeSpanString;
    healthReportingEndTime: TimeSpanString;
    networkSettings: BsnDeviceNetworkSettingsEntity;
    remoteSnapshotSettings: BsnDeviceRemoteSnapshotSettingsEntity;
    logsSettings: BsnDeviceLogsSettingsEntity;
    diagnosticWebServerSettings: BsnDeviceDiagnosticWebServerSettingsEntity;
    localWebServerSettings: BsnDeviceLocalWebServerSettingsEntity;
    deviceLocation: BsnDeviceLocationSettingsUpdateEntity | null;
    forceReboot: boolean;
    forceRecovery: boolean;
    forceReformat: boolean;
    forceLogUpload: boolean;
}
export interface BsnDeviceInfoEntity {
    id: string;
    serial: string;
    model: string;
    name: string;
    description: string;
    setupPackageId: string;
    creationDate: Date;
    creator: string;
}
export interface BsnDeviceSetupEntity {
    id: string;
    name: string;
    creationDate: Date;
    lastModifiedDate: Date;
    creator: string;
    deviceName: string;
    concatUnitNameAndSerial: boolean;
    deviceDescription: string;
    targetGroup: BsnDeviceRegularGroupInfoEntity;
    targetBrightWall: BrightWallInfoEntity;
    targetBrightWallScreenNumber: number;
    model: PlayerModel;
    family: PlayerFamily;
    targetTimeZone: string;
    screenColor: string;
    splashScreen: BsnContentItemInfoEntity;
    contentCheckPeriod: BsnContentCheckPeriod;
    healthReportingPeriod: BsnContentCheckPeriod;
    contentDownloadsStartTime: string;
    contentDownloadsEndTime: string;
    healthReportingStartTime: string;
    healthReportingEndTime: string;
    networkSettings: BsnDeviceNetworkSettingsEntity;
    remoteSnapshotSettings: BsnDeviceRemoteSnapshotSettingsEntity;
    logsSettings: BsnDeviceLogsSettingsEntity;
    diagnosticWebServerSettings: BsnDeviceDiagnosticWebServerSettingsEntity;
    localWebServerSettings: BsnDeviceLocalWebServerSettingsEntity;
    beacons: BsnBeaconEntity[];
    enableNetworkDiagnostics: boolean;
    enableEthernetTest: boolean;
    enableWirelessTest: boolean;
    enableInternetTest: boolean;
}
export interface BsnRegularGroupEntity {
    id: number;
    name: string;
    creationDate: Date;
    lastModifiedDate: Date;
    autorun: BsnAutorunProperties;
    hdX23Firmware: string;
    hdX23FirmwareId: number;
    lsX23Firmware: string;
    lsX23FirmwareId: number;
    hsX23Firmware: string;
    hsX23FirmwareId: number;
    hoX23Firmware: string;
    hoX23FirmwareId: number;
    xdX32Firmware: string;
    xdX32FirmwareId: number;
    xdX33Firmware: string;
    xdX33FirmwareId: number;
    xtX43Firmware: string;
    xtX43FirmwareId: number;
    xdX34_XTX44Firmware: string;
    xdX34_XTX44FirmwareId: number;
    hdX4_HSX4_LSX4Firmware: string;
    hdX4_HSX4_LSX4FirmwareId: number;
    ['4KX42Firmware']: string;
    ['4KX42FirmwareId']: number;
    enableSerialDebugging: boolean;
    enableSystemLogDebugging: boolean;
    enableStorageSpaceLimit: boolean;
    storageSpaceLimitUnits: StorageSpaceLimitUnits;
    publishedDataSizeLimit: number;
    dynamicDataSizeLimit: number;
    htmlDataSizeLimit: number;
    htmlLocalStorageSizeLimit: number;
    webDatabaseSizeLimit: number;
    devicesCount: number;
    devicesHealthStatus: BsnDeviceHealthStatus[];
    devices: BsnDeviceReferenceEntity[] | null;
    schedule: BsnRegularGroupScheduledPresentationEntity[];
    permissions: BsnPermissionEntity[];
}
export interface BsnRegularGroupListEntity extends BsnEntityListBase {
    items: BsnRegularGroupEntity[];
}
export interface BsnTaggedGroupEntity {
    id: number;
    number: string;
    rule: string;
    description: string;
    isDynamic: boolean;
    hasChanges: boolean;
    creationDate: Date;
    lastModifiedDate: Date;
    devicesCount: number;
    devicesHealthStatus: BsnDeviceHealthStatus[];
    permissions: BsnPermissionEntity[];
}
export interface BsnRegularGroupScheduledPresentationEntity {
    id: number;
    presentationId: number;
    presentationName: string;
    isRecurrent: boolean;
    interruptScheduling: boolean;
    eventDate: Date;
    startTime: TimeSpanString;
    duration: TimeSpanString;
    recurrenceStartDate: Date | null;
    recurrenceEndDate: Date | null;
    daysOfWeek: string;
    creationDate: Date;
    lastModifiedDate: Date;
    expirationDate: Date;
}
export interface BsnDeviceErrorEntity {
    errorName: string;
    errorEvent: string;
    reason: string;
    responseCode: number;
    timestamp: Date;
}
export interface BsnDeviceRemoteSnapshotEntity {
    id: number;
    groupName: string;
    presentationName: string;
    utcTimestamp: Date;
    localTimestamp: Date;
    width: number;
    height: number;
    fileSize: number;
    filePath: string;
    thumbPath: string;
}
export interface BsnDeviceDownloadEntity {
    progress: number;
    status: string;
    fileName: string;
    fileHash: string;
    timestamp: Date;
}
export interface BsnProfileSaveAttributeEntity {
    key: string;
    value: string;
}
export enum BsnUserStatus {
    Enabled = "Enabled",
    Disabled = "Disabled"
}
export enum BsnNetworkStatus {
    Active = "Active",
    Suspending = "Suspending",
    Suspended = "Suspended"
}
export interface BsnPersonEntity {
    id: number;
    login: string;
    password: string | null;
    firstName: string;
    lastName: string;
    creationDate: Date;
    lastModifiedDate: Date;
    activationDate: Date;
}
/** This is the person entity returned for a person login in Token calls */
export interface BsnPersonDescriptionEntity {
    id: number;
    login: string;
    firstName: string;
    lastName: string;
    users: BsnUserDescriptionEntity[];
}
export interface BsnUserEntity {
    id: number;
    person: BsnPersonEntity;
    description: string;
    creationDate: Date;
    lastModifiedDate: Date;
    lastLoginDate: Date;
    isLockedOut: boolean;
    lastLockoutDate: Date | null;
    roleName: string;
    permissions: BsnPermissionEntity[];
}
/** This is the user entity returned for a user login in Token calls */
export interface BsnUserDescriptionEntity {
    id: number;
    role: BsnRoleShortDescriptionEntity;
    status: BsnUserStatus;
    network: BsnNetworkDescriptionEntity;
}
export interface BsnNetworkSettingsEntity {
    webUIAccessRestricted: boolean;
    brightAuthorAccessRestricted: boolean;
    deviceAccessTokenLifetime: TimeSpanString | null;
    userAccessTokenLifetime: TimeSpanString | null;
    userRefreshTokenLifetime: TimeSpanString | null;
    deviceRefreshTokenLifetime: TimeSpanString | null;
    deviceRegistrationTokenLifetime: TimeSpanString | null;
    automaticSubscriptionsManagementEnabled: boolean;
    automaticTaggedPlaylistApprovementEnabled: boolean;
}
export interface BsnNetworkSubscriptionEntity {
    id: number;
    level: BsnNetworkSubscriptionLevel;
    creationDate: Date;
    lastModifiedDate: Date;
    expireDate: Date | null;
}
export interface BsnNetworkEntity {
    id: number;
    name: string;
    creationDate: Date;
    setupCompletionDate: Date;
    lockoutDate: Date | null;
    isLockedOut: boolean;
    lastLockoutDate: Date | null;
    settings: BsnNetworkSettingsEntity;
    subscription: BsnNetworkSubscriptionEntity;
}
export enum BsnNetworkSubscriptionLevel {
    Content = "Content",
    Control = "Control",
    Management = "Management",
    Trial = "Trial"
}
/** Deprecated name: use BsnNetworkSubscriptionLevel */
export type BsnSubscriptionLevel = BsnNetworkSubscriptionLevel;
/** This is the subscription entity returned in Token calls */
export interface BsnNetworkSubscriptionDescriptionEntity {
    level: BsnNetworkSubscriptionLevel;
    startDate: Date;
    endDate: Date | null;
}
/** This is the network entity used in the response for a person login in Token calls */
export interface BsnNetworkDescriptionEntity {
    id: number;
    name: string;
    status: BsnNetworkStatus;
    subscription: BsnNetworkSubscriptionDescriptionEntity;
}
export interface BsnRoleEntity {
    id: number;
    isCustom: boolean;
    name: string;
    description: string;
    creationDate: Date;
    userCount: number;
    users: BsnPermissionPrincipalUserInfoEntity[] | null;
    permissions: BsnPermissionEntity[];
}
export interface BsnRoleShortDescriptionEntity {
    id: number;
    name: string;
}
export enum BsnPermissionPrincipalType {
    User = "User",
    Role = "Role"
}
export interface BsnPermissionPrincipalEntityBase {
    id: number;
    type: BsnPermissionPrincipalType;
}
export interface BsnPermissionPrincipalUserInfoEntity extends BsnPermissionPrincipalEntityBase {
    type: BsnPermissionPrincipalType.User;
    login: string;
}
export interface BsnPermissionPrincipalRoleInfoEntity extends BsnPermissionPrincipalEntityBase {
    type: BsnPermissionPrincipalType.Role;
    name: string;
    isCustom: boolean;
}
export type BsnPermissionPrincipalEntity = BsnPermissionPrincipalUserInfoEntity | BsnPermissionPrincipalRoleInfoEntity;
export interface BsnPermissionEntity {
    entityId: null | number;
    operationUID: string;
    principal: BsnPermissionPrincipalEntity;
    isFixed: boolean;
    isInherited: boolean;
    isAllowed: boolean;
    creationDate: Date;
}
export enum BsnBusinessOperationType {
    Device = "Device",
    Group = "Group",
    TaggedGroup = "TaggedGroup",
    BrightWall = "BrightWall",
    BrightWallConfiguration = "BrightWallConfiguration",
    BrightWallScreen = "BrightWallScreen",
    BrightWallGroup = "BrightWallGroup",
    Presentation = "Presentation",
    BrightWallPresentation = "BrightWallPresentation",
    Content = "Content",
    DynamicPlaylist = "DynamicPlaylist",
    TaggedPlaylist = "TaggedPlaylist",
    LiveTextFeed = "LiveTextFeed",
    LiveMediaFeed = "LiveMediaFeed",
    WebPage = "WebPage",
    DeviceWebPage = "DeviceWebPage",
    Subscription = "Subscription",
    SubscriptionKey = "SubscriptionKey",
    SubscriptionInvoice = "SubscriptionInvoice",
    TrafficInvoice = "TrafficInvoice",
    DeviceSetupPackage = "DeviceSetupPackage",
    AutorunPlugin = "AutorunPlugin",
    Person = "Person",
    Network = "Network",
    User = "User",
    Role = "Role"
}
export enum BsnOperationAction {
    Create = "create",
    Retrieve = "retrieve",
    Update = "update",
    Delete = "delete"
}
export interface BsnBusinessOperationEntity {
    uid: string;
    singularName: string | null;
    pluralName: string | null;
    fullName: string;
    targetEntity: BsnBusinessOperationType;
    parent: BsnBusinessOperationEntity | null;
    descendants: BsnBusinessOperationEntity[] | null;
    permissions: BsnPermissionEntity[] | null;
}
export function bsnGetRequiredScopeForOperation(operation: BsnBusinessOperationType, action?: BsnOperationAction): string | null;
export interface BDeployDeviceNetworkConnectionSettingsEntity {
    useDHCP: boolean;
    ipAddress: string;
    subnetMask: string;
    defaultGateway: string;
    dNS1: string | null;
    dNS2: string | null;
    dNS3: string | null;
    rateLimitInsideContentDownloadWindow: number | null;
    rateLimitOutsideContentDownloadWindow: number | null;
    rateLimitDuringInitialDownloads: number | null;
    contentDownloadEnabled: boolean;
    textFeedsDownloadEnabled: boolean;
    mediaFeedsDownloadEnabled: boolean;
    healthReportingEnabled: boolean;
    logsUploadEnabled: boolean;
}
export interface BDeployDeviceSetUpJsonBDeployEntity {
    networkName: string;
    packageName: string;
    username: string;
}
export interface BDeployFirmwareUpdatesByFamilyEntity {
    betaReleaseFileLength: number;
    betaReleaseSHA1: string;
    betaReleaseURL: string;
    betaVersion: string;
    betaVersionNumber: number;
    compatibleReleaseFileLength: number;
    compatibleReleaseSHA1: string;
    compatibleReleaseURL: string;
    compatibleVersion: string;
    compatibleVersionNumber: number;
    existingFWContentID: string;
    firmwareUpdateDifferentTargetFileName: string;
    firmwareUpdateNewerTargetFileName: string;
    firmwareUpdateSaveTargetFileName: string;
    firmwareUpdateSource: string;
    firmwareUpdateSourceFilePath: string;
    firmwareUpdateStandardTargetFileName: string;
    firmwareUpdateVersion: string;
    productionReleaseFileLength: number;
    productionReleaseSHA1: string;
    productionReleaseURL: string;
    productionVersion: string;
    productionVersionNumber: number;
}
export interface BsniDeviceLogRecord {
    networkName: string;
    logType: string;
    serial: string;
    deviceTimeStamp: Date;
    rawMessage: string;
}
export interface BsniDeviceLogResult {
    logList: BsniDeviceLogRecord[];
    hasNextPage: boolean;
    scrollId: string | null;
}
export interface BsniDeviceLogResponse {
    error: string | null;
    result?: BsniDeviceLogResult;
    error_description?: string | null;
    error_uri?: string | null;
}
export enum BsneDeviceLogSortField {
    LogType = "logType",
    Serial = "serial",
    DeviceTimeStamp = "deviceTimeStamp",
    RawMessage = "rawMessage"
}
export interface BsniDeviceLogSortElement {
    field: BsneDeviceLogSortField;
    descending?: boolean;
}
export interface BsniDeviceLogFilter {
    serial?: string;
    startTimeStamp?: Date;
    endTimeStamp?: Date;
    textSearch?: string;
}
export interface BsniDeviceLogEnumerationOptions {
    filter?: BsniDeviceLogFilter;
    sortOrder?: BsniDeviceLogSortElement[];
    pageSize?: number;
}

export enum BsnErrorType {
    unknownError = 0,
    unexpectedError = 1,
    invalidUserPassword = 2,
    noActiveNetwork = 3,
    invalidParameters = 4,
    imageDownsampleFailed = 5,
    networkError = 6,
    requestError = 7,
    apiError = 8,
    serverError = 9,
    assetNotFoundError = 10,
    webPageUploadError = 11,
    bDeployError = 12,
    permissionError = 13,
    scopeError = 14,
    invalidDataError = 15,
    reActivationRequired = 16,
    originatingUserInvalid = 17,
    invalidTagRuleExpression = 18,
    indexServerError = 19,
    invalidGrantError = 20
}
export class BsnError extends Error {
    name: string;
    type: BsnErrorType;
    response?: Response;
    constructor(type: BsnErrorType, reason?: string);
}

export enum BsnSessionStatus {
    invalidUserInfo = "invalidUserInfo",
    userInfoValidNoNetwork = "userInfoValidNoNetwork",
    waitingForAuthentication = "waitingForAuthentication",
    personActive = "personActive",
    networkActive = "networkActive",
    authenticationFailed = "authenticationFailed",
    noConnection = "noConnection",
    serverError = "serverError"
}
export interface BsnFetchInfo {
    userName: string;
    networkRequired: boolean;
    networkName?: string;
}
export type BsnPasswordRefreshFunction = (info: BsnFetchInfo) => string;
export interface BsnListSegment<ListEntityType> {
    listItems: ListEntityType[];
    enumerator: BsnEnumerator;
}
export enum BsnLogLevel {
    None = 0,
    Error = 1,
    Warn = 2,
    Info = 3
}
export interface BsnLogOptions {
    logRequestBody?: boolean;
    logResponseBody?: boolean;
}
export function getOAuthTokenUrl(): string;
export function fetchOAuthToken(): Promise<string>;
export function getClientRedirectUrl(): string;
export function getBdeployUrl(): string;
export function getIndexUrl(): string;
/**
 * Current URL for BSN Authorization API
 * @return {string}
 */
export function bsnGetAuthUrl(): string;
/**
 * Current URL for BSN REST API
 * @return {string}
 */
export function bsnGetApiUrl(): string;
/**
 * Current URL for BSN Upload API
 * @return {string}
 */
export function bsnGetUploadApiUrl(): string;

export function bsnConnectorConfig(config: BsnConnectorOverrideProps): void;
export type ClientReactivationFunction = () => Promise<void>;
/**
 * Specify a function to be called if re-activation fails (for example, if a password has been
 *  externally reset.)
 * @param clientFunction {() => Promise<void>}
 */
export function bsnClientReactivateFunctionConfig(clientFunction: ClientReactivationFunction | null): void;

export interface BsnEnumerationOptions {
    sortExpression?: string;
    filter?: BsnFilter;
    /** @deprecated - use filter property to specify filters */
    filterExpression?: string;
    virtualPath?: string;
    pageSize?: number;
}
export class BsnEnumerator {
    marker: string;
    filterExpression: string;
    pathExpression: string;
    sortExpression: string;
    pageSize: number;
    isComplete: boolean;
    get queryString(): string;
    constructor(options: BsnEnumerationOptions, allowVirtualPath: boolean);
}

/** The new form of this function using a BsnFilterSpecification parameter is preferred. */
export function bsnCreateFilter(components: BsnFilterComponent | BsnFilterComponent[], combineType?: BsnFilterCombineType): BsnFilter;
/**
 * Create BsnFilter object from one or more filter components.
 * @param spec {BsnFilterSpecification} - filter specification, specifying components with which to create filter
 *  and the combineType if there are multiple components
 * @returns {BsnFilter}
 */
export function bsnCreateFilter(spec: BsnFilterSpecification): BsnFilter;
/**
 * Create BsnTagFilter object from one or more filter components.
 * @param spec {BsnFilterSpecification} - filter specification, specifying components with which to create filter
 *  and the combineType if there are multiple components
 * @param virtualPath {string} - the BSN virtual path where the tag filter will be used
 * @returns {BsnTagFilter}
 */
export function bsnCreateTagFilter(spec: BsnFilterSpecification, virtualPath: string): BsnTagFilter;
export class BsnFilter {
    /**
     * @property filterExpression {string} - BSN filter string
     */
    get filterExpression(): string;
    constructor(spec: BsnFilterSpecification | null);
}
export class BsnTagFilter extends BsnFilter {
    /**
     * @property ruleExpression {string} - taggedPlaylist rule expression
     *  (same as filter expression without the virtual directory component
     */
    get ruleExpression(): string;
    constructor(spec: BsnFilterSpecification, virtualPath: string);
}
/**
 * @property stringOrStringArray - This type is assigned to a filter expression when the tagName dataType
 *  cannot be specifically inferred For certain rule expressions, the data type may be either a string or a stringArray.
 *  In these cases, the type dataType must be determined by other means.
 */
export class BsnParsedFilterType extends BsnFilterType {
    static stringOrStringArray: string;
}
export interface BsnParsedTagFilterComponent extends BsnFilterComponent {
    type: BsnParsedFilterType;
}
export interface BsnParsedTagFilterSpecification {
    components: BsnParsedTagFilterComponent[];
    combineType: BsnFilterCombineType;
}
/**
 * Parse given tag rule expression into a BsnFilterSpecification object.
 * @param ruleExpr {string | null}
 * @returns {BsnFilterSpecification}
 */
export function bsnParseTagRuleExpression(ruleExpr: string | null): BsnParsedTagFilterSpecification;
/**
 * Parse given tagOrder expression into a BsnTagSortSpecification object.
 * @param tagOrderExpr {string | null}
 * @returns {BsnTagSortSpecification}
 */
export function bsnParseTagOrderExpression(tagOrderExpr: string | null): BsnTagSortSpecification;

/**
 * Find a User Permission permission in the given permission list, matching the operationUID and the user ID.
 * * Note the isAllowed, isInherited, and isFixed properties are not considered for the match.
 * @param permissionList {BsnPermissionEntity[]} - array of permission objects to search
 * @param user {BsnUserEntity} - the user to search for
 * @param operationUid {string} - UID of the operation to match
 * @returns {BsnPermissionEntity | null} - the matching permission entity, or null of no match found
 */
export function bsnFindUserPermission(permissionList: BsnPermissionEntity[], user: BsnUserEntity, operationUid: string): BsnPermissionEntity | null;
/**
 * Find a User Role permission in the given permission list, matching the operationUID and the role ID.
 * * Note the isAllowed, isInherited, and isFixed properties are not considered for the match.
 * @param permissionList {BsnPermissionEntity[]} - array of permission objects to search
 * @param role {BsnRoleEntity} - the role to search for
 * @param operationUid {string} - UID of the operation to match
 * @returns {BsnPermissionEntity | null} - the matching permission entity, or null of no match found
 */
export function bsnFindRolePermission(permissionList: BsnPermissionEntity[], role: BsnRoleEntity, operationUid: string): BsnPermissionEntity | null;
/**
 * Find a permission in the given permission list matching the operationUID and the user or role ID.
 * * Note the isAllowed, isInherited, and isFixed properties are not considered for the match.
 * @param permissionList {BsnPermissionEntity} - the permission to match
 * @param permissionToMatch {BsnRoleEntity} - the role to search for
 * @returns {BsnPermissionEntity | null} - the matching permission entity, or null of no match found
 */
export function bsnFindMatchingPermission(permissionList: BsnPermissionEntity[], permissionToMatch: BsnPermissionEntity): BsnPermissionEntity | null;
/**
 * Create a permission object for a User principal, and set isAllowed to given value.
 * @param user {BsnUserEntity}
 * @param targetEntityId {number | null} - BSN entity ID that will own the permission object. Null if the permission
 *  object is attached to an entity other than a target entity, such as in the list of permissions
 *  associated with a role
 * @param operationUid {string} - UID for the operation for the permission
 * @param isAllowed {Boolean} - true is user is granted access to the operation for the given entity
 */
export function bsnCreateUserPermission(user: BsnUserEntity, targetEntityId: number | null, operationUid: string, isAllowed: boolean): BsnPermissionEntity;
/**
 * Create a permission object for a Role principal, and set isAllowed to given value.
 * @param role {BsnRoleEntity}
 * @param targetEntityId {number | null} - BSN entity ID that will own the permission object. Null if the permission
 *  object is attached to an entity other than a target entity, such as in the list of permissions
 *  associated with a role
 * @param operationUid {string} - UID for the operation for the permission
 * @param isAllowed {Boolean} - true is user is granted access to the operation for the given entity
 */
export function bsnCreateRolePermission(role: BsnRoleEntity, targetEntityId: number | null, operationUid: string, isAllowed: boolean): BsnPermissionEntity;

export function bsnGetFileContentEntityTemplate(): BsnFileContentEntity;
export function bsnGetFolderContentEntityTemplate(): BsnFolderContentEntity;
export function bsnGetRegularGroupEntityTemplate(): BsnRegularGroupEntity;
/** DEPRECATED - use bsnGetRegularGroupEntityTemplate (spelled correctly!) */
export const bsnGetReguarGroupEntityTemplate: () => BsnRegularGroupEntity;

export type BsnContentSegment = BsnListSegment<BsnContentEntity>;
export class BsnContentOperations {
    getContent(options?: BsnEnumerationOptions): Promise<BsnContentEntity[]>;
    getContentBySegment(options?: BsnEnumerationOptions): Promise<BsnContentSegment>;
    getNextContentSegment(enumerator: BsnEnumerator): Promise<BsnContentSegment>;
    getContentItemCount(options?: BsnEnumerationOptions): Promise<number>;
    getContentItem(id: number): Promise<BsnContentEntity>;
    /**
     * This does a content enumeration filtered on a fileName and a virtualPath. It returns an array of content items
     *  because multiple items can be returned for a given name.
     * This is essentially a shortcut method to return content items based on path/name.
     * @param {string} name
     * @param {string} virtualPath
     * @returns {Promise<BsnContentEntity[]>}
     */
    getContentItemsByName(name: string, virtualPath?: string): Promise<BsnContentEntity[]>;
    existsContentItem(name: string, virtualPath?: string, folder?: boolean): Promise<boolean>;
    getParentFolderListForContentPath(virtualPath: string): Promise<BsnFolderContentEntity[]>;
    deleteContentItem(id: number): Promise<void>;
    changeContentPath(id: number, newVirtualPath: string): Promise<void>;
    createFolder(name: string, virtualPath: string): Promise<BsnContentEntity>;
    getContentItemTags(id: number): Promise<BsnTagSpecification[]>;
    setContentItemTags(id: number, tags: BsnTagSpecification[]): Promise<void>;
    deleteContentItemTags(id: number, tagKeys: BsnTagKeySpecification[]): Promise<void>;
    getContentItemPermissions(id: number): Promise<BsnPermissionEntity[]>;
    setContentItemPermissions(id: number, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceContentItemPermissions(id: number, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteContentItemPermissions(id: number, permissions: BsnPermissionEntity[]): Promise<void>;
}

export interface RemoteProcedureDownsampleResultEntity {
    ok: boolean;
    sourceAssetItem: BsAssetItem | null;
    createdAssetItem: BsAssetItem | null;
}
export interface RemoteProcedureDownsampleSourceItemEntity {
    assetItem: BsAssetItem;
    destinationPath: string;
    targetName: string;
    width: number | null;
    height: number | null;
}
export interface RemoteProcedureDownsampleEntity {
    jobType: string;
    items: RemoteProcedureDownsampleSourceItemEntity[];
    authenticationToken: string;
    username: string;
    network: string;
}
export interface RemoteProcedureJobItem {
    id: string;
    jobId: string;
    status: string;
    jobData: string;
    jobType: string;
    error: string;
    result: string;
    ttl: number;
}
export interface RemoteProcedureJobAssignSuccessItem {
    id: string;
    assetItem: BsAssetItem;
}
export interface RemoteProcedureJobEntity {
    jobId: string;
    failureNumber: number;
    failedAssetItems: BsAssetItem[];
    successItems: RemoteProcedureJobAssignSuccessItem[];
}
export class RemoteContentProcessOperations {
    assignDownsampleImageJob(downsampleEntity: RemoteProcedureDownsampleEntity): Promise<RemoteProcedureJobEntity>;
    queryRemoteProcedureJobStatus(jobId: string): Promise<RemoteProcedureJobItem[]>;
    removeRemoteProcedureJob(jobId: string): Promise<void>;
}

export type BsnPresentationListSegment = BsnListSegment<BsnPresentationEntity>;
export class BsnPresentationOperations {
    getPresentationList(options?: BsnEnumerationOptions): Promise<BsnPresentationEntity[]>;
    getPresentationListBySegment(options?: BsnEnumerationOptions): Promise<BsnPresentationListSegment>;
    getNextPresentationListSegment(enumerator: BsnEnumerator): Promise<BsnPresentationListSegment>;
    getPresentationCount(options?: BsnEnumerationOptions): Promise<number>;
    getPresentationEntity(idOrName: number | string): Promise<BsnPresentationEntity>;
    existsPresentation(name: string): Promise<boolean>;
    createPresentation(data: BsnPresentationSaveData, assetFiles?: BsnPresentationAssetFileData, permissions?: BsnPermissionEntity[] | null): Promise<BsnPresentationEntity>;
    updatePresentation(data: BsnPresentationSaveData, assetFiles?: BsnPresentationAssetFileData, permissions?: BsnPermissionEntity[] | null): Promise<void>;
    publishPresentation(data: BsnPresentationSaveData, publishFiles: BsnPresentationPublishFileData, permissions?: BsnPermissionEntity[] | null): Promise<void>;
    deletePresentation(idOrName: number | string): Promise<void>;
    getPresentationPermissions(idOrName: number | string): Promise<BsnPermissionEntity[]>;
    setPresentationPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replacePresentationPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deletePresentationPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
}

export type BsnTextFeedListSegment = BsnListSegment<BsnTextFeedEntity>;
export class BsnTextFeedOperations {
    getTextFeedList(options?: BsnEnumerationOptions): Promise<BsnTextFeedEntity[]>;
    getTextFeedListBySegment(options?: BsnEnumerationOptions): Promise<BsnTextFeedListSegment>;
    getNextTextFeedListSegment(enumerator: BsnEnumerator): Promise<BsnTextFeedListSegment>;
    getTextFeedCount(options?: BsnEnumerationOptions): Promise<number>;
    getTextFeedEntity(idOrName: number | string): Promise<BsnTextFeedEntity>;
    existsTextFeed(name: string): Promise<boolean>;
    createTextFeed(data: BsnTextFeedSaveData): Promise<BsnTextFeedEntity>;
    updateTextFeed(data: BsnTextFeedSaveData): Promise<void>;
    deleteTextFeed(idOrName: number | string): Promise<void>;
    getTextFeedPermissions(idOrName: number | string): Promise<BsnPermissionEntity[]>;
    setTextFeedPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceTextFeedPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteTextFeedPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
}

export type BsnMediaFeedListSegment = BsnListSegment<BsnMediaFeedEntity>;
export class BsnMediaFeedOperations {
    getMediaFeedList(options?: BsnEnumerationOptions): Promise<BsnMediaFeedEntity[]>;
    getMediaFeedListBySegment(options?: BsnEnumerationOptions): Promise<BsnMediaFeedListSegment>;
    getNextMediaFeedListSegment(enumerator: BsnEnumerator): Promise<BsnMediaFeedListSegment>;
    getMediaFeedCount(options?: BsnEnumerationOptions): Promise<number>;
    getMediaFeedEntity(idOrName: number | string): Promise<BsnMediaFeedEntity>;
    existsMediaFeed(name: string): Promise<boolean>;
    createMediaFeed(data: BsnMediaFeedSaveData): Promise<BsnMediaFeedEntity>;
    updateMediaFeed(data: BsnMediaFeedSaveData): Promise<void>;
    deleteMediaFeed(idOrName: number | string): Promise<void>;
    getMediaFeedPermissions(idOrName: number | string): Promise<BsnPermissionEntity[]>;
    setMediaFeedPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceMediaFeedPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteMediaFeedPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
}

export type BsnDynamicPlaylistListSegment = BsnListSegment<BsnDynamicPlaylistEntity>;
export class BsnDynamicPlaylistOperations {
    getDynamicPlaylistList(options?: BsnEnumerationOptions): Promise<BsnDynamicPlaylistEntity[]>;
    getDynamicPlaylistListBySegment(options?: BsnEnumerationOptions): Promise<BsnDynamicPlaylistListSegment>;
    getNextDynamicPlaylistListSegment(enumerator: BsnEnumerator): Promise<BsnDynamicPlaylistListSegment>;
    getDynamicPlaylistCount(options?: BsnEnumerationOptions): Promise<number>;
    getDynamicPlaylistEntity(idOrName: number | string): Promise<BsnDynamicPlaylistEntity>;
    existsDynamicPlaylist(name: string): Promise<boolean>;
    createDynamicPlaylist(data: BsnDynamicPlaylistSaveData): Promise<BsnDynamicPlaylistEntity>;
    updateDynamicPlaylist(data: BsnDynamicPlaylistSaveData): Promise<void>;
    deleteDynamicPlaylist(idOrName: number | string): Promise<void>;
    getDynamicPlaylistPermissions(idOrName: number | string): Promise<BsnPermissionEntity[]>;
    setDynamicPlaylistPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceDynamicPlaylistPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteDynamicPlaylistPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
}

export type BsnTaggedPlaylistListSegment = BsnListSegment<BsnTaggedPlaylistEntity>;
export class BsnTaggedPlaylistOperations {
    getTaggedPlaylistList(options?: BsnEnumerationOptions): Promise<BsnTaggedPlaylistEntity[]>;
    getTaggedPlaylistListBySegment(options?: BsnEnumerationOptions): Promise<BsnTaggedPlaylistListSegment>;
    getNextTaggedPlaylistListSegment(enumerator: BsnEnumerator): Promise<BsnTaggedPlaylistListSegment>;
    getTaggedPlaylistCount(options?: BsnEnumerationOptions): Promise<number>;
    getTaggedPlaylistEntity(idOrName: number | string): Promise<BsnTaggedPlaylistEntity>;
    existsTaggedPlaylist(name: string): Promise<boolean>;
    createTaggedPlaylist(data: BsnTaggedPlaylistSaveData): Promise<BsnTaggedPlaylistEntity>;
    updateTaggedPlaylist(data: BsnTaggedPlaylistSaveData): Promise<void>;
    deleteTaggedPlaylist(idOrName: number | string): Promise<void>;
    getTaggedPlaylistPermissions(idOrName: number | string): Promise<BsnPermissionEntity[]>;
    setTaggedPlaylistPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceTaggedPlaylistPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteTaggedPlaylistPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
}

export type BsnHtmlSiteListSegment = BsnListSegment<BsnHtmlSiteEntity>;
export class BsnHtmlSiteOperations {
    getHtmlSiteList(options?: BsnEnumerationOptions): Promise<BsnHtmlSiteEntity[]>;
    getHtmlSiteListBySegment(options?: BsnEnumerationOptions): Promise<BsnHtmlSiteListSegment>;
    getNextHtmlSiteListSegment(enumerator: BsnEnumerator): Promise<BsnHtmlSiteListSegment>;
    getHtmlSiteCount(options?: BsnEnumerationOptions): Promise<number>;
    getHtmlSiteEntity(idOrName: number | string): Promise<BsnHtmlSiteEntity>;
    existsHtmlSite(name: string): Promise<boolean>;
    deleteHtmlSite(idOrName: number | string): Promise<void>;
    getHtmlSitePermissions(idOrName: number | string): Promise<BsnPermissionEntity[]>;
    setHtmlSitePermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceHtmlSitePermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteHtmlSitePermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
}

export class BsnDeviceWebPageOperations {
    getDeviceWebPageList(options?: BsnEnumerationOptions): Promise<BsnHtmlSiteEntity[]>;
    getDeviceWebPageListBySegment(options?: BsnEnumerationOptions): Promise<BsnHtmlSiteListSegment>;
    getNextDeviceWebPageListSegment(enumerator: BsnEnumerator): Promise<BsnHtmlSiteListSegment>;
    getDeviceWebPageCount(options?: BsnEnumerationOptions): Promise<number>;
    getDeviceWebPageEntity(idOrName: number | string): Promise<BsnHtmlSiteEntity>;
    existsDeviceWebPage(name: string): Promise<boolean>;
    deleteDeviceWebPage(idOrName: number | string): Promise<void>;
    getDeviceWebPagePermissions(idOrName: number | string): Promise<BsnPermissionEntity[]>;
    setDeviceWebPagePermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceDeviceWebPagePermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteDeviceWebPagePermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
}

export type BsnPluginListSegment = BsnListSegment<BsnPluginEntity>;
export class BsnPluginOperations {
    getPluginList(options?: BsnEnumerationOptions): Promise<BsnPluginEntity[]>;
    getPluginListBySegment(options?: BsnEnumerationOptions): Promise<BsnPluginListSegment>;
    getNextPluginListSegment(enumerator: BsnEnumerator): Promise<BsnPluginListSegment>;
    getPluginCount(options?: BsnEnumerationOptions): Promise<number>;
    getPluginEntity(idOrName: number | string): Promise<BsnPluginEntity>;
    existsPlugin(name: string): Promise<boolean>;
    createPlugin(data: BsnPluginSaveData): Promise<BsnPluginEntity>;
    updatePlugin(data: BsnPluginSaveData): Promise<void>;
    deletePlugin(idOrName: number | string): Promise<void>;
}

export class BsnTagOperations {
    getTagKeys(pattern?: BsnTagKeyPatternSpecification): Promise<BsnTagKeySpecification[]>;
    getTagValueStrings(pattern?: BsnTagValuePatternSpecification): Promise<string[]>;
}

/**
 * Created by gostosh on 11/21/2017.
 */
export class BsnProfileOperations {
    getPersonProfileMap(): Promise<BsProfileEntity>;
    createPersonProfileValue(profileKey: string, profileValue: string | object): Promise<BsProfileEntity>;
    updatePersonProfileValue(profileKey: string, profileValue: string | object): Promise<void>;
    deletePersonProfileValue(profileKey: string): Promise<void>;
    getUserProfileMap(): Promise<BsProfileEntity>;
    createUserProfileValue(profileKey: string, profileValue: string | object | boolean): Promise<BsProfileEntity>;
    updateUserProfileValue(profileKey: string, profileValue: string | object): Promise<void>;
    deleteUserProfileValue(profileKey: string): Promise<void>;
}

export class BsnSelfOperations {
    createPerson(personData: BsnPersonEntity): Promise<BsnPersonEntity>;
    getPerson(): Promise<BsnPersonEntity>;
    createNetwork(networkName: string): Promise<BsnNetworkEntity>;
    getNetworkSubscriptionHistory(): Promise<BsnNetworkSubscriptionEntity[]>;
    getNetworkList(): Promise<BsnNetworkEntity[]>;
    getNetworkListForUser(): Promise<string[]>;
    getSelfUserEntity(): Promise<BsnUserEntity>;
    updateNetworkSettings(settings: Partial<BsnNetworkSettingsEntity>): Promise<void>;
    updateNetworkSubscriptionLevel(level: BsnNetworkSubscriptionLevel): Promise<void>;
    getSelfRoleEntity(): Promise<BsnRoleEntity>;
    getSelfRolePermissions(): Promise<BsnPermissionEntity[]>;
}

export class BsnPasswordOperations {
    resetPassword(userName: string): Promise<void>;
}

export type BsnDeviceListSegment = BsnListSegment<BsnDeviceEntity>;
export type BsnDeviceErrorListSegment = BsnListSegment<BsnDeviceErrorEntity>;
export type BsnDeviceDownloadListSegment = BsnListSegment<BsnDeviceDownloadEntity>;
export type BsnDeviceScreenshotListSegment = BsnListSegment<BsnDeviceRemoteSnapshotEntity>;
export type BsnDeviceBeaconListSegment = BsnListSegment<BsnBeaconEntity>;
export class BsnDeviceOperations {
    getDeviceList(options?: BsnEnumerationOptions): Promise<BsnDeviceEntity[]>;
    getDeviceListBySegment(options?: BsnEnumerationOptions): Promise<BsnDeviceListSegment>;
    getNextDeviceListSegment(enumerator: BsnEnumerator): Promise<BsnDeviceListSegment>;
    getDeviceListCount(options?: BsnEnumerationOptions): Promise<number>;
    getDeviceEntity(idOrSerial: number | string): Promise<BsnDeviceEntity>;
    existsDevice(serial: string): Promise<boolean>;
    updateDevice(data: BsnDeviceUpdateData): Promise<void>;
    deleteDevice(idOrSerial: number | string): Promise<void>;
    getDeviceErrors(idOrSerial: number | string, options?: BsnEnumerationOptions): Promise<BsnDeviceErrorEntity[]>;
    getDeviceErrorListBySegment(idOrSerial: number | string, options?: BsnEnumerationOptions): Promise<BsnDeviceErrorListSegment>;
    getNextDeviceErrorListSegment(idOrSerial: number | string, enumerator: BsnEnumerator): Promise<BsnDeviceErrorListSegment>;
    getDeviceDownloads(idOrSerial: number | string, options?: BsnEnumerationOptions): Promise<BsnDeviceDownloadEntity[]>;
    getDeviceDownloadListBySegment(idOrSerial: number | string, options?: BsnEnumerationOptions): Promise<BsnDeviceDownloadListSegment>;
    getNextDeviceDownloadListSegment(idOrSerial: number | string, enumerator: BsnEnumerator): Promise<BsnDeviceDownloadListSegment>;
    getDeviceScreenshots(idOrSerial: number | string, options?: BsnEnumerationOptions): Promise<BsnDeviceRemoteSnapshotEntity[]>;
    getDeviceScreenshotsBySegment(idOrSerial: number | string, options?: BsnEnumerationOptions): Promise<BsnDeviceScreenshotListSegment>;
    getNextDeviceScreenshotsSegment(idOrSerial: number | string, enumerator: BsnEnumerator): Promise<BsnDeviceScreenshotListSegment>;
    getDeviceBeacons(idOrSerial: number | string, options?: BsnEnumerationOptions): Promise<BsnBeaconEntity[]>;
    getDeviceBeaconListBySegment(idOrSerial: number | string, options?: BsnEnumerationOptions): Promise<BsnDeviceBeaconListSegment>;
    getNextDeviceBeaconListSegment(idOrSerial: number | string, enumerator: BsnEnumerator): Promise<BsnDeviceBeaconListSegment>;
    getDeviceBeaconEntity(deviceIdOrSerial: number | string, beaconId: number): Promise<BsnBeaconEntity>;
    getDeviceTags(id: number): Promise<BsnTagSpecification[]>;
    setDeviceTags(id: number, tags: BsnTagSpecification[]): Promise<void>;
    deleteDeviceTags(id: number, tagKeys: BsnTagKeySpecification[]): Promise<void>;
    getDevicePermissions(idOrSerial: number | string): Promise<BsnPermissionEntity[]>;
    setDevicePermissions(idOrSerial: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceDevicePermissions(idOrSerial: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteDevicePermissions(idOrSerial: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
}

export class BsncDeviceLogEnumerator {
    serial: string | null;
    startTimeStamp: Date | null;
    endTimeStamp: Date | null;
    sortOrder: BsniDeviceLogSortElement[] | null;
    textSearch: string | null;
    pageSize: number | null;
    hasNextPage: boolean;
    scrollId: string | null;
    get queryString(): string;
    constructor(options: BsniDeviceLogEnumerationOptions);
}
export interface BsniDeviceLogListSegment {
    items: BsniDeviceLogRecord[];
    enumerator: BsncDeviceLogEnumerator;
}
export class BsnDeviceLogOperations {
    getDeviceLogListBySegment(options?: BsniDeviceLogEnumerationOptions): Promise<BsniDeviceLogListSegment>;
    getNextDeviceLogListSegment(enumerator: BsncDeviceLogEnumerator): Promise<BsniDeviceLogListSegment>;
    getDeviceLogList(options?: BsniDeviceLogEnumerationOptions): Promise<BsniDeviceLogRecord[]>;
}

export type BsnDeviceSetupListSegment = BsnListSegment<BsnDeviceSetupEntity>;
export type BsnDeviceProvisionListSegment = BsnListSegment<BsnDeviceInfoEntity>;
export class BsnDeviceProvisioningOperations {
    getDeviceSetupList(options?: BsnEnumerationOptions): Promise<BsnDeviceSetupEntity[]>;
    getDeviceSetupListBySegment(options?: BsnEnumerationOptions): Promise<BsnDeviceSetupListSegment>;
    getNextDeviceSetupListSegment(enumerator: BsnEnumerator): Promise<BsnDeviceSetupListSegment>;
    getDeviceSetupCount(options?: BsnEnumerationOptions): Promise<number>;
    getDeviceSetupEntity(setupId: string): Promise<BsnDeviceSetupEntity>;
    addDeviceSetup(deviceSettings: BsnDeviceSetupEntity): Promise<BsnDeviceSetupEntity>;
    updateDeviceSetup(deviceSettings: BsnDeviceSetupEntity): Promise<void>;
    deleteDeviceSetup(setupId: string): Promise<void>;
    getDeviceSetupFile(deviceSettings: BsnDeviceSetupEntity): Promise<ArrayBuffer>;
    getDeviceRegistrationToken(): Promise<BsnDeviceRegistrationTokenEntity>;
    getDeviceProvisionList(options: any): Promise<any[]>;
    getDeviceProvisionListBySegment(options?: BsnEnumerationOptions): Promise<BsnDeviceProvisionListSegment>;
    getNextDeviceProvisionListSegment(enumerator: BsnEnumerator): Promise<BsnDeviceProvisionListSegment>;
    getDeviceProvisionCount(options?: BsnEnumerationOptions): Promise<number>;
    getDeviceProvisionEntity(deviceId: string): Promise<BsnDeviceInfoEntity>;
    addDeviceProvision(device: BsnDeviceInfoEntity): Promise<BsnDeviceInfoEntity>;
    updateDeviceProvision(device: BsnDeviceInfoEntity): Promise<void>;
    deleteDeviceProvision(deviceId: string): Promise<void>;
    getBDeployDevice(serial: string): Promise<BDeployDevice | null>;
    getBDeployDeviceList(options: BDeployDeviceFilter): Promise<BDeployDevice[]>;
    addBDeployDevice(params: BDeployDevice): Promise<string>;
    updateBDeployDevice(params: BDeployDevice): Promise<string>;
    deleteBDeployDevice(id: string): Promise<void>;
    getBDeployApplicationList(): Promise<BDeployApplication[]>;
    getBDeployDeviceSetupList(options: BDeploySetupFilter): Promise<BsDsSetupParams[]>;
    getBDeployDeviceSetupUseCount(id: string): Promise<number>;
    deleteBDeployDeviceSetup(id: string): Promise<void>;
    addBDeployDeviceSetup(params: BsDsSetupParams): Promise<string>;
    updateBDeployDeviceSetup(params: BsDsSetupParams): Promise<string>;
}

export type BsnSubscriptionListSegment = BsnListSegment<BsnDeviceSubscriptionEntity>;
export class BsnSubscriptionOperations {
    getDeviceSubscriptionList(options?: BsnEnumerationOptions): Promise<BsnDeviceSubscriptionEntity[]>;
    getDeviceSubscriptionListBySegment(options?: BsnEnumerationOptions): Promise<BsnSubscriptionListSegment>;
    getNextDeviceSubscriptionListSegment(enumerator: BsnEnumerator): Promise<BsnSubscriptionListSegment>;
}

export type BsnRegularGroupListSegment = BsnListSegment<BsnRegularGroupEntity>;
export type BsnTaggedGroupListSegment = BsnListSegment<BsnTaggedGroupEntity>;
export class BsnGroupOperations {
    getRegularGroupList(options?: BsnEnumerationOptions): Promise<BsnRegularGroupEntity[]>;
    getRegularGroupListBySegment(options?: BsnEnumerationOptions): Promise<BsnRegularGroupListSegment>;
    getNextRegularGroupListSegment(enumerator: BsnEnumerator): Promise<BsnRegularGroupListSegment>;
    getRegularGroupCount(options?: BsnEnumerationOptions): Promise<number>;
    getRegularGroupEntity(idOrName: number | string): Promise<BsnRegularGroupEntity>;
    existsRegularGroup(name: string): Promise<boolean>;
    createRegularGroup(data: BsnRegularGroupEntity): Promise<BsnRegularGroupEntity>;
    updateRegularGroup(data: BsnRegularGroupEntity): Promise<void>;
    deleteRegularGroup(idOrName: number | string): Promise<void>;
    getRegularGroupPermissions(idOrName: number | string): Promise<BsnPermissionEntity[]>;
    setRegularGroupPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceRegularGroupPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteRegularGroupPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    getTaggedGroupList(options?: BsnEnumerationOptions): Promise<BsnTaggedGroupEntity[]>;
    getTaggedGroupListBySegment(options?: BsnEnumerationOptions): Promise<BsnTaggedGroupListSegment>;
    getNextTaggedGroupListSegment(enumerator: BsnEnumerator): Promise<BsnTaggedGroupListSegment>;
    getTaggedGroupCount(options?: BsnEnumerationOptions): Promise<number>;
    getTaggedGroupEntity(idOrName: number | string): Promise<BsnTaggedGroupEntity>;
    existsTaggedGroup(name: string): Promise<boolean>;
    createTaggedGroup(data: BsnTaggedGroupEntity): Promise<BsnTaggedGroupEntity>;
    updateTaggedGroup(data: BsnTaggedGroupEntity): Promise<void>;
    deleteTaggedGroup(idOrName: number | string): Promise<void>;
    getTaggedGroupPermissions(idOrName: number | string): Promise<BsnPermissionEntity[]>;
    setTaggedGroupPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceTaggedGroupPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteTaggedGroupPermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
}

export type BsnUserListSegment = BsnListSegment<BsnUserEntity>;
export class BsnUserOperations {
    getUserList(options?: BsnEnumerationOptions): Promise<BsnUserEntity[]>;
    getUserListBySegment(options?: BsnEnumerationOptions): Promise<BsnUserListSegment>;
    getNextUserListSegment(enumerator: BsnEnumerator): Promise<BsnUserListSegment>;
    getUserEntity(idOrLogin: number | string): Promise<BsnUserEntity>;
    createUser(data: BsnUserEntity): Promise<BsnUserEntity>;
    updateUser(data: BsnUserEntity): Promise<void>;
    deleteUser(id: number): Promise<void>;
    getUserPermissions(idOrLogin: number | string): Promise<BsnPermissionEntity[]>;
    setUserPermissions(idOrLogin: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceUserPermissions(idOrLogin: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteUserPermissions(idOrLogin: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
}

export type BsnRoleListSegment = BsnListSegment<BsnRoleEntity>;
export class BsnRoleOperations {
    getRoleList(options?: BsnEnumerationOptions): Promise<BsnRoleEntity[]>;
    getRoleListBySegment(options?: BsnEnumerationOptions): Promise<BsnRoleListSegment>;
    getNextRoleListSegment(enumerator: BsnEnumerator): Promise<BsnRoleListSegment>;
    getRoleEntity(idOrName: number | string): Promise<BsnRoleEntity>;
    createRole(data: BsnRoleEntity): Promise<BsnRoleEntity>;
    updateRole(data: BsnRoleEntity): Promise<void>;
    deleteRole(idOrName: number | string): Promise<void>;
    getRolePermissions(idOrName: number | string): Promise<BsnPermissionEntity[]>;
    setRolePermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    replaceRolePermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
    deleteRolePermissions(idOrName: number | string, permissions: BsnPermissionEntity[]): Promise<void>;
}

export class BsnBusinessOperationOperations {
    getBusinessOperationTree(root?: BsnBusinessOperationType): Promise<BsnBusinessOperationEntity>;
}

export enum BsnUploadMediaType {
    Auto = "Auto",
    Text = "Text",
    Image = "Image",
    Video = "Video",
    Audio = "Audio",
    Font = "Font",
    Css = "Css",
    Auxiliary = "Auxiliary",
    WebPage = "WebPage",
    DeviceWebPage = "DeviceWebPage"
}
export function bsnCreateFileUploadItem(fileSource: BsUploadFileSource, destinationPath: string, jobIndex: number, progressHandler: BsUploadFileProgressCallback, existingAsset?: BsAssetLocator, sessionToken?: string, uploadToken?: string, relativePath?: string, uploadMediaType?: BsnUploadMediaType, targetName?: string): BsUploadFile;

export function bsnCreateWebPageUploadItem(htmlSiteSpec: BsUploadWebPageSessionSpec, jobIndex: number, progressCallback: BsUploadWebPageProgressCallback): BsUploadWebPage;

export function bsnGetSession(): BsnSession;
/** DEPRECATED - use new prefixed function name bsnGetSession() */
export function getBsnSession(): BsnSession;
export interface XmlOptions {
    explicitArray?: boolean;
    ignoreAttrs?: boolean;
    trim?: boolean;
}
export type BsnFeedListSegment = BsnListSegment<BsnDataFeedEntity>;
export class BsnSession implements BsnContentOperations, BsnPresentationOperations, BsnTextFeedOperations, BsnMediaFeedOperations, BsnDynamicPlaylistOperations, BsnTaggedPlaylistOperations, BsnHtmlSiteOperations, BsnDeviceWebPageOperations, BsnPluginOperations, BsnTagOperations, BsnProfileOperations, BsnSelfOperations, BsnDeviceOperations, BsnDeviceProvisioningOperations, BsnGroupOperations, BsnPasswordOperations, BsnUserOperations, BsnRoleOperations, BsnBusinessOperationOperations, RemoteContentProcessOperations, BsnDeviceLogOperations, BsnSubscriptionOperations {
    getContent: (options?: BsnEnumerationOptions) => Promise<BsnContentEntity[]>;
    getContentBySegment: (options?: BsnEnumerationOptions) => Promise<BsnContentSegment>;
    getNextContentSegment: (enumerator: BsnEnumerator) => Promise<BsnContentSegment>;
    getContentItemCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getContentItem: (id: number) => Promise<BsnContentEntity>;
    getContentItemsByName: (name: string, virtualPath?: string) => Promise<BsnContentEntity[]>;
    existsContentItem: (name: string, virtualPath?: string, folder?: boolean) => Promise<boolean>;
    getParentFolderListForContentPath: (virtualPath: string) => Promise<BsnFolderContentEntity[]>;
    deleteContentItem: (id: number) => Promise<void>;
    changeContentPath: (id: number, newVirtualPath: string) => Promise<void>;
    createFolder: (name: string, virtualPath: string) => Promise<BsnContentEntity>;
    getContentItemTags: (id: number) => Promise<BsnTagSpecification[]>;
    setContentItemTags: (id: number, Tags: BsnTagSpecification[]) => Promise<void>;
    deleteContentItemTags: (id: number, Tags: BsnTagKeySpecification[]) => Promise<void>;
    getContentItemPermissions: (id: number) => Promise<BsnPermissionEntity[]>;
    setContentItemPermissions: (id: number, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceContentItemPermissions: (id: number, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteContentItemPermissions: (id: number, permissions: BsnPermissionEntity[]) => Promise<void>;
    getPresentationList: (options?: BsnEnumerationOptions) => Promise<BsnPresentationEntity[]>;
    getPresentationListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnPresentationListSegment>;
    getNextPresentationListSegment: (enumerator: BsnEnumerator) => Promise<BsnPresentationListSegment>;
    getPresentationCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getPresentationEntity: (idOrName: number | string) => Promise<BsnPresentationEntity>;
    existsPresentation: (name: string) => Promise<boolean>;
    createPresentation: (data: BsnPresentationSaveData, assetFiles?: BsnPresentationAssetFileData, permissions?: BsnPermissionEntity[] | null) => Promise<BsnPresentationEntity>;
    updatePresentation: (data: BsnPresentationSaveData, assetFiles?: BsnPresentationAssetFileData, permissions?: BsnPermissionEntity[] | null) => Promise<void>;
    publishPresentation: (data: BsnPresentationSaveData, publishFiles: BsnPresentationPublishFileData, permissions?: BsnPermissionEntity[] | null) => Promise<void>;
    deletePresentation: (idOrName: number | string) => Promise<void>;
    getPresentationPermissions: (idOrName: number | string) => Promise<BsnPermissionEntity[]>;
    setPresentationPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replacePresentationPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deletePresentationPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getTextFeedList: (options?: BsnEnumerationOptions) => Promise<BsnTextFeedEntity[]>;
    getTextFeedListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnTextFeedListSegment>;
    getNextTextFeedListSegment: (enumerator: BsnEnumerator) => Promise<BsnTextFeedListSegment>;
    getTextFeedCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getTextFeedEntity: (idOrName: number | string) => Promise<BsnTextFeedEntity>;
    existsTextFeed: (name: string) => Promise<boolean>;
    createTextFeed: (data: BsnTextFeedSaveData) => Promise<BsnTextFeedEntity>;
    updateTextFeed: (data: BsnTextFeedSaveData) => Promise<void>;
    deleteTextFeed: (idOrName: number | string) => Promise<void>;
    getTextFeedPermissions: (idOrName: number | string) => Promise<BsnPermissionEntity[]>;
    setTextFeedPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceTextFeedPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteTextFeedPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getMediaFeedList: (options?: BsnEnumerationOptions) => Promise<BsnMediaFeedEntity[]>;
    getMediaFeedListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnMediaFeedListSegment>;
    getNextMediaFeedListSegment: (enumerator: BsnEnumerator) => Promise<BsnMediaFeedListSegment>;
    getMediaFeedCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getMediaFeedEntity: (idOrName: number | string) => Promise<BsnMediaFeedEntity>;
    existsMediaFeed: (name: string) => Promise<boolean>;
    createMediaFeed: (data: BsnMediaFeedSaveData) => Promise<BsnMediaFeedEntity>;
    updateMediaFeed: (data: BsnMediaFeedSaveData) => Promise<void>;
    deleteMediaFeed: (idOrName: number | string) => Promise<void>;
    getMediaFeedPermissions: (idOrName: number | string) => Promise<BsnPermissionEntity[]>;
    setMediaFeedPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceMediaFeedPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteMediaFeedPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getDynamicPlaylistList: (options?: BsnEnumerationOptions) => Promise<BsnDynamicPlaylistEntity[]>;
    getDynamicPlaylistListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnDynamicPlaylistListSegment>;
    getNextDynamicPlaylistListSegment: (enumerator: BsnEnumerator) => Promise<BsnDynamicPlaylistListSegment>;
    getDynamicPlaylistCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getDynamicPlaylistEntity: (idOrName: number | string) => Promise<BsnDynamicPlaylistEntity>;
    existsDynamicPlaylist: (name: string) => Promise<boolean>;
    createDynamicPlaylist: (data: BsnDynamicPlaylistSaveData) => Promise<BsnDynamicPlaylistEntity>;
    updateDynamicPlaylist: (data: BsnDynamicPlaylistSaveData) => Promise<void>;
    deleteDynamicPlaylist: (idOrName: number | string) => Promise<void>;
    getDynamicPlaylistPermissions: (idOrName: number | string) => Promise<BsnPermissionEntity[]>;
    setDynamicPlaylistPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceDynamicPlaylistPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteDynamicPlaylistPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getTaggedPlaylistList: (options?: BsnEnumerationOptions) => Promise<BsnTaggedPlaylistEntity[]>;
    getTaggedPlaylistListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnTaggedPlaylistListSegment>;
    getNextTaggedPlaylistListSegment: (enumerator: BsnEnumerator) => Promise<BsnTaggedPlaylistListSegment>;
    getTaggedPlaylistCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getTaggedPlaylistEntity: (idOrName: number | string) => Promise<BsnTaggedPlaylistEntity>;
    existsTaggedPlaylist: (name: string) => Promise<boolean>;
    createTaggedPlaylist: (data: BsnTaggedPlaylistSaveData) => Promise<BsnTaggedPlaylistEntity>;
    updateTaggedPlaylist: (data: BsnTaggedPlaylistSaveData) => Promise<void>;
    deleteTaggedPlaylist: (idOrName: number | string) => Promise<void>;
    getTaggedPlaylistPermissions: (idOrName: number | string) => Promise<BsnPermissionEntity[]>;
    setTaggedPlaylistPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceTaggedPlaylistPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteTaggedPlaylistPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getHtmlSiteList: (options?: BsnEnumerationOptions) => Promise<BsnHtmlSiteEntity[]>;
    getHtmlSiteListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnHtmlSiteListSegment>;
    getNextHtmlSiteListSegment: (enumerator: BsnEnumerator) => Promise<BsnHtmlSiteListSegment>;
    getHtmlSiteCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getHtmlSiteEntity: (idOrName: number | string) => Promise<BsnHtmlSiteEntity>;
    existsHtmlSite: (name: string) => Promise<boolean>;
    deleteHtmlSite: (idOrName: number | string) => Promise<void>;
    getHtmlSitePermissions: (idOrName: number | string) => Promise<BsnPermissionEntity[]>;
    setHtmlSitePermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceHtmlSitePermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteHtmlSitePermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getDeviceWebPageList: (options?: BsnEnumerationOptions) => Promise<BsnHtmlSiteEntity[]>;
    getDeviceWebPageListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnHtmlSiteListSegment>;
    getNextDeviceWebPageListSegment: (enumerator: BsnEnumerator) => Promise<BsnHtmlSiteListSegment>;
    getDeviceWebPageCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getDeviceWebPageEntity: (idOrName: number | string) => Promise<BsnHtmlSiteEntity>;
    existsDeviceWebPage: (name: string) => Promise<boolean>;
    deleteDeviceWebPage: (idOrName: number | string) => Promise<void>;
    getDeviceWebPagePermissions: (idOrName: number | string) => Promise<BsnPermissionEntity[]>;
    setDeviceWebPagePermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceDeviceWebPagePermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteDeviceWebPagePermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getPluginList: (options?: BsnEnumerationOptions) => Promise<BsnPluginEntity[]>;
    getPluginListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnPluginListSegment>;
    getNextPluginListSegment: (enumerator: BsnEnumerator) => Promise<BsnPluginListSegment>;
    getPluginCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getPluginEntity: (idOrName: number | string) => Promise<BsnPluginEntity>;
    existsPlugin: (name: string) => Promise<boolean>;
    createPlugin: (data: BsnPluginSaveData) => Promise<BsnPluginEntity>;
    updatePlugin: (data: BsnPluginSaveData) => Promise<void>;
    deletePlugin: (idOrName: number | string) => Promise<void>;
    getTagKeys: (pattern?: BsnTagKeyPatternSpecification) => Promise<BsnTagKeySpecification[]>;
    getTagValueStrings: (pattern?: BsnTagKeyPatternSpecification) => Promise<string[]>;
    getPersonProfileMap: () => Promise<BsProfileEntity>;
    createPersonProfileValue: (profileKey: string, profileValue: string | object) => Promise<BsProfileEntity>;
    updatePersonProfileValue: (profileKey: string, profileValue: string | object) => Promise<void>;
    deletePersonProfileValue: (profileKey: string) => Promise<void>;
    getUserProfileMap: () => Promise<BsProfileEntity>;
    createUserProfileValue: (profileKey: string, profileValue: string | object | boolean) => Promise<BsProfileEntity>;
    updateUserProfileValue: (profileKey: string, profileValue: string | object) => Promise<void>;
    deleteUserProfileValue: (profileKey: string) => Promise<void>;
    resetPassword: (userName: string) => Promise<void>;
    createPerson: (personData: BsnPersonEntity) => Promise<BsnPersonEntity>;
    getPerson: () => Promise<BsnPersonEntity>;
    createNetwork: (networkName: string) => Promise<BsnNetworkEntity>;
    getNetworkSubscriptionHistory: () => Promise<BsnNetworkSubscriptionEntity[]>;
    getNetworkList: () => Promise<BsnNetworkEntity[]>;
    getNetworkListForUser: () => Promise<string[]>;
    getSelfUserEntity: () => Promise<BsnUserEntity>;
    updateNetworkSettings: (settings: Partial<BsnNetworkSettingsEntity>) => Promise<void>;
    updateNetworkSubscriptionLevel: (subscriptionLevel: BsnNetworkSubscriptionLevel) => Promise<void>;
    getSelfRoleEntity: () => Promise<BsnRoleEntity>;
    getSelfRolePermissions: () => Promise<BsnPermissionEntity[]>;
    assignDownsampleImageJob: (downsampleEntity: RemoteProcedureDownsampleEntity) => Promise<RemoteProcedureJobEntity>;
    queryRemoteProcedureJobStatus: (jobId: string) => Promise<RemoteProcedureJobItem[]>;
    removeRemoteProcedureJob: (jobId: string) => Promise<void>;
    getDeviceList: (options?: BsnEnumerationOptions) => Promise<BsnDeviceEntity[]>;
    getDeviceListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnDeviceListSegment>;
    getNextDeviceListSegment: (enumerator: BsnEnumerator) => Promise<BsnDeviceListSegment>;
    getDeviceListCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getDeviceEntity: (idOrSerial: number | string) => Promise<BsnDeviceEntity>;
    existsDevice: (serial: string) => Promise<boolean>;
    updateDevice: (data: BsnDeviceUpdateData) => Promise<void>;
    deleteDevice: (idOrSerial: number | string) => Promise<void>;
    getDeviceErrors: (idOrSerial: number | string, options?: BsnEnumerationOptions) => Promise<BsnDeviceErrorEntity[]>;
    getDeviceErrorListBySegment: (idOrSerial: number | string, options?: BsnEnumerationOptions) => Promise<BsnDeviceErrorListSegment>;
    getNextDeviceErrorListSegment: (idOrSerial: number | string, enumerator: BsnEnumerator) => Promise<BsnDeviceErrorListSegment>;
    getDeviceScreenshots: (idOrSerial: number | string, options?: BsnEnumerationOptions) => Promise<BsnDeviceRemoteSnapshotEntity[]>;
    getDeviceDownloads: (idOrSerial: number | string, options?: BsnEnumerationOptions) => Promise<BsnDeviceDownloadEntity[]>;
    getDeviceDownloadListBySegment: (idOrSerial: number | string, options?: BsnEnumerationOptions) => Promise<BsnDeviceDownloadListSegment>;
    getNextDeviceDownloadListSegment: (idOrSerial: number | string, enumerator: BsnEnumerator) => Promise<BsnDeviceDownloadListSegment>;
    getDeviceScreenshotsBySegment: (idOrSerial: number | string, options?: BsnEnumerationOptions) => Promise<BsnDeviceScreenshotListSegment>;
    getNextDeviceScreenshotsSegment: (idOrSerial: number | string, enumerator: BsnEnumerator) => Promise<BsnDeviceScreenshotListSegment>;
    getDeviceBeacons: (idOrSerial: number | string, options?: BsnEnumerationOptions) => Promise<BsnBeaconEntity[]>;
    getDeviceBeaconListBySegment: (idOrSerial: number | string, options?: BsnEnumerationOptions) => Promise<BsnDeviceBeaconListSegment>;
    getNextDeviceBeaconListSegment: (idOrSerial: number | string, enumerator: BsnEnumerator) => Promise<BsnDeviceBeaconListSegment>;
    getDeviceBeaconEntity: (deviceIdOrSerial: number | string, beaconId: number) => Promise<BsnBeaconEntity>;
    getDeviceTags: (id: number) => Promise<BsnTagSpecification[]>;
    setDeviceTags: (id: number, Tags: BsnTagSpecification[]) => Promise<void>;
    deleteDeviceTags: (id: number, Tags: BsnTagKeySpecification[]) => Promise<void>;
    getDevicePermissions: (idOrSerial: number | string) => Promise<BsnPermissionEntity[]>;
    setDevicePermissions: (idOrSerial: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceDevicePermissions: (idOrSerial: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteDevicePermissions: (idOrSerial: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getDeviceSetupList: (options?: BsnEnumerationOptions) => Promise<BsnDeviceSetupEntity[]>;
    getDeviceSetupListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnDeviceSetupListSegment>;
    getNextDeviceSetupListSegment: (enumerator: BsnEnumerator) => Promise<BsnDeviceSetupListSegment>;
    getDeviceSetupCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getDeviceSetupEntity: (setupId: string) => Promise<BsnDeviceSetupEntity>;
    addDeviceSetup: (deviceSettings: BsnDeviceSetupEntity) => Promise<BsnDeviceSetupEntity>;
    updateDeviceSetup: (deviceSettings: BsnDeviceSetupEntity) => Promise<void>;
    deleteDeviceSetup: (setupId: string) => Promise<void>;
    getDeviceSetupFile: (deviceSettings: BsnDeviceSetupEntity) => Promise<ArrayBuffer>;
    getDeviceRegistrationToken: () => Promise<BsnDeviceRegistrationTokenEntity>;
    getDeviceProvisionList: (options?: BsnEnumerationOptions) => Promise<BsnDeviceInfoEntity[]>;
    getDeviceProvisionListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnDeviceProvisionListSegment>;
    getNextDeviceProvisionListSegment: (enumerator: BsnEnumerator) => Promise<BsnDeviceProvisionListSegment>;
    getDeviceProvisionCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getDeviceProvisionEntity: (deviceId: string) => Promise<BsnDeviceInfoEntity>;
    addDeviceProvision: (device: BsnDeviceInfoEntity) => Promise<BsnDeviceInfoEntity>;
    addDeviceProvisionBDeploy: (device: BsDsSetupParams) => Promise<BsDsSetupParams>;
    updateDeviceProvision: (device: BsnDeviceInfoEntity) => Promise<void>;
    deleteDeviceProvision: (deviceId: string) => Promise<void>;
    getBDeployDeviceList: (options: BDeployDeviceFilter) => Promise<BDeployDevice[]>;
    getBDeployDevice: (serial: string) => Promise<BDeployDevice | null>;
    addBDeployDevice: (params: BDeployDevice) => Promise<string>;
    updateBDeployDevice: (params: BDeployDevice) => Promise<string>;
    deleteBDeployDevice: (id: string) => Promise<void>;
    getBDeployApplicationList: () => Promise<BDeployApplication[]>;
    getBDeployDeviceSetupList: (options: BDeploySetupFilter) => Promise<BsDsSetupParams[]>;
    getBDeployDeviceSetupUseCount: (id: string) => Promise<number>;
    addBDeployDeviceSetup: (params: BsDsSetupParams) => Promise<string>;
    updateBDeployDeviceSetup: (params: BsDsSetupParams) => Promise<string>;
    deleteBDeployDeviceSetup: (id: string) => Promise<void>;
    getDeviceLogListBySegment: (options?: BsniDeviceLogEnumerationOptions) => Promise<BsniDeviceLogListSegment>;
    getNextDeviceLogListSegment: (enumerator: BsncDeviceLogEnumerator) => Promise<BsniDeviceLogListSegment>;
    getDeviceLogList: (options?: BsniDeviceLogEnumerationOptions) => Promise<BsniDeviceLogRecord[]>;
    getDeviceSubscriptionList: (options?: BsnEnumerationOptions) => Promise<BsnDeviceSubscriptionEntity[]>;
    getDeviceSubscriptionListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnSubscriptionListSegment>;
    getNextDeviceSubscriptionListSegment: (enumerator: BsnEnumerator) => Promise<BsnSubscriptionListSegment>;
    getRegularGroupList: (options?: BsnEnumerationOptions) => Promise<BsnRegularGroupEntity[]>;
    getRegularGroupListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnRegularGroupListSegment>;
    getNextRegularGroupListSegment: (enumerator: BsnEnumerator) => Promise<BsnRegularGroupListSegment>;
    getRegularGroupCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getRegularGroupEntity: (idOrName: number | string) => Promise<BsnRegularGroupEntity>;
    existsRegularGroup: (name: string) => Promise<boolean>;
    createRegularGroup: (data: BsnRegularGroupEntity) => Promise<BsnRegularGroupEntity>;
    updateRegularGroup: (data: BsnRegularGroupEntity) => Promise<void>;
    deleteRegularGroup: (idOrName: number | string) => Promise<void>;
    getRegularGroupPermissions: (idOrName: number | string) => Promise<BsnPermissionEntity[]>;
    setRegularGroupPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceRegularGroupPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteRegularGroupPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getTaggedGroupList: (options?: BsnEnumerationOptions) => Promise<BsnTaggedGroupEntity[]>;
    getTaggedGroupListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnTaggedGroupListSegment>;
    getNextTaggedGroupListSegment: (enumerator: BsnEnumerator) => Promise<BsnTaggedGroupListSegment>;
    getTaggedGroupCount: (options?: BsnEnumerationOptions) => Promise<number>;
    getTaggedGroupEntity: (idOrName: number | string) => Promise<BsnTaggedGroupEntity>;
    existsTaggedGroup: (name: string) => Promise<boolean>;
    createTaggedGroup: (data: BsnTaggedGroupEntity) => Promise<BsnTaggedGroupEntity>;
    updateTaggedGroup: (data: BsnTaggedGroupEntity) => Promise<void>;
    deleteTaggedGroup: (idOrName: number | string) => Promise<void>;
    getTaggedGroupPermissions: (idOrName: number | string) => Promise<BsnPermissionEntity[]>;
    setTaggedGroupPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceTaggedGroupPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteTaggedGroupPermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getUserList: (options?: BsnEnumerationOptions) => Promise<BsnUserEntity[]>;
    getUserListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnUserListSegment>;
    getNextUserListSegment: (enumerator: BsnEnumerator) => Promise<BsnUserListSegment>;
    getUserEntity: (idOrLogin: number | string) => Promise<BsnUserEntity>;
    createUser: (data: BsnUserEntity) => Promise<BsnUserEntity>;
    updateUser: (data: BsnUserEntity) => Promise<void>;
    deleteUser: (id: number) => Promise<void>;
    getUserPermissions: (idOrLogin: number | string) => Promise<BsnPermissionEntity[]>;
    setUserPermissions: (idOrLogin: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceUserPermissions: (idOrLogin: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteUserPermissions: (idOrLogin: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getRoleList: (options?: BsnEnumerationOptions) => Promise<BsnRoleEntity[]>;
    getRoleListBySegment: (options?: BsnEnumerationOptions) => Promise<BsnRoleListSegment>;
    getNextRoleListSegment: (enumerator: BsnEnumerator) => Promise<BsnRoleListSegment>;
    getRoleEntity: (idOrName: number | string) => Promise<BsnRoleEntity>;
    createRole: (data: BsnRoleEntity) => Promise<BsnRoleEntity>;
    updateRole: (data: BsnRoleEntity) => Promise<void>;
    deleteRole: (idOrName: number | string) => Promise<void>;
    getRolePermissions: (idOrName: number | string) => Promise<BsnPermissionEntity[]>;
    setRolePermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    replaceRolePermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    deleteRolePermissions: (idOrName: number | string, permissions: BsnPermissionEntity[]) => Promise<void>;
    getBusinessOperationTree: (root?: BsnBusinessOperationType) => Promise<BsnBusinessOperationEntity>;
    get userName(): string;
    get networkName(): string;
    get personId(): number;
    get personInfo(): BsnPersonDescriptionEntity | null;
    get userId(): number;
    get roleId(): number;
    get roleName(): string;
    get status(): BsnSessionStatus;
    get subscriptionLevel(): BsnNetworkSubscriptionLevel | null;
    get subscriptionInfo(): BsnNetworkSubscriptionDescriptionEntity | null;
    get userInfo(): BsnUserDescriptionEntity | null;
    get oauthAccessTokenExpirationTime(): Date;
    get isUserInfoValid(): boolean;
    get isNetworkSpecified(): boolean;
    get isUserActive(): boolean;
    get isNetworkActive(): boolean;
    get logLevel(): BsnLogLevel;
    set logLevel(value: BsnLogLevel);
    get logOptions(): BsnLogOptions;
    set logOptions(value: BsnLogOptions);
    activate(userName: string, password: string, networkName?: string, serverUrl?: string): Promise<BsnSession>;
    activateWithRefreshToken(userName: string, networkName: string, refreshToken: string): Promise<BsnSession>;
    deactivate(): void;
    setPasswordRefreshFunction(fn: BsnPasswordRefreshFunction | null): void;
    openNetwork(networkName: string): Promise<BsnSession>;
    hasScope(scope: string): boolean;
    /**
     * Return true if the current user has the scope for the given BsnOperation and optional action.
     * If action is not specified, the function will return true only if the user has access to the parent scope
     *  for all available actions.
     * @param operation {BsnBusinessOperationType}
     * @param [action] {BsnOperationAction}
     * @returns {boolean}
     */
    hasScopeForOperation(operation: BsnBusinessOperationType, action?: BsnOperationAction): boolean;
    getStoredJsonFile(url: string): Promise<object>;
    getStoredXmlFile(url: string, options?: XmlOptions): Promise<object>;
    getStoredTextFile(url: string): Promise<string>;
    testUrl(url: string): Promise<boolean>;
    fetchOAuthToken(): Promise<string>;
    validateActivationCode(token: string, activationCode: string): Promise<object>;
    deleteActivationCode(token: string, activationCode: string): Promise<object>;
}
