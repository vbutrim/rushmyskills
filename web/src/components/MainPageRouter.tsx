import React from 'react';
import {Route, Switch} from 'react-router';
import ErrorNotFound from './ErrorNotFound';
import MenuContainer from './MainPageContainer';
import Policy from './Policy';
import TermsOfUse from './TermsOfUse';


export const MainPageRouter = () => (
    <main>
        <Switch>
            <Route exact path="/" component={MenuContainer}/>
            <Route exact path="/policy" component={Policy}/>
            <Route exact path="/rules" component={TermsOfUse}/>
            <Route path="*" component={ErrorNotFound}/>
        </Switch>
    </main>
);

