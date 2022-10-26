/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Minus from '../assets/svg/minus';
import Plus from '../assets/svg/plus';
import Delete from '../assets/svg/delete';

import { addToCart, removeFromCart } from '../actions/cartActions';

function CartProducts(props) {
  const { product } = props;
  const [qty, setQty] = useState(product.qty);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const incremenateQty = () => {
    if (qty < product.countInStock) {
      setQty(qty + 1);
    }
  };
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const total = product.qty * product.price;

  const totalPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(total);

  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(product.price);

  useEffect(() => {
    dispatch(addToCart(product.product, qty));
    console.log(product.product);
  }, [dispatch, qty, product.product]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex flex-row justify-between gap-4">
      <div className="lg:col-span-4 col-span-8 flex flex-row gap-4 items-start">
        <Link to={`/product/${product.product}`}>
          <img
            src={product.image}
            alt={product.name}
            className="relative rounded-md w-[80px] h-[100px] object-cover"
          />
        </Link>
        <span className="flex flex-col gap-2">
          <h1 className="text-white/80 text-sm font-bold uppercase">
            {product.name} Vol. {product.volume}
          </h1>
          <span className="flex flex-row items-center gap-2">
            <h1 className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800">
              {product.editorial}
            </h1>
            <h1 className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800">
              {product.category}
            </h1>
          </span>
          <span>
            <button
              type="button"
              className="text-white/80 text-xs font-normal underline hover:text-white"
            >
              Agrergar a favoritos
            </button>
          </span>
        </span>
      </div>
      <div className="col-span-1 flex flex-row gap-4 justify-center items-center">
        <h1 className="text-white/80 text-xs font-normal uppercase">
          {price.substring(0, price.length - 3)}
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
        <h1 className="text-white/80 text-sm font-normal ">
          {totalPrice.substring(0, price.length - 3)}
        </h1>
        <span className="col-span-1 flex items-center">
          <button onClick={() => removeFromCartHandler(product.product)}>
            <Delete className="fill-white/80 active:fill-[#C94E4E]" />
          </button>
        </span>
      </div>
    </div>
  );
}
export default CartProducts;
