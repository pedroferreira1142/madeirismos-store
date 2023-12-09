import React from "react";
import { Link } from "react-router-dom";
import { NavbarBrand, UncontrolledTooltip } from "reactstrap";

export const BrandIcon = ({ brandName, toolTip, onClick }) => {
  return (
    <React.Fragment>
      <NavbarBrand
        to="index"
        tag={Link}
        id="navbar-brand"
        style={{ cursor: "pointer" }}
      >
        {brandName}
      </NavbarBrand>
      <UncontrolledTooltip target="#navbar-brand">
        {toolTip}
      </UncontrolledTooltip>
    </React.Fragment>
  );
};
