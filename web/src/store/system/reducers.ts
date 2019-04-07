// Reducers

import {ActionTypes, SEND_MESSAGE, State} from './types';

const initialState: State = {
    messages: [],
    str: 'OLA',
};

export function mainReducer(
    state = initialState,
    action: ActionTypes
): State {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                messages: [...state.messages, action.payload],
                str: state.str,
            };
        default:
            return state;
    }
}
