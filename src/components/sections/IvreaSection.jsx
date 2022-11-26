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
import Ivrea from '../../assets/svg/logos/ivrea';
import { listProductsAll } from '../../actions/productActions';
import Loader from '../loaders/Loader';

function IvreaSection() {
  const dispatch = useDispatch();
  const location = useLocation();

  const keyword = location.search;
  const productAll = useSelector((state) => state.productAll);
  const { error, loading, products } = productAll;

  const productsFilter = products
    .filter((product) => product.editorial === 'ivrea')
    .map((product) => {
      const date = new Date(product.createdAt);
      const dateString = date.toLocaleDateString();
      return { ...product, createdAt: dateString };
    })
    .reverse();

  useEffect(() => {
    dispatch(listProductsAll(keyword));
  }, [dispatch, keyword]);
  return (
    <>
      <section className="relative flex flex-col bg-black/30 rounded-lg shadow-md">
        <div className="bg-[#ED1B2F] p-14 rounded-t-lg absolute w-full"></div>
        <div className="relative flex justify-center items-center pt-10">
          <div className="bg-zinc-800 px-12 rounded-lg m-2 relative shadow-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80">
            <Ivrea />
          </div>
        </div>
        <div className="pt-6">
          <div className="grid grid-cols-3 gap-3 px-8 pb-6">
            {loading ? (
              <div className="col-span-3 flex justify-center">
                <Loader color="#eee" size={40} />
              </div>
            ) : (
              <>
                {productsFilter.slice(0, 3).map((product) => (
                  <>
                    <span>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-md object-cover h-24"
                      />
                    </span>
                  </>
                ))}
              </>
            )}
          </div>
          <div className="flex justify-center text-center pb-8 cursor-pointer">
            <h1 className="text-white/80 font-normal text-sm border-b hover:border-zinc-200 border-zinc-400">
              Más detalles
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default IvreaSection;
