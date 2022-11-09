/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import Items from './Items';

function ListProduct({ list }) {
  return (
    <div className="list-wrap">
      {list.map((item) => (
        <Items key={item._id} item={item} />
      ))}
    </div>
  );
}

export default ListProduct;
