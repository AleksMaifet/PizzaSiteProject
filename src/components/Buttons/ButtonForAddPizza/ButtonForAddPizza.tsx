import React from 'react';

import style from './ButtonForAddPizza.module.scss';

import { ButtonForAddPizzaType, ReturnComponentType } from 'types';

const ADD_PIZZA_IN_CART = '+ Добавить';

export const ButtonForAddPizza = ({
  addPizzaPriceHandle,
  sumOfPizzaOneType,
}: ButtonForAddPizzaType): ReturnComponentType => {
  const totalCountPizza = sumOfPizzaOneType || '';
  return (
    <button className={style.addPizzaButton} type="button" onClick={addPizzaPriceHandle}>
      {ADD_PIZZA_IN_CART}
      {totalCountPizza && (
        <span className={style.addPizzaSpanCount}> {totalCountPizza}</span>
      )}
    </button>
  );
};
