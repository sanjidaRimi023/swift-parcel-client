import React from "react";
import Marquee from "react-fast-marquee";
import logo2 from "../../assets/brands/amazon_vector.png";
import logo1 from "../../assets/brands/amazon.png";
import logo3 from "../../assets/brands/casio.png";
import logo4 from "../../assets/brands/moonstar.png";
import logo5 from "../../assets/brands/randstad.png";
import logo6 from "../../assets/brands/start-people 1.png";
import logo7 from "../../assets/brands/start.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientSlider = () => {
  return (
    <section className="py-10 my-10">
      <h2 className="text-center text-2xl font-bold mb-6 text-secondary">
        We've helped thousands of sales teams
      </h2>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="left"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-24 w-32 h-16 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`client-logo-${index}`}
              className="h-6 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ClientSlider;
