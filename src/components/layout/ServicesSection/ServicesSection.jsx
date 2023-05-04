import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

import Implant from "../../../assets/images/implant.png";
import Brackets from "../../../assets/images/brackets.png";
import Whitening from "../../../assets/images/blanqueamiento.png";
import Extraction from "../../../assets/images/extraccion.png";
import Revision from "../../../assets/images/revision.png";
import Treatment from "../../../assets/images/tratamiento.png";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Revisión dental",
      description:
        "Es necesaria realizarla de forma periódica para tener una valoración de la salud bucodental, así como el estado de toda la estructura dentaria. ",
      image: Revision,
    },
    {
      id: 2,
      title: "Extracciones dentales",
      description:
        "Son necesarias cuando un diente está demasiado dañado o infectado para ser reparado, o cuando está causando dolor o problemas en la mandíbula.",
      image: Extraction,
    },
    {
      id: 3,
      title: "Tratamientos de conducto",
      description:
        "Se realizan para tratar infecciones en el interior de un diente y evitar la necesidad de una extracción dental.",
      image: Treatment,
    },
    {
      id: 4,
      title: "Blanqueamiento dental",
      description:
        "Es un tratamiento cosmético que se utiliza para aclarar el color de los dientes y mejorar la apariencia estética de la sonrisa.",
      image: Whitening,
    },
    {
      id: 5,
      title: "Ortodoncia",
      description:
        "Se utiliza para corregir problemas de alineación dental, como los dientes torcidos o apiñados.",
      image: Brackets,
    },
    {
      id: 6,
      title: "Implantes dentales",
      description:
        "Son una opción de tratamiento para reemplazar dientes perdidos o dañados.",
      image: Implant,
    },
  ];

  return (
    <Box
      as={"section"}
      id={"services"}
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      paddingX={{ base: "16px", md: "0px" }}
      paddingY={{ base: "32px", md: "0px" }}
    >
      <Heading
        fontFamily={"Poppins"}
        marginBlockEnd={"32px"}
        textAlign={"center"}
      >
        Lo que podemos hacer por tu sonrisa:
      </Heading>
      <Grid
        maxW={"1200px"}
        templateColumns={{ base: "1", md: "repeat(3, 1fr)" }}
        gap={"32px"}
      >
        {services.map((service) => {
          return (
            <GridItem key={service.id}>
              <Box
                border={{ base: "1px solid #cccccc" }}
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                padding={"16px"}
                borderRadius={{ base: "8px" }}
                height={"100%"}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} icon`}
                  width={"50px"}
                  alignSelf={"center"}
                />
                <Heading
                  size={"sm"}
                  textAlign={"center"}
                  fontFamily={"Poppins"}
                  color={"argentinianBlue"}
                >
                  {service.title}
                </Heading>
                <Text textAlign={"justify"} lineHeight={"2"}>
                  {service.description}
                </Text>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
