// Reducers

import {ActionTypes, GET_AUTHORIZED, initialState, State} from './types';

export function authorizationReducer(
    state = initialState,
    action: ActionTypes
): State {
    switch (action.type) {
        case GET_AUTHORIZED:
            return {
                authorization: state.authorization,
                str: state.str,
            };
        default:
            return state;
    }
}
