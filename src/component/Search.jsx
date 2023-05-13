import React, { useContext } from "react";

import { ProductContext } from "..";

export const Search = () => {
  const { dispatch } = useContext(ProductContext);

  return (
    <React.Fragment>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        placeholder="Search By Name"
        onChange={(event) => dispatch({ type: "INPUTCHANGE", payload: event })}
      ></input>
      <button onClick={() => dispatch({ type: "SEARCH" })}>Search Data</button>
    </React.Fragment>
  );
};
