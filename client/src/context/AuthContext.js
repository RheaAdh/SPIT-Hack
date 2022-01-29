import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TOKEN_ID } from "../utils/constants";
import axios from "axios";
import Loading from "../components/Loading";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const location = useLocation();

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let tokenid = localStorage.getItem(TOKEN_ID);
    if (tokenid && !user) {
      setLoading(true);
      axios({
        method: "get",
        url: `http://localhost:5000/api/auth/user/${tokenid}`,
      }).then((result) => {
        if (result.data.success) {
          setLoading(false);
          setUser(result.data.data);
          navigate(location);
        } else {
          setLoading(false);
          navigate("/");
        }
      });
    }
    if (!user) {
      if (user);
      else {
      }
    }
  }, []);

  if (loading) {
    return (
      <div className="screen-center">
        <Loading />
      </div>
    );
  }

  const login = (user, jwttoken) => {
    setUser(user);
    localStorage.setItem(TOKEN_ID, jwttoken);
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem(TOKEN_ID);
      navigate("/");
    } catch (err) {
      throw err;
    }
  };

  const value = {
    user,
    setUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
