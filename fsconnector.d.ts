/* tslint:disable:quotemark max-line-length trailing-comma */
import {BsAssetItem, AssetType, MediaType, FileSpec, BsLocalAssetThumbnail, BsUploadWebPageSessionSpec, BsProfileEntity, BsAssetLocator, BsLocalFileBuffer, BsUploadFileSource, BsImageData, BsMediaFileData, PlayerModel, ParsedProbeDataResult, ProbeContentResolutionType, ProbeCanPlayResult, DecoderName, VideoMode, MediaLegalityResults} from './bscore';
/**
 * Created by jsugg on 5/19/17.
 */
export function fsIsLocalFileSystemAvailable(): boolean;
export class FsFolderEnumerator {
    /**
     * @property defaultRootPath {string} - Base path for all enumerations
     */
    defaultRootPath: string;
    constructor(basePath?: string);
    /**
     * Update content directory from local file system and resolve with list of content names
     *
     * @param [directoryPath] {string | null} - local path of directory to resolve, relative to defaultRootPath.
     *  If path is blank or undefined, the root path is assumed.
     * @param [assetTypes] {AssetType | AssetType[] | null} - array of asset types to include.
     *  If undefined or empty, all files and folders are included.
     * @param [mediaTypes] {MediaType | MediaType[] | null} - if present and assetTypes includes AssetType.Content,
     *  enumeration will be limited to the specified mediaTypes.
     * @returns {Promise<BsAssetItem[]>} - Promise that resolves with an array of assetItems
     */
    update(directoryPath?: string | null, assetTypes?: AssetType | AssetType[] | null, mediaTypes?: MediaType | MediaType[] | null): Promise<BsAssetItem[]>;
    /**
     * Get count of file/folder items in given directory matching the given asset types.
     * @param [directoryPath] {string | null} - local path of directory to count, relative to defaultRootPath.
     * @param [assetTypes] {AssetType | AssetType[] | null} - array of asset types to include.
     *  If undefined or empty, all files and folders are counted.
     * @param [mediaTypes] {MediaType | MediaType[] | null} - if present and assetTypes includes AssetType.Content,
     *  count will be limited to the specified mediaTypes.
     */
    getCount(directoryPath?: string | null, assetTypes?: AssetType | AssetType[] | null, mediaTypes?: MediaType | MediaType[] | null): Promise<number>;
}

/// <reference types="node" />
/**
 * Return SHA1 hash for given file on either file system.
 * @param file {FileSpec} - If a File, a File object. If a string, the full local file path for the file.
 *  A BsAssetItem can also be used here, and in some cases this will be more efficient.
 * @returns {Promise<string>} returns a Promise that resolves to the hash value
 */
export function fsGetFileSha1(file: FileSpec): Promise<string>;
export function fsGetDataSha1AsArray(data: string | Buffer): Uint8Array;
/**
 * Return SHA1 hash for given file
 * @param file {string | BsAssetItem} - path to file, or a BsAssetItem for a local file
 * @returns {Promise<string>} returns a Promise that resolves to the hash value
 */
export function fsGetLocalFileSha1(file: string | BsAssetItem): Promise<string>;
export function fsGetObjectFileSha1(file: File): Promise<string>;
export function fsGetDataSha1(data: Uint8Array): string;
export function fsGetDataSha1AsBuffer(data: Buffer): Buffer;
export function fsEncryptRsa(text: string, publicKey: string): string;
export function fsDecryptRsa(base64Cipher: string, privateKey: string): string;

