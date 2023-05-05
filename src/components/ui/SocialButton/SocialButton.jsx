/* eslint-disable react/prop-types */
import { Button, VisuallyHidden } from "@chakra-ui/react";

export const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      bg={"blackAlpha.100"}
      rounded={"full"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};
