import React from "react";
import { FaHamburger } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Navbar = ({ setIsTrue, isTrue }) => {
  const makeTrueOrFalse = () => {
    setIsTrue((previousvalue) => !previousvalue);
    console.log("what's the problem");
    console.log(isTrue);
  };
  return (
    <>
      <nav className="p-4">
        <div className="flex  justify-end md:justify-between">
          {/* first div */}
          <div className="hidden md:block">
            <div className="flex gap-2">
              <div className="w-[15px] rounded-lg bg-green-400 h-[15px]"></div>
              <div className="w-[15px] rounded-lg bg-green-400 h-[15px]"></div>
            </div>
          </div>

          {/* for mobile view hamburger */}
          <div
            className={`${isTrue === false ? "block" : "hidden"} md:hidden`}
            onClick={() => makeTrueOrFalse()}
          >
            <FaHamburger className="text-white mr-5 text-2xl cursor-pointer" />
          </div>
          <div
            className={`${isTrue === true ? "block" : "hidden"}  md:hidden`}
            onClick={() => makeTrueOrFalse()}
          >
            <RxCross2 className="text-white text-2xl   mr-5 cursor-pointer" />
          </div>

          {/* second div */}

          <div>
            <a
              href=""
              className="py-2 px-8 hidden md:block bg-green-500 text-white rounded-lg"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
