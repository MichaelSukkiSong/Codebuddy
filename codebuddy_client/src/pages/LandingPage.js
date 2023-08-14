import './LandingPage.scss';
import { useEffect } from 'react';
import { loadTypeWriter } from '../utilities/typeWriter';
import Footer from '../components/Footer';

const LandingPage = () => {
  useEffect(() => {
    loadTypeWriter();

    return () => {
      var id = window.setTimeout(function () {}, 0);

      while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
      }
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="header__text">
          <h1 className="heading-primary">
            CodeBuddy helps you with your code
          </h1>
          <h2 className="heading-secondary">
            use AI powered code helper today
          </h2>
        </div>
        <div className="typewriter">
          <div className="typewriter__box">
            <div className="typewriter__heading-box">
              <h3 className="heading-tertiary">Put in your code</h3>
            </div>
            <textarea className="typewriter__editor typewriter__editor-input"></textarea>
          </div>
          <div className="typewriter__box">
            <div className="typewriter__heading-box">
              <h3 className="heading-tertiary">
                Get AI generated response out
              </h3>
            </div>
            <textarea className="typewriter__editor typewriter__editor-output"></textarea>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
