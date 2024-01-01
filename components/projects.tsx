"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      className="pt-24 dark:bg-white/5 bg-gray-100  scroll-m-[4.5rem]"
      id="projects"
    >
      <motion.h1
        className="text-8xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring" }}
      >
        Projects
      </motion.h1>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="group overflow-hidden border-b border-gray-300 dark:border-gray-700 relative px-28 pb-28 pt-16 mt-20">
      <div className="max-w-[50%] flex flex-col h-full group-odd:ml-[40rem]">
        <motion.h3
          className="text-5xl font-medium mb-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-2xl font-light mb-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
        >
          {description}
        </motion.p>
        <ul className="flex gap-2 flex-wrap mt-auto">
          {tags.map((tag, index) => (
            <motion.li
              className="bg-gray-700 rounded-full px-4 py-2 text-white text-md uppercase tracking-wider"
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", delay: index * 0.1 }}
            >
              {tag}
            </motion.li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-8 -right-40 w-[50rem] rounded-t-lg shadow-2xl group-odd:right-[initial] group-odd:-left-40 group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:-rotate-3 transition group-odd:group-hover:translate-x-6 group-odd:group-hover:rotate-3 group-odd:rotate-[initial] group-hover:scale-[1.04]  dark:opacity-90"
      ></Image>
    </section>
  );
}
