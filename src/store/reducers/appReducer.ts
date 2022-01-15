import { AppStateType } from 'store/types';

export const initState = {};

export const appReducer = (state = initState, action: any): AppStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
