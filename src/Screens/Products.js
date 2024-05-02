import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("role") != "admin") {
      navigate("/");
    }
  }, []);
  return <div>Products List Screen</div>;
};

export default Products;
