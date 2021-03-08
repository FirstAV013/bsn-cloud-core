/* tslint:disable:quotemark max-line-length trailing-comma */
import {BsnFilterComponent, BsnFilterCombineType, ContentItemType, MediaType, BsAssetItem, BsnTaggedListSpecification, BsnTaggedPlaylistItemStatus, BsnFilterSpecification, BsnTaggedPlaylistProperties, BsAssetLocator, BsAssetId} from './bscore';
export const TplDefaultSortTagName = "FileName";

export interface TplDmState {
    playlist: TplDmPlaylist;
    rules: TplDmRules;
    modifiedTime: string;
    contents: TplDmContents;
    assetMap: TplDmAssetMap;
}
export type TplDmPlaylistState = TplDmState;
export interface TplDmNewPlaylistParams {
    name: string;
    playlistSpec?: BsnTaggedListSpecification;
    id?: TplDmId | null;
    contentsVirtualPath?: string | null;
    ttl?: number | null;
    waitingForApprove?: boolean;
}
export interface TplDmNewPlaylistParsedFilterSpec {
    combiner: BsnFilterCombineType;
    ruleEntities: TplDmRuleEntity[];
}
export interface TplDmNewPlaylistActionPayload {
    playlist: TplDmPlaylist;
    parsedFilterSpec: TplDmNewPlaylistParsedFilterSpec;
}
export interface TplDmUpdateRuleParams {
    id: TplDmId;
    component: BsnFilterComponent;
}
export interface TplDmUpdateContentItemsPositionParams {
    ids: TplDmId[];
    index: number;
}
export interface TplDmUpdateContentItemParams {
    id: TplDmId;
    enableValidityDate?: boolean | null;
    displayDuration?: number | null;
    validityStartDate?: string | null;
    validityEndDate?: string | null;
    state?: BsnTaggedPlaylistItemStatus | null;
}
export interface TplDmPlaylist extends TplDmPlaylistProperties {
    id: TplDmId;
}
export interface TplDmPlaylistProperties {
    name: string;
    sortTagName: string;
    sortDescending: boolean;
    contentsVirtualPath: string;
    ttl: number;
    waitingForApprove: boolean;
    lastModifiedDate: string | null;
}
export interface TplDmUpdatePlaylistParams extends Partial<TplDmPlaylistProperties> {
    id: TplDmId;
}
export interface TplDmContents {
    order: TplDmId[];
    contentItems: TplDmContentMap;
}
export interface TplDmContentMap {
    [id: string]: TplDmContentItem;
}
export interface TplDmContentItemForBsn {
    contentId: number;
    fileName: string;
    displayDuration: number | null;
    validityStartDate: Date | null;
    validityEndDate: Date | null;
}
export interface TplDmLocatorParam {
    locator: string;
}
export interface TplDmContentItemsAddParams {
    name: string;
    type: MediaType;
    content: BsAssetItem;
    displayDuration?: number | null;
    validityStartDate?: Date | null;
    validityEndDate?: Date | null;
    state?: BsnTaggedPlaylistItemStatus | null;
}
export interface TplDmContentItem {
    readonly id: TplDmId;
    readonly type: ContentItemType;
    name: string;
    assetId: string;
    enableValidityDate: boolean;
    validityStartDate: string | null;
    validityEndDate: string | null;
    displayDuration?: number;
    state: BsnTaggedPlaylistItemStatus;
}
export interface TplDmContentItemWithAssetItem {
    contentItem: TplDmContentItem;
    asset: BsAssetItem;
}
export interface TplDmRules {
    order: TplDmId[];
    ruleEntities: TplDmRuleMap;
    combiner: BsnFilterCombineType;
}
export interface TplDmRuleMap {
    [id: string]: TplDmRuleEntity;
}
export interface TplDmAssetMap {
    [id: string]: BsAssetItem;
}
export interface TplDmRuleEntity extends BsnFilterComponent {
    id: TplDmId;
}
export type TplDmId = string;

