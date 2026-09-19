
const express = require("express");
const router = express.Router();
const {getAllProducts, getProductByID, postProduct, updateProduct, deleteProduct} = 
                require("../Controllers/productController");


    //Get All Products. 
router.get("/", getAllProducts);


    // Get Product By Id.
router.get("/:id", getProductByID);


    // Post/Create New Product.
router.post("/", postProduct);


    // PUT/Update Product.
router.put("/:id", updateProduct);


    // Delete Product.
router.delete("/:id", deleteProduct);



module.exports = router;