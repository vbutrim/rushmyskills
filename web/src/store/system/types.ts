// Types

// STATE
export interface Authorization {
    isLoggedIn: boolean;
    userId: string;
    name: string;
    email: string;
    picture: string;
}

export interface State {
    authorization: Authorization;
    str: string;
}

// INITIAL STATE
export const initialState: State = {
    authorization: {
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: '',
    },
    str: 'OLA',
};

// ACTION NAME
export const SEND_MESSAGE = 'SEND_MESSAGE';

interface SendMessageAction {
    type: typeof SEND_MESSAGE;
    payload: Authorization;
}

export type ActionTypes = SendMessageAction;
