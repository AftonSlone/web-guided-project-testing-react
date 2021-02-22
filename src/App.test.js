import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import MissionsList from "./components/MissionsList";

test("render without errors", () => {
  render(<App />);

  // assert there are no MissionsList

  // click on button
  userEvent.click(screen.getByRole("button", { name: /get data/i }));

  // assert that missions data is rendering
});
