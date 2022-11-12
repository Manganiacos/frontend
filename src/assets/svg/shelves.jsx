/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Shelves(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M3 19V1h1.5v1.5h11V1H17v18h-1.5v-1.5h-11V19zm1.5-9.75H6v-3.5h5v3.5h4.5V4h-11zm0 6.75H9v-3.5h5V16h1.5v-5.25h-11zm3-6.75h2v-2h-2zm3 6.75h2v-2h-2zm-3-6.75h2zm3 6.75h2z" />
    </svg>
  );
}

export default Shelves;
