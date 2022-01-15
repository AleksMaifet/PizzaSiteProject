import { ReactChild, ReactChildren } from 'react';

export type ModalType = {
  active: boolean | undefined;
  setActive: (active: boolean) => void;
  children: ReactChild | ReactChildren;
};