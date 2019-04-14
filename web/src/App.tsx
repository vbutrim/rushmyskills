import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import MenuContainer from './components/MenuContainer';
import {AppState} from './store';
import {sendMessage} from './store/system/actions';
import {State} from './store/system/types';


const mapStateToProps = (state: AppState) => ({
  system: state.system,
});

interface AppProps {
  sendMessage: typeof sendMessage;
  system: State;
}

type ReduxType = ReturnType<typeof mapStateToProps>;

class App extends React.Component<ReduxType> {
  public render() {
    const { system } = this.props;

    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
