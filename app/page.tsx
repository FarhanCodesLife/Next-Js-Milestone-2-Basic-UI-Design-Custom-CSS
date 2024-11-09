import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import "./globals.css";
export default function Home() {
  return (
    <React.Fragment>
      <section id="home">
        <h1 className="h-primary">
          Welcome to my Online Meal
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid soluta aspernatur adipisci deserunt harum
          et distinctio praesentium blanditiis eveniet impedit.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button className="btn">Order Now</button>
      </section>
    </React.Fragment>
  );
}
