"use client";

import GenericError from "@components/GenericError";

// @TODO
// Add more specific error types and custom display.

export default function Error(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <GenericError {...props} />;
}
