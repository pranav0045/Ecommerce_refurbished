import { useDispatch, useSelector } from "react-redux";
import   CartItem from "./CartItem";
import { deleteCartArrray } from "../redux/cartSlice";
import { incrementQuantity } from "../redux/cartSlice";
import { decrementQuantity } from "../redux/cartSlice";
import empty from '../images/empty.webp';
import { Link, Navigate } from "react-router-dom";
import {toast} from "react-toastify";
import { calculatePrice } from "../redux/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
    //cartarray from redux.
    let { cartArray } = useSelector((state) => state.cart);
    const { subtotal, shipping, tax, total } = useSelector((state) => state.cart);
    
    //delete cart item.
    const deleteItemCart = (id) => {
        dispatch(deleteCartArrray(id));
        toast.info("item removed");
        
    }
    
    //increment cart item.
    const incrementQty = (prod) => {
        dispatch(incrementQuantity(prod));
       
    }
    
    //decrement cart item.
    const decrementQty = (prod) => {
        dispatch(decrementQuantity(prod));
    }

    //calculating price.
    useEffect(()=>{
      dispatch(calculatePrice());
    },[cartArray])
    
    
    const [amount , setamount] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleSubmit = (e)=>
    {
      if (input1.trim() === '' || input2.trim() === '') {
          alert('Please fill in the input field');
        } 
        else
        {
    e.preventDefault();
      var options = {
        key: "rzp_test_pjpasIloL6ZcJp",
        key_secret:"71T0KovK9K28MVZwDlF1HiDR",
        amount: total*100,
        currency:"INR",
        name:"E-commerce Buy and Sell ",
        description:"Thank you for purchasing apple product ",
        handler: function(response){
         alert(response.razorpay_payment_id); 
        },
        prefill: {
          name:"Aniket Tagpr",
          email:"aniket.tagor24@gmail.com",
          contact:"9359523343"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
    }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    
  }


 

    return (
        <div className="w-full min-h-[900px] mb-16 h-[100%] mt-24 flex justify-center">

            <div className="w-[95%] min-h-[100%] h-[100%] flex">

                {cartArray.length >= 1 ? <div className="aside w-[73%] min-h-[100%] h-[100%] flex  flex-col px-10 gap-10 scroll-smooth overflow-auto">
                    {

                        cartArray.map((item) => {
                            return <CartItem key={item.id}
                                id={item.id}
                                itemPrice={item.price}
                                productName={item.productName}
                                productImg={item.productImg}
                                category={item.category}
                                companyName={item.companyName}
                                quantity={item.quantity}
                                desc={item.desc}
                                specs={item.specs}
                                deleteHandler={deleteItemCart}
                                incrementHandler={incrementQty}
                                decrementHandler={decrementQty}
                        
                            />
                        })
                    }

                </div> : <div className="w-[73%] max-h-[100%] h-[100%] flex flex-col px-10 gap-10"> <img src={empty} alt="" /></div>}

                <div className="pricing shadow-2xl mt-5 rounded-md flex gap-6 flex-col w-[27%] max-h-[600px] bg-white p-5 ">

                    <div className="user mt-5 flex gap-1 flex-col w-[100%] h-[20%]">
                        <h1 className="text-xl font-sans font-semibold">Username:{user?.user?.email}</h1>
                
                        <h1 className="font-semibold text-xl font-sans">Total no of products:{cartArray.length}</h1>

                    </div>


                    <div className="price flex gap-2 flex-col w-[100%] h-[35%]">

                        <h1 className="text-xl font-sans">Subtotal:<span className="text-green-700">&#8377;{subtotal}</span></h1>
                        <h1 className="text-xl font-sans">Shipping:<span className="text-green-700">&#8377;{shipping}</span></h1>
                        <h1 className="text-xl font-sans">Tax:<span className="text-red-600">&#8377;{tax}</span></h1>
                        <h1 className="text-3xl font-bold font-mono">Total:<span className="text-green-700">&#8377;{total} </span></h1>
                    </div>
                    <div className="text">
                        <h1 className="my-2">Please Fill this Details before proced</h1>
                        <input
                        className=' bg-[#e8e7e7] mb-4 px-2 w-md lg:w-full h-[50%] rounded-md text-gray-600 placeholder:text-gray-600 outline-none font-sans'
                        placeholder="Delivery Address"
                        type="text"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                        >
                        </input>
                        <input
                        className=' bg-[#e8e7e7] mb-4 px-2 w-md lg:w-full h-[50%] rounded-md text-gray-600 placeholder:text-gray-600 outline-none font-sans'
                        placeholder="Phone Number "
                        type="text"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className="price flex items-center justify-center w-[100%] h-[20%] mt-10">
                            <button onClick={handleSubmit} className="w-[50%] font-mono h-[50%] rounded-md text-2xl font-extrabold bg-gradient-to-tr from-cyan-400 to-cyan-800 text-white active:scale-95 transition-all border-none ">proceed</button>
                    </div>



                </div>
            </div>

    
        </div>

    )
}

export default Cart;