/* tslint:disable:quotemark max-line-length trailing-comma */
import {AssetLocation, AssetType, BsAssetData, BsAssetItem, BsAssetLocator, BsAssetThumbnail, BsnObjectPermission, BsnTagKeySpecification, BsnTagSpecification, BsSize, MediaType, BsAudioData, BsImageData, BsMediaFileData, BsnDataFeedReference, BsnPresentationReference, BsVideoData, MediaLegalityResults, BsnTextFeedProperties, BsnMediaFeedProperties, BsnDynamicPlaylistProperties, BsnFilterSpecification, BsnTaggedListSpecification, BsnTaggedPlaylistProperties, BsnTagSortSpecification, BsnHtmlSiteAssetItem, BsnHtmlSiteProperties, BsnGroupItem, BsnPresentationProperties, BsnPresentationStatus, BsUploadItemResult, FileSpec, PublishData, PresentationScheduleItem, BsnAutorunProperties, PlayerModel, BsDsSetupParams, DeviceNetworkingConfiguration, BDeployDevice, BsUploadFileItemSpec, BsUploadFileProgress, BsUploadWebPageProgress, BsUploadWebPageSessionSpec, BsUploadItemStatus, BsRoleOperationPermission, BsAssetSpecification, BseChildAssetType, BsnTagKeyPatternSpecification, BsnTagValuePatternSpecification} from './bscore';
import {DmBsProjectState, DmState, BsDmId} from './bsdatamodel';
import {BsnRegularGroupEntity, BsnDeviceHealthStatus, BsnDeviceField, BsnFilter, BsnDeviceDownloadEntity, BsnDeviceEntity, BsnDeviceErrorEntity, BsnDeviceUpdateData, BsniDeviceLogFilter, BsniDeviceLogSortElement, BsniDeviceLogRecord, BsnDeviceSubscriptionEntity, BsnRoleEntity, BsnPermissionEntity, BsnPermissionPrincipalUserInfoEntity, BsnPermissionPrincipalRoleInfoEntity, BsnUserEntity, BsnBusinessOperationType, BsnOperationAction, BsnBusinessOperationEntity} from './bsnconnector';
import {BsTask, BsTaskId, BsTaskManager, BsTaskProgress, BsTaskResult, BsTaskStatus, BsTaskType} from './bs-task-manager';
import {PlDmState} from './bs-playlist-dm';
export interface CmThumbnail {
    url: string;
    size: BsSize | null;
    hash: string | null;
}
/**
 * CmiAsset and its extended 'sub-classes' encapsulate file/folder information contained in the BsAssetItem object,
 *  plus additional derived data and functionality specific to the each asset type.
 */
export interface CmiAsset {
    /**
     * @property name {string} - assetItem name
     */
    readonly name: string;
    /**
     * AssetItem type
     */
    readonly assetType: AssetType;
    /**
     * AssetItem location (Local or BSN)
     */
    readonly assetLocation: AssetLocation;
    /**
     * AssetItem scope (BSN network name or local machine ID)
     */
    readonly assetScope: string;
    /**
     * AssetItem media type - this applies only to AssetType.Content assets.
     */
    readonly mediaType: MediaType;
    /**
     * AssetItem size (in bytes)
     */
    readonly fileSize: number;
    /**
     * If a network based asset, the upload date for the asset.
     * Null if not a network based asset.
     */
    readonly uploadDate: Date | null;
    /**
     * AssetItem creation date
     * Null if not a network based asset.
     */
    readonly creationDate: Date | null;
    /**
     * AssetItem last modified date
     */
    readonly lastModifiedDate: Date | null;
    /**
     * AssetItem directory path (without base name)
     */
    readonly dirPath: string;
    /**
     * AssetItem full path (including base name and extension)
     */
    readonly fullPath: string;
    /**
     * AssetItem locatorKey - this is a unique key string for each asset based on its actual location within its
     *  scope. This value is typically used to determine asset uniqueness within a data model, and can be used
     *  to key a map of assets used within the data model. If an asset has a locator key value equivalent to an asset
     *  already in the collection, the assets are assumed to be the same. The locatorKey algorithm is defined in
     *  the bsCore package.
     */
    readonly locatorKey: string;
    /**
     * Return locatorHash for the asset - this differs slightly from the assetItem locatorKey. The locatorHash
     *  is used in asset management operations, and also depends on asset scope.
     */
    readonly locatorHash: string;
    /**
     * Simple cloned BsAssetLocator object containing the data necessary to locate the asset.
     */
    readonly assetLocator: BsAssetLocator;
    /**
     * Simple cloned BsAssetItem object for use with bsDataModel, etc.
     * This returned item does not include assetData, assetUsage, or local asset permissions.
     * AssetData contents can be accessed by accessors in derived CmiAsset classes.
     * AssetUsage contents can be accessed by accessors in derived CmiAsset classes
     *   for AssetTypes that maintain usage data.
     */
    readonly assetItem: BsAssetItem;
    /**
     * Get assetData associated with this asset. Some assets that are parts
     *  of other compound assets such as a DynamicPlaylist or a MediaFeed will have assetData objects
     *  such as BsnDynamicPlaylistItemProperties or BsnMediaFeedItemProperties.
     */
    readonly assetData: BsAssetData | null;
    /** True if this is a temporary asset (i.e., it is not backed by a cached assetItem) */
    readonly isTemporaryAsset: boolean;
    /** @deprecated - use property 'locatorKey' */
    readonly locator: string;
    /** @deprecated - this will go away when content-manager-store is refactored. */
    readonly rawAssetItem: BsAssetItem;
    /**
     * Get thumbnail for asset file, if asset is a video or an image file.
     *  This function is potentially asynchronous and returns a Promise.
     *  This function caches newly created thumbnails and will return data from the ThumbnailCache if the
     *   thumbnail info is stored there.
     *  This function can be called in a non-renderer environment to retrieve thumbnail data, however
     *   it is expected that the getThumbnail will be normally used from the renderer process.
     * @returns {Promise<BsAssetThumbnail | null>}
     *  Returned thumbnail may be either BsNetworkAssetThumbnail or BsLocalAssetThumbnail.
     *  Note: thumbnails returned from this method for local system files are raw data, not browser blobs.
     */
    getAssetThumbnail(): Promise<BsAssetThumbnail | null>;
    /**
     * Return URL and thumbnail metadata for thumbnail that can be used in renderer.
     * This method must be called in the renderer process for local assets on a desktop system.
     * Any blob created for a local file asset will be cached in the CmiAsset object.
     *
     * @returns {Promise<CmThumbnail | null>} CmThumbnail object with URL, size, and hash for the thumbnail,
     *  or null is thumbnail URL cannot be created or found.
     *  Note: currently, size and has for BSN thumbnails will be null.
     */
    getThumbnail(): Promise<CmThumbnail | null>;
    /**
     * Return fileHash (SHA1) for the asset. This function can be overridden in subclasses to compute
     *  the hash if it is not present. The function will resolve with null if the hash cannot be obtained.
     * @returns {Promise<string | null>}
     */
    getFileHash(): Promise<string | null>;
    /**
     * Retrieve the asset data for this asset. This is useful in cases where the asset was constructed from
     *  an assetItem that may have been incomplete, or simply to refresh the data
     * @return {Promise<CmiAsset>} current object, after update
     */
    fetchAssetItemData(): Promise<CmiAsset>;
    /**
     * Check to see if the asset exists at its declared AssetLocation.
     * @returns {Promise<boolean>}
     */
    testAssetExists(): Promise<boolean>;
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<CmiAsset>;
    setTags(tags: BsnTagSpecification[]): Promise<void>;
    deleteTags(tagKeys: BsnTagKeySpecification[]): Promise<void>;
}
/** @deprecated - use CmiAsset */
export type BsAssetBase = CmiAsset;

export interface CmiContentAsset extends CmiAsset {
    /**
     * Return list of permissions associated with asset.
     */
    readonly permissions: BsnObjectPermission[];
    /**
     * Move content asset to the specified path.
     * @param destinationPath
     */
    moveAsset(destinationPath: string): Promise<void>;
}

export interface CmiFolderAsset extends CmiContentAsset {
    /**
     * True if the folder asset has sub-folders. Will return null if it is not known if the folder has subfolders.
     */
    readonly hasSubFolders: boolean | null;
    /**
     * True if the folder asset contains files. Will return null if it is not known if the folder contains files.
     */
    readonly hasFiles: boolean | null;
    /**
     * Retrieve the asset data for this asset. This is useful in cases where the asset was constructed from
     *  an assetItem that may have been incomplete. This function refreshes the assetItem data from the file source.
     */
    fetchAssetItemData(): Promise<CmiFolderAsset>;
    /**
     * Replace all object permissions for the current asset with the given permission list.
     * @param objectPermissions {BsnObjectPermission[]}
     * @returns {Promise<CmcFolderAsset>}
     */
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<CmiFolderAsset>;
}
/** @deprecated - use CmiFolderAsset */
export type BsFolderAsset = CmiFolderAsset;

export interface CmiMediaAsset extends CmiContentAsset {
    /**
     * Return list of presentation reference objects for all presentations using this media asset.
     */
    readonly presentationList: BsnPresentationReference[];
    /**
     * Return count of presentations using this media asset.
     */
    readonly presentationCount: number;
    /**
     * Return list of dynamic playlist reference objects for all dynamic playlists using this media asset.
     */
    readonly dynamicPlaylistList: BsnDataFeedReference[];
    /**
     * Return count of dynamic playlists using this media asset.
     */
    readonly dynamicPlaylistCount: number;
    /**
     * Return list of media feed reference objects for all media feeds using this media asset.
     */
    readonly liveMediaFeedList: BsnDataFeedReference[];
    /**
     * Return count of media feeds using this media asset.
     */
    readonly liveMediaFeedCount: number;
    /**
     * Return list of tagged playlist reference objects for all tagged playlists using this media asset.
     */
    readonly taggedPlaylistList: BsnDataFeedReference[];
    /**
     * Return count of tagged playlists using this media asset.
     */
    readonly taggedPlaylistCount: number;
    /**
     * Return array of tags.
     */
    readonly tags: Array<Readonly<BsnTagSpecification>>;
    /**
     * Get video metadata, if asset is a video file. Return null if not a video file.
     *  This function is potentially asynchronous and returns a Promise.
     */
    getVideoData(): Promise<BsVideoData | null>;
    /**
     * Get audio metadata, if asset is a video or an audio file. Return null if not a video or audio file.
     *  This function is potentially asynchronous and returns a Promise.
     *  For video files, this function returns BsVideoData, which is a superset if BsAudioData.
     */
    getAudioData(): Promise<BsAudioData | BsVideoData | null>;
    /**
     * Get image metadata, if asset is an image file. Return null if not an image file.
     *  This function is potentially asynchronous and returns a Promise.
     */
    getImageData(): Promise<BsImageData | null>;
    /**
     * Get media file metadata (for any type of media file.
     */
    getMediaFileData(): Promise<BsMediaFileData | null>;
    isMediaFileLegalForProject(state: DmBsProjectState | DmState): Promise<MediaLegalityResults>;
    /**
     * Retrieve the asset data for this asset. This is useful in cases where the asset was constructed from
     *  an assetItem that may have been incomplete. This function refreshes the assetItem data from the file source.
     */
    fetchAssetItemData(): Promise<CmiMediaAsset>;
    /**
     * Replace all object permissions for the current asset with the given permission list.
     * @param objectPermissions {BsnObjectPermission[]}
     * @returns {Promise<CmcMediaAsset>}
     */
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<CmiMediaAsset>;
}
/** @deprecated - use CmiMediaAsset */
export type BsMediaAsset = CmiMediaAsset;

/**
 * CmiTextFeedAsset encapsulates an assetItem of type
 *  AssetType.[BSNDataFeed, BSNMediaFeed, BSNDynamicPlaylist, BSNTaggedPlaylist]
 * Methods are provided to access the data feed content.
 */
export interface CmiTextFeedAsset extends CmiAsset {
    /**
     * Return true if feed content data has been retrieved
     */
    readonly isContentDataValid: boolean;
    /**
     * Basic TextFeed properties (null if TextFeed name is not found).
     * The object returned from this is guaranteed only to contain basic properties. This object contains the entire
     *  object returned from BSN, and some of the basic values in this object are copied to the base BsAssetItem.
     *  Tis object can be used to retrieve data feed specific information.
     * The 'items' list may be null, as that is not retrieved in a basic enumeration.
     * To get TextFeed properties with a guaranteed complete items list, call {@link getFeedInfoWithContent}
     */
    readonly feedInfo: BsnTextFeedProperties | null;
    /**
     * Return list of presentation reference objects for all presentations using this text feed.
     */
    readonly presentationList: BsnPresentationReference[];
    /**
     * Return count of presentations using this text feed.
     */
    readonly presentationCount: number;
    /**
     * Return list of permissions associated with the text feed.
     */
    readonly permissions: BsnObjectPermission[];
    /**
     * Get full TextFeed properties object, including media feed item or content list.
     * Once the item list has been retrieved for this media feed, this method will resolve immediately since the
     *  properties object is cached within the assetData.
     *
     * @returns {Promise<BsnTextFeedProperties>} a Promise that will resolve with the TextFeed properties object
     */
    getFeedInfoWithContent(): Promise<BsnTextFeedProperties>;
    /**
     * Retrieve the asset data for this asset. This is useful in cases where the asset was constructed from
     *  an assetItem that may have been incomplete. This function refreshes the assetItem data from the file source.
     */
    fetchAssetItemData(): Promise<CmiTextFeedAsset>;
    /**
     * Replace all object permissions for the current asset with the given permission list.
     * @param objectPermissions {BsnObjectPermission[]}
     * @returns {Promise<CmcTextFeedAsset>}
     */
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<CmiTextFeedAsset>;
    /**
     * Update text feed with new textFeed data model state
     * @param state - textFeed state
     */
    updateTextFeed(state: object): Promise<void>;
}
/** @deprecated - use CmiTextFeedAsset */
export type BsTextFeedAsset = CmiTextFeedAsset;

/**
 * CmiMediaFeedAsset encapsulates an assetItem of type AssetType.BSNMediaFeed.
 * Methods are provided to access the media feed content.
 */
export interface CmiMediaFeedAsset extends CmiAsset {
    /**
     * Return true if feed content data has been retrieved
     */
    readonly isContentDataValid: boolean;
    /**
     * Basic MediaFeed properties.
     * The object returned from this is guaranteed only to contain basic properties. This object contains the entire
     *  object as returned from BSN, and some of the basic values in this object are copied to the base BsAssetItem.
     *  Tis object can be used to retrieve data feed specific information.
     * The 'content' list may be null, as that is not retrieved in a basic enumeration.
     * To get MediaFeed properties with a guaranteed complete content list, call {@link getFeedInfoWithContent}
     */
    readonly feedInfo: BsnMediaFeedProperties | null;
    /**
     * Return list of presentation reference objects for all presentations using this media feed.
     */
    readonly presentationList: BsnPresentationReference[];
    /**
     * Return count of presentations using this media feed.
     */
    readonly presentationCount: number;
    /**
     * Return list of permissions associated with the media feed.
     */
    readonly permissions: BsnObjectPermission[];
    /**
     * Get full MediaFeed properties object, including media feed content list.
     * Once the item list has been retrieved for this media feed, this method will resolve immediately since the
     *  properties object is cached within the assetData.
     */
    getFeedInfoWithContent(): Promise<BsnMediaFeedProperties>;
    /**
     * Return the custom field names for mediaFeed items. This returns a Promise because ity may be necessary
     *  to retrieve the media feed content.
     */
    getCustomFieldNames(): Promise<string[]>;
    /**
     * Retrieve the asset data for this asset. This is useful in cases where the asset was constructed from
     *  an assetItem that may have been incomplete. This function refreshes the assetItem data from the file source.
     */
    fetchAssetItemData(): Promise<CmiMediaFeedAsset>;
    /**
     * Replace all object permissions for the current asset with the given permission list.
     */
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<CmiMediaFeedAsset>;
    /**
     * Update media feed with new mediaFeed data model state
     * @param state - mediaFeed state
     */
    updateMediaFeed(state: object): Promise<void>;
}
/** @deprecated - use CmiMediaFeedAsset */
export type BsMediaFeedAsset = CmiMediaFeedAsset;

