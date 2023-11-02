import React, { useState } from "react";
import "./cubo.scss";
import { MdDone } from "react-icons/md";

export const Cubo = () => {
  const [collapse, setCollapse] = useState(false);
  console.log(collapse);
  return (
    <div className="cube" onClick={() => setCollapse(!collapse)}>
      <MdDone className="cube__icon" />
      <div className="cube__text">Cubo</div>
    </div>
  );
};
