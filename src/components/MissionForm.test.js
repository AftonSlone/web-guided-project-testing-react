import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MissionForm from "./MissionForm";

test("MissionForm renders correctly", () => {
  render(<MissionForm />);
});

test("MissionForm renders message when isFetchingData is true", () => {
  //arrange: get component
  render(<MissionForm isFetchingData={true} />);

  //act: get text that should appear
  const fetchingText = screen.queryByText(/we are fetching data/i);

  //assert: text is what we expect it to be

  expect(fetchingText).toBeInTheDocument();
});

test("MissionForm renders button when isFetchingData is false", () => {
  //arrange: get component
  render(<MissionForm isFetchingData={false} />);

  //act: get text that should appear
  const button = screen.queryByRole("button");

  //assert: text is what we expect it to be

  expect(button).not.toBeNull();
});

test("calls getData when button is pressed", () => {
  //arrange
  const mockGetData = jest.fn();
  render(<MissionForm getData={mockGetData} />);

  //act
  const button = screen.getByRole("button");
  fireEvent.click(button);

  //assert
  expect(mockGetData.mock.calls.length === 1);
  expect(mockGetData.mock.calls.length).toBe(1);
  expect(mockGetData.mock.calls).toHaveLength(1);
  expect(mockGetData).toHaveBeenCalledTimes(1);
});
