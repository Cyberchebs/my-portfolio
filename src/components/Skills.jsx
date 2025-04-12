import React from "react";
import cSkill from "../constant.jsx/skillData";
import { motion } from "motion/react";
import { containerVariants } from "../animations/textVariants";
import { itemVariants } from "../animations/textVariants";

const Skills = () => {
  return (
    <div className="mt-30 lg:h-[80vh] " id="mySkills">
      <h2 className="text-5xl">My Skills</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-10 mt-40"
      >
        {cSkill.map(skill => (
          <motion.div key={skill.id} variants={itemVariants}>
            <img src={skill.icon} className="w-[100px] h-[100px]" alt="" />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
