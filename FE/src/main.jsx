import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/product.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>



    <ProductProvider>
      <ScrollToTop />
      <App />
    </ProductProvider>

   </BrowserRouter> 
);

