/* eslint-disable react/prop-types */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";

import { EditAppointment } from "../EditAppointment";
import { AppointmentStatus } from "../../ui";
import { useState } from "react";

export const AppointmentsTable = ({ appointments }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentAppointment, setCurrentAppointment] = useState({});

  const handleClick = (appointment) => {
    setCurrentAppointment(appointment);
    onOpen();
  };

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Fecha</Th>
              <Th>Confirmada</Th>
              <Th>Completada</Th>
              <Th>Editar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {appointments.map((appointment) => {
              return (
                <Tr key={appointment.id}>
                  <Td>{appointment.id}</Td>
                  <Td>{appointment.scheduledDate}</Td>
                  <Td>
                    <AppointmentStatus status={appointment.isConfirmed} />
                  </Td>
                  <Td>
                    <AppointmentStatus
                      status={appointment.isCompleted}
                      onClick={() => alert("hello")}
                    />
                  </Td>
                  <Td>
                    <AiFillEdit
                      cursor={"pointer"}
                      onClick={() => handleClick(appointment)}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen && (
        <EditAppointment
          isOpen={isOpen}
          onClose={onClose}
          appointment={currentAppointment}
        />
      )}
    </>
  );
};
