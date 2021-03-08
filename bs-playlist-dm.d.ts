/* tslint:disable:quotemark max-line-length trailing-comma */
import {MediaType, VideoDisplayModeType, BsAssetItem, BsAssetId, AssetType, ContentItemType, BsAssetLocator, TransitionType, BsContentAssetItem, BsnDynamicPlaylistProperties, BsnMediaFeedProperties} from './bscore';
export const createNextDefaultCustomFieldName: (currentCustomFieldNames?: PlDmCfNameMap | {}) => string;

/**
 * Create a BsAssetItem for a local file given a file path
 * In general, BsAssetItem objects will and should be created by an external content manager. This helper
 *  is provided for occasional use - primarily for creating objects to be used in testing, but also for
 *  occasional other temporary or stopgap use. This should be avoided in final production code.
 *
 * @param fullPath {string} - local file path, including directory and filename
 * @param [id=''] {string} - ID string with which to set the ID (used in testing.) Default is blank, which is common
 *  because, in practice, the ID field is only assigned when the assetItem is used in a sign.
 * @param [mediaType=derived from extension] {MediaType} - used to specify the mediaType rather than generate
 *  it from the file extension.
 *  This is useful in cases where the file name doesn't have an extension (e.g., in the player file pool.) If this
 *  is not specified, the mediaType will be generated based on the file extension.
 * @param [assetType=derived from extension] {AssetType} - specify the asset type rather than deriving it
 *  from the file extension.
 * @returns {BsAssetItem}
 */
export function plDmCreateAssetItemFromLocalFile(fullPath: string, id?: BsAssetId, mediaType?: MediaType, assetType?: AssetType): BsAssetItem;
/**
 * Create either a PlDmMediaContentItem (based on PlDmContentItem) or a state derived from
 *  PlDmMediaContentItem for use in a MediaState (i.e., one of: PlDmVideoContentItem,
 *  PlDmAudioContentItem, or PlDmImageContentItem.)
 * This ContentItemState encapsulates a media or text file, along with ContentItem parameters
 *  specific to the type of MediaFile
 * If one of the derived states is created, all contentType specific parameters will be set yo default values.
 *
 * IMPORTANT NOTE: Typically clients will NOT use this function.
 * MediaContentItems can no longer be passed to any AddMediaState action creation function.
 * Instead, for MediaContent, a BsAssetItem is passed to the plDmAddContentItem function.
 * The plDmAddContentItem action creates the contentItem, and also handles asset management for the content.
 *
 * @param id {string} - unique id is given to this content item
 * @param name {string} - name of the ContentItem - typically this should be set to the file name by the client
 * @param assetId {string} - string ID that can be used by the client to resolve the file location
 * @param mediaType {MediaType} - type of media file
 * @param displayDuration {number} - display duration for text and image. Video and audio discard this param.
 * @param validityStartDate {Date}
 * @param validityEndDate {Date}
 * @returns {PlDmMediaContentItem}
 */
export function plDmCreateMediaContentItem(id: string, name: string, assetId: string, mediaType: MediaType, displayDuration?: number, validityStartDate?: Date, validityEndDate?: Date): PlDmMediaContentItem;
export function plDmCreateLiveMediaFeedMediaContentItem(id: string, name: string, assetId: string, mediaType: MediaType, customFieldsMap: string, description?: string, title?: string, displayDuration?: number, validityStartDate?: Date, validityEndDate?: Date): PlDmMediaContentItem;
/**
 * Return true if the given content item is of type PlDmMediaContentItem.
 * This also serves as a Typescript type guard
 *
 * @param contentItem (PlDmDerivedContentItem} - content item to test
 * @returns {boolean} - true if content item is PlDmMediaContentItem
 */
export function plDmContentItemIsMediaContentItem(contentItem: PlDmMediaContentItem): contentItem is PlDmMediaContentItem;
/**
 * Return true if the given content item is of type PlDmMediaContentItem.
 * This also serves as a Typescript type guard
 *
 * @param contentItem (PlDmDerivedContentItem} - content item to test
 * @returns {boolean} - true if content item is PlDmMediaContentItem
 */
export function plDmContentItemIsMediaFeedContentItem(contentItem: PlDmMediaContentItem): contentItem is PlDmMediaContentItem;
/**
 * Create a PlDmVideoContentItem.
 * This ContentItemState encapsulates a video file, along with VideoContentItem specific parameters.
 *
 * All optional parameters will be set to user default if omitted.
 *
 * IMPORTANT NOTE: Typically clients will NOT use this function.
 * MediaContentItems can no longer be passed to any AddMediaState action creation function.
 * Instead, for MediaContent, a BsAssetItem is passed to the plDmAddContentItem function.
 * The plDmAddContentItem action creates the contentItem, and also handles asset management for the content.
 *
 * @param id {string} - unique id is given to this content item
 * @param name {string} - name of the ContentItem - typically this should be set to the file name by the client
 * @param assetId {string} - string ID that can be used by the client to resolve the video file location
 * @param enableValidityDate {boolean} - flag for whether use enabled validity date.
 * @param validityStartDate {Date}
 * @param validityEndDate {Date}
 * @param volume {number} - volume for video file audio playback (range 0..100)
 * @param [videoDisplayMode=<user> (2D)] {VideoDisplayModeType}
 * @param [automaticallyLoop=<user> (false)] {boolean} - set to true to have file playback automatically restarted
 * @returns {PlDmVideoContentItem}
 */
