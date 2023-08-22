import configureStore from "redux-mock-store";
import rootReducer from "../reducers";

describe("Test redux store dispatches the correct action and state changes", () => {
  it("Test setValues action", () => {
    const initialState = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };

    const mockValues = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email@gmail.com",
      message: "message",
    };

    const mockStore = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    });

    const store = mockStore(initialState);
    const actionSetValues = {
      type: "form/setValues",
      payload: mockValues,
    };
    store.dispatch(actionSetValues);

    const actions = store.getActions();
    expect(actions).toContainEqual(actionSetValues);
  });
  it("Test getValues action", () => {
    const initialState = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };

    const mockValues = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email@gmail.com",
      message: "message",
    };

    const mockStore = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    });

    const store = mockStore(initialState);
    const actionGetValues = {
      type: "form/getValues",
      payload: mockValues,
    };
    store.dispatch(actionGetValues);

    const actions = store.getActions();
    expect(actions).toContainEqual(actionGetValues);
  });
});
