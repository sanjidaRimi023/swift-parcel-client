import React from "react";
import img1 from "../../assets/delivery.png";
import img2 from "../../assets/safe-delivery.png";
import img3 from "../../assets/live-tracking.png";

const benefits = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: img3,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: img1,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: img2,
  },
];
const Benefit = () => {
  return (
    <>
      <div>
        <section className="py-16 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-secondary">
              Why Choose Us?
            </h2>

            <div className="flex flex-col gap-6">
              {benefits.map((benefit) => {
                
                return (
                  <div
                    key={benefit.id}
                    className="lg:flex items-center gap-6 bg-base-200 p-10 rounded-xl shadow-md hover:shadow-lg transition duration-300 relative"
                  >
                    <div className="flex flex-col items-center relative">
                      <div className="bg-primary/10 p-4 rounded-full z-10">
                        <img className="w-50 object-contain"  src={benefit.image} alt="" />
                      </div>
                    </div>
                    <div className="hidden lg:block border-l-2 border-dashed border-secondary h-36 mx-4"></div>


                    <div className="flex flex-col justify-center text-secondary">
                      <h3 className="text-lg font-semibold">
                        {benefit.title}
                      </h3>
                      <p className="text-sm mt-2">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Benefit;
