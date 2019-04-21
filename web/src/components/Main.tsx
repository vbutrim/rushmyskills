import React from 'react';
import {Route, Switch} from 'react-router';
import MenuContainer from './MenuContainer';
import Policy from './Policy';


export const Main = () => (
    <main>
        <Switch>
            <Route exact path ="/" component={MenuContainer}/>
            <Route path="/policy" component={Policy} />
        </Switch>
    </main>
);
