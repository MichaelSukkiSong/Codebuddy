import './LandingPage.scss';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Footer from '../components/Footer';
import aboutImage1 from '../images/photo-1684369175833-4b445ad6bfb5.jpg';
import aboutImage1_1 from '../images/3fd76d777b1ae60a79ff62695db9f38f.jpeg';
import aboutImage1_2 from '../images/premium_photo-1680608979589-e9349ed066d5.jpg';
import aboutImage2 from '../images/data-center-network-3wz76kas9x1nwy42.jpeg';
import aboutImage2_1 from '../images/Data Center.jpeg';

const LandingPage = () => {
  return (
    <>
      <div className="header">
        <div className="header__text">
          <h1 className="heading-primary">
            Codebuddy helps you with your code
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
            <div className="typewriter__editor typewriter__editor-input">
              <Typewriter
                options={{
                  strings: [
                    'How do i say `hello` in Python?',
                    'How does the splice method work in javascript?',
                    `What is wrong with my code? csonsole.log('hello there');`,
                    'How do you make a stack with 3 queues?',
                    'How could i make the code more efficient?',
                    'Show me a useful API that I can use to build a space related personal project',
                    'How do you write test code? ',
                    `Change this code to an another language.

                    class OpenAI {
                      static getInstance() {
                        return new OpenAI({
                          apiKey: keys.openaiApiKey,
                        });
                      }
                      `,
                  ],
                  autoStart: true,
                  loop: false,
                  pauseFor: 4500,
                  deleteSpeed: 1,
                  delay: 10,
                }}
              />
            </div>
          </div>
          <div className="typewriter__box">
            <div className="typewriter__heading-box">
              <h3 className="heading-tertiary">
                Get AI generated response out
              </h3>
            </div>
            <div className="typewriter__editor typewriter__editor-output">
              <Typewriter
                options={{
                  strings: [
                    'To say `hello` in Python, you can use the `print` function with the string `Hello` inside parentheses...',
                    'The syntax of the splice method is as follows...splice(start, deleteCount)...',
                    'There is a small typo in your code. Instead of `csonsole.log`, it should be `console.log`...',
                    `Here is one way to implement a stack using three queues in JavaScript:

class Stack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
    this.queue3 = [];
  }
} ...`,
                    '1. Use efficient data structures: Ensure you are using the appropriate data structures for your code...',
                    'NASA API provides a range of space-related data that can be useful for your project...',
                    'To write test code, you can use a testing framework/library like JUnit for Java or PyTest for Python...',
                    `class OpenAI:
    @staticmethod
    def getInstance():
        return OpenAI(keys.openaiApiKey)
    
    def __init__(self, config):
        self.configuration = Configuration(config)
        self.openai = OpenAIApi(self.configuration)`,
                  ],
                  autoStart: true,
                  loop: false,
                  pauseFor: 3500,
                  deleteSpeed: 1,
                  delay: 1,
                }}
              />
            </div>
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
