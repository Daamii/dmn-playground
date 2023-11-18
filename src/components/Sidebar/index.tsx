import React, { useState } from "react";
import { MdDensityMedium } from "react-icons/md";

import "./index.scss";

export interface ActionElement {
  name: string;
  action?: () => void;
}

interface Props {
  title: string;
  options: Array<ActionElement>;
  footer?: ActionElement;
}

export const Sidebar: React.FC<Props> = ({
  title,
  options: bodyElements,
  footer,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>
        <div className="sidebar__header">
          <div
            className={`sidebar__header__text ${
              collapsed ? "sidebar__header__text--collapsed" : ""
            }`}
          >
            {title}
          </div>
          <div className="sidebar__header__button">
            <MdDensityMedium onClick={() => setCollapsed(!collapsed)} />
          </div>
        </div>
        <div
          className={`sidebar__body ${
            collapsed ? "sidebar__body--collapsed" : ""
          }`}
        >
          {bodyElements?.map((opt) => (
            <div
              key={opt.name}
              onClick={opt?.action}
              className="sidebar__body__element"
            >
              {opt?.name}
            </div>
          ))}
        </div>

        {footer && (
          <div
            className={`sidebar__footer ${
              collapsed ? "sidebar__footer--collapsed" : ""
            }`}
          >
            <div onClick={footer?.action}>{footer?.name}</div>
          </div>
        )}
      </div>
    </>
  );
};
