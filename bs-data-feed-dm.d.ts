/* tslint:disable:quotemark max-line-length trailing-comma */
import {BsnTextFeedProperties} from './bscore';
export {};

export enum DfDmErrorType {
    unknownError = 0,
    unexpectedError = 1,
    invalidParameters = 2,
    invalidDataFeed = 3,
    emptyFieldName = 4,
    duplicateFieldName = 5
}
export class DfDmError extends Error {
    name: string;
    type: DfDmErrorType;
    action?: DfDmBaseAction;
    constructor(type: DfDmErrorType, reason?: string, action?: DfDmBaseAction);
    attachAction(action: DfDmBaseAction): void;
}
export function DfDmIsDfDmError(error: Error): error is DfDmError;

export const DfDmIdNone = "0";
export type DfDmId = string;
export interface DfDmState {
    dataFeed: DfDmDataFeed;
    fields: DfDmFieldsState;
    modifiedTime: string;
}
export interface DfDmDataFeed {
    id: string;
    name: string;
    lastModifiedDate: Date;
}
export interface DfDmFieldsState {
    fieldsOrder: DfDmId[];
    fieldsTitleById: DfDmFieldsTitleMap;
    fieldsValue: DfDmFieldsValueMap;
}
export interface DfDmFieldsTitleMap {
    [id: string]: string;
}
export interface DfDmFieldsValueMap {
    [id: string]: DfDmFieldObject;
}
export interface DfDmFieldObject {
    id: DfDmId;
    value: string;
    enableValidityDate: boolean;
    validityStartDate: Date | null;
    validityEndDate: Date | null;
}
export interface DfDmFieldEntity {
    id: DfDmId;
    title: string;
    value: string;
    enableValidityDate: boolean;
    validityStartDate: Date | null;
    validityEndDate: Date | null;
}
export interface DfDmIdParam {
    id: string;
}

export function dfDmCheckForInvalidDfDmState(state: DfDmState): DfDmError | null;
export function dfDmCheckForEmptyFieldName(state: DfDmState): DfDmError | null;
export function dfDmCheckForDuplicateFieldName(state: DfDmState): DfDmError | null;

/**
 * When save and create live data feed on BSN, client should call this selector to get base state.
 * This state converts all time to UTC with the same time value.
 */
export const dfDmGetBaseStateForUniversalTimeZone: (state: any) => DfDmState;
export const dfDmFilterBaseState: (state: any) => DfDmState;
export const dfDmGetBaseState: (state: any) => DfDmState;

export const dfDmGetDataFeedState: (state: DfDmState) => DfDmDataFeed;
export function dfDmGetDataFeedName(state: DfDmState): string;

export const dfDmGetFieldsState: (state: DfDmState) => DfDmFieldsState;
export function dfDmGetFieldsOrder(state: DfDmState): string[];
export function dfDmGetFieldsTitleMap(state: DfDmState): DfDmFieldsTitleMap;
export function dfDmGetFieldsValueMap(state: DfDmState): DfDmFieldsValueMap;
export function dfDmGetFieldTitleById(state: DfDmState, props: DfDmIdParam): string | null;
export function dfDmGetFieldValueObjectById(state: DfDmState, props: DfDmIdParam): DfDmFieldObject | null;
export function dfDmGetFieldValueEntityById(state: DfDmState, props: DfDmIdParam): DfDmFieldEntity | null;
/**
 * This returns all DfDmFieldEntity.
 *
 * @param {DfDmState} state
 * @returns {DfDmFieldEntity[]}
 */
export function dfDmGetAllFieldValueEntities(state: DfDmState): DfDmFieldEntity[];

export const dfDmGetModifiedTimeState: (state: DfDmState) => string;
/**
 * Return dataFeed last modified time.
 * Nearly an alias for dfDmGetModifiedTimeState() - was add for compatibility reasons.
 *
 * @param {DfDmState} state
 * @returns {Date}
 */
export function dfDmGetDataFeedLastModifiedTime(state: DfDmState): Date;

import { Reducer } from 'redux';
export type DfDmReducer = Reducer<DfDmState>;
export const dfDmReducer: Reducer<DfDmState>;

