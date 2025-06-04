import { RiDeleteBin2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const CartItem = ({ id, productName, productImg, category, specs, desc, companyName,itemPrice, quantity,deleteHandler,incrementHandler,decrementHandler}) => {

 const {data} = useSelector((state)=>state.product);

 let productDataItem = [];

 productDataItem = data.filter((item)=>{
   return item.id == id;
 })

 let {price} = productDataItem[0];
  


    return (
        <div className="flex flex-row w-[100%] justify-between gap-5 mt-5 items-center shadow-lg p-5">

            <div className="p-img cursor-pointer hover:scale-110 transition-all w-[20%] h-[250px]">
                <img className="w-[100%] h-[100%]" src={productImg} alt="" />
            </div>

            <div className="desc flex flex-col p-5 items-start max-w-[250px]">
                <h1 className="text-2xl font-serif font-bold">{productName}</h1>
                <p className="font-mono text-xl font-semibold">{category}</p>
                <p>{specs}</p>
                <p className="font-extrabold text-xl">&#8377;{`${itemPrice}`}</p>
            </div>

            <div className="btn flex gap-3 items-center">

                <button onClick={()=>{incrementHandler({id,price})}} className="w-[60px] h-[43px] text-white bg-gradient-to-tr from-green-400 to-green-800 font-extrabold text-2xl rounded-md hover:scale-95 transition-all border-none">+</button>
                <p className="font-semibold text-2xl font-mono">{quantity}</p>

                <button onClick={()=>{decrementHandler({id,price})}} className="w-[60px] h-[43px] text-white bg-gradient-to-tr from-red-400 to-red-800 font-extrabold text-2xl rounded-md hover:scale-95 transition-all border-none">-</button>

            </div>

            <div className="del-btn">
                <RiDeleteBin2Fill onClick={()=>{deleteHandler(id)}} className="text-4xl cursor-pointer text-black hover:text-red-600 transition-all" />
            </div>

        </div>
    )
}

export default CartItem;