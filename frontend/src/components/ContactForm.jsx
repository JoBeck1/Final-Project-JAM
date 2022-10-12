import React, { Component } from "react";
import "../styles/contact.css";

export default class ContactUs extends Component {
  render() {
    return (
      <div
        id="contactBox"
        style={{
          paddingTop: "150px",
          marginTop: "200px",
          marginBottom: "600px",
          position: "block",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "300px",
          backgroundColor: "#146fb9",
          zIndex: "0",
        }}
      >
        <div id="contact">
          <h1
            style={{
              textDecoration: "underline",
              marginTop: "80px",
              marginBottom: "80px",
              color: "#639cdd",
            }}
          >
            CONTACT
          </h1>

          <form
            target="_blank"
            action="https://formsubmit.co/1a5f7078b20d2f972662ccd4a6e13d1c"
            method="POST"
          >
            <input
              required
              name="name"
              type="text"
              placeholder="Name"
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "50px",
                backgroundColor: "#494d58",
                zIndex: "0",
                color: "white",
                border: "none",
                borderBottom: "1px solid white",
                outline: "none",
                fontSize: "20px",
                marginBottom: "20px",
                borderRadius: "5px",
              }}
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "50px",
                backgroundColor: "#494d58",
                zIndex: "0",
                color: "white",
                border: "none",
                borderBottom: "1px solid white",
                outline: "none",
                fontSize: "20px",
                marginBottom: "20px",
                borderRadius: "5px",
              }}
            />
            <textarea
              required
              name="message"
              rows="5"
              placeholder="Your Message"
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "150px",
                backgroundColor: "#494d58",
                zIndex: "0",
                color: "white",
                border: "none",
                borderBottom: "1px solid white",
                outline: "none",
                fontSize: "20px",
                marginBottom: "20px",
                borderRadius: "5px",
              }}
            />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you! your message has been received and I will reply to you as soon as possible. Have a nice day :)"
            />
            <input type="hidden" name="_subject" value="Message received" />
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
                cursor: "pointer",
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
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
