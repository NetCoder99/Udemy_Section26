import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [chgText, setChgText] = useState(false);

  const chgTextHandler = () => {
    setChgText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>

      {!chgText && <Output>It's good to see you!</Output>}
      {chgText && <Output>Text was changed</Output>}
      
      <button onClick={chgTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
