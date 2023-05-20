/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export const NewAppointment = ({
  isNewAppointmentOpen,
  closeNewAppointment,
  userInfo,
  fetchAppointmentsByUser,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      doctorId: 12,
      userId: userInfo.userId,
      scheduledDate: "",
    },
    validationSchema: Yup.object({
      scheduledDate: Yup.string().required("Debe escoger una fecha."),
    }),
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      try {
        await axios.post(`${backendBaseUrl}/appointments`, {
          ...values,
          userId: parseInt(values.userId),
          doctorId: parseInt(values.doctorId),
        });
        toast({
          title: "Éxito.",
          description: "La cita fue agendada.",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        actions.resetForm();
        setIsLoading(false);
        closeNewAppointment();
        fetchAppointmentsByUser();
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
    },
  });

  return (
    <Modal isOpen={isNewAppointmentOpen} onClose={closeNewAppointment}>
      <ModalOverlay />
      <ModalContent marginX={{ base: "8px", md: "0px" }}>
        <ModalHeader>Agenda una cita.</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel>Escoge un doctor</FormLabel>
              <Select
                name={"doctorId"}
                value={formik.values.doctorId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value={12}>Dr. Juan García</option>
                <option value={13}>Dr. Isabel López</option>
                <option value={14}>Dr. José Pérez</option>
                <option value={15}>Dr. Carla Fernández</option>
              </Select>
            </FormControl>
            <FormControl
              isInvalid={
                formik.errors.scheduledDate && formik.touched.scheduledDate
              }
            >
              <FormLabel>Escoge una fecha</FormLabel>
              <Input
                type={"date"}
                name={"scheduledDate"}
                value={formik.values.scheduledDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.scheduledDate}</FormErrorMessage>
            </FormControl>
            <Button
              type={"submit"}
              width={"100%"}
              colorScheme={"facebook"}
              marginBlock={"16px"}
              isLoading={isLoading}
            >
              Agenda cita
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
