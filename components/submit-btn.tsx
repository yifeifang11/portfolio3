import React from "react";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        typeof="submit"
        className="group md:text-2xl text-lg dark:bg-white/5 dark:hover:bg-gray-800 bg-gray-900 lg:px-8 lg:py-4 px-6 py-3 mt-8 text-white mr-auto items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 transition hover:bg-gray-950 active:scale-[102%] disabled:scale-100 disabled:bg-opacity-75"
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
}
