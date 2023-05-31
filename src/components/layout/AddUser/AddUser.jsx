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
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

export const AddUser = ({ isOpen, onClose, fetchUsers }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      role: "User",
      email: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      const accessToken = localStorage.getItem("accessToken");
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      try {
        await axios.post(`${backendBaseUrl}/users`, values, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setIsLoading(false);
        onClose();
        fetchUsers();
        toast({
          title: "Éxito.",
          description: "El usuario se ha creado satisfactoriamente.",
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
        <ModalHeader>Agregar usuario</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input
              type={"text"}
              name={"firstName"}
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Apellido</FormLabel>
            <Input
              type={"text"}
              name={"lastName"}
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Rol</FormLabel>
            <Select
              name={"role"}
              value={formik.values.role}
              onChange={formik.handleChange}
            >
              <option value={"User"}>Usuario</option>
              <option value={"Personnel"}>Doctor</option>
              <option value={"Admin"}>Admin</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Correo</FormLabel>
            <Input
              type={"email"}
              name={"email"}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme={"facebook"}
            isLoading={isLoading}
            onClick={formik.handleSubmit}
          >
            Agregar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
