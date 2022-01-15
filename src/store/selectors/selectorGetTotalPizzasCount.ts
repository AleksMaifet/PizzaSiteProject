import { AppStoreType } from 'store/store';

export const selectorGetTotalPizzasCount = (state: AppStoreType): number =>
  state.cartPizza.totalCountPizza;
