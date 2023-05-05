import { Box } from "@chakra-ui/react";

import {
  AboutUs,
  HeroSection,
  HomeFooter,
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
      <HomeFooter />
    </Box>
  );
};
