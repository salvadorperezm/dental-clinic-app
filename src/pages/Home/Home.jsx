import { Box } from "@chakra-ui/react";

import { AboutUs, HeroSection, HomeHeader } from "../../components";

export const Home = () => {
  return (
    <Box>
      <HomeHeader />
      <HeroSection />
      <AboutUs />
    </Box>
  );
};
