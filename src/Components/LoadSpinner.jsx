import React from "react";
import { ScaleLoader } from "react-spinners";

const LoadSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ScaleLoader
        barCount={7}
        color="#94f609"
        height={50}
        loading
        speedMultiplier={1}
        width={5}
      />
    </div>
  );
};

export default LoadSpinner;
