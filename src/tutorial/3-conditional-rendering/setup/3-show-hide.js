import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)

  return <>
  <button className="btn" onClick={() => setShow(!show)}>
    show/hide
    </button>
    {show && <Item/>}
  </>;
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

const checkSize = () => {
  setSize(window.innerWidth);
};


useEffect(() => {
  window.addEventListener('reside', checkSize);
  return () => {
    window.removeEventListener('reside', checkSize); //cleanup func evitando de ativar muitos eventos
  }
  
}, [])

  return (
  <div style={{marginTop: '2rem'}}>
    <h1>window</h1>
    <h2>size : {size} pixels</h2>
  </div>);
}


export default ShowHide;
