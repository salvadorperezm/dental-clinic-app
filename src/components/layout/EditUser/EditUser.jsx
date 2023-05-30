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

export const EditUser = ({
  user,
  fetchUsers,
  isEditModalOpen,
  closeEditModal,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      email: user.email,
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      const accessToken = localStorage.getItem("accessToken");
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      try {
        await axios.patch(`${backendBaseUrl}/users/${user.id}`, values, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        toast({
          title: "Éxito.",
          description: "El usuario se ha actualizado satisfactoriamente.",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        setIsLoading(false);
        closeEditModal();
        fetchUsers();
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
    <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar usuario</ModalHeader>
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
              type={"text"}
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
            Actualizar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
