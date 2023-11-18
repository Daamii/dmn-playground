import React from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import { CollapsableButton } from "../components/CollapsableButton/index";

export const Playground = () => {
  return (
    <>
      Here is the playground
      <div className="container">
        <CollapsableButton></CollapsableButton>
      </div>
      <Link to="/">{"<"}</Link>
    </>
  );
};
