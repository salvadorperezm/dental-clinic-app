import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  ListItem,
  Spacer,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

import { HeaderDrawer } from "../HeaderDrawer";
import { Logo } from "../../ui";

export const HomeHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    {
      name: "inicio",
    },
    {
      name: "sobre nosotros",
    },
    {
      name: "servicios",
    },
    {
      name: "personal",
    },
  ];

  return (
    <Flex
      as="header"
      px={{ base: "16px", md: "32px" }}
      py={"8px"}
      bg={"argentinianBlue"}
      align={"center"}
    >
      <Logo />
      <Spacer />
      <Box
        as={"nav"}
        alignItems={"center"}
        display={{ base: "none", md: "flex" }}
        gap={"20px"}
      >
        <UnorderedList
          listStyleType={"none"}
          display={"flex"}
          alignItems={"center"}
          gap={"20px"}
        >
          {links.map((link) => {
            return (
              <ListItem key={link.name}>
                <Link
                  href="#"
                  textTransform={"capitalize"}
                  paddingY={"8px"}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    borderBlockEnd: "1px solid white",
                  }}
                >
                  {link.name}
                </Link>
              </ListItem>
            );
          })}
        </UnorderedList>
        <RouterLink to={"/login"}>
          <Button>Iniciar Sesión</Button>
        </RouterLink>
      </Box>
      <IconButton
        display={{ base: "block", md: "none" }}
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <HeaderDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
