import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

import { PIZZA_ARRAY } from 'PIZZA/PIZZA';
import { PizzaType } from 'PIZZA/types';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_API_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
};

initializeApp(firebaseConfig);
export const database = getDatabase();

export const writeUserData = async (array: PizzaType): Promise<void> => {
  await set(ref(database, `state`), array);
};
writeUserData(PIZZA_ARRAY);
