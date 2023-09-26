import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Heading,
  Stack,
} from "@chakra-ui/react";

import "./styles.scss";
import questions from "./questions";

const GotQuestions = () => {
  return (
    <Stack justifyContent="center" alignItems="center" className="container">
      <Heading className="heading">Got Questions?</Heading>
      <Accordion allowMultiple allowToggle>
        {questions.map(({ title, paragraphs }) => (
          <AccordionItem key={title} className="accordion-item">
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Stack>
  );
};

export default GotQuestions;
