import './AuthLayout.scss';
import React from 'react';
import {
  Form,
  Outlet,
  useOutlet,
  useNavigation,
  redirect,
  useActionData,
} from 'react-router-dom';
import { SiSemanticuireact } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';

// TODO: do this after i decide to implement password authentication.
export const action = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email');
  const password = data.get('password');
  console.log(email, password);

  try {
    // TODO: do the actual login process here
    return redirect('/playground');
  } catch (err) {
    return err.message;
  }
};

const AuthLayout = () => {
  const child = useOutlet();
  const currentPathname = child?.props.children.props.match.pathname;
  // a hook to handle 'state' of the navigation ('idle', etc..)
  const errorMessage = useActionData();
  const navigation = useNavigation();

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
            <Outlet />
            <div className="auth__main-content">
              <div className="auth__form-box">
                <Form method="post" className="auth__form" replace>
                  <div className="auth__input-box">
                    <input
                      className="auth__input"
                      placeholder="Email address"
                      type="text"
                      name="email"
                      required
                    />
                  </div>
                  <div className="auth__input-box">
                    <input
                      className="auth__input"
                      placeholder="Password"
                      type="text"
                      name="password"
                      required
                    />
                  </div>
                  {errorMessage}
                  <div className="auth__input-btn">
                    <button type="submit">Continue</button>
                  </div>
                </Form>
              </div>
              <div className="auth__tologin">
                {currentPathname === '/auth/login' ? (
                  <p>
                    Don't have an account?&nbsp;&nbsp;&nbsp;
                    <a href="/auth/signup">Sign up</a>
                  </p>
                ) : (
                  <p>
                    Already have an account?&nbsp;&nbsp;&nbsp;
                    <a href="/auth/login">Log in</a>
                  </p>
                )}
              </div>
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
        <a href="/">Terms of use</a>" | "<a href="/">Privacy policy</a>
      </footer>
    </div>
  );
};

export default AuthLayout;
