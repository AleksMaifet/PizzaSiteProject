import { PricePizzaType } from 'store/types';

export const changePizzaAC = (statusPizza: string) =>
  ({
    type: 'CHANGE-PIZZA',
    payload: {
      statusPizza,
    },
  } as const);

export const totalCountOfPizzasAC = (id: number) =>
  ({
    type: 'TOTAL-COUNT-PIZZA',
    id,
  } as const);

export const addNewPizzaAC = (pricePizza: PricePizzaType) =>
  ({
    type: 'ADD-NEW-PIZZA',
    pricePizza,
  } as const);

export const addNewCardPizzasAC = (pizzaId: number) =>
  ({
    type: 'ADD-NEW-CARD-PIZZA',
    pizzaId,
  } as const);

export const sortPizzasAC = (sort: string) =>
  ({
    type: 'SORT-PIZZA',
    payload: sort,
  } as const);
export const sortPizzasALLAC = () =>
  ({
    type: 'SORT-PIZZA-ALL',
  } as const);
export const removePizzaAC = (id: number) =>
  ({
    type: 'REMOVE-PIZZA',
    id,
  } as const);
export const removeTotalPizzasOneTypeAC = (id: number) =>
  ({
    type: 'REMOVE-TOTAL-PIZZAS-ONE-TYPE',
    id,
  } as const);
export const removePizzasCartAC = () =>
  ({
    type: 'REMOVE-PIZZAS-CART',
  } as const);
