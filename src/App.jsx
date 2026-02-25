import React from "react";
import Navbar from "./components/layout/Navbar";
import { Home } from "./components/layout/Home";
import Footer from "./components/layout/Footer";


export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};
