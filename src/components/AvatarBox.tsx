import React from "react";
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";

export const AvatarBox = () => (
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
    <Avatar name="Design To Chakra UI" bg="teal.300" />
  </Flex>
);