export function plDmCreateVideoContentItem(id: string, name: string, assetId: string, enableValidityDate?: boolean, validityStartDate?: Date, validityEndDate?: Date, volume?: number, videoDisplayMode?: VideoDisplayModeType, automaticallyLoop?: boolean): PlDmVideoContentItem;
/**
 * Create a PlDmAudioContentItem.
 * This ContentItemState encapsulates an audio file, along with AudioContentItem specific parameters.
 *
 * All optional parameters will be set to user default if omitted.
 *
 * IMPORTANT NOTE: Typically clients will NOT use this function.
 * MediaContentItems can no longer be passed to any AddMediaState action creation function.
 * Instead, for MediaContent, a BsAssetItem is passed to the plDmAddContentItem function.
 * The plDmAddContentItem action creates the contentItem, and also handles asset management for the content.
 *
 * @param id {string} - unique id is given to this content item
 * @param name {string} - name of the ContentItem - typically this should be set to the file name by the client
 * @param assetId {string} - string ID that can be used by the client to resolve the audio file location
 * @param enableValidityDate {boolean} - flag for whether use enabled validity date.
 * @param validityStartDate {Date}
 * @param validityEndDate {Date}
 * @param [volume=<user> (100)] {number} - volume for audio playback (range 0..100)
 * @returns {PlDmAudioContentItem}
 */
export function plDmCreateAudioContentItem(id: string, name: string, assetId: string, enableValidityDate?: boolean, validityStartDate?: Date, validityEndDate?: Date, volume?: number): PlDmAudioContentItem;
/**
 * Create a PlDmImageContentItem.
 * This ContentItemState encapsulates an image file, along with ImageContentItem specific parameters.
 *
 * All optional parameters will be set to user default if omitted.
 *
 * IMPORTANT NOTE: Typically clients will NOT use this function.
 * MediaContentItems can no longer be passed to any AddMediaState action creation function.
 * Instead, for MediaContent, a BsAssetItem is passed to the plDmAddContentItem function.
 * The plDmAddContentItem action creates the contentItem, and also handles asset management for the content.
 *
 * @param id {string} - unique id is given to this content item
 * @param name {string} - name of the ContentItem - typically this should be set to the file name by the client
 * @param assetId {string} - string ID that can be used by the client to resolve the image file location
 * @param displayDuration {number} - display duration
 * @param enableValidityDate {boolean} - flag for whether use enabled validity date.
 * @param validityStartDate {Date}
 * @param validityEndDate {Date}
 * @param [useImageBuffer=<user> (false)] {boolean} - set to true to construct an image buffer for the image
 * @param [videoPlayerRequired=<user> (false)] {boolean} - set to true if VideoPlayer should be used to display image
 * @returns {PlDmImageContentItem}
 */
export function plDmCreateImageContentItem(id: string, name: string, assetId: string, displayDuration?: number, enableValidityDate?: boolean, validityStartDate?: Date, validityEndDate?: Date, useImageBuffer?: boolean, videoPlayerRequired?: boolean): PlDmImageContentItem;
/**
 * Create a PlDmTextContentItem.
 * This ContentItemState encapsulates an image file, along with TextContentItem specific parameters.
 *
 * All optional parameters will be set to user default if omitted.
 *
 * IMPORTANT NOTE: Typically clients will NOT use this function.
 * MediaContentItems can no longer be passed to any AddMediaState action creation function.
 * Instead, for MediaContent, a BsAssetItem is passed to the plDmAddContentItem function.
 * The plDmAddContentItem action creates the contentItem, and also handles asset management for the content.
 *
 * @param id {string} - unique id is given to this content item
 * @param name {string} - name of the ContentItem - typically this should be set to the file name by the client
 * @param assetId {string} - string ID that can be used by the client to resolve the image file location
 * @param displayDuration {number} - display duration
 * @param enableValidityDate {boolean} - flag for whether use enabled validity date.
 * @param validityStartDate {Date}
 * @param validityEndDate {Date}
 * @returns {PlDmTextContentItem}
 */
export function plDmCreateTextContentItem(id: string, name: string, assetId: string, displayDuration?: number, enableValidityDate?: boolean, validityStartDate?: Date, validityEndDate?: Date): PlDmTextContentItem;

