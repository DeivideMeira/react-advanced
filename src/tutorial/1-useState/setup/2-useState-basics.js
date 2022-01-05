import React, { useState } from 'react';

// component name must be uppercase
// must be in the function/component body
// cannot call conditionally for the hooks, but can call the func

const UseStateBasics = () => {

  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler);

  const[text, setText] = useState('texto antigo'); //texto original

  const handleClick=()=>{

    if(text === 'texto antigo')
    {
      setText('texto novo'); //muda o estado 
    }
    else
    {
      setText('texto antigo');
    }
  }

  return( 
  <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>change title</button>
  </React.Fragment>
  );

  //return <h2>useState basic example</h2>; //useState (undefined, function)
};

export default UseStateBasics;
