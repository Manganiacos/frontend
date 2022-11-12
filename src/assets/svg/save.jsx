/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Save(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M17 6v9.5q0 .625-.438 1.062Q16.125 17 15.5 17h-11q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H14zm-1.5.625L13.375 4.5H4.5v11h11zM10 14.75q.938 0 1.594-.656.656-.656.656-1.594 0-.938-.656-1.594-.656-.656-1.594-.656-.938 0-1.594.656-.656.656-.656 1.594 0 .938.656 1.594.656.656 1.594.656zM5.5 8.5h7v-3h-7zm-1-1.604V15.5v-11z" />
    </svg>
  );
}

export default Save;
