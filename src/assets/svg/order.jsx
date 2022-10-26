/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Order(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M3 18V2l1.167.938L5.333 2l1.167.938L7.667 2l1.166.938L10 2l1.167.938L12.333 2l1.167.938L14.667 2l1.166.938L17 2v16l-1.167-.938-1.166.938-1.167-.938-1.167.938-1.166-.938L10 18l-1.167-.938L7.667 18 6.5 17.062 5.333 18l-1.166-.938zm3-4.5h8V12H6zm0-2.75h8v-1.5H6zM6 8h8V6.5H6zm-1.5 7.5h11v-11h-11zm0-11v11z" />
    </svg>
  );
}

export default Order;
