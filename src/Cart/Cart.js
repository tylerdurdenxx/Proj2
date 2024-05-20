import { PRODUCTS } from "../Products";
import { ShopContext } from "../Context/shop-context";
import { useContext } from "react";
import CartItem from "./Cart-Item";
import "./Cart.css";
import { useNavigate} from "react-router-dom"

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)  
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  return (
    <div className="cart">

      <div>
        <h1>Your Cart </h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product) => {
          const quantity = cartItems[product.id];
          if (quantity > 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null; // Skip rendering if quantity is 0
        })}
      </div>
        {totalAmount > 0 ?(
             <div className="checkout">
             <p> Subtotal: ${totalAmount}</p>
             <button onClick={() => navigate("/")}> Continue Shopping</button>
             <button> Checkout</button>
           </div>
          ) : (
            <h1> Your Cart is Empty</h1>
          )}
   

    </div>
  )
}