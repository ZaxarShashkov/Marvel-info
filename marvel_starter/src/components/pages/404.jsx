import React, { Link } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Route, Routes } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.5em" }}>
        Page not Found
      </p>
      {/* <Routes>
        <Route style={{ display: "block", textAlign: "center" }}>
          Back to main page
        </Route>
      </Routes> */}
    </div>
  );
};

export default Page404;
