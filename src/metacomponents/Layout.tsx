import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
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
      <div className="layout__header">
        <Header title="title" />
      </div>
      <div className="layout__mainframe">
        <div className="layout__mainframe__sidebar">
          <Sidebar title={"Playground app"} options={options} footer={footer} />
        </div>
        <div className="layout__mainframe__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
