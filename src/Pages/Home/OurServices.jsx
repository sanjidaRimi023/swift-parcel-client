import React from "react";
import {
  Rocket,
  Globe,
  PackageCheck,
  HandCoins,
  Building2,
  RotateCcw,
} from "lucide-react";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: Rocket,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: Globe,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: PackageCheck,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: HandCoins,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: Building2,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: RotateCcw,
  },
];

const OurServices = () => {
  return (
    <section className="py-16 bg-secondary text-center rounded-2xl mb-10">
      <div className="px-4">
        <h2 className="lg:text-4xl text-white font-bold mb-4">Our Services</h2>
        <p className="mb-10 text-white max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
      100, every time.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card bg-base-200 group text-secondary hover:bg-primary transition duration-300 shadow-md"
              >
                <div className="card-body items-center text-center">
                
                  <div className="bg-primary/10 p-4 rounded-full mb-4 transition duration-300 group-hover:bg-white">
                    <Icon className="w-10 h-10 text-primary transition duration-300 group-hover:text-primary" />
                  </div>

            
                  <h3 className="card-title text-lg font-semibold group-hover:text-secondary">
                    {service.title}
                  </h3>
                  <p className="text-sm group-hover:text-secondary">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
