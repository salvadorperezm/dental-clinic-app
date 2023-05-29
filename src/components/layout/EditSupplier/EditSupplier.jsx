/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

export const EditSupplier = ({ isOpen, onClose, supplier, fetchSuppliers }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      supplierName: supplier.supplierName,
      supplierEmail: supplier.supplierEmail,
      supplierAddress: supplier.supplierAddress,
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      const accessToken = localStorage.getItem("accessToken");
      try {
        await axios.patch(
          `${backendBaseUrl}/suppliers/${supplier.id}`,
          values,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setIsLoading(false);
        onClose();
        fetchSuppliers();
        toast({
          title: "Éxito.",
          description: "El proveedor se ha actualizado satisfactoriamente.",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      } catch (error) {
        setIsLoading(false);
        toast({
          title: "Error.",
          description: `${error.response.data.message}`,
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      }
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Actualiza un proveedor</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input
              type={"text"}
              name={"supplierName"}
              value={formik.values.supplierName}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Correo electronico</FormLabel>
            <Input
              type={"email"}
              name={"supplierEmail"}
              value={formik.values.supplierEmail}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Direccion</FormLabel>
            <Input
              type={"text"}
              name={"supplierAddress"}
              value={formik.values.supplierAddress}
              onChange={formik.handleChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme={"facebook"}
            onClick={formik.handleSubmit}
            isLoading={isLoading}
          >
            Actualizar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
