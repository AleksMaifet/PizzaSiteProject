import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './PizzaContainer.module.scss';

import { ButtonForAddPizza, ChangeMode } from 'components';
import { CURRENT_CASH } from 'enums/ResponseCode';
import {
  addNewCardPizzasAC,
  addNewPizzaAC,
  totalCountOfPizzasAC,
} from 'store/actionCreators';
import { selectorGetTotalPizzasCount, selectorCountPizza } from 'store/selectors';
import { PizzaContainerType, ReturnComponentType } from 'types';

export const PizzaContainer = React.memo(
  ({ id, name, price, image }: PizzaContainerType): ReturnComponentType => {
    const dispatch = useDispatch();

    const countOfOneTypePizza = useSelector(selectorCountPizza)[id];
    const totalCountOfPizzas = useSelector(selectorGetTotalPizzasCount);

    const PRICE_TITLE = `${price} ${CURRENT_CASH}`;

    // const changeModeHandle = useCallback((value: string): void => {}, []);

    const addPizzaPriceHandle = useCallback((): void => {
      dispatch(addNewPizzaAC({ id, name, price, image }));
      dispatch(totalCountOfPizzasAC(id));
    }, [dispatch]);

    useEffect(() => {
      if (!totalCountOfPizzas) dispatch(addNewCardPizzasAC(id));
    }, [dispatch]);

    return (
      <div className={style.pizzaContainer}>
        <div className={style.pizzaImageContainer}>
          <img alt="pizza" src={image} />
        </div>
        <div className={style.pizzaBodyWrapper}>
          <h2 className={style.pizzaTitle}>{name}</h2>
          <div className={style.pizzaMode}>
            <ChangeMode onClick={() => {}} />
          </div>
          <div className={style.pizzaFooterContainer}>
            <div className={style.pizzaPrice}>{PRICE_TITLE}</div>
            <ButtonForAddPizza
              sumOfPizzaOneType={countOfOneTypePizza && countOfOneTypePizza.length}
              addPizzaPriceHandle={addPizzaPriceHandle}
            />
          </div>
        </div>
      </div>
    );
  },
);
