// Reducers

import {ActionTypes, GET_AUTHORIZED, initialState, State} from './types';

export function authorizationReducer(
    state = initialState,
    action: ActionTypes
): State {
    switch (action.type) {
        case GET_AUTHORIZED:
            return {
                authorization: {
                    isLoggedIn: true,
                    userId: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    picture: action.payload.picture.data.url,
                },
                str: state.str,
            };
        default:
            return state;
    }
}
