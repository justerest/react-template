import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { todoListReducer, TodoListState } from './todo-list.reducer';

export interface IStore {
  todoList: TodoListState;
}

const rootReducer: Reducer<IStore> = combineReducers({
  todoList: todoListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
