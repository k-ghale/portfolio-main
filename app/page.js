import AboutMe from "@/components/aboutme";
import Header from "@/components/header";
import MyHome from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Header />
      <MyHome />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );  
}
