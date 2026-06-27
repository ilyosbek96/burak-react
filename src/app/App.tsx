import React from "react";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { UserPage } from "./screens/userPage";
import { OrdersPage } from "./screens/ordersPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { Footer } from "./components/footer";
// @ts-ignore: allow importing CSS without type declarations
import "../css/index.css";
// @ts-ignore
import "../css/navbar.css";
import { HelpPage } from "./screens/helpPage";

function App() {
  const location = useLocation();
  console.log("location:", location);
  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/member-page" element={<UserPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
