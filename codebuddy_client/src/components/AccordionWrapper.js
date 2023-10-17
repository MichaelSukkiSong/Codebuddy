import './AccordionWrapper.scss';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Image,
} from '@chakra-ui/react';
import aboutImage2 from '../images/data-center-network-3wz76kas9x1nwy42.jpeg';

const AccordionWrapper = ({ AccordionItemArr }) => {
  const renderAccordionItems = AccordionItemArr.map((item) => {
    return (
      <AccordionItem className="accordion__item">
        {({ isExpanded }) => (
          <>
            <AccordionButton
              className="accordion__btn"
              _expanded={
                {
                  // bg: 'tomato',
                  // color: 'white',
                  // height: '15rem',
                }
              }
            >
              <div className="accordion__btn-box">
                <Box
                  className="accordion__title"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  {item.title}
                </Box>
                {isExpanded ? (
                  <div className="accordion__msg">{item.content}</div>
                ) : null}
              </div>
            </AccordionButton>
            <div
              className={
                isExpanded ? 'accordion__expanded' : 'accordion__collapse'
              }
            >
              <AccordionPanel className="accordion__panel" pb={4}>
                <Image
                  className="accordion__img"
                  boxSize="20rem"
                  src={aboutImage2}
                  alt="temp"
                />
              </AccordionPanel>
            </div>
          </>
        )}
      </AccordionItem>
    );
  });

  return <Accordion className="accordion">{renderAccordionItems}</Accordion>;
};

export default AccordionWrapper;
