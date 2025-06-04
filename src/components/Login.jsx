import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, database,googleProvider } from "./FirebaseConfig";
import Loader from "./Loader";
import {  signInWithPopup,signOut } from 'firebase/auth'
import { toast } from "react-toastify";
import ForgotPassword from "./ForgotPassword";
import { sendPasswordResetEmail } from "firebase/auth";
import styled from "styled-components";
import Home from "./Home";
function Login() {
  const [loading, setloading] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      setloading(true);
      const result = await signInWithEmailAndPassword(auth, Email, Password);
      console.log(result);
      toast.success("login successfully");
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/home");
      setloading(false);
    } catch (error) {
      console.log(error);
      toast.error("login failed!");
      setloading(false);
    }
  };
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);


  const singinwithgoogle = async () => {
    try
    {
    await signInWithPopup(auth,googleProvider)
    }
    catch(err)
    {
        console.error(err);
    }
    navigate("/Home")
};

  return (
    <div className="bg-[#dadada] w-[full] flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className="w-[23%] h-[48%] shadow-lg bg-white px-10 py-10 rounded-md flex flex-col gap-4 ">
        <div className="">
          <h1 className="text-center text-3xl mb-4 font-bold">
            Sign<span className="text-orange-500">in</span>           </h1>
        </div>
        <div className="w-full">
          <input
            type="email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            className=" bg-[#dadada] mb-4 px-2 py-2  lg:w-full rounded-lg placeholder:text-gray-800 outline-none h-[100%]"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=" bg-[#dadada] mb-4 px-2 py-2 w-full lg:w-full rounded-lg placeholder:text-gray-800 outline-none h-[100%]"
            placeholder="Password"
          />
        </div>
       

        <p className="">
            forgot Password { " "}
            <span>
              <Link to="/Forgotpassword">click Here</Link>
            </span>
          </p>
        <div className="h-[20%] flex justify-center mb-3">
          <button
            onClick={login}
            className=" bg-gradient-to-tr from-cyan-400 to-cyan-800 w-full text-white  font-bold  px-2 py-2 rounded-lg h-[100%]"
          >
            Login
          </button>
        </div>

        
        <div>
          <h2 className="">
            Don't have an account{" "}
            <Link className=" text-orange-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;

const StyledContactForm = styled.div`
  input {
    height: 60px;
    width: 100%;
    margin-top: 10px;
    padding: 20px;
  }
  body {
  }
`;
