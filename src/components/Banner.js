import React from "react";
import { Link } from "react-router-dom";
import TypeWriterEffect from "react-typewriter-effect";

const Banner = () => {
  const myRef = document.querySelector(".banner-container");

  return (
    <div className="banner">
      <div className="banner-container container">
        <h1 className="banner-h1">Find a new friend</h1>
        <h1 className="banner-h1">
          <TypeWriterEffect
            startDelay={0}
            cursorColor="#3F3D56"
            multiText={[
              "Dogs",
              "Cats",
              // "Find a new friend",
              "Find your pawfect friend",
            ]}
            multiTextDelay={1000}
            typeSpeed={200}
            hideCursorAfterText="0"
          />
        </h1>
        <Link to="/gallery">
          <button className="primary-button">Explore pets</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
