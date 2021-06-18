import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Login from './components/Login/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let jwt = localStorage.getItem('user');
    if (jwt) {
      setLoggedIn(true);
      history.push('/');
    }
  }, [history]);

  function onLogin({ password, email }) {
    if (email === 'user@test.com' && password === 'user') {
      localStorage.setItem('user', 'user');
      let jwt = localStorage.getItem('user');
      if (jwt) {
        setLoggedIn(true);
        history.push('/');
      }
    }
  }
  function rememberMe() {
    if (isChecked) {
      localStorage.setItem('user', 'user');
    }
  }

  function onSignOut() {
    localStorage.removeItem('user');
    setLoggedIn(false);
    history.push('/sign-up');
  }
  return (
    <div className='page'>
      <Login onLogin={onLogin} isChecked={() => setIsChecked(true)}></Login>
    </div>
  );
}

export default App;
