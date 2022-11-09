/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
// import Card from '../Card';
import Items from './Items';

function ListProduct({ list }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {list.map((product) => (
        // <div key={product._id} className="col-span-1">
        //   <Card product={product} />
        // </div>
        <Items key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ListProduct;
