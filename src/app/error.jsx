"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold text-red-600">
        Something went wrong!
      </h1>

      <p className="text-gray-600">
        {error?.message || "Unexpected Error"}
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Try Again
      </button>
    </div>
  );
}