/* eslint-disable react/prop-types */
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import Calendar from "../../../assets/images/calendar.svg";
import List from "../../../assets/images/list.svg";
import Settings from "../../../assets/images/settings.svg";
import { NewAppointment } from "../NewAppointment";
import { UserAppointments } from "../UserAppointments";
import { UserDashboardLayout } from "../../../layout";

export const UserDashboard = ({ userInfo }) => {
  const [appointments, setAppointments] = useState([]);

  const {
    isOpen: isNewAppointmentOpen,
    onOpen: openNewAppointment,
    onClose: closeNewAppointment,
  } = useDisclosure();

  const {
    isOpen: isUserAppointmentsOpen,
    onOpen: openUserAppointments,
    onClose: closeUserAppointments,
  } = useDisclosure();

  const actions = [
    {
      id: 1,
      title: "Agenda una cita",
      image: Calendar,
      modal: openNewAppointment,
    },
    {
      id: 2,
      title: "Registo de citas",
      image: List,
      modal: openUserAppointments,
    },
    {
      id: 3,
      title: "Configuración",
      image: Settings,
    },
  ];

  const fetchAppointmentsByUser = async () => {
    const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(
        `${backendBaseUrl}/users/${userInfo.userId}/appointments`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setAppointments(response.data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchAppointmentsByUser();
  }, []);

  return (
    <>
      <UserDashboardLayout userInfo={userInfo}>
        <Box
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          paddingX={{ base: "8px", lg: "0px" }}
          paddingY={{ base: "32px", lg: "0px" }}
        >
          <Box maxW={"1200px"} flex={"1"}>
            <Heading
              fontFamily={"Poppins"}
              textAlign={"center"}
              marginBlockEnd={"32px"}
            >
              Bienvenido {`${userInfo.firstName} ${userInfo.lastName}.`}
            </Heading>
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={"20px"}>
              {actions.map((action) => {
                return (
                  <Box
                    key={action.id}
                    padding={"16px"}
                    borderRadius={"8px"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"20px"}
                    _hover={{
                      cursor: "pointer",
                      backgroundColor: "RGBA(0, 0, 0, 0.04)",
                    }}
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                    onClick={action.modal}
                  >
                    <Heading fontFamily={"Poppins"} textAlign={"center"}>
                      {action.title}
                    </Heading>
                    <Image
                      src={action.image}
                      alt={`${action.title} icono`}
                      width={"60px"}
                    />
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
        </Box>
      </UserDashboardLayout>
      <NewAppointment
        isNewAppointmentOpen={isNewAppointmentOpen}
        closeNewAppointment={closeNewAppointment}
        userInfo={userInfo}
        fetchAppointmentsByUser={fetchAppointmentsByUser}
      />
      <UserAppointments
        isUserAppointmentsOpen={isUserAppointmentsOpen}
        closeUserAppointments={closeUserAppointments}
        userInfo={userInfo}
        appointments={appointments}
      />
    </>
  );
};
