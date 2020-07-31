/** @module Core:player */
export class PlayerFamily {
    static Unknown: string;
    static Malibu: string;
    static Pagani: string;
    static Impala: string;
    static Pantera: string;
    static Tiger: string;
    static Sebring: string;
    static Lynx: string;
    static Bobcat: string;
    static Cheetah: string;
    static Panther: string;
    static Puma: string;
    static Monaco: string;
}
export type PlayerFamilyName = keyof (PlayerFamily);
export class PlayerMachineNameSuffix {
    static SingleDecoder: string;
    static No4K: string;
}
export class PlayerModel {
    static Unknown: string;
    static XD1034: string;
    static XD234: string;
    static XT1144: string;
    static XT244: string;
    static HD1024: string;
    static HD224: string;
    static HS144: string;
    static LS424: string;
    static HS124: string;
    static XD1033: string;
    static XD233: string;
    static XT1043: string;
    static XT1143: string;
    static XT243: string;
    static HD1023: string;
    static HD223: string;
    static HS123: string;
    static HO523: string;
    static LS423: string;
    static FK1142: string;
    static FK1042: string;
    static FK242: string;
    static AU325: string;
    static AU335: string;
    static XD1132: string;
    static XD1032: string;
    static XD232: string;
    static HD1022: string;
    static HD222: string;
    static HD972: string;
    static HD922: string;
    static XD1230: string;
    static XD1030: string;
    static XD230: string;
    static HD1020: string;
    static HD220: string;
    static HD120: string;
    static LS422: string;
    static LS322: string;
    static AU320: string;
    static HD970: string;
    static HD920: string;
    static A915: string;
    static HD917: string;
    static HD210: string;
    static HD1010: string;
    static TD1012: string;
}
export const MalibuModels: Set<PlayerModel>;
export const PaganiModels: Set<PlayerModel>;
export const PaganiHDModels: Set<PlayerModel>;
export const ImpalaModels: Set<PlayerModel>;
export const PanteraModels: Set<PlayerModel>;
export const TigerModels: Set<PlayerModel>;
export const SebringModels: Set<PlayerModel>;
export const LynxModels: Set<PlayerModel>;
export const BobcatModels: Set<PlayerModel>;
export const CheetahModels: Set<PlayerModel>;
export const PantherModels: Set<PlayerModel>;
export const PumaModels: Set<PlayerModel>;
export const MonacoModels: Set<PlayerModel>;
export const Series4Models: Set<PlayerModel>;
export const Series3Models: Set<PlayerModel>;
export const Series2Models: Set<PlayerModel>;
export const AllModels: Set<PlayerModel>;
/**
 * Given a serial number, return PlayerFamily (firmware code name).
 * @param {string} serialNumber
 * @returns {PlayerFamily | null} null is returned if the PlayerFamily is not recognized
 */
export function bscSerialToPlayerFamily(serialNumber: string): PlayerFamily | null;
/**
 * Given a PlayerModel, return the PlayerFamily to which the model belongs.
 * @param model
 */
export function bscPlayerModelToPlayerFamily(model: PlayerModel): PlayerFamily;
/**
 * Given a PlayerModel, return the firmware key string used by BSN to designate the
 *  firmware required for players of the given model.
 * Return null if given model is not supported for firmware selection.
 * @param model
 */
export function bscGetBsnFirmwareKeyForPlayerModel(model: PlayerModel): string | null;

/** @module Core:playerFeature */
export class ModelFeature {
    static Gpio: string;
    static Networking: string;
    static SingleAnalogVolumeLimitation: string;
    static Hdmi: string;
    static HdmiEArc: string;
    static VideoStreaming: string;
    static AudioStreaming: string;
    static AudioMixer: string;
    static Audio: string;
    static EnhancedAudio: string;
    static Images: string;
    static Video: string;
    static Clock: string;
    static GraphicsZOrdering: string;
    static VideoZOrdering: string;
    static Html5: string;
    static Html5Camera: string;
    static AudioOutputControl: string;
    static Spdif: string;
    static IrOut: string;
    static Usb: string;
    static Bp: string;
    static Serial: string;
    static Blc400: string;
    static HdmiIn: string;
    static EnhancedSynchronization: string;
    static Pronto: string;
    static ScrollingTicker: string;
    static TenBitColor: string;
    static FourKImages: string;
    static FullResGraphics: string;
    static FullResGraphicsHiFR: string;
    static DualDecoder: string;
    static MosaicMode: string;
    static Bluetooth: string;
    static AudioConfiguration: string;
    static DedicatedIr: string;
    static DolbyVision: string;
    static UsbTap: string;
    static ButtonsByGpio: string;
    static LightsByGpio: string;
    static BroadcomSupport: string;
    static RfTuner: string;
    static AudioDetect: string;
    static ExternalAudioDetect: string;
    static SingleOnBoardAnalogChannel: string;
    static ThreeOnBoardAnalogChannels: string;
    static UsbAudio: string;
    static PumaUsbAudio: string;
    static BoseUsb: string;
    static AudioIn: string;
    static AudioDownMix: string;
}
export function bscPlayerModelHasFeature(model: PlayerModel, feature: ModelFeature): boolean;
export function bscPlayerModelToPlayerMachineName(model: PlayerModel): string;

/** @module Core:playerCapability */
export interface PlayerCapabilities {
    videoDecoderCount: number;
    videoDecoder4kCount: number;
    videoPlaneCount: number;
    maxImageSize: BsSize;
    maxVideoSize: BsSize;
    maxVideoContentResolution: ProbeContentResolutionType;
    audioDecoderCount: number;
    usbConnectorNames: UsbConnectorName[];
}
export function bscGetPlayerCapabilities(model: PlayerModel): PlayerCapabilities;

/** @module Core:video */
/**
 * @enum VideoResolution
 */
export class VideoResolution {
    static v4096x2160: string;
    static v3840x2160: string;
    static v3840x1080: string;
    static v3840x600: string;
    static v3440x1440: string;
    static v2560x1600: string;
    static v2560x1440: string;
    static v2560x1080: string;
    static v2560x960: string;
    static v2376x288: string;
    static v2048x1152: string;
    static v1920x1920: string;
    static v1920x1200: string;
    static v1920x1080: string;
    static v1920x540: string;
    static v1792x1344: string;
    static v1680x1050: string;
    static v1600x1200: string;
    static v1600x900: string;
    static v1440x1088: string;
    static v1440x1080: string;
    static v1440x900: string;
    static v1400x1050: string;
    static v1366x768: string;
    static v1360x768: string;
    static v1280x1024: string;
    static v1280x960: string;
    static v1280x800: string;
    static v1280x768: string;
    static v1280x720: string;
    static v1200x1920: string;
    static v1024x768: string;
    static v960x960: string;
    static v848x480: string;
    static v800x1280: string;
    static v800x600: string;
    static v720x576: string;
    static v720x480: string;
    static v640x480: string;
    static vNtscComponent: string;
    static vNtscM: string;
    static vNtscMJpn: string;
    static vPalComponent: string;
    static vPalI: string;
    static vPalBG: string;
    static vPalN: string;
    static vPalNC: string;
    static vPalM: string;
    static vSecam: string;
    static None: string;
}
/**
 * @enum VideoFrameRate
 */
export class VideoFrameRate {
    static r75p: string;
    static r60p: string;
    static r59p: string;
    static r57p: string;
    static r50p: string;
    static r30p: string;
    static r29p: string;
    static r25p: string;
    static r24p: string;
    static r23p: string;
    static r60i: string;
    static r59i: string;
    static r50i: string;
    static None: string;
}
/**
 * @enum VideoMode
 */
export class VideoMode {
    static v4096x2160x60p: string;
    static v4096x2160x59p: string;
    static v4096x2160x50p: string;
    static v4096x2160x30p: string;
    static v4096x2160x29p: string;
    static v4096x2160x25p: string;
    static v4096x2160x24p: string;
    static v4096x2160x23p: string;
    static v3840x2160x60p: string;
    static v3840x2160x59p: string;
    static v3840x2160x50p: string;
    static v3840x2160x30p: string;
    static v3840x2160x29p: string;
    static v3840x2160x25p: string;
    static v3840x2160x24p: string;
    static v3840x2160x23p: string;
    static v3840x1080x60p: string;
    static v3840x1080x50p: string;
    static v3840x1080x30p: string;
    static v3840x1080x25p: string;
    static v3840x600x60p: string;
    static v3440x1440x60p: string;
    static v3440x1440x50p: string;
    static v3440x1440x30p: string;
    static v2560x1600x60p: string;
    static v2560x1440x60p: string;
    static v2560x1440x30p: string;
    static v2560x1080x60p: string;
    static v2560x960x60p: string;
    static v2376x288x60p: string;
    static v2048x1152x60p: string;
    static v1920x1920x60p: string;
    static v1920x1200x60p: string;
    static v1920x1200x50p: string;
    static v1920x1080x60p: string;
    static v1920x1080x59p: string;
    static v1920x1080x50p: string;
    static v1920x1080x30p: string;
    static v1920x1080x29p: string;
    static v1920x1080x25p: string;
    static v1920x1080x24p: string;
    static v1920x1080x23p: string;
    static v1920x1080x60i: string;
    static v1920x1080x59i: string;
    static v1920x1080x50i: string;
    static v1920x540x60p: string;
    static v1792x1344x60p: string;
    static v1680x1050x60p: string;
    static v1600x1200x60p: string;
    static v1600x900x60p: string;
    static v1440x1088x57p: string;
    static v1440x1080x60p: string;
    static v1440x900x75p: string;
    static v1440x900x60p: string;
    static v1400x1050x75p: string;
    static v1400x1050x60p: string;
    static v1366x768x60p: string;
    static v1360x768x60p: string;
    static v1280x1024x75p: string;
    static v1280x1024x60p: string;
    static v1280x960x60p: string;
    static v1280x800x75p: string;
    static v1280x800x60p: string;
    static v1280x768x60p: string;
    static v1280x720x60p: string;
    static v1280x720x59p: string;
    static v1280x720x50p: string;
    static v1280x720x25p: string;
    static v1280x720x24p: string;
    static v1280x720x23p: string;
    static v1200x1920x60p: string;
    static v1024x768x75p: string;
    static v1024x768x60p: string;
    static v960x960x60p: string;
    static v848x480x60p: string;
    static v800x1280x60p: string;
    static v800x600x75p: string;
    static v800x600x60p: string;
    static v720x576x50p: string;
    static v720x576x50i: string;
    static v720x480x60p: string;
    static v720x480x59p: string;
    static v720x480x60i: string;
    static v640x480x60p: string;
    static vNtscComponent: string;
    static vNtscM: string;
    static vNtscMJpn: string;
    static vPalComponent: string;
    static vPalI: string;
    static vPalBG: string;
    static vPalN: string;
    static vPalNC: string;
    static vPalM: string;
    static vSecam: string;
    static None: string;
}
/**
 * An object containing a {@link VideoResolution} value with a list of all supported {@link VideoFrameRate} values
 *  supported for that resolution on a given player.
 * A {@link PlayerVideoModeSpec} is a list of these objects, which specifies all resolutions
 *  available for a player model, and the associated available frame rates for each of those resolutions.
 * @interface VideoResolutionAndFrameRates
 * @property resolution {VideoResolution} - the video resolution for this entry
 * @property availableRates {VideoFrameRate[]} - a list of available frame rates for the video resolution
 */
export interface VideoResolutionAndFrameRates {
    resolution: VideoResolution;
    availableRates: VideoFrameRate[];
}
/**
 * Return VideoMode enum value corresponding to given resolution and frame rate
 *
 * @param resolution {VideoResolution} - resolution enum value
 * @param frameRate {VideoFrameRate} - frame rate enum value
 * @returns {VideoMode} corresponding VideoMode enum value
 */
export function bscGetVideoMode(resolution: VideoResolution, frameRate: VideoFrameRate): VideoMode;
/**
 * List of {@link VideoResolutionAndFrameRates} records available for a given player model.
 * For some players there will be different VideoModeSpecs for different video connectors.
 */
export type PlayerVideoModeSpec = VideoResolutionAndFrameRates[];
/**
 * @const FourKVideoModeSpec {PlayerVideoModeSpec}
 * Array of (@link VideoResolutionAndFrameRates} objects for HDMI connector
 *  on Malibu, Pagani, Impala, and Tiger players.
 * These specifications are based on https://docs.brightsign.biz/display/DOC/Supported+Video+Modes.
 */
export const FourKVideoModeSpec: PlayerVideoModeSpec;
/**
 * @const PanteraVideoModeSpec {PlayerVideoModeSpec}
 * Array of (@link VideoResolutionAndFrameRates} objects for HDMI connector on Pantera and PaganiHD players
 * These specifications are based on https://docs.brightsign.biz/display/DOC/Supported+Video+Modes.
 */
export const PanteraVideoModeSpec: PlayerVideoModeSpec;
/**
 * @const LynxHdmiVideoModeSpec {PlayerVideoModeSpec}
 * Array of (@link VideoResolutionAndFrameRates} objects for HDMI connector on Lynx players
 * These specifications are based on https://docs.brightsign.biz/display/DOC/Supported+Video+Modes.
 */
export const LynxHdmiVideoModeSpec: PlayerVideoModeSpec;
/**
 * @const LynxComponentVideoModeSpec {PlayerVideoModeSpec}
 * Array of (@link VideoResolutionAndFrameRates} objects for Component connector on Lynx players
 * These specifications are based on https://docs.brightsign.biz/display/DOC/Supported+Video+Modes.
 */
export const LynxComponentVideoModeSpec: PlayerVideoModeSpec;
/**
 * @const LynxVgaVideoModeSpec {PlayerVideoModeSpec}
 * Array of (@link VideoResolutionAndFrameRates} objects for VGA connector on Lynx players
 * These specifications are based on https://docs.brightsign.biz/display/DOC/Supported+Video+Modes.
 */
export const LynxVgaVideoModeSpec: PlayerVideoModeSpec;
/**
 * @const BobcatHdmiVideoModeSpec {PlayerVideoModeSpec}
 * Array of (@link VideoResolutionAndFrameRates} objects for HDMI connector on Bobcat players
 * These specifications are based on https://docs.brightsign.biz/display/DOC/Supported+Video+Modes.
 */
export const BobcatHdmiVideoModeSpec: PlayerVideoModeSpec;
/**
 * @const BobcatComponentVideoModeSpec {PlayerVideoModeSpec}
 * Array of (@link VideoResolutionAndFrameRates} objects for Component connector on Bobcat players
 * These specifications are based on https://docs.brightsign.biz/display/DOC/Supported+Video+Modes.
 */
export const BobcatComponentVideoModeSpec: PlayerVideoModeSpec;
/**
 * @const BobcatVgaVideoModeSpec {PlayerVideoModeSpec}
 * Array of (@link VideoResolutionAndFrameRates} objects for VGA connector on Bobcat players
 * These specifications are based on https://docs.brightsign.biz/display/DOC/Supported+Video+Modes.
 */
export const BobcatVgaVideoModeSpec: PlayerVideoModeSpec;
/**
 * @const AllVideoConnectorTypeSpec {VideoConnectorType[]}
 * Array of (@link VideoConnectorType}
 */
export const AllVideoConnectorTypeSpec: VideoConnectorType[];
/**
 * @const HdmiVideoConnectorTypeSpec {VideoConnectorType[]}
 * Array of (@link VideoConnectorType}
 */
export const HdmiVideoConnectorTypeSpec: VideoConnectorType[];
/**
 * Get VideoConnectorType array for given playerModel.
 *
 * @param model {PlayerModel}
 * @returns {VideoConnectorType[] | null} return null if model is invalid or has no connectors
 */
export function bscGetPlayerVideoConnectorTypes(model: PlayerModel): VideoConnectorType[] | null;
/**
 * Return true if given connector type is valid for given playerModel.
 *
 * @param model {PlayerModel}
 * @param connectorType {VideoConnectorType}
 * @returns {boolean}
 */
export function bscIsValidConnectorType(model: PlayerModel, connectorType: VideoConnectorType): boolean;
/**
 * Get PlayerVideoModeSpec array for given playerModel and videoConnectorType.
 *
 * @param model {PlayerModel}
 * @param connectorType {VideoConnectorType}
 * @returns {PlayerVideoModeSpec | null} return null if model or connectorType is invalid or not supported
 */
export function bscGetPlayerVideoModeSpecs(model: PlayerModel, connectorType: VideoConnectorType): PlayerVideoModeSpec | null;
/**
 * Get array of available frame rates for given playerModel, videoConnectorType, and videoResolution.
 *
 * @param model {PlayerModel}
 * @param connectorType {VideoConnectorType}
 * @param resolution {VideoResolution}
 * @returns {VideoFrameRate[]} return null if model, connectorType, or resolution is invalid or not supported
 */
export function bscGetFrameRates(model: PlayerModel, connectorType: VideoConnectorType, resolution: VideoResolution): VideoFrameRate[] | null;
/**
 * Return true if given resolution is valid for given playerModel and videoConnectorType.
 * @param model {PlayerModel}
 * @param connectorType {VideoConnectorType}
 * @param resolution {VideoResolution}
 * @returns {boolean}
 */
export function bscIsValidResolution(model: PlayerModel, connectorType: VideoConnectorType, resolution: VideoResolution): boolean;
/**
 * Return true if given frame rate is valid  for given playerModel, videoConnectorType, and videoResolution.
 *
 * @param model {PlayerModel}
 * @param connectorType {VideoConnectorType}
 * @param resolution {VideoResolution}
 * @param frameRate {VideoFrameRate}
 * @returns {boolean}
 */
