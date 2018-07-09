import * as React from 'react';
import { connect } from 'react-redux';
import './app.scss';
import logo from './logo.svg';
import { IStore } from './store';
import * as actions from './store/todo-list.actions';
import { TodoListState } from './store/todo-list.reducer';

export class AppComponent extends React.Component<TodoListState & typeof actions> {

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className="app__title">Welcome to React, justerest!</h1>
        </header>
        <p
          className="app__intro"
          onClick={this.props.getData}
          onDoubleClick={this.props.clear}
        >
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <br />
          {...this.props.value}
        </p>
      </div>
    );
  }

}

export const AppComponentConnected = connect(({ todoList }: IStore) => todoList, actions)(AppComponent);
