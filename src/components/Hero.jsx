import React from "react";
import { FaGithub } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="py-3  w-10/12 ">
      {/* first div for the profile image and github link */}
      <div className="flex w-[90vw] md:w-full   ml-6 md:ml-0 justify-center md:justify-between mt-3    border p-5 rounded-lg ">
        <div>
          <img src="/images/profile.png" className="w-[100px]" alt="" />
        </div>
        <div className="hidden md:block">
          <div className="flex hover:text-blue-300 border-2 h-[40px] px-10 rounded-lg py-2 mt-4 ">
            <FaGithub className="text-white mt-1 mr-1" />{" "}
            <a
              href="https://github.com/FrontEndAyush"
              className="text-white cursor-pointer"
              target="blank"
            >
              {" "}
              Github
            </a>
          </div>
        </div>
      </div>

      {/* project div */}
      <div className="flex  flex-wrap">
        

        <div>
          <div className="px-5">
            <h1 className="text-white text-2xl font-semibold uppercase px-5 py-2">
              Project
            </h1>
            <a
              href="https://github.com/FrontEndAyush/Electronice-commerce"
              target="blank"
              className="border-2 block rounded-lg p-5 w-[90vw]  cursor-pointer md:w-[350px] "
            >
              <img
                src="/images/project.PNG"
                className="w-[450px] mb-2"
                alt=""
              />
              <p className="text-white">
                HTML, Tailwind CSS, Javascript, React Js, Redux, React Router
                Dom, Material UI.
              </p>
              <a href="">Go to Website</a>
            </a>
          </div>
        </div>
      </div>

      {/* skills div */}
      <div className="px-5">
          <h1 className="text-white text-2xl font-semibold uppercase px-5 py-2">
            Skills
          </h1>
          <div className=" rounded-lg p-3 w-[90vw]  md:w-[58vw] flex flex-wrap gap-3 md:gap-4  ">
            <button className="border text-white px-4 py-2">HTML</button>
            <button className="border text-white px-4 py-2">CSS</button>
            <button className="border text-white px-4 py-2">
              TAILWIND CSS
            </button>
            <button className="border text-white px-4 py-2">JAVASCRIPT</button>
            <button className="border text-white px-4 py-2">REACT JS</button>
            <button className="border text-white px-4 py-2">GIT </button>
            <button className="border text-white px-4 py-2">GITHUB </button>
          </div>
        </div>
    </section>
  );
};

export default Hero;
