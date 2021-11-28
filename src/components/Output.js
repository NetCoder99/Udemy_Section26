//import { useState } from 'react';

const Output = (props) => {
  //const [chgText, setChgText] = useState(false);
  //const chgTextHandler = () => {
  //  setChgText(true);
  //};

  return (
    <p>{props.children}</p>
  );
};

export default Output;
