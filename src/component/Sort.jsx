import React, { useContext } from "react";
import { ProductContext } from "..";

export const Sort = () => {
  const { dispatch } = useContext(ProductContext);
  return (
    <React.Fragment>
      <fieldset>
        <legend>Sort By</legend>
        <input
          type="radio"
          id="desc"
          name="sort-products"
          onChange={() => dispatch({ type: "SORT_DESC" })}
        />
        <label htmlFor="desc" name="sort-products">
          Price - High to Low
        </label>
        <input
          type="radio"
          id="asc"
          name="sort-products"
          onChange={() => dispatch({ type: "SORT_ASC" })}
        />
        <label htmlFor="asc" name="sort-products">
          Price - Low to High
        </label>
      </fieldset>
    </React.Fragment>
  );
};
