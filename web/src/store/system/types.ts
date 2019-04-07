// Types

export const SEND_MESSAGE = 'SEND_MESSAGE';

export interface Message {
    user: string;
}

export interface State {
    messages: Message[];
    str: string;
}

interface SendMessageAction {
    type: typeof SEND_MESSAGE;
    payload: Message;
}

export type ActionTypes = SendMessageAction;
