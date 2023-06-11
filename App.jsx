import Navigation from "./app/Navigations/Navigation";
import AuthProvider from "./app/auth/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
