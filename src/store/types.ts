import { ActionType } from "typesafe-actions";
import { IStore } from ".";
import * as actions from "./todo-list.actions";

export type AsyncAction = (
  dispatch: (action: ActionType<typeof actions>) => void,
  getStore: () => IStore,
) => Promise<void>;
