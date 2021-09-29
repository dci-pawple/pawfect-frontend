import React from "react";
import { Link } from "react-router-dom";

const iconNames = [
  { type: "dog", text: "DOGS" },
  { type: "cat", text: "CATS" },
  { type: "dragon", text: "OTHERS" },
];

const Categories = () => {
  const renderButtons = iconNames.map((item) => {
    return (
      <div>
        <Link
          className="categories-btn"
          key={item.type}
          to={`/gallery/${item.type === "dragon" ? "others" : item.type}`}
        >
          <i className={`fas fa-${item.type} fa-3x`}></i>
        </Link>
        <p>{item.text}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="categories">{renderButtons}</div>
    </div>
  );
};

export default Categories;
