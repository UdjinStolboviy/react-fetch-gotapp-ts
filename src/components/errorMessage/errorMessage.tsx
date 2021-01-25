import React from "react";
import "./errorMessage.scss";
const ErrorMessage = (): JSX.Element => {
  return (
    <>
      <img
        src={process.env.PUBLIC_URL + "/img/error.png"}
        alt="error"
        className="error-message"
      />
      <span>Something goes wrong</span>;
    </>
  );
};

export default ErrorMessage;
