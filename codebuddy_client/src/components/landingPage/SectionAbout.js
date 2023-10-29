import './SectionAbout.scss';
import Typewriter from 'typewriter-effect';
import aboutImage1 from '../../images/photo-1684369175833-4b445ad6bfb5.jpg';
import aboutImage2 from '../../images/data-center-network-3wz76kas9x1nwy42.jpeg';

const SectionAbout = () => {
  return (
    <section>
      <h1 className="section__about--header">What it does</h1>
      <div className="section__about">
        <div className="section__about--part">
          <div className="section__about--part-title">
            <h2>An AI friend right by your side</h2>
          </div>
          <div className="section__about--part-content">
            <div className="section__about--part-image">
              <div className="section__about--image">
                <dotlottie-player
                  src="https://lottie.host/42223e2d-6d37-4777-ba95-fcb1a1faa533/7HoJKqMaAU.json"
                  background="transparent"
                  speed="1"
                  style={{ width: '70%', height: '70%' }}
                  loop
                  autoplay
                ></dotlottie-player>
                {/* <img
                  className="section__about--image-1"
                  src={aboutImage1}
                  alt="about image1"
                /> */}
              </div>
            </div>

            <div className="section__about--part-text">
              <div className="section__about--text">
                Codebuddy helps you with your code by pre-configuring all the
                boring, monotonous, repetitive text that you have to type before
                you actually ask the real question to GPT
                {/* <Typewriter
                  options={{
                    strings: [
                      'Codebuddy helps you with your code by pre-configuring all the boring, monotonous, repetitive text that you have to type before you actually ask the real question to GPT',
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 5500,
                    deleteSpeed: 1,
                    delay: 10,
                  }}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="section__about--part">
          <div className="section__about--part-title">
            <h2>Save your chat</h2>
          </div>
          <div className="section__about--part-content">
            <div className="section__about--part-image">
              <div className="section__about--image">
                <dotlottie-player
                  src="https://lottie.host/530cf5fb-15d7-4036-8e9b-521b1f701f0f/tD2gfqD2mh.json"
                  background="transparent"
                  speed="1"
                  style={{ width: '100%', height: '100%' }}
                  loop
                  autoplay
                ></dotlottie-player>
                {/* <img
                  src={aboutImage2}
                  alt="about image2"
                  className="section__about--image-1"
                /> */}
              </div>
            </div>
            <div className="section__about--part-text">
              <div className="section__about--text">
                Codebuddy can also save your responses to a database for future
                reference and can also organize, manage your knowledge base in a
                user-friendly way.
                {/* <Typewriter
                  options={{
                    strings: [
                      'Codebuddy can also save your responses to a database for future reference and can also organize, manage your knowledge base in a user-friendly way.',
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 10000,
                    deleteSpeed: 1,
                    delay: 10,
                  }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
