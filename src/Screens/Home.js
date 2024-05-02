import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const role = "admin";
  const login = () => {
    localStorage.setItem("role", role);
    if (role === "admin") {
      navigate("Products");
    } else {
      navigate("profile");
    }
  };
  return (
    <>
      <div>Home Screen</div>
      <button onClick={login}>Login</button>
    </>
  );
};

export default Home;
