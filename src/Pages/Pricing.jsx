import React from "react";

const pricingPlans = [
  {
    title: "Basic",
    price: "৳49",
    features: [
      "Parcel tracking available",
      "Delivery within 3-5 days",
      "Limited support (9AM - 5PM)",
      "Upto 2kg parcel",
    ],
    recommended: false,
  },
  {
    title: "Standard",
    price: "৳99",
    features: [
      "Real-time tracking",
      "Faster delivery (1-2 days)",
      "24/7 Support",
      "Insurance upto ৳5000",
    ],
    recommended: true,
  },
  {
    title: "Premium",
    price: "৳199",
    features: [
      "Same day delivery",
      "Dedicated customer support",
      "Priority handling",
      "Insurance upto ৳20000",
    ],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Pricing Plans</h2>
        <p className="text-base-content mb-12">
          Choose a plan that fits your parcel delivery needs. Transparent
          pricing, no hidden charges.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`card border border-primary p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
                plan.recommended
                  ? "border-primary bg-primary/10"
                  : "bg-base-200"
              }`}
            >
              <div className="card-body items-center text-center space-y-4">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="text-3xl font-extrabold text-primary">
                  {plan.price}
                </p>
                <ul className="space-y-2 text-sm text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-secondary btn-sm mt-4">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
