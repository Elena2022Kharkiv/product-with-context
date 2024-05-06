import { useState } from "react"
import { useProductContext } from '../hooks/useProductsContext';
import { useToggleActive } from "./../hooks/useToggleActive";

const ProductAddForm = () => {
  const { products, setProducts } = useProductContext();
  const { isAddActive, toggleActive } = useToggleActive(false); 

  const [ lastProdId, setLastProdId ] = useState(products.length);
  const [ title, setTitle ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ showWarningMessage, setShowWarningMessage ] = useState(false);

  const addProductHandler = () => {
    const newProduct = {
      id: (lastProdId + 1),
      title,
      price
    }
    console.log(newProduct);

    if (newProduct.title === '' || newProduct.price === '') {
      setShowWarningMessage(true);
      return
    }

    setLastProdId(lastProdId + 1);
    setProducts([...products, newProduct])
    toggleActive();
    console.log(products);

    setTitle('');
    setPrice('');
  }

  const addTitle = (e) => {
    setTitle(e.target.value)
    setShowWarningMessage(false);
  }

  const addPrice = (e) => {
    setPrice(Number(e.target.value))
    setShowWarningMessage(false);
  }


  return (
    <div className="products-add">
      <button 
        className={`products-add__btn ${ isAddActive && "hide" }`}
        onClick={ () => toggleActive() }>
        Add new product                     
      </button> 

      <div className={`products-add-form ${ isAddActive ? '' : "hide" }`}>

        <input 
          className="products-add-form__input" 
          value={ title }
          type="text"
          placeholder="Title"
          onChange={ (e) => addTitle(e) }           
        />
        
        <input 
          className="products-add-form__input products-add-form__input_price"
          value={ price }
          type="number" 
          placeholder="Price"
          onChange={ e => addPrice(e) }
        />

        <button
          className="products-add-form__btn"
          onClick={ addProductHandler } >         

          Add
        </button>

      </div>
      <div 
        className={`products-add-form__message ${ showWarningMessage && "showMessage" }`}>
          Enter Title and Price please
      </div>
    </div>
  );
}

export default ProductAddForm;