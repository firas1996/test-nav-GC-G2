import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import Products from "./Screens/Products";
import NotFound from "./Screens/NotFound";
import ProductDetails from "./Screens/ProductDetails";
import AddProduct from "./Screens/AddProduct";
import ProductLayout from "./Screens/ProductLayout";

function App() {
  const role = localStorage.getItem("role");
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          {role === "admin" && (
            <li>
              <Link to="/Products">Products</Link>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Products" element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
          <Route path="add" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