/**
 * CmiDynamicPlaylistAsset encapsulates an assetItem of type AssetType.BSNDynamicPlaylist.
 * Methods are provided to access the data feed content.
 */
export interface CmiDynamicPlaylistAsset extends CmiAsset {
    /**
     * Return true if feed content data has been retrieved
     */
    readonly isContentDataValid: boolean;
    /**
     * Basic DynamicPlaylist properties.
     * The object returned from this is guaranteed only to contain basic properties. This object contains the entire
     *  object as returned from BSN, and some of the basic values in this object are copied to the base BsAssetItem.
     *  Tis object can be used to retrieve data feed specific information.
     * The 'items' or 'content' list may be null, as that is not retrieved in a basic enumeration.
     * To get DynamicPlaylist properties with a guaranteed complete items or content list,
     *  call {@link getFeedInfoWithContent}
     */
    readonly feedInfo: BsnDynamicPlaylistProperties | null;
    /**
     * Return list of presentation reference objects for all presentations using this dynamic playlist.
     */
    readonly presentationList: BsnPresentationReference[];
    /**
     * Return count of presentations using this dynamic playlist.
     */
    readonly presentationCount: number;
    /**
     * Return list of permissions associated with the dynamic playlist.
     */
    readonly permissions: BsnObjectPermission[];
    /**
     * Get full DynamicPlaylist properties object, including media feed content list.
     * Once the item list has been retrieved for this media feed, this method will resolve immediately since the
     *  properties object is cached within the assetData.
     */
    getFeedInfoWithContent(): Promise<BsnDynamicPlaylistProperties>;
    /**
     * Retrieve the asset data for this asset. This is useful in cases where the asset was constructed from
     *  an assetItem that may have been incomplete. This function refreshes the assetItem data from the file source.
     */
    fetchAssetItemData(): Promise<CmiDynamicPlaylistAsset>;
    /**
     * Replace all object permissions for the current asset with the given permission list.
     * @param objectPermissions
     */
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<CmiDynamicPlaylistAsset>;
    /**
     * Update dynamic playlist with new dynamicPlaylist data model state
     * @param state - dynamicPlaylist state
     */
    updateDynamicPlaylist(state: object): Promise<void>;
}
/** @deprecated - use CmiDynamicPlaylistAsset */
export type BsDynamicPlaylistAsset = CmiDynamicPlaylistAsset;

/**
 * CmiTaggedPlaylistAsset encapsulates an assetItem of type AssetType.BSNTaggedPlaylist.
 * Methods are provided to access the data feed content.
 */
export interface CmiTaggedPlaylistAsset extends CmiAsset {
    /**
     * Return true if feed content data has been retrieved
     */
    readonly isContentDataValid: boolean;
    /**
     * Basic TaggedPlaylist properties.
     * The object returned from this is guaranteed only to contain basic properties. This object contains the entire
     *  object as returned from BSN, and some of the basic values in this object are copied to the base BsAssetItem.
     *  Tis object can be used to retrieve data feed specific information.
     * The 'items' or 'content' list may be null, as that is not retrieved in a basic enumeration.
     * To get TaggedPlaylist properties with a guaranteed complete items or content list,
     *  call {@link getFeedInfoWithContent}
     */
    readonly feedInfo: BsnTaggedPlaylistProperties | null;
    /**
     * VirtualPath for the contents of the tagged playlist
     * If this object does not have valid feedInfo data, null is returned.
     */
    readonly contentsVirtualPath: string | null;
    /**
     * TaggedPlaylist rule, expressed as a BsnFilterSpecification.
     * If this object does not have valid feedInfo data, null is returned.
     */
    readonly tagRuleFilterSpecification: BsnFilterSpecification | null;
    /**
     * TaggedPlaylist sort specification, expressed as BsnTagSortSpecification.
     * If this object does not have valid feedInfo data, null is returned.
     */
    readonly tagSortSpecification: BsnTagSortSpecification | null;
    /**
     * TaggedPlaylistSpecification, expressed as BsnTaggedListSpecification.
     * If this object does not have valid feedInfo data, null is returned.
     */
    readonly taggedPlaylistSpecification: BsnTaggedListSpecification | null;
    /**
     * Return list of presentation reference objects for all presentations using this tagged playlist.
     */
    readonly presentationList: BsnPresentationReference[];
    /**
     * Return count of presentations using this tagged playlist.
     */
    readonly presentationCount: number;
    /**
     * Return list of permissions associated with tagged playlist.
     */
    readonly permissions: BsnObjectPermission[];
    /**
     * Get full TaggedPlaylist properties object, including media feed content list.
     * Once the item list has been retrieved for this media feed, this method will resolve immediately since the
     *  properties object is cached within the assetData.
     */
    getFeedInfoWithContent(): Promise<BsnTaggedPlaylistProperties>;
    /**
     * Retrieve the asset data for this asset. This is useful in cases where the asset was constructed from
     *  an assetItem that may have been incomplete. This function refreshes the assetItem data from the file source.
     */
    fetchAssetItemData(): Promise<CmiTaggedPlaylistAsset>;
    /**
     * Replace all object permissions for the current asset with the given permission list.
     */
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<CmiTaggedPlaylistAsset>;
    /**
     * Update tagged playlist with new taggedPlaylist data model state
     * @param state - taggedPlaylist state
     */
    updateTaggedPlaylist(state: object): Promise<void>;
}
/** @deprecated - use CmiTaggedPlaylistAsset */
export type BsTaggedPlaylistAsset = CmiTaggedPlaylistAsset;

/**
 * CmiHtmlSiteAsset encapsulates an assetItem of type AssetType.HtmlSite
 * Methods are provided to access the HtmlSite content.
 */
export interface CmiHtmlSiteAsset extends CmiAsset {
    /**
     * If site is a BSN based web site, this will return the BSN property info for the site. If getHtmlSiteAssetList
     *  has been called, the 'assets' property will hold a list of file assets associated with the site.
     */
    readonly htmlSiteInfo: BsnHtmlSiteProperties | null;
    /**
     * If site is a BSN based web site, this will return the BSN indexFile property for the site.
     */
    readonly indexFile: BsnHtmlSiteAssetItem | null;
    /**
     * Return list of presentation reference objects for all presentations using this HTML Site.
     */
    readonly presentationList: BsnPresentationReference[];
    /**
     * Return count of presentations using this HTML Site.
     */
    readonly presentationCount: number;
    /**
     * Return list of permissions associated with the HTML site.
     */
    readonly permissions: BsnObjectPermission[];
    /**
     * Return list of assets associated with the HTML Site (i.e., files other than the index file.)
     */
    getHtmlSiteAssetList(): Promise<BsnHtmlSiteAssetItem[] | null>;
    /**
     * Retrieve the asset data for this asset. This is useful in cases where the asset was constructed from
     *  an assetItem that may have been incomplete. This function refreshes the assetItem data from the file source.
     */
    fetchAssetItemData(): Promise<CmiHtmlSiteAsset>;
    /**
     * Replace all object permissions for the current asset with the given permission list.
     */
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<CmiHtmlSiteAsset>;
}
/** @deprecated - use CmiHtmlSiteAsset */
export type BsHtmlSiteAsset = CmiHtmlSiteAsset;

/**
 * CmiDeviceWebPageAsset encapsulates an assetItem of type AssetType.DeviceHtmlSite
 * Methods are provided to access the DeviceHtmlSite content.
 */
export interface CmiDeviceWebPageAsset extends CmiAsset {
    /**
     * For a BSN DeviceWebPage, this will return the BSN property info for the webPage. If getDeviceWebPageAssetList
     *  has been called, the 'assets' property will hold a list of file assets associated with the webPage.
     */
    readonly deviceWebPageInfo: BsnHtmlSiteProperties | null;
    /**
     * This will return the BSN indexFile property for the deviceWebPage.
     */
    readonly indexFile: BsnHtmlSiteAssetItem | null;
    /**
     * Return list of presentation reference objects for all presentations using this deviceWebPage.
     */
    readonly presentationList: BsnPresentationReference[];
    /**
     * Return count of presentations using this deviceWebPage.
     */
    readonly presentationCount: number;
    /**
     * Return list of permissions associated with the deviceWebPage.
     */
    readonly permissions: BsnObjectPermission[];
    /**
     * Return list of assets associated with the deviceWebPage (i.e., files other than the index file.)
     */
    getDeviceWebPageAssetList(): Promise<BsnHtmlSiteAssetItem[] | null>;
    /**
     * Retrieve the asset data for this asset. This is useful in cases where the asset was constructed from
     *  an assetItem that may have been incomplete. This function refreshes the assetItem data from the file source.
     */
    fetchAssetItemData(): Promise<CmiDeviceWebPageAsset>;
    /**
     * Replace all object permissions for the current asset with the given permission list.
     * @param objectPermissions {BsnObjectPermission[]}
     * @returns {Promise<BsDeviceWebPageAsset>}
     */
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<CmiDeviceWebPageAsset>;
}
/** @deprecated - use CmiDeviceWebPageAsset */
export type BsDeviceWebPageAsset = CmiDeviceWebPageAsset;

export interface CmiPresentationSaveOptions {
    autorunVersion?: string;
}
export interface CmiPresentationPublishOptions extends CmiPresentationSaveOptions {
    autoplayFileData?: object | null;
    resourcesFileData?: Uint8Array;
    resourcesFileId?: number;
    userDefinedEventsData?: object | null;
    userDefinedEventsId?: number;
}
/**
 * CmiPresentationAsset encapsulates an assetItem of type AssetType.Project or AssetType.ProjectBpf.
 * Methods are provided to manage the presentation defined by the asset (update, open, etc.)
 */
export interface CmiPresentationAsset extends CmiAsset {
    readonly presentationProperties: BsnPresentationProperties | null;
    readonly presentationBsnStatus: BsnPresentationStatus;
    readonly isScheduledOnBsn: boolean;
    readonly bsnGroups: BsnGroupItem[] | null;
    readonly dependentPresentationNames: string[];
    /**
     * Return list of permissions associated with presentation.
     */
    readonly permissions: BsnObjectPermission[];
    /**
     * Retrieve the asset data for this asset. This is useful in cases where the asset was constructed from
     *  an assetItem that may have been incomplete. This function refreshes the assetItem data from the file source.
     */
    fetchAssetItemData(): Promise<CmiPresentationAsset>;
    /**
     * Retrieve BSN presentationProperties for the presentation, fetching data from BSN if necessary.
     * Returns null if assetLocation is not BSN.
     */
    getPresentationProperties(): Promise<BsnPresentationProperties | null>;
    /**
     * Replace all object permissions for the current asset with the given permission list.
     * @param objectPermissions
     */
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<CmiPresentationAsset>;
    /**
     * Retrieve project state.
     */
    getProjectState(): Promise<DmBsProjectState | DmState>;
    /**
     * Retrieve AssetLocators of the presentation dependencies for the presentation asset
     *  (i.e., linked presentations.)
     */
    getLinkedPresentationAssetLocators(): Promise<BsAssetLocator[]>;
    /**
     * Update project with new project state. On BSN, this will set the presentation to Draft mode, even
     *  it is currently in Published mode.
     * If autorunVersion is not specified in options, CurrentAutorunVersion will be used,
     * However, if the presentation is scheduled on BSN to one or more groups, an exception will be thrown.
     * @param state - project state
     * @param [options] {CmiPresentationSaveOptions} - autorun version string
     */
    saveProjectState(state: DmBsProjectState | DmState, options?: CmiPresentationSaveOptions): Promise<BsAssetItem>;
    /**
     * Supported only for BSN at present - will be rejected for local presentations.
     * Update project with project state, upload autoplay and other presentation execution files, and specify
     *  all presentation assets to the presentation entity. This will set the presentation to Published mode.
     * If autoplayFile object is not supplied in options parameter, it will be automatically generated
     *  from the project state.
     * @param state - project state
     * @param options - publish options (autoplayFile object, resources file, etc.)
     */
    publish(state: DmBsProjectState | DmState, options?: CmiPresentationPublishOptions): Promise<BsAssetItem>;
}
/** @deprecated - use CmiPresentationAsset */
export type BsPresentationAsset = CmiPresentationAsset;

/**
 * CmiBrightScriptAsset encapsulates an assetItem of type AssetType.BrightScript
 */
export interface CmiBrightScriptAsset extends CmiAsset {
    savePlugin(file: FileSpec): Promise<BsUploadItemResult>;
    /**
     * Retrieve the asset data for this asset. Overridden to provide the correct return type.
     */
    fetchAssetItemData(): Promise<CmiBrightScriptAsset>;
}
/** @deprecated - use CmiBrightScriptAsset */
export type BsBrightScriptAsset = CmiBrightScriptAsset;

export interface CmiScheduleAsset extends CmiAsset {
    /**
     * Update schedule with new schedule state.
     *
     * @param state - schedule state
     */
    saveSchedule(state: object): Promise<BsAssetItem>;
    /**
     * Retrieve schedule state
     */
    getScheduleState(): Promise<object>;
}
/** @deprecated - use CmiScheduleAsset */
export type BsScheduleAsset = CmiScheduleAsset;

export interface BsAssetItemMatchProperties {
    name: string;
    fileHash: string | null;
    destinationPath?: string | null;
}
/**
 * The CmiAssetCollection interface encapsulates enumeration of a file system folder for any supported AssetLocation.
 * Enumeration is updated via the update method, and can be filtered.
 * After updating, the object holds a map of enumerated CmiAsset objects for each enumerated file or folder.
 *
 * @class CmcAssetCollection
 */
