import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AttendanceForm from "../AttendanceForm";

test("renders AttendanceForm component without crashing", () => {
  render(
    <MemoryRouter>
      <AttendanceForm />
    </MemoryRouter>
  );
});
