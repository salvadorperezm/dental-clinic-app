import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { FormLayout } from "../../layout";

export const Register = () => {
  return (
    <FormLayout title={"Registrate"}>
      <form>
        <FormControl>
          <FormLabel>Cédula de identidad</FormLabel>
          <Input type={"text"} />
        </FormControl>
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input type={"text"} />
        </FormControl>
        <FormControl>
          <FormLabel>Apellido</FormLabel>
          <Input type={"text"} />
        </FormControl>
        <FormControl>
          <FormLabel>Correo electrónico</FormLabel>
          <Input type={"email"} />
        </FormControl>
        <FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input type={"password"} />
        </FormControl>
        <FormControl>
          <FormLabel>Confirme contraseña</FormLabel>
          <Input type={"password"} />
        </FormControl>
        <Button
          width={"100%"}
          marginBlockStart={"16px"}
          colorScheme={"facebook"}
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
