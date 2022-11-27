import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import { Box, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  const { user, signOut } = useContext(AuthGoogleContext);
  let userLogado = JSON.parse(user);
  
  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={10}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={350}
        bg="white"
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
      >
        <Sidebar />
      </Flex>

      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
      >
        <Text fontSize={100} color="gray.300">
          Home
        </Text>
      </Flex>
    </HStack>
  );
};
