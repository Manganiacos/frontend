/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import MenuC from '../assets/svg/menu';
import { categoryList } from '../constants/testConstant';
import RightA from '../assets/svg/rightA';
import ShowCategory from './ShowCategory';

function Category() {
  const [isShown, setIsShown] = useState('');
  const categories = categoryList;
  console.log(isShown);
  return (
    <Menu as="div" className="col-span-3 xl:col-span-1 flex">
      {({ open }) => (
        <>
          <Menu.Button
            type="button"
            className="flex flex-row gap-2 cursor-pointer"
          >
            <MenuC className="fill-white" />
            <h1 className="text-sm text-white font-normal">Categorias</h1>
          </Menu.Button>
          <Transition
            className="z-50 absolute top-[180px] left-[190px] w-[150px]"
            show={open}
            enter="transform transition duration-100 ease-in"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-75 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="border rounded-md flex flex-col border-white/20 bg-zinc-800 overflow-hidden"
            >
              {categoryList.map((category) => (
                <Menu.Button
                  type="button"
                  value={category.name}
                  onMouseEnter={(e) => setIsShown(e.target.value)}
                  onMouseLeave={() => setIsShown('')}
                  className="bg-[#111113]/50 hover:bg-[#111113] px-4 py-2 cursor-pointer flex justify-between items-center"
                >
                  <h1 className="text-white/80 font-normal text-xs capitalize">
                    {category.name}
                  </h1>
                  <RightA className="fill-white/80" />
                </Menu.Button>
              ))}
            </Menu.Items>
          </Transition>
          {isShown && (
            <Transition
              className="z-50 absolute top-[180px] left-[350px]"
              show={open}
              enter="transform transition duration-100 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="border rounded-md flex flex-col border-white/20 bg-zinc-800 overflow-hidden py-2 px-4 w-56 h-56"
              >
                <ShowCategory isShown={isShown} />
              </Menu.Items>
            </Transition>
          )}
        </>
      )}
    </Menu>
  );
}

export default Category;
