import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { database } from "./FirebaseConfig";
// import './ForgotPassword.css'
function ForgotPassword() {
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database, emalVal).then(data => {
            alert("Check your gmail")
            history("/")
        }).catch(err => {
            alert(err.code)
        })
    }
    return (
        <div className="mt-20 w-full h-[800px] bg-[#dadada] flex justify-center px-10" >
            <div className="flex flex-col mt-28 w-[25%] h-[300px] bg-white rounded-md shadow-xl">
                <h1 className="text-center font-sans font-bold my-5 text-3xl">Forgot <span className="text-orange-500">Password</span></h1>
                <form className="w-[100%] flex flex-col items-center h-[100%]" onSubmit={(e) => handleSubmit(e)}>
                    <input className="w-[80%] h-[30%] px-2 outline-none bg-[#ebebeb] rounded-md" name="email" placeholder="Enter your Email ID" /><br /><br />
                    <button className="w-[80%] mt-[-30px] h-[25%] p-3 bg-gradient-to-tr from-cyan-400 to-cyan-800 text-white font-bold rounded-md text-xl">Reset</button>
                </form>
            </div>

        </div>
    )
}
export default ForgotPassword;