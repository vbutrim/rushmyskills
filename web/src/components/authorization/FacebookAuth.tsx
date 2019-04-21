import React, {Component} from 'react';
import FacebookLogin, {ReactFacebookLoginInfo} from 'react-facebook-login';
import {Authorization} from '../../store/system/types';

interface FacebookAuthProps {
    authorization: Authorization;
}

class FacebookAuth extends React.Component<any, FacebookAuthProps> {
    public render(): React.ReactNode {
        let fbContent;

        if (this.props.authorization.isLoggedIn) {
            fbContent = null;
        } else {
            fbContent = (
                <FacebookLogin
                    appId="320715538590493"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}/>
            );
        }

        return (
            <div>
                {fbContent}
            </div>
        );
    }

    private componentClicked = () => {
        console.log('clicked');
    }

    private responseFacebook = (response: ReactFacebookLoginInfo) => {
        console.log(response);
    }
}

export default FacebookAuth;
