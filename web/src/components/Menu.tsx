import React from 'react';
import {Message} from '../store/system/types';

interface MenuProps {
    my: Message;
}

class Menu extends React.Component<MenuProps> {
    public render(): React.ReactNode {
        return (
            <div>
                {this.props.my.user}
                <input />
                <button>Add Message</button>
            </div>
        );
    }
}

export default Menu;
