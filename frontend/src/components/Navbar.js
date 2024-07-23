import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white">
      <div className="mx-4">
        <Link to="/">
          <img src={logo} alt="logo" width={100} className="cursor-pointer" />
        </Link>
      </div>
      <ul className="flex justify-between items-center gap-5 mx-5 font-bold">
        <Link to="/">
          <li className="cursor-pointer hover:bg-slate-400 px-4 py-4">Home</li>
        </Link>
        <Link to='/about'>
          <li className="cursor-pointer hover:bg-slate-400 px-4 py-4">About</li>
        </Link>
        <Link to='assignments'>
          <li className="cursor-pointer hover:bg-slate-400 px-4 py-4">Assignments
          </li>
        </Link>
        <Link to='/contact'>
          <li className="cursor-pointer hover:bg-slate-400 px-4 py-4">Contact</li>
        </Link>

        
        <li className="cursor-pointer">
          <Link to="/register">
            <button className="px-10 py-2 border-solid bg-black text-white rounded-xl hover:text-black hover:bg-gray-100 hover:border-1 hover:border-gray-200">
              Register
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
