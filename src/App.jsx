import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
// import Products from "./pages/Products";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom'
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state=> state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route excat path="/" element={<Home />} />
        <Route excat path="/products/:category" element={<ProductList />} />
        <Route excat path="/product/:id" element={<Product />} />
        <Route excat path="/cart" element={<Cart />} />
        <Route excat path="/login" element={user ? redirect("/register") : <Login />} />
        {/* <Route excat path="/login" element={<Login/>}/> */}
        <Route excat path="/register" element={<Register />} />
        <Route excat path="/success" element={<Success />} />
      </Routes>
    </Router>
  )
};

export default App;