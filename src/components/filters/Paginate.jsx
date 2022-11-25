/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
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
import Left from '../../assets/svg/left';
import RightA from '../../assets/svg/rightA';

function Paginate({ pages, pageCount, keyword = '', paginationHandler }) {
  if (keyword) {
    keyword = keyword.split('?keyword=')[1].split('&')[0];
  }

  // console.log(pageCount);

  const nextPage = () => {
    if (pageCount < pages) {
      paginationHandler(pageCount);
    }
  };

  const prevPage = () => {
    if (pageCount > 1) {
      paginationHandler(pageCount - 2);
    }
  };

  return (
    pages > 1 && (
      <div className="flex flex-row gap-3">
        {pageCount > 1 && (
          <button
            className="py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
            onClick={prevPage}
          >
            <Left className="fill-white/50 hover:fill-white/80" />
          </button>
        )}
        {[...Array(pages).keys()].map((x) => (
          <button
            key={x + 1}
            onClick={() => paginationHandler(x)}
            className={
              x + 1 === pageCount
                ? 'text-white/80 px-2 border rounded-md border-white/20 bg-zinc-800'
                : 'text-white/50 hover:text-white/80 px-2 border rounded-md border-white/20 bg-zinc-800'
            }
          >
            {x + 1}
          </button>
        ))}
        {pageCount < pages && (
          <button
            className="py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
            onClick={nextPage}
          >
            <RightA className="fill-white/50 hover:fill-white/80" />
          </button>
        )}
      </div>
    )
  );
}

export default Paginate;
