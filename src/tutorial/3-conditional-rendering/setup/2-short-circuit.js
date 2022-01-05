import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState('');
  const [isError, setIsError] = useState (false);

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world'

  return (
  <>
    {/* <h1>{firstValue}</h1>
    <h1>value: {secondValue}</h1> */}
    <h1>{ text || 'john doe'}</h1>
    <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button> {/*muda isError de false para true*/}
    {text && <h1>hello world</h1>}{/* retorna john doe, pois o texto é '' e entra acima*/}
    {isError && <h1>Error...</h1>} {/*se isError for true*/}
    {isError ?( <p>the is an error...</p>) : (<div>
      <h2>there is no error</h2></div>)} {/*ternary operation, substitui o if - que não retorna valor -, o ? : retorna, se isError for true retorna a div, do contrário o <p>*/}

  </>);
};

export default ShortCircuit;
