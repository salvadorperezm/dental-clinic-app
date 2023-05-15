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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { FormLayout } from "../../layout";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Debe de ingresar un correo válido.")
        .required("El correo es requerido."),
      password: Yup.string().required("La contraseña es requerida."),
    }),
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      try {
        const response = await axios.post(
          `${backendBaseUrl}/auth/login`,
          values
        );
        actions.resetForm();
        localStorage.setItem("accessToken", response.data.access_token);
        setIsLoading(false);
        navigate("/dashboard");
      } catch (error) {
        toast({
          title: "Error",
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
    <FormLayout title={"Inicia Sesión"}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          isRequired
          isInvalid={formik.errors.email && formik.touched.password}
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
        <Button
          width={"100%"}
          marginBlockStart={"16px"}
          colorScheme={"facebook"}
          type={"submit"}
          isLoading={isLoading}
        >
          Inicia Sesión
        </Button>
        <Text marginBlockStart={"8px"} textAlign={"center"}>
          ¿Nuevo por acá?{" "}
          <Link as={RouterLink} to="/register" color={"argentinianBlue"}>
            Registrate
          </Link>
        </Text>
      </form>
    </FormLayout>
  );
};
