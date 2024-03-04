
const Header = () =>{
    return (
      <nav
        className="
     w-full
     flex
     justify-evenly
     items-center 
     p-4 
     font-sans
     font-semibold 
     text-xl
     sticky
     top-0
     bg-neutral-500
     h-12
     "
      >
        <a href="#home" className="hover:underline cursor-pointer">logo</a>
        <a href="#project" className="hover:underline cursor-pointer">my projects</a>
        <a href="#aboutme" className="hover:underline cursor-pointer">about me</a>
        <a href="#contact" className="underline hover:no-underline cursor-pointer">lets connect</a>
      </nav>
    );
}

export default Header;