import { combineReducers, Reducer } from 'redux';
import { todoListReducer, TodoListState } from './todo-list.reducer';

export interface IRootStore {
  todoList: TodoListState;
}

export const rootReducer: Reducer<IRootStore> = combineReducers({
  todoList: todoListReducer,
});
