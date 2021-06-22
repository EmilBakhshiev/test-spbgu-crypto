import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Main from './components/Main/Main';
import api from './utils/api';

function App() {
  const [notification, setNotification] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    api
      .getNotifications()
      .then((json) => setNotification(json.notifications))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    let jwt = localStorage.getItem('user');
    if (jwt) {
      setLoggedIn(true);
      history.push('/');
    }
  }, []);

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

  function onSignOut() {
    localStorage.removeItem('user');
    setLoggedIn(false);
    history.push('/sign-up');
  }
  return (
    <div className='page'>
      <Switch>
        <ProtectedRoute
          exact
          path='/'
          loggedIn={loggedIn}
          amount={notification.length}
          onSignOut={onSignOut}
          notification={notification}
          component={Main}
        ></ProtectedRoute>
        <Route>
          <Login onLogin={onLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
