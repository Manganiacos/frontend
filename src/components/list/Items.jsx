/* eslint-disable react/prop-types */
import React from 'react';

function Items({ product: { name, editorial, category } }) {
  return (
    <div className="border">
      <h4 className="text-white">{name}</h4>
      <h4 className="text-white">{editorial}</h4>
      <h4 className="text-white">{category}</h4>
    </div>
  );
}

export default Items;
