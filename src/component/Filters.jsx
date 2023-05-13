import React, { useContext } from "react";

import { ProductContext } from "..";

export const Filters = () => {
  const { state, dispatch } = useContext(ProductContext);
  const productType = [
    { inStock: "Include Out of Stock" },
    { fastDelivery: "Fast Delivery Only" }
  ];

  console.log(Object.keys(productType), ".....entries");
  return (
    <React.Fragment>
      <fieldset>
        <legend>Filters</legend>
        {productType.map((type, index) => {
          // console.log(Object.entries(type), ".....entries");
          const [key, value] = Object.entries(type)[0];
          // console.log(entry, ".....entry");
          // const [key, value] = entry[0];
          // const [key, value] = entry;
          console.log(key, ".....key");

          console.log(value, ".....value");
          return (
            <label htmlFor="out-of-stock" key={index}>
              <input
                type="checkbox"
                id="out-of-stock"
                value={key}
                checked={state.selectedFilters?.includes(key)}
                onChange={(event) =>
                  dispatch({ type: "FILTERS", payload: event })
                }
              />
              {value}
            </label>
          );
        })}

        {/* <input
          type="checkbox"
          id="out-of-stock"
          value="outOfStock"
          onChange={(event) => dispatch({ type: "FILTERS", payload: event })}
        />
        <label htmlFor="out-of-stock">Include Out of Stock</label>
        <input
          type="checkbox"
          id="fast-delivery"
          value="fastDelivery"
          onChange={(event) => dispatch({ type: "FILTERS", payload: event })}
        />
        <label htmlFor="fast-delivery">Fast Delivery Only</label> */}
      </fieldset>
    </React.Fragment>
  );
};