export interface CmiAssetCollection {
    /**
     * True if collection has finished updating all assets.
     *  If not, updateNext can be called again to enumerate next group of assets
     */
    readonly isComplete: boolean;
    /**
     * Determines the base location (local or BSN) of the folder to be enumerated.
     * On browser based systems, any attempt to set the assetLocation to the local file system will silently fail.
     */
    readonly currentAssetLocation: AssetLocation;
    /**
     * Return the primary assetType for assets in this collection. This is
     *  always the first assetType entry in the assetTypes array, and generally corresponds to the main
     *  type of asset in the array, with secondary types such as AssetType.Folder following. For true
     *  multi-type collections (on local systems,) this value may not have much significance.
     */
    readonly assetType: AssetType;
    /**
     * Array of AssetTypes included in the collection, or null
     *  if no AssetType filter was applied. For collections that can only enumerate one primary assetType (e.g., BSN,)
     *  the primary assetType is the first array element. In such cases, 'secondary' assetTypes are limited
     *  to types such as AssetType.Folder (if an asset types can be organized by folder - e.g., Content,) or related
     *  related assetTypes (such as AssetType.ProjectBpf legacy project files.)
     */
    readonly assetTypes: AssetType[];
    /**
     * Directory path for the current enumerated directory.
     */
    readonly currentDirectory: string;
    /**
     * Determines the scope (BSN network name or local machine ID) of the collection
     */
    readonly currentAssetScope: string;
    /**
     * Enumeration options for this enumerator.
     *  This includes options such as MediaType filters for content enumerators, whether or not sub-folders
     *  are included, etc.
     */
    readonly enumerationOptions: CmiAssetEnumerationOptions;
    /**
     * SortField property can be set with enumeration options when collection is created, and can be set
     *  at any time after that using the setSortOptions method.
     * This is the field on which asset name lists are sorted.
     */
    readonly sortField: AssetSortField;
    /**
     * SortDescending property can be set with enumeration options when collection is created, and can be set
     *  at any time after that using the setSortOptions method.
     * True if asset name lists are sorted in descending order.
     */
    readonly sortDescending: boolean;
    /**
     * Set of sort fields that can be used for assets in the collection.
     */
    readonly sortFieldSet: Set<AssetSortField>;
    /**
     * Return or set current sort options.
     */
    sortOptions: CmiSortOptions;
    /**
     * Array of names of all enumerated file and/or folder asset items.
     */
    readonly assetNames: string[];
    /**
     * Array of names of newly enumerated file and/or folder asset items.
     * If the enumeration is segmented (as from BSN) this returns only the names of newly enumerated assets.
     */
    readonly newAssetNames: string[];
    /**
     * Array of names of newly added asset items.
     */
    readonly addedAssetNames: string[];
    /**
     * Array of names of newly updated asset items.
     */
    readonly updatedAssetNames: string[];
    /**
     * Array of names of removed asset items.
     */
    readonly removedAssetNames: string[];
    /**
     * Array of names of pinned asset items. Pinned assetItems are assetItems that are pre-loaded
     *  and/or persist across enumerations.
     */
    readonly pinnedAssetNames: string[];
    /**
     * Array of names of all enumerated folder (subdirectory) asset items.
     */
    readonly folderAssetNames: string[];
    /**
     * Array of names of all enumerated file asset items.
     */
    readonly fileAssetNames: string[];
    /**
     * Array of CmiFolderAsset objects for all enumerated folder (subdirectory) asset items.
     */
    readonly folderAssets: CmiFolderAsset[];
    /**
     * Array of CmiAsset objects for all enumerated file asset items.
     */
    readonly fileAssets: CmiAsset[];
    /**
     * Array of CmiAsset objects for all added asset items.
     */
    readonly addedAssets: CmiAsset[];
    /**
     * Array of CmiAsset objects for all updated asset items.
     */
    readonly updatedAssets: CmiAsset[];
    /**
     * Array of CmiAsset objects for all removed asset items.
     */
    readonly removedAssets: CmiAsset[];
    /**
     * Array of CmiAsset objects for all enumerated file and/or folder asset items.
     */
    readonly allAssets: CmiAsset[];
    /**
     * Return a string that uniquely identifies all parameters of this collection,
     *  including AssetLocation, AssetTypes, directory path, and enumeration options.
     */
    readonly locatorHash: string;
    /** @deprecated Use property name locatorHash */
    readonly functionalLocator: string;
    /**
     * Update asset directory from local file system or BSN and resolve with list of asset names. This method will
     *  enumerate all assets matching the search criteria in the asset folder, regardless of the number.
     * In order to get resolution for each set of assets  returned in a segmented enumeration (as from BSN,)
     *  use {@link startUpdate} and {@link updateNext}.
     * This method restarts enumeration on each call.
     *
     * @returns {Promise<string[]>} - Promise that resolves with an array of asset names
     */
    update(): Promise<string[]>;
    /**
     * (Re)Start update of asset directory from local file system or BSN.
     * Unlike {@link update}, if enumeration returns partial results (e.g., BSN with long asset lists), the promise
     *  returned from this method will resolve with the first segment of results. The caller should check the
     *  {@link isComplete} property to determine if updating is complete. If not, {@link updateNext} can be called
     *  to get the next segment.
     * @returns {Promise<CmiAssetCollection>} - Promise that resolves with the original, but updated, collection object
     */
    startUpdate(): Promise<CmiAssetCollection>;
    /**
     * Continue updating asset directory from local file system or BSN
     * This method should be called after an initial call to {@link startUpdate} or a subsequent call to this method
     *  when the {@link isComplete} property is false.
     * @returns {Promise<CmiAssetCollection>} - Promise that resolves with the original, but updated, collection object
     */
    updateNext(): Promise<CmiAssetCollection>;
    /**
     * Update the AssetItem properties for all pinned assets.
     */
    updatePinnedAssetItems(): Promise<CmiAssetCollection>;
    /**
     * Return count of assets on the asset storage backend matching the enumerationOptions
     *  for the collection
     * The AssetCollection does NOT have to be updated before calling this method (i.e., the existing assets do not
     *  have to be enumerated.)
     */
    getBackendCount(): Promise<number>;
    /**
     * Return list of assetItems that duplicate any of the names in the given nameList. If hashes are provided
     *  in the matchList, an item is NOT returned as a duplicate if the hashes match.
     * The AssetCollection does NOT have to be updated before calling this method (i.e., the existing assets do not
     *  have to be enumerated.)
     * @param matchList {BsAssetItemMatchProperties[]} - Object list where each object contains name and hash of
     *  each entity to be matched. Note: some entities don't have a hash.
     * @returns {Promise<BsAssetItem[]>} BsAssetItem for each entity that matches an entry in the matchList.
     */
    getDuplicateNames(matchList: BsAssetItemMatchProperties[]): Promise<BsAssetItem[]>;
    /**
     * Return list of assets that match the given filter options.
     * @param filterOptions {CmiAssetFilterOptions}
     * @returns {CmiAsset[]}
     */
    getFilteredAssets(filterOptions: CmiAssetFilterOptions): CmiAsset[];
    /**
     * Set sort parameters for the collection.
     */
    setSortOptions(sortField: AssetSortField, sortDescending?: boolean): void;
    /**
     * Return true if an asset with the given name is in the folder collection.
     */
    hasAssetName(name: string): boolean;
    /**
     * Return AssetType for given asset name in the collection. If the name is not found in the collection,
     *  null is returned.
     */
    getAssetTypeForName(name: string): AssetType | null;
    /**
     * Get asset names for all enumerated assets of given type.
     * @param assetType (AssetType} - type to match for returned names
     */
    getAssetNamesForType(assetType: AssetType): string[];
    /**
     * Get an array of all CmiAsset objects of given type.
     * @param assetType - type to match for returned assetItems
     */
    getAssetsForType(assetType: AssetType): CmiAsset[];
    /**
     * Get asset names for all enumerated Content assets of given MediaType.
     * @param mediaType - mediaType to match for returned names
     */
    getAssetNamesForMediaType(mediaType: MediaType): string[];
    /**
     * Get all enumerated Content CmiAsset objects of given MediaType.
     * @param mediaType - mediaType to match for returned assetItems
     */
    getAssetsForMediaType(mediaType: MediaType): CmiAsset[];
    /**
     * Get CmiAsset object for given asset name, or null if name is not found.
     * For derived collections, this function will return an object derived from CmiAsset
     *  with specific functionality for the type of asset.
     * @param name - Asset name (file or folder name)
     */
    getAsset(name: string): CmiAsset | null;
    /**
     * Get CmiAsset object for given asset name in the removed asset list, or null if name is not found.
     * @param name - Asset name (file or folder name)
     */
    getRemovedAsset(name: string): CmiAsset | null;
    isAssetTypeIncluded(assetType: AssetType): boolean;
    /**
     * Clear list of added assets.
     */
    clearAddedAssets(): void;
    /**
     * Clear list of updated assets.
     */
    clearUpdatedAssets(): void;
    /**
     * Clear list of removed assets.
     */
    clearRemovedAssets(): void;
    /**
     * Unpin all pinned assetItems.
     */
    unpinAllPinnedAssetItems(): void;
    /**
     * Create a folder within the AssetCollection.
     * The AssetCollection does NOT have to be updated before calling this method (i.e., the existing assets do not
     *  have to be enumerated.)
     * This method will fail and return null if folders are not supported for the collection (e.g., any BSN collection
     *  other than a Content collection.)
     * This method will also fail on a collection built from an asset list, as there is no well-defined parent folder
     *  for that case.
     * @param {string} name - name of the folder (directory) to be created
     * @returns {Promise<BsAssetItem | null>} AssetItem representing the created folder
     */
    createFolder(name: string): Promise<BsAssetItem | null>;
    /**
     * Remove a folder from the current collection. All folder contents are also removed.
     * The AssetCollection does NOT have to be updated before calling this method (i.e., the existing assets do not
     *  have to be enumerated.)
     * This method will fail and return null if folders are not supported for the collection (e.g., any BSN collection
     *  other than a Content collection.)
     * This method will also throw an exception on a collection built from an asset list.
     * @param {string} name - name of the folder (directory) to be removed
     * @returns {Promise<void>}
     */
    removeFolder(name: string): Promise<void>;
}
/** @deprecated - use CmiAssetCollection */
export type BsAssetCollection = CmiAssetCollection;

export interface CmiMediaAssetCollection extends CmiAssetCollection {
    /**
     * Array of names of all enumerated filtered file asset items.
     */
    readonly tagFilteredAssetNames: string[];
    /**
     * True if collection has finished updating all filtered assets.
     *  If not, nextRetrieveBsnAssetListForFilter can be called again to enumerate next group of filtered assets
     */
    readonly tagFilterEnumerationIsComplete: boolean;
    /**
     * Return the tag filter specification set by the last call to startRetrieveBsnAssetListForTagFilter.
     */
    readonly tagFilterSpecification: BsnFilterSpecification | null;
    /**
     * Delete the media content file for the given asset name. The asset must be a content (not a folder)
     *  asset in this collection. If the asset name is not found in the collection, no action is taken.
     */
    deleteMediaAsset(name: string): Promise<void>;
    /**
     * Retrieve list of BSN based MediaAsset files in the current collection that match the given tag rule,
     *  as specified by the BsnFilterSpecification in the given enumeration options.
     * The asset list order can be specified by the sortTagName and sortDescending properties in
     *  the enumeration option object. If not specified, the sort is by FileName in ascending order.
     * This function retrieves the entire tagged asset list, using multiple BSN calls if the total number
     *  of assets is greater than the maximum page size. Use {@link }startRetrieveBsnAssetListForTagFilter} and
     *  {@link nextRetrieveBsnAssetListForTagFilter} to retrieve long tagged asset lists one page at a time.
     * The returned list will match the assets included in a tagged playlist using the same rule and sort order.
     * Note that the collection does NOT have to be fully enumerated to enumerate tagged assets using this or
     *  related functions.
     * @param enumOps {CmiTaggedAssetEnumerationOptions}
     * @return {Promise<string[]>} array of names of assets that match the tag rule, in the specified sort order
     */
    retrieveBsnAssetListForTagFilter(enumOps: CmiTaggedAssetEnumerationOptions): Promise<string[]>;
    /**
     * Retrieve first page of list of BSN based MediaAsset files in the current collection that match the given tag rule,
     *  as specified by the BsnFilterSpecification in the given enumeration options.
     * Upon return, check the collection {@link tagFilterEnumerationIsComplete} property to determine if the
     *  tagged asset list retrieval is complete. If not, the next segment can be retrieved by calling
     *  {@link nextRetrieveBsnAssetListForTagFilter}.
     * See {@link retrieveBsnAssetListForTagFilter} for additional notes.
     * @param enumOps {CmiTaggedAssetEnumerationOptions}
     * @return {Promise<CmiMediaAssetCollection>} - Promise resolving with the original, but updated, collection object
     */
    startRetrieveBsnAssetListForTagFilter(enumOps: CmiTaggedAssetEnumerationOptions): Promise<CmiMediaAssetCollection>;
    /**
     * Retrieve next page of list of BSN based MediaAsset files in the current collection that match the current tag rule.
     * Upon return, check the collection {@link tagFilterEnumerationIsComplete} property to determine if the
     *  tagged asset list retrieval is complete. If not, the next segment can be retrieved by calling
     *  {@link nextRetrieveBsnAssetListForTagFilter}.
     * See {@link retrieveBsnAssetListForTagFilter} for additional notes.
     * @return {Promise<CmiMediaAssetCollection>} - Promise resolving with the original, but updated, collection object
     */
    nextRetrieveBsnAssetListForTagFilter(): Promise<CmiMediaAssetCollection>;
    /**
     * Clear the tagFilteredAssetNames list and all associated properties.
     */
    clearTagFilteredAssetList(): void;
}
/** @deprecated - use CmiMediaAssetCollection */
export type BsMediaAssetCollection = CmiMediaAssetCollection;

export interface CmiPresentationAssetCollection extends CmiAssetCollection {
    /**
     * Create a new presentation.
     * Promise will be rejected if the folder contains a presentation with the
     *  same name. If replacement is desired, saveProjectState should be called on the corresponding assetItem.
     *
     * @param name - presentation name (no extension)
     * @param state - presentation project state
     * @param [autorunVersion=CurrentAutorunVersion]
     */
    createNewPresentation(name: string, state: DmBsProjectState | DmState, autorunVersion?: string): Promise<BsAssetItem>;
    deletePresentation(name: string): Promise<void>;
}
/** @deprecated - use CmiPresentationAssetCollection */
export type BsPresentationAssetCollection = CmiPresentationAssetCollection;

export interface CmiTextFeedAssetCollection extends CmiAssetCollection {
    /**
     * Create a new text feed.
     *
     * @param name {string} - text feed name (no extension)
     * @param state {object} - text feed state
     * @returns {Promise<void>} Promise will be rejected if the folder contains a text feed with the
     *  same name
     */
    createNewTextFeed(name: string, state: object): Promise<void>;
    deleteTextFeed(name: string): Promise<void>;
}
/** @deprecated - use CmiTextFeedAssetCollection */
export type BsTextFeedAssetCollection = CmiTextFeedAssetCollection;

export interface CmiMediaFeedAssetCollection extends CmiAssetCollection {
    /**
     * Create a new media feed.
     *
     * @param name {string} - media feed name (no extension)
     * @param state {object} - media feed state
     * @returns {Promise<void>} Promise will be rejected if the folder contains a media feed with the
     *  same name
     */
    createNewMediaFeed(name: string, state: object): Promise<void>;
    deleteMediaFeed(name: string): Promise<void>;
}
/** @deprecated - use CmiMediaFeedAssetCollection */
export type BsMediaFeedAssetCollection = CmiMediaFeedAssetCollection;

export interface CmiDynamicPlaylistAssetCollection extends CmiAssetCollection {
    /**
     * Create a new dynamic playlist.
     * Promise will be rejected if the folder contains a dynamic playlist with the same name
     *
     * @param name - dynamic playlist name (no extension)
     * @param state - dynamic playlist state
     */
    createNewDynamicPlaylist(name: string, state: object): Promise<void>;
    deleteDynamicPlaylist(name: string): Promise<void>;
}
/** @deprecated - use CmiDynamicPlaylistAssetCollection */
export type BsDynamicPlaylistAssetCollection = CmiDynamicPlaylistAssetCollection;

export interface CmiTaggedPlaylistAssetCollection extends CmiAssetCollection {
    /**
     * Create a new tagged playlist.
     * Promise will be rejected if the folder contains a tagged playlist with the same name
     *
     * @param name - tagged playlist name (no extension)
     * @param state - tagged playlist state
     */
    createNewTaggedPlaylist(name: string, state: object): Promise<void>;
    deleteTaggedPlaylist(name: string): Promise<void>;
}
/** @deprecated - use CmiTaggedPlaylistAssetCollection */
export type BsTaggedPlaylistAssetCollection = CmiTaggedPlaylistAssetCollection;

export interface CmiHtmlSiteAssetCollection extends CmiAssetCollection {
    /**
     * Delete the HtmlSite asset for the given asset name. The asset must be an
     *  asset in this collection. If the asset name is not found in the collection, no action is taken.
     *  This method will delete BSN based HTML sites only.
     *
     * @param {string} name
     * @return {Promise<void>}
     */
    deleteHtmlSiteAsset(name: string): Promise<void>;
}
/** @deprecated - use CmiHtmlSiteAssetCollection */
export type BsHtmlSiteAssetCollection = CmiHtmlSiteAssetCollection;

export interface CmiBrightScriptAssetCollection extends CmiAssetCollection {
    uploadNewPlugin(file: FileSpec, targetName?: string): Promise<BsUploadItemResult>;
    deletePlugin(filename: string): Promise<void>;
}
/** @deprecated - use CmiBrightScriptAssetCollection */
export type BsBrightScriptAssetCollection = CmiBrightScriptAssetCollection;

export interface CmiDeviceWebPageAssetCollection extends CmiAssetCollection {
    /**
     * Delete the DeviceWebPage asset for the given asset name. The asset must be an
     *  asset in this collection. If the asset name is not found in the collection, no action is taken.
     *  This method will delete BSN based HTML sites only.
     */
    deleteDeviceWebPageAsset(name: string): Promise<void>;
}
/** @deprecated - use CmiDeviceWebPageAssetCollection */
export type BsDeviceWebPageAssetCollection = CmiDeviceWebPageAssetCollection;

export interface CmiScheduleAssetCollection extends CmiAssetCollection {
    createNewSchedule(name: string, state: object): Promise<BsAssetItem>;
    deleteSchedule(name: string): Promise<void>;
}
/** @deprecated - use CmiScheduleAssetCollection */
export type BsScheduleAssetCollection = CmiScheduleAssetCollection;

