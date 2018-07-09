import { AnyAction } from 'redux';
import { IRootStore } from '.';

export type AsyncAction = (dispatch: (action: AnyAction) => void, getStore: () => IRootStore) => Promise<void>;
