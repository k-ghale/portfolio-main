import styles from "./style/style";
import Image from "next/image";

const AboutMe =()=>{
    return(
    <div
    id="aboutme"
    className="
    flex
    flex-row
    justify-center
    items-center
    h-screen
    bg-dimWhite">

        {/* AboutME content */}
        <div className="flex flex-row justify-center items-center">
 
        <div className="flex flex-col justify-center items-center p-8" >
            <h2 className="text-[40px] font-poppins font-semibold">I am a Web Developer based in Kathmandu, Nepal</h2>
            <p className="mt-8 p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur distinctio nemo corporis, cum ipsum numquam. Est blanditiis aut cumque illo sapiente sint dolor odio! Numquam ipsum expedita perspiciatis repellat magni.</p>
        </div>

        {/* About me picture */}
        <div className="">
        <img className="border-2" src="/assets/aboutMe.png" alt="me" width={400} height={400}/>
    
        {/* Stats */}
        </div>

        </div>
    </div>
    ) 
}

export default AboutMe;