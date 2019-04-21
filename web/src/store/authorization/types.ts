// Types

import { ActionType } from 'typesafe-actions';
import {ExtendedReactFacebookLoginInfo} from '../../components/authorization/ExtendedReactFacebookLoginInfo';
import * as actions from './actions';

// STATE
export interface Authorization {
    isLoggedIn: boolean;
    userId: string;
    name?: string;
    email?: string;
    picture?: string;
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
        name: undefined,
        email: undefined,
        picture: undefined,
    },
    str: 'OLA',
};

// ACTION NAME
export const GET_AUTHORIZED = 'GET_AUTHORIZED';

interface GetAuthorizedAction {
    type: typeof GET_AUTHORIZED;
    payload: ExtendedReactFacebookLoginInfo;
}

export type ActionTypes = ActionType<typeof actions>;
