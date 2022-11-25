/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Card from '../Card';

function ListProduct({ list }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="grid grid-cols-4 gap-4">
        {list &&
          list.map((product) => (
            <motion.div
              initial={{ transform: 'scale(0)' }}
              animate={{ transform: 'scale(1)' }}
              exit={{ transform: 'scale(0)' }}
              key={product._id}
              className="col-span-1"
            >
              <Card product={product} />
            </motion.div>
          ))}
      </div>
    </AnimatePresence>
  );
}

export default ListProduct;
