
import { UserRound } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { Mail } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";

export default function CreateAccount() {
  
  return (
    <div className="flex justify-center items-center w-[55vw] h-[100vh] bg-white">
      <div>
        <div className="flex justify-center text-[#7919F7] text-5xl font-bold mb-16 ">
          Create Account
        </div>
        <form action="">
          <div className="flex  justify-start ">
            <UserRound className="text-[#7919F7] absolute mt-4 ml-2" />
            <input
              type="text"
              placeholder="Name"
              className="h-[8vh] w-[30vw] bg-slate-300 pl-12 mb-5 font-medium text-lg placeholder-violet-600  placeholder-opacity-60"
            />
          </div>
          <div className="flex  justify-start ">
            <Mail className="text-[#7919F7] absolute mt-4 ml-2" />
            <input
              type="email"
              placeholder="Email"
              className="h-[8vh] w-[30vw] bg-slate-300 pl-12 mb-5 font-medium placeholder-violet-600  placeholder-opacity-60 text-xl"
            />
          </div>
          <div className="flex  justify-start ">
            <LockKeyhole className="text-[#7919F7] absolute mt-4 ml-2" />
            <input
              type="password"
              placeholder="Password"
              className="h-[8vh] w-[30vw] bg-slate-300 pl-12 font-medium text-lg mb-5 placeholder-violet-600  placeholder-opacity-60"
            />
          </div>
        </form>
        <div className="flex justify-center text-violet-700 text-base text-opacity-60 font-semibold mb-6">
          Or use Social Media
        </div>
        <div className="h-[10vh] flex justify-center items-center mb-6">
          <Facebook className="size-14 hover:text-purple-600 ml-12" />
          <Instagram className="size-14 hover:text-purple-600 ml-12" />
          <Twitter className="size-14 hover:text-purple-600 ml-12" />
        </div>
        <div className="flex justify-center">
          <h2 className="flex justify-center items-center  font-semibold border-2 border-[#7919F7]  rounded-full text-2xl h-14 w-56 hover:bg-[#7919F7] hover:text-white text-[#7919F7] ">
            Sign Up
          </h2>
        </div>
      </div>
    </div>
  );
}



