import axios from 'axios';
import React from 'react';
import {isMobile} from 'react-device-detect';
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

        const headers = new Headers({
            'Content-Type': 'application/json',
        });

        axios.post('http://localhost:8090/api/auth/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            userId: fbAuthResponse.id,
            name: fbAuthResponse.name,
            email: fbAuthResponse.email,
            pictureUrl: fbAuthResponse.picture.data.url,
        }).then((serverResponse) => {
            console.log(serverResponse);

            localStorage.clear();
            localStorage.setItem('accessToken', serverResponse.data.accessToken);
            localStorage.setItem('refreshToken', serverResponse.data.refreshToken);

            this.props.getAuthorized(fbAuthResponse);
        }).catch((serverError) => console.log(serverError));
    }
}

export default FacebookAuth;
