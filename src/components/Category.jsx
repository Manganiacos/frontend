/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import MenuC from '../assets/svg/menu';

function Category() {
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
            className="z-50 absolute left-[180px] w-[385px] h-full"
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
              className="bg-[#111113] rounded-md p-3 flex flex-col"
            >
              <span className="h-96">sadasd</span>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default Category;
