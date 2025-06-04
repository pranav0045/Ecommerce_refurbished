import { Link } from 'react-router-dom';
import slide1 from '../images/slide1.png';
import Typewriter from "typewriter-effect";

const Slider1 = () => {
  return (
    <section className="main1 w-[95%] h-[700px] flex flex-row items-center px-20 bg-[#dadada] mt-24 rounded-md">
      <div className="left w-[65%] flex flex-col ml-20  h-[100%] pt-44">
          <h1 className='text-7xl font-extrabold font-sans text-gray-800'>Ecommerce buy n sell</h1>
   
          <p className='text-2xl mt-5 w-[80%] text-gray-900 font-serif'>ecommerce buy and sell contains budget friendly refurbished phones which are directly upload end to end by seller of the product. the best thing about this web platform is it contains both buying and selling options so user can buy or sell a product</p>
        <div className="h-[50px] flex gap-8 mt-7 ">
          <Link to={'/products'} className='w-[20%] h-[100%]'>
            <button className="w-[100%] font-mono h-[100%] rounded-md text-2xl font-extrabold bg-gradient-to-tr from-cyan-400 to-cyan-800 text-white hover:border ">Shop</button>
          </Link>
          <Link to={"/sell"} className='w-[20%] h-[100%]'>          
          <button className="w-[100%] h-[100%] font-mono rounded-md text-2xl  bg-gradient-to-tr from-cyan-800 to-cyan-400 text-white font-extrabold hover:border ">Sell</button>
          </Link>
        </div>
      </div>
      <div className="right w-[35%] h-[100%] flex items-center justify-center">
        <div className="image w-[100%] h-[100%] items-center flex justify-end">
          <img className='w-[90%] h-[80%]' src={slide1} alt="" />
        </div>
      </div>
    </section>
  )
}
export default Slider1;