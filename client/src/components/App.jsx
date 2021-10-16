import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Login from './Login/Login.jsx';

export default function App() {
  useEffect(() => {
    axios.get('http://localhost:8000/hello')
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <Login />
    </div>
  );
}
