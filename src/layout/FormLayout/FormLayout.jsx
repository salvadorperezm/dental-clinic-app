/* eslint-disable react/prop-types */
import { Box, Heading } from "@chakra-ui/react";

export const FormLayout = ({ children, title }) => {
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"argentinianBlue"}
    >
      <Box maxWidth={"600px"} flex={"1"}>
        <Heading
          textAlign={"center"}
          fontFamily={"Poppins"}
          marginBlockEnd={"16px"}
        >
          {title}
        </Heading>
        <Box
          backgroundColor={"white"}
          marginX={{ base: "8px", md: "0px" }}
          padding={{ base: "8px", md: "16px" }}
          borderRadius={"8px"}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
