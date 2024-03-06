import AboutMe from "@/components/aboutme";
import Header from "@/components/header";
import MyHome from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Image from "next/image";
import Connect from "@/components/connect";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div>
      <Header />
      <MyHome />
      <AboutMe />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );  
}
