/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { removeFromFavorite } from '../actions/favoriteActions';
import { addToCart } from '../actions/cartActions';

function FavoriteProduct({ item }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(item.name.toLowerCase());
  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(item.price);
  const [hasClicked, setHasClicked] = useState(true);

  const removeFromFavoriteHandler = (id) => {
    dispatch(removeFromFavorite(id));
  };

  const addToCartHandler = (id) => {
    dispatch(addToCart(id, 1));
    removeFromFavoriteHandler(id);
  };
  //   console.log(item);
  return (
    <section className="flex flex-row justify-start gap-8 py-4 px-12">
      <div className="flex justify-start items-start relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-28 h-40 object-cover relative rounded-lg"
        />
      </div>
      <div className=" flex flex-col gap-1 justify-between">
        <span className=" flex flex-col">
          <h1 className="text-white/80 text-lg font-bold">
            {name.charAt(0).toUpperCase() + name.slice(1)} Vol. {item.volume}
          </h1>

          <h1 className="text-white/80 font-bold text-md">
            {price.substring(0, price.length - 3)}
          </h1>
          <h1 className="text-white/80 font-bold text-md">
            {item.countInStock} Disponibles
          </h1>
          <h1 className="text-green-500/80 font-bold text-md">
            Envio a todo el país
          </h1>
        </span>
        <span className="flex flex-row gap-2 py-1">
          <button
            type="button"
            onClick={() => removeFromFavoriteHandler(item.product)}
            className="text-xs fill-white/30 py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
          >
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ duration: 0.5 }}
              onClick={() => setHasClicked(!hasClicked)}
              style={{
                cursor: 'pointer'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20}>
                {!hasClicked && (
                  <path
                    className="fill-white/80"
                    d="M10 17l-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979zm0-5.5z"
                  />
                )}
                {hasClicked && (
                  <path
                    className="fill-red-500 fill-opacity-80"
                    d="M10 17l-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979zm0-5.5z"
                  />
                )}
              </svg>
            </motion.div>
          </button>
          <button
            type="button"
            onClick={() => addToCartHandler(item.product)}
            className="w-32 text-white/50 hover:text-white/80 text-xs py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
          >
            Agregar al carrito
          </button>
        </span>
      </div>
    </section>
  );
}

export default FavoriteProduct;