export function bscIsValidFrameRate(model: PlayerModel, connectorType: VideoConnectorType, resolution: VideoResolution, frameRate: VideoFrameRate): boolean;
/**
 * @interface VideoModeComponents - video attributes (size, frame rate, interlaced) expressed as scalar data types.
 *  @property width {number} - video width in pixels
 *  @property height {number} - video height in pixels
 *  @property frameRate {number} - video frame rate in frames or fields per second
 *  @property interlaced {boolean} - true if video consists of interlaced fields
 */
export interface VideoModeComponents {
    width: number;
    height: number;
    frameRate: number;
    interlaced: boolean;
}
/**
 * Return video attributes (size, frame rate, interlaced) for a given VideoMode expressed
 *  as scalar data types.
 *
 * @param mode {VideoMode}
 * @returns {VideoModeComponents} - video attributes for the given mode
 */
export function bscParseVideoModeComponents(mode: VideoMode): VideoModeComponents;
/**
 * @interface VideoModeResolutionAndRate - simple object to return resolution and frame rate
 *
 * @property resolution {VideoResolution}
 * @property frameRate {VideoFrameRate}
 */
export interface VideoModeResolutionAndRate {
    resolution: VideoResolution;
    frameRate: VideoFrameRate;
}
/**
 * Return separate VideoResolution and VideoFrameRate for given VideoMode.
 *
 * @param mode {VideoMode}
 * @returns {VideoModeResolutionAndRate | null} return null if videoMode is invalid or not supported
 */
export function bscParseVideoModeResolutionAndRate(mode: VideoMode): VideoModeResolutionAndRate | null;
/**
 * Return true if the videoResolution for the given VideoMode is HD resolution or smaller.
 * @param mode
 */
export function bscIsHDVideoResolutionOrSmaller(mode: VideoMode): boolean;
/**
 * Return true if PlayerModel and given VideoMode supports high-resolution graphics.
 * @param model {PlayerModel}
 * @param videoMode {VideoMode}
 * @
 */
export function bscIsFullResGraphicsSupported(model: PlayerModel, videoMode: VideoMode): boolean;
/**
 * Return graphics resolution size for a given videoMode and state of fullResGraphics boolean.
 * @param mode {VideoMode}
 * @param fullResGraphics {boolean} - true if fullResolution graphics is enabled
 * @returns {BsSize}
 */
export function bscGetGraphicsResolution(mode: VideoMode, fullResGraphics: boolean): BsSize;
/**
 * Given a VideoMode and an indication of whether or not fullResolution graphics is enabled, scale the
 *  given rectangle to coordinates that are based on the full size VideoMode.
 * This is necessary because, if fullResGraphics is not enabled, rectangles are scaled to a coordinate
 *  system that is half the size of the full resolution.
 * This function performs the reverse scaling, when necessary.
 * Note also that this function will alter only absolute (not relative) rectangles.
 * @param rect {BsRect} - input rectangle, in possible scaled coordinates (if !fullResGraphics)
 * @param mode {VideoMode}
 * @param fullResGraphics {boolean} - true if fullResolution graphics is enabled
 * @returns {BsSize}
 */
export function bscScaleRectangleToFullResolutionCoordinates(rect: BsRect, mode: VideoMode, fullResGraphics: boolean): BsRect;
/**
 * Given a VideoMode and an indication of whether or not fullResolution graphics is enabled, scale the
 *  given rectangle to coordinates that are based on the graphics resolution. This will be half the
 *  full size resolution for 4K if fullResGraphics is not enabled.
 * This function will alter only absolute (not relative) rectangles.
 * @param rect {BsRect} - input rectangle, in full resolution coordinates
 * @param mode {VideoMode}
 * @param fullResGraphics {boolean} - true if fullResolution graphics is enabled
 * @returns {BsSize}
 */
export function bscScaleRectangleFromFullResolutionCoordinates(rect: BsRect, mode: VideoMode, fullResGraphics: boolean): BsRect;
/**
 * Return true if the given VideoMode and 'fullResGraphics' state indicate that graphics scaling is necessary, i.e.,
 *  that graphics coordinates need to be scaled to half full size coordinates.
 * @param mode
 * @param fullResGraphics
 */
export function bscIsFullResGraphicScalingNeeded(mode: VideoMode, fullResGraphics: boolean): boolean;

/** @module Core:meta */
/**
 *  Specifies the type of media in a content file.
 * @enum {string} MediaType
 * @property Video
 * @property Audio
 * @property Image
 * @property Text
 * @property Font
 * @property Css
 * @property Auxiliary
 * @property Other
 */
export class MediaType {
    static Video: string;
    static Audio: string;
    static Image: string;
    static Text: string;
    static Font: string;
    static Css: string;
    static Auxiliary: string;
    static Other: string;
}
/**
 * Set of all mediaType values representing files that can be played on a player. This excludes 'accessory'
 *  mediaTypes Font, Css, and Auxiliary ('other') files.
 */
export const PlayableMediaTypes: Set<MediaType>;
/**
 *  Specifies type of a ContentItem.
 * @enum {string} ContentItemType
 * @property Video
 * @property Image
 * @property Audio
 * @property Html
 * @property LiveVideo
 * @property DataFeed
 * @property MrssFeed
 * @property TwitterFeed
 * @property Text
 * @property UserVariable
 * @property VideoStream
 * @property AudioStream
 * @property Clock
 * @property EventHandler
 * @property PlayFile
 * @property MediaList
 * @property LiveText
 * @property SuperState
 * @property Invalid - denotes an invalid ContentType
 */
export class ContentItemType {
    static Video: string;
    static Image: string;
    static Audio: string;
    static Html: string;
    static LiveVideo: string;
    static DataFeed: string;
    static MrssFeed: string;
    static TwitterFeed: string;
    static Text: string;
    static UserVariable: string;
    static VideoStream: string;
    static AudioStream: string;
    static MjpegStream: string;
    static Time: string;
    static Date: string;
    static EventHandler: string;
    static PlayFile: string;
    static MediaList: string;
    static LiveText: string;
    static SuperState: string;
    static Invalid: string;
}
/**
 * Return ContentItemType for a given MediaType.
 * @param type {MediaType}
 * @returns {ContentItemType}
 */
export function bscGetContentItemTypeForMediaType(type: MediaType): ContentItemType;
/**
 *  Specifies zone type.
 * @enum {string} ZoneType
 * @property VideoOrImages
 * @property VideoOnly
 * @property Images
 * @property AudioOnly
 * @property EnhancedAudio
 * @property Ticker
 * @property Clock
 * @property BackgroundImage
 * @property Control
 */
export class ZoneType {
    static VideoOrImages: string;
    static VideoOnly: string;
    static Images: string;
    static AudioOnly: string;
    static EnhancedAudio: string;
    static Ticker: string;
    static Clock: string;
    static BackgroundImage: string;
    static Control: string;
}
/**
 *  Specifies ZoneLayer type.
 * @enum {string} ZoneLayer
 * @property Video
 * @property Audio
 * @property Images
 * @property Invisible
 */
export class ZoneLayerType {
    static Video: string;
    static Audio: string;
    static Graphics: string;
    static Invisible: string;
}
/**
 *  Specifies VideoZoneLayer type.
 * @enum {string} VideoZoneLayer
 * @property FourK
 * @property HD
 */
export class VideoZoneLayerType {
    static FourK: string;
    static HD: string;
}
export class VideoDecoderMode {
    static Regular: string;
    static Mosaic: string;
}
export class VideoDecoderName {
    static FourKFirstDecoder: string;
    static FourKSecondDecoder: string;
    static HDDecoder: string;
}
export class VideoDecoderSize {
    static FourK: string;
    static HD: string;
}
/**
 * Specifies the type of video connector - this is normally used to specify the video output
 *  connector for a presentation.
 * @enum {string} VideoConnectorType
 * @property Hdmi
 * @property Vga
 * @property Component
 * @property None
 */
export class VideoConnectorType {
    static Hdmi: string;
    static Vga: string;
    static Component: string;
    static None: string;
}
/**
 *  Specifies monitor orientation.
 * @enum {string} MonitorOrientationType
 * @property Landscape
 * @property PortraitBottomLeft - 'normal' portrait mode
 * @property PortraitBottomRight - used for some BrightWall configurations
 * @property None - video not supported
 */
export class MonitorOrientationType {
    static Landscape: string;
    static PortraitBottomLeft: string;
    static PortraitBottomRight: string;
    static None: string;
}
/**
 *  Specifies monitor overscan.
 * @enum {string} MonitorOverscanType
 * @property NoOverscan
 * @property OverscanActionSafeArea
 * @property OverscanTitleSafeArea
 */
export class MonitorOverscanType {
    static NoOverscan: string;
    static OverscanActionSafeArea: string;
    static OverscanTitleSafeArea: string;
}
/**
 *  Specifies the device web page type.
 * @enum {string} DeviceWebPageDisplay
 * @property None - no device web page is made available
 * @property Standard - the standard device web page (with user variables) is displayed
 * @property Custom - the presentation specifies a custom device web page
 */
export class DeviceWebPageDisplay {
    static None: string;
    static Standard: string;
    static Custom: string;
}
/**
 *  Specifies the cursor display mode for a touch enabled monitor.
 * @enum {string} TouchCursorDisplayModeType
 * @property Disabled - no cursor is shown
 * @property Auto - the cursor is always displayed
 * @property Display - the cursor display is determined automatically
 */
export class TouchCursorDisplayModeType {
    static Disabled: string;
    static Auto: string;
    static Display: string;
}
/**
 *  Specifies the position of the graphics plane in relation to the video plane(s).
 * @enum {string} GraphicsZOrderType
 * @property Back - the graphics plane is behind the video plane(s)
 * @property Middle - the graphics plane is between the video plane(s)
 * @property Front - the graphics plane is in front of the video plane(s)
 */
export class GraphicsZOrderType {
    static Back: string;
    static Middle: string;
    static Front: string;
}
/**
 *  Specifies the address format of the given UDP address, which is a separate metadata string.
 * @enum {string} UdpAddressType
 * @property IPAddress
 * @property LocalSubnet
 * @property Ethernet
 * @property Wireless
 */
export class UdpAddressType {
    static IPAddress: string;
    static LocalSubnet: string;
    static Ethernet: string;
    static Wireless: string;
}
/**
 *  Specifies the language for the presentation. String values for this type are the full language name string,
 *   which matches the name string.
 * @enum {string} LanguageType
 * @property English - 'English'
 * @property French - 'French'
 * @property German - 'German'
 * @property Spanish - 'Spanish'
 * @property Italian - 'Italian'
 * @property Dutch - 'Dutch'
 * @property Swedish - 'Swedish'
 */
export class LanguageType {
    static English: string;
    static French: string;
    static German: string;
    static Spanish: string;
    static Italian: string;
    static Dutch: string;
    static Swedish: string;
}
/**
 *  Specifies the language for the presentation, for use where the three letter language key is required.
 *  String values for this type are the three letter language code.
 * @enum {string} LanguageKeyType
 * @property English - 'eng'
 * @property French - 'fre'
 * @property German - 'ger'
 * @property Spanish - 'spa'
 * @property Italian - 'ita'
 * @property Dutch - 'dut'
 * @property Swedish - 'swe'
 */
export class LanguageKeyType {
    static English: string;
    static French: string;
    static German: string;
    static Spanish: string;
    static Italian: string;
    static Dutch: string;
    static Swedish: string;
}
/**
 *  Specifies view mode for Video content.
 * @enum {string} ViewModeType
 * @property ScaleToFill - 'Scale to Fill' - video is scaled to completely fill screen, some video might be hidden
 * @property Letterboxed - 'Letterboxed and Centered'
 * @property FillAndCenter - 'Fill Screen and Centered'
 */
export class ViewModeType {
    static ScaleToFill: string;
    static Letterboxed: string;
    static FillAndCenter: string;
}
/**
 *  Specifies image mode for Image content.
 * @enum {string} ImageModeType
 * @property CenterImage - 'Center Image' - image is centered using original pixel size (no scaling)
 * @property ScaleToFit - 'Scale to Fit' - image is scaled such that one dimension completely fills screen
 * @property FillAndCrop - 'Scale to Fill and Crop' - image is scaled to completely fill screen -
 *  parts of image may be cropped
 * @property ScaleToFill - 'Scale to Fill' - image is scaled to fill screen - aspect ratio may not be maintained
 */
export class ImageModeType {
    static CenterImage: string;
    static ScaleToFit: string;
    static FillAndCrop: string;
    static ScaleToFill: string;
}
/**
 * Specifies the color space of an image.
 * @enum {string} ColorSpaceType
 * @property Unknown
 * @property RGB
 * @property CMYK
 */
export class ColorSpaceType {
    static Unknown: string;
    static CMY: string;
    static CMYK: string;
    static Gray: string;
    static HCL: string;
    static HCLp: string;
    static HSB: string;
    static HSI: string;
    static HSL: string;
    static HSV: string;
    static HWB: string;
    static Lab: string;
    static LCH: string;
    static LCHab: string;
    static LCHuv: string;
    static Log: string;
    static LMS: string;
    static Luv: string;
    static OHTA: string;
    static Rec601YCbCr: string;
    static Rec709YCbCr: string;
    static RGB: string;
    static scRGB: string;
    static sRGB: string;
    static Transparent: string;
    static XyV: string;
    static XYZ: string;
    static YCbCr: string;
    static YCC: string;
    static YDbDr: string;
    static YIQ: string;
    static YPbPr: string;
    static YUV: string;
    static LinearGray: string;
}
/**
 * Specifies the orientation value of an image.
 * For a good visualization, see https://www.impulseadventure.com/photo/exif-orientation.html.
 * @enum {string} ImageOrientationType
 * @property Unknown
 * @property TopLeft (EXIF value 1 - normal)
 * @property TopRight (EXIF value 2 - reversed but not rotated)
 * @property BottomRight (EXIF value 3 - upside down)
 * @property BottomLeft (EXIF value 4 - reversed upside down)
 * @property LeftTop (EXIF value 5 - reversed, rotated -90)
 * @property RightTop (EXIF value 6 - rotated -90)
 * @property RightBottom (EXIF value 7 - reversed, rotated +90)
 * @property LeftBottom (EXIF value 8 - rotated +90)
 */
export class ImageOrientationType {
    static Undefined: string;
    static TopLeft: string;
    static TopRight: string;
    static BottomRight: string;
    static BottomLeft: string;
    static LeftTop: string;
    static RightTop: string;
    static RightBottom: string;
    static LeftBottom: string;
}
/**
 *  Specifies audio output.
 * @enum {string} AudioOutputSelectionType
 * @property Analog
 * @property Usb
 * @property DigitalPcm - corresponds to 'SPDIF Audio with Stereo PCM (HDMI Audio)' in BA Classic
 * @property DigitalAc3 - corresponds to 'SPDIF Audio, Raw Multichannel' in BA Classic
 * @property AnalogHdmiAc3 - corresponds to 'Analog Audio with Raw Multichannel on SPDIF' in BA Classic
 */
export class AudioOutputSelectionType {
    static Analog: string;
    static Usb: string;
    static DigitalPcm: string;
    static DigitalAc3: string;
    static AnalogHdmiAc3: string;
}
/**
 *  Specifies audio mode.
 * @enum {string} AudioModeType
 * @property Surround - corresponds to 'Multichannel Surround' in BA Classic
 * @property Stereo - corresponds to 'Multichannel Mixed Down to Stereo' in BA Classic
 * @property NoAudio
 * @property Left - corresponds to 'Mono Left Mixdown' in BA Classic
 * @property Right - corresponds to 'Mono Right Mixdown' in BA Classic
 */
export class AudioModeType {
    static Surround: string;
    static Stereo: string;
    static NoAudio: string;
    static Left: string;
    static Right: string;
}
/**
 *  Specifies audio mapping.
 * @enum {string} AudioMappingType
 * @property Audio1
 * @property Audio2
 * @property Audio3
 * @property AudioAll
 */
export class AudioMappingType {
    static Audio1: string;
    static Audio2: string;
    static Audio3: string;
    static AudioAll: string;
}
/**
 *  Specifies a physical usb connector.
 */
export class UsbConnectorName {
    static UsbA: string;
    static UsbB: string;
    static UsbC: string;
    static UsbD: string;
    static UsbTypeA: string;
    static UsbTypeC: string;
    static Usb700_1: string;
    static Usb700_2: string;
    static Usb700_3: string;
    static Usb700_4: string;
    static Usb700_5: string;
    static Usb700_6: string;
    static Usb700_7: string;
    static Usb_1: string;
    static Usb_2: string;
    static Usb_3: string;
    static Usb_4: string;
    static Usb_5: string;
    static Usb_6: string;
}
/**
 *  Specifies a physical audio output.
 */
export class AudioOutputName extends UsbConnectorName {
    static Analog1: string;
    static Analog2: string;
    static Analog3: string;
    static Hdmi: string;
    static Spdif: string;
}
/**
 * Array of all possible UsbConnector values
 * @type {Array<string>}
 */
export const UsbConnectorNameArray: string[];
/**
 * Array of all possible AudioOutputName values
 * @type {Array<string>}
 */
export const AudioOutputNameArray: string[];
/**
 *  Specifies audio configuration.
 * @enum {string} AudioConfiguration
 * @property MixedAudioPCMOnly
 * @property MixedAudioPCMCompressed
 * @property FixedAudio
 */
