import React, { useContext } from "react";

import { ProductContext } from "..";
import "./styles.css";
import { Search } from "./component/Search";
import { Filters } from "./component/Filters";
import { Sort } from "./component/Sort";

export default function App() {
  const { state } = useContext(ProductContext);

  return (
    <>
      <Search />
      <Sort />
      <Filters />
      <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
        {state.filteredData?.map(
          ({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery
          }) => (
            <div
              key={id}
              style={{
                border: "1px solid #4B5563",
                borderRadius: "0 0 0.5rem 0.5rem",
                margin: "1rem",
                maxWidth: "40%",
                padding: "0 0 1rem"
              }}
            >
              <img src={image} width="100%" height="auto" alt={productName} />
              <h3> {name} </h3>
              <div>Rs. {price}</div>
              {inStock && <div> In Stock </div>}
              {!inStock && <div> Out of Stock </div>}
              <div>{level}</div>
              {fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 3 days minimum </div>
              )}
            </div>
          )
        )}
      </div>
    </>
  );
}
