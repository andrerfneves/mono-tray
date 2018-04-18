// @flow

type State = {| |};

export type Action = { type: $Subtype<string>, payload: Object };
export type _ThunkAction<R> = (dispatch: Dispatch, getState?: GetState) => R;
export type ThunkAction = _ThunkAction<any>;
export type GetState = () => State;

export type Dispatch = (action: Action | ThunkAction) => any;
