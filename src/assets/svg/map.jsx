/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Map(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M12.5 17l-5-1.5-3.188 1.062q-.479.167-.895-.124Q3 16.146 3 15.604V5.229q0-.333.198-.594.198-.26.49-.364L7.5 3l5 1.5 3.188-1.062q.479-.209.895.104.417.312.417.854v10.375q0 .333-.188.604-.187.271-.5.354zm-.75-1.792V5.833l-3.5-1.041v9.375zm1.5-.041l2.25-.75V5.083l-2.25.75zm-8.75-.25l2.25-.75V4.833l-2.25.75zm8.75-9.084v9.334zm-6.5-1v9.334z" />
    </svg>
  );
}

export default Map;