export class AudioConfiguration {
    static MixedAudioPCMOnly: string;
    static MixedAudioPCMCompressed: string;
    static FixedAudio: string;
}
/**
 *  Specifies audio output.
 * @enum {string} AudioOutputType
 * @property Pcm
 * @property Passthrough
 * @property Multichannel
 * @property None
 */
export class AudioOutputType {
    static Pcm: string;
    static Passthrough: string;
    static Multichannel: string;
    static None: string;
}
/**
 *  Specifies audio mix mode.
 * @enum {string} AudioMixModeType
 * @property Stereo
 * @property Left
 * @property Right
 */
export class AudioMixModeType {
    static Stereo: string;
    static Left: string;
    static Right: string;
}
/**
 *  Specifies maximum resolution for Mosaic mode.
 * @enum {string} MosaicMaxContentResolutionType
 * @property NotApplicable
 * @property QCIF
 * @property CIF
 * @property SD
 * @property HD
 * @property 4K
 */
export class MosaicMaxContentResolutionType {
    static NotApplicable: string;
    static QCIF: string;
    static CIF: string;
    static SD: string;
    static HD: string;
    static FK: string;
}
/**
 *  Specifies video display mode. Names have leading 'm', but strings values do not.
 * @enum {string} VideoDisplayModeType
 * @property m2D '2D'
 * @property m3DTOB '3DTOB'
 * @property m3DSBS '3DSBS'
 */
export class VideoDisplayModeType {
    static m2D: string;
    static m3DTOB: string;
    static m3DSBS: string;
}
/**
 *  Specifies rotation. Names have leading 'rot', but strings values do not.
 * @enum {string} RotationType
 * @property rot0 '0'
 * @property rot90 '90'
 * @property rot180 '180'
 * @property rot270 '270'
 */
export class RotationType {
    static rot0: string;
    static rot90: string;
    static rot180: string;
    static rot270: string;
}
/**
 *  Specifies horizontal text alignment.
 * @enum {string} TextHAlignmentType
 * @property Left
 * @property Center
 * @property Right
 */
export class TextHAlignmentType {
    static Left: string;
    static Center: string;
    static Right: string;
}
/**
 *  Specifies text scrolling method (for ticker).
 * @enum {string} TextScrollingMethodType
 * @property Animated - Text appears letter by letter
 * @property StaticText - No scrolling
 * @property Scrolling - Classic 'crawl'
 */
export class TextScrollingMethodType {
    static Animated: string;
    static StaticText: string;
    static Scrolling: string;
}
/**
 *  Specifies type of an Event.
 * @enum {string} EventType
 * @property MediaEnd
 * @property Timer
 * @property MediaListEnd
 * @property Keyboard
 * @property Remote
 * @property Usb
 * @property Synchronize
 * @property ZoneMessage
 * @property InternalSynchronize
 * @property Success
 * @property Fail
 * @property Serial
 * @property TimeClock
 * @property Gps
 * @property AudioTimeCode
 * @property VideoTimeCode
 * @property RectangularTouch
 * @property Gpio
 * @property Bp
 * @property PluginMessage
 * @property Udp
 * @property InteractiveMenu
 * @property WssEvent
 * @property Button
 * @property Bmap
 * @property BmapHex
 */
export class EventType {
    static MediaEnd: string;
    static Timer: string;
    static MediaEndOrTimer: string;
    static MediaListEnd: string;
    static Keyboard: string;
    static Remote: string;
    static Usb: string;
    static Synchronize: string;
    static ZoneMessage: string;
    static InternalSynchronize: string;
    static Success: string;
    static Fail: string;
    static Serial: string;
    static TimeClock: string;
    static Gps: string;
    static AudioTimeCode: string;
    static VideoTimeCode: string;
    static RectangularTouch: string;
    static Gpio: string;
    static Bp: string;
    static PluginMessage: string;
    static Udp: string;
    static InteractiveMenu: string;
    static WssEvent: string;
    static Button: string;
    static Bmap: string;
    static BmapHex: string;
}
export class EventIntrinsicAction {
    static None: string;
    static SequenceForward: string;
    static SequenceBackward: string;
    static ReturnToPriorState: string;
    static StopPlayback: string;
    static StopPlaybackAndClearScreen: string;
}
export class BpType {
    static Bp200: string;
    static Bp900: string;
    static Gpio: string;
}
/**
 *  Specifies GPIO signal direction.
 * @enum {string} GpioType
 * @property Input
 * @property Output
 */
export class GpioType {
    static Input: string;
    static Output: string;
}
export class BpIndex {
    static A: string;
    static B: string;
    static C: string;
    static D: string;
}
/**
 *  Specifies a Button Panel instance.
 * @enum {string} ButtonPanelName
 * @property Bp900a
 * @property Bp900b
 * @property Bp900c
 * @property Bp900d
 * @property Bp200a
 * @property Bp200b
 * @property Bp200c
 * @property Bp200d
 */
export class ButtonPanelName {
    static Bp900a: string;
    static Bp900b: string;
    static Bp900c: string;
    static Bp900d: string;
    static Bp200a: string;
    static Bp200b: string;
    static Bp200c: string;
    static Bp200d: string;
}
/**
 * Array of all possible ButtonPanelName values
 * @type {Array<string>}
 */
export const ButtonPanelNameArray: string[];
/**
 * Specifies a button direction event sense
 * @enum {string} ButtonDirection
 * @property Down
 * @property Up
 */
export class ButtonDirection {
    static Down: string;
    static Up: string;
}
/**
 * Specifies ir receiver source
 * @enum {string} IrReceiverSource
 * @property IrIn
 * @property GPIO
 * @property Iguana
 */
export class IrReceiverSource {
    static IrIn: string;
    static GPIO: string;
    static Iguana: string;
    static None: string;
}
/**
 * Specifies ir receiver encodings
 * @enum {string} IrReceiverEncodings
 * @property NEC
 * @property RC5
 */
export class IrReceiverEncodings {
    static NEC: string;
    static RC5: string;
}
/**
 * Specifies ir transmitter destination
 * @enum {string} IrTransmitterDestination
 * @property IrOut
 * @property Iguana
 */
export class IrTransmitterDestination {
    static IrOut: string;
    static Iguana: string;
    static None: string;
}
/**
 * Specifies the direction of movement into or out of a region, such as a GPS based location
 * @enum {string} RegionDirection
 * @property Enter
 * @property Exit
 */
export class RegionDirection {
    static Enter: string;
    static Exit: string;
}
/**
 * Specifies preferred units for distance
 * @enum {string} DistanceUnits
 * @property Miles
 * @property Kilometers
 */
export class DistanceUnits {
    static Miles: string;
    static Kilometers: string;
}
/**
 *  Specifies type of a Transition.
 * @enum {string} TransitionType
 * @property NoEffect 'No effect'
 * @property WipeTop 'Image wipe from top'
 * @property WipeBottom 'Image wipe from bottom'
 * @property WipeLeft 'Image wipe from left'
 * @property WipeRight 'Image wipe from right'
 * @property ExplodeFromCenter 'Explode from center'
 * @property ExplodeTopLeft 'Explode top left'
 * @property ExplodeTopRight 'Explode top right'
 * @property ExplodeBottomLeft 'Explode bottom left'
 * @property ExplodeBottomRight 'Explode bottom right'
 * @property BlindsVertical 'Venetian blinds - vertical'
 * @property BlindsHorizontal 'Venetian blinds - horizontal'
 * @property CombVertical 'Comb effect - vertical'
 * @property CombHorizontal 'Comb effect - horizontal'
 * @property FadeToBackground 'Fade to background color'
 * @property Fade 'Fade to new image'
 * @property SlideFromTop 'Slide from top'
 * @property SlideFromBottom 'Slide from bottom'
 * @property SlideFromLeft 'Slide from left'
 * @property SlideFromRight 'Slide from right'
 */
export class TransitionType {
    static None: string;
    static NoEffect: string;
    static WipeTop: string;
    static WipeBottom: string;
    static WipeLeft: string;
    static WipeRight: string;
    static ExplodeFromCenter: string;
    static ExplodeTopLeft: string;
    static ExplodeTopRight: string;
    static ExplodeBottomLeft: string;
    static ExplodeBottomRight: string;
    static BlindsVertical: string;
    static BlindsHorizontal: string;
    static CombVertical: string;
    static CombHorizontal: string;
    static FadeToBackground: string;
    static Fade: string;
    static SlideFromTop: string;
    static SlideFromBottom: string;
    static SlideFromLeft: string;
    static SlideFromRight: string;
}
/**
 *  Specifies a compare operator for use in conditional transitions.
 * @enum {string} CompareOperator
 * @property EQ - equal
 * @property NEQ - not equal
 * @property BTW - between
 * @property GT - greater then
 * @property GTE - greater than or equal
 * @property LT - less than
 * @property LTE - less than or equal
 */
export class CompareOperator {
    static EQ: string;
    static NEQ: string;
    static BTW: string;
    static GT: string;
    static GTE: string;
    static LT: string;
    static LTE: string;
}
/**
 *  Specifies the type of a command operation.
 */
export class CommandType {
    static SendBpOutput: string;
    static SetAllAudioOutputs: string;
    static SetAudioMode: string;
    static ConfigureAudioResources: string;
    static SetConnectorVolume: string;
    static IncrementConnectorVolume: string;
    static DecrementConnectorVolume: string;
    static MuteAudioOutputs: string;
    static UnmuteAudioOutputs: string;
    static SetZoneVolume: string;
    static IncrementZoneVolume: string;
    static DecrementZoneVolume: string;
    static SetZoneChannelVolume: string;
    static IncrementZoneChannelVolume: string;
    static DecrementZoneChannelVolume: string;
    static SendZoneMessage: string;
    static SendUdp: string;
    static SendUdpBytes: string;
    static SendIRRemote: string;
    static SendProntoIRRemote: string;
    static SerialSendString: string;
    static SerialSendByte: string;
    static SerialSendBytes: string;
    static SendPluginMessage: string;
    static Synchronize: string;
    static InternalSynchronize: string;
    static GpioOn: string;
    static GpioOff: string;
    static GpioSetState: string;
    static PauseVideo: string;
    static ResumeVideo: string;
    static EnablePowerSaveMode: string;
    static DisablePowerSaveMode: string;
    static CecDisplayOn: string;
    static CecDisplayOff: string;
    static CecSetSourceToBrightSign: string;
    static CecSendString: string;
    static CecPhilipsSetVolume: string;
    static BeaconStart: string;
    static BeaconStop: string;
    static Pause: string;
    static Resume: string;
    static SetVariable: string;
    static IncrementVariable: string;
    static DecrementVariable: string;
    static ResetVariable: string;
    static ResetVariables: string;
    static SwitchPresentation: string;
    static UpdateDataFeed: string;
    static ResizeZone: string;
    static HideZone: string;
    static ShowZone: string;
    static PauseZonePlayback: string;
    static ResumeZonePlayback: string;
    static Reboot: string;
    static SendBLC400Output: string;
    static SendWss: string;
    static LightOn: string;
    static LightOff: string;
    static SendBmap: string;
    static SendBmapHex: string;
}
export class CommandSequenceType {
    static StateEntry: string;
    static StateExit: string;
    static Event: string;
    static Transition: string;
    static SequenceItemNext: string;
    static SequenceItemPrevious: string;
}
export class BpAction {
    static Off: string;
    static On: string;
    static FastBlink: string;
    static MediumBlink: string;
    static SlowBlink: string;
}
export class BlcIndex {
    static A: string;
    static B: string;
    static C: string;
}
export class BlcEffect {
    static Intensity: string;
    static Blink: string;
    static Breathe: string;
    static Strobe: string;
    static Marquee: string;
}
export class BlcBlink {
    static FastBlink: string;
    static MediumBlink: string;
    static SlowBlink: string;
}
export class BlcPlaybackMode {
    static Loop: string;
    static BackAndForth: string;
    static PlayOnce: string;
    static Random: string;
}
export class BlcTransitionMode {
    static HardOnOff: string;
    static SmoothDelay: string;
    static SmoothFullOverlap: string;
    static SmoothPartialOverlap: string;
}
export class BlcChannels {
    static A: string;
    static B: string;
    static C: string;
    static D: string;
}
/**
 *  Specifies the access permissions for User variables.
 * @enum {string} AccessType
 * @property Private - the user variables can be accessed only by the current presentation
 * @property Shared - the user variables can be accessed by other presentations
 */
export class AccessType {
    static Private: string;
    static Shared: string;
}
/**
 *  Used with DmParameterizedString - this specifies the type of a parameterized string component.
 * @enum {string} StringParameterType
 * @property Text - the component is a standard string, which should be used for this portion of the result string
 * @property UserVariable - the component is a User Variable ID, from which the value should be taken and used as
 *  this portion of the result string at player runtime.
 * @property UserVariableName - the component is a User Variable name - this should be validated and converted
 *  to a User Variable ID referencing a User Variable in the project state before saving the project state.
 *  The UserVariableName type is intended to be used only during the authoring process as a temporary placeholder.
 */
export class StringParameterType {
    static Text: string;
    static UserVariable: string;
    static UserVariableName: string;
}
/**
 *  Used with DmParameterizedNumber - this specifies the type of a parameterized number component.
 * @enum {string} NumberParameterType
 * @property Number - the component is a standard number, which should be used for the result number
 * @property UserVariable - the component is a User Variable ID, from which the string value should be taken and
 *  parsed to determine the numeric value.
 * @property UserVariableName - the component is a User Variable name - this should be validated and converted
 *  to a User Variable ID referencing a User Variable in the project state before saving the project state.
 *  The UserVariableName type is intended to be used only during the authoring process as a temporary placeholder.
 */
export class NumberParameterType {
    static Number: string;
    static UserVariable: string;
    static UserVariableName: string;
}
/**
 * Specifies one of the available 'system' user variables.
 */
export class SystemVariableType {
    static SerialNumber: string;
    static IPAddressWired: string;
    static IPAddressWireless: string;
    static FirmwareVersion: string;
    static ScriptVersion: string;
    static EdidMonitorSerialNumber: string;
    static EdidYearOfManufacture: string;
    static EdidMonitorName: string;
    static EdidManufacturer: string;
    static EdidUnspecifiedText: string;
    static EdidSerialNumber: string;
    static EdidManufacturerProductCode: string;
    static EdidWeekOfManufacture: string;
    static ActivePresentation: string;
}
/**
 * Specifies playback strategy for MediaList states
 */
export class MediaListPlaybackType {
    static FromBeginning: string;
    static NextInList: string;
    static FromIndex: string;
}
export class PlayFileTriggerType {
    static ByEventData: string;
    static ByUserVariable: string;
}
/**
 *  Specifies the type of an HTML site.
 * @enum {string} HtmlSiteType
 * @property Hosted - the site is hosted by the BrightSign player, and must be loaded as a content asset
 * @property Remote - the site is on a remote server, specified by the URL
 */
export class HtmlSiteType {
    static Hosted: string;
    static Remote: string;
}
/**
 *  Specifies the type of data feed represented by the object.
 * @enum {string} DataFeedType
 * @property URLDataFeed - a 'Standard' (i.e., non-BSN) data feed specified by its URL
 * @property BSNDataFeed - a BSN based Text (RSS) feed
 * @property BSNMediaFeed - a BSN based media (MRSS) feed
 * @property BSNDynamicPlaylist - a BSN based dynamic playlist feed
 * @property BSNTaggedPlaylist - a BSN based tagged playlist feed
 */
export class DataFeedType {
    static URLDataFeed: string;
    static BSNDataFeed: string;
    static BSNMediaFeed: string;
    static BSNDynamicPlaylist: string;
    static BSNTaggedPlaylist: string;
}
/**
 *  Specifies the usage for the data feed.
 * @enum {string} DataFeedUsageType
 * @property Text - the data feed will be used to display text as with a standard RSS feed
 * @property Mrss - the data feed will be used to display media as with a standard MRSS feed
 * @property MrssWith4K - the data feed will be used to display media as with a standard MRSS feed,
 *  but the media requires a 4K capable video player
 * @property Content - the feed is an RSS feed where the title/description pairs specify content
 */
export class DataFeedUsageType {
    static Text: string;
    static Mrss: string;
    static MrssWith4K: string;
    static Content: string;
}
/**
 * Specifies the match type for Media and Player tags in a tagged playlist.
 * @property DoNotMatchTags - Player tag matching is disabled
 * @property MatchAllMediaTagsToPlayerTags - A media file must have all tag names and values that a player has;
 *  otherwise, that media file will not be played.
 * @property MatchAllPlayerTagsToMediaTags - A player must have all tag names and values that a media file has;
 *  otherwise, that media file will not be played.
 * @property MatchAnyPlayerAndMediaTags - As long as a media file has one tag name and value in common with the player,
 *  it will be played.
 */
export class PlayerTagMatchingType {
    static DoNotMatchTags: string;
    static MatchAllMediaTagsToPlayerTags: string;
    static MatchAllPlayerTagsToMediaTags: string;
    static MatchAnyPlayerAndMediaTags: string;
}
/**
 * Specifies the type of restriction to use when displaying tweets from a Twitter feed
 * @property None - No restriction is used
 * @property ByCount - Only a given number of recent tweets are displayed
 * @property ByRecentDays - Tweets from a given number of recent days are displayed
 */
export class TwitterFeedRestrictionType {
    static None: string;
    static ByCount: string;
    static ByRecentDays: string;
}
/**
 * @interface BsColor
 * @property a {number} - alpha
 * @property r {number} - red
 * @property g {number} - green
 * @property b {number} - blue
 */
