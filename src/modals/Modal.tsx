import React, { MouseEvent } from 'react';

import style from './Modal.module.scss';

import { ModalType } from 'modals/type';

export const Modal = React.memo(({ active, setActive, children }: ModalType) => {
  const modalHandler = (e: MouseEvent): void => {
    e.stopPropagation();
  };

  return (
    <div
      aria-hidden
      className={active ? style.modal_active : style.modal}
      onClick={() => setActive(false)}
    >
      <div
        aria-hidden
        className={active ? style.modal_Content_active : style.modal_Content}
        onClick={modalHandler}
      >
        {children}
      </div>
    </div>
  );
});
