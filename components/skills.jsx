
import { FaCss3, FaPython, FaReact, FaJava, FaGithub, FaHtml5 } from "react-icons/fa"
import { BiLogoTypescript } from "react-icons/bi"
import { IoLogoJavascript } from "react-icons/io5"
import { SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-full">
        <h2 className=" text-[32px] font-poppins font-semibold p-8 ">here are some of my skills</h2>
        
        {/* Python */}
        <div className="flex flex-row justify-evenly items-center p-8 mt-8">
            <FaPython size={150} />
            <div className="w-[50%] flex flex-col">
                <h3 className="font-poppins text-[32px] font-semibold">Python</h3>
                <p className="max-w-[80%] mt-8 font-poppins text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati alias, maiores nam, officia cupiditate, dolorem provident dolorum odio vel nesciunt doloribus quo est vitae ut in similique laboriosam expedita saepe!</p>
            </div>
        </div>

        {/* Typescript */}
        <div className="flex flex-row justify-evenly items-center p-8 mt-8">
            <BiLogoTypescript size={150} />
            <div className="w-[50%] flex flex-col">
                <h3 className="font-poppins text-[32px] font-semibold">Typescript</h3>
                <p className="max-w-[80%] mt-8 font-poppins text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati alias, maiores nam, officia cupiditate, dolorem provident dolorum odio vel nesciunt doloribus quo est vitae ut in similique laboriosam expedita saepe!</p>
            </div>
        </div>

        {/* React */}
        <div className="flex flex-row justify-evenly items-center p-8 mt-8">
            <FaReact size={150} />
            <div className="w-[50%] flex flex-col">
                <h3 className="font-poppins text-[32px] font-semibold">React</h3>
                <p className="max-w-[80%] mt-8 font-poppins text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati alias, maiores nam, officia cupiditate, dolorem provident dolorum odio vel nesciunt doloribus quo est vitae ut in similique laboriosam expedita saepe!</p>
            </div>
        </div>

        {/* Javascript */}
        <div className="flex flex-row justify-evenly items-center p-8 mt-8">
            <IoLogoJavascript size={150} />
            <div className="w-[50%] flex flex-col">
                <h3 className="font-poppins text-[32px] font-semibold">Javascript</h3>
                <p className="max-w-[80%] mt-8 font-poppins text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati alias, maiores nam, officia cupiditate, dolorem provident dolorum odio vel nesciunt doloribus quo est vitae ut in similique laboriosam expedita saepe!</p>
            </div>
        </div>

        {/* Github */} 
        <div className="flex flex-row justify-evenly items-center p-8 mt-8">
            <FaGithub size={150} />
            <div className="w-[50%] flex flex-col">
                <h3 className="font-poppins text-[32px] font-semibold">Github</h3>
                <p className="max-w-[80%] mt-8 font-poppins text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati alias, maiores nam, officia cupiditate, dolorem provident dolorum odio vel nesciunt doloribus quo est vitae ut in similique laboriosam expedita saepe!</p>
            </div>
        </div>

        {/* Java */}
        <div className="flex flex-row justify-evenly items-center p-8 mt-8">
            <FaJava size={150} />
            <div className="w-[50%] flex flex-col">
                <h3 className="font-poppins text-[32px] font-semibold">Java</h3>
                <p className="max-w-[80%] mt-8 font-poppins text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati alias, maiores nam, officia cupiditate, dolorem provident dolorum odio vel nesciunt doloribus quo est vitae ut in similique laboriosam expedita saepe!</p>
            </div>
        </div>

        {/* HTML */}
        <div className="flex flex-row justify-evenly items-center p-8 mt-8">
            <FaHtml5 size={150} />
            <div className="w-[50%] flex flex-col">
                <h3 className="font-poppins text-[32px] font-semibold">HTML</h3>
                <p className="max-w-[80%] mt-8 font-poppins text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati alias, maiores nam, officia cupiditate, dolorem provident dolorum odio vel nesciunt doloribus quo est vitae ut in similique laboriosam expedita saepe!</p>
            </div>
        </div>

        {/* CSS */}
        <div className="flex flex-row justify-evenly items-center p-8 mt-8">
            <FaCss3 size={150} />
            <div className="w-[50%] flex flex-col">
                <h3 className="font-poppins text-[32px] font-semibold">CSS</h3>
                <p className="max-w-[80%] mt-8 font-poppins text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati alias, maiores nam, officia cupiditate, dolorem provident dolorum odio vel nesciunt doloribus quo est vitae ut in similique laboriosam expedita saepe!</p>
            </div>
        </div>

        {/* Tailwind */}
        <div className="flex flex-row justify-evenly items-center p-8 mt-8">
            <SiTailwindcss size={150} />
            <div className="w-[50%] flex flex-col">
                <h3 className="font-poppins text-[32px] font-semibold">Tailwind CSS</h3>
                <p className="max-w-[80%] mt-8 font-poppins text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati alias, maiores nam, officia cupiditate, dolorem provident dolorum odio vel nesciunt doloribus quo est vitae ut in similique laboriosam expedita saepe!</p>
            </div>
        </div>

        {/* API */}
        <div className="flex flex-row justify-evenly items-center p-8 mt-8">
            <TbApi size={150} />
            <div className="w-[50%] flex flex-col">
                <h3 className="font-poppins text-[32px] font-semibold">API</h3>
                <p className="max-w-[80%] mt-8 font-poppins text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati alias, maiores nam, officia cupiditate, dolorem provident dolorum odio vel nesciunt doloribus quo est vitae ut in similique laboriosam expedita saepe!</p>
            </div>
        </div>

        {/* Skills end line */}
        <p className="mt-10 text-2xl font-poppins font-semibold flex justify-center items-center">I enjoy learning more skills and knowledge</p>

    </div>


    // <div id="skills" className="w-full h-screen  flex justify-center flex-col items-center bg-dark text-white">
    //   <h1 className="text-center font-bold font-mono text-6xl">SKILLS</h1>
    //   <div className="w-full h-1/2 flex justify-center bg-red-50 text-center mt-20">

    //     <div className="w-9/12 flex flex-row items-center">

    //       <div className="w-1/4 h-3/4 flex flex-col items-center gap-4 border-grey .border-solid border-l-4">
    //         <div className="rounded-full bg-wedding h-full w-1/3 flex items-center justify-center p-2">
    //           <IoLogoJavascript size='100' className='text-dark' />
    //         </div>
    //         <h2 className="font-mono font-bold">JavaScript</h2>
    //         <p className="p-2 text-sm font-serif w-auto h-1/2">
    //           I am fluent in the language of the web , leveraging JavaScript to breathe life into static websites . I thirve on turning ideas into functional, responsive, and user friednly solutions.
    //         </p>
    //       </div>
    //       <div className="w-1/4 h-3/4 flex flex-col items-center gap-4 border-grey .border-solid border-l-4">
    //         <div className="rounded-full bg-wedding h-full w-1/3 flex items-center justify-center p-2">
    //           <FaPython size='100' className='text-dark' />
    //         </div>
    //         <h2 className="font-mono font-bold">Python</h2>
    //         <p className="p-2 text-sm font-serif w-auto h-1/2">
    //           With a strong foundation in Python, I tackle complex challenges with elegance and effieciency. From backend to data analysis, I harness the power of python to build robust and scalable aplications.
    //         </p>
    //       </div>
    //       <div className="w-1/4 h-3/4 flex flex-col items-center gap-4 border-grey .border-solid border-r-4 border-l-4">
    //         <div className="rounded-full bg-wedding h-full w-1/3 flex items-center justify-center p-2">
    //           <FaReact size='100' className='text-dark' />
    //         </div>
    //         <h2 className="font-mono font-bold">ReactJS</h2>
    //         <p className="p-2 text-sm font-serif">
    //           As a seasoned developer, my proficiency in ReactJS allows me to create dynamic, responsive, feature-rich user interface with visaully stunning and highly functional interfaces that leave a lasting impression.
    //         </p>
    //       </div>
    //       <div className="w-1/4 h-3/4 flex flex-col items-center gap-4 border-grey .border-solid border-r-4">
    //         <div className="rounded-full bg-wedding h-full w-1/3 flex items-center justify-center p-2">
    //           <BiLogoTypescript size='100' className='text-dark' />
    //         </div>
    //         <h2 className="font-mono font-bold">TypeScript</h2>
    //         <p className="p-2 text-sm font-serif w-auto h-1/2">
    //           As a developer who values both effieciency and maintainability, TypeScript has become a indispensable tool in my coding journey . It introduces static typing to JavaScript, providing a safety net during development.
    //         </p>
    //       </div>




    //     </div>

    //   </div>

    // </div>
  )
}

export default Skills