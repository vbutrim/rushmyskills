import React from 'react';
import {connect} from 'react-redux';
import {AppState} from '../../store';
import FacebookAuth from './FacebookAuth';

const mapStateToProps = (state: AppState) => ({
    authorization: state.system.authorization,
});

type ReduxType = ReturnType<typeof mapStateToProps>;

class FacebookAuthContainer extends React.Component<ReduxType> {
    public render(): React.ReactNode {
        return (
            <FacebookAuth authorization={this.props.authorization} />
        );
    }
}

export default connect(mapStateToProps)(FacebookAuthContainer);
