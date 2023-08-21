import { useState } from "react";
import { useSelector } from "react-redux";

export const Table = () => {
  const { firstName, lastName, email, message } = useSelector((state) => state);
  const [showTable, setShowTable] = useState(false);
  const handleClick = () => {
    setShowTable((state) => !state);
  };
  const buttonLabel = showTable ? "Hide data" : "Show data";
  return (
    <div className="container">
      <button onClick={handleClick}>{buttonLabel}</button>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{message}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
