/* tslint:disable:quotemark max-line-length */
import {PlayerFamily, FileSpec, PartnerProductSpec} from './bscore';
export enum BsDeviceArtifactsErrorType {
    unknownError = 0,
    unexpectedError = 1,
    artifactsNotFoundError = 2,
    invalidParameterError = 3,
    unauthorizedError = 4,
    networkError = 5,
    requestError = 6,
    clientError = 7,
    serverError = 8,
    fileNotFoundError = 9,
    fileReadError = 10,
    methodNotAvailableError = 11
}
export class BsDeviceArtifactsError extends Error {
    name: string;
    type: BsDeviceArtifactsErrorType;
    response?: any;
    constructor(type: BsDeviceArtifactsErrorType, reason?: string);
}

export function bsDaGetPartnerProductsFileAbsolutePath(): string;
export function bsDaGetDeviceWebPageFileAbsolutePath(): string;
export function bsDaGetBsDateTimeFileAbsolutePath(): string;
export function bsDaGetAutoPluginsFileAbsolutePath(): string;
export function bsDaGetSimpleNetworkingSetupFileAbsolutePath(): string;
export function baDaGetStandaloneToBsnSetupFileAbsolutePath(): string;
export function bsDaGetAutoScheduleSetupFileAbsolutePath(): string;
export function bsDaGetAutoXmlFileAbsolutePath(): string;
export function bsDaGetFeatureMinRevsFileAbsolutePath(): string;
export function bsDaGetLocalSetupFileAbsolutePath(): string;
export function bsDaGetSetupFileAbsolutePath(): string;
export function bsDaGetSetupCommonFileAbsolutePath(): string;
export function bsDaGetSetupNetworkDiagnosticsFileAbsolutePath(): string;
export function bsDaGetAutoZipFileAbsolutePath(): string;

/// <reference types="node" />
export function bsDaSetDeviceArtifactPath(path: string): string;
export function bsDaSetFwManifestUrl(url: string): string;
export function bsDaGetStaticFileAsJson(path: string, options?: BsDaGetStaticFileOptions): Promise<object>;
export function bsDaGetStaticFileAsStream(path: string, options?: BsDaGetStaticFileOptions): Promise<NodeJS.ReadableStream>;
export function bsDaGetStaticFileAsArrayBuffer(path: string, options?: BsDaGetStaticFileOptions): Promise<ArrayBuffer>;
export function bsDaGetStaticFileAsBlob(path: string, options?: BsDaGetStaticFileOptions): Promise<Blob>;
export function bsDaGetStaticFileAsObject(path: string, options?: BsDaGetStaticFileOptions): Promise<File>;
export function bsDaGetStaticFileSpec(path: string, options?: BsDaGetStaticFileOptions): Promise<FileSpec>;
export function bsDaCopyStaticFile(path: string, dest: string, options?: BsDaGetStaticFileOptions): Promise<void>;
export function bsDaGetStaticFileAbsolutePath(path: string): string;
export function bsDaFetchFileAsArrayBuffer(path: string, options?: BsDaGetStaticFileOptions): Promise<ArrayBuffer>;
export function bsDaFetchFwManifest(options?: BsDaGetStaticFileOptions): Promise<BsDaFwManifest>;
export function bsDaGetFwManifestOptionsByPlayerFamily(family: PlayerFamily): BsDaFwManifestFamilyOptions | null;
export function bsDaGetPartnerProductsAsJson(): Promise<object>;
export function bsDaFetchPartnerProducts(): Promise<PartnerProductSpec>;
export function bsDaGetPartnerProducts(): PartnerProductSpec;

export function bsDaGetRegisteredAutorunVersion(): string;

export interface BsDaGetStaticFileProgressEvent {
    file: string;
    loadedSize: number;
    totalSize: number;
}
export interface BsDaGetStaticFileOptions {
    onFileProgress: (progressEvent: BsDaGetStaticFileProgressEvent) => void;
}
export interface BsDaFwManifestFamilyOptions {
    productionVersion: string;
    betaVersion: string;
    compatibleVersion: string;
    productionLink: string;
    betaLink: string;
    compatibleLink: string;
    productionVersionNumber: number;
    betaVersionNumber: number;
    compatibleVersionNumber: number;
    productionReleaseURL: string;
    betaReleaseURL: string;
    compatibleReleaseURL: string;
    productionReleaseSHA1: string;
    betaReleaseSHA1: string;
    compatibleReleaseSHA1: string;
    productionReleaseFileLength: number;
    betaReleaseFileLength: number;
    compatibleReleaseFileLength: number;
}
export interface BsDaFwManifest {
    [family: string]: BsDaFwManifestFamilyOptions;
}
