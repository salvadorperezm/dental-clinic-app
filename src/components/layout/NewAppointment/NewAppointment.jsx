/* eslint-disable react/prop-types */
import {
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";

export const NewAppointment = ({
  isNewAppointmentOpen,
  closeNewAppointment,
}) => {
  return (
    <Modal isOpen={isNewAppointmentOpen} onClose={closeNewAppointment}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agenda una cita.</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Escoge un doctor</FormLabel>
            <Select>
              <option>Dr. Juan García</option>
              <option>Dr. Isabel López</option>
              <option>Dr. José Pérez</option>
              <option>Dr. Carla Fernández</option>
            </Select>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
