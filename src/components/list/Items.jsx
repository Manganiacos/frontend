/* eslint-disable react/prop-types */
import React from 'react';

function Items({ item: { name, category, cuisine } }) {
  return (
    <div className="border">
      <h4 className="text-white">{name}</h4>
      <h4 className="text-white">{category}</h4>
      <h4 className="text-white">{cuisine}</h4>
    </div>
  );
}

export default Items;
