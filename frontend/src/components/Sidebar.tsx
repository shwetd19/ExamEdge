import useMediaQuery from "@mui/material/useMediaQuery";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (expanded) {
      const timeout = setTimeout(() => {
        setShowQuestions(true);
      }, 300);
      return () => {
        clearTimeout(timeout);
        setShowQuestions(false);
      };
    }
  }, [expanded]);

  return (
    <div
      // className={`flex flex-col h-full px-2 py-2 overflow-y-auto border-t border-r border-gray-300 transition-all duration-300 ${
      //   expanded && isMobile ? "w-full" : ""
      // }`}
      className={`flex flex-col h-full px-2 py-2 overflow-y-auto border-t border-r border-gray-300 transition-all duration-300`}
      style={{ width: expanded ? (isMobile ? "100%" : "400px") : "56px" }}
    >
      <div
        onClick={() => setExpanded((p) => !p)}
        className="w-8 h-8 p-2 flex justify-center items-center cursor-pointer hover:bg-gray-200 rounded-full"
      >
        <BsLayoutSidebarInset size={18} fill="#444" />
      </div>
      <div className="overflow-y-auto mt-4">
        <div className="items-center transition-all duration-300 cursor-pointer flex mb-4">
          <p
            // className={`w-8 h-8 ${
            //   activeIndex === index
            //     ? "bg-indigo-600 text-white"
            //     : "bg-green-100 text-gray-900"
            // } text-sm rounded-full flex items-center justify-center`}
            className="w-8 h-8 bg-indigo-600 text-white text-sm rounded-full flex items-center justify-center"
          >
            1
          </p>
          {expanded && showQuestions && (
            <p className="pl-4 w-10/12">quiz.title</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
