import React from "react";

const About = () => {
  return (
    <section className="bg-base-100 py-20 px-4 sm:px-6 lg:px-8 my-10 rounded-4xl">
      <div className="">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary">About Us</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
          </p>
          <div className="mt-6 w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

    
        <div className="flex flex-col lg:flex-row gap-1 items-center">
        
          <div className="flex-1">
            <p className="text-lg leading-relaxed">
              We started with a simple promise — to make parcel delivery fast, reliable, and stress-free.
              Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it’s a personal gift or a
              time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
            </p>
          </div>

    
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
           
            <div className="border border-primary rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <h4 className="text-xl font-semibold mb-2">Our Story</h4>
              <p className="text-sm text-gray-400">
                From startup roots to national growth, our journey has always focused on customer satisfaction.
              </p>
            </div>
        
            <div className="border border-primary rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
              <p className="text-sm text-gray-400">
                Delivering excellence at every doorstep through innovation and integrity.
              </p>
            </div>
         
            <div className="border border-primary rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <h4 className="text-xl font-semibold mb-2">Our Success</h4>
              <p className="text-sm text-gray-400">
                Thousands of deliveries daily. Countless smiles earned. Milestones achieved.
              </p>
            </div>
          
            <div className="border border-primary rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <h4 className="text-xl font-semibold mb-2">Our Team</h4>
              <p className="text-sm text-gray-400">
                Powered by dedicated professionals, working round-the-clock for your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
