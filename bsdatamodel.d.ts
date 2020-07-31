/* tslint:disable:quotemark max-line-length trailing-comma */
import {Reducer, Action, Dispatch, ActionCreator} from 'redux';
import {AccessType, AudioConfiguration, AudioMappingType, AudioMixModeType, AudioModeType, AudioOutputName, AudioOutputSelectionType, AudioOutputType, BlcBlink, BlcEffect, BlcIndex, BlcPlaybackMode, BlcTransitionMode, BpAction, BpIndex, BpType, BsAssetId, BsAssetItem, BsColor, BsnDataFeedAssetType, BsRect, BsSize, ButtonDirection, CommandSequenceType, CommandType, CompareOperator, ContentItemType, DataFeedUsageType, DeviceWebPageDisplay, DistanceUnits, EventIntrinsicAction, EventType, GpioType, HtmlSiteType, ImageModeType, LanguageKeyType, LanguageType, MediaListPlaybackType, MonitorOrientationType, MonitorOverscanType, MosaicMaxContentResolutionType, NumberParameterType, PlayerModel, PlayerTagMatchingType, PlayFileTriggerType, RegionDirection, RotationType, StringParameterType, SystemVariableType, TextHAlignmentType, TextScrollingMethodType, TouchCursorDisplayModeType, TransitionType, TwitterFeedRestrictionType, UdpAddressType, UsbConnectorName, VideoConnectorType, VideoDecoderMode, VideoDecoderSize, VideoDisplayModeType, VideoMode, VideoZoneLayerType, ViewModeType, ZoneLayerType, ZoneType, IrReceiverSource, IrTransmitterDestination, BsIrRemoteControl, WssDeviceSpec, DataFeedType, BscFileTypeInfo, AssetType, MediaType, BsLocalAssetThumbnail, BsAssetLocator, BsnPresentationAssetItemSpecification} from './bscore';
/** @module Interfaces */
/**
 * @type BsDmId {string} - a GUID string that identifies a data model object. These IDs are typically generated
 *  automatically when new objects are added.
 */
export type BsDmId = string;
export const BsDmIdNone = "0";
export const BsDmStateVersion = "1.1.5";
/**
 * @interface String component for use in DmParameterizedString
 * value: if type === 'Text', value = text string
 *        if type = UserVariable, value = BsDmId of UserVariable ID
 */
export interface DmStringComponent {
    type: StringParameterType;
    value: string;
}
export interface DmParameterizedString {
    params: DmStringComponent[];
}
export interface DmParameterizedNumber {
    type: NumberParameterType;
    value: number | string;
}
export interface DmIdParam {
    id: BsDmId;
}
export interface DmIdListParam {
    ids: BsDmId[];
}
export interface DmNameParam {
    name: string;
}
export type DmIdAndNameParam = DmIdParam & DmNameParam;
export interface DmTagParam {
    tag: string;
}
export interface DmLocatorParam {
    locator: string;
}
export interface DmTypeParam {
    type: string;
}
export type DmIdAndTypeParam = DmIdParam & DmTypeParam;
export interface DmTypeArrayParam {
    types: string[];
}
export interface DmParameterizedStringParam {
    paramString: DmParameterizedString;
}
export interface DmParameterizedNumberParam {
    paramNumber: DmParameterizedNumber;
}
export interface DmParameterizedValueResolutionReport {
    ok: boolean;
    undefinedUserVariableNames?: string[];
}
export interface DmStringParam {
    value: string;
}
export interface DmPortParam {
    port: number;
}
export interface DmIndexParam {
    index: number;
}
export type DmIdAndIndexParam = DmIdParam & DmIndexParam;
export interface DmFont {
    name: string;
    assetId: BsAssetId;
}
export interface DmBaseObject {
    id: BsDmId;
}
export interface DmObject extends DmBaseObject {
    name: string;
}
export class DmEntityType {
    static Sign: string;
    static Zone: string;
    static MediaState: string;
    static Event: string;
    static Transition: string;
    static Command: string;
    static DataFeed: string;
    static DataFeedSource: string;
    static HtmlSite: string;
    static NodeApp: string;
    static UserVariable: string;
    static LiveText: string;
    static Plugin: string;
    static ScriptPlugin: string;
    static ParserPlugin: string;
    static DeviceWebPage: string;
    static LinkedPresentation: string;
    static AuxiliaryFile: string;
    static PartnerProduct: string;
    static LiveTextItem: string;
}
export class DmEntityContainerType {
    static ZoneSet: string;
    static MediaStateSet: string;
    static MediaStateItemSet: string;
    static EventSet: string;
    static TransitionSequence: string;
    static CommandSequence: string;
    static CommandSequenceStateEntry: string;
    static CommandSequenceStateExit: string;
    static CommandSequenceItemEntry: string;
    static CommandSequenceItemExit: string;
    static LiveTextItemSet: string;
    static UserVariableSet: string;
    static ScriptPluginSet: string;
    static ParserPluginSet: string;
    static LinkedPresentationSet: string;
    static SystemDataFeedSet: string;
    static AuxiliaryFileSet: string;
}
export type DmEntityTreeNodeType = DmEntityType | DmEntityContainerType;
export class DmCopySetContentType {
    static Playlist: string;
    static Interactive: string;
    static MediaItemList: string;
    static LiveText: string;
    static Command: string;
    static UserVariable: string;
}
/**
 * For a given entity type, this represents a map where the keys are the entity names, and the values are an array of
 *  IDs of entities that have the name represented by the key. This is used for name disambiguation.
 */
export interface DmEntityNameMap {
    [name: string]: BsDmId[];
}
export interface DmSignTreeNode {
    id: BsDmId;
    type: DmEntityTreeNodeType;
    parentId: BsDmId;
    children: DmSignTreeNode[];
}
export interface DmNodeApp extends DmObject {
    indexAssetId: BsAssetId;
}
export interface DmHtmlSite extends DmObject {
    type: HtmlSiteType;
    queryString: DmParameterizedString;
}
export interface DmHostedHtmlSite extends DmHtmlSite {
    readonly type: 'Hosted';
    indexAssetId: BsAssetId;
    enableNode: boolean;
}
export interface DmRemoteHtmlSite extends DmHtmlSite {
    readonly type: 'Remote';
    url: DmParameterizedString;
}
export interface DmDeviceWebPage extends DmObject {
    indexAssetId: BsAssetId;
    port: number;
}
export interface DmDataFeedSourceBaseProperties {
    updateInterval: number;
    useHeadRequest: boolean;
}
export interface DmDataFeedSourceBase extends DmBaseObject, DmDataFeedSourceBaseProperties {
    refCount?: number;
}
export interface DmRemoteDataFeedSource extends DmDataFeedSourceBase {
    type: 'URLDataFeed';
    url: DmParameterizedString;
}
export interface DmBsnDataFeedSource extends DmDataFeedSourceBase {
    type: BsnDataFeedAssetType;
    dataFeedAssetId: BsAssetId;
}
export interface DmDataFeedBase extends DmObject {
    feedSourceId: BsDmId;
    usage: DataFeedUsageType;
}
export interface DmBaseDataFeedProperties {
    parserPlugin: BsDmId | null;
    autoGenerateUserVariables: boolean;
    userVariableAccess: AccessType;
    isSystemFeed?: boolean;
}
export interface DmBsnDataFeedProperties extends DmBaseDataFeedProperties {
    supportsAudio: boolean;
    playerTagMatching: PlayerTagMatchingType;
}
export type DmRemoteDataFeed = DmDataFeedBase & DmBaseDataFeedProperties;
export type DmBsnDataFeed = DmDataFeedBase & DmBsnDataFeedProperties;
export type DmDataFeed = DmRemoteDataFeed | DmBsnDataFeed;
export type DmDataFeedSource = DmRemoteDataFeedSource | DmBsnDataFeedSource;
export type DmDataFeedProperties = DmBaseDataFeedProperties | DmBsnDataFeedProperties;
/**
 * Specifications for a data feed source.
 */
export interface DmBaseDataFeedSourceSpecification extends Partial<DmDataFeedSourceBaseProperties> {
    usage: DataFeedUsageType;
}
/**
 * @param url {string} - either a simple URL string, or the display version of a parameterized string,
 *  with user variable names enclosed in the appropriate delimiters
 */
export interface DmRemoteDataFeedSourceSpecification extends DmBaseDataFeedSourceSpecification {
    type: 'URLDataFeed';
    url: string;
}
export interface DmBsnDataFeedSourceSpecification extends DmBaseDataFeedSourceSpecification {
    type: BsnDataFeedAssetType;
    assetItem: BsAssetItem;
}
export type DmDataFeedSourceSpecification = DmRemoteDataFeedSourceSpecification | DmBsnDataFeedSourceSpecification;
/**
 * @interface DmDataFeedEntityGroup - contains the three basic dataFeed related objects
 * @property sourceDataFeed {DmDataFeed | null} - dataFeed source, if defined
 * @property sourceDataFeedSource {DmDataFeedSource | null} - dataFeed source, if defined
 * @property sourceDataFeedAssetItem - assetItem for BSN dataFeed,
 *  or null if dataFeed not defined or not a BSN dataFeed
 */
export interface DmDataFeedEntityGroup {
    dataFeed: DmDataFeed;
    feedSource: DmDataFeedSource;
    assetItem?: BsAssetItem;
}
/**
 * DmContentItem serves as the "abstract base interface" for all content item types
 */
export interface DmContentItem {
    name: string;
    type: ContentItemType;
}
/**
 * The actual contentItem of a MediaState will always be of type DmDerivedContentItem
 * In other words - it will be one of the derived content item types.
 */
export type DmDerivedContentItem = DmMediaContentItem | DmHtmlContentItem | DmDataFeedContentItem | DmMrssDataFeedContentItem | DmTwitterFeedContentItem | DmUserVariableContentItem | DmLiveVideoContentItem | DmVideoStreamContentItem | DmAudioStreamContentItem | DmMjpegStreamContentItem | DmMediaListContentItem | DmPlayFileContentItem | DmEventHandlerContentItem | DmTimeContentItem | DmDateContentItem | DmLiveTextContentItem | DmSuperStateContentItem;
export type DmDerivedNonMediaContentItem = DmHtmlContentItem | DmDataFeedContentItem | DmMrssDataFeedContentItem | DmTwitterFeedContentItem | DmUserVariableContentItem | DmLiveVideoContentItem | DmVideoStreamContentItem | DmAudioStreamContentItem | DmMjpegStreamContentItem | DmMediaListContentItem | DmPlayFileContentItem | DmEventHandlerContentItem | DmTimeContentItem | DmDateContentItem | DmLiveTextContentItem | DmSuperStateContentItem;
export type DmContentItemData = DmVideoContentItemData | DmAudioContentItemData | DmImageContentItemData | DmHtmlContentItemData | DmMrssDataFeedContentItemData | DmTwitterFeedContentItemData | DmLiveVideoContentItemData | DmStreamContentItemData | DmMjpegStreamContentItemData | DmMediaListContentItemData | DmPlayFileContentItemData | DmPlayFileItemContentItemData | DmEventHandlerContentItemData | DmLiveTextContentItemData | DmSuperStateContentItemData;
export type DmMediaContentItemData = DmVideoContentItemData | DmAudioContentItemData | DmImageContentItemData;
export type DmNonMediaContentAdditionalAssetData = DmMediaListContentItemAssetData | DmPlayFileContentItemAssetData;
export type DmMediaStateContentItemSpecification = DmDerivedNonMediaContentItem | BsAssetItem | DmDataFeedSourceSpecification;
export interface DmMediaContentItem extends DmContentItem {
    assetId: BsAssetId;
}
export interface DmVideoContentItemData {
    volume: number;
    videoDisplayMode: VideoDisplayModeType;
    automaticallyLoop: boolean;
}
export const DmVideoContentItemDataNameArray: string[];
export type DmVideoContentItem = DmMediaContentItem & DmVideoContentItemData;
export interface DmAudioContentItemData {
    volume: number;
}
export const DmAudioContentItemDataNameArray: string[];
export type DmAudioContentItem = DmMediaContentItem & DmAudioContentItemData;
export interface DmImageContentItemData {
    useImageBuffer: boolean;
    videoPlayerRequired: boolean;
    defaultTransition: TransitionType;
    transitionDuration: number;
}
export type DmImageContentItem = DmMediaContentItem & DmImageContentItemData;
export interface DmImageContentItemDefaults extends DmImageContentItemData {
    displayDuration: number;
}
export const DmImageContentItemDataNameArray: string[];
export type DmTextContentItem = DmMediaContentItem;
export interface DmUserVariableContentItem extends DmContentItem {
    userVariableId: BsDmId;
}
export type DmTimeContentItem = DmContentItem;
export type DmDateContentItem = DmContentItem;
export interface DmHtmlContentItemBaseData {
    enableBrightSignJavascriptObjects: boolean;
    enableCrossDomainPolicyChecks: boolean;
    ignoreHttpsCertificateErrors: boolean;
    enableCamera: boolean;
    enableMouseEvents: boolean;
    displayCursor: boolean;
    hwzOn: boolean;
    useUserStylesheet: boolean;
}
export interface DmHtmlContentItemData extends DmHtmlContentItemBaseData {
    userStylesheetAssetId?: BsAssetId;
    customFonts?: DmFont[];
}
export interface DmHtmlContentItem extends DmContentItem, DmHtmlContentItemData {
    siteId: BsDmId;
}
export interface DmHtmlContentItemDefaults extends DmHtmlContentItemBaseData {
    displayDuration: number;
}
export const DmHtmlContentItemDataNameArray: string[];
export interface DmDataFeedContentItem extends DmContentItem {
    dataFeedId: BsDmId;
}
export interface DmMrssDataFeedContentItemData {
    videoPlayerRequired: boolean;
}
export const DmMrssDataFeedContentItemDataNameArray: string[];
export type DmMrssDataFeedContentItem = DmDataFeedContentItem & DmMrssDataFeedContentItemData;
export interface DmTwitterFeedContentItemDefaults {
    userName: string;
    updateInterval: number;
    restrictNumberOfTweets: TwitterFeedRestrictionType;
    numberOfTweetsToShow: number;
    numberOfRecentDaysForTweets: number;
}
export interface DmTwitterFeedContentItemData extends DmTwitterFeedContentItemDefaults {
    authToken: string;
    encryptedTwitterSecrets: string;
}
export const DmTwitterFeedContentItemDataNameArray: string[];
export type DmTwitterFeedContentItem = DmContentItem & DmTwitterFeedContentItemData;
export interface DmLiveVideoContentItemData {
    volume: number;
    overscan: boolean;
}
export type DmLiveVideoContentItem = DmContentItem & DmLiveVideoContentItemData;
export interface DmLiveVideoContentItemDefaults extends DmLiveVideoContentItemData {
    displayDuration: number;
}
export const DmLiveVideoContentItemDataNameArray: string[];
export interface DmStreamContentItemData {
    volume: number;
    url: DmParameterizedString;
}
export interface DmStreamContentItemDefaults {
    volume: number;
    displayDuration: number;
}
export const DmStreamContentItemDataNameArray: string[];
export type DmVideoStreamContentItem = DmContentItem & DmStreamContentItemData;
export type DmAudioStreamContentItem = DmContentItem & DmStreamContentItemData;
export interface DmMjpegStreamContentItemData {
    rotation: RotationType;
    url: DmParameterizedString;
}
export interface DmMjpegStreamContentItemDefaults {
    rotation: RotationType;
    displayDuration: number;
}
export const DmMjpegStreamContentItemDataNameArray: string[];
export type DmMjpegStreamContentItem = DmContentItem & DmMjpegStreamContentItemData;
export type DmStreamContentItem = DmVideoStreamContentItem | DmAudioStreamContentItem | DmMjpegStreamContentItem;
export interface DmMediaListContentItemDefaults {
    playbackType: MediaListPlaybackType;
    shuffle: boolean;
    support4KImage: boolean;
    sendMediaZoneMessage: boolean;
    transition: TransitionType;
    transitionDuration: number;
    autoTransitions: boolean;
    inactivityTimeout: boolean;
    inactivityTime: number;
}
export interface DmMediaListContentItemData extends DmMediaListContentItemDefaults {
    startIndex: number;
    useDataFeed: boolean;
    dataFeedId: BsDmId;
}
export const DmMediaListContentItemDataNameArray: string[];
export type DmMediaListContentItem = DmContentItem & DmMediaListContentItemData;
export interface DmMediaListContentItemAssetData {
    dataFeedSpec: DmDataFeedSourceSpecification | null;
}
export interface DmPlayFileContentItemDefaults {
    triggerType: PlayFileTriggerType;
    useDefaultMedia: boolean;
}
export interface DmPlayFileContentItemData extends DmPlayFileContentItemDefaults {
    userVariableIdOrName: string;
    defaultMediaId: BsAssetId;
    useDataFeed: boolean;
    dataFeedId: BsDmId;
}
export const DmPlayFileContentItemDataNameArray: string[];
export type DmPlayFileContentItem = DmContentItem & DmPlayFileContentItemData;
export interface DmPlayFileItemData {
    name: string;
    key: string;
    exportKey: boolean;
}
export const DmPlayFileItemDataNameArray: string[];
export type DmVideoPlayFileItemContentItemData = DmVideoContentItemData & DmPlayFileItemData;
export type DmImagePlayFileItemContentItemData = DmImageContentItemData & DmPlayFileItemData;
export type DmAudioPlayFileItemContentItemData = DmAudioContentItemData & DmPlayFileItemData;
export type DmPlayFileItemContentItemData = DmVideoPlayFileItemContentItemData | DmImagePlayFileItemContentItemData | DmAudioPlayFileItemContentItemData;
export type DmVideoPlayFileItemContentItem = DmVideoContentItem & DmPlayFileItemData;
export type DmImagePlayFileItemContentItem = DmImageContentItem & DmPlayFileItemData;
export type DmAudioPlayFileItemContentItem = DmAudioContentItem & DmPlayFileItemData;
export type DmPlayFileItemContentItem = DmVideoPlayFileItemContentItem | DmImagePlayFileItemContentItem | DmAudioPlayFileItemContentItem;
export interface DmPlayFileContentItemAssetData {
    defaultMedia?: BsAssetItem | null;
    dataFeedSpec?: DmDataFeedSourceSpecification | null;
}
export type DmMediaSequenceContentItemData = DmMediaContentItemData | DmPlayFileItemContentItemData;
export type DmMediaSequenceContentItem = DmMediaContentItem | DmPlayFileItemContentItem;
export type DmMediaSequenceContainerContentItem = DmMediaListContentItem | DmPlayFileContentItem;
export interface DmEventHandlerContentItemDefaults {
    stopPlayback: boolean;
}
export type DmEventHandlerContentItemData = DmEventHandlerContentItemDefaults;
export const DmEventHandlerContentItemDataNameArray: string[];
export type DmEventHandlerContentItem = DmContentItem & DmEventHandlerContentItemData;
export interface DmLiveTextContentItemData {
    canvasId: BsDmId;
}
export const DmLiveTextContentItemDataNameArray: string[];
export type DmLiveTextContentItem = DmContentItem & DmLiveTextContentItemData;
export interface DmSuperStateContentItemData {
    initialMediaStateId: BsDmId;
}
export const DmSuperStateContentItemDataNameArray: string[];
export type DmSuperStateContentItem = DmContentItem & DmSuperStateContentItemData;
export interface DmUserVariable extends DmObject {
    defaultValue: DmParameterizedString;
    isNetworked: boolean;
    access: AccessType;
    dataFeedId: BsDmId;
    systemVariable: SystemVariableType | null;
}
export interface DmCondition {
    userVariableId: BsDmId;
    userVariableName?: string | null;
    compareOperator: CompareOperator;
    compareValue1: DmParameterizedString;
    compareValue2?: DmParameterizedString | null;
}
export interface DmTransition extends DmObject {
    eventId: BsDmId;
    targetMediaStateId: BsDmId;
    type: TransitionType;
    duration: number;
    condition?: DmCondition | null;
    conditionalAction?: EventIntrinsicAction;
}
export interface DmTransitionSequence extends DmBaseObject {
    sequence: BsDmId[];
}
export interface DmTimer {
    interval: number;
}
export type DmTimerEventData = DmTimer;
export interface DmSimpleEventData {
    data: string;
}
export type DmKeyboardEventData = DmSimpleEventData;
export type DmUsbEventData = DmSimpleEventData;
export type DmSynchronizeEventData = DmSimpleEventData;
export type DmZoneMessageEventData = DmSimpleEventData;
export type DmInternalSynchronizeEventData = DmSimpleEventData;
export const DmKeyboardEventSpecialCharCodes: string[];
export const DmKeyboardEventSpecialCharCodeSet: Set<string>;
export interface DmIrRemoteEventData {
    data: string;
    buttonDirection: ButtonDirection;
}
export interface DmEventDataUserVariableAssignments {
    assignInputToUserVariable: boolean;
    assignWildcardToUserVariable: boolean;
    userVariableToAssignInput?: BsDmId | null;
    userVariableToAssignWildcard: BsDmId;
}
export interface DmSerialEventData extends DmEventDataUserVariableAssignments {
    port: string;
    data: string;
}
export class DmTimeClockEventType {
    static DateTime: string;
    static ByUserVariable: string;
    static DailyOnce: string;
    static DailyPeriodic: string;
}
export interface DmTimeClockDateTimeEventData {
    dateTime: Date;
}
export interface DmTimeClockByUserVariableEventData {
    userVariableId: BsDmId;
}
export interface DmTimeClockDailyOnceEventData {
    daysOfWeek: number;
    time: Date;
}
export interface DmTimeClockDailyPeriodicEventData {
    daysOfWeek: number;
    startTime: Date;
    endTime: Date;
    interval: number;
}
export interface DmTimeClockEventData {
    type: DmTimeClockEventType;
    data: DmTimeClockDateTimeEventData | DmTimeClockByUserVariableEventData | DmTimeClockDailyOnceEventData | DmTimeClockDailyPeriodicEventData;
}
export interface DmGpsEventData {
    direction: RegionDirection;
    radius: number;
    distanceUnits: DistanceUnits;
    latitude: number;
    longitude: number;
}
export interface DmRectangularTouchEventData {
    region: BsRect | null;
}
export interface DmInputControlConfiguration {
    repeatInterval: number;
    initialHoldoff: number;
}
export interface DmGpioEventData {
    buttonNumber: number;
    buttonDirection: ButtonDirection;
    pressContinuous: DmInputControlConfiguration | null;
}
export interface DmButtonEventData {
    buttonNumber: number;
    buttonDirection: ButtonDirection;
    pressContinuous: DmInputControlConfiguration | null;
}
export interface DmBmapEventData {
    port: string;
    functionBlock: string;
    function: string;
    operator: string;
    data: string;
}
export interface DmBmapHexEventData {
    port: string;
    data: string;
}
/**
 * @interface DmBpEventData - data for Bp events
 * @property bpType {BpType} - board type: Bp900, Bp200
 * @property bpIndex {BpIndex} - board index (a, b, c, d,)
 * @property buttonNumber {number} - 0 based button number (i.e., first button = 0)
 *  A value of -1 indicates that any button press will trigger the event.
 * @property pressContinuous {DmInputControlConfiguration | null}
 */
export interface DmBpEventData {
    bpType: BpType;
    bpIndex: BpIndex;
    buttonNumber: number;
    pressContinuous: DmInputControlConfiguration | null;
}
/**
 * @interface DmBpEventAvailability
 * Interface for set of arrays for each possible BP, containing the number of BP buttons not used
 *  in a given eventList (such as the eventList for a mediaState.)
 */
export interface DmBpEventAvailability {
    bp900: {
        a: number[];
        b: number[];
        c: number[];
        d: number[];
    };
    bp200: {
        a: number[];
        b: number[];
        c: number[];
        d: number[];
    };
}
export interface DmPluginMessageEventData extends DmEventDataUserVariableAssignments {
    pluginId: BsDmId;
    message: string;
}
export interface DmUdpEventData extends DmEventDataUserVariableAssignments {
    data: string;
    label: string;
    export: boolean;
}
export interface DmWssEventParameter {
    parameterName: string;
    parameterValue: string;
    uniqueName: string;
}
export interface DmWssEventData extends DmEventDataUserVariableAssignments {
    port: string;
    wssEventId: string;
    wssEventName: string;
    wssEventParameter?: DmWssEventParameter;
}
export type DmEventData = DmTimer | DmSimpleEventData | DmSerialEventData | DmTimeClockEventData | DmGpsEventData | DmRectangularTouchEventData | DmGpioEventData | DmBpEventData | DmPluginMessageEventData | DmUdpEventData | DmKeyboardEventData | DmIrRemoteEventData | DmUsbEventData | DmSynchronizeEventData | DmZoneMessageEventData | DmInternalSynchronizeEventData | DmWssEventData | DmBmapEventData | DmBmapHexEventData;
export type DmEventDataWithUserVariableAssignment = DmSerialEventData | DmUdpEventData | DmPluginMessageEventData | DmWssEventData;
export interface DmEventSpecification {
    type: EventType;
    data: DmEventData | null;
    action?: EventIntrinsicAction;
}
export interface DmEvent extends DmObject, DmEventSpecification {
    mediaStateId: BsDmId;
    disabled: boolean;
}
/** Commands that reference bsDm entities must be based off of an interface that
 * includes the ID of the entity using a consistent property name.
 */
/** Base for any command that directly references a specific zone */
export interface DmZoneCommandData {
    zoneId: BsDmId;
}
/** Base for any command that directly references a specific dataFeedSource */
export interface DmDataFeedSourceCommandData {
    dataFeedSourceId: BsDmId;
}
/** Base for any command that directly references a specific script plugin */
export interface DmPluginCommandData {
    pluginId: BsDmId;
}
/** Base for any command that directly references a specific user variable */
export interface DmUserVariableBaseCommandData {
    userVariableId: BsDmId | string | null;
}
/** Base for any command that directly references a specific linked presentation */
export interface DmPresentationCommandData {
    presentationId: BsDmId | null;
}
export interface DmLightCommandData {
    lightNumber: number;
}
export interface DmBmapField {
    parameterName: string;
    parameterValue: DmParameterizedString;
}
export interface DmBmapCommandData {
    port: string;
    functionBlock: string;
    function: string;
    operator: string;
    fields: DmBmapField[];
}
export interface DmBmapHexCommandData {
    port: string;
    messageData: DmParameterizedString;
}
export interface DmBpOutputCommandData {
    bpType: BpType;
    bpIndex: BpIndex;
    buttonNumber: number;
    bpAction: BpAction;
}
export interface DmBlcOutputCommandData {
    blcIndex: BlcIndex;
    blcEffect: BlcEffect;
    blcChannels: number;
    blcEffectTime?: number;
    blcIntensity?: number;
    blcBlink?: BlcBlink;
    blcBreatheMin?: number;
    blcBreatheMax?: number;
    blcStrobeTime?: number;
    blcMarqueeTimeOn?: number;
    blcMarqueeTimeOff?: number;
    blcPlaybackMode?: BlcPlaybackMode;
    blcTransitionMode?: BlcTransitionMode;
}
export interface DmWssParameter {
    parameterName: string;
    parameterValue: DmParameterizedString;
}
export interface DmWssCommandData {
    wssCommandName: string;
    port: string;
    wssParameter?: DmWssParameter;
}
export interface DmConnectorVolumeData {
    connector: AudioOutputName;
    volume: DmParameterizedNumber;
}
export interface DmConnectorListData {
    connectorList: AudioOutputName[];
}
export interface DmZoneVolumeCommandData extends DmZoneCommandData {
    volume: DmParameterizedNumber;
}
export interface DmZoneChannelVolumeCommandData extends DmZoneCommandData {
    channel: number;
    volume: DmParameterizedNumber;
}
export interface DmVolumeCommandData {
    volume: DmParameterizedNumber;
}
export interface DmMessageCommandData {
    messageData: DmParameterizedString;
}
export interface DmPluginMessageCommandData extends DmPluginCommandData {
    messageData: DmParameterizedString;
}
export interface DmSerialMessageCommandData {
    port: string;
    messageData: DmParameterizedString;
    eol?: boolean;
}
export interface DmGpioCommandData {
    gpioNumber: number;
}
export interface DmGpioStateCommandData {
    gpioState: number;
}
export interface DmCecSendStringCommandData {
    hexString: DmParameterizedString;
    substituteSourceAddress: boolean;
}
export interface DmBeaconCommandData {
    beaconName: DmParameterizedString;
}
export interface DmPauseCommandData {
    pauseTime: DmParameterizedNumber;
}
export interface DmUserVariableCommandData extends DmUserVariableBaseCommandData {
    userVariableId: BsDmId | string;
    userVariableValue?: DmParameterizedString;
}
export interface DmSwitchPresentationCommandData extends DmPresentationCommandData, DmUserVariableBaseCommandData {
    userVariableId: BsDmId | null;
}
export type DmUpdateDataFeedCommandData = DmDataFeedSourceCommandData;
export interface DmResizeZoneCommandData extends DmZoneCommandData {
    position: BsRect;
}
export interface DmAudioOutputCommandData extends DmZoneCommandData {
    audioOutputAssignments: DmAudioOutputAssignmentMap;
}
export interface DmAudioModeCommandData extends DmZoneCommandData {
    mode: AudioMixModeType;
}
export type DmCommandData = DmBpOutputCommandData | DmConnectorVolumeData | DmConnectorListData | DmZoneVolumeCommandData | DmZoneChannelVolumeCommandData | DmVolumeCommandData | DmMessageCommandData | DmPluginCommandData | DmPluginMessageCommandData | DmSerialMessageCommandData | DmGpioCommandData | DmGpioStateCommandData | DmCecSendStringCommandData | DmBeaconCommandData | DmPauseCommandData | DmUserVariableBaseCommandData | DmUserVariableCommandData | DmPresentationCommandData | DmSwitchPresentationCommandData | DmDataFeedSourceCommandData | DmUpdateDataFeedCommandData | DmZoneCommandData | DmResizeZoneCommandData | DmAudioOutputCommandData | DmAudioModeCommandData | DmBlcOutputCommandData | DmWssCommandData | DmLightCommandData | DmBmapCommandData | DmBmapHexCommandData;
export const DmParameterizedStringCommandPropertyNames: string[];
export const DmParameterizedNumberCommandPropertyNames: string[];
export interface DmCommandOperation {
    type: CommandType;
    data: DmCommandData | null;
}
export interface DmCommand extends DmObject {
    operations: DmCommandOperation[];
    sequenceId: BsDmId;
}
export interface DmTimedCommand extends DmCommand {
    startTime: number;
}
export interface DmCommandSequence extends DmBaseObject {
    type: CommandSequenceType;
    parentId: BsDmId;
    sequence: BsDmId[];
}
export enum MediaStateContainerType {
    Zone = 0,
    MediaList = 1,
    PlayFile = 2,
    SuperState = 3
}
export interface DmMediaStateContainer {
    id: BsDmId;
    type: MediaStateContainerType;
}
export interface DmMediaStateSequence extends DmBaseObject {
    parentType: MediaStateContainerType;
    sequence: BsDmId[];
}
/**
 * MediaState state object (aka MediaStateState)
 * @property {string} tag - a short label
 * @property {DmMediaStateContainer} container - the container for the mediaState, e.g. a zone
 * @property {DmDerivedContentItem} contentItem - the content displayed when the state is active
 */
export interface DmMediaState extends DmObject {
    tag: string;
    container: DmMediaStateContainer;
    contentItem: DmDerivedContentItem;
}
export interface DmZone extends DmObject {
    type: ZoneType;
    tag: string;
    nonInteractive: boolean;
    initialMediaStateId: BsDmId;
    position: BsRect;
    properties: DmZoneSpecificProperties;
}
export interface DmZoneTagMap {
    [tag: string]: BsDmId;
}
export type DmZoneSpecificProperties = DmAudioZoneProperties | DmVideoZoneProperties | DmImageZoneProperties | DmVideoOrImagesZoneProperties | DmEnhancedAudioZoneProperties | DmTickerZoneProperties | DmClockZoneProperties | {};
export type DmZoneSpecificPropertiesWithDmWidget = DmTickerZoneProperties | DmClockZoneProperties;
export interface DmAudioZonePropertyData {
    audioOutput: AudioOutputSelectionType;
    audioMode: AudioModeType;
    audioMapping: AudioMappingType;
    audioOutputAssignments: DmAudioOutputAssignmentMap;
    audioMixMode: AudioMixModeType;
    audioVolume: number;
    minimumVolume: number;
    maximumVolume: number;
}
export type DmAudioZoneProperties = Readonly<DmAudioZonePropertyData>;
export interface DmEnhancedAudioZonePropertyData {
    fadeLength: number;
}
export interface DmEnhancedAudioZoneProperties extends DmAudioZoneProperties, Readonly<DmEnhancedAudioZonePropertyData> {
}
export interface DmImageZonePropertyData {
    imageMode: ImageModeType;
}
export type DmImageZoneProperties = Readonly<DmImageZonePropertyData>;
export interface DmVideoZonePropertyData {
    viewMode: ViewModeType;
    videoVolume: number;
    maxContentResolution: MosaicMaxContentResolutionType;
    mosaicDecoderName?: string;
}
export interface DmVideoZoneProperties extends DmAudioZoneProperties, Readonly<DmVideoZonePropertyData> {
}
export interface DmVideoOrImagesZoneProperties extends DmVideoZoneProperties, DmImageZoneProperties {
}
export interface DmVideoDecoderProperties {
    decoderName: string;
    friendlyName: string;
    sharableInVideoPlanes: boolean;
    supportedModes: VideoDecoderMode[];
    maxDecoderSize: VideoDecoderSize;
}
export interface DmVideoDecoderStatus {
    mode: VideoDecoderMode;
    configuredDecoderSize: VideoDecoderSize;
}
export interface DmVideoZoneLayerProperties {
    type: VideoZoneLayerType;
    index: number;
    sharedDecoder: boolean;
    enableMosaicDeinterlacer: boolean;
}
export const DmVideoLayerId = "videoLayerId";
export const DmVideoLayer1Id = "videoLayer1Id";
export const DmVideoLayer2Id = "videoLayer2Id";
export const DmGraphicsLayerId = "graphicsLayerId";
export const DmAudioLayerId = "audioLayerId";
export const DmInvisibleLayerId = "invisibleLayerId";
export interface DmZoneLayer extends DmBaseObject {
    readonly type: ZoneLayerType;
    zoneSequence: BsDmId[];
}
export interface DmVideoZoneLayer extends DmZoneLayer {
    readonly type: 'Video';
    zoneLayerSpecificProperties: DmVideoZoneLayerProperties;
}
export interface DmZoneLayerIdsByType {
    videoLayer1Id: BsDmId;
    videoLayer2Id: BsDmId;
    graphicsLayerId: BsDmId;
    audioLayerId: BsDmId;
    invisibleLayerId: BsDmId;
}
export interface DmZoneLayerIdParams {
    videoLayerId?: BsDmId;
    graphicsLayerId?: BsDmId;
    audioLayerId?: BsDmId;
    invisibleLayerId?: BsDmId;
}
export interface DmZoneTargetParams {
    zoneLayerIdParams?: DmZoneLayerIdParams;
    allowTransitionToMosaic?: boolean;
    zoneHasAudio?: boolean;
}
export interface DmSetZoneParams extends DmZoneTargetParams {
    type: ZoneType;
}
export type DmIdAndSetZoneParams = DmIdParam & DmSetZoneParams;
export const DmDefaultFontName = "System";
export interface DmWidget {
    foregroundTextColor: BsColor;
    backgroundTextColor: BsColor;
    font: BsAssetId | 'System';
    fontSize: number;
    backgroundBitmapAssetId: BsAssetId;
    stretchBitmapFile: boolean;
    safeTextRegion?: BsRect | null;
}
export interface DmTextWidget {
    numberOfLines: number;
    delay: number;
    rotation: RotationType;
    alignment: TextHAlignmentType;
    scrollingMethod: TextScrollingMethodType;
}
export interface DmTickerZonePropertyData {
    textWidget: DmTextWidget;
    widget: DmWidget;
    scrollSpeed: number;
}
export type DmTickerZoneProperties = DmTickerZonePropertyData;
export interface DmClockZonePropertyData {
    rotation: RotationType;
    widget: DmWidget;
}
export type DmClockZoneProperties = DmClockZonePropertyData;
export interface DmSignMetadata {
    properties: DmSignProperties;
    serialPortConfigurations: DmSerialPortList;
    gpio: DmGpioList;
    buttonPanels: DmButtonPanelMap;
    irRemote: DmIrRemote;
    audioSignPropertyMap: DmAudioSignPropertyMap;
    wssDeviceSpec: WssDeviceSpec | {};
    lastModifiedTime: string;
}
export interface DmSignPropertyData {
    videoMode: VideoMode;
    model: PlayerModel;
    monitorOrientation: MonitorOrientationType;
    monitorOverscan: MonitorOverscanType;
    videoConnector: VideoConnectorType;
    deviceWebPageDisplay: DeviceWebPageDisplay;
    backgroundScreenColor: BsColor;
    forceResolution: boolean;
    tenBitColorEnabled: boolean;
    dolbyVisionEnabled: boolean;
    fullResGraphicsEnabled: boolean;
    audioConfiguration: AudioConfiguration;
    audioAutoLevel: boolean;
    htmlEnableJavascriptConsole: boolean;
    alphabetizeVariableNames: boolean;
    autoCreateMediaCounterVariables: boolean;
    resetVariablesOnPresentationStart: boolean;
    networkedVariablesUpdateInterval: number;
    delayScheduleChangeUntilMediaEndEvent: boolean;
    language: LanguageType;
    languageKey: LanguageKeyType;
    flipCoordinates: boolean;
    inactivityTimeout: boolean;
    inactivityTime: number;
    touchCursorDisplayMode: TouchCursorDisplayModeType;
    udpDestinationAddressType: UdpAddressType;
    udpDestinationAddress: string;
    udpDestinationPort: number;
    udpReceiverPort: number;
    enableEnhancedSynchronization: DmEnhancedSynchronization | null;
}
export interface DmEnhancedSynchronization {
    deviceIsSyncMaster: boolean;
    ptpDomain: number;
}
export interface DmSignProperties extends DmSignPropertyData {
    id: BsDmId;
    version: string;
    name: string;
}
export interface DmSignHardwareConfiguration {
    readonly serialPortConfigurations: Readonly<DmSerialPortList>;
    readonly gpio: Readonly<DmGpioList>;
    readonly buttonPanels: Readonly<DmButtonPanelMap>;
    readonly audioSignPropertyMap: Readonly<DmAudioSignPropertyMap>;
    readonly irRemote: Readonly<DmIrRemote>;
}
export class SerialParity {
    static None: string;
    static Even: string;
    static Odd: string;
}
export class SerialProtocol {
    static Ascii: string;
    static Binary: string;
}
export class SerialEol {
    static CR: string;
    static LF: string;
    static CRLF: string;
}
export class SerialConnectedDeviceType {
    static None: string;
    static Gps: string;
}
export interface DmSerialPortConfiguration {
    port: string;
    baudRate: number;
    dataBits: number;
    stopBits: number;
    parity: SerialParity;
    protocol: SerialProtocol;
    sendEol: SerialEol;
    receiveEol: SerialEol;
    invertSignals: boolean;
    connectedDevice: SerialConnectedDeviceType;
}
export type DmSerialPortList = DmSerialPortConfiguration[];
export type DmGpioList = GpioType[];
export interface DmBpConfiguration {
    configureAutomatically: boolean;
    configuration: number;
}
export interface DmButtonPanelMap {
    [bpName: string]: DmBpConfiguration;
}
export interface DmIrRemote {
    irInConfiguration: DmIrInConfiguration;
    irOutConfiguration: DmIrOutConfiguration;
    irRemoteControl: BsIrRemoteControl;
}
export interface DmAudioSignProperties {
    min: number;
    max: number;
}
export interface DmAudioSignPropertyMap {
    [audioName: string]: DmAudioSignProperties;
}
export interface DmAudioOutputAssignmentMap {
    [audioName: string]: AudioOutputType;
}
export interface DmAudioOutputAssignmentSpecification {
    analog: AudioOutputType;
    usb: AudioOutputType;
    hdmi: AudioOutputType;
    spdif: AudioOutputType;
    enabledUsbOutputs: UsbConnectorName[] | null;
}
export interface DmIrInConfiguration {
    source: IrReceiverSource;
}
export interface DmIrOutConfiguration {
    destination: IrTransmitterDestination;
}
export interface DmBrightScriptPlugin extends DmObject {
    readonly assetId: BsAssetId;
}
export interface DmActiveParsePluginWithDataFeedMap {
    [parserPluginId: string]: BsDmId[];
}
export interface DmParserBrightScriptPlugin extends DmBrightScriptPlugin {
    readonly parseFeedFunctionName: string;
    readonly parseUVFunctionName: string;
    readonly userAgentFunctionName: string;
}
export interface DmVideoModeBrightScriptPlugin extends DmBrightScriptPlugin {
    readonly functionName: string;
}
export interface DmAuxiliaryFile extends DmObject {
    readonly assetId: BsAssetId;
}
export interface DmLinkedPresentation extends DmObject {
    readonly assetId: BsAssetId;
}
export class DmTapProtocolType {
    static Serial: string;
    static Cdc: string;
    static Hid: string;
}
export class DmPartnerCommandLibraryType {
    static None: string;
    static Riviera: string;
}
export interface DmPartnerProduct extends DmObject {
    partnerName: string;
    productName: string;
    port: string;
}
export class LiveTextItemType {
    static StaticText: string;
    static SystemVariable: string;
    static MediaCounter: string;
    static UserVariable: string;
    static SimpleRss: string;
    static MediaRssText: string;
    static MediaRssMedia: string;
    static Image: string;
    static IndexedDataFeed: string;
    static TitledDataFeed: string;
}
export class LiveTextEntityType {
    static StaticText: string;
    static SystemVariable: string;
    static MediaCounter: string;
    static UserVariable: string;
    static Image: string;
    static SimpleRss: string;
    static MediaRss: string;
    static DataFeed: string;
}
export interface DmLiveTextItemBase extends DmBaseObject {
    canvasId: BsDmId;
    position: BsRect;
}
export interface DmLiveTextItemTextProperties {
    textWidget: DmTextWidget;
    widget: DmWidget;
    useBackgroundColor: boolean;
}
export interface DmStaticLiveTextItemData {
    type: 'StaticText';
    text: string;
}
export type DmStaticLiveTextItem = DmLiveTextItemBase & DmStaticLiveTextItemData & DmLiveTextItemTextProperties;
export interface DmSystemVariableLiveTextItemData {
    type: 'SystemVariable';
    variable: SystemVariableType;
}
export type DmSystemVariableLiveTextItem = DmLiveTextItemBase & DmSystemVariableLiveTextItemData & DmLiveTextItemTextProperties;
export interface DmMediaCounterLiveTextItemData {
    type: 'MediaCounter';
    assetId: BsAssetId;
}
export type DmMediaCounterLiveTextItem = DmLiveTextItemBase & DmMediaCounterLiveTextItemData & DmLiveTextItemTextProperties;
export interface DmUserVariableLiveTextItemData {
    type: 'UserVariable';
    userVariableIdOrName: BsDmId | string;
}
export type DmUserVariableLiveTextItem = DmLiveTextItemBase & DmUserVariableLiveTextItemData & DmLiveTextItemTextProperties;
export class RssTextElementName {
    static Title: string;
    static Description: string;
    static Custom: string;
}
export interface DmSimpleRssLiveTextItemData {
    type: 'SimpleRss';
    element: RssTextElementName;
    groupId: BsDmId;
    enabled?: boolean;
}
export type DmSimpleRssLiveTextItem = DmLiveTextItemBase & DmSimpleRssLiveTextItemData & DmLiveTextItemTextProperties;
export interface DmMediaRssLiveTextItemData {
    type: 'MediaRssText';
    element: RssTextElementName;
    customFieldName?: string | null;
    groupId: BsDmId;
    enabled?: boolean;
}
export type DmMediaRssLiveTextItem = DmLiveTextItemBase & DmMediaRssLiveTextItemData & DmLiveTextItemTextProperties;
export interface DmMediaRssMediaLiveTextItemData {
    type: 'MediaRssMedia';
    groupId: BsDmId;
    enabled?: boolean;
}
export type DmMediaRssMediaLiveTextItem = DmLiveTextItemBase & DmMediaRssMediaLiveTextItemData;
export interface DmImageLiveTextItemData {
    type: 'Image';
    assetId: BsAssetId;
}
export type DmImageLiveTextItem = DmLiveTextItemBase & DmImageLiveTextItemData;
export interface DmIndexedDataFeedLiveTextItemData {
    type: 'IndexedDataFeed';
    dataFeedId: BsDmId;
    index: DmParameterizedNumber;
}
export type DmIndexedDataFeedLiveTextItem = DmLiveTextItemBase & DmIndexedDataFeedLiveTextItemData & DmLiveTextItemTextProperties;
export interface DmTitledDataFeedLiveTextItemData {
    type: 'TitledDataFeed';
    dataFeedId: BsDmId;
    title: DmParameterizedString;
}
export type DmTitledDataFeedLiveTextItem = DmLiveTextItemBase & DmTitledDataFeedLiveTextItemData & DmLiveTextItemTextProperties;
export type DmLiveTextItem = DmStaticLiveTextItem | DmSystemVariableLiveTextItem | DmMediaCounterLiveTextItem | DmUserVariableLiveTextItem | DmSimpleRssLiveTextItem | DmMediaRssLiveTextItem | DmMediaRssMediaLiveTextItem | DmImageLiveTextItem | DmIndexedDataFeedLiveTextItem | DmTitledDataFeedLiveTextItem;
export type DmLiveTextItemData = DmStaticLiveTextItemData | DmSystemVariableLiveTextItemData | DmMediaCounterLiveTextItemData | DmUserVariableLiveTextItemData | DmSimpleRssLiveTextItemData | DmMediaRssLiveTextItemData | DmMediaRssMediaLiveTextItemData | DmImageLiveTextItemData | DmIndexedDataFeedLiveTextItemData | DmTitledDataFeedLiveTextItemData;
export type DmLiveTextItemTextContentData = DmStaticLiveTextItemData | DmSystemVariableLiveTextItemData | DmMediaCounterLiveTextItemData | DmUserVariableLiveTextItemData | DmSimpleRssLiveTextItemData | DmMediaRssLiveTextItemData | DmIndexedDataFeedLiveTextItemData | DmTitledDataFeedLiveTextItemData;
export type DmLiveTextItemImageContentData = DmImageLiveTextItemData;
export type DmLiveTextItemFromDataFeed = DmIndexedDataFeedLiveTextItemData | DmTitledDataFeedLiveTextItemData;
export type DmLiveTextItemGroupedDataFeedItemData = DmSimpleRssLiveTextItemData | DmMediaRssLiveTextItemData | DmMediaRssMediaLiveTextItemData;
export type DmLiveTextLayerSequence = BsDmId[];
export interface DmLiveTextGroupProperties {
    displayTime: number;
}
export interface DmLiveTextDataFeedSequence extends DmBaseObject, DmLiveTextGroupProperties {
    canvasId: BsDmId;
    usage: DataFeedUsageType;
    dataFeedIds: BsDmId[];
}
export interface DmLiveTextCanvas extends DmBaseObject {
    backgroundColor: BsColor;
    backgroundImageId: BsAssetId;
    backgroundWidth: number;
    backgroundHeight: number;
}
export interface DmThumbnail {
    type: string;
    data: string;
    size: BsSize;
    hash?: string;
}

/** @module Helpers:Class */
/**
 * @class
 * @classdesc Objects of this class encapsulate the concept of a MediaStateContainer,
 *  which can hold one or more media states.
 * The most obvious media state container is a zone. However, it is possible for a MediaState to hold
 *  multiple instances of other media states, as in a MediaState with a SuperState
 *  or a MediaList {@link ContentItemType.}
 *
 * This class implements the {@link DmMediaStateContainer} interface, and therefore can be used for action creators
 *  that create actions to add media sates to a container, which require an object parameter conforming to
 *  DmMediaStateContainer to specify the container where the media state is to be added.
 *
 * This object is typically returned as a readonly helper property of an object that can serve
 *  as a media state container.
 * It is also available as a property of {@link DmcMediaState} objects, where it represents the container which
 *  holds that MediaState.
 *
 * @param id {BsDmId} - the ID of the container. For example, if the container is a zone, this should be the zone ID.
 * @param [type=Zone]s {MediaStateContainerType} - the type of container (e.g., Zone, MediaList, SuperState.)
 * @property id {BsDmId} - Container ID
 * @property type {MediaStateContainerType} - Container type
 */
export class DmcMediaStateContainer implements DmMediaStateContainer {
    readonly id: BsDmId;
    readonly type: MediaStateContainerType;
    constructor(id: BsDmId, type?: MediaStateContainerType);
}
/**
 * @class
 * @classdesc Objects of this class represent MediaState objects. Media states hold a ContentItem,
 *  which represents the content displayed in a zone while the media state is active. Media states can also
 *  hold one or more events, which are processed by the media state while active.
 *
 * Objects of this class are built by selectors that return MediaStates from the bsDataModel Redux store.
 * It is not recommended that these objects be created by client code.
 *
 *  This object is returned from the following selectors:
 *      [dmGetInitialMediaStateForZone]{@link Selectors:Zone~dmGetInitialMediaStateForZone},
 *      [dmGetMediaStateById]{@link Selectors:MediaState~dmGetMediaStateById},
 *      [dmGetMediaStateByName]{@link Selectors:MediaState~dmGetMediaStateByName}
 *
 * @param mediaStateState {DmMediaState} - simple normalized state for MediaObject from the bsDataModel Redux store.
 * @param components {DmMediaStateComponents} - a simple object holding all events associated with the media state,
 *  along with all transitions associated with each event, all commands for the mediaState, and the assetItem for the
 *  mediaState, if there is one.
 * @property id {BsDmId} - MediaState ID
 * @property name {string} - the display name of the media state
 * @property container {DmMediaStateContainer} - the container in which the media state is contained.
 *  This is typically a zone.
 * @property contentItem {DmDerivedContentItem} - the simple object representing the ContentItem for the media state.
 *  Content item properties depend on the ContentItem type.
 * @property mediaAssetItem {BsAssetItem | null} - if the ContentItem is of type DmMediaContentItem, indicating that
 *  the content is based on a media file, this property holds the BsAssetItem object for that media file.
 *  For ContentItems that are not of type DmMediaContentItem, this property is null.
 * @property containerObject {DmcMediaStateContainer | null} - if mediaState is a container for other mediaStates,
 *  the containerObject representing the mediaState container, otherwise null
 * @property eventList {DmcEvent[]} - A list of event objects associated with the media state.
 * @property entryCommands {DmcCommand[]} - array of DmcCommand objects for entry commands
 * @property exitCommands {DmcCommand[]} - array of DmcCommand objects for exit commands
 */
export class DmcMediaState implements DmMediaState {
    readonly id: BsDmId;
    readonly name: string;
    readonly tag: string;
    readonly container: DmMediaStateContainer;
    readonly contentItem: DmDerivedContentItem;
    readonly mediaAssetItem: BsAssetItem | null;
    readonly eventList: DmcEvent[];
    readonly entryCommands: DmcCommand[];
    readonly exitCommands: DmcCommand[];
    get containerObject(): DmMediaStateContainer | null;
    get bpAvailability(): DmBpEventAvailability;
    constructor(mediaStateState: DmMediaState, components: DmMediaStateComponents);
    /**
     * Return event associated with this media state that has the given ID.
     * Return null if no event associated with mediaState has the given ID.
     * @param id {BsDmId}
     */
    getEvent(id: BsDmId): Readonly<DmcEvent> | null;
    /**
     * Return entry command associated with this media state that has the given ID.
     * Return null if no entry command associated with mediaState has the given ID.
     * @param id {BsDmId}
     */
    getEntryCommand(id: BsDmId): Readonly<DmcCommand> | null;
    /**
     * Return exit command associated with this media state that has the given ID.
     * Return null if no exit command associated with mediaState has the given ID.
     * @param id {BsDmId}
     */
    getExitCommand(id: BsDmId): Readonly<DmcCommand> | null;
    /**
     * Test given event specification to determine if it can be added to this mediaState
     *  in an interactive presentation.
     * @param event {DmEventSpecification} - specification of event to test for compatibility
     * @returns {BsDmTestResult} - if event can be added, BsDmTestResult.ok will be true.
     *  If event cannot be added, BsDmTestResult.ok will be false and BsDmTestResult.error will contain
     *  a BsDmError that specifies the reason for incompatibility.
     */
    canAddEvent(event: DmEventSpecification): BsDmTestResult;
    /**
     * Test existing event in this mediaState to determine if it can be updated to the given event specification.
     * @param eventId {BsDmId} - event ID of event to test for update
     * @param newEvent {DmEventSpecification} - specification of new event specification to test for compatibility
     * @returns {BsDmTestResult} - if event can be added, BsDmTestResult.ok will be true.
     *  If event cannot be added, BsDmTestResult.ok will be false and BsDmTestResult.error will contain
     *  a BsDmError that specifies the reason for incompatibility.
     */
    canUpdateEvent(eventId: BsDmId, newEvent: DmEventSpecification): BsDmTestResult;
}
/**
 * @class
 * @classdesc Objects of this class represent MediaList MediaState objects. Additional components
 *  related to the MediaList state can be directly accessed from this object.
 * @param mediaStateState {DmMediaState} - simple normalized state for MediaObject from the bsDataModel Redux store.
 * @param components {DmMediaStateComponents} - a simple object holding all events associated with the media state,
 *  along with all transitions associated with each event, all commands for the mediaState, and the assetItem for the
 *  mediaState, if there is one.
 * @param mediaListComponents {DmMediaListMediaStateComponents} - an object holding global events and commands used by
 *  the MediaList state.
 * @property itemGlobalForwardEventList {DmcEvent[]} - global forward events (used in all mediaList items)
 * @property itemGlobalBackwardEventList {DmcEvent[]} - global backward events
 * @property itemGlobalPlayNextCommands {DmcCommand[]} - global commands for Play Next transition
 *  (issued by all mediaList items on transition to next item)
 * @property itemGlobalPlayPreviousCommands {DmcCommand[]} - global commands for Play Previous transitions
 *  (issued by all mediaList items on transition to previous item)
 * @property sourceDataFeed {DmcDataFeed | null} - if useDataFeed = true, and if a sourceDataFeed has been defined,
 *  this property is the data feed object
 */
export class DmcMediaListMediaState extends DmcMediaState {
    readonly contentItem: DmMediaListContentItem;
    readonly itemGlobalForwardEventList: DmcEvent[];
    readonly itemGlobalBackwardEventList: DmcEvent[];
    readonly itemGlobalPlayNextCommands: DmcCommand[];
    readonly itemGlobalPlayPreviousCommands: DmcCommand[];
    readonly sourceDataFeed: DmcDataFeed | null;
    constructor(mediaStateState: DmMediaState, components: DmMediaStateComponents, mediaListComponents: DmMediaListMediaStateComponents);
    /**
     * Test given event specification to determine if it can be added as a global intrinsic event
     *  for the contained MediaList items.
     * @param event {DmEventSpecification} - specification of event to test for compatibility
     * @returns {BsDmTestResult} - if event can be added, BsDmTestResult.ok will be true.
     *  If event cannot be added, BsDmTestResult.ok will be false and BsDmTestResult.error will contain
     *  a BsDmError that specifies the reason for incompatibility.
     */
    canAddGlobalEvent(event: DmEventSpecification): BsDmTestResult;
    /**
     * Test existing global intrinsic event for contained MediaList items to determine if it can be updated
     *  to the given event specification.
     * @param eventId {BsDmId} - event ID of event to test for update
     * @param newEvent {DmEventSpecification} - specification of new event specification to test for compatibility
     * @returns {BsDmTestResult} - if event can be added, BsDmTestResult.ok will be true.
     *  If event cannot be added, BsDmTestResult.ok will be false and BsDmTestResult.error will contain
     *  a BsDmError that specifies the reason for incompatibility.
     */
    canUpdateGlobalEvent(eventId: BsDmId, newEvent: DmEventSpecification): BsDmTestResult;
}
/**
 * Return true if the given object is a DmcMediaListMediaState (Typescript type guard)
 * @param object {any}
 */
export function dmIsDmcMediaListMediaState(object: any): object is DmcMediaListMediaState;
/**
 * @class
 * @classdesc Objects of this class represent items within a MediaList media sequence.
 *  MediaList media sequences are composed of mediaStates holding a MediaContentItem.
 *  Events within MediaList items follow a certain pattern - there are potentially only two
 *  events: one to trigger a switch to the following MediaList item, and the other to trigger
 *  a switch to the previous MediaList item.
 *
 * @param mediaStateState {DmMediaState} - simple normalized state for MediaObject from the bsDataModel Redux store.
 * @param components {DmMediaStateComponents} - a simple object holding all events associated with the media state,
 *  along with all transitions associated with each event, all commands for the mediaState, and the assetItem for the
 *  mediaState.
 * @property forwardEvents {DmcEvents[]} - a list of events that trigger a switch to the next MediaList item,
 *  or an empty array if no such events is defined
 * @property backwardEvents {DmcEvents[]} - a list of events that trigger a switch to the previous MediaList item,
 *  or an empty array if no such event is defined
 */
export class DmcMediaListItem extends DmcMediaState {
    readonly contentItem: DmMediaContentItem;
    get forwardEvents(): DmcEvent[];
    get backwardEvents(): DmcEvent[];
    constructor(mediaStateState: DmMediaState, components: DmMediaStateComponents);
}
/**
 * @class
 * @classdesc Objects of this class represent PlayFile MediaState objects. Additional components
 *  related to the PlayFile state can be directly accessed from this object.
 * @param mediaStateState {DmMediaState} - simple normalized state for MediaObject from the bsDataModel Redux store.
 * @param components {DmMediaStateComponents} - a simple object holding all events associated with the media state,
 *  along with all transitions associated with each event, all commands for the mediaState, and the assetItem for the
 *  mediaState, if there is one.
 * @param playFileComponents {DmPlayFileMediaStateComponents} - an object holding assets used by the PlayFile state
 *  (defaultMediaAssetItem.)
 * @property defaultMediaAssetItem {BsAssetItem | null}- the assetItem object for the defaultMedia asset if defined,
 *  null if not defined
 * @property sourceDataFeed {DmcDataFeed | null} - if useDataFeed = true, and if a sourceDataFeed has been defined,
 *  this property is the data feed object
 */
export class DmcPlayFileMediaState extends DmcMediaState {
    readonly contentItem: DmPlayFileContentItem;
    readonly defaultMediaAssetItem: BsAssetItem | null;
    readonly sourceDataFeed: DmcDataFeed | null;
    constructor(mediaStateState: DmMediaState, components: DmMediaStateComponents, playFileComponents: DmPlayFileMediaStateComponents);
}
/**
 * Return true if the given object is a DmcPlayFileMediaState (Typescript type guard)
 * @param object {any}
 */
export function dmIsDmcPlayFileMediaState(object: any): object is DmcPlayFileMediaState;
/**
 * @class
 * @classdesc Objects of this class represent items within a PlayFile media sequence.
 *  PlayFile media sequences are composed of mediaStates holding a DmPlayFileItemContentItem,
 *  which is an extension of DmMediaContentItem..
 *
 * @param mediaStateState {DmMediaState} - simple normalized state for MediaObject from the bsDataModel Redux store.
 * @param components {DmMediaStateComponents} - a simple object holding all events associated with the media state,
 *  along with all transitions associated with each event, all commands for the mediaState, and the assetItem for the
 *  mediaState.
 */
export class DmcPlayFileItem extends DmcMediaState {
    readonly contentItem: DmPlayFileItemContentItem;
    constructor(mediaStateState: DmMediaState, components: DmMediaStateComponents);
}
/**
 * @class
 * @classdesc Objects of this class represent LiveText MediaState objects. This object provides
 *  direct access to the contained LiveText canvas.
 * @param mediaStateState {DmMediaState} - simple normalized state for MediaObject from the bsDataModel Redux store.
 * @param components {DmMediaStateComponents} - a simple object holding all events associated with the media state,
 *  along with all transitions associated with each event, all commands for the mediaState, and the assetItem for the
 *  mediaState, if there is one.
 * @param canvas {DmcLiveTextCanvas} = LiveText canvas object, created by {@link dmGetLiveTextCanvasById} selector
 */
export class DmcLiveTextMediaState extends DmcMediaState {
    readonly contentItem: DmLiveTextContentItem;
    readonly canvas: DmcLiveTextCanvas | null;
    constructor(mediaStateState: DmMediaState, components: DmMediaStateComponents, canvas: DmcLiveTextCanvas | null);
}
/**
 * Return true if the given object is a DmcLiveTextMediaState (Typescript type guard)
 * @param object {any}
 */
export function dmIsDmcLiveTextMediaState(object: any): object is DmcLiveTextMediaState;
/**
 * @class
 * @classdesc Objects of this class represent Event objects. Events are associated with a MediaState, which
 *  processes the event while active. This event object holds an array of one or more transitions which can
 *  be triggered when the event fires. If there are multple transition, only one is marked as the default transition,
 *  and all others are conditional.
 *
 * Objects of this class are built by selectors that return Events from the bsDataModel Redux store.
 * It is not recommended that these objects be created by client code.
 *
 *  This object is returned from the following selector:
 *      [dmGetEventById]{@link Selectors:Event~dmGetEventById}
 *
 * @param eventState {DmEvent} - simple normalized state for an Event from the bsDataModel Redux store
 * @param [transitionStates] {DmTransition[]} - array of simple transition objects from the Redux store for all
 *  transitions associated with the event.
 * @property id {BsDmId} - Event ID
 * @property name {string} - the display name of the event
 * @property type {EventType} - type of the event
 * @property mediaStateId {BsDmId} - ID of the mediaState with which the event is associated
 * @property disabled {boolean} - true if event is disabled (i.e., to be ignored)
 * @property data {any} - data associated with the event. The data properties depend on the event type.
 * @property transitionList {DmcTransition[]} - array of transition objects associated with the event.
 *  All ordered conditional transitions are included, followed by the default transition at the end.
 * @property defaultTransition {DmcTransition | null} - the default transition for the event.
 *  Null if there is no default transition associated with the event.
 * @property conditionalTransitions {DmcTransition[]} - array of conditional transition objects associated
 *  with the event, in order. The defaulttransition is omitted from this list.
 * @property commands {DmcCommand[]} - array of DmcCommand objects for event commands
 */
export class DmcEvent implements DmEvent {
    readonly id: BsDmId;
    readonly name: string;
    readonly type: EventType;
    readonly mediaStateId: BsDmId;
    readonly disabled: boolean;
    readonly data: DmEventData | null;
    readonly action: EventIntrinsicAction;
    readonly transitionList: DmcTransition[];
    readonly commands: DmcCommand[];
    get defaultTransition(): DmcTransition | null;
    get conditionalTransitions(): DmcTransition[];
    get eventSpecification(): DmEventSpecification;
    constructor(eventState: DmEvent, transitionStates?: DmTransition[] | null, commandSequence?: DmCommand[] | null);
}
/**
 * @class
 * @classdesc Objects of this class represent Transition objects, which are associated with events that trigger them.
 *  When triggered, the Transition will switch from the current MediaState (which is the MediaState associated with
 *  the triggering event,) to a new MediaState, called the target MediaState. A transition may be conditional,
 *  which means that it will be executed only if a specified condition is met.
 *
 * Objects of this class are built by selectors that return Transitions from the bsDataModel Redux store.
 * It is not recommended that these objects be created by client code.
 *
 *  This object is returned from the following selector:
 *      [dmGetTransitionById]{@link Selectors:Transition~dmGetTransitionById}
 *
 * @param state {DmTransition} - simple normalized state for a Transition from the bsDataModel Redux store
 * @property id {BsDmId} - Transition ID
 * @property name {string} - the display name of the transition
 * @property eventId {BsDmId} - ID of the event with which the transition is associated
 * @property type {TransitionType} - type of the transition (i.e., type of display transition to be used when switching
 *  from one displayed ContentItem to the next.)
 * @property targetMediaStateId {BsDmId} - ID of the target MediaState
 * @property duration {number} - Duration of the transition in seconds.
 * @property condition {DmcCondition | null} - condition under which the transition will be executed, or null if
 *  the transition is to be executed unconditionally
 * @property conditionalAction {EventIntrinsicAction} - for conditionalTransition, this specifies an intrinsicAction
 *  to be done if the condition evaluates to true. If this is set to anything other than EventIntrinsicAction.None,
 *  the targetMediaStateId is ignored, and only the intrinsicAction is executed.
 * @property isDefaultTarget {boolean} - true if the transition is to be executed unconditionally
 * @property commands {DmcCommand[]} - array of DmcCommand objects for transition commands
 */
export class DmcTransition implements DmTransition {
    readonly id: BsDmId;
    readonly name: string;
    readonly eventId: BsDmId;
    readonly targetMediaStateId: BsDmId;
    readonly type: TransitionType;
    readonly duration: number;
    readonly condition: DmcCondition | null;
    readonly conditionalAction: EventIntrinsicAction;
    readonly commands: DmcCommand[];
    get isDefaultTarget(): boolean;
    constructor(state: DmTransition, commandSequence?: DmCommand[]);
}
/**
 * @class
 * @classdesc Objects of this class represent a command. Command sequences are available in mediaStates, events,
 *  and transitions. In mediaStates, there can be two command sequences; one to be executed on state entry,
 *  and one to be executed on state exit.
 *
 * @param state {DmCommand} - simple normalized state for a Command from the bsDataModel Redux store
 * @property id {BsDmId} - Command ID
 * @property name {string} - the display name of the command
 * @property sequenceId {BsDmId} - the ID of the command sequence in which the command is included
 * @property operations {DmCommandOperation[]} - an array of DmCommandOperations which are individual operations
 *  to be executed as part of the command. Most commands consist of a single operation.
 * @property sequenceId {BsDmId} - the ID of the command sequence that contains the command
 * @property startTime {number} - if the command is a timed command (DmTimedCommand), the startTime is the
 *  time at which to execute the command, expressed in milliseconds. Timed commands are used with TimeCode
 *  events. If the command is not a timed command, startTime is null.
 * @property isTimedCommand {boolean} - true if this object is a timed command
 */
export class DmcCommand implements DmCommand {
    readonly id: BsDmId;
    readonly name: string;
    readonly operations: DmCommandOperation[];
    readonly sequenceId: BsDmId;
    readonly startTime: number | null;
    get isTimedCommand(): boolean;
    constructor(state: DmCommand);
}
/**
 * @class
 * @classdesc Objects of this class represent a condition specification used with conditional transitions
 *  which are evaluated at run time.
 *
 * A condition specification comprises an expression which compares the content of a user with one or two
 *  constant string values.
 *
 * @param state {DmCondition} - simple normalized state for a Condition from the bsDataModel Redux store
 * @property userVariableId {BsDmId} - the ID of the user variable to be used as the parameter in the condition
 * @property userVariableName {string} - the name of the user variable to be used as the parameter in the condition.
 *  During authoring, this may be a placeholder name for an as-yet undefined user variable. For a fully validated
 *  condition, this will be the name of the user variable corresponding to userVariableId.
 * @property compareOperator {CompareOperator} - the compare operator for the condition expression
 * @property compareValue1 {DmParameterizedString} - Compare value to be compared against the user variable.
 *  For comparisons that use two values (e.g., CompareOperator.Btw), this is the lower bound compare value.
 * @property compareValue2 {DmParameterizedString | null} - Compare value to be used as the higher bound compare value
 *  for comparisons that take two compare values.
 */
export class DmcCondition implements DmCondition {
    readonly userVariableId: BsDmId;
    readonly userVariableName?: string | null;
    readonly compareOperator: CompareOperator;
    readonly compareValue1: DmParameterizedString;
    readonly compareValue2?: DmParameterizedString | null;
    constructor(state: DmCondition, userVariableState?: DmUserVariable);
}
/**
 * @class
 * @classdesc Objects of this class represent a zoneLayer in the current sign (presentation.)
 *
 * @param state {DmZone} - simple normalized state for a Zone from the bsDataModel Redux store
 * @param videoMode {VideoMode} - VideoMode for the sign containing the zone
 * @property type {ZoneLayerType} - type of the zoneLayer
 * @property zoneSequence {BsDmId[]} - array of IDs of zones assigned to the layer. If the layer has a Z-Order
 *  (e.g., as in video zone layers,) the zoneSequence order designates the z-oorder, with index 0 representing the
 *  bottom layer.
 * @property zoneCount {number} - the count of zones currently in the zoneLayer
 */
export class DmcZoneLayer implements DmZoneLayer {
    readonly id: BsDmId;
    readonly type: ZoneLayerType;
    readonly zoneSequence: BsDmId[];
    get zoneCount(): number;
    constructor(state: DmZoneLayer);
}
/**
 * Return true if the given object is a DmcZoneLayer (Typescript type guard)
 * @param object {any}
 */
export function dmIsDmcZoneLayer(object: any): object is DmcZoneLayer;
/**
 * @class
 * @classdesc Objects of this class represent a zoneLayer in the current sign (presentation.)
 *
 * @param state {DmZone} - simple normalized state for a Zone from the bsDataModel Redux store
 * @param videoMode {VideoMode} - VideoMode for the sign containing the zone
 * @property type {ZoneLayerType} - type of the zoneLayer
 * @property zoneSequence {BsDmId[]} - array of IDs of zones assigned to the layer. If the layer has a Z-Order
 *  (e.g., as in video zone layers,) the zoneSequence order designates the z-oorder, with index 0 representing the
 *  bottom layer.
 * @property zoneCount {number} - the count of zones currently in the zoneLayer
 */
export class DmcVideoZoneLayer extends DmcZoneLayer implements DmVideoZoneLayer, DmVideoDecoderProperties, DmVideoDecoderStatus {
    readonly type: 'Video';
    readonly zoneLayerSpecificProperties: DmVideoZoneLayerProperties;
    get videoZoneLayerType(): VideoZoneLayerType;
    get index(): number;
    get enableMosaicDeinterlacer(): boolean;
    get decoderName(): string;
    get friendlyName(): string;
    get supportedModes(): VideoDecoderMode[];
    get maxDecoderSize(): VideoDecoderSize;
    get sharableInVideoPlanes(): boolean;
    get canSupportMosaicMode(): boolean;
    get mode(): VideoDecoderMode;
    get configuredDecoderSize(): VideoDecoderSize;
    constructor(state: DmVideoZoneLayer);
}
/**
 * Return true if the given object is a DmcVideoZoneLayer (Typescript type guard)
 * @param object {any}
 */
export function dmIsDmcVideoZoneLayer(object: any): object is DmcVideoZoneLayer;
/**
 * @class
 * @classdesc Objects of this class represent a zone in the current sign (presentation.)
 *
 * Objects of this class are built by selectors that return Transitions from the bsDataModel Redux store.
 * It is not recommended that these objects be created by client code.
 *
 *  This object is returned from the following selectors:
 *      [dmGetZoneById]{@link Selectors:Zone~dmGetZoneById},
 *      [dmGetZoneByName]{@link Selectors:Zone~dmGetZoneByName},
 *      [dmGetZoneByTag]{@link Selectors:Zone~dmGetZoneByTag}
 *
 * @param state {DmZone} - simple normalized state for a Zone from the bsDataModel Redux store
 * @param videoMode {VideoMode} - VideoMode for the sign containing the zone
 * @param zoneLayers {}
 * @property id {BsDmId} - Zone ID
 * @property name {string} - the display name of the zone
 * @property type {ZoneType} - type of the zone
 * @property tag {string} - a string, typically very short, which can be used to identify the zone
 * @property nonInteractive {boolean} - true if the zone is to be used for a nonInteractive playlist
 * @property initialMediaStateId {BsDmId} - ID of the initial (startup) MediaState in the zone
 * @property position {BsRect} - a rectangle specifying the display position of the zone within the overall
 *  video canvas rectangle of the sign. Using {@link BsRect), the position coordinates can be expressed as either
 *  absolute pixel values or as percentages of the enclosing video canvas.
 * @property properties {DmZoneSpecificProperties} - object containing zone properties that are specific
 *  to the zone type.
 * @property containerObject {DmcMediaStateContainer} - container object which can be used with action creators
 *  that add a MediaState to the zone.
 * @property absolutePosition {BsRect} - a rectangle structure specifying the zone position in absoluie pixel
 *  coordinates (based on current VideoMode, if position was originally defined by percentage coordinates)
 * @property percentagePosition {BsRect} - a rectangle structure specifying the zone position in percentage
 *  coordinates (based on current VideoMode, if position was originally defined by absolute coordinates)
 */
export class DmcZone implements DmZone {
    readonly id: BsDmId;
    readonly name: string;
    readonly type: ZoneType;
    readonly tag: string;
    readonly nonInteractive: boolean;
    readonly initialMediaStateId: BsDmId;
    readonly position: BsRect;
    readonly properties: Readonly<DmZoneSpecificProperties>;
    readonly zoneLayers: DmcZoneLayer[];
    get containerObject(): DmcMediaStateContainer;
    get absolutePosition(): BsRect;
    get percentagePosition(): BsRect;
    get zoneLayerCount(): number;
    constructor(state: DmZone, videoMode: VideoMode, zoneLayers: DmcZoneLayer[]);
    getContainingZoneLayerOfType(type: ZoneLayerType): DmcZoneLayer | null;
}
/**
 * @class
 * @classdesc Objects of this class represent the sign (presentation) metadatafor the current sign, including
 *  hardware configuration specification objects.
 *
 * Objects of this class are built by selectors that return SignMetadata from the bsDataModel Redux store.
 * It is not recommended that these objects be created by client code.
 *
 *  This object is returned from the following selector:
 *      [dmGetSignMetaData]{@link Selectors:Sign~dmGetSignMetaData}
 *
 * @param state {DmSignMetadata} - simple normalized state for a SignMetadata from the bsDataModel Redux store
 * @property id {BsDmId} - Sign ID
 * @property version {string} - Current version of the data shape used for the sign
 * @property name {string} - the display name of the presentation
 * @property videoMode {VideoMode} - VideoMode for the sign (video resolution and frame rate)
 * @property model {PlayerModel} - player model for which the sign was designed
 * @property monitorOrientation {MonitorOrientationType} - monitor orientation (Landscape, Portrait)
 * @property monitorOverscan {MonitorOverscanType}
 * @property videoConnector {VideoConnectorType} - connector used for display
 * @property deviceWebPageDisplay {DeviceWebPageDisplay} - specification for device web page to be used
 * @property backgroundScreenColor {BsColor}
 * @property forceResolution {boolean}
 * @property tenBitColorEnabled {boolean}
 * @property dolbyVisionEnabled {boolean}
 * @property fullResGraphicsEnabled {boolean}
 * @property audioConfiguration {AudioConfiguration}
 * @property audioAutoLevel {boolean}
 * @property htmlEnableJavascriptConsole {boolean} - true to enable console for HTML widgets
 * @property alphabetizeVariableNames {boolean} - true to maintain user variable names in alphabetized list
 * @property autoCreateMediaCounterVariables {boolean}
 * @property resetVariablesOnPresentationStart {boolean}
 * @property networkedVariablesUpdateInterval {number} - update interval in seconds for networked user variables
 * @property delayScheduleChangeUntilMediaEndEvent {boolean}
 * @property language {LanguageType}
 * @property languageKey {LanguageKeyType}
 * @property flipCoordinates {boolean}
 * @property inactivityTimeout {boolean}
 * @property inactivityTime {number} - timeout value in seconds
 * @property touchCursorDisplayMode {TouchCursorDisplayModeType}
 * @property udpDestinationAddressType {UdpAddressType} - type of UDP address specified
 * @property udpDestinationAddress {string} - specification for UDP address
 * @property udpDestinationPort {number} - destination port number to be used when transmitting UDP messages
 * @property udpReceiverPort {number} - port number on which to listen for UDP messages
 * @property serialPortConfigurations {DmSerialPortList} - array of {@link DmSerialPortConfiguration} objects,
 *  one for each of up to eight serial ports
 * @property gpio {DmGpioList} - array of eight {@link GpioType} specifiers, one for each GPIO channel
 * @property buttonPanels {DmButtonPanelMap} - map of specifications for button panels. The key for each mapping is
 *  a {@link ButtonPanelName}, and the value is an object of type {@link DmBpConfiguration}
 * @property irRemote {DmIrRemote} - ir remote specification
 * @property audioSignPropertyMap {DmAudioSignPropertyMap} - map of specifications for audio outputs.
 *  The key for each mapping is an {@link AudioOutputName}, and the value is an object of type
 *  {@link DmAudioSignProperties}.
 * @property enableEnhancedSynchronization {DmEnhancedSynchronization | null} - if enabled, this property holds the
 *  DmEnhancedSynchronization with enhanced synchronization data. If not enabled, this is null.
 */
export class DmcSignMetadata implements DmSignProperties, DmSignHardwareConfiguration {
    readonly id: BsDmId;
    readonly version: string;
    readonly name: string;
    readonly videoMode: VideoMode;
    readonly model: PlayerModel;
    readonly monitorOrientation: MonitorOrientationType;
    readonly monitorOverscan: MonitorOverscanType;
    readonly videoConnector: VideoConnectorType;
    readonly deviceWebPageDisplay: DeviceWebPageDisplay;
    readonly backgroundScreenColor: BsColor;
    readonly forceResolution: boolean;
    readonly tenBitColorEnabled: boolean;
    readonly dolbyVisionEnabled: boolean;
    readonly fullResGraphicsEnabled: boolean;
    readonly audioConfiguration: AudioConfiguration;
    readonly audioAutoLevel: boolean;
    readonly htmlEnableJavascriptConsole: boolean;
    readonly alphabetizeVariableNames: boolean;
    readonly autoCreateMediaCounterVariables: boolean;
    readonly resetVariablesOnPresentationStart: boolean;
    readonly networkedVariablesUpdateInterval: number;
    readonly delayScheduleChangeUntilMediaEndEvent: boolean;
    readonly language: LanguageType;
    readonly languageKey: LanguageKeyType;
    readonly flipCoordinates: boolean;
    readonly inactivityTimeout: boolean;
    readonly inactivityTime: number;
    readonly touchCursorDisplayMode: TouchCursorDisplayModeType;
    readonly udpDestinationAddressType: UdpAddressType;
    readonly udpDestinationAddress: string;
    readonly udpDestinationPort: number;
    readonly udpReceiverPort: number;
    readonly enableEnhancedSynchronization: DmEnhancedSynchronization | null;
    readonly serialPortConfigurations: Readonly<DmSerialPortList>;
    readonly gpio: Readonly<DmGpioList>;
    readonly buttonPanels: Readonly<DmButtonPanelMap>;
    readonly irRemote: Readonly<DmIrRemote>;
    readonly audioSignPropertyMap: Readonly<DmAudioSignPropertyMap>;
    constructor(state: DmSignMetadata);
}
/**
 * @class
 * @classDesc The HtmlSite class represents an HTML Site object that is created and managed as part
 *  of the sign HTML Site collection. References to HTML Site objects are used in content items
 *  that display HTML content.
 *
 * It is not expected that this object will be directly constructed by client code.
 *
 * This object is returned from the following selectors:
 *      [dmGetHtmlSiteById]{@link Selectors:HtmlSite~dmGetHtmlSiteById},
 *      [dmGetHtmlSiteByName]{@link Selectors:HtmlSite~dmGetHtmlSiteByName}
 *
 * @param state {DmHtmlSite} - simple object containing HTML Site state properties
 * @property id {BsDmId} - HTML site ID
 * @property name {string} - HTML site friendly name
 * @property type {HtmlSiteType} - type of HTML Site. One of {(HtmlSiteType.) Hosted, Remote}
 * @property queryString {DmParameterizedString} - query string to be used when fetching the site from a URL
 * @property indexAssetItem {BsAssetItem | null} - for Hosted sites, the assetItem of the index file for the site.
 * @property indexAssetId {BsDmId} - DEPRECATED - for Hosted sites, the assetId of the index file for the site.
 * @property url {string | null} - for Remote sites, the URL of the site. Null for Hosted sites.
 */
export class DmcHtmlSite implements DmHtmlSite {
    readonly id: BsDmId;
    readonly name: string;
    readonly type: HtmlSiteType;
    readonly queryString: DmParameterizedString;
    readonly indexAssetItem: BsAssetItem | null;
    readonly indexAssetId: BsAssetId;
    readonly url: DmParameterizedString | null;
    readonly enableNode: boolean;
    constructor(state: DmHtmlSite, indexAssetItem?: BsAssetItem | null);
}
/**
 * @class
 * @classDesc The NodeApp class represents an Node App object that is created and managed as part
 *  of the sign.
 *
 * It is not expected that this object will be directly constructed by client code.
 *
 * This object is returned from the following selectors:
 *      [dmGetNodeAppById]{@link Selectors:NodeApp~dmGetNodeAppById},
 *      [dmGetNodeAppIdByName]{@link Selectors:NodeApp~dmGetNodeAppIdByName}
 *
 * @param state {DmNodeApp} - simple object containing NodeApp state properties
 * @property id {BsDmId} - Node App ID
 * @property name {string} - NodeApp friendly name
 * @property indexAssetItem {BsAssetItem | null} - the assetItem of the index file for the site.
 * @property indexAssetId {BsDmId} - DEPRECATED - for Hosted sites, the assetId of the index file for the site.
 */
export class DmcNodeApp implements DmNodeApp {
    readonly id: BsDmId;
    readonly name: string;
    readonly indexAssetItem: BsAssetItem | null;
    readonly indexAssetId: BsAssetId;
    constructor(state: DmNodeApp, indexAssetItem?: BsAssetItem | null);
}
/**
 * @class
 * @classDesc The DeviceWebPage class represents a DeviceWebPage object for the sign.
 *
 * It is not expected that this object will be directly constructed by client code.
 *
 * @param state {DmDeviceWebPage} - simple object containing DeviceWebPage properties
 * @property id {BsDmId} - DeviceWebPage ID
 * @property name {string} - DeviceWebPage friendly name
 * @property indexAssetItem {BsAssetItem | null} - the assetItem of the index file for the site.
 * @property indexAssetId {BsDmId} - DEPRECATED - the assetId of the index file for the site
 * @property url - the port used for the web server serving the sign on the device. If port === 0, the standard
 *  port for the sign device web page is assumed (nominally, port 8008.) Port === 1 may be used in the future
 *  to denote the device web page port (nominally port 8080.)
 */
export class DmcDeviceWebPage implements DmDeviceWebPage {
    readonly id: BsDmId;
    readonly name: string;
    readonly indexAssetItem: BsAssetItem | null;
    readonly indexAssetId: BsAssetId;
    readonly port: number;
    constructor(state: DmDeviceWebPage, indexAssetItem?: BsAssetItem | null);
}
/**
 * @class
 * @classDesc The PresentationWebPage class represents the current specification for the presentationWebPage
 *  (i.e., the deviceWebPage served from port 8008 om the player.)
 *
 * It is not expected that this object will be directly constructed by client code.
 *
 * @param mode {DeviceWebPageDisplay} - the current mode for the presentationWebPage
 * @param [customPageState] {DmDeviceWebPage} - the device WebPage object for a custom page
 * @param customPageAssetItem {BsAssetItem | null} - the assetItem of the index file for custom page.
 * @property mode {DeviceWebPageDisplay} - the current mode for the presentationWebPage (None, Standard, Custom)
 * @property customPage {DmcDeviceWebPage | null} - if mode = Custom, a DmcDeviceWebPage object
 *  representing the custom page
 */
export class DmcPresentationWebPage {
    readonly mode: DeviceWebPageDisplay;
    readonly customPage: DmcDeviceWebPage | null;
    constructor(mode: DeviceWebPageDisplay, customPageState?: DmDeviceWebPage | null, customPageAssetItem?: BsAssetItem | null);
}
/**
 * @class
 * @classdesc The DataFeed class represents a data feed object that is created and managed as part
 *  of the sign data feed collection. References to data feed objects are used in content items
 *  that display data feed content.
 *
 *  It is not expected that this object will be directly constructed by client code.
 *
 *  This object is returned from the following selectors:
 *      [dmGetDataFeedById]{@link Selectors:DataFeed~dmGetDataFeedById},
 *      [dmGetDataFeedByName]{@link Selectors:DataFeed~dmGetDataFeedByName}
 *
 * @param state {DmDataFeed | DmBsnDataFeed} - simple object containing data feed state properties
 * @property id {BsDmId} - data feed ID
 * @property name {string} - data feed friendly name
 * @property type {DataFeedType} - type of data feed. One of {(DataFeedType.) URLDataFeed, BSNDataFeed, BSNMediaFeed,
 *  BSNDynamicPlaylist, BSNTaggedPlaylist}
 * @property url {DmParameterizedString | string} - URL for data feed. (Note: BSN data feeds do not support
 *  DmParameterizedString types for this property.)
 * @property type {DataFeedUsageType} - usage of data feed.
 *  One of {(DataFeedUsageType.) Text, Mrss, MrssWith4K, Content}
 * @property updateInterval {number} - number of seconds between feed updates
 * @property useHeadRequest {boolean} - true if data feed updates should bw optimized by using HEAD requests, and then
 *  updating the feed only if the Last-Modified-Date in the HEAD response indicates the feed has changed
 * @property parserPlugin {BsDmId} - id for the parser plugin to use for parsing the data feed. If no
 *  parserPlugin is assigned, this will be BsDmIdNone.
 * @property autoGenerateUserVariables {boolean} - true if the feed name/description pairs should be used to generate
 *  user variables
 * @property userVariableAccess {AccessType} - if user variables are generated, this property denotes the AccessType for
 *  the generated user variables.
 * @property isSystemFeed {boolean} - true if the feed has been marked as a system dataFeed
 * @property bsnId {number} - the BSN ID for the feed (BSN feeds only)
 * @property bsnName {string} - the BSN name for the feed (BSN feeds only)
 * @property supportsAudio {boolean} - true if the BSN feed supports audio (BSN feeds only)
 * @property playerTagMatching {PlayerTagMatchingType} - selection to determine how media tags should be matched
 *  against player tags in a BSN tagged playlist (BSN feeds only)
 */
export class DmcDataFeed implements DmBsnDataFeed {
    readonly id: BsDmId;
    readonly name: string;
    readonly feedSourceId: BsDmId;
    readonly usage: DataFeedUsageType;
    readonly parserPlugin: BsAssetId;
    readonly autoGenerateUserVariables: boolean;
    readonly userVariableAccess: AccessType;
    readonly isSystemFeed: boolean;
    readonly supportsAudio: boolean;
    readonly playerTagMatching: PlayerTagMatchingType;
    readonly bsnAssetItem: BsAssetItem | null;
    get type(): DataFeedType;
    get isBsnDataFeed(): boolean;
    get updateInterval(): number;
    get useHeadRequest(): boolean;
    get url(): DmParameterizedString | string;
    constructor(params: DmDataFeedEntityGroup);
}
/**
 * @class
 * @classdesc The UserVariable class represents a user variable object. References to user variable objects
 *  can be used in DmParameterizedStrings and in DmCondition objects. User variables represents
 *  a mapping between the user variable name and a string value which can be changed at the
 *  presentation run time.
 *
 *  It is not expected that this object will be directly constructed by client code.
 *
 *  This object is returned from the following selectors:
 *      [dmGetUserVariableById]{@link Selectors:UserVariable~dmGetUserVariableById},
 *      [dmGetUserVariableByName]{@link Selectors:UserVariable~dmGetUserVariableByName}
 *
 * @param state {DmUserVariable} - simple object containing user variable state properties
 * @property id {BsDmId} - user variable ID
 * @property defaultValue {DmParameterizedString} - the default value for the user variable
 * @property isNetworked {boolean} - true if the user variable can be changed via BSN
 * @property access {AccessType} - runtime access type
 * @property dataFeedId {BsDmId}
 * @property systemVariable {SystemVariableType | null}
 */
export class DmcUserVariable implements DmUserVariable {
    readonly id: BsDmId;
    readonly name: string;
    readonly defaultValue: DmParameterizedString;
    readonly isNetworked: boolean;
    readonly access: AccessType;
    readonly dataFeedId: BsDmId;
    readonly systemVariable: SystemVariableType | null;
    constructor(state: DmUserVariable);
}
/**
 * @class
 * @classdesc The BrightScriptPlugin class represents a script plugin object.
 *
 *  It is not expected that this object will be directly constructed by client code.
 *
 *  This object is returned from the following selectors:
 *      [dmGetScriptPluginById]{@link Selectors:ScriptPlugin~dmGetScriptPluginById},
 *      [dmGetScriptPluginByName]{@link Selectors:ScriptPlugin~dmGetScriptPluginByName}
 *
 * @param state {DmBrightScriptPlugin} - simple object containing script plugin state properties
 * @property id {BsDmId} - script plugin ID
 * @property assetId {BsAssetId} - the asset ID for the script plugin file
 * @property assetItem {BsAssetItem} - the assetItem corresponding to the plugin script file
 */
export class DmcBrightScriptPlugin implements DmBrightScriptPlugin {
    readonly id: BsDmId;
    readonly name: string;
    readonly assetId: BsAssetId;
    readonly assetItem: BsAssetItem;
    constructor(state: DmBrightScriptPlugin, scriptAssetItem: BsAssetItem);
}
/**
 * @class
 * @classdesc The ParserBrightScriptPlugin class represents a script plugin object to be used as a custom
 *  data feed parser.
 *
 *  It is not expected that this object will be directly constructed by client code.
 *
 *  This object is returned from the following selectors:
 *      [dmGetParserScriptPluginById]{@link Selectors:ParserPlugin~dmGetParserPluginById},
 *      [dmGetParserScriptPluginByName]{@link Selectors:ParserPlugin~dmGetParserPluginByName}
 *
 * @param state {DmParserBrightScriptPlugin} - simple object containing script plugin state properties
 * @property id {BsDmId} - script plugin ID
 * @property assetId {BsAssetId} - the asset ID for the script plugin file
 * @property assetItem {BsAssetItem} - the assetItem corresponding to the plugin script file
 * @property parseFeedFunctionName {string} - name of script function to be used as data feed parser
 * @property parseUVFunctionName {string} - name of script function to be used to parse a data feed into user variables
 * @property userAgentFunctionName {string} - name of script function to be used to provide user agent string
 *  for feed update requests
 */
export class DmcParserBrightScriptPlugin implements DmParserBrightScriptPlugin {
    readonly id: BsDmId;
    readonly name: string;
    readonly assetId: BsAssetId;
    readonly parseFeedFunctionName: string;
    readonly parseUVFunctionName: string;
    readonly userAgentFunctionName: string;
    readonly assetItem: BsAssetItem;
    constructor(state: DmParserBrightScriptPlugin, scriptAssetItem: BsAssetItem);
}
/**
 * @class
 * @classdesc The VideoModeBrightScriptPlugin class represents a video mode plugin object.
 *
 *  It is not expected that this object will be directly constructed by client code.
 *
 *  This object is returned from the following selectors:
 *      [dmGetVideoModeScriptPluginById]{@link Selectors:VideoModePlugin~dmGetVideoModePluginById},
 *      [dmGetVideoModeScriptPluginByName]{@link Selectors:VideoModePlugin~dmGetVideoModePluginByName}
 *
 * @param state {DmVideoModeBrightScriptPlugin} - simple object containing video mode plugin state properties
 * @property id {BsDmId} - video mode plugin ID
 * @property assetId {BsAssetId} - the asset ID for the video mode plugin file
 * @property assetItem {BsAssetItem} - the assetItem corresponding to the plugin script file
 * @property functionName {string} - name of script function to be used as video mode converter
 */
export class DmcVideoModeBrightScriptPlugin implements DmVideoModeBrightScriptPlugin {
    readonly id: BsDmId;
    readonly name: string;
    readonly assetId: BsAssetId;
    readonly assetItem: BsAssetItem;
    readonly functionName: string;
    constructor(state: DmVideoModeBrightScriptPlugin, videoModeAssetItem: BsAssetItem);
}

/** @module Helpers:Defaults */
/**
 * Interface that defines the object state used to store defaults
 *
 * @interface DmDefaultProperties
 */
export interface DmDefaultProperties {
    signProperties: DmSignPropertyData;
    serialPortConfigurations: DmSerialPortList;
    gpio: DmGpioList;
    buttonPanels: DmButtonPanelMap;
    irRemote: DmIrRemote;
    audioSignPropertyMap: DmAudioSignPropertyMap;
    audioZoneProperties: DmAudioZonePropertyData;
    enhancedAudioZoneProperties: DmEnhancedAudioZonePropertyData;
    imageZoneProperties: DmImageZonePropertyData;
    videoZoneProperties: DmVideoZonePropertyData;
    tickerZoneProperties: DmTickerZonePropertyData;
    clockZoneProperties: DmClockZonePropertyData;
    liveTextItemTextProperties: DmLiveTextItemTextProperties;
    dataFeedSourceProperties: DmDataFeedSourceBaseProperties;
    videoContentItem: DmVideoContentItemData;
    audioContentItem: DmAudioContentItemData;
    imageContentItem: DmImageContentItemDefaults;
    htmlContentItem: DmHtmlContentItemDefaults;
    mrssContentItem: DmMrssDataFeedContentItemData;
    twitterContentItem: DmTwitterFeedContentItemDefaults;
    liveVideoContentItem: DmLiveVideoContentItemDefaults;
    videoStreamContentItem: DmStreamContentItemDefaults;
    audioStreamContentItem: DmStreamContentItemDefaults;
    mjpegStreamContentItem: DmMjpegStreamContentItemDefaults;
    mediaListContentItem: DmMediaListContentItemDefaults;
    playFileContentItem: DmPlayFileContentItemDefaults;
    eventHandlerContentItem: DmEventHandlerContentItemDefaults;
    timerEvent: DmTimerEventData;
}
/**
 * Interface to define the object state passed to dmSetDefaultPropertyValues
 *
 * @interface DmSetDefaultParams
 *
 * With the exception of the DmGpioList array, which much be specified completely, all objects, including
 *  objects in the DmSerialPortConfiguration array, can be partial objects. In other words, they can contain
 *  a subset of properties, which will be merged with current defaults.
 *
 * Note: the syntax Partial<interface> is a TypeScript 2.2 feature which makes all property member of the
 *  interface optional.
 */
export interface DmSetDefaultParams {
    signProperties?: Partial<DmSignPropertyData>;
    serialPortConfigurations?: Array<Partial<DmSerialPortConfiguration>>;
    gpio?: DmGpioList;
    buttonPanels?: DmButtonPanelMap;
    irRemote?: DmIrRemote;
    audioSignPropertyMap?: DmAudioSignPropertyMap;
    audioZoneProperties?: Partial<DmAudioZonePropertyData>;
    enhancedAudioZoneProperties?: Partial<DmEnhancedAudioZonePropertyData>;
    imageZoneProperties?: Partial<DmImageZonePropertyData>;
    videoZoneProperties?: Partial<DmVideoZonePropertyData>;
    tickerZoneProperties?: DmSetTickerZonePropertyData;
    clockZoneProperties?: DmSetClockZonePropertyData;
    liveTextItemTextProperties?: Partial<DmLiveTextItemTextProperties>;
    dataFeedSourceProperties?: Partial<DmDataFeedSourceBaseProperties>;
    videoContentItem?: Partial<DmVideoContentItemData>;
    audioContentItem?: Partial<DmAudioContentItemData>;
    imageContentItem?: Partial<DmImageContentItemDefaults>;
    htmlContentItem?: Partial<DmHtmlContentItemDefaults>;
    mrssContentItem?: Partial<DmMrssDataFeedContentItemData>;
    twitterContentItem?: Partial<DmTwitterFeedContentItemDefaults>;
    liveVideoContentItem?: Partial<DmLiveVideoContentItemDefaults>;
    videoStreamContentItem?: Partial<DmStreamContentItemDefaults>;
    audioStreamContentItem?: Partial<DmStreamContentItemDefaults>;
    mjpegStreamContentItem?: Partial<DmMjpegStreamContentItemDefaults>;
    mediaListContentItem?: Partial<DmMediaListContentItemDefaults>;
    playFileContentItem?: Partial<DmPlayFileContentItemDefaults>;
    eventHandlerContentItem?: Partial<DmEventHandlerContentItemDefaults>;
    timerEvent?: Partial<DmTimerEventData>;
}
export interface DmSetTickerZonePropertyData {
    textWidget?: Partial<DmTextWidget>;
    widget?: Partial<DmWidget>;
    scrollSpeed?: number;
}
export interface DmSetClockZonePropertyData {
    displayTime?: boolean;
    rotation?: number;
    widget?: Partial<DmWidget>;
}
/**
 * Merge all properties from params object with current defaults.
 * This function can be used to restore the entire defaults object from a saved state, and also
 *  to change a subset of defaults in response to user input.
 *
 * @param defaults {DmSetDefaultParams} - object with properties to merge into defaults
 */
export function dmSetDefaultPropertyValues(defaults: DmSetDefaultParams): void;
/**
 * Reset all defaults to initial values as defined by dsDataModel.
 */
export function dmResetDefaultPropertyValues(): void;
/**
 * Get entire defaults object. This can be used to store the modified defaults object state to be reloaded
 *  on subsequent invocations of bsDataModel.
 *
 *  @returns DmDefaultProperties object
 */
export function dmGetDefaultPropertyValues(): DmDefaultProperties;
/**
 * Get default SignProperty data object from defaults.
 *
 *  @returns DmSignPropertyData object
 */
export function dmGetDefaultSignPropertyData(): DmSignPropertyData;
/**
 * Get default SerialPortConfigurations array from defaults.
 *
 *  @returns DmSerialPortList array
 */
export function dmGetDefaultSerialPortList(): DmSerialPortList;
/**
 * Get default Gpio configuration array from defaults.
 *
 *  @returns DmGpioList array
 */
export function dmGetDefaultGpioList(): DmGpioList;
/**
 * Get default IrRemote configuration from defaults.
 *
 *  @returns DmIrRemote object
 */
export function dmGetDefaultIrRemote(): DmIrRemote;
/**
 * Get default ButtonPanel Configuration data object from defaults.
 *
 *  @returns DmButtonPanelMap object
 */
export function dmGetDefaultButtonPanelMap(): DmButtonPanelMap;
/**
 * Get default AudioSignPropertyMap data object from defaults.
 *
 *  @returns DmAudioSignPropertyMap object
 */
export function dmGetDefaultAudioSignPropertyMap(): DmAudioSignPropertyMap;
/**
 * Get default AudioZoneProperties data object from defaults.
 *
 *  @returns DmAudioZonePropertyData object
 */
export function dmGetDefaultAudioZoneProperties(): DmAudioZonePropertyData;
/**
 * Get default EnhancedAudioZoneProperties data object from defaults.
 *
 *  @returns DmEnhancedAudioZonePropertyData object
 */
export function dmGetDefaultEnhancedAudioZoneProperties(): DmEnhancedAudioZonePropertyData;
/**
 * Get default ImageZoneProperties data object from defaults.
 *
 *  @returns DmImageZonePropertyData object
 */
export function dmGetDefaultImageZoneProperties(): DmImageZonePropertyData;
/**
 * Get default VideoZoneProperties data object from defaults.
 *
 *  @returns DmVideoZonePropertyData object
 */
export function dmGetDefaultVideoZoneProperties(): DmVideoZonePropertyData;
/**
 * Get default TickerZoneProperties data object from defaults.
 *
 *  @returns DmTickerZonePropertyData object
 */
export function dmGetDefaultTickerZoneProperties(): DmTickerZonePropertyData;
/**
 * Get default ClockZoneProperties data object from defaults.
 *
 *  @returns DmClockZonePropertyData object
 */
export function dmGetDefaultClockZoneProperties(): DmClockZonePropertyData;
/**
 * Get default LiveTextItem text property object from defaults.
 *  @returns DmLiveTextItemTextProperties object
 */
export function dmGetDefaultLiveTextItemTextProperties(): DmLiveTextItemTextProperties;
/**
 * Get default base dataFeedSource object from defaults.
 *  @returns DmDataFeedSourceBaseProperties object
 */
export function dmGetDefaultDataFeedSourceProperties(): DmDataFeedSourceBaseProperties;
/**
 * Get default Video ContentItem defaults data object.
 *
 *  @returns DmVideoContentItemData object
 */
export function dmGetDefaultVideoContentItemData(): DmVideoContentItemData;
/**
 * Get default Audio ContentItem defaults data object.
 *
 *  @returns DmAudioContentItemData object
 */
export function dmGetDefaultAudioContentItemData(): DmAudioContentItemData;
/**
 * Get default Image ContentItem defaults data object.
 *
 *  @returns DmImageContentItemDefaults object
 */
export function dmGetDefaultImageContentItemData(): DmImageContentItemDefaults;
/**
 * Get default Html ContentItem defaults data object.
 *
 *  @returns DmHtmlContentItemDefaults object
 */
export function dmGetDefaultHtmlContentItemData(): DmHtmlContentItemDefaults;
/**
 * Get default MrssDataFeed ContentItem defaults data object.
 *
 *  @returns DmMrssDataFeedContentItemData object
 */
export function dmGetDefaultMrssDataFeedContentItemData(): DmMrssDataFeedContentItemData;
/**
 * Get default TwitterFeed ContentItem defaults data object.
 *
 *  @returns DmTwitterFeedContentItemDefaults object
 */
export function dmGetDefaultTwitterFeedContentItemData(): DmTwitterFeedContentItemDefaults;
/**
 * Get default LiveVideo ContentItem defaults data object.
 *
 *  @returns DmLiveVideoContentItemDefaults object
 */
export function dmGetDefaultLiveVideoContentItemData(): DmLiveVideoContentItemDefaults;
/**
 * Get default VideoStream ContentItem defaults data object.
 *
 *  @returns DmStreamContentItemDefaults object
 */
export function dmGetDefaultVideoStreamContentItemData(): DmStreamContentItemDefaults;
/**
 * Get default AudioStream ContentItem defaults data object.
 *
 *  @returns DmStreamContentItemDefaults object
 */
export function dmGetDefaultAudioStreamContentItemData(): DmStreamContentItemDefaults;
/**
 * Get default MjpegStream ContentItem defaults data object.
 *
 *  @returns DmMjpegStreamContentItemDefaults object
 */
export function dmGetDefaultMjpegStreamContentItemData(): DmMjpegStreamContentItemDefaults;
/**
 * Get default MediaList ContentItem defaults data object.
 *
 *  @returns DmMediaListContentItemDefaults object
 */
export function dmGetDefaultMediaListContentItemData(): DmMediaListContentItemDefaults;
/**
 * Get default PlayFile ContentItem defaults data object.
 *
 *  @returns DmPlayFileContentItemDefaults object
 */
export function dmGetDefaultPlayFileContentItemData(): DmPlayFileContentItemDefaults;
/**
 * Get default EventHandler ContentItem defaults data object.
 *
 *  @returns DmEventHandlerContentItemDefaults object
 */
export function dmGetDefaultEventHandlerContentItemData(): DmEventHandlerContentItemDefaults;
/**
 * Get default Timer Event defaults data object.
 *
 *  @returns DmTimerEventData object
 */
export function dmGetDefaultTimerEventData(): DmTimerEventData;

/** @module Helpers:AssetItems */
/**
 * Return true if an asset with the given assetInfo is valid for the given zone type.
 * This test assumes an non-interactive zone.
 * This test is intended only for assetItems used directly as content in mediaStates within the zone.
 *
 * @param assetInfo {BscFileTypeInfo} - assetInfo for assetItem to be checked
 * @param zoneType {ZoneType} - type of zone into which the assetItem would be added
 * @returns {boolean} - true if asset is valid for zone
 */
export function dmIsValidAssetInfoForPlaylist(assetInfo: BscFileTypeInfo, zoneType: ZoneType | null | undefined): boolean;
/**
 * Return true if given assetItem is valid for the given zone type.
 * This test assumes a nonInteractive zone.
 * TODO: this test assumes nothing about underlying content for dynamic playlists, tagged playlist and media feeds
 *
 * @param assetItem {BsAssetItem} - assetItem to be checked
 * @param zoneType {ZoneType} - type of zone into which the assetItem would be added
 * @returns {boolean} - true if asset is valid for zone
 */
export function dmIsValidAssetItemForPlaylist(assetItem: BsAssetItem | null | undefined, zoneType: ZoneType | null | undefined): boolean;
/**
 * Return true if an asset with the given assetInfo is valid in a liveText canvas.
 * @param assetInfo {BscFileTypeInfo} - assetInfo for assetItem to be checked
 * @returns {boolean} - true if asset is valid for use in a liveText canvas
 */
export function dmIsValidAssetTypeForLiveText(assetInfo: BscFileTypeInfo): boolean;
/**
 * Return true if an asset with the given assetInfo is valid for a mediaList or playFile item within
 *  a zone of a given zone type.
 *
 * @param assetInfo {BscFileTypeInfo} - assetInfo for assetItem to be checked
 * @param zoneType {ZoneType} - type of zone containing the mediaList or playFile in which the asset would be used
 * @returns {boolean} - true if asset is valid for mediaList or playFile item within the zone
 */
export function dmIsValidAssetInfoForMediaListOrPlayFile(assetInfo: BscFileTypeInfo, zoneType: ZoneType | null | undefined): boolean;
/**
 * Return true if an asset with the given assetInfo is valid for the given zone type.
 * This test assumes an Interactive zone.
 * This test is intended only for assetItems used directly as content in mediaStates within the zone.
 * It is not necessarily valid for mediaList or PlayFile items. Use {@link dmIsValidAssetInfoForMediaListOrPlayFile}
 *  to check assets for such items.
 *
 * @param assetInfo {BscFileTypeInfo} - assetInfo for assetItem to be checked
 * @param zoneType {ZoneType} - type of zone into which the assetItem would be added
 * @returns {boolean} - true if asset is valid for zone
 */
export function dmIsValidAssetInfoForZone(assetInfo: BscFileTypeInfo, zoneType: ZoneType | null | undefined): boolean;
/**
 * Return true if given assetItem is valid for the given zone type.
 * This test assumes an Interactive zone.
 * This test is intended only for assetItems used directly as content in mediaStates within the zone.
 * It is not necessarily valid for mediaList or PlayFile items.
 *
 * @param assetItem {BsAssetItem} - assetItem to be checked
 * @param zoneType {ZoneType} - type of zone into which the assetItem would be added
 * @returns {boolean} - true if asset is valid for zone
 */
export function dmIsValidAssetItemForZone(assetItem: BsAssetItem | null | undefined, zoneType: ZoneType | null | undefined): boolean;

/** @module Helpers:ContentItems */
/**
 * Get a DmMediaStateContainer object for a given zone ID
 *
 * @param zoneId - ID of zone container
 * @returns {DmMediaStateContainer} container object for zone
 */
export function dmGetZoneMediaStateContainer(zoneId: BsDmId): DmMediaStateContainer;
/**
 * Get a DmMediaStateContainer object, given the container ID and typer
 *
 * @param id - ID of container
 * @param type {MediaStateContainerType} - container type
 * @returns {DmMediaStateContainer} simple container object
 */
export function dmGetMediaStateContainer(id: BsDmId, type: MediaStateContainerType): DmMediaStateContainer;
/**
 * Return true if the given mediaStateContainer represents a mediaState that can contain a media sequence.
 * This is true for mediaStates with a MediaList and PlayFile content item.
 * @param container {DmMediaStateContainer}
 * @returns {boolean}
 */
export function dmIsMediaSequenceContainer(container: DmMediaStateContainer): boolean;
/**
 * Return true if the given mediaStateContainer represents a mediaState that can contain other mediaStates.
 * This is true for mediaStates with a MediaList, PlayFile, or SuperState content item.
 * @param container {DmMediaStateContainer}
 * @returns {boolean}
 */
export function dmIsMediaStateBasedContainer(container: DmMediaStateContainer): boolean;
/**
 * Create a BsAssetItem for a local file given a file path
 * In general, BsAssetItem objects will and should be created by an external content manager. This helper
 *  is provided for occasional use - primarily for creating objects to be used in testing, but also for
 *  occasional other temporary or stopgap use. This should be avoided in final production code.
 *
 * @param fullPath {string} - local file path, including directory and filename
 * @param [id=BsAssetIdNone] {BsAssetId} - ID string with which to set the ID (used in testing.)
 *  Default is BsAssetIdNone, which is common because, in practice, the ID field is only assigned
 *  when the assetItem is used in a sign.
 * @param [mediaType=derived from extension] {MediaType} - used to specify the mediaType rather than generate
 *  it from the file extension.
 *  This is useful in cases where the file name doesn't have an extension (e.g., in the player file pool.) If this
 *  is not specified, the mediaType will be generated based on the file extension.
 * @param [assetType=derived from extension] {AssetType} - specify the asset type rather than deriving it
 *  from the file extension.
 * @returns {BsAssetItem}
 */
export function dmCreateAssetItemFromLocalFile(fullPath: string, id?: BsAssetId, mediaType?: MediaType | null, assetType?: AssetType | null): BsAssetItem;
export function dmGetWidgetCustomFontAssetId(widget: DmWidget): BsAssetId | null;
export function dmIsContentItem(value: any): value is DmContentItem;
/**
 * Create either a DmMediaContentItem (based on DmContentItem) or a state derived from
 *  DmMediaContentItem for use in a MediaState (i.e., one of: DmVideoContentItem,
 *  DmAudioContentItem, or DmImageContentItem.)
 * This ContentItemState encapsulates a media or text file, along with ContentItem parameters
 *  specific to the type of MediaFile
 * If one of the derived states is created, all contentType specific parameters will be set yo default values.
 *
 * IMPORTANT NOTE: Starting with bsDataModel version 0.5.1, typically clients will NOT use this function.
 * MediaContentItems can no longer be passed to any AddMediaState action creation function.
 * Instead, for MediaContent, a BsAssetItem is passed to the AddMediaState function.
 * The AddMediaState action creates the contentItem, and also handles asset management for the content.
 *
 * @param name {string} - name of the ContentItem - typically this should be set to the file name by the client
 * @param assetId {BsAssetId} - string ID that can be used by the client to resolve the file location
 * @param mediaType {MediaType} - type of media file
 * @param [props=<user defaults>] {VideoContentItemProperties | AudioContentItemProperties | ImageContentItemProperties}
 * @returns {DmMediaContentItem}
 */
export function dmCreateMediaContentItem(name: string, assetId: BsAssetId, mediaType: MediaType, props?: VideoContentItemProperties | AudioContentItemProperties | ImageContentItemProperties): DmMediaContentItem | null;
/**
 * Create a {@link DmPlayFileItemContentItem} object by adding the additional PlayFile specific properties
 *  to a MediaContentItem.
 * @param mediaContentItem {DmMediaContentItem | null}
 * @param [key=contentItem.name] {string | null}
 * @param [exportKey=true] {boolean}
 * @param [name] {string} - the display label - this will be stored in the name property of the contentItem
 */
export function dmCreatePlayFileItemFromMediaContentItem(mediaContentItem: DmMediaContentItem | null, key?: string | null, exportKey?: boolean, name?: string | null): DmPlayFileItemContentItem | null;
/**
 * Return true if the given content item is of type DmMediaContentItem.
 * This also serves as a Typescript type guard
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmMediaContentItem
 */
export function dmContentItemIsMediaContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmMediaContentItem;
/**
 * Return true if the given content item encompasses a MediaState sequence.
 * This also serves as a Typescript type guard for type DmMediaListContentItem | DmPlayFileContentItem.
 * This is true for MediaList and PlayFile content items.
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item uses a MediaSequence
 */
export function dmContentItemIsMediaSequenceContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmMediaSequenceContainerContentItem;
/**
 * @interface VideoContentItemProperties
 * @property volume {number} - volume for video file audio playback (range 0..100)
 * @property [videoDisplayMode=<user> (2D)] {VideoDisplayModeType}
 * @property [automaticallyLoop=<user> (false)] {boolean} - set to true to have file playback automatically restarted
 */
export interface VideoContentItemProperties {
    volume?: number;
    videoDisplayMode?: VideoDisplayModeType;
    automaticallyLoop?: boolean;
}
/**
 * Create a DmVideoContentItem.
 * This ContentItemState encapsulates a video file, along with VideoContentItem specific parameters.
 * All VideoContentItemProperties parameters will be set to user default if not specified.
 *
 * IMPORTANT NOTE: Typically clients will NOT use this function.
 * MediaContentItems can not be passed to any AddMediaState action creation function.
 * Instead, for MediaContent, a BsAssetItem is passed to the AddMediaState function.
 * The AddMediaState action creates the contentItem, and also handles asset management for the content.
 *
 * @param name {string} - name of the ContentItem - typically this should be set to the file name by the client
 * @param assetId {BsAssetId} - string ID that can be used by the client to resolve the video file location
 * @param [props=<user defaults>] {VideoContentItemProperties}
 * @returns {DmVideoContentItem}
 */
export function dmCreateVideoContentItem(name: string, assetId: BsAssetId, props?: VideoContentItemProperties): DmVideoContentItem;
/**
 * Return true if the given content item is of type DmVideoContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmVideoContentItem
 */
export function dmContentItemIsVideoContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmVideoContentItem;
/**
 * @interface AudioContentItemProperties
 * @property volume {number} - volume for video file audio playback (range 0..100)
 */
export interface AudioContentItemProperties {
    volume?: number;
}
/**
 * Create a DmAudioContentItem.
 * This ContentItemState encapsulates an audio file, along with AudioContentItem specific parameters.
 * All VideoContentItemProperties parameters will be set to user default if not specified.
 *
 * IMPORTANT NOTE: Typically clients will NOT use this function.
 * MediaContentItems can not be passed to any AddMediaState action creation function.
 * Instead, for MediaContent, a BsAssetItem is passed to the AddMediaState function.
 * The AddMediaState action creates the contentItem, and also handles asset management for the content.
 *
 * @param name {string} - name of the ContentItem - typically this should be set to the file name by the client
 * @param assetId {BsAssetId} - string ID that can be used by the client to resolve the audio file location
 * @param [props=<user defaults>] {AudioContentItemProperties}
 * @returns {DmAudioContentItem}
 */
export function dmCreateAudioContentItem(name: string, assetId: BsAssetId, props?: AudioContentItemProperties): DmAudioContentItem;
/**
 * Return true if the given content item is of type DmAudioContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmAudioContentItem
 */
export function dmContentItemIsAudioContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmAudioContentItem;
/**
 * @interface ImageContentItemProperties
 * @property [useImageBuffer=<user> (false)] {boolean} - set to true to construct an image buffer for the image
 * @property [videoPlayerRequired=<user> (false)] {boolean} - set to true if VideoPlayer should be used to display image
 * @property [defaultTransition=<user> (NoEffect)] {TransitionType} - default transition type for transition out
 *  of the image state
 * @property [transitionDuration=<user> (1)] {number} - default transition duration for transition out of the state
 */
export interface ImageContentItemProperties {
    useImageBuffer?: boolean;
    videoPlayerRequired?: boolean;
    defaultTransition?: TransitionType;
    transitionDuration?: number;
}
/**
 * Create a DmImageContentItem.
 * This ContentItemState encapsulates an image file, along with ImageContentItem specific parameters.
 * All ImageContentItemProperties parameters will be set to user default if not specified.
 *
 * IMPORTANT NOTE: Typically clients will NOT use this function.
 * MediaContentItems can not be passed to any AddMediaState action creation function.
 * Instead, for MediaContent, a BsAssetItem is passed to the AddMediaState function.
 * The AddMediaState action creates the contentItem, and also handles asset management for the content.
 *
 * @param name {string} - name of the ContentItem - typically this should be set to the file name by the client
 * @param assetId {BsAssetId} - string ID that can be used by the client to resolve the image file location
 * @param [props=<user defaults>] {ImageContentItemProperties}
 * @returns {DmImageContentItem}
 */
export function dmCreateImageContentItem(name: string, assetId: BsAssetId, props?: ImageContentItemProperties): DmImageContentItem;
/**
 * Return true if the given content item is of type DmImageContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmImageContentItem
 */
export function dmContentItemIsImageContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmImageContentItem;
/**
 * @interface HtmlContentItemProperties
 * @property [enableBrightSignJavascriptObjects=<user> (false)] {boolean}
 * @property [enableCrossDomainPolicyChecks=<user> (true)] {boolean}
 * @property [ignoreHttpsCertificateErrors=<user> (false)] {boolean}
 * @property [enableCamera=<user> (false)] {boolean}
 * @property [enableMouseEvents=<user> (false)] {boolean} - set to true if site should respond to mouse events
 * @property [displayCursor=<user> (false)] {boolean} - set to true to display mouse cursor
 * @property [hwzOn=<user> (false)] {boolean} - set to true to use accelerated graphics hardware for video playback
 * @property [useUserStylesheet=<user> (false)] {boolean} - set to true if a custom style sheet document is included
 * @property [userStylesheetAssetId] {string} - assetId for the custom stylesheet to use,
 *  if useUserStylesheet is true
 * @property [customFonts] (DmFont[]} - array of fonts to be included with the Html content
 */
export interface HtmlContentItemProperties {
    enableBrightSignJavascriptObjects?: boolean;
    enableCrossDomainPolicyChecks?: boolean;
    ignoreHttpsCertificateErrors?: boolean;
    enableCamera?: boolean;
    enableMouseEvents?: boolean;
    displayCursor?: boolean;
    hwzOn?: boolean;
    useUserStylesheet?: boolean;
    userStylesheetAssetId?: BsAssetId;
    customFonts?: DmFont[];
}
/** Deprecated - the new form of this function using a HtmlContentItemProperties parameter is preferred. */
export function dmCreateHtmlContentItem(name: string, siteId: BsDmId, enableBrightSignJavascriptObjects?: boolean, enableCrossDomainPolicyChecks?: boolean, ignoreHttpsCertificateErrors?: boolean, enableCamera?: boolean, enableMouseEvents?: boolean, displayCursor?: boolean, hwzOn?: boolean, useUserStylesheet?: boolean, userStylesheetAssetId?: BsAssetId, customFonts?: DmFont[]): DmHtmlContentItem;
/**
 * Create a DmHtmlContentItem.
 * This ContentItemState encapsulates an HTML site, along with HtmlContentItem specific parameters.
 *
 * All optional parameters will be set to user default if omitted.
 *
 * @param name {string} - name for the ContentItem
 * @param siteId {BsDmId} - ID of the HTML site to indicate site from HtmlSite collection in the sign
 * @param [props=<user defaults>] {HtmlContentItemProperties}
 * @returns {DmHtmlContentItem}
 */
export function dmCreateHtmlContentItem(name: string, siteId: BsDmId, props?: HtmlContentItemProperties): DmHtmlContentItem;
/**
 * Return true if the given content item is of type DmHtmlContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmHtmlContentItem
 */
export function dmContentItemIsHtmlContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmHtmlContentItem;
/**
 * @interface LiveVideoContentItemProperties
 * @property [props=<user> (100)] {number} - desired volume for audio playback (range 0..100)
 * @property [overscan=<user> (false)] {boolean} - set to true to enable video overscan
 */
export interface LiveVideoContentItemProperties {
    volume?: number;
    overscan?: boolean;
}
/** Deprecated - the new form of this function using a LiveVideoContentItemProperties parameter is preferred. */
export function dmCreateLiveVideoContentItem(name: string, volume?: number, overscan?: boolean): DmLiveVideoContentItem;
/**
 * Create a DmLiveVideoContentItem.
 *
 * All optional parameters will be set to user default if omitted.
 *
 * @param name {string} - name of the ContentItem
 * @param [props=<user defaults>] {LiveVideoContentItemProperties}
 * @returns {DmLiveVideoContentItem}
 */
export function dmCreateLiveVideoContentItem(name: string, props: LiveVideoContentItemProperties): DmLiveVideoContentItem;
/**
 * Return true if the given content item is of type DmLiveVideoContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmLiveVideoContentItem
 */
export function dmContentItemIsLiveVideoContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmLiveVideoContentItem;
/**
 * Create a DmDataFeedContentItem.
 * This ContentItemState encapsulates a live DataFeed.
 *
 * @param name {string} - name for the ContentItem
 * @param dataFeedId {BsDmId} - ID of the DataFeed to indicate feed from DataFeed collection in the sign
 * @returns {DmDataFeedContentItem}
 */
export function dmCreateDataFeedContentItem(name: string, dataFeedId: BsDmId): DmDataFeedContentItem;
/**
 * Return true if the given content item is a simple TextFeed contentItem (simple RSS).
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is a simple TextFeed contentItem
 */
export function dmContentItemIsTextFeedContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmDataFeedContentItem;
/**
 * Create a DmMrssDataFeedContentItem.
 * This ContentItemState encapsulates a live MRSS DataFeed.
 *
 * All optional parameters will be set to user default if omitted.
 *
 * @param name {string} - name for the ContentItem
 * @param dataFeedId {BsDmId} - ID of the DataFeed to indicate feed from DataFeed collection in the sign
 * @param [videoPlayerRequired=<user> (false)] {boolean} - set to true in the data feed requires a video player
 * @returns {DmMrssDataFeedContentItem}
 */
export function dmCreateMrssDataFeedContentItem(name: string, dataFeedId: BsDmId, videoPlayerRequired?: boolean): DmMrssDataFeedContentItem;
/**
 * Return true if the given content item is of type DmMrssDataFeedContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmMrssDataFeedContentItem
 */
export function dmContentItemIsMrssDataFeedContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmMrssDataFeedContentItem;
/**
 * Return true if the given content item is of type DmDataFeedContentItem.
 * This is true if the content item is either type DataFeed or MrssFeed.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmDataFeedContentItem
 */
export function dmContentItemIsAnyDataFeedContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmDataFeedContentItem;
/**
 * @interface TwitterFeedContentItemProperties
 * @property {string} authToken - authorizationToken returned from Twitter
 * @property {string} encryptedTwitterSecrets - encryptedTwitter secrets
 * @property {string} [userName]
 * @property {number} [updateInterval] - feed update interval in seconds
 * @property {TwitterFeedRestrictionType} [restrictNumberOfTweets]
 * @property {number} [numberOfTweetsToShow]
 * @property {number} [numberOfRecentDaysForTweets]
 */
export interface TwitterFeedContentItemProperties {
    authToken: string;
    encryptedTwitterSecrets: string;
    userName?: string;
    updateInterval?: number;
    restrictNumberOfTweets?: TwitterFeedRestrictionType;
    numberOfTweetsToShow?: number;
    numberOfRecentDaysForTweets?: number;
}
/**
 * Create a DmTwitterFeedContentItem.
 * This ContentItem encapsulates a live Twitter feed.
 *
 * All optional parameters will be set to user default if omitted.
 *
 * @param {string | null} name - name for the ContentItem
 * @param {TwitterFeedContentItemProperties} props - properties for the feed
 * @returns {DmTwitterFeedContentItem}
 */
export function dmCreateTwitterFeedContentItem(name: string, props: TwitterFeedContentItemProperties): DmTwitterFeedContentItem;
/**
 * Return true if the given content item is of type DmTwitterFeedContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmTwitterFeedContentItem
 */
export function dmContentItemIsTwitterFeedContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmTwitterFeedContentItem;
/**
 * Create a DmUserVariableContentItem.
 * This ContentItem is used to display the value of a user variable as text content.
 * @param name {string}
 * @param userVariableId (BsDmId} - ID of user variable
 * @returns {DmUserVariableContentItem}
 */
export function dmCreateUserVariableContentItem(name: string, userVariableId: BsDmId): DmUserVariableContentItem;
/**
 * Return true if the given content item is of type DmUserVariableContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmUserVariableContentItem
 */
export function dmContentItemIsUserVariableContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmUserVariableContentItem;
/**
 * @interface StreamContentItemProperties
 * @property [props=<user> (100)] {number} - desired volume for audio playback (range 0..100)
 */
export interface StreamContentItemProperties {
    volume?: number;
}
/**
 * Create a DmVideoStreamContentItem.
 * All optional parameters will be set to user default if omitted.
 *
 * @param name {string} - name of the ContentItem
 * @param url {DmParameterizedString | string} - URL for the stream, if a string, will be converted
 *  to DmParameterizedString
 * @param [param=<user defaults>] {StreamContentItemProperties | number} - if a number, volume property
 * @returns {DmVideoStreamContentItem}
 */
export function dmCreateVideoStreamContentItem(name: string, url: DmParameterizedString | string, param?: StreamContentItemProperties | number): DmVideoStreamContentItem;
/**
 * Return true if the given content item is of type DmVideoStreamContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmVideoStreamContentItem
 */
export function dmContentItemIsVideoStreamContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmVideoStreamContentItem;
/**
 * Create a DmAudioStreamContentItem.
 * All optional parameters will be set to user default if omitted.
 *
 * @param name {string} - name of the ContentItem
 * @param url {DmParameterizedString | string} - URL for the stream, if a string, will be converted
 *  to DmParameterizedString
 * @param [param=<user defaults>] {StreamContentItemProperties | number} - if a number, volume property
 * @returns {DmAudioStreamContentItem}
 */
export function dmCreateAudioStreamContentItem(name: string, url: DmParameterizedString | string, param?: StreamContentItemProperties | number): DmAudioStreamContentItem;
/**
 * Return true if the given content item is of type DmAudioStreamContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmAudioStreamContentItem
 */
export function dmContentItemIsAudioStreamContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmAudioStreamContentItem;
/**
 * Create a DmMjpegStreamContentItem.
 *
 * All optional parameters will be set to user default if omitted.
 *
 * @param name {string} - name of the ContentItem
 * @param url {DmParameterizedString | string} - URL for the stream, if a string, will be converted
 *  to DmParameterizedString
 * @param [rotation=<user> (RotationType.rot0)] {RotationType} - desired rotation setting
 * @returns {DmMjpegStreamContentItem}
 */
export function dmCreateMjpegStreamContentItem(name: string, url: DmParameterizedString | string, rotation?: RotationType): DmMjpegStreamContentItem;
/**
 * Return true if the given content item is of type DmMjpegStreamContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmMjpegStreamContentItem
 */
export function dmContentItemIsMjpegStreamContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmMjpegStreamContentItem;
/**
 * Return true if the given content item is of type DmStreamContentItem (i.e., one of DmVideoStreamContentItem,
 *  DmAudioStreamContentItem, DmMjpegStreamContentItem.)
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmStreamContentItem
 */
export function dmContentItemIsStreamContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmStreamContentItem;
export interface MediaListContentItemProperties {
    playbackType?: MediaListPlaybackType;
    startIndex?: number;
    shuffle?: boolean;
    support4KImage?: boolean;
    useDataFeed?: boolean;
    transition?: TransitionType;
    transitionDuration?: number;
    autoTransitions?: boolean;
    sendMediaZoneMessage?: boolean;
    inactivityTimeout?: boolean;
    inactivityTime?: number;
}
export function dmCreateMediaListContentItem(name: string, props?: MediaListContentItemProperties): DmMediaListContentItem;
/**
 * Return true if the given content item is of type DmMediaListContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmMediaListContentItem
 */
export function dmContentItemIsMediaListContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmMediaListContentItem;
export interface PlayFileContentItemProperties {
    triggerType?: PlayFileTriggerType;
    useDefaultMedia?: boolean;
    userVariableIdOrName?: string;
    useDataFeed?: boolean;
}
export function dmCreatePlayFileContentItem(name: string, props?: PlayFileContentItemProperties): DmPlayFileContentItem;
/**
 * Return true if the given content item is of type DmPlayFileContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmPlayFileContentItem
 */
export function dmContentItemIsPlayFileContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmPlayFileContentItem;
/**
 * Return true if the given content item is either of type DmMediaListContentItem or DmPlayFileContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmMediaListContentItem or DmPlayFileContentItem
 */
export function dmContentItemIsMediaListOrPlayFileContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is (DmMediaListContentItem | DmPlayFileContentItem);
export function dmCreateEventHandlerContentItem(name: string, stopPlayback?: boolean): DmEventHandlerContentItem;
/**
 * Return true if the given content item is of type DmEventHandlerContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmEventHandlerContentItem
 */
export function dmContentItemIsEventHandlerContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmEventHandlerContentItem;
export function dmCreateLiveTextContentItem(name: string, canvasId: BsDmId): DmLiveTextContentItem;
/**
 * Return true if the given content item is of type DmLiveTextContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmLiveTextContentItem
 */
export function dmContentItemIsLiveTextContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmLiveTextContentItem;
export function dmCreateTimeContentItem(name: string): DmTimeContentItem;
export function dmContentItemIsTimeContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmTimeContentItem;
export function dmCreateDateContentItem(name: string): DmDateContentItem;
export function dmContentItemIsDateContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmDateContentItem;
export function dmCreateSuperStateContentItem(name: string): DmSuperStateContentItem;
/**
 * Return true if the given content item is of type DmSuperStateContentItem.
 * This also serves as a Typescript type guard.
 *
 * @param contentItem {DmDerivedContentItem | null | undefined} - content item to test
 * @returns {boolean} - true if content item is DmSuperStateContentItem
 */
export function dmContentItemIsSuperStateContentItem(contentItem: DmDerivedContentItem | null | undefined): contentItem is DmSuperStateContentItem;
/**
 * Return true if given contentItem is valid for the given zone type.
 * This test assumes a fully Interactive zone, and is not limited to nonInteractive playlists.
 * For nonInteractive playlists,
 *  use {@link Helpers:ContentItems~dmIsValidContentItemForPlaylist|dmIsValidContentItemForPlaylist}.
 *
 * @param contentItem {DmDerivedContentItem} - content item object to be checked
 * @param zoneType {ZoneType} - type of zone into which the contentItem would be added
 * @returns {boolean} - true if contentItem is valid for zone
 */
export function dmIsValidContentItemForZone(contentItem: DmDerivedContentItem, zoneType: ZoneType): boolean;
/**
 * Return true if given contentItemType is valid for the given zone type.
 * This test assumes a fully Interactive zone, and is not limited to nonInteractive playlists.
 * For nonInteractive playlists,
 *  use {@link Helpers:ContentItems~dmIsValidContentItemTypeForPlaylist|dmIsValidContentItemTypeForPlaylist}.
 *
 * @param contentItemType {ContentItemType} - ContentItemType to be checked
 * @param zoneType {ZoneType} - type of zone into which the contentItem would be added
 * @returns {boolean} - true if contentItem is valid for zone
 */
export function dmIsValidContentItemTypeForZone(contentItemType: ContentItemType, zoneType: ZoneType): boolean;
export function dmIsValidContentItemTypeForMosaicZone(contentItemType: ContentItemType): boolean;
/**
 * Return true if given contentItem is valid for the given zone type.
 * This test assumes a nonInteractive zone.
 * For Interactive zones,
 *  use {@link Helpers:ContentItems~dmIsValidContentItemForZone|dmIsValidContentItemForZone}.
 *
 * @param contentItem {DmDerivedContentItem} - content item object to be checked
 * @param zoneType {ZoneType} - type of zone into which the contentItem would be added
 * @returns {boolean} - true if contentItem is valid for zone
 */
export function dmIsValidContentItemForPlaylist(contentItem: DmDerivedContentItem, zoneType: ZoneType): boolean;
/**
 * Return true if given contentItem is valid for the given zone type.
 * This test assumes a nonInteractive zone.
 * For Interactive zones,
 *  use {@link Helpers:ContentItems~dmIsValidContentItemTypeForZone|dmIsValidContentItemTypeForZone}.
 *
 * @param contentItemType {ContentItemType} - content item type to be checked
 * @param zoneType {ZoneType} - type of zone into which the contentItem would be added
 * @returns {boolean} - true if contentItem is valid for zone
 */
export function dmIsValidContentItemTypeForPlaylist(contentItemType: ContentItemType, zoneType: ZoneType): boolean;
export function dmIsValidContentItemTypeForMediaListOrPlayFile(contentItemType: ContentItemType, zoneType: ZoneType): boolean;
/**
 *
 * @param {ContentItemType} contentItemType
 * @param {ZoneType} zoneType
 * @param {ZoneType} currentZoneType
 * @returns {boolean}
 */
export function dmIsValidContentItemTypeForPlaylistChangeZoneType(contentItemType: ContentItemType, zoneType: ZoneType, currentZoneType: ZoneType): boolean;
/**
 * Given an object that is intended to be a variety of DmContentItemData, filter the object properties
 *  so that the object contains only the correct properties for the given ContentItemType.
 * @param {ContentItemType} contentItemType
 * @param {object | null | undefined} contentItemData
 * @return {DmContentItemData | null} null is returned if contentItemData has an unsupported type
 *  or is null or undefined
 */
export function dmFilterContentItemData(contentItemType: ContentItemType, contentItemData: object | null | undefined): DmContentItemData | null;
export function dmFilterPlayFileItemContentItemData(contentItemType: ContentItemType, contentItemData: object): DmPlayFileItemContentItemData | null;

/** @module Helpers:Zones */
export function dmIsVideoZoneType(zoneType: ZoneType): boolean;
export function dmIsPlayableVideoZoneType(zoneType: ZoneType): boolean;
export function dmIsAudioZoneType(zoneType: ZoneType): boolean;
export function dmZoneTypeUsesAudioDecoder(zoneType: ZoneType): boolean;
export function dmGetAudioDecoderCountForZoneType(zoneType: ZoneType): number;
export function dmGetAudioOutputAssignmentMapFromSpec(spec: DmAudioOutputAssignmentSpecification): DmAudioOutputAssignmentMap;
export function dmGetAudioOutputSpecificationFromMap(map: DmAudioOutputAssignmentMap): DmAudioOutputAssignmentSpecification;
/**
 * Return true if given zoneType is compatible with interactive zone content.
 * @param zoneType {ZoneType}
 * @returns {boolean}
 */
export function dmCanZoneTypeBeInteractive(zoneType: ZoneType): boolean;
/**
 * Return true if given zoneType is compatible with non-interactive zone content.
 * @param zoneType {ZoneType}
 * @returns {boolean}
 */
export function dmCanZoneTypeBeNonInteractive(zoneType: ZoneType): boolean;
export function dmIsVideoZoneLayer(zoneLayer: DmZoneLayer | null | undefined): zoneLayer is DmVideoZoneLayer;
export function dmIsMosaicModeSupportedByVideoZoneLayer(zoneLayer: DmVideoZoneLayer): boolean;
export function dmGetMaxDecoderSizeForVideoZoneLayer(zoneLayer: DmVideoZoneLayer): VideoDecoderSize;
export function dmGetVideoDecoderPropertiesForZoneLayer(layerProps: DmVideoZoneLayerProperties): Readonly<DmVideoDecoderProperties>;
export function dmGetVideoDecodersByModel(model: PlayerModel): Array<Readonly<DmVideoDecoderProperties>>;
export function dmGetMaxVideoZoneCountByDecoderByModel(model: PlayerModel, zoneLayerType: VideoZoneLayerType): number;

/** @module Helpers:Events */
/**
 * Options for setting data in DmEventData object.
 * @property [contentItemType] {ContentItemType | null} - ContentItemType of mediaState to which event will be added. If
 *  specified, this may be used to determine appropriate default EventData parameters.
 * @property [action] {EventIntrinsicAction | null} - If specified, this can be used to set event intrinsic action.
 * @property [interactive=false] {boolean} - Set to true if containing zone is in interactive mode. This is used only
 *  to determine default for certain event types (currently only Timer events.)
 */
export interface DmEventDataOptions {
    contentItemType?: ContentItemType | null;
    action?: EventIntrinsicAction | null;
    interactive?: boolean;
}
/**
 * Create a default DmEventData object for the given EventType. For certain EventData types (currently only
 *  EventType.Timer) a ContentItemType may be specified in the options parameter which will be used to set the
 *  appropriate default DmEventData parameters in accordance with the associated ContentItem.
 *  For example, the DmTimer timeout value for an Image ContentItem can be different than the default timeout value
 *  for an HTML Site ContentItem.
 *  Null is returned if the given EventType does not require EventData.
 * @param {EventType} eventType
 * @param {DmEventDataOptions} [options] - options for setting event defaults
 * @returns {DmEventData | null}
 */
export function dmCreateEventDataForEventType(eventType: EventType, options?: DmEventDataOptions): DmEventData | null;
/**
 * Create a default DmEventSpecification object for the given EventType. For certain EventData types (currently only
 *  EventType.Timer) a ContentItemType may be specified in the options object which will be used to set the
 *  appropriate default DmEventData parameters in accordance with the associated ContentItem.
 *  Null is returned if the given EventType does not require EventData.
 *  The options object can be used to specify other properties which affect default settings.
 * @param {EventType} eventType
 * @param {Partial<DmEventData> | null} [eventData] - if specified, supplied data properties will be set
 *  in the eventData structure
 * @param {DmEventDataOptions} [options] - options for setting event defaults
 * @returns {DmEventSpecification}
 */
export function dmCreateDefaultEventSpecificationForEventType(eventType: EventType, eventData?: Partial<DmEventData> | null, options?: DmEventDataOptions): DmEventSpecification;
/**
 * Given an eventState, return a simple DmEventSpecification.
 * @param eventState {DmEvent}
 * @returns {DmEventSpecification}
 */
export function dmGetEventSpecificationFromEventState(eventState: DmEvent): DmEventSpecification;
/**
 * Compare two eventSpecifications, return true if equal
 * @param eventSpecA - first eventSpec to compare
 * @param eventSpecB - second eventSpec to compare
 * @returns {boolean}
 */
export function dmDoEventSpecificationsMatch(eventSpecA: DmEventSpecification, eventSpecB: DmEventSpecification): boolean;
/**
 * Return true if the event specification is for an event that are only used as an
 *  intrinsic global event in MediaList states. These events are always ignored when selecting
 *  normal events for mediaStates.
 * @param eventSpec {DmEventSpecification}
 */
export function dmIsMediaListIntrinsicEvent(eventSpec: DmEventSpecification): boolean;
/**
 * Return default event type for a given ContentItem.
 * @param contentItem {DmDerivedContentItem}
 * @returns {EventType}
 */
export function dmGetDefaultEventTypeForInteractiveContentItem(contentItem: DmDerivedContentItem): EventType;
/**
 * Compare two event specifications and return true if they are considered functionally identical.
 * A mediaState is prohibited from containing two functionally identical events.
 * @param event1 {DmEventSpecification} - first event to compare
 * @param event2 {DmEventSpecification} - second event to compare
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmIsDuplicateEvent(event1: DmEventSpecification, event2: DmEventSpecification): BsDmTestResult;
/**
 * Compare two event specifications and return true if they are considered functionally identical because of duplicate
 *  event data.
 * A mediaState is prohibited from containing two functionally identical events.
 * This test is separated from dmIsDuplicateEvent: the former is used to disallow addition of an incorrect event type
 *  for types of which only one instance can be present.
 * This test is used after a user enters event data to validate the event.
 * @param event1 {DmEventSpecification} - first event to compare
 * @param event2 {DmEventSpecification} - second event to compare
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmIsDuplicateEventData(event1: DmEventSpecification, event2: DmEventSpecification): BsDmTestResult;
/**
 * Return true if the given event list does NOT an event that is considered a duplicate of the eventToTest.
 * @param eventList {DmEvent[]} - list of event objects to check for duplicates
 * @param eventToTest {DmEventSpecification} - event specification to check against list for duplicates
 * @param [eventIdToIgnore] {BsDmId} - if specified, the indicated event in the event list will be ignored
 *  for this test
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmEventListHasNoDuplicateEvent(eventList: DmEvent[], eventToTest: DmEventSpecification, eventIdToIgnore?: BsDmId): BsDmTestResult;
/**
 * Return success if given event specification is compatible with the given ContentItemType
 * @param event {DmEventSpecification} - event specification to check
 * @param contentItemType {ContentItemType}
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmIsEventCompatibleWithContentItem(event: DmEventSpecification, contentItemType: ContentItemType): BsDmTestResult;
/**
 * Return success if given target event specification is compatible with the given target ContentItemType
 * @param event {DmEventSpecification} - event specification to check
 * @param contentItemType {ContentItemType}
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmIsEventCompatibleWithTargetContentItem(event: DmEventSpecification, contentItemType: ContentItemType): BsDmTestResult;
/**
 * Return success if given event specification is compatible with the given PlayerModel.
 * @param event {DmEventSpecification} - event specification to check
 * @param playerModel {PlayerModel}
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 */
export function dmIsEventCompatibleWithPlayerModel(event: DmEventSpecification, playerModel: PlayerModel): BsDmTestResult;
/**
 * Return true if given EventType represent a TimeCode event
 * @param eventType {EventType}
 * @returns {boolean}
 */
export function dmIsTimeCodeEvent(eventType: EventType | null): boolean;
/**
 * Return DmBpEventAvailability object containing all possible BP inputs
 * @returns {DmBpEventAvailability}
 */
export function dmGetInitialBpAvailability(): DmBpEventAvailability;
/**
 * Return DmBpEventAvailability object showing BP event availability for the given event list.
 * Any BP buttons already used in BP events in the eventList are excluded.
 * @param eventList {DmEvent[]} - list of event states to check for BP event usage
 * @param [initialAvailability=[dmGetInitialBpAvailability()] {DmBpEventAvailability} - optional starting
 *  availability list. This can be used to serially compile availability from several event lists.
 *  Defaults to all buttons available.
 * @returns {DmBpEventAvailability}
 */
export function dmGetBpAvailabilityForEventList(eventList: DmEvent[], initialAvailability?: DmBpEventAvailability): DmBpEventAvailability;
/**
 * Return string array showing remote button availability for the given event list.
 * Any remote buttons already used in remote events in the eventList are excluded.
 * @param eventList {DmEvent[]} - list of event states to check for remote event usage
 * @param [initialAvailability=irRemoteButtonsList] {string[]} - optional starting availability list. This can be used
 *  to serially compile availability from several event lists. Defaults to all buttons available.
 * @returns {string[]}
 */
export function dmGetIrRemoteAvailabilityForEventList(eventList: DmEvent[], irRemoteButtonsList: string[]): string[];
/**
 * Return number array denoting the unused GPIO in all events in the given mediaState.
 *  Any GPIOs already used in the eventList are excluded.
 * @param eventList {DmEvent[]} - list of event states to check for BP event usage
 * @param gpioList {DmGpioList} - List of GPIOs configured in sign
 * @returns {number[]}
 */
export function dmGetGpioAvailabilityForEventList(eventList: DmEvent[], gpioList: DmGpioList): number[];
/**
 * Test data for keyboard event for validity.
 * @param data {string | null | undefined} - data to test
 * @returns {BsDmTestResult}
 */
export function dmIsValidKeyboardEventData(data: string | null | undefined): BsDmTestResult;

/** @module Helpers:Transitions */
export function dmCreateTransitionCondition(userVariableName: string, compareOperator: CompareOperator, compareValue1: DmParameterizedString | string, compareValue2?: DmParameterizedString | string): DmCondition;

/** @module Helpers:Commands */
export interface CommandDataParams {
    messageData?: string | DmParameterizedString;
    eol?: boolean;
    port?: string;
    volume?: number | DmParameterizedNumber;
    channel?: number;
    bpType?: BpType;
    bpIndex?: BpIndex;
    bpAction?: BpAction;
    buttonNumber?: number;
    connector?: AudioOutputName;
    connectorList?: AudioOutputName[];
    zoneId?: BsDmId;
    pluginId?: BsDmId;
    gpioNumber?: number;
    gpioState?: number;
    pauseTime?: number | DmParameterizedNumber;
    hexString?: string | DmParameterizedString;
    substituteSourceAddress?: boolean;
    beaconName?: string | DmParameterizedString;
    presentationId?: BsDmId | null;
    userVariableId?: BsDmId | string | null;
    userVariableValue?: string | DmParameterizedString;
    position?: BsRect;
    audioOutputAssignments?: DmAudioOutputAssignmentMap;
    audioOutputSpecification?: DmAudioOutputAssignmentSpecification;
    audioMode?: AudioMixModeType;
    dataFeedSourceId?: string;
    blcIndex?: BlcIndex;
    blcEffect?: BlcEffect;
    blcChannels?: number;
    blcEffectTime?: number;
    blcIntensity?: number;
    blcBlink?: BlcBlink;
    blcBreatheMin?: number;
    blcBreatheMax?: number;
    blcStrobeTime?: number;
    blcMarqueeTimeOn?: number;
    blcMarqueeTimeOff?: number;
    blcPlaybackMode?: BlcPlaybackMode;
    blcTransitionMode?: BlcTransitionMode;
    wssCommandName?: string;
    wssParameters?: Array<DmParameterizedString | string>;
    lightNumber?: number;
    wssParameter?: DmWssParameter;
    functionBlock?: string;
    function?: string;
    operator?: string;
    fields?: DmBmapField[];
}
/**
 * Create a DmCommandData object for the given command type.
 * @param type {CommandType}
 * @param [params] {CommandDataParams} - optional partial (or complete) object containing parameters for
 *  the specified command type. For any parameters not specified, default values will be used.
 *  For parameters that are parameterized strings or number, this structure can take either a string|number or
 *  a DmParameterizedString or DmParameterizedNumber. If a string or number is given, it is not parsed by
 *  this function - it is assumed to be a simple string. If parameterized strings or numbers are desired,
 *  they must be parsed into the corresponding DmParameterizedXXX object before calling this function.
 */
export function dmCreateCommandData(type: CommandType, params?: CommandDataParams): DmCommandData | null;
/**
 * Create a DmCommand object for the given command type.
 * @param name {string} - name for command
 * @param type {CommandType}
 * @param [params] {CommandDataParams} - optional partial (or complete) object containing parameters for
 *  the specified command type. For any parameters not specified, default values will be used.
 *  For parameters that are parameterized strings or number, this structure can take either a string|number or
 *  a DmParameterizedString or DmParameterizedNumber. If a string or number is given, it is not parsed by
 *  this function - it is assumed to be a simple string. If parameterized strings or numbers are desired,
 *  they must be parsed into the corresponding DmParameterizedXXX object before calling this function.
 */
export function dmCreateCommand(name: string, type: CommandType, params?: CommandDataParams): DmCommand;
/**
 * Create a DmTimedCommand object for the given command type. This is a DmCommand object with an associated
 *  startTime property, used for delivering commands after a time delay (e.g., from TimeCode events.)
 * @param name {string} - name for command
 * @param type {CommandType}
 * @param [startTime=0] {number} - time delay expressed in milliseconds
 * @param [params] {CommandDataParams} - optional partial (or complete) object containing parameters for
 *  the specified command type. For any parameters not specified, default values will be used.
 *  For parameters that are parameterized strings or number, this structure can take either a string|number or
 *  a DmParameterizedString or DmParameterizedNumber. If a string or number is given, it is not parsed by
 *  this function - it is assumed to be a simple string. If parameterized strings or numbers are desired,
 *  they must be parsed into the corresponding DmParameterizedXXX object before calling this function.
 */
export function dmCreateTimedCommand(name: string, type: CommandType, startTime?: number, params?: CommandDataParams): DmTimedCommand;
/**
 * (Type guard) Return true if given command is of type DmTimedCommand.
 * @param command {DmCommand} - command to test
 * @returns {boolean}
 */
export function dmIsTimedCommand(command: DmCommand | null): command is DmTimedCommand;
/**
 * (Type guard) Return true if given command data is for a zone command (i.e., has a zoneId property).
 * @param data {DmCommandData} - commandData to test
 * @returns {boolean}
 */
export function dmIsZoneCommandData(data: DmCommandData | null | undefined): data is DmZoneCommandData;
/**
 * (Type guard) Return true if given command data is for a dataFeedSource command
 *  (i.e., has a dataFeedSourceId property).
 * @param data {DmCommandData} - commandData to test
 * @returns {boolean}
 */
export function dmIsDataFeedSourceCommandData(data: DmCommandData | null | undefined): data is DmDataFeedSourceCommandData;
/**
 * (Type guard) Return true if given command data is for a plugin command (i.e., has a pluginId property).
 * @param data {DmCommandData} - commandData to test
 * @returns {boolean}
 */
export function dmIsPluginCommandData(data: DmCommandData | null | undefined): data is DmPluginCommandData;
/**
 * (Type guard) Return true if given command data is for a userVariable command (i.e., has a userVariableId property).
 * @param data {DmCommandData} - commandData to test
 * @returns {boolean}
 */
export function dmIsUserVariableCommandData(data: DmCommandData | null | undefined): data is DmUserVariableBaseCommandData;
/**
 * (Type guard) Return true if given command data is for a presentation command (i.e., has a presentationId property).
 * @param data {DmCommandData} - commandData to test
 * @returns {boolean}
 */
export function dmIsPresentationCommandData(data: DmCommandData | null | undefined): data is DmPresentationCommandData;
/**
 * Return true if given command is compatible with the given playerModel.
 * @param command {DmCommand} - command to test
 * @param playerModel
 * @returns {BsDmTestResult}
 */
export function dmIsCommandCompatibleWithPlayerModel(command: DmCommand, playerModel: PlayerModel): BsDmTestResult;
/**
 * Return test result validating a string as a valid byte sequence representation.
 * @param data {string} - string to be validated
 * @param [multipleBytes=true] - true (default) if bytes sequence string can contain more than one byte. If false,
 *  it is considered an error if there is more than one byte.
 * @returns {BsDmTestResult}
 */
export function dmIsValidByteSequenceString(data: string, multipleBytes?: boolean): BsDmTestResult;

/** @module Helpers:Validation */
/**
 * Return success if given event specification is compatible current sign state
 * @param dmState {DmState} - sign state
 * @param event {DmEventSpecification} - event specification to check
 * @param {BsDmId} [targetMediaStateId] - target mediaState for contentItem checks, etc. -
 *  this will not be checked if omitted or it is an invalid BsDmId OR BsDmIdNone
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmIsEventCompatibleWithSignState(dmState: DmState, event: DmEventSpecification, targetMediaStateId?: BsDmId | null): BsDmTestResult;
/**
 * Return success if given event specification can be added to a given mediaState.
 * @param {DmState} dmState - sign state
 * @param {DmEventSpecification} event - event specification to check
 * @param {BsDmId} mediaStateId - ID of mediaState in which event would be added
 * @param {BsDmId} [targetMediaStateId] - target mediaState for contentItem checks, etc. -
 *  this will not be checked if omitted or it is an invalid BsDmId OR BsDmIdNone. Note: if EventType is
 *  Synchronize, targetMediaState must be specified, or an exception will be thrown.
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmCanAddEventToMediaState(dmState: DmState, event: DmEventSpecification, mediaStateId: BsDmId, targetMediaStateId?: BsDmId | null): BsDmTestResult;
/**
 * Return success if given event specification can be updated for a given mediaState.
 * @param {DmState} dmState - sign state
 * @param {DmEventSpecification} newEvent - event specification to check
 * @param {BsDmId} mediaStateId - ID of mediaState in which event would be added
 * @param {BsDmId} eventId - ID of event in mediaState which will be updated
 * @param {BsDmId} [targetMediaStateId] - target mediaState for contentItem checks, etc. -
 *  this will not be checked if omitted or it is an invalid BsDmId OR BsDmIdNone.  Note: if EventType is
 *  Synchronize, targetMediaState must be specified, or an exception will be thrown.
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmCanUpdateEventToMediaState(dmState: DmState, newEvent: DmEventSpecification, mediaStateId: BsDmId, eventId: BsDmId, targetMediaStateId?: BsDmId | null): BsDmTestResult;
/**
 * Return success if given global event specification can be added to a given mediaList mediaState.
 * @param {DmState} dmState - sign state
 * @param {DmEventSpecification} event - event specification to check
 * @param {BsDmId} mediaListStateId - ID of mediaState in which event would be added -
 *  this must have a MediaList contentItem
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmCanAddGlobalEventToMediaList(dmState: DmState, event: DmEventSpecification, mediaListStateId: BsDmId): BsDmTestResult;
/**
 * Return success if given global event specification can be updated for a given mediaList mediaState.
 * @param {DmState} dmState - sign state
 * @param {DmEventSpecification} newEvent - event specification for updated event
 * @param {BsDmId} mediaListStateId - ID of mediaState in which event would be updated -
 *  this must have a MediaList contentItem
 * @param {BsDmId} eventId - ID of event in mediaState which will be updated
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmCanUpdateGlobalEventToMediaList(dmState: DmState, newEvent: DmEventSpecification, mediaListStateId: BsDmId, eventId: BsDmId): BsDmTestResult;
/**
 * Return success if given command is compatible with the current sign state.
 * @param dmState {DmState} - sign state
 * @param command {DmCommand} - command to test
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmIsCommandCompatibleWithSignState(dmState: DmState, command: DmCommand): BsDmTestResult;
/**
 * Return success if given command can be added or updated to a command sequence
 * @param dmState {DmState} - sign state
 * @param command {DmCommand} - command to test
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmCanAddOrUpdateCommand(dmState: DmState, command: DmCommand): BsDmTestResult;
/**
 * Test to find out if given gpioList (configuration) is compatible with all GPIO events and commands currently
 *  defined in the sign. Return error if any event or command in the sign is incompatible. The error will be
 *  returned as soon as the first incompatible event or command is detected.
 * @param dmState {DmState} - sign state
 * @param gpioList {DmGpioList} - GPIO configuration to test
 * @returns {BsDmTestResult} if result.ok === false, an error condition exists, as detailed by the result.error
 *  property
 */
export function dmIsGpioListCompatibleWithEventsAndCommands(dmState: DmState, gpioList: DmGpioList): BsDmTestResult;
export function dmIsIrRemoteControlCompatibleWithEvents(dmState: DmState, irRemoteConfiguration: BsIrRemoteControl): BsDmTestResult;
export function dmGetIrRemoteIncompatibleEvents(dmState: DmState, irRemoteConfiguration: BsIrRemoteControl): BsDmId[];
export function dmIsIrRemoteInConfigurationCompatibleWithEvents(dmState: DmState, irInConfiguration: DmIrInConfiguration): BsDmTestResult;
export function dmGetIrRemoteInConfigurationIncompatibleEvents(dmState: DmState, irRemoteInConfiguration: IrInConfigurationParams): BsDmId[];
export function dmIsIrRemoteOutConfigurationCompatibleWithCommands(dmState: DmState, irOutConfiguration: DmIrOutConfiguration): BsDmTestResult;
export function dmGetIrRemoteOutConfigurationIncompatibleCommands(dmState: DmState, irRemoteOutConfiguration: IrOutConfigurationParams): BsDmId[];

/** @module Helpers:DataFeed */
/**
 * Create a DataFeed specification for a remote DataFeed URL. If the data management values are undefined or null,
 *  they will be set to default values (300 and true) for new dataFeed sources, or the previous values for updated
 *  dataFeed sources.
 * @param url {string} - url string. This string can contain embedded user variable placeholder names in appropriate
 *  delimiters
 * @param usage {DataFeedUsageType}
 * @param [updateInterval=null] (number | null} - update interval in seconds
 * @param [useHeadRequest=null] {boolean | null} - true to optimize data feed retrieval using HEAD requests
 * @returns {DmRemoteDataFeedSourceSpecification}
 */
export function dmCreateRemoteDataFeedSpecification(url: string, usage: DataFeedUsageType, updateInterval?: number | null, useHeadRequest?: boolean | null): DmRemoteDataFeedSourceSpecification;
/**
 * Create a DataFeed specification for a BSN DataFeed assetItem. If the data management values are undefined or null,
 *  they will be set to default values (300 and true) for new dataFeed sources, or the previous values for updated
 *  dataFeed sources.
 * @param assetItem {BsAssetItem} - this must be a BSN DataFeed assetItem
 * @param usage {DataFeedUsageType}
 * @param [updateInterval=null] (number | null} - update interval in seconds
 * @param [useHeadRequest=null] {boolean | null} - true to optimize data feed retrieval using HEAD requests
 * @returns {DmBsnDataFeedSourceSpecification}
 */
export function dmCreateBsnDataFeedSpecification(assetItem: BsAssetItem, usage: DataFeedUsageType, updateInterval?: number | null, useHeadRequest?: boolean | null): DmBsnDataFeedSourceSpecification;
/**
 * Test data feed specification to determine if it is a BSN data feed specification.
 *
 * @param feedSpec {DmDataFeedSourceSpecification} - data feed specification object
 * @returns {boolean} - true if a BSN data feed specification
 */
export function dmIsBsnDataFeedSourceSpecification(feedSpec: DmDataFeedSourceSpecification): feedSpec is DmBsnDataFeedSourceSpecification;
/**
 * Test data feed specification to determine if it is a Remote data feed specification.
 *
 * @param feedSpec {DmDataFeedSourceSpecification} - data feed specification object
 * @returns {boolean} - true if a Remote data feed specification
 */
export function dmIsRemoteDataFeedSourceSpecification(feedSpec: DmDataFeedSourceSpecification): feedSpec is DmRemoteDataFeedSourceSpecification;

/** @module Helpers:HtmlSite */
/**
 * Typescript type guard: return true if given HtmlSite is a DmHostedHtmlSite.
 * @param htmlSite {DmHtmlSite}
 * @returns {boolean}
 */
export function dmHtmlSiteIsHostedHtmlSite(htmlSite: DmHtmlSite | null | undefined): htmlSite is DmHostedHtmlSite;
/**
 * Typescript type guard: return true if given HtmlSite is a DmRemoteHtmlSite.
 * @param htmlSite {DmHtmlSite}
 * @returns {boolean}
 */
export function dmHtmlSiteIsRemoteHtmlSite(htmlSite: DmHtmlSite | null | undefined): htmlSite is DmRemoteHtmlSite;

/**
 * Check a nodeApp, given it's ID, to find out if its data fully defines a node app, and whether it
 *  conforms to node app file naming constraints.
 * @param state {DmBsProjectState | DmState} - a DmState, or a DmBsProjectState object or an object
 *  containing a DmState object
 * @param nodeAppId {BsDmId | null | undefined}
 * @param [errorDetails] {BsDmEntityErrorDetails} - details about the entity being validated, for error report
 * @return {BsDmError} null if node app is valid.
 *  If node app is invalid, the first error encountered is returned.
 */
export function dmCheckNodeAppValidity(state: DmBsProjectState | DmState, nodeAppId: BsDmId | null | undefined, errorDetails?: BsDmEntityErrorDetails): BsDmError | null;

/** @module Helpers:LiveText */
export const DefaultLiveTextPosition: BsRect;
export interface LiveTextDataParams {
    text?: string;
    systemVariable?: SystemVariableType;
    assetId?: BsAssetId;
    userVariableId?: BsDmId;
    userVariableName?: string;
    element?: RssTextElementName;
    customFieldName?: string;
    index?: DmParameterizedNumber | number;
    title?: DmParameterizedString | string;
    groupId?: BsDmId;
}
export function dmCreateLiveTextItemData(type: LiveTextItemType | LiveTextEntityType, params?: LiveTextDataParams): DmLiveTextItemData;
export function dmGetLiveTextItemData(item: DmLiveTextItemData): DmLiveTextItemData | undefined;
export function dmGetLiveTextItemTextProperties(item: DmLiveTextItem): DmLiveTextItemTextProperties | null;
export function dmIsLiveTextDataTextContent(data: DmLiveTextItemData | null | undefined): data is DmLiveTextItemTextContentData;
export function dmIsLiveTextDataMediaCounter(data: DmLiveTextItemData | null | undefined): data is DmMediaCounterLiveTextItemData;
export function dmIsLiveTextDataUserVariable(data: DmLiveTextItemData | null | undefined): data is DmUserVariableLiveTextItemData;
export function dmIsLiveTextDataImageContent(data: DmLiveTextItemData | null | undefined): data is DmLiveTextItemImageContentData;
export function dmIsLiveTextDataFromDataFeed(data: DmLiveTextItemData | null | undefined): data is DmLiveTextItemFromDataFeed;
export function dmIsLiveTextDataTitledDataFeed(data: DmLiveTextItemData | null | undefined): data is DmTitledDataFeedLiveTextItemData;
export function dmIsLiveTextDataIndexedDataFeed(data: DmLiveTextItemData | null | undefined): data is DmIndexedDataFeedLiveTextItemData;
export function dmIsLiveTextItemGroupedDataFeedType(type: LiveTextItemType | null | undefined): boolean;
export function dmIsLiveTextDataGroupedDataFeedItem(data: DmLiveTextItemData | null | undefined): data is DmLiveTextItemGroupedDataFeedItemData;
export function dmIsLiveTextDataSimpleRss(data: DmLiveTextItemData | null | undefined): data is DmSimpleRssLiveTextItemData;
export function dmIsLiveTextDataMediaRss(data: DmLiveTextItemData | null | undefined): data is DmMediaRssLiveTextItemData;
export function dmIsLiveTextDataMediaRssMedia(data: DmLiveTextItemData | null | undefined): data is DmMediaRssMediaLiveTextItemData;
export type DmcGroupedLiveTextItem = DmcSimpleRssTextItem | DmcMediaRssTextItem | DmcMediaRssMediaItem;
export type DmcGroupedLiveTextItemTextOnly = DmcSimpleRssTextItem | DmcMediaRssTextItem;
export function dmIsDmcLiveTextItemGroupedDataFeedItem(item: DmcLiveTextItem | null | undefined): item is DmcGroupedLiveTextItem;
export interface DmLiveTextDmcItemMap {
    [itemId: string]: DmcLiveTextItem;
}
export interface DmLiveTextItemTextGroupMap {
    [groupId: string]: DmcGroupedLiveTextItemTextOnly[];
}
export interface DmLiveTextItemMediaGroupMap {
    [groupId: string]: DmcMediaRssMediaItem;
}
export interface DmLiveTextItemGroupDataFeedMap {
    [groupId: string]: DmcDataFeed[];
}
/**
 * @class
 * @classDesc The DmcLiveTextCanvas class represents a complete LiveTextCanvas, containing one or more LiveTextItems.
 *
 * This object should not be directly constructed by client code. This class is returned by
 *  {@link dmGetLiveTextCanvasById}.
 *
 * @property id {BsDmId} - LiveTextCanvas ID
 * @property backgroundColor {BsColor}
 * @property backgroundImageId {BsAssetId} - the ID of an image assetItem for the canvas background
 * @property backgroundAssetItem {BsAssetItem | null} - assetItem for the Background, corresponding to backgroundImageId
 * @property backgroundWidth {number} - width of canvas in pixels
 * @property backgroundHeight {number} - height of canvas in pixels
 * @property itemList {DmcLiveTextItem[]} - list of all enabled LiveTextItems, in layer order sequence
 * @property itemMap {DmLiveTextDmcItemMap} - map of all LiveTextItems keyed by item ID. Both enabled and
 *  disabled items are included in the map.
 * @property groupedTextItemMap {DmLiveTextItemTextGroupMap} - a map of all SimpleRss or MediaRss groups in the canvas,
 *  keyed by groupId. The value associated with each groupId is an array of objects of type
 *  DmcSimpleRssTextItem | DmcMediaRssTextItem, representing all text-based LiveTextItems in the group.
 *  Disabled items are included in this map.
 * @property dataFeedMap {DmLiveTextItemGroupDataFeedMap} - a map of all dataFeed lists for all groups in the canvas.
 *  The map key is the groupId, and the value is an array of DmcDataFeed representing the data feed list for that group.
 * @property hasMediaRssItems {boolean} This property will be true if the canvas has at least one MediaRss group.
 *  This can be used to limit MediaRss group addition beyond one group.
 */
export class DmcLiveTextCanvas implements DmLiveTextCanvas {
    readonly id: BsDmId;
    readonly backgroundColor: BsColor;
    readonly backgroundImageId: BsAssetId;
    readonly backgroundAssetItem: BsAssetItem | null;
    readonly backgroundWidth: number;
    readonly backgroundHeight: number;
    readonly itemList: DmcLiveTextItem[];
    readonly itemMap: DmLiveTextDmcItemMap;
    readonly groupedTextItemMap: DmLiveTextItemTextGroupMap;
    readonly groupedMediaItemMap: DmLiveTextItemMediaGroupMap;
    readonly dataFeedMap: DmLiveTextItemGroupDataFeedMap;
    get hasMediaRssItems(): boolean;
    constructor(canvas: DmLiveTextCanvas, itemMap: DmLiveTextDmcItemMap, groupedTextItemMap: DmLiveTextItemTextGroupMap, groupedMediaItemMap: DmLiveTextItemMediaGroupMap, dataFeedMap: DmLiveTextItemGroupDataFeedMap, backgroundAssetItem: BsAssetItem | null);
}
export class DmcLiveTextItem implements DmLiveTextItemBase {
    readonly id: BsDmId;
    readonly canvasId: BsDmId;
    readonly type: LiveTextItemType | undefined;
    readonly position: BsRect;
    readonly layerIndex: number;
    readonly hasTextProperties: boolean;
    get isGroupedDataFeedItem(): boolean;
    constructor(item: DmLiveTextItemBase, layerIndex: number);
}
export class DmcLiveTextItemWithTextContent extends DmcLiveTextItem implements DmLiveTextItemTextProperties {
    readonly widget: DmWidget;
    readonly textWidget: DmTextWidget;
    readonly useBackgroundColor: boolean;
    readonly hasTextProperties: boolean;
    constructor(item: DmLiveTextItemBase & DmLiveTextItemTextProperties, layerIndex: number);
}
export class DmcStaticLiveTextItem extends DmcLiveTextItemWithTextContent implements DmStaticLiveTextItem {
    readonly type: 'StaticText';
    readonly text: string;
    constructor(item: DmStaticLiveTextItem, layerIndex: number);
}
export function dmIsDmcLiveTextItemStaticTextItem(item: DmcLiveTextItem): item is DmcStaticLiveTextItem;
export class DmcSystemVariableLiveTextItem extends DmcLiveTextItemWithTextContent implements DmSystemVariableLiveTextItem {
    readonly type: 'SystemVariable';
    readonly variable: SystemVariableType;
    constructor(item: DmSystemVariableLiveTextItem, layerIndex: number);
}
export function dmIsDmcLiveTextItemSystemVariableItem(item: DmcLiveTextItem): item is DmcSystemVariableLiveTextItem;
export class DmcMediaCounterLiveTextItem extends DmcLiveTextItemWithTextContent implements DmMediaCounterLiveTextItem {
    readonly type: 'MediaCounter';
    readonly assetId: BsAssetId;
    readonly assetItem: BsAssetItem | null;
    constructor(item: DmMediaCounterLiveTextItem, layerIndex: number, assetItem: BsAssetItem | null);
}
export function dmIsDmcLiveTextItemMediaCounterItem(item: DmcLiveTextItem): item is DmcMediaCounterLiveTextItem;
export class DmcUserVariableLiveTextItem extends DmcLiveTextItemWithTextContent implements DmUserVariableLiveTextItem {
    readonly type: 'UserVariable';
    readonly userVariableIdOrName: BsDmId | string;
    readonly userVariable: DmcUserVariable | null;
    constructor(item: DmUserVariableLiveTextItem, layerIndex: number, userVariable?: DmUserVariable | null);
}
export function dmIsDmcLiveTextItemUserVariableItem(item: DmcLiveTextItem): item is DmcUserVariableLiveTextItem;
export class DmcImageLiveTextItem extends DmcLiveTextItem implements DmImageLiveTextItem {
    readonly type: 'Image';
    readonly assetId: BsAssetId;
    readonly assetItem: BsAssetItem | null;
    constructor(item: DmImageLiveTextItem, layerIndex: number, assetItem: BsAssetItem | null);
}
export function dmIsDmcLiveTextItemImageItem(item: DmcLiveTextItem): item is DmcImageLiveTextItem;
export class DmcTitledDataFeedTextItem extends DmcLiveTextItemWithTextContent implements DmTitledDataFeedLiveTextItem {
    readonly type: 'TitledDataFeed';
    readonly title: DmParameterizedString;
    readonly dataFeedId: BsDmId;
    readonly dataFeed: DmcDataFeed | null;
    constructor(item: DmTitledDataFeedLiveTextItem, layerIndex: number, dataFeedObjects: DmDataFeedEntityGroup | null);
}
export function dmIsDmcLiveTextItemTitledDataFeedItem(item: DmcLiveTextItem): item is DmcTitledDataFeedTextItem;
export class DmcIndexedDataFeedTextItem extends DmcLiveTextItemWithTextContent implements DmIndexedDataFeedLiveTextItem {
    readonly type: 'IndexedDataFeed';
    readonly index: DmParameterizedNumber;
    readonly dataFeedId: BsDmId;
    readonly dataFeed: DmcDataFeed | null;
    constructor(item: DmIndexedDataFeedLiveTextItem, layerIndex: number, dataFeedObjects: DmDataFeedEntityGroup | null);
}
export function dmIsDmcLiveTextItemIndexedDataFeedItem(item: DmcLiveTextItem): item is DmcIndexedDataFeedTextItem;
export class DmcSimpleRssTextItem extends DmcLiveTextItemWithTextContent implements DmSimpleRssLiveTextItemData {
    readonly type: 'SimpleRss';
    readonly element: RssTextElementName;
    readonly groupId: BsDmId;
    readonly displayTime: number;
    readonly enabled: boolean;
    dataFeeds: DmcDataFeed[];
    groupTextItems: DmcSimpleRssTextItem[];
    constructor(item: DmSimpleRssLiveTextItem, layerIndex: number, displayTime: number);
    getGroupTextItem(element: RssTextElementName): DmcSimpleRssTextItem | null;
}
export function dmIsDmcLiveTextItemSimpleRssItem(item: DmcLiveTextItem): item is DmcSimpleRssTextItem;
export class DmcMediaRssTextItem extends DmcLiveTextItemWithTextContent implements DmMediaRssLiveTextItemData {
    readonly type: 'MediaRssText';
    readonly element: RssTextElementName;
    readonly groupId: BsDmId;
    readonly enabled: boolean;
    readonly customFieldName: string | null;
    dataFeeds: DmcDataFeed[];
    groupTextItems: DmcMediaRssTextItem[];
    mediaItem: DmcMediaRssMediaItem;
    constructor(item: DmMediaRssLiveTextItem, layerIndex: number);
    getGroupTextItem(element: RssTextElementName, customFieldName?: string): DmMediaRssLiveTextItem | null;
}
export function dmIsDmcLiveTextItemMediaRssTextItem(item: DmcLiveTextItem): item is DmcMediaRssTextItem;
export class DmcMediaRssMediaItem extends DmcLiveTextItem implements DmMediaRssMediaLiveTextItemData {
    readonly type: 'MediaRssMedia';
    readonly groupId: BsDmId;
    readonly enabled: boolean;
    dataFeeds: DmcDataFeed[];
    groupTextItems: DmcMediaRssTextItem[];
    constructor(item: DmMediaRssMediaLiveTextItem, layerIndex: number);
    getGroupTextItem(element: RssTextElementName, customFieldName?: string): DmMediaRssLiveTextItem | null;
}
export function dmIsDmcLiveTextItemMediaRssMediaItem(item: DmcLiveTextItem): item is DmcMediaRssMediaItem;

/** @module Helpers:ParameterizedStrings */
/**
 * Created by jimsugg on 1/28/17.
 */
export function dmGetPsUvStartDelimiter(): string;
export function dmGetPsUvEndDelimiter(): string;
export function dmSetPsUvStartDelimiter(delim: string): void;
export function dmSetPsUvEndDelimiter(delim: string): void;
/**
 * Return a DmParameterizedString object representing a simple empty string
 *
 * @returns {DmParameterizedString}
 */
export function dmGetEmptyParameterizedString(): DmParameterizedString;
/**
 * Return true if the value of the parameterized string is simple text and is empty.
 * @param ps {DmParameterizedString}
 * @returns {boolean}
 */
export function dmIsEmptyParameterizedString(ps: DmParameterizedString): boolean;
/**
 * Return a DmParameterizedString object representing a simple string
 *
 * @param value {string} - A string to encapsulate in the DmParameterizedString object
 * @returns {DmParameterizedString}
 */
export function dmGetParameterizedStringFromString(value: string): DmParameterizedString;
/**
 * Resolve a given value into a DmParameterizedString based on it's type
 *
 * @param arg {DmParameterizedString | string | undefined} - value to resolve
 * @returns {DmParameterizedString}
 *    If argument a string, return a DmParameterizedString representing that string. Delimited user variable
 *     names will be included as placeholder names within the DmParameterizedString object.
 *    If argument is a valid DmParameterizedString object, return the argument
 *    If argument is undefined or any other type, return a DmParameterizedString representing an empty string
 */
export function dmResolveDmParameterizedString(arg: DmParameterizedString | string | undefined): DmParameterizedString;
/**
 * Return a DmParameterizedString object for a given parameterized string display string. The display string may
 *  have zero or more embedded user variable names, enclosed in delimiters. All such delimited names will be saved to
 *  the DmParameterizedString as a 'UserVariableName' element. This name is a placeholder. All such placeholders
 *  should be validated and mapped to user variable IDs using {@link dmValidateSignConsistency}.
 * @param {string} displayString - the display string for which to create the DmParameterizedString object
 * @return {DmParameterizedString}
 */
export function dmGetPlaceholderParameterizedStringFromDisplayString(displayString: string): DmParameterizedString;
/**
 * Create/initialize a DmParameterizedString representing a user variable parameter.
 *
 * @param uvId {BsDmId} - the ID of the user variable to represent
 * @returns {DmParameterizedString}
 */
export function dmGetParameterizedStringFromUserVariable(uvId: BsDmId): DmParameterizedString;
/**
 * Create/initialize a DmParameterizedString representing a user variable name placeholder parameter.
 *
 * @param name {string} - the name of the user variable to represent
 * @returns {DmParameterizedString}
 */
export function dmGetParameterizedStringFromUserVariableName(name: string): DmParameterizedString;
/**
 * Append a string to a DmParameterizedString.
 *
 * @param ps {DmParameterizedString} - the parameterized string on which to append the new string
 * @param value {string} - the string to append
 * @returns {DmParameterizedString}
 */
export function dmAppendStringToParameterizedString(ps: DmParameterizedString, value: string): DmParameterizedString;
/**
 * Append a user variable parameter to a DmParameterizedString.
 *
 * @param ps {DmParameterizedString} - the parameterized string on which to append the new user variable parameter
 * @param value {BsDmId} - the ID of the user variable to append as a parameter
 * @returns {DmParameterizedString}
 */
export function dmAppendUserVariableToParameterizedString(ps: DmParameterizedString, value: BsDmId): DmParameterizedString;
/**
 * Append a user variable parameter name placeholder to a DmParameterizedString.
 * Note that DmParameterizedString with user variable name placeholders should be validated and the placeholders
 *  replaced with IDs in order to have a valid project state.
 *
 * @param ps {DmParameterizedString} - the parameterized string on which to append the new user variable parameter
 * @param value {string} - the placeholder name of the user variable to append as a parameter
 * @returns {DmParameterizedString}
 */
export function dmAppendUserVariableNameToParameterizedString(ps: DmParameterizedString, value: string): DmParameterizedString;
/**
 * Check a variable to see if it is a valid DmParameterizedString object.
 * This checks to see if the object has the correct structure for a DmParameterizedString.
 * This is a Typescript type guard.
 *
 * @param ps {any} - the variable to check
 * @returns {boolean} true is variable is a valid DmParameterizedString
 */
export function dmIsValidParameterizedString(ps: any): ps is DmParameterizedString;
/**
 * Determine if all user variables in DmParameterizedString are valid and resolved. Parameterized strings can
 *  contain placeholder text for user variable names. To be valid, any placeholder names should be converted
 *  to the corresponding user variable ID. This method returns false if the input string contains any unconverted
 *  user variable placeholder names. The {@link dmResolveParameterizedStringUserVariables} method can be used to
 *  resolve placeholder names in DmParameterizedString objects.
 * @param {DmParameterizedString} ps - the parameterized string to validate
 * @return {DmParameterizedValueResolutionReport} If the DmParameterizedString contains no user variable
 *  placeholder names, the 'ok' property of the returned structure will be true. If the DmParameterizedString
 *  contains one or more placeholder names, 'ok' will be false, and the 'undefinedUserVariableNames' array
 *  property will contain all unresolved user variable names.
 */
export function dmAreParameterizedStringUserVariablesResolved(ps: DmParameterizedString): DmParameterizedValueResolutionReport;
/**
 * If the given parameterized string contains only a simple string (i.e., contains no user variable parameters),
 *  return the simple string
 *
 * @param ps {DmParameterizedString} - the parameterized string from which to extract the simple string
 * @returns {string | null} - the contained string, if the DmParameterizedString represents a simple,
 *  non-parameterized string -
 *  returns null if the DmParameterizedString contains any user variables
 */
export function dmGetSimpleStringFromParameterizedString(ps: DmParameterizedString): string | null;
/**
 * Return true if the given parameterized string is a simple string, with no user variable
 *  references or user variable placeholder names.
 * @param ps {DmParameterizedString} - the parameterized string to test
 * @returns {boolean}
 */
export function dmIsSimpleParameterizedString(ps: DmParameterizedString): boolean;
/**
 * Test two parameterized strings for equality.
 * @param {DmParameterizedString} ps1
 * @param {DmParameterizedString} ps2
 * @return {boolean}
 */
export function dmIsEqualParameterizedString(ps1: DmParameterizedString, ps2: DmParameterizedString): boolean;

/** @module Helpers:ParameterizedNumbers */
/**
 * Return a DmParameterizedNumber object representing a raw number
 *
 * @returns {DmParameterizedNumber}
 */
export function dmGetParameterizedNumberFromNumber(value: number): DmParameterizedNumber;
/**
 * Resolve a given value into a DmParameterizedNumber based on it's type
 *
 * @param arg {DmParameterizedNumber | number | undefined} - value to resolve
 * @returns {DmParameterizedNumber}
 *    If argument a number, return a DmParameterizedNumber representing that number
 *    If argument is a valid DmParameterizedNumber object, return the argument
 *    If argument is undefined or any other type, return a DmParameterizedNumber representing 0
 */
export function dmResolveDmParameterizedNumber(arg: DmParameterizedNumber | number | undefined): DmParameterizedNumber;
/**
 * Create/initialize a DmParameterizedNumber representing a user variable parameter.
 *
 * @param uvId {BsDmId} - the ID of the user variable to represent
 * @returns {DmParameterizedNumber}
 */
export function dmGetParameterizedNumberFromUserVariable(uvId: BsDmId): DmParameterizedNumber;
/**
 * Create/initialize a DmParameterizedNumber with a user variable placeholder name.
 * Note that a DmParameterizedNumber with user variable name placeholders should be validated and the placeholders
 *  replaced with IDs in order to have a valid project state.
 *
 * @param uvName {string} - the name of the user variable to represent
 * @returns {DmParameterizedNumber}
 */
export function dmGetParameterizedNumberFromUserVariableName(uvName: string): DmParameterizedNumber;
/**
 * Check a variable to see if it is a valid DmParameterizedNumber object.
 * This checks to see if the object has the correct structure for a DmParameterizedNumber.
 *
 * @param pn {DmParameterizedNumber} - the parameterized number to check
 * @returns {boolean} true is variable is a valid DmParameterizedNumber
 */
export function dmIsValidParameterizedNumber(pn: any): pn is DmParameterizedNumber;
/**
 * Determine if all user variables in DmParameterizedNumber are valid and resolved. Parameterized numbers can
 *  contain placeholder text for user variable names. To be valid, any placeholder names should be converted
 *  to the corresponding user variable ID. This method returns false if the value contains an unconverted
 *  user variable placeholder name. The {@link dmResolveParameterizedNumberUserVariables} method can be used to
 *  resolve placeholder names in DmParameterizedNumber objects.
 * @param {DmParameterizedNumber} pn - the parameterized number to validate
 * @return {DmParameterizedValueResolutionReport} If the DmParameterizedNumber does not contains a user variable
 *  placeholder name, the 'ok' property of the returned structure will be true. If the DmParameterizedNumber does
 *  contains a placeholder name, 'ok' will be false, and the 'undefinedUserVariableNames' array
 *  property will contain the unresolved user variable name.
 */
export function dmIsParameterizedNumberUserVariableResolved(pn: DmParameterizedNumber): DmParameterizedValueResolutionReport;
/**
 * If the parameterized number contains a numeric value, return it. If it contains a user variable reference,
 *  return null.
 * @param {DmParameterizedNumber} pn
 * @returns {number | null}
 */
export function dmGetNumberFromParameterizedNumber(pn: DmParameterizedNumber): number | null;
/**
 * Return true if the given parameterized number is a primitive number, and not a user variable
 *  reference or user variable placeholder name.
 * @param pn {DmParameterizedNumber} - the parameterized number to test
 * @returns {boolean}
 */
export function dmIsSimpleParameterizedNumber(pn: DmParameterizedNumber): boolean;
/**
 * Test two parameterized numbers for equality.
 * @param {DmParameterizedNumber} pn1
 * @param {DmParameterizedNumber} pn2
 * @return {boolean}
 */
export function dmIsEqualParameterizedNumber(pn1: DmParameterizedNumber, pn2: DmParameterizedNumber): boolean;

/** @module Helpers:Plugins */
/**
 * Check a script plugin, given it's ID, to find out if its data fully defines a plugin, and whether it
 *  conforms to plugin file naming constraints.
 * @param state {DmBsProjectState | DmState} - a DmState, or a DmBsProjectState object or an object
 *  containing a DmState object
 * @param pluginId {BsDmId | null | undefined}
 * @param [errorDetails] {BsDmEntityErrorDetails} - details about the entity being validated, for error report
 * @return {BsDmError} null if plugin is valid.
 *  If plugin is invalid, the first error encountered is returned.
 */
export function dmCheckScriptPluginValidity(state: DmBsProjectState | DmState, pluginId: BsDmId | null | undefined, errorDetails?: BsDmEntityErrorDetails): BsDmError | null;
/**
 * Check a parser plugin, given it's ID, to find out if its data fully defines a parser plugin, whether it.
 *  conforms to plugin file naming constraints, and whether the parser function name meet naming constraints.
 * @param state {DmBsProjectState | DmState} - a DmState, or a DmBsProjectState object or an object
 *  containing a DmState object
 * @param pluginId {BsDmId | null | undefined}
 * @param [errorDetails] {BsDmEntityErrorDetails} - details about the entity being validated, for error report
 * @return {BsDmError} null if plugin is valid.
 *  If plugin is invalid, the first error encountered is returned.
 */
export function dmCheckParserPluginValidity(state: DmBsProjectState | DmState, pluginId: BsDmId | null | undefined, errorDetails?: BsDmEntityErrorDetails): BsDmError | null;
/**
 * Check a videoMode plugin, given it's ID, to find out if its data fully defines a videoMode plugin, whether it.
 *  conforms to plugin file naming constraints, and whether the videoMode function name meet naming constraints.
 * @param state {DmBsProjectState | DmState} - a DmState, or a DmBsProjectState object or an object
 *  containing a DmState object
 * @param pluginId {BsDmId | null | undefined}
 * @param [errorDetails] {BsDmEntityErrorDetails} - details about the entity being validated, for error report
 * @return {BsDmError} null if plugin is valid.
 *  If plugin is invalid, the first error encountered is returned.
 */
export function dmCheckVideoModePluginValidity(state: DmBsProjectState | DmState, pluginId: BsDmId | null | undefined, errorDetails?: BsDmEntityErrorDetails): BsDmError | null;
/**
 * Check a BsAssetItem to see if it is a valid file that can be added as a script or parser plugin.
 *  To be valid, the file name must not be a duplicate of the script file used for any other plugin.
 * @param state {DmBsProjectState | DmState} - a DmState, or a DmBsProjectState object or an object
 *  containing a DmState object
 * @param newPluginAssetItem {BsAssetItem}
 * @param [ignoreId] {BsAssetId | null} - if specified, ignore this ID when checking for duplicate name
 * @param [errorDetails] {BsDmEntityErrorDetails} - details about the entity being validated, for error report
 * @return error {BsDmError | null} nu.ll will be returned if asset is valid. Other an error object
 *  is returned
 */
export function dmCheckNewScriptPluginFileValidity(state: DmBsProjectState | DmState, newPluginAssetItem: BsAssetItem | null, ignoreId?: BsAssetId | null, errorDetails?: BsDmEntityErrorDetails): BsDmError | null;
/**
 * Check parser plugin function parameters to see if they are valid so as to allow
 *  the plugin to be added as a parser script plugin.
 * @param state {DmBsProjectState | DmState} - a DmState, or a DmBsProjectState object or an object
 *  containing a DmState object
 * @param parseFeedFunctionName {string | null} - function name for data feed parser
 * @param parseUVFunctionName {string | null} - function name for data feed parser to user variables
 * @param userAgentFunctionName {string | null} - function name for user agent specification
 * @param [ignoreParserPluginId] {BsDmId | null} - if specified, ignore this plugin ID when checking
 *  for duplicate function names
 * @param [errorDetails] {BsDmEntityErrorDetails} - details about the entity being validated, for error report
 * @return error {BsDmError | null} null will be returned if asset is valid. Other an error object
 *  is returned
 */
export function dmCheckNewParserPluginFunctionValidity(state: DmBsProjectState | DmState, parseFeedFunctionName?: string | null, parseUVFunctionName?: string | null, userAgentFunctionName?: string | null, ignoreParserPluginId?: BsDmId | null, errorDetails?: BsDmEntityErrorDetails): BsDmError | null;
/**
 * Check videoMode plugin function parameters to see if they are valid so as to allow
 *  the plugin to be added as a videoMode script plugin.
 * @param state {DmBsProjectState | DmState} - a DmState, or a DmBsProjectState object or an object
 *  containing a DmState object
 * @param functionName {string | null} - function name for videoMode function
 * @param [ignoreVideoModePluginId] {BsDmId | null} - if specified, ignore this plugin ID when checking
 *  for duplicate function name
 * @param [errorDetails] {BsDmEntityErrorDetails} - details about the entity being validated, for error report
 * @return error {BsDmError | null} null will be returned if asset is valid. Other an error object
 *  is returned
 */
export function dmCheckNewVideoModePluginFunctionValidity(state: DmBsProjectState | DmState, functionName?: string | null, ignoreVideoModePluginId?: BsDmId | null, errorDetails?: BsDmEntityErrorDetails): BsDmError | null;

export interface DmPresentationTemplateSpecification {
    name: string;
    model: PlayerModel | string;
    videoMode: VideoMode | string;
    videoConnector: VideoConnectorType | string;
    monitorOrientation: MonitorOrientationType | string;
    zones: DmPresentationZoneTemplateSpecification[];
    htmlSites?: DmHtmlSiteTemplateSpecification[];
    nodeApps?: DmNodeAppTemplate[];
    linkedPresentations?: DmLinkedPresentationTemplate[] | null;
    scriptPlugins?: DmPluginTemplate[] | null;
    fullResGraphicsEnabled?: boolean;
    deviceWebPageDisplay?: DeviceWebPageDisplay;
    thumbnail?: BsLocalAssetThumbnail;
}
export interface DmTemplateVariableMap {
    [key: string]: string | BsAssetItem;
}
/**
 * Position rectangles should always be specified as percentage rectangles
 */
export interface DmPresentationZoneTemplateSpecification {
    name: string;
    tag: string;
    type: ZoneType;
    position: BsRect;
    nonInteractive: boolean;
    contents: DmContentItemTemplate[];
    events?: DmEventTemplate[];
}
export interface DmNodeAppTemplate {
    name: string;
    indexAssetItem: BsAssetItem | string;
}
export interface DmHtmlSiteTemplateBase {
    name: string;
    type: HtmlSiteType;
    queryString?: string;
}
/**
 * indexAssetItem may be a variable string, which should resolve to a BsAssetItem
 */
export interface DmHostedHtmlSiteTemplate extends DmHtmlSiteTemplateBase {
    type: 'Hosted';
    indexAssetItem: BsAssetItem | string;
    enableNode?: boolean;
}
export function dmIsHostedHtmlSiteTemplate(base: DmHtmlSiteTemplateBase): base is DmHostedHtmlSiteTemplate;
export interface DmRemoteHtmlSiteTemplate extends DmHtmlSiteTemplateBase {
    type: 'Remote';
    url: string;
}
export function dmIsRemoteHtmlSiteTemplate(base: DmHtmlSiteTemplateBase): base is DmRemoteHtmlSiteTemplate;
export type DmHtmlSiteTemplateSpecification = DmHostedHtmlSiteTemplate | DmRemoteHtmlSiteTemplate;
/**
 * assetItem may be a variable string, which should resolve to a BsAssetItem
 */
export interface DmContentItemTemplate {
    name: string;
    type: ContentItemType;
    assetItem?: BsAssetItem | string;
    data?: DmContentItemTemplateData;
}
export type DmContentItemTemplateData = DmMediaContentItemTemplateData | DmHtmlContentItemTemplateData | DmLiveVideoContentItemTemplateData | DmStreamContentItemTemplateData | {};
export interface DmMediaContentItemTemplateData {
    props: VideoContentItemProperties | AudioContentItemProperties | ImageContentItemProperties;
}
export interface DmLiveVideoContentItemTemplateData {
    props: LiveVideoContentItemProperties;
}
export interface DmHtmlContentItemTemplateData {
    htmlSiteName: string;
    props: HtmlContentItemProperties;
}
export interface DmStreamContentItemTemplateData {
    url: string;
    props: StreamContentItemProperties;
}
export interface DmEventTemplate {
    name: string;
    contentItemName: string;
    type: EventType;
    data?: DmEventData;
    commands?: DmCommandTemplate[];
}
export interface DmCommandTemplate {
    name: string;
    type: CommandType;
    params: CommandDataParams;
}
export interface DmLinkedPresentationTemplate {
    name: string;
    assetItem?: BsAssetItem | string;
}
export interface DmPluginTemplate {
    name: string;
    assetItem?: BsAssetItem | string;
}

export enum DmErrorType {
    unknownError = 0,
    unexpectedError = 1,
    invalidParameters = 2,
    invalidOperation = 3,
    apiError = 4,
    invalidSign = 5,
    pluginNameInUse = 6,
    parserPluginFunctionNameInUse = 7,
    userVariableNameNotFound = 8,
    assetNotFound = 9,
    eventNotCompatibleWithContentType = 10,
    eventDuplicated = 11,
    eventNotCompatibleWithPlayerModel = 12,
    eventCannotBeAddedToMediaSequenceItem = 13,
    eventActionIsIncompatible = 14,
    synchronizeEventNotCompatibleWithContentType = 15,
    synchronizeEventNotCompatibleWithPlayFileWhenEnhancedSynchronizationDisabled = 16,
    pluginEventRequiresDefinedPlugins = 17,
    gpioEventRequiresGpioInput = 18,
    commandNotCompatibleWithPlayerModel = 19,
    gpioCommandRequiresGpioOutput = 20,
    gpioConfigurationChangeCreatesInvalidEventsOrCommands = 21,
    irRemoteChangeCreatesInvalidEventsOrCommands = 22,
    nameNotSpecified = 23,
    valueNotSpecifiedOrInvalid = 24,
    duplicateNameNotAllowed = 25,
    eventDataMissing = 26,
    stringDataValueIsEmpty = 27,
    keyboardEventDataFormatIsIncorrect = 28,
    remoteEventDataFormatIsIncorrect = 29,
    byteStringCommandDataIsIncorrect = 30,
    userVariableNotSpecified = 31,
    userVariableIdInvalid = 32,
    userVariableNameNotDefined = 33,
    userVariableInputStringFormatIsIncorrect = 34,
    switchPresentationTargetNotSpecified = 35,
    dataFeedNotSpecified = 36,
    invalidDataFeedSource = 37,
    invalidHexString = 38,
    invalidUrlString = 39,
    linkedPresentationIdInvalid = 40,
    invalidContainerForPaste = 41,
    invalidPlugin = 42,
    invalidCustomPresentationWebPage = 43,
    superStateInitialStateInvalid = 44,
    superStateInitialStateCannotBeOnDemand = 45,
    noAudioDecodersAvailable = 46,
    contentTypeNotCompatibleWithZone = 47,
    irRemoteEventRequiresIrInSource = 48,
    videoModePluginFunctionNameInUse = 49,
    nodeAppNameInUse = 50,
    invalidNodeApp = 51
}
export interface BsDmTestResult {
    ok: boolean;
    error?: BsDmError;
}
export interface BsDmEntityErrorDetails {
    entityType?: DmEntityType | null;
    entityId?: BsDmId | null;
    entityProperty?: string | null;
}
export interface BsDmErrorDetails extends BsDmEntityErrorDetails {
    action?: BsDmBaseAction | null;
    functionName?: string | null;
}
export class BsDmError extends Error {
    name: string;
    type: DmErrorType;
    details: BsDmErrorDetails;
    get action(): BsDmBaseAction | null;
    set action(value: BsDmBaseAction | null);
    constructor(type: DmErrorType, reason?: string | null, details?: BsDmErrorDetails);
    attachAction(action: BsDmBaseAction | null): void;
}
export function dmIsBsDmError(error: Error): error is BsDmError;
export interface BsDmEntityValidationResult {
    ok: boolean;
    entityId: BsDmId;
    entityType: DmEntityType;
    errorList: BsDmError[];
    componentErrors: BsDmEntityValidationResult[] | null;
}
export function dmInitializeValidationResult(entityType: DmEntityType, entityId: BsDmId): BsDmEntityValidationResult;

/** @module Helpers:DmState */
export interface DmMap<T extends DmBaseObject> {
    [id: string]: T;
}
export interface DmIdSequenceMap {
    [id: string]: BsDmId[];
}
export interface DmValueMap<T> {
    [id: string]: T;
}
export type DmZoneMap = DmMap<DmZone> | {};
export type DmZoneLayerMap = DmMap<DmZoneLayer> | {};
export type DmZoneTagIndexMap = DmValueMap<number> | {};
export interface DmZoneCollectionState {
    zonesById: DmZoneMap;
    allZones: BsDmId[];
    zoneLayersById: DmZoneLayerMap;
    zoneLayerSequence: BsDmId[];
    zoneTagIndices: DmZoneTagIndexMap;
}
export type DmMediaStateMap = DmMap<DmMediaState> | {};
export type DmMediaStateSequenceMap = DmMap<DmMediaStateSequence> | {};
export interface DmMediaStateCollectionState {
    mediaStatesById: DmMediaStateMap;
    sequencesByParentId: DmMediaStateSequenceMap;
}
export type DmEventMap = DmMap<DmEvent> | {};
export type DmEventCollectionState = DmEventMap;
export type DmTransitionMap = DmMap<DmTransition> | {};
export type DmTransitionSequenceMap = DmMap<DmTransitionSequence> | {};
export interface DmTransitionCollectionState {
    transitionsById: DmTransitionMap;
    sequencesByEventId: DmTransitionSequenceMap;
}
export type DmCommandMap = DmMap<DmCommand> | {};
export type DmCommandSequenceMap = DmMap<DmCommandSequence> | {};
export interface DmCommandCollectionState {
    commandsById: DmCommandMap;
    sequencesById: DmCommandSequenceMap;
}
export type DmAssetIdMap = DmMap<BsAssetItem> | {};
export type DmAssetMapState = DmAssetIdMap;
export type DmHtmlSiteMap = DmMap<DmHtmlSite> | {};
export type DmHtmlSiteCollectionState = DmHtmlSiteMap;
export type DmNodeAppMap = DmMap<DmNodeApp> | {};
export type DmNodeAppCollectionState = DmNodeAppMap;
export type DmDataFeedMap = DmMap<DmDataFeed> | {};
export type DmDataFeedSourceMap = DmMap<DmDataFeedSource> | {};
export interface DmDataFeedCollectionState {
    feedsById: DmDataFeedMap;
    sourcesById: DmDataFeedSourceMap;
}
export type DmUserVariableMap = DmMap<DmUserVariable> | {};
export interface DmUserVariableCollectionState {
    variablesById: DmUserVariableMap;
    sequence: BsDmId[];
}
export type DmLiveTextItemMap = DmMap<DmLiveTextItem> | {};
export type DmLiveTextLayerSequenceMap = DmIdSequenceMap | {};
export type DmLiveTextDataFeedSequenceMap = DmMap<DmLiveTextDataFeedSequence> | {};
export type DmLiveTextCanvasMap = DmMap<DmLiveTextCanvas> | {};
export interface DmLiveTextCollectionState {
    itemsById: DmLiveTextItemMap;
    layersByCanvasId: DmLiveTextLayerSequenceMap;
    dataFeedsByGroupId: DmLiveTextDataFeedSequenceMap;
    canvasesById: DmLiveTextCanvasMap;
}
export type DmDeviceWebPageMap = DmMap<DmDeviceWebPage> | {};
export type DmDeviceWebPageCollectionState = DmDeviceWebPageMap;
export type DmScriptPluginMap = DmMap<DmBrightScriptPlugin> | {};
export type DmScriptPluginCollectionState = DmScriptPluginMap;
export type DmParserPluginMap = DmMap<DmParserBrightScriptPlugin> | {};
export type DmParserPluginCollectionState = DmParserPluginMap;
export type DmVideoModePluginMap = DmMap<DmVideoModeBrightScriptPlugin> | {};
export type DmVideoModePluginCollectionState = DmVideoModePluginMap;
export type DmAuxiliaryFileMap = DmMap<DmAuxiliaryFile> | {};
export type DmFileCollectionState = DmAuxiliaryFileMap;
export type DmLinkedPresentationMap = DmMap<DmLinkedPresentation> | {};
export type DmPresentationCollectionState = DmLinkedPresentationMap;
export type DmPartnerProductMap = DmMap<DmPartnerProduct> | {};
export type DmPartnerProductCollectionState = DmPartnerProductMap;
export type DmCustomAutorunState = BsAssetId;
export type DmThumbnailState = DmThumbnail | null;
/**
 * DmState is the Redux state shape for bsDataModel. It can be included in a larger Redux store. If so, it must be
 *  the value for a property named 'bsdm'. (The containing object must adhere to the interface {@link DmBsProjectState}.
 *  This will enable the complete containing state to be passed to selectors and thunked actions.
 * The internal properties of DmState are considered opaque and external users should not rely on any assumptions
 *  about its internal structure. The internal structure is subject to change at any time.
 * When creating the Redux store, you must apply the redux-thunk middleware
 * @interface DmState
 */
export interface DmState {
    sign: DmSignMetadata;
    zones: DmZoneCollectionState;
    mediaStates: DmMediaStateCollectionState;
    events: DmEventCollectionState;
    transitions: DmTransitionCollectionState;
    commands: DmCommandCollectionState;
    htmlSites: DmHtmlSiteCollectionState;
    nodeApps: DmNodeAppCollectionState;
    dataFeeds: DmDataFeedCollectionState;
    userVariables: DmUserVariableCollectionState;
    liveText: DmLiveTextCollectionState;
    deviceWebPages: DmDeviceWebPageCollectionState;
    scriptPlugins: DmScriptPluginCollectionState;
    parserPlugins: DmParserPluginCollectionState;
    videoModePlugins: DmVideoModePluginCollectionState;
    auxiliaryFiles: DmFileCollectionState;
    linkedPresentations: DmPresentationCollectionState;
    partnerProducts: DmPartnerProductCollectionState;
    customAutorun: DmCustomAutorunState;
    assetMap: DmAssetMapState;
    thumbnail: DmThumbnailState;
}
export type DmSignState = DmState;
/**
 * Type guard for DmState object.
 * @param value
 */
export function dmIsDmState(value: any): value is DmState;
/**
 * Base definition of an enclosing project state for a project containing the data model.
 * Client packages that create projects that use bsDataModel should extend this interface for a project
 *  object definition that includes other project data.
 */
export interface DmBsProjectState {
    bsdm: DmState;
}
export type DmIdSubstitutionMap = Map<BsDmId, BsDmId>;
export interface DmCopySetBase {
    contentType: DmCopySetContentType;
    version: string;
    containerId: BsDmId;
}
export interface DmCopySetWithAssetMap extends DmCopySetBase {
    assetMap: DmAssetMapState;
}
export interface DmCopySetWithDataFeeds extends DmCopySetWithAssetMap {
    dataFeeds: DmDataFeedCollectionState;
}
export interface DmMediaStateCopySet extends DmCopySetBase {
    mediaStates: DmMediaStateCollectionState;
    events: DmEventCollectionState;
    transitions: DmTransitionCollectionState;
    commands: DmCommandCollectionState;
    liveText: DmLiveTextCollectionState;
    htmlSites: DmHtmlSiteCollectionState;
    dataFeeds: DmDataFeedCollectionState;
    userVariables: DmUserVariableCollectionState;
    assetMap: DmAssetMapState;
    csInitialMediaStateId: BsDmId;
    zoneId: BsDmId;
    signId: BsDmId;
    nextMediaStateTagIndex: number;
}
export interface DmPlaylistMediaStateCopySet extends DmMediaStateCopySet {
    contentType: 'Playlist';
    plStartingMediaStateId: BsDmId;
    plLastTransitionId: BsDmId;
}
export interface DmLiveTextCopySet extends DmCopySetWithDataFeeds {
    contentType: 'LiveText';
    liveText: {
        itemsById: DmLiveTextItemMap;
        dataFeedsByGroupId: DmLiveTextDataFeedSequenceMap;
    };
}
export interface DmCommandCopySet extends DmCopySetBase {
    contentType: 'Command';
    commands: DmCommandCollectionState;
}
export interface DmUserVariableCopySet extends DmCopySetWithDataFeeds {
    contentType: 'UserVariable';
    userVariables: DmUserVariableCollectionState;
}
/**
 * Get DmState object from an enclosing project state.
 * This function depends on the assumption that:
 *   1. If the given state contains a 'bsdm' property, the value of that property is the DmState object.
 *   2. If the given state does not contain a 'bsdm' property,
 *      the given state is itself a DmState.
 *
 * @param state {DmBsProjectState | DmState} - project state or data model state
 * @returns {DmState} - returned DmState object
 */
export function dmFilterDmState(state: DmBsProjectState | DmState): DmState;
/**
 * Test given DmSignState object to determine if it represents a valid sign
 *
 * @param state {DmSignState} - state to test
 * @returns {BsDmError | null} null if sign valid, BsDmError object with message if sign is not valid
 */
export function dmCheckForInvalidDmSignState(state: DmSignState): BsDmError | null;

export type DmReducer = Reducer<DmState>;
export const bsDmReducer: Reducer<DmState>;

/**
 * Created by jsugg on 10/11/16.
 */
export type DmDispatch = Dispatch<DmState>;
/**
 * @interface BsDmBaseActionMetadata - additional action info
 * @property [dispatchList] {BsDmBaseAction[]} - array of simple actions dispatched if action was executed as a batch
 * @property [reason] {string} - if error === true, error reason
 */
export interface BsDmBaseActionMetadata {
    dispatchList?: BsDmBaseAction[];
    reason?: string;
}
/**
 * @interface BsDmBaseAction
 * @property type {string} - type of action
 * @property payload {{} | null} - action payload
 * @property [error] {boolean} - true if error encountered in action
 * @property [meta] {BsDmBaseActionMetadata}
 */
export interface BsDmBaseAction extends Action {
    type: string;
    payload: {} | null;
    error?: boolean;
    meta?: BsDmBaseActionMetadata;
}
export interface BsDmAction<T> extends BsDmBaseAction {
    payload: T;
}
export type BsDmActionCreator<T> = ActionCreator<BsDmAction<T>>;
export type BsDmThunkAction<T> = (dispatch: DmDispatch, getState: () => DmState, extraArgument: undefined) => BsDmAction<T>;
export type BsDmSpecificThunkAction<T> = (dispatch: DmDispatch, getState: () => DmState, extraArgument: undefined) => T;
export interface BsDmBatchAction extends Action {
    type: string;
    payload: BsDmBaseAction[];
}
/**
 * Return list of simple actions to dispatch in order to re-create action. It is assumed that the action
 *  passed as a parameter has already been dispatched, and will therefore be validated if necessary,
 *  If the action was a compound action which executed a batch of simple actions, all simple actions
 *  executed as part of the batch are included in the return array.
 *  If the action was a only single, simple action, the returned array will contain only that simple action.
 * @param action - an action that has already been dispatched, and therefore validated.
 * @returns {BsDmBaseAction[]}
 */
export function dmGetActionDispatchList(action: BsDmBaseAction): BsDmBaseAction[];

/** @module Actions:Sign */
export interface SignParams {
    id: BsDmId;
    name?: string;
    videoMode?: VideoMode;
    model?: PlayerModel;
    monitorOrientation?: MonitorOrientationType;
    monitorOverscan?: MonitorOverscanType;
    videoConnector?: VideoConnectorType;
    deviceWebPageDisplay?: DeviceWebPageDisplay;
    backgroundScreenColor?: BsColor;
    forceResolution?: boolean;
    tenBitColorEnabled?: boolean;
    dolbyVisionEnabled?: boolean;
    fullResGraphicsEnabled?: boolean;
    audioConfiguration?: AudioConfiguration;
    audioAutoLevel?: boolean;
    htmlEnableJavascriptConsole?: boolean;
    alphabetizeVariableNames?: boolean;
    autoCreateMediaCounterVariables?: boolean;
    resetVariablesOnPresentationStart?: boolean;
    networkedVariablesUpdateInterval?: number;
    delayScheduleChangeUntilMediaEndEvent?: boolean;
    language?: LanguageType;
    languageKey?: LanguageKeyType;
    flipCoordinates?: boolean;
    inactivityTimeout?: boolean;
    inactivityTime?: number;
    touchCursorDisplayMode?: TouchCursorDisplayModeType;
    udpDestinationAddressType?: UdpAddressType;
    udpDestinationAddress?: string;
    udpDestinationPort?: number;
    udpReceiverPort?: number;
    enableEnhancedSynchronization?: DmEnhancedSynchronization | null;
}
export type SignAction = BsDmAction<SignParams>;
export interface NewSignParams {
    signMetadata: DmSignMetadata;
    zoneLayerMap: DmZoneLayerMap;
    zoneLayerSequence: BsDmId[];
}
export type NewSignAction = BsDmAction<NewSignParams>;
/**
 * Return action to create a new, empty sign with the given parameters
 *
 * @param name {string} - name of the sign
 * @param [mode] {VideoMode} - default: user default, initial value = 1920x1080x60p
 * @param [model] {PlayerModel} - default: user default, initial value = PlayerModel.XT1143
 * @returns {NewSignAction}
 */
export function dmNewSign(name: string, mode?: VideoMode, model?: PlayerModel): NewSignAction;
/**
 * Return action to update sign properties with the given parameters
 * Sign properties include all scalar metadata (i.e., this doesn't include hardware configurations
 *  or Sign Component collections)
 *
 * @param params {SignParams} - sign property parameters to update
 * @returns SignAction object
 */
export function dmUpdateSignProperties(params: SignParams): SignAction;
export interface SerialPortListParams {
    serialPortList: DmSerialPortList;
}
export type SerialPortListAction = BsDmAction<SerialPortListParams>;
/**
 * Return action to update one or more of the eight DmSerialPortConfiguration objects associated with the sign.
 * Note that only the serial port configuration objects included in the list will be updated - all serial
 *  port configurations do NOT have to be contained in this list (but can be)
 *  The port to be updated is specified by the port property of the DmSerialPortConfiguration object
 *
 * @param params {SerialPortListParams} - object containing an array of one or more DmSerialPortConfiguration objects
 *  for ports to update
 * @returns {SerialPortListAction}
 */
export function dmUpdateSignSerialPorts(params: SerialPortListParams): SerialPortListAction;
export interface GpioListParams {
    gpioList: DmGpioList;
}
export type GpioListAction = BsDmAction<GpioListParams>;
/**
 * Return action to update the GpioList object associated with the sign.
 * Note that the array must have specifications for all eight Gpio connections - partial updates
 *  are not possible in this action.
 * If the GPIO reconfiguration makes any existing events or commands invalid, all such events and commands
 *  will be deleted.
 *
 * @param params {GpioListParams} - object containing an array of GPIO specification strings
 *  (either GpioType.Input or GpioType.Output)
 * @returns {BsDmThunkAction<GpioListParams>}
 */
export function dmUpdateSignGpio(params: GpioListParams): BsDmThunkAction<GpioListParams>;
export interface ButtonPanelMapParams {
    buttonMap: DmButtonPanelMap;
}
export type ButtonPanelMapAction = BsDmAction<ButtonPanelMapParams>;
/**
 * Return action to update one or more of the DmBpConfiguration objects associated with the sign.
 * Note that only the button panel configuration objects included in the list will be updated - all button panel
 *  configurations do NOT have to be contained in the map (but can be)
 * The button panel to be updated is specified by the key of the DmBpConfiguration object in the map
 * Valid BP names are the strings associated with the ButtonPanelName enum:
 *   ['bp900a','bp900b','bp900c','bp200a','bp200b','bp200c']
 *
 * @param params {ButtonPanelMapParams} - object containing a map of one or more DmBpConfiguration objects to update
 * @returns {ButtonPanelMapAction}
 */
export function dmUpdateSignButtonPanelMap(params: ButtonPanelMapParams): ButtonPanelMapAction;
export type IrInConfigurationAction = BsDmAction<IrInConfigurationParams>;
export interface IrInConfigurationParams {
    irInConfiguration: DmIrInConfiguration;
}
/**
 * Return action to update the IrInConfiguration object associated with the sign.
 *
 * @param params {IrInConfigurationParams} - configuration object for IR Input
 * @returns {BsDmThunkAction<IrInConfigurationParams>}
 */
export function dmUpdateSignIrInConfiguration(irInConfiguration: IrInConfigurationParams): BsDmThunkAction<IrInConfigurationParams>;
export type IrOutConfigurationAction = BsDmAction<IrOutConfigurationParams>;
export interface IrOutConfigurationParams {
    irOutConfiguration: DmIrOutConfiguration;
}
/**
 * Return action to update the IrOutConfiguration object associated with the sign.
 *
 * @param params {IrOutConfigurationParams} - configuration object for IR Output
 * @returns {BsDmThunkAction<IrOutConfigurationParams>}
 */
export function dmUpdateSignIrOutConfiguration(irOutConfiguration: IrOutConfigurationParams): BsDmThunkAction<IrOutConfigurationParams>;
export type IrRemoteControlAction = BsDmAction<BsIrRemoteControl>;
/**
 * Update the ir remote associated with the sign.
 * Configuration object includes the id, the encoding, the manufacturer's code,
 * and a table of button specs (button code to button description)
 * @param {BsIrRemoteControl} params
 * @returns {BsDmThunkAction<IrRemoteControlAction>}
 */
export function dmUpdateSignIrRemoteControl(irRemoteConfiguration: BsIrRemoteControl): BsDmThunkAction<IrRemoteControlAction>;
export interface AudioSignPropertyMapParams {
    audioSignMap: DmAudioSignPropertyMap;
}
export type AudioSignPropertyMapAction = BsDmAction<AudioSignPropertyMapParams>;
/**
 * Return action to update one or more of the DmAudioSignProperties objects associated with the sign.
 * Note that only the audio sign property objects included in the list will be updated - all audio
 *  property objects do NOT have to be contained in the map (but can be)
 * The audio output to be updated is specified by the key of the DmAudioSignProperties object in the map
 * Valid audio names are the strings associated with the AudioOutputName enum:
 *   ['analog1','analog2','analog3','usbA','usbB','usbC','usbD','hdmi','spdif','usbTypeA','usbTypeC',
 *    'usb700_1','usb700_2','usb700_3','usb700_4','usb700_5','usb700_6','usb700_7',
 *    'usb_1', 'usb_2', 'usb_3', 'usb_4', 'usb_5', 'usb_6']
 *
 * @param params {AudioSignPropertyMapParams} - object containing a map of one or more DmAudioSignProperties
 *  objects to update
 * @returns {AudioSignPropertyMapAction}
 */
export function dmUpdateSignAudioPropertyMap(params: AudioSignPropertyMapParams): AudioSignPropertyMapAction;
export type WssDeviceSpecAction = BsDmAction<WssDeviceSpec>;
export function dmUpdateSignWssDeviceSpec(wssDeviceSpec: WssDeviceSpec): WssDeviceSpecAction;
export function dmClearSignWssDeviceSpec(): BsDmAction<null>;
export interface OpenSignParams {
    newState: DmSignState;
}
export type OpenSignAction = BsDmAction<OpenSignParams>;
/**
 * Return action to set state to a new sign from a given DmSignState object.
 * This function returns a simple action which is batch-able (using redux-batch-actions.)
 * It does not validate the DmSignState parameter shape. Clients should validate the DmSignState parameter
 *  before creating this action. Validation can be done using dmCheckForInvalidDmSignState.
 * Given a valid DmSignState, this function will update older version states to conform to the current version
 *  specifications.
 *
 * @param newState {DmSignState} - state object for new sign
 * @returns {OpenSignAction}
 */
export function dmOpenSign(newState: DmSignState): OpenSignAction;
/**
 * Return thunk which resolves with action to set state to a new sign from a given DmSignState object.
 * The thunk validates the DmSignState parameter and throws an error if the
 *  given DmSignState is not valid.
 * Given a valid DmSignState, this function will update older version states to conform to the current version
 *  specifications.
 *
 * @param newState {DmSignState} - state object for new sign
 * @returns {BsDmThunkAction<OpenSignParams>}
 */
export function dmVerifyAndOpenSign(newState: DmSignState): BsDmThunkAction<OpenSignParams>;
export interface ScaleRectangleParams {
    increase: boolean;
    scaleFactorX: number;
    scaleFactorY: number;
}
export type ScaleRectangleAction = BsDmAction<ScaleRectangleParams>;
/**
 * Scale all rectangles in the sign by the given scale factors. Scale factor can be different for horizontal (x)
 *  and vertical (y) dimensions.
 * @param increase {boolean} - true to scale larger, false to scale smaller
 * @param scaleFactorX {number}
 * @param [scaleFactorY=scaleFactorX] {number}
 * @returns {ScaleRectangleAction}
 */
export function dmScaleSignRectangles(increase: boolean, scaleFactorX: number, scaleFactorY?: number): ScaleRectangleAction;

/** @module Actions:SignTemplate */
export interface NewSignFromTemplateParams {
    id: BsDmId;
    name: string;
    videoMode: VideoMode;
    model: PlayerModel;
    videoConnector: VideoConnectorType;
    monitorOrientation: MonitorOrientationType;
}
export type NewSignFromTemplateAction = BsDmAction<NewSignFromTemplateParams>;
export function dmNewSignFromTemplateSpecification(spec: DmPresentationTemplateSpecification, vars?: DmTemplateVariableMap): BsDmThunkAction<NewSignFromTemplateParams>;

/** @module Actions:Zone */
/**
 * @interface ZoneAddInputParams - optional parameters used when adding a zone. Default values are used
 *  if a property is not specified.
 * @property [position] {BsRect} - position and size of zone rectangle on the output display
 * @property [nonInteractive] {boolean} - true if the zone is intended to be a non-interactive zone
 * @property [zoneLayerIdParams] {DmZoneLayerIdParams} - specification of zone layer(s) to be used for the zone
 * @property [allowTransitionToMosaic] {boolean} - true if the zone can be changed to a mosaicMode zone (this is
 *  only applicable to video zones)
 * @property [allowDisabledAudio] {boolean} - for video zones, true if audio can be automatically disabled if
 *  all audio decoders are in use. If this is false, and there is not an available audio decoder, dmAddZone
 *  will throw an exception. If not specified, it is assumed to be true, and audio will be disabled if necessary.
 */
export interface ZoneAddInputParams {
    nonInteractive?: boolean;
    position?: BsRect;
    zoneLayerIdParams?: DmZoneLayerIdParams;
    allowTransitionToMosaic?: boolean;
    allowDisabledAudio?: boolean;
}
export interface ZoneAddParams {
    id: BsDmId;
    zone: DmZone;
    zoneLayerMap: DmZoneLayerMap;
}
export type ZoneAddAction = BsDmAction<ZoneAddParams>;
/**
 * Add a zone to the sign. This function checks to make sure a zone of the requested type can be added,
 *  and throws an error if the current player doesn't allow additional zones of that type.
 *
 * @param name {string} - Name for the new zone
 * @param type {ZoneType} - type of zone to add
 * @param tag {string} - short tag string for zone identification (e.g., 'V1', 'A1')
 * @param [params] {ZoneAddInputParams} - optional properties - use defaults if not specified
 * @returns {BsDmThunkAction<ZoneAddParams>}
 *
 */
export function dmAddZone(name: string, type: ZoneType, tag: string, params?: ZoneAddInputParams): BsDmThunkAction<ZoneAddParams>;
/**
 * Add a zone with an automatically selected type, based on existing zones.
 *
 * @param name {string} - Name for the new zone
 * @param tag {string} - short tag string for zone identification (e.g., 'V1', 'A1')
 * @param [params] {ZoneAddInputParams} - optional properties - use defaults if not specified
 * @returns {BsDmThunkAction<ZoneAddParams>}
 */
export function dmAddDefaultZone(name: string, tag: string, params?: ZoneAddInputParams): BsDmThunkAction<ZoneAddParams>;
export interface ZoneParams {
    id: BsDmId;
    name?: string;
    type?: ZoneType;
    tag?: string;
    nonInteractive?: boolean;
    initialMediaStateId?: BsDmId;
    position?: BsRect;
}
export interface ZoneChangeParams extends ZoneParams {
    properties: ZonePropertyParams;
}
export interface ZoneUpdateParams {
    zoneParams: ZoneParams | ZoneChangeParams;
    zoneLayerMap: DmZoneLayerMap | null;
}
export type ZoneUpdateAction = BsDmAction<ZoneUpdateParams>;
/**
 * Update the properties for a given zone.
 * This action creator can be used to change the type of a zone, if the new zone type is compatible with existing
 *  media states within the zone. If it is not, the action will be rejected.
 * If the zone type is changed, the zone specific properties referenced by the 'properties' key will be
 *  updated such that they are appropriate for the new zone. All new zone specific properties will be set
 *  to default values, but values for any properties that existed in the previous zone type will be carried over.
 *
 * If an attempt is made to set the initialMediaState to a state ID representing a state that is not within the zone,
 *  a BsDmError will be thrown.
 *
 * @param zoneParams {ZoneParams} - parameters that specify desired updates. Note that the 'properties' property, which
 *  is the key for an object holding zone-specific properties, cannot be specified as a parameter here.
 *  Use {@link dmUpdateZoneProperties} to update zone specific properties.
 * @param layerParams {DmZoneTargetParams} - if changing zone type, this structure specifies desired zoneLayer
 *  target information for the new zone type. This is used to update the zoneLayer map for any zones that are added to
 *  or removed from various zone layers as part of the type change.
 * @returns {BsDmThunkAction<ZoneUpdateParams>}
 */
export function dmUpdateZone(zoneParams: ZoneParams, layerParams?: DmZoneTargetParams): BsDmThunkAction<ZoneUpdateParams>;
export type AudioZonePropertyParams = Partial<DmAudioZoneProperties>;
export type EnhancedAudioZonePropertyParams = Partial<DmEnhancedAudioZoneProperties>;
export type ImageZonePropertyParams = Partial<DmImageZoneProperties>;
export type VideoZonePropertyParams = Partial<DmVideoZoneProperties>;
export type VideoOrImagesZonePropertyParams = Partial<DmVideoOrImagesZoneProperties>;
export interface TickerZonePropertyParams {
    textWidget?: Partial<DmTextWidget>;
    widget?: Partial<DmWidget>;
    scrollSpeed?: number;
    backgroundAsset?: BsAssetItem;
    fontAsset?: BsAssetItem;
}
export interface ClockZonePropertyParams {
    displayTime?: boolean;
    rotation?: RotationType;
    widget?: Partial<DmWidget>;
    backgroundAsset?: BsAssetItem | null;
    fontAsset?: BsAssetItem | null;
}
export type ZonePropertyParams = AudioZonePropertyParams | EnhancedAudioZonePropertyParams | ImageZonePropertyParams | VideoZonePropertyParams | VideoOrImagesZonePropertyParams | TickerZonePropertyParams | ClockZonePropertyParams;
export type ZonePropertyParamsWithBackground = TickerZonePropertyParams | ClockZonePropertyParams;
export type ZonePropertyParamsWithBackgroundAndFont = TickerZonePropertyParams | ClockZonePropertyParams;
export interface ZonePropertyUpdateParams {
    id: BsDmId;
    type: ZoneType;
    properties: ZonePropertyParams;
}
export type ZonePropertyUpdateAction = BsDmAction<ZonePropertyUpdateParams>;
/**
 * Update zone-specific properties for a given zone.
 * Each zone type has a specific set of properties unique to the zone type. This action is used to update one or
 *  more of the zone-specific properties for the given zone. It is not necessary to specify the entire
 *  set of zone-specific properties - only the ones that need to be changed.
 *
 * The zone type for the given property object must be explicitly included as part of the input parameters.
 *  If this type does not match the given zone ID, the action will be rejected.
 *
 * @param params {ZonePropertyUpdateParams} - parameters specifying the zone ID, the zone type, and a object
 *  containing one or more updated values for the set of zone specific properties for the zone type.
 *
 *  For zones that contain a DmWidget object, if the optional backgroundAsset property specifies an image BsAssetItem,
 *  that AssetItem become the new background image for the widget. Note that the backgroundBitmapAssetId
 *  property in DmWidget is always ignored: the caller must specify a BsAssetItem in the backgroundAsset
 *  property ro set or change the background.
 *
 *  To leave the background bitmap image unchanged, do not include backgroundAsset in the parameter list.
 *  To delete a background image from DmWidget, specify null for backgroundAsset.
 *
 *  Similarly, a custom font file can be specified for a DmWidget object in zone properties, by supplying
 *   a BsAssetItem for the custom font file in the fontAsset property. Specify null for this property to revert
 *   the font to the standard system font.
 *
 * @returns {BsDmThunkAction<ZonePropertyUpdateParams>}
 */
export function dmUpdateZoneProperties(params: ZonePropertyUpdateParams): BsDmThunkAction<ZonePropertyUpdateParams>;
/**
 * Update AudioOutputAssignment map for a given audio or video zone, based on the provided
 *  audioOutputSpecification. Note that the audioOutputSpecification is a simplified audio map, in which the
 *  assignment for all USB based outputs is specified as a single value.
 * This function will throw an exception if the given zone ID does not specify an audio or video zone.
 * @param id - zone ID
 * @param audioOutputSpec
 * @returns {BsDmThunkAction<ZonePropertyUpdateParams>}
 */
export function dmUpdateZoneAudioOutputAssignments(id: BsDmId, audioOutputSpec: DmAudioOutputAssignmentSpecification): BsDmThunkAction<ZonePropertyUpdateParams>;
export interface ZoneDeleteParams extends MediaStateDeleteParams {
    zoneId: BsDmId;
}
export type ZoneDeleteAction = BsDmAction<ZoneDeleteParams>;
/**
 * Delete a zone from the sign.
 * All media states contained within the zone, along with any events and transitions contained
 *  within those media states, will also be deleted. The ZoneDeleteParams object returned as the payload within
 *  the returned ZoneDeleteAction contains lists of IDs of all deleted media states, events, and transitions.
 *
 * @param id {BsDmId} - ID of zone to delete
 * @returns {BsDmThunkAction<ZoneDeleteParams>}
 */
export function dmDeleteZone(id: BsDmId): BsDmThunkAction<ZoneDeleteParams>;
/**
 * Clear a given zone by deleting all mediaStates in the zone, along with their associated events,
 *  transitions, and commands.
 * @param id {BsDmId} - ID of zone to clear
 * @returns {BsDmThunkAction<MediaStateDeleteAction>}
 */
export function dmClearZone(id: BsDmId): BsDmThunkAction<MediaStateDeleteParams>;
export interface ZoneLayersMoveAtIndicesParams {
    indices: number[];
    targetIndex: number;
}
export type ZoneLayersMoveAtIndicesAction = BsDmAction<ZoneLayersMoveAtIndicesParams>;
export function dmMoveZoneLayersAtIndices(indices: number[] | number, targetIndex: number): ZoneLayersMoveAtIndicesAction;
export interface MosaicZonesMoveAtIndicesParams {
    layerId: BsDmId;
    indices: number[];
    targetIndex: number;
}
export type MosaicZonesMoveAtIndicesAction = BsDmAction<MosaicZonesMoveAtIndicesParams>;
export function dmMoveMosaicZonesAtIndices(layerId: BsDmId, indices: number[] | number, targetIndex: number): MosaicZonesMoveAtIndicesAction;

/** @module Actions:MediaState */
export interface MediaStateParams {
    id: BsDmId;
    name?: string;
    tag?: string | null;
    container?: DmMediaStateContainer;
    contentItem?: DmDerivedContentItem;
    zoneId?: BsDmId;
}
export type MediaStateAction = BsDmAction<MediaStateParams>;
export interface SequencedMediaStateAddParams extends MediaStateParams {
    index: number;
}
export type SequencedMediaStateAddAction = BsDmAction<SequencedMediaStateAddParams>;
/**
 * Return action to add a MediaState given a content item or an assetItem.
 * To add a state with a MediaContentItem (i.e., a media file), supply an AssetItem as the content parameter.
 * To add a state with a non-media ContentItem, supply the ContentItem directly as the content parameter,
 *
 * @param name {string | null} - name for the state - if null or empty, default name will be supplied.
 * @param container {DmMediaStateContainer} - container for the state
 * @param content {DmMediaStateContentItemSpecification} - the content
 *  for the state
 * @param [contentData=default values] {DmContentItemData} - contains values for one or more contentItem
 *  properties. This can be used to set ancillary contentItem properties when the 'content' param
 *  is an assetItem.
 * @param [index] {number} - if defined, the added mediaState will be added as a sequenced mediaState at the specified
 *  sequence index. If index = -1, the state is appended to the sequence.
 * @param [contentAdditionalAsset] {DmNonMediaContentAdditionalAssetData} - Certain contentItem types hold
 *  one or more additional asset properties. This object holds the specification for such assets.
 *  Example: PlayFile contentItem holds a defaultMedia assetId. The assetItem for these assets can be supplied
 *  by this property. This parameter is ignored for ContentItem types that do not hold such an additional assetItem.
 * @returns {BsDmThunkAction<MediaStateAction>}
 *  When dispatched, the thunk function will return a MediaStateAction object.
 *  If the thunk function succeeds, the action properties returned will be the ones used, including a completed
 *   contentItem, if one was generated for the BsAssetItem.
 *  If the function fails, a BsDmError is thrown, with the action attached.
 */
export function dmAddMediaState(name: string | null, container: DmMediaStateContainer, content: DmMediaStateContentItemSpecification, contentData?: Partial<DmContentItemData> | null, index?: number | null, contentAdditionalAsset?: DmNonMediaContentAdditionalAssetData | null): BsDmThunkAction<MediaStateParams | SequencedMediaStateAddParams>;
/**
 * Add a mediaState with a LiveText contentItem. This action creator also creates the
 *  associated LiveText canvas in the dataModel state.
 * @param name {string | null} - name for the state - if null, name will be an empty string.
 * @param container {DmMediaStateContainer} - container for the state
 * @param [backgroundImage] {BsAssetItem | null} - background image for the LiveText canvas. If specified, his must be
 *  an image content item.
 * @param [backgroundColor] {BsColor | null} - background color for the liveText canvas, to be used if there is
 *  no background image is specified. If null or undefined, color will be set to black.
 * @param [backgroundWidth=0] {number} - width of background image in pixels
 * @param [backgroundHeight=0] {number} - height of background image in pixels
 */
export function dmAddLiveTextMediaState(name: string | null, container: DmMediaStateContainer, backgroundImage?: BsAssetItem | null, backgroundColor?: BsColor | null, backgroundWidth?: number, backgroundHeight?: number): BsDmThunkAction<MediaStateParams>;
/**
 * Interface to specify update parameters for updates. BsAssetItems can be specified for the content,
 *  and the update will automatically handle creation of assets in the data model and mapping to a
 *  true contentItem.
 *
 * @interface MediaStateUpdateParams
 * @param id {BsDmId} - ID of mediaState to update
 * @param [name] {string} - if present, change state name to the given value
 * @param [content] {DmMediaStateContentItemSpecification} - if present and
 *  value is a ContentItem, change the ContentItem for the media state to the given ContentItem.
 *  Note that a contentItem object should be used here only for non-media and non-dataFeed content items.
 *  For media based contentItems, specify as BsAssetItem here.
 *  If a BsAssetItem is specified, a new contentItem for the specified asset item is created for the state.
 *  For dataFeed based contentItems, specify as a DmDataFeedSourceSpecification. A new dataFeed contentItem
 *  will be created.
 * @param [contentData] {Partial<DmContentItemData>} - If a BsAssetItem is specified for the 'content' parameter,
 *  this parameter supplies the additional metadata to be associated with the content item.
 * @param [contentName] {string} - New name for ContentItem.
 * @param [contentAdditionalAsset] {DmNonMediaContentAdditionalAssetData} - Certain contentItem types hold
 *  one or more additional asset properties. This object holds the specification for such assets.
 *  Example: PlayFile contentItem holds a defaultMedia assetId. The assetItem for these assets can be supplied
 *  by this property. This parameter is ignored for ContentItem types that do not hold such an additional assetItem.
 */
export interface MediaStateUpdateParams {
    id: BsDmId;
    name?: string;
    content?: DmMediaStateContentItemSpecification;
    contentData?: Partial<DmContentItemData>;
    contentName?: string;
    contentAdditionalAsset?: DmNonMediaContentAdditionalAssetData;
}
/**
 * Update a mediaState with new parameters for a mediaStates in a playlist.
 * A BsDmError will be thrown if the contentItem is not valid for the zone.
 * It is not possible to change the container (zone) for a media state with this action.
 * Note that this function takes MediaStateUpdateParams as an input parameter, but the thunk returns
 *  an action where the params property hold a resolved MediaStateParams object. If BsAssetItems are
 *  involved in content changes, batched actions are used to properly manage the assetPool.
 *
 * @param params {MediaStateUpdateParams} - update parameters
 * @returns {BsDmThunkAction<MediaStateParams>} When dispatched, the thunk function will return
 *  a MediaStateAction object.
 *  If the thunk function succeeds, the action properties returned will be the ones used.
 *  If the function fails, a BsDmError is thrown.
 */
export function dmUpdateMediaState(params: MediaStateUpdateParams): BsDmThunkAction<MediaStateParams>;
export interface MediaStateDeleteParams extends EventDeleteParams, DataFeedDeleteParams, LiveTextDeleteParams, AssetItemRemoveParams {
    mediaStateIds: BsDmId[];
}
export type MediaStateDeleteAction = BsDmAction<MediaStateDeleteParams>;
/**
 * Delete the mediaState or multiple mediaStates and all associated events, transitions, commands and assetItems.
 * This function will also delete all transitions that target the given mediaStates.
 * If one of the deleted mediaStates was the initialMediaState for a zone, another mediaState is assigned
 *  as initialMediaState. If there are no more mediaStates in the zone, initialMediaState is set to BsDmIdNone.
 * @param {BsDmId | BsDmId[]} id - mediaState ID or array of mediaState IDs to delete
 * @returns {BsDmThunkAction<MediaStateDeleteParams>}
 */
export function dmDeleteMediaState(id: BsDmId | BsDmId[]): BsDmThunkAction<MediaStateDeleteParams>;
export interface MediaStatePasteParams {
    copySet: DmMediaStateCopySet;
    mediaStateIdMap: DmIdSubstitutionMap;
    eventIdMap: DmIdSubstitutionMap;
}
export type MediaStatePasteAction = BsDmAction<MediaStatePasteParams>;
/**
 * Specification of options for PasteMediaStateCopySet action.
 * @property [targetSequenceIndex=-1] {number} If the container is a container of sequenced mediaStates
 *  (e.g., MediaList, PlayFile,) or a nonInteractive playlist, this value will be used as the insertion index
 *  in the sequence.
 *  A value of -1 (the default value,) causes insertion at the end of the sequence.
 * @property [duplicateMatchedUserVariables] {boolean} Determines if user variables with a name that duplicates an
 *  existing user variable will be copied as a new user variable with a disambiguation suffix applied to the name
 *  (e.g. 'UserVar1 (2)').
 *  If this option is not specified, the default value is false.
 */
export interface DmPasteMediaStateOptions {
    targetSequenceIndex?: number;
    duplicateMatchedUserVariables?: boolean;
}
/**
 * Paste mediaStates and dependencies contained in the given copySet to the given container.
 * If the container contains sequenced mediaStates, an insertion index can be specified.
 * @param copySet {DmMediaStateCopySet} - the copySet containing the mediaStates and all dependencies
 *  (events, commands, etc.) to be pasted
 * @param container {DmMediaStateContainer} - the container in which the copySet is to be pasted.
 * @param [options] {DmPasteMediaStateOptions} - paste options
 * @returns {BsDmThunkAction<MediaStatePasteParams>}
 */
export function dmPasteMediaStateCopySet(copySet: DmMediaStateCopySet, container: DmMediaStateContainer, options?: DmPasteMediaStateOptions): BsDmThunkAction<MediaStatePasteParams>;

/** @module Actions:Event */
/**
 * Created by jsugg on 10/11/16.
 */
export interface EventParams {
    id: BsDmId;
    name?: string;
    type?: EventType;
    mediaStateId?: BsDmId;
    disabled?: boolean;
    action?: EventIntrinsicAction;
    data?: DmEventData | null;
}
export type EventAction = BsDmAction<EventParams>;
/**
 * Add an event.
 * @param {string} name
 * @param {EventType} type
 * @param {BsDmId} mediaStateId
 * @param {DmEventData} [data=null] - data object for the event. Object interface depends on the EventType.
 * @param {boolean} [disabled=false] - if true, the event is ignored by the player.
 * @param {EventIntrinsicAction} [intrinsicAction] - if defined, this specifies an intrinsic action to be executed when
 *  the event is triggered. This is used in MediaLists.
 * @returns {EventAction}
 */
export function dmAddEvent(name: string, type: EventType, mediaStateId: BsDmId, data?: DmEventData | null, disabled?: boolean, intrinsicAction?: EventIntrinsicAction): EventAction;
/**
 * Add an event given a DmEventSpecification.
 * @param {string} name
 * @param {BsDmId} mediaStateId
 * @param {DmEventSpecification} event
 * @param {boolean} [disabled=false] - if true, the event is ignored by the player.
 * @returns {EventAction}
 */
export function dmAddEventFromSpecification(name: string, mediaStateId: BsDmId, event: DmEventSpecification, disabled?: boolean): EventAction;
export interface AddMultipleEventParams {
    events: DmEvent[];
}
export type AddMultipleEventAction = BsDmAction<AddMultipleEventParams>;
/**
 * Add multiple events.
 * This is exported, but generally a better strategy is to use this in customized action creators
 *  in bsDataModel, to make sure all parameters (like mediaState IDs,) are correct.
 * @param events {DmEvent[]}
 */
export function dmAddMultipleEvents(events: DmEvent[]): AddMultipleEventAction;
/**
 * Update the event.
 * @param {EventParams} params
 * @returns {EventAction}
 */
export function dmUpdateEvent(params: EventParams): EventAction;
export interface UpdateEventTypeParams {
    id: BsDmId;
    eventSpec: DmEventSpecification;
    target?: BsDmId | null;
}
/**
 * Test to see if given eventSpec is compatible with the mediaState and overall sign state, and if so,
 *  dispatch an updateEvent action to update the event type.
 * @param params {UpdateEventTypeParams} - Parameters for proposed event update.
 * @returns {BsDmThunkAction<EventParams>}
 */
export function dmUpdateEventType(params: UpdateEventTypeParams): BsDmThunkAction<EventParams>;
export interface EventDeleteParams extends TransitionDeleteParams {
    eventIds: BsDmId[];
}
export type EventDeleteAction = BsDmAction<EventDeleteParams>;
/**
 * Delete the event or multiple events and all associated transitions and commands.
 * @param {BsDmId | BsDmId[]} id - event ID or array of event IDs to delete
 * @returns {BsDmThunkAction<EventDeleteParams>}
 */
export function dmDeleteEvent(id: BsDmId | BsDmId[]): BsDmThunkAction<EventDeleteParams>;

/** @module Actions:Transition */
export interface TransitionParams {
    id: BsDmId;
    name?: string;
    eventId?: BsDmId;
    targetMediaStateId?: BsDmId;
    type?: TransitionType;
    duration?: number;
}
export type TransitionAction = BsDmAction<TransitionParams>;
/**
 * Add a default transition. A default transitions is executed when the associated event happens, unless
 *  conditional transitions are also defined for the event, and one of the conditions is met when the event occurs.
 *  This action creator insures that there will be only one default transition. If a default transition is defined
 *  already for the given event, it will be deleted and replaced by this one.
 * @param {string} name
 * @param {BsDmId} eventId
 * @param {BsDmId} targetMediaStateId
 * @param {TransitionType} [type=TransitionType.NoEffect]
 * @param {number} [duration=0]
 */
export function dmAddDefaultTransition(name: string, eventId: BsDmId, targetMediaStateId: BsDmId, type?: TransitionType, duration?: number): BsDmThunkAction<TransitionParams>;
export interface TransitionConditionParams {
    condition: DmCondition | null;
    conditionIndex: number;
    conditionalAction: EventIntrinsicAction;
}
export type ConditionalTransitionParams = TransitionParams & TransitionConditionParams;
export type ConditionalTransitionAction = BsDmAction<ConditionalTransitionParams>;
/**
 * Add a conditional transition. Conditional transitions are evaluated before the default transition is executed.
 * @param {string} name
 * @param {BsDmId} eventId
 * @param {BsDmId} targetMediaStateId
 * @param {DmCondition} condition
 * @param {number} [conditionIndex=-1] - the transition is inserted into the condition sequence at the given index.
 *  If the conditionIndex is less than 0 (default) or >= conditionSequence length, the transition is inserted
 *  at the end of all other conditional transitions.
 * @param {EventIntrinsicAction | null} [conditionalAction=EventIntrinsicAction.None] - this parameter
 *  can be used to set the transition action to an intrinsic action (e.g., remain on same state, etc.)
 * @param {TransitionType} [type=TransitionType.NoEffect]
 * @param {number} [duration=0]
 * @returns {BsDmThunkAction<ConditionalTransitionParams>}
 */
export function dmAddConditionalTransition(name: string, eventId: BsDmId, targetMediaStateId: BsDmId, condition: DmCondition, conditionIndex?: number, conditionalAction?: EventIntrinsicAction | null, type?: TransitionType, duration?: number): BsDmThunkAction<ConditionalTransitionParams>;
/**
 * Update the basic transition parameters.
 * @param {TransitionParams} params
 * @returns {TransitionAction}
 */
export function dmUpdateTransition(params: TransitionParams): TransitionAction;
export interface TransitionConditionUpdateParams extends Partial<TransitionConditionParams> {
    id: BsDmId;
    targetMediaStateId?: BsDmId | null;
}
export interface TransitionConditionResolvedUpdateParams extends TransitionConditionUpdateParams {
    eventId: BsDmId;
}
export type TransitionConditionUpdateAction = BsDmAction<TransitionConditionResolvedUpdateParams>;
/**
 * Update condition parameters for a conditional transition. This function can also be used to move a conditional
 *  transition within the conditional sequence by specifying a different index for the transition within the
 *  sequence.
 * @param [params] {TransitionConditionUpdateParams} - Condition parameters. Transition ID is required, all other
 *  parameters are optional and will be updated only if present. If user variable name is specified,
 *  it will be resolved to a user variable ID if possible.
 * @returns {BsDmThunkAction<TransitionConditionResolvedUpdateParams>}
 */
export function dmUpdateTransitionCondition(params: TransitionConditionUpdateParams): BsDmThunkAction<TransitionConditionResolvedUpdateParams>;
export interface TransitionMoveConditionParams {
    eventId: BsDmId;
    indices: number[];
    targetIndex: number;
}
export type TransitionMoveConditionAction = BsDmAction<TransitionMoveConditionParams>;
/**
 * Move one or more conditional transitions within the condition sequence.
 * @param eventId {BsDmId} - event in which to move conditional transitions
 * @param indices {number[] | number} - array of indices of transitions to be moved. This can also be a single
 *  index, not in array form, if only one transition is to be moved.
 * @param targetIndex {number} - targetIndex for first transition in the removed group of transitions
 * @returns {BsDmThunkAction<TransitionMoveConditionParams>}
 */
export function dmMoveTransitionConditionsAtIndices(eventId: BsDmId, indices: number[] | number, targetIndex: number): BsDmThunkAction<TransitionMoveConditionParams>;
export interface TransitionDeleteParams {
    transitionIds: BsDmId[];
    commandIds: BsDmId[];
}
export type TransitionDeleteAction = BsDmAction<TransitionDeleteParams>;
/**
 * Delete a transition or multiple transitions and all associated commands.
 * @param {BsDmId} id - transition ID or array of transition IDs to delete
 * @returns {TransitionAction}
 */
export function dmDeleteTransition(id: BsDmId | BsDmId[]): BsDmThunkAction<TransitionDeleteParams>;

/** @module Actions:Command */
export interface CommandAddParams {
    sequenceType: CommandSequenceType;
    parentId: BsDmId;
    command: DmCommand;
}
export type CommandAddAction = BsDmAction<CommandAddParams>;
/**
 * Add a command to a MediaState, Event, or Transition
 * @param sequenceType {CommandSequenceType} - the sequence type to which to add the command. This must be
 *  a sequence type appropriate for the given parent object.
 * @param parentId {BsDmId} - the ID of the parent object for the command. This can be a MediaState,
 *  an Event, or a Transition object.
 * @param command {DmCommand} - the command object to add
 * @returns {BsDmThunkAction<CommandAddParams>}
 */
export function dmAddCommand(sequenceType: CommandSequenceType, parentId: BsDmId, command: DmCommand | DmTimedCommand): BsDmThunkAction<CommandAddParams>;
export interface CommandUpdateParams {
    id: BsDmId;
    name?: string;
    operations?: DmCommandOperation[];
    startTime?: number;
}
export type CommandUpdateAction = BsDmAction<CommandUpdateParams>;
/**
 * Update a the parameters of the given command
 * @param params {CommandUpdateParams}
 * @returns {CommandUpdateAction}
 */
export function dmUpdateCommand(params: CommandUpdateParams): BsDmThunkAction<CommandUpdateParams>;
export interface CommandMoveParams {
    sequenceId: BsDmId;
    indices: number[];
    targetIndex: number;
}
export type CommandMoveAction = BsDmAction<CommandMoveParams>;
/**
 * Move one or more commands within the command sequence.
 * @param sequenceType {CommandSequenceType} - the sequence type in which to move the command(s). This must be
 *  a sequence type appropriate for the given parent object.
 * @param parentId {BsDmId} - the ID of the parent object for the command sequence to modify. This can be a MediaState,
 *  an Event, or a Transition object.
 * @param indices {number[] | number} - array of indices of commands to be moved. This can also be a single
 *  index, not in array form, if only one command is to be moved.
 * @param targetIndex {number} - targetIndex for first command in the removed group of commands
 * @returns {BsDmThunkAction<CommandMoveParams>}
 */
export function dmMoveCommandsAtIndices(sequenceType: CommandSequenceType, parentId: BsDmId, indices: number[] | number, targetIndex: number): BsDmThunkAction<CommandMoveParams>;
export interface CommandDeleteParams {
    commandIds: BsDmId[];
}
export type CommandDeleteAction = BsDmAction<CommandDeleteParams>;
/**
 * Delete one or more commands.
 * @param ids {BsDmId | BsDmId[]} - either a single command ID  or an array of command IDs
 *  to be removed
 * @returns {CommandDeleteAction}
 */
export function dmDeleteCommand(ids: BsDmId | BsDmId[]): CommandDeleteAction;
export interface CommandPasteParams {
    copySet: DmCommandCopySet;
    commandIdMap: DmIdSubstitutionMap;
    sequenceId: BsDmId;
}
export type CommandPasteAction = BsDmAction<CommandPasteParams>;
/**
 * Paste a command sequence defined by a CommandCopySet to the specified command parent 'container'
 *  (e.g., a mediaState, event, or transition.)
 * A command sequence may already exist in the container specified. If so, the pasted commands will be appended
 *  to the existing sequence, unless a target insertion index is specified.
 * @param copySet {DmCommandCopySet} - a DmCommandCopySet object defining the commands to be pasted
 * @param targetParentId {BsDmId} - the ID of the target parent container. This should be the ID of a mediaState,
 *  event, or transition.
 * @param targetCommandSequenceType {CommandSequenceType} - the command sequence type in the parent container in
 *  which to paste the commands. For example, in a mediaState, this specifies whether the commands are to be
 *  pasted to the StateEntry or StateExit command sequence.
 * @param [insertionIndex] {number} - if the target parent container has an existing command list for the given
 *  CommandSequenceType, this will specify the index in the sequence at which the copied commands will be pasted.
 *  If not specified, the commands will be appended to the end of the list.
 * @returns {BsDmThunkAction<CommandPasteParams>}
 */
export function dmPasteCommandCopySet(copySet: DmCommandCopySet, targetParentId: BsDmId, targetCommandSequenceType?: CommandSequenceType, insertionIndex?: number): BsDmThunkAction<CommandPasteParams>;
/**
 * Duplicate a single command in the sequence in which it is located. The duplicated command (with a new command ID)
 *  will be inserted after the existing command in the sequence. This is implemented as a standard command Copy/Paste
 *  operation, but the copySet generation and target information is computed based on the given command ID.
 * @param commandId {BsDmId} - ID of the command to be copied
 * @returns {BsDmThunkAction<CommandPasteParams>}
 */
export function dmDuplicateCommand(commandId: BsDmId): BsDmThunkAction<CommandPasteParams>;

/** @module Actions:AssetMap */
export interface AssetItemRemoveParams {
    assetIds: BsAssetId[];
}
export interface AssetItemUpdateParams {
    assetItem: BsAssetItem;
}
export type AssetItemUpdateAction = BsDmAction<AssetItemUpdateParams>;
/**
 * Substitute new assetItem properties for an asset in the assetMap. The asset for which the substitution
 *  is to be made is identified by the currentLocator parameter. If no asset is found in the assetMap
 *  corresponding to the currentLocator, an exception is thrown.
 * Only certain assetItem properties can be changed by this function. The properties that can be changed are:
 *  1. name
 *  2. path
 *  3. location
 *  4. networkId
 *  5. scope
 * Attempts to change assetType or mediaType will cause an exception.
 * There is one exception in which an assetType change is allowed: if new asset location is Local,
 *  AssetType.DeviceHtmlSite can and must be changed to AssetType.HtmlSite. If not specified, this will
 *  be done automatically, because AssetType.DeviceHtmlSite is not valid for local HTML assetItems.
 * If the currentAsset is specified by a full bsAssetItem with a valid locatorKey, the existing locatorKey
 *  is used - new key is not computed. This is important when moving projects between systems running different OSs.
 * If the property changes result in a new locatorKey which is duplicated in the current assetMap, the
 *  changed assetItem is 'merged' with the duplicate assetItem: the duplicate assetItem is removed, all references
 *  to the duplicated assetItem will be changed to reference the updated assetItem, and the updated
 *  assetItem will hold a refCount equal to the sum of the refCounts of the two merged assetItems.
 *
 * @param {BsAssetLocator | BsAssetItem} currentAsset
 * @param {BsAssetItem} newAssetItem
 * @returns {BsDmThunkAction<AssetItemUpdateParams>}
 */
export function dmUpdateAssetItem(currentAsset: BsAssetLocator | BsAssetItem, newAssetItem: BsAssetItem): BsDmThunkAction<AssetItemUpdateParams>;
/** @deprecated - use function dmUpdateAssetItem */
export const dmUpdateAssetLocation: typeof dmUpdateAssetItem;
/**
 * Update assetMap for a deviceWebPage asset. Local deviceWebPage assets are not distinguished from standard
 *  HTML sites, but after being uploaded to BSN, deviceWebPages are a distinct AssetType. When relocating
 *  a presentation to BSN, local HTML Site assets used as custom deviceWebPages must have a distinct assetItem
 *  created in the assetMap. Also, the original HtmlSite asset must be de-referenced. This function can be called
 *  by an upload task manager to convert the local HtmlSite assetItem to a proper DeviceHtmlSite assetItem.
 * @param {BsAssetItem} currentAsset - local assetItem in assetMap
 * @param {BsAssetItem} deviceWebPageAssetItem - BSN based assetItem
 * @returns {BsDmThunkAction<AssetItemUpdateParams>} - payload contains the newly created assetItem.
 */
export function dmUpdateDeviceWebPageAssetLocation(currentAsset: BsAssetItem, deviceWebPageAssetItem: BsAssetItem): BsDmThunkAction<AssetItemUpdateParams>;

/** @module Actions:MediaSequence */
export interface MediaSequenceAddItemRangeParams {
    index: number;
    container: DmMediaStateContainer;
    id: BsDmId[];
    contentItems: DmMediaContentItem[];
}
export type MediaSequenceAddItemRangeAction = BsDmAction<MediaSequenceAddItemRangeParams>;
/**
 * Add one or more assetItems as MediaSequence items to a MediaList or a PlayFile state.
 * MediaSequence items are implemented as MediaStates contained within a MediaList or a PlayFile mediaState.
 * @param {number} index - starting index at which to add the new items
 * @param {DmMediaStateContainer} container - container for the items - must be of type
 *  MediaStateContainerType.MediaList or MediaStateContainerType.PlayFile, with the ID of a MediaState
 *  with ContentItemType.MediaList or ContentItemType.PlayFile
 * @param {BsAssetItem[]} assetItems - assetItems to add
 * @param {Array<Partial<DmMediaSequenceContentItemData>>} [contentData] - optional array of extra data for each item
 *  to be added to the media sequence - each item in this array corresponds to the contentItem for the assetItem in
 *  the corresponding position in the assetItems array. Items in this array can be null.
 * @returns {BsDmThunkAction<MediaSequenceAddItemRangeParams>}
 */
export function dmMediaSequenceAddItemRange(index: number, container: DmMediaStateContainer, assetItems: BsAssetItem[], contentData?: Array<Partial<DmMediaSequenceContentItemData>>): BsDmThunkAction<MediaSequenceAddItemRangeParams>;
export interface MediaSequenceUpdateItemParams {
    id: BsDmId;
    assetItem?: BsAssetItem;
    contentData?: Partial<DmMediaSequenceContentItemData>;
}
/**
 * Update MediaSequence item with new AssetItem or MediaContentItemData.
 * @param {MediaSequenceUpdateItemParams} params
 * @returns {BsDmThunkAction<MediaStateParams>}
 */
export function dmMediaSequenceUpdateItem(params: MediaSequenceUpdateItemParams): BsDmThunkAction<MediaStateParams>;
export interface MediaSequenceMoveItemIndicesParams {
    container: DmMediaStateContainer;
    indices: number[];
    targetIndex: number;
}
export type MediaSequenceMoveItemIndicesAction = BsDmAction<MediaSequenceMoveItemIndicesParams>;
/**
 * Move one or more MediaSequence items within the MediaSequence list.
 * MediaSequence lists are contained by MmdiaStates that hold a MediaList or a PlayFile contentItem.
 * @param container {DmMediaStateContainer} - mediaState container for the mediaSequence -
 *  must be a MediaList or PlayFile,
 * @param indices {number[] | number} - array of indices of sequence items to be moved. This can also be a single
 *  index, not in array form, if only one mediaState is to be moved.
 * @param targetIndex {number} - targetIndex for first mediaState in the removed group of mediaStates
 * @returns {BsDmThunkAction<MediaSequenceMoveItemIndicesParams>}
 */
export function dmMediaSequenceMoveItemsAtIndices(container: DmMediaStateContainer, indices: number[] | number, targetIndex: number): BsDmThunkAction<MediaSequenceMoveItemIndicesParams>;
export interface MediaSequenceDeleteItemParams {
    containerId: BsDmId;
    deleteParams: MediaStateDeleteParams;
}
export type MediaSequenceDeleteItemAction = BsDmAction<MediaSequenceDeleteItemParams>;
/**
 * Delete one or more MediaSequence items from a MediaList or a PlayFile state.
 * Items to delete are specified by a starting index and a count of items.
 * @param container {DmMediaStateContainer} - mediaState container for the mediaSequence -
 *  must be a MediaList or PlayFile,
 * @param {number} startingIndex - starting index at which to delete new items
 * @param {number} count - the number of items to delete
 * @returns {BsDmThunkAction<MediaSequenceDeleteItemParams>}
 */
export function dmMediaSequenceDeleteItemRange(container: DmMediaStateContainer, startingIndex: number, count?: number): BsDmThunkAction<MediaSequenceDeleteItemParams>;
/**
 * Delete one or more MediaSequence items from a MediaList or a PlayFile state.
 * Items to delete are specified by an array of indices referring to the position of items in the sequence
 * @param container {DmMediaStateContainer} - mediaState container for the mediaSequence -
 *  must be a MediaList or PlayFile,
 * @param {number[]} indices - array of indices of items to delete
 * @returns {BsDmThunkAction<MediaSequenceDeleteItemParams>}
 */
export function dmMediaSequenceDeleteItemsAtIndices(container: DmMediaStateContainer, indices: number[]): BsDmThunkAction<MediaSequenceDeleteItemParams>;
/**
 * Add a global intrinsic event for the given MediaList container. This action creator will set
 *  the action {EventIntrinsicAction} property to either SequenceForward or SequenceBackward values,
 *  overriding any value in eventSpec.
 * @param name {string} - event name
 * @param container {DmMediaStateContainer} - mediaState container for the mediaSequence -
 *  must be a MediaList or PlayFile,
 * @param eventSpec {DmEventSpecification} - specification for the event
 * @param [sequenceBackward=false] {boolean} - action will be set to SequenceBackward if true,
 *  SequenceForward if false or not specified.
 */
export function dmMediaListAddGlobalEvent(name: string, container: DmMediaStateContainer, eventSpec: DmEventSpecification, sequenceBackward?: boolean): BsDmThunkAction<EventParams>;

/** @module Actions:DataFeed */
export interface DataFeedAddParams {
    id: BsDmId;
    name: string;
    feedSourceId: BsDmId;
    usage: DataFeedUsageType;
    properties?: Partial<DmDataFeedProperties>;
}
export type DataFeedAddAction = BsDmAction<DataFeedAddParams>;
/**
 * Add a DataFeed, as specified by the feed specification and optional feed properties
 *
 * @param name {string | null} - local (friendly) name for the data feed. If name is empty or null, and the
 *  feedSpec is for a BSN feed, the name will be set to the BSN feed name.
 * @param feedSpec {DmDataFeedSourceSpecification} - specification object for the data feed source
 * @param [properties] {Partial<DmDataFeedProperties>} - Partial specification of data feed properties. Any properties
 *  not specified here will be set to default values.
 * @returns {BsDmThunkAction<DataFeedAddParams>}
 */
export function dmAddDataFeed(name: string | null, feedSpec: DmDataFeedSourceSpecification, properties?: Partial<DmDataFeedProperties>): BsDmThunkAction<DataFeedAddParams>;
export interface DataFeedUpdateInputParams {
    id: BsDmId;
    name?: string;
    feedSpec?: DmDataFeedSourceSpecification;
    properties?: Partial<DmDataFeedProperties>;
}
export interface DataFeedUpdateParams {
    id: BsDmId;
    name?: string;
    feedSourceId?: BsDmId;
    usage?: DataFeedUsageType;
    properties?: Partial<DmDataFeedProperties>;
}
export type DataFeedUpdateAction = BsDmAction<DataFeedUpdateParams>;
/**
 * Update the properties for data feed
 * @param params {DataFeedUpdateInputParams} - object containing properties to update.
 *  All properties are optional except for the 'id' property, which must specify the data feed to be updated.
 *  The values of all other properties specified will replace the existing value of the corresponding property
 *  in the data feed object. Unspecified properties are left unchanged.
 *
 *  The type property cannot be changed. Attempts to do so will be ignored.
 * @returns {BsDmThunkAction<DataFeedUpdateParams>}
 */
export function dmUpdateDataFeed(params: DataFeedUpdateInputParams): BsDmThunkAction<DataFeedUpdateParams>;
/**
 * @property id {BsDmId} dataFeed ID (not the dataFeedSource ID)
 * @property [updateInterval] {number}
 * @property [useHeadRequest] {boolean}
 */
export interface DataFeedSourcePropertyUpdateParams extends Partial<DmDataFeedSourceBaseProperties> {
    id: BsDmId;
}
export type DataFeedSourcePropertyUpdateAction = BsDmAction<DataFeedSourcePropertyUpdateParams>;
/**
 * Update the dataFeedSource properties for a given dataFeed.
 * @param params {DataFeedSourcePropertyUpdateParams}
 * @returns BsDmThunkAction<Partial<DmDataFeedSource>>
 */
export function dmUpdateDataFeedSourceProperties(params: DataFeedSourcePropertyUpdateParams): BsDmThunkAction<DataFeedSourcePropertyUpdateParams>;
export interface DataFeedDeleteParams {
    dataFeedIds: BsDmId[];
    dataFeedSourceIds: BsDmId[];
    commandIds: BsDmId[];
    assetIds: BsDmId[];
}
export type DataFeedDeleteAction = BsDmAction<DataFeedDeleteParams>;
/**
 * Delete one or more data feed objects from the data feed collection.
 *
 * @param id {BsDmId | BsDmId[]} - ID (or array of IDs) of the data feed object(s) to delete
 * @returns {BsDmThunkAction<DataFeedDeleteParams>}
 */
export function dmDeleteDataFeed(id: BsDmId | BsDmId[]): BsDmThunkAction<DataFeedDeleteParams>;

/** @module Actions:HtmlSite */
export interface HtmlSiteBaseParams {
    id: BsDmId;
    type?: HtmlSiteType;
    name?: string;
    queryString?: DmParameterizedString | string;
}
export interface HtmlSiteHostedParams extends HtmlSiteBaseParams {
    indexAssetId?: BsAssetId;
    enableNode?: boolean;
}
export interface HtmlSiteRemoteParams extends HtmlSiteBaseParams {
    url?: DmParameterizedString | string;
}
export type HtmlSiteParams = HtmlSiteHostedParams | HtmlSiteRemoteParams;
export type HtmlSiteHostedAction = BsDmAction<HtmlSiteHostedParams>;
export type HtmlSiteRemoteAction = BsDmAction<HtmlSiteRemoteParams>;
export type HtmlSiteAction = BsDmAction<HtmlSiteParams>;
/**
 * Add a hosted htmlSite object, with the specified assetItem for the site index file. A hosted HtmlSite
 *  is an htmlSite used as sign content, composed of local files on the BrightSign player.
 * The assetItem specified for the index file is added to the assetMap as part of this thunked action.
 *
 * @param {string} name - name of the HtmlSite object.
 * @param {BsAssetItem | null} indexAssetItem - assetItem of the index file. If set to null, a NULL assetItem
 *  will be set as a temporary placeholder
 * @param {DmParameterizedString | string} [queryString]
 * @param {boolean} [enableNode] - if set to true, node.js is enabled within the HTML site
 * @return {BsDmThunkAction<HtmlSiteHostedParams>}
 */
export function dmAddHostedHtmlSite(name: string, indexAssetItem: BsAssetItem | null, queryString?: DmParameterizedString | string, enableNode?: boolean): BsDmThunkAction<HtmlSiteHostedParams>;
/**
 * Add a remote (external) htmlSite with the given URL.
 *
 * @param {string} name - name of the HtmlSite object
 * @param {DmParameterizedString | string} url - URL for the remote site
 * @param {DmParameterizedString | string} queryString
 * @return {HtmlSiteRemoteAction}
 */
export function dmAddRemoteHtmlSite(name: string, url: DmParameterizedString | string, queryString?: DmParameterizedString | string): HtmlSiteRemoteAction;
export interface HtmlSiteHostedUpdateParams extends HtmlSiteBaseParams {
    indexAssetItem?: BsAssetItem | null;
    enableNode?: boolean;
}
export interface HtmlSiteRemoteUpdateParams extends HtmlSiteBaseParams {
    url?: DmParameterizedString | string;
}
export type HtmlSiteUpdateParams = HtmlSiteHostedUpdateParams | HtmlSiteRemoteUpdateParams;
/**
 * Update the properties for an HtmlSite object.
 * If the site is a hosted HtmlSite, and a new assetItem is specified, the assetItems (both the
 *  previously specified assetItem, and the new assetItem,) are managed accordingly in the assetMap
 *  by the thunked action.
 *
 * @param {HtmlSiteUpdateParams} params
 * @return {BsDmThunkAction<HtmlSiteParams>}
 */
export function dmUpdateHtmlSite(params: HtmlSiteUpdateParams): BsDmThunkAction<HtmlSiteParams>;
/**
 * Delete the specified HtmlSite object from the sign. If the HtmlSite is a Hosted HtmlSite,
 *  this thunked action also removes the indexAssetItem from the AssetMap.
 *
 * @param {BsDmId} id - HtmlSite ID to delete
 * @return {BsDmThunkAction<HtmlSiteParams>}
 */
export function dmDeleteHtmlSite(id: BsDmId): BsDmThunkAction<HtmlSiteParams>;

/** @module Actions:LiveText */
export interface LiveTextCanvasParams {
    backgroundColor: BsColor;
    backgroundImageId: BsAssetId;
    backgroundWidth: number;
    backgroundHeight: number;
}
export interface AddLiveTextCanvasParams extends LiveTextCanvasParams {
    id: BsDmId;
}
export type AddLiveTextCanvasAction = BsDmAction<AddLiveTextCanvasParams>;
export function dmAddLiveTextCanvas(backgroundImage?: BsAssetItem, backgroundColor?: BsColor | null, backgroundWidth?: number, backgroundHeight?: number): BsDmThunkAction<AddLiveTextCanvasParams>;
export interface UpdateLiveTextCanvasParams extends Partial<LiveTextCanvasParams> {
    id: BsDmId;
}
export interface UpdateLiveTextCanvasSpec {
    id: BsDmId;
    backgroundColor?: BsColor;
    backgroundImage?: BsAssetItem | null;
    backgroundWidth?: number;
    backgroundHeight?: number;
}
export type UpdateLiveTextCanvasAction = BsDmAction<UpdateLiveTextCanvasParams>;
export function dmUpdateLiveTextCanvas(params: UpdateLiveTextCanvasSpec): BsDmThunkAction<UpdateLiveTextCanvasParams>;
export interface LiveTextDeleteParams extends LiveTextItemDeleteParams {
    liveTextCanvasIds: BsDmId[];
}
export type DeleteLiveTextCanvasAction = BsDmAction<LiveTextDeleteParams>;
export function dmDeleteLiveTextCanvas(id: BsDmId | BsDmId[]): BsDmThunkAction<LiveTextDeleteParams>;
export interface PasteLiveTextItemParams {
    copySet: DmLiveTextCopySet;
}
export type PasteLiveTextItemAction = BsDmAction<PasteLiveTextItemParams>;
export function dmPasteLiveTextCopySet(copySet: DmLiveTextCopySet, targetCanvasId: BsDmId): BsDmThunkAction<PasteLiveTextItemParams>;
export interface DmLiveTextProperties {
    position?: BsRect;
    textProperties?: DmLiveTextItemTextProperties | null;
    contentAssetItem?: BsAssetItem | null;
    fontAssetItem?: BsAssetItem | null;
    dataFeedSpec?: DmDataFeedSourceSpecification | null;
    layerIndex?: number;
    rssDisplayTime?: number;
    positionOffsetX?: number;
    positionOffsetY?: number;
}
export interface AddLiveTextItemParams {
    id: BsDmId;
    canvasId: BsDmId;
    position: BsRect;
    data: DmLiveTextItemData;
    textProperties: DmLiveTextItemTextProperties | null;
    layerIndex: number;
}
export type AddLiveTextItemAction = BsDmAction<AddLiveTextItemParams>;
export function dmAddLiveTextItem(canvasId: BsDmId, data: DmLiveTextItemData, props?: DmLiveTextProperties): BsDmThunkAction<AddLiveTextItemParams>;
export interface UpdateLiveTextItemParams {
    id: BsDmId;
    canvasId: BsDmId;
    position?: BsRect;
    data?: DmLiveTextItemData;
    textProperties?: Partial<DmLiveTextItemTextProperties>;
    layerIndex?: number;
}
export type UpdateLiveTextItemAction = BsDmAction<UpdateLiveTextItemParams>;
export interface UpdateLiveTextItemInputParams extends UpdateLiveTextItemParams {
    contentAssetItem?: BsAssetItem;
    fontAssetItem?: BsAssetItem | null;
    dataFeedSpec?: DmDataFeedSourceSpecification;
    rssDisplayTime?: number;
    positionOffsetX?: number;
    positionOffsetY?: number;
}
export function dmUpdateLiveTextItem(params: UpdateLiveTextItemInputParams): BsDmThunkAction<UpdateLiveTextItemParams>;
export interface LiveTextItemDeleteParams extends LiveTextGroupedDataFeedDeleteParams {
    liveTextItemIds: BsDmId[];
}
export type DeleteLiveTextItemAction = BsDmAction<LiveTextItemDeleteParams>;
export function dmDeleteLiveTextItem(id: BsDmId | BsDmId[]): BsDmThunkAction<LiveTextItemDeleteParams>;
export function dmSetEnableForLiveTextGroupedItem(id: BsDmId, enabled: boolean): BsDmThunkAction<UpdateLiveTextItemParams>;
export interface AddLiveTextDataFeedParams {
    groupId: BsDmId;
    dataFeedId: BsDmId;
    index: number;
}
export type AddLiveTextDataFeedAction = BsDmAction<AddLiveTextDataFeedParams>;
export function dmAddDataFeedToLiveTextGroup(groupId: BsDmId, dataFeedSpec: DmDataFeedSourceSpecification, index?: number): BsDmThunkAction<AddLiveTextDataFeedParams>;
export interface UpdateLiveTextDataFeedGroupParams {
    groupId: BsDmId;
    displayTime: number;
}
export type UpdateLiveTextDataFeedAction = BsDmAction<UpdateLiveTextDataFeedGroupParams>;
export function dmUpdateDataFeedLiveTextGroup(params: UpdateLiveTextDataFeedGroupParams): BsDmThunkAction<UpdateLiveTextDataFeedGroupParams>;
export interface MoveLiveTextDataFeedParams {
    groupId: BsDmId;
    indices: number[];
    targetIndex: number;
}
export type MoveLiveTextDataFeedAction = BsDmAction<MoveLiveTextDataFeedParams>;
export function dmMoveLiveTextDataFeedsInGroup(groupId: BsDmId, indices: number[] | number, targetIndex: number): MoveLiveTextDataFeedAction;
export interface LiveTextGroupedDataFeedDeleteParams extends DataFeedDeleteParams {
    liveTextGroupIds: BsDmId[];
}
export type DeleteLiveTextDataFeedAction = BsDmAction<LiveTextGroupedDataFeedDeleteParams>;
export function dmDeleteDataFeedsFromLiveTextGroup(groupId: BsDmId, dataFeedIds: BsDmId | BsDmId[]): BsDmThunkAction<LiveTextGroupedDataFeedDeleteParams>;

/** @module Actions:NodeApp */
export interface NodeAppParams {
    id: BsDmId;
    name?: string;
    indexAssetId?: BsAssetId;
}
export type NodeAppAction = BsDmAction<NodeAppParams>;
/**
 * Add a nodeApp object, with the specified assetItem for the node app index file. A NodeApp
 * is a node.js application that runs on the player. The node.js files are included as part of an HtmlSite asset.
 * The assetItem specified for the index file is added to the assetMap as part of this thunked action.
 *
 * @param {string} name - name of the NodeApp object.
 * @param {BsAssetItem | null} indexAssetItem - assetItem of the index file. If set to null, and the validate parameter
 *  is false, a NULL assetItem will be set as a temporary placeholder
 * @param {boolean} [validate=true] - true if an exception should be thrown if name or assetItem is not valid
 * @return {BsDmThunkAction<NodeAppParams>}
 */
export function dmAddNodeApp(name: string | null, indexAssetItem: BsAssetItem | null, validate?: boolean): BsDmThunkAction<NodeAppParams>;
export function dmAddNodeAppWithoutValidation(name: string | null, indexAssetItem: BsAssetItem | null): BsDmThunkAction<NodeAppParams>;
export interface NodeAppUpdateParams extends NodeAppParams {
    indexAssetItem?: BsAssetItem | null;
}
/**
 * Update the properties for an NodeApp object.
 * If a new assetItem is specified, the assetItems (both the
 * previously specified assetItem, and the new assetItem,) are managed accordingly in the assetMap
 * by the thunked action.
 *
 * @param {NodeAppUpdateParams} params
 * @return {BsDmThunkAction<NodeAppParams>}
 */
export function dmUpdateNodeApp(params: NodeAppUpdateParams): BsDmThunkAction<NodeAppParams>;
/**
 * Delete the specified NodeApp object from the sign.
 *  This thunked action also removes the indexAssetItem from the AssetMap.
 *
 * @param {BsDmId} id - NodeApp ID to delete
 * @return {BsDmThunkAction<NodeAppParams>}
 */
export function dmDeleteNodeApp(id: BsDmId): BsDmThunkAction<NodeAppParams>;

/** @module Actions:UserVariable */
export interface UserVariableParams {
    id: BsDmId;
    name: string;
    defaultValue: DmParameterizedString;
    access: AccessType;
    isNetworked: boolean;
    dataFeedId: BsDmId;
    systemVariable: SystemVariableType | null;
}
export type UserVariableAction = BsDmAction<UserVariableParams>;
/**
 * Add a user variable.
 * @param {string} name
 * @param {string | DmParameterizedString} defaultValue
 * @param {AccessType} access
 * @param {boolean} isNetworked
 * @param {DmDataFeedSourceSpecification | null} dataFeedSpec - specifications for dataFeed to be used
 *  for networked userVariables.
 * @param {SystemVariableType | null} systemVariable
 * @returns {BsDmThunkAction<UserVariableParams>}
 */
export function dmAddUserVariable(name: string, defaultValue: string | DmParameterizedString, access?: AccessType, isNetworked?: boolean, dataFeedSpec?: DmDataFeedSourceSpecification | null, systemVariable?: SystemVariableType | null): BsDmThunkAction<UserVariableParams>;
export interface UpdateUserVariableInputParams {
    id: BsDmId;
    name?: string;
    defaultValue?: string | DmParameterizedString;
    access?: AccessType;
    isNetworked?: boolean;
    dataFeedSpec?: DmDataFeedSourceSpecification | null;
    systemVariable?: SystemVariableType | null;
}
export interface UserVariableUpdateParams {
    id: BsDmId;
    name?: string;
    defaultValue?: DmParameterizedString;
    access?: AccessType;
    isNetworked?: boolean;
    dataFeedId?: BsDmId | null;
    systemVariable?: SystemVariableType | null;
}
export type UserVariableUpdateAction = BsDmAction<UserVariableUpdateParams>;
/**
 * Update one or more user variable parameters.
 * @param {UpdateUserVariableInputParams} params
 * @returns {BsDmThunkAction<UserVariableUpdateParams>}
 */
export function dmUpdateUserVariable(params: UpdateUserVariableInputParams): BsDmThunkAction<UserVariableUpdateParams>;
export interface UserVariableMoveAtIndicesParams {
    indices: number[];
    targetIndex: number;
}
export type UserVariableMoveAtIndicesAction = BsDmAction<UserVariableMoveAtIndicesParams>;
/**
 * Move one or more user variables in the user variable sequence.
 * @param indices {number[] | number} - one sequence index, or an array of sequence indices of variable items to move
 * @param targetIndex {number} - the index for the first user variable after the move
 * @returns {UserVariableMoveAtIndicesAction}
 */
export function dmMoveUserVariablesAtIndices(indices: number[] | number, targetIndex: number): UserVariableMoveAtIndicesAction;
export interface UserVariableDeleteParams extends DataFeedDeleteParams {
    userVariableIds: BsDmId[];
}
export type UserVariableDeleteAction = BsDmAction<UserVariableDeleteParams>;
/**
 * Delete a user variable.
 * @param {BsDmId | BsDmId[]} id - id or ids of userVariables to delete
 * @returns {BsDmThunkAction<UserVariableDeleteParams>}
 */
export function dmDeleteUserVariable(id: BsDmId | BsDmId[]): BsDmThunkAction<UserVariableDeleteParams>;
/**
 * This action will resolve all placeholder names for parameterized values in the sign (DmParameterizedString or
 *  DmParameterizedNumber,) for which user variables exist for the placeholder name.
 * @returns {BsDmThunkAction<null>}
 */
export function dmResolveUserVariablePlaceholderNames(): BsDmThunkAction<null>;
export interface UserVariableMergeParams {
    userVariables: DmUserVariableCollectionState;
}
export type UserVariableMergeAction = BsDmAction<UserVariableMergeParams>;
/**
 * Merge a user variable copySet to the current sign. This always adds all user variables in the given copySet
 *  with names that do not match existing user variable names in the sign. If the duplicateMatchedUserVariables
 *  parameter is true, user variables with matching names will be added as well, using names containing a
 *  disambiguating suffix.
 * For networked user variables, the networked dataFeed entities are also added.
 * @param copySet {DmUserVariableCopySet}
 * @param [duplicateMatchedUserVariables=false] {boolean}
 * @returns {BsDmThunkAction<UserVariableMergeParams>}
 */
export function dmMergeUserVariableCopySet(copySet: DmUserVariableCopySet, duplicateMatchedUserVariables?: boolean): BsDmThunkAction<UserVariableMergeParams>;

/** @module Actions:DeviceWebPage */
export const DefaultPresentationWebPagePort = 8008;
export interface PresentationWebPageParams {
    mode: DeviceWebPageDisplay;
    customPageId: BsDmId;
    customName?: string;
    customIndexAssetId?: BsAssetId;
}
export type PresentationWebPageAction = BsDmAction<PresentationWebPageParams>;
/**
 * Set up PresentationWebPage (the deviceWebPage served from port 8008 on the player)
 *
 * @param mode {DeviceWebPageDisplay} - mode for the presentation web page (None, Standard, Custom)
 * @param customIndexAssetItem {BsAssetItem} - if mode = Custom, this is the assetItem for the index file of the
 *  custom HTML Site.
 * @param customName {string | null} - name for the DeviceWebPage asset. If null or undefined, will be set to
 *  the presentation name with '-WebPage' appended to the end.
 * @returns {BsDmThunkAction<PresentationWebPageParams>} - the returned action is a virtual action
 */
export function dmSetPresentationWebPage(mode: DeviceWebPageDisplay, customIndexAssetItem?: BsAssetItem, customName?: string | null): BsDmThunkAction<PresentationWebPageParams>;
export interface DeviceWebPageParams {
    id: BsDmId;
    name?: string;
    indexAssetId?: BsAssetId;
    port?: number;
}
export type DeviceWebPageAction = BsDmAction<DeviceWebPageParams>;
/**
 * Add a deviceWebPage object, with the specified assetItem for the site index file. A deviceWebPage
 *  is an htmlSite used as a web site to be served out of the BrightSign player.
 * The assetItem specified for the index file is added to the assetMap as part of this thunked action.
 * Only one web page is allowed for a given port number. If a new web page is added where one already has been
 *  assigned for the port, the prior web page will be removed.
 *
 * @param {string} name - name of the DeviceWebPage object.
 * @param {BsAssetItem | null} indexAssetItem - assetItem of the index file. If set to null, a NULL assetItem
 *  will be set as a temporary placeholder
 * @param {number} [port=0] - the port number from which the web page page will be served by the HttpServer
 *  object on the player. Port === 0 will denote the standard port for the presentation web page (currently 8008.)
 * @return {BsDmThunkAction<HtmlSiteHostedParams>}
 */
export function dmAddDeviceWebPage(name: string, indexAssetItem: BsAssetItem | null, port?: number): BsDmThunkAction<DeviceWebPageParams>;
export interface DeviceWebPageUpdateParams {
    id: BsDmId;
    name?: string;
    indexAssetItem?: BsAssetItem | null;
    port?: number;
}
/**
 * Update the properties for an DeviceWebPage object.
 * If a new assetItem is specified, both the previously specified assetItem, and the new assetItem, are managed
 *  properly within the assetMap by the thunked action.
 *
 * @param {DeviceWebPageUpdateParams} params
 * @return {BsDmThunkAction<DeviceWebPageParams>}
 */
export function dmUpdateDeviceWebPage(params: DeviceWebPageUpdateParams): BsDmThunkAction<DeviceWebPageParams>;
/**
 * Delete the specified DeviceWebPage object from the sign.
 * This thunked action also removes the indexAssetItem from the AssetMap.
 *
 * @param {BsDmId} id - DeviceWebPage ID to delete
 * @return {BsDmThunkAction<DeviceWebPageParams>}
 */
export function dmDeleteDeviceWebPage(id: BsDmId): BsDmThunkAction<DeviceWebPageParams>;

/** @module Actions:ScriptPlugin */
export interface BrightScriptPluginParams {
    id: BsDmId;
    name?: string | null;
    assetId?: BsDmId | null;
}
export type BrightScriptPluginAction = BsDmAction<BrightScriptPluginParams>;
export function dmAddBrightScriptPlugin(name: string | null, assetItem: BsAssetItem | null, validate?: boolean): BsDmThunkAction<BrightScriptPluginParams>;
export function dmAddBrightScriptPluginWithoutValidation(name: string | null, assetItem: BsAssetItem | null): BsDmThunkAction<BrightScriptPluginParams>;
export interface BrightScriptPluginUpdateParams {
    id: BsDmId;
    name?: string;
    assetItem?: BsAssetItem;
}
export function dmUpdateBrightScriptPlugin(params: BrightScriptPluginUpdateParams, validate?: boolean): BsDmThunkAction<BrightScriptPluginParams>;
export function dmUpdateBrightScriptPluginWithoutValidation(params: BrightScriptPluginUpdateParams): BsDmThunkAction<BrightScriptPluginParams>;
export interface BrightScriptPluginRemoveParams {
    id: BsDmId;
}
export type BrightScriptPluginRemoveAction = BsDmAction<BrightScriptPluginRemoveParams>;
export function dmRemoveBrightScriptPlugin(id: BsDmId): BsDmThunkAction<BrightScriptPluginRemoveParams>;

/** @module Actions:ParserPlugin */
export interface ParserBrightScriptPluginParams {
    id: BsDmId;
    name?: string;
    assetId?: BsDmId;
    parseFeedFunctionName?: string;
    parseUVFunctionName?: string;
    userAgentFunctionName?: string;
}
export type ParserBrightScriptPluginAction = BsDmAction<ParserBrightScriptPluginParams>;
export function dmAddParserBrightScriptPlugin(name: string | null, assetItem: BsAssetItem | null, parseFeedFunctionName?: string, parseUVFunctionName?: string, userAgentFunctionName?: string, validate?: boolean): BsDmThunkAction<ParserBrightScriptPluginParams>;
export function dmAddParserBrightScriptPluginWithoutValidation(name: string | null, assetItem: BsAssetItem | null, parseFeedFunctionName?: string, parseUVFunctionName?: string, userAgentFunctionName?: string): BsDmThunkAction<ParserBrightScriptPluginParams>;
export interface ParserBrightScriptPluginUpdateParams {
    id: BsDmId;
    name?: string;
    assetItem?: BsAssetItem;
    parseFeedFunctionName?: string;
    parseUVFunctionName?: string;
    userAgentFunctionName?: string;
}
export function dmUpdateParserBrightScriptPlugin(params: ParserBrightScriptPluginUpdateParams, validate?: boolean): BsDmThunkAction<ParserBrightScriptPluginParams>;
export function dmUpdateParserBrightScriptPluginWithoutValidation(params: ParserBrightScriptPluginUpdateParams): BsDmThunkAction<ParserBrightScriptPluginParams>;
export interface ParserBrightScriptPluginRemoveParams {
    id: BsDmId;
}
export type ParserBrightScriptPluginRemoveAction = BsDmAction<ParserBrightScriptPluginRemoveParams>;
export function dmRemoveParserBrightScriptPlugin(id: BsDmId): BsDmThunkAction<ParserBrightScriptPluginRemoveParams>;

/** @module Actions:VideoModePlugin */
export interface VideoModeBrightScriptPluginParams {
    id: BsDmId;
    name?: string;
    assetId?: BsDmId;
    functionName?: string;
}
export type VideoModeBrightScriptPluginAction = BsDmAction<VideoModeBrightScriptPluginParams>;
export function dmAddVideoModeBrightScriptPlugin(name: string | null, assetItem: BsAssetItem | null, functionName?: string, validate?: boolean): BsDmThunkAction<VideoModeBrightScriptPluginParams>;
export function dmAddVideoModeBrightScriptPluginWithoutValidation(name: string | null, assetItem: BsAssetItem | null, functionName?: string): BsDmThunkAction<VideoModeBrightScriptPluginParams>;
export interface VideoModeBrightScriptPluginUpdateParams {
    id: BsDmId;
    name?: string;
    assetItem?: BsAssetItem;
    functionName?: string;
}
export function dmUpdateVideoModeBrightScriptPlugin(params: VideoModeBrightScriptPluginUpdateParams, validate?: boolean): BsDmThunkAction<VideoModeBrightScriptPluginParams>;
export function dmUpdateVideoModeBrightScriptPluginWithoutValidation(params: VideoModeBrightScriptPluginUpdateParams): BsDmThunkAction<VideoModeBrightScriptPluginParams>;
export interface VideoModeBrightScriptPluginRemoveParams {
    id: BsDmId;
}
export type VideoModeBrightScriptPluginRemoveAction = BsDmAction<VideoModeBrightScriptPluginRemoveParams>;
export function dmRemoveVideoModeBrightScriptPlugin(id: BsDmId): BsDmThunkAction<VideoModeBrightScriptPluginRemoveParams>;

/** @module Actions:AuxiliaryFiles */
export interface AuxiliaryFileParams {
    id: BsDmId;
    name?: string;
    assetId?: BsDmId;
}
export type AuxiliaryFileAction = BsDmAction<AuxiliaryFileParams>;
/**
 * Add an auxiliary file.
 * @param {string} name
 * @param {BsAssetItem} assetItem - assetItem for the file
 * @param {boolean} [validate=true] - if true, an exception will be thrown if file asset is not valid
 * @returns {BsDmThunkAction<AuxiliaryFileParams>}
 */
export function dmPutAuxiliaryFile(name: string, assetItem: BsAssetItem, validate?: boolean): BsDmThunkAction<AuxiliaryFileParams>;
/**
 * Add an auxiliary file without validation (no exceptions will be thrown.)
 * @param {string} name
 * @param {BsAssetItem} assetItem - assetItem for the file
 * @returns {BsDmThunkAction<AuxiliaryFileParams>}
 */
export function dmPutAuxiliaryFileWithoutValidation(name: string, assetItem: BsAssetItem): BsDmThunkAction<AuxiliaryFileParams>;
export interface AuxiliaryFileUpdateParams {
    id: BsDmId;
    name?: string;
    assetItem?: BsAssetItem;
}
/**
 * Update an auxiliary file.
 * @param {AuxiliaryFileUpdateParams} params
 * @param {boolean} [validate=true] - if true, an exception will be thrown if file asset is not valid
 * @returns {BsDmThunkAction<AuxiliaryFileParams>}
 */
export function dmUpdateAuxiliaryFile(params: AuxiliaryFileUpdateParams, validate?: boolean): BsDmThunkAction<AuxiliaryFileParams>;
/**
 * Update an auxiliary file without validation (no exceptions will be thrown.)
 * @param {AuxiliaryFileUpdateParams} params
 * @returns {BsDmThunkAction<AuxiliaryFileParams>}
 */
export function dmUpdateAuxiliaryFileWithoutValidation(params: AuxiliaryFileUpdateParams): BsDmThunkAction<AuxiliaryFileParams>;
export interface AuxiliaryFileRemoveParams {
    id: BsDmId;
}
export type AuxiliaryFileRemoveAction = BsDmAction<AuxiliaryFileRemoveParams>;
/**
 * Remove file from the auxiliary file list.
 * @param {BsDmId} id - auxiliary file ID
 * @returns {BsDmThunkAction<AuxiliaryFileRemoveParams>}
 */
export function dmRemoveAuxiliaryFiles(id: BsDmId): BsDmThunkAction<AuxiliaryFileRemoveParams>;

/** @module Actions:LinkedPresentations */
export interface LinkedPresentationParams {
    id: BsDmId;
    name?: string;
    assetId?: BsDmId;
}
export type LinkedPresentationAction = BsDmAction<LinkedPresentationParams>;
/**
 * Add a linked presentation.
 * @param {string} name
 * @param {BsAssetItem} assetItem - assetItem for the presentation. It must be of type AssetItem.Project.
 * @param {boolean} [validate=true] - if true, an exception will be thrown if presentation asset is not valid
 * @returns {BsDmThunkAction<LinkedPresentationParams>}
 */
export function dmPutLinkedPresentation(name: string, assetItem: BsAssetItem, validate?: boolean): BsDmThunkAction<LinkedPresentationParams>;
/**
 * Add a linked presentation without validation (no exceptions will be thrown.)
 * @param {string} name
 * @param {BsAssetItem} assetItem - assetItem for the file. It must be of type AssetItem.Project.
 * @returns {BsDmThunkAction<LinkedPresentationParams>}
 */
export function dmPutLinkedPresentationWithoutValidation(name: string, assetItem: BsAssetItem): BsDmThunkAction<LinkedPresentationParams>;
export interface LinkedPresentationUpdateParams {
    id: BsDmId;
    name?: string;
    assetItem?: BsAssetItem;
}
/**
 * Update a linked presentation.
 * @param {LinkedPresentationUpdateParams} params
 * @param {boolean} [validate=true] - if true, an exception will be thrown if file asset is not valid
 * @returns {BsDmThunkAction<LinkedPresentationParams>}
 */
export function dmUpdateLinkedPresentation(params: LinkedPresentationUpdateParams, validate?: boolean): BsDmThunkAction<LinkedPresentationParams>;
/**
 * Update a linked presentation without validation (no exceptions will be thrown.)
 * @param {LinkedPresentationUpdateParams} params
 * @returns {BsDmThunkAction<LinkedPresentationParams>}
 */
export function dmUpdateLinkedPresentationWithoutValidation(params: LinkedPresentationUpdateParams): BsDmThunkAction<LinkedPresentationParams>;
export interface LinkedPresentationRemoveParams {
    id: BsDmId;
}
export type LinkedPresentationRemoveAction = BsDmAction<LinkedPresentationRemoveParams>;
/**
 * Remove presentation from the linked presentation list.
 * @param {BsDmId} id - linked presentation ID
 * @returns {BsDmThunkAction<LinkedPresentationRemoveParams>}
 */
export function dmRemoveLinkedPresentation(id: BsDmId): BsDmThunkAction<LinkedPresentationRemoveParams>;

/** @module Actions:CustomAutorun */
export type CustomAutorunAction = BsDmAction<BsAssetId>;
export function dmSetCustomAutorun(assetItem: BsAssetItem): BsDmThunkAction<BsAssetId>;
export function dmResetCustomAutorun(): BsDmThunkAction<BsAssetId>;
export function dmSetEmptyCustomAutorun(): CustomAutorunAction;

/** @module Actions:Playlist */
/**
 * Payload structure for PlaylistAddMediaStateAction
 *  This is not directly used, since this action is a compound action.
 *  It is returned to detail the payload in the action returned from the action dispatch.
 */
export interface PlaylistAddMediaStateParams {
    id: BsDmId;
    index: number;
    container: DmMediaStateContainer;
    contentItem: DmDerivedContentItem;
    name?: string;
    transitionType?: TransitionType;
    eventType?: EventType;
    eventData?: any;
}
export type PlaylistAddMediaStateAction = BsDmAction<PlaylistAddMediaStateParams>;
/**
 * Add a new MediaState to the playlist at a given index.
 * This function will fail if the MediaState container does not contain a valid simple playlist.
 *
 * @param index {number} - zero based index at which to add new MediaState.
 *   If out of range, MediaState will be appended to the end.
 * @param container {DmMediaStateContainer}- MediaState container
 * @param content {DmMediaStateContentItemSpecification} - Content
 *   This can be either a DerivedContentItem (for non media based contentItems,)
 *   or a BsAssetItem (for media file, html site or data feed content.) If a BsAssetItem is given,
 *   the asset will be added to the AssetMap (and/or HtmlSite/DataFeed list) if necessary, and a ContentItem
 *   of the correct type will be generated for the MediaState with the correct referencing information
 * @param [name=fileName or 'StateX'] {string | null} - desired mediaState name.
 *   Default: media fileName if contentItem has a media file, "State" + a numeric index otherwise
 * @param [contentData=default values] {DmContentItemData} - contains values for one or more contentItem
 *   properties. This can be used to set ancillary contentItem properties when the 'content' param
 *   is an assetItem.
 * @param [transitionType=NoEffect] {TransitionType} - type of Transition into new state from previous state.
 * @param [eventType] {EventType} - type of event that triggers the transition.
 *   Default: MediaEnd for video/audio, Timer for images
 * @param [eventData=undefined] {object} - data for event. For timer events, this be be a DmTimer object
 * @returns {BsDmThunkAction} When dispatched, the thunk function will return a PlaylistAddMediaStateAction object.
 *   If the thunk function succeeds, the action properties returned will be the ones used, including substitutions
 *   made for optional input.
 *   If the function fails, a BsDmError is thrown.
 */
export function dmPlaylistAddMediaState(index: number, container: DmMediaStateContainer, content: DmMediaStateContentItemSpecification, name?: string | null, contentData?: Partial<DmContentItemData>, transitionType?: TransitionType, eventType?: EventType, eventData?: any): BsDmThunkAction<PlaylistAddMediaStateParams>;
/**
 * Append a new MediaState to the end of the playlist.
 *  This function will fail if the MediaState container does not contain a valid simple playlist.
 *
 * @param container {DmMediaStateContainer} - MediaState container
 * @param content {DmMediaStateContentItemSpecification} - Content
 *   This can be either a DerivedContentItem (for non media based contentItems,)
 *   or a BsAssetItem (for media file, html site or data feed content.) If a BsAssetItem is given,
 *   the asset will be added to the AssetMap (and/or HtmlSite/DataFeed list) if necessary, and a ContentItem
 *   of the correct type will be generated for the MediaState with the correct referencing information
 * @param [name=fileName or 'StateX'] {string | null} - desired mediaState name.
 *   Default: media fileName if contentItem has a media file, "State" + a numeric index otherwise
 * @param [contentData=default values] {DmContentItemData} - contains values for one or more contentItem
 *   properties. This can be used to set ancillary contentItem properties when the 'content' param
 *   is an assetItem.
 * @param [transitionType=NoEffect] {TransitionType} - type of Transition into new state from previous state.
 * @param [eventType] {EventType} - type of event that triggers the transition.
 *   Default: MediaEnd for video/audio, Timer for images
 * @param [eventData] {object} - data for event. For timer events, this be be a DmTimer object
 * @returns {BsDmThunkAction} When dispatched, the thunk function will return a PlaylistAddMediaStateAction object.
 *   If the thunk function succeeds, the action properties returned will be the ones used, including substitutions
 *   made for optional input.
 *   If the function fails, a BsDmError is thrown.
 */
export function dmPlaylistAppendMediaState(container: DmMediaStateContainer, content: DmMediaStateContentItemSpecification, name?: string | null, contentData?: Partial<DmContentItemData>, transitionType?: TransitionType, eventType?: EventType, eventData?: any): BsDmThunkAction<PlaylistAddMediaStateParams>;
export interface PlaylistAddMediaStateRangeParams {
    index: number;
    container: DmMediaStateContainer;
    id: BsDmId[];
    contentItems: DmDerivedContentItem[];
    name: string[];
}
export type PlaylistAddMediaStateRangeAction = BsDmAction<PlaylistAddMediaStateRangeParams>;
/**
 * Add one or more new MediaStates, as a range, at a specific index in the playlist.
 *  This function will fail if the MediaState container does not contain a valid simple playlist.
 *
 * @param index {number} - zero based index at which to add new MediaState.
 *   If out of range, MediaState will be appended to the end.
 * @param container {DmMediaStateContainer} - MediaState container
 * @param content {DmMediaStateContentItemSpecification[]} -
 *   array of Content objects.
 *   Each element can be either a DerivedContentItem (for non media based contentItems,)
 *   or a BsAssetItem (for media file, html site or data feed content.) If a BsAssetItem is given,
 *   the asset will be added to the AssetMap (and/or HtmlSite/DataFeed list) if necessary, and a ContentItem
 *   of the correct type will be generated for the MediaState with the correct referencing information
 * @param [name=fileName or 'StateX'] {Array<string | null> | null} - array of desired mediaState name corresponding
 *   to order of contentItem array. Pass null in any position  to indicate the default name should be
 *   used for the corresponding content item.
 *   Default: for any names that are missing, the filename is used if contentItem has a media file,
 *   "State" + a numeric index otherwise
 * @param [contentData=default values] {Array<DmContentItemData[] | null>} - an array of objects, each of which
 *   contains values for one or more contentItem properties associated with the corresponding content
 *   object on the 'content' array parameter. This can be used to set ancillary contentItem properties
 *   when a 'content' param is an assetItem. If default values are desired for one or more of the
 *   content items, set the corresponding member in this array to null.
 * @returns {BsDmThunkAction} When dispatched, the thunk function will return a PlaylistAddMediaStateRangeAction object.
 *   If the thunk function succeeds, the action properties returned will be the ones used, including substitutions
 *   made for optional input.
 *   If the function fails, a BsDmError is thrown.
 */
export function dmPlaylistAddMediaStateRange(index: number, container: DmMediaStateContainer, content: DmMediaStateContentItemSpecification[], name?: Array<string | null> | null, contentData?: Array<Partial<DmContentItemData> | null>): BsDmThunkAction<PlaylistAddMediaStateRangeParams>;
/**
 * Update a mediaState with new parameters for a mediaStates in a playlist.
 * A BsDmError will be thrown if the contentItem is not valid for the zone,
 *  or if the zone does not contain a simple playlist.
 * It is not possible to change the container (zone) for a media state with this action.
 * Note that this function takes MediaStateUpdateParams as an input parameter, but the thunk returns
 *  an action where the params property hold a resolved MediaStateParams object. If BsAssetItems are
 *  involved in content changes, batched actions are used to properly manage the assetPool.
 *
 * @param params {MediaStateUpdateParams} - update parameters
 * @returns {BsDmThunkAction} When dispatched, the thunk function will return a MediaStateAction object.
 *   If the thunk function succeeds, the action properties returned will be the ones used.
 *   If the function fails, a BsDmError is thrown.
 */
export function dmPlaylistUpdateMediaState(params: MediaStateUpdateParams): BsDmThunkAction<MediaStateParams>;
export interface PlaylistDeleteMediaStateRangeParams {
    containerId: BsDmId;
    startingIndex: number;
    count?: number;
}
export type PlaylistDeleteMediaStateRangeAction = BsDmAction<PlaylistDeleteMediaStateRangeParams>;
/**
 * Delete one or more MediaStates from a playlist.
 *  If deleting multiple states, this function deletes a range of consecutive media states
 *  This function will fail if the MediaState container does not contain a valid simple playlist.
 *  This function will fail if startingIndex and count denote an invalid range within the playlist.
 *
 * @param container {DmMediaStateContainer} - MediaState container
 * @param startingIndex {number} - zero based index of first MediaState to delete
 * @param [count=1] {number} - total number of MediaStates to delete
 * @returns {BsDmThunkAction} When dispatched, the thunk function will return
 *   a PlaylistDeleteMediaStateRangeAction object.
 *   If the thunk function succeeds, the action properties returned will be the ones used.
 *   If the function fails, a BsDmError is thrown.
 */
export function dmPlaylistDeleteMediaStateRange(container: DmMediaStateContainer, startingIndex: number, count?: number): BsDmThunkAction<PlaylistDeleteMediaStateRangeParams>;
export interface PlaylistDeleteMediaStateIndicesParams {
    containerId: BsDmId;
    indices: number[];
}
export type PlaylistDeleteMediaStateIndicesAction = BsDmAction<PlaylistDeleteMediaStateIndicesParams>;
/**
 * Delete one or more MediaStates from a playlist.
 *  This function deletes all mediaStates at the indices in the given index array
 *  This function will fail if the MediaState container does not contain a valid simple playlist.
 *  This function will fail if indices array is empty or undefined.
 *  The function will NOT fail if the arrays contains invalid (out of range) indices,
 *   but any such invalid indices will be ignored.
 *
 * @param container {DmMediaStateContainer} - MediaState container
 * @param indices {number[]} - array of indices (integers) corresponding to playlist mediaState positions
 *  at which to delete mediaStates
 * @returns {BsDmThunkAction} When dispatched, the thunk function will return
 *   a PlaylistDeleteMediaStateIndicesAction object.
 *   If the thunk function succeeds, the action properties returned will be the ones used.
 *   If the function fails, a BsDmError is thrown.
 */
export function dmPlaylistDeleteMediaStatesAtIndices(container: DmMediaStateContainer, indices: number[]): BsDmThunkAction<PlaylistDeleteMediaStateIndicesParams>;
export interface PlaylistMoveMediaStateRangeParams {
    containerId: BsDmId;
    startingIndex: number;
    targetIndex: number;
    count?: number;
}
export type PlaylistMoveMediaStateRangeAction = BsDmAction<PlaylistMoveMediaStateRangeParams>;
/**
 * Move a contiguous range of one or more MediaStates within a playlist.
 * This function will fail if the MediaState container does not contain a valid simple playlist.
 * This function will fail if startingIndex, targetIndex, and count do not describe a valid move.
 *
 * @param container {DmMediaStateContainer} - MediaState container
 * @param startingIndex {number} - zero based index of first MediaState to move
 * @param targetIndex {number} - The index in the playlist at which the first mediaState to move
 *  should be located after the move.
 * @param [count=1] {number} - total number of MediaStates to move
 * @returns {BsDmThunkAction} When dispatched, the thunk function will return
 *   a PlaylistMoveMediaStateRangeAction object.
 *   If the thunk function succeeds, the action properties returned will be the ones used.
 *   If the function fails, a BsDmError is thrown.
 */
export function dmPlaylistMoveMediaStateRange(container: DmMediaStateContainer, startingIndex: number, targetIndex: number, count?: number): BsDmThunkAction<PlaylistMoveMediaStateRangeParams>;
export interface PlaylistMoveMediaStateIndicesParams {
    containerId: BsDmId;
    indices: number[];
    targetIndex: number;
}
export type PlaylistMoveMediaStateIndicesAction = BsDmAction<PlaylistMoveMediaStateIndicesParams>;
/**
 * Move a non-contiguous set of MediaStates within a playlist.
 * This function will fail if the MediaState container does not contain a valid simple playlist.
 * This function will fail if the indices array is empty.
 *
 * The selected MediaStates will be removed from the playlist and then re-inserted
 *  as a contiguous group before the targetIndex. The targetIndex is the
 *  insertion index relative to the original playlist (i.e., before the mediaStates
 *  being removed are extracted.)
 *
 * @param container {DmMediaStateContainer} - MediaState container
 * @param indices {number[]} - array of zero-based indices (integers) corresponding to playlist mediaState positions
 *  of mediaStates to move
 * @param targetIndex {number} - The index in the original playlist before which the moved mediaStates
 *  should be re-inserted
 * @returns {BsDmThunkAction} When dispatched, the thunk function will return
 *   a PlaylistMoveMediaStateIndicesAction object.
 *   If the thunk function succeeds, the action properties returned will be the ones used.
 *   If the function fails, a BsDmError is thrown.
 */
export function dmPlaylistMoveMediaStatesAtIndices(container: DmMediaStateContainer, indices: number[], targetIndex: number): BsDmThunkAction<PlaylistMoveMediaStateIndicesParams>;
/**
 * Paste mediaStates and dependencies contained in the given copySet to the given container.
 * @param copySet {DmMediaStateCopySet} - the copySet containing the playList mediaStates and dependencies
 *  (events, transitions, etc.) to be pasted
 * @param container {DmMediaStateContainer} - the container in which the copySet is to be pasted.
 *  This must be a nonInteractive zone.
 * @param [options] {DmPasteMediaStateOptions} - paste options
 * @returns {BsDmThunkAction<MediaStatePasteParams>}
 */
export function dmPlaylistPasteMediaStateCopySet(copySet: DmMediaStateCopySet, container: DmMediaStateContainer, options?: DmPasteMediaStateOptions): BsDmThunkAction<MediaStatePasteParams>;
export interface ChangeZoneToNonInteractiveParams {
    zoneId: BsDmId;
}
export type ChangeZoneToNonInteractiveAction = BsDmAction<ChangeZoneToNonInteractiveParams>;
/**
 * Change an interactive zone to an nonInteractive zone. Nothing is done if the zone for the given zone ID is already
 *  an interactive zone.
 * If the mediaStates in the interactive zone form a valid playlist, they are left intact. If they do not,
 *  all mediaStates and their dependencies are removed, and the zone if left empty.
 * @param zoneId {BsDmId}
 * @returns {BsDmThunkAction<ChangeZoneToInteractiveParams>}
 */
export function dmChangeInteractiveZoneToNonInteractive(zoneId: BsDmId): BsDmThunkAction<ChangeZoneToNonInteractiveParams>;

/** @module Actions:Interactive */
export interface InteractiveAddEventTransitionParams {
    nameBase: string | null;
    eventId: BsDmId;
    transitionId: BsDmId;
    sourceMediaStateId: BsDmId;
    targetMediaStateId: BsDmId | null;
    eventSpec: DmEventSpecification;
}
export type InteractiveAddEventTransitionAction = BsDmAction<InteractiveAddEventTransitionParams>;
/**
 * In an interactive presentation, add an event and transition pair between two mediaStates. The event added
 *  will be an event created with the given event type, and default event data for that type.
 * An EventIntrinsicAction can also be specified for the event that creates only an event
 *  with an intrinsic action (e.g., return to prior state) and no transition.
 * @param nameBase {string | null} - base name for event and transition. Event name will be <base>_ev,
 *  transition name will be <base>_tr. If nameBase is null or blank, both names will be left blank.
 * @param source {BsDmId} - mediaState ID of mediaState to which the event is added
 * @param target {BsDmId | null} - mediaState ID for target of transition, or BsDmIdNone | null if
 *  an EventIntrinsicAction is specified in the eventSpec parameter that does not require a target
 * @param eventType {EventType} - type of event to add
 * @param [eventData] {Partial<DmEventData> | null} - if specified, supplied data properties will be set
 *  in the eventData structure, overriding default values
 * @param [action] {EventIntrinsicAction} - if specified, this is specified as the intrinsic action for the event
 * @returns {BsDmThunkAction<InteractiveAddEventTransitionParams>}
 */
export function dmInteractiveAddTransitionForEventType(nameBase: string | null, source: BsDmId, target: BsDmId, eventType: EventType, eventData?: Partial<DmEventData> | null, action?: EventIntrinsicAction): BsDmThunkAction<InteractiveAddEventTransitionParams>;
/**
 * In an interactive presentation, add an event and transition pair between two mediaStates.
 * An EventIntrinsicAction can also be specified in the event specification that creates only an event
 *  with an intrinsic action (e.g., return to prior state) and no transition.
 * @param nameBase {string | null} - base name for event and transition. Event name will be <base>_ev,
 *  transition name will be <base>_tr. If nameBase is null or blank, both names will be left blank.
 * @param source {BsDmId} - mediaState ID of mediaState to which the event is added
 * @param target {BsDmId | null} - mediaState ID for target of transition, or BsDmIdNone | null if
 *  an EventIntrinsicAction is specified in the eventSpec parameter that does not require a target
 * @param eventSpec {DmEventSpecification} - specification for the event
 * @returns {BsDmThunkAction<InteractiveAddEventTransitionParams>}
 */
export function dmInteractiveAddTransitionForEventSpecification(nameBase: string | null, source: BsDmId, target: BsDmId | null, eventSpec: DmEventSpecification): BsDmThunkAction<InteractiveAddEventTransitionParams>;
export interface InteractiveUpdateEventTransitionParams {
    eventId: BsDmId;
    nameBase?: string | null;
    eventSpec?: DmEventSpecification | null;
    target?: BsDmId | null;
}
export type InteractiveUpdateEventTransitionAction = BsDmAction<InteractiveUpdateEventTransitionParams>;
/**
 * Update an event/transition pair, or an event with intrinsic action, in an interactive playlist.
 * This function can update (change) event type and event data. The updated event must be fully specified
 *  by supplying a complete DmEventSpecification object, containing type, data, and intrinsic action.
 * This function can also update the mediaState target for the associated defaultTransition for the event.
 * This capability is tied in with the EventIntrinsicAction. The target can be specified as BsDmIdNone,
 *  which implies that the event should not transition to a different mediaState. In this case,
 *  the event behavior is determined by EventIntrinsicAction, where the action parameter
 *  could be EventIntrinsicAction.None (remain on current state), EventIntrinsicAction.ReturnToPriorState,
 *  EventIntrinsicAction.StopPlayback (and remain of current state), or EventIntrinsicAction.StopPlaybackAndClearScreen
 *  (and remain on current state.) If the mediaState target is set to a mediaState ID, action will always
 *  be set to EventIntrinsicAction.None.
 * IMPORTANT NOTE: an existing default transition will be removed ONLY if the target is set to BsDmIdNone.
 * @param params {InteractiveUpdateEventTransitionParams}
 * @returns {BsDmThunkAction<InteractiveUpdateEventTransitionParams>}
 */
export function dmUpdateEventAndDefaultTransition(params: InteractiveUpdateEventTransitionParams): BsDmThunkAction<InteractiveUpdateEventTransitionParams>;
export interface ChangeZoneToInteractiveParams {
    zoneId: BsDmId;
}
export type ChangeZoneToInteractiveAction = BsDmAction<ChangeZoneToInteractiveParams>;
/**
 * Change a nonInteractive zone to an interactive zone. Nothing is done if the zone for the given zone ID is already
 *  an interactive zone.
 * @param zoneId {BsDmId}
 * @returns {BsDmThunkAction<ChangeZoneToInteractiveParams>}
 */
export function dmChangeNonInteractiveZoneToInteractive(zoneId: BsDmId): BsDmThunkAction<ChangeZoneToInteractiveParams>;

/** @module Actions:Thumbnail */
export type ThumbnailParam = DmThumbnail | null;
export type ThumbnailAction = BsDmAction<ThumbnailParam>;
/**
 * Set the presentation thumbnail.
 * @param {BsLocalAssetThumbnail} assetThumbnail - thumbnail data, type, etc.
 * @returns {ThumbnailAction}
 */
export function dmSetThumbnail(assetThumbnail: BsLocalAssetThumbnail): ThumbnailAction;
/**
 * Delete the presentation thumbnail (set thumbnail to null)
 * @returns {ThumbnailAction}
 */
export function dmDeleteThumbnail(): ThumbnailAction;

/** @module Actions:PartnerProduct */
export interface PartnerProductParams {
    id: BsDmId;
    port?: string;
    partnerName?: string;
    productName?: string;
}
export type PartnerProductAction = BsDmAction<PartnerProductParams>;
/**
 * Add a partner product.
 * @param {string} port
 * @param {string} partnerName
 * @param {string} productName
 * @returns {PartnerProductAction}
 */
export function dmAddPartnerProduct(port: string, partnerName: string, productName: string): PartnerProductAction;
/**
 * Update one or more partner product parameters.
 * @param {PartnerProductParams} params
 * @returns {PartnerProductAction}
 */
export function dmUpdatePartnerProduct(params: PartnerProductParams): PartnerProductAction;
export interface PartnerProductsDeleteParams {
    ids: BsDmId[];
}
export type PartnerProductDeleteAction = BsDmAction<PartnerProductsDeleteParams>;
/**
 * Delete a partner product.
 * @param {BsDmId | BsDmId[]} id
 * @returns {PartnerProductDeleteAction}
 */
export function dmDeletePartnerProduct(id: BsDmId | BsDmId[]): PartnerProductDeleteAction;

/** @module Selectors:AssetMap */
/**
 * Return BsAssetItem object for a given assetId
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - ID property: ID string for assetId
 * @returns {BsAssetItem} assetItem object
 *          null if assetItem is not found with the given ID
 */
export function dmGetAssetItemById(state: DmState, props: DmIdParam): BsAssetItem | null;
/**
 * Return BsAssetId for a given asset locator string
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmLocatorParam} - locator property: locator string for asset
 * @returns {BsAssetId | null} assetId string corresponding to given locator
 *          null if assetId is not found for the locator
 */
export function dmGetAssetIdByLocator(state: DmState, props: DmLocatorParam): BsAssetId | null;
/**
 * Return BsAssetItem object for a given asset locator string
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmLocatorParam} - locator property: locator string for asset
 * @returns {BsAssetItem} assetItem object corresponding to given locator
 *          null if asset is not found for the locator
 */
export function dmGetAssetItemByLocator(state: DmState, props: DmLocatorParam): BsAssetItem | null;
/**
 * Return an array of all assetIds in the AssetMap of the current sign.
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsAssetId[]} array of assetIds
 */
export function dmGetAssetItemIdsForSign(state: DmState): BsAssetId[];
/**
 * Return true if the state has any assets that are AssetLocation.Local.
 * @param state {DmState} - bsDataModel state
 * @returns {boolean}
 */
export function dmHasLocalAssetItems(state: DmState): boolean;
/**
 * Return list of all assetItems that represent media files.
 * @param state {DmState} - bsDataModel state
 * @returns {BsAssetItem[]}
 */
export function dmGetMediaContentAssetItemList(state: DmState): BsAssetItem[];
/**
 * Return list of all assetItems that exactly match the given fileName (baseName.) Name comparison is case-insensitive.
 * All AssetTypes in the assetMap are checked, type differentiation is assumed to be handled by the file extension.
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - fileName to match
 * @returns {BsAssetItem[]}
 */
export function dmGetAssetItemListForFileName(state: DmState, props: DmNameParam): BsAssetItem[];
/**
 * Return list of assetLocators for all BSN assetItems in the assetPool.
 * @param state {DmState} - bsDataModel state
 * @returns {BsAssetLocator[]}
 */
export function dmGetBsnAssetLocatorList(state: DmState): BsAssetLocator[];
/**
 * Return list of assetLocators for all Local assetItems in the assetPool.
 * @param state {DmState} - bsDataModel state
 * @returns {BsAssetLocator[]}
 */
export function dmGetLocalAssetLocatorList(state: DmState): BsAssetLocator[];
/**
 * Return list of assetItems for all Blob assetItems in the assetPool.
 * @param state {DmState} - bsDataModel state
 * @returns {BsAssetItem[]}
 */
export function dmGetBlobAssetItemList(state: DmState): BsAssetItem[];
/**
 * Return BsnPresentationAssetItemSpecification containing all assetItems for BSN publishing.
 * All assets must be located on BSN.
 * Returns null if there are any local assets.
 * @param state {DmState} - bsDataModel state
 * @returns {BsnPresentationAssetItemSpecification | null}
 */
export function dmGetBsnPresentationAssetItemSpecification(state: DmState): BsnPresentationAssetItemSpecification | null;

/** @module Selectors:AuxiliaryFiles */
/**
 * Return file state with given id.
 *
 * @param {DmState} state
 * @param {DmIdParam} props
 * @returns {DmAuxiliaryFile}
 */
export function dmGetAuxiliaryFileStateById(state: DmState, props: DmIdParam): DmAuxiliaryFile | null;
/**
 * Return list of IDs of DmAuxiliaryFile objects representing auxiliary files
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsDmId[]}
 */
export function dmGetAuxiliaryFileIds(state: DmState): BsDmId[];
/** @deprecated - use dmGetAuxiliaryFileIds */
export const dmGetAuxiliaryFileList: typeof dmGetAuxiliaryFileIds;
/**
 * Return list of assetIds that have been added as auxiliary files
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsAssetId[]}
 */
export function dmGetAuxiliaryFileAssetIds(state: DmState): BsAssetId[];
/**
 * Return list of asset fileNames for auxiliary files
 *
 * @param state {DmState} - bsDataModel state
 * @returns {string[]}
 */
export function dmGetAuxiliaryFileAssetNames(state: DmState): BsAssetId[];
/**
 * Return count of auxiliary files
 *
 * @param state {DmState} - bsDataModel state
 * @returns {number}
 */
export function dmGetAuxiliaryFileCount(state: DmState): number;
/**
 * Return file state with given name.
 *
 * @param {DmState} state
 * @param {DmNameParam} props
 * @returns {DmAuxiliaryFile}
 */
export function dmGetAuxiliaryFileStateByName(state: DmState, props: DmNameParam): DmAuxiliaryFile | null;
/**
 * Validate auxiliaryFiles defined for the sign.
 * @param {DmState} state
 * @returns {BsDmEntityValidationResult}
 */
export function dmValidateAuxiliaryFiles(state: DmState): BsDmEntityValidationResult;

/** @module Selectors:PartnerProduct */
/**
 * Return list if IDs for all partner products
 *
 * @param state {DmState} - bsDataModel state
 * @return {BsDmId[]}
 */
export function dmGetPartnerProducts(state: DmState): BsDmId[];
/**
 * Return PartnerProduct state with given id.
 *
 * @param {DmState} state
 * @param {DmIdParam} props
 * @returns {DmPartnerProduct}
 */
export function dmGetPartnerProductById(state: DmState, props: DmIdParam): DmPartnerProduct | null;

/** @module Selectors:Command */
/**
 * Return DmcCommand class for given command ID.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - ID property: ID string for command
 * @returns {DmcCommand | null}
 */
export function dmGetCommandById(state: DmState, props: DmIdParam): DmcCommand | null;
/**
 * Return command sequence ID for given parent entity and CommandSequenceType
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdAndTypeParam} - (equivalent to DmIdParam & DmTypeParam):
 *  ID property: ID string for parent entity of the command. This can be a mediaState, event, or transition ID.
 *  Type property: CommandSequenceType of command sequence within the parent entity.
 * @returns {BsDmId} commandSequence ID
 */
export function dmGetCommandSequenceIdForParentAndType(state: DmState, props: DmIdParam & DmTypeParam): BsDmId | null;
/**
 * Return simple DmCommandSequence state object for given commandSequence ID
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - commandSequence ID
 * @returns {DmCommandSequence | null}
 */
export function dmGetCommandSequenceStateById(state: DmState, props: DmIdParam): DmCommandSequence | null;
/**
 * Return simple DmCommandSequence state object for given parent entity and CommandSequenceType
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdAndTypeParam} - (equivalent to DmIdParam & DmTypeParam):
 *  ID property: ID string for parent entity of the command. This can be a mediaState, event, or transition ID.
 *  Type property: CommandSequenceType of command sequence within the parent entity.
 * @returns {DmCommandSequence | null}
 */
export function dmGetCommandSequenceStateForParentAndType(state: DmState, props: DmIdAndTypeParam): DmCommandSequence | null;
/**
 * Get sequence array of StateEntry command IDs for given mediaState ID.
 *  An empty array is returned if there are no entry commands for the mediaState.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - mediaState ID for which to return entry command ID array
 * @returns {BsDmId[]}
 */
export function dmGetEntryCommandIdsForMediaState(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Get sequence array of StateExit command IDs for given mediaState ID.
 *  An empty array is returned if there are no exit commands for the mediaState.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - mediaState ID for which to return exit command ID array
 * @returns {BsDmId[]}
 */
export function dmGetExitCommandIdsForMediaState(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Get sequence array of SequenceItemNext command IDs for given mediaState ID.
 *  This command type is valid for MediaList mediaStates only.
 *  An empty array is returned if there are no SequenceItemNext commands for the mediaState.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - mediaState ID for which to return SequenceItemNext command ID array
 * @returns {BsDmId[]}
 */
export function dmGetSequenceItemNextCommandIdsForMediaState(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Get sequence array of SequenceItemPrevious command IDs for given mediaState ID.
 *  This command type is valid for MediaList mediaStates only.
 *  An empty array is returned if there are no SequenceItemPrevious commands for the mediaState.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - mediaState ID for which to return SequenceItemPrevious command ID array
 * @returns {BsDmId[]}
 */
export function dmGetSequenceItemPreviousCommandIdsForMediaState(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return all IDs for command sequences for given parent entity (mediaState, event, or transition)
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - parent ID (mediaState, event, or transition ID) for which
 *  to return commandSequence ID array
 * @returns {BsDmId[]} - command sequence IDs
 */
export function dmGetCommandSequenceIdsForParentId(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Get sequence array of Event command IDs for given event ID.
 *  An empty array is returned if there are no commands for the event.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - event ID for which to return command ID array
 * @returns {BsDmId[]}
 */
export function dmCommandIdsForEvent(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Get sequence array of command IDs for for commands containing one of a given set of command operation types.
 *  An empty array is returned if there are no commands for the operation types.
 * @param state {DmState} - bsDataModel state
 * @param props {DmTypeArrayParam} - array of command types for which to return command ID array
 * @returns {BsDmId[]}
 */
export function dmGetCommandIdsForCommandOperationTypes(state: DmState, props: DmTypeArrayParam): BsDmId[];
/**
 * Get sequence array of Transition command IDs for given transition ID.
 *  An empty array is returned if there are no commands for the transition.
 * @param state {DmState} - bsDataModel state
 * @param props {BsDmId} - transition ID for which to return command ID array
 * @returns {BsDmId[]}
 */
export function dmCommandIdsForTransition(state: DmState, props: DmIdParam): BsDmId[];
export function dmValidateCommand(state: DmState, props: DmIdParam): BsDmEntityValidationResult;
/**
 * @interface DmMediaStateCommandStates - Interface for an object holding entry and exit commands for a mediaState.
 * @property entry {Array<Readonly<DmCommand>>} - array of DmCommand objects for the entry commands
 * @property exit {Array<Readonly<DmCommand>>} - array of DmCommand objects for the exit commands
 */
export interface DmMediaStateCommandStates {
    entry: Array<Readonly<DmCommand>>;
    exit: Array<Readonly<DmCommand>>;
}
/**
 * Returns a DmCommandSequenceCopySet containing the commands for a given command parent
 *  (mediaState, event, or transition,) and the given CommandSequenceType.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdAndTypeParam} - (equivalent to DmIdParam & DmTypeParam):
 *  ID property: ID string for parent entity of the command. This can be a mediaState, event, or transition ID.
 *  Type property: CommandSequenceType of command sequence within the parent entity.
 * @returns {DmCommandCopySet}
 */
export function dmGetCommandSequenceCopySet(state: DmState, props: DmIdAndTypeParam): DmCommandCopySet;
/**
 * Returns a DmCommandSequenceCopySet containing the given commands.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdListParam} - list of DmCommand IDs to be included in the copySet. The copy set will contain a
 *  single command sequence, for which the type and parent ID are set from the first DmCommand in the list.
 *  DmCommand objects for valid command IDs in the ID list are included in the copySet.
 * @returns {DmCommandCopySet}
 */
export function dmGetCommandCopySet(state: DmState, props: DmIdListParam): DmCommandCopySet;

/** @module Selectors:CustomAutorun */
/**
 * Return assetId for the custom autorun file. If no custom autorun is specified,
 *  BsAssetIdNone is returned.
 * @param {DmState} state - bsDataModel state
 * @return {BsAssetId} asset ID of custom autorun file, or BsAssetIdNone if
 *  custom autorun is not used
 */
export function dmGetCustomAutorunId(state: DmState): BsAssetId;
/**
 * Return BsAssetItem for custom autorun file if one has been specified.
 *  Null is returned if custom autorun file has not been specified.
 * @param {DmState} state - bsDataModel state
 * @return {BsAssetItem | null}
 */
export function dmGetCustomAutorunAssetItem(state: DmState): BsAssetItem | null;

/** @module Selectors:DataFeed */
/**
 * Return a DmDataFeedEntityGroup object containing the simple state objects for all components of a dataFeed.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: dataFeed ID for which to return DmDataFeedEntityGroup object
 * @returns {DmDataFeedEntityGroup | null}
 *          null if dataFeed is not found with the given ID
 */
export function dmGetDataFeedStateEntitiesByFeedId(state: any, props: DmIdParam): DmDataFeedEntityGroup | null;
/**
 * Return simple DmDataFeed object for a given DataFeed ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: dataFeed ID for which to return dataFeed object
 * @returns {DmDataFeed | null} simple dataFeed object corresponding to given ID
 *          null if dataFeed is not found with the given ID
 */
export function dmGetDataFeedStateById(state: DmState, props: DmIdParam): DmDataFeed | null;
/**
 * Return DmcDataFeed object for a given DataFeed ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: dataFeed ID for which to return dataFeed object
 * @returns {DmcDataFeed | null} dataFeed object corresponding to given ID
 *          null if dataFeed is not found with the given ID
 */
export function dmGetDataFeedById(state: DmState, props: DmIdParam): DmcDataFeed | null;
/**
 * Return array of DataFeed IDs for the sign
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsDmId[]} array of dataFeed IDs for all dataFeeds in the sign
 */
export function dmGetDataFeedIdsForSign(state: DmState): BsDmId[];
/**
 * Return list if DataFeed IDs for all dataFeeds marked as system dataFeeds (i.e., those not
 *  used as part of any contentItem.)
 * @param state {DmState} - bsDataModel state
 * @returns {BsDmId[]} array of system dataFeed IDs
 */
export function dmGetSystemDataFeedIdsForSign(state: DmState): BsDmId[];
/**
 * Return array of DataFeed IDs for the given mediaState
 * @param state {DmState} - bsDataModel state
 * @param props {BsDmId} - ID of the mediaState for which to return dataFeed IDs
 * @returns {BsDmId[]}
 */
export function dmGetDataFeedIdsForMediaState(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return array of DataFeed source IDs for the sign
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsDmId[]} array of IDs for all dataFeed sources in the sign
 */
export function dmGetDataFeedSourceIdsForSign(state: DmState): BsDmId[];
/**
 * Return array of DataFeed names for the sign
 *
 * @param state {DmState} - bsDataModel state
 * @returns {string[]} array of dataFeed names for all dataFeeds in the sign
 */
export function dmGetDataFeedNamesForSign(state: DmState): string[];
/**
 * Return DmcDataFeed object for a given DataFeed name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: name string for which to return dataFeed object
 * @returns {DmcDataFeed | null} dataFeed object corresponding to given dataFeed name
 *          null if dataFeed is not found with the given name
 */
export function dmGetDataFeedByName(state: DmState, props: DmNameParam): DmcDataFeed | null;
/**
 * Given a dataFeed ID, if the data feed is a BSN data feed, return the AssetItem for the data feed.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: id for dataFeed entity
 * @returns BsAssetItem | null
 */
export function dmGetBsnDataFeedAssetItem(state: DmState, props: DmIdParam): BsAssetItem | null;
/**
 * Given a dataFeed ID, if the data feed is a BSN data feed, return an AssetLocator for the data feed.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: id for dataFeed entity
 * @returns BsAssetLocator | null
 */
export function dmGetBsnDataFeedAssetLocator(state: DmState, props: DmIdParam): BsAssetLocator | null;
/**
 * Return dataFeedSource simple object for a given dataFeed ID.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: dataFeed ID
 * @returns {DmDataFeedSource | null}
 */
export function dmGetDataFeedSourceForFeedId(state: DmState, props: DmIdParam): DmDataFeedSource | null;
/**
 * Return dataFeedSource simple object given the sourceFeed ID.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: dataFeedSource ID
 * @returns {DmDataFeedSource | null}
 */
export function dmGetDataFeedSourceForFeedSourceId(state: DmState, props: DmIdParam): DmDataFeedSource | null;
/**
 * Check a dataFeed entity to validate feed source specification.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: dataFeedSource ID
 * @return {BsDmError | null} null if dataFeed is valid.
 *  If dataFeed is invalid, the first error encountered is returned.
 */
export function dmCheckDataFeedValidity(state: DmBsProjectState | DmState, props: DmIdParam): BsDmError | null;
/**
 * Return array of command IDs for dataFeedSource commands that reference any of the given dataFeedSource IDs.
 * @param state {DmState}
 * @param props {DmIdListParam} - ids property: list of dataFeedSource IDs for which to return dataFeedSource commands
 *  that reference any of the dataFeedSources
 */
export function dmGetDataFeedSourceCommandIdsForDataFeedSources(state: DmState, props: DmIdListParam): BsDmId[];

/** @module Selectors:DeviceWebPage */
/**
 * Return simple DmDeviceWebPage object for a given DeviceWebPage ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: deviceWebPage ID for which to return deviceWebPage object
 * @returns {DmDeviceWebPage | null} simple deviceWebPage object corresponding to given ID
 *          null if deviceWebPage is not found with the given ID
 */
export function dmGetDeviceWebPageStateById(state: DmState, props: DmIdParam): DmDeviceWebPage | null;
/**
 * Return DmcDeviceWebPage object for a given DeviceWebPage ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: deviceWebPage ID for which to return deviceWebPage object
 * @returns {DmcDeviceWebPage | null} deviceWebPage object corresponding to given ID
 *          null if deviceWebPage is not found with the given ID
 */
export function dmGetDeviceWebPageById(state: DmState, props: DmIdParam): DmcDeviceWebPage | null;
/**
 * Return list if IDs for all device web page IDs
 *
 * @param state {DmState} - bsDataModel state
 * @return {BsDmId[]}
 */
export function dmGetDeviceWebPageIds(state: DmState): BsDmId[];
/**
 * Return the ID of an DmDeviceWebPage object for a given HtmlSite name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: name string for which to return deviceWebPage object
 * @returns {BsDmId | null} deviceWebPage ID corresponding to given name
 *          null if deviceWebPage is not found with the given name
 */
export function dmGetDeviceWebPageIdByName(state: DmState, props: DmNameParam): BsDmId | null;
/**
 * Return DmcDeviceWebPage object for a given DeviceWebPage name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: deviceWebPage name for which to return deviceWebPage object
 * @returns {DmcDeviceWebPage | null} deviceWebPage object corresponding to given name
 *          null if deviceWebPage is not found with the given name
 */
export function dmGetDeviceWebPageByName(state: DmState, props: DmNameParam): DmcDeviceWebPage | null;
/**
 * Return DmcDeviceWebPage object for a given port number
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmPortParam} - port property: port number for which to return deviceWebPage object
 * @returns {DmcDeviceWebPage | null} deviceWebPage object corresponding to given port
 *          null if deviceWebPage is not found with the given port
 */
export function dmGetDeviceWebPageForPort(state: DmState, props: DmPortParam): DmcDeviceWebPage | null;
/**
 * Return DeviceWebPage ID of a DeviceWebPage with the given indexAssetId.
 * @param {DmState} state - bsDataModel state
 * @param {DmIdParam} props - indexAssetId of index file asset for which to return DeviceWebPage ID
 * @returns {BsDmId | null} ID of DeviceWebPage object with given indexAssetId
 *          BsDmIdNone is returned if there is no DeviceWebPage object that uses the given index asset ID
 */
export function dmGetDeviceWebPageIdByAssetId(state: DmState, props: DmIdParam): BsDmId | null;
/**
 * Return the DeviceWebPageDisplay mode value for the presentation web page
 * @param state {DmState} - bsDataModel state
 * @returns {DeviceWebPageDisplay}
 */
export function dmGetSignPresentationWebPageDisplayMode(state: DmState): DeviceWebPageDisplay;
/**
 * Return DmcPresentationWebPage object representing the currently specified presentationWebPage
 *  (i.e., the deviceWebPage served from port 8008 om the player.)
 * @param {DmState} state - bsDataModel state
 * @returns {DmcPresentationWebPage}
 */
export function dmGetPresentationWebPage(state: DmState): DmcPresentationWebPage;
/**
 * Validate presentationWebPage defined for the sign.
 * @param {DmState} state
 * @returns {BsDmEntityValidationResult}
 */
export function dmValidatePresentationWebPage(state: DmState): BsDmEntityValidationResult;

/** @module Selectors:Event */
/**
 * Return DmEvent object for a given Event ID.
 * In general, it is better to use {@link dmGetEventById} to return the full class based DmcEvent object.
 * This function returns the simple store object for a given event ID, containing only the event
 *  top level properties (i.e., no methods, no transitions, no commands.)
 *
 * Note: This returns only the event properties in a simple JS object (no methods, no transitions)
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: event ID for which to return eventState object
 * @returns {DmEvent} simple event object (with no transition data) corresponding to given event ID
 *          null if event is not found with the given ID
 */
export function dmGetEventStateById(state: DmState, props: DmIdParam): DmEvent | null;
/**
 * Return DmcEvent object for a given Event ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: event ID for which to return event object
 * @returns {DmcEvent | null} - event object corresponding to given event ID.
 *  Return null if event is not found with the given ID.
 */
export function dmGetEventById(state: DmState, props: DmIdParam): DmcEvent | null;
/**
 * Return EventType for event with given ID.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: event ID for which to return event type
 * @returns {EventType | null} returns null if ID does not refer to a valid event
 */
export function dmGetEventTypeById(state: DmState, props: DmIdParam): EventType | null;
/**
 * Return array of event IDs for all events in the sign that have the given EventType.
 * @param state {DmState} - bsDataModel state
 * @param props {DmTypeParam} - the EventType for which to search
 * @returns {BsDmId[]}
 */
export function dmGetAllEventIdsForEventType(state: DmState, props: DmTypeParam): BsDmId[];
/**
 * Return array of event states (the simple DmEvent objects) for all events in the sign that have the given EventType.
 * @param state {DmState} - bsDataModel state
 * @param props {DmTypeParam} - the EventType for which to search
 * @returns {DmEvent[]}
 */
export function dmGetAllEventStatesForEventType(state: DmState, props: DmTypeParam): DmEvent[];
/**
 * Check event for given event ID and return true if the event is compatible with the given ContentItemType.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdAndTypeParam} - id: ID of event to test, type: ContentItemType
 * @returns {boolean}
 */
export function dmIsEventCompatibleWithContentItemType(state: DmState, props: DmIdAndTypeParam): boolean;
/**
 * Validate event and all event dependent entities for the given event ID.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: event ID for event to validate
 * @returns {BsDmEntityValidationResult}
 */
export function dmValidateEvent(state: DmState, props: DmIdParam): BsDmEntityValidationResult;

/** @module Selectors:HtmlSite */
/**
 * Return DmcHtmlSite object for a given HtmlSite ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: htmlSite ID for which to return htmlSite object
 * @returns {DmcHtmlSite | null} htmlSite object corresponding to given ID
 *          null if htmlSite is not found with the given ID
 */
export function dmGetHtmlSiteById(state: DmState, props: DmIdParam): DmcHtmlSite | null;
/**
 * Return simple DmHtmlSite object for a given HtmlSite ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: htmlSite ID for which to return htmlSite object
 * @returns {DmHtmlSite | null} htmlSite object corresponding to given ID
 *          null if htmlSite is not found with the given ID
 */
export function dmGetHtmlSiteStateById(state: DmState, props: DmIdParam): DmHtmlSite | null;
/**
 * Return array of HtmlSite IDs for the sign
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsDmId[]} array of htmlSite IDs for all htmlSites in the sign
 */
export function dmGetHtmlSiteIdsForSign(state: DmState): BsDmId[];
/**
 * Return the ID of an DmHtmlSite object for a given HtmlSite name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: name string for which to return htmlSite object
 * @returns {BsDmId | null} htmlSite ID corresponding to given name
 *          null if htmlSite is not found with the given name
 */
export function dmGetHtmlSiteIdByName(state: DmState, props: DmNameParam): BsDmId | null;
/**
 * Return DmcHtmlSite object for a given HtmlSite name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: name string for which to return htmlSite object
 * @returns {DmcHtmlSite | null} htmlSite object corresponding to given htmlSite name
 *          null if htmlSite is not found with the given name
 */
export function dmGetHtmlSiteByName(state: DmState, props: DmNameParam): DmcHtmlSite | null;
/**
 * Return HtmlSite ID of a Hosted site with the given indexAssetId.
 * @param {DmState} state - bsDataModel state
 * @param {DmIdParam} props - indexAssetId of index file asset for which to return HTML site ID
 * @returns {BsDmId} ID of htmlSite object (Hosted type) with given indexAssetId
 *          BsDmIdNone is returned if there is no HtlSite object that uses the given index asset ID
 */
export function dmGetHtmlSiteIdByAssetId(state: DmState, props: DmIdParam): BsDmId;

/** @module Selectors:LinkedPresentations */
/**
 * Return linkedPresentation state with given id.
 *
 * @param state {DmState} - bsDataModel state
 * @param {DmIdParam} props
 * @returns {DmLinkedPresentation}
 */
export function dmGetLinkedPresentationStateById(state: DmState, props: DmIdParam): DmLinkedPresentation | null;
/**
 * Return linkedPresentation name, given it's ID.
 * @param state {DmState} - bsDataModel state
 * @param {DmIdParam} props
 * @returns {string | null}
 */
export function dmGetLinkedPresentationNameForId(state: DmState, props: DmIdParam): string | null;
/**
 * Return list if IDs for all linked presentations (DmLinkedPresentation objects)
 *
 * @param state {DmState} - bsDataModel state
 * @return {BsDmId[]}
 */
export function dmGetLinkedPresentationIds(state: DmState): BsDmId[];
/** @deprecated - this was improperly named - use dmGetLinkedPresentationIds */
export const dmGetLinkedPresentationAssetIdList: typeof dmGetLinkedPresentationIds;
/**
 * Return list of assetIds for all added linked presentations
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsAssetId[]}
 */
export function dmGetLinkedPresentationAssetIds(state: DmState): BsAssetId[];
/**
 * Return list of BsAssetLocators for all linked presentation assets.
 * @param state {DmState} - bsDataModel state
 * @returns {BsAssetLocator[]}
 */
export function dmGetLinkedPresentationAssetLocatorList(state: DmState): BsAssetLocator[];
/**
 * Return list of BsAssetLocators for all linked BSN based presentation assets.
 * @param state {DmState} - bsDataModel state
 * @returns {BsAssetLocator[]}
 */
export function dmGetBsnLinkedPresentationAssetLocatorList(state: DmState): BsAssetLocator[];
/**
 * Return DmLinkedPresentation object in sign corresponding to a given presentation assetLocator.
 * Return null if there is no linkedPresentation corresponding to the given assetLocator.
 * @param state {DmState} - bsDataModel state
 * @param props {BsAssetLocator}
 * @returns {DmLinkedPresentation | null}
 */
export function dmGetLinkedPresentationForAssetLocator(state: DmState, props: BsAssetLocator): DmLinkedPresentation | null;
/**
 * Return count of linked presentations
 *
 * @param state {DmState} - bsDataModel state
 * @returns {number}
 */
export function dmGetLinkedPresentationCount(state: DmState): number;
/**
 * Return linkedPresentation state with given name.
 *
 * @param {DmState} state
 * @param {DmNameParam} props
 * @returns {DmLinkedPresentation}
 */
export function dmGetLinkedPresentationStateByName(state: DmState, props: DmNameParam): DmLinkedPresentation | null;
/**
 * Return array of linked presentation IDs for plugin commands that reference the given linked presentation.
 * @param state {DmState}
 * @param props {DmIdParam} - id property: linked presentation ID for which to return presentation commands
 *  that reference the presentation
 */
export function dmGetLinkedPresentationCommandIdsForLinkedPresentation(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Validate linkedPresentations defined for the sign.
 * @param {DmState} state
 * @returns {BsDmEntityValidationResult}
 */
export function dmValidateLinkedPresentations(state: DmState): BsDmEntityValidationResult;

/** @module Selectors:LiveText */
export function dmGetLiveTextCanvasStateById(state: DmState, props: DmIdParam): DmLiveTextCanvas | null;
export function dmGetLiveTextCanvasById(state: DmState, props: DmIdParam): DmcLiveTextCanvas | null;
export function dmGetLiveTextCanvasIdsForSign(state: DmState): BsDmId[];
export function dmGetLiveTextLayerSequenceForCanvas(state: DmState, props: DmIdParam): BsDmId[] | null;
export function dmGetLiveTextLayerActiveIndexArrayForCanvas(state: DmState, props: DmIdParam): number[] | null;
export function dmGetLiveTextItemStateById(state: DmState, props: DmIdParam): DmLiveTextItem | null;
export function dmGetAllLiveTextItemIdsForCanvas(state: DmState, props: DmIdParam): BsDmId[];
export function dmGetAllLiveTextGroupIdsForCanvas(state: DmState, props: DmIdParam): BsDmId[];
export function dmGetAllLiveTextItemIdsForSign(state: DmState): BsDmId[];
export function dmGetCanvasMediaRssGroupIds(state: DmState, props: DmIdParam): BsDmId[];
export function dmGetAllLiveTextItemIdsForGroup(state: DmState, props: DmIdParam): BsDmId[];
export function dmGetAllNonCustomLiveTextItemIdsForGroup(state: DmState, props: DmIdParam): BsDmId[];
export function dmGetLiveTextItemGroupDataFeedMapForCanvas(state: DmState, props: DmIdParam): DmLiveTextItemGroupDataFeedMap;
export function dmGetLiveTextDataFeedGroupByGroupId(state: DmState, props: DmIdParam): DmLiveTextDataFeedSequence | null;
export function dmValidateLiveTextItem(state: DmState, props: DmIdParam): BsDmEntityValidationResult;
export function dmValidateLiveTextCanvas(state: DmState, props: DmIdParam): BsDmEntityValidationResult;
export function dmGetLiveTextCopySet(state: DmState, props: DmIdListParam): DmLiveTextCopySet;

/** @module Selectors:MediaSequence */
/**
 * Return array of MediaSequenceItem IDs for a given MediaList or PlayFile state.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of mediaState that is the MediaList or PlayFile container
 * @returns {BsDmId[]}
 */
export function dmGetMediaSequenceItemListIds(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return count of MediaList items for a given MediaList or PlayFile state.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of mediaState that is the MediaList or PlayFile container
 * @returns {number}
 */
export function dmGetMediaSequenceItemCount(state: DmState, props: DmIdParam): number;
/**
 * If the mediaSequence mediaState (MediaList or PlayFile) uses a data feed as a source,
 *  return DmDataFeed for the dataFeed object. If useDataFeed = false, return null.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of the MediaList or PlayFile state
 * @returns {DmDataFeed | null}
 */
export function dmGetMediaSequenceSourceDataFeed(state: DmState, props: DmIdParam): DmDataFeed | null;
/**
 * Returns BsAssetItem for the defaultMediaAsset for the playFile state, or null if there is no
 *  defaultMedia asset defined.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of mediaState that represents the PlayFile item
 * @returns {BsAssetItem | null}
 */
export function dmGetPlayFileDefaultMediaAssetItem(state: DmState, props: DmIdParam): BsAssetItem | null;
/**
 * Return index of mediaState for MediaList or PlayFile item at given index. Returns null if given ID does not identify
 *  a mediaState that has a MediaList  or PlayFile ContentItem, or if index is out of range for the item list.
 * @param {DmState} state
 * @param {DmIdAndIndexParam} props - ID parameter is the ID of mediaState that is the MediaList or PlayFile container -
 *  index parameter is the numeric index of the desired MediaList item
 * @returns {BsDmId | null}
 */
export function dmGetMediaSequenceItemIdByIndex(state: DmState, props: DmIdAndIndexParam): BsDmId | null;

/** @module Selectors:MediaState */
/**
 * @interface DmDeNormalizedEvent - Interface for an object used internally to construct DmcMediaState objects
 *  from normalized data in the bsDataModel Redux store. This object holds a normalized {@link DmEvent} object,
 *  and an array of all normalized {@link DmTransition} objects associated with that event.
 * @property eventState {DmEvent} - normalized event object
 * @property [transitionStates] {DmTransition[]} - array of transition objects associated with the event
 */
export interface DmDeNormalizedEvent {
    eventState: DmEvent;
    transitionStates?: DmTransition[];
}
/**
 * @interface Object containing components for use in construction of MediaState objects {@link DmcMediaState}
 * @property deNormEvents {DmDeNormalizedEvent[]} - events and associated transitions
 * @property commands {DmMediaStateCommandStates} - entry and exit commands for the mediaState
 * @property mediaAssetItem {BsAssetItem} - if the mediaState contentItem is a media ContentItem, the assetItem
 *  of the media file
 */
export interface DmMediaStateComponents {
    deNormEvents: DmDeNormalizedEvent[];
    commands: DmMediaStateCommandStates;
    mediaAssetItem: BsAssetItem | null;
}
/**
 * @interface DmMediaListMediaStateComponents - contains components for use in construction of MediaState objects with
 *  ContentItemType.MediaList {@link DmcMediaListMediaState}. These components are specific to MediaList
 *  states, and are used as 'global' components in all MediaList items
 * @property forwardEvents {DmEvent[]} - events with EventIntrinsicAction.SequenceForward
 * @property backwardEvents {DmEvent[]} - events with EventIntrinsicAction.SequenceBackward
 * @property commands {DmMediaStateCommandStates} - itemEntry and itemExit commands for the MediaList mediaState
 * @property sourceDataFeed {DmDataFeedEntityGroup | null} - object containing the DmDataFeed, DmDataFeedSource,
 *  and BsAssetItem associated with the dataFeed source
 */
export interface DmMediaListMediaStateComponents {
    forwardEvents: DmEvent[];
    backwardEvents: DmEvent[];
    playNextCommands: DmCommand[];
    playPreviousCommands: DmCommand[];
    sourceDataFeed: DmDataFeedEntityGroup | null;
}
/**
 * @interface DmPlayFileMediaStateComponents - contains components for use in construction of MediaState objects with
 *  ContentItemType.PlayFile.
 * @property defaultMediaAssetItem - assetItem for defaultMedia, or null if not defined
 * @property sourceDataFeed {DmDataFeedEntityGroup | null} - object containing the DmDataFeed, DmDataFeedSource,
 *  and BsAssetItem associated with the dataFeed source
 */
export interface DmPlayFileMediaStateComponents {
    defaultMediaAssetItem: BsAssetItem | null;
    sourceDataFeed: DmDataFeedEntityGroup | null;
}
/**
 * Return DmcMediaState object for a given MediaState ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: mediaState ID for which to return mediaState object
 * @returns {DmcMediaState} - mediaState object corresponding to given mediaState ID.
 *  Return null if mediaState is not found with the given ID.
 */
export function dmGetMediaStateById(state: DmState, props: DmIdParam): DmcMediaState | null;
/**
 * Return DmMediaState object.
 * In general, it is better to use {@link dmGetMediaStateById} to return the full class based DmcMediaState object.
 * This function returns the simple store object for a given MediaState ID, containing only the mediaState
 *  top level properties (i.e., no methods, no events, no transitions, no commands.)
 * This can also be used to return a simple DmMediaState object from a DmMediaStateCopySet.
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: mediaState ID for which to return mediaState object
 * @returns {DmMediaState | DmMediaStateCopySet} simple mediaState object (with no event or transition data)
 *  corresponding to given mediaState ID.
 *  Return null if mediaState is not found with the given ID.
 */
export function dmGetMediaStateStateById(state: DmState | DmMediaStateCopySet, props: DmIdParam): DmMediaState | null;
/**
 * Return DmMediaState object for a given MediaState name.
 * In general, it is better to use {@link dmGetMediaStateByName} to return the full class based DmcMediaState object.
 * This function returns the simple store object for a given MediaState ID, containing only the mediaState
 *  top level properties (i.e., no methods, no events, no transitions, no commands.)
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: name string for which to return mediaState object
 * @returns {DmMediaState} simple mediaState object (with no event or transition data) corresponding
 *  to given mediaState name.
 *  Return null if mediaState is not found with the given name.
 */
export function dmGetMediaStateStateByName(state: DmState, props: DmNameParam): DmMediaState | null;
export interface DmMediaStateSearchProperties {
    name?: string;
    containerId?: BsDmId;
    containerType?: MediaStateContainerType;
    contentItemType?: ContentItemType | ContentItemType[];
    searchContainedSuperStates?: boolean;
}
/**
 * Return array of mediaState IDs that represent mediaStates matching a given set of basic mediaState
 *  properties.
 * @param state {DmState} - bsDataModel state
 * @param props {DmMediaStateSearchProperties} - properties to match
 * @returns {BsDmId[]} array of mediaState IDs for all mediaStates with matching properties
 */
export function dmGetMediaStateIdsForProps(state: DmState, props: DmMediaStateSearchProperties): BsDmId[];
/**
 * Return DmcMediaState object for a given MediaState name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: name string for which to return mediaState object
 * @returns {DmcMediaState} - mediaState object corresponding to given mediaState name.
 *  Return null if mediaState is not found with the given name.
 */
export function dmGetMediaStateByName(state: DmState, props: DmNameParam): DmcMediaState | DmcMediaListMediaState | null;
/**
 * Return a name map for all mediaStates within a zone, including those within contained superStates
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return mediaState name map
 * @returns {DmEntityNameMap}
 */
export function dmGetMediaStateNameMapForZone(state: DmState, props: DmIdParam): DmEntityNameMap;
/**
 * Return a name map for all mediaStates in the sign, including those within contained superStates
 * @param state {DmState} - bsDataModel state*
 * @returns {DmEntityNameMap}
 */
export function dmGetMediaStateNameMapForSign(state: DmState): DmEntityNameMap;
/**
 * Return a mediaState name for the given base name unique in the targetable states within the zone
 *  specified by the given ID.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdAndNameParam} - id property: zone ID for which to return unique mediaState name,
 *  name property: base name for state
 * @returns {string}
 */
export function dmGetUniqueMediaStateNameForBaseNameInZone(state: DmState, props: DmIdAndNameParam): string;
/**
 * Return a mediaState name for the given base name unique for all mediaStates in the sign.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdAndNameParam} - name property: base name for state
 * @returns {string}
 */
export function dmGetUniqueMediaStateNameForBaseNameInSign(state: DmState, props: DmNameParam): string;
/**
 * Return DmcMediaStateContainer object for a given mediaState ID, specifying the container for the mediaState
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: mediaState ID for which to return mediaStateContainer object
 * @returns {DmcMediaStateContainer} - mediaStateContainer object specifying the container for the mediaState.
 *  Return null if mediaState is not found with the given ID.
 */
export function dmGetMediaStateContainerById(state: DmState, props: DmIdParam): DmcMediaStateContainer | null;
/**
 * Return array of all MediaState IDs in the sign (all zones)
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsDmId[]} array of mediaState IDs for all mediaStates in the sign
 */
export function dmGetMediaStateIdsForSign(state: DmState): BsDmId[];
/**
 * Return array of MediaState IDs for a given MediaState ID. The MediaState ID must refer to a mediaState
 *  with a ContentItem that represents a container for other mediaStates (e.g., MediaList, PlayFile, SuperState.)
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: mediaState ID for which to return mediaState ID array
 * @returns {BsDmId[]} array of mediaState IDs for all mediaStates in the mediaState container
 */
export function dmGetContainedMediaStateIdsForMediaState(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return true if the mediaState associated with the given ID represents a mediaState that can be a
 *  mediaState container.
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: mediaState ID for which to return container status
 * @returns {boolean} true if mediaState can be a mediaState container
 */
export function dmIsMediaStateContainer(state: DmState, props: DmIdParam): boolean;
/**
 * Return the ContentItemType for the given mediaState as specified by ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: mediaState ID for which to return mediaState ContentItemType
 * @returns {ContentItemType} returns ContentItemType or null, if mediaState is not found with the given ID
 */
export function dmGetContentItemTypeForMediaStateId(state: DmState, props: DmIdParam): ContentItemType | null;
/**
 * Return array of event state objects for a given mediaState.
 * Events marked with intrinsic action used as global MediaListItems are ignored.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: mediaState ID for which to return eventState objects
 * @returns {DmEvent[]}
 */
export function dmGetEventStatesForMediaStateId(state: DmState, props: DmIdParam): DmEvent[];
/**
 * Return array of Event IDs for a given MediaState ID
 * Events marked with intrinsic action used as global MediaListItems are ignored.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: mediaState ID for which to return event ID array
 * @returns {BsDmId[]} array of event IDs for all events for mediaState
 */
export function dmGetEventIdsForMediaState(state: DmState, props: DmIdParam): BsDmId[];
/**
 * If the MediaState holds a MediaContentItem, return the corresponding BsAssetItem, otherwise, null
 *
 * @param {DmState} state
 * @param {DmIdParam} props
 * @returns {BsAssetItem | null}
 */
export function dmGetMediaAssetItemForMediaStateId(state: DmState, props: DmIdParam): BsAssetItem | null;
/**
 * Return MediaState ID of the initial MediaState in a zone
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return initial MediaState ID
 * @returns {BsDmId | null} - ID for initial zone MediaState,
 *  BsDmIdNone if zone contains no MediaStates,
 *  null if zone ID does not correspond to a valid zone
 */
export function dmGetInitialMediaStateIdForZone(state: DmState, props: DmIdParam): BsDmId | null;
/**
 * Return DmcMediaState object representing the initial MediaState in a zone
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return initial MediaState
 * @returns {DmcMediaState | null} - mediaState object for initial MediaState in zone,
 *  null if zone contains no MediaStates, or if zone ID is not valid
 */
export function dmGetInitialMediaStateForZone(state: DmState, props: DmIdParam): DmcMediaState | DmcMediaListMediaState | null;
/**
 * Return MediaState ID of the initial MediaState in a superState
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: superState ID for which to return initial MediaState ID
 * @returns {BsDmId | null} - ID for initial superState MediaState,
 *  BsDmIdNone if superState contains no MediaStates,
 *  null if superState ID does not correspond to a valid superState
 */
export function dmGetInitialMediaStateIdForSuperState(state: DmState, props: DmIdParam): BsDmId | null;
/**
 * Return DmMediaStateSequence object for given mediaState ID. If the mediaState ID is invalid,
 *  or if the mediaState does not contain a mediaState sequence (i.e., if it is not a MediaList or PlayFile
 *  mediaState,) null is returned.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of mediaState that is the MediaList or PlayFile container
 * @returns {DmMediaStateSequence | null}
 */
export function dmGetMediaStateSequenceForContainer(state: DmState, props: DmIdParam): DmMediaStateSequence | null;
/** @deprecated - use dmGetMediaStateSequenceForContainer */
export const dmGetMediaSequenceByMediaStateId: typeof dmGetMediaStateSequenceForContainer;
/**
 * Return DmcMediaListItem for the mediaState that represents the MediaList item corresponding to the given ID.
 *  Returns null if the ID does not correspond to a MediaList item.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of mediaState that represents the MediaList item
 * @returns {DmcMediaListItem | null}
 */
export function dmGetMediaListItemById(state: DmState, props: DmIdParam): DmcMediaListItem | null;
/**
 * Return DmcMediaListItem for the mediaState that represents the MediaList item corresponding to the given
 *  indexed position in the MediaSequence. Returns null if the index value is out of range.
 * @param {DmState} state
 * @param {DmIdAndIndexParam} props - ID parameter is the ID of mediaState that is the MediaList container;
 *  index parameter is the numeric index of the desired MediaList item
 * @returns {DmcMediaListItem | null}
 */
export function dmGetMediaListItemByIndex(state: DmState, props: DmIdAndIndexParam): DmcMediaListItem | null;
/**
 * If the given mediaState ID represents is a MediaList (i.e., has ContentItemTyoe.MediaList,)
 *  return a list of event IDs representing all global intrinsic events for the mediaList items
 *  in that MediaList.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: mediaState ID for which to return MediaList global event IDs
 */
export function dmGetMediaListGlobalEventIds(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return DmcPlayFileItem for the mediaState that represents the PlayFile item corresponding to the given ID.
 *  Returns null if the ID does not correspond to a PlayFile item.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of mediaState that represents the PlayFile item
 * @returns {DmcPlayFileItem | null}
 */
export function dmGetPlayFileItemById(state: DmState, props: DmIdParam): DmcPlayFileItem | null;
/**
 * Return DmcPlayFileItem for the mediaState that represents the PlayFile item corresponding to the given
 *  indexed position in the MediaSequence. Returns null if the index value is out of range.
 * @param {DmState} state
 * @param {DmIdAndIndexParam} props - ID parameter is the ID of mediaState that is the PlayFile container;
 *  index parameter is the numeric index of the desired PlayFile item
 * @returns {DmcPlayFileItem | null}
 */
export function dmGetPlayFileItemByIndex(state: DmState, props: DmIdAndIndexParam): DmcPlayFileItem | null;
/**
 * Return DmBpEventAvailability denoting the unused BP buttons (inputs) in all events in the given mediaState.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of mediaState for which to check the event list.
 */
export function dmBpEventAvailabilityForMediaStateEvents(state: DmState, props: DmIdParam): DmBpEventAvailability;
/**
 * Return DmIrRemoteEventAvailability denoting the unused remote buttons (inputs) in all events in the given mediaState.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of mediaState for which to check the event list.
 */
export function dmIrRemoteEventAvailabilityForMediaStateEvents(state: DmState, props: DmIdParam): string[];
/**
 * Return number array denoting the unused GPIO in all events in the given mediaState.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of mediaState for which to check the event list.
 */
export function dmGpioEventAvailabilityForMediaStateEvents(state: DmState, props: DmIdParam): number[];
/**
 * Return list of event IDs owned by the given mediaState that are not compatible with the given ContentItemType.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdAndTypeParam} - id: ID of mediaState to test, type: ContentItemType
 * @returns {BsDmId[]}
 */
export function dmGetIncompatibleMediaStateEventIdsForContentItemType(state: DmState, props: DmIdAndTypeParam): BsDmId[];
/**
 * Validate mediaState contentItem and any commands executed by the mediaState. This validation function does
 *  NOT validate events associated with the mediaState - these must be independently validated.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of mediaState to validate.
 * @returns {BsDmEntityValidationResult}
 */
export function dmValidateMediaState(state: DmState, props: DmIdParam): BsDmEntityValidationResult;
/**
 * Validate all events for a given mediaState. This validates the internal data for each event, and also validates
 *  the event lists for a mediaState to check if there is invalid duplication of event data (e.g., there cannot
 *  be 2 UDP/keyboard.etc. events with the same data match string.)
 * @param {DmState} state
 * @param {DmIdParam} props - ID of mediaState to validate.
 * @returns {BsDmEntityValidationResult}
 */
export function dmValidateMediaStateEvents(state: DmState, props: DmIdParam): BsDmEntityValidationResult;
export function dmGetMediaStateCopySet(state: DmState, props: DmIdListParam): DmMediaStateCopySet | DmPlaylistMediaStateCopySet;
export interface DmMediaStateCopySetCompatibilityParams {
    zoneId: BsDmId;
    copySet: DmMediaStateCopySet;
}
export function dmIsMediaStateCopySetCompatibleWithZone(state: DmState, props: DmMediaStateCopySetCompatibilityParams): BsDmEntityValidationResult;

/** @module Selectors:NodeApp */
/**
 * Return DmcNodeApp object for a given NodeApp ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: nodeApp ID for which to return nodeApp object
 * @returns {DmcNodeApp | null} nodeApp object corresponding to given ID
 *          null if nodeApp is not found with the given ID
 */
export function dmGetNodeAppById(state: DmState, props: DmIdParam): DmcNodeApp | null;
/**
 * Return simple DmNodeApp object for a given NodeApp ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: nodeApp ID for which to return nodeApp object
 * @returns {DmNodeApp | null} nodeApp object corresponding to given ID
 *          null if nodeApp is not found with the given ID
 */
export function dmGetNodeAppStateById(state: DmState, props: DmIdParam): DmNodeApp | null;
/**
 * Return array of NodeApp IDs for the sign
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsDmId[]} array of nodeApp IDs for all nodeApps in the sign
 */
export function dmGetNodeAppIdsForSign(state: DmState): BsDmId[];
/**
 * Return the ID of an DmNodeApp object for a given NodeApp name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: name string for which to return nodeApp object
 * @returns {BsDmId | null} nodeApp ID corresponding to given name
 *          null if nodeApp is not found with the given name
 */
export function dmGetNodeAppIdByName(state: DmState, props: DmNameParam): BsDmId | null;
/**
 * Return DmcNodeApp object for a given NodeApp name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: name string for which to return nodeApp object
 * @returns {DmcNodeApp | null} nodeApp object corresponding to given nodeApp name
 *          null if nodeApp is not found with the given name
 */
export function dmGetNodeAppByName(state: DmState, props: DmNameParam): DmcNodeApp | null;

/** @module Selectors:ParserPlugin */
/**
 * Return simple DmParserBrightScriptPlugin state object for a given ParserPlugin ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: plugin ID for which to return parserPlugin object
 * @returns {DmParserBrightScriptPlugin} simple parserPlugin state object corresponding to given ID
 *          null if parserPlugin is not found with the given ID
 */
export function dmGetParserPluginStateById(state: DmState, props: DmIdParam): DmParserBrightScriptPlugin | null;
/**
 * Return a DmcParserBrightScriptPlugin object for the given plugin ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: ID of parserPlugin
 * @return {DmcParserBrightScriptPlugin | null} returns null if ID is not found
 */
export function dmGetParserPluginById(state: DmState, props: DmIdParam): DmcParserBrightScriptPlugin | null;
/**
 * Return parser plugin ID for a given plugin name. Return null if no plugin is found for the given name.
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: plugin name for which to return parserPlugin ID
 * @returns {BsDmId | null}
 */
export function dmGetParserPluginIdForName(state: DmState, props: DmNameParam): BsDmId | null;
/**
 * Return simple DmParserBrightScriptPlugin state object for a given ParserPlugin name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: plugin name for which to return parserPlugin object
 * @returns {DmParserBrightScriptPlugin} simple parserPlugin state object corresponding to given ID
 *          null if parserPlugin is not found with the given name
 */
export function dmGetParserPluginStateByName(state: DmState, props: DmNameParam): DmParserBrightScriptPlugin | null;
/**
 * Return a DmcParserBrightScriptPlugin object for the given plugin name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - name property: name of parserPlugin
 * @return {DmcParserBrightScriptPlugin | null} returns null if name is not found
 */
export function dmGetParserPluginByName(state: DmState, props: DmNameParam): DmcParserBrightScriptPlugin | null;
/**
 * Return list if IDs for all parser plugins
 *
 * @param state {DmState} - bsDataModel state
 * @return {BsDmId[]}
 */
export function dmGetParserPluginIds(state: DmState): BsDmId[];
/**
 * Return list if IDs for all parser plugin assets
 *
 * @param state {DmState} - bsDataModel state
 * @return {BsAssetId[]}
 */
export function dmGetParserPluginAssetIds(state: DmState): BsAssetId[];
/**
 * Return an object which maps all parser plugins currently used in data feeds to the data feed ID using it.
 * @param {DmState} state
 * @returns {DmActiveParsePluginWithDataFeedMap | {}}
 */
export function dmGetActiveParserPluginWithDataFeedMap(state: DmState): DmActiveParsePluginWithDataFeedMap | {};
/**
 * Return a name map for all parser plugins
 * @param state {DmState} - bsDataModel state
 * @returns {DmEntityNameMap}
 */
export function dmGetParserPluginNameMap(state: DmState): DmEntityNameMap;

/** @module Selectors:VideoModePlugin */
/**
 * Return simple DmVideoModeBrightScriptPlugin state object for a given VideoModePlugin ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: plugin ID for which to return videoModePlugin object
 * @returns {DmVideoModeBrightScriptPlugin} simple videoModePlugin state object corresponding to given ID
 *          null if videoModePlugin is not found with the given ID
 */
export function dmGetVideoModePluginStateById(state: DmState, props: DmIdParam): DmVideoModeBrightScriptPlugin | null;
/**
 * Return a DmcVideoModeBrightScriptPlugin object for the given plugin ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: ID of videoModePlugin
 * @return {DmcVideoModeBrightScriptPlugin | null} returns null if ID is not found
 */
export function dmGetVideoModePluginById(state: DmState, props: DmIdParam): DmcVideoModeBrightScriptPlugin | null;
/**
 * Return plugin ID for a given videoMode plugin name. Return null if no plugin is found for the given name.
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: plugin name for which to return videoMode Plugin ID
 * @returns {BsDmId | null}
 */
export function dmGetVideoModePluginIdForName(state: DmState, props: DmNameParam): BsDmId | null;
/**
 * Return simple DmVideoModeBrightScriptPlugin state object for a given VideoModePlugin name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: plugin name for which to return videoModePlugin object
 * @returns {DmVideoModeBrightScriptPlugin} simple videoModePlugin state object corresponding to given ID
 *          null if videoModePlugin is not found with the given name
 */
export function dmGetVideoModePluginStateByName(state: DmState, props: DmNameParam): DmVideoModeBrightScriptPlugin | null;
/**
 * Return a DmcVideoModeBrightScriptPlugin object for the given plugin name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - name property: name of videoModePlugin
 * @return {DmcVideoModeBrightScriptPlugin | null} returns null if name is not found
 */
export function dmGetVideoModePluginByName(state: DmState, props: DmNameParam): DmcVideoModeBrightScriptPlugin | null;
/**
 * Return list if IDs for all videoMode plugins
 *
 * @param state {DmState} - bsDataModel state
 * @return {BsDmId[]}
 */
export function dmGetVideoModePluginIds(state: DmState): BsDmId[];
/**
 * Return list if IDs for all videoMode plugin assets
 *
 * @param state {DmState} - bsDataModel state
 * @return {BsAssetId[]}
 */
export function dmGetVideoModePluginAssetIds(state: DmState): BsAssetId[];
/**
 * Return a name map for all videoMode plugins
 * @param state {DmState} - bsDataModel state
 * @returns {DmEntityNameMap}
 */
export function dmGetVideoModePluginNameMap(state: DmState): DmEntityNameMap;

/** @module Selectors:Playlist */
/**
 * If the specified zone contains a valid simple playlist, return an array of MediaState IDs in playlist order.
 *
 * Criteria for valid simple playlist
 *      1. MediaState content may only be media (video, image, audio) or HTML (future: MRSS)
 *      2. Each MediaState must have one and only one event
 *          a. For video or audio, the event must be a MediaEnd event
 *          b. For images or HTML, the media must be Timer event
 *      3. Each event must have one and only one transition, which points to the next MediaState in the playlist
 *          a. The transition for the last event in the playlist must point back
 *             to the beginning MediaState (i.e., loop back)
 *          b. The transition for a MediaState can only point to itself (the same MediaState)
 *             if it is the only MediaState in the zone
 *      4. There can be no additional MediaStates in the zone that are not included in the playlist
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return playlist array
 * @returns {BsDmId[] | null} - array of MediaState IDs in playlist order if zone contains a valid simple playlist
 *          - null if zone does not contain a valid simple playlist
 *          - null if zone does not exist
 */
export function dmGetZoneSimplePlaylist(state: DmState, props: DmIdParam): BsDmId[] | null;

/** @module Selectors:ScriptPlugin */
/**
 * Return simple DmBrightScriptPlugin state object for a given ScriptPlugin ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: plugin ID for which to return scriptPlugin object
 * @returns {DmBrightScriptPlugin} simple scriptPlugin state object corresponding to given ID
 *          null if scriptPlugin is not found with the given ID
 */
export function dmGetScriptPluginStateById(state: DmState, props: DmIdParam): DmBrightScriptPlugin | null;
/**
 * Return a DmcBrightScriptPlugin object for the given plugin ID
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: ID of scriptPlugin
 * @return {DmcBrightScriptPlugin | null} returns null if ID is not found
 */
export function dmGetScriptPluginById(state: DmState, props: DmIdParam): DmcBrightScriptPlugin | null;
/**
 * Return plugin ID for a given plugin name. Return null if no plugin is found for the given name.
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: plugin name for which to return scriptPlugin ID
 * @returns {BsDmId | null}
 */
export function dmGetScriptPluginIdForName(state: DmState, props: DmNameParam): BsDmId | null;
/**
 * Return simple DmBrightScriptPlugin state object for a given ScriptPlugin nam
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: plugin name for which to return scriptPlugin object
 * @returns {DmBrightScriptPlugin | null} simple scriptPlugin state object corresponding to given ID
 *          null if scriptPlugin is not found with the given name
 */
export function dmGetScriptPluginStateByName(state: DmState, props: DmNameParam): DmBrightScriptPlugin | null;
/**
 * Return a DmcBrightScriptPlugin object for the given plugin name
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - name property: name of scriptPlugin
 * @return {DmcBrightScriptPlugin | null} returns null if name is not found
 */
export function dmGetScriptPluginByName(state: DmState, props: DmNameParam): DmcBrightScriptPlugin | null;
/**
 * Return list if IDs for all script plugins
 * @param state {DmState} - bsDataModel state
 * @return {BsDmId[]}
 */
export function dmGetScriptPluginIds(state: DmState): BsDmId[];
/**
 * Return list if IDs for all script plugin assets
 * @param state {DmState} - bsDataModel state
 * @return {BsAssetId[]}
 */
export function dmGetScriptPluginAssetIds(state: DmState): BsAssetId[];
/**
 * Return a name map for all script plugins
 * @param state {DmState} - bsDataModel state
 * @returns {DmEntityNameMap}
 */
export function dmGetScriptPluginNameMap(state: DmState): DmEntityNameMap;
/**
 * Return array of command IDs for plugin commands that reference the given plugin.
 * @param state {DmState}
 * @param props {DmIdParam} - id property: plugin ID for which to return plugin commands that reference the plugin
 */
export function dmGetPluginCommandIdsForPlugin(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return array of event IDs for pluginMessage events that reference the given plugin.
 * @param state {DmState}
 * @param props {DmIdParam} - id property: plugin ID for which to return plugin events that reference the plugin
 */
export function dmGetPluginEventIdsForPluginId(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return array of event IDs for pluginMessage events that reference the given plugin name.
 * @param state {DmState}
 * @param props {DmNameParam} - name property: plugin name for which to return plugin events that reference the plugin
 */
export function dmGetPluginEventIdsForPlugin(state: DmState, props: DmNameParam): BsDmId[];

/** @module Selectors:Sign */
/**
 * Return Sign state (for use with Open/Save functions.) Currently this is the entire state object.
 * @param state {DmState} - bsDataModel state
 * @returns {DmState} state object representing the sign data only
 */
export function dmGetSignState(state: DmState): DmSignState;
/**
 * Return DmcSignMetadata object
 *   The DmcSignMetadata object holds sign metadata (e.g., name, PlayerModel, VideoMode, hardware configuration, etc.)
 *
 * @param state {DmState} - bsDataModel state
 * @returns {DmcSignMetadata} sign metadata object
 */
export function dmGetSignMetaData(state: DmState): DmcSignMetadata;
/**
 * Return sign ID
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsDmId} sign ID
 */
export function dmGetSignId(state: DmState): BsDmId;
/**
 * Return string for the sign name
 *
 * @param state {DmState} - bsDataModel state
 * @returns {string} sign name
 */
export function dmGetSignName(state: DmState): string;
/**
 * Return sign VideoMode
 *
 * @param state {DmState} - bsDataModel state
 * @returns {VideoMode} sign VideoMode value
 */
export function dmGetSignVideoMode(state: DmState): VideoMode;
/**
 * Return sign PlayerModel
 *
 * @param state {DmState} - bsDataModel state
 * @returns {PlayerModel} sign PlayerModel value
 */
export function dmGetSignPlayerModel(state: DmState): PlayerModel;
/**
 * Return sign MonitorOrientationType
 *
 * @param state {DmState} - bsDataModel state
 * @returns {MonitorOrientationType} sign MonitorOrientationType value
 */
export function dmGetSignMonitorOrientation(state: DmState): MonitorOrientationType;
/**
 * Return true if the sign dolbyVisionEnabled property is true, AND the PlayerModel is one that
 *  supports DolbyVision.
 * @param state {DmState} - bsDataModel state
 * @returns {boolean}
 */
export function dmIsDolbyVisionEnabled(state: DmState): boolean;
/**
 * Return DmEnhancedSynchronization object for sign, or null if there is no enhancedSynchronization
 *  object specified.
 * @param state {DmState} - bsDataModel state
 * @returns {DmEnhancedSynchronization | null}
 */
export function dmGetEnhancedSynchronization(state: DmState): DmEnhancedSynchronization | null;
/**
 * Return array of {@link DmSerialPortConfiguration} objects for sign
 *
 * @param state {DmState} - bsDataModel state
 * @returns {DmSerialPortList} array of {@link DmSerialPortConfiguration} objects specifying
 *  all serial port configurations
 */
export function dmGetSignSerialPortConfigurations(state: DmState): DmSerialPortList;
/**
 * Return array of {@link GpioType} values for sign
 *
 * @param state {DmState} - bsDataModel state
 * @returns {DmGpioList} array of {@link GpioType} values specifying configuration of each GPIO connection
 */
export function dmGetSignGpioList(state: DmState): DmGpioList;
/**
 * Return map of {@link DmBpConfiguration} objects for each possible button panel in sign
 *  The map is keyed by button panel name.
 *
 * @param state {DmState} - bsDataModel state
 * @returns {DmButtonPanelMap} map of {@link DmBpConfiguration} objects specifying configuration of each button panel
 */
export function dmGetSignButtonPanelMap(state: DmState): DmButtonPanelMap;
/**
 * Return {@link DmIRRemote} IRRemote interface for state, including input configuration,
 *  output configuration, and remote control configuration.
 *
 * @param state {DmState} - bsDataModel state
 * @returns {DmIrRemote} IRRemote interface for state
 */
export function dmGetSignIrRemote(state: DmState): DmIrRemote;
/**
 * Return {@link DmIrInConfiguration} IRRemote input configuration
 *
 * @param state {DmState} - bsDataModel state
 * @returns {DmIrInConfiguration} IRRemote input configuration
 */
export function dmGetSignIrInConfiguration(state: DmState): DmIrInConfiguration;
/**
 * Return {@link DmIrOutConfiguration} IRRemote output configuration
 *
 * @param state {DmState} - bsDataModel state
 * @returns {DmIrOutConfiguration} IRRemote output configuration
 */
export function dmGetSignIrOutConfiguration(state: DmState): DmIrOutConfiguration;
/**
 * Return {@link BsIrRemoteControl} IRRemoteControl configuration
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsIrRemoteControl} IRRemoteControl configuration
 */
export function dmGetSignIrRemoteControl(state: DmState): BsIrRemoteControl;
/**
 * Return map of {@link DmAudioSignProperties} objects specifying audio output configuration.
 *  The map is keyed by audio output name.
 *
 * @param state {DmState} - bsDataModel state
 * @returns {DmAudioSignPropertyMap} map of {@link DmAudioSignProperties} objects
 *  specifying configuration of each audio output
 */
export function dmGetSignAudioPropertyMap(state: DmState): DmAudioSignPropertyMap;
export function dmGetSignWssDeviceSpec(state: DmState): WssDeviceSpec | {};
/**
 * Return timestamp representing time of last modification. This timestamp is updated whenever any action
 *  is dispatched to the sign.
 *
 * @param state {DmState} - bsDataModel state
 * @returns {Date} timestamp of last dispatched action
 */
export function dmGetSignLastModifiedTime(state: DmState): Date;
/**
 * Validate sign, including sign properties (if necessary,) sign level entities such as system dataFeeds and plugins,
 *  and all zones contained in the sign.
 * @param {DmState} state
 * @returns {BsDmEntityValidationResult}
 */
export function dmValidateSign(state: DmState): BsDmEntityValidationResult;

/** @module Selectors:SignTree */
export function dmIsEntityContainerType(type: DmEntityTreeNodeType): type is DmEntityContainerType;
export function dmGetSignTree(state: DmState): DmSignTreeNode;
export function dmGetZoneTree(state: DmState, props: DmIdParam): DmSignTreeNode;

/** @module Selectors:Thumbnail */
/**
 * Return presentation thumbnail as a Uint8Array. Return null if thumbnail has not been set.
 * @param {DmState} state
 * @returns {BsLocalAssetThumbnail | null}
 */
export function dmGetThumbnail(state: DmState): BsLocalAssetThumbnail | null;

/** @module Selectors:Transition */
/**
 * Return DmTransition (simple) object for a Transition ID
 * In general, it is better to use {@link dmGetTransitionById} to return the full class based DmcTransition object.
 * This function returns the simple store object for a given Transition ID, containing only the transition
 *  top level properties.
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: transition ID for which to return transitionState object
 * @returns {DmTransition} simple transition object corresponding to given transition ID
 *          null if transition is not found with the given ID
 */
export function dmGetTransitionStateById(state: DmState, props: DmIdParam): DmTransition | null;
/**
 * Return DmcTransition object for a given Transition ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: transition ID for which to return transition object
 * @returns {DmcTransition} transition object corresponding to given transition ID
 *          null if transition is not found with the given ID
 */
export function dmGetTransitionById(state: DmState, props: DmIdParam): DmcTransition | null;
/**
 * Return array of Transition IDs for a given Event ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: event ID for which to return transition ID array
 * @returns {BsDmId[]} array of transition IDs for all transitions in the event
 */
export function dmGetTransitionIdsForEvent(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return array of transition IDs representing all transitions that target a given mediaState
 * @param {DmState} state
 * @param {DmIdParam} props - id property: mediaState ID for which to search for incoming (targeting) transitions
 * @returns {BsDmId[]}
 */
export function dmGetIncomingTransitionIdsForMediaState(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return conditional transition sequence object for a given event ID, or null if the event has no
 *  conditional transitions.
 * @param {DmState} state
 * @param {DmIdParam} props - event ID for which to return conditional transition sequence object
 * @returns {DmTransitionSequence | null}
 */
export function dmGetConditionalTransitionSequenceForEvent(state: DmState, props: DmIdParam): DmTransitionSequence | null;
/**
 * Return conditional transition sequence for the given event ID
 * @param {DmState} state
 * @param {DmIdParam} props - id property: event ID for which to return conditional transitions
 * @returns {BsDmId[]}
 */
export function dmGetConditionalTransitionIdsForEvent(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return count of conditional transitions for the given event ID
 * @param {DmState} state
 * @param {DmIdParam} props - id property: event ID for which to return conditional transition count
 * @returns {BsDmId[]}
 */
export function dmGetConditionalTransitionCountForEvent(state: DmState, props: DmIdParam): number;
export function dmValidateTransition(state: DmState, props: DmIdParam): BsDmEntityValidationResult;

/** @module Selectors:UserVariable */
/**
 * Return DmcUserVariable object for a given UserVariable ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: user variable ID for which to return userVariable object
 * @returns {DmcUserVariable} userVariable object corresponding to given ID
 *          null if userVariable is not found with the given ID
 */
export function dmGetUserVariableById(state: DmState, props: DmIdParam): DmcUserVariable | null;
/**
 * Return DmUserVariable (simple state) object for a given UserVariable ID
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: user variable ID
 * @returns {DmUserVariable}
 */
export function dmGetUserVariableStateById(state: DmState, props: DmIdParam): DmUserVariable | null;
/**
 * Return array of UserVariable IDs for the sign in sequence order
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsDmId[]} array of userVariable IDs for all userVariables in the sign, in sequence order
 */
export function dmGetUserVariableIdsForSign(state: DmState): BsDmId[];
/**
 * Return UserVariable ID for given UserVariable name, or null if name is not found.
 * @param {DmState} state - bsDataModel state
 * @param {DmNameParam} props - name property: user variable name string for which to return userVariable ID
 * @return {BsDmId | null}
 */
export function dmGetUserVariableIdForName(state: DmState, props: DmNameParam): BsDmId | null;
/**
 * Return DmcUserVariable object for a given UserVariable name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: user variable name string for which to return userVariable object
 * @returns {DmcUserVariable} userVariable object corresponding to given userVariable name
 *          null if userVariable is not found with the given name
 */
export function dmGetUserVariableByName(state: DmState, props: DmNameParam): DmcUserVariable | null;
/**
 * Return a display string for a DmParameterizedString. The display string consists of a string
 *  with user variables names enclosed in delimiters.
 * @param {DmState} state - bsDataModel state
 * @param {DmParameterizedStringParam} props - the parameterized string for which to construct the display string.
 * @return {string} - a standard string for displaying the parameterized string, with delimited user variable names
 */
export function dmGetDisplayStringFromParameterizedString(state: DmState, props: DmParameterizedStringParam): string;
export function dmGetParameterizedStringWithDefaultUserVariables(state: DmState, props: DmParameterizedStringParam): string;
/**
 * Return a DmParameterizedString object for a given parameterized string display string. The display string may
 *  have zero or more embedded user variable names, enclosed in delimiters. The names will be matched against
 *  user variables in the state, and the corresponding user variables IDs will be placed in the DmParameterizedString.
 *  If there is not a user variable corresponding to the name in the state, the name is saved to the
 *  DmParameterizedString as a 'UserVariableName' element. This name is a placeholder. All such placeholders
 *  should be validated and mapped to user variable IDs using {@link dmValidateSignConsistency}.
 * @param {DmState} state - bsDataModel state
 * @param {DmStringParam} props - the display string for which to create the DmParameterizedString object
 * @return {DmParameterizedString}
 */
export function dmGetParameterizedStringFromDisplayString(state: DmState, props: DmStringParam): DmParameterizedString;
/**
 * Return a display string for a DmParameterizedNumber. The display string consists of a string
 *  with either the number value as a string, or a user variables name enclosed in delimiters.
 * @param {DmState} state - bsDataModel state
 * @param {DmParameterizedNumberParam} props - the parameterized number for which to construct the display string.
 * @return {string} - a standard string for displaying the parameterized number, with delimited user variable names
 */
export function dmGetDisplayStringFromParameterizedNumber(state: DmState, props: DmParameterizedNumberParam): string;
/**
 * Return a DmParameterizedNumber object for a given parameterized number display string. If the display string
 *  is a simple number, it is parsed and set as a DmParameterizedNumber with a numeric value. The display string may
 *  one user variable name, enclosed in delimiters. If so, the name will be matched against user variables in the state,
 *  and the corresponding user variable ID will be placed in the DmParameterizedNumber.
 *  If there is not a user variable corresponding to the name in the state, the name is saved to the
 *  DmParameterizedNumber as a 'UserVariableName' element. This name is a placeholder. All such placeholders
 *  should be validated and mapped to user variable IDs using {@link dmValidateSignConsistency}.
 * @param {DmState} state - bsDataModel state
 * @param  {DmStringParam} props - the display string for which to create the DmParameterizedNumber object
 * @return {DmParameterizedNumber}
 */
export function dmGetParameterizedNumberFromDisplayString(state: DmState, props: DmStringParam): DmParameterizedNumber;
/**
 * Return a list of ids of all active user variables in the sign.
 * @param {DmState} state
 * @returns {BsDmId[]}
 */
export function dmGetActiveUserVariableIds(state: DmState): BsDmId[];
/**
 * Return a list of IDs of all active user variables referenced by the elements of the given mediaState copySet.
 * @param state
 * @param props
 */
export function dmGetActiveUserVariablesIdsForMediaStateCopySet(state: DmState, props: DmMediaStateCopySet): BsDmId[];
/**
 * This interface is used for dmResolveParameterizedStringUserVariables, and includes an optional
 * entry for a newly defined user variable that is not in the DmState yet. This can be used to resolve
 * new variables immediately in the same batch action when they are added. The optional parameter should
 * not be used by code outside of bsDm.
 */
export interface DmResolveParameterizedStringParam extends DmParameterizedStringParam {
    newUserVariableBase?: DmObject;
}
/**
 * Resolve user variable placeholder names in a DmParameterizedString. All placeholder names are converted to the
 *  corresponding user variable ID, if possible. If any placeholder name does not reference a valid user variable,
 *  it is left in place. After calling this method, the {@link dmAreParameterizedStringUserVariablesResolved} method
 *  should be called to determine if any placeholder names could not be converted, leaving an invalid
 *  DmParameterizedString object.
 * @param {DmState} state - bsDataModel state
 * @param {DmResolveParameterizedStringParam} props - the parameterized string in which to resolve placeholder names.
 *  Also optionally includes the base information (id and name) for a new user variable being added. This optional
 *  base info should be used internally in bsDm only.
 * @return {DmParameterizedString} a parameterized string with valid user variable placeholders resolved.
 */
export function dmResolveParameterizedStringUserVariables(state: DmState, props: DmResolveParameterizedStringParam): DmParameterizedString;
/**
 * Determine if user variable placeholder names in a DmParameterizedString are valid - i.e., whether or
 *  not all user variable placeholder names correspond to defined user variables and can be resolved.
 * @param {DmState} state - bsDataModel state
 * @param {DmParameterizedStringParam} props - the parameterized string in which to check placeholder names
 * @return {boolean}
 */
export function dmAreParameterizedStringUserVariablesValid(state: DmState, props: DmParameterizedStringParam): boolean;
/**
 * This interface is used for dmResolveParameterizedNumberUserVariables, and includes an optional
 * entry for a newly defined user variable that is not in the DmState yet. This can be used to resolve
 * new variables immediately in the same batch action when they are added. The optional parameter should
 * not be used by code outside of bsDm.
 */
export interface DmResolveParameterizedNumberParam extends DmParameterizedNumberParam {
    newUserVariableBase?: DmObject;
}
/**
 * Resolve user variable placeholder names in a DmParameterizedNumber. All placeholder names are converted to the
 *  corresponding user variable ID, if possible. If any placeholder name does not reference a valid user variable,
 *  it is left in place. After calling this method, the {@link dmIsParameterizedNumberUserVariableResolved} method
 *  should be called to determine if the placeholder names could not be converted, leaving an invalid
 *  DmParameterizedNumber object.
 * @param {DmState} state - bsDataModel state
 * @param {DmParameterizedNumberParam} props - the parameterized number in which to resolve placeholder name
 *  Also optionally includes the base information (id and name) for a new user variable being added. This optional
 *  base info should be used internally in bsDm only.
 * @return {DmParameterizedNumber} a parameterized number with valid user variable placeholders resolved.
 */
export function dmResolveParameterizedNumberUserVariables(state: DmState, props: DmResolveParameterizedNumberParam): DmParameterizedNumber;
/**
 * Determine if a user variable placeholder name in a DmParameterizedNumber is valid - i.e., whether or
 *  not a user variable placeholder name corresponds to a defined user variable and can be resolved.
 * @param {DmState} state - bsDataModel state
 * @param {DmParameterizedNumberParam} props - the parameterized number in which to check a placeholder name
 * @return {boolean}
 */
export function dmIsParameterizedNumberUserVariableValid(state: DmState, props: DmParameterizedNumberParam): boolean;
/**
 * Check a user variable, given it's ID, to find out:
 *  1. if it conforms to user variable naming constraints (i.e., name is not empty and is not a duplicate.)
 *  2. if default value is a valid parameterized string (or empty)
 * @param state {DmBsProjectState | DmState} - a DmState, or a DmBsProjectState object or an object
 *  containing a DmState object
 * @param userVariableId {BsDmId | null | undefined}
 * @param [errorDetails] {BsDmEntityErrorDetails} - details about the entity being validated, for error report
 * @return {BsDmError[]} [] if user variable is valid.
 *  If user variable is invalid, the error list will be returned.
 */
export function dmCheckUserVariableValidity(state: DmBsProjectState | DmState, userVariableId: BsDmId | null | undefined, errorDetails?: BsDmEntityErrorDetails): BsDmError[];
/**
 * Return a user variable copySet containing the userVariables for the given user variable IDs from the
 *  given DmState.
 * @param state {DmState}
 * @param props {DmIdListParam} - list of user variable IDs to include
 * @returns {DmUserVariableCopySet}
 */
export function dmGetUserVariableCopySet(state: DmState, props: DmIdListParam): DmUserVariableCopySet;
/**
 * Return a user variable copySet containing all user variables in the sign.
 * @param state {DmState}
 * @returns {DmUserVariableCopySet}
 */
export function dmGetAllUserVariableCopySet(state: DmState): DmUserVariableCopySet;

/** @module Selectors:Zone */
/**
 * Return DmcZone object for a given Zone ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return zone object
 * @returns {DmcZone} zone object corresponding to given zone ID
 *          null if zone is not found with the given ID
 */
export function dmGetZoneById(state: DmState, props: DmIdParam): DmcZone | null;
/**
 * Return simple DmZone object for a given Zone ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return zone object
 * @returns {DmZone} zone object corresponding to given zone ID
 *          null if zone is not found with the given ID
 */
export function dmGetZoneStateById(state: DmState, props: DmIdParam): DmZone | null;
/**
 * Return DmcZone object for a given Zone name
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: name string for which to return zone object
 * @returns {DmcZone} zone object corresponding to given zone name
 *          null if zone is not found with the given name
 */
export function dmGetZoneByName(state: DmState, props: DmNameParam): DmcZone | null;
/**
 * Return the number of zones that belongs to the given type.
 *
 * @param {DmState} state
 * @param {ZoneType} type
 * @returns {number}
 */
export function dmGetZoneCountByZoneType(state: DmState, type: ZoneType): number;
/**
 * Return number of zones in the sign that require a video plane.
 * @param {DmState} state
 * @returns {number}
 */
export function dmGetVideoZoneCount(state: DmState): number;
/**
 * Return the number of audio decoders in use in the zone specified by the given zoneID.
 *  Audio decoders are always reserved and enabled for audio zones, even if no outputs are specified.
 *  Audio decoders are allocated in video zones only if audio is enabled, i.e., if at least
 *  one audio output is assigned.
 * @param {DmState} state
 * @param props {DmIdParam} - id property: zone ID for which to return audio decoder count
 * @returns {number}
 */
export function dmGetAudioDecoderCountForZone(state: DmState, props: DmIdParam): number;
/**
 * Return number of audio decoders currently in use by all zones in the sign.
 * @param {DmState} state
 * @returns {number}
 */
export function dmGetAudioDecoderCountForSign(state: DmState): number;
/**
 * Return number of audio decoders available for use in the current sign. This is the number of decoders
 *  available for the specified player model, less the number currently in use.
 * @param {DmState} state
 * @returns {number}
 */
export function dmGetAvailableAudioDecoderCount(state: DmState): number;
/**
 * Return true if an audio output can be mapped for a given zone. In order for this to be true,
 *  the zone must be a zoneType that uses audio, and either an audio output must be already mapped (meaning
 *  that audio is enabled already,) or there must be enough audio decoders for the zone (meaning that audio
 *  can be enabled.)
 * @param {DmState} state
 * @param props {DmIdParam} - id property: zone ID for which to return check audio enabling
 * @returns {boolean}
 */
export function dmCanSetAudioOutputForZone(state: DmState, props: DmIdParam): boolean;
/**
 * Return true if zone uses audio, and at least one audio output is mapped.
 * @param {DmState} state
 * @param props {DmIdParam} - id property: zone ID for which to return audio enabled status
 * @returns {boolean}
 */
export function dmIsAudioEnabledInZone(state: DmState, props: DmIdParam): boolean;
/**
 * Return DmcZone object for a given Zone tag
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmTagParam} - tag property: tag string for which to return zone object
 * @returns {DmcZone} zone object corresponding to given zone name
 *          null if zone is not found with the given name
 */
export function dmGetZoneByTag(state: DmState, props: DmTagParam): DmcZone | null;
/**
 * Return array of MediaState IDs for a given Zone ID.
 * This selector returns only top level mediaState IDs - those which are directly contained by the zone.
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return mediaState ID array
 * @returns {BsDmId[]} array of mediaState IDs for all mediaStates in the zone
 */
export function dmGetMediaStateIdsForZone(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return array of MediaState IDs for a given container ID, including all IDs within any SuperStates
 *  contained within the zone.
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: container ID (Zone or SuperState) for which to return mediaState ID array
 * @returns {BsDmId[]} array of mediaState IDs for all mediaStates in the zone, or within any nested SuperStates
 */
export function dmGetAllTargetableMediaStateIdsForContainer(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return array of Event IDs associated with all mediaStates contained a given zone.
 * The array will not contain event IDs for events contained within lower level mediaStates
 *  contained in mediaState containers, such as SuperStates.
 * Also, events marked with intrinsic action used as global MediaListItems are ignored.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: Zone ID for which to return events.
 * @returns {BsDmId[]} array of event IDs for all mediaState events in the zone
 */
export function dmGetEventIdsForZone(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return the Zone ID for the given mediaState ID.
 * If the mediaState is not directly contained within a zone, but rather contained in a MediaState container
 *  (e.g., SuperState,) this function will recurse through containing objects to find the containing zone.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: mediaState ID for which to return ID of the containing zone
 */
export function dmGetZoneIdForMediaStateId(state: DmState, props: DmIdParam): BsDmId | null;
/**
 * Return the 'containing' zone ID for an ID which is itself either a zone or mediaState ID. This function first
 *  attempts to interpret the ID as a zone ID, and if it is not a valid zone ID, then attempts to interpret
 *  it as a mediaState ID.
 * If the given ID is a zoneID, the ID returned.
 * If the ID is a mediaState ID, the ID of the containing zone is returned.
 * null is returned if the given ID is neither a zone ID or a mediaState ID.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - zone or mediaState ID
 * @returns {BsDmId | null}
 */
export function dmGetZoneIdForZoneOrMediaStateId(state: DmState, props: DmIdParam): BsDmId | null;
/**
 * Return the zone ID for the zone which contains (or is) the given MediaStateContainer.
 * If the container is a zone, the ID returned is that of the zone container.
 * If the container is a mediaState container (e.g., SuperState, MediaList, PlayFile,) the ID represents
 *  the zone which contains the mediaState container.
 * null is returned if the given container ID is not a valid container.
 * @param state {DmState} - bsDataModel state
 * @param props {DmMediaStateContainer} - container object, which has the id and type of the container
 * @returns {BsDmId | null}
 */
export function dmGetZoneIdForContainer(state: DmState, props: DmMediaStateContainer): BsDmId | null;
/**
 * Return the simple DmZone object which contains (or is) the given MediaStateContainer.
 * If the container is a zone, the DmZone object returned is that of the zone container.
 * If the container is a mediaState container (e.g., SuperState, MediaList, PlayFile,) the DmZone represents
 *  the zone which contains the mediaState container.
 * null is returned if the given container ID is not a valid container.
 * @param state {DmState} - bsDataModel state
 * @param props {DmMediaStateContainer} - container object, which has the id and type of the container
 * @returns {DmZone | null}
 */
export function dmGetZoneStateForContainer(state: DmState, props: DmMediaStateContainer): DmZone | null;
/**
 * Return the Zone object for the zone containing the given mediaState ID.
 * If the mediaState is not directly contained within a zone, but rather contained in a MediaState container
 *  (e.g., SuperState,) this function will recurse through containing objects to find the containing zone.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: mediaState ID for which to return Zone object of the containing zone
 */
export function dmGetZoneForMediaStateId(state: DmState, props: DmIdParam): DmcZone | null;
/**
 * Return the ZoneType of the zone containing the mediaState for the given ID.
 * If the mediaState is not directly contained within a zone, but rather contained in a MediaState container
 *  (e.g., SuperState,) this function will recurse through containing objects to find the containing zone.
 * @param state {DmState} - bsDataModel state
 * @param props - id property: mediaState ID for which to return Zone type of the containing zone
 */
export function dmGetZoneTypeForMediaStateId(state: DmState, props: DmIdParam): ZoneType | null;
/**
 * Return zone ID for zone containing the given event. This is the zone containing the mediaState
 *  which is the event's parent.
 * @param state {DmState} - bsDataModel state
 * @param props - id property: event ID for which to return Zone ID of the containing zone
 */
export function dmGetZoneIdForEventId(state: DmState, props: DmIdParam): BsDmId | null;
/**
 * Return zone ID for zone containing the given transition. This is the zone containing the event
 *  which is the transition's parent.
 * @param state {DmState} - bsDataModel state
 * @param props - id property: transition ID for which to return Zone ID of the containing zone
 */
export function dmGetZoneIdForTransitionId(state: DmState, props: DmIdParam): BsDmId | null;
/**
 * Return zone ID for zone containing the given command. This is the zone containing the mediaState, event,
 *  or transition which is the command's parent.
 * @param state {DmState} - bsDataModel state
 * @param props - id property: command ID for which to return Zone ID of the containing zone
 */
export function dmGetZoneIdForCommandId(state: DmState, props: DmIdParam): BsDmId | null;
/**
 * Return ZoneType for zone with given Zone ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return zone type
 * @returns {ZoneType} ZoneType corresponding to given zone ID
 *          null if zone is not found with the given ID
 */
export function dmGetZoneTypeById(state: DmState, props: DmIdParam): ZoneType | null;
/**
 * Return Zone nonInteractive indicator for zone with given Zone ID. The nonInteractive flag represents
 *  the client's intention that the zone be restricted to modifications that will maintain the zone
 *  contents as a simple playlist.
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return nonInteractive property type
 * @returns {ZoneType} ZoneType corresponding to given zone ID
 *          null if zone is not found with the given ID
 */
export function dmGetZoneNonInteractiveById(state: DmState, props: DmIdParam): boolean;
/**
 * Return true if the contents of the given zone represent a valid non-interactive playlist.
 * For an interactive zone, if this selector returns true, the zone can be converted to a
 *  non-interactive zone.
 * @param state {DmState} - bsDataModel state
 * @param props  {DmIdParam} - id property: zone ID for zone to check
 * @returns {boolean}
 */
export function dmIsZoneContentNonInteractive(state: DmState, props: DmIdParam): boolean;
/**
 * Return true if given Zone can be an interactive zone.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID
 * @returns {boolean}
 */
export function dmIsZoneInteractiveCompatible(state: DmState, props: DmIdParam): boolean;
/**
 * Return true if given Zone can be a non-interactive zone.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID
 * @returns {boolean}
 */
export function dmIsZoneNonInteractiveCompatible(state: DmState, props: DmIdParam): boolean;
/**
 * Return DmZoneSpecificProperties object for a given Zone ID
 *  DmZoneSpecificProperties is a union type, and will be one of the defined DmXXXZoneProperties objects
 *  where 'XXX' is the type of the zone
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return zone object
 * @returns {DmZoneSpecificProperties} zone property object of the correct zoneProperty type
 *  for the zone corresponding to given zone ID.
 *  Returns null if zone is not found with the given ID
 */
export function dmGetZonePropertiesById(state: DmState, props: DmIdParam): DmZoneSpecificProperties | null;
/**
 * Return DmZoneSpecificProperties object for a given Zone name
 *  DmZoneSpecificProperties is a union type, and will be one of the defined DmXXXZoneProperties objects
 *  where 'XXX' is the type of the zone
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmNameParam} - name property: name string for which to return zone object
 * @returns {DmZoneSpecificProperties} zone property object of the correct zoneProperty type
 *  for the zone corresponding to given zone name.
 *  Returns null if zone is not found with the given name
 */
export function dmGetZonePropertiesByName(state: DmState, props: DmNameParam): DmZoneSpecificProperties | null;
/**
 * Return DmZoneSpecificProperties object for a given Zone tag
 *  DmZoneSpecificProperties is a union type, and will be one of the defined DmXXXZoneProperties objects
 *  where 'XXX' is the type of the zone
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmTagParam} - tag property: tag string for which to return zone object
 * @returns {DmZoneSpecificProperties} zone property object of the correct zoneProperty type for the zone corresponding
 *  to given zone tag, null if zone is not found with the given name
 */
export function dmGetZonePropertiesByTag(state: DmState, props: DmTagParam): DmZoneSpecificProperties | null;
export interface DmAssetCheckParams {
    container: DmMediaStateContainer;
    assetInfo: BscFileTypeInfo;
}
/**
 * Given an ID of a video or an audio zone, return the audioOutputSpecification for that zone.
 * The audioOutputSpecification is a simplified audio map, in which the assignment for all USB based outputs
 *  is specified as a single value.
 * If the ID does not reference an audio or video zone, null is returned.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return zone audio specification
 * @returns {DmAudioOutputAssignmentSpecification | null}
 */
export function dmGetZoneAudioOutputSpecificationById(state: DmState, props: DmIdParam): DmAudioOutputAssignmentSpecification | null;
/**
 * Return true if an assetItem with the given assetInfo can be used as content within the given container.
 *  The container can be any mediaState container: a zone or any mediaState based container,
 *  including mediaList and playFile mediaStates.
 * @param state {DmState} - bsDataModel state
 * @param props {DmAssetCheckParams} - object with assetInfo to test and container object to check
 * @returns {boolean} - true if asset is valid for use in the container
 */
export function dmIsValidAssetTypeForContainer(state: DmState, props: DmAssetCheckParams): boolean;
export interface DmContentItemTypeCheckParams {
    container: DmMediaStateContainer;
    contentItemType: ContentItemType;
}
/**
 * Return true if the given ContentItemType can be used as content within the given container.
 *  The container can be any mediaState container: a zone or any mediaState based container,
 *  including mediaList and playFile mediaStates.
 * @param state {DmState} - bsDataModel state
 * @param props {DmContentItemTypeCheckParams} - object with contentItemType to test and container object to check
 * @returns {boolean} - true if contentItemType is valid for use in the container
 */
export function dmIsValidContentItemTypeForContainer(state: DmState, props: DmContentItemTypeCheckParams): boolean;
/**
 * Validate zone, including zone properties (if necessary) and all mediaStates contained in the zone.
 * @param {DmState} state
 * @param {DmIdParam} props - ID of zone to validate.
 * @returns {BsDmEntityValidationResult}
 */
export function dmValidateZone(state: DmState, props: DmIdParam): BsDmEntityValidationResult;
/**
 * Return array of Zone IDs for the sign
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsDmId[]} array of zone IDs for all zones in the sign
 */
export function dmGetZonesForSign(state: DmState): BsDmId[];
/**
 * Return # of zones in sign
 *
 * @param state {DmState} - bsDataModel state
 * @returns {number} count of zones in the sign
 */
export function dmGetZoneCount(state: DmState): number;
/**
 * Return array of Zone IDs for all zones of the given type in sign
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmTypeParam} - value is a ZoneType enum for the desired zone type to retrieve
 * @returns {number} array of zone IDs for all zones in the sign that match the given type
 */
export function dmGetZoneIdsForZoneType(state: DmState, props: DmTypeParam): BsDmId[];
/**
 * Return a map of zone IDs keyed by the zone tag string
 *
 * @param state {DmState} - bsDataModel state
 * @returns {DmZoneTagMap} map of zone IDs keyed by tag string
 */
export function dmGetZoneTagMap(state: DmState): DmZoneTagMap;
/**
 * Return array of command IDs for zone commands that reference the given zone.
 * This selector includes ALL commands that reference the zone including commands with parent entities
 *  contained in the given zone.
 * @param state {DmState}
 * @param props {DmIdParam} - id property: zone ID for which to return zone commands that reference the zone
 */
export function dmGetZoneCommandIdsForZone(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return array of command IDs for zone commands that reference the given zone,
 *  and that are not commands associated with a parent entity contained in the given zone.
 * @param state {DmState}
 * @param props {DmIdParam} - id property: zone ID for which to return zone commands that reference the zone
 */
export function dmGetNonContainedZoneCommandIdsForZone(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return simple DmZoneLayer state object for a given ZoneLayer ID
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zoneLayer ID for which to return zoneLayer object
 * @returns {DmZoneLayer} simple ZoneLayer state object corresponding to given ID
 *          null if zoneLayer is not found with the given ID
 */
export function dmGetZoneLayerStateById(state: DmState, props: DmIdParam): DmZoneLayer | null;
/**
 * Return DmcZoneLayer object representing the zoneLayer corresponding to the given ID
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zoneLayer ID for which to return zoneLayer object
 * @returns {DmcZoneLayer | null}
 */
export function dmGetZoneLayerById(state: DmState, props: DmIdParam): DmcZoneLayer | null;
/**
 * Return array of zoneLayer IDs representing zoneLayers in which the given zone ID is active.
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return active zoneLayer IDs
 * @returns {BsDmId[]}
 */
export function dmGetZoneLayerIdsForZoneId(state: DmState, props: DmIdParam): BsDmId[];
/**
 * Return array of DmcZoneLayer objects representing the zone layers for a given zone ID
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdParam} - id property: zone ID for which to return active zoneLayer objects
 * @returns {DmcZoneLayer[]}
 */
export function dmGetZoneLayersForZoneId(state: DmState, props: DmIdParam): DmcZoneLayer[];
/**
 * Return array of Zone IDs for the layer. 0 or 1 entries unless the zone is in mosaic mode
 *
 * @param state {DmState} - bsDataModel state
 * @param layerId {BsDmId} - layer id
 * @returns {BsDmId[]} array of zone IDs for the specified layer
 */
export function dmGetZonesForLayer(state: DmState, layerId: BsDmId): BsDmId[];
/**
 * Return array of Zone Layer IDs for the sign. The order of the zone layer IDs in the returned array
 *  reflects the ZOrder sequence of zones.
 *
 * @param state {DmState} - bsDataModel state
 * @returns {BsDmId[]} array of zone layer IDs for all the zone layers in the sign, in ZOrder sequence
 */
export function dmGetZoneLayerSequence(state: DmState): BsDmId[];
export interface DmLayerTypeAndOptionalIndex {
    type: ZoneLayerType;
    index?: number;
}
/**
 * Return zoneLayer ID for a zoneLayer with the given type and index. Note that index is used currently only
 *  for video zone layers, and can be 0 or 1 on players that have two video zone layers.
 * @param state {DmState} - bsDataModel state
 * @param props {DmLayerTypeAndOptionalIndex} - zone layer type and optional index for video layers
 * @returns {BsDmId | null} This will be null if a video layer is not available for the given index
 */
export function dmGetZoneLayerIdByTypeAndIndex(state: DmState, props: DmLayerTypeAndOptionalIndex): BsDmId | null;
/**
 * Return DmcZoneLayer object for a zoneLayer with the given type and index. Note that index is used currently only
 *  for video zone layers, and can be 0 or 1 on players that have two video zone layers.
 * @param state {DmState} - bsDataModel state
 * @param props {DmLayerTypeAndOptionalIndex} - zone layer type and optional index for video layers
 * @returns {DmcZoneLayer | null} This will be null if a video layer is not available for the given index
 */
export function dmGetZoneLayerByTypeAndIndex(state: DmState, props: DmLayerTypeAndOptionalIndex): DmcZoneLayer | null;
/**
 * Given a zone type and the optional parameters listed below, return true if an additional zone of that type
 *  can be added to the sign.
 * @param state {DmState} - bsDataModel state
 * @param props (DmSetZoneParams}
 *     zoneType to test
 *     zoneLayerIdParams to use - optional
 *     allows transition to mosaic mode - optional
 * @returns {boolean} true if additional zone of given type can be added
 */
export function dmCanAddZone(state: DmState, props: DmSetZoneParams): boolean;
/**
 * Return true if the zone specified by the 'id' property can be changed to a different zone type with the
 *  desired target ZoneType specified as a ZoneType string for the 'type' property.
 * Example call: canChange = dmCanChangeZoneType(getState(), {id: zoneId, type: ZoneType.VideoOnly})
 *
 * @param state {DmState} - bsDataModel state
 * @param props {DmIdAndSetZoneParams} -
 *  id property: zone ID to test
 *  addZone properties: target ZoneType and layer parameters
 * @returns {boolean} true if change can be made successfully
 */
export function dmCanChangeZoneType(state: DmState, props: DmIdParam & DmSetZoneParams): boolean;

/**
 * Clear the cache for all selectors that maintain a cache.
 */
export function dmClearSelectorCaches(): void;
