import { useState } from "react";
import { useDispatch } from "react-redux";
import { setValues } from "../../redux/reducers";
import { validateFormValues } from "./utils";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = validateFormValues({ firstName, lastName, email, message });
    if (isValid.includes(false)) {
      alert("Fill in correct data");
    } else {
      dispatch(setValues({ firstName, lastName, email, message }));
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      alert("Data was saved to store successfully");
    }
  };

  const handleChange = (e, fn) => {
    fn(e.target.value);
  };
  return (
    <div className="container" role="form">
      <form>
        <input
          role="firstName"
          value={firstName}
          onChange={(e) => handleChange(e, setFirstName)}
        />
        <input
          role="lastName"
          value={lastName}
          onChange={(e) => handleChange(e, setLastName)}
        />
        <input
          role="email"
          value={email}
          onChange={(e) => handleChange(e, setEmail)}
        />
        <input
          role="message"
          value={message}
          onChange={(e) => handleChange(e, setMessage)}
        />
        <button role="submitButton" type="submit" onClick={onSubmit}>
          Submit form
        </button>
      </form>
    </div>
  );
};
