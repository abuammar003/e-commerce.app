import React from 'react';
import { Link } from "react-router-dom";
import { FaXTwitter, FaInstagram, FaFacebook, FaGithub, FaSellsy, FaGifts, FaRegCopyright, } from "react-icons/fa6";
import { PiShootingStarBold } from "react-icons/pi";
import { FaRegQuestionCircle } from "react-icons/fa";


const ShoppingFooter = () => {
  return (
    <div>
      <div className="bg-green-600 items-center p-2 mt-8">

        <div className='flex justify-evenly max-sm:flex-col max-sm:justify-center'>
        <div className="max-sm:h-[12rem] sm:h-[10rem] md:h-[11rem] lg:h-[10rem] flex flex-col mt-6 items-center py-1 px-8">
          <h2 className="text-3xl font-bold mb-3 text-white">BAZAAR</h2>
          <img
            src="https://iconape.com/wp-content/png_logo_vector/app-store-google-play-logo.png"
            alt=""
            className="max-sm:w-[6rem] sm:w-[7rem] md:w-[9rem] lg:w-[9rem]"
          />
          <div className="flex gap-5 text-2xl mt-6 cursor-pointer text-white">
            <Link to="https://www.X.com/ammarshah1252">
              <FaXTwitter className="ftrSocIco" />
            </Link>
            <Link to="https://www.instagram.com/abu_ammar_003">
              <FaInstagram className="ftrSocIco" />
            </Link>
            <Link to="https://www.facebook.com/ammarshah">
              <FaFacebook className="ftrSocIco" />
            </Link>
            <Link to="https://www.github.com/abuammar003">
              <FaGithub  className="ftrSocIco" />
            </Link>
          </div>
        </div>
        <div className="w-[17rem] p-6">
            <h6 className="text-xl mb-3 text-gray-300 font-bold">Mail Us:</h6>
            <p className="text-white text-lg">
              Bazaar Internet Private Limited, Old Agra Road Malegaon 423203, <br /> Maharashtra-India <br />{" "}
              Telephone: 08180951252 <br /> eMail: ammarshah1252@gmail.com
            </p>
          </div>
          </div>


        {/* <div className="w-full grid grid-cols-4 gap-8 max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center my-8"> */}
        <div className="flex justify-evenly max-sm:grid grid-cols-2 items-center my-8">
          
          <ul className="w-2/1 max-sm:mb-8">
            <li className="text-xl mb-3 text-gray-300">ABOUT</li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Corporate Info
              </a>
            </li>
          </ul>
          <ul className='max-sm:mb-8'>
            <li className="text-xl mb-3 text-gray-300">HELP</li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Payments
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Cancellations
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Report
              </a>
            </li>
          </ul>
          <ul>
            <li className="text-xl mb-3 text-gray-300"> POLICY</li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Security
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Sitemap
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-lg p-1 cursor-pointer font-normal text-white"
              >
                Compliance
              </a>
            </li>
          </ul>
        </div>
      </div>

    <div className='flex-col justify-center bg-green-600 items-center text-white pb-4'>
      <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex-col justify-center gap-4 p-2 ">
        <h4 className="flex justify-center gap-2 text-lg font-normal items-center">
          <FaSellsy className="fotSitDevIco" />
          Become a Seller
        </h4>
        <h4 className="flex justify-center gap-2 text-lg font-normal items-center">
          <PiShootingStarBold className="fotSitDevIco" />
          Advertise
        </h4>
        <h4 className="flex justify-center gap-2 text-lg font-normal items-center">
          <FaGifts className="fotSitDevIco" />
          Gift Cards
        </h4>
        <h4 className="flex justify-center gap-2 text-lg font-normal items-center">
          <FaRegQuestionCircle className="fotSitDevIco" />
          Help Center
        </h4>
      </div>
        <h3 className="flex justify-center gap-2 text-lg font-normal items-center mt-4">
          <FaRegCopyright className="fotSitDevIco" />
          2024 AmmarShah- All Right Reserved
        </h3>
    </div>

    </div>
  );
}

export default ShoppingFooter ;




