import validator from "validator";

export const validateFormValues = ({ firstName, lastName, email, message }) => {
  const arr = [];
  arr.push(!validator.isEmpty(firstName));
  arr.push(!validator.isEmpty(lastName));
  arr.push(!validator.isEmpty(email));
  arr.push(!validator.isEmpty(message));
  if (email) {
    arr.push(validator.isEmail(email));
  }
  if (message) {
    arr.push(validator.isLength(message, { max: 10 }));
  }
  return arr;
};
