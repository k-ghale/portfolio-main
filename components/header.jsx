
const Header = () =>(
    <div
      className="
     w-full
     flex
     items-end
     p-4 
     justify-center
     font-poppins
     text-xl
     transition
     "
      >
        <a href="#home" className="mr-6 hover:underline cursor-pointer">logo</a>
        <a href="#project" className="mr-6 hover:underline cursor-pointer">my projects</a>
        <a href="#aboutme" className="mr-6 hover:underline cursor-pointer">about me</a>
        <a href="#contact" className="underline hover:no-underline cursor-pointer">lets connect</a>
      </div>
    );

export default Header;