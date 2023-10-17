import './SectionAccordion.scss';
import AccordionWrapper from '../AccordionWrapper';

const AccordionItemArr = [
  {
    title: 'Intelligent Code Suggestions',
    content: `Codebuddy revolutionizes your coding process by harnessing OpenAI's powerful API, offering real-time, context-aware code suggestions that enhance your programming efficiency and accuracy.`,
    lottieplayerSrc:
      'https://lottie.host/02a12f09-44f1-4953-b714-3ff379b0f601/mwz8sdY42Q.json',
  },
  {
    title: 'Comprehensive Programming Resources',
    content:
      'Access a vast library of tutorials, documentation, and community forums directly within Codebuddy. Stay updated with the latest programming trends and best practices, all in one place.',
    lottieplayerSrc:
      'https://lottie.host/694d00d0-2460-4bee-9352-734ab0af0164/MwEpaC087t.json',
  },
  {
    title: 'User-Friendly Interface',
    content: `Designed with intuitive navigation and simplicity in mind, Codebuddy provides a user-friendly interface suitable for programmers of all levels. No more steep learning curves – just seamless coding.`,
    lottieplayerSrc:
      'https://lottie.host/38b52685-011a-4084-91c7-7cba65f153b7/D18OqEwtN9.json',
  },
  {
    title: 'Tailored Customization',
    content:
      'Customize Codebuddy according to your coding preferences. From coding styles to preferred libraries, tailor the platform to match your unique requirements, ensuring a personalized coding experience.',
    lottieplayerSrc:
      'https://lottie.host/c971461e-188b-4646-baca-f6a799615a1f/q1beLsqjZF.json',
  },
  {
    title: 'Responsive Design',
    content: `Experience uninterrupted coding sessions across various devices and screen sizes. Codebuddy's responsive design guarantees a smooth, consistent user experience whether you're on a desktop, tablet, or smartphone.`,
    lottieplayerSrc:
      'https://lottie.host/ee796e83-a802-4cc1-abc4-6e9d43d17d12/qvvqgpcmsE.json',
  },
  {
    title: 'Seamless Integration with OpenAI',
    content: `Codebuddy seamlessly integrates with OpenAI's API, empowering you with intelligent, AI-driven solutions. Enhance your coding abilities with smart suggestions, making your programming journey more productive and enjoyable.`,
    lottieplayerSrc:
      'https://lottie.host/da4e2662-2aa8-4ded-9dbf-9b6e0c359f07/S6dN7bFKuf.json',
  },
];

const SectionAccordion = () => {
  return (
    <section>
      <div className="section__accordion">
        <div className="section__accordion--header">
          <div className="section__accordion--header-main">
            Your Gateway to Intelligent Programming Solutions
          </div>
          <div className="section__accordion--header-sub">
            Empowering Coders with Cutting-Edge Features for Development
          </div>
        </div>
        <div className="section__accordion--content">
          <AccordionWrapper AccordionItemArr={AccordionItemArr} />
        </div>
      </div>
    </section>
  );
};

export default SectionAccordion;
