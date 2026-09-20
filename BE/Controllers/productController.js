
    //====================== CRUD with DataBase =====================

// const products = require("../Models/data");
const Products = require("../Models/productsModel");
const path = require("path");


// READ All Products.
const getAllProducts = async (req, res) => {

    try{
        const products = await Products.find();

        res.status(200).json({
            message: "All Products.",
            product: products
        });
    
    } catch(err) {
         res.status(400).json({
            message: "Failed to Fetch Products.",
            error: err.message
        })
    }
};

// READ Products By Id/Name.
const getProductByID = async (req, res)=> {

    try{
        const id = Number(req.params.id);
        
        const findProduct = await Products.findOne({id: id});
        
        if(!findProduct) {
            return res.status(404).sendFile(
                path.join(__dirname, "../views/404.html")
            );
        }
    
        res.status(200).json({
            message: "Product Found Successfully.",
            product: findProduct
        });
    
    } catch(err) {
        res.render(NotFound);
    }

};



// CREATE / POST Products.
const postProduct = async (req, res)=> {

    try {
        const {name, price, category, brand, stock, rating, description, image} = req.body;
        const id = Date.now();
        
        const addProduct = await Products.create({
            id,
            name,
            price,
            category,
            brand,
            stock,
            rating,
            description,
            image
        });
        
        Products.push(addProduct);
        
        res.status(201).json({
            message: "New Products Created Successfully",
            product: addProduct
        });
        
    } catch(err) {
        res.status(400).json({
            message: "Failed to Create New Product.",
            error: err.message
        });
    }
    
};



// PUT/UPDATE Product.
const updateProduct = async (req, res)=> {
    
    try{
        const id = Number(req.params.id);
        const {name, price, category, brand, stock, rating, description, image} = req.body;

        const updatedProduct = await Products.findOneAndUpdate(
            {id: id},
            {name: name},
            {price: price},
            {category: category},
            {brand: brand},
            {stock: stock},
            {rating: rating},
            {description: description},
            {image: image}
        );

        if(!findProduct) {
            res.status(404).json({
                message: "Product Not Found"
            });
        }

        res.status(200).json({
            message: "Product Updated Successfully",
            product: updatedProduct
        });


    } catch(err) {
        res.status(400).json({
            message: "Failed to Update Product."
        });
    }

}


// DELETE Product.
const deleteProduct = async (req, res)=> {

    try{
        const id = Number(req.params.id);

        const deletedProduct = await Products.findOneAndDelete({id: id});

         if (deletedProduct === -1 || !deletedProduct) {
            return res.status(404).json({
                message: "Product Not Found"
            });
        }


        // const deletedProduct = products.splice(findProduct, 1);

        res.status(200).json({
            message: "Product Deleted Successfully.",
            product: deletedProduct[0]
        });

    }   catch(err) {
        res.status(400).render("../views/404.html");
    } 

};

module.exports = {getAllProducts, getProductByID, postProduct, updateProduct, deleteProduct};
















    //=================== Normal CRUD without DataBase ================

// const products = require("../Models/data");
// const path = require("path");


// // READ All Products.
// const getAllProducts = (req, res) => {

//     try{
//         res.status(200).json({
//             message: "All Products.",
//             product: products
//         });
    
//     } catch(err) {
//          res.status(400).json({
//             message: "Failed to Fetch Products.",
//             error: err.message
//         })
//     }
// };

// // READ Products By Id/Name.
// const getProductByID = (req, res)=> {

//     try{
//         const id = Number(req.params.id);
        
//         const findProduct = products.find((item)=> item.id === id);
        
//         if(!findProduct) {
//             return res.status(404).sendFile(
//                 path.join(__dirname, "../views/404.html")
//             );
//         }
    
//         res.status(200).json({
//             message: "Product Found Successfully.",
//             product: findProduct
//         });
    
//     } catch(err) {
//         res.render(NotFound);
//     }

// };



// // CREATE / POST Products.
// const postProduct = (req, res)=> {

//     try {
//         const {name, price, category, brand, stock, rating, description, image} = req.body;
//         const id = Date.now();
        
//         const addProduct = {
//             id,
//             name,
//             price,
//             category,
//             brand,
//             stock,
//             rating,
//             description,
//             image
//         }
        
//         products.push(addProduct);
        
//         res.status(201).json({
//             message: "New Products Created Successfully",
//             product: addProduct
//         });
        
//     } catch(err) {
//         res.status(400).json({
//             message: "Failed to Create New Product.",
//             error: err.message
//         });
//     }
    
// };



// // PUT/UPDATE Product.
// const updateProduct = async (req, res)=> {
    
//     try{
//         const id = Number(req.params.id);
//         const {name, price, category, brand, stock, rating, description, image} = req.body;

//         const findProduct = products.find((item)=> item.id === id);
//         if(!findProduct) {
//             res.status(404).json({
//                 message: "Product Not Found"
//             });
//         }

//         findProduct.name = name;
//         findProduct.price = price;
//         findProduct.category = category;
//         findProduct.brand = brand;
//         findProduct.stock = stock;
//         findProduct.rating = rating;
//         findProduct.description = description;
//         findProduct.image = image;

//         res.status(200).json({
//             message: "Product Updated Successfully"
//         });


//     } catch(err) {
//         res.status(400).json({
//             message: "Failed to Update Product."
//         });
//     }

// }



// // DELETE Product.
// const deleteProduct = (req, res)=> {

//     try{
//         const id = Number(req.params.id);

//         const findProduct = products.findIndex((item)=> item.id === id);

//          if (findProduct === -1) {
//             return res.status(404).json({
//                 message: "Product Not Found"
//             });
//         }


//         const deletedProduct = products.splice(findProduct, 1);

//         res.status(200).json({
//             message: "Product Deleted Successfully.",
//             product: deletedProduct[0]
//         });

//     }   catch(err) {
//         res.status(400).render("../views/404.html");
//     } 

// };


// module.exports = {getAllProducts, getProductByID, postProduct, updateProduct, deleteProduct};