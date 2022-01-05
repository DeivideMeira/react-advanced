import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email) {
      const person = {id: new Date().getTime().toString(), firstName, email}
        console.log(person); //input bonitnho para vetorizar fN: x, email: y
        setPeople((people) => {
          return [...people, person];
        });
        setFirstName(''); //limpa os itens
        setEmail('');
      }   
    else {
      console.log('empty values')
    }
  };
  
  //nos hooks => State: firstName, State: email, State: []
  //quando eu digito name e email e submeto, ele limpa os input e adiciona os dois parâmetros no State: []


  return (
  <>
    <article>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
            <input 
              type="text" 
              name="firstName"
              id="firstnName" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email: </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <button type="submit">add person</button>
      </form>
      {
        people.map((person) =>{
          const {id, firstName, email} = person
          return (
          <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
          );
        })
      }
    </article>
  </>
  );
};

export default ControlledInputs;
