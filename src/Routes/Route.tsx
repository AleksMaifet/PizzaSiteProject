import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { BodyContainer, CartEmptyContainer } from 'components';
import { ReturnComponentType } from 'types';

export const PATH = {
  HOME_PAGE: '/',
  CART: '/cart',
};

export const RoutesBlock = (): ReturnComponentType => (
  <Routes>
    <Route path={PATH.HOME_PAGE} element={<BodyContainer />} />
    <Route path={PATH.CART} element={<CartEmptyContainer />} />
  </Routes>
);
