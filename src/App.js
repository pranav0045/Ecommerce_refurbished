import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ProductPage from './components/ProductPage';
import { Navigate, Route,BrowserRouter, Routes, Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Order from './components/Order';
import {ToastContainer,Slide ,Bounce,Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SellerLogin from './components/SellerLogin';
import { productArray } from './utils/api';
import { setProducts, setuserRequest } from './redux/productSlice';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Verifydoc from './components/Verifydoc';
import Footer from './components/Footer';
import Payment from './components/Payment';
import ForgotPassword from './components/ForgotPassword';
// import Google from './components/google';

function App() {
  //dispatching data into redux reducer.
  const dispatch = useDispatch();
  const [userItemState,setuserItemState] = useState({})
  let [myProductArray,setmyProductArray] = useState(productArray);
  const addUserProduct = (userItem) =>{
    setuserItemState(userItem);
      setmyProductArray([...myProductArray,userItem]);
  }
  //delete product from admin page.
    const deleteProduct = ({phone}) =>{
      console.log(phone);
       setmyProductArray(myProductArray.filter((item)=>{
        return item.phone !== phone;
       }))
       dispatch(setuserRequest(false));
    }
  dispatch(setProducts(myProductArray));
  return (
 <BrowserRouter>
  <Navbar />
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/sell' element={<SellerLogin adduserproduct ={addUserProduct} />}/>
        <Route path='/products' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
        <Route path='/admin' element={
          <ProtectedRouteAdmin>
            <Dashboard userItemState={userItemState} deleteProduct={deleteProduct} />
          </ProtectedRouteAdmin>
        } />
        <Route path='/order' element={
        <ProtectedRoute>
          <Order/>
        </ProtectedRoute>
        }/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/productPage/:id' element={<ProductPage />} />
        <Route path='/verify' element={<Verifydoc
        userItemState={userItemState}
        />}/>
      </Routes>
      <Footer/>
      <ToastContainer 
            className="text-xl font-mono mt-20"
            position="top-center"
            autoClose={1000}
            transition={Slide}
            />
      </BrowserRouter>
  );
}
export default App;
//user.
export const ProtectedRoute = ({ children }) => {
  const userData = localStorage.getItem('user')
  if (userData) {
    return children
  }
  else {
    return <Navigate to={"/"} />
  }
}
//protected route for admin.
export const ProtectedRouteAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'));

  if (admin?.user?.email === "dharkarpranav48@gmail.com") {
    return children
  }
  else {
    return <Navigate to={"/"} />

  }
}
