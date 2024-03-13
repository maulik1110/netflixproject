import React, { useState,useRef } from "react";
import Header from "./Header";
// import Bannerimg from "../assets/logo_files/Bannerimg.jpg"
import {checkValidData} from "../utils/validate"

const Loginpage = () => {

  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const toggleSignInForm=()=>{
    setIsSignIn(!isSignIn)
  }

  const handleButtonClick = ()=>{
    //validate from data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const msg = checkValidData(email.current.value,password.current.value)
    // console.log(msg);
    setErrorMessage(msg)
    if(msg) return; // mtlb agar koi msg hua then aage mat jao bcz humne set kara h ki agar galat h then email/pass not valid and agar sahi h then null 
    

    //signin-signup
    if(!isSignIn){ //mtlb signup hai
      //signup logic
      
    }
    else{
      //signin logic

    }
  }

  return (
    <div>
      <Header />
      {/* <img src={Bannerimg} alt="bannerimg" /> */}
      <div className="absolute w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="banner"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="signup text-white rounded-lg px-12 py-5 relative bg-black w-4/12 flex flex-col translate-x-[-50%] translate-y-[30%] top-[50%] left-[50%] bg-opacity-80">
        <h1 className="font-bold text-white text-3xl my-5">{isSignIn ? "Sign In ": "Sign Up"}</h1>
        {!isSignIn && <input className="p-2 my-2 bg-gray-700 rounded w-full" type="text" placeholder="Name" name="" id="nameinput" />}
        <input ref={email} className="p-2 my-2 bg-gray-700 rounded w-full" type="text" placeholder="Email Address" name="" id="emailinput" />
        <input ref={password} className="p-2 my-2 bg-gray-700 rounded w-full" type="password" placeholder="Password" name="" id="passwordinput" />
        <p className="text-center text-red-500 font-normal">{errorMessage}</p>
        <button onClick={handleButtonClick} className="p-2 my-5 rounded w-full bg-red-500" type="submit">{isSignIn ? "Sign In ": "Sign Up"}</button>
        <p className="py-4 cursor-pointer font-medium" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already a user?"}</p>
      </form>
    </div>
  );
};

export default Loginpage;
