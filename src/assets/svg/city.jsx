/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function City(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M3 18V7.5h4V6l3-3 3 3v4.5h4V18zm1.5-1.5H6V15H4.5zm0-3H6V12H4.5zm0-3H6V9H4.5zm4.75 6h1.5V15h-1.5zm0-3h1.5V12h-1.5zm0-3h1.5V9h-1.5zm0-3h1.5V6h-1.5zm4.75 9h1.5V15H14zm0-3h1.5V12H14z" />
    </svg>
  );
}

export default City;
