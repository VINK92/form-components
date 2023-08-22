/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Form } from "../index";

const mockStore = configureStore([]);

describe("Form Component", () => {
  it("submits form with valid data", async () => {
    const store = mockStore({});
    const alertMock = jest.spyOn(window, "alert");
    alertMock.mockImplementation(() => {});
    const { getByRole } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const firstNameInput = getByRole("firstName");
    const lastNameInput = getByRole("lastName");
    const emailInput = getByRole("email");
    const messageInput = getByRole("message");
    const submitButton = getByRole("submitButton");

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Message" } });

    fireEvent.click(submitButton);
    expect(alertMock).toHaveBeenCalledWith(
      "Data was saved to store successfully"
    );
    alertMock.mockRestore();
  });

  it("shows alert for incorrect data", () => {
    const store = mockStore({});
    const alertMock = jest.spyOn(window, "alert");
    alertMock.mockImplementation(() => {});
    const { getByRole } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const submitButton = getByRole("submitButton");

    fireEvent.click(submitButton);
    expect(alertMock).toHaveBeenCalledWith("Fill in correct data");
    alertMock.mockRestore();
  });
});
