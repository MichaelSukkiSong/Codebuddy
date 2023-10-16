import './SectionAccordion.scss';
import AccordionWrapper from '../AccordionWrapper';

const AccordionItemArr = [
  {
    title: 'Unprecedented Performance',
    content: `Handle thousands of transactions per second, with
  sub-second confirmation times.`,
  },
  {
    title: 'Low, predictable fees',
    content:
      'Process transactions at a fraction of the costs of other chains, and de-risk from gas spikes on other networks.',
  },
  {
    title: 'Gas customizability',
    content: `Allow users to pay for gas in your project's native token, or remove gas fees entirely.`,
  },
  {
    title: 'EVM Compatibility',
    content:
      'Deploy your existing Solidity smart contracts and use familiar tools for development.',
  },
  {
    title: 'Interoperability',
    content:
      'Natively and trustlessly bridge assets between your Caldera chain and Ethereum, Polygon, or other chains.',
  },
  {
    title: 'Revenue generation',
    content:
      'Earn transaction fees, bridge fees, and MEV as revenue for your company or DAO.',
  },
];

const SectionAccordion = () => {
  return (
    <section>
      <div className="section__accordion">
        <div className="section__accordion--header">
          <div className="section__accordion--header-main">
            Launch A Dedicated Blockchain for your Ecosystem
          </div>
          <div className="section__accordion--header-sub">
            Take the reins. Customize your chain based on your project’s unique
            requirements.
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
