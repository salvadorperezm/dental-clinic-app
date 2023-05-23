/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { Logo } from "../Logo";
import { ChevronUpIcon, HamburgerIcon } from "@chakra-ui/icons";

export const AdminDashboardHeader = ({
  asideOptions,
  currentComponent,
  setCurrentComponent,
  userInfo,
  logout,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleComponentChange = (newOPtion) => {
    setCurrentComponent(newOPtion);
    onClose();
  };

  return (
    <>
      <Box
        as={"header"}
        backgroundColor={"argentinianBlue"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"8px"}
      >
        <Logo />
        <IconButton
          display={{ base: "block", lg: "none" }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} placement={"left"}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={"argentinianBlue"}>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>

          <DrawerBody color={"white"}>
            {asideOptions.map((option) => {
              return (
                <Box
                  key={option.id}
                  cursor={"pointer"}
                  value={option.title}
                  onClick={() => handleComponentChange(option.title)}
                  padding={"8px"}
                  borderRadius={"8px"}
                  backgroundColor={currentComponent === option.title && "white"}
                  color={currentComponent === option.title && "argentinianBlue"}
                >
                  <Text textTransform={"capitalize"}>{option.title}</Text>
                </Box>
              );
            })}
          </DrawerBody>

          <DrawerFooter>
            <Menu>
              <MenuButton
                as={Button}
                colorScheme={"facebook"}
                rightIcon={<ChevronUpIcon />}
                width={"100%"}
              >
                {userInfo.firstName} {userInfo.lastName}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={logout} color={"black"}>
                  Cerrar Sesión
                </MenuItem>
              </MenuList>
            </Menu>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
