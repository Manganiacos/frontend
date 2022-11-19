/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import MenuC from '../assets/svg/menu';
import { categoryList } from '../constants/testConstant';
import Default from './categories/Default';
import Shonen from './categories/Shonen';
import Seinen from './categories/Seinen';
import Shojo from './categories/Shojo';
import Kodomo from './categories/Kodomo';
import Josei from './categories/Josei';

function Category() {
  const categories = categoryList;

  const test =
    'https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/2020/inside-skullcandy/desktop-dropdown-3.jpg?t=skdy1';

  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  };

  // if (open) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = 'unset';
  // }

  const hiddenHandler = (open) => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        document.body.style.overflow = 'unset';
      }, 1000);
    }
  };

  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <div className="relative">
            <Menu.Button
              type="button"
              onClick={hiddenHandler(open)}
              className="flex flex-row gap-2 cursor-pointer"
            >
              <MenuC className="fill-white" />
              <h1 className="text-sm text-white font-normal">Categorias</h1>
            </Menu.Button>
          </div>
          <AnimatePresence exitBeforeEnter>
            <Menu.Items className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50">
              <motion.aside
                initial={{ height: 0 }}
                animate={{
                  height: 'auto'
                }}
                exit={{
                  height: 0,
                  transition: { delay: 0.7, duration: 0.3, ease: 'easeInOut' }
                }}
                className="fixed top-[178px] bg-black/80 w-full shadow-lg"
                style={{
                  backdropFilter: 'blur(5px)'
                }}
              >
                <>
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sideVariants}
                    className="container mx-auto"
                  >
                    <Tabs.Root
                      className="grid grid-cols-4 gap-2 py-4"
                      defaultValue="tab0"
                    >
                      <motion.span
                        whileHover={{ scale: 1 }}
                        variants={itemVariants}
                        className="flex flex-col gap-2 col-span-1"
                      >
                        <h1 className="text-white text-lg font-bold capitalize tracking-wide">
                          Categorias
                        </h1>
                        <Tabs.List aria-label="Categories">
                          <span className="flex flex-col gap-2 items-start">
                            {categories.map((category) => (
                              <Tabs.Trigger
                                className="TabsTrigger text-white/80 font-normal capitalize tracking-wider"
                                value={`tab${category._id}`}
                              >
                                <span className="flex flex-row gap-2 items-center">
                                  <svg width="8" height="8" viewBox="0 0 8 8">
                                    <circle
                                      fill="currentColor"
                                      cx="4"
                                      cy="4"
                                      r="4"
                                    />
                                  </svg>
                                  <h1 className="text-white/80 font-bold text-sm">
                                    {category.name}
                                  </h1>
                                </span>
                              </Tabs.Trigger>
                            ))}
                          </span>
                        </Tabs.List>
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1 }}
                        variants={itemVariants}
                        className="flex flex-col gap-3 col-span-3"
                      >
                        <Tabs.Content value="tab0">
                          <h1 className="text-white text-lg font-bold capitalize tracking-wider">
                            libros destacados
                          </h1>
                          <Default />
                        </Tabs.Content>

                        <Tabs.Content value="tab1">
                          <Josei />
                        </Tabs.Content>

                        <Tabs.Content value="tab2">
                          <Seinen />
                        </Tabs.Content>

                        <Tabs.Content value="tab3">
                          <Shojo />
                        </Tabs.Content>

                        <Tabs.Content value="tab4">
                          <Shonen />
                        </Tabs.Content>

                        <Tabs.Content value="tab5">
                          <Kodomo />
                        </Tabs.Content>
                      </motion.span>
                    </Tabs.Root>
                    <hr className="border-white/20 col-span-4 mb-4" />
                  </motion.div>
                </>
              </motion.aside>
            </Menu.Items>
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
}

export default Category;
