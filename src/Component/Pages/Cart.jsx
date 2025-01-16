import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useFetch from "../../Utility/useFetch";
import CartItem from "./CartItem";

const Cart = () => {
  const selector = useSelector((store) => store.cart.items);
  const [masterTotal, setMasterTotal] = useState(0);
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [prod, setProd] = useState([]);

  useEffect(() => {
    if (data && data.products) {
      const prd = selector
        .map((title) => data.products.find((item) => item.title === title))
        .filter((item) => item); // Filter out undefined values
      setProd(prd);
    }
  }, [data, selector]);

  const handleTotal = (priceUpdate) => {
    setMasterTotal((prevTotal) => prevTotal + priceUpdate);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (prod.length === 0) {
    return <div>No products in cart!</div>;
  }

  return (
    <div>
      {prod.map((item) => (
        <CartItem key={item.id} item={item} handleTotal={handleTotal} total={masterTotal} />
      ))}
      <div className="masterTotal">
        <h2>Master Total: ${masterTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
