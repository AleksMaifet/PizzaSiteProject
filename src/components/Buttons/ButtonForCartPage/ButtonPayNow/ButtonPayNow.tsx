import React, { useCallback, useState } from 'react';

import style from './ButtonPayNow.module.scss';

import { ModalBlock } from 'modals';
import { ReturnComponentType } from 'types';

const PAY_NOW = 'Оплатить сейчас';
const CANCEL = 'Назад';
const PAY = 'Оплатить';

export const ButtonPayNow = (): ReturnComponentType => {
  const [active, setActive] = useState<boolean>(false);

  const onClickEventHandle = useCallback((): void => setActive(!active), [active]);

  return (
    <>
      <button
        onClick={onClickEventHandle}
        className={style.buttonContainerWrapper}
        type="button"
      >
        {PAY_NOW}
      </button>
      <ModalBlock
        active={active}
        setActive={setActive}
        titleValue={PAY_NOW}
        onClickEvent={onClickEventHandle}
        valueFirstButton={CANCEL}
        valueSecondButton={PAY}
      />
    </>
  );
};
