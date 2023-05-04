import { Box } from "@chakra-ui/react";

import {
  AboutUs,
  HeroSection,
  HomeHeader,
  ServicesSection,
} from "../../components";

export const Home = () => {
  return (
    <Box>
      <HomeHeader />
      <HeroSection />
      <AboutUs />
      <ServicesSection />
    </Box>
  );
};
