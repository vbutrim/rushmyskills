import React from 'react';
import {Authorization} from '../store/authorization/types';
import FacebookAuthContainer from './authorization/FacebookAuthContainer';

interface MenuProps {
    auth: Authorization;
}

class MainPage extends React.Component<MenuProps> {
    public render(): React.ReactNode {
        return (
            <div style={{textAlign: 'center'}}>
                {this.props.auth.isLoggedIn ? 'Авторизированы!' : 'Не авторизированы! Пожалуйста, войдите с помощью Facebook'}
                <FacebookAuthContainer />
            </div>
        );
    }
}

export default MainPage;
