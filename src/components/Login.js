import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

const Login = () => {
  return (
    <div className="container">
      <motion.div className="wrapper" transition={{ duration: 0.5, ease: "linear" }} initial={{ opacity: 0, x: 200 }} animate={{ opacity: 100, x: 0 }} exit={{ opacity: 0, x: -100 }}>
        <span className="logo">Chit Chat</span>
        <span className="title">LogIn</span>
        <form action="">
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />

          <button>Log In</button>
        </form>
        <p>
          Don't have an account ? <Link to="/register">SignUp</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
