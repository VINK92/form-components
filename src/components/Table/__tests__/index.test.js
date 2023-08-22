/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Table } from "..";

const mockStore = configureStore([]);

describe("Test Table Component", () => {
  it("toggles table visibility", () => {
    const initialState = {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      message: "Message1",
    };
    const store = mockStore(initialState);
    const { getByText, queryByText } = render(
      <Provider store={store}>
        <Table />
      </Provider>
    );

    const showButton = getByText("Show data");
    fireEvent.click(showButton);

    const firstNameCell = getByText("John");
    const lastNameCell = getByText("Doe");
    const emailCell = getByText("john@example.com");
    const messageCell = getByText("Message1");

    expect(firstNameCell).toBeInTheDocument();
    expect(lastNameCell).toBeInTheDocument();
    expect(emailCell).toBeInTheDocument();
    expect(messageCell).toBeInTheDocument();

    const hideButton = getByText("Hide data");
    fireEvent.click(hideButton);

    expect(queryByText("John")).not.toBeInTheDocument();
    expect(queryByText("Doe")).not.toBeInTheDocument();
    expect(queryByText("john@example.com")).not.toBeInTheDocument();
    expect(queryByText("Message")).not.toBeInTheDocument();
  });
});
