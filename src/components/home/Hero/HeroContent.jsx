import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-xl">

      <span className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400">
        Trusted Crowdfunding Platform
      </span>

      <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
        Support Great Ideas,
        <br />
        Empower Real Dreams.
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-300">
        FundNest connects passionate creators with generous supporters,
        making fundraising secure, transparent, and impactful.
      </p>

      <HeroButtons />

      <HeroStats />

    </div>
  );
}