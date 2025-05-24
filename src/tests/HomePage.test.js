import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../HomePage.react.js";  // make sure this matches your actual filename

test("renders HomePage component without crashing and shows expected text", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  // Replace 'Welcome' with some text or element you expect on the HomePage
  const expectedElement = screen.getByText(/welcome/i);
  expect(expectedElement).toBeInTheDocument();
});

