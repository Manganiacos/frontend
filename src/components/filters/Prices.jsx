/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

function Prices() {
  const [value, setValue] = useState([50000, 100000]);

  const [price, setPrice] = useState(50000);

  return (
    <div>
      <SliderPrimitive.Root
        defaultValue={[price]}
        max={value[1]}
        step={1}
        aria-label="value"
        onValueChange={setPrice}
        className="relative flex h-5 touch-none items-center w-full"
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-zinc-800">
          <SliderPrimitive.Range className="absolute h-full rounded-full bg-[#CBEF65]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-3 w-3 rounded-full bg-[#CBEF65]" />
      </SliderPrimitive.Root>
      <span className="flex justify-between">
        <h1 className="text-white/80 text-xs">${price}</h1>
        <h1 className="text-white/80 text-xs">${value[1]}</h1>
      </span>
    </div>
  );
}

export default Prices;
