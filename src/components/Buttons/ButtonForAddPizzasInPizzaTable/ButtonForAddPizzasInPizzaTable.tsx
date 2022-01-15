import React, { memo } from 'react';

import style from './ButtonForAddPizzasInPizzaTable.module.scss';

import { ButtonForAddPizzasInPizzaTableType, ReturnComponentType } from 'types';

export const ButtonForAddPizzasInPizzaTable = memo(
  ({ Logo, onClick }: ButtonForAddPizzasInPizzaTableType): ReturnComponentType => {
    const onClickEvent = (): void => {
      onClick();
    };

    return (
      <button className={style.buttonWrapper} onClick={onClickEvent} type="button">
        <div className={style.buttonWrapperBlock}>
          <Logo className={style.logo} />
        </div>
      </button>
    );
  },
);
