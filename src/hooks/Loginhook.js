import { jwtDecode } from "jwt-decode";
import React from "react";
import { useAuthcontext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Loginhook() {
  const { setAuth } = useAuthcontext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = async (values) => {
    try {
      const res = await axios.post("/users/authuser", {
        username: values.username,
        password: values.password,
      });

      const jwtuser = jwtDecode(res.data.accesstoken);
      console.log(jwtuser, "jwtuser");
      localStorage.setItem("token", JSON.stringify(res.data.accesstoken));
      localStorage.setItem("role", JSON.stringify([425]));
      localStorage.setItem(
        "username",
        JSON.stringify(jwtuser.UserInfo.username)
      );
      setAuth({
        username: jwtuser.UserInfo.username,
        role: jwtuser.UserInfo.role,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return { handleLogin };
}

export default Loginhook;
