import Header from "./header";

const MyHome = () => {
  return(
    <div 
    id="home"
    className="
      flex
      flex-row
      h-screen
    bg-white
    ">
      {/* Introduction or Hero Page Intro */}
        <div className="p-8 h-full flex justify-center items-center w-40%">
          {/* <img src="" alt="" /> */}
          <h1 className="text-8xl font-bold font-poppins">Hello! I am Kabin Ghale</h1>
          {/* <ul>LINKS FOR CONTACT</ul> */}
        </div>

        <div className="flex flex-col items-center justify-center font-poppins font-normal">
          <h3 className="text-4xl py-8 font-poppins font-normal">A Web Developer from Kathmandu, Nepal.</h3><br/>
          <p className="text-l">lorem askdasdas asdas3 fvd </p>
          <span></span>

          <div className="flex flex-row">
            <div className="mt-12 flex justify-center items-center">
            <button className="hover:bg-dimWhite hover:text-black hover:border-black h-12 mr-2 bg-black text-white text-[14px] p-2 w-22 border-2 rounded-md transition">Talk with me</button>
            <button className="hover:bg-dimWhite hover:text-black hover:border-black h-12 text-[14px] p-2 w-22 border-dimWhite border-solid border-2 rounded-md transition">See my Work</button>
            </div>
          </div>
        </div>
    </div>
  ) 
};

export default MyHome;










