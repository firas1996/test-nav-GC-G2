import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return <div>ProductDetails Screen: {id} </div>;
};

export default ProductDetails;
