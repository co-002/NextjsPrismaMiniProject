"use client";
import React from "react";

function error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <div>{error.message}</div>;
}

export default error;
