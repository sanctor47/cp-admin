import { createContext, useState } from "react";
import { login, currentUser } from "../apis/UsersServices";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const Login = async (data) => {
    try {
      const token = await login(data);
      if (token) {
        setUserToken(token);
        const jsonValue = JSON.stringify(token);
        await localStorage.setItem("userToken", jsonValue);
      }
      setIsLoading(false);
      nav("/");
    } catch (e) {
      console.log(e.message);
      setError(e.message);
      setIsLoading(false);
    }
  };

  const Logout = async () => {
    await localStorage.removeItem("userToken");
    setUserToken(null);
    setIsLoading(true);
  };

  const GetCurrentUser = async () => {
    try {
      if (userToken) {
        const UserData = await currentUser(userToken);
        setUserData(UserData);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{ Login, Logout, GetCurrentUser, userData, userToken, isLoading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
