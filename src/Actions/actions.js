import { allProducts } from "../data/data";

const getItem = (id) => {
  // console.log(typeof id, "<=-=-what is typeof of id");
  // return allProducts.filter((item, index) => {
  //   console.log(typeof item.id, "<=-=-what is the typeof id in loop");
  //   return item.id === Number(id);
  // });
  for (let i of allProducts) {
    if (i.id === Number(id)) {
      return i;
    }
  }
  return "This product doesnt exists anymore";
};

export { getItem };
