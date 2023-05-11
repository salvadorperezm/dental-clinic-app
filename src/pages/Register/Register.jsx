import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";

import { FormLayout } from "../../layout";

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("El nombre es requerido.")
        .min(4, "El nombre debe de contener al menos 4 caracteres."),
      lastName: Yup.string()
        .required("El apellido es requerido.")
        .min(4, "El apellido debe de contener al menos 4 caracteres."),
      email: Yup.string()
        .email("Debe de ingresar un correo válido.")
        .required("El correo es requerido."),
      password: Yup.string()
        .min(4, "La contraseña debe de tener al menos 4 caracteres.")
        .required("La contraseña es requerida."),
      confirmPassword: Yup.string()
        .min(
          4,
          "La confirmación de contraseña debe de tener al menos 4 caracteres."
        )
        .required("La confirmación de contraseña es requerida. "),
    }),
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      try {
        await axios.post(`${backendBaseUrl}/users`, values);
        toast({
          title: "Éxito.",
          description: "La cuenta se ha creado satisfactoriamente.",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        actions.resetForm();
        setIsLoading(false);
      } catch (error) {
        toast({
          title: "Error.",
          description: `${error.response.data.message}`,
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        setIsLoading(false);
      }
    },
  });

  return (
    <FormLayout title={"Registrate"}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          isRequired
          isInvalid={formik.errors.firstName && formik.touched.firstName}
        >
          <FormLabel>Nombre</FormLabel>
          <Input
            type={"text"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            name={"firstName"}
          />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={formik.errors.lastName && formik.touched.lastName}
        >
          <FormLabel>Apellido</FormLabel>
          <Input
            type={"text"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            name={"lastName"}
          />
          <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={formik.errors.email && formik.touched.email}
        >
          <FormLabel>Correo electrónico</FormLabel>
          <Input
            type={"email"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name={"email"}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={formik.errors.password && formik.touched.password}
        >
          <FormLabel>Contraseña</FormLabel>
          <Input
            type={"password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name={"password"}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={
            formik.errors.confirmPassword && formik.touched.confirmPassword
          }
        >
          <FormLabel>Confirme contraseña</FormLabel>
          <Input
            type={"password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            name={"confirmPassword"}
          />
          <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
        </FormControl>
        <Button
          width={"100%"}
          marginBlockStart={"16px"}
          colorScheme={"facebook"}
          type={"submit"}
          isLoading={isLoading}
        >
          Registrate
        </Button>
        <Text marginBlockStart={"8px"} textAlign={"center"}>
          ¿Ya tienes una cuenta?{" "}
          <Link as={RouterLink} to={"/login"} color={"argentinianBlue"}>
            Inicia sesión.
          </Link>
        </Text>
      </form>
    </FormLayout>
  );
};
