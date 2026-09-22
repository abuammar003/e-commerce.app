import { Route, Routes } from "react-router";
import ShoppingHome from "./pages/home";
import ShoppingHeader from "./components/header";
import ShoppingDetail from "./pages/detail";
import ShoppingCart from "./pages/AddToCart/shoppingCart";
import { CartProvider } from "./context/cartContext";
import CategoryProducts from "./pages/category";
import Listing from "./pages/listing";
import ShoppingFooter from "./components/footer";
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
