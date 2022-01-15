import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import style from './SortModule.module.scss';

import { SORT_MENU } from 'components/BodyContainer/BodyContainer';
import imageVector from 'images/utils/Vector.svg';
import { sortPizzasAC } from 'store/actionCreators';
import { sortPizzasALLAC } from 'store/actionCreators/actionCreators';
import { ReturnComponentType } from 'types';

export const PRICE_SORT = 'цене';
export const ALPHABET_SORT = 'алфавиту';
export const POPULAR_SORT = 'пулярности';
const sortArrayButtons = [POPULAR_SORT, PRICE_SORT, ALPHABET_SORT];

export const SortModule = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const [sortActiveValue, setSorActiveValue] = useState<string>(POPULAR_SORT);
  const [changeModule, setChangeModule] = useState<boolean>(false);

  const changeModeModule = (): void => {
    setChangeModule(!changeModule);
  };

  const helperChangeSortMenu = (sort: string): void => {
    setSorActiveValue(sort);
    changeModeModule();
  };

  const changeSortMenu = (sort: string): void => {
    if (sort === POPULAR_SORT) {
      dispatch(sortPizzasALLAC());
      helperChangeSortMenu(sort);
      return;
    }
    dispatch(sortPizzasAC(sort));
    helperChangeSortMenu(sort);
  };

  const spanMode = (
    <>
      <div
        className={
          changeModule
            ? style.bodyContainerSortMenuLogo
            : style.bodyContainerSortMenuLogoActive
        }
      >
        <img alt="logo" src={imageVector} />
      </div>
      <span className={style.bodyContainerSort}>{SORT_MENU}</span>
      <span
        className={style.sortModuleBlockSpanMode}
        aria-hidden
        onClick={changeModeModule}
      >
        {sortActiveValue}
      </span>
    </>
  );

  if (changeModule) {
    return (
      <>
        {spanMode}
        <div className={style.sortModuleBlock}>
          <ul>
            {sortArrayButtons.map((sort, index) => (
              <li
                className={sort === sortActiveValue ? style.liActive : style.li}
                aria-hidden
                key={`${index + sort}`}
                onClick={() => changeSortMenu(sort)}
              >
                {sort}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  return spanMode;
};
