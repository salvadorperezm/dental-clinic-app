/* eslint-disable react/prop-types */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export const UsersTable = ({ users }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Nombre</Th>
            <Th>Apellido</Th>
            <Th>Correo</Th>
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
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
