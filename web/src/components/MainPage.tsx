import React from 'react';
import {Authorization} from '../store/system/types';

interface MenuProps {
    my: Authorization;
}

class MainPage extends React.Component<MenuProps> {
    public render(): React.ReactNode {
        return (
            <div>
                {this.props.my.isLoggedIn ? 'authorized' : 'not authorized'}
                <p/>
                <input />
                <button>Add Message</button>
            </div>
        );
    }
}

export default MainPage;
