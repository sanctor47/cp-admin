import React, {
    useState,
    useEffect,
    useMemo,
    useContext,
    createContext,
  } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import axios from "axios";
  
  // const BASE_URL = "http://3.66.164.112:8080/api/v1/user";
  const BASE_URL = "http://localhost:5000/api/v1/user";
  
  const Login = async (creds) => {
    try {
      const response = await axios.post(BASE_URL + "/login", creds, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const getCurrentUser = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      if(!token) return
      const response = await axios.get(BASE_URL + "/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
      });
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const AuthContext = createContext({});
  
  export function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const location = useLocation();
    const nav = useNavigate();
  
    useEffect(() => {
      if (error) setError(null);
    }, [location.pathname]);
  
    // useEffect(() => {
    //   getCurrentUser()
    //     .then((user) => setUser(user))
    //     .catch((_error) => {})
    //     .finally(() => setLoadingInitial(false));
    // }, []);
  
    useEffect(() => {
      getCurrentUser()
        .then((user) => setUser(user))
        .catch((_error) => {})
        .finally(() => setLoadingInitial(false));
    }, []);
  
    function login(creds) {
      setLoading(true);
      // console.log(creds);
      Login(creds)
        .then((user) => {
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
          nav("/", { replace: true });
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  
    function logout() {
      setUser(undefined);
      localStorage.removeItem("user");
      nav("/login", { replace: true });
    }
  
    function getToken(){
      const user = JSON.parse(localStorage.getItem("user"));
      if(!user) logout();
      const token = user.token
      return token;
    }
  
    const memoedValue = useMemo(
      () => ({
        user,
        loading,
        error,
        login,
        logout,
        getToken,
      }),
      [user, loading, error]
    );
    return (
      <AuthContext.Provider value={memoedValue}>
        {!loadingInitial && children}
      </AuthContext.Provider>
    );
  }
  
  export default function useAuth() {
    return useContext(AuthContext);
  }
  