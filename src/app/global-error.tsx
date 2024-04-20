"use client";

import type { Metadata } from "next";
import GenericError from "@components/GenericError";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Error | Whalepop Streaming",
  description: "Something went wrong!",
};

export default function GlobalError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen items-center">
        <GenericError {...props} />
      </body>
    </html>
  );
}
