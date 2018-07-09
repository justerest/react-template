import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { todoListReducer, TodoListState } from './todo-list.reducer';

export interface IRootStore {
  todoList: TodoListState;
}

const rootReducer: Reducer<IRootStore> = combineReducers({
  todoList: todoListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
