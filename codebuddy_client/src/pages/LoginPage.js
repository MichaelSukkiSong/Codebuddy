import { useLoaderData } from 'react-router-dom';
import './LoginPage.scss';
import React from 'react';

export const loader = ({ request }) => {
  const message = new URL(request.url).searchParams.get('message');

  return message;
};

const LoginPage = () => {
  const message = useLoaderData();

  return (
    <header className="login__main-header">
      <h1 className="login__main-header--title u-center-text">Welcome back</h1>
      <div className="login__main-header-noticebox">
        <p className="login__main-header--notice"></p>
      </div>
      {message && (
        <h1 className="login__main-header-message u-center-text">{message}</h1>
      )}
    </header>
  );
};

export default LoginPage;
