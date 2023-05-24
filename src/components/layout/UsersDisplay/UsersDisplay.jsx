/* eslint-disable react/prop-types */
import { Box, Heading, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { UsersTable } from "../UsersTable";

export const UsersDisplay = ({ userInfo }) => {
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    const accessToken = localStorage.getItem("accessToken");
    const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    try {
      const response = await axios.get(`${backendBaseUrl}/users`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFetchedUsers(response.data);
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
          <Heading>Cargando usuarios...</Heading>
        </Box>
      ) : (
        <Box>
          <UsersTable users={fetchedUsers} userInfo={userInfo} />
        </Box>
      )}
    </Box>
  );
};
