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
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import { EditAppointment } from "../EditAppointment";
import { DeleteAppointment } from "../DeleteAppointment";
import { AppointmentStatus } from "../../ui";

export const AppointmentsTable = ({
  appointments,
  fetchAppointments,
  fetchAppointmentsAsAdmin,
  userInfo,
}) => {
  const [currentAppointment, setCurrentAppointment] = useState({});
  const [appointmentToBeDeleted, setAppointmentToBeDeleted] = useState({});

  const {
    isOpen: isEditModalOpen,
    onOpen: openEditModal,
    onClose: closeEditModal,
  } = useDisclosure();

  const {
    isOpen: isDeleteModalOpen,
    onOpen: openDeleteModal,
    onClose: closeDeleteModal,
  } = useDisclosure();

  const handleClick = (appointment) => {
    setCurrentAppointment(appointment);
    openEditModal();
  };

  const handleDeleteClick = (appointment) => {
    setAppointmentToBeDeleted(appointment);
    openDeleteModal();
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
              {userInfo.role === "Admin" && <Th>Eliminar</Th>}
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
                  {userInfo.role === "Admin" && (
                    <Td>
                      <BsFillTrashFill
                        cursor={"pointer"}
                        onClick={() => handleDeleteClick(appointment)}
                      />
                    </Td>
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {isEditModalOpen && (
        <EditAppointment
          isEditModalOpen={isEditModalOpen}
          closeEditModal={closeEditModal}
          appointment={currentAppointment}
          fetchAppointments={fetchAppointments}
          fetchAppointmentsAsAdmin={fetchAppointmentsAsAdmin}
          userInfo={userInfo}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteAppointment
          isDeleteModalOpen={isDeleteModalOpen}
          closeDeleteModal={closeDeleteModal}
          appointment={appointmentToBeDeleted}
          fetchAppointmentsAsAdmin={fetchAppointmentsAsAdmin}
        />
      )}
    </>
  );
};
