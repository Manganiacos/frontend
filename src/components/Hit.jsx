/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Highlight } from 'react-instantsearch-dom';
import { Link } from 'react-router-dom';

function Hit({ hit }) {
  return (
    <section className="border">
      <div className="flex justify-center items-center relative py-4 px-12">
        <Link to={`/product/${hit._id}`}>
          <img
            src={hit.image}
            align="left"
            alt={hit.name}
            className=" w-full h-56 object-cover relative shadow-lg rounded-lg"
          />
        </Link>
        {/* <div>
          <Highlight attribute="name" hit={hit} />
        </div> */}
      </div>
    </section>
  );
}

export default Hit;