/**
 * Interface that defines the object state used to store defaults
 *
 * @interface PlDmDefaultProperties
 */
export interface PlDmDefaultProperties {
    videoContentItem: PlDmVideoContentItemData;
    audioContentItem: PlDmAudioContentItemData;
    imageContentItem: PlDmImageContentItemDefaults;
}
export interface PlDmSetDefaultParams {
    videoContentItem?: Partial<PlDmVideoContentItemData>;
    audioContentItem?: Partial<PlDmAudioContentItemData>;
    imageContentItem?: Partial<PlDmImageContentItemDefaults>;
}
/**
 * Get default Video ContentItem defaults data object.
 *
 *  @returns PlDmVideoContentItemData object
 */
export function plDmGetDefaultVideoContentItemData(): PlDmVideoContentItemData;
/**
 * Reset all defaults to initial values.
 */
export function plDmResetDefaultPropertyValues(): void;
/**
 * Get default Audio ContentItem defaults data object.
 *
 *  @returns PlDmAudioContentItemData object
 */
export function plDmGetDefaultAudioContentItemData(): PlDmAudioContentItemData;
/**
 * Get default Image ContentItem defaults data object.
 *
 *  @returns PlDmImageContentItemDefaults object
 */
export function plDmGetDefaultImageContentItemData(): PlDmImageContentItemDefaults;

export enum PlDmErrorType {
    unknownError = 0,
    unexpectedError = 1,
    invalidParameters = 2,
    invalidOperation = 3,
    apiError = 4,
    assetNotFound = 5,
    invalidSign = 6,
    pluginNameInUse = 7,
    parserPluginFunctionNameInUse = 8
}
export class PlDmError extends Error {
    name: string;
    type: PlDmErrorType;
    action?: PlDmBaseAction;
    constructor(type: PlDmErrorType, reason?: string, action?: PlDmBaseAction);
    attachAction(action: PlDmBaseAction): void;
}
export function PlDmIsPlDmError(error: Error): error is PlDmError;

export interface PlDmMap<T extends PlDmObject> {
    [id: string]: T;
}
export interface PlDmState {
    playlist: PlDmPlaylist;
    contentItems: PlDmContentItemsState;
    assetMap: PlDmAssetMapState;
    modifiedTime: string;
    customFields: PlDmCustomFieldsState;
}
export interface PlDmProjectState {
    bspl: PlDmState;
}
export interface PlDmCustomFieldsState {
    customFieldsOrder: string[];
    customFieldsNameById: PlDmCfNameMap;
    contentItemCustomFields: PlDmCfCollectionMap;
}
export type PlDmAssetMapState = PlDmMap<BsAssetItem> | {};
export type PlDmContentItemMap = PlDmMap<PlDmContentItem> | {};
export interface PlDmContentItemsState {
    contentItemsById: PlDmContentItemMap;
    allContentItems: string[];
}
export const PlDmIdNone = "0";
export interface PlDmObject {
    readonly id: string;
    name: string;
}
export interface PlDmDynamicPlaylist {
    id: string;
    name: string;
    shuffle: boolean;
    supportsAudio: boolean;
    supportsImages: boolean;
    supportsVideo: boolean;
    lastModifiedDate: Date;
}
export interface PlDmCfNameMap {
    [id: string]: string;
}
export interface PlDmCustomFieldMap {
    [name: string]: string;
}
export interface PlDmCfCollection {
    [id: string]: string;
}
export interface PlDmCfCollectionMap {
    [id: string]: PlDmCfCollection;
}
export interface PlDmCustomFieldValueParams {
    id: string;
    nameId: string;
}
export interface PlDmCustomFieldValueByNameParams {
    id: string;
    fieldName: string;
}
export interface PlDmLiveMediaFeed {
    id: string;
    name: string;
    ttl: number;
    lastModifiedDate: Date;
}
export type PlDmPlaylist = PlDmDynamicPlaylist | PlDmLiveMediaFeed;
export interface PlDmLocatorParam {
    locator: string;
}
export interface PlDmIdParam {
    id: string;
}
export interface PlDmFont {
    name: string;
    assetId: string;
}
/**
 * PlDmContentItem serves as the "abstract base interface" for all content item types
 */
