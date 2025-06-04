import pranav from '../images/photo.jpg';
import ani from '../images/ani.jpg';
import doke from '../images/doke.jpg';
import avi from '../images/avi.jpg';
import logo from '../images/imglogo.png';
import kunal from '../images/kunalimg.jpg';
import com from '../images/com.jpg';
import work from '../images/work.jpg';
import office from '../images/office.jpg';
import text from '../images/text.jpg';

import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="w-full min-h-screen px-12 flex mt-36 flex-col mb-10">

      <div className="section01 w-[100%] text-8xl font-sans my-10 font-bold">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("E-Commerce Buy & Sell")
              .pauseFor(500)
              .deleteAll()
              .typeString("Welcomes You")
              .pauseFor(1000)
              .deleteAll()
              .typeString("ABOUT US ")
              .start();
          }}
        />
      </div>
      <div className=" w-[100%] gap-20 flex justify-between items-center">
        <div className="img_container w-[65%] shadow-xl">
          <img className='w-[100%] h-[400px] rounded-2xl' src={work}></img>
        </div>
        <div className="para01 written flex flex-col gap-5">
          <h1 className="tag text-[80px] font-bold">E-commerce buy & sell</h1>
          <p className='w-[80%] text-xl'>
          ecommerce buy and sell contains budget friendly refurbished products which are directly upload end to end by seller of the product. the best thing about this web platform is it contains both buying and selling options so user can buy or sell a product
          </p>
          <Link to={'/home'}>
          <button className='w-[25%] h-[50px] bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-lg'>Our website</button>
          </Link>
        </div>
      </div>
      
      <div className="hero_container flex flex-row mt-20 w-[100%] h-[600px] justify-between items-center">
        <div className="para02 written w-[63%]">
          <p className='text-xl'>
            The E-Commerce Buy & Sell Group is one of India’s leading digital
            commerce entities and includes group companies E-Commerce Buy &
            Sell, Myntra, E-Commerce Buy & Sell Wholesale, E-Commerce Buy & Sell
            Health+, and Cleartrip. Started in 2007, E-Commerce Buy & Sell has
            enabled millions of sellers, merchants, and small businesses to
            participate in India's digital commerce revolution. With a
            registered customer base of more than 500 million, E-Commerce Buy &
            Sell's marketplace offers over 150 million products across 80+
            categories. Today, there are over 14 lakh sellers on the platform,
            including Shopsy sellers. With a focus on empowering and delighting
            every Indian by delivering value through technology and innovation,
            E-Commerce Buy & Sell has created lakhs of jobs in the ecosystem
            while empowering generations of entrepreneurs and MSMEs. E-Commerce
            Buy & Sell is known for pioneering services such as Cash on
            Delivery, No Cost EMI and easy returns, which are customer-centric
            innovations that have made online shopping more accessible and
            affordable for millions of Indians.
          </p>
        </div>
        <div className="her_img w-[35%] h-[70%]">
          <img className='w-[100%] h-[100%] rounded-lg shadow-xl' src={office}></img>
        </div>
      </div>
      <div className="thought mt-20 flex items-center justify-center w-[100%] h-[400px]">
        <img className='w-[50%] h-[100%] shadow-xl' src={text}></img>
      </div>
      
        <div className="flex justify-center gap-10 items-center w-[100%] h-[400px]">
          <img className="w-[20%] h-[80%] shadow-2xl cursor-pointer" src={logo}></img>
          <div className="data03">
            <p className='text-[80px] font-bold'> 
              <Typewriter
                className="company_name"
                onInit={(typewriter) => {
                  typewriter
                    .typeString("E-Commerce")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("BUY & SELL")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("E-Commerce Buy & Sell")
                    .start();
                }}
              />
            </p>
          </div>
          </div>

          {/* <div className="para03 written w-[100%] flex justify-center items-center h-[400px]">
            <p className='w-[90%] text-xl'>
              The E-Commerce Buy & Sell Group is one of India’s leading digital
              commerce entities and includes group companies E-Commerce Buy &
              Sell, Myntra, E-Commerce Buy & Sell Wholesale, E-Commerce Buy &
              Sell Health+, and Cleartrip. Started in 2007, E-Commerce Buy &
              Sell has enabled millions of sellers, merchants, and small
              businesses to participate in India's digital commerce revolution.
              With a registered customer base of more than 500 million,
              E-Commerce Buy & Sell's marketplace offers over 150 million
              products across 80+ categories. Today, there are over 14 lakh
              sellers on the platform, including Shopsy sellers. With a focus on
              empowering and delighting every Indian by delivering value through
              technology and innovation, E-Commerce Buy & Sell has created lakhs
              of jobs in the ecosystem while empowering generations of
              entrepreneurs and MSMEs. E-Commerce Buy & Sell is known for
              pioneering services such as Cash on Delivery, No Cost EMI and easy
              returns, which are customer-centric innovations that have made
              online shopping more accessible and affordable for millions of
              Indians.
            </p>
          </div> */}
        
      
      <div className="leader w-[100%] px-3 flex flex-col justify-evenly pb-5 h-[700px] shadow-2xl rounded-xl">
        <h1 className="text-center text-4xl font-bold">Developer and leaders of our organization</h1>
      
          <div className="developer_profile flex gap-3 w-[100%] cursor-pointer">
            {/* <div className="w-[20%] hover:scale-125 transition-all h-[320px]">
            <img src={ani} className="w-[100%] h-[100%] rounded-full"></img>
            <label>Aniket Tagor <br></br>backend developer</label>
            </div> */}
            {/* <div className="w-[20%] h-[320px] hover:scale-125 transition-all">
            <img src={avi} className="w-[100%] h-[100%] rounded-full"></img>
            <label>Avinash Bhondave <br></br>Testing & Documentation</label>
            </div>
            <div className="dev01 w-[20%] h-[320px] hover:scale-125 transition-all">
            <img src={doke} className="w-[100%] h-[100%] rounded-full"></img>
            <label>Pranav Doke <br></br>Frontend developer</label>
            </div>
            <div className="w-[20%] h-[320px] hover:scale-125 transition-all">
            <img src={pranav} className="w-[100%] h-[100%] rounded-full"></img>
            <label>Pranav Dharkar <br></br>Frontend developer</label>
            </div> 
            <div className="w-[20%] h-[320px] transition-all hover:scale-125">
            <img src={kunal} className="w-[100%] h-[100%] rounded-full"></img>
            <label>Kunal Dhumal<br></br>Frontend development & Documentation </label>
            </div> */}
          </div>
    
      
      </div>
      <div className="thank w-[100%] h-[500px] flex justify-center items-center border-6 mt-20">
        <h1 className="quota shadow-2xl p-10 w-[60%] text-3xl font-bold ">"Empower your small business to reach new heights with the click of a button. Transform dreams into sales, and aspirations into accomplishments. In the world of e-commerce, your growth knows no bounds. Seize the online stage, where small businesses become unstoppable giants."</h1>
    
      </div>
    </div>
  );
}

export default About;


