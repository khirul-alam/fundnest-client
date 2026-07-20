"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

import Input from "../ui/Input";
import Button from "../ui/Button";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        register={register}
        name="email"
        required
        errors={errors}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register}
        name="password"
        required
        errors={errors}
      />

      <Button>
        Login
      </Button>

      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-blue-600"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;