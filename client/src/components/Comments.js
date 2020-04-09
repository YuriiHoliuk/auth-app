import React, { useEffect, useState } from 'react';
import { api } from '../api';

export const Comments = (props) => {
  const { history } = props;
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const commentsFromApi = await api.get('/comments');

    setComments(commentsFromApi);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      history.push('/sign-in');
    } else {
      getComments();
    }
  }, []);

  const signOut = () => {
    localStorage.removeItem('token');

    history.push('/sign-in');
  };

  return (
    <div>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
      {comments.map(({ body }) => (
        <p>{body}</p>
      ))}
    </div>
  );
};
