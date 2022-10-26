/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Settings(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M9.5 17v-5H11v1.75h6v1.5h-6V17zM3 15.25v-1.5h5v1.5zm3-2.75v-1.75H3v-1.5h3V7.5h1.5v5zm3-1.75v-1.5h8v1.5zM12 8V3h1.5v1.75H17v1.5h-3.5V8zM3 6.25v-1.5h8v1.5z" />
    </svg>
  );
}

export default Settings;
