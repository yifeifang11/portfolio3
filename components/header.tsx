"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { BsSun } from "react-icons/bs";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border-b dark:border-gray-700 border-gray-300 bg-white dark:bg-gray-950 bg-opacity-50  dark:bg-opacity-30 backdrop-blur-[0.5rem] sm:h-[5.5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 1 }}
      >
        <div className="flex fixed top-[1.9rem]">
          <p className="flex pl-8 font-semibold text-xl cursor-default hover:text-gray-600 dark:hover:text-gray-200">
            Yifei Fang
          </p>
        </div>
        <nav className="flex top-[0.15rem] fixed right-0 py-0 sm:top-[2rem] sm:h-[initial]">
          <ul className="flex gap-8 pr-8">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  className="hover:text-gray-500 font-light transition text-lg focus:outline-none focus:text-gray-500 dark:hover:text-gray-200 dark:focus:text-gray-200"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
