import React from "react";
import { Link, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
