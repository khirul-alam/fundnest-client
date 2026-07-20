"use client";

const Button = ({
  children,
  type = "submit",
  loading = false,
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold transition hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
};

export default Button;