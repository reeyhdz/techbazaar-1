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
    (async () => {
      const token = tokenController.gettoken();

      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (tokenController.hasExpired(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  const login = async (token) => {
    try {
      tokenController.settoken(token);
      const response = await userController.getMe();
      setUser(response);
      setAccessToken(token);
      console.log(user, accessToken)
    } catch (error) {
      console.error(error);

    } finally {
      setLoading(false);
    }
  }

  const logout = () => {
    tokenController.removeToken();
    setAccessToken(null);
    setUser(null);
  };

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