export function cmGetBsnPlayerGroupCollection(): BsPlayerGroupCollection;
export class BsPlayerGroupCollection {
    /**
     * @property isComplete - True if collection has finished updating all player groups. If not,
     *  updateNext can be called again to enumerate next group of player groups.
     */
    get isComplete(): boolean;
    /**
     * @property playerGroupNames {string[]} - Array of names of all enumerated player groups.
     */
    get playerGroupNames(): string[];
    /**
     * @property newPlayerGroupNames {string[]} - Array of names of newly enumerated group name.
     *  If the enumeration is segmented this returns only the names of newly enumerated groups.
     */
    get newPlayerGroupNames(): string[];
    clear(): void;
    /**
     * Update BSN Regular Player Groups and resolve with list of group names. This method will
     *  enumerate all BSN Regular Player Groups, regardless of the number.
     * In order to get resolution for each set of groups returned in a segmented enumeration,
     *  use {@link startUpdate} and {@link updateNext}.
     * This method restarts enumeration on each call.
     *
     * @returns {Promise<string[]>} - Promise that resolves with an array of group names
     */
    update(): Promise<string[]>;
    /**
     * Start enumerating BSN Regular Player Groups and resolve with this object.
     *  If the number of groups is greater than the default BSN report page size,
     *  the isComplete property of this object will be false, and subsequent calls to enumerateNext
     *  will be required to complete enumeration.
     *
     * @returns {Promise<BsPlayerGroupCollection>} - Promise that resolves with this class object.
     */
    startUpdate(): Promise<BsPlayerGroupCollection>;
    /**
     * Continue enumerating BSN Regular Player Groups and resolve with this object.
     *  This needs to be called only if previous enumeration did not complete.
     *
     * @returns {Promise<BsPlayerGroupCollection>} - Promise that resolves with this class object
     */
    updateNext(): Promise<BsPlayerGroupCollection>;
    /**
     * Return BsPlayerGroup object representing the Player Group for the given name.
     * Returns null if no group is found in the collection with the given name.
     *
     * @param {string} name
     * @returns {BsPlayerGroup | null}
     */
    getPlayerGroup(name: string): BsPlayerGroup;
    /**
     * Return count of player groups on the current BSN network
     * The GroupCollection does NOT have to be updated before calling this method.
     * @returns {Promise<number>}
     */
    getBackendCount(): Promise<number>;
    /**
     * Create a new player group.
     * @param name {string} - name for the new group
     * @param publishData {Partial<PublishData>} - publish data for the group. Any fields that are omitted
     *  are set to null/false.
     */
    createNewPlayerGroup(name: string, publishData: Partial<PublishData>): Promise<BsPlayerGroup>;
    /**
     * Delete a player group
     * @param name {string} - Group name
     * @returns {Promise<void>}
     */
    deletePlayerGroup(name: string): Promise<void>;
}

export interface BsPlayerGroup {
    name: string;
    isGroupDataValid: boolean;
    lastGroupDataUpdateTime: Date | null;
    publishData: Readonly<PublishData>;
    schedule: Array<Readonly<PresentationScheduleItem>>;
    playerDeviceCount: number;
    playerDevices: string[];
    playerDeviceListIsValid: boolean;
    aggregateHealthStatus: BsnDeviceHealthStatus[];
    autorunProperties: BsnAutorunProperties;
    permissions: BsnObjectPermission[];
    groupData: BsnRegularGroupEntity;
    groupItem: BsnGroupItem | null;
    /**
     * Update the Regular Group entity on BSN. The group can be updated with new PublishData, a new schedule, or both.
     * If the scheduleItems parameter is provided, the existing group schedule will be replaced by the new schedule.
     *  If this parameter is null, the existing schedule will be unchanged.
     * The publishData can contain any subset of PublishData properties, which will be set to the publishData for
     *  the group. Any properties not provided will be left unchanged. If this parameter is null, no publishData
     *  properties are changed.
     *
     * @param {PresentationScheduleItem[] | null} scheduleItems
     * @param {Partial<PublishData>} publishData
     * @returns {Promise<BsPlayerGroup>}
     */
    update(scheduleItems: PresentationScheduleItem[] | null, publishData?: Partial<PublishData>): Promise<BsPlayerGroup>;
    /**
     * Fetch all data for the current group, including the device list. Thew device list is not populated when the
     *  BsPlayerGroup object is created by enumerating all groups. This function also updates any data that may have
     *  changed since the last update.
     */
    fetchGroupData(): Promise<BsPlayerGroup>;
    /**
     * Replace all object permissions for the current asset with the given permission list.
     * @param objectPermissions
     * @returns {Promise<BsPlayerGroup>}
     */
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<BsPlayerGroup>;
}
/**
 * Return BsPlayerGroup object for given group name.
 * If the group data has not yet been retrieved, this object can still be created,
 *  and the group data will be retrieved by calling either the {@link fetchGroupData} method
 *  of the object, or also if the group is enumerated as part of any group collection.
 * The {@link isGroupDataValid} property will be true if the groupData has been retrieved.
 * @param name {string} name for the desired playerGroup
 * @returns {BsPlayerGroup | null}
 */
export function cmGetBsPlayerGroup(name: string): BsPlayerGroup;

export interface DeviceEnumerationOptions {
    sortField: BsnDeviceField | null;
    sortDescending: boolean;
    maxItems: number;
    pageSize: number;
}
export class BsPlayerDeviceCollection {
    /**
     * @property deviceFilter - Return the device filter object for the collection.
     */
    get deviceFilter(): BsnFilter | null;
    /**
     * @property isComplete - True if collection has finished updating all devices. If not,
     *  updateNext can be called again to enumerate next group of player groups.
     */
    get isComplete(): boolean;
    /**
     * SortField property can be set with enumeration options when collection is created, and can be set
     *  at any time after that using the setSortOptions method.
     * @property sortField {BsnDeviceField} - Field on which device serial lists are sorted.
     */
    get sortField(): BsnDeviceField;
    /**
     * SortDescending property can be set with enumeration options when collection is created, and can be set
     *  at any time after that using the setSortOptions method.
     * @property sortDescending {boolean} - True if device serial lists are sorted in descending order.
     */
    get sortDescending(): boolean;
    /**
     * @property playerSerials {string[]} - Array of names of all enumerated player serial IDs.
     */
    get playerSerials(): string[];
    /**
     * @property newPlayerSerials {string[]} - Array of names of newly enumerated player serial IDs.
     *  If the enumeration is segmented  this returns only the serials of newly enumerated players.
     */
    get newPlayerSerials(): string[];
    /**
     * @property playerDevices {BsPlayerDevice[]} - Array of BsPlayerDevice objects for all enumerated devices.
     */
    get playerDevices(): BsPlayerDevice[];
    /**
     * @property functionalLocator {string} - a string that uniquely identifies the parameters of this collection.
     *  For device collections this is primarily the filter specification
     */
    get functionalLocator(): string;
    constructor(deviceFilter?: BsnFilter, enumerationOptions?: Partial<DeviceEnumerationOptions>);
    /**
     * Update all devices from BSN matching the search criteria specified by the BsnFilter.
     * In order to get resolution for each set of devices returned in a segmented enumeration,
     *  use {@link startUpdate} and {@link updateNext}.
     * This method restarts enumeration on each call.
     *
     * @returns {Promise<string[]>} - Promise that resolves with an array of device serial IDs
     */
    update(): Promise<string[]>;
    /**
     * (Re)Start update of devices from BSN, based on the collection filter.
     * Unlike {@link update}, if enumeration returns partial results (e.g., BSN with long device lists), the promise
     *  returned from this method will resolve with the first segment of results. The caller should check the
     *  {@link isComplete} property to determine if updating is complete. If not, {@link updateNext} can be called
     *  to get the next segment. Note that the promise returned by this method resolves with this
     *  BsPlayerDeviceCollection object, not the asset name list.
     *
     * @returns {Promise<BsPlayerDeviceCollection>} - Promise that resolves with this object
     */
    startUpdate(): Promise<BsPlayerDeviceCollection>;
    /**
     * Continue updating devices from BSN
     * This method should be called after an initial call to {@link startUpdate} or a subsequent call to this method
     *  when the {@link isComplete} property is false. Note that the promise returned by this method resolves
     *  with this BsPlayerDeviceCollection object, not the asset name list.
     *
     * @returns {Promise<BsPlayerDeviceCollection>} - Promise that resolves with this object
     */
    updateNext(): Promise<BsPlayerDeviceCollection>;
    /**
     * Get BsPlayerDevice object for given serial ID.
     *
     * @param serial {string} - Device serial
     * @returns {BsPlayerDevice | null} BsPlayerDevice object, or null if serial is not found
     */
    getPlayerDevice(serial: string): BsPlayerDevice;
    /**
     * Query for total device count for this collection, based on the collection filter.
     * The PlayerDeviceCollection does NOT have to be updated before calling this method (i.e., the devices do not
     *  have to be enumerated.)
     * @returns {Promise<number>}
     */
    getPlayerDeviceCount(): Promise<number>;
    /**
     * Set sort parameters for the collection.
     * This will immediately sort the serial array according to the new sort criteria.
     * @param {BsnDeviceField} sortField
     * @param {boolean} [sortDescending=false]
     */
    setSortOptions(sortField: BsnDeviceField, sortDescending?: boolean): void;
    /**
     * Delete a player device from the BSN network.
     * @param serial {string} - Device serial
     * @returns {Promise<void>}
     */
    deletePlayerDevice(serial: string): Promise<void>;
}

/**
 * Return a playerDevice collection for a given device filter. If the collection has already been defined and
 *  is present in the cache, the cached collection is returned.
 * @param [deviceFilter] {BsnFilter} - if specified, determines the player filtering that will be done when
 *  player devices are enumerated. If not specified, all devices on the current network are enumerated.
 * @param enumerationOptions {Partial<DeviceEnumerationOptions>}
 * @returns {BsPlayerDeviceCollection}
 */
export function cmGetPlayerDeviceCollection(deviceFilter?: BsnFilter, enumerationOptions?: Partial<DeviceEnumerationOptions>): BsPlayerDeviceCollection;

/**
 * Return BsPlayerDevice object for given serial.
 * If the device data has not yet been retrieved, this object can still be created,
 *  and the device data will be retrieved by calling either the {@link fetchDeviceData} method
 *  of the object, or also if the device is enumerated as part of any device collection.
 * The {@link isDeviceDataValid} property will be true if the deviceData has been retrieved.
 * @param serial {string} serial value for the desired playerDevice
 * @returns {BsPlayerDevice}
 */
export function cmGetBsPlayerDevice(serial: string): BsPlayerDevice;
export class BsPlayerDevice {
    static get deviceErrorPageSize(): number;
    static set deviceErrorPageSize(value: number);
    static get deviceDownloadPageSize(): number;
    static set deviceDownloadPageSize(value: number);
    /**
     * @property isDeviceDataValid {boolean} - return true if device data has been retrieved and is valid
     */
    get isDeviceDataValid(): boolean;
    /**
     * @property lastDeviceDataUpdateTime - Return the timestamp noting the time of the last device data update.
     *  null is returned if data has not been retrieved.
     */
    get lastDeviceDataUpdateTime(): Date | null;
    /**
     * @property deviceData {BsnDeviceEntity | null} - full player device data object
     *  null is returned if data has not been retrieved.
     */
    get deviceData(): BsnDeviceEntity | null;
    /**
     * @property serial {string} - player serial string
     */
    get serial(): string;
    /**
     * @property name {string} - player name string
     */
    get name(): string | null;
    /**
     * @property description {string} - player description string
     */
    get description(): string | null;
    /**
     * @property model {PlayerModel} - player model
     */
    get model(): PlayerModel | null;
    /**
     * @property healthStatus {BsnDeviceHealthStatus} - health status
     */
    get healthStatus(): BsnDeviceHealthStatus | null;
    /**
     * @property uptime {string} - uptime
     */
    get uptime(): string | null;
    /**
     * @property externalIpAddress {string} - external IP address
     */
    get externalIpAddress(): string | null;
    /**
     * @property snapshotEnabled {boolean} - true if snapshots are enabled
     */
    get snapshotEnabled(): boolean;
    /**
     * @property deviceErrorList {BsnDeviceErrorEntity[]} - list of errors recorded for the device.
     *  This list may not be complete if the list has not been completely enumerated.
     */
    get deviceErrorList(): BsnDeviceErrorEntity[];
    /**
     * @property isDeviceErrorListEnumerationComplete {boolean} - true if the most recent error list enumeration
     *  has been completed. Even if true, newer errors may have been added to the BSN list.
     */
    get isDeviceErrorListEnumerationComplete(): boolean;
    /**
     * @property doNewDeviceErrorsExist {boolean} - true if the lastErrorTime in the deviceData indicates that
     *  errors have been recorded after the latest one in the currently enumerated error list.
     */
    get doNewDeviceErrorsExist(): boolean;
    /**
     * @property deviceDownloadList {BsnDeviceDownloadEntity[]} - list of download records recorded for the device.
     *  This list may not be complete if the list has not been completely enumerated.
     */
    get deviceDownloadList(): BsnDeviceDownloadEntity[];
    /**
     * @property isDeviceDownloadListEnumerationComplete {boolean} - true if the most recent download list enumeration
     *  has been completed. Even if true, newer download records may have been added to the BSN list.
     */
    get isDeviceDownloadListEnumerationComplete(): boolean;
    /**
     * @property doNewDeviceDownloadsExist {boolean} - true if the lastContentDownloadEndTime in the deviceData indicates
     *  that download records have been recorded after the latest one in the currently enumerated error list.
     *  In order for this to be true, the latest downloadRecord must be at least 2 seconds older than the
     *  lastContentDownloadEndTime in the device data.
     */
    get doNewDeviceDownloadsExist(): boolean;
    /**
     * @property permissions {BsnObjectPermission[]} - return list of permissions associated with the player.
     */
    get permissions(): BsnObjectPermission[];
    /**
     * @property tags {BsnTagSpecification[]} - return array of tags.
     */
    get tags(): Array<Readonly<BsnTagSpecification>>;
    /**
     * @property deviceUpdateData {BsnDeviceUpdateData} - device updateData object which can
     *  be modified and then passed to updateDevice method.
     */
    get deviceUpdateData(): BsnDeviceUpdateData;
    get bsnId(): number;
    constructor(serial: string);
    /**
     * Retrieve updated data for this device.
     * @returns {Promise<BsPlayerDevice>}
     */
    fetchDeviceData(): Promise<BsPlayerDevice>;
    /**
     * (Re)Start update of device error list for this device from BSN.
     * If enumeration returns partial results (e.g., BSN with long error lists greater than the page size), the promise
     *  returned from this method will resolve with the first segment of results. The caller should check the
     *  {@link isDeviceErrorListEnumerationComplete} property to determine if updating is complete.
     *  If not, {@link updateNextErrorListSegment} can be called to get the next segment.
     *  The static {@link deviceErrorPageSize} property can be set to determine device error segment page size
     *  for the error downloads.
     *
     * @returns {Promise<BsnDeviceErrorEntity[]>} - The error list after this enumeration (may not be complete)
     */
    startUpdateErrorList(): Promise<BsnDeviceErrorEntity[]>;
    /**
     * Continue updating device errors from BSN.
     * This method should be called after an initial call to {@link startUpdateErrorList} or a subsequent call to this
     *  method when the {@link isDeviceErrorListEnumerationComplete} property is false.
     *
     * @returns {Promise<BsnDeviceErrorEntity[]>} - The error list after this enumeration (may not be complete)
     */
    updateNextErrorListSegment(): Promise<BsnDeviceErrorEntity[]>;
    /**
     * (Re)Start update of device download list for this device from BSN.
     * If enumeration returns partial results (e.g., BSN with long download lists greater than the page size), the promise
     *  returned from this method will resolve with the first segment of results. The caller should check the
     *  {@link isDeviceDownloadListEnumerationComplete} property to determine if updating is complete.
     *  If not, {@link updateNextDownloadListSegment} can be called to get the next segment.
     *  The static {@link deviceDownloadPageSize} property can be set to determine device error segment page size
     *  for the error downloads.
     *
     * @returns {Promise<BsnDeviceDownloadEntity[]>} - The download list after this enumeration (may not be complete)
     */
    startUpdateDownloadList(): Promise<BsnDeviceDownloadEntity[]>;
    /**
     * Continue updating device downloads from BSN.
     * This method should be called after an initial call to {@link startUpdateDownloadList} or a subsequent call to this
     *  method when the {@link isDeviceDownloadListEnumerationComplete} property is false.
     *
     * @returns {Promise<BsnDeviceDownloadEntity[]>} - The download list after this enumeration (may not be complete)
     */
    updateNextDownloadListSegment(): Promise<BsnDeviceDownloadEntity[]>;
    /**
     * Make sure device data is valid - retrieve if necessary.
     * @returns {Promise<BsPlayerDevice>}
     */
    checkDeviceData(): Promise<BsPlayerDevice>;
    /**
     * Update device properties that can be specified and changed.
     * @param updateData {BsnDeviceUpdateData}
     * @returns {Promise<BsPlayerDevice>}
     */
    updateDevice(updateData: BsnDeviceUpdateData): Promise<BsPlayerDevice>;
    /**
     * Replace all object permissions for the current asset with the given permission list.
     * @param objectPermissions
     * @returns {Promise<BsPlayerDevice>}
     */
    replacePermissions(objectPermissions: BsnObjectPermission[]): Promise<BsPlayerDevice>;
    setTags(tags: BsnTagSpecification[]): Promise<BsPlayerDevice>;
    deleteTags(tagKeys: BsnTagKeySpecification[]): Promise<BsPlayerDevice>;
}

