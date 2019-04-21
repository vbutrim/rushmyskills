import React from 'react';
import {BrowserView, isMobile, MobileOnlyView, MobileView} from 'react-device-detect';
import FacebookLogin from 'react-facebook-login';
import {Authorization} from '../../store/authorization/types';
import {ExtendedReactFacebookLoginInfo} from './ExtendedReactFacebookLoginInfo';


interface FacebookAuthProps {
    authorization: Authorization;
    getAuthorized: (facebookLoginInfo: ExtendedReactFacebookLoginInfo) => {};
}

class FacebookAuth extends React.Component<FacebookAuthProps> {
    public render(): React.ReactNode {
        let fbContent;

        if (this.props.authorization.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    textAlign: 'center',
                }}>
                    <img src={this.props.authorization.picture}
                         alt={this.props.authorization.name}/>
                    <h2>Привет, {this.props.authorization.name}!</h2>
                    Email: {this.props.authorization.email}
                </div>
            );
        } else {
            fbContent = (
                <FacebookLogin
                    appId="320715538590493"
                    autoLoad={false}
                    fields="name,email,picture"
                    language="ru_RU"
                    textButton="Продолжить с Facebook"
                    size="small"
                    isMobile={isMobile}
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}/>
            );
        }

        return (
            <div>
                {/*TODO: remove it after test on mobile*/}
                <BrowserView>You are from Browser</BrowserView>
                <MobileView>You are from Mobile</MobileView>
                {fbContent}
            </div>
        );
    }

    private componentClicked = () => {
        console.log('clicked');
    }

    private responseFacebook = (response: ExtendedReactFacebookLoginInfo) => {
        console.log(response);
        this.props.getAuthorized(response);
    }
}

export default FacebookAuth;