export interface BsColor {
    a: number;
    r: number;
    g: number;
    b: number;
}
export const BsBlack: BsColor;
/**
 * Type guard: Return true if value is a BsColor object.
 * @param value
 * @returns {boolean}
 */
export function bscIsBsColor(value: any): value is BsColor;
/**
 * @interface BsSize
 * @property width
 * @property height
 */
export interface BsSize {
    width: number;
    height: number;
}
/**
 * Type guard: Return true if value is a BsSize object.
 * @param value
 * @returns {boolean}
 */
export function bscIsBsSize(value: any): value is BsSize;
/**
 * Runtime check of a string to return enum key if it is a valid value of a given enum
 * @param enumType {EnumType} - Enum type name
 * @param value {string} - value to check
 * @returns {string | null} - string representing the enum key(name) for the value,
 *  or null if value is not a valid enum value
 */
export function getEnumKeyOfValue<EnumType>(enumType: EnumType, value: string): string | null;
/**
 * Return true if given string is a valid value for the given enum type
 * @param enumType {EnumType} - Enum type name
 * @param value {string} - value to check
 * @returns {boolean} true if value is a valid value for the given enum
 */
export function isInstanceOfEnum<EnumType>(enumType: EnumType, value: string): boolean;

/** @module Core:profile */
/**
 * Created by gostosh on 11/22/17.
 */
export interface BsProfileEntity {
    [propertyKey: string]: string | object | boolean;
}

/** @module Core:rect */
/**
 * A simple object that defines a rectangle position and size on a larger canvas or
 *  display area. The rectangle can either be specified using absolute pixel coordinates, or percentage
 *  coordinates, which can be converted to pixel coordinates based on canvas size.
 *  Helper functions are provided to construct these objects properly.
 * @interface BsRect
 * @property x {number} - The 'X' (horizontal) position of the rectangle top left corner
 * @property y {number} - The 'Y' (vertical) position of the rectangle top left corner
 * @property width {number} - The width of the rectangle
 * @property height {number} - The height of the rectangle
 * @property pct {boolean} - true if x, y, width, and height are expressed as percentage values, false if
 *  absolute pixel coordinates
 */
export interface BsRect {
    x: number;
    y: number;
    width: number;
    height: number;
    pct: boolean;
}
/**
 * Create a BsRect object based on percentages. All coordinates are expressed as a percentage of
 *  canvas (display area) size. Range: 0.0 .. 100.0
 *
 * @param x {number} - The 'X' (horizontal) position of the rectangle top left corner
 * @param y {number} - The 'Y' (vertical) position of the rectangle top left corner
 * @param width {number} - The width of the rectangle
 * @param height {number} - The height of the rectangle
 * @returns {BsRect}
 */
export function bscCreatePercentageRect(x: number, y: number, width: number, height: number): BsRect;
/**
 * Create a BsRect object based on absolute pixel coordinates.
 *
 * @param x {number} - The 'X' (horizontal) position of the rectangle top left corner
 * @param y {number} - The 'Y' (vertical) position of the rectangle top left corner
 * @param width {number} - The width of the rectangle
 * @param height{number} - The height of the rectangle
 * @returns {BsRect}
 */
export function bscCreateAbsoluteRect(x: number, y: number, width: number, height: number): BsRect;
/**
 * Scale an absolute (pixel-based) BsRect, by a given scale factor. All coordinates are scaled,
 *  making this appropriate to recalculate coordinates for a rectangle positioned in a larger coordinate system
 *  for which the size changes. If the rectangle is scaled, a new object is returned. The original rectangle object
 *  is not mutated. For scale factors of 2 or 4, a bitshift operation is used for efficiency.
 * @param rect {BsRect} - the rectangle to scale
 * @param increase {boolean} - true to scale up, false to scale down
 * @param scaleFactorX {number} - the scale factor for x and width (should be positive)
 * @param [scaleFactorY=scalefactorX] {number} - the scale factor for y and height (should be positive) - if not
 *  specified, this will be set to equal scaleFactorX
 */
export function bscScaleAbsoluteRect(rect: BsRect, increase: boolean, scaleFactorX: number, scaleFactorY?: number): BsRect;
/**
 * Convert a rectangle expressed in percentages as an absolute rectangle, based on the given VideoMode.
 * If given rectangle is already expressed as absolute pixels, it will be returned unchanged.
 *
 * @param rect {BsRect} - percentage based rectangle to convert to absolute pixel dimensions
 * @param mode {VideoMode} - VideoMode with resolution to use for the conversion
 * @returns {BsRect} - rectangle expressed in absolute pixel coordinates
 */
export function bscGetAbsoluteRectForVideoMode(rect: BsRect, mode: VideoMode): BsRect;
/**
 * Convert a rectangle expressed in percentages as an absolute rectangle, based on the given BsSize
 *  value for the containing rectangle.
 * If given rectangle is already expressed as absolute pixels, it will be returned unchanged.
 *
 * @param rect {BsRect} - percentage based rectangle to convert to absolute pixel dimensions
 * @param size {BsSize} - pixel dimensions of containing rectangle
 * @returns {BsRect} - rectangle expressed in absolute pixel coordinates
 */
export function bscGetAbsoluteRectForWidthAndHeight(rect: BsRect, size: BsSize): BsRect;
/**
 * Convert a rectangle expressed in absolute pixels as a rectangle expressed as percentages,
 *  based on the given VideoMode
 * If given rectangle is already percentage based, it will be returned unchanged
 *
 * @param rect {BsRect} - absolute rectangle to convert to percentage based rectangle
 * @param mode {VideoMode} - VideoMode with resolution to use for the conversion
 * @returns {BsRect} - rectangle expressed in percentages for given VideoMode
 */
export function bscGetPercentageRectForVideoMode(rect: BsRect, mode: VideoMode): BsRect;
/**
 * Convert a rectangle expressed in absolute pixels as a rectangle expressed as percentages,
 *  based on the given BsSize value for the containing rectangle.
 * If given rectangle is already percentage based, it will be returned unchanged
 *
 * @param rect {BsRect} - absolute rectangle to convert to percentage based rectangle
 * @param size {BsSize} - pixel dimensions of containing rectangle
 * @returns {BsRect} - rectangle expressed in percentages for given VideoMode
 */
export function bscGetPercentageRectForWidthAndHeight(rect: BsRect, size: BsSize): BsRect;
export const BsRectFull: {
    x: number;
    y: number;
    width: number;
    height: number;
    pct: boolean;
};

/** @module Core:assets */
/**
 * BsAssetId - an internally generated ID string to serve as a key for the AssetItem in a collection.
 * This is typically a GUID string.
 */
export type BsAssetId = string;
export const BsAssetIdNone = "0";
export function bscIsValidAssetId(id: any): id is BsAssetId;
/**
 * Specifies the location of the asset (local, cloud storage, etc.)
 * @enum AssetLocation {string}
 *
 * @property Local - Asset is in local file system
 * @property Bsn - Asset is located on BrightSign network
 * @property Blob - Asset is held in a temporary in-memory Blob pending upload
 */
export class AssetLocation {
    static Local: string;
    static Bsn: string;
    static Ftp: string;
    static Blob: string;
}
/**
 * Specifies the type of the asset
 * @enum AssetType {string}
 *
 * @property Content - Media content file
 * @property Project - Project file (bpfx)
 * @property ProjectBpf - Legacy Project file (bpf)
 * @property ProjectFragment - Project file fragment (bpfx-xx)
 * @property Schedule - Schedule file (bpsx)
 * @property BrightScript - BrightScript file (brs)
 * @property HtmlSite - HTML site file
 * @property Folder - A sub-folder (subdirectory) containing additional assets
 * @property TextFeed - TextFeed file (XML RSS format)
 * @property MrssFeed - MrssFeed file (XML MRSS format)
 * @property DynamicPlaylist - DynamicPlaylist file (XML extended MRSS format)
 * @property TaggedPlaylist - TaggedPlaylist file (XML format)
 */
export class AssetType {
    static Content: string;
    static Project: string;
    static ProjectBpf: string;
    static ProjectFragment: string;
    static Schedule: string;
    static BrightScript: string;
    static HtmlSite: string;
    static DeviceHtmlSite: string;
    static Folder: string;
    static BSNDataFeed: string;
    static BSNMediaFeed: string;
    static BSNDynamicPlaylist: string;
    static BSNTaggedPlaylist: string;
    static Other: string;
}
export type BsnDataFeedAssetType = 'BSNDataFeed' | 'BSNMediaFeed' | 'BSNDynamicPlaylist' | 'BSNTaggedPlaylist';
/**
 * Specifies the AssetType(s) of the assets within an AssetContainer. An asset container is an object that
 *  contains a list of assets and/or additional containers.
 * ChildAssetTypes may be most any of the standard AssetTypes, plus several additional system types
 *  that represent type designations for the contents of system level containers (e.g., 'pseudo-folders')
 * @enum BseChildAssetType {string}
 *
 * @property Asset - the container child assets can be of any type.
 * @property Component - the container contains 'Component' containers that serve as the root for non-media assets.
 *  Non-media assets represent assets that define higher level compositions, which includes assetTypes such as
 *  dataFeeds, project, plugins, HtmlSites, etc.
 */
export class BseChildAssetType extends AssetType {
    static Asset: string;
    static Component: string;
}
/**
 * Interface containing the essential data necessary for searching for a
 *  file based asset item used in BrightSign authoring tasks.
 * @property name {string} - asset file/folder name
 * @property path {string} - path of parent directory for asset (virtualPath on BSN)
 * @property location {AssetLocation} - location of asset (Local or Network)
 * @property assetType {AssetType} - type of the asset (Content, Folder, Project file, HtmlSite file, ...)
 */
export interface BsAssetSpecification {
    name: string;
    path: string;
    location: AssetLocation;
    assetType: AssetType;
}
/**
 * Interface containing the essential data necessary for locating a
 *  file based asset item used in BrightSign authoring tasks.
 * @property name {string} - asset file/folder name
 * @property path {string} - path of parent directory for asset (virtualPath on BSN)
 * @property networkId {string | number} - if asset is network based, this is the ID used to identify the asset
 *  on the network
 * @property location {AssetLocation} - location of asset (Local or Network)
 * @property assetType {AssetType} - type of the asset (Content, Folder, Project file, HtmlSite file, ...)
 * @property scope {string} - a string identifying the system or network on which the asset is located
 *  For BSN based assets, this contains the network name. For local assets, this identifies the local system
 *  on which the asset path is known to be valid.
 * @property [childAssetType] {BseChildAssetType} - the type of contained assets (or containers,) if this asset
 *  represents a container (e.g., a folder)
 * @property [origin] {string} - unparsed absolute path to original asset from source scope
 */
export interface BsAssetLocator {
    name: string;
    path: string;
    networkId: number | string;
    location: AssetLocation;
    assetType: AssetType;
    scope: string;
    childAssetType?: BseChildAssetType;
    origin?: string;
}
export enum FtpObjectPermissionGroup {
    Owner = 0,
    Group = 1,
    Other = 2
}
export interface FtpObjectPermission {
    group: FtpObjectPermissionGroup;
    read: boolean;
    write: boolean;
    execute: boolean;
}
export type BsAssetPermission = BsnObjectPermission | FtpObjectPermission;
/**
 * Interface for a file based asset item used in BrightSign authoring tasks.
 * Asset items may be stored locally or remotely, and may represent content files, project files, or folders.
 * @interface BsAssetItem
 * @property id {BsAssetId} - a string based ID, typically a GUID, used to distinguish the asset in a collection
 * @property locator {string} - a unique string generated by the ContentManager to identify the asset based
 *  on the properties included in the BsAssetLocatorData base object
 * @property [mediaType] {MediaType} - media type for Content assets - required only if asset is Content type
 * @property [fileSize] {number} - size of the file in bytes
 * @property [fileHash] {string} - hash string for the file
 * @property [fileUrl] {string} - URL for the file, if network based
 * @property [thumbUrl] {string} - URL for the file thumbnail, if network based
 *  may also be used as an identifier to locate a cached thumbnail on a local system
 * @property [lastModifiedDate] {Date} - modification time for the file
 * @property [creationDate] {Date} - creation time for the file
 * @property [uploadDate] {Date} - for network based assets, the date the asset was uploaded
 * @property [probeData] {string} - BrightSign probeData string, indicating file media metadata
 * @property [hasSubFolders] {boolean} - True if the asset is a folder and it has sub-folders
 * @property [hasFiles] {boolean} - True if the asset is a folder and it contains files
 * @property [projectFragmentType] {BsProjectFragmentType} - For AssetType.ProjectFragment, this property denotes
 *  the type of project fragment file
 * @property [assetData] {BsAssetData} - Raw data entity from which the assetItem has been derived.
 * @property [assetUsage] {BsAssetUsage} - for BSN assetItems, information on which other assetItems (entities)
 *  use this assetItem
 * @property [tags] {BsnTagSpecification[]} - for BSN media assetItems, a list of tag specification objects
 * @property [permissions] {BsnObjectPermission[]} - for BSN assetItems, a list of object permissions governing
 *  access to this assetItem by BSN network users and roles
 * @property [refCount] {number} - reference count for lifetime management in collections
 */
export interface BsAssetItem extends BsAssetLocator {
    id: BsAssetId;
    locator: string;
    mediaType?: MediaType;
    fileSize?: number;
    fileHash?: string;
    fileUrl?: string;
    thumbUrl?: string;
    creationDate?: Date;
    lastModifiedDate?: Date;
    uploadDate?: Date;
    probeData?: string;
    hasSubFolders?: boolean;
    hasFiles?: boolean;
    projectFragmentType?: BsProjectFragmentType;
    assetData?: BsAssetData;
    assetUsage?: BsAssetUsage;
    tags?: BsnTagSpecification[];
    permissions?: BsAssetPermission[];
    refCount?: number;
}
/**
 * Interface containing arrays with lists of containing assets (presentations, data feeds) that are
 *  currently using the assetItem
 * @interface BsAssetUsage
 */
export interface BsAssetUsage {
    presentations?: BsnPresentationReference[];
    dynamicPlaylists?: BsnDataFeedReference[];
    liveMediaFeeds?: BsnDataFeedReference[];
    taggedPlaylists?: BsnDataFeedReference[];
}
/**
 * Interface for an asset item map by asset ID
 * @interface BsAssetMapById
 */
export interface BsAssetMapById {
    [id: string]: BsAssetItem;
}
/**
 * Interface for an object which contains video metadata for video files.
 * @interface BsVideoData
 * @property [videoCodec] {string} - video format/codec (e.g., 'h264', 'mp4', 'mpg')
 * @property [videoPid] {number} - video packet identifier
 * @property [size] {BsSize} - video resolution, in pixels
 * @property [subtitlePid] {number} - subtitle packet identifier
 * @property [subtitleLanguage] {string} - subtitle language indicator
 * @property [videoDuration] {number} - duration of video in seconds
 * @property [audioDuration] {number} - duration of audio in seconds
 * @property [colorDepth] {number} - color value bit depth (8 or 10)
 * @property [videoFrameRate] {number}
 * @property [captionService] {number}
 * @property [captionLanguage] {string}
 */
export interface BsVideoData extends BsAudioDataProperties {
    readonly mediaType: 'Video';
    videoCodec?: string | null;
    videoPid?: number | null;
    size?: BsSize;
    subtitlePid?: number | null;
    subtitleLanguage?: string | null;
    videoDuration?: number | null;
    audioDuration?: number | null;
    colorDepth?: number | null;
    videoFrameRate?: number | null;
    captionService?: number | null;
    captionLanguage?: string | null;
}
export function bscIsVideoData(mediaData: BsMediaFileData | null | undefined): mediaData is BsVideoData;
/**
 * Interface for an object which contains audio metadata for files that contain audio.
 * @interface BsAudioData
 */
export interface BsAudioData extends BsAudioDataProperties {
    readonly mediaType: 'Audio';
}
/**
 * Interface for an object which contains base audio metadata (and common data to either type, e.g., 'transport'.)
 * This is used as a base interface for metadata for either video or audio files.
 * @interface BsAudioDataProperties
 * @property transport {string} - file/stream container type (this implies video/audio multiplex format)
 * @property packetLen {number} - ??
 * @property indexed {boolean} - ??
 * @property audioCodec {string} - audio code (encoding format, e.g., 'wav', 'mp3', 'mpa', etc.)
 * @property audioPid {number} - packet identifier, if in a multiplexed stream/file
 * @property audioChannelCount {number} - number of audio channels
 * @property audioSampleRate {number} - audio sample rate in Hz (e.g., 44100 = 44.1 kHz)
 * @property audioBitrate {number} - audio bitrate in kb/sec
 * @property duration {number} - total file/stream duration in seconds
 * @property firstTimestamp {number} - time of initial frame or audio sample
 */
