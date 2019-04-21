// Actions

import {ExtendedReactFacebookLoginInfo} from '../../components/authorization/ExtendedReactFacebookLoginInfo';
import {ActionTypes, GET_AUTHORIZED} from './types';

export function getAuthorized(facebookLoginInfo: ExtendedReactFacebookLoginInfo) {
    return {
        type: GET_AUTHORIZED,
        payload: facebookLoginInfo,
    };
}
