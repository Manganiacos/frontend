/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../assets/svg/cart';

function ProductNew({ product, handleProduct }) {
  const [name, setName] = useState(product.name.toLowerCase());
  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(product.price);
  return (
    <section className="relative rounded-md bg-black/30 shadow-lg p-2 shadow-black/30 overflow-hidden">
      <div className="flex justify-center items-center relative py-4 px-12">
        <span className="z-40 absolute px-3 py-1 border rounded-md border-green-100/20 bg-green-800 top-4 right-4">
          <h1 className="text-green-200 font-normal text-xs">Nuevo</h1>
        </span>

        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            alt={product.name}
            className=" w-full h-56 object-cover relative shadow-lg rounded-lg"
          />
        </Link>
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
          <button type="button" onClick={() => handleProduct(product)}>
            <span>
              <Cart className="fill-zinc-400 hover:fill-zinc-100" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductNew;
