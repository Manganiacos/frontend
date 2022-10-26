/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Fast(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M8 19v-7H6V2h8l-3 7h3z" />
    </svg>
  );
}

export default Fast;
