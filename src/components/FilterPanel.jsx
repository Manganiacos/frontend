/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { editorialList } from '../constants/testConstant';
import Slider from './filters/Slider';
import Toogle from './filters/Toogle';
import Checkbox from './filters/Checkbox';

import Settings from '../assets/svg/settings';
import Clean from '../assets/svg/clean';

function FilterPanel({
  selectedCategory,
  selectCategory,
  selectedPrice,
  cuisines,
  changeChecked,
  changePrice
}) {
  return (
    <div className="col-span-1 bg-black/30 rounded-md flex flex-col h-[340px]">
      <span className="flex justify-between p-4 items-center">
        <span className="flex flex-row gap-2 items-center">
          <Settings className="fill-white/80" />
          <h1 className="text-white/80 font-normal text-sm">Filtros</h1>
        </span>
        <button
          type="button"
          className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
        >
          <Clean className="fill-white/80" />
        </button>
      </span>
      <hr className="border-zinc-800" />
      <span className="flex flex-col gap-4 p-4">
        <h1 className="text-sm font-normal tracking-wide text-white/80">
          Categorias
        </h1>
        <span className="flex flex-row gap-2">
          {cuisines.map((cuisine) => (
            <Checkbox
              key={cuisine.id}
              cuisine={cuisine}
              changeChecked={changeChecked}
            />
          ))}
        </span>
      </span>
      <hr className="border-zinc-800" />
      <span className="flex flex-col gap-4 p-4">
        <h1 className="text-sm font-normal tracking-wide text-white/80">
          Editoriales
        </h1>
        <Toogle
          options={editorialList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </span>
      <hr className="border-zinc-800" />
      <span className="flex justify-center p-4 items-center">
        <button
          type="button"
          className="text-sm text-white/80 py-1 px-8 border rounded-md border-white/20 bg-zinc-800"
        >
          Aplicar Filtros
        </button>
      </span>
    </div>
  );
}

export default FilterPanel;
