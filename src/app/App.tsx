import React from "react";
// @ts-ignore: allow importing CSS without type declarations
import "../css/index.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import { Link, Route, Routes } from "react-router-dom";

import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { UserPage } from "./screens/userPage";
import { OrdersPage } from "./screens/ordersPage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/products">ProductsPage</Link>
          </li>
          <li>
            <Link to="/orders">OrdersPage</Link>
          </li>
          <li>
            <Link to="/member-page">UserPage</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/member-page" element={<UserPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
