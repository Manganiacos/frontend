/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function File(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M13.8 3.5V5H5.125q-.15 0-.237.088-.088.087-.088.212v13.4q0 .125.088.213.087.087.237.087H18.5q.125 0 .212-.087.088-.088.088-.213V10h1.5v8.7q0 .75-.525 1.275-.525.525-1.275.525H5.125q-.775 0-1.3-.525T3.3 18.7V5.3q0-.75.525-1.275.525-.525 1.3-.525zm4.9-.375v2h2v1.5h-2v2h-1.5v-2h-2v-1.5h2v-2zM6.55 16.75h10.575l-3.275-4.375-2.8 3.65-2-2.575zM4.8 5v14V5z" />
    </svg>
  );
}

export default File;
