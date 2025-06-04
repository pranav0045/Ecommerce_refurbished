import React, { useState } from "react";

function Payment() {    
    const [amount, setamount] = useState('');
     const handleSubmit = (e)=>{
      e.preventDefault();
      if(amount === ""){
      alert("please enter amount");
      }else{
        var options = {
          key:"rzp_test_8wuhFnilsGIk8m",
          key_secret:"EQaD7UbmjWJPv7AK03AFa20B",
          amount: amount *100,
          currency:"INR",
          name:"STARTUP_PROJECTS",
          description:"for testing purpose",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name:"Aniket Tagpr",
            email:"aniket.tagor24@gmail.com",
            contact:"9359523343",
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
    }
    return (
      <div className="App">
       <h2>e-commerce website pay</h2>
       <br/>
       <input className="input text-black" type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
       <br/><br/>
       <button onClick={handleSubmit}>submit</button>
      </div>
    );
}

export default Payment;