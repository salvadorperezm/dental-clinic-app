import { Box } from "@chakra-ui/react";

import {
  AboutUs,
  HeroSection,
  HomeHeader,
  PersonnelSection,
  ServicesSection,
} from "../../components";

export const Home = () => {
  return (
    <Box>
      <HomeHeader />
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <PersonnelSection />
    </Box>
  );
};
