import CreateAccount from "@/components/CreateAccount";
import WelcomeBack from "@/components/WelcomeBack";
import Login from "@/components/Login";
import HelloFreind from "@/components/HelloFriend";
import { AuthProvider, useAuth } from "@/components/AuthContext";



export default function Home() {
  let  { SignInClicked , SignInHandler } =  useContext(signinContext);
  let  { SignUpClicked , SignUpHandler } =  useContext(showContext);
  return (<div className="flex">
      <showContext.Provider >
   <WelcomeBack />
       <CreateAccount/>
       
    </showContext.Provider>
 
  </div>);
}