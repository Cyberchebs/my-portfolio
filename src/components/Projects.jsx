import projects from "../constant.jsx/projectData";
import { motion } from "motion/react";
import { boxVariants } from "../animations/textVariants";
import { cardVariants } from "../animations/textVariants";
import { FaGithub } from "react-icons/fa6";
import Dither from "../animations/Dither";
const Projects = () => {
  return (
    <section className="mt-30 lg:h-auto w-full  relative" id="myProjects">
     <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex:"0" }}>
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>
        <div className="mt-10">
          <h2 className="text-5xl z-10 relative">My projects</h2>
          <p className="mt-5 start-2p relative z-10">here are my gallery of web products</p>
        </div> 
      <motion.div
        variants={boxVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center md:gap-x-5 gap-y-3 p-4 items-center mt-30  [perspective:1000px] "
      >
        {projects.map(project => (
          <motion.div
            variants={cardVariants}
            key={project.id}
            className="  p-8 w-[400px] h-[400px] max-md:w-[350px] flex flex-col bg-transparent backdrop-blur-md border border-white/20 rounded-lg hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          >
            <div>
              <a target="_blank" href={project.live}>
                <img
                  src={project.image}
                  className=" h-[150px] object-contain rounded-xl"
                  alt=""
                />
              </a>
            </div>
            <div className="text-left flex  flex-1 flex-col justify-between gap-y-1 ">
              <span className="py-3 text-2xl max-md:text-xl m-0">{project.name}</span>
              <p className="text-gray-300 max-md:text-xs ">{project.description}</p>
              <span>{project.tech}</span>
              <a href={project.github}>
                <button className="group p-2 text-black  bg-white rounded-2xl btnhover cursor-pointer flex items-center gap-2">
                  source code{" "}
                  <FaGithub className="  text-black group-hover:text-amber-50 text-2xl cursor-pointer transition-colors" />
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
