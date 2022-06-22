import React, { Fragment, PropsWithChildren, useState } from "react";
import { Error } from "../../interfaces/Error.interface";
import { Context, ErrorContext } from "./ErrorContext";

interface ErrorProviderProps {
  children: React.ReactNode;
}

const ErrorProvider: React.FC = ({ children }) => {
  console.log(props.children);

  const [stateError, setStateError] = useState<Error>({
    active: false,
    message: "",
  });

  const openToastError = (message: string) => {
    setStateError({
      ...stateError,
      message: message,
      active: true,
    });
  };

  const closeToastError = () => {
    setStateError({
      active: false,
      message: "",
    });
  };

  const button = (
    <React.Fragment>
      <button
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
        onClick={closeToastError}
      >
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </button>
    </React.Fragment>
  );

  let state: Context["state"] = { error: stateError };
  let actions: Context["actions"] = {
    openToastError,
    closeToastError,
  };
  return (
    <ErrorContext.Provider value={{ state, actions }}>
      {children}
      {/* <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Holy smokes!</strong>
        <span className="block sm:inline">
          Something seriously bad happened.
        </span>
        {button}
      </div> */}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
