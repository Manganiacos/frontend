/* eslint-disable react/prop-types */
import React from 'react';

function SearchBar({ value, changeInput }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Woodland Hills"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
}

export default SearchBar;
