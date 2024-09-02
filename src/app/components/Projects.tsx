"use client";
import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt=""
                width={200}
                height={200}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {project.link && (
                <Link
                  href={project.link}
                  className="mb-4 cursor-pointer text-neutral-400"
                >
                  <span className="mr-2">Visit Project:</span> {project.link}
                </Link>
              )}
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="m-1">
                    <span className="mr-2 m-2  px-2 py-1 text-purple-900 text-sm font-medium rounded bg-neutral-900">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
