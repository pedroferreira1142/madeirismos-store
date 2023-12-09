import React from "react";
import NavbarMenu from "components/Navbars/navbarMenu";
import Footer from "components/Footers/DefaultFooter";
import Block from "../block/block";

export const Layout = ({
  children,
  activeScrollTransperency,
  navBackgroundColor,
}) => {
  return (
    <React.Fragment>
      <NavbarMenu
        activeScrollTransperency={activeScrollTransperency}
        navBackgroundColor={navBackgroundColor}
      />
      <Block className="wrapper">{children}</Block>
      <Footer />
    </React.Fragment>
  );
};
