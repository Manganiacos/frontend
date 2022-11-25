/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createAutoComplete } from '@algolia/autocomplete-core';
import { Menu, Transition } from '@headlessui/react';
import { listProductsAll } from '../actions/productActions';
import SearchIcon from '../assets/svg/search';
import Results from './Results';
import CloseIcon from '../assets/svg/close';

function Search() {
  const dispatch = useDispatch();
  const productAll = useSelector((state) => state.productAll);
  const { error, loading, products } = productAll;

  useEffect(() => {
    dispatch(listProductsAll());
  }, [dispatch]);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = (query) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    if (query.length > 0) {
      setResults(results);
    } else {
      setResults([]);
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    search(query);
  };

  return (
    <div className="flex flex-row gap-2 relative">
      <input
        type="text"
        placeholder="Encuentra tu manga favorito"
        value={query}
        onChange={handleInputChange}
        className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
      />
      <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
      {results.length > 0 || query.length > 0 ? (
        <button
          type="button"
          onClick={() => {
            setQuery('');
            setResults([]);
          }}
          className="absolute top-1/2 right-3 transform -translate-y-1/2"
        >
          <CloseIcon className="fill-white/50 hover:fill-white/80 " />
        </button>
      ) : null}

      {query.length > 0 && (
        <div className="absolute border rounded-md border-white/20 bg-zinc-800 top-12 w-full z-[50] overflow-clip">
          {results.length > 0 ? (
            results.map((product) => (
              <div key={product._id}>
                <Results product={product} />
              </div>
            ))
          ) : (
            <h1 className="text-white text-xs text-center py-2">
              No se encontraron resultados
            </h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
