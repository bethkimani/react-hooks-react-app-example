// src/__tests__/App.test.js
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Ensure this is imported
import App from "../components/App";

test('should include "Now" in the header instead of a time', () => {
  render(<App />);
  expect(screen.getByText("Now")).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  render(<App />);
  expect(screen.getByText("This is the Example Component")).toBeInTheDocument(); // Update with the actual text
});

test("should include the <TestComponent />", () => {
  render(<App />);
  expect(screen.getByTitle("time video")).toBeInTheDocument(); // Ensure title matches
});
