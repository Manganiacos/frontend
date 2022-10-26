/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Password(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M2 15v-1.5h16V15zm.896-4.917l-1.292-.75.604-1.041H1v-1.5h1.208L1.604 5.75 2.896 5 3.5 6.042 4.104 5l1.292.75-.604 1.042H6v1.5H4.792l.604 1.041-1.292.75L3.5 9.042zm6.5 0l-1.292-.75.604-1.041H7.5v-1.5h1.208L8.104 5.75 9.396 5 10 6.042 10.604 5l1.292.75-.604 1.042H12.5v1.5h-1.208l.604 1.041-1.292.75L10 9.042zm6.5 0l-1.292-.75.604-1.041H14v-1.5h1.208l-.604-1.042L15.896 5l.604 1.042L17.104 5l1.292.75-.604 1.042H19v1.5h-1.208l.604 1.041-1.292.75-.604-1.041z" />
    </svg>
  );
}

export default Password;
