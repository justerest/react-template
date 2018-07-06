import * as React from 'react';
import { connect } from 'react-redux';
import './app.scss';
import logo from './logo.svg';
import { IRootStore } from './store';
import * as actions from './store/todo-list.actions';
import { TodoListState } from './store/todo-list.reducer';

class AppComponentNotConnected extends React.Component<TodoListState & typeof actions> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, justerest!</h1>
        </header>
        <p
          className="App-intro"
          onClick={this.props.getData}
          onDoubleClick={this.props.clear}
        >
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <br />
          {...this.props.value}
        </p>
      </div >
    );
  }

  addStandardTodo = () => this.props.add('todo1');
}

export const AppComponent = connect(
  (state: IRootStore) => state.todoList,
  actions,
)(AppComponentNotConnected);
