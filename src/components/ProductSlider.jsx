import { useRef } from "react";
import { Link } from "react-router-dom";

const ProductSlider = ({ itemArray }) => {


    return (
           <>
            {
                itemArray.map((product) => {
                    return <Link to={`/productPage/${product.id}`} className="productCard phone-card transition-all"  key={product.id}>
                        <img className="hover:scale-90 transition-all" src={product.productImg} alt="" />
                        <h1 className="text-2xl font-semibold font-mono">{product.productName}</h1>
                        <h2 className="font-semibold text-[20px]">{product.companyName}</h2>
                        <p className="font-extrabold text-red-500 text-xl">&#8377;{`${product.price}`}</p>
                        <h2>{product.specs}</h2>
                        <p className="text-gray-700">{product.desc}</p>
                    </Link>
            
                })
            }

        </>

    )
}

export default ProductSlider;