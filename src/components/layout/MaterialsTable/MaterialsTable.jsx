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
import { AiFillEdit } from "react-icons/ai";

export const MaterialsTable = ({ materials }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Nombre</Th>
            <Th>Descripcion</Th>
            <Th>Distribuidor</Th>
            <Th>Cantidad</Th>
            <Th>Costo</Th>
            <Th>Unidad de medida</Th>
            <Th>Fecha de expiracion</Th>
            <Th>Editar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {materials.map((material) => {
            return (
              <Tr key={material.id}>
                <Td>{material.id}</Td>
                <Td>{material.materialName}</Td>
                <Td>{material.materialDescription}</Td>
                <Td>{material.supplier.supplierName}</Td>
                <Td>{material.materialQuantity}</Td>
                <Td>{material.materialCost}</Td>
                <Td>{material.materialUnitOfMeasure}</Td>
                <Td>{material.materialExpiryDate}</Td>
                <Td>
                  <AiFillEdit cursor={"pointer"} />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
