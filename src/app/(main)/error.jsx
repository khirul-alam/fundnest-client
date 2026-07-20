"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold">
        Main Layout Error
      </h1>

      <p>{error?.message}</p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Try Again
      </button>
    </div>
  );
}