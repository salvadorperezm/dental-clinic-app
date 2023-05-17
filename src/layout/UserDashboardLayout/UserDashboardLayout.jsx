/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";

import { DashboardHeader } from "../../components";

export const UserDashboardLayout = ({ children, userInfo }) => {
  return (
    <Box
      display={"grid"}
      gridTemplateRows={"auto 1fr"}
      gridTemplateColumns={"1fr"}
      minHeight={"100vh"}
    >
      <DashboardHeader userInfo={userInfo} />
      <Box>{children}</Box>
    </Box>
  );
};
