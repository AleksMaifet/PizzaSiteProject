import { PRICE_SORT } from 'components/SortModule/SortModule';
import { ALL_PIZZA } from 'PIZZA/PIZZA';
import { PizzaType } from 'PIZZA/types';
import { PizzaReducerHandleTypes, PizzaStateType } from 'store/types';

export const pizzaState = {
  pizzas: [] as PizzaType,
  statusPizza: ALL_PIZZA,
};

export const SORT_INDEX_PLUS = 1;
export const SORT_INDEX_MINUS = -1;

export const pizzaReducer = (
  state = pizzaState,
  action: PizzaReducerHandleTypes,
): PizzaStateType => {
  switch (action.type) {
    case 'SET-PIZZAS-STATE': {
      return {
        ...state,
        pizzas: action.pizzasState,
      };
    }
    case 'CHANGE-PIZZA':
      return {
        ...state,
        ...action.payload,
      };
    case 'SORT-PIZZA':
      return {
        ...state,
        pizzas:
          action.payload === PRICE_SORT
            ? [...state.pizzas].sort((a, b) => b.price - a.price)
            : [...state.pizzas].sort((a, b) =>
                a.name > b.name ? SORT_INDEX_PLUS : SORT_INDEX_MINUS,
              ),
      };
    default:
      return state;
  }
};
