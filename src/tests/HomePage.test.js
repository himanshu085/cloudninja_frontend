import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../HomePage.react";

test("renders HomePage component without crashing", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
});
