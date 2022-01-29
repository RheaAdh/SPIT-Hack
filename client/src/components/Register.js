import React, { useState, useContext, useEffect } from "react";
import { Redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const auth = useAuth();

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [err, setErr] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (fullName == "") {
      toast.error("Please Enter your Name");
      return;
    }
    if (username == "") {
      toast.error("Please Enter your userame");
      return;
    }
    const regex1 = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

    if (!regex1.test(String(username))) {
      toast.error("Invalid Username");
      return;
    }
    if (email == "") {
      toast.error("Please Enter your Email");
      return;
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(email).toLowerCase())) {
      // setErr("Invalid Email");
      toast.error("Invalid Email");
      return;
    }

    if (password == "") {
      // setErr("Please Enter your Password");
      toast.error("Please Enter your Password");
      return;
    }
    if (password.length < 8) {
      // setErr("try again(min length: 8)");
      toast.error("try again(min length: 8)");
      return;
    }

    axios({
      method: "post",
      url: "http://localhost:5000/api/auth/register",
      data: {
        fullName,
        email,
        username,
        password,
      },
    })
      .then((result) => {
        if (result.data.success === true) {
          navigate("/");
        } else {
          // setErr(result.data.data);
          toast.error(result.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>

      <form onSubmit={handleFormSubmit}>
        <h2>Register</h2>
        <div>
          <label for="username">Full Name</label>
          <input
            placeholder="Full name"
            type="text"
            onChange={(e) => setFullName(e.target.value)}
          ></input>
        </div>
        <div>
          <label for="username">Username</label>
          <input
            placeholder="Username(no space)"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label for="email">Email</label>
          <input
            placeholder="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label for="password">Password</label>
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
