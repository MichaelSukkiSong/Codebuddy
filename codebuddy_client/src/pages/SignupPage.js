import './SignupPage.scss';
import { Form, redirect, useActionData } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

export const action = async ({ request }) => {
  const data = await request.formData();
  const username = data.get('username');
  const password = data.get('password');

  try {
    await axios.post('/api/signup', { username, password });
    return redirect('/playground');
  } catch (err) {
    return err.message;
  }
};

const SignupPage = () => {
  const errors = useActionData();

  return (
    <>
      <header className="signup__main-header">
        <h1 className="signup__main-header--title u-center-text">
          Create your account
        </h1>
        <div className="signup__main-header-noticebox">
          <p className="signup__main-header--notice">
            Note that phone verification may be required for auth. Your number
            will only be used to verify your identity for security purposes.
          </p>
        </div>
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
          Already have an account?&nbsp;&nbsp;&nbsp;
          <a href="/auth/login">Log in</a>
        </p>
      </div>
    </>
  );
};

export default SignupPage;
