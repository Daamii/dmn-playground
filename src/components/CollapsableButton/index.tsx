import React, { ReactNode, useState } from "react";
import "./index.scss";
import { MdDone } from "react-icons/md";

interface props {
  children?: ReactNode;
  onClick?: () => void;
}

export const CollapsableButton: React.FC<props> = ({ children, onClick }) => {
  const [collapse, setCollapse] = useState(false);

  const handleClick = () => {
    children && setCollapse(!collapse);
    onClick && onClick();
  };

  return (
    <div
      className={`cube ${collapse ? "cube__no-text" : ""}`}
      onClick={handleClick}
    >
      <MdDone className="cube__icon" />
      {children && (
        <div className={`cube__text ${collapse ? "cube__text__hidden" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
};
