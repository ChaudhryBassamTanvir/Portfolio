"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

const Technologies = () => {
  const iconVariant: any = (duration: number) => ({
    initial: { y: -20 },
    animate: {
      y: [10, -10], // Wrap the keyframe values in an object
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center items-center text-2xl p-8"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-500 rounded-2xl"
        >
          <RiReactjsLine className="text-7xl text-cyan-700" />
        </motion.div>
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-500 rounded-2xl"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-500 rounded-2xl"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-500 rounded-2xl"
        >
          <BiLogoPostgresql className="text-7xl text-cyan-700" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-500 rounded-2xl"
        >
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>

        <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-500 rounded-2xl"
        >
          <SiTypescript className="text-7xl text-blue-700" />
        </motion.div>

        <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-500 rounded-2xl"
        >
          <RiTailwindCssFill className="text-7xl text-blue-700" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={iconVariant(6)}
        initial="initial"
        animate="animate"
        className="p-4 border-4 border-neutral-500 rounded-2xl"
      >
        <FaJava className="text-7xl text-amber-700" />
      </motion.div>
    </div>
  );
};

export default Technologies;
