import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="flex justify-center items-center text-2xl p-8">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4 border-4 border-neutral-500 rounded-2xl">
          <RiReactjsLine className="text-7xl text-cyan-700" />
        </div>
        <div className="p-4 border-4 border-neutral-500 rounded-2xl">
          <TbBrandNextjs className="text-7xl " />
        </div>
        <div className="p-4 border-4 border-neutral-500 rounded-2xl">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="p-4 border-4 border-neutral-500 rounded-2xl">
          <BiLogoPostgresql className="text-7xl text-cyan-700" />
        </div>
        <div className="p-4 border-4 border-neutral-500 rounded-2xl">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>
        <div className="p-4 border-4 border-neutral-500 rounded-2xl">
          <FaJava className="text-7xl text-amber-700 mt" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
