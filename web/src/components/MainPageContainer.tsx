import React from 'react';
import {connect} from 'react-redux';
import {AppState} from '../store';
import MainPage from './MainPage';

const mapStateToProps = (state: AppState) => ({
    message: state.system.authorization,
});

type ReduxType = ReturnType<typeof mapStateToProps>;

class MainPageContainer extends React.Component<ReduxType> {
    public render(): React.ReactNode {
        return (
            <MainPage my={this.props.message} />
        );
    }
}

export default connect(mapStateToProps)(MainPageContainer);
