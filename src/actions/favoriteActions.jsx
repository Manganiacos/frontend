/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM
} from '../constants/favoriteConstants';

export const addToFavorite = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: FAVORITE_ADD_ITEM,
    payload: {
      product: data._id,
      editorial: data.editorial,
      category: data.category,
      volume: data.volume,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  });
  localStorage.setItem(
    'favoriteItems',
    JSON.stringify(getState().favorite.favoriteItems)
  );
};

export const removeFromFavorite = (id) => (dispatch, getState) => {
  dispatch({
    type: FAVORITE_REMOVE_ITEM,
    payload: id
  });

  localStorage.setItem(
    'favoriteItems',
    JSON.stringify(getState().favorite.favoriteItems)
  );
};
