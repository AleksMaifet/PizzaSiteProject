import { AppStoreType } from 'store/store';

export const selectorSortPizzas = (state: AppStoreType): string =>
  state.pizza.statusPizza;
