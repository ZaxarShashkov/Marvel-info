import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.5em" }}>
        Page not Found
      </p>
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.5em" }}>
        <NavLink
          end
          style={({ isActive }) => ({
            color: isActive ? "#9f0013" : "inherit",
          })}
          to="/Marvel-info"
        >
          Back to main page
        </NavLink>
      </p>
    </div>
  );
};

export default Page404;
