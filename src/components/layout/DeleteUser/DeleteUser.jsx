/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const DeleteUser = ({
  isDeleteModalOpen,
  closeDeleteModal,
  user,
  fetchUsers,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const deleteUser = async () => {
    setIsLoading(true);
    const accessToken = localStorage.getItem("accessToken");
    const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    try {
      await axios.delete(`${backendBaseUrl}/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      toast({
        title: "Éxito.",
        description: "El usuario se ha eliminado satisfactoriamente.",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      setIsLoading(false);
      closeDeleteModal();
      fetchUsers();
    } catch (error) {
      toast({
        title: "Error.",
        description: `${error.response.data.message}`,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Eliminar usuario</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            ¿Seguro que quieres eliminar a {user.firstName} {user.lastName}?
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme={"red"}
            onClick={deleteUser}
            isLoading={isLoading}
          >
            Eliminar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
