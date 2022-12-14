/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Shipping(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M4.75 15.271q-.917 0-1.552-.636-.636-.635-.636-1.552h-.979V5.521q0-.521.334-.854.333-.334.833-.334h10.875v2.688h1.917l2.875 4.041v2.021H17.25q0 .917-.635 1.552-.636.636-1.553.636-.916 0-1.552-.636-.635-.635-.635-1.552H6.917q0 .917-.636 1.552-.635.636-1.531.636zm0-.667q.625 0 1.062-.448.438-.448.438-1.073t-.438-1.073q-.437-.448-1.062-.448-.646 0-1.083.448-.438.448-.438 1.073t.438 1.073q.437.448 1.083.448zm10.312 0q.626 0 1.073-.448.448-.448.448-1.073t-.448-1.073q-.447-.448-1.073-.448-.624 0-1.072.448-.448.448-.448 1.073t.448 1.073q.448.448 1.072.448zm-1.437-3.687l3.875-.021-2.354-3.208h-1.521z" />
    </svg>
  );
}

export default Shipping;
