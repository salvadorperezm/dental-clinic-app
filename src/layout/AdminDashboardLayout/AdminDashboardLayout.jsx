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

import { AdminDashboardHeader, Logo } from "../../components";

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
      minHeight={"100vh"}
      gridTemplateAreas={{ base: `"header" "section"`, lg: `"aside section"` }}
      gridTemplateRows={{ base: "auto 1fr", lg: "1fr" }}
      gridTemplateColumns={{ base: "1fr", lg: "20% 1fr" }}
    >
      <GridItem
        as={"aside"}
        area={"aside"}
        backgroundColor={"argentinianBlue"}
        color={"white"}
        padding={"16px"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        display={{ base: "none", lg: "flex" }}
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
      <GridItem area={"header"} display={{ base: "block", lg: "none" }}>
        <AdminDashboardHeader
          asideOptions={asideOptions}
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
          userInfo={userInfo}
          logout={logout}
        />
      </GridItem>
      <GridItem area={"section"} as={"section"}>
        <Text>{currentComponent}</Text>
      </GridItem>
    </Grid>
  );
};
