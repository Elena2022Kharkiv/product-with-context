import { useProductContext } from '../hooks/useProductsContext';
import Product from './Product';

const ProductsList = () => {
  const { products } = useProductContext();

  return (
    <div className="products-list">
      <h2>Products</h2>

      {
        products.map( product => 
          <Product product={ product } key={ product.id }/>
        )
      }
    
    </div>
  );
};

export default ProductsList;