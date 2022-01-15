import React from 'react';

import style from './ButtonForRemovePizzasOneType.module.scss';

import { ReactComponent as CrossImage } from 'images/utils/cross.svg';
import { ButtonForRemovePizzasOneTypeType, ReturnComponentType } from 'types';

export const ButtonForRemovePizzasOneType = ({
  onClick,
}: ButtonForRemovePizzasOneTypeType): ReturnComponentType => {
  const onClickEvent = (): void => onClick();
  return (
    <button onClick={onClickEvent} className={style.buttonWrapper} type="button">
      <CrossImage className={style.buttonWrapperCross} />
    </button>
  );
};
