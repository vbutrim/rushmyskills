// Actions

import {ReactFacebookLoginInfo} from 'react-facebook-login';
import {ActionTypes, Authorization, GET_AUTHORIZED} from './types';

export function getAuthorized(facebookLoginInfo: ReactFacebookLoginInfo) {
    return {
        type: GET_AUTHORIZED,
        payload: facebookLoginInfo,
    };
}
