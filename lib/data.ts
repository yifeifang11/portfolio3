import React from "react";
import rabitsImage from "@/public/rabits.png";
import timelessImage from "@/public/taste.png";
import friendsImage from "@/public/friends.png";

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
    title: "Friends Life App",
    description:
      "Attendance tracking system and social media app. Providing accountability for over 225 adults with disabilities and caregivers.",
    tags: ["React Native", "Express.js", "Node.js", "MongoDB", "Firebase"],
    imageUrl: friendsImage,
  },
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