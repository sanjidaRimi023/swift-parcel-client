import React from "react";
import CoverageMap from "../Components/CoverageMap";
import { useLoaderData } from "react-router";


const Coverage = () => {
    const districtData = useLoaderData()
    console.log(districtData);


  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-secondary mb-6">
        We are available in 64 districts
      </h2>
      <CoverageMap districtData={districtData} />
    </section>
  );
};

export default Coverage;
