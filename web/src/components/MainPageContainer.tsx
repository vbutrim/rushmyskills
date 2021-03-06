import React from 'react';
import {connect} from 'react-redux';
import {AppState} from '../store';
import Header from './Header';
import Landing from './landing/Landing';

const mapStateToProps = (state: AppState) => ({
    message: state.system.authorization,
});

type ReduxType = ReturnType<typeof mapStateToProps>;

class MainPageContainer extends React.Component<ReduxType> {
    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <Header/>
                <Landing/>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(MainPageContainer);
