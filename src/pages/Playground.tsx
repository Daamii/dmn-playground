import React from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import { CollapsableButton } from "../components/CollapsableButton/index";
import { CollapsableListExample } from "../components/CollapsableList/example";

export const Playground = () => {
  return (
    <>
      Here is the playground
      <div className="container">
        <CollapsableButton></CollapsableButton>
        <CollapsableListExample />
      </div>
      <Link to="/">{"<"}</Link>
    </>
  );
};
