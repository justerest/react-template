import { action } from 'typesafe-actions';
import { ADD, CLEAR } from './todo-list.constants';

export const add = (str: string) => action(ADD, str);
export const clear = () => action(CLEAR);
