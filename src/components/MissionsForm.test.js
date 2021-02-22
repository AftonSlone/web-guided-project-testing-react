import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MissionForm from "./MissionForm";

// mock functions being passed to the comp
const getDataMock = jest.fn(); // () => {}, but with super powers

test("shows loading message when button is clicked", () => {
  const { rerender } = render(<MissionForm getData={getDataMock} />);

  // test that loading message is NOT in the UI
  expect(screen.queryByText(/we are fetching data/i)).toBeNull();

  // query for the get data button
  // click the button - userEvent.click (DID NOT LIKE IT)
  userEvent.click(screen.getByRole("button", { name: /get data/i }));
  expect(getDataMock).toHaveBeenCalled();
  expect(getDataMock).toHaveBeenCalledTimes(1);
  expect(getDataMock.mock.calls.length === 1);
  expect(getDataMock.mock.calls.length).toBe(1);
  expect(getDataMock.mock.calls).toHaveLength(1);

  // rerender(<MissionForm getData={getDataMock} isFetchingData={true} />);

  // test that the loading message IS in the UI
  expect(screen.findByText(/we are fetching data/i)).not.toBeNull();
});
