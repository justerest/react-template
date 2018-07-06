import { action } from 'typesafe-actions';
import { ADD, CLEAR } from './todo-list.constants';

export const add = (str: string) => action(ADD, str);
export const clear = () => action(CLEAR);

export const getData = () => async (dispatch: any) => {
  await delay(1000);
  dispatch(add('1'));
  await delay(1000);
  dispatch(add('2'));
};

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
