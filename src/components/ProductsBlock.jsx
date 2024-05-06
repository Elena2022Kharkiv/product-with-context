import ProductsInfo from './ProductsInfo';
import ProductsList from './ProductsList';
import ProductAddForm from './ProductAddForm';

const ProductsBlock = () => {

  return (
    <div className="products-block">

      <ProductsInfo />

      <ProductAddForm />

      <ProductsList />

    </div>
  );
};

export default ProductsBlock;