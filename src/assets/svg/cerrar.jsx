/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Cerrar(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M4.833 17q-.562 0-.948-.385-.385-.386-.385-.948V4.75q0-.562.385-.948.386-.385.948-.385h5.271V4.5H4.833q-.083 0-.166.083-.084.084-.084.167v10.917q0 .083.084.166.083.084.166.084h5.271V17zm8.771-3.896l-.771-.771 1.584-1.583H8.104V9.667h6.313l-1.584-1.584.771-.771 2.896 2.896z" />
    </svg>
  );
}

export default Cerrar;
