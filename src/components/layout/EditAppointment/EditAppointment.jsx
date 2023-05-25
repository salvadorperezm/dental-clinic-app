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
} from "@chakra-ui/react";
import { useFormik } from "formik";

export const EditAppointment = ({ appointment, isOpen, onClose }) => {
  const formik = useFormik({
    initialValues: {
      scheduledDate: appointment.scheduledDate,
      isConfirmed: appointment.isConfirmed,
      isCompleted: appointment.isCompleted,
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (error) {
        console.warn(error);
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
              value={formik.values.isConfirmed}
              onChange={formik.handleChange}
            >
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Cita completada</FormLabel>
            <Select
              value={formik.values.isCompleted}
              onChange={formik.handleChange}
            >
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme={"facebook"} onClick={formik.handleSubmit}>
            Actualizar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
