/* eslint-disable react/prop-types */
import { Box, Heading, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AppointmentsTable } from "../AppointmentsTable/AppointmentsTable";

export const AppointmentsDisplay = ({ userInfo }) => {
  const [fetchedAppointments, setFetchedAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setIsLoading(true);
    const accessToken = localStorage.getItem("accessToken");
    const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    try {
      const response = await axios.get(
        `${backendUrl}/users/${userInfo.userId}/appointments`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setFetchedAppointments(response.data);
      setIsLoading(false);
    } catch (error) {
      console.warn(error);
      setIsLoading(false);
    }
  };

  return (
    <Box padding={"16px"} maxH={"100vh"} overflow={"scroll"}>
      {isLoading ? (
        <Box
          height={"100vh"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Spinner />
          <Heading>Cargando citas...</Heading>
        </Box>
      ) : (
        <Box>
          <AppointmentsTable
            appointments={fetchedAppointments}
            userInfo={userInfo}
            fetchAppointments={fetchAppointments}
          />
        </Box>
      )}
    </Box>
  );
};
