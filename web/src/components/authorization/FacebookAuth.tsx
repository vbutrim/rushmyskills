import React from 'react';
import {isMobile} from 'react-device-detect';
import FacebookLogin from 'react-facebook-login';
import ServerApi from '../../api/ServerApi';
import {Authorization} from '../../store/authorization/types';
import {ExtendedReactFacebookLoginInfo} from './ExtendedReactFacebookLoginInfo';


interface FacebookAuthProps {
    authorization: Authorization;
    getAuthorized: (facebookLoginInfo: ExtendedReactFacebookLoginInfo) => {};
}

class FacebookAuth extends React.Component<FacebookAuthProps> {
    private myMe: string = '';

    public render(): React.ReactNode {
        let fbContent;

        if (this.props.authorization.isLoggedIn) {
            fbContent = (
                <React.Fragment>
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
                    <div>
                        <button onClick={this.getMyMe}>Press for Me</button>
                        <label>{this.myMe}</label>
                    </div>
                </React.Fragment>
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
                    disableMobileRedirect={true} // Explanation: https://github.com/keppelen/react-facebook-login/issues/124
                    callback={this.responseFacebook}/>
            );
        }

        return (
            <div>
                {fbContent}
            </div>
        );
    }

    private responseFacebook = (fbAuthResponse: ExtendedReactFacebookLoginInfo) => {
        console.log(fbAuthResponse);

        ServerApi.authorize(fbAuthResponse).then((serverResponse) => {
            console.log(serverResponse);

            localStorage.clear();
            localStorage.setItem('accessToken', serverResponse.data.accessToken);
            localStorage.setItem('refreshToken', serverResponse.data.refreshToken);

            this.props.getAuthorized(fbAuthResponse);
        }).catch((serverError) => console.log(serverError));
    }

    private getMyMe = () => {
        ServerApi.me().then((serverResponse) => {
            console.log(serverResponse);
        }).catch((serverError) => console.log(serverError));
    }
}

export default FacebookAuth;
