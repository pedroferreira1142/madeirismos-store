import React from "react";

export const useCart = () => {
  const context = React.useContext(CartContext);
  return { ...context };
};
