import React from "react";
import rabitsImage from "@/public/rabits.png";
import timelessImage from "@/public/taste.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Rabits",
    description:
      "A simple habit tracker built with the MERN stack. Users can create an account, create and complete habits, and level up their rabbit. Users can also delete or edit habits, as well as reset their level.",
    tags: ["React", "Express.js", "MongoDB", "Node.js", "JWT"],
    imageUrl: rabitsImage,
  },
  {
    title: "Timeless Taste",
    description:
      "AI recipe generator, tailored for the elderly. Users can create an account to save their dietary preferences and restrictions, then prompt the app to generate a recipe complete with ingredients and instructions.",
    tags: ["React", "Firebase", "ChatGPT Wrapper"],
    imageUrl: timelessImage,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "C++",
  "Framer Motion",
  "Java",
  "Figma",
  "React Native",
  "Firebase",
  "WordPress",
  "PHP"
] as const;