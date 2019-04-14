import React from 'react';
import {Route, Switch} from 'react-router';
import MenuContainer from './MenuContainer';


export const Main = () => (
    <main>
        <Switch>
            <Route exact path ="/" component={MenuContainer}/>
            <Route path="/policy" component={Policy} />
        </Switch>
    </main>
);

const Policy = () => (
    <div>
        <h1>It's a policy, baby!</h1>
    </div>
);
