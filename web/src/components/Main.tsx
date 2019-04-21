import React from 'react';
import {Route, Switch} from 'react-router';
import ErrorNotFound from './ErrorNotFound';
import MenuContainer from './MenuContainer';
import Policy from './Policy';


export const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={MenuContainer}/>
            <Route exact path="/policy" component={Policy}/>
            <Route path="*" component={ErrorNotFound}/>
        </Switch>
    </main>
);
