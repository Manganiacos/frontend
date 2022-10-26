/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Menu(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M3 14.5V13h14v1.5zm0-3.75v-1.5h14v1.5zM3 7V5.5h14V7z" />
    </svg>
  );
}

export default Menu;
