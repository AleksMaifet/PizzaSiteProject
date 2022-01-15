import { combineReducers, createStore } from 'redux';

import { appReducer } from 'store/reducers/appReducer';
import { cartPizzasReducer } from 'store/reducers/cartPizzasReducer';
import { pizzaReducer } from 'store/reducers/pizzaReducer';

const reducers = combineReducers({
  app: appReducer,
  pizza: pizzaReducer,
  cartPizza: cartPizzasReducer,
});

export const store = createStore(reducers);

export type AppStoreType = ReturnType<typeof reducers>;

// @ts-ignore

window.store = store;
