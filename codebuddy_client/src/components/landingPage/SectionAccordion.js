import './SectionAccordion.scss';
import AccordionWrapper from '../AccordionWrapper';

const AccordionItemArr = [
  {
    title: 'Intelligent Code Suggestions',
    content: `Codebuddy revolutionizes your coding process by harnessing OpenAI's powerful API, offering real-time, context-aware code suggestions that enhance your programming efficiency and accuracy.`,
  },
  {
    title: 'Comprehensive Programming Resources',
    content:
      'Access a vast library of tutorials, documentation, and community forums directly within Codebuddy. Stay updated with the latest programming trends and best practices, all in one place.',
  },
  {
    title: 'User-Friendly Interface',
    content: `Designed with intuitive navigation and simplicity in mind, Codebuddy provides a user-friendly interface suitable for programmers of all levels. No more steep learning curves – just seamless coding.`,
  },
  {
    title: 'Tailored Customization',
    content:
      'Customize Codebuddy according to your coding preferences. From coding styles to preferred libraries, tailor the platform to match your unique requirements, ensuring a personalized coding experience.',
  },
  {
    title: 'Responsive Design',
    content: `Experience uninterrupted coding sessions across various devices and screen sizes. Codebuddy's responsive design guarantees a smooth, consistent user experience whether you're on a desktop, tablet, or smartphone.`,
  },
  {
    title: 'Seamless Integration with OpenAI',
    content: `Codebuddy seamlessly integrates with OpenAI's API, empowering you with intelligent, AI-driven solutions. Enhance your coding abilities with smart suggestions, making your programming journey more productive and enjoyable.`,
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
