'use client'
import React, { createContext, useContext, useState } from "react";
import CreateAccount from "@/components/CreateAccount";
import WelcomeBack from "@/components/WelcomeBack";
import Login from "@/components/Login";
import HelloFreind from "@/components/HelloFriend";

// Create contexts
const signinContext = createContext();
const showContext = createContext();

export default function Home() {
  // State variables
  const [SignInClicked, setSignInClicked] = useState(false);
  const [SignUpClicked, setSignUpClicked] = useState(false);

  // Handlers
  const SignInHandler = () => {
    setSignInClicked(true);
    setSignUpClicked(false);
  };

  const SignUpHandler = () => {
    setSignInClicked(false);
    setSignUpClicked(true);
  };

  // Render the components based on state
  return (
    <div className="flex">
      <showContext.Provider value={{ SignUpClicked, SignUpHandler }}>
        <signinContext.Provider value={{ SignInClicked, SignInHandler }}>
          {/* Conditional rendering */}
          {SignUpClicked ? (
            <WelcomeBack />
          ) : SignInClicked ? (
            <Login />
          ) : (
            <HelloFreind />
          )}
        </signinContext.Provider>
      </showContext.Provider>
    </div>
  );
}