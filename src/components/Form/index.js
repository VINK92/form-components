import { useState } from "react";
import validator from "validator";
import { useDispatch } from "react-redux";
import { setValues } from "../../redux/reducers";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = [];
    isValid.push(!validator.isEmpty(firstName));
    isValid.push(!validator.isEmpty(lastName));
    isValid.push(!validator.isEmpty(email));
    isValid.push(!validator.isEmpty(message));
    isValid.push(validator.isEmail(email));
    isValid.push(validator.isLength(message, { max: 10 }));
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
    <div className="container">
      <form>
        <input
          value={firstName}
          onChange={(e) => handleChange(e, setFirstName)}
        />
        <input
          value={lastName}
          onChange={(e) => handleChange(e, setLastName)}
        />
        <input value={email} onChange={(e) => handleChange(e, setEmail)} />
        <input value={message} onChange={(e) => handleChange(e, setMessage)} />
        <button type="submit" onClick={onSubmit}>
          Submit form
        </button>
      </form>
    </div>
  );
};
