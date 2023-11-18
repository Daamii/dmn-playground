import React, { useState } from "react";
import "./cubo.scss";
import { MdDone } from "react-icons/md";

export const CollapsableButton = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div
      className={`cube ${collapse ? "cube__no-text" : ""}`}
      onClick={() => setCollapse(!collapse)}
    >
      <MdDone className="cube__icon" />
      <div className={`cube__text ${collapse ? "cube__text__hidden" : ""}`}>
        TEXT
      </div>
    </div>
  );
};