import { Action, Dispatch } from 'redux';
export type DfDmDispatch = Dispatch<DfDmState>;
export interface DfDmBaseAction extends Action {
    type: string;
    payload: {};
    error?: boolean;
    meta?: {};
}
export interface DfDmAction<T> extends DfDmBaseAction {
    payload: T;
}
export type DfDmThunkAction<T> = (dispatch: DfDmDispatch, getState: () => DfDmState, extraArgument: undefined) => DfDmAction<T>;
/**
 * When a component will unmount, this action can help clean bspl reducer.
 * @returns {DfDmClearStateAction}
 */
export function dfDmClearStateAction(): DfDmClearStateAction;
export interface DfDmClearStateAction extends Action {
    type: string;
    payload: null;
}
export interface DfDmBatchAction extends Action {
    type: string;
    payload: DfDmBaseAction[];
}
/**
 * Get DfDmState object from a enclosing parent state.
 * This function depends on the assumption that:
 *   1. If the parent state contains a DfDmState object, the property name for that object will
 *      be either 'bsdfdm' or 'bsdatafeed.
 *   2. If the parent state does not contain a property with either of these names,
 *      the parent state is itself a DfDmState.
 *
 * @param state {any} - parent state
 * @returns {DfDmState} - returned DfDmState object
 */
export function dfDmFilterDfDmState(state: any): DfDmState;

export interface DataFeedParams {
    id: string;
    name: string;
    lastModifiedDate?: Date;
}
export type DataFeedAction = DfDmAction<DataFeedParams>;
/**
 * Create a new data feed.
 *
 * @param {string} name
 * @returns {DataFeedAction}
 */
export function dfDmNewDataFeed(name: string): DataFeedAction;
/**
 * Update data feed properties. Currently, data feed only has name as properties.
 *
 * @param {DataFeedParams} params
 * @returns {DataFeedAction}
 */
export function dfDmUpdateDataFeedProperties(params: DataFeedParams): DataFeedAction;
export interface OpenDataFeedParams {
    newState: DfDmState;
}
export type OpenDataFeedAction = DfDmAction<OpenDataFeedParams>;
/**
 * Open an exist data feed.
 *
 * @param {DfDmState} newState
 * @returns {OpenDataFeedAction}
 */
export function dfDmOpenDataFeed(newState: DfDmState): OpenDataFeedAction;
export type UpdateFeedModifiedTimeAction = DfDmAction<Date>;
/**
 * Open an exist data feed from BSN.
 *
 * @param {DfDmState} newState
 * @returns {DfDmThunkAction<DataFeedParams>}
 */
export function dfDmLoadDateFeedFromBsn(assetData: BsnTextFeedProperties, feedName: string): DfDmThunkAction<DataFeedParams>;
/**
 *
 * Open an exist data feed with validation.
 *
 * @param {DfDmState} newState
 * @returns {DfDmThunkAction<OpenDataFeedParams>}
 */
export function dfDmVerifyAndOpenDataFeed(newState: DfDmState): DfDmThunkAction<OpenDataFeedParams>;

export interface AddNewFieldActionParams {
    title: string;
    fieldObject: DfDmFieldObject;
}
export type AddNewFieldAction = DfDmAction<AddNewFieldActionParams>;
export function dfDmAddNewField(title?: string): AddNewFieldAction;
export interface UpdateFieldTitleActionParams {
    id: DfDmId;
    title: string;
}
export type UpdateFieldTitleAction = DfDmAction<UpdateFieldTitleActionParams>;
export function dfDmUpdateFieldName(id: string, title: string): UpdateFieldTitleAction;
export interface UpdateFieldValueActionParams {
    id: DfDmId;
    value?: string;
    enableValidityDate?: boolean;
    validityStartDate?: Date;
    validityEndDate?: Date;
}
export type UpdateFieldValueAction = DfDmAction<UpdateFieldValueActionParams>;
export function dfDmUpdateFieldValue(params: UpdateFieldValueActionParams): UpdateFieldValueAction;
export interface UpdateFieldOrderParams {
    nameIds: DfDmId[];
    index: number;
}
export type UpdateFieldOrderAction = DfDmAction<UpdateFieldOrderParams>;
export function dfDmUpdateFieldOrder(params: UpdateFieldOrderParams): UpdateFieldOrderAction;
export interface DeleteFieldActionParams {
    nameIds: DfDmId[];
}
export type DeleteFieldAction = DfDmAction<DeleteFieldActionParams>;
export function dfDmDeleteField(id: string | string[]): DeleteFieldAction;

/** @private */
export const modifyingActionTypesArray: string[];
