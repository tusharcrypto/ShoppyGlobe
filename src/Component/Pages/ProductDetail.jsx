import { useParams } from "react-router";
import useFetch from "../../Utility/useFetch";
import "../CSS/ProductDetail.css";
import { useEffect, useState } from "react";
import bag from "../../Utility/Image/bag.png";
import { useDispatch } from "react-redux";
import { addproduct } from "../../Utility/Redux/cartSlice";
import Review from "./Review";
const ProductDetail = () => {
  const { title } = useParams();
  let { data, loading } = useFetch("https://dummyjson.com/products");
  // console.log(val.title)
  let [prod, prddetail] = useState(null);
  let str = 0;

  useEffect(() => {
    if (data && data.products) {
      const product = data.products.find((itme) => itme.title == title);
      prddetail(product);
      str = product.rating;
    }
  }, [data, title]);
  const dispatch = useDispatch();
  if (loading) {
    return <div>Loding......</div>;
  }
  if (!prod) {
    return <div>Product not found!</div>;
  }
function handlecart(title){
dispatch(addproduct({title:title}))
}
  return (
    <div>
      <div className="productDetail">
        <div className="left-side1">
          <img src={prod.images[0]}></img>
        </div>
        <div className="right-side1">
          <p>{prod.title}</p>
          <p>{prod.brand || prod.title} </p>
          <p>${prod.price}</p>
          <p>
            Rating:
            <span className="rating">
              {"★".repeat(str)}
              {"☆".repeat(5 - str)}
            </span>
          </p>
          
          <img src={bag} className="bag" onClick={()=>{
            handlecart(prod.title)
          }}></img>
        
         
        </div>
      </div>
      <div className="reviews" >
        {prod.reviews.map((rev) => {
          {return <Review detail={rev}></Review>}
        })}
      </div>
    </div>
  );
};

export default ProductDetail;
