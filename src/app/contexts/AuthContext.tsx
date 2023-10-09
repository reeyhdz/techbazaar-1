import { useEffect, useState, createContext } from "react";
import { Token } from "../api";

const tokenController = new Token();

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
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  }


  const data = {
    accessToken,
    // user,
    login,
    logout: null,
  };
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}
