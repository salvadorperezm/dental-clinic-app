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

import { DeleteUser } from "../DeleteUser";
import { EditUser } from "../EditUser";

export const UsersTable = ({ users, userInfo, fetchUsers }) => {
  const [userToBeDeleted, setUserToBeDeleted] = useState({});
  const [userToBeEdited, setUserToBeEdited] = useState({});

  const {
    isOpen: isDeleteModalOpen,
    onOpen: openDeleteModal,
    onClose: closeDeleteModal,
  } = useDisclosure();

  const {
    isOpen: isEditModalOpen,
    onOpen: openEditModal,
    onClose: closeEditModal,
  } = useDisclosure();

  const formatUserRole = (role) => {
    if (role === "User") {
      return "Usuario";
    } else if (role === "Personnel") {
      return "Doctor";
    } else {
      return "Admin";
    }
  };

  const handleEditClick = (user) => {
    setUserToBeEdited(user);
    openEditModal();
  };

  const handleDeleteClick = (user) => {
    setUserToBeDeleted(user);
    openDeleteModal();
  };

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Rol</Th>
              <Th>Correo</Th>

              {userInfo.role === "Admin" && (
                <>
                  <Th>Editar</Th>
                  <Th>Eliminar</Th>
                </>
              )}
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => {
              return (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.firstName}</Td>
                  <Td>{user.lastName}</Td>
                  <Td>{formatUserRole(user.role)}</Td>
                  <Td>{user.email}</Td>
                  {userInfo.role === "Admin" && (
                    <>
                      <Th>
                        <AiFillEdit
                          cursor={"pointer"}
                          onClick={() => handleEditClick(user)}
                        />
                      </Th>
                      <Th>
                        <BsFillTrashFill
                          cursor={"pointer"}
                          onClick={() => handleDeleteClick(user)}
                        />
                      </Th>
                    </>
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {isDeleteModalOpen && (
        <DeleteUser
          isDeleteModalOpen={isDeleteModalOpen}
          closeDeleteModal={closeDeleteModal}
          user={userToBeDeleted}
          fetchUsers={fetchUsers}
        />
      )}
      {isEditModalOpen && (
        <EditUser
          isEditModalOpen={isEditModalOpen}
          closeEditModal={closeEditModal}
          user={userToBeEdited}
          fetchUsers={fetchUsers}
        />
      )}
    </>
  );
};
