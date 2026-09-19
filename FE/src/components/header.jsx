import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useCart } from "../context/CartContext";

const ShoppingHeader = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/listing",
    },
    // {
    //   name: <IoMdCart className="items-center font-bold text-3xl"/>,
    //   path: "/cart",
    // },
  ];
  return (
    <header className="flex justify-between items-center py-5 px-8 sticky z-50 shadow-md bg-green-600 text-white">
      <div>
        <h1 className="text-3xl font-bold">BAZAAR</h1>
      </div>
      <ul className="hidden md:flex gap-4">
        {menuItems.map((item) => {
          return (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium text-black"
                    : "text-xl font-medium"
                }
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-3xl font-medium text-black"
                : "text-3xl font-medium"
            }
          >
            
            <IoMdCart className="items-center font-bold text-4xl" />
            <span className="bg-red-500 text-white font-semibold text-sm rounded-full px-1.5 absolute top-4 right-7">
              {cartItems?.length}
            </span>
          </NavLink>
        </li>
      </ul>

      
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl"
        >
          {isMenuOpen ? "X" : "☰"}
        </button>
      </div>


      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-slate-200 text-black shadow-lg z-40 md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-medium text-green-600"
                      : "text-xl font-medium"
                  }
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-3xl font-medium text-black"
                    : "text-3xl font-medium"
                }
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                <div className="relative">
                  <IoMdCart className="items-center font-bold text-4xl" />
                  <span className="bg-red-500 text-white font-semibold text-sm rounded-full px-1.5 absolute -top-1 -right-1">
                    {cartItems?.length}
                  </span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
};

export default ShoppingHeader;
