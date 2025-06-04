import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCartArray } from "../redux/cartSlice";
import { incrementQuantity} from "../redux/cartSlice";
import { decrementQuantity} from "../redux/cartSlice";
import {toast} from "react-toastify";
import { calculatePrice } from "../redux/cartSlice";


const ProductPage = () =>{

    const dispatch = useDispatch();
    const {data} = useSelector((state)=> state.product);
    const {cartArray} = useSelector((state)=> state.cart);
    let {id} = useParams(); //used to get the parameter passed to the navigation.
    
    let quantityItem;
    let priceItem;

    let productDataItem = [];
    productDataItem = data.filter((item)=>{
        return id == item.id;
    })
    
    console.log(productDataItem);
    console.log(id);
    
    let {productImg,productName,price,category,specs,companyName,desc} = productDataItem[0];
    
    //products will be added to the cart array.
    const addToCart = (productData) =>{
        dispatch(addToCartArray(productData));
        toast.success("Added to cart");
    }
    
    //increment qty.
    
    const increment = (prod) =>{
        dispatch(incrementQuantity(prod));
    }
    

    const decrement = (prod) =>{
        dispatch(decrementQuantity(prod));
    }

    let isPresent = false;
    cartArray.map((item)=>{
        if(id === item.id)
        isPresent=true;
        quantityItem=item.quantity;    
        priceItem = item.price;
    })


    
    
    return(
        <div className="w-full flex justify-center h-[850px] mt-5">

            <div className="product-page flex w-[95%] h-[100%]">
                    
                    <div className="left-p flex items-center justify-center w-[50%] h-[100%]">
                         
                         <div className="image cursor-pointer w-[50%] h-[60%]">
                            <img className="w-[100%] h-[100%] hover:scale-125 transition-all" src={productDataItem[0].productImg} alt="" />
                         </div>
                    </div>

                    <div className="right-p flex flex-col w-[50%] h-[100%]  gap-5 pt-44">
                        <h1 className="text-6xl font-bold font-serif">{productDataItem[0].productName}</h1>
                        <h2 className="text-3xl font-mono">{productDataItem[0].category}</h2>
                        <h3 className="text-3xl font-bold">{productDataItem[0].companyName}</h3>
                     { isPresent ? <p className="text-4xl font-extrabold">&#8377;{`${priceItem}`}</p> :<p className="text-4xl font-extrabold">&#8377;{`${price}`} </p>}
                        <p className="text-3xl">{productDataItem[0].specs}</p>
                        <p className="text-2xl w-[80%] font-serif text-gray-600">{productDataItem[0].desc}</p>

                        <div className="btn flex gap-14">

                            <button onClick={()=>{addToCart({id,price,productImg,productName,category,companyName,specs,desc,quantity:1})}} className="text-white text-2xl w-[25%]
                            h-[53px] bg-gradient-to-br from-cyan-400 to-cyan-800 rounded-xl font-bold hover:scale-95 transition-all font-mono">Add to cart</button>

                            <div className="qty flex items-center gap-5">
                                <button onClick={()=>{increment({id,price})}} className="w-[80px] h-[53px] text-white bg-gradient-to-tr from-green-400 to-green-800 font-extrabold text-3xl rounded-full hover:scale-95 transition-all">+</button>
                                {
                                isPresent?<p className="text-2xl font-mono font-bold">{quantityItem}</p>:<p className="text-2xl font-mono font-bold">1</p>
                                }
                               
                                <button onClick={()=>{decrement({id,price})}} className="w-[80px] h-[53px] text-white bg-gradient-to-tr from-red-400 to-red-800 font-extrabold text-3xl rounded-full hover:scale-95 transition-all">-</button>
                            </div>
                        </div>
                          
                    </div>
            </div>

        
        </div>
    )
}

export default ProductPage;