/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Location(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M10 10.042q.708 0 1.208-.5t.5-1.209q0-.708-.5-1.208T10 6.625q-.708 0-1.208.5t-.5 1.208q0 .709.5 1.209.5.5 1.208.5zM10 16q2.521-2.312 3.719-4.177 1.198-1.865 1.198-3.323 0-2.271-1.417-3.677-1.417-1.406-3.5-1.406T6.5 4.823Q5.083 6.229 5.083 8.5q0 1.458 1.198 3.323T10 16zm0 2.333q-3.354-2.895-5.01-5.312Q3.333 10.604 3.333 8.5q0-3.146 2-4.99 2-1.843 4.667-1.843t4.667 1.843q2 1.844 2 4.99 0 2.104-1.657 4.521-1.656 2.417-5.01 5.312zM10 8.5z" />
    </svg>
  );
}

export default Location;
