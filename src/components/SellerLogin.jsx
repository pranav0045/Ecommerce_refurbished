import { useState } from "react";
import { toast } from "react-toastify";
import { setuserRequest } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";



const SellerLogin = ({ adduserproduct }) => {

    const dispatch = useDispatch();
   
    const filter_category = [

        {
            id: 1,
            name: "select category",

        },
        {
            id: 2,
            name: "Phone",

        },
        {
            id: 3,
            name: "Laptop",
        },

        {
            id: 4,
            name: "Watch",

        },

        {
            id: 5,
            name: "Headphone",
        },


    ]

    const colorArray = [
        {
            id: 1,
            value: "select color",
            content: " ",
        },

        {
            id: 2,
            value: "Black",
            content: " ",
        },

        {
            id: 3,
            value: "White",
            content: " ",
        },

        {
            id: 4,
            value: "Blue",
            content: " ",
        },

        {
            id: 5,
            value: "gold",
            content: " ",
        },


    ]


    const [userItem, setuserItem] = useState({
        id: null,
        productName: "",
        category: "",
        price: 0,
        specs: "",
        companyName: "",
        productImg: "",
        desc: "",
        color: "",
        phone: "",
        document: "",

    })


    //will handle input setStates..
    const inputEvent = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);

        const { value, name } = event.target;

        setuserItem((pre) => {

            if (name === "productName") {

                return {
                    id: value,
                    productName: value,
                    category: pre.category,
                    price: pre.price,
                    specs: pre.specs,
                    companyName: pre.companyName,
                    productImg: pre.productImg,
                    desc: pre.desc,
                    color: pre.color,
                    phone: pre.phone,
                    document: pre.document,

                };
            }

            else if (name === "companyName") {
                return {
                    id: pre.productName,
                    productName: pre.productName,
                    category: pre.category,
                    price: pre.price,
                    specs: pre.specs,
                    companyName: value,
                    productImg: pre.productImg,
                    desc: pre.desc,
                    color: pre.color,
                    phone: pre.phone,
                    document: pre.document,
                }
            }

            else if (name === "specs") {
                return {
                    id: pre.productName,
                    productName: pre.productName,
                    category: pre.category,
                    price: pre.price,
                    specs: value,
                    companyName: pre.companyName,
                    productImg: pre.productImg,
                    desc: pre.desc,
                    color: pre.color,
                    phone: pre.phone,
                    document: pre.document,
                }
            }

            else if (name === "phone") {
                return {
                    id: pre.productName,
                    productName: pre.productName,
                    category: pre.category,
                    price: pre.price,
                    specs: pre.specs,
                    companyName: pre.companyName,
                    productImg: pre.productImg,
                    desc: pre.desc,
                    color: pre.color,
                    phone: value,
                    document: pre.document,
                }
            }

            else if (name === "price") {
                return {
                    id: pre.productName,
                    productName: pre.productName,
                    category: pre.category,
                    price: value,
                    specs: pre.specs,
                    companyName: pre.companyName,
                    productImg: pre.productImg,
                    desc: pre.desc,
                    color: pre.color,
                    phone: pre.phone,
                    document: pre.document,
                }
            }

            else if (name === "productImg") {
                return {
                    id: pre.productName,
                    productName: pre.productName,
                    category: pre.category,
                    price: pre.price,
                    specs: pre.specs,
                    companyName: pre.companyName,
                    productImg: value,
                    desc: pre.desc,
                    color: pre.color,
                    phone: pre.phone,
                    document: pre.document,
                }
            }

            else if (name === "document") {
                return {
                    id: pre.productName,
                    productName: pre.productName,
                    category: pre.category,
                    price: pre.price,
                    specs: pre.specs,
                    companyName: pre.companyName,
                    productImg: pre.productImg,
                    desc: pre.desc,
                    color: pre.color,
                    phone: pre.phone,
                    document: value,
                }
            }

            else if (name === "category") {

                return {
                    id: pre.productName,
                    productName: pre.productName,
                    category: value,
                    price: pre.price,
                    specs: pre.specs,
                    companyName: pre.companyName,
                    productImg: pre.productImg,
                    desc: pre.desc,
                    color: pre.color,
                    phone: pre.phone,
                    document: pre.document,
                }
            }

            else if (name === "color") {
                return {
                    id: pre.productName,
                    productName: pre.productName,
                    category: pre.category,
                    price: pre.price,
                    specs: pre.specs,
                    companyName: pre.companyName,
                    productImg: pre.productImg,
                    desc: pre.desc,
                    color: value,
                    phone: pre.phone,
                    document: pre.document,
                }
            }

            else if (name === "desc") {
                return {
                    id: pre.productName,
                    productName: pre.productName,
                    category: pre.category,
                    price: pre.price,
                    specs: pre.specs,
                    companyName: pre.companyName,
                    productImg: pre.productImg,
                    desc: value,
                    color: pre.color,
                    phone: pre.phone,
                    document: pre.document,
                }
            }

        })
    }

    
    //will send userItem to redux.
    const addToStore = () => {
        console.log(userItem);
        if (userItem.id === null || userItem.category === "" || userItem.color === "" || userItem.companyName === "" || userItem.desc === "" || userItem.document === "" || userItem.phone === "" || userItem.price === "" || userItem.productImg === "" || userItem.productName === "" || userItem.specs === "") {
            toast.error("all fileds are mandatory !")
        }
        else {
            toast.success("product added to store")
            dispatch(setuserRequest(true));
               console.log(userItem);  
                adduserproduct(userItem);
                setuserItem(() => {
                    return {
                        id: "",
                        productName: "",
                        category: "",
                        price: 0,
                        specs: "",
                        companyName: "",
                        productImg: "",
                        desc: "",
                        color: "",
                        phone: "",
                        document: "",
                    }
        
                })
               
        }
        
    }



    return (
        <div className="w-full mb-2 h-[1450px] flex justify-center items-center mt-20">

            <div className="w-[95%] h-[100%] flex items-center justify-center py-5 flex-col bg-[#dadada]">


                <div className="container shadow-2xl py-5 w-[45%] flex flex-col gap-5 h-[90%] bg-white items-center rounded-xl">

                    <div className="text-4xl font-sans font-bold">Sell  <span className="text-orange-500">product</span></div>

                    <div className="w-[80%] h-[15%] gap-2 flex flex-col">
                        <label className="text-xl font-sans" htmlFor="product">Product name:</label>
                        <input className="bg-[#f6f3f3] px-2 text-[18px] rounded-md outline-none w-[90%] h-[100%]" type="text" name="productName" id="product" placeholder="enter product name"
                            value={userItem.productName}
                            onChange={inputEvent}

                        />
                    </div>


                    <div className="w-[80%] h-[15%] gap-2 flex flex-col">
                        <label className="text-xl font-sans" htmlFor="company">Product company:</label>
                        <input className="bg-[#f6f3f3] w-[90%] rounded-md text-[18px] px-2
                        outline-none h-[100%]" type="text" name="companyName" id="company" placeholder="enter company name"
                            value={userItem.companyName}
                            onChange={inputEvent}

                        />
                    </div>


                    <div className="w-[80%] h-[15%] gap-2 flex flex-col">
                        <label className="text-xl font-sans" htmlFor="company">enter specifications:</label>
                        <input className="bg-[#f6f3f3] w-[90%] rounded-md text-[18px] px-2
                        outline-none h-[100%]" type="text" name="specs" id="company" placeholder="enter product specs.."
                            value={userItem.specs}
                            onChange={inputEvent}
                        />
                    </div>



                    <div className="w-[80%] h-[15%] gap-2 flex flex-col">
                        <label className="text-xl font-sans" htmlFor="phone">phone no:</label>
                        <input className="bg-[#f6f3f3] w-[90%] rounded-md text-[18px] px-2 
                        outline-none h-[100%]" type="number" name="phone" id="phone" placeholder="enter phone number"
                            value={userItem.phone}
                            onChange={inputEvent}

                        />
                    </div>

                    <div className="w-[80%] h-[15%] flex gap-2 flex-col">
                        <label className="text-xl font-sans" htmlFor="price">enter your price:</label>
                        <input className="bg-[#f6f3f3] w-[90%] rounded-md px-2 text-[18px]
                        outline-none h-[100%]" type="number" name="price" id="price" placeholder="enter desired price."
                            value={userItem.price}
                            onChange={inputEvent}

                        />
                    </div>

                    <div className="w-[80%] h-[15%] flex flex-col">
                        <label className="text-xl font-sans" htmlFor="prodimg">product image:</label>
                        <input className="px-2 bg-[#f6f3f3] text-[18px] w-[90%] h-[100%]" type="text" name="productImg" id="prodimg" placeholder="enter product url"
                            value={userItem.productImg}
                            onChange={inputEvent}
                        />
                    </div>


                    <div className="w-[80%] h-[15%] flex flex-col">
                        <label className="text-xl font-sans" htmlFor="prodimg2">verification document:</label>
                        <input className="px-2 bg-[#f6f3f3] text-[18px] w-[90%] h-[100%]" type="text" name="document" id="prodimg2" placeholder="enter a verification document"

                            value={userItem.document}
                            onChange={inputEvent}
                        />
                    </div>

                    <div className="category-list w-[80%] flex flex-col gap-2 h-[15%]">
                        <label className="text-xl font-sans" htmlFor="select">Product category:</label>

                        <select className="bg-[#f6f3f3] text-xl w-[90%] h-[100%]
                        outline-none rounded-md px-2" name="category" id=""
                            value={userItem.category}
                            onChange={inputEvent}
                        >
                            {
                                filter_category.map((item) => {
                                    return <option value={item.name} key={item.id}>{item.name}</option>
                                })
                            }

                        </select>
                    </div>

                    <div className="w-[80%] h-[15%] flex flex-col">
                        <label className="font-sans text-xl" htmlFor="color">Product color:</label>


                        <select className="w-[90%] h-[100%] bg-[#f6f3f3]
                        outline-none rounded-md px-2 text-xl"     name="color" id=""
                            value={userItem.color}
                            onChange={inputEvent}
                        >

                            {
                                colorArray.map((item) => {
                                    return <option value={item.value} key={item.id}>{item.value}</option>

                                })
                            }

                        </select>

                    </div>

                    <div className="w-[80%] h-[15%] gap-2 flex flex-col">
                        <label className="text-xl font-sans" htmlFor="area">Add product description:</label>
                        <textarea className="bg-[#f6f3f3] text-xl outline-none px-2 rounded-md w-[80%] h-[100%]" name="desc" id="area" cols="30" rows="5" placeholder="product details"
                            value={userItem.desc}
                            onChange={inputEvent}

                        ></textarea>
                    </div>
                
                
                        <div className="ml-[140px] w-[100%] h-[10%]">

                            <button onClick={addToStore} className="w-[40%] h-[90%] rounded-lg px-3 text-white text-xl font-bold outline-none bg-gradient-to-tr from-cyan-400 to-cyan-800 active:scale-95 transition-all">Add Product</button>

                        </div>
        
                </div>
            </div>

        </div>
    )
}

export default SellerLogin;