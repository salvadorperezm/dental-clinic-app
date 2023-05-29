/* eslint-disable react/prop-types */
import { Box, Heading, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { SuppliersTable } from "../SuppliersTable/SuppliersTable";

export const SuppliersDisplay = ({ userInfo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedSuppliers, setFetchedSuppliers] = useState([]);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    setIsLoading(true);
    const accessToken = localStorage.getItem("accessToken");
    const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    try {
      const response = await axios.get(`${backendBaseUrl}/suppliers`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFetchedSuppliers(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.warn(error);
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
          <Heading>Cargando proveedores...</Heading>
        </Box>
      ) : (
        <Box>
          <SuppliersTable
            suppliers={fetchedSuppliers}
            userInfo={userInfo}
            fetchSuppliers={fetchSuppliers}
          />
        </Box>
      )}
    </Box>
  );
};
