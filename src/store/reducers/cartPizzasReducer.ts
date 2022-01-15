import {
  PizzaCardReducerHandleTypes,
  PizzaSumStateType,
  PricePizzaType,
} from 'store/types/types';

export const pizzaSumState: PizzaSumStateType = {
  pizzaCard: {},
  pizzaSum: {},
  totalCountPizza: 0,
  totalSumPizza: 0,
};

const SUM_START_VALUE = 0;
const REMOVE_ONE_PIZZA = 1;
export const getSumOfPrice = (array: PricePizzaType[]): number =>
  array.reduce((sum, { price }) => price + sum, SUM_START_VALUE);

export const cartPizzasReducer = (
  state = pizzaSumState,
  action: PizzaCardReducerHandleTypes,
): PizzaSumStateType => {
  const arrayOfPizzas = Object.values(state.pizzaCard).reduce(
    (acc, curr) => acc.concat(curr),
    [],
  );

  switch (action.type) {
    case 'ADD-NEW-CARD-PIZZA':
      return {
        ...state,
        pizzaCard: {
          ...state.pizzaCard,
          [action.pizzaId]: [],
        },
      };
    case 'ADD-NEW-PIZZA':
      return {
        ...state,
        pizzaCard: {
          ...state.pizzaCard,
          [action.pricePizza.id]: [
            ...state.pizzaCard[action.pricePizza.id],
            action.pricePizza,
          ],
        },
      };
    case 'TOTAL-COUNT-PIZZA':
      return {
        ...state,
        totalCountPizza: arrayOfPizzas.length,
        totalSumPizza: getSumOfPrice(arrayOfPizzas),
        pizzaSum: {
          ...state.pizzaSum,
          [action.id]: getSumOfPrice(state.pizzaCard[action.id]),
        },
      };
    case 'REMOVE-PIZZA':
      return {
        ...state,
        pizzaCard: {
          ...state.pizzaCard,
          [action.id]: state.pizzaCard[action.id].slice(REMOVE_ONE_PIZZA),
        },
      };
    case 'REMOVE-TOTAL-PIZZAS-ONE-TYPE':
      return {
        ...state,
        pizzaCard: {
          ...state.pizzaCard,
          [action.id]: state.pizzaCard[action.id].filter(({ id }) => id !== action.id),
        },
      };
    case 'REMOVE-PIZZAS-CART':
      return {
        ...state,
        pizzaCard: {},
        pizzaSum: {},
        totalCountPizza: 0,
        totalSumPizza: 0,
      };
    default:
      return state;
  }
};
