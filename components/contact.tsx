"use client";

import React from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="w-full md:p-24 p-8 dark:bg-white/5 bg-gray-100 scroll-m-[4.5rem] dark:border-t dark:border-gray-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 1 }}
    >
      <h1 className="lg:text-7xl md:text-6xl text-5xl font-semibold mb-8">
        Contact
      </h1>
      <p className="lg:text-2xl md:text-xl text-lg font-light">
        Please don&apos;t hesitate to reach out! You can contact me directly at{" "}
        <a
          className="underline focus:outline-none focus:text-gray-500"
          href="mailto:fangy1107@hotmail.com"
        >
          fangy1107@hotmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-16 border dark:bg-gray-950 dark:outline-gray-700 dark:border-gray-700 border-gray-300 rounded-md px-6 md:text-xl text-lg font-light text-gray-900 mb-4 outline-gray-500"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          name="senderEmail"
        />
        <textarea
          className="h-72 border dark:bg-gray-950 dark:outline-gray-700 dark:border-gray-700 border-gray-300 rounded-md md:text-xl text-lg font-light text-gray-900 p-6 outline-gray-500"
          required
          maxLength={2000}
          placeholder="Leave your message here!"
          name="message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
