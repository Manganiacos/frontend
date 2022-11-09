/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from 'react';

function Slider({ value, changePrice }) {
  return (
    <div className="relative pt-1">
      {/* range price input */}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        valueLabelDisplay="on"
        onChange={changePrice}
      />
      <div className="flex justify-between">
        <span className="text-xs font-semibold inline-block text-gray-700">
          ${value}
        </span>
      </div>
    </div>
  );
}

export default Slider;
