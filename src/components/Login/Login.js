import React, { useState, useCallback } from 'react';
import Auth from '../Auth/Auth';

function Login({ onLogin, isChecked }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleInputEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [email]);

  const handleInputPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [password]);

  const handleSubmit = useCallback((e) => {
    
    onLogin({ password, email });
  }, [password, email]);


  return (
    <>
      <Auth
        name='sign-in'
        onSubmit={handleSubmit}
        changeEmail={handleInputEmail}
        changePassword={handleInputPassword}

      ></Auth>
    </>
  );
}

export default Login;