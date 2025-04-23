import React from "react";
import projects from "../constant.jsx/projectData";
import { motion } from "motion/react";
import { boxVariants } from "../animations/textVariants";
import { cardVariants } from "../animations/textVariants";

const Projects = () => {
  return (
    <section className="mt-30 lg:h-[80vh] p-5" id="myProjects">
      <h2 className="text-5xl">My Projects</h2>
      <p className="text-4xl">yvjukkmlkmlk</p>
      <motion.div
        variants={boxVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center md:gap-x-5 gap-y-5 items-center mt-30 [perspective:1000px] "
      >
        {projects.map(project => (
          <motion.div
            variants={cardVariants}
            key={project.id}
            className="  p-10 w-[400px] h-[450px] bg-transparent backdrop-blur-md border border-white/20 rounded-lg hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          >
            <div>
              <a target="_blank" href={project.live}>
                <img
                  src={project.image}
                  className=" h-[150px] object-contain"
                  alt=""
                />
              </a>
            </div>
            <div className="text-left flex flex-col gap-y-3">
              <span className="py-3 text-2xl">{project.name}</span>
              <p>{project.description}</p>
              <span>{project.tech}</span>
              <a href={project.github}>
                <button className=" p-2  text-black bg-white rounded-2xl btnhover cursor-pointer">
                  source code
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
