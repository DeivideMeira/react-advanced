import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [user, setUsers] = useState([]);

const getUsers = async() => {
  const response = await fetch(url);
  const users = await response.json();
  setUsers(users);
  console.log(users);
}

  useEffect(() => { //useEffect n pode ser async, pois não recebe uma promise, uma vez que é um cleanup function
    getUsers();
  }, []);

  return (
  <>
    <h3>github users</h3>
    <ul className="users">
      {user.map((user) => {
        const {id, login, avatar_url, html_url} = user;
        return <li key={id}>
          <img src={avatar_url} alt={login}/>
          <div>
             <h4>{login}</h4>
             <a href={html_url}>profile</a>
          </div>
        </li>
      })}
    </ul>


  </>
  );
};

export default UseEffectFetchData;
