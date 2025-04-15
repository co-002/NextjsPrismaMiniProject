"use client"
import React from "react";

function error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <div>{error.message}</div>;
}

export default error;
