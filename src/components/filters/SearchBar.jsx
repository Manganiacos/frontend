/* eslint-disable react/prop-types */
import React from 'react';
import SearchIcon from '../../assets/svg/search';
import CloseIcon from '../../assets/svg/close';

function SearchBar({ value, changeInput, resetInput }) {
  return (
    <div className="flex flex-row gap-2 relative w-full">
      <input
        type="text"
        placeholder="Encuentra tu manga favorito"
        value={value}
        onChange={changeInput}
        className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
      />
      <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
      {value.length > 0 ? (
        <button
          type="button"
          onClick={resetInput}
          className="absolute top-1/2 right-3 transform -translate-y-1/2"
        >
          <CloseIcon className="fill-white/50 hover:fill-white/80 " />
        </button>
      ) : null}
    </div>
  );
}

export default SearchBar;
