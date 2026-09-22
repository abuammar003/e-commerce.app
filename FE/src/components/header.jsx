import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiShoppingBag,
} from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { useCart } from "../context/cartContext";

const ShoppingHeader = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalCartItems = cartItems?.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "All Categories",
      path: "/listing",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      
      {/* ================= DESKTOP / MAIN NAVBAR ================= */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-6">

          {/* LOGO */}
          <NavLink
            to="/"
            className="flex items-center gap-2 shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white shadow-sm">
              <FiShoppingBag className="text-xl" />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                BAZAAR
              </h1>
              <p className="text-[10px] tracking-widest text-green-600 font-semibold -mt-1">
                ONLINE STORE
              </p>
            </div>
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-7">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 text-[15px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-green-600"
                      : "text-gray-600 hover:text-green-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* SEARCH BAR */}
          <div className="hidden lg:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full h-11 pl-11 pr-4 rounded-full bg-gray-100 border border-transparent outline-none text-sm text-gray-700 placeholder-gray-400 transition-all duration-200 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* CART */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-green-100 text-green-600"
                    : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
                }`
              }
            >
              <IoMdCart className="text-2xl" />

              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold border-2 border-white">
                  {totalCartItems}
                </span>
              )}
            </NavLink>



            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full text-gray-700 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE SEARCH ================= */}
        <div className="lg:hidden pb-4">
          <div className="relative w-full">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-11 pl-11 pr-4 rounded-full bg-gray-100 border border-transparent outline-none text-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
          <nav className="max-w-screen-2xl mx-auto px-5 py-5">

            <div className="flex flex-col gap-2">

              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-semibold transition ${
                      isActive
                        ? "bg-green-50 text-green-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}


              {/* CART MOBILE */}
              <NavLink
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg flex items-center justify-between font-semibold transition ${
                    isActive
                      ? "bg-green-50 text-green-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                <span className="flex items-center gap-3">
                  <IoMdCart className="text-xl" />
                  Cart
                </span>

                {totalCartItems > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                    {totalCartItems}
                  </span>
                )}
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default ShoppingHeader;








  // ================ OLD Design of the Header ===================

// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { IoMdCart } from "react-icons/io";
// import { useCart } from "../context/CartContext";

// const ShoppingHeader = () => {
//   const { cartItems } = useCart();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
 
//   const menuItems = [
//     {
//       name: "Home",
//       path: "/",
//     },
//     {
//       name: "Products",
//       path: "/listing",
//     },
//     // {
//     //   name: <IoMdCart className="items-center font-bold text-3xl"/>,
//     //   path: "/cart",
//     // },
//   ];
//   return (
//     <header className="flex justify-between items-center py-5 px-8 sticky z-50 shadow-md bg-green-600 text-white">
//       <div>
//         <h1 className="text-3xl font-bold">BAZAAR</h1>
//       </div>
//       <ul className="hidden md:flex gap-4">
//         {menuItems.map((item) => {
//           return (
//             <li key={item.name}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-xl font-medium text-black"
//                     : "text-xl font-medium"
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           );
//         })}
//         <li>
//           <NavLink
//             to="/cart"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-3xl font-medium text-black"
//                 : "text-3xl font-medium"
//             }
//           >
            
//             <IoMdCart className="items-center font-bold text-4xl" />
//             <span className="bg-red-500 text-white font-semibold text-sm rounded-full px-1.5 absolute top-4 right-7">
//               {cartItems?.length}
//             </span>
//           </NavLink>
//         </li>
//       </ul>

      
//       <div className="md:hidden flex items-center">
//         <button
//           onClick={toggleMenu}
//           className="text-white text-3xl"
//         >
//           {isMenuOpen ? "X" : "☰"}
//         </button>
//       </div>


//       {isMenuOpen && (
//         <div className="absolute top-20 left-0 right-0 bg-slate-200 text-black shadow-lg z-40 md:hidden">
//           <ul className="flex flex-col items-center gap-4 py-4">
//             {menuItems.map((item) => (
//               <li key={item.name}>
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-xl font-medium text-green-600"
//                       : "text-xl font-medium"
//                   }
//                   onClick={() => setIsMenuOpen(false)} // Close menu on click
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//             <li>
//               <NavLink
//                 to="/cart"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-3xl font-medium text-black"
//                     : "text-3xl font-medium"
//                 }
//                 onClick={() => setIsMenuOpen(false)} // Close menu on click
//               >
//                 <div className="relative">
//                   <IoMdCart className="items-center font-bold text-4xl" />
//                   <span className="bg-red-500 text-white font-semibold text-sm rounded-full px-1.5 absolute -top-1 -right-1">
//                     {cartItems?.length}
//                   </span>
//                 </div>
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}

//     </header>
//   );
// };

// export default ShoppingHeader;
