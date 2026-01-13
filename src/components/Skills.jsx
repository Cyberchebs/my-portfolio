import cSkill from "../constant.jsx/skillData";
import { motion } from "motion/react";
import { containerVariants } from "../animations/textVariants";
import { itemVariants } from "../animations/textVariants";

const Skills = () => {
  return (
    <div className="mt-30 lg:h-auto " id="mySkills">
      <h2 className="text-5xl">My tools</h2>
      <p className="mt-5 start-2p text-xs relative z-10">My main tech stacks</p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap p-10 gap-6 items-center py-20 justify-center"
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
