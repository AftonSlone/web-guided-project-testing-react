import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import MissionsList from "./components/MissionsList";

// async/await
test("render without errors", async () => {
  render(<App />);

  // assert there are no MissionsList

  // click on button
  userEvent.click(screen.getByRole("button", { name: /get data/i }));

  // assert that missions data is rendering
  // clicking the button results in an async call to an API
  // we need to WAIT for the data to come back before making assertions
  await waitFor(async () => await screen.findByText(/thaicom/i));

  expect().toBeInTheDocument();
});
