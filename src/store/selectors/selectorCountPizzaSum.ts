import { AppStoreType } from 'store/store';
import { PizzaSumType } from 'store/types';

export const selectorCountPizzaSum = (state: AppStoreType): PizzaSumType =>
  state.cartPizza.pizzaSum;
