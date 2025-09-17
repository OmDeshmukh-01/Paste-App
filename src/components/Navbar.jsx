import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] flex justify-center items-center px-6 
      bg-gradient-to-r from-blue-500 via-blue-400 to-blue-800 
      shadow-lg gap-x-10 rounded-b-2xl">
      
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold text-xl border-b-2 border-yellow-300 transition duration-300"
              : "text-gray-100 font-medium text-xl hover:text-yellow-200 transition duration-300"
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
