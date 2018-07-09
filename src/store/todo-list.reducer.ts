import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './todo-list.actions';

export class TodoListState {
  value: string[] = [];
}

export const todoListReducer: Reducer<TodoListState, ActionType<typeof actions>> = (

  (state = new TodoListState(), action) => {
    switch (action.type) {

      case getType(actions.add):
        const value = state.value.slice();
        value.push(action.payload);
        return { ...state, value };

      case getType(actions.clear):
        return new TodoListState();

    }

    return { ...state };
  }

);
