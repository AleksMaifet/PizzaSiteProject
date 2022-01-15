import React from 'react';

import { useNavigate } from 'react-router-dom';

import style from './Header.module.scss';

import { ButtonHeader } from 'components';
import logoImage from 'images/Logo/Logo.svg';
import { PATH } from 'Routes/Route';
import { ReturnComponentType } from 'types';

export const LOGO_TITLE_NAME = 'REACT PIZZA';
export const PRE_TITLE_NAME = 'самая вкусная пицца во вселенной';

export const Header = (): ReturnComponentType => {
  const navigate = useNavigate();

  const goToHomePageOnclickHandle = (): void => {
    navigate(PATH.HOME_PAGE);
  };

  return (
    <div className={style.headerContainer}>
      <div className={style.headerBlock}>
        <div
          aria-hidden
          onClick={goToHomePageOnclickHandle}
          className={style.headerBlockWrapper}
        >
          <div className={style.headerBlockWrapper_imageContainer}>
            <img alt="logo" src={logoImage} />
          </div>
          <div>
            <h2 className={style.headerBlockWrapper_title}>{LOGO_TITLE_NAME}</h2>
            <div className={style.headerBlockWrapper_text}>{PRE_TITLE_NAME}</div>
          </div>
        </div>
        <div>
          <ButtonHeader />
        </div>
      </div>
    </div>
  );
};
