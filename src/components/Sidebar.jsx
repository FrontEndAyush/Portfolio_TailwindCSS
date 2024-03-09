import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Sidebar = ({ isTrue }) => {
  return (
    <aside
      className={`py-5 ${
        isTrue == true
          ? "block absolute w-[100vw] mt-3 m-0 p-5 left-0   right-0  h-[100vh] "
          : "hidden"
      } md:block  m-5 w-[200px] rounded-lg bg-[#1C1B23] h-[600px] `}
    >
      <div className=" text-white   flex flex-col px-4">
        <div className="flex  mt-2 hover:text-blue-400">
          <FaGithub className="mt-1 mr-2 text-bg-200" />{" "}
          <a
            href="https://github.com/FrontEndAyush"
            className="cursor-pointer"
            target="blank"
          >
            {" "}
            Github
          </a>
        </div>

        <div className="flex  mt-2 hover:text-blue-400">
          <CiLinkedin className="mt-1 mr-2 text-bg-200" />
          <a
            href="https://www.linkedin.com/in/ayush-jha-b535842ab/"
            className="cursor-pointer"
            target="blank"
          >
            Linkedin
          </a>
        </div>

        <div className="flex mt-2 hover:text-blue-400">
          <FaXTwitter className="mt-1 mr-2 text-bg-200" />
          <a href="">Twitter</a>
        </div>

        <div className="flex mt-2 hover:text-blue-400">
          <FaInstagram className="mt-1  mr-2 text-bg-200" />
          <a href="">Instagram</a>
        </div>
        <div className="flex mt-2 hover:text-blue-400">
          <MdOutlineFileDownload className="mt-1  mr-2 text-bg-200" />
          <a href="">Resume</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
