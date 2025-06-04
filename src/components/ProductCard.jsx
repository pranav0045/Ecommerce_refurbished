import { Link } from "react-router-dom";

const ProductCard = ({ id, productName, category, specs, companyName, price, productImg }) => {

    return (
        <Link to={`/productPage/${id}`} className="product-card flex flex-col rounded-md gap-2 shadow-2xl w-[23%] h-[410px] mb-10">

            <div className="img hover:scale-105 transition-all w-[100%] h-[55%]">
                <img className="ml-2 w-[67%] h-[100%]" src={productImg} alt="" />
            </div>
            <div className="text flex ml-2 flex-col gap-1">
                <h1 className="text-xl font-serif font-bold">{productName}</h1>
                <h2>{companyName}</h2>
                <h2>{category}</h2>
                <p>{specs}</p>
                <p className="font-mono text-xl text-red-600 font-semibold">&#8377;{price}</p>

            </div>
        </Link>
    )
}

export default ProductCard;