export class TplDmcTaggedPlaylistForUniversalTimeZone {
    readonly properties: TplDmcTaggedPlaylistProperties;
    readonly filterSpecification: BsnFilterSpecification;
    readonly contents: TplDmContentItemForBsn[];
    constructor(properties: TplDmcTaggedPlaylistProperties, filterSpecification: BsnFilterSpecification, contents?: TplDmContentItemForBsn[]);
}
export class TplDmcTaggedPlaylistSpecificationWithContentsForUniversalTimeZone {
    readonly taggedPlaylistSpecification: BsnTaggedListSpecification;
    readonly contents: TplDmContentItemForBsn[];
    constructor(spec: BsnTaggedListSpecification, contents: TplDmContentItemForBsn[]);
}
export class TplDmcTaggedPlaylistProperties {
    readonly name: string;
    readonly sortTagName: string;
    readonly sortDescending: boolean;
    readonly contentsVirtualPath: string;
    readonly ttl: number;
    readonly waitingForApprove: boolean;
    constructor(params: TplDmcPlaylistPropertyParams);
}
export interface TplDmcPlaylistPropertyParams {
    name: string;
    sortTagName: string;
    sortDescending: boolean;
    contentsVirtualPath: string;
    ttl: number;
    waitingForApprove: boolean;
}

export function tplDmLoadTaggedPlaylistFromBsnProperties(bsnProperties: BsnTaggedPlaylistProperties): TplDmThunkAction<TplDmState>;
export function tplDmGetStateFromBsnTaggedPlaylistProperties(bsnProperties: BsnTaggedPlaylistProperties): TplDmState;

export enum TplDmErrorType {
    unknownError = 0,
    unexpectedError = 1,
    invalidParameters = 2,
    invalidOperation = 3,
    invalidState = 4,
    apiError = 5,
    assetNotFound = 6
}
export class TplDmError extends Error {
    name: string;
    type: TplDmErrorType;
    action?: TplDmBaseAction;
    constructor(type: TplDmErrorType, reason?: string, action?: TplDmBaseAction);
    attachAction(action: TplDmBaseAction): void;
}
export function TplDmIsPlDmError(error: Error): error is TplDmError;

/**
 *
 * @param {PlDmPlaylistState} state
 * @returns {PlDmError}
 */
export function tplDmCheckForInvalidTplDmPlaylistState(state: TplDmPlaylistState): TplDmError | null;
export const tplDmIsValidModifiedTimeState: (state: string) => boolean;
export const tplDmIsValidPlaylistState: (state: TplDmPlaylist) => boolean;
export const tplDmIsValidRulesState: (state: TplDmRules) => boolean;

export interface TplDmContentItemCreateParams {
    id: string;
    name: string;
    assetId: string;
    mediaType: MediaType;
    displayDuration?: number;
    validityStartDate?: string | null;
    validityEndDate?: string | null;
    state?: BsnTaggedPlaylistItemStatus | null;
}
export function tplDmCreateContentItem(params: TplDmContentItemCreateParams): TplDmContentItem;

/** @module Actions:General */
import { Action, Dispatch, ActionCreator } from 'redux';
export type TplDmDispatch = Dispatch<TplDmState>;
export interface TplDmBaseAction extends Action {
    type: string;
    payload: {};
    error?: boolean;
    meta?: {};
}
export interface TplDmAction<T> extends TplDmBaseAction {
    payload: T;
}
export type TplDmActionCreator<T> = ActionCreator<TplDmAction<T>>;
export type TplDmThunkAction<T> = (dispatch: TplDmDispatch, getState: () => TplDmState, extraArgument: undefined) => TplDmAction<T>;
/**
 * When a component will unmount, this action can help clean bstpl reducer.
 * @returns {TplDmClearStateAction}
 */
export function tplDmClearStateAction(): TplDmClearStateAction;
export interface TplDmClearStateAction extends Action {
    type: string;
    payload: null;
}
export interface TplDmBatchAction extends Action {
    type: string;
    payload: TplDmBaseAction[];
}
/**
 * Get TplDmState object from a enclosing parent state.
 * This function depends on the assumption that:
 *   1. If the parent state contains a TplDmState object, the property name for that object will
 *      be 'bstpldm'.
 *   2. If the parent state does not contain a property with either of these names,
 *      the parent state is itself a TplDmState.
 *
 * @param state {any} - parent state
 * @returns {TplDmState} - returned TplDmState object
 */
export function tplDmFilterTplDmState(state: any): TplDmState;

export type TplDmNewPlaylistAction = TplDmAction<TplDmNewPlaylistActionPayload>;
export type TplDmOpenPlaylistAction = TplDmAction<TplDmState>;
export type TplDmUpdatePlaylistAction = TplDmAction<TplDmUpdatePlaylistParams>;
export function tplDmNewPlaylist(params: TplDmNewPlaylistParams): TplDmNewPlaylistAction;
export function tplDmOpenPlaylist(newState: TplDmState): TplDmOpenPlaylistAction;
export function tplDmUpdatePlaylist(params: TplDmUpdatePlaylistParams): TplDmUpdatePlaylistAction;

