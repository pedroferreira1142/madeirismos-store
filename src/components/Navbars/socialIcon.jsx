import React from "react";
import { NavLink, UncontrolledTooltip } from "reactstrap";

/** To be used in a NAV reactstrap*/
export const SocialIcon = ({
  href,
  id,
  iconClass,
  toolTip,
  onClick,
  menuText,
}) => (
  <React.Fragment>
    <NavLink href={href} target="_blank" id={id} onClick={onClick}>
      <i className={iconClass}></i>
      <p className="d-lg-none d-xl-none">{menuText}</p>
    </NavLink>
    <UncontrolledTooltip target={`#${id}`}>{toolTip}</UncontrolledTooltip>
  </React.Fragment>
);
