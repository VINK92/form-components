import { validateFormValues } from "../utils";

describe("Test validateFormValues util", () => {
  it("Test validateFormValues when all inputs are empty", () => {
    const mockValues = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
    const res = validateFormValues(mockValues);
    const mockRes = [false, false, false, false];
    expect(res).toEqual(mockRes);
  });
  it("Test validateFormValues when all inputs are filled and valid", () => {
    const mockValues = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email@gmail.com",
      message: "message",
    };
    const res = validateFormValues(mockValues);
    const mockRes = [true, true, true, true, true, true];
    expect(res).toEqual(mockRes);
  });
  it("Test validateFormValues when all inputs are filled and not valid", () => {
    const mockValues = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email@gmail",
      message: "messagemessage",
    };
    const res = validateFormValues(mockValues);
    const mockRes = [true, true, true, true, false, false];
    expect(res).toEqual(mockRes);
  });
  it("Test validateFormValues when firstName is empty", () => {
    const mockValues = {
      firstName: "",
      lastName: "lastName",
      email: "email@gmail.com",
      message: "message",
    };
    const res = validateFormValues(mockValues);
    const mockRes = [false, true, true, true, true, true];
    expect(res).toEqual(mockRes);
  });
  it("Test validateFormValues when lastName is empty", () => {
    const mockValues = {
      firstName: "firstName",
      lastName: "",
      email: "email@gmail.com",
      message: "message",
    };
    const res = validateFormValues(mockValues);
    const mockRes = [true, false, true, true, true, true];
    expect(res).toEqual(mockRes);
  });
  it("Test validateFormValues when email is empty", () => {
    const mockValues = {
      firstName: "firstName",
      lastName: "lastName",
      email: "",
      message: "message",
    };
    const res = validateFormValues(mockValues);
    const mockRes = [true, true, false, true, true];
    expect(res).toEqual(mockRes);
  });
  it("Test validateFormValues when message is empty", () => {
    const mockValues = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email@gmail.com",
      message: "",
    };
    const res = validateFormValues(mockValues);
    const mockRes = [true, true, true, false, true];
    expect(res).toEqual(mockRes);
  });
  it("Test validateFormValues email value is valid", () => {
    const mockValues = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email@gmail.com",
      message: "message",
    };
    const res = validateFormValues(mockValues);
    const mockRes = [true, true, true, true, true, true];
    expect(res).toEqual(mockRes);
  });
  it("Test validateFormValues email value is not valid", () => {
    const mockValues = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email@gmail",
      message: "message",
    };
    const res = validateFormValues(mockValues);
    const mockRes = [true, true, true, true, false, true];
    expect(res).toEqual(mockRes);
  });
  it("Test validateFormValues message value length is valid", () => {
    const mockValues = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email@gmail.com",
      message: "message",
    };
    const res = validateFormValues(mockValues);
    const mockRes = [true, true, true, true, true, true];
    expect(res).toEqual(mockRes);
  });
  it("Test validateFormValues message value length is not valid", () => {
    const mockValues = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email@gmail.com",
      message: "messagemessage",
    };
    const res = validateFormValues(mockValues);
    const mockRes = [true, true, true, true, true, false];
    expect(res).toEqual(mockRes);
  });
});
