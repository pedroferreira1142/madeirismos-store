import React from "react";

export const CollapseButton = ({ collapseOpen, onClick }) => {
  return (
    <button
      className="navbar-toggler navbar-toggler"
      onClick={onClick}
      aria-expanded={collapseOpen}
      type="button"
    >
      <span className="navbar-toggler-bar top-bar"></span>
      <span className="navbar-toggler-bar middle-bar"></span>
      <span className="navbar-toggler-bar bottom-bar"></span>
    </button>
  );
};
