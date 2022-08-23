import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Programs from "./pages/Programs";
import Nutrition from "./pages/Nutrition";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import DashboardOutlet from "./pages/outlets/DashboardOutlet";
import AccountOutlet from "./pages/outlets/AccountOutlet";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="dashboard/" element={<DashboardOutlet />}>
            <Route path="home" element={<Home />} />
            <Route path="exercises" element={<Exercises />} />
            <Route path="programs" element={<Programs />} />
            <Route path="nutrition" element={<Nutrition />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="account/" element={<AccountOutlet />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
