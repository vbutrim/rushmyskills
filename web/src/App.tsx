import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import './assets/css/argon-design-system-react.css';
import Header from './components/Header';
import {MainPageRouter} from './components/MainPageRouter';
import {AppState} from './store';
import {getAuthorized} from './store/authorization/actions';
import {State} from './store/authorization/types';

import './assets/css/argon-design-system-react.css';
import './assets/scss/argon-design-system-react.scss';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/nucleo/css/nucleo.css';

const mapStateToProps = (state: AppState) => ({
  system: state.system,
});

interface AppProps {
  sendMessage: typeof getAuthorized;
  system: State;
}

type ReduxType = ReturnType<typeof mapStateToProps>;

class App extends React.Component<ReduxType> {
  public render() {
    const { system } = this.props;

    return (
      <div>
        <MainPageRouter />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
