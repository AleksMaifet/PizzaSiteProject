import React from 'react';

import { useNavigate } from 'react-router-dom';

import style from './ButtonGoBack.module.scss';

import { ReturnComponentType } from 'types';

const GO_BACK = 'Вернуться назад';
const GO_BACK_ONE_PAGE = -1;
export const ButtonGoBack = (): ReturnComponentType => {
  const navigate = useNavigate();

  const onClickGoBackEvent = (): void => navigate(GO_BACK_ONE_PAGE);

  return (
    <button className={style.buttonContainer} onClick={onClickGoBackEvent} type="button">
      {GO_BACK}
    </button>
  );
};
