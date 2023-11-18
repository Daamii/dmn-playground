import React, { useState } from "react";

import "./index.scss";

interface props {
  elements: Array<string>;
  title: string;
}

export const CollapsableList: React.FC<props> = ({ elements, title }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="list">
      <div onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "v " : "ˆ "}
        <span className="list__title">{title}:</span>
      </div>
      {!collapsed && (
        <ul>
          {elements?.map((le, index) => (
            <li key={index}>{le}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
