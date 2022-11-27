import { AuthGoogleProvider } from "./context/authGoogle";
import { AppRouter } from "./routes/routes";

export const App = () => {
  return (
    <AuthGoogleProvider>
      <AppRouter />
    </AuthGoogleProvider>
  );
};