import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {Header} from './components/Header';
import {MainPageRouter} from './components/MainPageRouter';
import MenuContainer from './components/MainPageContainer';
import {AppState} from './store';
import {getAuthorized} from './store/authorization/actions';
import {State} from './store/authorization/types';


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
        <Header />
        <MainPageRouter />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