/// <reference types="node" />
export function fsGetLocalFileAsString(fullPath: string): Promise<string>;
export function fsGetLocalJsonFileAsObject(fullPath: string): Promise<object>;
export function fsGetLocalFileAsArrayBuffer(fullPath: string): Promise<ArrayBuffer>;
export function fsGetLocalFileSize(fullPath: string): Promise<number>;
export function fsLocalFileIsDirectory(fullPath: string): Promise<boolean>;
export function fsMoveLocalFile(srcPath: string, destPath: string, overwrite?: boolean): Promise<void>;
export function fsCopyLocalFile(srcPath: string, destPath: string, overwrite?: boolean): Promise<void>;
export function fsSaveObjectAsLocalJsonFile(data: object, fullPath: string): Promise<void>;
export function fsSaveStringAsLocalFile(data: string, fullPath: string): Promise<void>;
export function fsSaveBufferAsLocalFile(data: Buffer, fullPath: string): Promise<void>;
export function fsSaveStreamAsLocalFile(data: NodeJS.ReadableStream, fullPath: string): Promise<void>;
export function fsLocalFileExists(fullPath: string): boolean;
export function fsLocalFolderExists(fullPath: string): Promise<boolean>;
export function fsGetFileSpecSize(spec: FileSpec): Promise<number>;
export function fsFilesMatch(fileSpecA: FileSpec, fileSpecB: FileSpec): Promise<boolean>;
export function fsDeleteFile(fullPath: string): Promise<void>;
export function fsJoinPath(dirPath: string, fileName: string): string;
export function fsCreateDirectory(dirPath: string): Promise<void>;
export function fsCreateNestedDirectory(dirPath: string): Promise<void>;
/**
 * Remove directory - throw error if directory is not empty
 * @param {string} dirPath
 * @returns {Promise<void>}
 */
export function fsRemoveDirectory(dirPath: string): Promise<void>;
/**
 * Remove directory and all contained files
 * @param {string} dirPath
 * @returns {Promise<void>}
 */
export function fsDeleteDirectory(dirPath: string): Promise<void>;
export function fsGetAssetItemFromFile(fullPath: string, scope?: string): BsAssetItem | null;
export function fsGetAssetItemForFileBlob(file: File, scope?: string, origin?: string): BsAssetItem | null;
export function fsGetAssetItemFromFileWithFileAndFolderCheck(fullPath: string): Promise<BsAssetItem | null>;
/** @deprecated renamed to fsGetAssetItemFromFileWithFileAndFolderCheck */
export const fsGetAssetItemFromFileWithSubFolderCheck: typeof fsGetAssetItemFromFileWithFileAndFolderCheck;
export function fsCheckFolderForSubFolders(dirPath: string): Promise<boolean>;
export function fsCheckFolderForFiles(dirPath: string): Promise<boolean>;
export function fsGetLocalAssetThumbnailFromFile(file: FileSpec): Promise<BsLocalAssetThumbnail>;

/**
 * @interface FsHtmlSiteFileSpec A specification of a web site file and its relative path within the web site structure.
 * @property file {string | BsAssetItem} - full local path to the file, or the BsAssetItem
 * @property destinationPath {string} - For index file, the destination path, if applicable, for the web site root
 *  For Html site assets, the relative path to the site root. If null, the root path is indicated.
 */
export interface FsHtmlSiteFileSpec {
    file: string | BsAssetItem;
    destinationPath: string | null;
}
/**
 * @interface FsHtmlSiteSessionFileSpec A specification of the files comprising entire web site.
 * @property indexFile {FsHtmlSiteFileSpec} - the site index (main) file. This is assumed to be in the site root.
 *  The destinationPath property in this object can be used for the destination path of the site in it's final
 *  location. If such a target destinationPath is not applicable, the destinationPath can be null.
 * @property assetFiles {FsHtmlSiteFileSpec[]} - A list of all asset (other) files required by the site.
 *  The destinationFPath property of each of these objects specifies the relative path to the asset files
 *  from the site root.
 */
