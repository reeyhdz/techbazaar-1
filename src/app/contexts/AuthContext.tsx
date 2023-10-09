import { useEffect, useState, createContext } from "react";
import { User, Token } from "../api";

const tokenController = new Token();
const userController = new User();

export const AuthContext = createContext({});

export function AuthProvider(props) {
  const { children } = props;
  const [accessToken, setAccessToken] = useState<string>(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  const login = async (token) => {
    try {
      tokenController.settoken(token)
      setAccessToken(token);
      console.log(token)
      const getMeResponse = await userController.getMe(token);
      setUser(getMeResponse);
      return;
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  const data = {
    accessToken,
    user,
    login,
    logout: null,
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}
