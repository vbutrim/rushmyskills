import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => (
/*    lk*/
    <header>
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/policy'}>Policy</Link></li>
            </ul>
        </nav>
    </header>
);