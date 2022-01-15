import React, { memo, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './CartContainerPizzaTable.module.scss';

import { ButtonForAddPizzasInPizzaTable, ButtonForRemovePizzasOneType } from 'components';
import { CURRENT_CASH } from 'enums/ResponseCode';
import { ReactComponent as imageMinus } from 'images/utils/minus.svg';
import { ReactComponent as imagePlus } from 'images/utils/plus.svg';
import {
  addNewPizzaAC,
  removePizzaAC,
  removeTotalPizzasOneTypeAC,
  totalCountOfPizzasAC,
} from 'store/actionCreators';
import { selectorCountPizza, selectorCountPizzaSum } from 'store/selectors';
import { CartContainerPizzaTableType, ReturnComponentType } from 'types';

export const CartContainerPizzaTable = memo(
  ({ id, name, image, price }: CartContainerPizzaTableType): ReturnComponentType => {
    const dispatch = useDispatch();

    const countOneTypePizza = useSelector(selectorCountPizza)[id];
    const totalSumOfOneTypePizzas = useSelector(selectorCountPizzaSum)[id];

    const addPizzaToPriceHandle = useCallback((): void => {
      dispatch(addNewPizzaAC({ id, name, image, price }));
      dispatch(totalCountOfPizzasAC(id));
    }, [dispatch]);

    const removePizzaFromPriceHandle = useCallback((): void => {
      dispatch(removePizzaAC(id));
      dispatch(totalCountOfPizzasAC(id));
    }, [dispatch]);

    const removeTotalPizzasOneTypeHandle = useCallback((): void => {
      dispatch(removeTotalPizzasOneTypeAC(id));
      dispatch(totalCountOfPizzasAC(id));
    }, [dispatch]);

    const sumOnePizzaType = `${totalSumOfOneTypePizzas} ${CURRENT_CASH}`;

    return (
      <div className={style.pizzaTableContainer}>
        <div className={style.pizzaTableContainerWrapper}>
          <div className={style.pizzaTableImageContainer}>
            <img src={image} alt="pizzaLogo" />
          </div>
          <div className={style.pizzaTableTitleContainer}>
            <h3 className={style.pizzaTableTitle}>{name}</h3>
          </div>
        </div>
        <div className={style.pizzaTableContainerButtonWrapper}>
          <ButtonForAddPizzasInPizzaTable
            Logo={imageMinus}
            onClick={removePizzaFromPriceHandle}
          />
          <span className={style.pizzaTableCount}>{countOneTypePizza.length}</span>
          <ButtonForAddPizzasInPizzaTable
            Logo={imagePlus}
            onClick={addPizzaToPriceHandle}
          />
        </div>
        <div className={style.pizzaTableCash}>{sumOnePizzaType}</div>
        <div>
          <ButtonForRemovePizzasOneType onClick={removeTotalPizzasOneTypeHandle} />
        </div>
      </div>
    );
  },
);
