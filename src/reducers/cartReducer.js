import React from "react";
import { ShopContext } from "context/shopContext";

const { fetchAllProducts, products, fetchAllCollections, collections } =
  React.useContext(ShopContext);

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return state;
  }
};
