import {
    ListIcon,
    Link as LinkChakra,
    Heading,
    Box,
    Badge,
    Text,
  } from "@chakra-ui/react";
  
  export const NavItem = ({ item, isActive }: any) => {
    const { label } = item;
  
    if (item.type === "link") {
      const { icon, notifications, messages } = item;
      return (
        <Box display="flex" alignItems="center" my={6} justifyContent="center">
          <LinkChakra
            href=""
            gap={1}
            display="flex"
            _hover={{ textDecoration: "none", color: "black" }}
            fontWeight="medium"
            color={isActive ? "black" : "gray.400"}
            w="full"
            justifyContent={"center"}
          >
            <ListIcon as={icon} fontSize={22} m="0" />
            <Text>{label}</Text>
          </LinkChakra>
        </Box>
      );
    }
    return (
      <Heading
        color="gray.400"
        fontWeight="medium"
        textTransform="uppercase"
        fontSize="sm"
        borderTopWidth={1}
        borderColor="gray.100"
        pt={8}
        my={6}
      >
        <Text display={"flex"}>{label}</Text>
      </Heading>
    );
  };