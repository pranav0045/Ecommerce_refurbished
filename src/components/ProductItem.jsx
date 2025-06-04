
const ProductItem = ({id,productName,productImg,category,price,phone,specs,companyName,deleteProductHandler}) =>{

    return (
        <div className="w-[100%] flex justify-evenly items-center min-h-[100px] h-[100%] shadow-md py-5">
            
            <div className="w-[10%] flex flex-col gap-3 h-[100%]">
                <img className="cursor-pointer w-[100%]" src={productImg} alt="" />
                <h1 className="font-sans text-xl">{productName}</h1>
            </div>

            <div>
                <h1>{category}</h1>
                <h1>{companyName}</h1>
            </div>

            <div>
               <h1>&#8377;{price}</h1>
                <h1>{specs}</h1>
            </div>

            <div>
                <h1>{phone}</h1>
            </div>

            <div className="w-[8%] h-[40px]">
                <button onClick={()=>{deleteProductHandler({phone})}} className="w-[100%] h-[100%] rounded-md outline-none text-white font-bold font-sans active:scale-95 transition-all bg-red-500">DELETE</button>
            </div>

        </div>
    )
}

export default ProductItem;