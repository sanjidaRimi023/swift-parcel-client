import React from "react";
import merchantBg from "../../assets/be-a-merchant-bg.png";
import merchantImg2 from "../../assets/location-merchant.png";

const Merchant = () => {
  return (
    <div data-aos="flip-left" className="container mx-auto px-4">
      <div className="relative w-full overflow-hidden bg-secondary rounded-4xl mb-10 lg:p-20 md:p-12 p-6 text-white">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 h-40 sm:h-56 md:h-64 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${merchantBg})` }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          {/* Text Area */}
          <div className="w-full lg:max-w-xl space-y-6 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              Merchant and Customer Satisfaction is Our First Priority
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. SwiftParcel delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="btn btn-primary text-secondary rounded-full w-full sm:w-auto">
                Become a Merchant
              </button>
              <button className="btn border-primary text-secondary rounded-full w-full sm:w-auto">
                Earn with SwiftParcel
              </button>
            </div>
          </div>

          {/* Image Area */}
          <div className="w-full lg:w-1/2">
            <img
              src={merchantImg2}
              alt="Merchant Location"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
