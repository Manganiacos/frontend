/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate, useParams, Link } from 'react-router-dom';
import { listProductDetails } from '../actions/productActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';

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

function ProductPage() {
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

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

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview
  } = productReviewCreate;

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`);
  };

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment('');
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(params.id));
  }, [dispatch, params, successProductReview]);

  // title set name and volume
  const title = `${product.name} VOL. ${product.volume}`;

  return (
    <>
      <SEO title={title} description="Manganiacos" />
      <section className="container mx-auto pt-4 pb-56">
        <div className="flex flex-row gap-4">
          <Link to="/store">
            <Home className="fill-zinc-100" />
          </Link>
          <Right className="fill-zinc-400" />
          <h1 className="text-zinc-400 text-sm font-bold capitalize">
            {product.name} VOL. {product.volume}
          </h1>
        </div>
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
                <span className="font-normal text-white/80">
                  {product.category}
                </span>
              </h1>
              <h1 className="text-white/80 font-bold text-sm flex flex-row gap-1">
                <Book className="fill-zinc-100" />
                Editorial:{' '}
                <span className="font-normal text-white/80">
                  {product.editorial}
                </span>
              </h1>
            </span>
            {product.countInStock > 0 && (
              <span className="flex flex-row gap-2">
                <button
                  type="button"
                  className="text-xs fill-white/30 py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
                  onClick={(e) => {
                    e.target.classList.toggle('fill-red-500');
                  }}
                >
                  <Favorite />
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
                Lo siento pero este producto no está disponible en este momento
              </h1>
            )}

            <hr className="border-zinc-800/80" />
            <div className="flex flex-col gap-2">
              <h1 className="text-white/80 font-bold text-sm flex flex-row gap-1">
                Comentarios
              </h1>
              <Comment />
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
            <img
              src={product.image}
              alt={product.name}
              className="relative rounded-md w-[350px] h-[500px] object-cover shadow-md"
            />
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
          <div className="col-span-1 border">a</div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
