"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState("website");

  const filteredProjects = projects.filter((item) => item.type === activeTab);

  return (
    <div className="py-20">

       <h1 className="heading">
         Recent
        <span className="text-purple"> Projects</span>
      </h1>
      {/* <h1 className="heading">
        <span className="text-purple">Recent projects</span>
      </h1> */}

      {/* TABS */}
      {/* TABS */}
      <div className="flex justify-center mt-10">
        <div className="relative flex bg-[#1A1A1A] rounded-full p-1 w-[260px] overflow-hidden">
          {/* Sliding Background */}
          <div
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-purple transition-all duration-300 ${
              activeTab === "game" ? "left-[calc(50%)]" : "left-[5px]"
            }`}
          />

          {/* Website Tab */}
          <button
            onClick={() => setActiveTab("website")}
            className={`relative z-10 flex-1 h-[40px] rounded-full text-sm font-medium transition ${
              activeTab === "website" ? "text-black" : "text-white"
            }`}
          >
            Websites
          </button>

          {/* Game Tab */}
          <button
            onClick={() => setActiveTab("game")}
            className={`relative z-10 flex-1 h-[40px] rounded-full text-sm font-medium transition ${
              activeTab === "game" ? "text-black" : "text-white"
            }`}
          >
            Games
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
        {filteredProjects.map((item) => (
          <div key={item.id} className="w-full">
            <PinContainer containerClassName="w-full" className="w-full">
              <div className="relative w-full h-[220px] mb-6 overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-fit-cover "
                />
              </div>

              <h1 className="font-bold text-lg lg:text-xl line-clamp-1">
                {item.title}
              </h1>

              <p className="text-sm text-[#BEC1DD] mt-2 line-clamp-4">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-1" />
                    </div>
                  ))}
                </div>

                {/* CLICKABLE LINK */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple hover:underline"
                >
                  Check Live
                  <FaLocationArrow className="ml-2" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
