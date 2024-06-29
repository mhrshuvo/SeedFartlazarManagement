import React, { useEffect, useRef } from "react";
import { RiCloseLine } from "react-icons/ri";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeChart: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40"></div>}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] lg:w-[500px] bg-white text-black p-4 z-50 transform transition-all duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">KiPorbo Size Chart</h2>
          <button className="focus:outline-none" onClick={onClose}>
            <RiCloseLine className="text-black text-2xl" />
          </button>
        </div>
        <p>
          <img src="/assets/images/sizeChart/size-chart.png" alt="" />
        </p>
      </div>
    </>
  );
};

export default SizeChart;