export interface BsAudioDataProperties {
    transport?: string | null;
    packetLen?: number | null;
    indexed?: boolean | null;
    audioCodec?: string;
    audioPid?: number | null;
    audioChannelCount?: number | null;
    audioSampleRate?: number | null;
    audioBitrate?: number | null;
    duration?: number | null;
    firstTimestamp?: number | null;
}
export function bscIsAudioData(mediaData: BsMediaFileData | null | undefined): mediaData is BsAudioData;
/**
 * Interface for an object which contains image metadata for image files.
 * @interface BsImageData
 * @property size {BsSize} - image resolution, in pixels
 * @property orientation {RotationType} - the EXIF orientation of the image. This is mapped to RotationType
 *  as follows: RotationType.rot0 = Standard (EXIF value 1), RotationType.rot90 = Top on right side (EXIF value 6),
 *  RotationType.rot180 = Upside down (EXIF value 3), RotationType.rot270 = Top on left side (EXIF value 8).
 *  If there is no EXIF orientation data, this will be RotationType.rot0.
 * @property [colorSpace] {ColorSpaceType | null} - the colorSpace of the image.
 * @property [colorDepthBit] {number | null} - the bit depth of the image.
 * @property [imageFormat] {string | null} - the format of the image (JPEG.
 * @property [dateTaken] {Date} - Timestamp representing the time the image was initially captured,
 *  from EXIF data.
 */
export interface BsImageData {
    readonly mediaType: 'Image';
    size: BsSize;
    orientation: RotationType;
    colorSpace?: ColorSpaceType | null;
    colorDepthBit?: number | null;
    imageFormat?: string | null;
    dateTaken?: Date | null;
}
export function bscIsImageData(mediaData: BsMediaFileData | null | undefined): mediaData is BsImageData;
/**
 * Convert probe library string for either video or audio files to the corresponding BsVideoData
 *  or BsAudioData object.
 * @param probeData {string} - probe library string
 * @param mediaType {MediaType} - must be audio or video
 * @returns {BsVideoData | BsAudioData | {}} - returns empty object if mediaType is not audio or video
 */
export function bscConvertProbeDataToAvMetadata(probeData: string, mediaType: MediaType): BsVideoData | BsAudioData | {};
export type BsMediaFileData = BsVideoData | BsAudioData | BsImageData;
export type BsAssetData = BsMediaFileData | BsnTextFeedProperties | BsnMediaFeedProperties | BsnDynamicPlaylistProperties | BsnTaggedPlaylistProperties | BsnPresentationProperties | BsnHtmlSiteProperties;
export interface BsContentAssetItem extends BsAssetItem {
    contentItemData?: BsContentAssetData;
}
export type BsContentAssetData = BsnMediaFeedItemProperties | BsnDynamicPlaylistItemProperties | BsnTaggedPlaylistItemProperties;
/**
 * Enum for project fragment file types.
 * @enum BsProjectFragmentType
 *
 * @property None - file is not a project fragment
 * @property MediaStateCopySet
 * @property CommandCopySet
 * @property LiveTextItemCopySet
 * @property UserVariableCopySet
 * @property UserDefinedEventSet
 */
export class BsProjectFragmentType {
    static None: string;
    static MediaStateCopySet: string;
    static CommandCopySet: string;
    static LiveTextItemCopySet: string;
    static UserVariableCopySet: string;
    static UserDefinedEventSet: string;
}
/**
 * Interface for an object containing information for a thumbnail image generated
 *  for a media file on the local file system.
 * @interface BsLocalAssetThumbnail
 * @property kind {'local'} - discriminant for BsAssetThumbnail type
 * @property type {string} - MIME type string for thumbnail (e.g., 'image/jpeg', 'image/png')
 * @property data {Uint8Array} - byte array containing thumbnail data
 * @property [size] {BsSize | null} - resolution of thumbnail, in pixels
 * @property [hash] {string | null} - SHA1 hash of thumbnail data
 */
export interface BsLocalAssetThumbnail {
    kind: 'local';
    type: string;
    data: Uint8Array;
    size?: BsSize | null;
    hash?: string | null;
}
/** Interface for an object containing URL for a network based thumbnail
 * @interface BsNetworkAssetThumbnail
 * @property kind {'network'} - discriminant for BsAssetThumbnail type
 * @property url {string} - URL for thumbnail
 * @property [size] {BsSize | null} - resolution of thumbnail, in pixels
 * @property [hash] {string | null} - SHA1 hash of thumbnail data
 */
export interface BsNetworkAssetThumbnail {
    kind: 'network';
    url: string;
    size?: BsSize | null;
    hash?: string | null;
}
/**
 * A discriminated union of interfaces for various types of asset thumbnail images
 * @type BsAssetThumbnail
 */
export type BsAssetThumbnail = BsLocalAssetThumbnail | BsNetworkAssetThumbnail;
/**
 * Create a BsLocalAssetThumbnail object. Set null values for size and hash if not provided.
 * @param {Uint8Array} data
 * @param {string} type
 * @param {BsSize | null} size
 * @param {string | null} hash
 * @returns {BsLocalAssetThumbnail}
 */
export function bscCreateLocalAssetThumbnail(data: Uint8Array, type: string, size?: BsSize | null, hash?: string | null): BsLocalAssetThumbnail;
/**
 * Create a BsNetworkAssetThumbnail object. Set null values for size and hash if not provided.
 * @param {string} url - network URL of thumbnail
 * @param {BsSize | null} size
 * @param {string | null} hash
 * @returns {BsNetworkAssetThumbnail}
 */
export function bscCreateNetworkAssetThumbnail(url: string, size?: BsSize | null, hash?: string | null): BsNetworkAssetThumbnail;
/**
 * Indicates whether the given assetThumbnail is a 'local' thumbnail, meaning that it consists of raw
 *  thumbnail data with size and has information.
 *
 * @param assetThumbnail {BsAssetThumbnail}
 * @returns {boolean}
 */
export function bscIsLocalAssetThumbnail(assetThumbnail: BsAssetThumbnail): assetThumbnail is BsLocalAssetThumbnail;
/**
 * Test object to see if it is a BsAssetLocator.
 *
 * @param item {object} - object to test
 * @returns {boolean} - true if object is a BsAssetLocator
 */
export function bscIsAssetLocator(item: any): item is BsAssetLocator;
/**
 * Test object to see if it is a BsAssetItem.
 *
 * @param item {object} - object to test
 * @returns {boolean} - true if object is a BsAssetItem
 */
export function bscIsAssetItem(item: any): item is BsAssetItem;
/**
 * Test assetItem to determine if it is a BSN data feed (i.e., one of the four BSN feed types.)
 *
 * @param item {BsAssetItem}
 * @return {boolean} true if assetItem is a BSN data feed
 */
export function bscAssetItemIsBsnDataFeed(item: BsAssetItem): boolean;
/**
 * Generate minimal BsAssetItem from BsAssetLocator. If AssetType if AssetType.Content, mediaType
 *  property will be generated based on the file extension of the asset name.
 * @param {BsAssetLocator} assetLocator
 * @returns {BsAssetItem}
 */
export function bscAssetItemFromAssetLocator(assetLocator: BsAssetLocator): BsAssetItem;
/**
 * Generate a minimal BsAssetLocator from BsAssetItem
 * @param {BsAssetItem} assetItem
 * @returns {BsAssetLocator}
 */
export function bscAssetLocatorFromAssetItem(assetItem: BsAssetItem): BsAssetLocator;
/**
 * Generate minimal BsAssetLocator object to retrieve BSN based assets.
 * @param {AssetType} assetType
 * @param {number} bsnId
 * @param {string | null} [network=''] - the name of the BSN network on which the asset is located.
 *  If blank or unspecified, retrieval function will search on current network.
 * @param {string | null} [name=''] - the asset name; will be set to blank string if not provided
 * @param {string | null} [path=''] - the asset path; will be set to blank string if not provided
 * @param [origin] {string} - unparsed absolute path to original asset from source scope
 * @returns {BsAssetLocator}
 */
export function bscAssetLocatorForBsnAsset(assetType: AssetType, bsnId: number, network?: string | null, name?: string | null, path?: string | null, origin?: string): BsAssetLocator;
/**
 * Get asset name. If asset is a file, return the name without the extension.
 * @param {BsAssetLocator} locator
 * @returns {string}
 */
export function bscGetAssetName(locator: BsAssetLocator): string;
/**
 * Get extension of asset base name, if the asset represents a file that has an extension.
 * Return a blank string if there is no extension.
 * The leading period is included in the extension string (unless it is blank.)
 * @param {BsAssetLocator} locator
 * @returns {string}
 */
export function bscGetAssetExtension(locator: BsAssetLocator): string;
/**
 * Return full path string for BsAssetSpecification.
 * @param {BsAssetSpecification} assetSpec
 * @returns {string}
 */
export function bscGetAssetFullPath(assetSpec: BsAssetSpecification): string;
/**
 * Generate minimal BsAssetLocator object to retrieve locally based assets.
 * @param {AssetType} assetType
 * @param {string} fullPath - local path to asset file
 * @param {string | null} [scope = ''] - scope string (usually a machine ID of some sort)
 * @param [origin] {string} - unparsed absolute path to original asset from source scope
 * @returns {BsAssetLocator}
 */
export function bscAssetLocatorForLocalAsset(assetType: AssetType, fullPath: string, scope?: string | null, origin?: string): BsAssetLocator;
/**
 * Create a BsAssetSpecification object from a directory path + file name specification.
 * These objects are used when searching for an asset.
 * @param {AssetLocation} location
 * @param {AssetType} assetType
 * @param {string} path - fullPath if fileName is not specified, directory path if file name is specified
 * @param {string} [fileName]
 * @returns {BsAssetSpecification}
 */
export function bscGetAssetSpecification(location: AssetLocation, assetType: AssetType, path: string, fileName?: string): BsAssetSpecification;
/**
 * Create an assetItem from basic asset information. This function is intended primarily from creating
 *  an assetItem from saved file information, without regard to whether the file information refers
 *  to a valid file on the current system. This function will return null if neither a file path
 *  or a non-zero BSN ID is specified.
 *
 * @param {AssetType} assetType
 * @param {string} fileName
 * @param {string | null} [fileDirPath=null] - path of parent directory of file. For BSN based assets, this is the
 *  virtual path. A null value indicates the root path. A null value should be used for BSN assets that do not
 *  support a virtual Path.
 * @param {number | null} [bsnId=0] - BSN network ID of the asset. This should be 0 (default value,) to indicate that
 *  the asset is a local asset.
 * @param {MediaType | null} [mediaType=null] - mediaType of the file, if the AssetType === AssetType.Content.
 *  If this parameter is null (default,) the mediaType is determined from the file extension.
 * @param {string | null} [scope=''] - Network name for BSN assets, optional machine identifier for local assets.
 * @param [origin] {string | null} - unparsed absolute path to original asset from source scope
 * @return {BsAssetItem}
 */
export function bscAssetItemFromBasicAssetInfo(assetType: AssetType, fileName: string, fileDirPath?: string | null, bsnId?: number | null, mediaType?: MediaType | null, scope?: string | null, origin?: string | null): BsAssetItem | null;
/**
 * Generate locator key string based on AssetLocation, name, path, and networkId.
 * The locator key is intended to be a unique representation of the assets location.
 *
 * @param item {BsAssetLocator} - the BsAssetLocator (or BsAssetItem) for which to generate the locator
 * @returns {string} - the generated locator
 *  A blank string is generated if the location properties do not hold valid data.
 */
export function bscGenerateAssetLocatorKey(item: Partial<BsAssetLocator>): string;
/**
 * Helper function to generate the asset locator for a Local asset using the file path.
 *
 * @param fullPath {string} - local path of the file, including file name
 * @returns {string} - the generated locator
 */
export function bscGetLocalAssetLocatorKey(fullPath: string): string;
/**
 * Helper function to generate the asset locator for a Ftp asset.
 * @param hostname {string} - hostname of the FTP server
 * @param path {string} - optional FTP virtual dir path of asset
 * @param name {string} - optional FTP virtual name of asset
 * @returns {string} - the generated locator
 */
export function bscGetFtpAssetLocatorKey(hostname: string, path?: string, name?: string): string;
/**
 * Helper function to generate the asset locator for a BSN based asset using the BSN network ID.
 *
 * @param bsnId {number} - BSN id of the file
 * @param assetType {AssetType}
 * @param [name] {string} - if specified for null or default assetItems (where networkId === -1), used in place of bsnId
 * @param [path] {string} - optional BSN virtualPath to be used for default assetItems
 * @returns {string} - the generated locator
 */
export function bscGetBsnAssetLocatorKey(bsnId: number, assetType: AssetType, name?: string, path?: string): string;
/**
 * Return a 'null' assetItem to be used as an asset placeholder that will be resolved later
 *  with correct asset information.
 *
 * @param {AssetType} assetType
 * @param {AssetLocation} [assetLocation=Local]
 * @param {MediaType} [mediaType]
 * @return {BsAssetItem}
 */
export function bscGetNullAssetItem(assetType: AssetType, assetLocation?: string, mediaType?: MediaType): BsAssetItem;
/**
 * Return true if given assetItem is a NULL asset item.
 * @param {BsAssetItem} assetItem
 * @return {boolean}
 */
export function bscIsNullAssetItem(assetItem: BsAssetItem): boolean;
/**
 * Return a placeholder assetItem representing a default asset that will be automatically resolved later.
 *
 * @param {AssetType} assetType
 * @param {AssetLocation} [assetLocation=Local]
 * @param {MediaType} [mediaType]
 * @param {string} [name] - if specified, will be appended to the defaultName pattern
 * @param {string} [path]
 * @param {string} [scope]
 * @return {BsAssetItem}
 */
export function bscGetDefaultAssetItem(assetType: AssetType, assetLocation?: string, mediaType?: MediaType, name?: string, path?: string, scope?: string): BsAssetItem;
/**
 * Return true if given assetItem is a Default asset item.
 * @param {BsAssetItem} assetItem
 * @return {boolean}
 */
export function bscIsDefaultAssetItem(assetItem: BsAssetItem): boolean;
/**
 * Set of all extensions recognized as image files
 * @const imageFileSuffixes
 * @type {Set<string>}
 */
export const imageFileSuffixes: Set<string>;
/**
 * Set of all extensions recognized as video files
 * @const videoFileSuffixes
 * @type {Set<string>}
 */
export const videoFileSuffixes: Set<string>;
/**
 * Set of all extensions recognized as audio files
 * @const audioFileSuffixes
 * @type {Set<string>}
 */
export const audioFileSuffixes: Set<string>;
/**
 * Set of all extensions recognized as text files
 * @const textFileSuffixes
 * @type {Set<string>}
 */
export const textFileSuffixes: Set<string>;
/**
 * Helper function to return the MediaType of a media file, based on the file extension.
 *
 * @param pathOrFileName {string} - name (or path) of the file, with extension
 * @returns {MediaType} - MediaType of the file
 */
export function bscGetFileMediaType(pathOrFileName: string): MediaType;
/**
 * Return true if the given mediaType represents a playable file.
 * @param mediaType {MediaType}
 * @returns {boolean}
 */
export function bscIsMediaTypePlayable(mediaType: MediaType | null | undefined): boolean;
/**
 * Return true if the given assetItem represents a playable content file.
 * @param assetItem {BsAssetItem}
 * @returns {boolean}
 */
export function bscIsAssetItemPlayableContent(assetItem: BsAssetItem): boolean;
/**
 * Utility function to strip file extension
 * @param {string} pathOrFileName
 * @returns {string} path or file name without extension
 */
export function bscStripFileExtension(pathOrFileName: string): string;
/**
 * Given a file name or path of a project fragment file, return the BsProjectFragmentType, based on the file extension.
 * BsProjectFragmentType.None is returned if the file extension is not a valid project fragment extension.
 * @param pathOrFileName {string}
 * @returns {BsProjectFragmentType}
 */
export function bscGetFileProjectFragmentType(pathOrFileName: string): BsProjectFragmentType;
/**
 * Given a project fragment type, return the extension string used when storing the JSON serialized fragment
 *  as a file. The returned extension does not have a leading '.'.
 * @param type {BsProjectFragmentType}
 * @returns {string}
 */
export function bscGetFileProjectFragmentExtension(type: BsProjectFragmentType): string;
/**
 * Set of all extensions recognized as project files
 * @const projectFileSuffixes
 * @type {Set<string>}
 */
export const projectFileSuffixes: Set<string>;
/**
 * Set of all extensions recognizes as project file fragments.
 * Project file fragments are typically JSON files that represent a set of items that can
 *  be added to a project file, via operations like copy/paste/merge.
 */
export const projectFileFragmentSuffixes: Set<string>;
/**
 * Set of all extensions recognized as schedule files
 * @const scheduleFileSuffixes
 * @type {Set<string>}
 */
export const scheduleFileSuffixes: Set<string>;
/**
 * Set of all extensions recognized as legacy project files
 * @const projectBpfFileSuffixes
 * @type {Set<string>}
 */
export const projectBpfFileSuffixes: Set<string>;
/**
 * Set of all extensions recognized as htmlSite files
 * @const htmlSiteFileSuffixes
 * @type {Set<string>}
 */
export const htmlSiteFileSuffixes: Set<string>;
/**
 * Set of all extensions recognized as font files
 * @const fontFileSuffixes
 * @type {Set<string>}
 */
export const fontFileSuffixes: Set<string>;
/**
 * Set of all extensions recognized as styleSheet files
 * @const styleSheetFileSuffixes
 * @type {Set<string>}
 */
export const styleSheetFileSuffixes: Set<string>;
/**
 * @interface BscFileTypeInfo
 * @property assetType {AssetType} - type of the asset (Content, Folder, Project file, Html site index)
 * @property [mediaType] {MediaType} - media type for Content assets - MediaType.Other for non-content assets
 *  mediaType property may be omitted in AssetType !== AssetType.Content
 * @property [projectFragmentType] {BsProjectFragmentType} - fragment type type for ProjectFragment assets
 *  mediaType property will be omitted in AssetType !== AssetType.ProjectFragment
 */
