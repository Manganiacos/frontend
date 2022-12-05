/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Card from '../Card';
import Product from '../Product';

function ListProduct({ products }) {
  const [openProduct, cycleOpenProduct] = useCycle(false, true);

  const [listProduct, setListProduct] = useState([]);

  if (openProduct) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <div className="grid grid-cols-4 xl:gap-4 gap-8">
          {products &&
            products.map((product) => (
              <motion.div
                initial={{ transform: 'scale(0)' }}
                animate={{ transform: 'scale(1)' }}
                exit={{ transform: 'scale(0)' }}
                key={product._id}
                className="xl:col-span-1 col-span-4"
              >
                <Card
                  product={product}
                  openProduct={openProduct}
                  cycleOpenProduct={cycleOpenProduct}
                  setListProduct={setListProduct}
                />
              </motion.div>
            ))}
        </div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {openProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 fixed top-0 left-0 w-screen h-screen z-[70]"
            style={{
              backdropFilter: 'blur(5px)'
            }}
          >
            <motion.span
              initial={{
                x: '100vh',
                opacity: 0
              }}
              animate={{
                x: '0vh',
                opacity: 1
              }}
              transition={{ duration: 0.5 }}
              exit={{ x: '100vh', opacity: 0, backgroundColor: 'transparent' }}
              className="fixed top-0 left-0 w-screen h-screen z-[70]"
            >
              <>
                <Product
                  onClick={cycleOpenProduct}
                  product={listProduct}
                  key={listProduct}
                />
              </>
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ListProduct;
