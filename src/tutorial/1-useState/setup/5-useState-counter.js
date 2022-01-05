import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () =>{
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue)=>{return prevValue+1;});
    }, 2000); //Timeout recebe 2 valores, o último é 2 secs
  }

  return <>
    <section style={{margin:'4rem 0'}}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => (value - 1)}>decrease</button>
      <button className="btn" onClick={reset}>reset</button>
      <button className="btn" onClick={() => (value + 1)}>increase</button>

    </section>

    <section style={{margin:'4rem 0'}}>
      <h2>more complex counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complexIncrease}>increase later</button>
    </section>
  </>;
};

export default UseStateCounter;
