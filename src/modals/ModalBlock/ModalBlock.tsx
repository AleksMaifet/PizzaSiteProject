import React, { memo } from 'react';

import style from './ModalBlock.module.scss';

import { CommonButton } from 'components';
import { Modal } from 'modals/Modal';
import { ModalBlockType, ReturnComponentType } from 'types';

export const ModalBlock = memo(
  ({
    active,
    setActive,
    titleValue,
    valueFirstButton,
    valueSecondButton,
    onClickEvent,
  }: ModalBlockType): ReturnComponentType => (
    <Modal active={active} setActive={setActive}>
      <div className={style.buttonContainerModalBlock}>
        <div className={style.buttonContainerModalBlockTitle}>{titleValue}</div>
        <div className={style.buttonContainerWrapper}>
          <CommonButton value={valueFirstButton} onClick={onClickEvent} />
          <CommonButton value={valueSecondButton} onClick={onClickEvent} />
        </div>
      </div>
    </Modal>
  ),
);
