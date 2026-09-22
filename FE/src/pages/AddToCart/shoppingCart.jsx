import { useCart } from "../../context/cartContext";
import { MdDeleteForever } from "react-icons/md";
import EmptyCartMessage from "../../components/EmptyCartMsg";


const ShoppingCart = () => {
  const { cartItems, handleAddToCart, handleRemoveFromCart, cancelOrder, checkOut } = useCart();
  console.log(cartItems);
 
  const calculateTotal = (price, quantity) => {
    return price * quantity;
  }; 

  const calculateItemsTotal = () => {
    return cartItems.reduce((total, items) => total + calculateTotal(items.price, items.quantity), 0);
  };

  const itemsTotal = calculateItemsTotal();

  const calculateGrandTotal = () => {
    const deliveryCharge = 5;
    return itemsTotal + deliveryCharge;
  };

  const grandTotal = calculateGrandTotal();

 

  return (
    <div className="min-h-screen py-8">

      <h1 className="text-3xl mx-3 mb-4">Your Products</h1>
      
      <div className="border p-4 sm:p-8">

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="col-span-2 flex flex-col items-center lg:items-start">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4 border py-2 px-3 w-full">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-20 h-20 sm:w-28 sm:h-28 mr-4" />
                    <div>
                      <h3 className="text-lg max-sm:text-lg sm:text-xl">{item.name}</h3>
                      <span className="text-sm sm:text-lg">${item.price} x {item.quantity}</span>
                    </div>
                  </div>
                  <div className="flex gap-4 max-sm:flex-col items-center">
                    <div className="flex justify-center py-0.5 rounded bg-green-600">
                      <button
                        className="px-2 text-lg rounded text-white"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        -
                      </button>
                      <h2 className="items-center text-lg px-2 bg-white rounded">{item.quantity}</h2>
                      <button
                        className="px-2 text-lg rounded text-white"
                        onClick={() => handleAddToCart(item)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="border bg-red-500 text-white py-1.5 px-2 rounded"
                      onClick={() => cancelOrder(item.id)}
                    >
                      <MdDeleteForever className="text-xl" />
                    </button>

                  </div>
                </div>
              ))}
            </div>

            {/* Bill Details Section */}
            <div className="min-w-[15rem] sm:min-w-[20rem] max-h-[19.3rem] sm:max-h-[20.5rem] bg-white p-4 border rounded-lg">
              <h1 className="text-3xl text-center font-semibold">Bill Details</h1>
              <h2 className="flex justify-between mt-4 text-lg">
                Items Total <span>${itemsTotal.toFixed(2)}</span>
              </h2>
              <h2 className="flex justify-between mt-2 text-lg">
                Delivery Charge <span className="text-green-600">$5</span>
              </h2>
              <p className="text-sm mt-1">Shipping (free for orders above $999)</p>

              <div className="border-t-2 border-black mt-5 text-xl font-medium">
                <h1 className="flex justify-between mt-4">
                  Grand Total <span>${grandTotal.toFixed(2)}</span>
                </h1>
                <button className="w-full bg-green-600 py-2 px-3 rounded mt-5 text-white text-lg"
                  onClick={checkOut}
                >
                  Check Out <span>${grandTotal.toFixed(2)}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (

          <EmptyCartMessage />
        
        )}
      </div>
    
    </div>
  );
};

export default ShoppingCart;