export interface FsHtmlSiteSessionFileSpec {
    indexFile: FsHtmlSiteFileSpec;
    assetFiles: FsHtmlSiteFileSpec[];
}
/**
 * Return an object that specifies the files comprising a web site, given the path to the site index (main) file.
 * The assumption is that the site is comprised of the index file, all files in the same directory as the index file,
 *  and also all subdirectories and their contents. An object is returned (via a Promise) that specifies the
 *  paths and target relative directory for all site asset (additional) files.
 *
 * @param {string | BsAssetItem} indexFile - the full local filePath for the site index file
 * @param {string} destinationPath - if supported on the target storage system for the web site, this designates
 *  the target directory in which the site will be persisted
 * @returns {Promise<FsHtmlSiteSessionFileSpec>} The promise resolves with an object conforming tp
 *  FsHtmlSiteSessionFileSpec, which specifies the index files and all site asset files
 */
export function fsGetLocalHtmlSiteSessionSpecForIndexFile(indexFile: string | BsAssetItem, destinationPath?: string | null): Promise<FsHtmlSiteSessionFileSpec>;
/**
 * Return an object that implements the BsUploadWebPageSessionSpec interface for an Html Site on the local file system.
 *  The index file can specified with a string representing the local path or a BsAssetItem.
 *
 * @param siteName {string} - HTML Site name
 * @param indexFile {string | BsAssetItem} - If a string, the full local file path for the file. A BsAssetItem
 *  can also be used here.
 * @param [siteType=AssetType.HtmlSite] {AssetType} - type of the Html Site -
 *  one of {AssetType.HtmlSite, AssetType.DeviceHtmlSite}
 * @param [destinationPath] {string} - If supported, the target destination path for the Html Site.
 * @return {Promise<BsUploadWebPageSessionSpec | null>}
 */
export function fsGetUploadHtmlSiteSessionSpec(siteName: string, indexFile: string | BsAssetItem, siteType?: AssetType, destinationPath?: string | null): Promise<BsUploadWebPageSessionSpec | null>;

/**
 * Created by gostosh on 11/21/2017.
 */
export function fsGetProfileMap(): Promise<BsProfileEntity>;
export function fsCreateProfileValue(profileKey: string, profileValue: any): Promise<BsProfileEntity>;
export function fsUpdateProfileValue(profileKey: string, profileValue: any): Promise<void>;
export function fsDeleteProfileValue(profileKey: string): Promise<void>;
export function fsDeleteAllProfiles(): Promise<void>;
export function fsProfileCount(): Promise<number>;

/**
 * Created by gostosh on 1/28/18.
 */
export function fsGetLocalSystemScopeId(): string;

/**
 * Downsample image
 *
 * @param {FileSpec} image
 * @param {number| null} width - If width is null, this will be calculated proportionally basing on height.
 * @param {number| null} height - If height is null, this will be calculated proportionally basing on width.
 * @param {string} destinationPath
 * @returns {Promise<BsAssetLocator>}
 */
export function fsDownsampleImage(image: FileSpec, width: number | null, height: number | null, destinationPath: string): Promise<BsAssetLocator>;

/**
 * Created by gostosh on 1/28/18.
 */
export function fsUnzipLocalFiles(src: string, dest: string): Promise<string[]>;
export interface FsZipAsset {
    absoluteSrcPath: string;
    relativeDestPath: string;
}
export function fsCreateZipAsset(absoluteSrcPath: string, relativeDestPath: string): FsZipAsset;
export function fsZipLocalFiles(src: FsZipAsset[], dest: string): Promise<string>;
export function fsUnzipFileObjects(blob: Blob): Promise<File[]>;
export function fsZipFileObjects(src: File[]): Promise<Blob>;

/**
 * Return an object that implements the BsUploadFileSource interface for a file on either file system.
 *
 * @param file {FileSpec} - If a File, a File object. If a string, the full local file path for the file.
 *  A BsAssetItem can also be used here, and in some cases this will be more efficient.
 * @return {BsUploadFileSource}
 */
export function fsGetUploadFileSource(file: FileSpec): BsUploadFileSource | null;
/**
 * Return an object that implements the BsUploadFileSource interface for a file on the local file system.
 *  This object can be constructed either with a string representing the local path or a BsAssetItem.
 *
 * @param file {string | BsAssetItem} - If a string, the full local file path for the file. A BsAssetItem
 *  can also be used here, and in some cases this will be more efficient.
 * @return {BsUploadFileSource}
 */
