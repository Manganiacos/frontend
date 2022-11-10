/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactPaginate from 'react-paginate';
import Left from '../../assets/svg/left';
import RightA from '../../assets/svg/rightA';

function Paginate({ handlePageClick, pageCount }) {
  return (
    <ReactPaginate
      previousLabel={
        <button className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800">
          <Left className="fill-white/50 hover:fill-white/80" />
        </button>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      nextLabel={
        <button className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800">
          <RightA className="fill-white/50 hover:fill-white/80" />
        </button>
      }
      containerClassName="flex flex-row justify-center items-center gap-4"
      pageClassName={<button className="flex flex-row items-center border" />}
      pageLinkClassName="text-white/80 py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
      breakLabel="..."
      breakClassName="text-white/80 px-2 border rounded-md border-white/20 bg-zinc-800"
      breakLinkClassName="text-white/50 hover:text-white/80"
      activeClassName="text-blue-600"
      renderOnZeroPageCount={null}
    />
  );
}

export default Paginate;
