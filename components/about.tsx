"use client";

import React from "react";
import Image from "next/image";
import pfp from "@/public/me.jpeg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="flex border-b border-gray-300 dark:border-gray-700 scroll-m-[4.5rem]"
      id="about"
    >
      <div className="border-r dark:border-gray-800 border-gray-300 p-16">
        <motion.h1
          className="text-7xl font-semibold mb-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-md font-light mb-4 lg:text-xl xl:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
        >
          I love to write—about anything, really. To find a place to post my
          writing, I wanted to create a blog website, which led me to the
          wonderful world of web development. I have been gaining experience
          with full-stack development, starting off with learning React and
          integrating backend features into my projects and work. My current
          work is focused on React Native and Express.js, and I am working with
          a non-profit called Friends Life Community. I am also using Next.js in
          my projects. I am now looking for a summer 2024 internship to make an
          impact with my skills.
        </motion.p>
        <motion.p
          className="text-md font-light lg:text-xl xl:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
        >
          In my free time, I enjoy playing table tennis, reading philosophy,
          watching anime, and hiking.
        </motion.p>
      </div>
      <motion.div
        className="p-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
      >
        <Image
          src={pfp}
          alt=""
          quality={95}
          className="h-full w-full object-cover dark:opacity-90"
        />
      </motion.div>
    </section>
  );
}
