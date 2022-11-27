import { Box, Flex, Image } from "@chakra-ui/react";
import LogoStai from './logo-stai.png';

export const Logo = () => (
  <Flex
    w="full"
    alignItems="center"
    justifyContent="space-between"
    flexDirection={"row"}
    gap={4}
  >
    <Box display="flex" alignItems="center" gap={2}>
      <Image
        boxSize='100px'
        src={LogoStai}
        alt='STAI'
      />
    </Box>
  </Flex>
);