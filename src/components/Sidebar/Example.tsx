import React from "react";
import { ActionElement, Sidebar } from ".";

export const SidebarExample = () => {
  const options = [
    {
      name: "option 1",
      action: () => {
        console.log("option 1");
      },
    },
    {
      name: "option 2",
      action: () => {
        console.log("option 2");
      },
    },
  ] as Array<ActionElement>;

  const footer = {
    name: "footer",
    action: () => {
      console.log("you clicked the footer");
    },
  } as ActionElement;

  return <Sidebar title={"title"} options={options} footer={footer} />;
};
