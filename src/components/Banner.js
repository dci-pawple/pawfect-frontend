import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Banner = () => {
  const myRef = document.querySelector(".banner-container");

  return (
    <div className="banner">
      <div className="banner-container container">
        <h1 className="banner-h1">Adopt New Pet </h1>
        <h1 className="banner-h1">
          <TypeWriterEffect
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={["Dogs", "and", "Cats", "Get new friend"]}
            multiTextDelay={1000}
            typeSpeed={200}
            hideCursorAfterText="0"
          />
        </h1>
      </div>
    </div>
  );
};

export default Banner;
