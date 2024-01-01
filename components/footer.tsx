import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-24 py-10 dark:bg-white/5">
      <p className="text-sm text-gray-500 mb-1">
        &copy; 2024 Yifei Fang. All rights reserved.
      </p>
      <p className="text-sm text-gray-500">
        Built with React & Next.js, Typescript, Tailwind CSS, and Framer Motion.
        Hosted on Vercel.
      </p>
    </footer>
  );
}