export interface PlDmContentItem extends PlDmObject {
    readonly type: ContentItemType;
    enableValidityDate: boolean;
    validityStartDate: Date;
    validityEndDate: Date;
}
export interface PlDmMediaContentItem extends PlDmContentItem {
    assetId: string;
    displayDuration?: number;
    customFieldsMap?: string;
    description?: string;
    title?: string;
    disable?: boolean;
}
export interface PlDmSupports {
    supportsAudio: boolean;
    supportsImages: boolean;
    supportsVideo: boolean;
}
export interface PlDmVideoContentItemData {
    volume: number;
    videoDisplayMode: VideoDisplayModeType;
    automaticallyLoop: boolean;
}
export interface PlDmVideoContentItem extends Readonly<PlDmMediaContentItem>, Readonly<PlDmVideoContentItemData> {
}
export interface PlDmAudioContentItemData {
    volume: number;
}
export interface PlDmAudioContentItem extends Readonly<PlDmMediaContentItem>, Readonly<PlDmAudioContentItemData> {
}
export interface PlDmImageContentItemData {
    useImageBuffer: boolean;
    videoPlayerRequired: boolean;
}
export interface PlDmImageContentItem extends Readonly<PlDmMediaContentItem>, Readonly<PlDmImageContentItemData> {
}
export interface PlDmImageContentItemDefaults extends PlDmImageContentItemData {
    displayDuration: number;
}
export interface PlDmTextContentItem extends Readonly<PlDmMediaContentItem> {
}

export class PlDmcDynamicPlaylistContentItem {
    readonly contentItem: PlDmMediaContentItem;
    readonly mediaAssetItem: BsAssetItem | null;
    constructor(contentItem: PlDmMediaContentItem, mediaAssetItem?: BsAssetItem);
}
export class PlDmcMediaFeedContentItem {
    readonly contentItem: PlDmMediaContentItem;
    readonly mediaAssetItem: BsAssetItem | null;
    readonly customFields: PlDmCustomFieldMap;
    constructor(contentItem: PlDmMediaContentItem, mediaAssetItem?: BsAssetItem, customFieldCollection?: PlDmCustomFieldMap);
}

export type PlAssetItemAction = PlDmAction<BsAssetItem>;
export interface PlAssetItemUpdateParams {
    assetItem: BsAssetItem;
}
export type PlAssetItemUpdateAction = PlDmAction<PlAssetItemUpdateParams>;
/**
 * Substitute assetItem information for an asset in the assetMap. The asset for which the substitution
 *  is to be made is identified by the currentLocator parameter. If not asset is found in the assetMap
 *  corresponding to the currentLocator, an exception is thrown.
 *
 * @param {BsAssetLocator} currentLocator
 * @param {BsAssetItem} newAssetItem
 * @returns {PlDmThunkAction<PlAssetItemUpdateParams>}
 */
export function plDmUpdateAssetLocation(currentLocator: BsAssetLocator, newAssetItem: BsAssetItem): PlDmThunkAction<PlAssetItemUpdateParams>;

/** @module Actions:General */
import { Action, Dispatch, ActionCreator } from 'redux';
export type PlDmDispatch = Dispatch<PlDmState>;
export interface PlDmBaseAction extends Action {
    type: string;
    payload: {};
    error?: boolean;
    meta?: {};
}
export interface PlDmAction<T> extends PlDmBaseAction {
    payload: T;
}
export type PlDmActionCreator<T> = ActionCreator<PlDmAction<T>>;
export type PlDmThunkAction<T> = (dispatch: PlDmDispatch, getState: () => PlDmState, extraArgument: undefined) => PlDmAction<T>;
/**
 * When a component will unmount, this action can help clean bspl reducer.
 * @returns {PlDmClearStateAction}
 */
export function plDmClearStateAction(): PlDmClearStateAction;
export interface PlDmClearStateAction extends Action {
    type: string;
    payload: null;
}
export interface PlDmBatchAction extends Action {
    type: string;
    payload: PlDmBaseAction[];
}
/**
 * Get PlDmState object from a enclosing parent state.
 * This function depends on the assumption that:
 *   1. If the parent state contains a PlDmState object, the property name for that object will
 *      be either 'bsplDm' or 'bsdatamodel'.
 *   2. If the parent state does not contain a property with either of these names,
 *      the parent state is itself a PlDmState.
 *
 * @param state {any} - parent state
 * @returns {PlDmState} - returned PlDmState object
 */
export function plDmFilterPlDmState(state: any): PlDmState;

export interface ContentItemAddParams {
    items: ContentItemParams[];
    index?: number;
}
export interface ContentItemParams {
    id: string;
    name: string;
    type: ContentItemType;
    assetId: string;
    transitionType?: TransitionType;
    transitionDuration?: number;
    displayDuration?: number;
    validityStartDate?: Date;
    validityEndDate?: Date;
    enableValidityDate?: boolean;
    videoDisplayMode?: VideoDisplayModeType;
    automaticallyLoop?: boolean;
    volume?: number;
    useImageBuffer?: boolean;
    videoPlayerRequired?: boolean;
    customFieldsMap?: string;
    description?: string;
    title?: string;
    disable?: boolean;
}
export interface ContentItemDeleteParams {
    ids: string[];
}
export interface ContentItemsAddRangeParams {
    name: string;
    type: MediaType;
    content: BsAssetItem;
    title?: string;
    transitionType?: TransitionType;
    transitionDuration?: number;
    displayDuration?: number;
    validityStartDate?: Date;
    validityEndDate?: Date;
}
export interface ItemReorderParams {
    ids: string[];
    index: number;
}
export type ContentItemAction = PlDmAction<ContentItemParams>;
export type ContentItemAddAction = PlDmAction<ContentItemAddParams>;
export type ContentItemDeleteAction = PlDmAction<ContentItemDeleteParams>;
export type ContentItemReorderAction = PlDmAction<ItemReorderParams>;
/**
 * Please use plDmAddDynamicPlaylistContentItem
 * @deprecated
 */