export interface BscFileTypeInfo {
    assetType: AssetType;
    mediaType?: MediaType;
    projectFragmentType?: BsProjectFragmentType;
}
/**
 * Return AssetType and MediaType as a BscFileTypeInfo for a given assetItem.
 * @param assetItem {BsAssetItem}
 * @returns {BscFileTypeInfo}
 */
export function bscGetAssetItemFileTypeInfo(assetItem: BsAssetItem): BscFileTypeInfo;
/**
 * Constant arrays of all AssetTypes that represent assets that can be represented directly
 *  as a file on a local file system.
 */
export const BsAllFileBasedAssetTypes: AssetType[];
/**
 * Return AssetType and MediaType for a given file name, based on the file extension.
 *
 * @param pathOrFileName {string} - file name or path (with extension) for which to return Asset and Media types
 * @returns {BscFileTypeInfo}
 */
export function bscGetBscFileTypeInfo(pathOrFileName: string): BscFileTypeInfo;

/** @module Core:upload */
/// <reference types="node" />
export class BsUploadItemStatus {
    static Pending: string;
    static Uploading: string;
    static Uploaded: string;
    static Matched: string;
    static Cancelled: string;
    static Failed: string;
}
/**
 * Interface or result object for a file upload.
 * @property jobIndex {number} - the index of the file item within the overall job
 * @property sourceFileName {string} - the original name of the source file being uploaded
 * @property sourceFilePath {string} - if the file is being sourced from a local file system, this is the local path
 *  for the file. If the source is a File object (in a browser) or a Buffer, this is a blank string.
 * @property assetItem {BsAssetItem} - the assetItem for the uploaded file on BSN
 * @property status {BsUploadItemStatus}
 * @property [error]] {Error} - the error details if the upload failed
 */
export interface BsUploadItemResult {
    readonly jobIndex: number;
    readonly sourceFileName: string;
    readonly sourceFilePath: string;
    readonly assetItem: BsAssetItem;
    readonly status: BsUploadItemStatus;
    readonly error?: Error;
}
export interface BsLocalFileBuffer {
    name: string;
    data: Uint8Array;
    type: string;
    lastModifiedDate?: Date;
    hash?: string;
}
/**
 * @param {string} name
 * @param {Uint8Array} data
 * @param {string} type - MIME type of buffer
 * @param {Date} [lastModifiedDate=new Date()] - current date/time will be set if not defined
 * @param {string} [hash]
 * @returns {BsLocalFileBuffer}
 */
export function bscCreateLocalFileBuffer(name: string, data: Uint8Array, type: string, lastModifiedDate?: Date, hash?: string): BsLocalFileBuffer;
/**
 * Return true if the parameter is a valid BsLocalFileBuffer object
 * @param obj
 * @returns {boolean}
 */
export function bscIsLocalFileBuffer(obj: any): obj is BsLocalFileBuffer;
/**
 * Return file extension, with leading period, for given mimeType string.
 * Return null if the mimeType is not mapped to an extension.
 * This function uses a local mapping with limited entries.
 * @param {string} mimeType - mimeType string, assumed to be all lower case
 * @returns {string | null} file extension with leading period
 */
export function bscGetFileExtensionForMimeType(mimeType: string): string | null;
/**
 * Return mimeType string for a given file extension. The file extension may have or omit the leading period.
 * @param {string} extension
 * @returns {string}
 */
export function bscGetMimeTypeForFileExtension(extension: string): string;
/**
 * A file can either be specified as a File object, a LocalFileBuffer, a string representing the local path, or
 *  as a BsAssetItem for a local file. Not that local file operations (string|BsAssetItem) are only supported
 *  if node.js is available to access the local file system - i.e., on Desktop systems. For local files,
 *  providing a BsAssetItem (as opposed to a local path) is most efficient.
 *  Likewise, File objects are supported only within a browser (or electron-renderer) context.
 */
export type FileSpec = File | BsLocalFileBuffer | string | BsAssetItem;
/**
 * Class interface definition for a file to be uploaded to a cloud store (e.g., BSN.)
 * Files to be uploaded may be reference by various methods, generally either as a local file if the local
 *  file system is available (via node.js,) or as a File/Blob object if running in a browser and the
 *  local file system is not accessible. However the file is referenced, an object must be constructed
 *  for that file that implements this interface. That object is then used by Upload code to manage the file
 *  during the upload process. These objects are constructed within higher level libraries, but the interface
 *  definition is defined here so as to be universally available.
 *
 *  @property id {number} - An ID that can be assigned and used as needed by the upload code.
 *  @property fileName {string} - the file name (not including any path)
 *  @property fileDirPath {string} - the file directory path, if available. For upload sources that originate
 *   from a memory buffer, this will be a blank string.
 *  @property fileHash {string} - the SHA1 hash for the file (can be computed using getFileHash)
 *  @property lastModifiedDate {Date}
 *  @method getChunk {Promise<Blob | Buffer>} - return a chunk of the file starting at offset 'startIndex,
 *   with given size
 *  @method getFileHash {Promise<string>} - compute file hash, if necessary. Resolves immediately if fileHash
 *   property is a valid string. If computed, result is cached in fileHash property.
 *  @method close {void} - close the file
 */
export interface BsUploadFileSource {
    id: number;
    readonly fileName: string;
    readonly fileDirPath: string;
    readonly fileSize: number;
    readonly fileHash: string;
    readonly lastModifiedDate: Date;
    getChunk(startIndex: number, size: number): Promise<Blob | Buffer>;
    getFileHash(): Promise<string>;
    close(): void;
}
/**
 * Interface for object created to manage and track upload progress for a single content file.
 */
export interface BsUploadFile {
    readonly jobIndex: number;
    readonly fileName: string;
    readonly fileSize: number;
    readonly totalChunkCount: number;
    readonly status: BsUploadItemStatus;
    readonly isWebPageAssetUpload: boolean;
    readonly fractionComplete: number;
    readonly uploadProgress: BsUploadFileProgress;
    upload(): Promise<BsUploadItemResult>;
    cancel(): void;
}
/**
 * Interface containing necessary data for a content file to be uploaded as part of a multi-file upload job.
 * @property file {BsUploadFileSource} - object used for accessing file data
 * @property fileSpec {FileSpec} - the original FileSpec which determines the source file location
 * @property targetName {string} - the name to be used for the file on BSN (usually the same as the given file name,
 *  but it may be changed to resolve duplicate name issue)
 * @property destinationPath {string} - destination BSN path for file
 * @property [existingAsset] {BsAssetLocator} - if specified, determines an existingAsset on BSN which will be
 *  replaced by this upload
 * @property [parentAssetType] {AssetType} - if file is being uploaded for a composite asset, such as a presentation,
 *  dynamic playlist, etc. - the AssetType of the composite asset
 * @property [parentAssetNames] {string[]} - the names of the composite asset for which this asset is being uploaded
 *  There may be more than one is situations where the job is uploading multiple composite assets.
 */
export interface BsUploadFileItemSpec {
    file: BsUploadFileSource;
    fileSpec: FileSpec;
    targetName: string;
    destinationPath: string;
    existingAsset?: BsAssetLocator;
    parentAssetType?: AssetType;
    parentAssetNames?: string[];
}
/**
 * Interface containing progress information for a file being uploaded as part of a multi-file upload job.
 * @property jobIndex {number} - the index of the file item within the overall job
 * @property fileName {string} - the original name of the source file being uploaded
 * @property filePath {string} - if the file is being sourced from a local file system, this is the local path for the
 *  file. If the source is a File object (in a browser) or a Buffer, this is a blank string.
 * @property targetName {string} - the name to be used for the file on BSN (usually the same as the given file name,
 *  but it may be changed to resolve duplicate name issue)
 * @property destinationPath {string} - destination BSN path for file
 * @property fileSize {number} - the size of the file in bytes
 * @property status {BsUploadItemStatus}
 * @property fractionComplete {number} - fraction of the file which has been uploaded so far,
 *  expressed as a number between 0 and 1
 */
export interface BsUploadFileProgress {
    readonly jobIndex: number;
    readonly fileName: string;
    readonly filePath: string;
    readonly targetName: string;
    readonly destinationPath: string;
    readonly fileSize: number;
    readonly status: BsUploadItemStatus;
    readonly fractionComplete: number;
}
export type BsUploadFileProgressCallback = (progress: BsUploadFileProgress) => void;
/**
 * Interface for object created to manage and track upload progress for a web page session.
 */
export interface BsUploadWebPage {
    readonly jobIndex: number;
    readonly name: string;
    readonly totalFileCount: number;
    readonly uploadedFileCount: number;
    readonly totalByteCount: number;
    readonly status: BsUploadItemStatus;
    readonly fractionComplete: number;
    readonly detailedUploadProgress: BsUploadWebPageProgress;
    readonly summarizedUploadProgress: BsUploadWebPageProgressSummary;
    upload(): Promise<BsUploadItemResult>;
    cancel(): any;
}
/**
 * Interface containing necessary data for a content file to be uploaded as part of a multi-file upload job.
 * @property siteName {string} - name of the Html Site
 * @property siteType {AssetType} - type of the Html Site - one of {AssetType.HtmlSite, AssetType.DeviceHtmlSite}
 * @property targetName {string} - the name to be used for the site on BSN (usually the same as the given site name,
 *  but it may be changed to resolve duplicate name issue)
 * @property indexUploadFile {BsUploadFileItemSpec} - file upload specification for the base index file
 *  for the web site
 * @property assetUploadFiles {BsUploadFileItemSpec[]} - an array of file upload specifications for
 *  each of the web page asset files.
 *  The destinationPath for each of these specifications defines the relative path of the asset in relation to the
 *  main index file.
 * @property [existingAsset] {BsAssetLocator} - if specified, this represent the AssetLocator of an existing web site
 *  to be updated. The name of the associated web site must match the siteName in this structure.
 * @property [presentationNames] {string[]} - if Html site is being uploaded as part of a presentation upload job,
 *  the names of the presentations in which the asset is used.
 */
export interface BsUploadWebPageSessionSpec {
    siteName: string;
    siteType: AssetType;
    targetName: string;
    indexUploadFile: BsUploadFileItemSpec;
    assetUploadFiles: BsUploadFileItemSpec[];
    existingAsset?: BsAssetLocator;
    presentationNames?: string[];
}
export interface BsUploadWebPageResult {
    readonly indexFileUploadResult: BsUploadItemResult;
    readonly assetUploadResults: BsUploadItemResult[];
    readonly allFileUploadsSucceeded: boolean;
}
export interface BsUploadWebPageProgress {
    readonly jobIndex: number;
    readonly name: string;
    readonly totalFiles: number;
    readonly totalBytes: number;
    readonly uploadedFiles: number;
    readonly indexFileUploadProgress: BsUploadFileProgress;
    readonly assetUploadProgress: BsUploadFileProgress[];
    readonly status: BsUploadItemStatus;
    readonly fractionComplete: number;
}
export type BsUploadWebPageProgressCallback = (progress: BsUploadWebPageProgress) => void;
export interface BsUploadWebPageProgressSummary {
    readonly jobIndex: number;
    readonly name: string;
    readonly totalFiles: number;
    readonly totalBytes: number;
    readonly uploadedFiles: number;
    readonly status: BsUploadItemStatus;
    readonly fractionComplete: number;
}

export class ProbeContentResolutionType {
    static NA: string;
    static FK: string;
    static HD: string;
    static SD: string;
    static CIF: string;
    static QCIF: string;
}
export class DecoderName {
    static HD1: string;
    static HD2: string;
    static FK: string;
    static FK2: string;
}
export interface ParsedProbeData {
    TT?: string;
    PL?: number;
    IX?: string;
    AP?: number;
    AC?: number;
    ACH?: number;
    ASR?: number;
    AD?: number;
    AB?: number;
    VP?: number;
    VC?: string;
    W?: number;
    H?: number;
    VD?: number;
    CD?: number;
    VFR?: number;
    D?: number;
    FT?: number;
    SP?: number;
    SL?: string;
    CS?: number;
    CL?: string;
}
export interface ParsedProbeDataResult {
    data: ParsedProbeData;
    version: number;
}
export interface ProbeDataResult {
    data: string;
    stdout: string[];
    stderr: string[];
}
export interface ProbeCanPlayResult {
    playable: boolean;
    playableResult: ProbePlayableStatus;
    playableMsg: string;
    isSeamless: boolean;
    video: ProbePlayableStatus;
    videoMsg: string;
    audio: ProbePlayableStatus;
    audioMsg: string;
}
export class ImagePlayableStatus {
    static playable: string;
    static playableSeamlessly: string;
    static noMedia: string;
    static imageSizeExceeded: string;
    static imageSizeUnknown: string;
    static imageIsCmyk: string;
}
export class ProbePlayableStatus {
    static cpPlayable: number;
    static cpPlayableSeamlessly: number;
    static cpPlayableMax: number;
    static cpProbString: number;
    static cpContainer: number;
    static cpNoMedia: number;
    static cpAudioSampleRate: number;
    static cpAudioType: number;
    static cpAudioChannels: number;
    static cpVideoType: number;
    static cpVideoResolution: number;
    static cpVideoH265: number;
}
export interface MediaLegalityResults {
    mediaPlayable: boolean;
    videoPlayableStatus?: ProbePlayableStatus;
    audioPlayableStatus?: ProbePlayableStatus;
    imagePlayableStatus?: ImagePlayableStatus;
}

/** @module Core:publish */
export class ScheduleRecurrencePattern {
    static AllDays: string;
    static Weekends: string;
    static Weekdays: string;
    static Custom: string;
}
export class StorageSpaceLimitUnits {
    static Percentage: string;
    static Megabyte: string;
}
export interface PublishData {
    hdX23Firmware: string;
    lsX23Firmware: string;
    hsX23Firmware: string;
    hoX23Firmware: string;
    xdX33Firmware: string;
    xtX43Firmware: string;
    aux5Firmware: string;
    xdX34_XTX44Firmware: string;
    hdX4_HSX4_LSX4Firmware: string;
    ['4KX42Firmware']: string;
    enableSerialDebugging: boolean;
    enableSystemLogDebugging: boolean;
    enableStorageSpaceLimit: boolean;
    storageSpaceLimitUnits: StorageSpaceLimitUnits;
    publishedDataSizeLimit: number;
    dynamicDataSizeLimit: number;
    htmlDataSizeLimit: number;
    htmlLocalStorageSizeLimit: number;
    webDatabaseSizeLimit: number;
}
export const PublishDataKeys: string[];
export interface PresentationScheduleItem {
    presentationLocator: BsAssetLocator;
    dateTime: Date;
    duration: number;
    allDayEveryDay: boolean;
    recurrence: boolean;
    recurrencePattern: ScheduleRecurrencePattern;
    recurrencePatternDaysOfWeek: number;
    recurrenceStartDate: Date;
    recurrenceGoesForever: boolean;
    recurrenceEndDate: Date;
    interruption: boolean;
}

/** @module Core:bsnObjects */
export interface BsnDataFeedItemProperties {
    title: string;
    description: string;
    validityStartDate: Date | null;
    validityEndDate: Date | null;
}
export interface BsnMediaFeedItemProperties extends BsnDataFeedItemProperties {
    displayDuration: number;
    customFields: BsnCustomFields | {};
}
export interface BsnCustomFields {
    [name: string]: string;
}
export interface BsnDataFeedProperties {
    location: AssetLocation;
    id: number;
    name: string;
    physicalPath: string;
    fileSize: number;
    fileHash: string;
    creationDate: Date;
    lastModifiedDate: Date;
    permissions: BsnObjectPermission[];
}
export interface BsnTextFeedProperties extends BsnDataFeedProperties {
    type: 'BSNDataFeed';
    items: BsnDataFeedItemProperties[] | null;
}
export interface BsnMediaFeedProperties extends BsnDataFeedProperties {
    type: 'BSNMediaFeed';
    ttl: number;
    content: BsContentAssetItem[] | null;
}
export interface BsnDynamicPlaylistItemProperties {
    displayDuration: number;
    validityStartDate: Date | null;
    validityEndDate: Date | null;
}
export class BsnTaggedPlaylistItemStatus {
    static Approved: string;
    static PendingAddition: string;
    static PendingDeletion: string;
    static Pending: string;
}
export interface BsnTaggedPlaylistItemProperties extends BsnDynamicPlaylistItemProperties {
    state: BsnTaggedPlaylistItemStatus;
}
export interface BsnDynamicPlaylistProperties extends BsnDataFeedProperties {
    type: 'BSNDynamicPlaylist';
    supportsAudio: boolean;
    supportsVideo: boolean;
    supportsImages: boolean;
    content: BsContentAssetItem[] | null;
    permissions: BsnObjectPermission[];
}
export interface BsnTaggedPlaylistProperties {
    type: 'BSNTaggedPlaylist';
    location: AssetLocation;
    id: number;
    name: string;
    physicalPath: string;
    contentsVirtualPath: string;
    taggedListSpec: BsnTaggedListSpecification;
    ttl: number;
    waitingForApprove: boolean;
    creationDate: Date;
    lastModifiedDate: Date;
    content: BsContentAssetItem[] | null;
    permissions: BsnObjectPermission[];
}
export type BsnFeedProperties = BsnTextFeedProperties | BsnMediaFeedProperties | BsnDynamicPlaylistProperties | BsnTaggedPlaylistProperties;
export interface BsnDataFeedReference {
    id: number;
    name: string;
}
export class BsnTagDataType {
    static String: string;
    static Number: string;
    static Boolean: string;
    static DateTime: string;
    static NumericArray: string;
    static StringArray: string;
}
export class BsnTagType {
    static SystemDevice: string;
    static SystemContent: string;
    static Device: string;
    static Content: string;
}
export interface BsnTagKeyPatternSpecification {
    type?: BsnTagType;
    dataType?: BsnTagDataType;
    name: string;
}
export interface BsnTagKeySpecification {
    type: BsnTagType;
    dataType: BsnTagDataType;
    name: string;
}
export type BsnTagValueType = string | number | boolean | Date | Array<string | number>;
export interface BsnTagSpecification extends BsnTagKeySpecification {
    value: BsnTagValueType;
}
export interface BsnTagValuePatternSpecification extends BsnTagKeyPatternSpecification {
    value?: string;
}
/**
 * Specifies the type of BSN presentation
 * @enum BsnPresentationType {string}
 *
 * @property Simple - Presentation is backed by presentation entities in the BSN database. These presentations
 *  were created by the legacy BSN WebUI. There is no project file stored for such presentations.
 * @property Complete - Presentation data is kept externally to legacy BSN database, usually in a project file.
 *  These presentations typically have been created with BrightAuthor. There are some cases of Complete presentations
 *  without a project file, most notably the 'Disabled Players' presentation that is loaded to every BSN account.
 */
