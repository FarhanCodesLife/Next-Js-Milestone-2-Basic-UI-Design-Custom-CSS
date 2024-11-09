import React from "react";
import ServiceCard from "../components/ServiceCard";
import img1 from "../asset/1_1.png";
import img2 from "../asset/2.png";
import img3 from "../asset/3.png";

function Services() {
  return (
    <React.Fragment>
      <section id="services-container">
        <h1 className="h-primary center">Our Services</h1>
        <div id="services">
          <ServiceCard
            image={img1}
            title="Food Catering"
            description="Welcome to our premier food catering service, where culinary excellence meets unparalleled hospitality! Elevate your event to new heights with our meticulously crafted menus, personalized to suit your tastes and preferences. Whether it's an intimate gathering or a grand celebration, our team of skilled chefs and dedicated staff is committed to exceeding your expectations. Experience the difference that exceptional food catering can make for your next event. Contact us today to discuss your requirements and let us turn your vision into reality. With us, your event will not only be memorable – it will be unforgettable."
          />
          <ServiceCard
            image={img2}
            title="Bulk Ordering"
            description="Welcome to our bulk ordering service, where convenience meets cost-effectiveness!
                    Whether you're a business, organization, or individual, our platform makes procuring goods on a
                    large scale a breeze. With bulk ordering, you can save time, money, and hassle by purchasing your
                    essentials in larger quantities.Why settle for small quantities when you can stock up and save? Our
                    bulk ordering service is perfect for businesses looking to maintain adequate inventory levels, event
                    planners preparing for large gatherings, and individuals looking to save on everyday essentials.
                    Join the bulk buying revolution today and experience the convenience of one-stop shopping delivered
                    right to your doorstep!"
          />
          <ServiceCard
            image={img3}
            title="Food Ordering"
            description="Welcome to our hassle-free food ordering platform, where delicious meals are just a
                    click away! Whether you're craving your favorite cuisine or seeking culinary inspiration, our
                    website offers a diverse selection of mouthwatering options from local restaurants and eateries.Join
                    the countless satisfied customers who rely on our food ordering platform for quick, convenient, and
                    satisfying meals. Whether you're dining solo, feeding a crowd, or hosting an event, let us handle
                    the logistics while you savor the flavors. Order now and treat yourself to a culinary experience
                    like no other!"
          />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Services;
