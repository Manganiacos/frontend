/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactTooltip from 'react-tooltip';

import { AnimatePresence, motion, useCycle } from 'framer-motion';

import { editorialList } from '../constants/constant';

import Toogle from './filters/Toogle';
import Checkbox from './filters/Checkbox';

import Left from '../assets/svg/left';

import Settings from '../assets/svg/settings';
import Clean from '../assets/svg/clean';
import Prices from './filters/Prices';

function FilterPanel({
  clearFilters,
  selectedEditorial,
  selectEditorial,
  categories,
  changeChecked,
  handleValue
}) {
  const [openCategories, cycleOpenCategories] = useCycle(false, true);
  const [openEditorials, cycleOpenEditorials] = useCycle(false, true);
  const [openSlider, cycleOpenSlider] = useCycle(false, true);
  const [openCollections, cycleOpenCollections] = useCycle(false, true);

  return (
    <div className="col-span-1 bg-black/30 rounded-md flex flex-col">
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

      <div className="flex flex-col gap-4 p-4">
        <span className="flex justify-between">
          <h1 className="text-sm font-normal tracking-wide text-white/80">
            Editoriales
          </h1>
          <button
            type="button"
            onClick={cycleOpenEditorials}
            className="text-white"
          >
            <motion.div whileTap={{ scale: 0.9 }}>
              {openEditorials ? (
                <Left className="fill-white/80 rotate-90" />
              ) : (
                <Left className="fill-white/80 rotate-[270deg]" />
              )}
            </motion.div>
          </button>
        </span>
        <AnimatePresence exitBeforeEnter>
          {openEditorials && (
            <motion.div
              key="categories"
              initial={{
                height: 0,
                opacity: 1,
                overflow: 'hidden',
                transition: { duration: 0.9, ease: 'easeIn' }
              }}
              animate={{
                height: 'auto'
              }}
              exit={{
                height: 1,
                opacity: 1,
                overflow: 'hidden',
                transition: { duration: 0.1, ease: 'easeIn' }
              }}
            >
              <Toogle
                options={editorialList}
                select={selectedEditorial}
                value={handleValue}
                selectToggle={selectEditorial}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <hr className="border-zinc-800" />

      <div className="flex flex-col gap-4 p-4">
        <span className="flex justify-between">
          <h1 className="text-sm font-normal tracking-wide text-white/80">
            Categorias
          </h1>
          <button
            type="button"
            onClick={cycleOpenCategories}
            className="text-white"
          >
            <motion.div whileTap={{ scale: 0.9 }}>
              {openCategories ? (
                <Left className="fill-white/80 rotate-90" />
              ) : (
                <Left className="fill-white/80 rotate-[270deg]" />
              )}
            </motion.div>
          </button>
        </span>
        <AnimatePresence exitBeforeEnter>
          {openCategories && (
            <motion.div
              key="categories"
              initial={{
                height: 0,
                opacity: 1,
                overflow: 'hidden',
                transition: { duration: 0.9, ease: 'easeIn' }
              }}
              animate={{
                height: 'auto'
              }}
              exit={{
                height: 1,
                opacity: 1,
                overflow: 'hidden',
                transition: { duration: 0.1, ease: 'easeIn' }
              }}
            >
              <span className="flex flex-row gap-2 mb-1">
                {categories.map((category) => (
                  <Checkbox
                    key={category.id}
                    category={category}
                    changeChecked={changeChecked}
                  />
                ))}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <hr className="border-zinc-800" />

      <div className="flex flex-col gap-4 p-4">
        <span className="flex justify-between">
          <h1 className="text-sm font-normal tracking-wide text-white/80">
            Precio
          </h1>
          <button
            type="button"
            onClick={cycleOpenSlider}
            className="text-white"
          >
            <motion.div whileTap={{ scale: 0.9 }}>
              {openSlider ? (
                <Left className="fill-white/80 rotate-90" />
              ) : (
                <Left className="fill-white/80 rotate-[270deg]" />
              )}
            </motion.div>
          </button>
        </span>
        <AnimatePresence exitBeforeEnter>
          {openSlider && (
            <motion.div
              key="price"
              initial={{
                height: 0,
                opacity: 1,
                overflow: 'hidden',
                transition: { duration: 0.9, ease: 'easeIn' }
              }}
              animate={{
                height: 'auto'
              }}
              exit={{
                height: 1,
                opacity: 1,
                overflow: 'hidden',
                transition: { duration: 0.1, ease: 'easeIn' }
              }}
            >
              <Prices />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <hr className="border-zinc-800" />

      <div className="flex flex-col gap-4 p-4">
        <span className="flex justify-between">
          <h1 className="text-sm font-normal tracking-wide text-white/80">
            Colecciones
          </h1>
          <button
            type="button"
            onClick={cycleOpenCollections}
            className="text-white"
          >
            <motion.div whileTap={{ scale: 0.9 }}>
              {openCollections ? (
                <Left className="fill-white/80 rotate-90" />
              ) : (
                <Left className="fill-white/80 rotate-[270deg]" />
              )}
            </motion.div>
          </button>
        </span>
        <AnimatePresence exitBeforeEnter>
          {openCollections && (
            <motion.div
              key="price"
              initial={{
                height: 0,
                opacity: 1,
                overflow: 'hidden',
                transition: { duration: 0.9, ease: 'easeIn' }
              }}
              animate={{
                height: 'auto'
              }}
              exit={{
                height: 1,
                opacity: 1,
                overflow: 'hidden',
                transition: { duration: 0.1, ease: 'easeIn' }
              }}
            >
              <Prices />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FilterPanel;
