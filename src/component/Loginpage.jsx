import React, { useState, useRef } from "react";
import Header from "./Header";
// import Bannerimg from "../assets/logo_files/Bannerimg.jpg"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlics";
import { BG_IMG } from "../utils/constfile";

const Loginpage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    //validate from data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const msg = checkValidData(email.current.value, password.current.value);
    // console.log(msg);
    setErrorMessage(msg);
    if (msg) return; // mtlb agar koi msg hua then aage mat jao bcz humne set kara h ki agar galat h then email/pass not valid and agar sahi h then null

    //signin-signup
    if (!isSignIn) {
      //mtlb signup hai
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://images.unsplash.com/photo-1530107973768-581951e62d34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          })
            .then(() => {
              // Profile updated!
              // ...
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message)
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      {/* <img src={Bannerimg} alt="bannerimg" /> */}
      <div className="absolute w-full h-full">
        <img
          src={BG_IMG}
          alt="banner"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="signup text-white rounded-lg px-12 py-5 relative bg-black w-4/12 flex flex-col translate-x-[-50%] translate-y-[30%] top-[50%] left-[50%] bg-opacity-80"
      >
        <h1 className="font-bold text-white text-3xl my-5">
          {isSignIn ? "Sign In " : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 my-2 bg-gray-700 rounded w-full"
            type="text"
            placeholder="Name"
            name=""
            id="nameinput"
          />
        )}
        <input
          ref={email}
          className="p-2 my-2 bg-gray-700 rounded w-full"
          type="text"
          placeholder="Email Address"
          name=""
          id="emailinput"
        />
        <input
          ref={password}
          className="p-2 my-2 bg-gray-700 rounded w-full"
          type="password"
          placeholder="Password"
          name=""
          id="passwordinput"
        />
        <p className="text-center text-red-500 font-normal">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 my-5 rounded w-full bg-red-500"
          type="submit"
        >
          {isSignIn ? "Sign In " : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer font-medium"
          onClick={toggleSignInForm}
        >
          {isSignIn ? "New to Netflix? Sign Up Now" : "Already a user?"}
        </p>
      </form>
    </div>
  );
};

export default Loginpage;
