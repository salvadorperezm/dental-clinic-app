import { Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import HeroImage from "../../../assets/images/hero-image.png";

export const HeroSection = () => {
  const features = [
    {
      title: "+100",
      subtitle: "Clientes felices.",
    },
    {
      title: "2 Sucursales",
      subtitle: "A nivel nacional.",
    },
    {
      title: "4 Doctores",
      subtitle: "Con variadas especialidades.",
    },
  ];

  return (
    <Box
      id={"home"}
      as={"section"}
      backgroundColor={"argentinianBlue"}
      paddingX={{ base: "16px", lg: "64px" }}
      minHeight={"calc(100vh - 76px)"}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "none", md: "center" }}
      justifyContent={{ base: "none", md: "space-between" }}
      marginBlockStart={"76px"}
    >
      <Box>
        <Box>
          <Heading
            fontFamily={"Poppins"}
            textAlign={{ base: "center", md: "initial" }}
            color={"white"}
            fontSize={{ base: "32px", md: "64px" }}
            marginBlock={{ base: "16px", md: "32px" }}
          >
            Nos importa tu sonrisa.
          </Heading>
          <Text
            textAlign={{ base: "center", md: "initial" }}
            color={"white"}
            marginBlock={{ base: "16px", md: "32px" }}
            fontSize={{ base: "18px", md: "22px" }}
          >
            Más de 100 pacientes satisfechos y 6 años de experiencia son <br />
            nuestra mejor garantía para tu sonrisa.
          </Text>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            gap={"16px"}
            marginBlockEnd={{ base: "16px", md: "32px" }}
          >
            <RouterLink to={"/login"}>
              <Button colorScheme={"facebook"} size={"lg"} width={"100%"}>
                Agenda tu cita
              </Button>
            </RouterLink>
            <Link href="#personnel">
              <Button
                colorScheme={"facebook"}
                variant={"outline"}
                size={"lg"}
                width={"100%"}
              >
                Conoce a nuestro personal
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ md: "center" }}
          gap={{ base: "16px", md: "32px" }}
          marginBlock={{ base: "32px", md: "0px" }}
        >
          {features.map((feature) => {
            return (
              <Box key={feature.title} color={"white"}>
                <Text
                  fontWeight={"bold"}
                  fontSize={"22px"}
                  textAlign={{ base: "center", md: "initial" }}
                >
                  {feature.title}
                </Text>
                <Text
                  fontSize={"18px"}
                  textAlign={{ base: "center", md: "initial" }}
                >
                  {feature.subtitle}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        alignSelf={"flex-end"}
        justifySelf={{ base: "center", md: "none" }}
        display={{ base: "flex", md: "block" }}
        alignItems={{ base: "center", md: "initial" }}
        justifyContent={{ base: "center", md: "initial" }}
        width={{ base: "100%", md: "auto" }}
      >
        <Image src={HeroImage} alt={"Doctor Image"} />
      </Box>
    </Box>
  );
};
