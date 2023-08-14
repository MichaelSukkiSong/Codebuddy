import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__headerbox">
        <h2 className="heading-secondary">CodeBuddy</h2>
      </div>

      <div className="footer__infobox">
        <ul className="footer__infolist">
          <li className="footer__infoitem">
            <Link href="#" className="footer__infolink">
              about
            </Link>
          </li>
          <li className="footer__infoitem">
            <Link href="#" className="footer__infolink">
              support
            </Link>
          </li>
          <li className="footer__infoitem">
            <Link href="#" className="footer__infolink">
              SMS
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
