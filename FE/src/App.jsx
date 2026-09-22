import { Route, Routes } from "react-router";
import ShoppingHome from "./pages/Home";
import ShoppingHeader from "./components/Header";
import ShoppingDetail from "./pages/Detail";
import ShoppingCart from "./pages/AddToCart/ShoppingCart";
import { CartProvider } from "./context/CartContext";
import CategoryProducts from "./pages/Category";
import Listing from "./pages/Listing";
import ShoppingFooter from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return ( 
    <>  

      {/* <BrowserRouter> */}
    
      <CartProvider>
      <ShoppingHeader />

        <ToastContainer 
          position="top-center"
          autoClose={3000}
          theme="light"
        />

        <Routes>


          <Route path="/" element={<ShoppingHome />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/listing/:id" element={<ShoppingDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/category/:categoryName" element={<CategoryProducts />} /> 

        </Routes>

          <ShoppingFooter />
        
      </CartProvider>
      
        {/* </BrowserRouter> */}
      
    </>
  );
};

export default App;
