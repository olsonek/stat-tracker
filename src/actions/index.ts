import * as Counters from './Counters';
import * as StatList from './StatList';

export type ActionType =
    | Counters.CountersActionTypes
    | StatList.StatListActionTypes;

export type Action =
    | Counters.CountersAction
    | StatList.StatListAction
    | OtherAction;

export * from './Counters';
export * from './StatList';

export type OtherAction = { type: string };
export const OtherAction: OtherAction = { type: '' };