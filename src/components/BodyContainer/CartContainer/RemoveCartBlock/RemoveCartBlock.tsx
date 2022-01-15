import React, { memo, useState } from 'react';

import style from './RemoveCartBlock.module.scss';

import trashImage from 'images/utils/IconCartSecond.svg';
import { ModalBlock } from 'modals';
import { RemoveCartBlockType, ReturnComponentType } from 'types';

const CANCEL = 'Назад';
const REMOVE = 'Очистить';

export const RemoveCartBlock = memo(
  ({ removeClick, titleValue }: RemoveCartBlockType): ReturnComponentType => {
    const [active, setActive] = useState<boolean>(false);

    const onClickEvent = (): void => {
      setActive(!active);
    };

    const onClickEventHandle = (value: string): void => {
      if (value === REMOVE) {
        removeClick();
        onClickEvent();
        return;
      }
      onClickEvent();
    };

    return (
      <>
        <div aria-hidden onClick={onClickEvent} className={style.cartContainerText}>
          <img className={style.trashContainerImage} alt="trash" src={trashImage} />
          {titleValue}
        </div>
        <ModalBlock
          active={active}
          setActive={setActive}
          titleValue={titleValue}
          onClickEvent={onClickEventHandle}
          valueFirstButton={CANCEL}
          valueSecondButton={REMOVE}
        />
      </>
    );
  },
);
