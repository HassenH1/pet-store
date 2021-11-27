import { allProducts } from "../data/data";

const getItem = (id) => {
  for (let i of allProducts) {
    if (i.id === Number(id)) {
      return i;
    }
  }
  return "This product doesnt exists anymore";
};

export { getItem };
