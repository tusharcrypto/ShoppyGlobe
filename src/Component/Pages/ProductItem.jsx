import '../CSS/ProductItem.css';
import { useDispatch } from "react-redux";
import { Link } from 'react-router';
import { addproduct } from "../../Utility/Redux/cartSlice";
const ProductItem = (prop) => {
  console.log(prop.item);
  let str = prop.item.rating;
  const dispatch = useDispatch();
  function handlecart(title){
    dispatch(addproduct({title:title}))
    }
  return (
    <div className='Item'>
      <div className="eachItem">
        <img src={prop.item.images[0]} alt="productImage" />
        <div className="item-inside">
          <p>Title: {prop.item.title}</p>
          <p>Brand: {prop.item.brand || prop.item.title}</p>
          <p>Price: {prop.item.price}$</p>
          <p>
            Rating: <span className="rating">{'★'.repeat(str)}{'☆'.repeat(5 - str)}</span>
          </p>
          <div className="action-buttons">
            <Link to={`/productDetails/${prop.item.title}`} className="view-details">
              View Details
            </Link>
            <button className="add-to-cart" onClick={()=>{
            handlecart(prop.item.title)
          }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
