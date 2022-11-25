/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Icons
import Bags from '../assets/svg/cart';
import Close from '../assets/svg/close';

import CartModal from './CartModal';
import Mall from '../assets/svg/mall';

function Cart({ show, setShow }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { loading, error, cartItems } = cart;

  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(cartItems.reduce((a, c) => a + c.price * c.qty, 0));

  return (
    <section className="absolute bg-zinc-900 top-0 right-0 flex h-full lg:w-[500px] w-full flex-col rounded-l-lg">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-56 p-5">
            <div className="col-span-1 flex justify-start gap-3 items-center">
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
                <button type="button" className="relative" onClick={setShow}>
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
              <div className="grid grid-cols-3 gap-4">
                {cartItems.map((product) => (
                  <>
                    <CartModal product={product} />
                  </>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      {cartItems.length === 0 ? (
        <></>
      ) : (
        <section className="flex flex-col border-t border-zinc-800 px-8 py-6 gap-3">
          <span className="text-white/80 text-sm flex flex-row justify-between">
            <h1>Subtotal:</h1>
            <h1>{price.substring(0, price.length - 3)}</h1>
          </span>
          <span className="text-white/80 text-sm flex flex-row justify-between">
            <h1>Descuento:</h1>
            <h1>- $0</h1>
          </span>
          <span className="text-white/80 text-sm flex flex-row justify-between">
            <h1>Impuestos de envío:</h1>
            <h1>Calculado al finalizar</h1>
          </span>
          <hr className="border-zinc-800 px-8" />
          <span className="text-white/80 text-sm font-bold flex flex-row justify-between">
            <h1>Total:</h1>
            <h1>{price.substring(0, price.length - 3)}</h1>
          </span>
          <span className="flex flex-row gap-4 justify-center w-full">
            {!userInfo ? (
              <Link
                to="/"
                className="w-full text-center text-sm text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
              >
                <button type="button" onChange={setShow}>
                  Iniciar Sesión / Crear Cuenta
                </button>
              </Link>
            ) : (
              <Link
                to="/cart/shipping"
                className="w-full text-center text-sm text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
              >
                <button type="button" onChange={setShow}>
                  Ir al proceso de pago
                </button>
              </Link>
            )}

            <Link
              to="/cart"
              className="w-full text-center text-sm text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
            >
              <button type="button" onClick={setShow}>
                Ver carrito
              </button>
            </Link>
          </span>
        </section>
      )}
    </section>
  );
}

export default Cart;
