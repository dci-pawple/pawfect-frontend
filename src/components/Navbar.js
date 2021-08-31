import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navigation">
      <Link to="/">
        <p>Hi</p>
      </Link>
    </div>
  );
}
