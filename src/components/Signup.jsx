import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import {  signInWithPopup,signOut } from 'firebase/auth'
import { auth, fireDB ,googleProvider} from './FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from './Loader';
import {toast} from 'react-toastify';

function Signup() {

    const [name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword]=useState("");
    const [loading,setloading] = useState(false); //for creating a loader.



    const signup = async() =>{
        console.log(name,Email,Password); 

        if(name===""|| Email===""|| Password===""){

           return toast.error("All fields are mandatory");
        }

        try {
        //creating user.
        const users = await createUserWithEmailAndPassword(auth,Email,Password); //create a user with various fields.
        console.log(users);

        //creating a user object to store inside firestore D/B.
        const user = {
          name:name,
          uid:users.user.uid,
          Email:users.user.email,
          time:Timestamp.now(),
        }
        const userRef = collection(fireDB,"users"); //will create a reference of user.
        setloading("true");
        await addDoc(userRef,user);
        toast.success("signed up sucessfully");
        setName("");
        setEmail("");
        setPassword("");
        setloading(false);

        } catch (error) {
            console.log(error);
            setloading(false);
            toast.error("signed up failed");
        }
    }
    const navigate = useNavigate();
    const singinwithgoogle = async () => {
        try
        {
        await signInWithPopup(auth,googleProvider)
        }
        catch(err)
        {
            console.error(err);
        }
        navigate("/Login")
    };
   
    return (
        <div className ='bg-[#dadada] flex justify-center items-center h-screen'>
            {loading && <Loader/>}
            <div className='w-[23%] flex flex-col gap-4 h-[50%] bg-white
            shadow-xl px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-3xl mb-4 font-bold'>Sign<span className='text-orange-500'>up</span></h1>
                </div>

                <div>
                    <input type="text"
                        name='name'
                        className=' bg-[#e1e0e0] mb-4 px-2 py-2 w-full lg:w-full h-[100%] rounded-lg text-white placeholder:text-gray-800 outline-none'
                        placeholder='Name'
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                </div>
                <div>
                    <input type="email"
                        name='email'
                        className=' bg-[#e1e0e0] mb-4 px-2 py-2 w-[10%] lg:w-full h-[100%] rounded-lg text-white placeholder:text-gray-800 outline-none'
                        placeholder='Email'
                        value={Email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className=' bg-[#e1e0e0] mb-4 px-2 py-2 w-full lg:w-full h-[100%] rounded-lg text-white placeholder:text-gray-800 outline-none'
                        placeholder='Password'
                        value={Password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={signup}                         
                        className=' bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                {/* <h1>OR</h1>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={singinwithgoogle}                         
                        className=' bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg'>
                        Sign in with Google 
                    </button>
                </div> */}
                <div>
                    <h2 className=''>Have an account <Link className=' text-red-500 font-bold' to={'/'}>Login</Link></h2>
                </div>
            </div>


        </div>
    )
}

export default Signup;



