import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './PizzaContainer.module.scss';

import { ButtonForAddPizza } from 'components';
import { CURRENT_CASH } from 'enums/ResponseCode';
import {
  addNewCardPizzasAC,
  addNewPizzaAC,
  totalCountOfPizzasAC,
} from 'store/actionCreators';
import { selectorGetTotalPizzasCount } from 'store/selectors';
import { selectorCountPizza } from 'store/selectors/selectorTotalCountPizza';
import { PizzaContainerType, ReturnComponentType } from 'types';

export const PizzaContainer = React.memo(
  ({ id, name, price, image }: PizzaContainerType): ReturnComponentType => {
    const dispatch = useDispatch();

    const countOfOneTypePizza = useSelector(selectorCountPizza)[id];
    const totalCountOfPizzas = useSelector(selectorGetTotalPizzasCount);

    const PRICE_TITLE = `от ${price} ${CURRENT_CASH}`;

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
          <div className={style.pizzaMode}>changeMode</div>
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
