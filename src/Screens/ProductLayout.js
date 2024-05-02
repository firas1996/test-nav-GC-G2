import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Products/1">Products 1</Link>
          </li>
          <li>
            <Link to="/Products/2">Products 2</Link>
          </li>
          <li>
            <Link to="/Products/add">Add Product</Link>
          </li>
        </ul>
      </nav>
      <Outlet context={{ id: 123 }} />
    </>
  );
};

export default ProductLayout;
