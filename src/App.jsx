import { useState } from "react";
import ProductsBlock from "./components/ProductsBlock";
import ProductsProvider from "./context/ProductsContext";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 200 },
    { id: 2, title: 'Product 2', price: 250 },
    { id: 3, title: 'Product 3', price: 300 },
    { id: 4, title: 'Product 4', price: 350 },
    { id: 5, title: 'Product 5', price: 500 },
  ]);
  console.log(products);

  return (
    <div className="container">
      
      <ProductsProvider value={{ products, setProducts }}>

          <ProductsBlock />
          
      </ProductsProvider>

    </div>
  );
}

export default App;