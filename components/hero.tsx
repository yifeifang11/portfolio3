"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="h-dvh flex items-center content-center justify-center border-b dark:border-gray-700 border-gray-300 w-full"
      id="home"
    >
      <div className="flex flex-col max-w-[60rem]">
        <motion.h1
          className="lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-50 dark:text-opacity-80 sm:mx-0 mx-2 mt-16 sm:mt-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          Hi! I&apos;m Yifei Fang
        </motion.h1>
        <motion.p
          className="lg:text-3xl md:text-2xl sm:text-xl text-lg lg:mx-0 sm:mx-16 mx-4 font-light text-center sm:mb-12 mb-8 text-gray-800 dark:text-gray-50 dark:text-opacity-80"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
        >
          I am a Computer Science student at{" "}
          <span className="font-normal hover:text-gray-500">
            <a href="https://www.vanderbilt.edu/" target="_blank">
              Vanderbilt University
            </a>
          </span>
          . My work and projects are focused on full-stack development on web
          and mobile. I am currently working with{" "}
          <span className="italic">React Native</span> and{" "}
          <span className="italic">Express.js</span> at a non-profit called{" "}
          <span className="font-normal hover:text-gray-500">
            <a href="https://friendslife.org/" target="_blank">
              Friends Life Community
            </a>
          </span>
          .
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center sm:gap-8 gap-4 lg:text-3xl md:text-2xl sm:text-xl text-lg sm:mx-0 mx-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 dark:hover:bg-gray-800 dark:bg-gray-950 sm:px-8 sm:py-4 px-4 py-2 text-white flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 transition hover:bg-gray-950 active:scale-[102%]"
          >
            Contact me{" "}
            <BsArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
          <a
            href="/Resume7.pdf"
            target="_blank"
            className="bg-white dark:bg-opacity-10 dark:text-white/60 dark:hover:text-white/90 sm:px-8 sm:py-4 px-4 py-2 flex text-gray-800 items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 transition active:scale-[102%] shadow-md hover:text-gray-950"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/yifeifang11/"
            target="_blank"
            className="bg-white sm:p-5 p-3 dark:bg-opacity-10 dark:text-white/60 dark:hover:text-white/90 text-gray-800 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 transition active:scale-[102%] shadow-md hover:text-gray-950"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/yifeifang11"
            target="_blank"
            className="bg-white sm:p-5 p-3 dark:bg-opacity-10 dark:text-white/60 dark:hover:text-white/90 text-gray-800 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 transition active:scale-[102%] shadow-md hover:text-gray-950"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