export interface CmBDeployLoaderOptions {
    sortField?: CmBDeploySortByField;
    sortDescending?: boolean;
    pageSize?: number;
}
export class CmBDeploySortByField {
    static networkName: string;
    static username: string;
    static packageName: string;
    static bsnGroupName: string;
    static setupType: string;
    static deviceName: string;
}
export function cmGetBDeployDeviceSetupCollection(enumerationOptions?: CmBDeployLoaderOptions): BsDeviceSetupCollection;
export class BsDeviceSetupCollection {
    /**
     * @property isComplete - True if collection has finished updating all device setups.
     */
    get isComplete(): boolean;
    /**
     * @property deviceSetupListNames {string[]} - Array of names of all device Setup.
     */
    get deviceSetupListNames(): string[];
    /**
     * @property sortField {CmBDeploySortByField} - collection sort by field
     */
    get sortField(): CmBDeploySortByField;
    /**
     * @property sortField {CmBDeploySortByField} - collection sort by field
     */
    get sortDescending(): boolean;
    /**
     * @property newDeviceSetupListNames {string[]} - Array of names of newly enumerated.
     */
    get newDeviceSetupListNames(): string[];
    constructor(enumerationOptions?: CmBDeployLoaderOptions);
    clear(): void;
    /**
     * Update BDeploy setup list and reBdeployEnumerationOptionslve with list of device setups names. This method will
     *  enumerate all BDeploy setup list, regardless of the number.
     * This method restarts enumeration on each call.
     *
     * @returns {Promise<string[]>} - Promise that resolves with an array of device setup names
     */
    update(): Promise<string[]>;
    /**
     * Start enumerating bDeploy setup list and resolve with this object.
     *  If the number of setups is greater than the default report page size,
     *  the isComplete property of this object will be false, and subsequent calls to enumerateNext
     *  will be required to complete enumeration.
     *
     * @returns {Promise<BsPlayerGroupCollection>} - Promise that resolves with this class object.
     */
    startUpdate(): Promise<BsDeviceSetupCollection>;
    /**
     * Continue enumerating bDeploy setup list and resolve with this object.
     *  This needs to be called only if previous enumeration did not complete.
     *
     * @returns {Promise<BsPlayerGroupCollection>} - Promise that resolves with this class object
     */
    updateNext(): Promise<BsDeviceSetupCollection>;
    /**
     * Return BsDeviceSetup object representing the device setup for the given name.
     *
     * @param {string} name
     * @returns {BsDeviceSetup}
     */
    getDeviceSetup(name: string): BsDeviceSetup;
    /**
     * Set sort parameters for the collection.
     * This will immediately sort the serial array according to the new sort criteria.
     * @param {CmBDeploySortByField} sortField
     * @param {boolean} [sortDescending=false]
     */
    setSortOptions(sortField: CmBDeploySortByField, sortDescending?: boolean): void;
    /**
     * Delete a b deploy device setup
     * @param name {string} - device name
     * @returns {Promise<void>}
     */
    deleteDeviceSetup(name: string): Promise<void>;
    updateDeviceSetup(name: string, setupJson: BsDsSetupParams): Promise<BsDeviceSetup>;
    addDeviceSetup(name: string, setupJson: BsDsSetupParams): Promise<BsDeviceSetup>;
}
/**
 * Test to see if specified package name exists in the bDeploy username and Network.
 */
export function cmGetBDeployDeviceSetupExists(name: string): Promise<boolean>;

export interface BsDeviceSetup {
    bsnGroupName: string;
    client: string;
    createdAt: Date;
    networkName: string;
    packageName: string;
    setupType: DeviceNetworkingConfiguration;
    updatedAt: Date;
    username: string;
    version: string;
    deviceDescription: string;
    deviceName: string;
    setupJson: BsDsSetupParams;
    isDataValid: boolean;
    getSetupUseCount: () => Promise<number>;
}
/**
 * Return BsDeviceSetup object for given device setup name.
 * If the setup data has not yet been retrieved, this object can still be created,
 *  and the data will be retrieved by the setup is enumerated as part of any device setup collection.
 * The {@link isDataValid} property will be true if the data has been retrieved.
 * @param name {string} name for the desired deviceSetup
 * @returns {BsDeviceSetup | null}
 */
export function cmGetBsDeviceSetup(name: string): BsDeviceSetup;

export function cmGetDeviceLogCollection(filter?: BsniDeviceLogFilter | null, sortOrder?: BsniDeviceLogSortElement[] | null, pageSize?: number): CmcDeviceLogCollection;
export class CmcDeviceLogCollection {
    get isComplete(): boolean;
    get logRecords(): CmiDeviceLogRecord[];
    get newLogRecords(): CmiDeviceLogRecord[];
    get logFilter(): BsniDeviceLogFilter | null;
    set logFilter(val: BsniDeviceLogFilter | null);
    get sortOrder(): BsniDeviceLogSortElement[] | null;
    set sortOrder(val: BsniDeviceLogSortElement[] | null);
    get pageSize(): number | null;
    set pageSize(val: number | null);
    constructor(filter?: BsniDeviceLogFilter | null, sortOrder?: BsniDeviceLogSortElement[] | null, pageSize?: number);
    /**
     * Update device log from BSN matching the search criteria specified by the DeviceLogFilter.
     * In order to get log records returned in a segmented enumeration,
     *  use {@link startUpdate} and {@link updateNext}.
     * This method restarts enumeration on each call.
     *
     * @returns {Promise<CmcDeviceLogCollection>} - Promise that resolves with the updated collection.
     */
    update(): Promise<CmcDeviceLogCollection>;
    /**
     * (Re)Start update of device log from BSN, based on the DeviceLogFilter.
     * Unlike {@link update}, if enumeration returns partial results (e.g., device log with more entries than pageSize),
     *  the promise returned from this method will resolve with the first segment of log records. The caller should check
     *  the {@link isComplete} property to determine if updating is complete. If not, {@link updateNext} can be called
     *  to get the next segment.
     *
     * @returns {Promise<CmcDeviceLogCollection>} - Promise that resolves with this object
     */
    startUpdate(): Promise<CmcDeviceLogCollection>;
    /**
     * Continue updating the device log from BSN
     * This method should be called after an initial call to {@link startUpdate} or a subsequent call to this method
     *  when the {@link isComplete} property is false.
     *
     * @returns {Promise<CmcDeviceLogCollection>} - Promise that resolves with this object
     */
    updateNext(): Promise<CmcDeviceLogCollection>;
}

export interface CmiDeviceLogRecord {
    readonly networkName: string;
    readonly logType: string;
    readonly serial: string;
    readonly deviceTimeStamp: Date;
    readonly rawMessage: string;
}
export class CmcDeviceLogRecord implements CmiDeviceLogRecord {
    get networkName(): string;
    get logType(): string;
    get serial(): string;
    get deviceTimeStamp(): Date;
    get rawMessage(): string;
    constructor(recordEntity: BsniDeviceLogRecord);
}

export interface SubscriptionEnumerationOptions {
    sortField: string;
    sortDescending: boolean;
    pageSize: number;
}
export interface CmiDeviceSubscriptionCollection {
    readonly isComplete: boolean;
    readonly deviceSubscriptions: BsnDeviceSubscriptionEntity[];
    readonly newDeviceSubscriptions: BsnDeviceSubscriptionEntity[];
    readonly deviceSubscriptionTotalCount: number;
    readonly deviceSubscriptionInUseCount: number;
    readonly deviceSubscriptionActiveCount: number;
    readonly deviceSubscriptionSuspendedCount: number;
    /**
     * Update all device subscriptions from BSN matching the search criteria specified by the BsnFilter.
     * In order to get resolution for each set of subscriptions returned in a segmented enumeration,
     *  use {@link startUpdate} and {@link updateNext}.
     * This method restarts enumeration on each call.
     *
     * @returns {Promise<CmiDeviceSubscriptionCollection>} - Promise that resolves with an interface for the collection.
     */
    update(): Promise<CmiDeviceSubscriptionCollection>;
    /**
     * (Re)Start update of device subscriptions from BSN, based on the collection filter.
     * Unlike {@link update}, if enumeration returns partial results (e.g., BSN with long subscription lists), the promise
     *  returned from this method will resolve with the first segment of results. The caller should check the
     *  {@link isComplete} property to determine if updating is complete. If not, {@link updateNext} can be called
     *  to get the next segment. The promise returned by this method resolves with an interface to this
     *  DeviceSubscriptionCollection object.
     *
     * @returns {Promise<CmiDeviceSubscriptionCollection>} - Promise that resolves with this object
     */
    startUpdate(): Promise<CmiDeviceSubscriptionCollection>;
    /**
     * Continue updating device subscriptions from BSN
     * This method should be called after an initial call to {@link startUpdate} or a subsequent call to this method
     *  when the {@link isComplete} property is false. The promise returned by this method resolves with an interface
     *  to this DeviceSubscriptionCollection object.
     *
     * @returns {Promise<CmiDeviceSubscriptionCollection>} - Promise that resolves with this object
     */
    updateNext(): Promise<CmiDeviceSubscriptionCollection>;
    /**
     * Return the subscription associated with the playerDevice given the deviceId of the playerDevice.
     * Return null if no subscription is found for the given deviceId.
     * @param deviceId {number}
     * @returns {BsnDeviceSubscriptionEntity | null}
     */
    getSubscriptionForDeviceId(deviceId: number): BsnDeviceSubscriptionEntity | null;
    /**
     * Set sort parameters for the collection.
     * This will immediately sort the subscription array according to the new sort criteria.
     * @param {string} sortField
     * @param {boolean} [sortDescending=false]
     */
    setSortOptions(sortField: string, sortDescending?: boolean): void;
    /**
     * Clear the subscription list.
     */
    clear(): void;
}
export function cmGetDeviceSubscriptionCollection(subscriptionFilter?: BsnFilter | null, enumerationOptions?: Partial<SubscriptionEnumerationOptions>): CmiDeviceSubscriptionCollection;

export class CmProvisionalDeviceSortByField {
    static serial: string;
    static deviceName: string;
    static model: string;
    static setupId: string;
    static setupName: string;
    static url: string;
    static createdAt: string;
    static desc: string;
}
export interface CmProvisionalDeviceLoaderOptions {
    sortField?: CmProvisionalDeviceSortByField;
    sortDescending?: boolean;
    pageSize?: number;
}
export interface BsProvisionalDeviceEnumerationOptions {
    pageNumber?: number;
    pageSize?: number;
    sortField?: CmProvisionalDeviceSortByField;
    sortDescending?: boolean;
}
export function cmGetProvisionalDeviceCollection(enumerationOptions?: CmProvisionalDeviceLoaderOptions): BsProvisionalDeviceCollection;
export class BsProvisionalDeviceCollection {
    /**
     * @property isComplete - True if collection has finished updating all.
     */
    get isComplete(): boolean;
    /**
     * @property deviceListSerialNos {string[]} - Array of names of all.
     */
    get deviceListSerialNos(): string[];
    /**
     * @property sortField {CmProvisionalDeviceSortByField} - collection sort by field
     */
    get sortField(): CmProvisionalDeviceSortByField;
    /**
     * @property sortField {CmBDeploySortByField} - collection sort by field
     */
    get sortDescending(): boolean;
    /**
     * @property newDeviceSetupNames {string[]} - Array of names of newly enumerated.
     */
    get newDeviceSerialNos(): string[];
    constructor(enumerationOptions?: BsProvisionalDeviceEnumerationOptions);
    clear(): void;
    /**
     * Update Provisional Device list and reBsProvisionalDeviceListEnumerationOptions with list
     * of provisional device serial. This method will
     *  enumerate all Provisional Device lis, regardless of the number.
     * This method restarts enumeration on each call.
     *
     * @returns {Promise<string[]>} - Promise that resolves with an array of provisional device serials
     */
    update(): Promise<string[]>;
    /**
     * Start enumerating Provisional Device list and resolve with this object.
     *  If the number of setups is greater than the default report page size,
     *  the isComplete property of this object will be false, and subsequent calls to enumerateNext
     *  will be required to complete enumeration.
     *
     * @returns {Promise<BsProvisionalDeviceCollection>} - Promise that resolves with this class object.
     */
    startUpdate(): Promise<BsProvisionalDeviceCollection>;
    /**
     * Continue enumerating Provisional Device list and resolve with this object.
     *  This needs to be called only if previous enumeration did not complete.
     *
     * @returns {Promise<BsPlayerGroupCollection>} - Promise that resolves with this class object
     */
    updateNext(): Promise<BsProvisionalDeviceCollection>;
    /**
     * Return getProvisionalDevice object representing the Provisional Device for the given serialNo.
     *
     * @param {string} url
     * @returns {BsProvisionalDevice}
     */
    getProvisionalDevice(serial: string): BsProvisionalDevice;
    /**
     * Set sort parameters for the collection.
     * This will immediately sort the serial array according to the new sort criteria.
     * @param {CmProvisionalDeviceSortByField} sortField
     * @param {boolean} [sortDescending=false]
     */
    setSortOptions(sortField: CmProvisionalDeviceSortByField, sortDescending?: boolean): void;
    addProvisionalDevice(setupJson: BDeployDevice): Promise<BsProvisionalDevice>;
    /**
     * Delete a b deploy device
     * @param serial {string} - serial
     * @returns {Promise<void>}
     */
    deleteProvisionalDevice(serial: string): Promise<void>;
    updateDevice(serial: string, updateData: Partial<BDeployDevice>): Promise<BsProvisionalDevice>;
    updateDeviceSetupFile(serial: string, packageName: string): Promise<BsProvisionalDevice>;
}
/**
 * Test to see if specified device serial exists in bDeploy and has been provisioned.
 * This means, if the record is present, and has a url or setupId, it has been provisioned.
 */
export function cmGetProvisionalDeviceExists(serial: string): Promise<boolean>;

export interface BsProvisionalDevice {
    serial: string;
    name: string;
    model: PlayerModel;
    setupId: string;
    setupName: string;
    url: string;
    desc: string;
    createdAt: Date | null;
    isDataValid: boolean;
}
/**
 * Return BsProvisionalDevice object for given provisional device serialNo.
 * If the provisional device data has not yet been retrieved, this object can still be created,
 *  and the data will be retrieved by the setup is enumerated as part of any provisional device collection.
 * The {@link isDataValid} property will be true if the data has been retrieved.
 * @param name {string} name for the desired provisional device
 * @returns {BsProvisionalDevice | null}
 */
export function cmGetBsProvisionalDevice(serial: string): BsProvisionalDevice;

export function cmGetDeviceApplicationCollection(): BsDeviceApplicationCollection;
export class BsDeviceApplicationCollection {
    /**
     * @property deviceApplicationUrls {string[]} - Array of urls of all.
     */
    get deviceApplicationUrls(): string[];
    clear(): void;
    /**
     * Return getProvisionalDevice object representing the Device Application for the given URL.
     *
     * @param {string} url
     * @returns {BsProvisionalDevice}
     */
    getDeviceApplication(url: string): BsDeviceApplication;
    /**
     * Update Device Application list
     * of device Applications. This method will
     *  enumerate all Provisional Device list, regardless of the number.
     * This method restarts enumeration on each call.
     *
     * @returns {Promise<string[]>} - Promise that resolves with an array of device Application urls
     */
    update(): Promise<string[]>;
}

