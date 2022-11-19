/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { listProducts } from '../../actions/productActions';
import Loader from '../loaders/Loader';
import ProductFilter from '../ProductFilter';

function Josei() {
  const dispatch = useDispatch();
  const location = useLocation();

  const keyword = location.search;
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const productsFilter = products
    .filter((product) => product.category === 'josei')
    .map((product) => {
      const date = new Date(product.createdAt);
      const dateString = date.toLocaleDateString();
      return { ...product, createdAt: dateString };
    })
    .reverse();

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <Loader color="#eee" size={40} />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {productsFilter.slice(0, 6).map((product) => (
            <ProductFilter product={product} key={product._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Josei;
