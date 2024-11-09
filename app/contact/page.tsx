import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

function Contact() {
  return (
    <React.Fragment>
      <section id="contact">
        <h1 className="h-primary center">Contact Us</h1>
        <div id="contact-box">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" placeholder="Enter your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number: </label>
              <input type="number" name="number" id="number" placeholder="Enter your Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message: </label>
              <textarea name="message" id="message" cols={30} rows={10}></textarea>

            </div>
          </form>
        </div>
      </section>
      
    </React.Fragment>
  );
}

export default Contact;
