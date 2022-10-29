/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Link } from 'react-router-dom';

function Results({ product }) {
  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(product.price);
  return (
    <Link to={`/product/${product._id}`}>
      <div className="hover:bg-black/20 p-2 flex flex-row gap-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-12 h-12 object-cover"
        />
        <div className="flex flex-col">
          <p className="text-white/80 text-sm font-normal capitalize">
            {product.name.charAt(0).toUpperCase() +
              product.name.slice(1).toLowerCase()}{' '}
            Vol. {product.volume}
          </p>
          <p className="text-white/60 text-xs font-normal">
            {price.substring(0, price.length - 3)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Results;
