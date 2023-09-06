import './AuthLayout.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SiSemanticuireact } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';

const AuthLayout = () => {
  return (
    <div className="auth">
      <header className="auth__header">
        <div className="auth__header-logo">
          <SiSemanticuireact style={{ width: '3rem', height: '3rem' }} />
        </div>
      </header>
      <main className="auth__main">
        <section>
          <div className="auth__main-box">
            <div className="auth__main-content">
              <Outlet />
              <div className="auth__divider">
                <span>OR</span>
              </div>
              <div className="auth__oauth">
                <form className="auth__oauth--form">
                  <div className="auth__oauth--google">
                    <div className="auth__oauth--google-btn">
                      <a
                        className="auth__oauth--google-link"
                        href="/auth/google"
                      >
                        <span className="auth__oauth--google-icon">
                          <FcGoogle />
                        </span>
                        <span>Continue with Google</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="auth__footer">
        <a href="/">Terms of use</a>&nbsp;&nbsp;|&nbsp;&nbsp;{' '}
        <a href="/">Privacy policy</a>
      </footer>
    </div>
  );
};

export default AuthLayout;
