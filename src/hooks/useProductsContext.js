import { useContext } from "react"
import { ProductContext } from "../context/ProductsContext";

export const useProductContext = () => {
  return useContext(ProductContext);
}
