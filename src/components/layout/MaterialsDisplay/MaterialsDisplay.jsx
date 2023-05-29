/* eslint-disable react/prop-types */
import { Box, Heading, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { MaterialsTable } from "../MaterialsTable";

export const MaterialsDisplay = ({ userInfo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedMaterials, setFetchedMaterials] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    setIsLoading(true);
    const accessToken = localStorage.getItem("accessToken");
    const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    try {
      const response = await axios.get(`${backendBaseUrl}/materials`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFetchedMaterials(response.data);
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
          <Heading>Cargando materiales...</Heading>
        </Box>
      ) : (
        <Box>
          <MaterialsTable
            materials={fetchedMaterials}
            userInfo={userInfo}
            fetchMaterials={fetchMaterials}
          />
        </Box>
      )}
    </Box>
  );
};
