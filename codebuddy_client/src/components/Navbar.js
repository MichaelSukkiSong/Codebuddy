import './Navbar.scss';
import { SiSemanticuireact } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const Navbar = ({ currentUser }) => {
  // console.log('(from navbar) current user is : ', currentUser);

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
              <form method="post" action="/api/logout">
                <input type="submit" value="Logout" className="nav__input" />
              </form>
            ) : (
              <NavLink to="/auth/login" className="nav__link">
                Log in
              </NavLink>
            )}
          </li>
          <li className="nav__item">
            {currentUser ? null : (
              <NavLink to="/auth/signup" className="nav__link">
                Sign up
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