export const plDmAddContentItem: typeof plDmAddDynamicPlaylistContentItem;
/**
 * Add a content item or content items. This action will also add corresponding asset item to assetMap
 * NOTE: this action is specific for dynamic playlist. Live media feed shouldn't use this.
 *
 * @param {ContentItemsAddRangeParams[] | ContentItemsAddRangeParams} items
 * @param {number} index
 * @returns {PlDmThunkAction<ContentItemAddParams>}
 */
export function plDmAddDynamicPlaylistContentItem(items: ContentItemsAddRangeParams[] | ContentItemsAddRangeParams, index?: number): PlDmThunkAction<ContentItemAddParams>;
/**
 * Add a content item or content items. This action will also add corresponding asset item to assetMap and customFields
 * NOTE: this action is specific for live media feed. Dynamic playlist shouldn't use this
 *
 * @param {ContentItemsAddRangeParams[] | ContentItemsAddRangeParams} items
 * @param {number} index
 * @returns {PlDmThunkAction<ContentItemAddParams>}
 */
export function plDmAddMediaFeedContentItem(items: ContentItemsAddRangeParams[] | ContentItemsAddRangeParams, index?: number): PlDmThunkAction<ContentItemAddParams>;
/**
 * Please use plDmAddMediaFeedContentItemFromBsContentAssetItems
 * @deprecated
 */
export const plDmAddMediaFeedContentItemFromBsAssetItems: typeof plDmAddMediaFeedContentItemFromBsContentAssetItems;
/**
 * This one use for load existing media feed from BSN BsAssetItem.
 *
 * @param {BsAssetItem[] | BsAssetItem} items
 * @param {number} index
 * @returns {PlDmThunkAction<ContentItemAddParams>}
 */
export function plDmAddMediaFeedContentItemFromBsContentAssetItems(items: BsContentAssetItem[] | BsContentAssetItem, index?: number): PlDmThunkAction<ContentItemAddParams>;
/**
 * This one use for load existing media feed.
 * Load from BsAssetItem should use plDmAddMediaFeedContentItemFromBsAssetItems
 *
 * @param {ContentItemsAddRangeParams[] | ContentItemsAddRangeParams} items
 * @param {number} index
 * @returns {PlDmThunkAction<ContentItemAddParams>}
 */
export function plDmAddMediaFeedContentItemForLoadNewState(items: ContentItemsAddRangeParams[] | ContentItemsAddRangeParams, index?: number): PlDmThunkAction<ContentItemAddParams>;
/**
 * Please use plDmAddDynamicPlaylistContentItemForLoadNewState
 * @deprecated
 */
export const plDmAddContentItemForLoadNewState: typeof plDmAddDynamicPlaylistContentItemForLoadNewState;
/**
 * This one use for loading dynamic playlist.
 *
 * @param {ContentItemsAddRangeParams[] | ContentItemsAddRangeParams} items
 * @param {number} index
 * @returns {PlDmThunkAction<ContentItemAddParams>}
 */
export function plDmAddDynamicPlaylistContentItemForLoadNewState(items: ContentItemsAddRangeParams[] | ContentItemsAddRangeParams, index?: number): PlDmThunkAction<ContentItemAddParams>;
/**
 * Update the order of content items.
 *
 * @param {ItemReorderParams} params
 * @returns {ContentItemReorderAction}
 */
export function plDmUpdateOrder(params: ItemReorderParams): ContentItemReorderAction;
/**
 * Update content item properties.
 * NOTE: This is for both dynamic playlist and live media feed
 *
 * @param {ContentItemParams} params
 * @returns {ContentItemAction}
 */
export function plDmUpdateContentItem(params: ContentItemParams): ContentItemAction;
/**
 * Delete a content item or content items together with asset items.
 * NOTE: This is for both dynamic playlist and live media feed
 *
 * @param {string | string[]} id
 * @returns {PlDmThunkAction<ContentItemDeleteParams>}
 */
export function plDmDeleteContentItem(id: string | string[]): PlDmThunkAction<ContentItemDeleteParams>;

