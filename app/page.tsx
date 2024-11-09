import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <section id="home">
        <h1 className="h-primary">
          Welcome to my Online Meal
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid soluta aspernatur adipisci deserunt harum
          et distinctio praesentium blanditiis eveniet impedit.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button className="btn">Order Now</button>
      </section>
      <Footer/>
    </React.Fragment>
  );
}
