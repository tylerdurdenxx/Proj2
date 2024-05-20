import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

// pages
import Shop from "./pages/shop/Shop";
import Cart from "./Cart/Cart";
import Navbar from "./Components/Navbar";
import ShopContextProvider from "./Context/shop-context";


function App() {
  return (
    <ShopContextProvider>
    <BrowserRouter>
     <Navbar/>
        
      <main>
        <Routes>
          <Route index element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
    </ShopContextProvider>

  );
}

export default App
