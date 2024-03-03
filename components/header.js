
const Header = () =>{
    return (
      <div
        className="
     w-full
     flex
     justify-evenly 
     p-4 
     font-sans
     font-semibold 
     text-xl
     "
      >
        <a id="#home" className="hover:underline cursor-pointer">logo</a>
        <a id="#project" className="hover:underline cursor-pointer">my projects</a>
        <a id="#aboutme" className="hover:underline cursor-pointer">about me</a>
        <a id="#contact" className="underline hover:no-underline cursor-pointer">lets connect</a>
      </div>
    );
}

export default Header;