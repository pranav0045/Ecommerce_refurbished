
import React, { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";
import styled from "styled-components";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
   
  const [contact,setcontact] = useState({
    name:"",  
    email:"",
    area:"",
  })

  const sendEmail = (e) => {
     e.preventDefault();
 const {name,value} = e.target;
     
// setcontact((pre)=>{
  
//   if(name === "user_name"){
//     return{
//       name:value,
//       email:pre.email,
//       area:pre.area,
//     }
//   }

//   else if(name === "user_email"){
//     return{
//       name:pre.name,
//       email:value,
//       area:pre.area,
//     }
//   }
//   else{
//     return{
//       name:pre.name,
//       email:pre.email,
//       area:value,
//     }
//   }
// })
toast.success("feedback received")
emailjs
.sendForm(
  "service_lop1dbj",
  "template_chvip7o",
  form.current,
  "eSiMUDwrFNGVL0-nm"
  )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    
  };


  return (
  <div className="w-full h-[800px] mt-20 bg-[#dadada] flex justify-center">
    <div className="w-[30%] shadow-2xl rounded-lg mt-14 h-[80%] bg-white">
      <form className="w-[100%] flex flex-col ml-5 gap-5 h-[100%]" ref={form} onSubmit={sendEmail}>
      <h1 className="text-center font-sans font-bold text-3xl mt-5 ml-[-40px]">CONTACT <span className="text-orange-500">US</span></h1>
        <label className="text-xl font-sans font-semibold">Name</label>
        <input className="bg-[#f1eded] px-2 w-[90%] h-[8%] rounded-md group-focus-visible:border-orange-500" type="text" name="user_name" placeholder="enter your name"
        // value={contact.name}
        />
        <label className="text-xl font-sans font-semibold">Email</label>
        <input className="bg-[#f4efef] px-2 w-[90%] h-[8%] rounded-md" type="email" name="user_email" placeholder="enter email"
        // value={contact.email}
        />
        <label className="text-xl font-sans font-semibold">Message</label>
        <textarea className="bg-[#ece9e9] p-4 w-[90%] h-[20%] rounded-md" placeholder="enter your feedback" name="message" 
        // value={contact.area}
        />
        <button className="bg-gradient-to-tr from-cyan-400 to-cyan-800 text-white font-sans text-xl font-bold outline-none transition-all active:scale-95 h-[8%] rounded-xl w-[50%]" onClick={sendEmail}>Submit</button>
      </form>

      </div>
    </div>
  );
};

export default Contact;


