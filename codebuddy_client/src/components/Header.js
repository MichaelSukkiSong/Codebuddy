import './Header.scss';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div className="header">
      <div className="header__text">
        <h1 className="heading-primary">
          <span className="header__text-codebuddy">Codebuddy</span> helps you
          with your code
        </h1>
        <h2 className="heading-secondary">use AI powered code helper today</h2>
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
                  'How could i make the code more efficient?',
                  'Show me a useful API that I can use to build a space related personal project',
                  'How do you write test code? ',
                ],
                autoStart: true,
                loop: false,
                pauseFor: 5500,
                deleteSpeed: 1,
                delay: 10,
              }}
            />
          </div>
        </div>
        <div className="typewriter__box">
          <div className="typewriter__heading-box">
            <h3 className="heading-tertiary">Get AI generated response out</h3>
          </div>
          <div className="typewriter__editor typewriter__editor-output">
            <Typewriter
              options={{
                strings: [
                  'To say `hello` in Python, you can use the `print` function with the string `Hello` inside parentheses.',
                  'In JavaScript, there is no built-in splice method for strings. However, there is a splice method for arrays. The splice method is used to modify an array by adding or removing elements from it.',
                  'There is a small typo in your code. Instead of `csonsole.log`, it should be `console.log`...',
                  '1. Use Proper Data Structures: Choose the right data structures for your specific needs. 2. Minimize DOM Manipulation: DOM manipulation is often a performance bottleneck. ',
                  'Certainly! One exciting space-related API you can use for personal projects is the NASA API (Application Programming Interface). NASA provides a variety of APIs that allow you to access a wealth of space-related data and imagery.',
                  '1. Choose a Testing Framework: Select a testing framework compatible with your programming language (e.g., Jest for JavaScript, pytest for Python). 2. Write Test Cases: 3. Run Your Tests',
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
  );
};

export default Header;
