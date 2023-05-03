import { Box, Heading, Text } from "@chakra-ui/react";

export const AboutUs = () => {
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      as={"section"}
      textAlign={"justify"}
      paddingX={{ base: "16px", md: "64px" }}
      paddingY={{ base: "32px", md: "0px" }}
      id={"about-us"}
    >
      <Box>
        <Box maxWidth={"700px"} margin={"0 auto"} marginBlockEnd={"32px"}>
          <Heading
            textAlign={"center"}
            fontFamily={"Poppins"}
            color={"argentinianBlue"}
            marginBlockEnd={"8px"}
          >
            ¿Quiénes somos?
          </Heading>
          <Text>
            Nuestra clínica está conformada por profesionales altamente
            capacitados y apasionados por la odontología, quienes trabajan
            juntos para proporcionar tratamientos de calidad y personalizados a
            cada uno de nuestros pacientes. Nos enorgullece ofrecer un ambiente
            cálido y acogedor, donde nuestros pacientes se sienten cómodos y
            seguros al recibir atención dental.
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          gap={"32px"}
        >
          <Box>
            <Heading
              textAlign={"center"}
              fontFamily={"Poppins"}
              color={"argentinianBlue"}
              size={{ base: "xl", md: "lg" }}
              marginBlockEnd={"8px"}
            >
              Misión
            </Heading>
            <Text>
              En nuestra clínica dental, nuestra misión es proporcionar un
              servicio odontológico excepcional y de alta calidad a nuestros
              pacientes. Nos esforzamos por ofrecer tratamientos personalizados
              y cuidadosamente planificados para satisfacer las necesidades de
              cada paciente individual. A través de la educación y la
              prevención, nos esforzamos por mejorar la salud oral de nuestra
              comunidad y promover la importancia de una buena higiene dental.
            </Text>
          </Box>
          <Box>
            <Heading
              textAlign={"center"}
              fontFamily={"Poppins"}
              color={"argentinianBlue"}
              size={{ base: "xl", md: "lg" }}
              marginBlockEnd={"8px"}
            >
              Visión
            </Heading>
            <Text>
              Nuestra visión es ser la clínica dental líder en nuestra
              comunidad, reconocida por nuestro compromiso con la excelencia en
              el cuidado de la salud oral y el servicio excepcional al paciente.
              Nos esforzamos por ser innovadores en nuestra práctica y utilizar
              tecnología de última generación para mejorar los tratamientos y la
              experiencia del paciente. Nos esforzamos por crear un ambiente
              cálido y acogedor donde nuestros pacientes se sientan cómodos y
              seguros al recibir atención dental.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
