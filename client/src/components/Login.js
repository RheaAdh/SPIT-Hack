import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Email Field empty");
    }

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(email).toLowerCase())) {
      toast.error("Invalid EmailID");
    }

    axios({
      method: "post",
      url: "http://localhost:5000/api/auth/login",
      data: {
        email,
        password,
      },
    }).then((result) => {
      console.log(result);
      if (result.data.success) {
        auth.login(result.data.user, result.data.token);
        navigate("/home");
      } else {
        toast.error(result.data.data);
      }
    });
  };

  return (
    <div className="login">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div>
          <label for="username">Email</label>
          <input
            placeholder="Enter email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label for="username">Password</label>
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
