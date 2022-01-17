import { child, get, getDatabase, ref } from 'firebase/database';
import { Dispatch } from 'redux';

import { setPizzasStateAC } from 'store/actionCreators';

export const setPizzasStateTC = () => async (dispatch: Dispatch) => {
  const dbRef = ref(getDatabase());
  try {
    const snapshot = await get(child(dbRef, `state`));
    dispatch(setPizzasStateAC(snapshot.val()));
  } catch (e) {
    console.log(e);
  }
};
