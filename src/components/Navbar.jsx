import { Link, Navigate, useNavigate } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import imglogo from '../images/imglogo.png';
import { useSelector } from "react-redux";



const Navbar = () => {

    //getting current user from the local storage.
    const user = JSON.parse(localStorage.getItem('user'));

    console.log(user);

    //to show the length of the cart.
    const { cartArray } = useSelector((state) => state.cart);
    

    const logout = () => {
        localStorage.clear('user');
        window.location.pathname = "/";

    }
    return (

        <header className='w-full h-[80px] shadow-lg flex flex-row items-center  justify-evenly fixed top-[-5px] left-0 bg-white z-30'>

            <div className="logo font-mono cursor-pointer ml-[-60px] flex items-center w-[8%] h-[50px]">

                <img className="w-[100%] h[100%]" src={imglogo} alt="" />
                <h1 className="font-extrabold text-[33px]"><span className='text-black'>BUY</span><span className='text-red-500'>n</span><span className='text-orange-500'>SELL</span></h1>
            </div>


            <div className="nav-items justify-center flex flex-row gap-12 w-[60%] text-xl font-bold">

                {user ? <Link to='/home'><h2>Home</h2></Link> : ""}
                {user ? <Link to='/products'><h2>Products</h2></Link> : ""}
                {user ? <Link to='/about'><h2>About</h2></Link> : ""}
                {user ? <Link to='/contact'><h2>Contact</h2></Link> : ""}


                {
                    user?.user?.email === "dharkarpranav48@gmail.com" ?
                        <Link to='/admin'><h2>Admin</h2></Link> : ""
                }

            </div>


            <div className="right-side w-[20%] items-center flex justify-start flex-row-reverse gap-8">


                <div>
                    {user ? <button className="w-[130px] h-[45px] text-white text-xl font-mono  outline-none bg-gradient-to-tr from-cyan-400 to-cyan-800 rounded-md font-semibold" onClick={logout}>Logout</button> : ""}

                </div>

              { user ? <Link className="relative" to={'/cart'}>
                    <GrCart className="text-4xl" />
                    {
                        cartArray.length > 0 && <p className="absolute w-[28px] h-[28px] top-[-12px] right-[-10px] text-white font-bold bg-red-500 rounded-full flex
                      justify-center items-center transition-all">{cartArray.length}</p>
                    }
                </Link> :""}


            </div>

        </header>


    )


}

export default Navbar;