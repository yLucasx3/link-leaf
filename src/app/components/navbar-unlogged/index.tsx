import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

interface Option {
  name: string;
  label: string;
  location: string;
  subOptions?: Option[];
}

const options: Option[] = [
  {
    name: "templates",
    label: "Templates",
    location: "/templates",
  },
  {
    name: "marketplace",
    label: "Marketplace",
    location: "/marketplace",
  },
  {
    name: "discover",
    label: "Discover",
    location: "/discover",
    subOptions: [
      {
        name: "linkleaf-for-instagram",
        label: "Linkleaf for Instagram",
        location: "/discover/instagram",
      },
      {
        name: "linkleaf-for-tiktok",
        label: "Linkleaf for Tiktok",
        location: "/discover/tiktok",
      },
      {
        name: "linkleaf-for-twitter",
        label: "Linkleaf for Twitter",
        location: "/discover/twitter",
        subOptions: [
          {
            name: "linkleaf-for-twitter2",
            label: "Linkleaf for Twitter2",
            location: "/discover/twitter2",
            subOptions: [
              {
                name: "linkleaf-for-twitter3",
                label: "Linkleaf for Twitter3",
                location: "/discover/twitter3",
                subOptions: [
                  {
                    name: "linkleaf-for-twitter4",
                    label: "Linkleaf for Twitter4",
                    location: "/discover/twitter4",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "linkleaf-for-linkedin",
        label: "Linkleaf for Linkedin",
        location: "/discover/linkedin",
      },
    ],
  },
  {
    name: "pricing",
    label: "Pricing",
    location: "/pricing",
  },
  {
    name: "learn",
    label: "Learn",
    location: "/learn",
    subOptions: [
      {
        name: "all-articles",
        label: "All Articles",
        location: "/learn/all-articles",
      },
      {
        name: "creators",
        label: "Creators",
        location: "/learn/creators",
      },
      {
        name: "trends",
        label: "Trends",
        location: "/learn/trends",
      },
      {
        name: "best-pratices",
        label: "Best Pratices",
        location: "/learn/best-pratices",
      },
      {
        name: "company",
        label: "Company",
        location: "/learn/company",
      },
      {
        name: "product-news",
        label: "Product News",
        location: "/learn/product-news",
      },
      {
        name: "help",
        label: "Help",
        location: "/learn/help",
      },
    ],
  },
];

const RecursiveMenu = (option: Option) => {
  const { label, subOptions } = option;

  return (
    <Menu key={label} closeOnSelect={false} closeOnBlur={false}>
      <MenuButton as={Button} colorScheme="teal" variant="unstyled">
        {label}
      </MenuButton>
      <MenuList>
        {subOptions
          ? subOptions.map((subOption) => (
              <MenuItem key={subOption.name}>
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

const NavbarUnlogged = () => {
  return (
    <Flex
      justifyContent="space-between"
      position="fixed"
      width="100vw"
      padding="40px 120px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        boxShadow="base"
        padding="10px 40px"
        borderRadius="full"
      >
        <Flex alignItems="center">
          <Flex fontSize="x-large" fontWeight="bold" mr="20" cursor="pointer">
            Linkleaf
          </Flex>
          <Flex gap="10px">
            {options.map((option) => {
              const { name, label, subOptions } = option;
              return subOptions ? (
                RecursiveMenu(option)
              ) : (
                <Button colorScheme="teal" variant="ghost" key={name}>
                  {label}
                </Button>
              );
            })}
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <Button
            colorScheme="gray"
            variant="solid"
            marginRight="5px"
            height="60px"
            padding="0 20px"
          >
            Log in
          </Button>
          <Button
            colorScheme="teal"
            variant="solid"
            borderRadius="full"
            height="60px"
          >
            Sign up free
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavbarUnlogged;
