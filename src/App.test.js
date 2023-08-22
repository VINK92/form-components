import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import App from "./App";

const mockStore = configureStore([]);

test("renders submit button", () => {
  const store = mockStore({});

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = screen.getByText("Submit form");
  expect(element).toBeInTheDocument();
});
