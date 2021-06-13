import React from "react";

export const Layout = (props) => {
  return (
    <>
      <h2>Welcome to the Calculator...</h2>
      <p>
        Formula can be input using the "Enter Formula" field directly or via the
        on screen buttons. +,-,*,/ operators are supported.
      </p>
      {props.children}
      <footer className="footer">Calculator Test App by John</footer>
    </>
  );
};