export interface DynamicPlaylistParams {
    id: string;
    supportsAudio?: boolean;
    supportsVideo?: boolean;
    supportsImages?: boolean;
    name?: string;
    shuffle?: boolean;
    lastModifiedDate?: Date;
}
export interface LiveMediaFeedParams {
    id: string;
    name: string;
    ttl: number;
}
export type PlaylistParams = DynamicPlaylistParams;
export type PlaylistAction = PlDmAction<PlaylistParams>;
/**
 * Create a new dynamic playlist
 * Note: leading and trailing spaces are trimmed from the name
 *
 * @param {string} name
 * @param {boolean} supportsAudio
 * @param {boolean} supportsVideo
 * @param {boolean} supportsImages
 * @param {boolean} shuffle
 * @returns {PlaylistAction}
 */
export function plDmNewPlaylist(name: string, supportsAudio: boolean, supportsVideo: boolean, supportsImages: boolean, shuffle?: boolean): PlaylistAction;
export type LiveMediaFeedAction = PlDmAction<LiveMediaFeedParams>;
/**
 * Create a new live media feed.
 * Note: leading and trailing spaces are trimmed from the name
 *
 * @param {string} name
 * @param {number} ttl
 * @returns {LiveMediaFeedAction}
 */
export function plDmNewLiveMediaFeed(name: string, ttl?: number): LiveMediaFeedAction;
/**
 * Update playlist state. For both live media feed and dynamic playlist
 *
 * @param {PlaylistParams} params
 * @returns {PlaylistAction}
 */
export function plDmUpdatePlaylistProperties(params: PlaylistParams): PlaylistAction;
export function plDmUpdateLiveMediaFeedPlaylistProperties(params: LiveMediaFeedParams): LiveMediaFeedAction;
export interface OpenPlaylistParams {
    newState: PlDmState;
}
export type OpenPlaylistAction = PlDmAction<OpenPlaylistParams>;
/**
 * Open an exist dynamic playlist and live media feed.
 *
 * @param {PlDmState} newState
 * @returns {OpenPlaylistAction}
 */
export function plDmOpenPlaylist(newState: PlDmState): OpenPlaylistAction;
export type UpdatePlaylistModifiedTimeAction = PlDmAction<Date>;
/**
 * Open an exist live media feed from BSN.
 *
 * @param {PlDmState} newState
 * @returns {PlDmThunkAction<OpenPlaylistParams>}
 */
export function plDmLoadLiveMediaFeedFromBsn(bsnMediaFeedProperties: BsnMediaFeedProperties): PlDmThunkAction<OpenPlaylistParams>;
/**
 * Open an exist dynamic playlist from BSN.
 *
 * @param {PlDmState} newState
 * @returns {PlDmThunkAction<OpenPlaylistParams>}
 */
export function plDmLoadDynamicPlaylistFromBsn(bsnDynamicPlaylistProperties: BsnDynamicPlaylistProperties): PlDmThunkAction<OpenPlaylistParams>;
/**
 * Open an exist dynamic playlist with validation.
 * Open from BSN should call plDmLoadDynamicPlaylistFromBsn.
 *
 * @param {PlDmState} newState
 * @returns {PlDmThunkAction<OpenPlaylistParams>}
 */
export function plDmVerifyAndOpenPlayist(newState: PlDmState): PlDmThunkAction<OpenPlaylistParams>;

export interface AddCustomFieldsCollectionActionParams {
    id: string;
    collection: PlDmCfCollection | {};
}
export interface AddNewCustomFieldNameActionParams {
    nameId: string;
    name: string;
}
export type AddNewCustomFieldNameAction = PlDmAction<AddNewCustomFieldNameActionParams>;
/**
 * Add a new custom variable with passed in name. If no parameter passed in, by default name set up empty string.
 *
 * @param {string} name
 * @returns {AddNewCustomFieldNameAction}
 */
export function plDmAddNewCustomFieldName(name?: string): AddNewCustomFieldNameAction;
/**
 * Add a new custom variable with generated default name.
 *
 * @returns {PlDmThunkAction<AddNewCustomFieldNameActionParams>}
 */
export function plDmAddNewCustomField(): PlDmThunkAction<AddNewCustomFieldNameActionParams>;
export interface UpdateCustomFieldValueActionParams {
    id: string;
    nameId: string;
    value: string;
}
export type UpdateCustomFieldValueAction = PlDmAction<UpdateCustomFieldValueActionParams>;
/**
 * Pass in the customFieldsMap id, field's nameId, and the new Value.
 *
 * @param {UpdateCustomFieldValueActionParams} params
 * @returns {UpdateCustomFieldValueAction}
 */
export function plDmUpdateCustomFieldValue(params: UpdateCustomFieldValueActionParams): UpdateCustomFieldValueAction;
export interface UpdateCustomFieldNameActionParams {
    nameId: string;
    name: string;
}
export type UpdateCustomFieldNameAction = PlDmAction<UpdateCustomFieldNameActionParams>;
/**
 * Pass in field nameId and new name. Call plDmCustomFieldNameExistCheck to check whether the new name already exists.
 * Duplicate the name is not allowed.
 *
 * @param {UpdateCustomFieldNameActionParams} params
 * @returns {UpdateCustomFieldNameAction}
 */
