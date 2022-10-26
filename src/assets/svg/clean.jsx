/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Clean(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M9.25 9h1.5V4.25q0-.312-.219-.531Q10.312 3.5 10 3.5q-.312 0-.531.219-.219.219-.219.531zM4.5 12h11v-1.5h-11zm-1 4.5h2v-1.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531v1.25h2.25v-1.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531v1.25H13v-1.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531v1.25h2.021l-.875-3H4.354l-.854 3zm13 1.5H3.521q-.729 0-1.188-.573-.458-.573-.271-1.281L3 12.75V10.5q0-.625.438-1.062Q3.875 9 4.5 9h3.25V4.25q0-.938.656-1.594Q9.062 2 10 2q.938 0 1.594.656.656.656.656 1.594V9h3.25q.625 0 1.062.438Q17 9.875 17 10.5v2.25l.958 3.396q.209.708-.25 1.281Q17.25 18 16.5 18zm-1-7.5h-11 11zM10.75 9h-1.5 1.5z" />
    </svg>
  );
}

export default Clean;
