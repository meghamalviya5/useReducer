import { createContext, useReducer } from "react";
import faker from "faker";

faker.seed(123);

const productsData = [...Array(50)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale"
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior"
  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional"
  ]),
  color: faker.commerce.color()
}));

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH":
        const dataBasedOnSearch = state.data.filter((product) => {
          console.log(product.name.toLowerCase());
          return product.name
            .toLowerCase()
            .includes(state.userInput.toLowerCase());
        });
        return { ...state, filteredData: dataBasedOnSearch };

      case "INPUTCHANGE":
        return { ...state, userInput: action.payload.target.value };

      case "SORT_ASC":
        const sortedLowToHigh = state.filteredData.sort(
          (a, b) => a.price - b.price
        );
        return { ...state, filteredData: sortedLowToHigh };

      case "SORT_DESC":
        const sortHighToLow = state.filteredData.sort(
          (a, b) => b.price - a.price
        );
        return { ...state, filteredData: sortHighToLow };

      case "FILTERS":
        const type = action.payload.target.value;
        const isChecked = action.payload.target.checked;
        let updatedSelectedFilters = [];
        let updateFilteredData = [];
        if (isChecked) {
          updatedSelectedFilters = [...state.selectedFilter, type];
        } else {
          updatedSelectedFilters = state.selectedFilter.filter(
            (t) => t !== type
          );
        }

        updateFilteredData = state.data.filter((product) => {
          let stock, delivery;
          if (!product.inStock) {
            stock = "Include Out of Stock";
          }
          if (product.fastDelivery) {
            delivery = "Fast Delivery Only";
          }
          if (updatedSelectedFilters.length === 2) {
            return (
              updatedSelectedFilters.includes(stock) &&
              updatedSelectedFilters.includes(delivery)
            );
          }
          if (updatedSelectedFilters.length === 1) {
            return (
              updatedSelectedFilters.includes(stock) ||
              updatedSelectedFilters.includes(delivery)
            );
          }
          return true;
        });

        return {
          ...state,
          filteredData: updateFilteredData,
          selectedFilter: updatedSelectedFilters
        };

      default:
        return state;
    }
  };

  const initialState = {
    data: productsData,
    filteredData: productsData,
    userInput: "",
    selectedFilter: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
