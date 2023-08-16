import './SignupPage.scss';
import React from 'react';

const SignupPage = () => {
  return (
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
  );
};

export default SignupPage;
