import { action } from "typesafe-actions";
import { ADD, CLEAR } from "./todo-list.constants";
import { AsyncAction } from "./types";

// Sync actions (mutations)

export const add = (str: string) => action(ADD, str);
export const clear = () => action(CLEAR);

// Async actions

export const getData = (): AsyncAction => async (dispatch, getStore) => {
  const { todoList } = getStore();
  await delay(1000);
  dispatch(add("" + todoList.value.length));
  await delay(1000);
  dispatch(add("2"));
};

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
