import React from "react";
import Header from "../Components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Success from "./Success";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact/Contact";
import Register from "../Components/Register/Register";
import Signin from "../Components/Signin/Signin";

function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route>
          <Route path="/course" element={<Dashboard />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/">
            <Route path="" element={<Checkout />} />
            <Route path=":id" element={<Checkout />} />
          </Route>
        </Route>
        <Route path="/success" element={<Success />} />
        <Route path="/" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
