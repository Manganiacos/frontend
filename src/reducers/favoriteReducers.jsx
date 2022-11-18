/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-case-declarations */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
  FAVORITE_CLEAR_ITEMS
} from '../constants/favoriteConstants';

export const favoriteReducer = (state = { favoriteItems: [] }, action) => {
  switch (action.type) {
    case FAVORITE_ADD_ITEM:
      const item = action.payload;
      const existItem = state.favoriteItems.find(
        (x) => x.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          favoriteItems: state.favoriteItems.map((x) =>
            x.product === existItem.product ? item : x
          )
        };
      }
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, item]
      };

    case FAVORITE_REMOVE_ITEM:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (x) => x.product !== action.payload
        )
      };

    case FAVORITE_CLEAR_ITEMS:
      return {
        ...state,
        favoriteItems: []
      };

    default:
      return state;
  }
};
