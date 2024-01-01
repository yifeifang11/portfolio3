import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 md:px-24 px-8 md:py-10 py-6 dark:bg-white/5">
      <p className="md:text-sm text-xs text-gray-500 mb-1">
        &copy; 2024 Yifei Fang. All rights reserved.
      </p>
      <p className="md:text-sm text-xs text-gray-500">
        Built with React & Next.js, Typescript, Tailwind CSS, and Framer Motion.
        Hosted on Vercel.
      </p>
    </footer>
  );
}
