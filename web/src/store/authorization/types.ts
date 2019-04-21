// Types

import {ReactFacebookLoginInfo} from 'react-facebook-login';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

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
export const GET_AUTHORIZED = 'GET_AUTHORIZED';

interface GetAuthorizedAction {
    type: typeof GET_AUTHORIZED;
    payload: ReactFacebookLoginInfo;
}

export type ActionTypes = ActionType<typeof actions>;
