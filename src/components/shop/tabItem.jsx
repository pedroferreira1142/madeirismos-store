import { NavItem, NavLink } from "reactstrap";

export const TabItem = ({ index, collectionName, onClick, pills, itemKey }) => {
  return (
    <NavItem>
      <NavLink
        className={pills === index ? "active" : ""}
        href="#pablo"
        onClick={onClick}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          fontWeight: "bold",
        }}
      >
        {collectionName}
      </NavLink>
    </NavItem>
  );
};
