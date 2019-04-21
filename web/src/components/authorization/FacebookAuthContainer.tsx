import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '../../store';
import {ActionTypes} from '../../store/authorization/types';
import * as actions from './../../store/authorization/actions';
import {ExtendedReactFacebookLoginInfo} from './ExtendedReactFacebookLoginInfo';
import FacebookAuth from './FacebookAuth';

const mapStateToProps = (state: AppState) => ({
    authorization: state.system.authorization,
});

const mapDispatcherToProps = (dispatch: Dispatch<ActionTypes>) => {
    return {
        getAuthorized: (facebookLoginInfo: ExtendedReactFacebookLoginInfo) => dispatch(actions.getAuthorized(facebookLoginInfo)),
    };
};

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class FacebookAuthContainer extends React.Component<ReduxType> {
    public render(): React.ReactNode {
        return (
            <FacebookAuth authorization={this.props.authorization}
                          getAuthorized={this.props.getAuthorized}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(FacebookAuthContainer);
