import { useLoaderData } from 'react-router-dom';
import { Form, redirect, useActionData } from 'react-router-dom';
import './LoginPage.scss';
import React from 'react';
import axios from 'axios';

export const action = async ({ request }) => {
  const data = await request.formData();
  const username = data.get('username');
  const password = data.get('password');

  try {
    await axios.post('/api/login', { username, password });
    return redirect('/playground');
  } catch (err) {
    return err.message;
  }
};

export const loader = ({ request }) => {
  const message = new URL(request.url).searchParams.get('message');

  return message;
};

const LoginPage = () => {
  const message = useLoaderData();
  const errors = useActionData();

  return (
    <>
      <header className="login__main-header">
        <h1 className="login__main-header--title u-center-text">
          Welcome back
        </h1>
        <div className="login__main-header-noticebox">
          <p className="login__main-header--notice"></p>
        </div>
        {message && (
          <h1 className="login__main-header-message u-center-text">
            {message}
          </h1>
        )}
      </header>
      <div className="signup__form-box">
        <Form method="post" className="signup__form" replace>
          <div className="signup__input-box">
            <input
              className="signup__input"
              placeholder="Email address"
              type="text"
              name="username"
              required
            />
          </div>
          <div className="signup__input-box">
            <input
              className="signup__input"
              placeholder="Password"
              type="text"
              name="password"
              required
            />
          </div>
          {/* {errorMessage} */}
          <div className="signup__input-btn">
            <button type="submit">Continue</button>
          </div>
        </Form>
      </div>
      <div className="signup__tologin">
        <p>
          Dont have an account?&nbsp;&nbsp;&nbsp;
          <a href="/auth/signup">Sign up</a>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
