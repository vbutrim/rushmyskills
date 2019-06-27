import React from 'react';
import {Route, Switch} from 'react-router';
import MainPageContainer from './MainPageContainer';
import ErrorNotFound from './static/ErrorNotFound';
import Policy from './static/Policy';
import TermsOfUse from './static/TermsOfUse';


export const MainPageRouter = () => (
    <main>
        <Switch>
            <Route exact path="/" component={MainPageContainer}/>
            <Route exact path="/policy" component={Policy}/>
            <Route exact path="/rules" component={TermsOfUse}/>
            <Route path="*" component={ErrorNotFound}/>
        </Switch>
    </main>
);

