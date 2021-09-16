import React from "react";
import Image from "next/image"

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1626735924/mountain-547363_jrh8ct.jpg"
        className="hero-image"
      />
      <h1 className="headline"> What resonates with you?</h1>
    </div>
  );
};

export default Hero;
