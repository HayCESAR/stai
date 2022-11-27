import React from "react";
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdOutlineMoreHoriz } from "react-icons/md";

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
    

    <IconButton
      aria-label="Settings"
      icon={<MdOutlineMoreHoriz />}
      borderRadius="full"
      color="gray.400"
      variant="ghost"
      fontSize={20}
    />
  </Flex>
);