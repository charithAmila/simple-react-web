import React from "react";

import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  test("Hero section", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading")).toHaveTextContent("WORK");
  });
});