export class BsnPresentationType {
    static Simple: string;
    static Complete: string;
}
/**
 * Specifies the status of BSN presentation
 * @enum BsnPresentationStatus {string}
 *
 * @property Draft - Presentation is in the authoring phase and has not and cannot be published. The required
 *  files and assets for publishing may not have been uploaded to BSN yet.
 * @property Complete - Presentation is complete and ready to publish, or already published.
 */
export class BsnPresentationStatus {
    static Draft: string;
    static Published: string;
}
export interface BsnPlayerFirmwareSpecification {
    version: string;
    supportedModels: PlayerModel[];
}
export interface BsnAutorunProperties {
    version: string;
    isCustom: boolean;
    minFirmwares: BsnPlayerFirmwareSpecification[];
    isRevoked: boolean;
}
export interface BsnPresentationAssetItemSpecification {
    mediaFiles?: BsAssetItem[];
    webPages?: BsAssetItem[];
    liveTextFeeds?: BsAssetItem[];
    liveMediaFeeds?: BsAssetItem[];
    dynamicPlaylists?: BsAssetItem[];
    taggedPlaylists?: BsAssetItem[];
    autorunPlugins?: BsAssetItem[];
    linkedPresentations?: BsAssetItem[];
    deviceWebPage?: BsAssetItem;
    useStandardDeviceWebPage?: boolean;
    useClockZoneWebPage?: boolean;
}
export interface BsnScreenSettings {
    videoMode: VideoMode;
    connector: VideoConnectorType;
    backgroundColor: BsColor;
}
export interface BsnGroupItem {
    id: number;
    name: string;
}
export interface BsnPresentationProperties {
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
    autoplayFile: BsAssetItem | null;
    projectFile: BsAssetItem | null;
    resourcesFile: BsAssetItem | null;
    userDefinedEventsFile: BsAssetItem | null;
    deviceWebPage: BsAssetItem | null;
    thumbnailFile: BsAssetItem | null;
    autorunPlugins: BsAssetItem[] | null;
    files: BsAssetItem[] | null;
    dependencies: BsnPresentationReference[] | null;
    groups: BsnGroupItem[];
    permissions: BsnObjectPermission[];
}
export class BsnPresentationReferenceType {
    static Presentation: string;
    static BrightWallPresentation: string;
}
export interface BsnPresentationReference {
    id: number;
    name: string;
    type: BsnPresentationReferenceType;
}
export interface BsnHtmlSiteAssetItem {
    name: string;
    path: string;
    fileUrl: string;
    fileSize: number;
    fileHash: string;
}
export interface BsnHtmlSiteProperties {
    location: AssetLocation;
    id: number;
    name: string;
    uploadDate: Date;
    indexFile: BsnHtmlSiteAssetItem;
    assets?: BsnHtmlSiteAssetItem[];
    permissions: BsnObjectPermission[];
}
export interface BsnDeviceRegistrationTokenEntity {
    token: string;
    scope: string;
    validFrom: Date;
    validTo: Date;
}
export interface BsnRoleOperationPermission {
    operationUid: string;
    isAllowed: boolean;
}
export type BsRoleOperationPermission = BsnRoleOperationPermission;
export class BsnObjectPermissionType {
    static Role: string;
    static User: string;
}
export interface BsnObjectPermission extends BsnRoleOperationPermission {
    type: BsnObjectPermissionType;
}
export interface BsnObjectRolePermission extends BsnObjectPermission {
    type: 'Role';
    roleName: string;
}
export interface BsnObjectUserPermission extends BsnObjectPermission {
    type: 'User';
    login: string;
}
export function bscCreateBsnObjectRolePermission(roleName: string, operationUid: string, isAllowed: boolean): BsnObjectRolePermission;
export function bscIsBsnObjectRolePermission(permission: BsnObjectPermission | null | undefined): permission is BsnObjectRolePermission;
export function bscCreateBsnObjectUserPermission(login: string, operationUid: string, isAllowed: boolean): BsnObjectUserPermission;
export function bscIsBsnObjectUserPermission(permission: BsnObjectPermission | null | undefined): permission is BsnObjectUserPermission;
export interface BsnConnectorOverrideProps {
    bsnClient: BsnClient;
    oAuthClient: BsnOAuthClient;
    oAuthServerConfiguration: BsnOAuthServerConfiguration;
    bDeployServerConfiguration: BsnBDeployServerConfiguration;
    indexServerConfiguration: BsnIndexServerConfiguration;
    bsnServerConfiguration: BsnServerConfiguration;
    bsnRemoteProcedureConfiguration: BsnRemoteProcedureConfiguration;
    clientRedirectUrl: string;
}
export interface BsnClient {
    id: string;
    secret: string;
}
export interface BsnRemoteProcedureConfiguration {
    bsnRemoteProcedureDefaultUrl: string;
    bsnRemoteProcedureJobAssignEndPoint: string;
    bsnRemoteProcedureJobStatusEndPoint: string;
    bsnRemoteProcedureJobDeleteEndPoint: string;
}
export interface BsnOAuthClient {
    id: string;
    secret: string;
    refreshExpirationInterval: number;
}
export interface BsnOAuthServerConfiguration {
    oAuthTokenUrl: string;
}
export interface BsnBDeployServerConfiguration {
    bDeployUrl: string;
}
export interface BsnIndexServerConfiguration {
    indexUrl: string;
}
export interface BsnServerConfiguration {
    bsnDefaultUrl: string;
    bsnAuthEndpoint: string;
    bsnRestApiEndpoint: string;
    bsnUploadApiEndpoint: string;
}
export class BsnFilterType {
    static string: string;
    static enum: string;
    static number: string;
    static dateTime: string;
    static boolean: string;
    static stringArray: string;
    static numericArray: string;
}
export class BsnTimeUnits {
    static years: string;
    static months: string;
    static days: string;
}
export interface BsnTimeSpanFilter {
    units: BsnTimeUnits;
    length: number;
    dateTime: Date;
}
export type BsnStringFilterParams = string | string[];
export type BsnNumberFilterParams = number | number[];
export type BsnDateFilterParams = Date | Date[] | BsnTimeSpanFilter;
export type BsnBooleanFilterParams = 'TRUE' | 'FALSE';
export type BsnFilterParams = BsnStringFilterParams | BsnNumberFilterParams | BsnDateFilterParams | BsnBooleanFilterParams;
export type BsnFilterParamArrays = string[] | number[] | Date[];
export class BsnStringFilterOperator {
    static Is: string;
    static IsNot: string;
    static BeginsWith: string;
    static EndsWith: string;
    static Contains: string;
    static ContainsAll: string;
    static ContainsAny: string;
    static DoesNotContain: string;
    static IsIn: string;
    static IsNotIn: string;
}
export class BsnNumberFilterOperator {
    static Is: string;
    static IsNot: string;
    static IsGreaterThan: string;
    static IsLessThan: string;
    static IsInTheRange: string;
    static IsNotInTheRange: string;
    static IsIn: string;
    static IsNotIn: string;
}
export class BsnDateFilterOperator {
    static Is: string;
    static IsNot: string;
    static IsAfter: string;
    static IsBefore: string;
    static InTheLast: string;
    static NotInTheLast: string;
    static IsInTheRange: string;
    static IsNotInTheRange: string;
    static IsIn: string;
    static IsNotIn: string;
}
export class BsnBooleanFilterOperator {
    static Is: string;
}
export class BsnArrayFilterOperator {
    static Contains: string;
    static ContainsAll: string;
    static ContainsAny: string;
}
export type BsnFilterOperator = BsnStringFilterOperator | BsnNumberFilterOperator | BsnDateFilterOperator | BsnBooleanFilterOperator | BsnArrayFilterOperator;
/**
 * Return list of BsnFilterOperator values that are compatible with a given BsnFilterType.
 * @param type {BsnFilterType}
 * @returns {BsnFilterOperator[]}
 */
export function bscGetOperatorListForFilterType(type: BsnFilterType): BsnFilterOperator[];
/**
 * Return list of BsnFilterOperator values that are compatible with a given BsnTagDataType.
 * @param dataType {BsnTagDataType}
 * @returns {BsnFilterOperator[]}
 */
export function bscGetOperatorListForTagDataType(dataType: BsnTagDataType): BsnFilterOperator[];
export class BsnFilterCombineType {
    static All: string;
    static Any: string;
}
export interface BsnFilterComponent {
    type: BsnFilterType;
    property: string;
    operator: BsnFilterOperator;
    params: BsnFilterParamArrays | BsnTimeSpanFilter;
}
/**
 * Type guard for 'params' property of BsnFilterComponent. Determines if the params property
 *  is in reality the parameter object for a time span filter.
 * @param param
 * @returns {boolean}
 */
export function bscIsTimeSpanFilterParam(param: BsnFilterParams): param is BsnTimeSpanFilter;
export interface BsnFilterSpecification {
    components: BsnFilterComponent[];
    combineType: BsnFilterCombineType;
}
/**
 * Create a BsnFilterComponent for a entity property filter with the given filter type and property name.
 * @param type {BsnFilterType}
 * @param property {string} - name of entity property to use in the filter  component
 * @param operator {BsnFilterOperator}
 * @param values {BsnFilterParams}
 * @returns {BsnFilterComponent | null}
 */
export function bscCreateFilterComponent(type: BsnFilterType, property: string, operator: BsnFilterOperator, values: BsnFilterParams): BsnFilterComponent;
/**
 * Return BsnFilterType for a tag filter using a tag with given dataType.
 * @param dataType {BsnTagDataType}
 * @returns {BsnFilterType}
 */
export function bscGetBsnFilterTypeForTagDataType(dataType: BsnTagDataType): BsnFilterType;
/**
 * Create a BsnFilterComponent for a tag filter for the given BsnTagKeySpecification.
 * This will return null if specified operator is not valid for the tag dataType.
 * @param tagKey {BsnTagKeySpecification}
 * @param operator {BsnFilterOperator}
 * @param values {BsnFilterParams}
 * @returns {BsnFilterComponent | null}
 */
export function bscCreateTagFilterComponent(tagKey: BsnTagKeySpecification, operator: BsnFilterOperator, values: BsnFilterParams): BsnFilterComponent | null;
/**
 * Return true if the given BsnFilterComponent has a valid operator for the specified BsnFilterType,
 *  and if all values in the value array are of the correct type for the BsnFilterType.
 * @param comp {BsnFilterComponent}
 * @returns {boolean}
 */
export function bscIsValidBsnFilterComponent(comp: BsnFilterComponent): boolean;
export function bscCreateBsnFilterSpecification(components: BsnFilterComponent | BsnFilterComponent[], combineType?: BsnFilterCombineType): BsnFilterSpecification;
export function bscIsBsnFilterSpecification(value: any): value is BsnFilterSpecification;
export interface BsnTagSortSpecification {
    sortTagName: string | null;
    sortDescending: boolean;
}
export function bscCreateTagSortSpecification(sortTagName?: string | null, sortDescending?: boolean): BsnTagSortSpecification;
export function bscIsTagSortSpecification(value: any): value is BsnTagSortSpecification;
export interface BsnTaggedListSpecification extends BsnTagSortSpecification {
    filterSpec: BsnFilterSpecification | null;
}
export function bscCreateTaggedListSpecification(filterSpec: BsnFilterSpecification | null, sortTagName?: string | null, sortDescending?: boolean): BsnTaggedListSpecification;
export function bscIsTaggedListSpecification(value: any): value is BsnTaggedListSpecification;

/** @module Core:bDeployObjects */
export interface BDeploy {
    username: string;
    networkName: string;
    client: string;
    packageName: string;
    url?: string;
}
export interface BDeployPageFilter {
    pageNum: number;
    pageSize: number;
}
export class BDeploySortType {
    static ASC: number;
    static DESC: number;
}
export interface BDeploySetupQueryFilter {
    networkName?: string;
    username?: string;
    packageName?: string;
    bsnGroupName?: string;
    setupType?: string;
    deviceName?: string;
}
export interface BDeploySetupSortFilter {
    networkName?: BDeploySortType;
    username?: BDeploySortType;
    packageName?: BDeploySortType;
    bsnGroupName?: BDeploySortType;
    setupType?: BDeploySortType;
    deviceName?: BDeploySortType;
}
export interface BDeploySetupFilter {
    page?: BDeployPageFilter;
    query?: BDeploySetupQueryFilter;
    sort?: BDeploySetupSortFilter;
}
export interface BDeployDeviceQueryFilter {
    serial?: string;
    NetworkName?: string;
    setupId?: string;
    username?: string;
    model?: PlayerModel;
}
export interface BDeployDeviceSortFilter {
    serial?: BDeploySortType;
    NetworkName?: BDeploySortType;
    name?: BDeploySortType;
    setupId?: BDeploySortType;
    setupName?: BDeploySortType;
    url?: BDeploySortType;
    createdAt?: BDeploySortType;
    username?: BDeploySortType;
    model?: BDeploySortType;
}
export interface BDeployDeviceFilter {
    page?: BDeployPageFilter;
    query?: BDeployDeviceQueryFilter;
    sort?: BDeployDeviceSortFilter;
}

/** @module Core:firmware */
export class FirmwareUpdateSource {
    static Production: string;
    static Beta: string;
    static MinimumCompatible: string;
    static SpecificFile: string;
    static SpecificUrl: string;
    static None: string;
    static Existing: string;
}
export class FirmwareUpdateType {
    static Standard: string;
    static Different: string;
    static Newer: string;
    static Save: string;
}
export interface FirmwareUpdateByFamily {
    [family: string]: PublishFirmware;
}
export interface PublishFirmware {
    firmwareUpdateSource?: string | null;
    firmwareUpdateSourceFilePath: string;
    firmwareUpdateSourceUrl: string;
    firmwareUpdateStandardTargetFileName: string;
    firmwareUpdateDifferentTargetFileName: string;
    firmwareUpdateNewerTargetFileName: string;
    firmwareUpdateSaveTargetFileName: string;
    firmwareUpdateVersion: string;
    productionReleaseURL: string;
    betaReleaseURL: string;
    compatibleReleaseURL: string;
    productionVersion: string;
    betaVersion: string;
    compatibleVersion: string;
    productionVersionNumber: number;
    betaVersionNumber: number;
    compatibleVersionNumber: number;
    productionReleaseSHA1: string;
    betaReleaseSHA1: string;
    compatibleReleaseSHA1: string;
    productionReleaseFileLength: number;
    betaReleaseFileLength: number;
    compatibleReleaseFileLength: number;
    existingFWContentID: string;
}
export function bscGetFirmwareUpdateTargetFileName(firmWare: PublishFirmware, firmwareUpdateType: FirmwareUpdateType): string;
export function bscGetFirmwareFileName(firmWare: PublishFirmware, firmwareUpdateType: FirmwareUpdateType): string;
export function bscGetFirmwareSourceUrl(firmWare: PublishFirmware): string;
export function bscCreatePublishFirmware(props?: Partial<PublishFirmware> | null): PublishFirmware;

