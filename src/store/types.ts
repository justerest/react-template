import { IRootStore } from '.';

export type AsyncAction = (dispatch: (action: any) => void, getStore: () => IRootStore) => Promise<void>;
