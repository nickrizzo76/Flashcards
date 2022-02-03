import React from "react";

function Breadcrumb() {

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Something</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Else
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
