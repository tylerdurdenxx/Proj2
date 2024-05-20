import { PRODUCTS } from "../../Products";
import Product from "./Product";
import "./Shop.css";
import Banner from "../../Assets/banner.avif"

export default function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Online Store</h1>
        <p></p>

        
      </div>
      <div className="products">
        {PRODUCTS.map((product) =>(
          <Product data={product}/>
        ))}
      </div>
    </div>
  )
}