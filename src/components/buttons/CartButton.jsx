/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import React from 'react';

import { AnimatePresence, motion, useCycle } from 'framer-motion';

import Bag from '../../assets/svg/bag';
import Cart from '../Cart';

function CartButton() {
  const [openCart, cycleOpenCart] = useCycle(false, true);

  if (openCart) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <>
      <button type="button" onClick={cycleOpenCart} className="relative pt-1">
        <Bag className="fill-white/60 hover:fill-white/80" />
      </button>
      <AnimatePresence exitBeforeEnter>
        {openCart && (
          <motion.div
            initial={{
              x: '100vh',
              opacity: 0
            }}
            animate={{ x: '0vh', opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{
              x: '100vh',
              opacity: 0,
              backgroundColor: 'transparent'
            }}
            className="fixed top-0 left-0 w-screen h-screen z-[70] bg-black/50"
          >
            <>
              <Cart onClick={cycleOpenCart} />
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CartButton;
