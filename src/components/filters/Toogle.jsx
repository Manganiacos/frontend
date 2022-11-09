/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

function Toogle({ options, value, selectToggle }) {
  return (
    <div className="flex items-center mb-4">
      <button
        type="button"
        onChange={selectToggle}
        value={value}
        className="flex flex-row gap-2"
      >
        {options.map(({ _id, name }) => (
          <label
            key={_id}
            value={name}
            htmlFor={_id}
            className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800 cursor-pointer"
          >
            {name}
          </label>
        ))}
      </button>
    </div>
  );
}

export default Toogle;