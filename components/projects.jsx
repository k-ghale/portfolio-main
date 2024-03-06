import { GoProject } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {
  return (
    <div id="project" className="w-full h-full mt-10 p-12 bg-dimWhite">
    
    <h2 className="font-poppins text-3xl font-semibold mb-12">My Past Projects</h2>

   {/* Row 1  */}
    <div className="flex flex-row">


    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center items-center rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProject size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer">Library System</a>
        <span className="text-[12px] text-neutral-400">16 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>

    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center items-center rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProjectSymlink size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer">DOM Manupulation</a>
        <span className="text-[12px] text-neutral-400">16 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>
  </div>

{/* Row 2     */}
    <div className="flex flex-row">

    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center items-center rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProject size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer">Restaurant Website</a>
        <span className="text-[12px] text-neutral-400">16 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>

    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center items-center rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProjectSymlink size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer">Advance JS</a>
        <span className="text-[12px] text-neutral-400">16 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>
  </div>

    {/* Row 3  */}
    <div className="flex flex-row">

    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center items-center rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProject size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer">Portfolio Project</a>
        <span className="text-[12px] text-neutral-400">16 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>

    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center items-center rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProjectSymlink size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer">php</a>
        <span className="text-[12px] text-neutral-400">16 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Projects