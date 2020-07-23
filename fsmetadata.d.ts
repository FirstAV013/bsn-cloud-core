/* tslint:disable:quotemark max-line-length trailing-comma */
import {BsAssetItem, BsLocalAssetThumbnail, BsAssetLocator, BsImageData, ParsedProbeDataResult, ProbeDataResult, PlayerModel, ProbeContentResolutionType, ProbeCanPlayResult, DecoderName, BsSize} from './bscore';
/**
 * Generate a FileThumbnail for the given asset file. Asset file must be a video or an image file.
 *  This function is fully executed on the current thread and therefore will block the a single threaded app.
 *  This function should not be executed in a child process because BsLocalAssetThumbnail cannot be serialized.
 * @param assetItem {BsAssetItem} - asset item for which to generate thumbnail
 * @returns {Promise<BsLocalAssetThumbnail | null>} - returns a Promise. For video and supported image files,
 *  promise resolves with thumbnail object. For unsupported asset files, promise resolves with null.
 */
export function getThumbnail(assetItem: BsAssetItem): Promise<BsLocalAssetThumbnail | null>;
/**
 * Return SHA1 hash for given file
 * @param fullPath {string} - path to file
 * @returns {Promise<string>} returns a Promise that resolves to the hash value
 */
export function getFileSha1(fullPath: string): Promise<string>;

/**
 * Downsample an image file to the destination path.
 *
 * @param fullPath {string}
 * @param width {string | null}
 * @param height {string | null}
 * @param destinationPath {string}
 */
export function downsampleImage(fullPath: string, width: string | null, height: string | null, destinationPath: string): Promise<BsAssetLocator>;

/**
 * Get EXIF metadata for given Image asset.
 * @param assetItem - assetItem for which to return EXIF data - should be MediaType.Image
 * @returns {Promise<BsImageData>} - returns a Promise. For image files, promise resolves
 *  with ImageData object. For unsupported asset files, promise resolves with null.
 */
export function getAssetExifData(assetItem: BsAssetItem): Promise<BsImageData | null>;

export function parseProbeString(probeString: string): ParsedProbeDataResult;
export function getFileProbeData(filePath: string): ProbeDataResult;
export function canPlayFile(filePath: string, model: PlayerModel, timeSliceMode: ProbeContentResolutionType): ProbeCanPlayResult;
export function canPlayProbeData(probeData: string, model: PlayerModel, timeSliceMode: ProbeContentResolutionType): ProbeCanPlayResult;
export function getDecoderName(model: PlayerModel, index: number): DecoderName;
export function getDecoderTimeSliceMaxCount(model: PlayerModel, index: number, timeSliceMode: ProbeContentResolutionType): number;

/**
 * Interface for an object containing thumbnail image data to be returned via IPC to another process.
 * The thumbnail is generated for a media file on the local file system.
 *
 * @interface AssetThumbnailResponse
 * @property type {string} - MIME type string for thumbnail (e.g., 'image/jpeg', 'image/png')
 * @property data {string} - Base64 encoded byte array containing thumbnail data
 * @property [size] {BsSize} - resolution of thumbnail, in pixels
 * @property [hash] {string} - SHA1 hash of binary thumbnail data
 */
export interface AssetThumbnailResponse {
    type: string | null;
    data?: string;
    size?: BsSize;
    hash?: string;
}
/**
 * Generate a FileThumbnail for the given image file.
 *  This function is intended to be executed in a child process. It is invoked by sending a 'getImageThumbnail'
 *  message to the Pool.exec of a workerpool.
 * @param fullPath {string} - path to image file for which to generate thumbnail
 * @returns {Promise<AssetThumbnailResponse | null>} returns a Promise.
 *  For supported image files, promise resolves with thumbnailResponse object.
 *  Thumbnail data is base64 encoded to allow serialization.
 *  If file does not exist or is not a supported image, promise resolves with null.
 */
export function getImageThumbnail(fullPath: string): Promise<AssetThumbnailResponse>;
/**
 * Generate a FileThumbnail for the given video file.
 *  This function is intended to be executed in a child process. It is invoked by sending a 'getVideoThumbnail'
 *  message to the Pool.exec of a workerpool.
 * @param fullPath {string} - path to image file for which to generate thumbnail
 * @returns {Promise<AssetThumbnailResponse | null>} returns a Promise.
 *  For supported video files, promise resolves with thumbnailResponse object.
 *  Thumbnail data is base64 encoded to allow serialization.
 *  If file does not exist or is not a supported video file, promise resolves with null.
 */
export function getVideoThumbnail(fullPath: string, ffmpegPath?: string): Promise<AssetThumbnailResponse>;
export function getDownsampledImage(fullPath: string, width: string | null, height: string | null, destinationPath: string): Promise<BsAssetLocator>;
