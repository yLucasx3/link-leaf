import {
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import options, { Option } from "./options";
import "./styles.scss";

const RecursiveMenu = (option: Option) => {
  const { label, subOptions } = option;

  return (
    <Menu key={label} closeOnSelect={false}>
      <MenuButton as={Button} variant="ghost">
        {label}
      </MenuButton>
      <MenuList>
        {subOptions
          ? subOptions.map((subOption) => (
              <MenuItem key={subOption.name} as={Button} variant="ghost">
                {subOption.subOptions
                  ? RecursiveMenu(subOption)
                  : subOption.label}
              </MenuItem>
            ))
          : label}
      </MenuList>
    </Menu>
  );
};

const Navbar = () => {
  return (
    <Flex className="navbar-container">
      <Flex className="navbar-content" boxShadow="base" borderRadius="full">
        <HStack alignItems="center">
          <Flex fontSize="2xl" fontWeight="semibold" mr="12" cursor="pointer">
            Linkleaf
          </Flex>
          <Flex gap="10px">
            {options.map((option) => {
              const { name, label, subOptions } = option;

              return subOptions ? (
                RecursiveMenu(option)
              ) : (
                <Button key={name} variant="ghost">
                  {label}
                </Button>
              );
            })}
          </Flex>
        </HStack>
        <HStack alignItems="center">
          <Button className="action-button log-in">Log in</Button>
          <Button className="action-button sign-up">Sign up free</Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
