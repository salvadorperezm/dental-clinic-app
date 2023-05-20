/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";

import { AppointmentStatus } from "../../ui";

export const UserAppointments = ({
  isUserAppointmentsOpen,
  closeUserAppointments,
  appointments,
}) => {
  return (
    <Modal isOpen={isUserAppointmentsOpen} onClose={closeUserAppointments}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Registro de citas.</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {appointments && appointments.length !== 0 ? (
            <TableContainer>
              <Table variant={"simple"}>
                <Thead>
                  <Tr>
                    <Th>Día</Th>
                    <Th>Confirmada</Th>
                    <Th>Completada</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {appointments.map((appointment) => {
                    return (
                      <Tr key={appointment.id}>
                        <Td>{appointment.scheduledDate}</Td>
                        <Td>
                          <AppointmentStatus status={appointment.isConfirmed} />
                        </Td>
                        <Td>
                          <AppointmentStatus status={appointment.isCompleted} />
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          ) : (
            <Text>Aún no hay citas. Agenda una.</Text>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
