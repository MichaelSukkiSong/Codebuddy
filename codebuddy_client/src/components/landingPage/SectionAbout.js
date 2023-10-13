import './SectionAbout.scss';
import aboutImage1 from '../../images/photo-1684369175833-4b445ad6bfb5.jpg';
import aboutImage2 from '../../images/data-center-network-3wz76kas9x1nwy42.jpeg';

const SectionAbout = () => {
  return (
    <section>
      <div className="section__about">
        <h1 className="section__about--header">What it does</h1>
        <div className="section__about--part">
          <div className="section__about--part-text">
            <div className="section__about--text">
              <h2>An AI friend right by your side</h2>
              Codebuddy helps you with your code by pre-configuring all the
              boring, monotonous, repetitive text that you have to type before
              you actually ask the real question to GPT
            </div>
          </div>
          <div className="section__about--part-image">
            <div className="section__about--image">
              <img
                className="section__about--image-1"
                src={aboutImage1}
                alt="about image1"
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
  );
};

export default SectionAbout;
