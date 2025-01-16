import "./sale.css";
import sale from "../../Utility/Image/sale.png";
const Sale = () => {
  // let time = new Date.getTime()
  return (
    <div className="sale">
      <div className="left-side">
        <p>Clothing Hot</p>
        <p>Shoe Collection</p>
        <p>Accessories</p>
      </div>
      <div className="right-side">
        <div className="bag-price">
          <p className="saleprice">Sale of $10.10</p>
          <img src={sale} alt="" />
        </div>
        <div className="desp">
          <p>Deal Of The Week</p>
          <p>Multi-pocket Chest Bag Black</p>
          {/* <p>{time}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Sale;