export function plDmUpdateCustomFieldName(params: UpdateCustomFieldNameActionParams): UpdateCustomFieldNameAction;
export interface DeleteCustomFieldActionParams {
    nameId: string;
}
export type DeleteCustomFieldAction = PlDmAction<DeleteCustomFieldActionParams>;
/**
 * Pass in the field nameId, remove that custom field from name map and all customFields map
 *
 * @param {string} nameId
 * @returns {DeleteCustomFieldAction}
 */
export function plDmRemoveCustomFieldName(nameId: string): DeleteCustomFieldAction;
export interface DeleteCustomFieldCollectionActionParams {
    ids: string[];
}
export type DeleteCustomFieldCollectionAction = PlDmAction<DeleteCustomFieldCollectionActionParams>;

import { Reducer } from 'redux';
export type PlDmReducer = Reducer<PlDmState>;
/**
 *
 * @type {PlDmReducer}
 */
export const plDmReducer: Reducer<PlDmState>;
export type PlDmPlaylistState = PlDmState;
/**
 *
 * @param {PlDmPlaylistState} state
 * @returns {PlDmError}
 */
export function plDmCheckForInvalidPlDmPlaylistState(state: PlDmPlaylistState): PlDmError | null;

export {};

export {};

export {};

export {};

export const plDmFilterBaseState: (state: any) => PlDmState;
/**
 * When save and create playlist on BSN, client should call this selector to get base state.
 * This state converts all time to UTC with the same time value.
 * This returns a copy of the DmState with validity dates converted.
 */
export const plDmGetBaseStateForUniversalTimeZone: (state: PlDmProjectState | PlDmState) => PlDmState;
/**
 * Return a PlDmState given either a PlDmState or a PlDmProjectState.
 * Throws an exception if PlDmState is invalid.
 * @param state {PlDmProjectState | PlDmState}
 */
export const plDmGetBaseState: (state: PlDmProjectState | PlDmState) => PlDmState;

/**
 * Get dynamic playlist content Item Entity
 * NOTE: only use for dynamic playlist. Use plDmGetLiveMediaContentItemEntityById for media feed.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @param {PlDmIdParam} props
 * @returns {PlDmcDynamicPlaylistContentItem}
 */
export function plDmGetDynamicPlaylistContentItemById(state: PlDmProjectState | PlDmState, props: PlDmIdParam): PlDmcDynamicPlaylistContentItem | null;
/** @deprecated: renamed to plDmGetDynamicPlaylistContentItemById */
export const plDmGetContentItemById: typeof plDmGetDynamicPlaylistContentItemById;
/**
 * Only use for Live Media feed.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @param {PlDmIdParam} props
 * @returns {PlDmcMediaFeedContentItem}
 */
export function plDmGetLiveMediaContentItemById(state: PlDmProjectState | PlDmState, props: PlDmIdParam): PlDmcMediaFeedContentItem | null;

export const plDmGetAssetMapState: (state: PlDmProjectState | PlDmState) => PlDmAssetMapState;
/**
 * Return BsAssetId for a given asset locator string
 *
 * @param state {PlDmState} - bsDataModel state
 * @param props {PlDmLocatorParam} - locator property: locator string for asset
 * @returns {BsAssetId} assetId string corresponding to given locator
 *          null if assetId is not found for the locator
 */
export const plDmGetAssetIdByLocator: (state: PlDmProjectState | PlDmState, props: PlDmLocatorParam) => BsAssetId | null;
/**
 *
 * @param {PlDmState} state
 * @param {PlDmIdParam} props
 * @returns {BsAssetItem}
 */
export function plDmGetAssetItemById(state: PlDmProjectState | PlDmState, props: PlDmIdParam): BsAssetItem | null;
/**
 *
 * @param {PlDmState} state
 * @param {PlDmLocatorParam} props
 * @returns {BsAssetItem}
 */
export function plDmGetAssetItemByLocator(state: PlDmProjectState | PlDmState, props: PlDmLocatorParam): BsAssetItem | null;
/**
 *
 * @param {PlDmState} state
 * @returns {string[]}
 */
export function plDmGetAssetItemIdsForPlaylist(state: PlDmProjectState | PlDmState): string[];
/**
 * Return list of assetItems for all Blob assetItems in the assetPool.
 * @param state {PlDmProjectState | PlDmState}
 * @returns {BsAssetItem[]}
 */
export function plDmGetBlobAssetItemList(state: PlDmProjectState | PlDmState): BsAssetItem[];
/**
 * Return BsAssetItem[] containing all assetItems for BSN publishing.
 * All assets must be located on BSN.
 * Returns null if there are any local assets.
 * @param state {PlDmProjectState | PlDmState}
 * @returns {BsAssetItem[] | null}
 */
