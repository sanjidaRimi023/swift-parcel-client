import React from "react";

const LoadSpinner = () => {
  return (
    <div>
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
