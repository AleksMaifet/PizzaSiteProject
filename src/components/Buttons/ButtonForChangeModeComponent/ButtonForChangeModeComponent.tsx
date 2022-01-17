import React, { memo, MouseEvent } from 'react';

import style from './ButtonForChangeModeComponent.module.scss';

import { CommonButtonType, ReturnComponentType } from 'types';

export const ButtonForChangeModeComponent = memo(
  ({ value, onClick }: CommonButtonType): ReturnComponentType => {
    const onClickEvent = (e: MouseEvent<HTMLButtonElement>): void => {
      onClick(e.currentTarget.value);
    };
    return (
      <button
        className={style.buttonWrapper}
        value={value}
        onChange={onClickEvent}
        type="button"
      >
        {value}
      </button>
    );
  },
);
