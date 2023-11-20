import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ActionElement, Sidebar } from "../components/Sidebar";

import "./layout.scss";

export const Layout = () => {
  const navigate = useNavigate();

  const options = [
    {
      name: "Home",
      action: () => {
        navigate("/home");
      },
    },
    {
      name: "Playground",
      action: () => {
        navigate("/playground");
      },
    },
  ] as Array<ActionElement>;

  const footer = {
    name: "welcome to playground",
  } as ActionElement;

  return (
    <div className="layout">
      <div className="layout__sidebar">
        <Sidebar title={"Playground app"} options={options} footer={footer} />
      </div>
      <div className="layout__content">
        <Outlet />
      </div>
    </div>
  );
};
