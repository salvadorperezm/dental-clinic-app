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

export const Login = () => {
  return (
    <FormLayout title={"Inicia Sesión"}>
      <form>
        <FormControl>
          <FormLabel>Correo electrónico</FormLabel>
          <Input type={"email"} />
        </FormControl>
        <FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input type={"password"} />
        </FormControl>
        <Button
          width={"100%"}
          marginBlockStart={"16px"}
          colorScheme={"facebook"}
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
