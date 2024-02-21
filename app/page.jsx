import CreateAccount from "@/components/CreateAccount";
import WelcomeBack from "@/components/WelcomeBack";
import Login from "@/components/Login";
import HelloFreind from "@/components/HelloFriend";



export default function Home() {
  
  return (<div className="flex">
   <WelcomeBack />
       <CreateAccount/>
       
 
  </div>);
}