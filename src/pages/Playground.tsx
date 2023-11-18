import React from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import { CollapsableButtonExample } from "../components/CollapsableButton/Example";
import { CollapsableListExample } from "../components/CollapsableList/example";
import { Sidebar } from "../components/Sidebar";
import { SidebarExample } from "../components/Sidebar/Example";

export const Playground = () => {
  return (
    <>
      <h3>Here is the playground</h3>
      <div className="container">
        <SidebarExample />
        <CollapsableButtonExample />
        <CollapsableListExample />
      </div>
      <Link to="/">{"<"}</Link>
    </>
  );
};
