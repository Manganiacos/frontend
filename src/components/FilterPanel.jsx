/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { editorialList } from '../constants/constant';
import Slider from './filters/Slider';
import Toogle from './filters/Toogle';
import Checkbox from './filters/Checkbox';

import Settings from '../assets/svg/settings';
import Clean from '../assets/svg/clean';

function FilterPanel({
  clearFilters,
  selectedEditorial,
  selectEditorial,
  categories,
  changeChecked,
  handleValue
}) {
  return (
    <div className="col-span-1 bg-black/30 rounded-md flex flex-col h-[300px]">
      <span className="flex justify-between p-4 items-center">
        <span className="flex flex-row gap-2 items-center">
          <Settings className="fill-white/80" />
          <h1 className="text-white/80 font-normal text-sm">Filtros</h1>
        </span>
        <button
          type="button"
          data-tip
          data-for="clear"
          onClick={clearFilters}
          className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
        >
          <Clean className="fill-white/80" />
        </button>
        <ReactTooltip id="clear" place="left" effect="solid">
          <span className="text-xs text-white/80">Limpiar filtros</span>
        </ReactTooltip>
      </span>
      <hr className="border-zinc-800" />
      <span className="flex flex-col gap-4 p-4">
        <h1 className="text-sm font-normal tracking-wide text-white/80">
          Editoriales
        </h1>
        <Toogle
          options={editorialList}
          select={selectedEditorial}
          value={handleValue}
          selectToggle={selectEditorial}
        />
      </span>
      <hr className="border-zinc-800" />
      <span className="flex flex-col gap-4 p-4">
        <h1 className="text-sm font-normal tracking-wide text-white/80">
          Categorias
        </h1>
        <span className="flex flex-row gap-2">
          {categories.map((category) => (
            <Checkbox
              key={category.id}
              category={category}
              changeChecked={changeChecked}
            />
          ))}
        </span>
      </span>
    </div>
  );
}

export default FilterPanel;
