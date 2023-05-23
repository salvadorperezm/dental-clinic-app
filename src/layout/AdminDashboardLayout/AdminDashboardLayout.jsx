/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

import { Logo } from "../../components";

export const AdminDashboardLayout = ({
  userInfo,
  asideOptions,
  currentComponent,
  setCurrentComponent,
}) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <Grid
      border={"1px solid red"}
      minHeight={"100vh"}
      gridTemplateAreas={`"aside section"`}
      gridTemplateRows={"1fr"}
      gridTemplateColumns={"20% 1fr"}
    >
      <GridItem
        as={"aside"}
        border={"1px solid blue"}
        area={"aside"}
        backgroundColor={"argentinianBlue"}
        color={"white"}
        padding={"16px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box>
          <Logo />
          {asideOptions.map((option) => {
            return (
              <Box
                key={option.id}
                cursor={"pointer"}
                value={option.title}
                onClick={() => setCurrentComponent(option.title)}
                padding={"8px"}
                borderRadius={"8px"}
                backgroundColor={currentComponent === option.title && "white"}
                color={currentComponent === option.title && "argentinianBlue"}
              >
                <Text textTransform={"capitalize"}>{option.title}</Text>
              </Box>
            );
          })}
        </Box>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme={"facebook"}
            rightIcon={<ChevronUpIcon />}
          >
            {userInfo.firstName} {userInfo.lastName}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={logout} color={"black"}>
              Cerrar Sesión
            </MenuItem>
          </MenuList>
        </Menu>
      </GridItem>
      <GridItem as="section" border={"1px solid green"} area={"section"}>
        <Text>{currentComponent}</Text>
      </GridItem>
    </Grid>
  );
};
