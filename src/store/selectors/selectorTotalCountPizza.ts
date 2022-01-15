import { AppStoreType } from 'store/store';
import { PizzaCardType } from 'store/types';

export const selectorCountPizza = (state: AppStoreType): PizzaCardType =>
  state.cartPizza.pizzaCard;
