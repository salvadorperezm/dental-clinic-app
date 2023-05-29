/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

export const EditMaterial = ({ isOpen, onClose, material, fetchMaterials }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      materialName: material.materialName,
      materialDescription: material.materialDescription,
      materialQuantity: material.materialQuantity,
      materialCost: material.materialCost,
      materialUnitOfMeasure: material.materialUnitOfMeasure,
      materialExpiryDate: material.materialExpiryDate,
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      const accessToken = localStorage.getItem("accessToken");
      try {
        await axios.patch(
          `${backendBaseUrl}/materials/${material.id}`,
          {
            ...values,
            materialCost: parseInt(formik.values.materialCost),
            materialQuantity: parseInt(formik.values.materialQuantity),
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setIsLoading(false);
        onClose();
        fetchMaterials();
        toast({
          title: "Éxito.",
          description: "El material se ha actualizado satisfactoriamente.",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      } catch (error) {
        setIsLoading(false);
        toast({
          title: "Error.",
          description: `${error.response.data.message}`,
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      }
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Actualizar material</ModalHeader>
        <ModalCloseButton />

        <form onSubmit={formik.handleSubmit}>
          <ModalBody>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                type={"text"}
                name={"materialName"}
                value={formik.values.materialName}
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descripcion</FormLabel>
              <Input
                type={"text"}
                name={"materialDescription"}
                value={formik.values.materialDescription}
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Cantidad</FormLabel>
              <Input
                type={"number"}
                name={"materialQuantity"}
                value={formik.values.materialQuantity}
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Costo</FormLabel>
              <Input
                type={"number"}
                name={"materialCost"}
                value={formik.values.materialCost}
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Unidad de medida</FormLabel>
              <Input
                type={"text"}
                name={"materialUnitOfMeasure"}
                value={formik.values.materialUnitOfMeasure}
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Fecha de expiracion</FormLabel>
              <Input
                name={"materialExpiryDate"}
                type={"date"}
                value={formik.values.materialExpiryDate}
                onChange={formik.handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              type={"submit"}
              colorScheme={"facebook"}
              isLoading={isLoading}
            >
              Actualizar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
