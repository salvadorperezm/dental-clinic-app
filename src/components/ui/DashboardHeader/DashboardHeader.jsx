/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const DashboardHeader = ({ userInfo }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <Box
      as={"header"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"8px"}
      backgroundColor={"argentinianBlue"}
    >
      <Box />
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {userInfo.firstName} {userInfo.lastName}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={logout}>Cerrar Sesión</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
