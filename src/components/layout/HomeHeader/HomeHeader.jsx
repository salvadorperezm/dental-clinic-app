import { Button, Flex, Link, Spacer } from "@chakra-ui/react";

import { Logo } from "../../ui";

export const HomeHeader = () => {
  const links = [
    {
      name: "inicio",
    },
    {
      name: "sobre nosotros",
    },
    {
      name: "servicios",
    },
  ];

  return (
    <Flex
      as="header"
      px={"32px"}
      py={"8px"}
      bg={"argentinianBlue"}
      align={"center"}
    >
      <Logo />
      <Spacer />
      <Flex alignItems={"center"} gap={"20px"}>
        {links.map((link) => {
          return (
            <Link
              href="#"
              key={link.name}
              textTransform={"capitalize"}
              paddingY={"8px"}
              color={"white"}
              _hover={{
                textDecoration: "none",
                borderBlockEnd: "1px solid white",
              }}
            >
              {link.name}
            </Link>
          );
        })}
        <Button>Inicia Sesión</Button>
      </Flex>
    </Flex>
  );
};
