import {
  addNewCardPizzasAC,
  addNewPizzaAC,
  changePizzaAC,
  removePizzaAC,
  removePizzasCartAC,
  removeTotalPizzasOneTypeAC,
  setPizzasStateAC,
  sortPizzasAC,
  totalCountOfPizzasAC,
} from 'store/actionCreators';
import { initState } from 'store/reducers/appReducer';
import { pizzaState } from 'store/reducers/pizzaReducer';

export type PizzaCardType = {
  [key: number]: PricePizzaType[];
};

export type PizzaSumType = {
  [key: number]: number;
};

export type AppStateType = typeof initState;
export type PizzaStateType = typeof pizzaState;
export type PizzaSumStateType = {
  pizzaCard: PizzaCardType;
  pizzaSum: PizzaSumType;
  totalCountPizza: number;
  totalSumPizza: number;
};

export type PricePizzaType = {
  id: number;
  price: number;
  image: string;
  name: string;
};

export type PizzaReducerHandleTypes =
  | ReturnType<typeof changePizzaAC>
  | ReturnType<typeof sortPizzasAC>
  | ReturnType<typeof setPizzasStateAC>;

export type PizzaCardReducerHandleTypes =
  | ReturnType<typeof addNewPizzaAC>
  | ReturnType<typeof addNewCardPizzasAC>
  | ReturnType<typeof totalCountOfPizzasAC>
  | ReturnType<typeof removePizzaAC>
  | ReturnType<typeof removeTotalPizzasOneTypeAC>
  | ReturnType<typeof removePizzasCartAC>;