export function plDmGetBsnPlaylistAssetItemList(state: PlDmProjectState | PlDmState): BsAssetItem[] | null;

export const plDmGetContentItemsState: (state: PlDmProjectState | PlDmState) => PlDmContentItemsState;
/**
 * Return PlDmMediaContentItem with passed in Id.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @param {PlDmIdParam} props
 * @returns {PlDmMediaContentItem}
 */
export function plDmGetContentItemStateById(state: PlDmProjectState | PlDmState, props: PlDmIdParam): PlDmMediaContentItem | null;
/**
 * Return PlDmContentItemMap which contains all content items.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @returns {PlDmContentItemMap}
 */
export function plDmGetAllContentItems(state: PlDmProjectState | PlDmState): PlDmContentItemMap;
/**
 * Return an array with content items' ids.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @returns {string[]}
 */
export function plDmGetContentItemsArrayInOrder(state: PlDmProjectState | PlDmState): string[];

export const plDmGetPlaylistState: (state: PlDmProjectState | PlDmState) => PlDmPlaylist;
/**
 * Return playlist id
 *
 * @param {PlDmProjectState | PlDmState} state
 * @returns {string}
 */
export function plDmGetPlaylistId(state: PlDmProjectState | PlDmState): string;
/**
 * Return playlist name.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @returns {string}
 */
export function plDmGetPlaylistName(state: PlDmProjectState | PlDmState): string;
/**
 * Return playlist last modified date.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @returns {Date}
 */
export function plDmGetPlaylistLastModifiedDate(state: PlDmProjectState | PlDmState): Date;
/**
 * Return playlist store that contains all the metadata.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @returns {PlDmPlaylist}
 */
export function plDmGetPlaylistProperties(state: PlDmProjectState | PlDmState): PlDmPlaylist;
/**
 * Return media types that this playlist can support.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @returns {PlDmSupports}
 */
export function plDmGetPlaylistSupports(state: PlDmProjectState | PlDmState): PlDmSupports;

export const plDmGetModifiedTimeState: (state: PlDmProjectState | PlDmState) => string;
/**
 * Return playlist last modified time.
 * Nearly an alias for plDmGetModifiedTimeState() - was add for compatibility reasons.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @returns {Date}
 */
export function plDmGetPlaylistLastModifiedTime(state: PlDmProjectState | PlDmState): Date;

/**
 * This returns an array with custom fields name id. This array maintains the order of custom fields.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @returns {string[]}
 */
export function plDmGetCustomFieldsOrder(state: PlDmProjectState | PlDmState): string[];
/**
 * Returns all the PlDmCfCollections that are being used by content items.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @returns {PlDmCfCollectionMap | {}}
 */
export function plDmGetCustomFieldsCollectionMap(state: PlDmProjectState | PlDmState): PlDmCfCollectionMap | {};
/**
 * Returns custom fields name map.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @returns {PlDmCfNameMap | {}}
 */
export function plDmGetCustomFieldsNameMap(state: PlDmProjectState | PlDmState): PlDmCfNameMap | {};
/**
 * Return PlDmCustomFieldMap for the given content item.
 * @param state
 * @param props
 */
export function plDmGetCustomFieldsDerivedCollectionByContentItemId(state: PlDmProjectState | PlDmState, props: PlDmIdParam): PlDmCustomFieldMap;
/**
 * Pass in custom field name, return the corresponding name id. Return null if the name doesn't exist
 *
 * @param {PlDmProjectState | PlDmState} state
 * @param {string} fieldName
 * @returns {string}
 */
export function plDmGetFieldIdByName(state: PlDmProjectState | PlDmState, fieldName: string): string | null;
/**
 * Pass in customFieldsMap id from the content item and custom field name, return the value.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @param {PlDmCustomFieldValueByNameParams} props
 * @returns {string}
 */
export function plDmGetCustomFieldValueByFieldName(state: PlDmProjectState | PlDmState, props: PlDmCustomFieldValueByNameParams): string | null;
/**
 * Pass in customFieldsMap id from the content item and custom field nameId, return the value.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @param {PlDmCustomFieldValueParams} props
 * @returns {string}
 */
export function plDmGetCustomFieldValue(state: PlDmProjectState | PlDmState, props: PlDmCustomFieldValueParams): string;
/**
 * Pass in custom field nameId, return the custom field name
 *
 * @param {PlDmProjectState | PlDmState} state
 * @param {string} props
 * @returns {string}
 */
export function plDmGetCustomFieldNameById(state: PlDmProjectState | PlDmState, props: string): string;
/**
 * Call before try to update a custom field name. Return true if the name already exists, false otherwise.
 *
 * @param {PlDmProjectState | PlDmState} state
 * @param {string} newName
 * @returns {boolean}
 */
export function plDmCustomFieldNameExistCheck(state: PlDmProjectState | PlDmState, newName: string): boolean;
