import React from "react";
import bookingIcon from "../../assets/bookingIcon.png";

const steps = [
  {
    id: 1,
    img: bookingIcon,
    title: "Place Your Order",
    description:
      "Choose your product and place your order easily from our platform.",
  },
  {
    id: 2,
    img: bookingIcon,
    title: "Package Processed",
    description: "We pack your order securely at our warehouse for shipment.",
  },
  {
    id: 3,
    img: bookingIcon,
    title: "Fast Shipping",
    description: "Our delivery agents ship your order quickly and safely.",
  },
  {
    id: 4,
    img: bookingIcon,
    title: "Delivered to You",
    description: "Get your package at your doorstep on time, hassle-free.",
  },
];
const HowWork = () => {
  return (
    <>
      <section
        data-aos="zoom-in"
        className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl text-secondary font-bold mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="text-secondary rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-primary"
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-10 h-10 mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowWork;
