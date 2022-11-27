//import { Box, Text } from '@chakra-ui/react'
import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";

export const Home = () => {
  const { user, signOut } = useContext(AuthGoogleContext);
  let userLogado = JSON.parse(user);
  return (
    <div>
      <h1>Bem vindo: {userLogado.displayName}</h1>
      <button onClick={() => signOut()}>sair</button>
    </div>
  );
};
