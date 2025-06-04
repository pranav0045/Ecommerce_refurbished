import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect, useReducer, useRef, useState } from "react";
import { filter_data } from "../redux/productSlice";
import { setProducts } from "../redux/productSlice";
import { productArray } from "../utils/api";
import { company_wise_filter } from "../redux/productSlice";
import { price_wise_filter } from "../redux/productSlice";
import { color_wise_filter } from "../redux/productSlice";

const Product = () => {

    let [priceValue, setpriceValue] = useState(0);
    const dispatch = useDispatch();
  

    const filter_category = [
        {
            id: 1,
            name: "All products",
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


    ]

    //color array.

    const colorArray = [

        {
            id: 1,
            value: "Black",
            color: "black",
            content: " ",
        },

        {
            id: 2,
            value: "White",
            color: "white",
            content: " ",
        },

        {
            id: 3,
            value: "Blue",
            color: "blue",
            content: " ",
        },

        {
            id: 4,
            value: "gold",
            color: "yellow",
            content: " ",
        },
        {
            id: 5,
            value: "All",
            color: "green",
            content: "All",
        },
    ]

    const { data } = useSelector((state) => state.product);
    let { filterData } = useSelector((state) => state.product);

    //will filter the data as per the category.
    const filter_product = (name) => {
        dispatch(filter_data(name));
    }


    //will filter companywise data.
    const companyFilter = (value) => {
        dispatch(company_wise_filter(value));
        clearRadio();
    }

    //will filter price-wise data.
    const inputChange = (value) => {
        setpriceValue(value);
        dispatch(price_wise_filter(value));
        clearRadio();
    }

    //will filter color-wise.
    const colorFilter = (value) => {
        dispatch(color_wise_filter(value));
        clearRadio();
    }

    //to disable radio buttons.

    function clearRadio(){
        let radio = document.querySelectorAll(".radio-btn");
        radio.forEach(element => {
            element.checked = false;
        });
    }

    console.log(data);

    return (
        <div className="product  w-full mb-10 min-h-full mt-24 flex justify-center">

            <div className="w-[95%] min-h-[800px] flex flex-row">

                <div className="aside w-[20%] h-[100%] bg-[#dadada] pl-5 pr-4 flex flex-col gap-12">


                    <div className="category mt-10 flex flex-col gap-3 justify-center w-[100%] h-[200px]">

                        <h1 className="text-2xl font-sans font-bold">category</h1>
                        <div className="category-shift w-[70%] ml-12 flex flex-col mt-3 justify-center gap-4">

                            {
                                filter_category.map((text) => {
                                    return <div className="flex flex-row gap-5 items-center">
                                        <input onClick={() => { filter_product(text.name) }} className="w-[25px] h-[25px] cursor-pointer radio-btn" type="radio" name="name" id="" defaultChecked={text.radio} />
                                        <h1 className="category text-xl font-sans cursor-pointer" key={text.id}>{text.name}</h1>
                                    </div>
                                })
                            }

                        </div>
                    </div>

                    <div className="color-wise flex  flex-col gap-2 w-[100%] h-[100px]">

                        <h1 className="font-sans font-bold text-2xl">Color</h1>

                        <div className="flex mt-3 flex-row ml-8 gap-3">

                            {
                                colorArray.map((item) => {
                                    return <div onClick={() => { colorFilter(item.value) }} className="w-[40px] h-[40px] cursor-pointer rounded-full flex text-white font-mono items-center justify-center text-[16px] font-semibold" style={{ backgroundColor: `${item.color}` }}>{item.content}</div>
                                })

                            }
                        </div>

                    </div>


                    <div className="price-wise flex gap-4 flex-col w-[100%] h-[150px] cursor-pointer">
      
                        <label className="font-sans font-bold text-2xl" htmlFor="price">price</label>
                        <div className="ml-10">
                        {priceValue <= 15000 ? <p className="text-green-500 font-mono text-xl font-semibold">${priceValue}</p> : <p className="text-red-500 font-mono text-xl font-semibold">${priceValue}</p>}
                        <input onChange={(e) => inputChange(e.target.value)} className="" type="range" name="price" id="price" min={0} max={100000} step={5} />
                        </div>
                    </div>

                    <div className="company-wise mt-[-30px] w-[100%] min-h-[50px]">
                        <select className="w-[80%] bg-[#626161] text-white min-h-[100%] text-xl px-3 outline-none font-sans rounded-md" onChange={(e) => { companyFilter(e.target.value) }} onClick={(e)=>{
                            companyFilter(e.target.value);
                        }} name="company" id="">
                            <option value="All">All</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Xiaomi">Xiaomi</option>
                            <option value="Lenovo">Lenovo</option>
                            <option value="Fire-Boltt">Fire-Boltt</option>
                            <option value="Hp">Hp</option>


                        </select>
                    </div>

                </div>
                <div className="product-container w-[80%] min-h-[800px] flex flex-row gap-6
             justify-evenly flex-wrap p-3">
                    {
                        filterData.length > 1 ? filterData.map((item) => {

                            return <ProductCard
                                productName={item.productName}
                                key={item.id}
                                productImg={item.productImg}
                                category={item.category}
                                price={item.price}
                                specs={item.specs}
                                companyName={item.companyName}
                                id={item.id}

                            />
                        }) : data.map((item) => {

                            return <ProductCard
                                productName={item.productName}
                                key={item.id}
                                productImg={item.productImg}
                                category={item.category}
                                price={item.price}
                                specs={item.specs}
                                companyName={item.companyName}
                                id={item.id}

                            />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Product;