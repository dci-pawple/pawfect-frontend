import React from "react";
import { Link } from "react-router-dom";

// import dog from "../icons/dog1.png";

const iconNames = ["dog", "cat", "crow", "fish", "dragon"];

const Categories = () => {
  const renderButtons = iconNames.map((item) => {
    return (
      <Link className="categories-btn" key={item} to="/gallery">
        <i className={`fas fa-${item} fa-3x`}></i>
      </Link>
    );
  });

  return (
    <div className="container">
      <div className="categories">{renderButtons}</div>
    </div>
  );
};

export default Categories;
