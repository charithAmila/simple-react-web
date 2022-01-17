import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import ContactForm from "../ContactForm";
import { act } from "react-dom/test-utils";

const submitFunction = jest.fn();

describe("ContactForm", () => {
  test("form submission with empty data", async () => {
    render(<ContactForm submit={submitFunction} />);
    await act(async () => {
      fireEvent.submit(screen.getByRole("form"));
    });
    expect(submitFunction).toHaveBeenCalledTimes(0);
  });

  test("form submission with invalid email address", async () => {
    const sampleData = {
      name: "Jone",
      email: "jone",
      message: "Hi Friend",
    };
    render(<ContactForm submit={submitFunction} />);
    await act(async () => {
      fireEvent.change(screen.getByLabelText("NAME"), {
        target: {
          value: sampleData.name,
        },
      });
      fireEvent.change(screen.getByLabelText("EMAIL"), {
        target: {
          value: sampleData.email,
        },
      });
      fireEvent.change(screen.getByLabelText("MESSAGE"), {
        target: {
          value: sampleData.message,
        },
      });
    });
    await act(async () => {
      fireEvent.submit(screen.getByRole("form"));
    });
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    expect(submitFunction).toHaveBeenCalledTimes(0);
  });

  test("form submission with valid data", async () => {
    const sampleData = {
      name: "Jone",
      email: "jone@grr.la",
      message: "Hi Friend",
    };
    render(<ContactForm submit={submitFunction} />);

    await act(async () => {
      fireEvent.change(screen.getByLabelText("NAME"), {
        target: {
          value: sampleData.name,
        },
      });
      fireEvent.change(screen.getByLabelText("EMAIL"), {
        target: {
          value: sampleData.email,
        },
      });
      fireEvent.change(screen.getByLabelText("MESSAGE"), {
        target: {
          value: sampleData.message,
        },
      });
    });

    await act(async () => {
      fireEvent.submit(screen.getByRole("form"));
    });
    expect(submitFunction).toHaveBeenCalledTimes(1);
    expect(submitFunction).toBeCalledWith(sampleData);
  });
});
