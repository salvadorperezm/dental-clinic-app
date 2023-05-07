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
      link: "home",
    },
    {
      name: "sobre nosotros",
      link: "about-us",
    },
    {
      name: "servicios",
      link: "services",
    },
    {
      name: "personal",
      link: "personnel",
    },
  ];

  return (
    <Flex
      as="header"
      px={{ base: "16px", md: "32px" }}
      py={"8px"}
      bg={"argentinianBlue"}
      align={"center"}
      position={"fixed"}
      width={"100%"}
      top={"0"}
      backdropFilter={"blur(10px)"}
      zIndex={"200"}
    >
      <Logo />
      <Spacer />
      <Box
        as={"nav"}
        alignItems={"center"}
        display={{ base: "none", lg: "flex" }}
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
                  href={`#${link.link}`}
                  textTransform={"capitalize"}
                  paddingY={"8px"}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    borderBlockEnd: "1px solid white",
                  }}
                  fontSize={"22px"}
                >
                  {link.name}
                </Link>
              </ListItem>
            );
          })}
        </UnorderedList>
        <RouterLink to={"/login"}>
          <Button size={"lg"}>Iniciar Sesión</Button>
        </RouterLink>
      </Box>
      <IconButton
        display={{ base: "block", lg: "none" }}
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <HeaderDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
