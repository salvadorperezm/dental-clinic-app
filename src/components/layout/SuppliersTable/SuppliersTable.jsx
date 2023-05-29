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

import { EditSupplier } from "../EditSupplier/EditSupplier";
import { useState } from "react";

export const SuppliersTable = ({ suppliers, fetchSuppliers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentSupplier, setCurrentSupplier] = useState({});

  const handleClick = (supplier) => {
    setCurrentSupplier(supplier);
    onOpen();
  };

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Nombre</Th>
              <Th>Correo electronico</Th>
              <Th>Direccion</Th>
              <Th>Editar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {suppliers.map((supplier) => {
              return (
                <Tr key={supplier.id}>
                  <Td>{supplier.id}</Td>
                  <Td>{supplier.supplierName}</Td>
                  <Td>{supplier.supplierEmail}</Td>
                  <Td>{supplier.supplierAddress}</Td>
                  <Td>
                    <AiFillEdit
                      cursor={"pointer"}
                      onClick={() => handleClick(supplier)}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen && (
        <EditSupplier
          isOpen={isOpen}
          onClose={onClose}
          supplier={currentSupplier}
          fetchSuppliers={fetchSuppliers}
        />
      )}
    </>
  );
};
