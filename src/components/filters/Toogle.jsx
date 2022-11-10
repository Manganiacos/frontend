/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

function Toogle({ options, value, select, selectToggle }) {
  return (
    <div className="flex flex-row gap-2 items-center mb-4" value={value}>
      {options.map(({ _id, name }) => (
        <button
          type="button"
          key={_id}
          value={name}
          onClick={value}
          onChange={selectToggle}
          className={`${
            select === name
              ? 'text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800 cursor-pointer'
              : 'text-xs text-white/50 hover:text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800 cursor-pointer'
          } py-1 px-2 rounded-md capitalize`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default Toogle;
