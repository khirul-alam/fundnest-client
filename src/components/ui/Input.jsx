"use client";

const Input = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  required = false,
  errors,
}) => {
  return (
    <div className="space-y-2">
      <label className="font-medium text-sm">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: required ? `${label} is required` : false,
        })}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      />

      {errors?.[name] && (
        <p className="text-red-500 text-sm">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default Input;