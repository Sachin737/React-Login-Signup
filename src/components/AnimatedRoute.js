import React from "react";
import "../App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "../style.scss";
import Register from "./Register";
import Login from "./Login";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

function AnimatedRoute() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Login></Login>} />
        <Route exact path="/register" element={<Register></Register>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoute;
