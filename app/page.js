import AboutMe from "@/components/aboutme";
import Header from "@/components/header";
import MyHome from "@/components/main";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Header></Header>
      <MyHome></MyHome>
      <AboutMe></AboutMe>
    </div>
  );  
}
