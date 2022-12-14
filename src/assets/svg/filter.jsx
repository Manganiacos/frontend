/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Filter(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M9.5 16q-.208 0-.354-.146T9 15.5v-4.729L4.104 4.812q-.187-.25-.052-.531Q4.188 4 4.5 4h11q.312 0 .448.281.135.281-.052.531L11 10.771V15.5q0 .208-.146.354T10.5 16zm.5-6.375L13.375 5.5H6.604zm0 0z" />
    </svg>
  );
}

export default Filter;
