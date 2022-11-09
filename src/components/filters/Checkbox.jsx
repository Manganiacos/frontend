/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

function Checkbox({ changeChecked, cuisine }) {
  const { checked, label, id } = cuisine;

  return (
    <span>
      <input
        type="checkbox"
        id={id}
        name={label}
        value={label}
        checked={checked}
        onChange={() => changeChecked(id)}
      />
      <label
        htmlFor={id}
        className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800 cursor-pointer"
      >
        {label}
      </label>
    </span>
  );
}
export default Checkbox;
