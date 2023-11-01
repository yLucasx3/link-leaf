import {
  Button,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./styles.scss";
import { footerOptions, socialOptions } from "./options";

const Footer = () => {
  return (
    <Stack bg="rgb(80, 34, 116)">
      <Stack justifyContent="center" alignItems="center" mt="200px" gap={12}>
        <Heading className="footer-heading">
          Jumpstart your corner of the internet today
        </Heading>
        <HStack width="30%">
          <InputGroup className="input-group" size="lg">
            <InputLeftAddon fontSize="medium">linkleaf.com/</InputLeftAddon>
            <Input
              type="text"
              placeholder="your name"
              fontSize="medium"
              style={{ boxShadow: "none" }}
            />
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
      </Stack>
      <Stack
        bg="white"
        borderRadius="20px"
        margin="100px 10% 10px 10%"
        padding="60px"
        gap="40px"
      >
        <HStack alignItems="flex-start">
          {footerOptions.map(({ title, items }) => {
            return (
              <Stack key={title} className="footer-container" gap={5} mr={32}>
                <Heading fontSize="26px">{title}</Heading>
                <Stack gap={4}>
                  {items.map((item, index) => (
                    <Text key={index} className="footer-item">
                      {item}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            );
          })}
        </HStack>
        <HStack justifyContent="space-between">
          <HStack>
            <Button height="64px" padding="0 30px" fontWeight="400">
              Log in
            </Button>
            <Button
              bg="rgb(205, 224, 38)"
              height="64px"
              borderRadius="full"
              fontWeight="400"
              padding="0 20px"
            >
              Get started for free
            </Button>
          </HStack>
          <HStack>
            <IconButton
              className="store-button"
              variant="ghost"
              aria-label="App Store"
              icon={<Image src="/svgs/app-store.svg" alt="App Store" />}
            />
            <IconButton
              className="store-button"
              variant="ghost"
              aria-label="App Store"
              icon={<Image src="/svgs/google-play.svg" alt="App Store" />}
            />
            {socialOptions.map(({ name, icon_path }) => (
              <IconButton
                height="64px"
                width="64px"
                variant="ghost"
                key={name}
                aria-label={name}
                icon={<Image src={icon_path} alt={name} />}
              />
            ))}
          </HStack>
        </HStack>
      </Stack>
      <Heading
        margin="0 10%"
        borderRadius="64px"
        bg="rgb(233, 192, 233)"
        color="rgb(80, 34, 116)"
        fontSize="240px"
        display="flex"
        justifyContent="center"
        padding="80px 0px"
      >
        Linkleaf
      </Heading>
      <Text
        textAlign="center"
        color="rgb(233, 192, 233)"
        margin="100px 0 20px 0"
      >
        This is a website created just to improve my skills.
      </Text>
    </Stack>
  );
};

export default Footer;
