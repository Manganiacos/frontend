/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Icons
import Fast from '../assets/svg/fast';
import Close from '../assets/svg/close';
import Plus from '../assets/svg/plus';
import Minus from '../assets/svg/minus';

import Message from './Message';

import { addToCart } from '../actions/cartActions';

function Product(props) {
  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(1);
  const [name, setName] = useState(props.product.name.toLowerCase());

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const incremenateQty = () => {
    if (qty < props.product.countInStock) {
      setQty(qty + 1);
    }
  };
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(props.product.price);

  const goToCart = () => {
    navigate(`/cart/${props.product._id}?qty=${qty}`);
  };

  const addToCartHandler = () => {
    dispatch(addToCart(props.product._id, qty));
  };

  const handleShow = () => {
    addToCartHandler();
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <section className="absolute bg-zinc-900 top-0 right-0 flex h-full lg:w-[500px] w-full flex-col xl:rounded-l-lg rounded-none">
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-56 p-5">
          <div className="col-span-1 flex justify-start gap-3 items-center xl:w-full w-44">
            <span>
              <Fast className="fill-white/50" />
            </span>
            <span>
              <h1 className="text-sm font-normal text-white/80">
                Vista rápida
              </h1>
            </span>
          </div>
          <div className="col-span-1 flex justify-end items-center pt-2">
            <span>
              <button
                type="button"
                className="relative"
                onClick={props.onClick}
              >
                <Close className="fill-white/50 hover:fill-white/80" />
              </button>
            </span>
          </div>
        </div>
        <hr className="border-zinc-800" />
        <AnimatePresence exitBeforeEnter>
          {show && (
            <motion.div
              initial={{
                height: 0,
                opacity: 1,
                overflow: 'hidden',
                transition: { duration: 0.5, ease: 'easeInOut' }
              }}
              animate={{
                height: 'auto'
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: { duration: 0.2, ease: 'easeInOut', delay: 0.9 }
              }}
              className="fixed xl:absolute left-0 w-full top-[4.6em] xl:top-[4.6em]"
            >
              <>
                <Message />
              </>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="grid grid-cols-3 p-8 gap-4">
          <div className="col-span-1 flex flex-row">
            <section className="w-auto h-auto shadow-lg">
              <img
                src={props.product.image}
                alt=""
                className="rounded-lg w-36 h-full object-cover"
              />
            </section>
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <div className="grid grid-cols-2 gap-10">
              <div className="col-span-2 flex flex-col gap-1">
                <span className="flex items-center">
                  <h1 className="text-white/80 text-sm font-bold tracking-normal w-80 capitalize">
                    {name.charAt(0).toUpperCase() + name.slice(1)} Vol.{' '}
                    {props.product.volume}
                  </h1>
                </span>
                <span className="flex items-center">
                  <h1 className="text-white/80 text-xs font-normal capitalize">
                    {price.substring(0, price.length - 3)}
                  </h1>
                </span>
                <span className="flex items-center">
                  <h1 className="text-white/80 text-xs font-normal capitalize">
                    Editorial {props.product.editorial}
                  </h1>
                </span>
                <span className="flex items-center">
                  <h1 className="text-white/80 text-xs font-normal capitalize">
                    {props.product.category}
                  </h1>
                </span>
                <div className="pt-4">
                  <span className="flex flex-col gap-2 ">
                    <h1 className="text-white/80 text-xs font-normal capitalize">
                      Cantidad:
                    </h1>
                    <span className="flex flex-row">
                      <button
                        type="button"
                        onClick={decrementQty}
                        id="decrement"
                        className="px-1 border fill-white border-white/20 bg-zinc-800 rounded-l-md border-r-0"
                      >
                        <Minus />
                      </button>
                      <button
                        type="button"
                        className="px-3 border border-white/20 bg-zinc-800 border-l-0 border-r-0"
                      >
                        <span className="text-white text-xs">{qty}</span>
                      </button>
                      <button
                        type="button"
                        onClick={incremenateQty}
                        id="increment"
                        className="px-1 border fill-white border-white/20 bg-zinc-800 rounded-r-md border-l-0"
                      >
                        <Plus />
                      </button>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <span>
              <p className="text-white/80 xl:text-sm text-xs xl:w-full w-full text-justify">
                {/* {props.product.description.substring(0, 500)} */}
                {/* if description is too long, it will be cut */}
                {props.product.description > 500
                  ? `${props.product.description.substring(0, 500)}...`
                  : props.product.description}
              </p>
            </span>
          </div>
          {props.product.countInStock === 0 && (
            <h1 className="mt-10 col-span-3 text-white/80 font-normal xl:text-sm text-xs text-center px-3 py-1 border rounded-md border-white/20 bg-zinc-800">
              Lo siento pero este producto no está disponible en este momento
            </h1>
          )}
          {props.product.countInStock > 0 && (
            <section className="col-span-3 grid gap-2 justify-center items-center w-full">
              <div className="xl:mt-20 mt-10 flex col-span-3 justify-center">
                <button
                  type="button"
                  onClick={handleShow}
                  className="xl:text-sm text-xs text-white/80 hover:text-white py-1 px-8 border rounded-md border-white/20 bg-zinc-800 w-48"
                >
                  Añadir a la cesta
                </button>
              </div>
              <div className="flex col-span-3 justify-center">
                <button
                  onClick={goToCart}
                  className="xl:text-sm text-xs text-white/80 hover:text-white py-1 px-10 border rounded-md border-white/20 bg-zinc-800 w-48"
                >
                  Comprar ahora
                </button>
              </div>
              <div className="flex col-span-3 justify-center">
                <Link to={`/product/${props.product._id}`}>
                  <h2 className="text-xs font-normal underline hover:underline text-white/60 hover:text-white/80">
                    Ver detalles
                  </h2>
                </Link>
              </div>
            </section>
          )}
        </section>
      </div>
    </section>
  );
}

export default Product;
