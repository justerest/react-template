import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './todo-list.actions';
import { ADD, CLEAR } from './todo-list.constants';

export class TodoListState {
  value: string[] = [];
}

export const todoListReducer: Reducer<TodoListState, ActionType<typeof actions>> = (

  (state = new TodoListState(), action) => {
    switch (action.type) {

      case ADD:
        const value = state.value.slice();
        value.push(action.payload);
        return { ...state, value };

      case CLEAR:
        return new TodoListState();

    }

    return { ...state };
  }

);
