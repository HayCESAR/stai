import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
import FullPageLayout from './components/full-page-layout'

export function Login() {
  return (
    <FullPageLayout>
      <Box>
        <Text
          mb={6}
          textAlign='center'
          color='#C20000'
          fontSize='2xl'
          fontWeight='bold'
        >
          Login
        </Text>
        <Box textAlign='center'>
          <Button borderRadius='xl' px={12} size='md' mt={6} colorScheme='pink'>
            Fazer login com Google
          </Button>
        </Box>
      </Box>
    </FullPageLayout>
  )
}
