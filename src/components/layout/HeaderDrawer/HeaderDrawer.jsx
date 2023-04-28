/* eslint-disable react/prop-types */
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  OrderedList,
  ListItem,
  Link,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Logo } from "../../ui";

export const HeaderDrawer = ({ isOpen, onClose }) => {
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
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bgColor={"argentinianBlue"} color={"white"}>
        <DrawerCloseButton onClick={onClose} />
        <DrawerHeader>
          <Logo />
        </DrawerHeader>
        <DrawerBody>
          <Box as={"nav"}>
            <OrderedList>
              {links.map((link) => {
                return (
                  <ListItem key={link.name} marginBlockEnd={"22px"}>
                    <Link
                      textTransform={"capitalize"}
                      fontSize={"22px"}
                      _hover={{ textTransform: "none" }}
                    >
                      {link.name}
                    </Link>
                  </ListItem>
                );
              })}
            </OrderedList>
            <RouterLink to="/login">
              <Button width={"100%"} colorScheme={"gray"} color={"black"}>
                Iniciar Sesión
              </Button>
            </RouterLink>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
