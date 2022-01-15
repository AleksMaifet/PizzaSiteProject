import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './CartContainer.module.scss';

import {
  CartContainerPizzaTable,
  ButtonGoBack,
  ButtonPayNow,
  RemoveCartBlock,
} from 'components';
import { CURRENT_CASH } from 'enums/ResponseCode';
import cardImage from 'images/utils/IconCartFirst.svg';
import { removePizzasCartAC } from 'store/actionCreators';
import {
  selectorCountPizza,
  selectorGetTotalPizzasCount,
  selectorTotalCountPizzaSum,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

export const TOTAL_PRICE_OF_PIZZAS = 'Сумма заказа: ';
export const TOTAL_NUMBER_OF_PIZZAS = 'Всего пицц: ';
export const CARD = 'Корзина';
export const REMOVE_CARD = 'Очистить корзину';

const ZERO_INDEX = 0;

export const CartContainer = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const totalPriceOfPizzas = useSelector(selectorTotalCountPizzaSum);
  const totalNumberOfPizzas = useSelector(selectorGetTotalPizzasCount);
  const addOfPizzasArray = useSelector(selectorCountPizza);

  const arrayWithoutDuplicationPizza = Object.keys(addOfPizzasArray)
    .map(key => addOfPizzasArray[+key][ZERO_INDEX])
    .filter(key => key);

  const removePizzasCartClickEvent = (): void => {
    dispatch(removePizzasCartAC());
  };

  const pizzaCount = `${totalNumberOfPizzas} шт.`;
  const sumOrder = `${totalPriceOfPizzas} ${CURRENT_CASH}`;

  return (
    <div className={style.cartContainer}>
      <div className={style.cartContainerWrapper}>
        <div className={style.cartContainerTextBlock}>
          <div className={style.cartContainerTitle}>
            <img className={style.cartContainerImage} alt="trash" src={cardImage} />
            {CARD}
          </div>
          <RemoveCartBlock
            removeClick={removePizzasCartClickEvent}
            titleValue={REMOVE_CARD}
          />
        </div>
        {arrayWithoutDuplicationPizza.map(pizzaItems => {
          const { id, name, price, image } = pizzaItems;
          return (
            <CartContainerPizzaTable
              key={id}
              id={id}
              name={name}
              price={price}
              image={image}
            />
          );
        })}
        <div className={style.pizzaSumContainer}>
          <div className={style.pizzaSumContainerTotalNumber}>
            {TOTAL_NUMBER_OF_PIZZAS}
            <span>{pizzaCount}</span>
          </div>
          <div className={style.pizzaSumContainerTotalPrice}>
            {TOTAL_PRICE_OF_PIZZAS}
            <span>{sumOrder}</span>
          </div>
        </div>
        <div className={style.pizzaButtonContainer}>
          <ButtonGoBack />
          <ButtonPayNow />
        </div>
      </div>
    </div>
  );
};
