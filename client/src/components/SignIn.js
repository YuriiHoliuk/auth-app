import React, { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../api';

export const SignIn = (props) => {
  const { history } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    console.log({ token });

    if (token) {
      history.push('/comments');
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await api.post('/sign-in', { email, password });

    history.push('/comments');
  };

  return (
    <form name="signIn" onSubmit={handleSubmit}>
      <label>
        Email
      <input
        type="email"
        name="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      </label>
      <label>
        password
      <input
        type="password"
        name="password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      />

      <button type="submit">
        Submit
      </button>
      </label>
    </form>
  );
};
