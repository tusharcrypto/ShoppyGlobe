import { useState } from "react";
import "../CSS/CartItem.css";
import { useDispatch } from "react-redux";
import { removeproduct } from "../../Utility/Redux/cartSlice";
import close from '../../Utility/Image/close.png'
const CartItem = (prop) => {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
    prop.handleTotal(prop.item.price); 
  }

  function handleDecrement() {
    if (counter > 0) {
      setCounter(counter - 1);
      prop.handleTotal(-prop.item.price); 
    }

   
  }
  const disptach = useDispatch();
  function handleremovecart(title,count){
    prop.handleTotal(-prop.item.price*count)
   disptach(removeproduct({title}))
  }

 

  return (
    <div>
      <div className="cartItem">
        <div className="cartImg">
          <img src={prop.item.images[0]} alt={prop.item.title} />
        </div>
        <div className="cartDesp">
          <p className="name">{prop.item.title}</p>
          <p className="shipinfo">Estimate: {prop.item.shippingInformation}</p>
          <p>Stock: {prop.item.stock} remain</p>
        </div>
        <div className="priceTotal">
          <p className="price">${prop.item.price}</p>
          <div className="quantity">
            <button onClick={handleDecrement} className="minus-btn">
              -
            </button>
            <span className="count-display">{counter}</span>
            <button onClick={handleIncrement} className="plus-btn">
              +
            </button>
          </div>
          <p className="total">${(prop.item.price * counter).toFixed(2)}</p>
          <img src={close}  onClick={()=>{
            handleremovecart(prop.item.title,counter);
          }} className="close"></img>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
