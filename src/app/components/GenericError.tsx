"use client";

import { useEffect } from "react";

export default function GenericError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // @TODO Replace `console` loggers with proper logger service.
    console.error(error);
  }, [error]);

  return (
    <div className="w-full grow flex flex-col items-center justify-center">
      <h2 className="text-xl">Something went wrong!</h2>
      <button
        className="rounded-lg border-2 mt-4 px-4 py-2 hover:opacity-80"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
