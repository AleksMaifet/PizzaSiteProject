import { AppStoreType } from 'store/store';

export const selectorTotalCountPizzaSum = (state: AppStoreType): number =>
  state.cartPizza.totalSumPizza;
