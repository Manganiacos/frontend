/* eslint-disable no-underscore-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion, useCycle } from 'framer-motion';

import Bag from '../assets/svg/bag';
import Bags from '../assets/svg/cart';
import Close from '../assets/svg/close';

import CartModal from './CartModal';
import Mall from '../assets/svg/mall';
import Cart from './Cart';

function CartShop() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { loading, error, cartItems } = cart;

  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(cartItems.reduce((a, c) => a + c.price * c.qty, 0));
  const [show, setShow] = useCycle(false, true);

  if (show) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  const open = () => {
    setShow();
  };

  return (
    <section>
      <button type="button" onClick={open} className="relative pt-1">
        <Bag className="fill-white/60 hover:fill-white/80" />
      </button>
      <AnimatePresence exitBeforeEnter>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 fixed top-0 left-0 w-screen h-screen z-[70]"
            style={{
              backdropFilter: 'blur(5px)'
            }}
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
                <section className="absolute bg-zinc-900 top-0 right-0 flex h-full xl:w-[500px] w-full flex-col xl:rounded-l-lg">
                  <div className="grid grid-cols-2 gap-56 p-5 w-full">
                    <div className="col-span-1 flex justify-start gap-3 items-center w-56">
                      <span>
                        <Bags className="fill-white/80" />
                      </span>
                      <span>
                        {cartItems.length === 0 ? (
                          <h1 className="text-sm font-normal text-white/80">
                            Mi Carrito
                          </h1>
                        ) : (
                          <h1 className="text-sm font-normal text-white/80">
                            {cartItems.length} Artículos
                          </h1>
                        )}
                      </span>
                    </div>
                    <div className="col-span-1 flex justify-end items-center pt-2">
                      <span>
                        <button
                          type="button"
                          className="relative"
                          onClick={setShow}
                        >
                          <Close className="fill-white/50 hover:fill-white/80" />
                        </button>
                      </span>
                    </div>
                  </div>

                  <hr className="border-zinc-800" />

                  {cartItems.length === 0 ? (
                    <section className="mt-80 flex items-center justify-center">
                      <div className="flex flex-col gap-4 items-center justify-center">
                        <div className="border border-dashed rounded-full p-8 border-white/20 bg-zinc-800">
                          <Mall className="fill-white/20" />
                        </div>
                        <h1 className="text-center text-sm font-normal text-white/80">
                          Su carrito está vacío
                        </h1>
                        <button className="text-sm text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800">
                          <Link to="/store">
                            <button type="button" onClick={setShow}>
                              Empezar a Comprar
                            </button>
                          </Link>
                        </button>
                      </div>
                    </section>
                  ) : (
                    <section className="overflow-y-auto p-6 h-[670px] no-scrollbar">
                      <div className="grid grid-cols-3 xl:gap-4 gap-6">
                        {cartItems.map((product) => (
                          <CartModal product={product} key={product._id} />
                        ))}
                      </div>
                    </section>
                  )}

                  {cartItems.length === 0 ? (
                    <></>
                  ) : (
                    <section className="flex flex-col border-t border-zinc-800 px-8 py-6 gap-3">
                      <span className="text-white/80 xl:text-sm text-xs flex flex-row justify-between">
                        <h1>Subtotal:</h1>
                        <h1>{price.substring(0, price.length - 3)}</h1>
                      </span>
                      <span className="text-white/80 xl:text-sm text-xs flex flex-row justify-between">
                        <h1>Descuento:</h1>
                        <h1>- $0</h1>
                      </span>
                      <span className="text-white/80 xl:text-sm text-xs flex flex-row justify-between">
                        <h1>Impuestos de envío:</h1>
                        <h1>Calculado al finalizar</h1>
                      </span>
                      <hr className="border-zinc-800 px-8" />
                      <span className="text-white/80 xl:text-sm text-xs font-bold flex flex-row justify-between">
                        <h1>Total:</h1>
                        <h1>{price.substring(0, price.length - 3)}</h1>
                      </span>
                      <span className="flex flex-row gap-4 justify-center w-full">
                        {!userInfo ? (
                          <Link
                            to="/"
                            className="w-full text-center xl:text-sm text-xs text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
                          >
                            <button type="button" onChange={setShow}>
                              Iniciar Sesión / Crear Cuenta
                            </button>
                          </Link>
                        ) : (
                          <Link
                            to="/cart/shipping"
                            className="w-full text-center xl:text-sm text-xs text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
                          >
                            <button type="button" onChange={setShow}>
                              Ir al proceso de pago
                            </button>
                          </Link>
                        )}

                        <Link
                          to="/cart"
                          className="w-full text-center xl:text-sm text-xs text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
                        >
                          <button type="button" onClick={setShow}>
                            Ver carrito
                          </button>
                        </Link>
                      </span>
                    </section>
                  )}
                </section>
              </>
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default CartShop;