export interface BsDeviceApplication {
    url: string;
    name: string;
    isDataValid: boolean;
}
/**
 * Return BsDeviceSetup object for given device application url.
 * If the application data has not yet been retrieved, this object can still be created,
 *  and the data will be retrieved by the setup is enumerated as part of any device setup collection.
 * The {@link isDataValid} property will be true if the data has been retrieved.
 * @param url {string} name for the desired deviceSetup
 * @returns {BsDeviceApplication | null}
 */
export function cmGetBsDeviceApplication(url: string): BsDeviceApplication;

/**
 * Interface to specify a single file upload item
 * @property file - the file to be uploaded
 * @property destinationPath - the destination path for the file. For BSN uploads, this is usually yhe virtual
 *  path on BSN to which the file is assigned. However, when this interface is used with WebPage assets,
 *  destinationPath refers to the path of the webPage asset relative to the index file.
 * @property [targetName] - if supplied, an alternate name to be used for the asset on BSN
 * @property [parentAssetType] - if file is being uploaded for a composite asset, such as a presentation,
 *  dynamic playlist, etc. - the AssetType of the composite asset
 * @property [parentAssetNames] - the name of the composite asset for which this asset is being uploaded
 */
export interface BsAssetUploadFileItemSpec {
    file: FileSpec;
    destinationPath: string;
    targetName?: string;
    parentAssetType?: AssetType;
    parentAssetNames?: string[];
}
/**
 * Interface to specify a group of files comprising a web site to be uploaded
 * @property siteName {string} - name of the Html Site
 * @property siteType {AssetType} - type of the Html Site - one of {AssetType.HtmlSite, AssetType.DeviceHtmlSite}
 * @property [existingAsset] {BsAssetLocator} - if specified, this represent the AssetLocator of an existing web site
 *  to be updated. The name of the associated web site must match the siteName in this structure.
 * @property indexUploadFile {BsAssetUploadFileItemSpec} - file upload specification for the base index file
 *  for the web site
 * @property assetUploadFiles {Array<BsAssetUploadFileItemSpec>} - an array of file upload specifications for
 *  each of the web page asset files.
 *  The destinationPath for each of these specifications defines the relative path of the asset in relation to the
 *  main index file.
 * @property [presentationName] - if Html site is being uploaded as part of a presentation upload job,
 *  the name of the presentation
 */
export interface BsAssetUploadWebPageSessionSpec {
    siteName: string;
    siteType: AssetType;
    existingAsset?: BsAssetLocator;
    indexUploadFile: BsAssetUploadFileItemSpec;
    assetUploadFiles: BsAssetUploadFileItemSpec[];
    presentationNames?: string[];
}
export interface BsUploadJobResult extends BsTaskResult {
    fileUploadResults: BsUploadItemResult[];
    webPageUploadResults: BsUploadItemResult[];
    failedFileUploads: number;
    failedWebPageUploads: number;
}
export interface CmiDuplicateAssetNameData {
    currentAssetName: string;
    assetType: AssetType;
    assetIndex: number;
    currentPath: string;
    targetName: string;
    useExisting?: boolean;
    existingBsnAsset?: BsAssetLocator;
    parentAssetType?: AssetType;
    parentAssetNames?: string[];
}
export interface CmiAssetUploadCheckResult {
    hasDuplicates: boolean;
    duplicatedFileData?: CmiDuplicateAssetNameData[];
    duplicatedHtmlData?: CmiDuplicateAssetNameData[];
}
export interface BsUploadJobProgress extends BsTaskProgress {
    fileStatus: BsUploadFileProgress[];
    webPageStatus: BsUploadWebPageProgress[];
}
export type BsUploadJobProgressCallback = (uploadJobProgress: BsUploadJobProgress) => void;
export type BsUploadJobCallback = (task: BsTask) => void;
export function cmCreateBsnUploadJob(name: string, uploadFileSpecs: BsAssetUploadFileItemSpec | BsAssetUploadFileItemSpec[] | null, uploadWebPageSpecs: BsAssetUploadWebPageSessionSpec | BsAssetUploadWebPageSessionSpec[] | null, onProgress: BsUploadJobProgressCallback | null, onSuccess?: BsUploadJobCallback | null, onError?: BsUploadJobCallback | null): CmiBsnAssetUploadJob;
export function cmScheduleBsnUploadJob(uploadJob: CmiBsnAssetUploadJob, taskManager: BsTaskManager): BsTaskId;
export interface CmiBsnAssetUploadJob extends BsTask {
    readonly onSuccess: BsUploadJobCallback | null;
    readonly onError: BsUploadJobCallback | null;
    readonly uploadFileSpecs: BsUploadFileItemSpec[] | null;
    readonly webPageUploadSessions: BsUploadWebPageSessionSpec[] | null;
    readonly uploadJobItemCount: number;
    start(): Promise<BsUploadJobResult>;
    check(): Promise<CmiAssetUploadCheckResult>;
    updateDuplicateResolutionAndCheck(modifiedCheckResult: CmiAssetUploadCheckResult): Promise<CmiAssetUploadCheckResult>;
}

export interface BsDynamicPlaylistUploadSpec {
    uploadFileSpecs: BsAssetUploadFileItemSpec[];
}
export interface BsDynamicPlaylistUploadJobResult extends BsUploadJobResult {
    dynamicPlaylistStateBsn: PlDmState;
    dynamicPlaylistAsset: CmiDynamicPlaylistAsset;
}
export interface CmiDynamicPlaylistUploadCheckResult {
    hasDuplicates: boolean;
    hasNewDuplicates: boolean;
    duplicatedFileData?: CmiDuplicateAssetNameData[];
}
export type BsDynamicPlaylistUploadJobProgress = BsUploadJobProgress;
export type BsDynamicPlaylistUploadJobProgressCallback = (uploadProgress: BsDynamicPlaylistUploadJobProgress) => void;
export type BsDynamicPlaylistUploadJobCallback = (task: BsTask) => void;
export function cmCreateBsnDynamicPlaylistUploadJob(name: string, dynamicPlaylistState: PlDmState, contentPath?: string | null, progressCallback?: BsUploadJobProgressCallback | null, onSuccess?: BsDynamicPlaylistUploadJobCallback | null, onError?: BsDynamicPlaylistUploadJobCallback | null): CmiBsnDynamicPlaylistUploadJob;
export function cmScheduleBsnDynamicPlaylistUploadJob(uploadJob: CmiBsnDynamicPlaylistUploadJob, taskManager: BsTaskManager): BsTaskId;
export interface CmiBsnDynamicPlaylistUploadJob extends BsTask {
    readonly onSuccess: BsDynamicPlaylistUploadJobCallback | null;
    readonly onError: BsDynamicPlaylistUploadJobCallback | null;
    readonly dynamicPlaylistId: string;
    check(): Promise<CmiDynamicPlaylistUploadCheckResult>;
    updateDuplicateResolutionAndCheck(modifiedCheckResult: CmiDynamicPlaylistUploadCheckResult): Promise<CmiDynamicPlaylistUploadCheckResult>;
}

export interface BsMediaFeedUploadSpec {
    uploadFileSpecs: BsAssetUploadFileItemSpec[];
}
export interface BsMediaFeedUploadJobResult extends BsUploadJobResult {
    mediaFeedStateBsn: PlDmState;
    mediaFeedAsset: CmiMediaFeedAsset;
}
export interface CmiMediaFeedUploadCheckResult {
    hasDuplicates: boolean;
    hasNewDuplicates: boolean;
    duplicatedFileData?: CmiDuplicateAssetNameData[];
}
export type BsMediaFeedUploadJobProgress = BsUploadJobProgress;
export type BsMediaFeedUploadJobProgressCallback = (uploadProgress: BsMediaFeedUploadJobProgress) => void;
export type BsMediaFeedUploadJobCallback = (task: BsTask) => void;
export function cmCreateBsnMediaFeedUploadJob(name: string, mediaFeedState: PlDmState, contentPath?: string | null, progressCallback?: BsUploadJobProgressCallback | null, onSuccess?: BsMediaFeedUploadJobCallback | null, onError?: BsMediaFeedUploadJobCallback | null): CmiBsnMediaFeedUploadJob;
export function cmScheduleBsnMediaFeedUploadJob(uploadJob: CmiBsnMediaFeedUploadJob, taskManager: BsTaskManager): BsTaskId;
export interface CmiBsnMediaFeedUploadJob extends BsTask {
    readonly onSuccess: BsMediaFeedUploadJobCallback | null;
    readonly onError: BsMediaFeedUploadJobCallback | null;
    readonly mediaFeedId: string;
    check(): Promise<CmiMediaFeedUploadCheckResult>;
    updateDuplicateResolutionAndCheck(modifiedCheckResult: CmiMediaFeedUploadCheckResult): Promise<CmiMediaFeedUploadCheckResult>;
}

export interface BsPresentationExportHtmlSiteSpec {
    siteName: string;
    siteType: AssetType;
    indexFileAssetItem: BsAssetItem;
}
export interface BsPresentationExportHtmlSiteFileSpec {
    file: string | BsAssetItem;
    destinationPath: string | null;
}
export interface BsPresentationExportSpec {
    presentationFileSpec: BsAssetItem;
    exportFileSpecs: BsAssetItem[];
    exportHtmlSiteAssetTypeSpecs: BsPresentationExportHtmlSiteSpec[];
}
export interface BsExportItemResult {
    jobIndex: number;
    filePath: string;
    status: BsExportItemStatus;
    error?: Error;
}
export interface BsPresentationExportJobResult extends BsTaskResult {
    exportResults: BsExportItemResult[];
}
export class BsExportItemStatus {
    static Pending: string;
    static Copying: string;
    static Exporting: string;
    static Exported: string;
    static Cancelled: string;
    static Failed: string;
}
export interface BsExportFileProgress {
    jobIndex: number;
    filePath: string;
    status: BsExportItemStatus;
    fractionComplete: number;
}
export interface BsExportJobProgress extends BsTaskProgress {
    exportStatuses: BsExportFileProgress[];
}
export type BsPresentationExportJobProgressCallback = (exportJobProgress: BsExportJobProgress) => void;
export type BsPresentationExportJobCallback = (task: BsTask) => void;
export function cmCreatePresentationExportJob(name: string, taskManager: BsTaskManager, presentationState: DmBsProjectState | DmState, presentationLocator: BsAssetLocator, targetFolder: string, progressCallback?: BsPresentationExportJobProgressCallback, onError?: BsPresentationExportJobCallback, onSuccess?: BsPresentationExportJobCallback): BsTaskId;
export class PresentationExportJob implements BsTask {
    get id(): string;
    get name(): string;
    get startTime(): Date;
    get type(): BsTaskType;
    get status(): BsTaskStatus;
    get isDone(): boolean;
    get isCancelled(): boolean;
    get cancellationRequested(): boolean;
    get hasItemFailures(): boolean;
    get progress(): BsExportJobProgress;
    get result(): BsPresentationExportJobResult;
    get onError(): BsPresentationExportJobCallback;
    get onSuccess(): BsPresentationExportJobCallback;
    constructor(name: string, presentationState: DmBsProjectState | DmState, presentationLocator: BsAssetLocator, targetFolder: string, progressCallback?: BsPresentationExportJobProgressCallback, onError?: BsPresentationExportJobCallback | null, onSuccess?: BsPresentationExportJobCallback | null);
    start(): Promise<BsPresentationExportJobResult>;
    cancel(): void;
}

export interface BsPresentationUploadSpec {
    uploadFileSpecs: BsAssetUploadFileItemSpec[];
    uploadWebPageSpecs: BsAssetUploadWebPageSessionSpec[];
    pluginFileSpecs: CmiPluginUploadFileItemSpec[];
}
export interface CmiPresentationCheckResult {
    presentationName: string;
    targetName: string;
    existsOnBsn: boolean;
    publishedOnBsn: boolean;
}
export interface CmiPresentationUploadCheckResult {
    hasDuplicates: boolean;
    hasNewDuplicates: boolean;
    presentationCheckResult: CmiPresentationCheckResult;
    duplicatedFileData?: CmiDuplicateAssetNameData[];
    duplicatedHtmlData?: CmiDuplicateAssetNameData[];
    duplicatedPluginData?: CmiDuplicateAssetNameData[];
    dependentPresentationCheckResults?: CmiPresentationCheckResult[];
}
export interface BsPresentationUploadJobResult extends BsUploadJobResult {
    pluginUploadResults: BsUploadItemResult[];
    presentationStateBsn: DmState;
    presentationAsset: CmiPresentationAsset;
}
export interface BsPresentationUploadJobProgress extends BsUploadJobProgress {
    pluginStatus: CmiPluginUploadJobProgress | null;
}
export type BsPresentationUploadJobProgressCallback = (uploadProgress: BsPresentationUploadJobProgress) => void;
export type BsPresentationUploadJobCallback = (task: BsTask) => void;
export function cmCreateBsnPresentationUploadJob(name: string, presentationState: DmBsProjectState | DmState, contentPath?: string | null, progressCallback?: BsUploadJobProgressCallback | null, onSuccess?: BsPresentationUploadJobCallback | null, onError?: BsPresentationUploadJobCallback | null): CmiBsnPresentationUploadJob;
export function cmScheduleBsnPresentationUploadJob(uploadJob: CmiBsnPresentationUploadJob, taskManager: BsTaskManager): BsTaskId;
export interface CmiBsnPresentationUploadJob extends BsTask {
    readonly onSuccess: BsPresentationUploadJobCallback | null;
    readonly onError: BsPresentationUploadJobCallback | null;
    readonly presentationId: BsDmId;
    readonly dependentPresentationCount: number;
    check(): Promise<CmiPresentationUploadCheckResult>;
    updateDuplicateResolutionAndCheck(modifiedCheckResult: CmiPresentationUploadCheckResult): Promise<CmiPresentationUploadCheckResult>;
}

export interface CmiPluginUploadFileItemSpec {
    file: FileSpec;
    targetName: string;
    presentationNames?: string[];
}
export interface CmiPluginUploadCheckResult {
    hasDuplicates: boolean;
    duplicatedPluginData?: CmiDuplicateAssetNameData[];
}
export interface CmiPluginUploadJobResult extends BsTaskResult {
    pluginUploadResults: BsUploadItemResult[];
}
export interface CmiUploadPluginProgress {
    jobIndex: number;
    fileName: string;
    filePath: string;
    targetName: string;
    status: BsUploadItemStatus;
}
export interface CmiPluginUploadJobProgress extends BsTaskProgress {
    pluginStatus: CmiUploadPluginProgress[];
}
export type CmPluginUpdateCallback = (updateStatus: CmiPluginUploadJobProgress) => void;
/**
 * Create a PluginUploadJob.
 */
export function cmCreateBsnPluginUploadJob(pluginUploadFileItemSpecs: CmiPluginUploadFileItemSpec[], onProgress?: CmPluginUpdateCallback): CmiPluginUploadJob;
export function cmScheduleBsnPluginUploadJob(uploadJob: CmiPluginUploadJob, taskManager: BsTaskManager): BsTaskId;
export interface CmiPluginUploadJob extends BsTask {
    readonly onSuccess: BsUploadJobCallback | null;
    readonly onError: BsUploadJobCallback | null;
    readonly uploadPluginSpecs: CmiPluginUploadFileItemSpec[];
    readonly pluginCount: number;
    start(): Promise<CmiPluginUploadJobResult>;
    check(): Promise<CmiPluginUploadCheckResult>;
    updateDuplicateResolutionAndCheck(modifiedCheckResult: CmiPluginUploadCheckResult): Promise<CmiPluginUploadCheckResult>;
}

export function cmGetRoleOperationPermission(operationUid: string, isAllowed: boolean): BsRoleOperationPermission;
/**
 * Return BsRole object for given role name.
 * If the role data has not yet been retrieved, this object can still be created,
 *  and the role data will be retrieved by calling either the {@link fetchRoleData} method
 *  of the object, or also if the roles are enumerated as part of a role collection.
 * The {@link isRoleDataValid} property will be true if the roleData has been retrieved.
 * @param name {string} role name
 * @returns {BsRole}
 */
export function cmGetBsRole(name: string): BsRole;
/**
 * Return BsRole object for the given name with complete and valid Role data. Data is fetched if necessary,
 *  therefore this function returns a Promise.
 * Null is returned if no role can be found on the current network with the given name
 * @param name {string} role name
 * @returns {Promise<BsRole | null>}
 */
