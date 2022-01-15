import React, { MouseEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './ButtonRecipesPizzaBlock.module.scss';

import { changePizzaAC } from 'store/actionCreators';
import { selectorSortPizzas } from 'store/selectors';
import { ReturnComponentType } from 'types';

const RECIPES_PIZZAS_BUTTON = [
  { id: 1, recipe: 'Все' },
  { id: 2, recipe: 'Мясные' },
  { id: 3, recipe: 'Вегетарианская' },
  { id: 4, recipe: 'Гриль' },
  { id: 5, recipe: 'Острые' },
  { id: 6, recipe: 'Закрытые' },
];

export const ButtonRecipesPizzaBlock = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const filterOfPizza = useSelector(selectorSortPizzas);

  const changeStatusPizza = (e: MouseEvent<HTMLButtonElement>): void => {
    dispatch(changePizzaAC(e.currentTarget.value));
  };

  return (
    <ul className={style.bodyRecipesButtonContainer}>
      {RECIPES_PIZZAS_BUTTON.map(({ id, recipe }) => (
        <li key={id}>
          <button
            className={
              recipe === filterOfPizza
                ? style.bodyRecipesButtonActive
                : style.bodyRecipesButton
            }
            value={recipe}
            onClick={changeStatusPizza}
            type="button"
          >
            {recipe}
          </button>
        </li>
      ))}
    </ul>
  );
};
