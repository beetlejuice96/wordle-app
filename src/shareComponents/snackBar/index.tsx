import { Fragment, ReactNode } from "react";

interface SnackBarProps {
  onclose: () => void;
  message: string;
  action: () => void;
  open: boolean;
}
const snackbar = (snackBarProps: SnackBarProps) => {
  return (
    <Fragment>
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Holy smokes!</strong>
        <span className="block sm:inline">
          Something seriously bad happened.
        </span>
        {/* {snackBarProps.action as ReactNode} */}
      </div>
    </Fragment>
  );
};
