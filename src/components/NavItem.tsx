import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'

export default function NavItem({ icon, title, active, navSize }: any) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "center"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "#A4A4A4"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#D8D8D8" }}
                    w="100%"
                >
                    <MenuButton>
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "#F2F2F2" : "gray.500"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} color={active ? "#F2F2F2" : "gray.500"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}