import React from "react";

// import dog from "../icons/dog1.png";

const iconNames = ["dog", "cat", "crow", "fish", "dragon"];

const Categories = () => {
  const renderButtons = iconNames.map((item) => {
    return (
      <div key={item}>
        <i className={`fas fa-${item} fa-3x`}></i>
      </div>
    );
  });

  return <div className="container categories">{renderButtons}</div>;
};

export default Categories;
