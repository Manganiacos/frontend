/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { Link } from 'react-router-dom';

import Cart from '../assets/svg/cart';
import Product from './Product';

function Card({ product }) {
  const [name, setName] = useState(product.name.toLowerCase());
  const [openProduct, cycleOpenProduct] = useCycle(false, true);

  // console.log(openProduct);
  if (openProduct) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(product.price);

  const openProductHandler = () => {
    cycleOpenProduct();
  };
  return (
    <>
      <section className="relative rounded-md bg-black/30 shadow-lg p-2 shadow-black/30 overflow-hidden">
        <div className="flex justify-center items-center relative py-4 px-12">
          <Link to={`/product/${product._id}`}>
            <img
              src={product.image}
              alt={product.name}
              className=" w-full h-56 object-cover relative shadow-lg rounded-lg"
            />
          </Link>
          {product.countInStock > 5 ? (
            ''
          ) : (
            <span className="absolute px-3 py-1 border rounded-md border-white/20 bg-zinc-800 top-4 right-4">
              <h1 className="text-white/80 font-normal text-xs">
                {product.countInStock >= 2 &&
                  product.countInStock <= 5 &&
                  `Últimas ${product.countInStock} unidades`}

                {product.countInStock === 1 && `Última unidad`}
                {product.countInStock === 0 && (
                  <span className="text-red-400/80">Agotado</span>
                )}
              </h1>
            </span>
          )}
        </div>
        <div className="px-12 flex flex-col">
          <h1 className="text-zinc-400 text-xs font-bold capitalize">
            Editorial {product.editorial}
          </h1>
          <h1 className="text-zinc-100 text-sm font-bold capitalize">
            {name.length > 15
              ? `${
                  name.charAt(0).toUpperCase() + name.slice(1).substring(0, 15)
                }...`
              : `${name.charAt(0).toUpperCase() + name.slice(1)} Vol. ${
                  product.volume
                }`}
          </h1>
        </div>
        <div className="grid grid-cols-2 px-12 pt-3 pb-4">
          <div className="col-span-1 flex items-center justify-start ">
            <h1 className="text-zinc-100 text-sm font-bold capitalize">
              {price.substring(0, price.length - 3)}
            </h1>
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <button type="button" onClick={cycleOpenProduct}>
              <span>
                <Cart className="fill-zinc-400 hover:fill-zinc-100" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence exitBeforeEnter>
        {openProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 fixed top-0 left-0 w-screen h-screen z-[70]"
          >
            <motion.span
              initial={{
                x: '100vh',
                opacity: 0
              }}
              animate={{
                x: '0vh',
                opacity: 1
              }}
              transition={{ duration: 0.5 }}
              exit={{ x: '100vh', opacity: 0, backgroundColor: 'transparent' }}
              className="fixed top-0 left-0 w-screen h-screen z-[70]"
            >
              <>
                <Product
                  onClick={cycleOpenProduct}
                  product={product}
                  key={product}
                />
              </>
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
