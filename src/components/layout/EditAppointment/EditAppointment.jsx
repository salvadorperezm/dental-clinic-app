/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

export const EditAppointment = ({
  appointment,
  isOpen,
  onClose,
  fetchAppointments,
  fetchAppointmentsAsAdmin,
  userInfo,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      scheduledDate: appointment.scheduledDate,
      isConfirmed: appointment.isConfirmed,
      isCompleted: appointment.isCompleted,
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      const accessToken = localStorage.getItem("accessToken");
      try {
        await axios.patch(
          `${backendBaseUrl}/appointments/${appointment.id}`,
          {
            ...values,
            isConfirmed: Boolean(formik.values.isConfirmed),
            isCompleted: Boolean(formik.values.isCompleted),
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setIsLoading(false);
        onClose();
        toast({
          title: "Éxito.",
          description: "La cita se ha actualizado satisfactoriamente.",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        if (userInfo.role === "Personnel") {
          fetchAppointments();
        } else {
          fetchAppointmentsAsAdmin();
        }
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
        <ModalHeader>Actualiza una cita</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Selecciona una nueva fecha</FormLabel>
            <Input
              type={"date"}
              name={"scheduledDate"}
              value={formik.values.scheduledDate}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Cita confirmada</FormLabel>
            <Select
              name={"isConfirmed"}
              value={formik.values.isConfirmed}
              onChange={formik.handleChange}
            >
              <option value={"true"}>Si</option>
              <option value={"false"}>No</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Cita completada</FormLabel>
            <Select
              name={"isCompleted"}
              value={formik.values.isCompleted}
              onChange={formik.handleChange}
            >
              <option value={"true"}>Si</option>
              <option value={"false"}>No</option>
            </Select>
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
