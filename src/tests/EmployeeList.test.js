import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EmployeeList from "../EmployeeList";

test("renders EmployeeList component without crashing", () => {
  render(
    <MemoryRouter>
      <EmployeeList />
    </MemoryRouter>
  );
});
