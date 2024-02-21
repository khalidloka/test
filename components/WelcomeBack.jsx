'use client'
import React, { useState } from "react";





export default  function WelcomeBack() {

  const [SignInClicked, setSignInClicked] = useState(false);

 
  return (
      <div className="flex justify-center items-center h-[100vh] w-[45vw] bg-[#7919F7]">
        <div>
          <h1 className="flex justify-center text-white font-extrabold text-4xl ml-4 my-12">
            Welcome Back !!!
          </h1>
          <h2 className="flex justify-center text-gray-400 text-xl mb-20">
            To stay in touch with us ,kindly sign in <br />
            using your personal details
          </h2>
          <div className="flex justify-center">
            <h2
              className="flex justify-center items-center text-white font-semibold border-4 border-white rounded-full text-2xl h-14 w-56 hover:bg-white hover:text-[#7919F7] hover:"
             
            >
              Sign In
            </h2>
          </div>
        </div>
      </div>
  );
}