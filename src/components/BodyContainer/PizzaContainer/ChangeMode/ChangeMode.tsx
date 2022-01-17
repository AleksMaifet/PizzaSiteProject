import React from 'react';

import style from './ChangeMode.module.scss';

import { ButtonForChangeModeComponent } from 'components';
import { ReturnComponentType } from 'types';

const THIN_DOUGH = 'тонкое';
const TRADITIONAL = 'традиционное';
const PIZZA_SIZE = {
  SMALL: '26',
  MIDDLE: '30',
  LARGE: '40',
};

export const CHANGE_MODE_PARAMS = {
  doughPizzas: [
    { name: THIN_DOUGH, price: 0 },
    { name: TRADITIONAL, price: 50 },
  ],
  sizePizzas: [
    { size: PIZZA_SIZE.SMALL, price: 0 },
    { size: PIZZA_SIZE.MIDDLE, price: 30 },
    { size: PIZZA_SIZE.LARGE, price: 50 },
  ],
};

export type ChangeModeType = {
  onClick: (value: string) => void;
};

export const ChangeMode = ({ onClick }: ChangeModeType): ReturnComponentType => (
  <div className={style.changeModeContainer}>
    <div className={style.changeModeContainer_doughWrapper}>
      {CHANGE_MODE_PARAMS.doughPizzas.map(({ name, price }) => (
        <ButtonForChangeModeComponent key={price} value={name} onClick={onClick} />
      ))}
    </div>
    <div className={style.changeModeContainer_sizeWrapper}>
      {CHANGE_MODE_PARAMS.sizePizzas.map(({ size, price }) => (
        <ButtonForChangeModeComponent
          key={price}
          value={`${size} см.`}
          onClick={onClick}
        />
      ))}
    </div>
  </div>
);
