/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Chat(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M5.208 11.458H11.5v-1.333H5.208zm0-2.458h9.584V7.667H5.208zm0-2.458h9.584V5.208H5.208zm-3.125 11V3.667q0-.667.459-1.125.458-.459 1.125-.459h12.666q.667 0 1.125.459.459.458.459 1.125V13q0 .667-.459 1.125-.458.458-1.125.458H5.042zm1.334-3.23l1.062-1.062h11.854q.105 0 .177-.073.073-.073.073-.177V3.667q0-.105-.073-.177-.072-.073-.177-.073H3.667q-.105 0-.177.073-.073.072-.073.177zm0-10.645v-.25 10.895z" />
    </svg>
  );
}

export default Chat;
