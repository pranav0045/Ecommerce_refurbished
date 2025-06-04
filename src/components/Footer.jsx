import React from "react";
import {
    FaInstagram,
    FaDribbble,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import logo from '../images/imglogo.png'
import { Link } from "react-router-dom";
  
  const Footer = () => {
      const socialLinks = [
      { label: "YouTube", icon: FaYoutube },
      { label: "Instagram", icon: FaInstagram},
      { label: "Twitter", icon: FaXTwitter },
      { label: "Dribbble", icon: FaDribbble },
    ];
  
    const links = [
      [
        { label: "Company", key: "header-1", goes:"/about" },
        { label: "About us", key: "item-1-1",goes:"/about" },
        { label: "Products", key: "item-1-2",goes:"/products" },
        { label: "Contact us", key: "item-1-3",goes:"/contact" },
        { label: "Pricing", key: "item-1-4",goes:"/cart" },
      ],

      [
        { label: "Support", key: "header-2",goes:"/about"},
        { label: "Help center", key: "item-2-1",goes:"/about"},
        { label: "Terms of service", key: "item-2-2",goes:"/about" },
        { label: "Legal", key: "item-2-3",goes:"/about" },
        { label: "Privacy policy", key: "item-2-4",goes:"/contact"},
        { label: "Status", key: "item-2-5",goes:"/home" },
      ],
    ];

  
    return (
        
        <div className="app min-h-[300px] font-poppins">
        <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-gray-700 text-white w-full p-4 relative">
          <div className=" ml-10 ">
            <div className="footer-img flex items-center">
              <img
                src={logo}

                alt="404"
                className="w-20 h-auto rounded-3xl"
              />
              <span className="text-3xl font-bold pl-2 text-white">
               <span className="font-black text-black">BUY  <span className="text-red-500">n</span> </span> <span className="text-orange-400"> SELL </span>
              </span>
            </div>
          
            <div className="footer-icons flex items-center space-x-3 mt-12">
              
              {socialLinks.map((socialLink, index) => {
                const Icon = socialLink.icon;
                return (
                  <Icon
                    key={`social-${index}`}
                    className="w-14 h-14 p-2 rounded-full bg-green-400 hover:bg-white hover:text-green-600 cursor-pointer"
                  />
                );
              })}
            </div>
          </div>
          <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
            {links.map((col, index) => {
              return (
                <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                  {col.map((link, index) => {
                    return (
                      <Link to={`${link.goes}`}>
                      <li
                        key={`link-${col}-${index}`}
                        className={`text-gray-400 cursor-pointer my-2 ${
                          link.key === "header-1" || link.key === "header-2"
                            ? "text-2xl text-white"
                            : ""
                        }`}
                      >
                        {link.label}
                      </li>
                      </Link>
                    );
                  })}
                </ul>
              );
            })}
          </div>

          <div className="footer-form flex flex-col my-2  ">
            <label className="text-lg font-semibold text-white my-2">
              Stay up to date
            </label>
            <input
              type="email"
              placeholder="Subscribe to our email"
              className="mt-2 w-full border-none rounded-lg py-3 px-6"
            />
        </div>

        <div className="infos text-gray-400 absolute bottom-0 bg-black w-full h-12 text-center align-middle flex justify-center items-center" >
            <span>Copyright © 2024 Buy n sell.</span>
            <span>All rights reserved</span>
          </div>  
       
       </div>
       </div>
      
      
    );
  };
  
  
  export default Footer;