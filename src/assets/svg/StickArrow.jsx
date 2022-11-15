/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function StickArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M17 8v4a1 1 0 01-2 0v-1.586l-6.293 6.293a1 1 0 11-1.414-1.414L13.586 9H12a1 1 0 010-2h4a1 1 0 011 1z"
        data-name="Up Right"
      />
    </svg>
  );
}

export default StickArrow;
