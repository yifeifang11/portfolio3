"use client";

import { skillsData } from "@/lib/data";
import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      className="flex flex-col items-center scroll-m-[4.5rem] md:py-20 py-14 lg:py-36 border-b dark:border-gray-700 border-gray-300 w-full"
      id="skills"
    >
      <div className="md:max-w-[85%]">
        <motion.h2
          className="lg:text-7xl md:text-6xl text-5xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          Skills
        </motion.h2>
        <ul className="flex flex-wrap gap-x-2 gap-y-3 justify-center md:p-0 p-4">
          {skillsData.map((skill, index) => (
            <motion.li
              className="border border-gray-300 dark:border-gray-700 dark:bg-white/5 bg-white rounded-lg md:px-6 md:py-3 px-3 py-2 md:text-2xl text-lg font-light"
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                delay: 0.1 + index * 0.05,
              }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
