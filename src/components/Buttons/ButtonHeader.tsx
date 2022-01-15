import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './ButtonHeader.module.scss';

import { CURRENT_CASH } from 'enums/ResponseCode';
import cartImage from 'images/utils/cartWhiteColor.svg';
import { PATH } from 'Routes/Route';
import { selectorGetTotalPizzasCount, selectorTotalCountPizzaSum } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const ButtonHeader = (): ReturnComponentType => {
  const totalCountOfPizzasSum = useSelector(selectorTotalCountPizzaSum);
  const totalCountOfPizzas = useSelector(selectorGetTotalPizzasCount);

  const navigate = useNavigate();

  const buttonOnclickHandle = (): void => {
    navigate(PATH.CART);
  };

  const totalSumCard = `Корзина: ${totalCountOfPizzasSum} ${CURRENT_CASH}`;

  return (
    <button
      className={style.buttonHeaderContainer}
      onClick={buttonOnclickHandle}
      type="button"
    >
      <div className={style.buttonHeaderContainerWrapper}>
        <div className={style.buttonHeaderContainerImageWrapper}>
          <div className={style.buttonHeaderContainerImage}>
            <img alt="card" src={cartImage} />
          </div>
          {!!totalCountOfPizzas && (
            <span className={style.buttonHeaderContainerCount}>{totalCountOfPizzas}</span>
          )}
        </div>
        <div>
          <span>{totalSumCard}</span>
        </div>
      </div>
    </button>
  );
};
