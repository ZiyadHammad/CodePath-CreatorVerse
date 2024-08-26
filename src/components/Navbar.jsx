import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-12 bg-primary py-6 px-8">
        <Link to='/'className="text-white text-xl">CreatorVerse</Link>
      <div className="flex items-center gap-2">
        <Link to='/' className="text-white ">Home</Link>
        <Link to='/add' className="text-white">Add</Link>
      </div>
    </nav>
  )
};

export default Navbar;