export function cmGetValidBsRole(name: string): Promise<BsRole | null>;
/**
 * Return BsRole object for the current user's role. Data is fetched if necessary,
 *  therefore this function returns a Promise.
 * Null is returned if no role can be found on the current network
 * @returns {Promise<BsRole | null>}
 */
export function cmGetValidCurrentUserRole(): Promise<BsCurrentUserRole | null>;
export class BsRole {
    /**
     * @property isRoleDataValid {boolean} - return true if role data has been retrieved and is valid
     */
    get isRoleDataValid(): boolean;
    /**
     * @property lastRoleDataUpdateTime - Return the timestamp noting the time of the last role data update.
     *  null is returned if data has not been retrieved.
     */
    get lastRoleDataUpdateTime(): Date | null;
    /**
     * @property roleData {BsnRoleEntity | null} - full role data object
     *  null is returned if data has not been retrieved.
     */
    get roleData(): BsnRoleEntity | null;
    /**
     * @property name {string} - role name string
     */
    get name(): string;
    /**
     * @property description {string} - role description string
     */
    get description(): string | null;
    /**
     * @property userCount {string} - number of users associated with this role
     */
    get userCount(): number;
    /**
     * @property isRoleUserDataValid {boolean} - return true if role user data has been retrieved and is valid
     */
    get isRoleUserDataValid(): boolean;
    /**
     * @property isCustom {boolean} - return true if this is a custom role. Default to true if there is
     *  no role data.
     */
    get isCustom(): boolean;
    /**
     * @property users {BsnPermissionPrincipalUserInfoEntity[]} - return list of users assigned to this role.
     *  Note that this property is not valid after enumerating all roles. {@link fetchRoleData} must be
     *  called to retrieve the user list associated with the role. The property {@link isRoleUserDataValid} can
     *  be used to determine if user data is valid.
     */
    get users(): BsnPermissionPrincipalUserInfoEntity[];
    /**
     * @property permissions {BsnPermissionEntity[]} - return list of permissions associated with this role
     */
    get permissions(): BsnPermissionEntity[];
    /**
     * @property permissionsCopy {BsRoleOperationPermission[]} - return list of role operation permission specifications
     *  associated with this role. This copy can be used for initializing new custom roles
     */
    get permissionsCopy(): BsRoleOperationPermission[];
    /**
     * @property bsnUserPrincipal {BsnPermissionPrincipalUserInfoEntity} - BSN User Principal object for use
     *  in permission object, denoting the current user.
     */
    get bsnRolePrincipal(): BsnPermissionPrincipalRoleInfoEntity;
    get bsnId(): number;
    constructor(name: string);
    /**
     * Determine if a given operation is allowed for users assigned to this role.
     * If entityId is not null, search for an object permission for the role and the object specified by the
     *  entityId.
     * If entityId is null, or not specified, search for the corresponding operation condition for the role.
     * @param operationUid {string}
     * @param [entityId=null] {number | null}
     * @returns {boolean | null} returns null if permission is not found and if there is no parent operation specified
     *  for the role and object. If null, permission determination should be determined by the
     *  operation permission specified for the role.
     */
    isOperationAllowed(operationUid: string, entityId?: number | null): boolean | null;
    /**
     * Retrieve updated data for this role.
     * @return {Promise<BsRole>}
     */
    fetchRoleData(): Promise<BsRole>;
    /**
     * Make sure role data is valid - retrieve if necessary.
     * @return {Promise<BsRole>}
     */
    checkRoleData(): Promise<BsRole>;
    /**
     * Update role properties that can be specified and changed.
     * @param updateData {BsnRoleEntity}
     * @returns {Promise<BsRole>}
     */
    updateRole(updateData: BsnRoleEntity): Promise<BsRole>;
}
export class BsCurrentUserRole extends BsRole {
    constructor();
    /**
     * Retrieve updated data for the current user's role.
     * @return {Promise<BsRole>}
     */
    fetchRoleData(): Promise<BsRole>;
}

export interface BsRoleCreateData {
    name: string;
    description?: string | null;
    users?: BsUser[] | null;
    permissions?: BsRoleOperationPermission[] | null;
}
export interface BsRoleUpdateData {
    role: BsRole;
    name?: string;
    description?: string | null;
    usersToAdd?: BsUser[] | null;
    usersToDelete?: BsUser[] | null;
    permissions?: BsRoleOperationPermission[] | null;
}
export function cmGetBsnRoleCollection(): BsRoleCollection;
export function cmGetCompletedBsnRoleCollection(): Promise<BsRoleCollection>;
export class BsRoleCollection {
    static getRoleOperationPermissionEntity(rop: BsRoleOperationPermission, principal: BsnPermissionPrincipalRoleInfoEntity): BsnPermissionEntity;
    /**
     * @property isComplete - True if collection has finished updating all roles. If not,
     *  updateNext can be called again to enumerate next segment of roles.
     */
    get isComplete(): boolean;
    /**
     * @property roleNames {string[]} - Array of names of all enumerated roles.
     */
    get roleNames(): string[];
    /**
     * @property newRoleNames {string[]} - Array of names of newly enumerated roles.
     *  If the enumeration is segmented this returns only the names of newly enumerated roles.
     */
    get newRoleNames(): string[];
    clear(): void;
    /**
     * Update BSN Roles and resolve with list of role names. This method will
     *  enumerate all BSN Roles, regardless of the number.
     * In order to get resolution for each set of roles returned in a segmented enumeration,
     *  use {@link startUpdate} and {@link updateNext}.
     * This method restarts enumeration on each call.
     *
     * @returns {Promise<BsRoleCollection} - Promise that resolves with this class object.
     */
    update(): Promise<BsRoleCollection>;
    /**
     * Start enumerating BSN Roles and resolve with this object.
     *  If the number of roles is greater than the default BSN report page size,
     *  the isComplete property of this object will be false, and subsequent calls to enumerateNext
     *  will be required to complete enumeration.
     *
     * @returns {Promise<BsRoleCollection>} - Promise that resolves with this class object.
     */
    startUpdate(): Promise<BsRoleCollection>;
    /**
     * Continue enumerating BSN Roles and resolve with this object.
     *  This needs to be called only if previous enumeration did not complete.
     *
     * @returns {Promise<BsRoleCollection>} - Promise that resolves with this class object
     */
    updateNext(): Promise<BsRoleCollection>;
    /**
     * Return true if the collection holds a Role for the given name.
     *
     * @param {string} name
     * @returns {boolean}
     */
    hasRole(name: string): boolean;
    /**
     * Return BsRole object representing the Role for the given name.
     * Returns null if no role is found in the collection with the given name.
     *
     * @param {string} name
     * @returns {BsRole | null}
     */
    getRole(name: string): BsRole | null;
    /**
     * Create a new custom role.
     * @param data {BsRoleCreateData} - data for the new custom role.
     */
    createCustomRole(data: Partial<BsRoleCreateData>): Promise<BsRole>;
    updateCustomRole(data: Partial<BsRoleUpdateData>): Promise<BsRole>;
    /**
     * Delete a custom role
     * @param name {string} - Role name
     * @returns {Promise<void>}
     */
    deleteCustomRole(name: string): Promise<void>;
}

/**
 * Return BsUser object for given user login.
 * If the user data has not yet been retrieved, this object can still be created,
 *  and the user data will be retrieved by calling either the {@link fetchUserData} method
 *  of the object, or also if the users are enumerated as part of a userCollection.
 * The {@link isUserDataValid} property will be true if the userData has been retrieved.
 * @param login {string} user login
 * @returns {BsUser}
 */
export function cmGetBsUser(login: string): BsUser;
/**
 * Return BsUser object for the given login with complete and valid User data. Data is fetched if necessary,
 *  therefore this function returns a Promise.
 * Null is returned if no user can be found on the current network with the given login
 * @param login {string} user login
 * @returns {Promise<BsRole | null>}
 */
export function cmGetValidBsUser(login: string): Promise<BsUser | null>;
/**
 * Return BsUser object for the current User. Data is fetched if necessary,
 *  therefore this function returns a Promise.
 * Null is returned if no current user ID is invalid
 * @param login {string} user login
 * @returns {Promise<BsRole | null>}
 */
export function cmGetValidCurrentUser(): Promise<BsCurrentUser | null>;
export class BsUser {
    /**
     * @property isUserDataValid {boolean} - return true if user data has been retrieved and is valid
     */
    get isUserDataValid(): boolean;
    /**
     * @property lastUserDataUpdateTime - Return the timestamp noting the time of the last user data update.
     *  null is returned if data has not been retrieved.
     */
    get lastUserDataUpdateTime(): Date | null;
    /**
     * @property userData {BsnUserEntity | null} - full user data object
     *  null is returned if data has not been retrieved.
     */
    get userData(): BsnUserEntity | null;
    /**
     * @property login {string} - user login string
     */
    get login(): string;
    /**
     * @property firstName {string} - user.person firstName string
     */
    get firstName(): string | null;
    /**
     * @property lastName {string} - user.person lastName string
     */
    get lastName(): string | null;
    /**
     *  @property lastName {string} - is user locked out boolean
     */
    get isLockedOut(): boolean;
    /**
     * @property description {string} - user description string
     */
    get description(): string | null;
    /**
     * @property roleName {string} - user roleName string
     */
    get roleName(): string | null;
    /**
     * @property permissions {BsnPermissionEntity[]} - return list of permissions associated with this user
     */
    get permissions(): BsnPermissionEntity[];
    /**
     * @property bsnUserPrincipal {BsnPermissionPrincipalUserInfoEntity} - BSN User Principal object for use
     *  in permission object, denoting the current user.
     */
    get bsnUserPrincipal(): BsnPermissionPrincipalUserInfoEntity;
    get bsnId(): number;
    constructor(login: string);
    /**
     * Determine if a given operation is specifically allowed or disallowed for this user for a given object entity ID.
     *  User permissions are always object permissions, not operation permissions. Thus, for a this user permission
     *  check, an object entityId must be specified.
     * @param operationUid {string}
     * @param entityId {number}
     * @returns {boolean | null} returns null if permission is not found and if there is no parent operation specified
     *  for the user. If null, permission determination should be determined by the role associated with the user.
     */
    isOperationAllowed(operationUid: string, entityId: number): boolean | null;
    /**
     * Retrieve updated data for this user.
     * @return {Promise<BsUser>}
     */
    fetchUserData(): Promise<BsUser>;
    /**
     * Make sure user data is valid - retrieve if necessary.
     * @return {Promise<BsUser>}
     */
    checkUserData(): Promise<BsUser>;
    /**
     * Update user properties that can be specified and changed.
     * @param updateData {BsnUserEntity}
     * @returns {Promise<BsUser>}
     */
    updateUser(updateData: BsnUserEntity): Promise<BsUser>;
}
export class BsCurrentUser extends BsUser {
    constructor();
    /**
     * Retrieve updated data for the current user.
     * @return {Promise<BsUser>}
     */
    fetchUserData(): Promise<BsUser>;
}

export interface BsUserCreateData {
    firstName: string;
    lastName: string;
    login: string;
    password: string;
    roleName: string;
    description?: string;
    isLockedOut?: boolean;
}
export interface BsUserUpdateData {
    id: number;
    roleName?: string;
    description?: string | null;
    isLockedOut?: boolean;
}
export interface BsNewUserData {
    user: BsUser;
    newPassword: string;
}
export function cmGetBsnUserCollection(): BsUserCollection;
export function cmGetCompletedBsnUserCollection(): Promise<BsUserCollection>;
export class BsUserCollection {
    /**
     * @property isComplete - True if collection has finished updating all users. If not,
     *  updateNext can be called again to enumerate next segment of users.
     */
    get isComplete(): boolean;
    /**
     * @property userLogins {string[]} - Array of logins of all enumerated users.
     */
    get userLogins(): string[];
    /**
     * @property newUserLogins {string[]} - Array of logins of newly enumerated users.
     *  If the enumeration is segmented this returns only the logins of newly enumerated users.
     */
    get newUserLogins(): string[];
    clear(): void;
    /**
     * Update BSN Users and resolve with list of user logins. This method will
     *  enumerate all BSN Users, regardless of the number.
     * In order to get resolution for each set of users returned in a segmented enumeration,
     *  use {@link startUpdate} and {@link updateNext}.
     * This method restarts enumeration on each call.
     *
     * @returns {Promise<BsUserCollection} - Promise that resolves with this class object.
     */
    update(): Promise<BsUserCollection>;
    /**
     * Start enumerating BSN Users and resolve with this object.
     *  If the number of users is greater than the default BSN report page size,
     *  the isComplete property of this object will be false, and subsequent calls to enumerateNext
     *  will be required to complete enumeration.
     *
     * @returns {Promise<BsUserCollection>} - Promise that resolves with this class object.
     */
    startUpdate(): Promise<BsUserCollection>;
    /**
     * Continue enumerating BSN Users and resolve with this object.
     *  This needs to be called only if previous enumeration did not complete.
     *
     * @returns {Promise<BsUserCollection>} - Promise that resolves with this class object
     */
    updateNext(): Promise<BsUserCollection>;
    /**
     * Return true if the collection holds a User for the given login.
     *
     * @param {string} login
     * @returns {boolean}
     */
    hasUser(login: string): boolean;
    /**
     * Return BsUser object representing the User for the given login.
     * Returns null if no user is found in the collection with the given name.
     *
     * @param {string} login
     * @returns {BsUser | null}
     */
    getUser(login: string): BsUser | null;
    /**
     * Create a new user.
     * @param data {BsUserCreateData} - data for the new custom user.
     */
    createUser(data: BsUserCreateData): Promise<BsNewUserData>;
    updateUser(data: BsUserUpdateData): Promise<BsUser>;
    /**
     * Delete a user
     * @param login {string} - User login
     * @returns {Promise<void>}
     */
    deleteUser(login: string): Promise<void>;
}

export function cmGetOperationManager(): BsOperationManager;
export function cmGetCompletedBsnOperationManager(): Promise<BsOperationManager>;
export function cmUpdateOperationManager(): Promise<BsOperationManager>;
/**
 * Return true if the current user has the scope for the given BsnOperation and optional action.
 * If action is not specified, the function will return true only if the user has access to the parent scope
 *  for all available actions.
 * @param operation {BsnBusinessOperationType}
 * @param [action] {BsnOperationAction}
 * @returns {boolean}
 */
export function cmIsOperationInScopeForCurrentUser(operation: BsnBusinessOperationType, action?: BsnOperationAction): boolean;
/**
 * Return a boolean (via a promise) if the given user has permission for the given operation.
 *  An optional targetEntity can be specified if checking an object permission on a specific entity.
 *  This function will fail if the current user does not have 'View users' and 'View Roles' permissions.
 * @param operationUid (string} - operation GUID
 * @param user (BsUser} - user object for which to check permissions
 * @param [targetEntityId] {number | null} - entity ID if checking object permission
 * @returns {Promise<boolean>}
 */
export function cmIsOperationAllowedByUser(operationUid: string, user: BsUser, targetEntityId?: number | null): Promise<boolean>;
/**
 * Return a boolean (via a promise) if the current user has permission for the given operation.
 *  An optional targetEntity can be specified if checking an object permission on a specific entity.
 *  This function will succeed for all logged in users.
 * @param operationUid (string} - operation GUID
 * @param [targetEntityId] {number | null} - entity ID if checking object permission
 * @returns {Promise<boolean>}
 */
export function cmIsOperationAllowedByCurrentUser(operationUid: string, targetEntityId?: number | null): Promise<boolean>;
export class BsOperationManager {
    get isValid(): boolean;
    update(): Promise<BsOperationManager>;
    getOperationTree(root?: BsnBusinessOperationType): Readonly<BsnBusinessOperationEntity> | null;
    getRootOperationList(): Readonly<BsnBusinessOperationEntity[]>;
    getOperationByUid(uid: string): Readonly<BsnBusinessOperationEntity> | null;
    getOperationByTypeAndSingularName(type: BsnBusinessOperationType, name: string): Readonly<BsnBusinessOperationEntity> | null;
    getOperationUidByTypeAndSingularName(type: BsnBusinessOperationType, name: string): string | null;
}

