import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Login | FundNest",
};

const LoginPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Login to your FundNest account
        </p>

        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;