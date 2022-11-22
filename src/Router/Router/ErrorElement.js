import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <div className="text-center">
      <h1 className="text-3xl text-red-500 ">Something went wrong</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorElement;
