import React from "react";
import { render, screen } from "@testing-library/react";
import MissionsList from "./MissionsList";

test("renders without errors", () => {
  render(<MissionsList missions={[]} />);
});

test("re-render properly with missions data", () => {
  render(<MissionsList missions={[]} />);

  // first assert there are NO missions in the UI
  expect(screen.queryByText(/thaicom/i)).not.toBeNull();

  // re-render comp with new props

  // assert that missions are renderd in UI
});
