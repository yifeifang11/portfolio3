"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      className="lg:pt-24 md:pt-12 pt-8 dark:bg-white/5 bg-gray-100  scroll-m-[4.5rem]"
      id="projects"
    >
      <motion.h1
        className="lg:text-8xl md:text-7xl text-4xl font-semibold text-center lg:mb-12 mb-0"
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
    <section className="group overflow-hidden border-b border-gray-300 dark:border-gray-700 relative md:odd:pr-16 md:odd:pl-20 md:px-20 px-10 pb-16 lg:pb-20 xl:px-28 xl:pb-28 pt-16 md:mt-6 lg:mt-20 mt-0">
      <div className="md:max-w-[45%] flex flex-col h-full md:group-odd:ml-[26rem] lg:group-odd:ml-[35rem] md:xl:max-w-[40%]">
        <motion.h3
          className="text-2xl font-medium mb-4 lg:mb-6 xl:mb-8 xl:text-5xl lg:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="md:text-xl text-lg font-light lg:mb-12 md:mb-8 xl:mb-16 xl:text-2xl mb-4"
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
              className="bg-gray-700 rounded-full px-4 py-2 text-white xl:text-md text-sm uppercase tracking-wider"
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
        className="absolute md:block hidden xl:top-8 lg:top-10 md:top-12 top-14 xl:-right-40 lg:-right-64 md:-right-96 -right-80 w-[50rem] rounded-t-lg shadow-2xl group-odd:right-[initial] group-odd:-left-80 xl:group-odd:-left-40 lg:group-odd:-left-60 md:group-odd:-left-96 group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:-rotate-3 transition group-odd:group-hover:translate-x-6 group-odd:group-hover:rotate-3 group-odd:rotate-[initial] group-hover:scale-[1.04]  dark:opacity-90"
      ></Image>
    </section>
  );
}