export function fsGetUploadLocalFileSource(file: string | BsAssetItem): BsUploadFileSource | null;
export function fsGetUploadBufferFileSource(localFileBuffer: BsLocalFileBuffer): BsUploadFileSource | null;
export function fsGetUploadObjectFileSource(file: File): BsUploadFileSource | null;
/** Return base filename (with extension) for the file specified by the given FileSpec
 * @param file {FileSpec}
 * @returns {string}
 */
export function fsGetFileSpecBaseName(file: FileSpec): string;

/**
 * Generate a FileThumbnail for the given asset file. Asset file must be a video or an image file
 * @param assetItem {BsAssetItem} - asset item for which to generate thumbnail
 * @returns {Promise<BsLocalAssetThumbnail | null>} - returns a Promise. For video and supported image files,
 *  promise resolves with thumbnail object. For unsupported asset files, promise resolves with null.
 */
export function fsGetThumbnail(assetItem: BsAssetItem): Promise<BsLocalAssetThumbnail | null>;

/**
 * Created by jimsugg on 5/31/17.
 */
/**
 * Get EXIF metadata for given Image asset.
 * @param assetItem {BsAssetItem} - assetItem for which to return EXIF data - should be MediaType.Image
 * @returns {Promise<BsImageData | null>} - returns a Promise. For image files, promise resolves
 *  with ImageData object. For unsupported asset files, promise resolves with null.
 */
export function fsGetExifData(assetItem: BsAssetItem): Promise<BsImageData | null>;
/**
 * Get EXIF metadata for given Image asset at a given local path.
 * @param fullPath {string} - assetItem for which to return EXIF data - should be MediaType.Image
 * @returns {Promise<BsImageData | null>} - returns a Promise. For image files, promise resolves
 *  with ImageData object. For unsupported asset files, promise resolves with null.
 */
export function fsGetExifDataForPath(fullPath: string): Promise<BsImageData | null>;

export function fsParseProbeData(probData: string): Promise<ParsedProbeDataResult>;
export function fsGetFileProbeData(file: string | BsAssetItem): Promise<string>;
export function fsGetMediaFileMetadata(file: string | BsAssetItem): Promise<BsMediaFileData | {}>;
export function fsCanPlayFile(file: string | BsAssetItem, model: PlayerModel, timeSliceMode: ProbeContentResolutionType): Promise<ProbeCanPlayResult>;
export function fsCanPlayProbeData(probeData: string, model: PlayerModel, timeSliceMode: ProbeContentResolutionType): Promise<ProbeCanPlayResult>;
export function fsGetDecoderName(model: PlayerModel, index: number): Promise<DecoderName>;
export function fsGetDecoderTimeSliceMaxCount(model: PlayerModel, index: number, timeSliceMode: ProbeContentResolutionType): Promise<number>;

export interface FsMediaLegalityCheckEntity {
    file: string | BsAssetItem;
    model?: PlayerModel;
    videoMode?: VideoMode;
    fullResGraphics?: boolean;
}
export function fsGetIsMediaLegal(legalityCheckEntity: FsMediaLegalityCheckEntity): Promise<MediaLegalityResults>;

/**
 * Terminate all child processes running in the worker process pool.
 * This must be called before shutdown to allow the main process to be closed.
 * @return {Promise<void>} promise resolves when connectorPool processes have been closed
 */
export function fsCloseConnectorPool(): Promise<void>;

/**
 * Created by jimsugg on 7/3/17.
 */
export enum FsErrorType {
    unknownError = 0,
    fsNotAvailableError = 1,
    invalidParameters = 2,
    fileNotFoundError = 3,
    fsMetadataNotFoundError = 4,
    fsOpenError = 5,
    fsReadError = 6,
    fsWriteError = 7,
    fsDeleteError = 8
}
export class FsError extends Error {
    name: string;
    type: FsErrorType;
    constructor(type: FsErrorType, reason?: string);
}
