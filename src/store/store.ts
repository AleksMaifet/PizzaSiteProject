import { combineReducers, createStore } from 'redux';

import { loadState, saveState } from 'service/localStorage';
import { appReducer } from 'store/reducers/appReducer';
import { cartPizzasReducer } from 'store/reducers/cartPizzasReducer';
import { pizzaReducer } from 'store/reducers/pizzaReducer';

const reducers = combineReducers({
  app: appReducer,
  pizza: pizzaReducer,
  cartPizza: cartPizzasReducer,
});

const persistedState = loadState();

export const store = createStore(reducers, persistedState);

export type AppStoreType = ReturnType<typeof reducers>;

store.subscribe(() => {
  saveState(store.getState());
});

// @ts-ignore

window.store = store;
