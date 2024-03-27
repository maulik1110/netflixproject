import React, { useEffect } from "react";
import Logo from "../assets/netflixlogo.png";
import Profilelogo from "../assets/profilelogo.jpg";
import Signout from "../assets/signoutlogo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlics";



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(store=>store.user)
  const handleSignOut= ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // dispatch(removeUser());
      // navigate("/")

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
    const unscruscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // console.log(user);
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")

      }
    });


    // called when component unmount
    return ()=>unscruscribe()
  }, []);


  return (
    // <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      // <div className={`w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ${location.pathname === '/' ? 'absolute' : ''}`}>
      <div className="w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between absolute">

      <img className="w-44" src={Logo} alt="logo" />

      {
        user && (
      <div className="flex cursor-pointer">
        {/* <img className="w-12 h-12 rounded-md m-1" src={user.photoURL} alt="" /> */}
        {/* <img onClick={handleSignOut} className="w-14 h-14 text-white" src={Signout} alt="" /> */}
        <h2 onClick={handleSignOut} className="w-20 flex items-center font-semibold h-14 text-white">Sign Out</h2>
      </div>
        )
      }
    </div>
  );
};

export default Header;
