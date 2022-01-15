import React, { memo, MouseEvent } from 'react';

import style from './CommonButton.module.scss';

import { CommonButtonType, ReturnComponentType } from 'types';

export const CommonButton = memo(
  ({ value, onClick }: CommonButtonType): ReturnComponentType => {
    const onClickEvent = (e: MouseEvent<HTMLButtonElement>): void => {
      onClick(e.currentTarget.value);
    };
    return (
      <div>
        <button
          value={value}
          className={style.buttonWrapper}
          onClick={onClickEvent}
          type="button"
        >
          {value}
        </button>
      </div>
    );
  },
);