/** @module Core:deviceSetup */
export class DeviceNetworkingConfiguration {
    static Standalone: string;
    static LocalFileNetworking: string;
    static LegacyLocalFileNetworking: string;
    static SimpleFileNetworking: string;
    static BrightSignNetworking: string;
    static LocalToBrightSignNetworking: string;
    static PartnerApplication: string;
}
export class UnitNamingMethod {
    static UnitNameOnly: string;
    static AppendUnitId: string;
}
export class TimeZone {
    static EST: string;
    static PST: string;
    static CST: string;
    static JST: string;
    static MST: string;
    static GMTBST: string;
    static WET: string;
    static CET: string;
    static EET: string;
    static MSK: string;
    static AWST: string;
    static AWST1: string;
    static ACST: string;
    static ACST1: string;
    static AEST: string;
    static AEST1: string;
    static NFT: string;
    static NZST: string;
    static GMT: string;
    static AKST: string;
    static HST: string;
    static HST1: string;
    static MST1: string;
    static EST1: string;
    static AST: string;
    static CST2: string;
    static MST2: string;
    static PST2: string;
    static BRT: string;
    static NST: string;
    static AZOT: string;
    static SAMT: string;
    static YEKT: string;
    static IST: string;
    static NPT: string;
    static OMST: string;
    static CXT: string;
    static GMTMINUSONE: string;
    static GMTMINUSTWO: string;
    static GMTMINUSTHREE: string;
    static GMTMINUSFOUR: string;
    static GMTMINUSFIVE: string;
    static GMTMINUSSIX: string;
    static GMTMINUSSEVEN: string;
    static GMTMINUSEIGHT: string;
    static GMTMINUSNINE: string;
    static GMTMINUSTEN: string;
    static GMTMINUSELEVEN: string;
    static GMTMINUSTWELEVE: string;
    static GMTMINUSTHIRTEEN: string;
    static GMTMINUSFOURTEEN: string;
    static GMTPLUSONE: string;
    static GMTPLUSTWO: string;
    static GMTPLUSTHREE: string;
    static GMTPLUSFOUR: string;
    static GMTPLUSFIVE: string;
    static GMTPLUSSIX: string;
    static GMTPLUSSEVEN: string;
    static GMTPLUSEIGHT: string;
    static GMTPLUSNINE: string;
    static GMTPLUSNINEHALF: string;
    static GMTPLUSTEN: string;
    static GMTPLUSELEVEN: string;
    static GMTPLUSTWELEVE: string;
    static GMTPLUSTHIRTEEN: string;
    static GMTPLUSFOURTEEN: string;
}
export class BsDsLwsConfiguration {
    static Content: string;
    static Status: string;
    static None: string;
}
export class DeviceSetupProperties {
    static DeviceName: string;
    static DeviceDescription: string;
    static UnitNamingMethod: string;
    static TimeZone: string;
    static IdleScreenColor: string;
    static SetupType: string;
    static BsnDeviceRegistrationTokenEntity: string;
    static BDeploy: string;
    static BsnGroupName: string;
    static TimeBetweenContentChecks: string;
    static TimeBetweenHeartbeats: string;
    static SfnWebFolderUrl: string;
    static SfnUserName: string;
    static SfnPassword: string;
    static SfnEnableBasicAuthentication: string;
    static TimeServer: string;
    static UseWireless: string;
    static SSID: string;
    static Passphrase: string;
    static RemoteDwsEnabled: string;
    static DwsEnabled: string;
    static DwsPassword: string;
    static LwsEnabled: string;
    static LwsUserName: string;
    static LwsPassword: string;
    static LwsEnableUpdateNotifications: string;
    static LwsConfig: string;
    static BsnCloudEnabled: string;
    static PlaybackLoggingEnabled: string;
    static EventLoggingEnabled: string;
    static DiagnosticLoggingEnabled: string;
    static StateLoggingEnabled: string;
    static VariableLoggingEnabled: string;
    static UploadLogFilesAtBoot: string;
    static UploadLogFilesAtSpecificTime: string;
    static UploadLogFilesTime: string;
    static LogHandlerUrl: string;
    static EnableRemoteSnapshot: string;
    static RemoteSnapshotInterval: string;
    static RemoteSnapshotMaxImages: string;
    static RemoteSnapshotJpegQualityLevel: string;
    static RemoteSnapshotScreenOrientation: string;
    static RemoteSnapshotHandlerUrl: string;
    static EnableSerialDebugging: string;
    static EnableSystemLogDebugging: string;
    static ContentDataTypeEnabledWired: string;
    static TextFeedsDataTypeEnabledWired: string;
    static HealthDataTypeEnabledWired: string;
    static MediaFeedsDataTypeEnabledWired: string;
    static LogUploadsXfersEnabledWired: string;
    static ContentDataTypeEnabledWireless: string;
    static TextFeedsDataTypeEnabledWireless: string;
    static HealthDataTypeEnabledWireless: string;
    static MediaFeedsDataTypeEnabledWireless: string;
    static LogUploadsXfersEnabledWireless: string;
    static UseDhcp: string;
    static StaticIpAddress: string;
    static SubnetMask: string;
    static Gateway: string;
    static Dns1: string;
    static Dns2: string;
    static Dns3: string;
    static RateLimitModeOutsideWindow: string;
    static RateLimitRateOutsideWindow: string;
    static RateLimitModeInWindow: string;
    static RateLimitRateInWindow: string;
    static RateLimitModeInitialDownloads: string;
    static RateLimitRateInitialDownloads: string;
    static UseDhcp2: string;
    static StaticIpAddress2: string;
    static SubnetMask2: string;
    static Gateway2: string;
    static Dns12: string;
    static Dns22: string;
    static Dns32: string;
    static RateLimitModeOutsideWindow2: string;
    static RateLimitRateOutsideWindow2: string;
    static RateLimitModeInWindow2: string;
    static RateLimitRateInWindow2: string;
    static RateLimitModeInitialDownloads2: string;
    static RateLimitRateInitialDownloads2: string;
    static NetworkConnectionPriority: string;
    static SpecifyHostname: string;
    static Hostname: string;
    static UseProxy: string;
    static ProxyAddress: string;
    static ProxyPort: string;
    static NetworkHosts: string;
    static NetworkDiagnosticsEnabled: string;
    static TestEthernetEnabled: string;
    static TestWirelessEnabled: string;
    static TestInternetEnabled: string;
    static UseCustomSplashScreen: string;
    static ContentDownloadsRestricted: string;
    static ContentDownloadRangeStart: string;
    static ContentDownloadRangeEnd: string;
    static HeartbeatsRestricted: string;
    static HeartbeatsRangeStart: string;
    static HeartbeatsRangeEnd: string;
    static BrightWallNameKey: string;
    static BrightWallScreenNumberKey: string;
    static UsbUpdatePassword: string;
    static EnablePhysicalLan: string;
    static Vlans: string;
    static InheritNetworkProperties: string;
    static InternalCaArtifacts: string;
}
export interface BsDsSetupVlanParams {
    vlanId: number;
    useDHCP: boolean;
    staticIPAddress: string;
    subnetMask: string;
    gateway: string;
    dns1: string;
    dns2: string;
    dns3: string;
}
export interface BsDsSetupNetworkHostParams {
    label: string;
    hostName: string;
    bypassProxy: boolean;
    manuallyAdded: boolean;
}
export interface BsDsCaArtifact {
    name: string;
    asset: BsAssetItem;
}
export interface BsDsSetupParams {
    version: string;
    _id: string;
    bDeploy: BDeploy;
    firmwareUpdatesByFamily: FirmwareUpdateByFamily;
    firmwareUpdateType: string;
    deviceName: string;
    deviceDescription: string;
    unitNamingMethod: UnitNamingMethod;
    timeZone: string;
    idleScreenColor: BsColor;
    setupType: DeviceNetworkingConfiguration;
    bsnDeviceRegistrationTokenEntity: BsnDeviceRegistrationTokenEntity;
    bsnGroupName: string;
    timeBetweenNetConnects: number;
    timeBetweenHeartbeats: number;
    sfnWebFolderUrl: string;
    sfnUserName: string;
    sfnPassword: string;
    sfnEnableBasicAuthentication: boolean;
    timeServer: string;
    useWireless: boolean;
    ssid: string;
    passphrase: string;
    remoteDwsEnabled: boolean;
    dwsEnabled: boolean;
    dwsPassword: string;
    lwsEnabled: boolean;
    lwsConfig: string;
    lwsEnableUpdateNotifications: boolean;
    lwsUserName: string;
    lwsPassword: string;
    bsnCloudEnabled: boolean;
    playbackLoggingEnabled: boolean;
    eventLoggingEnabled: boolean;
    stateLoggingEnabled: boolean;
    diagnosticLoggingEnabled: boolean;
    variableLoggingEnabled: boolean;
    uploadLogFilesAtBoot: boolean;
    uploadLogFilesAtSpecificTime: boolean;
    uploadLogFilesTime: number;
    logHandlerUrl: string;
    enableRemoteSnapshot: boolean;
    remoteSnapshotInterval: number;
    remoteSnapshotMaxImages: number;
    remoteSnapshotJpegQualityLevel: number;
    remoteSnapshotScreenOrientation: MonitorOrientationType;
    remoteSnapshotHandlerUrl: string;
    enableSerialDebugging: boolean;
    enableSystemLogDebugging: boolean;
    contentDataTypeEnabledWired: boolean;
    textFeedsDataTypeEnabledWired: boolean;
    healthDataTypeEnabledWired: boolean;
    mediaFeedsDataTypeEnabledWired: boolean;
    logUploadsXfersEnabledWired: boolean;
    contentDataTypeEnabledWireless: boolean;
    textFeedsDataTypeEnabledWireless: boolean;
    healthDataTypeEnabledWireless: boolean;
    mediaFeedsDataTypeEnabledWireless: boolean;
    logUploadsXfersEnabledWireless: boolean;
    useDHCP: boolean;
    staticIPAddress: string;
    subnetMask: string;
    gateway: string;
    dns1: string;
    dns2: string;
    dns3: string;
    rateLimitModeOutsideWindow: string;
    rateLimitRateOutsideWindow: number;
    rateLimitModeInWindow: string;
    rateLimitRateInWindow: number;
    rateLimitModeInitialDownloads: string;
    rateLimitRateInitialDownloads: number;
    useDHCP_2: boolean;
    staticIPAddress_2: string;
    subnetMask_2: string;
    gateway_2: string;
    dns1_2: string;
    dns2_2: string;
    dns3_2: string;
    rateLimitModeOutsideWindow_2: string;
    rateLimitRateOutsideWindow_2: number;
    rateLimitModeInWindow_2: string;
    rateLimitRateInWindow_2: number;
    rateLimitModeInitialDownloads_2: string;
    rateLimitRateInitialDownloads_2: number;
    specifyHostname: boolean;
    hostname: string;
    useProxy: boolean;
    proxyAddress: string;
    proxyPort: number;
    networkHosts: BsDsSetupNetworkHostParams[];
    inheritNetworkProperties: boolean;
    networkConnectionPriority: string;
    networkDiagnosticsEnabled: boolean;
    testEthernetEnabled: boolean;
    testWirelessEnabled: boolean;
    testInternetEnabled: boolean;
    useCustomSplashScreen: boolean;
    contentDownloadsRestricted: boolean;
    contentDownloadRangeStart: number;
    contentDownloadRangeEnd: number;
    heartbeatsRestricted: boolean;
    heartbeatsRangeStart: number;
    heartbeatsRangeEnd: number;
    BrightWallName: string;
    BrightWallScreenNumber: string;
    usbUpdatePassword: string;
    enablePhysicalLan: boolean;
    vlans: BsDsSetupVlanParams[];
    internalCaArtifacts: BsDsCaArtifact[];
}
export interface BsDsSetupRuntimeParams {
    recoveryHandlerOverride?: string;
    endpoints_s3Url: string;
    endpoints_provisionServer: string;
    endpoints_bsnServer: string;
    endpoints_websocketsDWS: string;
    endpoints_bsnApiServer: string;
    endpoints_certsServer: string;
}
export interface BDeployDevice {
    client?: string;
    NetworkName?: string;
    username: string;
    serial: string;
    name?: string;
    model?: PlayerModel;
    desc?: string;
    customization?: string;
    setupId?: string;
    setupName?: string;
    url?: string;
    userdata?: string;
    activationCode?: string;
    activationCodeExpirationDate?: Date;
    readonly updatedAt?: Date;
    readonly createdAt?: Date;
    readonly _id?: string;
}
export interface BDeployApplication {
    url: string;
    name: string;
}

/** @module Core:deviceValidation */
/**
 * Validate a given string as a valid BrightSign Serial number
 * @param serial {string}
 * @returns {boolean} true if string is a valid serial number
 */
export function bscValidateSerialNumber(serial: string): boolean;

/** @module Core:partnerProduct */
export class TapProtocolType {
    static Serial: string;
    static Cdc: string;
    static Hid: string;
}
export class BMapProtocolType {
    static Hid: string;
    static None: string;
}
export class CommandLibrarySupportType {
    static Bmap: string;
    static Riviera: string;
    static None: string;
}
export class EolType {
    static CR: string;
    static LF: string;
    static CRLF: string;
}
export interface ProductTransportType {
    baudRate: number;
    dataBits: string;
    parity: string;
    stopBits: string;
    flowControl: string;
    invertSignals: boolean;
    sendEOL: EolType;
    receiveEOL: EolType;
}
export interface VolumeTable {
    xval1: number;
    yval1: number;
    xval2: number;
    yval2: number;
    xval3: number;
    yval3: number;
}
interface UsbRegistrySpec {
    registryKey: string;
    registryValue: string;
}
declare type UsbRegistrySettings = UsbRegistrySpec | [UsbRegistrySpec];
export interface PartnerProductType {
    partner: string;
    productName: string;
    displayName: string;
    productClass: string;
    transport: ProductTransportType;
    volumeTable: VolumeTable;
    bmapProtocol?: BMapProtocolType;
    commandLibrarySupport?: CommandLibrarySupportType;
    isAudioDevice?: boolean;
    usbAudioInterfaceIndex?: string;
    usbTapInterfaceIndex?: string;
    tapProtocol?: TapProtocolType;
    usbAsyncAudio?: boolean;
    usbNetInterfaceIndex?: string;
    usbInternalHub?: string;
    usbToSerial?: UsbRegistrySettings;
}
export interface PartnerProductSpec {
    partner: string;
    version: string;
    product: [PartnerProductType];
}
export interface WssCommandRequestHeader {
    resource: string;
    version: number;
    method: string;
}
export interface WssCommandRequestBody {
    [propertyName: string]: any;
}
export interface WssCommandRequest {
    header: WssCommandRequestHeader;
    body?: WssCommandRequestBody;
}
export interface WssDeviceSpecCommand {
    friendlyID: string;
    request: WssCommandRequest;
}
export interface WssEventResponseHeader {
    resource: string;
    method: string;
    version: number;
    status?: number | string;
}
export interface WssEventBodyProperty {
    [propertyName: string]: any;
}
export interface WssEventResponse {
    header: WssEventResponseHeader;
    body?: WssEventBodyProperty;
}
export interface WssDeviceSpecEvent {
    friendlyID: string;
    id: string;
    response: WssEventResponse;
}
export interface WssDeviceSpec {
    name: string;
    version: string;
    commands: WssDeviceSpecCommand[];
    events: WssDeviceSpecEvent[];
}
export function bscDisplayUsbPortNames(partnerProduct: PartnerProductType): boolean;
export function bscIsUsbAudioDevice(partnerProduct: PartnerProductType): boolean;
export function bscIsUsbNetworkedDevice(partnerProduct: PartnerProductType): boolean;
export function bscIsUsbHidCommunicationDevice(partnerProduct: PartnerProductType): boolean;
export {};

/** @module Core:utility */
export function bscReplaceTimeZoneWithUTC(time: Date): Date;
/**
 * A TimeSpanString is a string in the format of the string output of a Microsoft TimeSpan object, which
 *  is also support by moment.js duration objects.
 *  The string is in the format 'd.hh.mm.ss.f', where
 *    d = days
 *    hh = hours
 *    mm = minutes
 *    ss = seconds
 *    f = fraction of a second
 */
export type TimeSpanString = string;
/**
 * Convert time from string in TimeSpan format ('d.hh:mm:ss.f') to number of seconds.
 * Fractional seconds are limited to millisecond precision.
 * @param {TimeSpanString | null | undefined} ts - time span string
 * @return {number}
 */
export function bscTimeSpanStringToSeconds(ts: TimeSpanString | null | undefined): number;
/**
 * Convert time from number of seconds to string in TimeSpan format ('d.hh:mm:ss.f').
 * Days and fractional seconds are omitted if not necessary. Fractional seconds are rounded to the nearest millisecond.
 * @param {number} totalSeconds
 * @return {TimeSpanString}
 */
export function bscTimeSpanStringFromSeconds(totalSeconds: number): TimeSpanString;
/**
 * Map EXIF based orientation to RotationType value. This discards any information about reversed images,
 *  which are rare at best and generally do not occur in practice.
 * Undefined orientation is assumed to be standard.
 *  The mapping is as follows (second EXIF value in each case represents reversed image):
 *  RotationType.rot0 = Standard (EXIF value 1, 2),
 *  RotationType.rot90 = Top on right side (EXIF value 6, 5),
 *  RotationType.rot180 = Upside down (EXIF value 3, 4),
 *  RotationType.rot270 = Top on left side (EXIF value 8, 7).
 * For a good visualization, see https://www.impulseadventure.com/photo/exif-orientation.html.
 * @param {ImageOrientationType} orientation
 * @return {RotationType}
 */
export function bscImageOrientationToRotationType(orientation: ImageOrientationType): RotationType;
/**
 * Return true is the given string array properly represents a numeric array, which is defined here
 *  as a string array containing strings which either represent a number, or a number range in the form
 *  'x-y' where x and y are numbers. Whitespace is ignored
 * @param strArray {}string[]}
 * @returns {boolean}
 */
export function bscIsNumericArray(strArray: string[]): boolean;

/** @module Core:remote */
export class IrRemoteModel {
    static Unknown: string;
    static RC1001: string;
    static RC1002: string;
}

export interface BsIrRemoteControl {
    id: string;
    encoding: IrReceiverEncodings;
    manufacturerCode: number;
    buttons: BsIrRemoteButtons;
}
export interface BsIrRemoteButtons {
    [buttonCode: number]: BsIrRemoteButtonEntry;
}
export interface BsIrRemoteButtonEntry {
    buttonCode: number;
    buttonDescription: string;
}
export function bscGetIrRemoteControl(irRemoteModel: IrRemoteModel): BsIrRemoteControl;
