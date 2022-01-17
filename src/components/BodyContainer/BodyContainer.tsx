import React from 'react';

import { useSelector } from 'react-redux';

import style from './BodyContainer.module.scss';

import { ButtonRecipesPizzaBlock, PizzaContainer } from 'components';
import { SortModule } from 'components/SortModule/SortModule';
import { ALL_PIZZA } from 'PIZZA/PIZZA';
import { selectorGetPizzas, selectorSortPizzas } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const SORT_MENU = 'Сортировка по: ';

export const BodyContainer = (): ReturnComponentType => {
  const pizzaArray = useSelector(selectorGetPizzas);
  const filterOfPizza = useSelector(selectorSortPizzas);

  let pizza = pizzaArray;
  if (filterOfPizza !== ALL_PIZZA)
    pizza = pizzaArray.filter(({ status }) => status.includes(filterOfPizza));

  return (
    <div className={style.bodyContainer}>
      <div className={style.bodyHeaderBlock}>
        <ButtonRecipesPizzaBlock />
        <div className={style.bodyContainerSortMenu}>
          <SortModule />
        </div>
      </div>
      <div className={style.pizzaContainerWrapper}>
        {pizza.map(pizzaItem => {
          const { id, name, price, image } = pizzaItem;
          return (
            <PizzaContainer key={id} name={name} price={price} image={image} id={id} />
          );
        })}
      </div>
    </div>
  );
};
