// Reducers

import {ActionTypes, initialState, SEND_MESSAGE, State} from './types';

export function mainReducer(
    state = initialState,
    action: ActionTypes
): State {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                authorization: state.authorization,
                str: state.str,
            };
        default:
            return state;
    }
}
