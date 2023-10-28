import './AccordionWrapper.scss';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';

const AccordionWrapper = ({ AccordionItemArr }) => {
  const renderAccordionItems = AccordionItemArr.map((item, index) => {
    return (
      <AccordionItem className="accordion__item" key={item.title}>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              className="accordion__btn"
              _expanded={{
                color: 'cyan.800',
                borderBottom: '1px',
              }}
              _hover={{
                backgroundColor: 'none',
              }}
            >
              <div className="accordion__btn-box">
                <Box
                  className="accordion__title"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  <span>0{index + 1}</span>
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
                <dotlottie-player
                  src={item.lottieplayerSrc}
                  // background="transparent"
                  speed="1"
                  style={{ width: '100%', height: '100%' }}
                  loop
                  autoplay
                ></dotlottie-player>
              </AccordionPanel>
            </div>
          </>
        )}
      </AccordionItem>
    );
  });

  return (
    <Accordion className="accordion" defaultIndex={0}>
      {renderAccordionItems}
    </Accordion>
  );
};

export default AccordionWrapper;
