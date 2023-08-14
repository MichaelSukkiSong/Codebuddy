import { delay } from './delay';

let speed = 100;
let txtArr = [
  {
    input: 'How do i say `hello` in Python.:D',
    output:
      'To say `hello` in Python, you can use the `print` function with the string `Hello` inside parentheses.',
  },
  {
    input: 'How does the splice method work in javascript?',
    output: 'The syntax of the splice method is as follows...',
  },
  {
    input: `what is wrong with my code D: csonsole.log('hello there');`,
    output:
      'There is a small typo in your code. Instead of `csonsole.log`, it should be `console.log`.',
  },
  {
    input: 'how do you make a stack with 3 queues',
    output: `Here is one way to implement a stack using three queues in JavaScript:

    class Stack {
      constructor() {
        this.queue1 = [];
        this.queue2 = [];
        this.queue3 = [];
      }
    } ...`,
  },
  {
    input: `what is this code doing...if (messages.length === 0) {res.status(400).json({ ...`,
    output:
      'The provided code is a conditional statement written in JavaScript....',
  },
  {
    input: 'how could i make the code more efficient?',
    output:
      '1. Use efficient data structures: Ensure you are using the appropriate data structures for your code...',
  },
  {
    input: 'I love you',
    output: 'me too xD',
  },

  {
    input: 'show me useful API that i can use for a space related project xD',
    output:
      'NASA API provides a range of space-related data that can be useful for your project...',
  },
  {
    input: 'how do you write test code? ',
    output:
      'To write test code, you can use a testing framework/library like JUnit for Java or PyTest for Python...',
  },
  {
    input: `Change this code to a another language... class OpenAI {
      static getInstance() {
        return new OpenAI({
          apiKey: keys.openaiApiKey,
        });
      }
      `,
    output: `class OpenAI:
    @staticmethod
    def getInstance():
        return OpenAI(keys.openaiApiKey)
    
    def __init__(self, config):
        self.configuration = Configuration(config)
        self.openai = OpenAIApi(self.configuration)`,
  },
];

const typeWriterWrapper = async (inputText, outputText) => {
  let i = 0;

  document.querySelector('.typewriter__editor-input').innerHTML = '';
  document.querySelector('.typewriter__editor-output').innerHTML = '';

  const typeWriter = () => {
    if (i < inputText.length) {
      document.querySelector('.typewriter__editor-input').innerHTML +=
        inputText.charAt(i);
      i++;
    }
    setTimeout(typeWriter, speed);
  };

  typeWriter();

  setTimeout(() => {
    document.querySelector('.typewriter__editor-output').innerHTML = outputText;
  }, speed * (inputText.length + 10));
};

const loadTypeWriter = async () => {
  for (let txt of txtArr) {
    typeWriterWrapper(txt.input, txt.output);
    await delay(10000);
  }
};

export { speed, txtArr, typeWriterWrapper, loadTypeWriter };
