/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure
} from 'react-instantsearch-dom';
import { listProducts } from '../actions/productActions';
import Hit from '../components/Hit';

function TestPage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  // algolia push data productList
  const searchClient = algoliasearch(
    'LO67OW4ZPQ',
    'e0f0cde0741e0a5ebed3d196d7111516'
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      <InstantSearch indexName="mangas" searchClient={searchClient}>
        {/* <div>
          <ClearRefinements />
          <h2>Brands</h2>
          <RefinementList attribute="category" />
          <Configure hitsPerPage={2} />
        </div> */}
        <section className="border grid grid-cols-3">
          {/* <SearchBox /> */}
          <Hits hitComponent={Hit} />

          {/* <Pagination /> */}
        </section>
      </InstantSearch>
    </div>
  );
}

export default TestPage;
