import React from "react";
import { CollapsableList } from "./index";

export const CollapsableListExample = () => {
  const list = ["1111", "2222", "3333", "4444"];
  return <CollapsableList elements={list} title={"numbers"} />;
};
