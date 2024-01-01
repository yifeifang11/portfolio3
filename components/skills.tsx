"use client";

import { skillsData } from "@/lib/data";
import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      className="flex flex-col items-center scroll-m-[4.5rem] py-36 border-b dark:border-gray-700 border-gray-300 w-full"
      id="skills"
    >
      <div className="max-w-[80rem]">
        <motion.h2
          className="text-7xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          Skills
        </motion.h2>
        <ul className="flex flex-wrap gap-x-2 gap-y-3 justify-center">
          {skillsData.map((skill, index) => (
            <motion.li
              className="border border-gray-300 dark:border-gray-700 dark:bg-white/5 bg-white rounded-lg px-6 py-3 text-2xl font-light"
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
