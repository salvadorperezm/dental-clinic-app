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

import { EditMaterial } from "../EditMaterial";

export const MaterialsTable = ({ materials, fetchMaterials }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentMaterial, setCurrentMaterial] = useState({});

  const handleClick = (material) => {
    setCurrentMaterial(material);
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
                    <AiFillEdit
                      cursor={"pointer"}
                      onClick={() => handleClick(material)}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen && (
        <EditMaterial
          isOpen={isOpen}
          onClose={onClose}
          material={currentMaterial}
          fetchMaterials={fetchMaterials}
        />
      )}
    </>
  );
};
