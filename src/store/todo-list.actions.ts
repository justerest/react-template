import { action } from 'typesafe-actions';
import { AsyncAction } from './types';

// Sync actions

export const add = (str: string) => action('todoList/ADD', str);
export const clear = () => action('todoList/CLEAR');

// Async actions

export const getData = (): AsyncAction => async (dispatch, getStore) => {
  const { todoList } = getStore();
  await delay(1000);
  dispatch(add('' + todoList.value.length));
  await delay(1000);
  dispatch(add('2'));
};

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
