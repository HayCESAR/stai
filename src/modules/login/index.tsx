import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
import FullPageLayout from './components/full-page-layout'
import LogoGoogle from '../common/assets/logo-google.png'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../../services/firebaseConfig';

const provider = new GoogleAuthProvider();

export const Login = () => {
  const auth = getAuth(app);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {const token = credential.accessToken}
        const user = result.user;
        console.log(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

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
          <Button borderRadius='xl' px={12} size='md' mt={6} colorScheme='pink' onClick={signInGoogle}>
            <img src={LogoGoogle} alt="Google" />
            <span>Fazer login com Google</span>
          </Button>
        </Box>
      </Box>
    </FullPageLayout>
  )
}
