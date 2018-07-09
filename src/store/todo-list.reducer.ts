import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './todo-list.actions';

export class TodoListState {
  value: string[] = [];
}

export const todoListReducer: Reducer<TodoListState, ActionType<typeof actions>> = (

  (state = new TodoListState(), action) => {
    switch (action.type) {

      case 'todoList/ADD':
        const value = state.value.slice();
        value.push(action.payload);
        return { ...state, value };

      case 'todoList/CLEAR':
        return new TodoListState();

    }

    return { ...state };
  }

);
