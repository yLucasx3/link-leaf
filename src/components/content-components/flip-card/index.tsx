"use client";
import { useState, CSSProperties, ReactNode } from "react";
import { Flex, Stack } from "@chakra-ui/react";
import "./styles.scss";

interface FlipCardProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  children: ReactNode;
}

interface BackProps {
  children: ReactNode;
  handleClick?: () => void;
  customStyle?: CSSProperties;
}

const FlipCard = ({ width, height, children }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Stack
      style={{ width, height }}
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <Flex className="flip-card-inner">{children}</Flex>
    </Stack>
  );
};

const Back = ({ children, customStyle, handleClick }: BackProps) => {
  return (
    <Flex className="flip-card-back" style={customStyle} onClick={handleClick}>
      {children}
    </Flex>
  );
};

const Front = ({ children }: { children: ReactNode }) => {
  return <Flex className="flip-card-front">{children}</Flex>;
};

FlipCard.Back = Back;
FlipCard.Front = Front;

export default FlipCard;
