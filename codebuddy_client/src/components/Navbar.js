import './Navbar.scss';
import { SiSemanticuireact } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const Navbar = ({ currentUser }) => {
  console.log('current user is: ', currentUser);

  return (
    <nav className="nav">
      <div className="nav__logobox">
        <NavLink to="/" className="nav__link-icon">
          <SiSemanticuireact style={{ width: '2.5rem', height: '2.5rem' }} />
        </NavLink>
      </div>
      <div className="nav__link-box">
        <ul className='"nav__list'>
          <li className="nav__item">
            <NavLink to="/playground" className="nav__link">
              Playground
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/mycode" className="nav__link">
              My code
            </NavLink>
          </li>
          <li className="nav__item">
            {currentUser ? (
              <form method="post" action="/api/logout" className="nav__link">
                <input type="submit" value="Logout" />
              </form>
            ) : (
              <a href="/auth/google" className="nav__link">
                Continue with Google
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
