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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const DeleteAppointment = ({
  appointment,
  isDeleteModalOpen,
  closeDeleteModal,
  fetchAppointmentsAsAdmin,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const deleteAppointment = async () => {
    setIsLoading(true);
    const accessToken = localStorage.getItem("accessToken");
    const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    try {
      await axios.delete(`${backendBaseUrl}/appointments/${appointment.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      toast({
        title: "Éxito.",
        description: "La cita se ha eliminado satisfactoriamente.",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      setIsLoading(false);
      closeDeleteModal();
      fetchAppointmentsAsAdmin();
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
  };

  return (
    <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          ¿Seguro que quieres eliminar la cita con fecha{" "}
          {appointment.scheduledDate}?
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme={"red"}
            onClick={deleteAppointment}
            isLoading={isLoading}
          >
            Eliminar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
