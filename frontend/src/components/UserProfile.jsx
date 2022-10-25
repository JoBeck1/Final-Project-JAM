import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Context } from "../store/Store";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/userProfile.css";

// const userData = await axios.get("/user/profile")
// const user = userData.user

function UserProfile() {
  let [user, setUser] = useState();
  useEffect(async () => {
    const userData = await axios.get("/profile");
    //user = userData.data.user;
    setUser(userData.data.user);
    console.log(user);
  }, []);
  // const {user}= useContext(Context)
  let text = "click on Your name to see your information⬇️";

  let letters = Array.from(text);
  const clickHierContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/");
  };

  return (
    <div className="main-profile-container">
      {user ? (
        <div className="userContainer">
          <motion.div
            className="click-hier"
            variants={clickHierContainer}
            initial="hidden"
            animate="visible"
            style={{ overflow: "hidden", fontSize: "1.8rem" }}
          >
            {" "}
            {letters.map((letter, index) => (
              <motion.span style={{ color: "#48aeda" }} variants={child}>
                {" "}
                {letter === " " ? "\u00A0" : letter}{" "}
              </motion.span>
            ))}{" "}
          </motion.div>
          <div className="box-container">
            <motion.div
              className="box"
              onClick={() => setIsOpen(!isOpen)}
              transition={{
                layout: {
                  duration: 1,
                  type: "spring",
                },
              }}
              layout
              style={{
                borderRadius: "1rem",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.5",
              }}
            >
              <motion.h2 layout="position">
                {" "}
                Hi {`${user.firstName} ${user.Surname}`}{" "}
              </motion.h2>
              {isOpen && (
                <motion.div
                  className="inside-card"
                  animate={{
                    staggerChildren: 0.4,
                    opacity: 0.8,
                    transition: { duration: 1 },
                    x: "0",
                  }}
                  initial={{ x: "-100px", opacity: 0 }}
                >
                  <h4> your name : {user.firstName} </h4>
                  <h4> your Surname: {user.Surname}</h4>
                  <h4> your Email: {user.Email} </h4>
                  <h4> your Age: {user.Age} </h4>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="not-login">
          {" "}
          <h2> you are not registered </h2>
        </div>
      )}

      <div>
        <button
          style={{
            width: "250px",
            height: "50px",
            backgroundColor: "#494d58",
            color: "white",
            border: "none",
            outline: "none",
            fontSize: "20px",
            borderRadius: "40px",
            cursor: "pointer",
            textAlign: "center",
            boxShadow: " 0 6px 20px -5px rgba(0,0,0,0.4)",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s ease",
            zIndex: "0",
            marginTop: "20px",
            marginBottom: "20px",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
          onClick={handleClick}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
