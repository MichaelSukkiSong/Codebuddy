import './LandingPage.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadTypeWriter } from '../utilities/typeWriter';
import Footer from '../components/Footer';
import aboutImage1 from '../images/photo-1684369175833-4b445ad6bfb5.jpg';
import aboutImage1_1 from '../images/3fd76d777b1ae60a79ff62695db9f38f.jpeg';
import aboutImage1_2 from '../images/premium_photo-1680608979589-e9349ed066d5.jpg';
import aboutImage2 from '../images/data-center-network-3wz76kas9x1nwy42.jpeg';
import aboutImage2_1 from '../images/Data Center.jpeg';

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
        <div className="header__btn">
          <Link to="playground">
            <button className="header__btn--gotopg">Go to playground</button>
          </Link>
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
      <section>
        <div className="section__about">
          <h1 className="section__about--header">What it does</h1>
          <div className="section__about--part">
            <div className="section__about--part-text">
              <div className="section__about--text">
                <h2>An AI friend right by your side</h2>
                Codebuddy helps you with your code by pre-configuring all the
                boring, monotonous, repetitive text that you have to type before
                you actually ask the real question to chatGPT
              </div>
            </div>
            <div className="section__about--part-image">
              <div className="section__about--image">
                <img
                  className="section__about--image-1"
                  src={aboutImage1}
                  alt="about image1"
                />
                <img
                  className="section__about--image-2"
                  src={aboutImage1_1}
                  alt="about image1_1"
                />
                <img
                  className="section__about--image-3"
                  src={aboutImage1_2}
                  alt="about image1_2"
                />
              </div>
            </div>
          </div>
          <div className="section__about--part">
            <div className="section__about--part-image">
              <div className="section__about--image">
                <img
                  src={aboutImage2}
                  alt="about image2"
                  className="section__about--image-1"
                />
                <img
                  src={aboutImage2_1}
                  alt="about image2_1"
                  className="section__about--image-2"
                />
              </div>
            </div>
            <div className="section__about--part-text">
              <div className="section__about--text">
                <h2>Save your chat</h2>
                Codebuddy can also save your responses to a database for future
                reference and can also organize, manage your knowledge base in a
                user-friendly way.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
