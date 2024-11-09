import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import img1 from "../asset/client_1.png";
import img2 from "../asset/client_2.png";
import img3 from "../asset/client_3.png";
import img4 from "../asset/client_4.png";
import img5 from "../asset/client_5.png";

function Clients() {
  return (
    <React.Fragment>
      <section id="client-section">
        <h1 className="h-primary center">Our Clients</h1>
        <div id="clients">
          <div className="client-item">
            <Image className="img" width={900} height={900} src={img1} alt="Our Client 1" />
          </div>
          <div className="client-item">
            <Image className="img" width={900} height={900} src={img2} alt="Our Client 2" />
          </div>
          <div className="client-item">
            <Image className="img" width={900} height={900} src={img3} alt="Our Client 3" />
          </div>
          <div className="client-item">
            <Image className="img" width={900} height={900} src={img4} alt="Our Client 4" />
          </div>
          <div className="client-item">
            <Image className="img" width={900} height={900} src={img5} alt="Our Client 5" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Clients;
