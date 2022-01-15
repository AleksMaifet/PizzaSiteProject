import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './CartEmptyContainer.module.scss';

import { CartContainer } from 'components';
import imageCart from 'images/utils/CartImage.svg';
import { selectorGetTotalPizzasCount } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CART_TITLE = 'Корзина пустая 😕';
export const CART_TEXT =
  'Вероятней всего, вы не заказывали ещё пиццу.Для того, чтобы заказать пиццу, перейди на главную страницу.';
export const CART_GO_BACK = 'Вернуться назад';
export const GO_BACK_ON_ONE_PAGE = -1;

export const CartEmptyContainer = (): ReturnComponentType => {
  const isCartContains = useSelector(selectorGetTotalPizzasCount);
  const navigate = useNavigate();

  const buttonOnclickHandle = (): void => {
    navigate(GO_BACK_ON_ONE_PAGE);
  };

  if (isCartContains) {
    return <CartContainer />;
  }

  return (
    <div className={style.cartEmptyContainer}>
      <div className={style.cartEmptyContainerWrapper}>
        <div className={style.cartEmptyTextContainer}>
          <div className={style.cartEmptyTitle}>{CART_TITLE}</div>
          <div className={style.cartEmptyText}>{CART_TEXT}</div>
        </div>
        <div className={style.cartEmptyImageContainer}>
          <div className={style.imageWrapper}>
            <img alt="cart" src={imageCart} />
          </div>
        </div>
        <button onClick={buttonOnclickHandle} type="button">
          {CART_GO_BACK}
        </button>
      </div>
    </div>
  );
};
