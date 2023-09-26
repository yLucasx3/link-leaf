import { Flex, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ChildrenType {
  children: JSX.Element | JSX.Element[] | string;
}

interface SectionProps {
  children: ReactNode;
  bgColor?: string;
}

const Section = ({ children, bgColor }: SectionProps) => {
  return (
    <Flex width="100%" height="100vh" bg={bgColor} padding="0 8%">
      {children}
    </Flex>
  );
};

const Left = ({ children }: ChildrenType) => {
  return <Stack width="50%">{children}</Stack>;
};

const Right = ({ children }: ChildrenType) => {
  return <Flex width="50%">{children}</Flex>;
};

Section.Left = Left;
Section.Right = Right;

export default Section;