export type TplDmAddRulesAction = TplDmAction<TplDmRuleEntity[]>;
export type TplDmUpdateRuleAction = TplDmAction<TplDmUpdateRuleParams>;
export type TplDmRemoveRulesAction = TplDmAction<string[]>;
export type TplDmRemoveAllRulesAction = TplDmAction<null>;
export type TplDmUpdateRuleCombinerAction = TplDmAction<BsnFilterCombineType>;
export function tplDmAddRules(entities: BsnFilterComponent[] | BsnFilterComponent): TplDmAddRulesAction;
export function tplDmUpdateRuleCombiner(combiner: BsnFilterCombineType): TplDmUpdateRuleCombinerAction;
export function tplDmUpdateRule(params: TplDmUpdateRuleParams): TplDmUpdateRuleAction;
export function tplDmRemoveRules(ids: string | string[]): TplDmRemoveRulesAction;
export function tplDmRemoveAllRules(): TplDmRemoveAllRulesAction;

export {};

export type TplDmHydrateContentsAction = TplDmAction<TplDmContentItem[]>;
export type TplDmUpdateContentItemAction = TplDmAction<TplDmUpdateContentItemParams>;
export type TplDmUpdateContentItemsPositionAction = TplDmAction<TplDmUpdateContentItemsPositionParams>;
export type TplDmRemoveContesAction = TplDmAction<string[]>;
export function tplDmHydrateContents(items: TplDmContentItemsAddParams[] | TplDmContentItemsAddParams, newPlaylistInitialization?: boolean): TplDmThunkAction<TplDmContentItem[]>;
export function tplDmHydrateContentItems(params: TplDmContentItem[]): TplDmHydrateContentsAction;
export function tplDmHydrateContentItemsForLoadNewPlaylist(params: TplDmContentItem[]): TplDmHydrateContentsAction;
export function tplDmUpdateContentItem(params: TplDmUpdateContentItemParams): TplDmUpdateContentItemAction;
/**
 * Delete a content item or content items together with asset items.
 *
 * @param {string | string[]} id
 * @returns {TplDmThunkAction<string[]>}
 */
export function tplDmRemoveContentItemsWithAssetItems(ids: string | string[]): TplDmThunkAction<string[]>;
export function tplDmUpdateContentItemsPosition(params: TplDmUpdateContentItemsPositionParams): TplDmUpdateContentItemsPositionAction;

export interface TplDmAssetItemUpdateParams {
    assetItem: BsAssetItem;
}
export type TplDmAssetItemUpdateAction = TplDmAction<TplDmAssetItemUpdateParams>;
export function tplDmPrepareAssetItem(state: TplDmState, assetItem: BsAssetItem, action?: TplDmBaseAction): BsAssetItem;
/**
 * Substitute assetItem information for an asset in the assetMap. The asset for which the substitution
 *  is to be made is identified by the currentLocator parameter. If not asset is found in the assetMap
 *  corresponding to the currentLocator, an exception is thrown.
 *
 * @param {BsAssetLocator} currentLocator
 * @param {BsAssetItem} newAssetItem
 * @returns {TplDmThunkAction<TplDmAssetItemUpdateParams>}
 */
export function tplDmUpdateAssetLocation(currentLocator: BsAssetLocator, newAssetItem: BsAssetItem): TplDmThunkAction<TplDmAssetItemUpdateParams>;

import { Reducer } from 'redux';
export type TplDmReducer = Reducer<TplDmState>;
/**
 *
 * @type {TplDmReducer}
 */
export const tplDmReducer: Reducer<TplDmState>;

export const tplDmFilterBaseState: (state: any) => TplDmState;
export const tplDmGetBaseState: (state: any) => TplDmState;

export const tplDmGetModifiedTimeState: (state: TplDmState) => string;
export const tplDmGetModifiedTimeStateInDate: (state: TplDmState) => Date;

/**
 * Return playlist id
 *
 * @param {TplDmState} state
 * @returns {string}
 */
export function tplDmGetPlaylistId(state: TplDmState): string;
/**
 * Return playlist name.
 *
 * @param {TplDmState} state
 * @returns {string}
 */
