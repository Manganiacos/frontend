/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Card from '../components/Card';
// algolia import

import Clean from '../assets/svg/clean';
import Settings from '../assets/svg/settings';
import SEO from '../components/SEO';

import Error from '../components/Error';

import CardLoader from '../components/loaders/CardLoader';

function StorePage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <SEO title="Tienda Comics y Mangas" description="Manganiacos" />
      {loading ? (
        <CardLoader />
      ) : error ? (
        <Error />
      ) : (
        <section className="container mx-auto grid grid-cols-4 gap-6 pt-12 pb-56">
          <div className="col-span-1 bg-black/30 rounded-md flex flex-col h-[320px]">
            <span className="flex justify-between p-4 items-center">
              <span className="flex flex-row gap-2 items-center">
                <Settings className="fill-white/80" />
                <h1 className="text-white/80 font-normal text-sm">Filtros</h1>
              </span>
              <button
                type="button"
                className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
              >
                <Clean className="fill-white/80" />
              </button>
            </span>
            <hr className="border-zinc-800" />
            <span className="flex flex-col gap-4 p-4">
              <h1 className="text-sm font-normal tracking-wide text-white/80">
                Categorias
              </h1>
              <span className="flex flex-row gap-2">
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Shonen
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Shojo
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Seinen
                </button>

                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Josei
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Kodomo
                </button>
              </span>
            </span>
            <hr className="border-zinc-800" />
            <span className="flex flex-col gap-4 p-4">
              <h1 className="text-sm font-normal tracking-wide text-white/80">
                Editoriales
              </h1>
              <span className="flex flex-row gap-2">
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Panini
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Ivrea
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Kamite
                </button>

                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Norma
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  ECC
                </button>
              </span>
            </span>
            <hr className="border-zinc-800" />
            <span className="flex justify-center p-4 items-center">
              <button
                type="button"
                className="text-sm text-white/80 py-1 px-8 border rounded-md border-white/20 bg-zinc-800"
              >
                Aplicar Filtros
              </button>
            </span>
          </div>
          <div className="col-span-3 grid grid-cols-4 justify-center gap-4">
            {products.map((product) => (
              <div key={product._id} className="col-span-1">
                <Card product={product} />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default StorePage;
