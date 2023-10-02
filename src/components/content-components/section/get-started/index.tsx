import {
  Button,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";

import "./styles.scss";
import { CSSProperties } from "react";

interface GetStartedProps {
  heading: string;
  text: string;
  color: string;
  isClaim?: boolean;
  customButton?: {
    fontColor: string;
    backgroundColor: string;
    title?: string;
    width?: CSSProperties["width"];
  };
}

const GetStarted = ({
  heading,
  text,
  color,
  isClaim,
  customButton,
}: GetStartedProps) => {
  return (
    <Stack spacing={5}>
      <Heading
        fontSize={
          isClaim ? "clamp(32px, 8.5vmin, 88px)" : "clamp(28px, 8vmin, 56px)"
        }
        className="heading"
        color={color}
      >
        {heading}
      </Heading>
      <Text fontSize="19.24px" color={color}>
        {text}
      </Text>
      {isClaim ? (
        <HStack width="60%">
          <InputGroup className="input-group" size="lg">
            <InputLeftAddon fontSize="medium">linkleaf.com/</InputLeftAddon>
            <Input type="text" placeholder="your name" fontSize="medium" />
          </InputGroup>
          <Button
            className="claim-button"
            size="lg"
            fontSize="medium"
            borderRadius="full"
          >
            Claim your Linkleaf
          </Button>
        </HStack>
      ) : (
        <Button
          className="button"
          borderRadius="full"
          width={customButton?.width ? customButton?.width : "210px"}
          bg={
            customButton?.backgroundColor
              ? customButton.backgroundColor
              : "rgb(233, 192, 233)"
          }
          color={
            customButton?.fontColor ? customButton.fontColor : "rgb(30, 35, 48)"
          }
        >
          {customButton && customButton.title
            ? customButton.title
            : "Get started for free"}
        </Button>
      )}
    </Stack>
  );
};

export default GetStarted;
