import { useUI } from "@contexts/ui.context";
import React from "react";

const CustomSearch: React.FC = () => { 
  const { closeSidebar, openSearch } = useUI();
  return (
    <div className="md:hidden relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
        <svg
          className="w-3 h-3 text-gray-600 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        className="min-w-[350px] w-full  px-8 py-2 rounded-lg my-2 bg-gray-100 focus:rounded-none outline-none"
        type="text"
        placeholder="search"
        onClick={() => {
          openSearch(), closeSidebar();
        }}
      />
    </div>
  );
};

export default CustomSearch;
