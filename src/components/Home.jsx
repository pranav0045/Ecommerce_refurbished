import { useEffect, useRef, useState } from "react";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ProductSlider from "./ProductSlider";
import watch from '../images/watch.jpg'




const sliderArray = [
    {
        url: <Slider1 />
    },
    {
        url: <Slider2 />
    },

    {
        url: <Slider3 />
    },
]



const Home = () => {



    let [sliderID, setsliderId] = useState(0);
    const container1 = useRef();
    const container2 = useRef();
    const container3 = useRef();



    const handlePrevious = () => {

        if (sliderID > 0) {
            setsliderId(sliderID = sliderID - 1);
        }
    }

    const handleNext = () => {
        if (sliderID < 2) {
            setsliderId(sliderID = sliderID + 1);
        }
    }


    const { data } = useSelector((state) => state.product);

    // laptops.
    let laptops = [];
    laptops = data.filter((item) => {
        return item.category === "Laptop"
    })


    //phones
    let phones = [];
    phones = data.filter((item) => {
        return item.category === "Phone"
    })

    //watches.
    let watches = [];
    watches = data.filter((item) => {
        return item.category === "Watch"
    })


    // function for 1st card slide scroller.
    function preScroll() {
        container1.current.focus();
        container1.current.scrollLeft -= 800;
    }

    function nextScroll() {
        container1.current.focus();
        container1.current.scrollLeft += 800;
    }

    //function for 2nd card slide scroller.
    function preScroll1() {
        container2.current.focus();
        container2.current.scrollLeft -= 800;
    }

    function nextScroll1() {
        container2.current.focus();
        container2.current.scrollLeft += 800;
    }

    //function for 3rd card scroll.
    function preScroll2() {
        container3.current.focus();
        container3.current.scrollLeft -= 800;
    }

    function nextScroll2() {
        container3.current.focus();
        container3.current.scrollLeft += 800;
    }



    return (
<>

        <div className="flex w-full h-screen justify-center relative">

            {
                sliderID != 0 ? <FaChevronLeft onClick={handlePrevious} className="absolute z-20 right-[700px] text-3xl top-[420px] cursor-pointer" />
                    : ""}

            {
                sliderID !== 2 ? <FaChevronRight onClick={handleNext} className="absolute z-20 right-16 text-3xl top-[420px] cursor-pointer" /> : ""
            }

            {
                // will change the slide images onCLICK
                sliderArray[sliderID].url
            }

        </div>


        
            {/* phones */}

            <section className="phone-section w-[full] mt-20 h-[800px] flex flex-col items-center">

                <h1 className="text-3xl font-semibold m-8 font-mono">Phones</h1>
                <div className="phones flex justify-center w-[95%] h-[100%] relative">
                    <FaChevronLeft onClick={preScroll1} className=" cursor-pointer bg-[#dadada] p-4 rounded-full text-6xl text-white font-extrabold absolute left-0 top-80 hover:bg-gray-400 transition-all hover:text-9xl " />
                    <FaChevronRight onClick={nextScroll1} className=" cursor-pointer text-6xl p-4 bg-[#dadada] rounded-full text-white absolute right-1 top-80 font-extrabold hover:bg-gray-400 transition-all hover:text-9xl" />


                    <div className="productSlider" ref={container2}>
                        <ProductSlider itemArray={phones} key={phones.id} />
                    </div>




                </div>
            </section>

            {/* laptops */}

            <section className="laptops-section w-[full] mt-16 h-[800px] flex flex-col items-center">

                <h1 className="text-3xl font-semibold m-8 font-mono">Laptops</h1>
                <div className="laptops flex justify-center w-[95%] h-[100%] relative">
                    <FaChevronLeft onClick={preScroll} className=" cursor-pointer bg-[#dadada] p-4 rounded-full text-6xl text-white font-extrabold absolute left-0 top-80 hover:bg-gray-400 hover:text-9px transition-all " />
                    <FaChevronRight onClick={nextScroll} className=" cursor-pointer text-6xl p-4 bg-[#dadada] rounded-full text-white absolute right-1 top-80 font-extrabold  hover:bg-gray-400 hover:text-9px transition-all" />
                    <div className="productSlider" ref={container1}>

                        <ProductSlider itemArray={laptops} key={laptops.id} />
                    </div>
                </div>
            </section>



            {/* watches */}

            <section className="watch-section w-[full] mt-16 h-[800px] flex flex-col items-center">

                <h1 className="text-3xl font-semibold m-8 font-mono">Watches</h1>
                <div className="watches flex justify-center w-[95%] h-[100%] relative">
                    <FaChevronLeft onClick={preScroll2} className=" cursor-pointer bg-[#dadada] p-4 rounded-full text-6xl text-white font-extrabold absolute left-0 top-80  hover:bg-gray-400 hover:text-9xl transition-all " />
                    <FaChevronRight onClick={nextScroll2} className=" cursor-pointer text-6xl p-4 bg-[#dadada] rounded-full text-white absolute right-1 top-80 font-extrabold  hover:bg-gray-400 hover:text-9xl transition-all" />
                    <div className="productSlider" ref={container3}>

                        <ProductSlider itemArray={watches} key={watches.id} />
                    </div>
                </div>
            </section>

</>










    )
}

export default Home;

