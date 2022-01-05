import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  console.log(useParams()); //mostra um object, no caso o id importado do data
  const [name, setName] = useState ('default name')
  const {id} = useParams();

  useEffect(() => {
    const newPerson =data.find((person)=>person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  
  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn"> Back to People </Link>
    </div>
  );
};
