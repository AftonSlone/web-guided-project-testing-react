import React from "react";
import { render, screen } from "@testing-library/react";
import MissionsList from "./MissionsList";

const missionsData = [
  {
    mission_name: "Thaicom",
    mission_id: "9D1B7E0",
  },
  {
    mission_name: "Telstar",
    mission_id: "F4F83DE",
  },
  {
    mission_name: "Iridium NEXT",
    mission_id: "F3364BF",
  },
];

test("renders without errors", () => {
  render(<MissionsList missions={[]} />);
});

test("re-render properly with missions data", () => {
  const { rerender } = render(<MissionsList missions={[]} />);

  // first assert there are NO missions in the UI
  expect(screen.queryByText(/thaicom/i)).toBeNull();

  // re-render comp with new props
  rerender(<MissionsList missions={missionsData} />);

  // assert that missions are renderd in UI
});
