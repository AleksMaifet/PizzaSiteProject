import { PRICE_SORT } from 'components/SortModule/SortModule';
import { ALL_PIZZA, PIZZA_ARRAY } from 'PIZZA/PIZZA';
import { PizzaReducerHandleTypes, PizzaStateType } from 'store/types';

export const pizzaState = {
  PIZZA_ARRAY,
  statusPizza: ALL_PIZZA,
};

export const SORT_INDEX_PLUS = 1;
export const SORT_INDEX_MINUS = -1;

export const pizzaReducer = (
  state = pizzaState,
  action: PizzaReducerHandleTypes,
): PizzaStateType => {
  switch (action.type) {
    case 'CHANGE-PIZZA':
      return {
        ...state,
        ...action.payload,
      };
    case 'SORT-PIZZA-ALL':
      return {
        ...state,
        PIZZA_ARRAY,
      };
    case 'SORT-PIZZA':
      return {
        ...state,
        PIZZA_ARRAY:
          action.payload === PRICE_SORT
            ? [...state.PIZZA_ARRAY].sort((a, b) => b.price - a.price)
            : [...state.PIZZA_ARRAY].sort((a, b) =>
                a.name > b.name ? SORT_INDEX_PLUS : SORT_INDEX_MINUS,
              ),
      };
    default:
      return state;
  }
};
