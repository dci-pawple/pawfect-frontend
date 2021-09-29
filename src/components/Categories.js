import React from "react";
import { Link } from "react-router-dom";


const iconNames = ["dog", "cat", "dragon"];

const Categories = () => {
  const renderButtons = iconNames.map((item) => {
    return (
      <Link className="categories-btn" key={item} to={`/gallery/${item==="dragon"? "others":item}`}>
        <i className={`fas fa-${item} fa-3x`}></i>
      </Link>
    );
  });

  return (
    <div>
      <div className="categories">{renderButtons}</div>
    </div>
  );
};

export default Categories;
