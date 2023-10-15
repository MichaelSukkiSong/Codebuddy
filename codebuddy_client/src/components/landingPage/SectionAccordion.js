import './SectionAccordion.scss';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
} from '@chakra-ui/react';
import aboutImage2 from '../../images/data-center-network-3wz76kas9x1nwy42.jpeg';

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
  const renderAccordionItems = AccordionItemArr.map((item) => {
    return (
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box as="span" flex="1" textAlign="left">
                  {item.title}
                </Box>
                {isExpanded ? <div>{item.content}</div> : null}
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Image boxSize="20rem" src={aboutImage2} alt="temp" />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    );
  });

  return (
    <section>
      <div>Launch A Dedicated Blockchain for your Ecosystem</div>
      <div>
        Take the reins. Customize your chain based on your project’s unique
        requirements.
      </div>
      <Accordion>{renderAccordionItems}</Accordion>
    </section>
  );
};

export default SectionAccordion;
