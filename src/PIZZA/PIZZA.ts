import imageOfPizza8 from 'images/Pizzas/EighthPizza.svg';
import imageOfPizza5 from 'images/Pizzas/FifthPizza.svg';
import imageOfPizza1 from 'images/Pizzas/FirstPizza.svg';
import imageOfPizza4 from 'images/Pizzas/FourthPizza.svg';
import imageOfPizza2 from 'images/Pizzas/SecondPizza.svg';
import imageOfPizza7 from 'images/Pizzas/SeventhPizza.svg';
import imageOfPizza6 from 'images/Pizzas/SixthPizza.svg';
import imageOfPizza3 from 'images/Pizzas/ThiedPizza.svg';

export const ALL_PIZZA = 'Все';

export const VIEWS_OF_PIZZA = {
  FIRST_PIZZA: 'Пепперони Фреш с перцем',
  SECOND_PIZZA: 'Сырная',
  THIRD_PIZZA: 'Цыпленок барбекю',
  FOURTH_PIZZA: 'Кисло-сладкий цыпленок',
  FIFTH_PIZZA: 'Чизбургер-пицца',
  SIXTH_PIZZA: 'Крэйзи пепперони',
  SEVENTH_PIZZA: 'Пепперони',
  EIGHTH_PIZZA: 'Маргарита',
};

export const PRICE_OF_PIZZA = {
  FIRST_PIZZA: 803,
  SECOND_PIZZA: 245,
  THIRD_PIZZA: 295,
  FOURTH_PIZZA: 275,
  FIFTH_PIZZA: 415,
  SIXTH_PIZZA: 580,
  SEVENTH_PIZZA: 675,
  EIGHTH_PIZZA: 450,
};

export const IMAGE_OF_PIZZA = {
  FIRST_PIZZA: imageOfPizza1,
  SECOND_PIZZA: imageOfPizza2,
  THIRD_PIZZA: imageOfPizza3,
  FOURTH_PIZZA: imageOfPizza4,
  FIFTH_PIZZA: imageOfPizza5,
  SIXTH_PIZZA: imageOfPizza6,
  SEVENTH_PIZZA: imageOfPizza7,
  EIGHTH_PIZZA: imageOfPizza8,
};

export const RECIPE_OF_PIZZA = {
  FIRST_RECIPE: 'Мясные',
  SECOND_RECIPE: 'Вегетарианская',
  THIRD_RECIPE: 'Гриль',
  FOURTH_RECIPE: 'Острые',
  FIFTH_RECIPE: 'Закрытые',
};

export const PIZZA_ARRAY = [
  {
    id: 1,
    name: VIEWS_OF_PIZZA.FIRST_PIZZA,
    price: PRICE_OF_PIZZA.FIRST_PIZZA,
    image: IMAGE_OF_PIZZA.FIRST_PIZZA,
    status: [RECIPE_OF_PIZZA.FIRST_RECIPE, RECIPE_OF_PIZZA.SECOND_RECIPE],
  },
  {
    id: 2,
    name: VIEWS_OF_PIZZA.SECOND_PIZZA,
    price: PRICE_OF_PIZZA.SECOND_PIZZA,
    image: IMAGE_OF_PIZZA.SECOND_PIZZA,
    status: [RECIPE_OF_PIZZA.SECOND_RECIPE],
  },
  {
    id: 3,
    name: VIEWS_OF_PIZZA.THIRD_PIZZA,
    price: PRICE_OF_PIZZA.THIRD_PIZZA,
    image: IMAGE_OF_PIZZA.THIRD_PIZZA,
    status: [RECIPE_OF_PIZZA.FIRST_RECIPE],
  },
  {
    id: 4,
    name: VIEWS_OF_PIZZA.FOURTH_PIZZA,
    price: PRICE_OF_PIZZA.FOURTH_PIZZA,
    image: IMAGE_OF_PIZZA.FOURTH_PIZZA,
    status: [RECIPE_OF_PIZZA.THIRD_RECIPE],
  },
  {
    id: 5,
    name: VIEWS_OF_PIZZA.FIFTH_PIZZA,
    price: PRICE_OF_PIZZA.FIFTH_PIZZA,
    image: IMAGE_OF_PIZZA.FIFTH_PIZZA,
    status: [RECIPE_OF_PIZZA.FOURTH_RECIPE],
  },
  {
    id: 6,
    name: VIEWS_OF_PIZZA.SIXTH_PIZZA,
    price: PRICE_OF_PIZZA.SIXTH_PIZZA,
    image: IMAGE_OF_PIZZA.SIXTH_PIZZA,
    status: [RECIPE_OF_PIZZA.FIFTH_RECIPE],
  },
  {
    id: 7,
    name: VIEWS_OF_PIZZA.SEVENTH_PIZZA,
    price: PRICE_OF_PIZZA.SEVENTH_PIZZA,
    image: IMAGE_OF_PIZZA.SEVENTH_PIZZA,
    status: [RECIPE_OF_PIZZA.FIFTH_RECIPE],
  },
  {
    id: 8,
    name: VIEWS_OF_PIZZA.EIGHTH_PIZZA,
    price: PRICE_OF_PIZZA.EIGHTH_PIZZA,
    image: IMAGE_OF_PIZZA.EIGHTH_PIZZA,
    status: [RECIPE_OF_PIZZA.SECOND_RECIPE],
  },
];
