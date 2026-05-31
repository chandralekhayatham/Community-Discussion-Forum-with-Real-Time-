import React from "react";
import { Link } from "react-router-dom";

function DiscussionCard({ title, category }) {
  return (
    <Link
      to="/discussion"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card">
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
    </Link>
  );
}

export default DiscussionCard;