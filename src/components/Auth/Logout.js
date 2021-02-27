import { Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Logout() {
  const { logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } finally {
    }
  }

  handleLogout();

  return <Redirect to="/" />;
}
