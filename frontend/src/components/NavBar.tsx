import { Link } from "react-router-dom";
import Logo from "../assets/21.png";

const NavBar = () => {
  return (
    <div className="px-4 sm:px-10 py-4 flex items-center h-[8%]">
      <Link
        to="/"
        className="font-semibold text-gray-888 text-xs sm:text-xl flex items-center"
      >
        <img src={Logo} alt="ExamEdge Logo" className="w-10 h-10 object-fit" />
        <p>ExamEdge</p>
      </Link>

      <div className="ml-auto flex items-center">
        <Link to="/quizes" className="">
          <p className="text-default text-xs sm:text-sm cursor-pointer px-4">
            Quizes
          </p>
        </Link>
        <Link to="/dashboard">
          <p className="text-default text-xs sm:text-sm cursor-pointer px-4">
            Dashboard
          </p>
        </Link>
        {/* <UserButton afterSignOutAllUrl="/" afterSignOutOneUrl="/" /> */}
      </div>
    </div>
  );
};

export default NavBar;
