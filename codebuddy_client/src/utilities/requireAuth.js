import { redirect } from 'react-router-dom';
import axios from 'axios';

export const requireAuth = async () => {
  const { data } = await axios.get('/api/current_user');
  // console.log('(from requireAuth) current user is:', data);

  let isLoggedIn;
  isLoggedIn = data ? true : false;

  if (!isLoggedIn) {
    throw redirect('/auth/login?message=You must log in first');
  }
};