export function tplDmGetPlaylistName(state: TplDmState): string;
/**
 * Return playlist last modified date in ISO string
 * Null indicates the playlist was not created on BSN yet.
 *
 * @param {TplDmState} state
 * @returns {String}
 */
export function tplDmGetPlaylistLastModifiedDate(state: TplDmState): string | null;
export function tplDmGetPlaylistContentsVirtualPath(state: TplDmState): string;
/**
 * @deprecated
 */
export const tplDmGetPlaylistOrderTag: typeof tplDmGetPlaylistSortTagName;
export function tplDmGetPlaylistSortTagName(state: TplDmState): string;
export function tplDmIsPlaylistWaitingForApprove(state: TplDmState): boolean;
export function tplDmGetPlaylistSortDescending(state: TplDmState): boolean;
export function tplDmGetPlaylistTTL(state: TplDmState): number;

export function tplDmcGetTaggedPlaylistProperties(state: TplDmState): TplDmcTaggedPlaylistProperties;
export function tplDmGetTaggedPlaylistSpecification(state: TplDmState): BsnTaggedListSpecification;
export function tplDmcGetTaggedPlaylistSpecificationWithContentsForUniversalTimeZone(state: TplDmState): TplDmcTaggedPlaylistSpecificationWithContentsForUniversalTimeZone;
/**
 * This returns a constructed tagged playlist class. All the validity dates for each content item
 * have been converted to UTC with the same time value.
 */
export function tplDmcGetTaggedPlaylistEntityForUniversalTimeZone(state: TplDmState): TplDmcTaggedPlaylistForUniversalTimeZone;

export function tplDmGetRuleCombiner(state: TplDmState): BsnFilterCombineType;
export function tplDmGetRuleIdsInOrder(state: TplDmState): TplDmId[];
export function tplDmGetRuleEntityList(state: TplDmState): TplDmRuleEntity[];
/**
 * UI packages should use tplDmGetRuleEntityList. BsnFilterComponent is used for
 * content management with BSN
 *
 */
export function tplDmGetFilerComponentList(state: TplDmState): BsnFilterComponent[];
export function tplDmGetBsnFilterSpecification(state: TplDmState): BsnFilterSpecification;
export function tplDmGetRuleEntityById(state: TplDmState, id: TplDmId): TplDmRuleEntity | null;
export function tplDmGetFilterComponentByRuleId(state: TplDmState, id: TplDmId): BsnFilterComponent | null;
/**
 * This function validate value type and operator against filter type.
 */
export function tplDmIsValidRuleFilterComponent(state: TplDmState, id: TplDmId): boolean;
export function tplDmGetInvalidRuleIds(state: TplDmState): TplDmId[];

export function tplDmGetContentIdsInOrder(state: TplDmState): TplDmId[];
export function tplDmGetContentItemList(state: TplDmState): TplDmContentItem[];
export function tplDmGetContentItemById(state: TplDmState, id: TplDmId): TplDmContentItem | null;
export function tplDmGetContentItemForBsnList(state: TplDmState): TplDmContentItemForBsn[];
export function tplDmGetContentItemForBsnListUniversalTimeZone(state: TplDmState): TplDmContentItemForBsn[];
export function tplDmGetContentItemListWithAssetItem(state: TplDmState): TplDmContentItemWithAssetItem[];
export function tplDmGetContentItemByIdWithAssetItem(state: TplDmState, id: TplDmId): TplDmContentItemWithAssetItem | null;

/**
 * Return BsAssetId for a given asset locator string
 *
 * @param state {TplDmState} - tagged playlist data model state
 * @param props {TplDmLocatorParam} - locator property: locator string for asset
 * @returns {BsAssetId} assetId string corresponding to given locator
 *          null if assetId is not found for the locator
 */
export const tplDmGetAssetIdByLocator: (state: TplDmState, props: TplDmLocatorParam) => BsAssetId | null;
/**
 *
 * @param {TplDmState} state
 * @param {string} id
 * @returns {BsAssetItem}
 */
export function tplDmGetAssetItemById(state: TplDmState, id: string): BsAssetItem | null;
/**
 *
 * @param {TplDmState} state
 * @param {TplDmLocatorParam} props
 * @returns {BsAssetItem}
 */
export function tplDmGetAssetItemByLocator(state: TplDmState, props: TplDmLocatorParam): BsAssetItem | null;
/**
 *
 * @param {TplDmState} state
 * @returns {string[]}
 */
export function tplDmGetAssetItemIdsForPlaylist(state: TplDmState): string[];
