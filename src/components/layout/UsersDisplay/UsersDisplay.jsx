/* eslint-disable react/prop-types */
import { Box, Button, Heading, Spinner, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { UsersTable } from "../UsersTable";
import { AddIcon } from "@chakra-ui/icons";
import { AddUser } from "../AddUser/AddUser";

export const UsersDisplay = ({ userInfo }) => {
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <>
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
            {userInfo.role === "Admin" && (
              <Button
                marginBlockEnd={"10px"}
                colorScheme={"facebook"}
                leftIcon={<AddIcon />}
                onClick={onOpen}
              >
                Agregar Usuario
              </Button>
            )}
            <UsersTable
              users={fetchedUsers}
              userInfo={userInfo}
              fetchUsers={fetchUsers}
            />
          </Box>
        )}
      </Box>
      {isOpen && (
        <AddUser isOpen={isOpen} onClose={onClose} fetchUsers={fetchUsers} />
      )}
    </>
  );
};
