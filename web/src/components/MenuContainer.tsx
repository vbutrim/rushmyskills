import React from 'react';
import {connect} from 'react-redux';
import {AppState} from '../store';
import Menu from './Menu';

const mapStateToProps = (state: AppState) => ({
    message: state.system.messages[0],
});

type ReduxType = ReturnType<typeof mapStateToProps>;

class MenuContainer extends React.Component<ReduxType> {
    public render(): React.ReactNode {
        return (
            <Menu my={this.props.message} />
        );
    }
}

export default connect(mapStateToProps)(MenuContainer);
