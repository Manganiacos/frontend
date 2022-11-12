/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function trash(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17zm7-11.5h-7v10h7zM8 14h1.5V7H8zm2.5 0H12V7h-1.5zm-4-8.5v10z" />
    </svg>
  );
}

export default trash;
