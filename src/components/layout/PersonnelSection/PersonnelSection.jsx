import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

import DoctorOne from "../../../assets/images/doctor-1.png";
import DoctorTwo from "../../../assets/images/doctor-2.png";
import DoctorThree from "../../../assets/images/doctor-3.png";
import DoctorFour from "../../../assets/images/doctor-4.png";

export const PersonnelSection = () => {
  const doctors = [
    {
      id: 1,
      name: "Juan García",
      profession: "Ortodoncista",
      image: DoctorOne,
    },
    {
      id: 2,
      name: "Isabel López",
      profession: "Periodoncista",
      image: DoctorTwo,
    },
    {
      id: 3,
      name: "José Pérez",
      profession: "Endodoncista",
      image: DoctorThree,
    },
    {
      id: 4,
      name: "Carla Fernández",
      profession: "Odontopediatra",
      image: DoctorFour,
    },
  ];

  return (
    <Box
      as={"section"}
      id={"personnel"}
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingX={{ base: "16px", md: "64px" }}
      paddingY={{ base: "32px", md: "0px" }}
    >
      <Box>
        <Heading
          fontFamily={"Poppins"}
          textAlign={"center"}
          marginBlockEnd={"32px"}
        >
          Conoce a nuestros expertos:
        </Heading>
        <Text
          lineHeight={"2"}
          textAlign={{ base: "justify", md: "center" }}
          marginBlockEnd={"32px"}
        >
          Cada miembro de nuestro equipo se dedica a ofrecer un trato cálido y
          personalizado a cada paciente, con el objetivo de hacer que tu visita
          a nuestra clínica sea lo más cómoda y agradable posible. Además,
          nuestro equipo está en constante actualización y formación, para estar
          al día con los últimos avances y técnicas en el campo de la
          odontología.
        </Text>
        <Grid
          margin={"0 auto"}
          maxWidth={"1200px"}
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gridTemplateRows={"auto"}
          gap={"32px"}
        >
          {doctors.map((doctor) => {
            return (
              <GridItem
                key={doctor.id}
                border={"1px solid #ccc"}
                borderRadius={"8px"}
              >
                <Box
                  backgroundColor={"argentinianBlue"}
                  borderTopRadius={"8px"}
                >
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name} image`}
                    maxWidth={"100%"}
                  />
                </Box>
                <Heading
                  size={"sm"}
                  fontFamily={"Poppins"}
                  textAlign={"center"}
                  marginBlockStart={"8px"}
                >
                  {`Dr. ${doctor.name}`}
                </Heading>
                <Text textAlign={"center"} marginBlockEnd={"8px"}>
                  {doctor.profession}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
