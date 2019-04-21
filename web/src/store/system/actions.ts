// Actions

import {ActionTypes, Authorization, SEND_MESSAGE} from './types';

export function sendMessage(newMessage: Authorization): ActionTypes {
    return {
        type: SEND_MESSAGE,
        payload: newMessage,
    };
}
