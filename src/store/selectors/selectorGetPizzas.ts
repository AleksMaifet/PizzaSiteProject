import { PizzaType } from 'PIZZA/types';
import { AppStoreType } from 'store/store';

export const selectorGetPizzas = (state: AppStoreType): PizzaType => state.pizza.pizzas;