export enum AssetSortField {
    name = "name",
    mediaType = "mediaType",
    assetType = "assetType",
    fileSize = "fileSize",
    uploadDate = "uploadDate",
    lastModifiedDate = "lastModifiedDate",
    creationDate = "creationDate"
}
export interface CmiAssetEnumerationOptions {
    folders: boolean;
    /** @deprecated */
    includeLegacyAssets: boolean;
    mediaFilters: MediaType[] | null;
    sortField: AssetSortField | null;
    sortDescending: boolean;
    maxItems: number;
    pageSize: number;
}
/** @deprecated Use name CmiAssetEnumerationOptions */
export type AssetEnumerationOptions = CmiAssetEnumerationOptions;
export interface CmiSortOptions {
    sortField: AssetSortField | null;
    sortDescending: boolean;
}
export interface CmiAssetLoaderOptions extends Partial<CmiSortOptions> {
    pageSize?: number;
    preloadedAssetLocators?: BsAssetLocator[];
    forceRefresh?: boolean;
}
export interface CmiAssetFilterOptions {
    assetTypes?: AssetType[];
    mediaTypes?: MediaType[];
    assetLocation?: AssetLocation;
    searchString?: string;
}
export interface CmiTaggedAssetEnumerationOptions {
    filterSpec: BsnFilterSpecification;
    sortTagName?: string;
    sortDescending?: boolean;
    pageSize?: number;
}
/** @deprecated Use name CmiTaggedAssetEnumerationOptions */
export type TaggedAssetEnumerationOptions = CmiTaggedAssetEnumerationOptions;

export enum BsCmErrorType {
    fsNotAvailableError = 0,
    assetNotFoundError = 1,
    assetNameNotFoundError = 2,
    invalidOperationRequest = 3,
    invalidParameters = 4,
    unsupportedAssetType = 5,
    unsupportedAssetLocation = 6,
    unsupportedMultipleAssetTypes = 7,
    assetNameExists = 8,
    unexpectedError = 9,
    uploadJobBusy = 10,
    noUploadJob = 11,
    uploadFailed = 12,
    deviceNotFound = 13,
    groupNotFound = 14,
    userNotFound = 15,
    roleNotFound = 16,
    remoteProcedureError = 17,
    standardDeviceWebPageUploadFailed = 18,
    presentationUploadJobFailed = 19,
    dynamicPlaylistUploadJobFailed = 20,
    mediaFeedUploadJobFailed = 21,
    presentationDependencyLimitExceeded = 22,
    presentationDependencyProjectFileMissing = 23
}
export class BsCmError extends Error {
    name: string;
    type: BsCmErrorType;
    constructor(type: BsCmErrorType, reason?: string);
}

/** @deprecated - use CmiAssetCollection */
export type BsAssetCollectionType = CmiAssetCollection;
/**
 * Class factory function for CmcAssetCollection.
 * This function returns a CmiAssetCollectionType interface.
 * If a collection exists in cache which matches the collection parameters, it will be
 *  returned instead of creating a new collection.
 *
 * @param location - location of directory to enumerate
 *  Defaults to Local on desktop systems, BSN on browser systems
 * @param assetType - AssetType to enumerate, an array of AssetTypes to enumerate and
 *  include in the same folder. Note: multiple asset type enumeration is supported only on local file
 *  systems. This function will throw an exception if an array is passed for anything but a local file system location.
 * @param [directoryPath] - If the assets are stored in a hierarchical directory structural, this is the
 *  path to the folder containing the assets. This should be a full folder path on local systems, or the
 *  virtual path on BSN.
 * @param [enumerationOptions] - options for enumeration. Currently these are used to
 *  specify whether sub-folders are enumerated, etc.
 * @param [pinnedAssetItems] - list of BsAssetLocators representing assets that should
 *  be pre-loaded into the collection and pinned. If any object is a full BsAssetItem, all information from that
 *  BsAssetItem is pre-loaded to the collection. If any object is just a BsAssetLocator, a minimal BsAssetItem
 *  is created from that. Any locators that specify assets of a different AssetType, AssetLocation,
 *  or directoryPath from the collection are ignored.
 */
export function cmGetBsAssetCollection(location: AssetLocation, assetType: AssetType | AssetType[], directoryPath?: string, enumerationOptions?: Partial<CmiAssetEnumerationOptions> | null, pinnedAssetItems?: BsAssetLocator[] | null): CmiAssetCollection;
/**
 * Pin a set of assetItems in all collections in which they are contained.  If no collection is
 *  found in the cache that matches the assets to be pinned, new collections are created as necessary
 *  with default enumeration options.
 * @param assetLocators - Either BsAssetLocator or BsAssetItem objects can be specified here.
 *  BsAssetItems should be specified here if possible. If BsAssetLocators are specified, minimal BsAssetItems
 *  will be constructed. The resulting assetItems are added to the matching collections in the cache.
 */
export function cmPinAssets(assetLocators: BsAssetLocator[]): void;
/**
 * Unpin a set of assetItems in all collections in which they are contained.
 * @param assetLocators - Either BsAssetLocator or BsAssetItem objects can be specified here.
 *  BsAssetItems should be specified here if possible. If BsAssetLocators are specified, minimal BsAssetItems
 *  will be constructed for the purposes of matching. This insures that Content assets will have
 *  an appropriate MediaType.
 */
export function cmUnpinAssets(assetLocators: BsAssetLocator[]): void;
/**
 * Return true if there is a CmiAssetCollection for the given locator in the assetCollection cache.
 * @param locator - the locatorHash for the desired asset collection. This can be retrieved from
 *  a CmiAssetCollection object by accessing the locatorHash property.
 */
export function cmHasBsAssetCollectionForLocator(locator: string): boolean;
/**
 * Retrieve a CmiAssetCollection if it has been previously created and is present to the cache.
 * @param locator - the locatorHash for the desired asset collection. This can be retrieved from
 *  a CmiAssetCollection object by accessing the locatorHash property.
 */
export function cmGetBsAssetCollectionByLocator(locator: string): CmiAssetCollection | null;
/**
 * Remove all assetCollections and cached assetItems for the given assetLocation and scope.
 * @param location {AssetLocation}
 * @param scope {string}
 */
export function cmRemoveAssetCollectionsForLocationAndScope(location: AssetLocation, scope: string): void;

/** @deprecated - use CmiAsset */
export type BsAsset = CmiAsset;
export interface CmiAssetReference {
    locatorHash: string;
    updateTime: Date;
}
export function cmGetBsAssetForLocatorHash(locatorHash: string): CmiAsset | null;
export function cmGetAssetUpdateTime(locatorHash: string): Date | null;
/**
 * Return appropriate derived CmiAsset object for given assetItem.
 *
 * @param {BsAssetItem} assetItem
 * @returns {CmiAsset | null} derived CmiAsset object or null if assetItem is not valid or not yet supported
 *  as a CmiAsset
 */
export function cmGetBsAsset(assetItem: BsAssetItem): CmiAsset | null;
/**
 * Return a temporary CmiAsset object based only on an asset specification. This object is useful
 *   for testing file existence, or performing certain operations on local files.
 *  For BSN based files, this CmiAsset object will not contain the BSN network ID, and so
 *   many BSN asset operations cannot be done. Testing for asset existence on BSN can be done with this object.
 * @param {BsAssetSpecification} assetSpec
 * @returns {CmiAsset | null}
 */
export function cmGetTemporaryAsset(assetSpec: BsAssetSpecification): CmiAsset | null;
/**
 * Return updated CmiAsset object for the given AssetLocator. This function always refreshes the assetItem data.
 * @param {BsAssetLocator} assetLocator
 * @return {Promise<CmiAsset>}
 */
export function cmGetBsAssetForAssetLocator(assetLocator: BsAssetLocator): Promise<CmiAsset | null>;
/**
 * Test to see if specified asset exists in the associated location. This test takes into account
 *  whether the specified asset is a file or a folder (directory) and the associated Promise
 *  returns the boolean existence result accordingly (i.e., if a folder is requested, the asset
 *  is considered to exist only if the name is found and the name refers to a folder.
 * @param {BsAssetSpecification} assetSpec
 * @returns {Promise<boolean>}
 */
export function cmBsAssetExists(assetSpec: BsAssetSpecification): Promise<boolean>;
/**
 * Retrieve asset information based on the given BsAssetSpecification, and create and return a populated CmiAsset
 *  object, based on the AssetType. The asset search is done based on the name and path. If the asset cannot be found,
 *  or does not match the specified AssetType, null is returned.
 * @param {BsAssetSpecification} assetSpec
 * @param {boolean} [forceUpdate=true] for BSN assets, if true, forces fetch of asset data
 *  even if asset is in the cache
 * @returns {Promise<CmiAsset | null>}
 */
export function cmGetBsAssetForAssetSpecification(assetSpec: BsAssetSpecification, forceUpdate?: boolean): Promise<CmiAsset | null>;
/**
 * Return updated BSN based CmiAsset object for the given AssetLocator. This function always refreshes the assetItem
 *  data, so it can be used to retrieve a complete BSN based CmiAsset object given only the locator data.
 * @param {BsAssetLocator} assetLocator
 * @return {Promise<CmiAsset>}
 */
export function cmGetBsAssetForBsnAsset(assetLocator: BsAssetLocator): Promise<CmiAsset | null>;
/**
 * Return CmiAsset object for a file on the local file system.
 * If local file system is not available, or if the file does not exist, null is returned.
 *
 * @param {string} fullPath - full path to file on local file system
 * @returns {CmiAsset | null}
 */
export function cmGetBsAssetForLocalFile(fullPath: string): CmiAsset | null;
/**
 * For a given BsAssetLocator, return the BsAssetSpecification for the parent folder.
 * If the asset locator specifies an asset at the system root, null is returned.
 * @param assetLocator (BsAssetLocator}
 * @returns {BsAssetSpecification | null}
 */
export function cmGetParentFolderAssetSpecification(assetLocator: BsAssetLocator): BsAssetSpecification | null;
/**
 * Update the parent folder asset for a given assetItem. This is used to update the parent folder
 *  when assetItems are added or deleted to a folder, and will result in updated values for
 *  'hasFiles' and 'hasSubFolders' properties.
 * @param assetItem {BsAssetItem}
 * @returns {Promise<BsAssetItem>} - Promise returns the given assetItem
 */
export function cmUpdateAssetItemParentFolder(assetItem: BsAssetItem): Promise<BsAssetItem>;
/**
 * Update the assetItem for a given BsAssetSpecification, and if successful (i.e., if the assetSpec
 *  actually pointed to an asset,) send an update notification for the given assetItem.
 * @param assetSpec
 * @returns {Promise<void>}
 */
export function cmUpdateAssetItemForAssetSpecification(assetSpec: BsAssetSpecification): Promise<void>;

export interface CmiAssetContainerReference {
    locatorHash: string;
    updateTime: Date;
}
export interface CmiAssetContainer {
    readonly name: string;
    readonly path: string;
    readonly assetType: AssetType;
    readonly location: AssetLocation;
    readonly locatorHash: string;
    readonly childAssetType: BseChildAssetType;
    readonly hasCollection: boolean;
    readonly hasFolderCollection: boolean;
    readonly collection: CmiAssetCollection | null;
    readonly folderCollection: CmiAssetCollection | null;
    readonly assetLocator: BsAssetLocator;
    readonly fullPath: string;
    hasSubFolders(): Promise<boolean>;
    getSubFolderContainerHashes(): Promise<string[]>;
}
export function cmGetBsnSystemFolderAssetLocator(childAssetType: BseChildAssetType, name: string | null): BsAssetLocator;
export function cmIsSystemRootContainerAssetLocator(assetLocator: BsAssetLocator): boolean;
export function cmIsSystemContainerAssetLocator(assetLocator: BsAssetLocator): boolean;
export function cmGetCmcAssetContainerForLocatorHash(locatorHash: string): CmiAssetContainer | null;
export function cmGetCmcAssetContainerForAssetLocator(assetLocator: BsAssetLocator): CmiAssetContainer | null;
export function cmGetLocatorHashForAssetLocator(assetLocator: BsAssetLocator): string;
export function cmGetOrCreateCmcAssetContainerForAssetLocator(assetLocator: BsAssetLocator, loaderOptions?: CmiAssetLoaderOptions | null): CmiAssetContainer | null;

export function cmCacheFileBlobAndGetAssetItem(file: File, scope: string): BsAssetItem | null;
export function cmGetFileBlobForAssetItem(assetItem: BsAssetItem): File | null;
export function cmRemoveFileBlobForAssetItem(assetItem: BsAssetItem): boolean;
export function cmRemoveFileBlobsForScope(scope: string): void;
export function cmGetTotalFileBlobSizeForScope(scope: string): number;
export function cmGetAssetItemsForScope(scope: string): BsAssetItem[];

export const DefaultPresentationWebPageName = "Default_PresentationWebPage";
export const DefaultClockZoneWebPageName = "Default_PresentationBsDateTimeWidget";
/**
 * Return BsAssetItem representing the BSN webPage entity for the default presentation webPage.
 * If the default webPage has not been uploaded to the current account, upload it immediately.
 * @returns {Promise<BsAssetItem>}
 */
export function cmGetDefaultPresentationWebPageAsset(): Promise<BsAssetItem>;
/**
 * Return BsAssetItem representing the BSN webPage entity for the clock widget webPage.
 * If the widget webPage has not been uploaded to the current account, upload it immediately.
 * @returns {Promise<BsAssetItem>}
 */
export function cmGetDefaultClockZoneWebPageAsset(): Promise<BsAssetItem>;
/**
 * Return a BsnObjectPermission object from the BsnPermissionEntity used in various BSN entities.
 * @param permissionEntity {BsnPermissionEntity} - raw BSN permission entity
 * @returns {BsnObjectPermission}
 */
export function cmGetBsnObjectPermissionFromBsnEntity(permissionEntity: BsnPermissionEntity): BsnObjectPermission;
/**
 * Return an array of BsnTagKeySpecification objects for all tag keys defined for the currently active BSN network.
 * An optional pattern specification can be provided to narrow the key search. Wildcard characters can be used
 *  in the pattern specification.
 * @param [pattern] {BsnTagKeyPatternSpecification}
 */
export function cmGetBsnTagKeys(pattern?: BsnTagKeyPatternSpecification): Promise<BsnTagKeySpecification[]>;
/**
 * Return an array of all value strings for currently active BSN network. Note that all values are returned as strings,
 *  including dateTime and number data types.
 * An optional pattern specification can be provided to narrow the tag keys for which values will be returned.
 * Wildcard characters can be used in the pattern specification, including for the value property.
 * @param pattern {BsnTagValuePatternSpecification}
 */
export function cmGetBsnTagValueStrings(pattern?: BsnTagValuePatternSpecification): Promise<string[]>;

export interface CmSimpleRssItem {
    title: string;
    description: string;
}
/**
 * If feedUrl is valid and returns a valid RSS feed, returned Promise will resolve with an array of CmSimpleRssItem
 *  objects, specifying title and description data. If the URL is invalid, or does not point to a valid RSS feed,
 *  the Promise resolves with null.
 * @param feedUrl {string}
 * @returns {Promise<CmSimpleRssItem[] | null>}
 */
export function cmGetSimpleRssItemArray(feedUrl: string): Promise<CmSimpleRssItem[] | null>;
/**
 * Test given URL to see if it returns a valid HTML response for a GET call. Promise will resolve with a 'true'
 *  value if the GET call response status is a 200 response (any 2xx.)
 * @param url - URL string
 * @returns {Promise<boolean>}
 */
export function cmTestUrl(url: string): Promise<boolean>;

export interface BsCmDownsampleSpec {
    mediaAsset: CmiMediaAsset;
    targetSize: BsSize;
}
export enum BsCmMediaProcessFailureType {
    NotSupport = "NotSupport",
    UserCancel = "UserCancel",
    FailProcess = "FailProcess"
}
export interface BsCmMediaProcessResult {
    ok: boolean;
    assetItem: BsAssetItem;
    processedAssetLocator: BsAssetLocator | null;
    failureType: BsCmMediaProcessFailureType | null;
}
export function cmCreateDownsampleCopy(prepareEntities: BsCmDownsampleSpec[] | BsCmDownsampleSpec): Promise<BsCmMediaProcessResult[]>;

/**
 * This function must be called by the client before shutdown on desktop systems (i.e., those running with
 *  node.js.) It shuts down all child processes, and performs any other necessary cleanup functions.
 * @return {Promise<void>} promise resolves when child processes have been closed
 */
export function cmShutdown(): Promise<void>;
