import React from "react";
import { MdDensityMedium } from "react-icons/md";

import "./index.scss";

export interface ActionElement {
  name: string;
  action?: () => void;
}

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className={`header`}>
        <div className="header__burguer">{/* <MdDensityMedium /> */}</div>
        <div className="header__title">{title}</div>
        <div className="header__button"></div>
      </div>
    </>
  );
};
