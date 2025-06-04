import {FaUserTie } from 'react-icons/fa';
import { useDispatch,useSelector } from 'react-redux';
import { setuserRequest } from '../redux/productSlice';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';


function Dashboard({userItemState,deleteProduct}) {
    
    const dispatch = useDispatch();
    const{userRequest} = useSelector ((state) =>state.product);
    const {data} = useSelector((state)=>state.product);

   //will accept the user request to adding its product.
    const HandlerUser = () =>{ 
        dispatch(setuserRequest(false));
    }

    const deleteProductToapp = (phone) =>{
           deleteProduct(phone)
    }

    //getting user from local storage.
    const user = JSON.parse(localStorage.getItem('user'));


    
  return (

        <section className="text-gray-600 body-font mt-24 mb-10">
            <div className="container px-5 mx-auto mb-10">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl">
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1">10</h2>
                            <p className=" text-purple-500  font-bold" >Total Products</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" >
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" 
                            >10</h2>
                            <p className=" text-purple-500  font-bold" 
                            >Total Orders</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl" 
                     >
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" 
                            >20</h2>
                            <p className=" text-purple-500  font-bold" 
                            >Total Users</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" 
                    >
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1"
                            >20</h2>
                            <p className=" text-purple-500  font-bold" 
                        >Total Products</p>
                        </div>
                    </div>
                </div>
                
    

        <div className='w-full relative z-0 flex flex-col items-center mt-10  min-h-[1500px] h-[100%]'>

    { userRequest ?  <div className='absolute bg-white shadow-xl rounded-2xl z-10 right-[-100px] top-[-45px] mt-20 w-[450px] flex flex-col h-[800px] p-5'>
            <div className='w-[100%] h-[100%] flex flex-col gap-8'>

                <div>

                <h1 className='text-[18px] font-sans font-semibold'>{user.user.email} added the product</h1>
               <h1 className='text-[18px] font-sans font-bold'>{userItemState.productName}</h1>
               

                </div>
           
           
               <div className='w-[60%] cursor-pointer h-[25%]'>
               <img className='w-[100%] h-[100%]' src={userItemState.productImg} alt="" />
               <p className='font-sans font-bold text-red-500'>&#8377;{userItemState.price}</p>
               <p>{userItemState.phone}</p>
               </div>

               <Link className='w-[60%] mt-10 flex flex-col gap-3 h-[40%]' to={`/verify`}>
               <img className='w-[100%] h-[100%]' src={userItemState.document} alt="" />
               <p>Click on document to validate</p>
               </Link>

               <div className='mt-5 w-[100%]'>
               <button onClick={HandlerUser} className='w-[50%] h-[50px] rounded-md bg-green-500 text-white font-bold outline-none'>Accept Product</button>

              </div>

            </div>
        
            </div> :""
        }


            <h1 className='text-3xl font-bold my-5 font-sans'>Product <span className='text-orange-500'>details</span></h1>

            <div className='w-[100%] flex flex-col gap-8 min-h-[100%] overflow-auto h-[100%]'>
                 {

                  data.map((item)=>{
                   return <ProductItem
                   key={item.id}
                   id={item.id}
                   productName={item.productName}
                   productImg={item.productImg}
                   price={item.price}
                   category={item.category}
                   phone={item.phone}
                   specs={item.specs}
                   companyName={item.companyName}
                   deleteProductHandler={deleteProductToapp}
            
                   />
                  })
                      
                 }
            </div>
        </div>
                
            </div>


    
        </section>
    
  )
}

export default Dashboard;