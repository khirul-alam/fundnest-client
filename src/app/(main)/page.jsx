export const metadata = {
  title: "FundNest | Home",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Welcome to FundNest
        </h1>

        <p className="mt-4 text-gray-600">
          Crowdfunding Platform for Creators & Supporters
        </p>
      </div>
    </main>
  );
}