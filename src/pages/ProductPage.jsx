/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion, useCycle } from 'framer-motion';

import { useNavigate, useParams, Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { listProductDetails } from '../actions/productActions';

import { addToFavorite } from '../actions/favoriteActions';

import Rating from '../components/Rating';
import SEO from '../components/SEO';
import Comment from '../components/Comment';

import Book from '../assets/svg/book';
import Home from '../assets/svg/home';
import Label from '../assets/svg/label';
import Right from '../assets/svg/right';
import Minus from '../assets/svg/minus';
import Plus from '../assets/svg/plus';
import Favorite from '../assets/svg/favorite';
import Bill from '../assets/svg/bill';
import ShippingCart from '../assets/svg/shippingCart';
import Shield from '../assets/svg/shield';
import Original from '../assets/svg/original';
import Close from '../assets/svg/close';

function ProductPage() {
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const [show, setShow] = useCycle(false, true);

  const [qty, setQty] = useState(1);

  const incremenateQty = (e) => {
    if (qty < product.countInStock) {
      setQty(qty + 1);
    }
    e.preventDefault();
  };
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const dispatch = useDispatch();

  const params = useParams();

  const navigate = useNavigate();

  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(product.price);

  const open = () => {
    setShow();
  };

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`);
  };

  if (show) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params]);

  // title set name and volume
  const title = `${product.name} VOL. ${product.volume}`;

  const [hasClicked, setHasClicked] = useState(false);

  const addToFavoriteHandler = () => {
    dispatch(addToFavorite(product._id, qty));
  };

  const handleShow = () => {
    addToFavoriteHandler();
  };

  return (
    <>
      <SEO title={title} description="Manganiacos" />
      <section className="container mx-auto pt-4 pb-56">
        <div className="flex flex-row gap-4 xl:px-0 px-8 items-center">
          <Link to="/store">
            <Home className="fill-zinc-100" />
          </Link>
          <Right className="fill-zinc-400" />
          <h1 className="text-zinc-400 xl:text-sm text-xs font-bold capitalize">
            {product.name} VOL. {product.volume}
          </h1>
        </div>
        <section className="hidden xl:block">
          <div className="grid grid-cols-2 gap-0">
            <div className="col-span-1 pt-8 flex flex-col gap-6">
              <span className="flex flex-col gap-1">
                <h1 className="text-white/80 font-bold text-3xl">
                  {product.name} VOL. {product.volume}
                </h1>
                <span className="flex flex-row gap-2">
                  <Bill className="fill-zinc-400" />
                  <h1 className="text-zinc-400 text-sm font-bold capitalize">
                    {price.substring(0, price.length - 3)}
                  </h1>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <Rating value={product.rating} color="#ecdf49" />
                  <h1 className="text-white/80 text-xs">
                    {product.numReviews} Comentarios
                  </h1>
                </span>
              </span>
              <span>
                <p className="text-white/80 font-normal text-sm text-justify">
                  {product.description}
                </p>
              </span>
              <span className="flex flex-col gap-2">
                <h1 className="text-white/80 font-bold text-sm flex flex-row gap-1">
                  <Label className="fill-zinc-100" />
                  Categoria:{' '}
                  <span className="capitalize font-normal text-white/80">
                    {product.category}
                  </span>
                </h1>
                <h1 className="text-white/80 font-bold text-sm flex flex-row gap-1">
                  <Book className="fill-zinc-100" />
                  Editorial:{' '}
                  <span className="capitalize font-normal text-white/80">
                    {product.editorial}
                  </span>
                </h1>
              </span>
              {product.countInStock > 0 && (
                <span className="flex flex-row gap-2">
                  <button
                    type="button"
                    onClick={handleShow}
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={20}
                        width={20}
                      >
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
                  <button
                    type="button"
                    onClick={addToCartHandler}
                    className="text-xs text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
                  >
                    Comprar
                  </button>
                </span>
              )}
              {product.countInStock === 0 && (
                <h1 className="text-white/80 font-normal text-sm text-center px-3 py-1 border rounded-md border-white/20 bg-zinc-800">
                  Lo siento pero este producto no está disponible en este
                  momento
                </h1>
              )}

              <hr className="border-zinc-800/80" />
              <div className="flex flex-col gap-2">
                <h1 className="text-white/80 font-bold text-md flex flex-row gap-1">
                  Opiniones del producto
                </h1>
                {/* <span className="grid gap-2">
                
              </span> */}
                <Comment product={product} params={params} />
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-center gap-4 relative">
              {/* <span className="z-40 absolute bg-zinc-900 bg-opacity-90 right-0 left-[24em] top-[2.5em] w-56 rotate-45 overflow-clip z-1 flex justify-center items-center">
              <h1 className="text-opacity-100">
                <span className="text-white/80 font-normal text-sm">
                  {product.countInStock >= 2 && product.countInStock <= 5
                    ? `Últimas ${product.countInStock} unidades`
                    : ''}

                  {product.countInStock === 1 && `Última unidad`}
                  {product.countInStock === 0 && (
                    <span className="text-red-400/80">Agotado</span>
                  )}
                </span>
              </h1>
            </span> */}
              <button type="button" onClick={open}>
                <LazyLoadImage
                  effect="blur"
                  src={product.image}
                  alt={product.name}
                  className="relative rounded-md w-[350px] h-[500px] object-cover shadow-md cursor-zoom-in"
                />
              </button>
              <span className="flex justify-between flex-row gap-4 border border-white/20 bg-zinc-800 p-4 rounded-lg">
                <div className="flex flex-col gap-2 items-center">
                  <ShippingCart className="fill-white" />
                  <h1 className="text-white text-xs font-normal tracking-normal capitalize">
                    Envíos a todo el país
                  </h1>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <Shield className="fill-white" />
                  <h1 className="text-white text-xs font-normal tracking-normal capitalize">
                    Pago Seguro
                  </h1>
                </div>
                <div className="order-last flex flex-col gap-2 items-center ">
                  <Original className="fill-white" />
                  <h1 className="text-white text-xs font-normal tracking-normal capitalize">
                    Producto Original
                  </h1>
                </div>
              </span>
            </div>
            {/* <h1 className="col-span-1 font-bold text-white/80 border">
            Productos relacionados
          </h1> */}
          </div>
        </section>

        <section className="xl:hidden block">
          <div className="grid grid-cols-2 gap-0">
            <div className="col-span-2 flex flex-col items-center gap-4 relative pt-8 px-8">
              <button type="button" onClick={open}>
                <LazyLoadImage
                  effect="blur"
                  src={product.image}
                  alt={product.name}
                  className="relative rounded-md w-[350px] h-[500px] object-cover shadow-md cursor-zoom-in"
                />
              </button>
              {/* <span className="flex justify-between flex-row gap-4 border border-white/20 bg-zinc-800 p-4 rounded-lg">
                <div className="flex flex-col gap-2 items-center">
                  <ShippingCart className="fill-white" />
                  <h1 className="text-white text-xs font-normal tracking-normal capitalize">
                    Envíos a todo el país
                  </h1>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <Shield className="fill-white" />
                  <h1 className="text-white text-xs font-normal tracking-normal capitalize">
                    Pago Seguro
                  </h1>
                </div>
                <div className="order-last flex flex-col gap-2 items-center ">
                  <Original className="fill-white" />
                  <h1 className="text-white text-xs font-normal tracking-normal capitalize">
                    Producto Original
                  </h1>
                </div>
              </span> */}
            </div>
            <div className="col-span-2 pt-8 flex flex-col gap-6 px-8">
              <span className="flex flex-col gap-1">
                <h1 className="text-white/80 font-bold text-xl">
                  {product.name} VOL. {product.volume}
                </h1>
                <span className="flex flex-row gap-2">
                  <Bill className="fill-zinc-400" />
                  <h1 className="text-zinc-400 text-sm font-bold capitalize">
                    {price.substring(0, price.length - 3)}
                  </h1>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <Rating value={product.rating} color="#ecdf49" />
                  <h1 className="text-white/80 text-xs">
                    {product.numReviews} Comentarios
                  </h1>
                </span>
              </span>
              <span>
                <p className="text-white/80 font-normal text-sm text-justify">
                  {product.description}
                </p>
              </span>
              <span className="flex flex-col gap-2">
                <h1 className="text-white/80 font-bold text-sm flex flex-row gap-1">
                  <Label className="fill-zinc-100" />
                  Categoria:{' '}
                  <span className="capitalize font-normal text-white/80">
                    {product.category}
                  </span>
                </h1>
                <h1 className="text-white/80 font-bold text-sm flex flex-row gap-1">
                  <Book className="fill-zinc-100" />
                  Editorial:{' '}
                  <span className="capitalize font-normal text-white/80">
                    {product.editorial}
                  </span>
                </h1>
              </span>
              {product.countInStock > 0 && (
                <span className="flex flex-row gap-2">
                  <button
                    type="button"
                    onClick={handleShow}
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={20}
                        width={20}
                      >
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
                  <button
                    type="button"
                    onClick={addToCartHandler}
                    className="text-xs text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
                  >
                    Comprar
                  </button>
                </span>
              )}
              {product.countInStock === 0 && (
                <h1 className="text-white/80 font-normal text-sm text-center px-3 py-1 border rounded-md border-white/20 bg-zinc-800">
                  Lo siento pero este producto no está disponible en este
                  momento
                </h1>
              )}

              <hr className="border-zinc-800/80" />
              <div className="flex flex-col gap-2">
                <h1 className="text-white/80 font-bold text-md flex flex-row gap-1">
                  Opiniones del producto
                </h1>
                <Comment product={product} params={params} />
              </div>
            </div>
          </div>
        </section>
      </section>
      <AnimatePresence exitBeforeEnter>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50"
            style={{
              backdropFilter: 'blur(5px)'
            }}
          >
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full rounded-md xl:p-8 p-0 xl:w-auto xl:px-0 px-6 flex flex-col gap-2">
              <span className="flex flex-row gap-4 justify-between items-center w-full">
                <h1 className="text-white/80 w-full xl:text-sm text-xs">
                  Vista previa de la imagen
                </h1>
                <button
                  type="button"
                  onClick={setShow}
                  className="flex justify-end w-full"
                >
                  <Close className="fill-white/50 hover:fill-white" />
                </button>
              </span>
              <LazyLoadImage
                effect="blur"
                src={product.image}
                alt={product.name}
                className="relative rounded-md object-cover w-full xl:h-[40em] h-96"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProductPage;
