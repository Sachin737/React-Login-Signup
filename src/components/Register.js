import React from "react";
import avatar from "../images/man.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

const Register = () => {
  return (
    <div className="container">
      <motion.div className="wrapper" transition={{ duration: 0.5, ease: "linear" }} initial={{ opacity: 0, x: 200 }} animate={{ opacity: 100, x: 0 }} exit={{ opacity: 0, x: -100 }}>
        <span className="logo">Chit Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" id="name" placeholder="Display name" />
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="ChooseImage" />

          <label htmlFor="ChooseImage">
            <img src={avatar} className="avatar" alt="" />
            <span>Add your avatar</span>
          </label>

          <button>Sign Up</button>
        </form>
        <p>
          Already Registered ? <Link to="/">Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
