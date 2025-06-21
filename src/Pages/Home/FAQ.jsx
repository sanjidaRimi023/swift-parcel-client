import React from "react";

const FAQ = () => {
  return (
    <>
      <div data-aos="fade-up">
        <h3 className="text-4xl text-secondary font-bold text-center">
          Frequently Asked Question (FAQ)
        </h3>
        <p className="text-sm text-secondary text-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        <div className="my-10 text-secondary">
          <div
            data-aos="fade-right"
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              1. How can I track my parcel in real-time?
            </div>
            <div className="collapse-content text-sm">
              Our live parcel tracking system lets you monitor your shipment
              from pickup to delivery. Just use your tracking number to get
              real-time updates.
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Do you deliver outside major cities?
            </div>
            <div className="collapse-content text-sm">
              Yes! We offer nationwide delivery to every district in Bangladesh
              within 48–72 hours.
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Is my parcel safe during transit?
            </div>
            <div className="collapse-content text-sm">
              Absolutely. We guarantee 100% safe delivery with secure handling
              and damage-free transit for every parcel.
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How do I return or exchange a parcel?
            </div>
            <div className="collapse-content text-sm">
              We offer reverse logistics that allow your customers to return or
              exchange products directly through our platform.
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              What happens if my parcel gets delayed or lost?
            </div>
            <div className="collapse-content text-sm">
              In the rare case of delays or issues, our 24/7 support team is
              ready to assist you and resolve any concerns.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
