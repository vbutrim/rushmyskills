// Actions

import {ActionTypes, Message, SEND_MESSAGE} from './types';

export function sendMessage(newMessage: Message): ActionTypes {
    return {
        type: SEND_MESSAGE,
        payload: newMessage,
    };
}
