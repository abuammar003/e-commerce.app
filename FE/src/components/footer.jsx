
import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub, FaSellsy, FaGifts, FaRegCopyright, } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { PiShootingStarBold } from "react-icons/pi";
import { FaRegQuestionCircle } from "react-icons/fa";

const ShoppingFooter = () => {
  const currYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaXTwitter />,
      link: "https://x.com/ammarshah1252",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/abuammar_03/",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/abu-ammar-252448284/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/abuammar003",
    },
  ];

  const footerSections = [
    {
      title: "ABOUT",
      links: ["About Us", "Contact Us", "Careers"],
    },
    {
      title: "HELP",
      links: ["Payments", "Shipping", "FAQs"],
    },
    {
      title: "POLICY",
      links: ["Terms of Use", "Privacy", "Security"],
    },
  ];

  const quickLinks = [
    {
      icon: <FaSellsy />,
      name: "Become a Seller",
    },
    {
      icon: <PiShootingStarBold />,
      name: "Advertise",
    },
    {
      icon: <FaGifts />,
      name: "Gift Cards",
    },
    {
      icon: <FaRegQuestionCircle />,
      name: "Help Center",
    },
  ];

  return (
    <footer className="mt-10 text-white">

      {/* Main Footer */}
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Brand */}
            <div className="lg:col-span-2">

              <div className="flex items-center gap-3">
                <div className="bg-white text-green-600 rounded-xl p-2.5">
                  <FiShoppingBag className="text-2xl" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold leading-6 text-black">
                    BAZAAR
                  </h2>
                  <p className="text-[11px] tracking-widest font-bold">
                    SHOP SMART
                  </p>
                </div>
              </div>

              <p className="text-sm text-green-50 leading-6 max-w-sm mt-5">
                Your simple and convenient online marketplace
                for everyday products, electronics, fashion and more.
              </p>

              {/* Social */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10
                    flex items-center justify-center
                    hover:bg-white hover:text-green-600
                    transition"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>

                <h3 className="text-sm font-bold tracking-wider mb-4">
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        to="#"
                        className="text-sm text-green-50
                        hover:text-white hover:underline transition"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

          {/* Contact */}
          <div className="border-t border-white/20 mt-10 pt-6">

            <div className="flex flex-col md:flex-row
            md:justify-between md:items-center gap-3">

              <div>
                <p className="text-lg font-semibold">
                  Bazaar Online Store
                </p>

                <p className="text-sm text-green-100 mt-1">
                  Old Agra Road, Malegaon 423203, Maharashtra, India
                </p>
              </div>

              <div className="text-sm text-green-100">
                <p>Phone: 08180951252</p>
                <p>Email: ammarshah1252@gmail.com</p>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-green-700">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">

          <div className="flex flex-wrap justify-center
          gap-x-8 gap-y-3">

            {quickLinks.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2
                text-sm sm:text-sm text-green-50
                hover:text-white cursor-pointer transition"
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}

          </div>

          <div className="border-t border-white/10 mt-5 pt-4
          flex justify-center items-center gap-2
          text-sm text-green-100">

            <FaRegCopyright />

            <span>
              {currYear} BAZAAR. All Rights Reserved.
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default ShoppingFooter;








    // ==================== OLD Footer Design ====================

// import React from 'react';
// import { Link } from "react-router-dom";
// import { FaXTwitter, FaInstagram, FaLinkedin , FaGithub, FaSellsy, FaGifts, FaRegCopyright, } from "react-icons/fa6";
// import { PiShootingStarBold } from "react-icons/pi";
// import { FaRegQuestionCircle } from "react-icons/fa";


// const ShoppingFooter = () => {

//   const currYear = new Date().getFullYear();


//   return (
//     <div>
//       <div className="bg-green-600 items-center p-2 mt-8">

//         <div className='flex justify-evenly max-sm:flex-col max-sm:justify-center'>
//         <div className="max-sm:h-[12rem] sm:h-[10rem] md:h-[11rem] lg:h-[10rem] flex flex-col mt-6 items-center py-1 px-8">
//           <h2 className="text-3xl font-bold mb-3 text-white">BAZAAR</h2>
//           <img
//             src="https://iconape.com/wp-content/png_logo_vector/app-store-google-play-logo.png"
//             alt=""
//             className="max-sm:w-[6rem] sm:w-[7rem] md:w-[9rem] lg:w-[9rem]"
//           />
//           <div className="flex gap-5 text-2xl mt-6 cursor-pointer text-white">
//             <Link to="https://www.X.com/ammarshah1252">
//               <FaXTwitter className="ftrSocIco" />
//             </Link>
//             <Link to="https://www.instagram.com/abuammar_03/">
//               <FaInstagram className="ftrSocIco" />
//             </Link>
//             <Link to="https://www.linkedin.com/in/abu-ammar-252448284/">
//               <FaLinkedin  className="ftrSocIco" />
//             </Link>
//             <Link to="https://www.github.com/abuammar003">
//               <FaGithub  className="ftrSocIco" />
//             </Link>
//           </div>
//         </div>
//         <div className="w-[17rem] p-6">
//             <h6 className="text-xl mb-3 text-gray-300 font-bold">Mail Us:</h6>
//             <p className="text-white text-lg">
//               Bazaar Internet Private Limited, Old Agra Road Malegaon 423203, <br /> Maharashtra-India <br />{" "}
//               Telephone: 08180951252 <br /> eMail: ammarshah1252@gmail.com
//             </p>
//           </div>
//           </div>


//         {/* <div className="w-full grid grid-cols-4 gap-8 max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center my-8"> */}
//         <div className="flex justify-evenly max-sm:grid grid-cols-2 items-center my-8">
          
//           <ul className="w-2/1 max-sm:mb-8">
//             <li className="text-xl mb-3 text-gray-300">ABOUT</li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Contact Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Careers
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Press
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Corporate Info
//               </a>
//             </li>
//           </ul>
//           <ul className='max-sm:mb-8'>
//             <li className="text-xl mb-3 text-gray-300">HELP</li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Payments
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Shipping
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Cancellations
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 FAQs
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Report
//               </a>
//             </li>
//           </ul>
//           <ul>
//             <li className="text-xl mb-3 text-gray-300"> POLICY</li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Terms of Use
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Security
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Privacy
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Sitemap
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="text-lg p-1 cursor-pointer font-normal text-white"
//               >
//                 Compliance
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//     <div className='flex-col justify-center bg-green-600 items-center text-white pb-4'>
//       <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex-col justify-center gap-4 p-2 ">
//         <h4 className="flex justify-center gap-2 text-lg font-normal items-center">
//           <FaSellsy className="fotSitDevIco" />
//           Become a Seller
//         </h4>
//         <h4 className="flex justify-center gap-2 text-lg font-normal items-center">
//           <PiShootingStarBold className="fotSitDevIco" />
//           Advertise
//         </h4>
//         <h4 className="flex justify-center gap-2 text-lg font-normal items-center">
//           <FaGifts className="fotSitDevIco" />
//           Gift Cards
//         </h4>
//         <h4 className="flex justify-center gap-2 text-lg font-normal items-center">
//           <FaRegQuestionCircle className="fotSitDevIco" />
//           Help Center
//         </h4>
//       </div>
//         <h3 className="flex justify-center gap-2 text-lg font-normal items-center mt-4">
//           <FaRegCopyright className="fotSitDevIco" />
//           {currYear} AmmarShah- All Right Reserved
//         </h3>
//     </div>

//     </div>
//   );
// }

// export default ShoppingFooter ;




