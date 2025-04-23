import React, { useEffect, useState } from "react";
import profilePic from "../assets/chebem.jpg";
import { motion } from "motion/react";

const Header = () => {
  return (
    <section className="flex min-h-[80vh] flex-col md:flex-row md:justify-evenly mt-40 items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profilePic}
          className="w-[300px] rounded-6xl"
          alt="profile-picture"
        />
      </motion.div>
      <div className="flex flex-col gap-5 p-10 md:w-[50%] ">
        <h1 className="text-2xl text-left">
          Hi i'm <br />
          <span className="md:text-6xl text-4xl gradient-text font font-medium typewriter">
            Chebem Nzom
          </span>
        </h1>
        <span className="text-left">
          a Passionate frontend developer crafting clean, responsive, and
          user-friendly web interfaces. Skilled in turning ideas into
          interactive digital experiences using modern tools like React,
          Typescript Tailwind, and JavaScript. Always learning, always building.
        </span>
      </div>
    </section>
  );
};

export default Header;
