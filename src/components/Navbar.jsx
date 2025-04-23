import React from "react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-20 w-[90%] fixed  mt-7 rounded-b-xl  z-50 backdrop-blur-xl bg-transparent border-b border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] text-white flex items-center justify-between px-8"
    >
      <div className="text-xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
        Chebem
      </div>
      <ul className="space-x-6 text-sm font-medium hidden md:flex">
        <li className=" cursor-pointer">
          <a href="#mySkills"> my skills</a>
        </li>
        <li className=" cursor-pointer">
          <a href="#myProjects">projects</a>
        </li>
        <li className="transition cursor-pointer">
          <a href="#contact_me">contact me</a>
        </li>
      </ul>
      <div className="flex items-center space-x-4 text-2xl">
        <a
          href="https://twitter.com/theNigeriandev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="hover:text-amber-300 transition cursor-pointer" />
        </a>
        <a
          href="https://github.com/Cyberchebs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-amber-300 transition cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/chebem-nzom-1921b8256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-amber-300 transition cursor-pointer" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
