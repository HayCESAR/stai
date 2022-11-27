import React from "react";
import { useContext } from "react";
import { AuthGoogleContext } from "../context/authGoogle";
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";

export const AvatarBox = () => {
  const { user, signOut } = useContext(AuthGoogleContext);
  let userLogado = JSON.parse(user);

  return(
    <Flex
      borderWidth={0}
      borderColor="gray.100"
      borderRadius="full"
      w="full"
      p={2}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      flexDirection={"row"}
    >
      <Avatar name={userLogado.displayName} bg="teal.300" src={userLogado.photoURL}/>
      <Flex
        w="full"
        flexDirection="column"
        gap={4}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Text fontSize="sm" fontWeight="bold" pb="0" lineHeight={0}>
          {userLogado.displayName}
        </Text>
        <Text as="small" color="gray.500" fontSize={12} lineHeight={0}>
        {userLogado.email}
        </Text>
      </Flex>
    </Flex>
  );
};