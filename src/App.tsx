import React from 'react';

import { Header } from 'components';
import { RoutesBlock } from 'Routes/Route';
import style from 'styles/App.module.scss';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => (
  <div className={style.appBlock}>
    <Header />
    <RoutesBlock />
  </div>
);
