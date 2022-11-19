/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function ProductFilter({ product }) {
  const [name, setName] = useState(product.name.toLowerCase());
  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(product.price);
  return (
    <span className="flex justify-start items-start gap-2 relative p-2 hover:bg-[#1c1c1c]/60 rounded-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-28 object-cover relative shadow-lg rounded-sm"
      />
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-white/80 font-normal text-sm">
          {name.charAt(0).toUpperCase() + name.slice(1)} Vol.{product.volume}
        </h1>
        <h1 className="text-white/80 font-normal text-sm">
          {price.substring(0, price.length - 3)}
        </h1>
      </div>
    </span>
  );
}

export default ProductFilter;
