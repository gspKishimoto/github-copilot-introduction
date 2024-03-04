import { render, screen, fireEvent } from "@testing-library/react";
import AddTwoNumber from "../organisms/addTwoNumber";
import { test, expect } from "@jest/globals"; // Add import for 'test' and 'expect'

test("renders AddTwoNumber component", () => {
  render(<AddTwoNumber />);

  // Assert that the component renders without errors
  expect(screen.getByLabelText("Number 1")).toBeInTheDocument();
  expect(screen.getByLabelText("Number 2")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
  expect(screen.getByText("Result: 0")).toBeInTheDocument();
});

test("calculates the sum correctly", () => {
  render(<AddTwoNumber />);

  // Simulate user input and click the Add button
  fireEvent.change(screen.getByLabelText("Number 1"), { target: { value: "5" } });
  fireEvent.change(screen.getByLabelText("Number 2"), { target: { value: "7" } });
  fireEvent.click(screen.getByRole("button", { name: "Add" }));

  // Assert that the result is calculated correctly
  expect(screen.getByText("Result: 12")).toBeInTheDocument();
});

test("displays correct messages based on the result", () => {
  render(<AddTwoNumber />);

  // Simulate user input and click the Add button
  fireEvent.change(screen.getByLabelText("Number 1"), { target: { value: "3" } });
  fireEvent.change(screen.getByLabelText("Number 2"), { target: { value: "8" } });
  fireEvent.click(screen.getByRole("button", { name: "Add" }));

  // Assert that the correct message is displayed based on the result
  expect(screen.getByText("合計が10を超えています")).toBeInTheDocument();

  // Simulate user input and click the Add button again
  fireEvent.change(screen.getByLabelText("Number 1"), { target: { value: "2" } });
  fireEvent.change(screen.getByLabelText("Number 2"), { target: { value: "4" } });
  fireEvent.click(screen.getByRole("button", { name: "Add" }));

  // Assert that the correct message is displayed based on the result
  expect(screen.getByText("合計は10以下です")).toBeInTheDocument();

  // Simulate user input and click the Add button again
  fireEvent.change(screen.getByLabelText("Number 1"), { target: { value: "0" } });
  fireEvent.change(screen.getByLabelText("Number 2"), { target: { value: "0" } });
  fireEvent.click(screen.getByRole("button", { name: "Add" }));

  // Assert that the correct message is displayed based on the result
  expect(screen.getByText("合計は0です")).toBeInTheDocument();
});
