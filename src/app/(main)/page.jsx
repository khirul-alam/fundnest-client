import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Trusted Crowdfunding Platform
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              Turn Your
              <span className="text-blue-600"> Ideas </span>
              Into Reality
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              FundNest helps creators raise funds from supporters around
              the world. Start a campaign, collect contributions,
              and make your dream project successful.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/dashboard/creator/add-campaign"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Start Campaign
              </Link>

              <Link
                href="/explore"
                className="rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Explore Campaigns
              </Link>
            </div>

            {/* Statistics */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-blue-600">500+</h2>
                <p className="text-gray-600">Campaigns</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">12K+</h2>
                <p className="text-gray-600">Supporters</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">$2M+</h2>
                <p className="text-gray-600">Raised</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
              alt="Crowdfunding"
              className="w-full max-w-xl rounded-3xl shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-6 rounded-2xl bg-white p-6 shadow-xl">
              <h3 className="font-bold text-gray-900">
                Current Campaign
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Smart Agriculture Project
              </p>

              <div className="mt-4 h-3 w-56 rounded-full bg-gray-200">
                <div className="h-3 w-3/4 rounded-full bg-blue-600"></div>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span>$75,000 Raised</span>
                <span>75%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}