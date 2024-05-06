import { useProductContext } from '../hooks/useProductsContext';

const Product = ( props ) => {
    const { product } = props;
    const { products, setProducts } = useProductContext();

    const delProdHandler = (e) => {
        const delProdId = +(e.target.dataset.id);
        console.log(delProdId);
    
        const newArr = products.filter(item => item.id !== delProdId);
        console.log(newArr);
    
        setProducts(newArr);
    }  

    return (
        <li className="products-list__item" key={ product.id }>
            { product.title } &nbsp;  
            <span>Price: { product.price }</span>

            <button 
                className="products-list__btn"
                data-id={ product.id }
                onClick={(e) => delProdHandler(e)}
            >
                Del
            </button>
        </li>
    )
}

export default Product;