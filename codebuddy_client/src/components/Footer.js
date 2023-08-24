import './Footer.scss';
import { SiSemanticuireact } from 'react-icons/si';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsMeta } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__headerbox">
        <h2>CodeBuddy</h2>
      </div>

      <div className="footer__main">
        <div className="footer__section">
          <div className="footer__section--title">
            <div className="footer__section--logo">
              <SiSemanticuireact />
            </div>
            <span>CodeBuddy</span>
          </div>
          <div className="footer__section--text">
            Michael is a software developer based in Fremont, California.
          </div>
          <div className="footer__section--sns">
            <div className="footer__snsbox">
              <ul className="footer__snslist">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="footer__snsitem">
                    <BsMeta />
                  </li>
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="footer__snsitem">
                    <FaTwitter />
                  </li>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="footer__snsitem">
                    <FaInstagram />
                  </li>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="footer__snsitem">
                    <FaYoutube />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__section">
          <div className="footer__section--title">About</div>
          <div className="footer__section--list">
            <div className="footer__section--item">About</div>
            <div className="footer__section--item">Careers</div>
          </div>
        </div>
        <div className="footer__section">
          <div className="footer__section--title">Services</div>
          <div className="footer__section--list">
            <div className="footer__section--item">Integrations and API</div>
            <div className="footer__section--item">Project management</div>
          </div>
        </div>
        <div className="footer__section">
          <div className="footer__section--title">Support</div>
          <div className="footer__section--list">
            <div className="footer__section--item">Blog</div>
            <div className="footer__section--item">Developer</div>
            <div className="footer__section--item">Contact</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
