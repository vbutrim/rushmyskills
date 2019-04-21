import React from 'react';
import {Authorization} from '../store/authorization/types';
import FacebookAuthContainer from './authorization/FacebookAuthContainer';

interface MenuProps {
    my: Authorization;
}

class MainPage extends React.Component<MenuProps> {
    public render(): React.ReactNode {
        return (
            <div>
                {this.props.my.isLoggedIn ? 'authorized' : 'not authorized'}
                <FacebookAuthContainer />
                <p/>
                <input />
                <button>Add Message</button>
            </div>
        );
    }
}

export default MainPage;
