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
import { BsFillTrashFill } from "react-icons/bs";

import { DeleteUser } from "../DeleteUser";
import { useState } from "react";

export const UsersTable = ({ users, userInfo, fetchUsers }) => {
  const [userToBeDeleted, setUserToBeDeleted] = useState({});

  const {
    isOpen: isDeleteModalOpen,
    onOpen: openDeleteModal,
    onClose: closeDeleteModal,
  } = useDisclosure();

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
              <Th>Correo</Th>
              {userInfo.role === "Admin" && <Th>Eliminar</Th>}
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => {
              return (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.firstName}</Td>
                  <Td>{user.lastName}</Td>
                  <Td>{user.email}</Td>
                  {userInfo.role === "Admin" && (
                    <Th>
                      <BsFillTrashFill
                        cursor={"pointer"}
                        onClick={() => handleDeleteClick(user)}
                      />
                    </Th>
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
    </>
  );
};
