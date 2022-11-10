/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card';

function ListProduct({ list }) {
  // console.log(currentItems);
  return (
    <div className="grid grid-cols-4 gap-4">
      {list &&
        list.map((product) => (
          <div key={product._id} className="col-span-1">
            <Card product={product} />
          </div>
        ))}
    </div>
  );
}

export default ListProduct;
