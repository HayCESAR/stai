import React, { useState } from 'react'
import {
    Flex,
    Box,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Image
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from './NavItem'
import LogoStai from './logo-stai.png'
import { AvatarBox } from './AvatarBox'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("small")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="100%"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "15%"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Flex mt={4} align="center" justifyContent="space-between">
                    <Image src={LogoStai} alt='stai' />
                </Flex>
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    aria-label='Menu'
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" active />
                <NavItem navSize={navSize} icon={FiCalendar} title="Predict" />
                <NavItem navSize={navSize} icon={FiUser} title="Update File" />
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center" justifyContent="space-between">
                    <AvatarBox navSize={navSize} />
                </Flex>
            </Flex>
        </Flex>
    )
}